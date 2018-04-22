/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

const containers = require('./container');
const getOS = require('./helper').getOS;
const merge = require('./helper').merge;

const getCurrTime = () => (new Date()).getTime();

window.__OS = getOS();

if (window.__OS == "WEB") {
  window.Android = require("./WEB/AndroidInterface");;
  window.JBridge = require("./WEB/JBridgeInterface");;
} else if (window.__OS == "IOS") {
  window.Android = require("./IOS/AndroidInterface");
  window.JBridge = merge(window.JBridge, {});
}

window.__ENV = 0;

const getScreenDetails = () => {
  try {
    let details = JSON.parse(Android.getScreenDimensions());
    return {
      screen_width: details.width + "",
      screen_height: details.height + ""
    };
  } catch (err) {
    console.error(
      "error in gettting screen dimensions, setting default values", err);
    return {
      screen_width: "720",
      screen_height: "1920"
    };
  }
};

if (!window.__ENV) {
  window.__DEVICE_DETAILS = getScreenDetails();
}

window.callJSCallback = require("./helpers").android.callbackMapper.callJSCallback;
window.__WIDTH = window.__DEVICE_DETAILS.screen_width;
window.__HEIGHT = window.__DEVICE_DETAILS.screen_height;
window.__ID = 1;
window.__NODE_ID = 1;
window.__SCREEN_INDEX = -1;
window.__IOS_VIEWS = {};
window.__COLOR_INDEX = window.__COLOR_INDEX || 1;
window.__FONT_INDEX = window.__FONT_INDEX || 1;
window.__RECT_INDEX = window.RECT_INDEX || 1;
window.__VIEW_INDEX = window.__VIEW_INDEX || 1;
window.__IMAGE_INDEX = window.__IMAGE_INDEX || 1;
window.__POINT_INDEX = window.__POINT_INDEX || 1;
window.__LAYER_INDEX = window.__LAYER_INDEX || 1;
window.__SIZE_INDEX = window.__SIZE_INDEX || 1;
window.__PROXY_FN = {};
window.__FN_INDEX = 0;
window.__FN_MAP = {};
window.__ROOTSCREEN = null;
window.__CACHED_SCREENS = {};
window.__SCREEN_COUNT = 0;
window.__CURR_SCREEN = null;
window.__PREV_SCREEN = null;
window.__ANIMATE_DIR = null;
window.__SCREEN_STACK = [];
window.__LAST_FN_CALLED = null;
window.__THROTTELED_ACTIONS = [];
window.__ALL_ONCLICKS = [];
window.__VIEWS = {};
window.__VIEW_DIMENSIONS = {};

window.LANGUAGE = "en_US";
window.ZIndex = 0;

if (JBridge.hasOwnProperty("getKey")){
  window.LANGUAGE = JBridge.getKey("languagePref", "en_US");
}

window.updateLanguage = (lang) => {
  window.LANGUAGE = lang;
  JBridge.setKey("languagePref",lang);
};

window.onresize = (iosData) => {
  let id = window.__ROOTSCREEN && window.__ROOTSCREEN.idSet.root;
  if (!id) {
    id = 1;
  }
  if (window.__OS == "IOS") {
    let tag = iosData.tag;
    if (tag == "keyboardWillHide") {
      if (window.__OLD_HEIGHT)
        window.__HEIGHT = window.__OLD_HEIGHT;
    } else {
      window.__OLD_HEIGHT = window.__HEIGHT;
      window.__HEIGHT = window.__HEIGHT * 1 - iosData.data.height * 1 + '';
    }
  } else {
    window.__DEVICE_DETAILS = getScreenDetails();
    window.__WIDTH = window.__DEVICE_DETAILS.screen_width;
    window.__HEIGHT = window.__DEVICE_DETAILS.screen_height;
  }
  Android.Render(window.__VIEWS[id], null);
}

window.callUICallback = function () {
  let args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null,
    arguments));
  var fName = args[0]
  var functionArgs = args.slice(1)
  var currTime;
  var timeDiff;

  if (window.__ALL_ONCLICKS.indexOf(fName) != -1 && args[2] == "feedback") {
    return JBridge.setClickFeedback(args[1]);
  }

  if (window.__THROTTELED_ACTIONS.indexOf(fName) == -1) {
    window.__PROXY_FN[fName].call(null, ...functionArgs);
  } else if (window.__LAST_FN_CALLED && (fName == window.__LAST_FN_CALLED.fName)) {
    currTime = getCurrTime();
    timeDiff = currTime - window.__LAST_FN_CALLED.timeStamp;

    if (timeDiff >= 1000) {
      console.log("BUTTON_CLICKED_" + window.__CURR_SCREEN);
      JBridge.trackEvent("BUTTON_CLICKED", "BUTTON_CLICKED_" + window.__CURR_SCREEN);
      window.__PROXY_FN[fName].call(null, ...functionArgs);
      window.__LAST_FN_CALLED.timeStamp = currTime;
    } else {
      console.warn("function throtteled", fName);
      console.warn("time diff", timeDiff);
    }
  } else {
    JBridge.trackEvent("BUTTON_CLICKED", "BUTTON_CLICKED_" + window.__CURR_SCREEN);
    window.__PROXY_FN[fName].call(null, ...functionArgs);
    window.__LAST_FN_CALLED = {
      timeStamp: (new Date()).getTime(),
      fName: fName
    }
  }
};

window.onBackPressed = () => {
  JBridge.trackEvent("INFO", "BACKPRESSED_" + window.__CURR_SCREEN);
  window.__CACHED_SCREENS[window.__CURR_SCREEN].screen.onBackPressed();
}

window.onActivityLifeCycleEvent = (event) => {
  let eventFn = window.__CACHED_SCREENS[window.__CURR_SCREEN].screen.onActivityLifeCycleEvent;
  if (eventFn)
    eventFn(event);
}

const duiShowScreen = (callback, state) => {
  window.__duiCb = callback;
  containers.changeScreen(state.screen, state);
};

const setCallback = (callback, state) => {
  window.__duiCb = callback;
};

const runDuiCallback = (state) => {
  let callback = window.__duiCb;

  if (typeof callback == "function")
    callback(state)();
};

module.exports = (meta, main, jbridgeOverrides) => {
  if (typeof jbridgeOverrides == "function") {
    let overrides = jbridgeOverrides();
    window.JBridge = merge(window.JBridge, overrides);
  }

  window.__duiShowScreen = duiShowScreen;
  window.__duiCb = null;
  window.__runDuiCallback = runDuiCallback;
  window.__setCallback = setCallback;

  containers.registerScreenMeta(meta);

  main();
};

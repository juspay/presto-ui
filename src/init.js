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
const containers = require('./container')
const iosAndroidInterface = require('./IOS/AndroidInterface')
const getOS = require('./helper').getOS
const merge = require('./helper').merge

const getCurrTime = () => (new Date()).getTime()

window.__OS = getOS()

if (window.__OS == "WEB") {
  window.Android = require("./WEB/AndroidInterface")
  window.JBridge = require("./WEB/JBridgeInterface")
} else if (window.__OS == "IOS") {
  window.Android = require("./IOS/AndroidInterface")
  window.JBridge = merge(window.JBridge, {})
}

window.__ENV = 0

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

const guid = Math.random().toString(36).substr(2, 9)

/* Components */
window.__COM_EVENT = false
window.__COM_RENDERED = {
  DRP_GLOBAL: false,
  SWITCH_GLOBAL: false,
  DRP: {},
  DSB: {},
  DB: {},
  NAVBAR: {}
}

window.__COM_CLASS_GROUP = {
  WRAPPER: 'com_wrapper_' + guid,
  NAVBAR: 'com_navbar_' + guid,
  NAVBAR_ITEM: 'com_navbar_item_' + guid,
  NAVBAR_ITEM_WITH_SUB: 'com_navbar_has_sub_' + guid,
  NAVBAR_SUB: 'com_navbar_sub_' + guid, 
  NAVBAR_SUB_RIGHT: 'com_navbar_sub_right_' + guid,
  NAVBAR_SUB_ITEM: 'com_navbar_subitem_' + guid,
  DRP: 'com_drp_' + guid,
  DRP_BODY: 'com_drp_body_' + guid,
  DB: 'com_db_' + guid,
  DB_FULL_BODY: 'com_db_full_body_' + guid,
  DB_BODY: 'com_db_body_' + guid,
  DB_OPTIONS: 'com_db_options_' + guid,
  DB_OPTION: 'com_db_option_' + guid,
  DSB: 'com_dsb_' + guid,
  DSB_FULL_BODY: 'com_dsb_full_body_' + guid,
  DSB_BODY: 'com_dsb_body_' + guid,
  DSB_OPTIONS: 'com_dsb_options_' + guid,
  DSB_OPTION: 'com_dsb_option_' + guid,
  DSB_SEARCH_WRAP: 'com_dsb_search_wrap_' + guid,
  DSB_SEARCH: 'com_dsb_search_' + guid,
  SWITCH: 'com_switch_' + guid,
  SWITCH_BODY: 'com_switch_body_' + guid,
  SWITCH_SLIDER: 'com_switch_slider_' + guid,
  BT: 'com_bt_' + guid,
  BT_BODY: 'com_bt_body_' + guid,
  BT_TEXT: 'com_bt_text_' + guid,
  BT_ICON: 'com_bt_icon_' + guid
}
window.__COM_COLOR_GROUP = {
  BG: '#ffffff',
  ACTIVE_BG: '#EEF1F8',
  ACTIVE_COLOR: 'rgb(53, 64, 82)',
  INACTIVE_COLOR: 'rgba(53, 64, 82, 0.5)',
  BORDER_COLOR: '#A3AFC2',
  ACTIVE_BORDER_COLOR: '#707886',
  SEARCH_COLOR: '#dddddd',
  INACTIVE_SWITCH: '#B7DBBC',
  ACTIVE_SWITCH: '#36AF47',
  BT_BORDER_COLOR: '#1585D8',
  BT_BG_COLOR: '#1991EB',
  BT_COLOR: '#ffffff'
}
window.__COM_ACTIVE = {
  DSB: '',
  NAVBAR: '',
  DB: ''
}
/* Components End */

/* Modal */
window.__STYLE_ID = 'style_' + guid
window.__MODAL_PROPS = {}
window.__CONTENTMODAL_CLASS = 'modal_' + guid
window.__OPENMODAL_CLASS = 'modal-open_' + guid
window.__BACKDROPMODAL_CLASS = 'modal-backdrop_' + guid
window.__DISABLEDBACKDROP_CLASS = 'modal-backdrop-disabled_' + guid
window.__SHOWNMODAL_CLASS = 'modal-shown_' + guid

window.__FADEMODAL_CLASS = 'modal-fade_' + guid
window.__SLIDEMODAL_CLASS = 'modal-slide_' + guid
/* Modal End */

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
window.__OBSERVERS = {};
window.LANGUAGE = "en_US";
window.ZIndex = 0;

if (JBridge.hasOwnProperty("getKey")){
  window.LANGUAGE = JBridge.getKey("languagePref", "en_US");
}

window.updateLanguage = (lang) => {
  window.LANGUAGE = lang;
  JBridge.setKey("languagePref",lang);
}

window.onclick = (event) => {
  if(window.__OS != "WEB")
    return;

  if(event.target 
    && event.target.classList.contains(window.__BACKDROPMODAL_CLASS)
    && !event.target.classList.contains(window.__DISABLEDBACKDROP_CLASS)
  ){
    document.body.classList.remove(window.__OPENMODAL_CLASS);
    event.target.classList.remove(window.__SHOWNMODAL_CLASS);

    let id = event.target.id;
    id = id.replace(window.__BACKDROPMODAL_CLASS + '_', '');
    
    let view = __VIEWS[id];
    if (view && view.props.onDismiss && typeof view.props.onDismiss ==
      "function") {
      view.props.onDismiss();
    }
  }
}

window.onresize = (iosData) => {
  return;
  
  if (window.__OS == "WEB") {
    const content = document.getElementById('content');
    const id = content.firstElementChild.id;
    const view = __VIEWS[id];
    Android.recompute(view);
  }
  return;

  if (window.__OS == "IOS") {
    let tag = iosData.tag;
    if (tag == "keyboardWillHide") {
      if (window.__OLD_HEIGHT) {
        window.__HEIGHT = window.__OLD_HEIGHT;
        delete window.__OLD_HEIGHT;
      }
    } else if (!window.__OLD_HEIGHT) {
      window.__OLD_HEIGHT = window.__HEIGHT;
      window.__HEIGHT = window.__HEIGHT * 1 - iosData.data.height * 1 + '';
    }
    iosAndroidInterface.recompute()
  }
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

    if (timeDiff >= 300) {
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

/*
  WEB Only
  Hides the popupMenu Div
*/
function hidePopupMenu() {
  let popupMenu = document.getElementsByClassName("popupMenu");
  for (let i = 0; i < popupMenu.length; i++) {
    popupMenu[i].style.display = "none";
  }
}

const duiShowScreen = (callback, state) => {
  let stackLen = window.__SCREEN_STACK.length;
  window.__duiCb = callback;

  if (window.__OS == "WEB")
    hidePopupMenu();

  if (state.screen == window.__CURR_SCREEN) {
    let fn = window.__CACHED_SCREENS[__CURR_SCREEN].screen.handleStateChange(state);
    if (typeof fn === "function")
      fn(state);
    return;
  }

  if (stackLen >= 2 && window.__SCREEN_STACK[stackLen - 2] == state.screen)
    return containers.changeScreen("GO_BACK", state);

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
  containers.registerScreenMeta(meta);

  window.__duiShowScreen = duiShowScreen;
  window.__duiCb = null;
  window.__runDuiCallback = runDuiCallback;
  window.__setCallback = setCallback;

  main();
};
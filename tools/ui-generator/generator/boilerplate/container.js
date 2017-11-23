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

let boilerplate = `

let previousState = {};
const RootScreen = require("../views/RootScreen");

var returnIfCached = function(screenName) {
  return window.__CACHED_SCREENS[screenName];
}

var renderRootScreen = (state) => {
  window.__ROOTSCREEN = new RootScreen({}, null, state);
  return window.__ROOTSCREEN;
}

var updateNode = function(data) {
  window.__CACHED_SCREENS[data.action].screen = determineScreen(data.action, data.state);
}

window.__CLEAR_STACK = function(screenName) {
  window.__SCREEN_STACK = [screenName];
}

var addToStack = function(screenName, screenData) {
  if (typeof screenData.screen.shouldStackScreen !== "undefined" && !screenData.screen.shouldStackScreen)
  return;

  var stackLen =  window.__SCREEN_STACK.length;

  if (!stackLen)
  window.__SCREEN_STACK.push(screenName);
  else if (window.__SCREEN_STACK[stackLen-1] !== screenName)
  window.__SCREEN_STACK.push(screenName);
}

var renderScreen = function(data) {
  JBridge.hideKeyboard();

  var screen;
  var isCached = false;
  var takeFromCache = true;
  var screenData = window.__CACHED_SCREENS[data.action];

  if (screenData) {
    isCached = true;

    screen = screenData.screen;
    if (typeof screen.shouldCacheScreen  !== "undefined" && !screen.shouldCacheScreen) {
      updateNode(data);
      takeFromCache = false;
    }
  } else {
    window.__ANIMATE_DIR = 1;
    screen = determineScreen(data.action, data.state);
    window.__CACHED_SCREENS[data.action] = {
      index: window.__SCREEN_COUNT,
      screen: screen,
      timeStamp: (new Date()).getTime(),
    }

    window.__SCREEN_COUNT++;
    screenData =  window.__CACHED_SCREENS[data.action];
  }

  addToStack(data.action,  window.__CACHED_SCREENS[data.action]);
  return {screen: screenData.screen, isCached: isCached, takeFromCache: takeFromCache}
}

var appendToRoot = function(screen) {
  window.__SCREEN_INDEX++;
  window.__ROOTSCREEN.appendChild(window.__ROOTSCREEN.idSet.root, screen.render(), window.__SCREEN_INDEX, screen.afterRender);
}

var getDirection = function() {
  if (window.__CACHED_SCREENS[window.__CURR_SCREEN].timeStamp >= window.__CACHED_SCREENS[window.__PREV_SCREEN].timeStamp)
  return 1;

  return -1;
}

var handleGoBack = function(data) {
  JBridge.hideKeyboard();

  var stackLen = window.__SCREEN_STACK.length;
  var cmd = "";
  if (stackLen == 1)  {
    __ROOTSCREEN.minimizeApp();
    return;
  }

  var screenData = window.__CACHED_SCREENS[window.__CURR_SCREEN];
  if (screenData.screen.onBackPress) {
    if (!screenData.screen.onBackPress()){
      return;
    }
  }


  window.__PREV_SCREEN = window.__SCREEN_STACK[stackLen - 1];
  window.__CURR_SCREEN = window.__SCREEN_STACK[stackLen - 2];
  window.__SCREEN_STACK.pop();

  var screen = window.__CACHED_SCREENS[window.__CURR_SCREEN].screen;
  var state = R.merge(data.state, {currScreen: window.__CURR_SCREEN});

  data = R.merge(data, {action: window.__CURR_SCREEN, state: state});

  if (typeof screen.shouldCacheScreen  !== "undefined" && !screen.shouldCacheScreen) {
    updateNode(data);
    window.__ANIMATE_DIR = getDirection();
    appendToRoot(window.__CACHED_SCREENS[window.__CURR_SCREEN].screen);
  } else {
    window.__ANIMATE_DIR = -1;
    screen.onPop(data.state, "backPress");
  }
}

var handleScreenActions = function(data) {
  var currView;
  var res;

  if (data.action == "GO_BACK") {
    handleGoBack(data);
    return {};
  }

  if (data.state.isInit) {
    currView = renderRootScreen(data.state);

    setTimeout(() => {
      performAction(data.state.currScreen, {});
    },0);

    return {render : currView.render()};
  }

  if (window.__CURR_SCREEN == data.action) {
    return {};
  }

  if (!window.__CURR_SCREEN && !window.__PREV_SCREEN) {
    window.__CURR_SCREEN = data.action;
    appendToRoot(renderScreen(data).screen);
    return {};
  }

  window.__PREV_SCREEN = window.__CURR_SCREEN;
  window.__CURR_SCREEN = data.action;

  res = renderScreen(data);
  if (!res.isCached) {
    appendToRoot(res.screen);
    return {};
  } else if (res.takeFromCache) {
    window.__ANIMATE_DIR  = getDirection();

    if (res.screen.onPop)
    res.screen.onPop(data.state);
  } else {
    window.__ANIMATE_DIR  = getDirection();
    appendToRoot(res.screen);
  }

  return {};
}

var Containers = {
  handleStateChange : (data) => {
    return handleScreenActions(data);
  }
}

function performAction(action, state) {
  let result = ScreenReducer(action, state, previousState);
  previousState = result;
  let currState = {
    action : action,
    payload : state,
    state : result
  };
  setTimeout(() => {
    uiHandler.handle(handleScreenActions(currState), null)
  },0);
}

module.exports = {
  init: () => {
    var initialState = {};
    let intentData = JBridge.getIntentData();
    if (intentData && intentData != null && intentData != "{}") {
      intentData = JSON.parse(intentData);
      if (intentData.type && intentData.type == "GCM") {
        var gcmData = JSON.parse(intentData.data);
        initialState.gcmData = gcmData;
        window.__GCM_INTENT = true;
      }
    }
    performAction("INIT_UI", initialState);
  },
  changeScreen: (screen, state) => {
    performAction(screen, state);
  }
}`;

module.exports = boilerplate;


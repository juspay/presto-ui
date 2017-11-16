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

const R = require("ramda");
const objectAssign = require('object-assign');
const uiHandler = require('./handler');
const animations = require('./animations');

let screenMeta;

const determineScreen = (screenName, state) => {
  let screen;
  if (screenMeta.screens[screenName]) {
    return new screenMeta.screens[screenName](null, null, state);
  }
  throw new Error("Current screen not handled. " + screenName);
}

const updateNode = function (data) {
  window.__CACHED_SCREENS[data.action].screen = determineScreen(data.action,
    data.state);
  window.__CACHED_SCREENS[data.action].timeStamp = (new Date()).getTime();
}

const addToStack = function (screenName, screenData) {
  if (typeof screenData.screen.shouldStackScreen !== "undefined" && !
    screenData.screen.shouldStackScreen)
    return;

  let stackLen = window.__SCREEN_STACK.length;

  if (!stackLen)
    window.__SCREEN_STACK.push(screenName);
  else if (window.__SCREEN_STACK[stackLen - 1] !== screenName)
    window.__SCREEN_STACK.push(screenName);
}

const renderScreen = function (data) {
  JBridge.hideKeyboard();

  let screen;
  let isCached = false;
  let takeFromCache = true;
  let screenData = window.__CACHED_SCREENS[data.action];

  if (screenData) {
    isCached = true;

    screen = screenData.screen;
    if (typeof screen.shouldCacheScreen !== "undefined" && !screen.shouldCacheScreen) {
      updateNode(data);
      takeFromCache = false;
    }
  } else {
    window.__ANIMATE_DIR = 1;
    screen = determineScreen(data.action, data.state);
    screenData = {
      index: window.__SCREEN_COUNT,
      screen: screen,
      timeStamp: (new Date()).getTime(),
    }
    window.__SCREEN_COUNT++;
    window.__CACHED_SCREENS[data.action] = screenData;
  }

  addToStack(data.action, window.__CACHED_SCREENS[data.action]);
  return {
    screen: screenData.screen,
    isCached: isCached,
    takeFromCache: takeFromCache
  }
}

const appendToRoot = function (screen, dontAnimate) {
  window.__SCREEN_INDEX++;
  let layout = screen.render();
  window.__ROOTSCREEN.appendChild(window.__ROOTSCREEN.idSet.root, layout,
    window.__SCREEN_INDEX, screen.afterRender);
  if (dontAnimate)
    return;
  animate();
}

const animate = function () {
  let fromId = window.__CACHED_SCREENS[window.__PREV_SCREEN].screen.layout.idSet
    .id;
  let toId = window.__CACHED_SCREENS[window.__CURR_SCREEN].screen.layout.idSet
    .id;
  let direction = window.__ANIMATE_DIR;
  let animator;
  if (direction == 1) {
    animator = window.__CACHED_SCREENS[window.__CURR_SCREEN].screen.screenTransition;
  } else {
    animator = window.__CACHED_SCREENS[window.__PREV_SCREEN].screen.screenTransition;
  }
  let animationCMD = animations.getAnimation(fromId, toId, direction, animator);
  setTimeout(() => {
    Android.runInUI(animationCMD, null)
  }, 0);
}

const getDirection = function () {
  if (window.__CACHED_SCREENS[window.__CURR_SCREEN].timeStamp >= window.__CACHED_SCREENS[
      window.__PREV_SCREEN].timeStamp)
    return 1;

  return -1;
}

const handleGoBack = function (data) {
  JBridge.hideKeyboard();

  let stackLen = window.__SCREEN_STACK.length;
  if (stackLen == 1) {
    if (typeof window.__ROOTSCREEN.minimizeApp === "function")
      window.__ROOTSCREEN.minimizeApp();
    return;
  }

  let screenData = window.__CACHED_SCREENS[window.__CURR_SCREEN];
  if (typeof screenData.screen.onBackPress === "function") {
    if (!screenData.screen.onBackPress()) {
      return;
    }
  }

  window.__PREV_SCREEN = window.__SCREEN_STACK[stackLen - 1];
  window.__CURR_SCREEN = window.__SCREEN_STACK[stackLen - 2];
  window.__SCREEN_STACK.pop();

  let screen = window.__CACHED_SCREENS[window.__CURR_SCREEN].screen;
  data.action = window.__CURR_SCREEN;

  if (typeof screen.shouldCacheScreen !== "undefined" && !screen.shouldCacheScreen) {
    updateNode(data);
    window.__ANIMATE_DIR = getDirection();
    appendToRoot(window.__CACHED_SCREENS[window.__CURR_SCREEN].screen);
  } else {
    window.__ANIMATE_DIR = -1;
    animate();
    if (typeof screen.onPop === "function")
      screen.onPop(data.state, "backPress");
  }
}

const handleScreenActions = function (data) {
  let currView;
  let res;

  if (data.action == "GO_BACK") {
    handleGoBack(data);
    return {};
  }

  if (data.action == "INIT_UI") {
    window.__ROOTSCREEN = determineScreen("RootScreen", data.state);

    setTimeout(() => {
      performAction(screenMeta.INIT_UI, {});
    }, 0);

    return {
      render: window.__ROOTSCREEN.render()
    };
  }

  if (window.__CURR_SCREEN == data.action) {
    return {};
  }

  if (!window.__CURR_SCREEN && !window.__PREV_SCREEN) {
    window.__CURR_SCREEN = data.action;
    appendToRoot(renderScreen(data).screen, true);
    return {};
  }

  window.__PREV_SCREEN = window.__CURR_SCREEN;
  window.__CURR_SCREEN = data.action;

  res = renderScreen(data);
  if (!res.isCached) {
    appendToRoot(res.screen);
    return {};
  } else if (res.takeFromCache) {
    window.__ANIMATE_DIR = getDirection();
    animate();
    if (typeof res.screen.onPop === "function")
      res.screen.onPop(data.state);
  } else {
    window.__ANIMATE_DIR = getDirection();
    appendToRoot(res.screen);
  }

  return {};
}

function performAction(action, state) {
  let currState = {
    action: action,
    state: state
  };
  setTimeout(() => {
    uiHandler.handle(handleScreenActions(currState), null)
  }, 0);
}

module.exports = {
  init: () => {
    let initialState = {};
    let intentData = JBridge.getIntentData();
    if (intentData && intentData != null && intentData != "{}") {
      intentData = JSON.parse(intentData);
      if (intentData.type && intentData.type == "GCM") {
        let gcmData = JSON.parse(intentData.data);
        initialState.gcmData = gcmData;
        window.__GCM_INTENT = true;
      }
    }
    performAction("INIT_UI", initialState);
  },
  changeScreen: (screen, state) => {
    performAction(screen, state);
  },
  registerScreenMeta: (meta) => {
    screenMeta = meta;
  }
}
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

const animations = require('./animations');

let screenMeta;

const hideScreen = (screen) => {
  Android.runInUI(window.__ROOTSCREEN.cmd({
    id: screen.__ids.rootId,
    visibility: "gone"
  }), null);
}

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

  let screen;
  let takeFromCache = false;
  let screenData = window.__CACHED_SCREENS[data.action];

  if (screenData) {
    screen = screenData.screen;
    if (typeof screen.shouldCacheScreen !== "undefined" && !screen.shouldCacheScreen) {
      hideScreen(screen);
      updateNode(data);
    } else {
      takeFromCache = true;
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
    takeFromCache: takeFromCache
  }
}

const appendToRoot = function (screen, dontAnimate) {
  window.__SCREEN_INDEX++;
  const layout = screen.render();
  screen.__ids = {rootId: screen.layout.idSet.id};
  window.__ROOTSCREEN.appendChild(window.__ROOTSCREEN.idSet.root, layout,
    window.__SCREEN_INDEX, screen.afterRender);
  if (dontAnimate || window.__OS == "IOS")
    return;
  animate();
}

const animate = function () {
  let fromId = window.__CACHED_SCREENS[window.__PREV_SCREEN].screen.__ids.rootId;
  let toId = window.__CACHED_SCREENS[window.__CURR_SCREEN].screen.__ids.rootId;
  let direction = window.__ANIMATE_DIR;
  let animator;
  if (direction == 1) {
    animator = window.__CACHED_SCREENS[window.__CURR_SCREEN].screen.screenTransition;
  } else {
    animator = window.__CACHED_SCREENS[window.__PREV_SCREEN].screen.screenTransition;
  }
  let animationCMD = animations.getAnimation(fromId, toId, direction, animator);
  Android.runInUI(animationCMD, null);
}

const getDirection = function () {
  if (window.__CACHED_SCREENS[window.__CURR_SCREEN].timeStamp >= window.__CACHED_SCREENS[
      window.__PREV_SCREEN].timeStamp)
    return 1;

  return -1;
}

const handleScreenActions = function (data) {
  if (window.__CURR_SCREEN == data.action) {
    const rootFn = window.__ROOTSCREEN.handleStateChange;
    if (typeof rootFn == "function" && rootFn(data.state) == true)
      return;
    const fn = window.__CACHED_SCREENS[__CURR_SCREEN].screen.handleStateChange;
    if (typeof fn === "function")
      fn(data.state);
    return;
  }

  if (data.action == "INIT_UI") {
    window.__ROOTSCREEN = determineScreen("RootScreen", data.state);
    const layout = window.__ROOTSCREEN.render();

    if (window.__OS == "ANDROID")
      Android.Render(JSON.stringify(layout), null, "false");
    else
      Android.Render(layout, null);

    return performAction(screenMeta.INIT_UI, {});
  }

  if (!window.__CURR_SCREEN && !window.__PREV_SCREEN) {
    window.__CURR_SCREEN = data.action;
    appendToRoot(renderScreen(data).screen, true);
    const id = window.__CACHED_SCREENS[window.__CURR_SCREEN].screen.__ids.rootId;
    const animationCMD = animations.getAnimation(-1, id, 0, animations.types.SIMPLE);
    Android.runInUI(animationCMD, null);
    return;
  }

  if (window.__PREV_SCREEN && data.action != window.__PREV_SCREEN) {
    hideScreen(window.__CACHED_SCREENS[window.__PREV_SCREEN].screen);
  }

  window.__PREV_SCREEN = window.__CURR_SCREEN;
  window.__CURR_SCREEN = data.action;

  const res = renderScreen(data);
  if (res.takeFromCache) {
    window.__ANIMATE_DIR = getDirection();
    animate();
    if (typeof res.screen.onPop === "function")
      res.screen.onPop(data.state);
  } else {
    window.__ANIMATE_DIR = getDirection();
    appendToRoot(res.screen);
  }

}

function performAction(action, state) {
  handleScreenActions({action, state});
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
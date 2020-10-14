module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = {
	init: __webpack_require__(/*! ./src/init */ "./src/init.js"),
	doms: __webpack_require__(/*! ./src/doms */ "./src/doms/index.js"),
	handler: __webpack_require__(/*! ./src/handler */ "./src/handler.js"),
	helpers: __webpack_require__(/*! ./src/helpers */ "./src/helpers/index.js"),
	baseView: __webpack_require__(/*! ./src/baseView */ "./src/baseView.js"),
	animations: __webpack_require__(/*! ./src/animations */ "./src/animations.js"),
	callbackMapper: __webpack_require__(/*! ./src/helpers/common/callbackMapper */ "./src/helpers/common/callbackMapper.js"),
	getOS: __webpack_require__(/*! ./src/helper */ "./src/helper.js").getOS,
	prestoMerge: __webpack_require__(/*! ./src/helper */ "./src/helper.js").merge,
	prestoClone: __webpack_require__(/*! ./src/helper */ "./src/helper.js").clone
};

/***/ }),

/***/ "./src/IOS/AndroidInterface.js":
/*!*************************************!*\
  !*** ./src/IOS/AndroidInterface.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var render = __webpack_require__(/*! ./Render */ "./src/IOS/Render.js");
var helper = __webpack_require__(/*! ../helper */ "./src/helper.js");
var parseParams = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js").ios.parseParams;

var rootid = void 0;

function clearViewExternals(view) {
  delete window.__VIEWS[view.props.id];
  delete window.__VIEW_DIMENSIONS[view.props.id];
  view.children.forEach(clearViewExternals);
}

function getSerializeableView(view, recurse) {
  var obj = parseParams(view.type, helper.clone(view.props, null), "set");
  var newView = {};
  newView.props = obj.config;
  newView.type = obj.type[0].toUpperCase() + obj.type.substr(1, obj.type.length);
  if (recurse) newView.children = view.children.map(getSerializeableView);else newView.children = [];
  return newView;
}

module.exports = {
  getScreenDimensions: function getScreenDimensions() {
    return JSON.stringify({
      width: window.__DEVICE_DETAILS.screen_width,
      height: window.__DEVICE_DETAILS.screen_height
    });
  },

  recomputeView: function recomputeView(view) {
    if (view.type.indexOf("scroll") != -1) {
      render.inflate(view);
    }
    render.computeChildDimens(view);
    var children = view.children;
    for (var i = 0, len = children.length; i < len; i++) {
      render.inflate(children[i]);
    }
  },

  recompute: function recompute() {
    var rootview = window.__VIEWS[rootid];
    var obj = {
      type: "linearLayout",
      props: {
        h: window.__HEIGHT,
        w: window.__WIDTH
      },
      children: [rootview]
    };
    render.computeChildDimens(obj);
    render.inflate(rootview);
  },

  runInUI: function runInUI(cmd) {
    render.runInUI(cmd);
  },

  Render: function Render(view, cb) {
    var obj = {
      type: "linearLayout",
      props: {
        h: window.__HEIGHT,
        w: window.__WIDTH
      },
      children: [view]
    };
    rootid = view.props.id;
    render.computeChildDimens(obj);
    view = render.inflate(view);
    if (view) {
      window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
        methodName: "render",
        parameters: {
          view: view
        }
      }));
    }
    if (cb) window.callUICallback(cb);
  },

  moveView: function moveView(id, index) {
    if (!window.__VIEWS[id]) {
      return console.error(new Error("MoveView: Invalid view ID: " + id));
    }
    var view = window.__VIEWS[id];
    var parent = window.__VIEWS[view.props.parentId];
    var children = parent.children;
    children.splice(children.indexOf(view), 1);
    children.splice(index, 0, view);
    this.recomputeView(parent);
  },

  addViewToParent: function addViewToParent(id, view, index, cb) {
    if (!window.__VIEWS[id]) {
      return console.error(new Error("AddViewToParent: Invalid parent ID: " + id));
    }
    var parent = window.__VIEWS[id];
    parent.children.splice(index, 0, view);
    view.props.parentId = id;
    render.computeChildDimens(parent);
    var renderedView = render.inflate(view);
    if (renderedView) {
      window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
        methodName: "addViewToParent",
        parameters: {
          index: index,
          parentId: id,
          view: renderedView,
          afterRender: cb + ""
        }
      }));
    }
    this.recomputeView(parent);
  },

  createListData: function createListData(id, view) {
    var parent = window.__VIEWS[id];
    if (!parent) {
      return "{}";
    }
    var views = window.__VIEWS;
    window.__VIEWS = {};
    parent.children = [view];
    view.props.parentId = id;
    render.computeChildDimens(parent);
    var inflatedView = render.inflate(view);
    window.__VIEWS = views;
    return JSON.stringify(inflatedView);
  },

  replaceView: function replaceView(view, id) {
    if (!window.__VIEWS[id]) {
      return console.error(new Error("AddViewToParent: Invalid parent ID: " + id));
    }
    var oldview = window.__VIEWS[id];
    var parentid = oldview.props.parentId;
    oldview.props = helper.clone(view.props, null);
    oldview.props.parentId = parentid;
    var parent = window.__VIEWS[parentid];
    var index = parent.children.indexOf(oldview);
    this.recomputeView(parent);
    var newView = getSerializeableView(oldview);
    window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
      methodName: "replaceView",
      parameters: {
        id: id,
        view: newView,
        parentId: parentid,
        index: index
      }
    }));
  },

  removeView: function removeView(id) {
    var view = window.__VIEWS[id];
    var parent = window.__VIEWS[view.props.parentId];
    var index = parent ? parent.children.indexOf(view) : 0;
    if (parent) {
      parent.children.splice(index, 1);
    }
    clearViewExternals(view);
    window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
      methodName: "removeView",
      parameters: {
        id: id,
        index: index
      }
    }));
    if (parent) {
      this.recomputeView(parent);
    }
  },

  startAnim: function startAnim(id, cbName) {
    // TODO implement native side with callback
    // Thus, currently not providing on complete hook
    // onEnd property can still be used for chaining animations
    window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
      methodName: "startAnimation",
      parameters: {
        animId: id
      }
    }));
  },

  cancelAnim: function cancelAnim() {
    // TODO implement native side
  },

  updateAnim: function updateAnim() {
    // TODO implement native side
  }
};

/***/ }),

/***/ "./src/IOS/Render.js":
/*!***************************!*\
  !*** ./src/IOS/Render.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var parseParams = __webpack_require__(/*! ../helpers/ios/parseParams */ "./src/helpers/ios/parseParams.js");

var _require = __webpack_require__(/*! ../computeIOS */ "./src/computeIOS.js"),
    computeChildDimens = _require.computeChildDimens;

var helper = __webpack_require__(/*! ../helper */ "./src/helper.js");

function inflate(view) {
  var id = view.props.id;

  if (!window.__VIEWS.hasOwnProperty(id)) {
    computeChildDimens(view);
    helper.cacheDimen(view);
    window.__VIEWS[id] = view;
    var newView = helper.clone(view, null);
    view.children.forEach(function (child, i) {
      newView.children[i] = inflate(child);
    });
    var obj = parseParams(newView.type, newView.props, "set");
    newView.props = obj.config;
    newView.type = obj.type[0].toUpperCase() + obj.type.substr(1, obj.type.length);
    return newView;
  }

  var move = helper.shouldMove(view);
  helper.cacheDimen(view);
  var ranRunInUI = false;
  if (move) {
    move.id = id;
    runInUIHelper(view.type, view.props);
    ranRunInUI = true;
  }

  computeChildDimens(view);
  view.children.forEach(inflate);
  return ranRunInUI;
}

function runInUI(cmd, fromInflate) {
  if (!(cmd instanceof Array)) cmd = [cmd];

  if (cmd.length == 1 && cmd[0] == "removeAllUI") {
    window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
      methodName: "removeAllUI",
      parameters: { "animated": "false" }
    }));
  } else {
    cmd.forEach(function (each) {
      var id = each.id;
      each.useConstraits = true;
      var view = window.__VIEWS[id];
      if (view) {
        var parent = window.__VIEWS[view.props.parentId];
        view.props = helper.merge(view.props, each);
        if (view.props && view.props.hasOwnProperty("listItem") && each.hasOwnProperty("listData") && !each.hasOwnProperty("listItem")) {
          each.listItem = view.props.listItem;
        }
        //Adding as stop gag solution for editText in ios where text 
        //was getting set empty in case other properties were modified.
        if (!each.hasOwnProperty('text') && view.props) {
          delete view.props.text;
        }
        if (each.hasOwnProperty('textFromHtml') && view.props) {
          if (view.props.hasOwnProperty('color')) {
            each.color = view.props.color;
          }
          if (view.props.hasOwnProperty('fontStyle')) {
            each.fontStyle = view.props.fontStyle;
          }
          if (view.props.hasOwnProperty('textSize')) {
            each.textSize = view.props.textSize;
          }
        }
        if (parent && !fromInflate) {
          if (parent.type.indexOf("scroll") != -1) {
            inflate(parent);
          }
          computeChildDimens(parent);
          var children = parent.children;
          if (!inflate(view)) {
            runInUIHelper(view.type, each, true);
          };
          for (var i = 0, len = children.length; i < len; i++) {
            if (view != children[i]) {
              inflate(children[i]);
            }
          }
        } else {
          runInUIHelper(view.type, each);
        }
      }
    });
  }
};

function runInUIHelper(type, obj, removeFrame) {
  var cmd = parseParams(type, obj, "get").config.methods;
  if (removeFrame) {
    cmd = cmd.filter(function (itm) {
      return itm.methodName != "setFrame:";
    });
  }
  window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
    methodName: "runInUI",
    parameters: cmd
  }));
}

module.exports = {
  inflate: inflate,
  computeChildDimens: computeChildDimens,
  runInUI: runInUI
};

/***/ }),

/***/ "./src/PrestoUIInterface.js":
/*!**********************************!*\
  !*** ./src/PrestoUIInterface.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var prestoDom = __webpack_require__(/*! ./doms */ "./src/doms/index.js");
var helpers = __webpack_require__(/*! ./helpers */ "./src/helpers/index.js");
var webParseParams;
var iOSParseParams;
var parseParams;
var helper = __webpack_require__(/*! ./helper */ "./src/helper.js");

if (false) {} else if (true) {
  iOSParseParams = helpers.ios.parseParams;
} else {}

function domAll(elem) {
  if (!elem.__ref) {
    elem.__ref = createPrestoElement();
  }

  if (elem.props.id) {
    elem.__ref.__id = parseInt(elem.props.id, 10) || elem.__ref.__id;
  }

  var type = helper.clone(elem.type, null);
  var props = helper.clone(elem.props, null);

  if (props.focus == false && "IOS" === "ANDROID") {
    delete props.focus;
  }

  var children = [];

  for (var i = 0; i < elem.children.length; i++) {
    children.push(domAll(elem.children[i]));
  }

  if (__OS == "WEB" && props.onResize) {
    window.__resizeEvent = props.onResize;
  }

  props.id = elem.__ref.__id;
  if (elem.parentType && "IOS" == "ANDROID") return prestoDom({ elemType: type, parentType: elem.parentType }, props, children);

  return prestoDom(type, props, children);
}

function getDomToRender(elem) {
  var res = domAll(elem);
  if (false) {} else {
    return res;
  }
}

// Not exported
function cmdForAndroid(config, set, type) {
  if (set) {
    if (config.id) {
      var obj = parseParams(type, config, "set");
      var cmd = obj.runInUI.replace("this->setId", "set_view=ctx->findViewById").replace(/this->/g, "get_view->");
      cmd = cmd.replace(/PARAM_CTR_HOLDER[^;]*/g, "get_view->getLayoutParams;");
      obj.runInUI = cmd;
      return obj;
    } else {
      console.error("ID null, this is not supposed to happen. Debug this or/and raise a issue in bitbucket.");
    }
    return {};
  }

  var _id = config.id;
  var cmd = "set_view=ctx->findViewById:i_" + _id + ";";
  // var runInUI;
  delete config.id;
  config.root = "true";
  var obj = parseParams(type, config, "get");
  obj.runInUI = cmd + obj.runInUI + ';';
  obj.id = _id;
  return obj;
}

function getRunInUICmd(prop) {
  var cmd;
  if (false) {} else if (true) {
    cmd = prop;
  } else {}
  return cmd;
}

// Not exported
function applyProp(element, attribute, set) {
  var prop = {
    id: element.__ref.__id
  };
  prop[attribute.value0] = attribute.value1;

  if (attribute.value0 == 'focus' && attribute.value1 == false && "IOS" == "ANDROID") {
    return;
  }

  if (false) { var cmd; } else if (true) {
    Android.runInUI(prop);
  } else {}
  // Android.runInUI(parseParams("linearLayout", prop, "set"));
}

function replaceView(element, attribute, removeProp) {
  // console.log("REPLACE VIEW", element.__ref.__id, element.props);
  var props = helper.clone(element.props, null);
  props.id = element.__ref.__id;
  var rep;
  var viewGroups = ["linearLayout", "relativeLayout", "scrollView", "frameLayout", "horizontalScrollView"];

  if (viewGroups.indexOf(element.type) != -1) {
    props.root = true;
    rep = prestoDom(element.type, props, []);
  } else if (false) {} else {
    rep = prestoDom(element.type, props, []);
  }
  if (false) {} else {
    Android.replaceView(rep, element.__ref.__id);
  }
}

function createPrestoElement() {
  if (typeof window.__ui_id_sequence != "undefined" && window.__ui_id_sequence != null) {
    return { __id: ++window.__ui_id_sequence };
  } else {
    window.__ui_id_sequence = typeof Android.getNewID == "function" ? parseInt(Android.getNewID()) * 1000000 : window.__PRESTO_ID;
    return { __id: ++window.__ui_id_sequence };
  }
};

function moveChild(child, parent, index) {
  Android.moveView(child.__ref.__id, index);
}

function removeChild(child, parent, index) {
  // console.log("Remove child :", child.type);
  Android.removeView(child.__ref.__id + "");
}

function addChild(child, parent, index) {
  if (child.type == null) {
    console.warn("child null");
  }
  // console.log("Add child :", child.__ref.__id, child.type);
  var viewGroups = ["linearLayout", "relativeLayout", "scrollView", "frameLayout", "horizontalScrollView"];
  if (false) {} else Android.addViewToParent(parent.__ref.__id, domAll(child), index, null, null);
}

function addAttribute(element, attribute) {
  // console.log("add attr :", attribute);
  element.props[attribute.value0] = attribute.value1;
  applyProp(element, attribute, true);
}

function removeAttribute(element, attribute) {
  // console.log("remove attr :", attribute);
  replaceView(element, attribute, true);
}

function updateAttribute(element, attribute) {
  // console.log("update attr :", attribute);
  element.props[attribute.value0] = attribute.value1;

  applyProp(element, attribute, false);
}

function insertDom(root, dom, cb) {
  root.children.push(dom);
  dom.parentNode = root;
  dom.__ref = createPrestoElement();
  window.N = root;

  var rootId = window.__ROOTSCREEN.idSet.root;

  dom.props.root = true;

  var length = window.__ROOTSCREEN.idSet.child.push(dom.__ref.__id);

  var callback = window.callbackMapper(executePostProcess(cb));
  if (false) {} else {
    Android.addViewToParent(rootId, domAll(dom), length - 1, callback, null);
  }

  return dom.__ref.__id;
}

function executePostProcess(cb) {
  return function () {
    cb();

    if (window.__dui_screen && window["afterRender"]) {
      for (var tag in window["afterRender"][window.__dui_screen]) {
        try {
          window["afterRender"][window.__dui_screen][tag]()();
          window["afterRender"][window.__dui_screen]["executed"] = true;
        } catch (err) {
          console.warn(err);
        }
      }
    }

    if (JBridge && JBridge.setShadow) {
      for (var tag in window.shadowObject) {
        JBridge.setShadow(window.shadowObject[tag]["level"], JSON.stringify(window.shadowObject[tag]["viewId"]), JSON.stringify(window.shadowObject[tag]["backgroundColor"]), JSON.stringify(window.shadowObject[tag]["blurValue"]), JSON.stringify(window.shadowObject[tag]["shadowColor"]), JSON.stringify(window.shadowObject[tag]["dx"]), JSON.stringify(window.shadowObject[tag]["dy"]), JSON.stringify(window.shadowObject[tag]["spread"]), JSON.stringify(window.shadowObject[tag]["factor"]));
      }
    }
  };
}

module.exports = {
  domAll: domAll,
  getDomToRender: getDomToRender,
  getRunInUICmd: getRunInUICmd,
  replaceView: replaceView,
  createPrestoElement: createPrestoElement,
  moveChild: moveChild,
  removeChild: removeChild,
  addChild: addChild,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  updateProperty: updateAttribute,
  addProperty: addAttribute,
  insertDom: insertDom
};

/***/ }),

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

var BaseView = __webpack_require__(/*! ./baseView */ "./src/baseView.js");
var VIEW = new BaseView(null, null, {});

// Object of types of animations available on screen change
var AnimationTypes = {
  SLIDE: {
    name: "slide",
    handler: slideHandler
  },
  SLIDE_VERTICAL: {
    name: "slide_down",
    handler: slideDownHandler
  },
  SIMPLE: {
    name: "simple",
    handler: simpleHandler
  }
};

var DEFAULT_ANIMATION = AnimationTypes.SLIDE;

function simpleHandler(fromId, toId, direction) {
  var cmd = VIEW.cmd({
    id: toId,
    translationZ: ++window.ZIndex
  });
  return cmd;
}

function slideDownHandler(fromId, toId, direction) {
  var container = VIEW.cmdContainer();
  var cmd = void 0;

  if (direction == 1) {
    cmd = VIEW.cmd({
      id: toId,
      translationY: window.__HEIGHT,
      a_duration: '300',
      a_translationY: '0',
      translationZ: ++window.ZIndex
    });
    container = container.addCmd(cmd);

    cmd = VIEW.cmd({
      id: fromId,
      a_translationY: -0.2 * window.__HEIGHT,
      a_duration: '300'
    });
    container = container.addCmd(cmd);

    return container;
  }

  window.ZIndex++;
  cmd = VIEW.cmd({
    id: fromId,
    translationY: 0,
    a_translationY: window.__HEIGHT,
    a_duration: '300',
    translationZ: ++window.ZIndex
  });
  container = container.addCmd(cmd);

  cmd = VIEW.cmd({
    id: toId,
    translationZ: window.ZIndex - 1,
    a_translationY: '0',
    translationY: -0.2 * window.__HEIGHT,
    a_duration: '300'
  });
  container = container.addCmd(cmd);

  return container;
}

function slideHandler(fromId, toId, direction) {
  var container = VIEW.cmdContainer();
  var cmd = void 0;
  if (direction == 1) {
    cmd = VIEW.cmd({
      id: toId,
      visibility: 'visible',
      translationX: window.__WIDTH,
      a_duration: '300',
      a_translationX: '0',
      translationZ: ++window.ZIndex
    });
    container = container.addCmd(cmd);
    cmd = VIEW.cmd({
      id: fromId,
      translationX: '0',
      visibility: 'visible',
      a_duration: '300',
      a_translationX: -.2 * window.__WIDTH + ''
    });
    container = container.addCmd(cmd);
  }

  if (direction == -1) {
    window.ZIndex++;
    cmd = VIEW.cmd({
      id: fromId,
      translationX: '0',
      a_duration: '300',
      a_translationX: window.__WIDTH,
      translationZ: ++window.ZIndex
    });
    container = container.addCmd(cmd);

    cmd = VIEW.cmd({
      id: toId,
      visibility: 'visible',
      translationX: -.2 * window.__WIDTH + '',
      a_duration: '300',
      a_translationX: '0',
      translationZ: window.ZIndex - 1
    });
    container = container.addCmd(cmd);
  }

  return container;
}

/*
  Generic Handler for Animation
  Arguments:
    fromViewId: Number - Id of the view currently visible on the screen
    toViewID: Number - Id of the view which has to be brought on the screen
    ID: Number - Id of the view to be animated
    animator: Obj - {name:string, handler:function}
    direction: Number - Represents of the direction of the screen
      -1 : Go back to the already rendered screen (right to left)
       1 : Go to the new screen (left to right)
*/
function getAnimation(fromViewID, toViewId, direction, animator) {
  if (!animator) animator = DEFAULT_ANIMATION;

  if ((typeof animator === "undefined" ? "undefined" : _typeof(animator)) === "object" && typeof animator.handler === "function") return animator.handler(fromViewID, toViewId, direction);else console.log(new Error("Animation handler is not a function, type: " + animator));
}

module.exports.types = AnimationTypes;
module.exports.getAnimation = getAnimation;

/***/ }),

/***/ "./src/baseView.js":
/*!*************************!*\
  !*** ./src/baseView.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var merge = __webpack_require__(/*! ./helper */ "./src/helper.js").merge;

String.prototype.addCmd = function (data) {
  return this.concat(data);
};

Array.prototype.addCmd = function (data) {
  this.push(data);
  return this;
};

var parseParams = void 0;
if (false) {}else if (false) {}else parseParams = __webpack_require__(/*! ./helpers/ios/parseParams */ "./src/helpers/ios/parseParams.js");

var BaseView = function () {
  function BaseView(props, children) {
    _classCallCheck(this, BaseView);

    this.props = props || {};
    this.children = children || [];

    window.__SETFN = function (config) {
      Android.runInUI(this.set(config), null);
    }.bind(this);

    this.idSet = {};

    if (this.props.id) {
      this.idSet["id"] = this.props.id;
    } else {
      this.props.id = this.id("id");
    }

    if (this.props._ref) {
      this.props._ref(this);
    }
  }

  _createClass(BaseView, [{
    key: "resolveChildren",
    value: function resolveChildren() {
      return this.children.map(function (child) {
        return child.render();
      });
    }
  }, {
    key: "findRecurse",
    value: function findRecurse(obj, selector) {
      var children = obj.children;

      for (var i = 0; i < children.length; i++) {
        if (children[i].displayName && children[i].displayName == selector) {
          this.foundChildren.push(children[i]);
        }

        if (children[i].children && children[i].children.length) this.findRecurse(children[i], selector);
      }

      return;
    }
  }, {
    key: "find",
    value: function find(selector, obj) {
      this.foundChildren = [];

      if (!obj) this.findRecurse(this.layout, selector);else this.findRecurse(obj, selector);

      return this.foundChildren;
    }
  }, {
    key: "id",
    value: function id(name) {
      if (!this.idSet[name]) {
        window.__ID++;
        this.idSet[name] = window.__ID;
      }

      return this.idSet[name];
    }
  }, {
    key: "setIds",
    value: function setIds(arr) {
      if (!this.idSet) this.idSet = {};

      for (var i = 0; i < arr.length; i++) {
        if (!this.idSet[arr[i]]) {
          window.__ID++;
          this.idSet[arr[i]] = window.__ID + '';
        }
      }
    }
  }, {
    key: "handleSpecialChars",
    value: function handleSpecialChars(value) {
      value = value.indexOf(',') > -1 ? value.replace(/\,/g, '\\\\,') : value;
      value = value.indexOf(':') > -1 ? value.replace(/\:/g, '\\\\:') : value;
      value = value.indexOf('=') > -1 ? value.replace(/\=/g, '\\\\=') : value;
      value = value.indexOf(';') > -1 ? value.replace(/\;/g, '\\\\;') : value;

      return value;
    }
  }, {
    key: "cmdForAndroid",
    value: function cmdForAndroid(config) {
      var cmd = "set_view=ctx->findViewById:i_" + config.id + ";";
      var runInUI;

      if (config.toast) {
        cmd = "set_TOAST=android.widget.Toast->makeText:ctx_ctx,cs_" + this.handleSpecialChars(config.text) + ",i_" + (config.duration == "short" ? 0 : 1) + ";get_TOAST->show";
      } else if (config && Object.keys(config).length) {
        delete config.id;

        config.root = "true";
        runInUI = parseParams("linearLayout", config, "get").runInUI;

        cmd += runInUI + ';';
      }

      return cmd;
    }
  }, {
    key: "cmdContainer",
    value: function cmdContainer() {
      if (false) {}
      return [];
    }
  }, {
    key: "cmdForWeb",
    value: function cmdForWeb(config) {
      if (Object.keys(config).length) return parseParams("linearLayout", config, "set");
    }
  }, {
    key: "cmd",
    value: function cmd(config) {
      if (false) {}else if (false) {}
      return config;
    }
  }, {
    key: "appendChild",
    value: function appendChild(id, jsx, index, fn, replaceChild) {
      var proxyFnName;
      if (!replaceChild) {
        replaceChild = false;
      }

      if (fn) {
        proxyFnName = 'F' + window.__FN_INDEX;
        window.__PROXY_FN[proxyFnName] = fn;
        window.__FN_INDEX++;
      }

      jsx =  true ? jsx : undefined;

      if (proxyFnName) Android.addViewToParent(id, jsx, index, proxyFnName, replaceChild);else Android.addViewToParent(id, jsx, index, null, replaceChild);
    }
  }, {
    key: "getView",
    value: function getView(jsx) {
      if (true) return jsx;

      return JSON.stringify(jsx);
    }
  }, {
    key: "updateProps",
    value: function updateProps(props) {
      this.props = merge(this.props, props);
      var oldContainerId = this.layout.idSet.id;
      var layout = this.render();
      for (var i = 0; i < layout.children.length; i++) {
        if (i == 0) this.replaceChild(oldContainerId, layout.children[i], i);else this.appendChild(oldContainerId, layout.children[i], i);
      }
      this.layout.idSet.id = oldContainerId;
    }
  }, {
    key: "removeView",
    value: function removeView(id) {
      if (__OS == "WEB") return Android.removeView(id);
      return "set_VIEW=ctx->findViewById:i_" + id + ";set_PARENT=get_VIEW->getParent;get_PARENT->removeView:get_VIEW;";
    }
  }, {
    key: "removeChildren",
    value: function removeChildren(id) {
      if (__OS == "WEB") return Android.removeChildren(id);
      return "set_VIEW=ctx->findViewById:i_" + id + ";get_VIEW->removeAllViews;";
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(id, jsx, index, fn) {
      this.appendChild(id, jsx, index, fn, true);
    }
  }]);

  return BaseView;
}();

module.exports = BaseView;

/***/ }),

/***/ "./src/computeIOS.js":
/*!***************************!*\
  !*** ./src/computeIOS.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var computeChildDimens = function computeChildDimens(view) {
  if (view.props) {
    view.props.useConstraits = true;
  }
  // if (view.type == "linearLayout" && view.children && view.children.length){
  //   view.props.weightSum = 0.0;
  //   view.props.diffHeight = 0.0;
  //   for(var i in view.children){
  //     var child = view.children[i];
  //     if(child.props && child.props.weight){
  //       view.props.weightSum += parseInt(child.props.weight)
  //     } else if(child.props && child.props.height) {
  //       view.props.diffHeight += parseInt(child.props.height)
  //     }
  //   }
  // }
  return view;
};

module.exports = {
  computeLinearlayout: function computeLinearlayout(view) {
    return computeChildDimens(view);
  },
  computeRelativeLayout: function computeRelativeLayout(view) {
    return computeChildDimens(view);
  },
  computeScrollView: function computeScrollView(view) {
    return computeChildDimens(view);
  },
  computeChildDimens: computeChildDimens
};

/***/ }),

/***/ "./src/doms/index.js":
/*!***************************!*\
  !*** ./src/doms/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

function run() {
  if (true) {
    return __webpack_require__(/*! ./ios */ "./src/doms/ios.js");
  } else {}
}

module.exports = run();

/***/ }),

/***/ "./src/doms/ios.js":
/*!*************************!*\
  !*** ./src/doms/ios.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

Array.prototype.flatten = function () {
  return this.reduce(function (prev, cur) {
    var more = [].concat(cur).some(Array.isArray);
    return prev.concat(more ? cur.flatten() : cur);
  }, []);
};

function flattenObject(ob) {
  var toReturn = {};
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if (_typeof(ob[i]) == 'object') {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        if (typeof flatObject[x] !== "undefined") toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
};

module.exports = function (type, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var paramType;

  children = children.flatten();

  if (!props) props = {};

  if (typeof type === "string") {
    props.node_id = window.__NODE_ID + '';
    props = flattenObject(props);
    window.__NODE_ID++;
    children.forEach(function (child) {
      child.props.parentId = props.id;
    });

    if (!props.__filename) props.__filename = "filename not added";

    return { type: type, props: props, children: children };
  } else {
    return new type(props, children);
  }
};

/***/ }),

/***/ "./src/handler.js":
/*!************************!*\
  !*** ./src/handler.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = {
  handle: function handle(ui, callback) {
    if (!ui) {
      return;
    }
    if (ui.render) {
      if (typeof Android === "undefined") throw new Error("Android is undefined");

      if (true) return Android.Render(ui.render, null);else {}
    }

    if (ui.runInUI) {
      Android.runInUI(ui.runInUI, null);
    }
    if (ui.addViewToParent) {
      Android.addViewToParent(ui.addViewToParent.parentId, JSON.stringify(ui.addViewToParent.jsx), ui.addViewToParent.index, null);
    }
  }
};

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

// Following functions are used by WEB and IOS Render
function cacheDimen(view) {
  var props = view.props;
  var dimen = {
    w: props.w,
    h: props.h,
    x: props.x,
    y: props.y,
    gravity: props.gravity,
    padding: props.padding,
    orientation: props.orientation,
    stroke: props.stroke ? props.stroke.split(",")[0] * 1 : 0
  };
  window.__VIEW_DIMENSIONS[props.id] = dimen;
}

function shouldMove(view) {
  var props = view.props;
  var dimen = {
    w: props.w,
    h: props.h,
    x: props.x,
    y: props.y
  };
  var cachedDimen = window.__VIEW_DIMENSIONS[props.id];
  var changed = false;
  if (!cachedDimen) return dimen;
  for (var key in dimen) {
    if (cachedDimen[key] != dimen[key]) {
      dimen.id = props.id;
      changed = true;
    }
  }
  if (changed) return dimen;
  return null;
}

function getOS() {
  var userAgent = navigator.userAgent;
  if (!userAgent) return console.error(new Error("UserAgent is null"));
  if (userAgent.includes("Android") && userAgent.includes("Version")) return "ANDROID";
  if ((userAgent.includes("iPhone") || userAgent.includes("iPad")) && !userAgent.includes("Version")) return "IOS";
  return "WEB";
}

function clearViewExternals(view) {
  if (!view) return;

  delete window.__VIEWS[view.props.id];
  delete window.__VIEW_DIMENSIONS[view.props.id];

  if (__OBSERVERS[view.props.id]) delete window.__OBSERVERS[view.props.id];

  view.children.forEach(clearViewExternals);
}

// use: clone( <thing to copy> ) returns <new copy>
function clone(o, m) {
  // return non object values
  if ('object' !== (typeof o === "undefined" ? "undefined" : _typeof(o))) return o;
  // m: a map of old refs to new object refs to stop recursion
  if ('object' !== (typeof m === "undefined" ? "undefined" : _typeof(m)) || null === m) m = new WeakMap();
  var n = m.get(o);
  if ('undefined' !== typeof n) return n;
  // shallow/leaf clone object
  var c = Object.getPrototypeOf(o).constructor;
  // TODO: specialize copies for expected built in types i.e. Date etc
  switch (c) {
    // shouldn't be copied, keep reference
    case Boolean:
    case Error:
    case Function:
    case Number:
    case Promise:
    case String:
    case Symbol:
    case WeakMap:
    case WeakSet:
      n = o;
      break;
    // array like/collection objects
    case Array:
      m.set(o, n = o.slice(0));
      // recursive copy for child objects
      n.forEach(function (v, i) {
        if ('object' === (typeof v === "undefined" ? "undefined" : _typeof(v))) n[i] = clone(v, m);
      });
      break;
    case ArrayBuffer:
      m.set(o, n = o.slice(0));
      break;
    case DataView:
      m.set(o, n = new c(clone(o.buffer, m), o.byteOffset, o.byteLength));
      break;
    case Map:
    case Set:
      m.set(o, n = new c(clone(Array.from(o.entries()), m)));
      break;
    case Int8Array:
    case Uint8Array:
    case Uint8ClampedArray:
    case Int16Array:
    case Uint16Array:
    case Int32Array:
    case Uint32Array:
    case Float32Array:
    case Float64Array:
      m.set(o, n = new c(clone(o.buffer, m), o.byteOffset, o.length));
      break;
    // use built in copy constructor
    case Date:
    case RegExp:
      m.set(o, n = new c(o));
      break;
    // fallback generic object copy
    default:
      m.set(o, n = Object.assign(new c(), o));
      // recursive copy for child objects
      for (c in n) {
        if ('object' === _typeof(n[c])) n[c] = clone(n[c], m);
      }}
  return n;
}

function merge() {
  var obj = {},
      i = 0,
      il = arguments.length,
      key;
  for (; i < il; i++) {
    for (key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key)) {
        obj[key] = arguments[i][key];
      }
    }
  }
  return obj;
};

module.exports = {
  shouldMove: shouldMove,
  cacheDimen: cacheDimen,
  getOS: getOS,
  merge: merge,
  clearViewExternals: clearViewExternals,
  clone: clone
};

/***/ }),

/***/ "./src/helpers/android/index.js":
/*!**************************************!*\
  !*** ./src/helpers/android/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = {
	parseParams: __webpack_require__(/*! ./parseParams */ "./src/helpers/android/parseParams.js"),
	mapPrams: __webpack_require__(/*! ./mapParams */ "./src/helpers/android/mapParams.js"),
	callbackMapper: __webpack_require__(/*! ../common/callbackMapper */ "./src/helpers/common/callbackMapper.js")
};

/***/ }),

/***/ "./src/helpers/android/mapParams.js":
/*!******************************************!*\
  !*** ./src/helpers/android/mapParams.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ref, _ref2, _map;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var map = (_map = {
  textFromHtml: {
    values: [{
      type: 's'
    }],
    dontMap: 'true',
    fnName: 'setText',
    inVokedIn: 'VIEW'
  },
  baseAlign: {
    values: [{
      type: 'b'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setBaselineAligned"
  },
  showDividers: {
    values: [{
      type: 'i'
    }],
    dontMap: 'true',
    fnName: 'setShowDividers',
    inVokedIn: 'VIEW'
  },
  "dividerDrawable": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setDividerDrawable',
    inVokedIn: 'VIEW'
  },
  tabTextColors: {
    values: [{
      type: 's'
    }, {
      type: 's'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: 'setTabTextColors'
  },
  "selectedTabIndicatorHeight": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setSelectedTabIndicatorHeight',
    inVokedIn: 'VIEW'
  },
  foreground: {
    values: [{
      type: 'b'
    }],
    dontMap: 'true',
    fnName: 'setColor',
    inVokedIn: 'FOREGROUND'
  },
  selectedTabIndicatorColor: {
    values: [{
      type: 's'
    }],
    dontMap: true,
    fnName: 'setSelectedTabIndicatorColor',
    inVokedIn: 'VIEW'
  },
  layoutTransition: {
    values: [{
      type: 'b'
    }],
    dontMap: 'true',
    fnName: 'setLayoutTransition',
    inVokedIn: 'LAYOUT_TRANSITION'
  },

  focusOut: { // doesnt work
    dontMap: 'true',
    fnName: 'clearFocus',
    inVokedIn: 'VIEW'
  },
  focus: {
    dontMap: 'true',
    fnName: 'requestFocus',
    inVokedIn: 'VIEW'
  },

  fillViewport: {
    values: [{
      type: 'b'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setFillViewport"
  },
  "primitive": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setPrimitive',
    inVokedIn: 'VIEW'
  },
  "cx": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setCx',
    inVokedIn: 'VIEW'
  },
  "cy": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setCy',
    inVokedIn: 'VIEW'
  },
  "radius": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setRadius',
    inVokedIn: 'VIEW'
  },
  "hex": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setColor',
    inVokedIn: 'VIEW'
  },
  "style": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setStyle',
    inVokedIn: 'VIEW'
  },
  "sweepAngle": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setSweepAngle',
    inVokedIn: 'VIEW'
  },
  "startAngle": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setStartAngle',
    inVokedIn: 'VIEW'
  },
  "strokeWidth": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setStrokeWidth',
    inVokedIn: 'VIEW'
  },
  setDate: {
    values: [{
      type: 'l'
    }],
    dontMap: 'true',
    fnName: 'setDate',
    inVokedIn: 'VIEW'
  },
  minDate: {
    values: [{
      type: 'l'
    }],
    dontMap: 'true',
    fnName: 'setMinDate',
    inVokedIn: 'VIEW'
  },
  maxDate: {
    values: [{
      type: 'l'
    }],
    dontMap: 'true',
    fnName: 'setMaxDate',
    inVokedIn: 'VIEW'
  },
  clipChildren: {
    values: [{
      type: 'b'
    }],
    dontMap: 'true',
    fnName: 'setClipChildren',
    inVokedIn: 'VIEW'
  },
  adjustViewBounds: {
    values: [{
      type: 'b'
    }],
    dontMap: 'true',
    fnName: 'setAdjustViewBounds',
    inVokedIn: 'VIEW'
  },
  maxLines: {
    values: [{
      type: 'i'
    }],
    dontMap: 'true',
    fnName: 'setMaxLines',
    inVokedIn: 'VIEW'
  },
  singleLine: {
    values: [{
      type: 'b'
    }],
    dontMap: 'true',
    fnName: 'setSingleLine',
    inVokedIn: 'VIEW'
  },
  hardware: {
    values: [{
      type: 'i'
    }, {
      type: 'i'
    }],
    dontMap: true,
    fnName: 'setLayerType',
    inVokedIn: 'VIEW'
  },
  selected: {
    values: [{
      type: 'b'
    }],
    dontMap: true,
    fnName: 'setSelected',
    inVokedIn: 'VIEW'
  },
  curve: {
    values: [{
      type: 's',
      'linear': "0"
    }],
    fnName: 'setInterpolator',
    inVokedIn: 'VIEW'
  },
  fontFamily: {
    values: [{
      type: 's',
      dontMap: true
    }, {
      type: 'i',
      'normal': 0,
      'bold': 1,
      'italic': 2,
      'bold_italic': 3
    }],
    fnName: 'setFontFamily',
    inVokedIn: 'VIEW'
  },
  x: {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setX',
    inVokedIn: 'VIEW'
  },
  'bringToFront': {
    values: [],
    inVokedIn: 'VIEW',
    fnName: "bringToFront"
  },
  'above': {
    values: [{
      type: 'i',
      dontMap: true
    }, {
      type: 'i',
      dontMap: true
    }],
    inVokedIn: 'PARAMS',
    fnName: "addRule"
  },
  "checked": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setChecked',
    inVokedIn: 'VIEW'
  },
  y: {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setY',
    inVokedIn: 'VIEW'
  },
  "backgroundDrawable": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setBackground',
    inVokedIn: 'VIEW'
  },
  buttonTint: {
    value: [{
      type: 's'
    }],
    dontMap: true,
    fnName: 'setButtonTintList',
    inVokedIn: 'VIEW'
  },
  visibility: {
    values: [{
      type: 'i',
      visible: 0,
      invisible: 4,
      gone: 8
    }],
    fnName: 'setVisibility',
    inVokedIn: 'VIEW'
  },
  "scaleType": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setScaleType',
    inVokedIn: 'VIEW'
  },
  "progressColor": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setIndeterminateTintList',
    inVokedIn: 'VIEW'
  },
  "alpha": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setAlpha',
    inVokedIn: 'VIEW'
  },
  "imageUrl": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setImageDrawable',
    inVokedIn: 'VIEW'
  },
  "placeHolder": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setImageDrawable',
    inVokedIn: 'VIEW'
  },
  "packageIcon": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setImageDrawable',
    inVokedIn: 'VIEW'
  },
  "scrollTo": {
    values: [{
      type: 'i'
    }, {
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'smoothScrollTo',
    inVokedIn: 'VIEW'
  },
  "cornerRadii": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setCornerRadii',
    inVokedIn: 'DRAWABLE'
  },
  "lineSpacing": {
    values: [{
      type: 'dp'
    }, {
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setLineSpacing',
    inVokedIn: 'VIEW'
  },
  "url": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'loadUrl',
    inVokedIn: 'VIEW'
  },
  "translationY": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setTranslationY',
    inVokedIn: 'VIEW'
  },
  "translationX": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setTranslationX',
    inVokedIn: 'VIEW'
  },
  translationZ: {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setTranslationZ',
    inVokedIn: 'VIEW'
  },
  "delay": {
    values: [{
      type: 'l'
    }],
    'dontMap': true,
    fnName: 'setStartDelay'
  },
  "duration": {
    values: [{
      type: 'l'
    }],
    'dontMap': true,
    fnName: 'setDuration'
  },
  "pivotX": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setPivotX',
    inVokedIn: 'VIEW'
  },
  "pivotY": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setPivotY',
    inVokedIn: 'VIEW'
  },
  "minWidth": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setMinimumWidth',
    inVokedIn: 'VIEW'
  },
  "minHeight": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setMinimumHeight',
    inVokedIn: 'VIEW'
  },
  "maxWidth": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setMaxWidth',
    inVokedIn: 'VIEW'
  },
  "shadowTag": {
    values: [{
      type: 'cs'
    }],
    'dontMap': true,
    fnName: 'shadowTag',
    inVokedIn: 'VIEW'
  },
  "androidShadow": {
    values: [{
      type: 'cs'
    }],
    'dontMap': true,
    fnName: 'androidShadow',
    inVokedIn: 'VIEW'
  },
  "gradient": {
    values: [{
      type: 'cs'
    }],
    'dontMap': true,
    fnName: 'setColors',
    inVokedIn: 'DRAWABLE'
  },
  "gradientAngle": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setOrientation',
    inVokedIn: 'DRAWABLE'
  },
  "lineHeight": {
    values: [{
      type: 'dp'
    }],
    'dontMap': true,
    fnName: 'setLineHeight',
    inVokedIn: 'VIEW'
  },
  "letterSpacing": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setLetterSpacing',
    inVokedIn: 'VIEW'
  },
  "hint": {
    values: [{
      type: 'cs'
    }],
    'dontMap': true,
    fnName: 'setHint',
    inVokedIn: 'VIEW'
  },
  "inputType": {
    values: [{
      type: 'i',
      password: '129',
      numeric: '2',
      numericPassword: '18',
      numericWithoutSuggestion: '524291',
      disabled: '0',
      text: '1',
      multiText: '3'
    }],
    fnName: 'setInputType',
    inVokedIn: 'VIEW'
  },
  "inputTypeI": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setInputType',
    inVokedIn: 'VIEW'
  },
  "textSize": {
    values: [{
      type: 'i'
    }, {
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setTextSize',
    inVokedIn: 'VIEW'
  },
  "fontSize": {
    values: [{
      type: 'i'
    }, {
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setTextSize',
    inVokedIn: 'VIEW'
  },
  "textIsSelectable": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setTextIsSelectable',
    inVokedIn: 'VIEW'
  },
  "fontStyle": {
    values: [{
      type: 's'
    }],
    dontMap: 'true',
    fnName: 'setTypeface',
    inVokedIn: 'VIEW'
  },
  "textAllCaps": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setAllCaps',
    inVokedIn: 'VIEW'
  },
  "expand": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setExpand',
    inVokedIn: 'VIEW'
  },
  "focusableInTouchMode": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setFocusableInTouchMode',
    inVokedIn: 'VIEW'
  },
  "descendantFocusability": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setDescendantFocusability',
    inVokedIn: 'VIEW'
  },
  "expandDuration": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setExpandDuration',
    inVokedIn: 'VIEW'
  },
  "expandScrollParent": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setScrollParent',
    inVokedIn: 'VIEW'
  },
  "expandAlpha": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setExpandAlpha',
    inVokedIn: 'VIEW'
  },
  "defaultExpand": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setDefaultExpand',
    inVokedIn: 'VIEW'
  },
  "swypeEnabled": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setSwypeEnabled',
    inVokedIn: 'VIEW'
  },
  toast: {
    values: [{
      type: 'cs'
    }],
    'dontMap': true,
    fnName: 'showToast',
    inVokedIn: 'CONTEXT'
  },
  scaleX: {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setScaleX',
    inVokedIn: 'VIEW'
  },
  scaleY: {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setScaleY',
    inVokedIn: 'VIEW'
  },
  id: {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setId',
    inVokedIn: 'VIEW'
  },
  gravity: {
    values: [(_ref = {
      type: 'i',
      center_horizontal: 1,
      center_vertical: 16,
      bottom: 80,
      left: 8388611,
      right: 8388613,
      center: 17
    }, _defineProperty(_ref, 'bottom', 80), _defineProperty(_ref, 'top_vertical', 48), _defineProperty(_ref, 'start', 8388611), _defineProperty(_ref, 'end', 8388613), _ref)],
    fnName: 'setGravity',
    inVokedIn: 'VIEW'
  },
  orientation: {
    values: [{
      type: 'i',
      horizontal: 0,
      vertical: 1
    }],
    fnName: 'setOrientation',
    inVokedIn: 'VIEW'
  },
  text: {
    values: [{
      type: 'cs'
    }],
    dontMap: true,
    fnName: 'setText',
    inVokedIn: 'VIEW'
  },
  width: {
    values: [{
      type: 'i',
      match_parent: -1,
      wrap_content: -2
    }],
    inVokedIn: 'PARAMS',
    ctr: true,
    varName: 'var_width'
  },
  weight: {
    values: [{
      type: 'f',
      match_parent: -1,
      wrap_content: -2
    }],
    dontMap: true,
    inVokedIn: 'PARAMS',
    varName: 'var_weight'
  },
  height: {
    values: [{
      type: 'i',
      match_parent: -1,
      wrap_content: -2
    }],
    inVokedIn: 'PARAMS',
    ctr: true,
    varName: 'var_height'
  },
  layout_gravity: {
    values: [(_ref2 = {
      type: 'i',
      bottom_right: 21,
      top: 30,
      bottom: 50,
      left: 3,
      right: 5,
      center: 17
    }, _defineProperty(_ref2, 'bottom', 80), _defineProperty(_ref2, 'center_horizontal', 1), _defineProperty(_ref2, 'center_vertical', 16), _defineProperty(_ref2, 'start', 8388611), _defineProperty(_ref2, 'end', 8388613), _ref2)],
    inVokedIn: 'PARAMS',
    varName: "var_gravity"
  },
  margin: {
    values: [{
      type: 'dp'
    }, {
      type: 'dp'
    }, {
      type: 'dp'
    }, {
      type: 'dp'
    }],
    dontMap: true,
    inVokedIn: 'PARAMS',
    fnName: "setMargins"
  },
  marginStart: {
    values: [{
      type: 'dp'
    }],
    dontMap: true,
    inVokedIn: 'PARAMS',
    fnName: "setMarginStart"
  },
  marginEnd: {
    values: [{
      type: 'dp'
    }],
    dontMap: true,
    inVokedIn: 'PARAMS',
    fnName: "setMarginEnd"
  },
  padding: {
    values: [{
      type: 'dp'
    }, {
      type: 'dp'
    }, {
      type: 'dp'
    }, {
      type: 'dp'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setPaddingRelative"
  },
  'centerInParent': {
    values: [{
      type: 'i',
      'true': 13,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }],
    inVokedIn: 'PARAMS',
    fnName: "addRule"
  },
  'centerHorizontal': {
    values: [{
      type: 'i',
      'true': 14,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }],
    inVokedIn: 'PARAMS',
    fnName: "addRule"
  },
  'centerVertical': {
    values: [{
      type: 'i',
      'true': 15,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }],
    inVokedIn: 'PARAMS',
    fnName: "addRule"
  }
}, _defineProperty(_map, 'checked', {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setChecked',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'alignParentBottom', {
  values: [{
    type: 'i',
    'true': 12,
    'false': 12121
  }, {
    type: 'i',
    dontMap: true
  }],
  inVokedIn: 'PARAMS',
  fnName: "addRule"
}), _defineProperty(_map, 'alignParentTop', {
  values: [{
    type: 'i',
    'true': 10,
    'false': 12121
  }, {
    type: 'i',
    dontMap: true
  }],
  inVokedIn: 'PARAMS',
  fnName: "addRule"
}), _defineProperty(_map, 'alignParentRight', {
  values: [{
    type: 'i',
    'true': 11,
    'false': 12121
  }, {
    type: 'i',
    dontMap: true
  }],
  inVokedIn: 'PARAMS',
  fnName: "addRule"
}), _defineProperty(_map, 'alignParentLeft', {
  values: [{
    type: 'i',
    'true': 9,
    'false': 12121
  }, {
    type: 'i',
    dontMap: true
  }],
  inVokedIn: 'PARAMS',
  fnName: "addRule"
}), _defineProperty(_map, 'leftOf', {
  values: [{
    type: 'i',
    'true': 0,
    'false': 12121
  }, {
    type: 'i',
    dontMap: true
  }],
  inVokedIn: 'PARAMS',
  fnName: "addRule"
}), _defineProperty(_map, 'cornerRadius', {
  values: [{
    type: 'dpf'
  }],
  dontMap: true,
  inVokedIn: 'DRAWABLE',
  fnName: "setCornerRadius"
}), _defineProperty(_map, 'stroke', {
  values: [{
    type: 'dp'
  }, {
    type: 's'
  }],
  dontMap: true,
  inVokedIn: 'DRAWABLE',
  fnName: "setStroke"
}), _defineProperty(_map, "typeface", {
  values: [{
    type: 'i',
    'normal': 0,
    'bold': 1,
    'italic': 2,
    'bold_italic': 3
  }],
  fnName: 'setTypeface',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'background', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  inVokedIn: 'DRAWABLE',
  fnName: "setColor"
}), _defineProperty(_map, 'backgroundDrawable', {
  values: [{
    type: 's'
  }],
  'dontMap': true,
  fnName: 'setBackgroundDrawable',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'backgroundColor', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  inVokedIn: 'VIEW',
  fnName: "setBackgroundColor"
}), _defineProperty(_map, 'color', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setTextColor',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'hintColor', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setHintTextColor',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'btnBackground', {
  values: [{
    type: 's'
  }, {
    type: 'i'
  }],
  dontMap: true,
  inVokedIn: 'MUTATEBG',
  fnName: "setColorFilter"
}), _defineProperty(_map, 'colorFilter', {
  values: [{
    type: 's'
  }, {
    type: 'i'
  }],
  dontMap: true,
  inVokedIn: 'VIEW',
  fnName: "setColorFilter"
}), _defineProperty(_map, 'btnColor', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setTextColor',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'shadowLayer', {
  values: [{
    type: 'f'
  }, {
    type: 'f'
  }, {
    type: 'f'
  }, {
    type: 'i'
  }],
  dontMap: true,
  fnName: 'setShadowLayer',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'elevation', {
  values: [{
    type: 'i'
  }],
  dontMap: true,
  fnName: 'setElevation',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'rotationX', {
  values: [{
    type: 'f'
  }],
  dontMap: true,
  fnName: 'setRotationX',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'rotationY', {
  values: [{
    type: 'f'
  }],
  dontMap: true,
  fnName: 'setRotationY',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'rotation', {
  values: [{
    type: 'f'
  }],
  dontMap: true,
  fnName: 'setRotation',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'backgroundTint', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setBackgroundTintList',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "scrollBarX", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setHorizontalScrollBarEnabled',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "scrollBarY", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setVerticalScrollBarEnabled',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "clickable", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setClickable',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "cursor", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setCursorVisible',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "longClickable", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setLongClickable',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "focusable", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setFocusable',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "selectable", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setBackgroundResource',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "selectableItem", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setBackgroundResource',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'values', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setAdapter',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'maxSeek', {
  values: [{
    type: 'i'
  }],
  fnName: 'setMax',
  inVokedIn: "VIEW",
  dontMap: true
}), _defineProperty(_map, 'accessibilityHint', {
  values: [{
    type: 's'
  }],
  dontMap: 'true',
  fnName: 'setContentDescription',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'imeOptions', {
  values: [{
    type: 'i'
  }],
  dontMap: 'true',
  fnName: 'setImeOptions',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "horizontalFade", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setHorizontalFadingEdgeEnabled',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "fadingEdgeLength", {
  values: [{
    type: 'i'
  }],
  'dontMap': true,
  fnName: 'setFadingEdgeLength',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "shimmer", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setBackground',
  alternateFnName: 'setShimmer',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "shimmerActive", {
  values: [],
  'dontMap': true,
  fnName: 'startShimmer',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "shimmerInactive", {
  values: [],
  'dontMap': true,
  fnName: 'stopShimmer',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "peakHeight", {
  values: [{
    type: 'dp'
  }],
  'dontMap': true,
  fnName: 'setPeakHeight',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "sheetState", {
  values: [{
    type: 'i',
    expanded: 3,
    collapsed: 4,
    hidden: 5,
    halfExpanded: 6
  }],
  fnName: 'setState',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "halfExpandedRatio", {
  values: [{
    type: 'f'
  }],
  'dontMap': true,
  fnName: 'setHalfExpandedRatio',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "hideable", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setHideable',
  inVokedIn: 'VIEW'
}), _map);

module.exports = map;

/***/ }),

/***/ "./src/helpers/android/objMap.js":
/*!***************************************!*\
  !*** ./src/helpers/android/objMap.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var map = {
  'PARAMS': {
    'required': 'width, height',
    'viewMethod': 'setLayoutParams,getLayoutParams'
  },
  'DRAWABLE': {
    'ctr': 'android.graphics.drawable.GradientDrawable->new',
    'required': '',
    'viewMethod': 'setBackground,getBackground'
  }
};

module.exports = map;

/***/ }),

/***/ "./src/helpers/android/parseParams.js":
/*!********************************************!*\
  !*** ./src/helpers/android/parseParams.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

var mapParams = __webpack_require__(/*! ./mapParams */ "./src/helpers/android/mapParams.js");
var objMap = __webpack_require__(/*! ./objMap */ "./src/helpers/android/objMap.js");
var callbackMapper = __webpack_require__(/*! ../common/callbackMapper */ "./src/helpers/common/callbackMapper.js");

var globalObjMap = {};
var command = "";
var elementType;
var getSetType;

function isURL(str) {
  try {
    var url = new URL(str);
    return str.indexOf(".") != -1;
  } catch (err) {
    return false;
  }
}

function attachFeedback(config, keys, i) {
  var feedbackFn = function feedbackFn() {};

  if (typeof config.feedback !== "undefined") {
    if (config.feedback == "true") {
      config.feedback = callbackMapper.map(feedbackFn);
      window.__ALL_ONCLICKS.push(config.feedback);
    }

    return;
  }

  if (config.onClick) {
    config.feedback = callbackMapper.map(feedbackFn);
    window.__ALL_ONCLICKS.push(config.feedback);
  }
}

function getConfigGroups(config) {
  var groups = {};
  var objType;
  var isAnimation;
  var widthFound = 0;
  var heightFound = 0;
  var paddingVal = config["padding"];
  if (config.stroke) delete config.padding;
  if (config.margin) {
    var margin = config.margin.split(',').map(function (a) {
      return a * 1;
    });
    config.marginStart = margin[0] + '';
    config.marginEnd = margin[2] + '';
  }
  var keys = Object.keys(config);
  var proxyFnName;
  for (var i = 0; i < keys.length; i++) {
    attachFeedback(config, keys, i);

    if (typeof config[keys[i]] == "undefined" || config[keys[i]] == null) {
      delete config[keys[i]];
    } else if (typeof config[keys[i]] == "function") {
      if (keys[i] == "afterRender" && typeof window.removeAfterRenderProp == "function") {
        /**
         * if the function is present then we are handling afterRender
         * prop in JS itself
         */
        window.removeAfterRenderProp(config["id"], config["afterRender"]);
        delete config["afterRender"];
      } else {
        config[keys[i]] = callbackMapper.map(config[keys[i]]);

        if (keys[i] == "onClick") {
          window.__FN_MAP[config[keys[i]]] = config.text || config.id || "";

          if (!config.allowMultipleClicks || config.allowMultipleClick == "false") {
            window.__THROTTELED_ACTIONS.push(config[keys[i]]);
          }
        }
      }
    } else {
      if (keys[i].indexOf('_') && keys[i].split('_')[0] == 'a') {
        objType = mapParams[keys[i].split('_')[1]];
        isAnimation = true;
      } else {
        objType = mapParams[keys[i]];
        isAnimation = false;
      }

      if (keys[i] == "stroke") {
        (function () {
          var padding = [0, 0, 0, 0];

          if (paddingVal) padding = paddingVal.split(',').map(function (a) {
            return a * 1;
          });

          var strokeValue = config["stroke"].split(',')[0] * 1;
          padding = padding.map(function (dim) {
            return dim + strokeValue;
          });
          config["padding"] = padding.join(',');
          keys.push("padding");
        })();
      }

      if (objType) {
        if (isAnimation) {
          if (!groups['ANIMATION']) groups['ANIMATION'] = [];

          groups['ANIMATION'].push({ key: keys[i].split('_')[1], value: config[keys[i]] });
        } else {
          if (!groups[objType.inVokedIn]) groups[objType.inVokedIn] = [];

          if (keys[i] == "width") widthFound++;
          if (keys[i] == "height") heightFound++;

          groups[objType.inVokedIn].push({ key: keys[i], value: config[keys[i]] });
        }

        if (keys[i] !== "pattern" && keys[i] !== "root" && keys[i] !== "id" && keys[i] !== "__filename") {
          delete config[keys[i]];
        }
      }
    }
  }

  if (getSetType == "set") {
    if (!groups.PARAMS) groups.PARAMS = [];

    if (!widthFound) groups.PARAMS.push({ key: "width", value: 'wrap_content' });
    if (!heightFound) groups.PARAMS.push({ key: "height", value: 'wrap_content' });
  }

  return groups;
}

function getCtr(viewGroup) {
  var viewGroupMap = {
    'linearLayout': 'android.widget.LinearLayout$LayoutParams->new',
    'coordinatorLayout': 'androidx.coordinatorlayout.widget.CoordinatorLayout$LayoutParams->new',
    'scrollView': 'android.widget.LinearLayout$LayoutParams->new',
    'horizontalScrollView': 'android.widget.LinearLayout$LayoutParams->new',
    'relativeLayout': 'android.widget.RelativeLayout$LayoutParams->new',
    'frameLayout': 'android.widget.FrameLayout$LayoutParams->new',
    'toolbar': 'android.support.v7.widget.Toolbar$LayoutParams->new',
    'collapsingToolbarLayout': 'androidx.coordinatorlayout.widget.CoordinatorLayout$LayoutParams->new',
    'appBarLayout': 'android.support.design.widget.AppBarLayout$LayoutParams->new',
    'view': 'android.widget.LinearLayout$LayoutParams->new',
    'tabLayout': 'android.widget.LinearLayout$LayoutParams->new',
    'viewPager': 'android.support.v4.view.ViewPager$LayoutParams->new',
    'listView': 'android.widget.LinearLayout$LayoutParams->new',
    'expandableListView': 'android.widget.LinearLayout$LayoutParams->new',
    'recyclerView': 'android.support.v7.widget.RecyclerView$LayoutParams->new',
    'ratingBar': 'android.widget.LinearLayout$LayoutParams->new',
    'accordionLayout': 'android.widget.FrameLayout$LayoutParams->new',
    'swypeLayout': 'android.widget.FrameLayout$LayoutParams->new',
    'swypeScroll': 'android.widget.LinearLayout$LayoutParams->new',
    "shimmerFrameLayout": "android.widget.FrameLayout$LayoutParams->new",
    "bottomSheetLayout": 'android.widget.FrameLayout$LayoutParams->new'
  };

  if (!viewGroupMap[viewGroup]) {
    throw new Error("No such view group found : " + viewGroup);
  }

  return viewGroupMap[viewGroup];
}

function handleSpecialChars(value) {
  value = value.indexOf(',') > -1 ? value.replace(/\,/g, '\\\\,') : value;
  value = value.indexOf(':') > -1 ? value.replace(/\:/g, '\\\\:') : value;
  value = value.indexOf(':') > -1 ? value.replace(/\=/g, '\\\\=') : value;
  value = value.indexOf(';') > -1 ? value.replace(/\;/g, '\\\\;') : value;

  return value;
}

function appendArgs(attrs, obj) {
  if (!obj.values) return "";

  var args = "";
  var value = attrs.key == "text" || attrs.key == "hint" ? attrs.value : attrs.value.replace(/ /g, '');

  var incomingArgs;
  if (attrs.key == "text" || attrs.key == "hint") {
    incomingArgs = [];
    incomingArgs.push(handleSpecialChars(value));
  } else {
    incomingArgs = value.split(',');
  }

  for (var i = 0; i < obj.values.length; i++) {
    args += obj.values[i].type + '_';

    if (obj.dontMap) args += incomingArgs[i] + ',';else {
      if (obj.values[i].dontMap) {
        args += incomingArgs[i] + ',';
      } else if (attrs.key == "width" || attrs.key == "height") {
        if (!isNaN(incomingArgs[i] * 1)) args = 'dp_' + incomingArgs[i] + ',';else args += obj.values[i][incomingArgs[i]] + ',';
      } else {
        args += obj.values[i][incomingArgs[i]] + ',';
      }
    }
  }

  return args.substring(0, args.length - 1);
}

function prepareCtr(attrs, belongsTo) {
  var obj = objMap[belongsTo];
  var ctr = globalObjMap[belongsTo].ctr;
  var reqAttrs;

  if (getSetType == "get" && (belongsTo == "ANIMATION" || belongsTo == "DRAWABLE" || belongsTo == "PARAMS")) {
    return ctr;
  }

  if (!obj || !obj.required) return ctr;

  reqAttrs = obj.required.split(',');

  ctr += ':';

  for (var i = 0; i < reqAttrs.length; i++) {
    for (var j = 0; j < attrs.length; j++) {
      if (reqAttrs[i].trim() == attrs[j].key) {
        ctr += appendArgs(attrs[j], mapParams[reqAttrs[i].trim()]) + ',';
      }
    }
  }

  return ctr.substring(0, ctr.length - 1);
}

function parseHtml(text) {
  return 'set_html=android.text.Html->fromHtml:s_' + text + ';';
}

function parseColor(color, setterName) {
  if (!setterName) setterName = 'set_colorInt';
  return setterName + '=android.graphics.Color->parseColor:s_' + color + ';';
}

function mashThis(attrs, obj, belongsTo, transformFn, allProps, type) {
  if (getSetType == "get" && (attrs.key == "width" || attrs.key == "height")) {
    // get case i.e during patch
    if (!isNaN(attrs.value * 1)) {
      return 'get_PARAMS->' + obj.varName + ':dp_' + attrs.value + ';get_view->setLayoutParams:get_PARAMS ';
    } else {
      return 'get_PARAMS->' + obj.varName + ':i_' + mapParams[attrs.key].values[0][attrs.value] + ';get_view->setLayoutParams:get_PARAMS ';
    }
  } else if (attrs.key == "width" || attrs.key == "height") {
    // set case i.e first render
    return '';
  }

  var beforeCmd = "";
  var afterCmd = "";
  var prePend = '';
  var currTransVal;
  var color;
  var arr = [];
  var res;
  var values;

  var keyWord;
  var _cmd;
  var finalCmd;
  var color1;
  attrs.value += '';

  if (attrs.key == "textSize") {
    attrs.value = "1," + (attrs.value - 1);
  }

  //todo:tabTextColors
  if (attrs.key == "foreground" || attrs.key == "tabTextColors" || attrs.key == "selectedTabIndicatorColor" || attrs.key == "color" || attrs.key == "background" || attrs.key == "stroke" || attrs.key == "btnColor") {

    if (attrs.key == "stroke") {
      color = attrs.value.split(',')[1];
      currTransVal = appendArgs(attrs, obj).split(',')[0] + ',get_colorInt';
    } else if (attrs.key == "tabTextColors") {
      color = attrs.value.split(',')[0];
      color1 = attrs.value.split(',')[1];
      currTransVal = 'get_colorInt1' + ',get_colorInt';
    } else {
      color = attrs.value;
      currTransVal = 'get_colorInt';
    }

    if (attrs.key == "tabTextColors") {
      prePend = parseColor(color, "set_colorInt1") + ',' + parseColor(color1);
    } else {
      prePend = parseColor(color);
    }
  }

  if (attrs.key == "fontStyle") {
    if (isURL(attrs.value)) {
      if (typeof window.__PROXY_FN == "undefined") {
        window.__PROXY_FN = {};
      }
      var font = attrs.value.substr(attrs.value.lastIndexOf('/') + 1);

      var filePresent = typeof JBridge.isFilePresent == "function" && JBridge.isFilePresent(font);
      if (!filePresent) {
        var callback = callbackMapper.map(function (isNew, url, fileName) {
          var id = allProps.find(function (a) {
            return a.key === "id";
          });
          if (!id) return;
          var urlSetCommands = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedFile=java.io.File->new:get_directory,s_" + fileName + ";" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dfont=android.graphics.Typeface->createFromFile:get_resolvedPath;" + "set_textV=ctx->findViewById:i_" + id.value + ";" + "get_textV->setTypeface:get_dfont";
          Android.runInUI(urlSetCommands, null);
        });
        JBridge.renewFile(attrs.value, font, callback);
      } else if (JBridge.getFilePath) {
        prePend = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedFile=java.io.File->new:get_directory,s_" + JBridge.getFilePath(font) + ";" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dfont=android.graphics.Typeface->createFromFile:get_resolvedPath;";
        currTransVal = "get_dfont";
      }
    } else {
      prePend = "set_ast=ctx->getAssets;set_type=android.graphics.Typeface->createFromAsset:get_ast,s_fonts\/" + attrs.value + "\.ttf;";
      currTransVal = "get_type";
    }
  }

  if (attrs.key == "gradientAngle") {
    orientation += "set_dr=this->getBackground;set_o=android.graphics.drawable.GradientDrawable$Orientation->valueOf:s_" + attrs.value + ";";
    prePend += orientation;
    currTransVal = "get_o";
  }

  if (attrs.key == "gradient") {
    var gradientObj = JSON.parse(attrs.value);
    var orientation = "";
    if (gradientObj.type == "linear") {} else {}

    var intClass = "set_cc=java.lang.Class->forName:s_java.lang.Integer;";
    var arrList = "set_arr=java.util.ArrayList->new;";

    prePend += gradientObj.values.map(function (color, i) {
      return parseColor(color, "set_color" + i);
    }).join("");

    arrList += gradientObj.values.map(function (color, i) {
      return "get_arr->add:get_color" + i;
    }).join(";");

    prePend += "set_gd=android.graphics.drawable.GradientDrawable->new;";
    prePend += arrList + ";";
    prePend += "set_c=java.lang.Class->forName:s_java.lang.Integer;";
    prePend += "infl->convertAndStoreArray:get_arr,get_c,s_pArr,b_true;";
    currTransVal = "get_pArr";
  }

  if (attrs.key == "cornerRadii") {
    var cornerRadiis = attrs.value.split(',');
    var cornerRadius = cornerRadiis.splice(0, 1);
    var cornerRadiiArray = [];
    for (var i = 0; i < cornerRadiis.length; ++i) {
      cornerRadiiArray.push(cornerRadiis[i] * cornerRadius + "");
      cornerRadiiArray.push(cornerRadiis[i] * cornerRadius + "");
    }
    var arrList = "set_arr=java.util.ArrayList->new;";
    var floatArray = cornerRadiiArray.map(function (val, i) {
      return "set_cornerRadius=java.lang.Float->new:dpf_" + val + ";get_arr->add:get_cornerRadius;";
    });
    prePend += arrList + ";";
    prePend += "set_c=java.lang.Class->forName:s_java.lang.Float;";
    prePend += floatArray.join("");
    prePend += "infl->convertAndStoreArray:get_arr,get_c,s_pArr,b_true;";
    currTransVal = "get_pArr";
  }

  // shadowTag : level,tag
  if (attrs.key == "shadowTag") {
    var arr = attrs.value.split(",");
    var tag = arr[1];
    console.warn("YOOOO Shadow", arr);

    if (!window.shadowObject[tag]) {
      window.shadowObject[tag] = { level: parseInt(arr[0]),
        viewId: [],
        backgroundColor: [],
        blurValue: [],
        shadowColor: [],
        dx: [],
        dy: [],
        spread: [],
        factor: []
      };
    } else {
      window.shadowObject[tag]["level"] = parseInt(arr[0]);
    }
    return "";
  }
  //  -- int dx, int dy, int blurValue,  String shadowColor,  int spread, elevatiuon, float factor)
  if (attrs.key == "androidShadow") {
    var arr = attrs.value.split(",");

    var tag = arr[6];

    var __background = "#ffffff";
    var __id = "";

    for (var i = 0; i < allProps.length; i++) {
      if (allProps[i].key == "background") {
        __background = allProps[i].value;
      } else if (allProps[i].key == "id") {
        __id = allProps[i].value;
      }
    }

    var factor = arr[5];
    if (typeof JBridge.getPixels == "function") {
      factor = JBridge.getPixels();
    }
    //   (viewId, backgroundColor, int blurValue,hadowColor, int dx, int dy, int spread, float factor)

    if (!window.shadowObject[tag]) {
      window.shadowObject[tag] = { level: -1,
        viewId: [__id],
        backgroundColor: [__background],
        blurValue: [arr[2]],
        shadowColor: [arr[3]],
        dx: [arr[0]],
        dy: [arr[1]],
        spread: [arr[4]],
        factor: [factor]
      };
    } else {
      window.shadowObject[tag]["viewId"].push(__id);
      window.shadowObject[tag]["backgroundColor"].push(__background);
      window.shadowObject[tag]["blurValue"].push(arr[2]);
      window.shadowObject[tag]["shadowColor"].push(arr[3]);
      window.shadowObject[tag]["dx"].push(arr[0]);
      window.shadowObject[tag]["dy"].push(arr[1]);
      window.shadowObject[tag]["spread"].push(arr[4]);
      window.shadowObject[tag]["factor"].push(arr[5]);
    }

    return "";
  }

  if (attrs.key == "letterSpacing") {
    attrs.value = attrs.value / 9 + "";
  }

  if (attrs.key == "dividerDrawable") {
    prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_" + attrs.value + ",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;";
    currTransVal = "get_482380";
  }

  if (attrs.key == "textFromHtml") {
    prePend = parseHtml(handleSpecialChars(attrs.value));
    currTransVal = 'get_html';
  }

  if (attrs.key == "backgroundTint") {
    color = attrs.value;
    prePend = parseColor(color) + 'set_colorstate=android.content.res.ColorStateList->valueOf:get_colorInt;';
    currTransVal = 'get_colorstate';
  }

  if (attrs.key == "typeface") {
    prePend = "set_face=this->getTypeface;";
    currTransVal = 'get_face,' + appendArgs(attrs, obj);
  }

  if (attrs.key == "buttonTint") {
    color = attrs.value;
    prePend = parseColor(color) + 'set_colorstate=android.content.res.ColorStateList->valueOf:get_colorInt;';
    currTransVal = 'get_colorstate';
  }

  if (attrs.key == "hintColor") {
    color = attrs.value;
    prePend = parseColor(color) + 'set_colorstate=android.content.res.ColorStateList->valueOf:get_colorInt;';
    currTransVal = 'get_colorstate';
  }

  if (attrs.key == "btnBackground") {
    color = attrs.value;
    prePend = 'set_mode=android.graphics.PorterDuff->intToMode:i_9;' + parseColor(color);
    currTransVal = 'get_colorInt,get_mode';
  }

  if (attrs.key == "selectableItem") {
    color = attrs.value;
    prePend = "set_outv=android.util.TypedValue->new;set_theme=ctx->getTheme;get_theme->resolveAttribute:i_16843534,get_outv,b_true;set_c=get_outv->getClass;set_f=get_c->getDeclaredField:s_resourceId;get_f->setAccessible:b_true;set_v=get_f->get:get_outv;";
    currTransVal = 'get_v';
  }

  if (attrs.key == "url") {
    prePend = "set_Setting=this->getSettings;get_Setting->setJavaScriptEnabled:b_true;get_Setting->setDomStorageEnabled:b_true;";
    var convertToString = "set_1127=android.util.Base64->decode:s_" + btoa(attrs.value) + ",i_0;set_url=java.lang.String->new:get_1127;";
    prePend += convertToString;
    currTransVal = "get_url";
  }

  if (attrs.key == "packageIcon") {
    prePend = "set_PM=ctx->getPackageManager;set_AI=get_PM->getApplicationInfo:s_" + attrs.value + ",i_0;set_11747=get_AI->loadIcon:get_PM;";
    currTransVal = "get_11747";
  }

  if (attrs.key == "imageUrl") {

    if (isURL(attrs.value)) {
      if (typeof window.__PROXY_FN == "undefined") {
        window.__PROXY_FN = {};
      }
      var image = attrs.value.substr(attrs.value.lastIndexOf('/') + 1);
      var callback = "onImage" + image.substr(0, image.indexOf('.'));

      var filePresent = typeof JBridge.isFilePresent == "function" && JBridge.isFilePresent(image);
      if (!filePresent) {
        var callback = callbackMapper.map(function (isNew, url, fileName) {
          var id = allProps.find(function (a) {
            return a.key === "id";
          });
          if (!id) return;
          var urlSetCommands = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedFile=java.io.File->new:get_directory,s_" + fileName + ";" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;" + "set_imgV=ctx->findViewById:i_" + id.value + ";" + "get_imgV->setImageDrawable:get_dimage";
          Android.runInUI(urlSetCommands, null);
        });
        JBridge.renewFile(attrs.value, image, callback);
      } else if (JBridge.getFilePath) {
        prePend = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedFile=java.io.File->new:get_directory,s_" + JBridge.getFilePath(image) + ";" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;";
        currTransVal = "get_dimage";
      }
    } else {
      prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_" + attrs.value + ",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;";
      currTransVal = "get_482380";
    }
  }

  if (attrs.key == "defaultImage") {
    prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_" + attrs.value + ",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;";
    currTransVal = "get_482380";
  }

  if (attrs.key == "placeHolder") {
    prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_" + attrs.value + ",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;";
    currTransVal = "get_482380";
  }

  if (attrs.key == "dynamicUrl") {
    prePend = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedName=in.juspay.hypersdk.services.FileProviderService->appendSdkNameAndVersion:s_" + attrs.value + ";" + "set_resolvedFile=java.io.File->new:get_directory,get_resolvedName;" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;";

    currTransVal = "get_dimage";
  }

  if (attrs.key == "backgroundDrawable") {
    prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_" + attrs.value + ",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;";
    currTransVal = "get_482380";
  }

  if (attrs.key == "fontFamily") {
    attrs.value = appendArgs(attrs, obj);
    values = attrs.value.split(',');
    return "set_fontFace=android.graphics.Typeface->create:" + values[0] + "," + values[1] + ";" + "this->setTypeface:get_fontFace," + values[1] + ";";
  }

  if (attrs.key == "fontSize") {
    currTransVal = appendArgs(attrs, obj).split(',')[0] + ',f_' + window.__WIDTH * attrs.value.split(',')[1] * 1 / 100;
  }

  if (attrs.key == "curve") {
    prePend = "set_interp=android.view.animation.DecelerateInterpolator->new;";
    currTransVal = "get_interp";
  }

  if (attrs.key == "shimmer") {
    try {
      var shimmerMode = "com.facebook.shimmer.Shimmer$ColorHighlightBuilder";
      var shimmerCmd = "set_sdrw=com.facebook.shimmer.ShimmerDrawable->new;";
      var shimmerJson = JSON.parse(attrs.value);
      console.log(shimmerJson, shimmerJson.contents, attrs, attrs, obj, belongsTo, transformFn, allProps, type);
      // if(shimmerJson && shimmerJson.contents){

      shimmerJson = shimmerJson.contents;
      // }
      if (shimmerJson && shimmerJson.shimmerType == "alpha") {
        shimmerMode = "com.facebook.shimmer.Shimmer$AlphaHighlightBuilder";
        shimmerCmd += "set_builder=" + shimmerMode + "->new;";
        if (shimmerJson.base) {
          shimmerCmd += "get_builder->setBaseAlpha:f_" + shimmerJson.base + ";";
        }
        if (shimmerJson.highlight) {
          shimmerCmd += "get_builder->setHighlightAlpha:f_" + shimmerJson.highlight + ";";
        }
      } else {
        shimmerCmd += "set_builder=" + shimmerMode + "->new;";
        if (shimmerJson.base) {
          shimmerCmd += parseColor(shimmerJson.base, "set_baseColor") + ";";
          shimmerCmd += "get_builder->setBaseColor:get_baseColor;";
        }
        if (shimmerJson.highlight) {
          shimmerCmd += parseColor(shimmerJson.highlight, "set_baseColor") + ";";
          shimmerCmd += "get_builder->setHighlightColor:get_baseColor;";
        }
      }

      if (shimmerJson.tilt) {
        shimmerCmd += "get_builder->setTilt:f_" + shimmerJson.tilt + ";";
      }
      if (shimmerJson.intensity) {
        shimmerCmd += "get_builder->setIntensity:f_" + shimmerJson.intensity + ";";
      }
      if (shimmerJson.direction) {
        shimmerCmd += "get_builder->setDirection:i_" + shimmerJson.direction + ";";
      }
      if (shimmerJson.duration) {
        shimmerCmd += "get_builder->setDuration:l_" + shimmerJson.direction + ";";
      }
      if (shimmerJson.repeatCount) {
        shimmerCmd += "get_builder->setRepeatCount:i_" + shimmerJson.repeatCount + ";";
      }
      if (shimmerJson.repeatDelay) {
        shimmerCmd += "get_builder->setRepeatDelay:l_" + shimmerJson.repeatDelay + ";";
      }
      if (shimmerJson.clipToChildren) {
        shimmerCmd += "get_builder->setClipToChildren:b_" + shimmerJson.clipToChildren + ";";
      }
      if (shimmerJson.shape) {
        shimmerCmd += "get_builder->setShape:i_" + shimmerJson.shape + ";";
      }
      if (shimmerJson.dropOff) {
        shimmerCmd += "get_builder->setDropoff:f_" + shimmerJson.dropOff + ";";
      }
      shimmerCmd += "set_shimmer=get_builder->build;";
      if (type == "shimmerFrameLayout") {
        attrs.key = "shimmerView";
        currTransVal = "get_shimmer";
        obj.fnName = obj.alternateFnName;
      } else {
        shimmerCmd += "get_sdrw->setShimmer:get_shimmer;";
        if (shimmerJson.active) {
          afterCmd += "get_sdrw->startShimmer;";
        } else {
          afterCmd += "get_sdrw->stopShimmer;";
        }
        currTransVal = "get_sdrw";
      }
    } catch (e) {
      console.error("unable to set shimmer");
    }
    console.log(shimmerCmd);
    prePend = shimmerCmd;
  }

  if (attrs.key == "focus") {
    afterCmd = "set_win=ctx->getWindow;get_win->setSoftInputMode:5;";
  }

  if (attrs.key == "shadowLayer") {
    color = attrs.value.split(',')[3];
    arr = appendArgs(attrs, obj).split(',');
    arr.splice(arr.length1, 1);

    prePend = parseColor(color);
    currTransVal = arr.join(',') + ',get_colorInt';
  }

  if (attrs.key == "values") {
    var val = attrs.value.split(",");
    var valuesStr = "",
        i;
    for (i = 0; i < val.length; i++) {
      var elements = val[i].split(":");
      valuesStr += "get_spinnerArray->add:s_" + elements[0];
      for (var j = 1; j < elements.length; j++) {
        valuesStr += "\n" + elements[j];
      }valuesStr += ";";
    }
    prePend = "set_spinnerArray=java.util.ArrayList->new;" + valuesStr + "set_spinnerValues=get_spinnerArray->toArray;set_spinnerAdapter=android.widget.ArrayAdapter->new:ctx_ctx,i_17367043,get_spinnerValues;";
    currTransVal = "get_spinnerAdapter";
  }

  if (attrs.key == "startPoint") {
    var arg = JSON.parse(attrs.value);
    prePend = "this->setStartX:f_" + arg.x + ";";
    prePend += "this->setStartY:f_" + arg.y + ";";
    return prePend;
  }

  if (attrs.key == "endPoint") {
    var arg = JSON.parse(attrs.value);
    prePend = "this->setEndX:f_" + arg.x + ";";
    prePend += "this->setEndY:f_" + arg.y + ";";
    return prePend;
  }

  if (belongsTo == "VIEW") keyWord = globalObjMap[belongsTo].val;else keyWord = 'get_' + globalObjMap[belongsTo].val;

  if (transformFn || attrs.key == "duration" || attrs.key == "delay" || attrs.key == "curve") _cmd = keyWord + '->' + (typeof obj.fnName == "undefined" ? obj.varName : obj.fnName);else _cmd = keyWord + '->' + attrs.key;

  if (obj.values && obj.values.length) _cmd += ':';

  if (!prePend && !currTransVal) _cmd += appendArgs(attrs, obj) + ';';else _cmd += currTransVal + ';';

  // for testing
  if (typeof finalCmd !== "undefined") {
    console.log(beforeCmd + prePend + _cmd + afterCmd);
    return finalCmd;
  }
  if (type == "shimmerFrameLayout") {
    console.log(beforeCmd + prePend + _cmd + afterCmd);
  }
  return beforeCmd + prePend + _cmd + afterCmd;
}

function parseAttrs(attrs, belongsTo, transformFn, type) {
  var obj;
  var retVal;
  var cmd = '';
  var _cmd;

  for (var i = 0; i < attrs.length; i++) {
    obj = mapParams[attrs[i].key];
    if (obj) {
      cmd += mashThis(attrs[i], obj, belongsTo, transformFn, attrs, type);
    }
  }

  if (belongsTo == "VIEW") return cmd;

  return prepareCtr(attrs, belongsTo) + ';' + cmd;
}

function parseGroups(type, groups, config) {
  var keys = Object.keys(groups);
  var ctr;

  for (var i = 0; i < keys.length; i++) {
    if (keys[i] == "FOREGROUND") {
      if (!globalObjMap[keys[i]]) {
        if (getSetType == "set") {
          globalObjMap[keys[i]] = { ctr: "android.graphics.drawable.GradientDrawable->new", val: keys[i] };
          command += 'set_' + globalObjMap[keys[i]].val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type) + 'this->' + "setForeground" + ':' + 'get_' + globalObjMap[keys[i]].val + ';';
        } else {
          globalObjMap[keys[i]] = { ctr: 'get_view->getForeground', val: keys[i] };
          command += 'set_' + globalObjMap[keys[i]].val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type);
        }
      }
    } else if (keys[i] == "LAYOUT_TRANSITION") {
      globalObjMap.LAYOUT_TRANSITION = { ctr: 'android.animation.LayoutTransition->new', val: "LAYOUT_TRANSITION" };
      command += 'set_' + globalObjMap.LAYOUT_TRANSITION.val + '=' + parseAttrs(groups.PARAMS, 'LAYOUT_TRANSITION', true, type) + 'this->' + "setLayoutTransition" + ':get_' + globalObjMap.LAYOUT_TRANSITION.val + ';';
    } else if (keys[i] == "VIEW") {
      if (!globalObjMap.VIEW) {
        if (getSetType == "set") globalObjMap.VIEW = { ctr: "this", val: "this" };else globalObjMap.VIEW = { ctr: "get_view", val: "get_view" };
      }

      command += parseAttrs(groups.VIEW, 'VIEW', true, type);
    } else if (keys[i] == "PARAMS") {
      if (getSetType == "set") {
        if (!globalObjMap.PARAMS) {
          ctr = config.root ? getCtr(type) : 'PARAM_CTR_HOLDER';
          globalObjMap.PARAMS = { ctr: ctr, val: "PARAMS" };
        }

        command += 'set_' + globalObjMap.PARAMS.val + '=' + parseAttrs(groups.PARAMS, 'PARAMS', true, type) + 'this->' + objMap.PARAMS.viewMethod.split(',')[0] + ':get_' + globalObjMap.PARAMS.val + ';';
      } else {
        if (!globalObjMap.PARAMS) {
          ctr = "get_view->getLayoutParams";
          globalObjMap.PARAMS = { ctr: ctr, val: "PARAMS" };
        }

        command += 'set_' + globalObjMap.PARAMS.val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type);
      }
    } else if (keys[i] == "MUTATEBG") {
      if (!globalObjMap.MUTATEBG) {
        globalObjMap.MUTATEBG = { ctr: 'this->getBackground', val: "MUTATEBG" };
      }

      command += 'set_' + globalObjMap.MUTATEBG.val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type);
    } else if (keys[i] == "ANIMATION") {
      if (!globalObjMap.ANIMATION) {
        if (getSetType == "set") globalObjMap.ANIMATION = { ctr: 'this->animate', val: "ANIMATION" };else globalObjMap.ANIMATION = { ctr: 'get_view->animate', val: "ANIMATION" };
      }

      command += 'set_' + globalObjMap.ANIMATION.val + '=' + parseAttrs(groups[keys[i]], keys[i], false, type);
    } else {
      // Works only for drawable
      if (!globalObjMap[keys[i]]) {
        if (getSetType == "set") {
          globalObjMap[keys[i]] = { ctr: objMap[keys[i]].ctr, val: keys[i] };
          command += 'set_' + globalObjMap[keys[i]].val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type) + 'this->' + objMap[keys[i]].viewMethod.split(',')[0] + ':' + 'get_' + globalObjMap[keys[i]].val + ';';
        } else {
          globalObjMap[keys[i]] = { ctr: 'get_view->getBackground', val: keys[i] };
          command += 'set_' + globalObjMap[keys[i]].val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type);
        }
      }
    }
  }
  return command.substring(0, command.length - 1);
}

var flattenObject = function flattenObject(ob) {
  var toReturn = {};
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if (_typeof(ob[i]) == 'object') {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
};

module.exports = function (type, config, _getSetType) {
  config = flattenObject(config);
  getSetType = _getSetType;
  elementType = type;

  var groups = getConfigGroups(config);

  command = '';
  globalObjMap = {};

  var flag = 0;
  var keys = Object.keys(config);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] == 'runInUI') {
      flag = 1;
      break;
    }
  }

  if (!flag) {
    config.runInUI = parseGroups(type, groups, config);
  }

  return config;
};

/***/ }),

/***/ "./src/helpers/common/callbackMapper.js":
/*!**********************************************!*\
  !*** ./src/helpers/common/callbackMapper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports.map = function (fn) {
  if (typeof window.__FN_INDEX !== 'undefined' && window.__FN_INDEX !== null) {
    var proxyFnName = 'F' + window.__FN_INDEX;
    if (window.__payload && window.__payload.service) {
      proxyFnName = window.__payload.service + "_" + proxyFnName;
    }
    window.__PROXY_FN[proxyFnName] = fn;
    window.__FN_INDEX++;
    return proxyFnName;
  } else {
    throw new Error("Please initialise window.__FN_INDEX = 0 in index.js of your project.");
  }
};

/***/ }),

/***/ "./src/helpers/common/index.js":
/*!*************************************!*\
  !*** ./src/helpers/common/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = {
	callbackMapper: __webpack_require__(/*! ./callbackMapper */ "./src/helpers/common/callbackMapper.js")
};

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = {
	android: __webpack_require__(/*! ./android */ "./src/helpers/android/index.js"),
	ios: __webpack_require__(/*! ./ios */ "./src/helpers/ios/index.js"),
	web: __webpack_require__(/*! ./web */ "./src/helpers/web/index.js"),
	common: __webpack_require__(/*! ./common */ "./src/helpers/common/index.js")
};

/***/ }),

/***/ "./src/helpers/ios/colors.js":
/*!***********************************!*\
  !*** ./src/helpers/ios/colors.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = ["#83FCE8", "#89F6E4", "#8FEFDF", "#96E9DB", "#9CE3D7", "#FEE9E6", "#FEF7E7", "#FFFAE5", "#F5FAEB", "#E5FFF5"];

/***/ }),

/***/ "./src/helpers/ios/flattenObject.js":
/*!******************************************!*\
  !*** ./src/helpers/ios/flattenObject.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

module.exports = function flattenObject(ob) {
  var toReturn = {};
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if (_typeof(ob[i]) == 'object') {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }

  return toReturn;
};

/***/ }),

/***/ "./src/helpers/ios/index.js":
/*!**********************************!*\
  !*** ./src/helpers/ios/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = {
	parseParams: __webpack_require__(/*! ./parseParams */ "./src/helpers/ios/parseParams.js")
};

/***/ }),

/***/ "./src/helpers/ios/parseParams.js":
/*!****************************************!*\
  !*** ./src/helpers/ios/parseParams.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _colors = __webpack_require__(/*! ./colors */ "./src/helpers/ios/colors.js");

var _colors2 = _interopRequireDefault(_colors);

var _flattenObject = __webpack_require__(/*! ./flattenObject */ "./src/helpers/ios/flattenObject.js");

var _flattenObject2 = _interopRequireDefault(_flattenObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var callbackMapper = __webpack_require__(/*! ../common/callbackMapper */ "./src/helpers/common/callbackMapper.js");

var getSetType = 1;

/**
 * Checks the native set window.__DEVICE_DETAILS.mystique_version
 * and checks if mystique version is greater than the passed version.
 * @param {string} version number to be checked against. If passed empty returns true.
 * @return {bool} true if mystique version is greater than passed version else false. Defaults to true.
 */
function isMystiqueVersionGreaterThan(version) {
  if (window.__DEVICE_DETAILS && window.__DEVICE_DETAILS.mystique_version) {
    var sdkVersion = parseFloat(window.__DEVICE_DETAILS.mystique_version);
    if (sdkVersion > 0) {
      return sdkVersion > parseFloat(version) ? true : false;
    }
  }
  return false;
}

function convertColorToRgba(color) {
  color = rWS(cS(color));

  var values;
  var alpha = "1.00";

  if (color.length >= 8) {
    alpha = parseInt(color.substring(1, 3), 16);
    alpha = (alpha / 255).toFixed(2);
    color = color.substring(3, 9);
  } else {
    color = color.substring(1, color.length);
  }

  color = convertHexToRgb(rWS(color));
  values = color.split(',');

  return {
    r: rWS(values[0]),
    g: rWS(values[1]),
    b: rWS(values[2]),
    a: alpha
  };
}

function convertHexToRgb(hex) {
  var r = (parseInt(hex.substring(0, 2), 16) / 255).toFixed(2);
  var g = (parseInt(hex.substring(2, 4), 16) / 255).toFixed(2);
  var b = (parseInt(hex.substring(4, 6), 16) / 255).toFixed(2);

  return r + "," + g + "," + b;
}

function cS(value) {
  return value ? value + '' : "";
}

function rWS(value) {
  return value.replace(/ /g, '');
}

function self_sizeFromDictionary(width, height) {
  window.__SIZE_INDEX++;

  return {
    "return": "size" + window.__SIZE_INDEX,
    "invokeOn": "self",
    "methodName": "sizeFromDictionary:",
    "values": [{
      "width": width,
      "height": height
    }]
  };
}

function self_setCursorPosition(id, position) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "setCursorPosition:",
    "values": [{
      "viewId": id,
      "position": position
    }]
  };
}

function this_setContentSize() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setContentSize:",
    "values": [{ "name": "size" + window.__SIZE_INDEX, "computed": "true", "type": "size" }]
  };
}

function UIColor_colorWithRGBA(r, g, b, a) {
  window.__COLOR_INDEX++;
  return {
    "return": "color" + window.__COLOR_INDEX,
    "invokeOn": "UIColor",
    "methodName": "colorWithRed:green:blue:alpha:",
    "values": [{ "name": r, "type": "f" }, { "name": g, "type": "f" }, { "name": b, "type": "f" }, { "name": a, "type": "f" }]
  };
}

function this_pivotX(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setPivotX:",
    "values": [{ "name": value + "", "type": "s" }]
  };
}

function this_pivotY(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setPivotY:",
    "values": [{ "name": value + "", "type": "s" }]
  };
}

function self_animate_translation(obj, props) {
  obj.values[0].properties = [{
    "key": "frame",
    "values": {
      "x": props.x,
      "y": props.y,
      "width": props.w,
      "height": props.h
    }
  }];

  return obj;
}

function self_animate_rotation(obj, props) {
  obj.values[0].properties = [{
    "key": "angle",
    "values": {}
  }];

  return obj;
}

function this_setTranslationZ(params) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "translationZ:",
    "values": [{ "name": params, type: "s" }]
  };
}

function self_animate(props) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "animate:",
    "values": [{
      "json": props.json,
      "viewTag": props.id
    }]
  };
}

function this_setBackgroundColor() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setBackgroundColor:",
    "values": [{ "name": "color" + window.__COLOR_INDEX, "computed": "true" }]
  };
}

function this_superview() {
  var currViewIndex = window.__VIEW_INDEX;

  window.__VIEW_INDEX++;

  return {
    "return": "view" + window.__VIEW_INDEX,
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + currViewIndex,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "superview"
  };
}

function this_scrollToIndex(index) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "scrollToIndex:",
    "values": [{ "name": index, type: "i" }]
  };
}

function UIView_bounds() {
  window.__RECT_INDEX++;

  return {
    "return": "rect" + window.__RECT_INDEX,
    "fromStore": "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": "UIView",
    "methodName": "bounds"
  };
}

function this_setEnabled(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setEnabled:",
    "values": [{ "name": mode, "type": "i" }]
  };
}

function this_scrollEnabled(status) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "setScrollEnabled:",
    "values": [{ "name": status, "type": "s" }]
  };
}

function this_setAutoCorrectionType(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setAutocorrectionType:",
    "values": [{ "name": mode, "type": "i" }]
  };
}

function this_setKeyboardType(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setKeyboardType:",
    "values": [{ "name": mode, "type": "i" }]
  };
}

function this_setAutoCapitalizationType(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setAutocapitalizationTypes:",
    "values": [{ "name": mode, "type": "i" }]
  };
}

function this_setStatusBarStyle(mode) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "setStatusBarStyle:",
    "values": [{ "name": mode, "type": "s" }]
  };
}

function this_becomeFirstResponder(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "focus:",
    "values": [{ "name": mode, "type": "s" }]
  };
}

function this_setOnItemClick(callback) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setOnItemClick:",
    "values": [{ "name": callbackMapper.map(callback), "type": "s" }]
  };
}

function this_setOnFocusCallback(callback) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setOnFocusCallback:",
    "values": [{ "name": callbackMapper.map(callback), "type": "s" }]
  };
}

function this_setOnMerchantViewHeightChangeCallback(callback) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setOnMerchantViewHeightChange:",
    "values": [{ "name": callbackMapper.map(callback), "type": "s" }]
  };
}

function this_setOn(enabled) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setOn:animated:",
    "values": [{ "name": enabled, "type": "i" }, { "name": "1", "type": "i" }]
  };
}

function this_showVerticalScrollBar(enabled) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setShowsVerticalScrollIndicator:",
    "values": [{ "name": enabled, "type": "i" }]
  };
}

function this_setSecureTextEntry(enabled) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setSecureTextEntry:",
    "values": [{ "name": enabled, "type": "i" }]
  };
}

function UIImage_imageNamed(image) {
  window.__IMAGE_INDEX++;

  return {
    "return": "image" + window.__IMAGE_INDEX,
    "invokeOn": "self",
    "methodName": "imageNamed:",
    "values": [{ "name": image, "type": "s" }]
  };
}

function this_setImage() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setImage:",
    "values": [{ "name": "image" + window.__IMAGE_INDEX, "computed": "true" }]
  };
}

function self_rectFromDictionary(x, y, w, h) {
  window.__RECT_INDEX++;

  return {
    "return": "rect" + window.__RECT_INDEX,
    "invokeOn": "self",
    "methodName": "rectFromDictionary:",
    "values": [{
      "x": x,
      "y": y,
      "width": w,
      "height": h
    }]
  };
}

function this_updateLayoutParams(config) {
  var data = {
    "width": config.width,
    "height": config.height,
    "margin": config.margin,
    "padding": config.padding,
    "weight": config.weight,
    "gravity": config.gravity,
    "visibility": config.visibility,
    "orientation": config.orientation,
    "alignment_rules": config.alignment_rules
  };
  if (data.alignment_rules && data.alignment_rules.length == 0) {
    delete data.alignment_rules;
  }
  return {
    "return": "false",
    "invokeOn": "this",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "methodName": "updateLayoutParams:",
    "values": [{
      "name": JSON.stringify(data),
      "type": 's'
    }]
  };
}

function this_setPadding(padding) {
  return {
    "return": "false",
    "invokeOn": getSetType ? "this" : "MJPViewAL",
    "methodName": "setPaddingLeft:Top:Right:Bottom:",
    "values": padding.split(',').map(makeUnit)
  };
}

function this_setMargin(margin) {
  return {
    "return": "false",
    "invokeOn": getSetType ? "this" : "MJPViewAL",
    "methodName": "setMarginLeft:Top:Right:Bottom:",
    "values": margin.split(',').map(makeUnit)
  };
}

function makeUnit(v, i, arr) {
  return { name: v + '', type: 'f' };
}

function this_setHeight(height) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPViewAL",
    "methodName": "setHeight:",
    "values": [{ "name": height + '', "type": 'i' }]
  };
}

function this_setWidth(width) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPViewAL",
    "methodName": "setWidth:",
    "values": [{ "name": width + '', "type": 'i' }]
  };
}

function this_setFrame() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setFrame:",
    "values": [{ "name": "rect" + window.__RECT_INDEX, "computed": "true", "type": "rect" }]
  };
}

function self_alignToParent(type, values) {
  window.__POINT_INDEX++;
  return {
    "return": "point" + window.__POINT_INDEX,
    "invokeOn": "self",
    "methodName": "alignToParent:",
    "values": [{
      "name": type,
      "x": values.x,
      "y": values.y,
      "yOffset": values.yOffset,
      "xOffset": values.xOffset
    }]
  };
}

function this_setCenter() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setCenter:",
    "values": [{ "name": "point" + window.__POINT_INDEX, "computed": "true", "type": "point" }]
  };
}

function this_setText(text) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setText:",
    "values": [{ "name": encodeURI(text), "type": "s" }]
  };
}

function this_setRegularExpression(text) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setRegularExpression:",
    "values": [{ "name": text, "type": "s" }]
  };
}

function getEncodedData(text) {
  var encodedString = text;
  if (isMystiqueVersionGreaterThan("1")) {
    encodedString = btoa(encodeURIComponent(text));
  } else if (isMystiqueVersionGreaterThan("0")) {
    encodedString = btoa(text.replace(/[^\x00-\x7F]/g, ""));
  }
  return encodedString;
}

function this_setHTMLText(text) {
  return {
    "return": "false",
    "fromStore": "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setHtmlText:",
    "values": [{ "name": getEncodedData(text),
      "type": "s"
    }]
  };
}

function this_setPlaceholder(text) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setPlaceholder:",
    "values": [{ "name": text, "type": "s" }]
  };
}

function this_setPlaceholderProperties(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTextView",
    "methodName": "setPlaceholderProperties:",
    "values": [{ "name": data, "type": "s" }]
  };
}

function UIFont_systemFontOfSize(size) {
  window.__FONT_INDEX++;

  return {
    "return": "font" + window.__FONT_INDEX,
    "invokeOn": "UIFont",
    "methodName": "systemFontOfSize:",
    "values": [{ "name": size, "type": "f" }]
  };
}

function UIFont_fontWithName(name, size) {
  window.__FONT_INDEX++;
  return {
    "return": "font" + window.__FONT_INDEX,
    "invokeOn": "MJPFont",
    "methodName": "fontWithName:size:",
    "values": [{ "name": name, "type": "s" }, { "name": size.length > 0 ? size : "14", "type": "f" }]
  };
}

function this_setFont() {
  return {
    "return": "false",
    "fromStore": "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setFont:",
    "values": [{
      "name": "font" + window.__FONT_INDEX,
      "computed": "true"
    }]
  };
}

function this_sizeToFit() {
  return {
    "return": "false",
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "sizeToFit"
  };
}

function UIFont_boldSystemFontOfSize(size) {
  window.__FONT_INDEX++;

  return {
    "return": "font" + window.__FONT_INDEX,
    "invokeOn": "UIFont",
    "methodName": "boldSystemFontOfSize:",
    "values": [{ "name": size, "type": "f" }]
  };
}

function UIFont_systemFontOfSizeWeight(size, weight) {
  window.__FONT_INDEX++;

  return {
    "return": "font" + window.__FONT_INDEX,
    "invokeOn": "UIFont",
    "methodName": "systemFontOfSize:weight:",
    "values": [{ "name": size, "type": "f" }, { "name": weight, "type": "f" }]
  };
}

function this_setLineBreakMode(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setLineBreakMode:",
    "values": [{ "name": mode, "type": "i" }]
  };
}

function this_setNumberOfLines(count) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setNumberOfLines:",
    "values": [{ "name": count, "type": "i" }]
  };
}

function this_setTextAlignment(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setGravity:",
    "values": [{ "name": mode, "type": "s" }]
  };
}

function this_setTextColor() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setTextColor:",
    "values": [{ "name": 'color' + window.__COLOR_INDEX, "computed": "true" }]
  };
}

function this_setTextLengthLimit(length) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setTextLengthLimit:",
    "values": [{ "name": length + "", "type": "i" }]
  };
}

function this_removeCell(cellIndex) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "removeObjectAtIndex:",
    "values": [{ "name": cellIndex + "", "type": "i" }]
  };
}

function UIColor_fromLiteral(color) {
  window.__COLOR_INDEX++;

  return {
    "return": "color" + window.__COLOR_INDEX,
    "invokeOn": "UIColor",
    "methodName": color + "Color"
  };
}

function this_layer() {
  window.__LAYER_INDEX++;

  return {
    "return": "layer" + window.__LAYER_INDEX,
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "layer"
  };
}

function setCornerRadius(radius) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setMJPCornerRadius:",
    "values": [{ "name": radius + "", "type": "f" }]
  };
}

function setBorderWidth(width) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setMJPBorderWidth:",
    "values": [{ "name": width + "", "type": "f" }]
  };
}

function setBorderColor() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setMJPBorderColor:",
    "values": [{ "name": "color" + window.__COLOR_INDEX, "computed": "true", type: "cgcolor" }]
  };
}

function this_setShadow(id, shadowOffset, shadowBlur, shadowSpread, shadowColor, shadowOpacity) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setShadow:",
    "values": [{
      "name": JSON.stringify({
        "viewId": id,
        "color": shadowColor,
        "blur": shadowBlur,
        "opacity": shadowOpacity,
        "offset": shadowOffset,
        "spread": shadowSpread
      }),
      "type": "s"
    }]
  };
}

function this_setGradient(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setGradient:",
    "values": [{
      "name": data,
      "type": "s"
    }]
  };
}

function this_setBackgroundImage() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setBackgroundImage:",
    "values": [{
      "name": "image" + window.__IMAGE_INDEX,
      "computed": "true"
    }]
  };
}

function _UILabelLayer_setMasksToBounds() {
  return {
    "return": "false",
    "fromStore": "true",
    "storeKey": "layer" + window.__LAYER_INDEX,
    "invokeOn": "_UILabelLayer",
    "methodName": "setMJPMasksToBounds:",
    "values": [{ "name": "1", type: "i" }]
  };
}

function this_setTag(tag) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setTag:",
    "values": [{ "name": tag, type: "i" }]
  };
}

function self_getViewFromTag(tag) {
  window.__VIEW_INDEX++;

  return {
    "return": "view" + window.__VIEW_INDEX,
    "invokeOn": "self",
    "methodName": "getViewFromTag:",
    "values": [{ "name": tag, "type": "s" }]
  };
}

function this_setImageURL(id, url, placeholder) {
  return {
    "return": "false",
    "invokeOn": "self",
    "storeKey": "view" + window.__VIEW_INDEX,
    "methodName": "setImageWithUrl::::",
    "values": [{ "name": "" + id, "type": "s" }, { "name": url, "type": "s" }, { "name": placeholder, "type": "s" }]
  };
}

function this_setGif(id, imageName) {
  return {
    "return": "false",
    "invokeOn": "self",
    "storeKey": "view" + window.__VIEW_INDEX,
    "methodName": "loadGif:::",
    "values": [{ "name": "" + id, "type": "s" }, { "name": imageName, "type": "s" }]
  };
}

function this_startGif() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "startGIF"
  };
}

function this_stopGif() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "stopGIF"
  };
}

function self_setAlpha(alpha) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setAlpha:",
    "values": [{ "name": String(alpha), type: "f" }]
  };
}

function this_setHidden(hidden) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setHidden:",
    "values": [{ "name": hidden === "gone" || hidden === "invisible" ? "1" : "0", type: "i" }]
  };
}

function this_setTextProperties(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTextView",
    "methodName": "setTextProperties:",
    "values": [{ "name": data, "type": "s" }]
  };
}

function this_setLetterSpacing(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPEditText",
    "methodName": "setLetterSpacing:",
    "values": [{ "name": data, "type": "s" }]
  };
}

function this_setLineSpacing(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPLabel",
    "methodName": "setLineSpacing:",
    "values": [{ "name": data, "type": "s" }]
  };
}

function this_setCaretColor() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setTintColor:",
    "values": [{ "name": 'color' + window.__COLOR_INDEX, "computed": "true" }]
  };
}

function this_scrollTo(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "scrollTo:",
    "values": [{ "name": value, "type": "s" }]
  };
}

function this_setExpand(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPExpandableCell",
    "methodName": "setExpand:",
    "values": [{ "name": value, "type": "s" }]
  };
}

function this_setExpandDuration(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPExpandableCell",
    "methodName": "setExpandDuration:",
    "values": [{ "name": value, "type": "s" }]
  };
}

function this_setExpandAlpha(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPExpandableCell",
    "methodName": "setExpandAlpha:",
    "values": [{ "name": value, "type": "s" }]
  };
}

function this_setSwype(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "setSwype:",
    "values": [{ "name": value ? "true" : "false", "type": "s" }]
  };
}

function this_setUserInteraction(hidden) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setUserInteractionEnabled:",
    "values": [{ "name": hidden === "true" ? "1" : "0", type: "i" }]
  };
}

function this_setSeparator(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setSeparator:",
    "values": [{ "name": value, type: "s" }]
  };
}

function this_setSeparatorRepeat(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setSeparatorRepeat:",
    "values": [{ "name": value, type: "s" }]
  };
}

function this_setSwipeCallback(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "setSwipeCallback:",
    "values": [{ "name": value, type: "s" }]
  };
}

function this_setupList(listData, listItem) {
  return {
    "return": "false",
    "fromStore": "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPRepeatTableView",
    "methodName": "setupList::",
    "values": [{ "name": listData, type: "s" }, { "name": listItem, type: "s" }]
  };
}

function this_inlineAnimation(config) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": "this",
    "methodName": "setInlineAnimation:",
    "values": [{ "name": modifyTranslation(config), type: "s" }]
  };
}

function modifyTranslation(config) {
  var x = config.x || "0";
  var y = config.y || "0";
  var animationArray = JSON.parse(config.inlineAnimation);
  var animationArray = animationArray.map(function (a) {
    if (a.hasOwnProperty("fromX")) {
      a.fromX = parseInt(a.fromX) + parseInt(x) + '';
      if (!a.hasOwnProperty("toX")) {
        a.toX = 0 + parseInt(x) + '';
      }
    }
    if (a.hasOwnProperty("toX")) {
      a.toX = parseInt(a.toX) + parseInt(x) + '';
    }
    if (a.hasOwnProperty("fromY")) {
      a.fromY = parseInt(a.fromY) + parseInt(y) + '';
      if (!a.hasOwnProperty("toY")) {
        a.toY = 0 + parseInt(y) + '';
      }
    }
    if (a.hasOwnProperty("toY")) {
      a.toY = parseInt(a.toY) + parseInt(y) + '';
    }
    return a;
  });
  return JSON.stringify(animationArray);
}

function this_setCloseSwipe(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "closeSwipe:",
    "values": [{ "name": value ? "true" : "false", type: "s" }]
  };
}

function this_setEnableSwype(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "setSwipeEnabled:",
    "values": [{ "name": value ? "true" : "false", type: "s" }]
  };
}

function this_bringSubViewToFront(params) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "bringSubViewToFront:",
    "values": [{ "name": params, type: "s" }]
  };
}

function this_setContentMode(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setContentMode:",
    "values": [{ "name": mode, type: "i" }]
  };
}

function this_adjustViewWithKeyboard(status) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setAdjustViewWithKeyboard:",
    "values": [{ "name": status, type: "s" }]
  };
}

function self_setPopupMenu(popupMenu, onMenuItemClick) {
  var callback = callbackMapper.map(onMenuItemClick);
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "createActionSheetWithTitles::",
    "values": [{ "name": popupMenu, "type": "s" }, { "name": callback, "type": "s" }]
  };
}

function this_setCornerCurves(corner) {
  return {
    "return": "false",
    "fromStore": "false",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": "this",
    "methodName": "setCornerCurves:",
    "values": [{ "name": corner + "", "type": "s" }]
  };
}

function this_setClipsToBounds(bounds) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setClipsToBounds:",
    "values": [{ "name": bounds ? "1" : "0", type: "i" }]
  };
}

function this_fontWithName(name) {
  window.__FONT_INDEX++;
  return {
    "return": "font" + window.__FONT_INDEX,
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "fontWithName:",
    "values": [{ "name": name, "type": "s" }]
  };
}

function UIColor_setColor(color) {
  var values = void 0;
  var alpha = "1.00";

  if (color.length >= 8) {
    alpha = parseInt(color.substring(1, 3), 16);
    alpha = (alpha / 255).toFixed(2);
    color = color.substring(3, 9);
  } else {
    color = color.substring(1, color.length);
  }

  color = convertHexToRgb(rWS(color));
  values = color.split(',');

  var r = rWS(values[0]);
  var g = rWS(values[1]);
  var b = rWS(values[2]);
  var a = alpha;

  return UIColor_colorWithRGBA(r, g, b, a);
}

function transformKeys(config) {
  var keys = Object.keys(config);
  for (var i = 0; i < keys.length; i++) {
    if (typeof config[keys[i]] == "undefined" || config[keys[i]] == null) {
      delete config[keys[i]];
    } else if (typeof config[keys[i]] == "function") {
      config[keys[i]] = callbackMapper.map(config[keys[i]]);
    } else {
      if (keys[i] !== "id" && keys[i] !== "__filename" && keys[i] !== "currChildOffset" && keys[i] !== "methods" && keys[i] !== "swipeEnable" && keys[i] !== "viewPager" && keys[i] !== "tableView") {

        delete config[keys[i]];
      }
    }
  }

  return config;
}

function generateType(type, config) {
  var modifiedType = "mJPView";
  switch (type) {
    case "editText":
      {
        modifiedType = "mJPEditText";
      }
      break;
    case "imageView":
      {
        modifiedType = "mJPImageView";
      }
      break;
    case "textView":
      {
        modifiedType = "mJPTextView";
      }
      break;
    case "scrollView":
      {
        if (config.hasOwnProperty('height') && config.height == 'wrap_content') {
          modifiedType = "mJPScrollView";
        } else {
          modifiedType = "mJPScrollView";
        }
        config.orientation = "vertical";
        break;
      }
    case "horizontalScrollView":
      {
        if (config.hasOwnProperty('width') && config.width == 'wrap_content') {
          modifiedType = "mJPScrollView";
        } else {
          modifiedType = "mJPScrollView";
        }
        config.orientation = "horizontal";
        break;
      }
      break;
    case "tableView":
    case "listView":
      {
        if (config.hasOwnProperty("listData") && config.hasOwnProperty("listItem")) {
          modifiedType = "mJPRepeatTableView";
        } else {
          modifiedType = "mJPTableView";
        }
      }
      break;
    case "collectionView":
    case "viewPager":
      {
        modifiedType = "mJPCollectionView";
      }
      break;
    case "progressBar":
      {
        modifiedType = "mJPActivityIndicator";
      }
      break;
    case "switch":
      {
        modifiedType = "mJPSwitch";
      }
      break;
    case "swypeLayout":
      {
        modifiedType = "mJPSwypeLayoutCell";
      }
      break;
    case "accordionLayout":
      {
        modifiedType = "mJPExpandableCell";
      }
      break;
    case "linearLayout":
      {
        modifiedType = "mJPLinearLayout";
      }
      break;
    case "relativeLayout":
      {
        modifiedType = "mJPRelativeLayout";
      }
      break;
    case "frameLayout":
      {
        modifiedType = "mJPRelativeLayout";
      }
      break;
    default:
      {
        modifiedType = "mJPView";
      }
  }
  return modifiedType;
}

function changeKeys(config, type) {
  var map = {
    "imageUrl": "imageNamed",
    "packageIcon": "imageNamed",
    "color": "textColor"
  };

  var keys = Object.keys(config);

  keys.forEach(function (key) {
    if (map[key]) {
      config[map[key]] = config[key];
      delete config[key];
    }
  });

  if (config.stroke) {
    config.borderWidth = config.stroke.split(",")[0];
    config.borderColor = config.stroke.split(",")[1];
  }

  // Add all view based prop injections below.
  switch (type.toLowerCase()) {
    case "scrollview":
      {
        config.orientation = "vertical";
      }
      break;
    case "horizontalscrollview":
      {
        config.orientation = "horizontal";
      }
      break;
  }
  // Add all view based prop injections above.
  return config;
}

// cS - convert to String
// rWS - remove white spaces
// fromStore methods dont  use invokeOn
// the extract className out of the stored object in the store
module.exports = function (type, config, _getSetType) {
  config = changeKeys((0, _flattenObject2.default)(config), type);
  type = generateType(type, config);
  getSetType = _getSetType == "set" ? 1 : 0;
  config.methods = [];
  config.alignment_rules = [];

  // tag set
  if (config.id) {
    var tag = rWS(cS(config.id));

    if (!getSetType) {
      config.methods.push(self_getViewFromTag(tag));
    } else {
      config.methods.push(this_setTag(tag));
    }
  }

  // frame
  if (!config.useConstraits && (config.x || config.y || config.w || config.h)) {
    var x = rWS(cS(config.x)) || "0";
    var y = rWS(cS(config.y)) || "0";
    var width = rWS(cS(config.w)) || "0";
    var height = rWS(cS(config.h)) || "0";

    config.methods.push(self_rectFromDictionary(x, y, width, height));
    config.methods.push(this_setFrame());
  }

  if (config.hasOwnProperty("useConstraits") && config.useConstraits && config.hasOwnProperty("expand")) {
    config.visibility = config.expand ? config.visibility ? config.visibility : "visible" : "gone";
  }

  if (config.hasOwnProperty("alignParentBottom") && config.alignParentBottom == "true,-1") {
    config.alignment_rules.push('align_parent_bottom');
  }

  if (config.useConstraits) {
    config.methods.push(this_updateLayoutParams(config));
  }

  if (config.hasOwnProperty("letterSpacing")) {
    config.methods.push(this_setLetterSpacing(config.letterSpacing));
  }

  if (config.hasOwnProperty("lineSpacing")) {
    config.methods.push(this_setLineSpacing(config.lineSpacing));
  }

  if (config.hasOwnProperty("caretColor")) {
    config.methods.push(UIColor_setColor(config.caretColor));
    config.methods.push(this_setCaretColor());
  }

  // background
  if (config.background || config.gradient || config.backgroundDrawable) {
    if (config.hasOwnProperty("gradient")) {
      var gradient = JSON.parse(config.gradient);
      var gradientType = gradient.type;
      var gradientAngle = gradient.angle;
      var colours = [];

      gradient.values.forEach(function (color) {
        colours.push(convertColorToRgba(color));
      });

      gradient = JSON.stringify({
        colors: colours,
        type: gradientType,
        angle: gradientAngle
      });
      config.methods.push(this_setGradient(gradient));
    } else if (config.hasOwnProperty("backgroundDrawable")) {
      config.methods.push(UIImage_imageNamed(config.backgroundDrawable));
      config.methods.push(this_setBackgroundImage());
    } else {
      config.methods.push(UIColor_setColor(config.background));
      config.methods.push(this_setBackgroundColor());
    }
  }

  // borderColor, radius and width
  // will work only for uiView and uiLabel
  if (config.hasOwnProperty("cornerRadius")) {
    var arg = rWS(cS(config.cornerRadius));
    config.methods.push(setCornerRadius(arg));
  }

  if (config.hasOwnProperty("borderWidth")) {
    var _arg = rWS(cS(config.borderWidth));
    config.methods.push(setBorderWidth(_arg));
  }

  if (config.hasOwnProperty("borderColor")) {
    config.methods.push(UIColor_setColor(config.borderColor));
    config.methods.push(setBorderColor());
  }

  if (config.debug) {
    config.methods.push(this_layer());
    config.methods.push(setBorderWidth("1"));
  }

  if (config.shadow) {
    var shadowValues = config.shadow.split(',');
    var shadowBlur = rWS(cS(shadowValues[2]));
    var shadowSpread = rWS(cS(shadowValues[3]));
    var shadowOpacity = rWS(cS(shadowValues[5]));
    var shadowOffset = {
      x: rWS(cS(shadowValues[0])),
      y: rWS(cS(shadowValues[1]))
    };

    var shadowColor = convertColorToRgba(shadowValues[4]);

    config.methods.push(this_setShadow(config.id, shadowOffset, shadowBlur, shadowSpread, shadowColor, shadowOpacity));
  }

  // make child fullWidth and height of parent
  if (config.fillParent) {
    config.methods.push(this_superview());
    config.methods.push(UIView_bounds());
    config.methods.push(this_setFrame());
  }

  if (config.hasOwnProperty("imageNamed")) {
    var id = cS(config.id);
    var placeholder = config.placeHolder || "";
    if (config.imageNamed.endsWith(".gif")) {
      config.methods.push(this_setGif(id, config.imageNamed));
    } else {
      config.methods.push(this_setImageURL(id, config.imageNamed, placeholder));
    }
  }

  if (config.hasOwnProperty("adjustViewWithKeyboard")) {
    config.methods.push(this_adjustViewWithKeyboard(config.adjustViewWithKeyboard));
  }

  if (config.hasOwnProperty("playGif")) {
    if (config.playGif) config.methods.push(this_startGif());else config.methods.push(this_stopGif());
  }

  if (config.hint) {
    if (config.letterSpacing) {
      var data = JSON.stringify({
        'hint': cS(config.hint),
        'letterSpacing': config.letterSpacing
      });
      config.methods.push(this_setPlaceholderProperties(data));
    } else {
      config.methods.push(this_setPlaceholder(cS(config.hint)));
    }
  }

  if (config.hasOwnProperty("separator")) {
    var _enabled6 = cS(config.separator);
    config.methods.push(this_setSeparator(_enabled6));
  }

  if (config.hasOwnProperty("separatorRepeat")) {
    var _enabled6 = cS(config.separatorRepeat);
    config.methods.push(this_setSeparatorRepeat(_enabled6));
  }

  if (config.translationZ) {
    config.methods.push(this_setTranslationZ(cS(config.translationZ)));
  }

  if (config.scrollTo) {
    var data = config.scrollTo.split(",");
    var parsedData = JSON.stringify({ "x": data[0], "y": data[1] });
    config.methods.push(this_scrollTo(cS(parsedData)));
  }

  if (config.hasOwnProperty("expand")) {
    config.methods.push(this_setExpand(config.expand ? "1" : "0"));
  }

  if (config.hasOwnProperty("expandDuration")) {
    config.methods.push(this_setExpandDuration(cS(config.expandDuration)));
  }

  if (config.hasOwnProperty("expandAlpha")) {
    config.methods.push(this_setExpandAlpha(cS(config.expandAlpha)));
  }

  //Updated to handle 0 being passed for default alignment
  if (config.hasOwnProperty("textAlignment")) {
    config.methods.push(this_setTextAlignment(rWS(cS(config.textAlignment))));
  }

  if (config.hasOwnProperty("textFromHtml")) {
    var modifiedHtmlString = "<span style=\"";
    if (config.hasOwnProperty("fontStyle")) {
      modifiedHtmlString += "font-family:" + config.fontStyle + ";";
    }
    if (config.hasOwnProperty("textSize")) {
      modifiedHtmlString += "font-size:" + config.textSize + ";";
    }
    if (config.hasOwnProperty("textColor")) {
      modifiedHtmlString += "color:" + config.textColor + ";";
    }
    modifiedHtmlString += "\">" + config.textFromHtml + "</span>";
    config.methods.push(this_setHTMLText(modifiedHtmlString));
  }

  if (config.textColor) {
    config.methods.push(UIColor_setColor(config.textColor));
    config.methods.push(this_setTextColor());
  }
  if (config.hasOwnProperty("fontStyle")) {
    if (config.hasOwnProperty("textSize")) {
      config.methods.push(UIFont_fontWithName(config.fontStyle, config.textSize + ""));
    } else {
      config.methods.push(this_fontWithName(config.fontStyle));
    }
    config.methods.push(this_setFont());
  } else if (config.hasOwnProperty("textSize")) {
    config.methods.push(UIFont_systemFontOfSize(config.textSize + ""));
    config.methods.push(this_setFont());
  }

  if (config.scrollEnabled) {
    var scrollEnabled = cS(config.scrollEnabled);
    config.methods.push(this_scrollEnabled(scrollEnabled));
  }

  if (config.fontFamily) {
    config.methods.push(UIFont_systemFontOfSizeWeight((config.textSize || "14") + "", config.fontFamily || "0.0"));
    config.methods.push(this_setFont());
  }

  if (config.hasOwnProperty("singleLine")) {
    if (!config.singleLine) {
      config.methods.push(this_setLineBreakMode("0"));
      config.methods.push(this_setNumberOfLines("0"));
    }
  }

  if (!config.useConstraits && config.visibility) {
    config.methods.push(this_setHidden(config.visibility));
  }

  if (config.hasOwnProperty("clickable")) {
    config.methods.push(this_setUserInteraction(rWS(cS(config.clickable))));
  }

  if (config.translationX) {
    var props = [{
      'id': '' + Math.random().toString(36).substring(2),
      'type': 'translation',
      'runOnRender': 'true',
      'easing': 'linear',
      'delay': '0',
      'duration': '1',
      'props': JSON.stringify([{ 'to': '' + config.translationX, 'prop': 'translationX', 'from': '0' }])
    }];

    config.methods.push(self_animate({ 'id': '' + config.id, 'json': JSON.stringify(props) }));
  }

  if (config.translationY) {
    var _props = [{
      'id': '' + Math.random().toString(36).substring(2),
      'type': 'translation',
      'runOnRender': 'true',
      'easing': 'linear',
      'delay': '0',
      'duration': '1',
      'props': JSON.stringify([{ 'to': '' + config.translationY, 'prop': 'translationY', 'from': '0' }])
    }];

    config.methods.push(self_animate({ 'id': '' + config.id, 'json': JSON.stringify(_props) }));
  }

  if (config.a_rotate) {
    //TODO: FIX THIS BRING IT OUTSIDE
    var _props2 = {
      "duration": config.a_duration,
      "id": config.id,
      "delay": config.a_delay,
      "option": config.a_option,
      "type": "rotation"
    };
    config.methods.push(self_animate(_props2));
  }

  if (config.hasOwnProperty("htmlText")) {
    config.methods.push(this_setHTMLText(config.htmlText));
  }

  if (config.hasOwnProperty("bringSubViewToFront")) {
    var viewTag = cS(config.id);
    config.methods.push(this_bringSubViewToFront(viewTag));
  }

  if (config.hasOwnProperty("contentMode")) {
    var contentMode = cS(config.contentMode);
    config.methods.push(this_setContentMode(contentMode));
  }

  if (config.onFocus) {
    config.methods.push(this_setOnFocusCallback(config.onFocus));
  }

  if (config.hasOwnProperty("onMerchantViewHeightChange")) {
    config.methods.push(this_setOnMerchantViewHeightChangeCallback(config.onMerchantViewHeightChange));
  }

  if (config.hasOwnProperty("pivotX")) {
    config.methods.push(this_pivotX(config.pivotX + ""));
  }

  if (config.hasOwnProperty("pivotY")) {
    config.methods.push(this_pivotY(config.pivotY + ""));
  }

  if (config.hasOwnProperty("onItemClick")) {
    config.methods.push(this_setOnItemClick(config.onItemClick));
  }

  if (config.statusBarStyle) {
    var enabled = cS(config.statusBarStyle);
    config.methods.push(this_setStatusBarStyle(enabled));
  }

  if (config.hasOwnProperty("enabled")) {
    var _enabled = cS(config.enabled);
    config.methods.push(this_setEnabled(_enabled));
  }

  if (config.hasOwnProperty("inputTypeI")) {
    var keyboardType = cS(config.inputTypeI);
    config.methods.push(this_setKeyboardType(keyboardType));
  }

  if (config.inputType) {
    var _keyboardType = config.inputType;
    if (_keyboardType == "numeric" || _keyboardType == "numericWithoutSuggestion") {
      config.inputType = 4;
    } else if (_keyboardType == "email") {
      config.inputType = 7;
    } else if (_keyboardType == "numericPassword") {
      config.inputType = 4;
      config.methods.push(this_setSecureTextEntry("1"));
    } else if (_keyboardType == "password") {
      config.inputType = 0;
      config.methods.push(this_setSecureTextEntry("1"));
    } else {
      config.inputType = 0;
    }
    config.methods.push(this_setKeyboardType(cS(config.inputType)));
  }

  if (config.hasOwnProperty("autoCapitalizationType")) {
    var _keyboardType2 = cS(config.autoCapitalizationType);
    config.methods.push(this_setAutoCapitalizationType(_keyboardType2));
  }

  if (config.hasOwnProperty("autoCorrectionType")) {
    var autoCorrectionType = cS(config.autoCorrectionType);
    config.methods.push(this_setAutoCorrectionType(autoCorrectionType));
  }

  if (config.hasOwnProperty("becomeFirstResponder")) {
    config.methods.push(this_becomeFirstResponder());
  }

  if (config.hasOwnProperty("setOn")) {
    var _enabled2 = cS(config.setOn);
    config.methods.push(this_setOn(_enabled2));
  }

  if (config.scrollToIndex) {
    var _enabled3 = cS(config.scrollToIndex);
    config.methods.push(this_scrollToIndex(_enabled3));
  }

  if (config.showVerticalScrollBar) {
    var _enabled4 = cS(config.showVerticalScrollBar);
    config.methods.push(this_showVerticalScrollBar(_enabled4));
  }

  if (config.lengthLimit) {
    var _enabled5 = cS(config.lengthLimit);
    config.methods.push(this_setTextLengthLimit(_enabled5));
  }

  if (config.hasOwnProperty("swypeEnabled")) {
    config.methods.push(this_setSwype(config.swypeEnabled));
  }

  if (config.hasOwnProperty("focus")) {
    config.methods.push(this_becomeFirstResponder(cS(config.focus)));
  }

  if (config.pattern) {
    var patStr = cS(config.pattern);
    var patArr = patStr.split(",");
    var patLen = patArr[patArr.length - 1];
    patStr = patArr.slice(0, patArr.length - 1).join(",");

    config.methods.push(this_setRegularExpression(cS(patStr)));
    config.methods.push(this_setTextLengthLimit(cS(patLen)));
  }

  if (config.regExp) {
    var _enabled7 = cS(config.regExp);
    config.methods.push(this_setRegularExpression(_enabled7));
  }

  if (config.removeCell) {
    var cellIndex = cS(config.removeCell);
    config.methods.push(this_removeCell(cellIndex));
  }

  if (config.secureTextEntry) {
    var _enabled8 = cS(config.secureTextEntry);
    config.methods.push(this_setSecureTextEntry(_enabled8));
  }

  if (config.hasOwnProperty('checked')) {
    config.methods.push(this_setOn(config.checked));
  }

  if (config.popupMenu) {
    config.methods.push(self_setPopupMenu(config.popupMenu, config.onMenuItemClick));
  }

  if (config.hasOwnProperty("alpha")) {
    config.methods.push(self_setAlpha(config.alpha));
  }

  if (config.animation) {
    var animProps = {
      viewTag: '' + config.id,
      json: config.animation
    };
    config.methods.push(self_animateNew(animProps));
  }

  if (config.hasOwnProperty("text")) {
    if (config.letterSpacing) {
      config.methods.push(this_setLetterSpacing(cS(config.letterSpacing)));
    }
    config.methods.push(this_setText(cS(config.text)));
  }

  if (config.cursorPosition) {
    config.methods.push(self_setCursorPosition(cS(config.id), cS(config.cursorPosition)));
  }

  if (config.onSwipe && typeof config.onSwipe === "function") {
    config.methods.push(this_setSwipeCallback(callbackMapper.map(config.onSwipe)));
  }

  if (config.hasOwnProperty("closeSwipe")) {
    config.methods.push(this_setCloseSwipe(config.closeSwipe));
  }

  if (config.hasOwnProperty("swypeEnabled")) {
    config.methods.push(this_setEnableSwype(config.swypeEnabled));
  }

  if (config.hasOwnProperty("listData") && config.hasOwnProperty("listItem")) {
    var item = JSON.parse(config.listItem);
    item.itemView = Android.createListData(config.id, item.itemView);
    config.methods.push(this_setupList(config.listData, JSON.stringify(item)));
  }

  if (config.hasOwnProperty("inlineAnimation")) {
    config.methods.push(this_inlineAnimation(config));
  }

  if (config.hasOwnProperty("clipsToBounds")) {
    config.methods.push(this_setClipsToBounds(config.clipsToBounds));
  }

  if (config.hasOwnProperty("cornerRadii")) {
    config.methods.push(this_setCornerCurves(config.cornerRadii));
  }

  config.currChildOffset = 0;
  config = transformKeys(config);

  return { config: config, type: type };
};

function self_animateNew(props) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "animate:",
    "values": [props]
  };
}

/***/ }),

/***/ "./src/helpers/web/index.js":
/*!**********************************!*\
  !*** ./src/helpers/web/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = {
	parseParams: __webpack_require__(/*! ./parseParams */ "./src/helpers/web/parseParams.js")
};

/***/ }),

/***/ "./src/helpers/web/parseParams.js":
/*!****************************************!*\
  !*** ./src/helpers/web/parseParams.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

Array.prototype.rotate = function () {
  // save references to array functions to make lookup faster
  var push = Array.prototype.push,
      splice = Array.prototype.splice;

  return function (count) {
    var len = this.length >>> 0,
        // convert to uint
    count = count >> 0; // convert to int

    // convert count to value in range [0, len)
    count = (count % len + len) % len;

    // use splice.call() instead of this.splice() to make function generic
    push.apply(this, splice.call(this, 0, count));
    return this;
  };
}();

function flattenObject(ob) {
  var toReturn = {};
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if (_typeof(ob[i]) == 'object') {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        if (typeof flatObject[x] !== "undefined") toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }

  return toReturn;
}

function parseColors(color) {
  if (color.length < 8) return color;

  if (color.indexOf("rgba") !== -1 || color.indexOf("rgb") !== -1) return color;

  var alpha = parseInt(color.substring(1, 3), 16);
  alpha = (alpha / 255).toFixed(2);

  var hexColor = color.substring(3, 9);
  var rgbaColor = "rgba(" + convertHexToRgb(hexColor) + "," + alpha + ")";

  return rgbaColor;
}

function parseLayoutProps(type, config, key) {
  var isMobile = window.innerWidth < 700;
  if (typeof config[key] == "undefined" || config[key] == null) {
    delete config[key];
    return;
  }

  if (!config.style) {
    config.style = {};
    config.style.transform = "";
    config.animation = {};
    config.animation.transform = "";
  }

  if (!config.attributes) config.attributes = {};

  if (!config.style.className) config.style.className = "";

  if (key == "onClick" || key == "onClickEvent") {
    if (!isMobile && !config.cursorType) {
      config.style.cursor = "pointer";
    }
  }
  if (key == "cursorType") {
    config.style.cursor = config.cursorType;
  }
  if (key == "textSize") config.style.fontSize = config.textSize + 'px';
  if (key == 'fontSize') config.style.fontSize = config.fontSize + 'px';

  if (key == 'url') config.attributes.src = config.url;

  /*if (key == "imageUrl"){
    let imageUrl = config.imageUrl;
    
    if(config.rawData) {
      // Do nothing
    } else {
      let temp = imageUrl.split('.');
      let ext = '';
      if(temp && temp.length > 0)
        ext = temp[temp.length - 1];
      
      let exts = ["jpeg", "jpg", "png", "bmp", "svg", "gif"];
      ext = ext.toLowerCase();
       if(!exts.includes(ext)) {
        imageUrl += '.png';
      }
    }
     config.attributes.src = imageUrl;
  }*/

  if (key == "backgroundColor") {
    config.style.backgroundColor = parseColors(config.backgroundColor);
  }

  if (key == "background") {
    config.style.background = config.background;
  }
  if (key == "backgroundDrawable") {
    config.style["background-image"] = "url('" + config.backgroundDrawable + "')";
  }

  if (key == "color") {
    config.style.color = parseColors(config.color);
  }

  if (key == "position") {
    config.style.position = config.position;
  }

  if (key == "bottomFixed") {
    config.style.bottom = config.bottomFixed;
  }
  if (key == "topFixed") {
    config.style.top = config.topFixed;
  }

  if (key == "autofocus") {
    if (config.autofocus) {
      config.attributes["autofocus"] = "autofocus";
    }
  }
  if (key == "focus") {
    if (config.focus && config.id) {
      var doc = document.getElementById(config.id);
      if (doc) {
        doc.focus();
      }
    }
  }

  if (key == "cornerRadius") {
    config.style.borderRadius = config.cornerRadius + "px";
  }

  if (key == "alpha") {
    config.style.opacity = config[key];
  }

  if (key == "a_alpha") {
    config.animation.opacity = config[key];
  }

  if (key == "fontFamily") {
    config.style.fontFamily = config.fontFamily;
  }

  if (key == 'typeface') {
    switch (config.typeface) {
      case 'normal':
        config.style.fontWeight = 400;
        break;
      case 'bold':
        config.style.fontWeight = 700;
        break;
      case 'italic':
        config.style.fontStyle = 'italic';
        break;
      case 'bold_italic':
        config.style.fontWeight = 700;
        config.style.fontStyle = 'italic';
        break;
      case 'underline':
        config.style.textDecoration = 'underline';
        break;
    }
  }

  if (key == "fontStyle") {
    var match = config.fontStyle.match(/[/-]/);
    var fontName = match ? config.fontStyle.slice(0, match.index) : config.fontStyle;
    config.style.fontFamily = fontName;

    if (!match) return;

    var _type = config.fontStyle.slice(match.index + 1);
    _type = _type.replace(/[-/]/g, '');
    _type = _type.toLowerCase();

    if (_type.indexOf('italic') != -1) config.style.fontStyle = 'italic';

    var fontWeight = 0;

    if (_type.indexOf('extralight') != -1) fontWeight = 200;else if (_type.indexOf('light') != -1) fontWeight = 300;else if (_type.indexOf('regular') != -1 || _type.indexOf('book') != -1) fontWeight = 400;else if (_type.indexOf('semibold') != -1 || _type.indexOf('medium') != -1) fontWeight = 500;else if (_type.indexOf('bold') != -1 || _type.indexOf('heavy') != -1) fontWeight = 700;else if (_type.indexOf('black') != -1) fontWeight = 900;

    if (fontWeight > 0) config.style.fontWeight = fontWeight;
  }

  if (key == 'visibility') {
    var visibility = config.visibility;
    if (visibility == 'invisible') config.style.visibility = "hidden";else if (visibility == 'gone') config.style.display = "none";else {
      config.style.visibility = '';
    }
  }

  if (key == 'expand') {
    var _visibility = config.expand + '';
    if (_visibility == 'true') {
      config.style.visibility = '';
    } else config.style.display = "none";
  }

  if (key == "stroke") {
    var _values = config.stroke.split(",");

    if (_values.length == 2) config.style.border = _values[0] + "px solid " + _values[1];else if (_values.length == 3) {
      if (_values[2] == "rbl") {
        config.style.borderBottom = _values[0] + "px solid " + _values[1];
        config.style.borderLeft = _values[0] + "px solid " + _values[1];
        config.style.borderRight = _values[0] + "px solid " + _values[1];
      } else if (_values[2] == "b") {
        config.style.borderBottom = _values[0] + "px solid " + _values[1];
      } else config.style.border = _values[0] + "px " + _values[1] + " " + _values[2];
    }
  }

  if (key == "strokeTop") {
    var _values2 = config.strokeTop.split(",");

    if (_values2.length == 2) config.style.borderTop = _values2[0] + "px solid " + _values2[1];else if (_values2.length == 3) config.style.borderTop = _values2[0] + "px " + _values2[1] + " " + _values2[2];
  }

  if (key == "strokeRight") {
    var _values3 = config.strokeRight.split(",");

    if (_values3.length == 2) config.style.borderRight = _values3[0] + "px solid " + _values3[1];else if (_values3.length == 3) config.style.borderRight = _values3[0] + "px " + _values3[1] + " " + _values3[2];
  }

  if (key == "strokeBottom") {
    var _values4 = config.strokeBottom.split(",");

    if (_values4.length == 2) config.style.borderBottom = _values4[0] + "px solid " + _values4[1];else if (_values4.length == 3) config.style.borderBottom = _values4[0] + "px " + _values4[1] + " " + _values4[2];
  }

  if (key == "strokeLeft") {
    var _values5 = config.strokeLeft.split(",");

    if (_values5.length == 2) config.style.borderLeft = _values5[0] + "px solid " + _values5[1];else if (_values5.length == 3) config.style.borderLeft = _values5[0] + "px " + _values5[1] + " " + _values5[2];
  }

  if (key == "translationY") {
    config.style.transform += "translateY(" + config[key] + "px) ";
  }

  if (key == "a_translationY") {
    config.animation.transform += "translateY(" + config[key] + "px) ";
  }

  if (key == "translationX") {
    config.style.transform += "translateX(" + config[key] + "px) ";
  }

  if (key == "a_translationX") {
    config.animation.transform += "translateX(" + config[key] + "px) ";
  }

  if (key == "scaleX") {
    config.style.transform += "scaleX(" + config[key] + ") ";
  }

  if (key == "a_scaleX") {
    config.animation.transform += "scaleX(" + config[key] + ") ";
  }

  if (key == "scaleY") {
    config.style.transform += "scaleY(" + config[key] + ") ";
  }

  if (key == "a_scaleY") {
    config.animation.transform += "scaleY(" + config[key] + ") ";
  }

  if (key == "rotation") {
    config.style.transform += "rotate(" + config[key] + "deg) ";
  }

  if (key == "a_rotation") {
    config.animation.transform += "rotate(" + config[key] + "deg) ";
  }

  if (key == "rotationX") {
    config.style.transform += "rotateX(" + config[key] + "deg) ";
  }

  if (key == "a_rotationX") {
    config.animation.transform += "rotateX(" + config[key] + "deg) ";
  }

  if (key == "rotationY") {
    config.style.transform += "rotateY(" + config[key] + "deg) ";
  }

  if (key == "a_rotationY") {
    config.animation.transform += "rotateY(" + config[key] + "deg) ";
  }

  if (key == "translationZ") {
    var v = config[key];
    config.style["-webkit-box-shadow"] = "0 0 " + v.toString() + "px rgba(0,0,0, .1)";
    config.style["-moz-box-shadow"] = "0 0 " + v.toString() + "px rgba(0,0,0, .1)";
    config.style["box-shadow"] = "0 0 " + v.toString() + "px rgba(0,0,0, .1)";
  }

  if (key == "a_duration" && !isNaN(config[key])) {
    var suffix = config.transitionTimingFunction ? " " + config.transitionTimingFunction : "";
    config.animation.transition = config[key] + 'ms all' + suffix;
  }

  if (type == "textView" && key == "gravity" && config.gravity) {
    config.style.textAlign = config.gravity;
    if (config.gravity == "center_vertical") {
      config.style["align-items"] = "center";
      config.style.display = "flex";
    } else if (config.gravity == "center_horizontal") {
      config.style.display = "flex";
      config.style["justify-content"] = "center";
    } else if (config.gravity == "center") {
      config.style.display = "flex";
      config.style["align-items"] = "center";
      config.style["justify-content"] = "center";
    } else if (config.gravity == "center") {
      config.style.display = "flex";
      config.style["align-items"] = "center";
      config.style["justify-content"] = "center";
    }
  }
  if (type == "linearLayout" && key == "gravity" && config.gravity) {
    if (config.margin && config.gravity == "center_vertical") {
      var margin = config.margin.split(",");
      if (config.width == "match_parent") {
        config.style.width = "calc(100% - " + (parseInt(margin[0]) + parseInt(margin[2])).toString() + "px )";
      }
    }
  }

  if (key == "hint") {
    config.attributes.placeholder = config.hint;
  }

  if (key == "contentEditable" && config.contentEditable) {
    config.attributes.contenteditable = true;
  }

  if (key == "id") {
    config.attributes.id = config.id;
  }

  if (key == "gradient") {
    var gradientObj = JSON.parse(config.gradient);
    if (gradientObj.type == "linear") {
      var angle = gradientObj.angle;
      var values = gradientObj.values;
      var colors = values.join(", ");
      config.style["background-image"] = "linear-gradient(" + angle + "deg, " + colors + ")";
    } else {
      var values = gradientObj.values;
      var colors = values.join(", ");
      config.style["background-image"] = "radial-gradient(" + colors + ")";
    }
  }

  if (key == "inputType") {
    var inputType = "text";
    if (config.inputType == "numericPassword" || config.inputType == "password") {
      if (config.inputTypeI == 4 && isMobile) {
        inputType = "text";
        config.style["-webkit-text-security"] = "disc";
        config.style["-moz-text-security"] = "disc";
        config.style["text-security"] = "disc";
      } else {
        inputType = "password";
      }
    } else if (config.inputType == "disabled") {
      config.attributes.disabled = 'disabled';
    } else if (config.inputType == "numeric") {
      inputType = "number";
    }
    if (config.separator) {
      inputType = "text";
    }

    config.attributes.type = inputType;
  }

  if (key == "rotateImage") {
    if (config.rotateImage) {
      config.style["animation-duration"] = "4s";
      config.style["animation-timing-function"] = "linear";
      config.style["animation-delay"] = "0s";
      config.style["animation-iteration-count"] = "infinite";
      config.style["animation-direction"] = "normal";
      config.style["animation-fill-mode"] = "none";
      config.style["animation-play-state"] = "running";
      config.style["animation-name"] = "rotation";
    }
  }

  if (key == "pattern") {
    config.attributes["data-pattern"] = config.pattern;
  }
  if (key == "inputTypeI") {
    if (config.inputTypeI == 4) {
      config.attributes["inputmode"] = "numeric";
    }
  }

  if (key == "separator") {
    config.attributes["separator"] = config.separator;
  }
  if (key == "separatorRepeat") {
    config.attributes["separatorRepeat"] = config.separatorRepeat;
  }

  if (key == "myAttr") {
    config.attributes["myAttr"] = config.myAttr;
  }

  if (key == "shadow") {
    var shadowValues = config.shadow.split(config.shadowSeparator || ',');
    var shadowBlur = rWS(cS(shadowValues[2]));
    var shadowSpread = rWS(cS(shadowValues[3]));
    var shadowOpacity = rWS(cS(shadowValues[5]));
    var shadowOffset = {
      x: rWS(cS(shadowValues[0])),
      y: rWS(cS(shadowValues[1]))
    };

    var shadowColor = convertColorToRgba(shadowValues[4]);
    var shadowType = config.shadowType ? config.shadowType + " " : '';

    config["style"]["box-shadow"] = shadowType + parseInt(shadowOffset.x) + "px " + parseInt(shadowOffset.y) + "px " + parseInt(shadowBlur) + "px " + parseInt(shadowSpread) + "px rgba(" + shadowColor.r + ", " + shadowColor.g + ", " + shadowColor.b + ", " + shadowColor.a + ")";
  }

  if (key == "lineHeight") config.style.lineHeight = config.lineHeight;

  if (key == "objectFit") config.style.objectFit = config.objectFit;

  if (key == "clickable") {
    config.style.pointerEvents = config.clickable ? "auto" : "none";
  }
}

function convertColorToRgba(color) {
  color = rWS(cS(color));

  var values;
  var alpha = "1.00";

  if (color.length >= 8) {
    alpha = parseInt(color.substring(1, 3), 16);
    alpha = (alpha / 255).toFixed(2);
    color = color.substring(3, 9);
  } else {
    color = color.substring(1, color.length);
  }

  color = convertHexToRgb(rWS(color));
  values = color.split(',');

  return {
    r: parseInt(rWS(values[0])),
    g: parseInt(rWS(values[1])),
    b: parseInt(rWS(values[2])),
    a: parseFloat(alpha)
  };
}

function convertHexToRgb(hex) {
  var r = parseInt(hex.substring(0, 2), 16).toFixed(2);
  var g = parseInt(hex.substring(2, 4), 16).toFixed(2);
  var b = parseInt(hex.substring(4, 6), 16).toFixed(2);

  return r + "," + g + "," + b;
}

function cS(value) {
  return value ? value + '' : "";
}

function rWS(value) {
  return value.replace(/ /g, '');
}

function setDefaults(type, config) {
  if (type == "linearLayout") {
    config.orientation = config.orientation;
  }
}
function this_inlineAnimation(config) {
  var con = modifyTranslation(config);
  var element = document.getElementById(con.name);
}
function modifyTranslation(config) {
  var x = config.x || "0";
  var y = config.y || "0";
  var animationArray = JSON.parse(config.inlineAnimation);
  var animationArray = animationArray.map(function (a) {
    if (a.hasOwnProperty("fromX")) {
      a.fromX = parseInt(a.fromX) + parseInt(x) + '';
      if (!a.hasOwnProperty("toX")) {
        a.toX = 0 + parseInt(x) + '';
      }
    }
    if (a.hasOwnProperty("toX")) {
      a.toX = parseInt(a.toX) + parseInt(x) + '';
    }
    if (a.hasOwnProperty("fromY")) {
      a.fromY = parseInt(a.fromY) + parseInt(y) + '';
      if (!a.hasOwnProperty("toY")) {
        a.toY = 0 + parseInt(y) + '';
      }
    }
    if (a.hasOwnProperty("toY")) {
      a.toY = parseInt(a.toY) + parseInt(y) + '';
    }
    return a;
  });
  return animationArray;
}
module.exports = function (type, config, getSetType) {
  config = flattenObject(config);
  setDefaults(type, config);

  var keys = Object.keys(config);

  for (var i = 0; i < keys.length; i++) {
    if (config.style && config.style.display === 'none' && keys[i] === 'gravity') {
      continue;
    }
    parseLayoutProps(type, config, keys[i]);
  }

  config.transition = [String(config.a_duration || 0) + "ms", "all", config.transitionTimingFunction].filter(Boolean).join(" ");

  if (config.style.transform == "") {
    delete config.style.transform;
  }
  if (config.hasOwnProperty("inlineAnimation")) {
    this_inlineAnimation(config);
  }

  return config;
};

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/*
 Used to initialize defaults for window funcions and variables.
*/
var _require = __webpack_require__(/*! ./helper */ "./src/helper.js"),
    merge = _require.merge;

window.PrestoUI = __webpack_require__(/*! ./PrestoUIInterface */ "./src/PrestoUIInterface.js");

var getCurrTime = function getCurrTime() {
    return new Date().getTime();
};

// window.__OS = getOS()
if (false) { var getScreenDetails; }

if (false) {} else if (true) {
    window.Android = __webpack_require__(/*! ./IOS/AndroidInterface */ "./src/IOS/AndroidInterface.js");
    window.JBridge = merge(window.JBridge, {});
}

if (window.__DEVICE_DETAILS && window.__DEVICE_DETAILS.hasOwnProperty("screen_width")) {
    window.__WIDTH = window.__DEVICE_DETAILS.screen_width;
} else {
    window.__WIDTH = "1080";
}

if (window.__DEVICE_DETAILS && window.__DEVICE_DETAILS.hasOwnProperty("screen_height")) {
    window.__HEIGHT = window.__DEVICE_DETAILS.screen_height;
} else {
    window.__HEIGHT = "1920";
}

var guid = Math.random().toString(36).substr(2, 9);

//Intializing defaults
if (false) { var duiShowScreen; } else if (true) {
    window.__COLOR_INDEX = window.__COLOR_INDEX || 1;
    window.__FONT_INDEX = window.__FONT_INDEX || 1;
    window.__RECT_INDEX = window.RECT_INDEX || 1;
    window.__VIEW_INDEX = window.__VIEW_INDEX || 1;
    window.__IMAGE_INDEX = window.__IMAGE_INDEX || 1;
    window.__POINT_INDEX = window.__POINT_INDEX || 1;
    window.__LAYER_INDEX = window.__LAYER_INDEX || 1;
    window.__SIZE_INDEX = window.__SIZE_INDEX || 1;
} else {}

window.__ID = 1;
window.__NODE_ID = 1;
window.__SCREEN_INDEX = -1;

window.__PROXY_FN = {};
window.__FN_INDEX = 0;
window.__ROOTSCREEN = null;
window.__CACHED_SCREENS = {};
window.__SCREEN_COUNT = 0;
window.__CURR_SCREEN = null;
window.__PREV_SCREEN = null;
window.__ANIMATE_DIR = null;
window.__SCREEN_STACK = [];
window.__LAST_FN_CALLED = null;
window.__THROTTELED_ACTIONS = [];
window.__VIEWS = {};
window.__VIEW_DIMENSIONS = {};
window.__OBSERVERS = {};
window.ZIndex = 0;

window.callUICallback = function () {
    var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
    var fName = args[0];
    var functionArgs = args.slice(1);
    var currTime;
    var timeDiff;

    if (window.__ALL_ONCLICKS && window.__ALL_ONCLICKS.indexOf(fName) != -1 && args[2] == "feedback" && JBridge && JBridge.setClickFeedback) {
        return JBridge.setClickFeedback(args[1]);
    }

    if (window.__THROTTELED_ACTIONS && window.__THROTTELED_ACTIONS.indexOf(fName) == -1) {
        window.__PROXY_FN[fName].apply(null, functionArgs);
    } else if (window.__LAST_FN_CALLED && fName == window.__LAST_FN_CALLED.fName) {
        currTime = getCurrTime();
        timeDiff = currTime - window.__LAST_FN_CALLED.timeStamp;

        if (timeDiff >= 300) {
            window.__PROXY_FN[fName].apply(null, functionArgs);
            window.__LAST_FN_CALLED.timeStamp = currTime;
        } else {
            console.warn("function throtteled", fName);
            console.warn("time diff", timeDiff);
        }
    } else {
        window.__PROXY_FN[fName].apply(null, functionArgs);
        window.__LAST_FN_CALLED = {
            timeStamp: new Date().getTime(),
            fName: fName
        };
    }
};

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguaW9zLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL0lPUy9BbmRyb2lkSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy9zcmMvSU9TL1JlbmRlci5qcyIsIndlYnBhY2s6Ly8vc3JjL1ByZXN0b1VJSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jhc2VWaWV3LmpzIiwid2VicGFjazovLy9zcmMvY29tcHV0ZUlPUy5qcyIsIndlYnBhY2s6Ly8vc3JjL2RvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9kb21zL2lvcy5qcyIsIndlYnBhY2s6Ly8vc3JjL2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2FuZHJvaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2FuZHJvaWQvbWFwUGFyYW1zLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9hbmRyb2lkL29iak1hcC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvYW5kcm9pZC9wYXJzZVBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvY29tbW9uL2NhbGxiYWNrTWFwcGVyLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9pb3MvY29sb3JzLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9pb3MvZmxhdHRlbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvaW9zL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9pb3MvcGFyc2VQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL3dlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvd2ViL3BhcnNlUGFyYW1zLmpzIiwid2VicGFjazovLy9zcmMvaW5pdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpbml0OiByZXF1aXJlKFwiLi9zcmMvaW5pdFwiKSxcblx0ZG9tcyA6IHJlcXVpcmUoXCIuL3NyYy9kb21zXCIpLFxuXHRoYW5kbGVyIDogcmVxdWlyZShcIi4vc3JjL2hhbmRsZXJcIiksXG5cdGhlbHBlcnMgOiByZXF1aXJlKFwiLi9zcmMvaGVscGVyc1wiKSxcblx0YmFzZVZpZXcgOiByZXF1aXJlKFwiLi9zcmMvYmFzZVZpZXdcIiksXG5cdGFuaW1hdGlvbnM6IHJlcXVpcmUoJy4vc3JjL2FuaW1hdGlvbnMnKSxcblx0Y2FsbGJhY2tNYXBwZXI6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcnMvY29tbW9uL2NhbGxiYWNrTWFwcGVyJyksXG5cdGdldE9TOiByZXF1aXJlKCcuL3NyYy9oZWxwZXInKS5nZXRPUyxcblx0cHJlc3RvTWVyZ2U6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcicpLm1lcmdlLFxuXHRwcmVzdG9DbG9uZTogcmVxdWlyZSgnLi9zcmMvaGVscGVyJykuY2xvbmVcbn0iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbmNvbnN0IHJlbmRlciA9IHJlcXVpcmUoJy4vUmVuZGVyJyk7XG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuLi9oZWxwZXInKTtcbmNvbnN0IHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi4vaGVscGVycycpLmlvcy5wYXJzZVBhcmFtcztcblxubGV0IHJvb3RpZDtcblxuZnVuY3Rpb24gY2xlYXJWaWV3RXh0ZXJuYWxzKHZpZXcpIHtcbiAgZGVsZXRlIHdpbmRvdy5fX1ZJRVdTW3ZpZXcucHJvcHMuaWRdO1xuICBkZWxldGUgd2luZG93Ll9fVklFV19ESU1FTlNJT05TW3ZpZXcucHJvcHMuaWRdO1xuICB2aWV3LmNoaWxkcmVuLmZvckVhY2goY2xlYXJWaWV3RXh0ZXJuYWxzKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2VyaWFsaXplYWJsZVZpZXcodmlldywgcmVjdXJzZSkge1xuICB2YXIgb2JqID0gcGFyc2VQYXJhbXModmlldy50eXBlLCBoZWxwZXIuY2xvbmUodmlldy5wcm9wcyxudWxsKSwgXCJzZXRcIik7XG4gIHZhciBuZXdWaWV3ID0ge307XG4gIG5ld1ZpZXcucHJvcHMgPSBvYmouY29uZmlnO1xuICBuZXdWaWV3LnR5cGUgPSBvYmoudHlwZVswXS50b1VwcGVyQ2FzZSgpICsgb2JqLnR5cGUuc3Vic3RyKDEsIG9iai50eXBlLmxlbmd0aCk7XG4gIGlmIChyZWN1cnNlKVxuICAgIG5ld1ZpZXcuY2hpbGRyZW4gPSB2aWV3LmNoaWxkcmVuLm1hcChnZXRTZXJpYWxpemVhYmxlVmlldyk7XG4gIGVsc2VcbiAgICBuZXdWaWV3LmNoaWxkcmVuID0gW107XG4gIHJldHVybiBuZXdWaWV3O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0U2NyZWVuRGltZW5zaW9uczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB3aWR0aDogd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuc2NyZWVuX3dpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5zY3JlZW5faGVpZ2h0XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVjb21wdXRlVmlldzogZnVuY3Rpb24gKHZpZXcpIHtcbiAgICBpZiAodmlldy50eXBlLmluZGV4T2YoXCJzY3JvbGxcIikgIT0gLTEpIHtcbiAgICAgIHJlbmRlci5pbmZsYXRlKHZpZXcpO1xuICAgIH1cbiAgICByZW5kZXIuY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdmlldy5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgcmVuZGVyLmluZmxhdGUoY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgfSxcblxuICByZWNvbXB1dGU6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByb290dmlldyA9IHdpbmRvdy5fX1ZJRVdTW3Jvb3RpZF07XG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIHR5cGU6IFwibGluZWFyTGF5b3V0XCIsXG4gICAgICBwcm9wczoge1xuICAgICAgICBoOiB3aW5kb3cuX19IRUlHSFQsXG4gICAgICAgIHc6IHdpbmRvdy5fX1dJRFRIXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtyb290dmlld11cbiAgICB9O1xuICAgIHJlbmRlci5jb21wdXRlQ2hpbGREaW1lbnMob2JqKTtcbiAgICByZW5kZXIuaW5mbGF0ZShyb290dmlldyk7XG4gIH0sXG5cbiAgcnVuSW5VSTogZnVuY3Rpb24gKGNtZCkge1xuICAgIHJlbmRlci5ydW5JblVJKGNtZCk7XG4gIH0sXG5cbiAgUmVuZGVyOiBmdW5jdGlvbiAodmlldywgY2IpIHtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgdHlwZTogXCJsaW5lYXJMYXlvdXRcIixcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGg6IHdpbmRvdy5fX0hFSUdIVCxcbiAgICAgICAgdzogd2luZG93Ll9fV0lEVEhcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3ZpZXddXG4gICAgfTtcbiAgICByb290aWQgPSB2aWV3LnByb3BzLmlkO1xuICAgIHJlbmRlci5jb21wdXRlQ2hpbGREaW1lbnMob2JqKTtcbiAgICB2aWV3ID0gcmVuZGVyLmluZmxhdGUodmlldyk7XG4gICAgaWYgKHZpZXcpIHtcbiAgICAgIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLklPUy5wb3N0TWVzc2FnZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG1ldGhvZE5hbWU6IFwicmVuZGVyXCIsXG4gICAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgICAgdmlldzogdmlld1xuICAgICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKGNiKVxuICAgICAgd2luZG93LmNhbGxVSUNhbGxiYWNrKGNiKTtcbiAgfSxcblxuICBtb3ZlVmlldzogZnVuY3Rpb24gbW92ZVZpZXcoaWQsIGluZGV4KSB7XG4gICAgaWYgKCF3aW5kb3cuX19WSUVXU1tpZF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIk1vdmVWaWV3OiBJbnZhbGlkIHZpZXcgSUQ6IFwiICsgaWQpKTtcbiAgICB9XG4gICAgY29uc3QgdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXTtcbiAgICBjb25zdCBwYXJlbnQgPSB3aW5kb3cuX19WSUVXU1t2aWV3LnByb3BzLnBhcmVudElkXTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICBjaGlsZHJlbi5zcGxpY2UoY2hpbGRyZW4uaW5kZXhPZih2aWV3KSwgMSk7XG4gICAgY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCB2aWV3KTtcbiAgICB0aGlzLnJlY29tcHV0ZVZpZXcocGFyZW50KTtcbiAgfSxcblxuICBhZGRWaWV3VG9QYXJlbnQ6IGZ1bmN0aW9uIChpZCwgdmlldywgaW5kZXgsIGNiKSB7XG4gICAgaWYgKCF3aW5kb3cuX19WSUVXU1tpZF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIkFkZFZpZXdUb1BhcmVudDogSW52YWxpZCBwYXJlbnQgSUQ6IFwiICtcbiAgICAgICAgaWQpKTtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50ID0gd2luZG93Ll9fVklFV1NbaWRdO1xuICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIHZpZXcpO1xuICAgIHZpZXcucHJvcHMucGFyZW50SWQgPSBpZDtcbiAgICByZW5kZXIuY29tcHV0ZUNoaWxkRGltZW5zKHBhcmVudCk7XG4gICAgY29uc3QgcmVuZGVyZWRWaWV3ID0gcmVuZGVyLmluZmxhdGUodmlldyk7XG4gICAgaWYgKHJlbmRlcmVkVmlldykge1xuICAgICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuSU9TLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbWV0aG9kTmFtZTogXCJhZGRWaWV3VG9QYXJlbnRcIixcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBwYXJlbnRJZDogaWQsXG4gICAgICAgICAgdmlldzogcmVuZGVyZWRWaWV3LFxuICAgICAgICAgIGFmdGVyUmVuZGVyIDogY2IrXCJcIlxuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfVxuICAgIHRoaXMucmVjb21wdXRlVmlldyhwYXJlbnQpO1xuICB9LFxuXG4gIGNyZWF0ZUxpc3REYXRhOiBmdW5jdGlvbiAoaWQsIHZpZXcpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB3aW5kb3cuX19WSUVXU1tpZF07XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJldHVybiBcInt9XCI7XG4gICAgfVxuICAgIGNvbnN0IHZpZXdzID0gd2luZG93Ll9fVklFV1M7XG4gICAgd2luZG93Ll9fVklFV1MgPSB7fTtcbiAgICBwYXJlbnQuY2hpbGRyZW4gPSBbdmlld107XG4gICAgdmlldy5wcm9wcy5wYXJlbnRJZCA9IGlkO1xuICAgIHJlbmRlci5jb21wdXRlQ2hpbGREaW1lbnMocGFyZW50KTtcbiAgICBjb25zdCBpbmZsYXRlZFZpZXcgPSByZW5kZXIuaW5mbGF0ZSh2aWV3KTtcbiAgICB3aW5kb3cuX19WSUVXUyA9IHZpZXdzO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpbmZsYXRlZFZpZXcpO1xuICB9LFxuXG4gIHJlcGxhY2VWaWV3OiBmdW5jdGlvbiAodmlldywgaWQpIHtcbiAgICBpZiAoIXdpbmRvdy5fX1ZJRVdTW2lkXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiQWRkVmlld1RvUGFyZW50OiBJbnZhbGlkIHBhcmVudCBJRDogXCIgKyBpZCkpO1xuICAgIH1cbiAgICB2YXIgb2xkdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXTtcbiAgICB2YXIgcGFyZW50aWQgPSBvbGR2aWV3LnByb3BzLnBhcmVudElkO1xuICAgIG9sZHZpZXcucHJvcHMgPSBoZWxwZXIuY2xvbmUodmlldy5wcm9wcyxudWxsKTtcbiAgICBvbGR2aWV3LnByb3BzLnBhcmVudElkID0gcGFyZW50aWQ7XG4gICAgdmFyIHBhcmVudCA9IHdpbmRvdy5fX1ZJRVdTW3BhcmVudGlkXTtcbiAgICB2YXIgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihvbGR2aWV3KTtcbiAgICB0aGlzLnJlY29tcHV0ZVZpZXcocGFyZW50KTtcbiAgICB2YXIgbmV3VmlldyA9IGdldFNlcmlhbGl6ZWFibGVWaWV3KG9sZHZpZXcpO1xuICAgIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLklPUy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1ldGhvZE5hbWU6IFwicmVwbGFjZVZpZXdcIixcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgdmlldzogbmV3VmlldyxcbiAgICAgICAgICAgIHBhcmVudElkOiBwYXJlbnRpZCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICB9XG4gICAgfSkpO1xuICB9LFxuXG4gIHJlbW92ZVZpZXc6IGZ1bmN0aW9uIChpZCkge1xuICAgIGNvbnN0IHZpZXcgPSB3aW5kb3cuX19WSUVXU1tpZF07XG4gICAgY29uc3QgcGFyZW50ID0gd2luZG93Ll9fVklFV1Nbdmlldy5wcm9wcy5wYXJlbnRJZF07XG4gICAgY29uc3QgaW5kZXggPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih2aWV3KSA6IDA7XG4gICAgaWYocGFyZW50KXtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBjbGVhclZpZXdFeHRlcm5hbHModmlldyk7XG4gICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuSU9TLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1ldGhvZE5hbWU6IFwicmVtb3ZlVmlld1wiLFxuICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIGluZGV4LFxuICAgICAgfVxuICAgIH0pKTtcbiAgICBpZihwYXJlbnQpe1xuICAgICAgdGhpcy5yZWNvbXB1dGVWaWV3KHBhcmVudCk7XG4gICAgfVxuICB9LFxuXG4gIHN0YXJ0QW5pbTogZnVuY3Rpb24oaWQsIGNiTmFtZSkge1xuICAgIC8vIFRPRE8gaW1wbGVtZW50IG5hdGl2ZSBzaWRlIHdpdGggY2FsbGJhY2tcbiAgICAvLyBUaHVzLCBjdXJyZW50bHkgbm90IHByb3ZpZGluZyBvbiBjb21wbGV0ZSBob29rXG4gICAgLy8gb25FbmQgcHJvcGVydHkgY2FuIHN0aWxsIGJlIHVzZWQgZm9yIGNoYWluaW5nIGFuaW1hdGlvbnNcbiAgICB3aW5kb3cud2Via2l0Lm1lc3NhZ2VIYW5kbGVycy5JT1MucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbWV0aG9kTmFtZTogXCJzdGFydEFuaW1hdGlvblwiLFxuICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICBhbmltSWQ6IGlkXG4gICAgICB9XG4gICAgfSkpO1xuICB9LFxuXG4gIGNhbmNlbEFuaW06IGZ1bmN0aW9uKCkge1xuICAgIC8vIFRPRE8gaW1wbGVtZW50IG5hdGl2ZSBzaWRlXG4gIH0sXG5cbiAgdXBkYXRlQW5pbTogZnVuY3Rpb24oKSB7XG4gICAgLy8gVE9ETyBpbXBsZW1lbnQgbmF0aXZlIHNpZGVcbiAgfVxufTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuY29uc3QgcGFyc2VQYXJhbXMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lvcy9wYXJzZVBhcmFtcycpO1xuY29uc3Qge2NvbXB1dGVDaGlsZERpbWVuc30gPSByZXF1aXJlKCcuLi9jb21wdXRlSU9TJyk7XG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuLi9oZWxwZXInKTtcblxuXG5mdW5jdGlvbiBpbmZsYXRlKHZpZXcpIHtcbiAgY29uc3QgaWQgPSB2aWV3LnByb3BzLmlkO1xuXG4gIGlmICghd2luZG93Ll9fVklFV1MuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpO1xuICAgIGhlbHBlci5jYWNoZURpbWVuKHZpZXcpO1xuICAgIHdpbmRvdy5fX1ZJRVdTW2lkXSA9IHZpZXc7XG4gICAgY29uc3QgbmV3VmlldyA9IGhlbHBlci5jbG9uZSh2aWV3LG51bGwpO1xuICAgIHZpZXcuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcbiAgICAgIG5ld1ZpZXcuY2hpbGRyZW5baV0gPSBpbmZsYXRlKGNoaWxkKTtcbiAgICB9KTtcbiAgICBjb25zdCBvYmogPSBwYXJzZVBhcmFtcyhuZXdWaWV3LnR5cGUsIG5ld1ZpZXcucHJvcHMsIFwic2V0XCIpO1xuICAgIG5ld1ZpZXcucHJvcHMgPSBvYmouY29uZmlnO1xuICAgIG5ld1ZpZXcudHlwZSA9IG9iai50eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyBvYmoudHlwZS5zdWJzdHIoMSwgb2JqLnR5cGUubGVuZ3RoKTtcbiAgICByZXR1cm4gbmV3VmlldztcbiAgfVxuXG4gIGNvbnN0IG1vdmUgPSBoZWxwZXIuc2hvdWxkTW92ZSh2aWV3KTtcbiAgaGVscGVyLmNhY2hlRGltZW4odmlldyk7XG4gIGxldCByYW5SdW5JblVJID0gZmFsc2U7XG4gIGlmIChtb3ZlKSB7XG4gICAgbW92ZS5pZCA9IGlkO1xuICAgIHJ1bkluVUlIZWxwZXIodmlldy50eXBlLCB2aWV3LnByb3BzKTtcbiAgICByYW5SdW5JblVJID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbXB1dGVDaGlsZERpbWVucyh2aWV3KVxuICB2aWV3LmNoaWxkcmVuLmZvckVhY2goaW5mbGF0ZSk7XG4gIHJldHVybiByYW5SdW5JblVJO1xufVxuXG5mdW5jdGlvbiBydW5JblVJKGNtZCwgZnJvbUluZmxhdGUpIHtcbiAgaWYgKCEoY21kIGluc3RhbmNlb2YgQXJyYXkpKSBjbWQgPSBbY21kXTtcblxuICBpZiAoY21kLmxlbmd0aD09MSAmJiBjbWRbMF09PVwicmVtb3ZlQWxsVUlcIil7XG4gICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuSU9TLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1ldGhvZE5hbWU6IFwicmVtb3ZlQWxsVUlcIixcbiAgICAgIHBhcmFtZXRlcnM6IHtcImFuaW1hdGVkXCI6XCJmYWxzZVwifVxuICAgIH0pKTtcbiAgfWVsc2V7XG4gICAgY21kLmZvckVhY2goZnVuY3Rpb24gKGVhY2gpIHtcbiAgICAgIHZhciBpZCA9IGVhY2guaWQ7XG4gICAgICBlYWNoLnVzZUNvbnN0cmFpdHMgPSB0cnVlO1xuICAgICAgdmFyIHZpZXcgPSB3aW5kb3cuX19WSUVXU1tpZF07XG4gICAgICBpZiAodmlldykge1xuICAgICAgICB2YXIgcGFyZW50ID0gd2luZG93Ll9fVklFV1Nbdmlldy5wcm9wcy5wYXJlbnRJZF07XG4gICAgICAgIHZpZXcucHJvcHMgPSBoZWxwZXIubWVyZ2Uodmlldy5wcm9wcywgZWFjaCk7XG4gICAgICAgIGlmKHZpZXcucHJvcHMgJiYgdmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShcImxpc3RJdGVtXCIpICYmIGVhY2guaGFzT3duUHJvcGVydHkoXCJsaXN0RGF0YVwiKSAmJiAhZWFjaC5oYXNPd25Qcm9wZXJ0eShcImxpc3RJdGVtXCIpKXtcbiAgICAgICAgICBlYWNoLmxpc3RJdGVtID0gdmlldy5wcm9wcy5saXN0SXRlbVxuICAgICAgICB9XG4gICAgICAgIC8vQWRkaW5nIGFzIHN0b3AgZ2FnIHNvbHV0aW9uIGZvciBlZGl0VGV4dCBpbiBpb3Mgd2hlcmUgdGV4dCBcbiAgICAgICAgLy93YXMgZ2V0dGluZyBzZXQgZW1wdHkgaW4gY2FzZSBvdGhlciBwcm9wZXJ0aWVzIHdlcmUgbW9kaWZpZWQuXG4gICAgICAgIGlmICghZWFjaC5oYXNPd25Qcm9wZXJ0eSgndGV4dCcpICYmIHZpZXcucHJvcHMpIHtcbiAgICAgICAgICBkZWxldGUgdmlldy5wcm9wcy50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlYWNoLmhhc093blByb3BlcnR5KCd0ZXh0RnJvbUh0bWwnKSAmJiB2aWV3LnByb3BzKSB7XG4gICAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbG9yJykpIHtcbiAgICAgICAgICAgIGVhY2guY29sb3IgPSB2aWV3LnByb3BzLmNvbG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnZm9udFN0eWxlJykpIHtcbiAgICAgICAgICAgIGVhY2guZm9udFN0eWxlID0gdmlldy5wcm9wcy5mb250U3R5bGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCd0ZXh0U2l6ZScpKSB7XG4gICAgICAgICAgICBlYWNoLnRleHRTaXplID0gdmlldy5wcm9wcy50ZXh0U2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudCAmJiAhZnJvbUluZmxhdGUpIHtcbiAgICAgICAgICBpZiAocGFyZW50LnR5cGUuaW5kZXhPZihcInNjcm9sbFwiKSAhPSAtMSkge1xuICAgICAgICAgICAgaW5mbGF0ZShwYXJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb21wdXRlQ2hpbGREaW1lbnMocGFyZW50KTtcbiAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgaWYgKCFpbmZsYXRlKHZpZXcpKSB7XG4gICAgICAgICAgICBydW5JblVJSGVscGVyKHZpZXcudHlwZSwgZWFjaCwgdHJ1ZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2aWV3ICE9IGNoaWxkcmVuW2ldKSB7XG4gICAgICAgICAgICAgIGluZmxhdGUoY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBydW5JblVJSGVscGVyKHZpZXcudHlwZSwgZWFjaCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gcnVuSW5VSUhlbHBlcih0eXBlLCBvYmosIHJlbW92ZUZyYW1lKSB7XG4gIHZhciBjbWQgPSBwYXJzZVBhcmFtcyh0eXBlLCBvYmosIFwiZ2V0XCIpLmNvbmZpZy5tZXRob2RzO1xuICBpZihyZW1vdmVGcmFtZSl7XG4gICAgICBjbWQgPSBjbWQuZmlsdGVyKGZ1bmN0aW9uKGl0bSl7XG4gICAgICAgIHJldHVybiBpdG0ubWV0aG9kTmFtZSAhPSBcInNldEZyYW1lOlwiXG4gICAgfSlcbiAgfVxuICB3aW5kb3cud2Via2l0Lm1lc3NhZ2VIYW5kbGVycy5JT1MucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgIG1ldGhvZE5hbWU6IFwicnVuSW5VSVwiLFxuICAgIHBhcmFtZXRlcnM6IGNtZFxuICB9KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbmZsYXRlLFxuICBjb21wdXRlQ2hpbGREaW1lbnMsXG4gIHJ1bkluVUlcbn07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbnZhciBwcmVzdG9Eb20gPSByZXF1aXJlKFwiLi9kb21zXCIpO1xudmFyIGhlbHBlcnMgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpXG52YXIgd2ViUGFyc2VQYXJhbXM7XG52YXIgaU9TUGFyc2VQYXJhbXM7XG52YXIgcGFyc2VQYXJhbXM7XG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xuXG5pZiAod2luZG93Ll9fT1MgPT09IFwiV0VCXCIpIHtcbiAgd2ViUGFyc2VQYXJhbXMgPSBoZWxwZXJzLndlYi5wYXJzZVBhcmFtcztcbn0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT09IFwiSU9TXCIpIHtcbiAgaU9TUGFyc2VQYXJhbXMgPSBoZWxwZXJzLmlvcy5wYXJzZVBhcmFtcztcbn0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT09IFwiQU5EUk9JRFwiKSB7XG4gIHBhcnNlUGFyYW1zID0gaGVscGVycy5hbmRyb2lkLnBhcnNlUGFyYW1zO1xufVxuXG5mdW5jdGlvbiBkb21BbGwoZWxlbSkge1xuICBpZiAoIWVsZW0uX19yZWYpIHtcbiAgICBlbGVtLl9fcmVmID0gY3JlYXRlUHJlc3RvRWxlbWVudCgpO1xuICB9XG5cbiAgaWYgKGVsZW0ucHJvcHMuaWQpIHtcbiAgICBlbGVtLl9fcmVmLl9faWQgPSBwYXJzZUludChlbGVtLnByb3BzLmlkLCAxMCkgfHwgZWxlbS5fX3JlZi5fX2lkO1xuICB9XG5cbiAgdmFyIHR5cGUgPSBoZWxwZXIuY2xvbmUoZWxlbS50eXBlLG51bGwpO1xuICB2YXIgcHJvcHMgPSBoZWxwZXIuY2xvbmUoZWxlbS5wcm9wcyxudWxsKTtcblxuICBpZiAocHJvcHMuZm9jdXMgPT0gZmFsc2UgJiYgIHdpbmRvdy5fX09TID09PSBcIkFORFJPSURcIikge1xuICAgIGRlbGV0ZSBwcm9wcy5mb2N1cztcbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNoaWxkcmVuLnB1c2goZG9tQWxsKGVsZW0uY2hpbGRyZW5baV0pKTtcbiAgfVxuXG5cbiAgaWYgKF9fT1MgPT0gXCJXRUJcIiAmJiBwcm9wcy5vblJlc2l6ZSkge1xuICAgIHdpbmRvdy5fX3Jlc2l6ZUV2ZW50ID0gcHJvcHMub25SZXNpemU7XG4gIH1cblxuICBwcm9wcy5pZCA9IGVsZW0uX19yZWYuX19pZDtcbiAgaWYoZWxlbS5wYXJlbnRUeXBlICYmIHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKVxuICAgIHJldHVybiBwcmVzdG9Eb20oe2VsZW1UeXBlOiB0eXBlLCBwYXJlbnRUeXBlOiBlbGVtLnBhcmVudFR5cGV9LCBwcm9wcywgY2hpbGRyZW4pO1xuXG4gIHJldHVybiBwcmVzdG9Eb20odHlwZSwgcHJvcHMsIGNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gZ2V0RG9tVG9SZW5kZXIoZWxlbSkge1xuICB2YXIgcmVzID0gZG9tQWxsKGVsZW0pO1xuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cblxuLy8gTm90IGV4cG9ydGVkXG5mdW5jdGlvbiBjbWRGb3JBbmRyb2lkKGNvbmZpZywgc2V0LCB0eXBlKSB7XG4gIGlmIChzZXQpIHtcbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICB2YXIgb2JqID0gcGFyc2VQYXJhbXModHlwZSwgY29uZmlnLCBcInNldFwiKTtcbiAgICAgIHZhciBjbWQgPSBvYmoucnVuSW5VSS5yZXBsYWNlKFwidGhpcy0+c2V0SWRcIiwgXCJzZXRfdmlldz1jdHgtPmZpbmRWaWV3QnlJZFwiKS5yZXBsYWNlKC90aGlzLT4vZywgXCJnZXRfdmlldy0+XCIpO1xuICAgICAgY21kID0gY21kLnJlcGxhY2UoL1BBUkFNX0NUUl9IT0xERVJbXjtdKi9nLCBcImdldF92aWV3LT5nZXRMYXlvdXRQYXJhbXM7XCIpO1xuICAgICAgb2JqLnJ1bkluVUkgPSBjbWQ7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiSUQgbnVsbCwgdGhpcyBpcyBub3Qgc3VwcG9zZWQgdG8gaGFwcGVuLiBEZWJ1ZyB0aGlzIG9yL2FuZCByYWlzZSBhIGlzc3VlIGluIGJpdGJ1Y2tldC5cIik7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHZhciBfaWQgPSBjb25maWcuaWQ7XG4gIHZhciBjbWQgPSBcInNldF92aWV3PWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBfaWQgKyBcIjtcIjtcbiAgLy8gdmFyIHJ1bkluVUk7XG4gIGRlbGV0ZSBjb25maWcuaWQ7XG4gIGNvbmZpZy5yb290ID0gXCJ0cnVlXCI7XG4gIHZhciBvYmogPSBwYXJzZVBhcmFtcyh0eXBlLCBjb25maWcsIFwiZ2V0XCIpO1xuICBvYmoucnVuSW5VSSA9IGNtZCArIG9iai5ydW5JblVJICsgJzsnO1xuICBvYmouaWQgPSBfaWQ7XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGdldFJ1bkluVUlDbWQocHJvcCkge1xuICB2YXIgY21kO1xuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICBjbWQgPSBjbWRGb3JBbmRyb2lkKHByb3AsIHRydWUsIFwibGluZWFyTGF5b3V0XCIpLnJ1bkluVUk7XG4gIH0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJJT1NcIil7XG4gICAgY21kID0gcHJvcDtcbiAgfSBlbHNlIHtcbiAgICBjbWQgPSB3ZWJQYXJzZVBhcmFtcyhcImxpbmVhckxheW91dFwiLCBwcm9wLCBcInNldFwiKTtcbiAgfVxuICByZXR1cm4gY21kO1xufVxuXG5cblxuLy8gTm90IGV4cG9ydGVkXG5mdW5jdGlvbiBhcHBseVByb3AoZWxlbWVudCwgYXR0cmlidXRlLCBzZXQpIHtcbiAgdmFyIHByb3AgPSB7XG4gICAgaWQ6IGVsZW1lbnQuX19yZWYuX19pZFxuICB9XG4gIHByb3BbYXR0cmlidXRlLnZhbHVlMF0gPSBhdHRyaWJ1dGUudmFsdWUxO1xuXG4gIGlmIChhdHRyaWJ1dGUudmFsdWUwID09ICdmb2N1cycgJiYgYXR0cmlidXRlLnZhbHVlMSA9PSBmYWxzZSAmJiAgd2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICB2YXIgY21kID0gY21kRm9yQW5kcm9pZChwcm9wLCBzZXQsIGVsZW1lbnQudHlwZSk7XG4gICAgaWYgKEFuZHJvaWQudXBkYXRlUHJvcGVydGllcykge1xuICAgICAgQW5kcm9pZC51cGRhdGVQcm9wZXJ0aWVzKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBBbmRyb2lkLnJ1bkluVUkoY21kLnJ1bkluVUksIG51bGwpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIklPU1wiKXtcbiAgICBBbmRyb2lkLnJ1bkluVUkocHJvcCk7XG4gIH0gZWxzZSB7XG4gICAgQW5kcm9pZC5ydW5JblVJKHdlYlBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIHByb3AsIFwic2V0XCIpKTtcbiAgfVxuICAvLyBBbmRyb2lkLnJ1bkluVUkocGFyc2VQYXJhbXMoXCJsaW5lYXJMYXlvdXRcIiwgcHJvcCwgXCJzZXRcIikpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVmlldyhlbGVtZW50LCBhdHRyaWJ1dGUsIHJlbW92ZVByb3ApIHtcbiAgLy8gY29uc29sZS5sb2coXCJSRVBMQUNFIFZJRVdcIiwgZWxlbWVudC5fX3JlZi5fX2lkLCBlbGVtZW50LnByb3BzKTtcbiAgdmFyIHByb3BzID0gaGVscGVyLmNsb25lKGVsZW1lbnQucHJvcHMsbnVsbCk7XG4gIHByb3BzLmlkID0gZWxlbWVudC5fX3JlZi5fX2lkO1xuICB2YXIgcmVwO1xuICB2YXIgdmlld0dyb3VwcyA9IFtcImxpbmVhckxheW91dFwiLCBcInJlbGF0aXZlTGF5b3V0XCIsIFwic2Nyb2xsVmlld1wiLCBcImZyYW1lTGF5b3V0XCIsIFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIl07XG5cbiAgaWYgKHZpZXdHcm91cHMuaW5kZXhPZihlbGVtZW50LnR5cGUpICE9IC0xKXtcbiAgICBwcm9wcy5yb290ID0gdHJ1ZTtcbiAgICByZXAgPSBwcmVzdG9Eb20oZWxlbWVudC50eXBlLCBwcm9wcywgW10pO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgcmVwID0gcHJlc3RvRG9tKHtlbGVtVHlwZTogZWxlbWVudC50eXBlLCBwYXJlbnRUeXBlOiBlbGVtZW50LnBhcmVudE5vZGUudHlwZX0sIHByb3BzLCBbXSk7XG4gIH0gZWxzZSB7XG4gICAgcmVwID0gcHJlc3RvRG9tKGVsZW1lbnQudHlwZSwgcHJvcHMsIFtdKTtcbiAgfVxuICBpZih3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIil7XG4gICAgQW5kcm9pZC5yZXBsYWNlVmlldyhKU09OLnN0cmluZ2lmeShyZXApLCBlbGVtZW50Ll9fcmVmLl9faWQpO1xuICB9IGVsc2Uge1xuICAgIEFuZHJvaWQucmVwbGFjZVZpZXcocmVwLCBlbGVtZW50Ll9fcmVmLl9faWQpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlUHJlc3RvRWxlbWVudCgpIHtcbiAgICBpZih0eXBlb2Yod2luZG93Ll9fdWlfaWRfc2VxdWVuY2UpICE9IFwidW5kZWZpbmVkXCIgJiYgd2luZG93Ll9fdWlfaWRfc2VxdWVuY2UgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4geyBfX2lkIDogKyt3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5fX3VpX2lkX3NlcXVlbmNlID0gdHlwZW9mIEFuZHJvaWQuZ2V0TmV3SUQgPT0gXCJmdW5jdGlvblwiID8gcGFyc2VJbnQoQW5kcm9pZC5nZXROZXdJRCgpKSAqIDEwMDAwMDAgOiB3aW5kb3cuX19QUkVTVE9fSUQgO1xuICAgICAgICByZXR1cm4geyBfX2lkIDogKyt3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSB9O1xuICAgIH1cbn07XG5cblxuZnVuY3Rpb24gbW92ZUNoaWxkKGNoaWxkLCBwYXJlbnQsIGluZGV4KSB7XG4gIEFuZHJvaWQubW92ZVZpZXcoY2hpbGQuX19yZWYuX19pZCwgaW5kZXgpO1xufVxuXG5cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQoY2hpbGQsIHBhcmVudCwgaW5kZXgpIHtcbiAgLy8gY29uc29sZS5sb2coXCJSZW1vdmUgY2hpbGQgOlwiLCBjaGlsZC50eXBlKTtcbiAgQW5kcm9pZC5yZW1vdmVWaWV3KGNoaWxkLl9fcmVmLl9faWQgKyBcIlwiKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hpbGQoY2hpbGQsIHBhcmVudCwgaW5kZXgpIHtcbiAgaWYoY2hpbGQudHlwZSA9PSBudWxsKSB7XG4gICAgY29uc29sZS53YXJuKFwiY2hpbGQgbnVsbFwiKTtcbiAgfVxuICAvLyBjb25zb2xlLmxvZyhcIkFkZCBjaGlsZCA6XCIsIGNoaWxkLl9fcmVmLl9faWQsIGNoaWxkLnR5cGUpO1xuICB2YXIgdmlld0dyb3VwcyA9IFtcImxpbmVhckxheW91dFwiLCBcInJlbGF0aXZlTGF5b3V0XCIsIFwic2Nyb2xsVmlld1wiLCBcImZyYW1lTGF5b3V0XCIsIFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIl07XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIGlmICh2aWV3R3JvdXBzLmluZGV4T2YoY2hpbGQudHlwZSkgIT0gLTEpe1xuICAgICAgY2hpbGQucHJvcHMucm9vdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkLnBhcmVudFR5cGUgPSBwYXJlbnQudHlwZTtcbiAgICB9XG4gICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQocGFyZW50Ll9fcmVmLl9faWQgKyBcIlwiLCBKU09OLnN0cmluZ2lmeShkb21BbGwoY2hpbGQpKSwgaW5kZXgsIG51bGwsIG51bGwpO1xuICB9XG4gIGVsc2VcbiAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChwYXJlbnQuX19yZWYuX19pZCwgZG9tQWxsKGNoaWxkKSwgaW5kZXgsIG51bGwsIG51bGwpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiYWRkIGF0dHIgOlwiLCBhdHRyaWJ1dGUpO1xuICBlbGVtZW50LnByb3BzW2F0dHJpYnV0ZS52YWx1ZTBdID0gYXR0cmlidXRlLnZhbHVlMTtcbiAgYXBwbHlQcm9wKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGUpIHtcbiAgLy8gY29uc29sZS5sb2coXCJyZW1vdmUgYXR0ciA6XCIsIGF0dHJpYnV0ZSk7XG4gIHJlcGxhY2VWaWV3KGVsZW1lbnQsIGF0dHJpYnV0ZSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGUpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGUgYXR0ciA6XCIsIGF0dHJpYnV0ZSk7XG4gIGVsZW1lbnQucHJvcHNbYXR0cmlidXRlLnZhbHVlMF0gPSBhdHRyaWJ1dGUudmFsdWUxO1xuXG4gIGFwcGx5UHJvcChlbGVtZW50LCBhdHRyaWJ1dGUsIGZhbHNlKTtcbn1cblxuXG5mdW5jdGlvbiBpbnNlcnREb20ocm9vdCwgZG9tLCBjYikge1xuICByb290LmNoaWxkcmVuLnB1c2goZG9tKTtcbiAgZG9tLnBhcmVudE5vZGUgPSByb290O1xuICBkb20uX19yZWYgPSBjcmVhdGVQcmVzdG9FbGVtZW50KCk7XG4gIHdpbmRvdy5OID0gcm9vdDtcblxuICB2YXIgcm9vdElkID0gd2luZG93Ll9fUk9PVFNDUkVFTi5pZFNldC5yb290O1xuXG4gIGRvbS5wcm9wcy5yb290ID0gdHJ1ZTtcblxuICB2YXIgbGVuZ3RoID0gd2luZG93Ll9fUk9PVFNDUkVFTi5pZFNldC5jaGlsZC5wdXNoKGRvbS5fX3JlZi5fX2lkKTtcblxuICB2YXIgY2FsbGJhY2sgPSB3aW5kb3cuY2FsbGJhY2tNYXBwZXIoZXhlY3V0ZVBvc3RQcm9jZXNzKGNiKSk7XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHJvb3RJZCArIFwiXCIsIEpTT04uc3RyaW5naWZ5KGRvbUFsbChkb20pKSwgbGVuZ3RoIC0gMSwgY2FsbGJhY2ssIG51bGwpO1xuICB9XG4gIGVsc2Uge1xuICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHJvb3RJZCwgZG9tQWxsKGRvbSksIGxlbmd0aCAtIDEsIGNhbGxiYWNrLCBudWxsKTtcbiAgfVxuXG4gIHJldHVybiBkb20uX19yZWYuX19pZDtcblxufVxuXG5cbmZ1bmN0aW9uIGV4ZWN1dGVQb3N0UHJvY2VzcyhjYikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2IoKTtcblxuICAgIGlmKHdpbmRvdy5fX2R1aV9zY3JlZW4gJiYgd2luZG93W1wiYWZ0ZXJSZW5kZXJcIl0pIHtcbiAgICAgIGZvciAodmFyIHRhZyBpbiB3aW5kb3dbXCJhZnRlclJlbmRlclwiXVt3aW5kb3cuX19kdWlfc2NyZWVuXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHdpbmRvd1tcImFmdGVyUmVuZGVyXCJdW3dpbmRvdy5fX2R1aV9zY3JlZW5dW3RhZ10oKSgpO1xuICAgICAgICAgIHdpbmRvd1tcImFmdGVyUmVuZGVyXCJdW3dpbmRvdy5fX2R1aV9zY3JlZW5dW1wiZXhlY3V0ZWRcIl0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChKQnJpZGdlICYmIEpCcmlkZ2Uuc2V0U2hhZG93KSB7XG4gICAgICBmb3IgKHZhciB0YWcgaW4gd2luZG93LnNoYWRvd09iamVjdCkge1xuICAgICAgICBKQnJpZGdlLnNldFNoYWRvdyh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJsZXZlbFwiXSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInZpZXdJZFwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJiYWNrZ3JvdW5kQ29sb3JcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiYmx1clZhbHVlXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInNoYWRvd0NvbG9yXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImR4XCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImR5XCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInNwcmVhZFwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJmYWN0b3JcIl0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZG9tQWxsOiBkb21BbGwsXG4gIGdldERvbVRvUmVuZGVyOiBnZXREb21Ub1JlbmRlcixcbiAgZ2V0UnVuSW5VSUNtZDogZ2V0UnVuSW5VSUNtZCxcbiAgcmVwbGFjZVZpZXc6IHJlcGxhY2VWaWV3LFxuICBjcmVhdGVQcmVzdG9FbGVtZW50OiBjcmVhdGVQcmVzdG9FbGVtZW50LFxuICBtb3ZlQ2hpbGQ6IG1vdmVDaGlsZCxcbiAgcmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuICBhZGRDaGlsZDogYWRkQ2hpbGQsXG4gIGFkZEF0dHJpYnV0ZTogYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGU6IHJlbW92ZUF0dHJpYnV0ZSxcbiAgdXBkYXRlUHJvcGVydHk6IHVwZGF0ZUF0dHJpYnV0ZSxcbiAgYWRkUHJvcGVydHk6IGFkZEF0dHJpYnV0ZSxcbiAgaW5zZXJ0RG9tOiBpbnNlcnREb21cbn07XG5cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuY29uc3QgQmFzZVZpZXcgPSByZXF1aXJlKCcuL2Jhc2VWaWV3Jyk7XG5jb25zdCBWSUVXID0gbmV3IEJhc2VWaWV3KG51bGwsIG51bGwsIHt9KTtcblxuLy8gT2JqZWN0IG9mIHR5cGVzIG9mIGFuaW1hdGlvbnMgYXZhaWxhYmxlIG9uIHNjcmVlbiBjaGFuZ2VcbmNvbnN0IEFuaW1hdGlvblR5cGVzID0ge1xuICBTTElERToge1xuICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICBoYW5kbGVyOiBzbGlkZUhhbmRsZXJcbiAgfSxcbiAgU0xJREVfVkVSVElDQUw6IHtcbiAgICBuYW1lOiBcInNsaWRlX2Rvd25cIixcbiAgICBoYW5kbGVyOiBzbGlkZURvd25IYW5kbGVyXG4gIH0sXG4gIFNJTVBMRToge1xuICAgIG5hbWU6IFwic2ltcGxlXCIsXG4gICAgaGFuZGxlcjogc2ltcGxlSGFuZGxlclxuICB9XG59XG5cbmNvbnN0IERFRkFVTFRfQU5JTUFUSU9OID0gQW5pbWF0aW9uVHlwZXMuU0xJREU7XG5cbmZ1bmN0aW9uIHNpbXBsZUhhbmRsZXIoZnJvbUlkLCB0b0lkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGNtZCA9IFZJRVcuY21kKHtcbiAgICBpZDogdG9JZCxcbiAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleFxuICB9KTtcbiAgcmV0dXJuIGNtZDtcbn1cblxuZnVuY3Rpb24gc2xpZGVEb3duSGFuZGxlcihmcm9tSWQsIHRvSWQsIGRpcmVjdGlvbikge1xuICBsZXQgY29udGFpbmVyID0gVklFVy5jbWRDb250YWluZXIoKTtcbiAgbGV0IGNtZDtcblxuICBpZiAoZGlyZWN0aW9uID09IDEpIHtcbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogdG9JZCxcbiAgICAgIHRyYW5zbGF0aW9uWTogd2luZG93Ll9fSEVJR0hULFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgICBhX3RyYW5zbGF0aW9uWTogJzAnLFxuICAgICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXgsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IGZyb21JZCxcbiAgICAgIGFfdHJhbnNsYXRpb25ZOiAtMC4yICogd2luZG93Ll9fSEVJR0hULFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCdcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgd2luZG93LlpJbmRleCsrO1xuICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgaWQ6IGZyb21JZCxcbiAgICB0cmFuc2xhdGlvblk6IDAsXG4gICAgYV90cmFuc2xhdGlvblk6IHdpbmRvdy5fX0hFSUdIVCxcbiAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleFxuICB9KTtcbiAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gIGNtZCA9IFZJRVcuY21kKHtcbiAgICBpZDogdG9JZCxcbiAgICB0cmFuc2xhdGlvblo6IHdpbmRvdy5aSW5kZXgtMSxcbiAgICBhX3RyYW5zbGF0aW9uWTogJzAnLFxuICAgIHRyYW5zbGF0aW9uWTogLTAuMiAqIHdpbmRvdy5fX0hFSUdIVCxcbiAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgfSk7XG4gIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBzbGlkZUhhbmRsZXIoZnJvbUlkLCB0b0lkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGNvbnRhaW5lciA9IFZJRVcuY21kQ29udGFpbmVyKCk7XG4gIGxldCBjbWQ7XG4gIGlmIChkaXJlY3Rpb24gPT0gMSkge1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiB0b0lkLFxuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgdHJhbnNsYXRpb25YOiB3aW5kb3cuX19XSURUSCxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4LFxuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogZnJvbUlkLFxuICAgICAgdHJhbnNsYXRpb25YOiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25YOiAoLS4yICogd2luZG93Ll9fV0lEVEgpICsgJycsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA9PSAtMSkge1xuICAgIHdpbmRvdy5aSW5kZXgrKztcbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogZnJvbUlkLFxuICAgICAgdHJhbnNsYXRpb25YOiAnMCcsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25YOiB3aW5kb3cuX19XSURUSCxcbiAgICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4LFxuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiB0b0lkLFxuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgdHJhbnNsYXRpb25YOiAoLS4yICogd2luZG93Ll9fV0lEVEgpICsgJycsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25YOiAnMCcsXG4gICAgICB0cmFuc2xhdGlvblo6IHdpbmRvdy5aSW5kZXggLSAxLFxuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbi8qXG4gIEdlbmVyaWMgSGFuZGxlciBmb3IgQW5pbWF0aW9uXG4gIEFyZ3VtZW50czpcbiAgICBmcm9tVmlld0lkOiBOdW1iZXIgLSBJZCBvZiB0aGUgdmlldyBjdXJyZW50bHkgdmlzaWJsZSBvbiB0aGUgc2NyZWVuXG4gICAgdG9WaWV3SUQ6IE51bWJlciAtIElkIG9mIHRoZSB2aWV3IHdoaWNoIGhhcyB0byBiZSBicm91Z2h0IG9uIHRoZSBzY3JlZW5cbiAgICBJRDogTnVtYmVyIC0gSWQgb2YgdGhlIHZpZXcgdG8gYmUgYW5pbWF0ZWRcbiAgICBhbmltYXRvcjogT2JqIC0ge25hbWU6c3RyaW5nLCBoYW5kbGVyOmZ1bmN0aW9ufVxuICAgIGRpcmVjdGlvbjogTnVtYmVyIC0gUmVwcmVzZW50cyBvZiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBzY3JlZW5cbiAgICAgIC0xIDogR28gYmFjayB0byB0aGUgYWxyZWFkeSByZW5kZXJlZCBzY3JlZW4gKHJpZ2h0IHRvIGxlZnQpXG4gICAgICAgMSA6IEdvIHRvIHRoZSBuZXcgc2NyZWVuIChsZWZ0IHRvIHJpZ2h0KVxuKi9cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbihmcm9tVmlld0lELCB0b1ZpZXdJZCwgZGlyZWN0aW9uLCBhbmltYXRvcikge1xuICBpZiAoIWFuaW1hdG9yKVxuICAgIGFuaW1hdG9yID0gREVGQVVMVF9BTklNQVRJT047XG5cbiAgaWYgKHR5cGVvZiBhbmltYXRvciA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYW5pbWF0b3IuaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKVxuICAgIHJldHVybiBhbmltYXRvci5oYW5kbGVyKGZyb21WaWV3SUQsIHRvVmlld0lkLCBkaXJlY3Rpb24pO1xuICBlbHNlXG4gICAgY29uc29sZS5sb2cobmV3IEVycm9yKFwiQW5pbWF0aW9uIGhhbmRsZXIgaXMgbm90IGEgZnVuY3Rpb24sIHR5cGU6IFwiICtcbiAgICAgIGFuaW1hdG9yKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzLnR5cGVzID0gQW5pbWF0aW9uVHlwZXM7XG5tb2R1bGUuZXhwb3J0cy5nZXRBbmltYXRpb24gPSBnZXRBbmltYXRpb247IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5jb25zdCBtZXJnZSA9ICByZXF1aXJlKFwiLi9oZWxwZXJcIikubWVyZ2U7XG5cblN0cmluZy5wcm90b3R5cGUuYWRkQ21kID0gZnVuY3Rpb24oZGF0YSkge1xuICByZXR1cm4gdGhpcy5jb25jYXQoZGF0YSk7XG59O1xuXG5BcnJheS5wcm90b3R5cGUuYWRkQ21kID0gZnVuY3Rpb24oZGF0YSkge1xuICB0aGlzLnB1c2goZGF0YSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxubGV0IHBhcnNlUGFyYW1zO1xuaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKVxuICBwYXJzZVBhcmFtcyA9IHJlcXVpcmUoJy4vaGVscGVycy9hbmRyb2lkL3BhcnNlUGFyYW1zJyk7XG5lbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIldFQlwiKVxuICBwYXJzZVBhcmFtcyA9IHJlcXVpcmUoJy4vaGVscGVycy93ZWIvcGFyc2VQYXJhbXMnKTtcbmVsc2VcbiAgcGFyc2VQYXJhbXMgPSByZXF1aXJlKCcuL2hlbHBlcnMvaW9zL3BhcnNlUGFyYW1zJyk7XG5cbmNsYXNzIEJhc2VWaWV3IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IHt9O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbiB8fCBbXTtcblxuICAgIHdpbmRvdy5fX1NFVEZOID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgQW5kcm9pZC5ydW5JblVJKFxuICAgICAgICB0aGlzLnNldChjb25maWcpLFxuICAgICAgICBudWxsXG4gICAgICApXG4gICAgfS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLmlkU2V0ID0ge307XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pZCkge1xuICAgICAgdGhpcy5pZFNldFtcImlkXCJdID0gdGhpcy5wcm9wcy5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5pZCA9IHRoaXMuaWQoXCJpZFwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5fcmVmKSB7XG4gICAgICB0aGlzLnByb3BzLl9yZWYodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZUNoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLnJlbmRlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFJlY3Vyc2Uob2JqLCBzZWxlY3Rvcikge1xuICAgIHZhciBjaGlsZHJlbiA9IG9iai5jaGlsZHJlbjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjaGlsZHJlbltpXS5kaXNwbGF5TmFtZSAmJiBjaGlsZHJlbltpXS5kaXNwbGF5TmFtZSA9PSBzZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmZvdW5kQ2hpbGRyZW4ucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZHJlbltpXS5jaGlsZHJlbiAmJiBjaGlsZHJlbltpXS5jaGlsZHJlbi5sZW5ndGgpXG4gICAgICAgIHRoaXMuZmluZFJlY3Vyc2UoY2hpbGRyZW5baV0sIHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBmaW5kKHNlbGVjdG9yLCBvYmopIHtcbiAgICB0aGlzLmZvdW5kQ2hpbGRyZW4gPSBbXTtcblxuICAgIGlmICghb2JqKVxuICAgICAgdGhpcy5maW5kUmVjdXJzZSh0aGlzLmxheW91dCwgc2VsZWN0b3IpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuZmluZFJlY3Vyc2Uob2JqLCBzZWxlY3Rvcik7XG5cbiAgICByZXR1cm4gdGhpcy5mb3VuZENoaWxkcmVuO1xuICB9XG5cbiAgaWQobmFtZSkge1xuICAgIGlmICghdGhpcy5pZFNldFtuYW1lXSkge1xuICAgICAgd2luZG93Ll9fSUQrKztcbiAgICAgIHRoaXMuaWRTZXRbbmFtZV0gPSB3aW5kb3cuX19JRDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuaWRTZXRbbmFtZV07XG4gIH1cblxuICBzZXRJZHMoYXJyKSB7XG4gICAgaWYgKCF0aGlzLmlkU2V0KVxuICAgICAgdGhpcy5pZFNldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5pZFNldFthcnJbaV1dKSB7XG4gICAgICAgIHdpbmRvdy5fX0lEKys7XG4gICAgICAgIHRoaXMuaWRTZXRbYXJyW2ldXSA9IHdpbmRvdy5fX0lEICsgJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3BlY2lhbENoYXJzKHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5pbmRleE9mKCcsJykgPiAtMSA/IHZhbHVlLnJlcGxhY2UoL1xcLC9nLCAnXFxcXFxcXFwsJykgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJzonKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFw6L2csICdcXFxcXFxcXDonKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gdmFsdWUuaW5kZXhPZignPScpID4gLTEgPyB2YWx1ZS5yZXBsYWNlKC9cXD0vZywgJ1xcXFxcXFxcPScpIDogdmFsdWU7XG4gICAgdmFsdWUgPSB2YWx1ZS5pbmRleE9mKCc7JykgPiAtMSA/IHZhbHVlLnJlcGxhY2UoL1xcOy9nLCAnXFxcXFxcXFw7JykgOiB2YWx1ZTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNtZEZvckFuZHJvaWQoY29uZmlnKSB7XG4gICAgdmFyIGNtZCA9IFwic2V0X3ZpZXc9Y3R4LT5maW5kVmlld0J5SWQ6aV9cIiArIGNvbmZpZy5pZCArIFwiO1wiO1xuICAgIHZhciBydW5JblVJO1xuXG4gICAgaWYgKGNvbmZpZy50b2FzdCkge1xuICAgICAgY21kID0gXCJzZXRfVE9BU1Q9YW5kcm9pZC53aWRnZXQuVG9hc3QtPm1ha2VUZXh0OmN0eF9jdHgsY3NfXCIgKyB0aGlzLmhhbmRsZVNwZWNpYWxDaGFycyhcbiAgICAgICAgICBjb25maWcudGV4dCkgKyBcIixpX1wiICsgKGNvbmZpZy5kdXJhdGlvbiA9PSBcInNob3J0XCIgPyAwIDogMSkgK1xuICAgICAgICBcIjtnZXRfVE9BU1QtPnNob3dcIjtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZyAmJiBPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcblxuICAgICAgY29uZmlnLnJvb3QgPSBcInRydWVcIjtcbiAgICAgIHJ1bkluVUkgPSBwYXJzZVBhcmFtcyhcImxpbmVhckxheW91dFwiLCBjb25maWcsIFwiZ2V0XCIpLnJ1bkluVUk7XG5cbiAgICAgIGNtZCArPSBydW5JblVJICsgJzsnO1xuICAgIH1cblxuICAgIHJldHVybiBjbWQ7XG4gIH1cblxuICBjbWRDb250YWluZXIoKSB7XG4gICAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKVxuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY21kRm9yV2ViKGNvbmZpZykge1xuICAgIGlmIChPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aClcbiAgICAgIHJldHVybiBwYXJzZVBhcmFtcyhcImxpbmVhckxheW91dFwiLCBjb25maWcsIFwic2V0XCIpO1xuICB9XG5cbiAgY21kKGNvbmZpZykge1xuICAgIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIilcbiAgICAgIHJldHVybiB0aGlzLmNtZEZvckFuZHJvaWQoY29uZmlnKTtcbiAgICBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIldFQlwiKVxuICAgICAgcmV0dXJuIHRoaXMuY21kRm9yV2ViKGNvbmZpZyk7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGFwcGVuZENoaWxkKGlkLCBqc3gsIGluZGV4LCBmbiwgcmVwbGFjZUNoaWxkKSB7XG4gICAgdmFyIHByb3h5Rm5OYW1lO1xuICAgIGlmICghcmVwbGFjZUNoaWxkKSB7XG4gICAgICByZXBsYWNlQ2hpbGQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZm4pIHtcbiAgICAgIHByb3h5Rm5OYW1lID0gJ0YnICsgd2luZG93Ll9fRk5fSU5ERVg7XG4gICAgICB3aW5kb3cuX19QUk9YWV9GTltwcm94eUZuTmFtZV0gPSBmbjtcbiAgICAgIHdpbmRvdy5fX0ZOX0lOREVYKys7XG4gICAgfVxuXG4gICAganN4ID0gKHdpbmRvdy5fX09TICE9IFwiQU5EUk9JRFwiKSA/IGpzeCA6IEpTT04uc3RyaW5naWZ5KGpzeCk7XG5cbiAgICBpZiAocHJveHlGbk5hbWUpXG4gICAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChpZCwganN4LCBpbmRleCwgcHJveHlGbk5hbWUsIHJlcGxhY2VDaGlsZCk7XG4gICAgZWxzZVxuICAgICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQoaWQsIGpzeCwgaW5kZXgsIG51bGwsIHJlcGxhY2VDaGlsZCk7XG4gIH1cblxuICBnZXRWaWV3KGpzeCkge1xuICAgIGlmICh3aW5kb3cuX19PUyAhPSBcIkFORFJPSURcIilcbiAgICAgIHJldHVybiBqc3g7XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanN4KTtcbiAgfVxuXG4gIHVwZGF0ZVByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IG1lcmdlKHRoaXMucHJvcHMsIHByb3BzKTtcbiAgICBjb25zdCBvbGRDb250YWluZXJJZCA9IHRoaXMubGF5b3V0LmlkU2V0LmlkO1xuICAgIGNvbnN0IGxheW91dCA9IHRoaXMucmVuZGVyKCk7XG4gICAgZm9yIChsZXQgaT0wOyBpPGxheW91dC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGk9PTApIHRoaXMucmVwbGFjZUNoaWxkKG9sZENvbnRhaW5lcklkLCBsYXlvdXQuY2hpbGRyZW5baV0sIGkpO1xuICAgICAgZWxzZSB0aGlzLmFwcGVuZENoaWxkKG9sZENvbnRhaW5lcklkLCBsYXlvdXQuY2hpbGRyZW5baV0sIGkpO1xuICAgIH1cbiAgICB0aGlzLmxheW91dC5pZFNldC5pZCA9IG9sZENvbnRhaW5lcklkO1xuICB9XG5cbiAgcmVtb3ZlVmlldyhpZCkge1xuICAgIGlmIChfX09TID09IFwiV0VCXCIpXG4gICAgICByZXR1cm4gQW5kcm9pZC5yZW1vdmVWaWV3KGlkKTtcbiAgICByZXR1cm4gXCJzZXRfVklFVz1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgaWQgK1xuICAgICAgXCI7c2V0X1BBUkVOVD1nZXRfVklFVy0+Z2V0UGFyZW50O2dldF9QQVJFTlQtPnJlbW92ZVZpZXc6Z2V0X1ZJRVc7XCJcbiAgfVxuXG4gIHJlbW92ZUNoaWxkcmVuKGlkKSB7XG4gICAgaWYgKF9fT1MgPT0gXCJXRUJcIilcbiAgICAgIHJldHVybiBBbmRyb2lkLnJlbW92ZUNoaWxkcmVuKGlkKTtcbiAgICByZXR1cm4gXCJzZXRfVklFVz1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgaWQgK1xuICAgICAgXCI7Z2V0X1ZJRVctPnJlbW92ZUFsbFZpZXdzO1wiXG4gIH1cblxuICByZXBsYWNlQ2hpbGQoaWQsIGpzeCwgaW5kZXgsIGZuKSB7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChpZCwganN4LCBpbmRleCwgZm4sIHRydWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZVZpZXc7IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5cblxudmFyIGNvbXB1dGVDaGlsZERpbWVucyA9IGZ1bmN0aW9uKHZpZXcpIHtcbiAgICBpZiAodmlldy5wcm9wcykge1xuICAgICAgdmlldy5wcm9wcy51c2VDb25zdHJhaXRzID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gaWYgKHZpZXcudHlwZSA9PSBcImxpbmVhckxheW91dFwiICYmIHZpZXcuY2hpbGRyZW4gJiYgdmlldy5jaGlsZHJlbi5sZW5ndGgpe1xuICAgIC8vICAgdmlldy5wcm9wcy53ZWlnaHRTdW0gPSAwLjA7XG4gICAgLy8gICB2aWV3LnByb3BzLmRpZmZIZWlnaHQgPSAwLjA7XG4gICAgLy8gICBmb3IodmFyIGkgaW4gdmlldy5jaGlsZHJlbil7XG4gICAgLy8gICAgIHZhciBjaGlsZCA9IHZpZXcuY2hpbGRyZW5baV07XG4gICAgLy8gICAgIGlmKGNoaWxkLnByb3BzICYmIGNoaWxkLnByb3BzLndlaWdodCl7XG4gICAgLy8gICAgICAgdmlldy5wcm9wcy53ZWlnaHRTdW0gKz0gcGFyc2VJbnQoY2hpbGQucHJvcHMud2VpZ2h0KVxuICAgIC8vICAgICB9IGVsc2UgaWYoY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMuaGVpZ2h0KSB7XG4gICAgLy8gICAgICAgdmlldy5wcm9wcy5kaWZmSGVpZ2h0ICs9IHBhcnNlSW50KGNoaWxkLnByb3BzLmhlaWdodClcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgcmV0dXJuIHZpZXc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wdXRlTGluZWFybGF5b3V0Oih2aWV3KSA9PiBjb21wdXRlQ2hpbGREaW1lbnModmlldyksXG4gIGNvbXB1dGVSZWxhdGl2ZUxheW91dDogKHZpZXcpID0+IGNvbXB1dGVDaGlsZERpbWVucyh2aWV3KSxcbiAgY29tcHV0ZVNjcm9sbFZpZXc6ICh2aWV3KSA9PiBjb21wdXRlQ2hpbGREaW1lbnModmlldyksXG4gIGNvbXB1dGVDaGlsZERpbWVuc1xufTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuZnVuY3Rpb24gcnVuKCkge1xuICBpZiAod2luZG93Ll9fT1MgPT09IFwiSU9TXCIpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vaW9zXCIpXG4gIH0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT09IFwiV0VCXCIpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vd2ViXCIpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL2FuZHJvaWRcIilcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1bigpOyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuQXJyYXkucHJvdG90eXBlLmZsYXR0ZW4gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIHZhciBtb3JlID0gW10uY29uY2F0KGN1cikuc29tZShBcnJheS5pc0FycmF5KTtcbiAgICByZXR1cm4gcHJldi5jb25jYXQobW9yZSA/IGN1ci5mbGF0dGVuKCkgOiBjdXIpO1xuICB9LFtdKTtcbn07XG5cbmZ1bmN0aW9uIGZsYXR0ZW5PYmplY3Qob2IpIHtcbiAgdmFyIHRvUmV0dXJuID0ge307XG4gIGZvciAodmFyIGkgaW4gb2IpIHtcbiAgICBpZiAoIW9iLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcbiAgICBpZiAoKHR5cGVvZiBvYltpXSkgPT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBmbGF0T2JqZWN0ID0gZmxhdHRlbk9iamVjdChvYltpXSk7XG4gICAgICBmb3IgKHZhciB4IGluIGZsYXRPYmplY3QpIHtcbiAgICAgICAgaWYgKCFmbGF0T2JqZWN0Lmhhc093blByb3BlcnR5KHgpKSBjb250aW51ZTtcbiAgICAgICAgaWYgKHR5cGVvZiBmbGF0T2JqZWN0W3hdICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgIHRvUmV0dXJuW3hdID0gZmxhdE9iamVjdFt4XTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdG9SZXR1cm5baV0gPSBvYltpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvUmV0dXJuO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0eXBlLCBwcm9wcywgLi4uY2hpbGRyZW4pe1xuICB2YXIgcGFyYW1UeXBlO1xuXG4gIGNoaWxkcmVuID0gIGNoaWxkcmVuLmZsYXR0ZW4oKTtcblxuICBpZiAoIXByb3BzKVxuICBwcm9wcyA9IHt9O1xuXG4gIGlmKHR5cGVvZiB0eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcHJvcHMubm9kZV9pZCA9IHdpbmRvdy5fX05PREVfSUQgKyAnJztcbiAgICBwcm9wcyA9IGZsYXR0ZW5PYmplY3QocHJvcHMpO1xuICAgIHdpbmRvdy5fX05PREVfSUQrKztcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGNoaWxkLnByb3BzLnBhcmVudElkID0gcHJvcHMuaWQ7XG4gICAgfSlcblxuICAgIGlmICghcHJvcHMuX19maWxlbmFtZSlcbiAgICBwcm9wcy5fX2ZpbGVuYW1lID0gXCJmaWxlbmFtZSBub3QgYWRkZWRcIjtcblxuICAgIHJldHVybiB7dHlwZTogdHlwZSwgIHByb3BzOiBwcm9wcywgY2hpbGRyZW46IGNoaWxkcmVufVxuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyB0eXBlKHByb3BzLCBjaGlsZHJlbik7XG4gIH1cbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGhhbmRsZSA6ICh1aSwgY2FsbGJhY2spID0+IHtcbiAgICBpZiAoIXVpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKHVpLnJlbmRlcikge1xuICAgICAgaWYgKHR5cGVvZiBBbmRyb2lkID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbmRyb2lkIGlzIHVuZGVmaW5lZFwiKTtcblxuICAgICAgaWYgKHdpbmRvdy5fX09TICE9IFwiQU5EUk9JRFwiKVxuICAgICAgICByZXR1cm4gQW5kcm9pZC5SZW5kZXIodWkucmVuZGVyLCBudWxsKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBpZih0eXBlb2YgQW5kcm9pZC5nZXROZXdJRCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gQW5kcm9pZC5SZW5kZXIoSlNPTi5zdHJpbmdpZnkodWkucmVuZGVyKSwgbnVsbCwgXCJmYWxzZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gQW5kcm9pZC5SZW5kZXIoSlNPTi5zdHJpbmdpZnkodWkucmVuZGVyKSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih1aS5ydW5JblVJKSB7XG4gICAgICBBbmRyb2lkLnJ1bkluVUkodWkucnVuSW5VSSwgbnVsbCk7XG4gICAgfVxuICAgIGlmKHVpLmFkZFZpZXdUb1BhcmVudCkge1xuICAgICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQodWkuYWRkVmlld1RvUGFyZW50LnBhcmVudElkLCBKU09OLnN0cmluZ2lmeSh1aS5hZGRWaWV3VG9QYXJlbnQuanN4KSwgdWkuYWRkVmlld1RvUGFyZW50LmluZGV4LCBudWxsKTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbi8vIEZvbGxvd2luZyBmdW5jdGlvbnMgYXJlIHVzZWQgYnkgV0VCIGFuZCBJT1MgUmVuZGVyXG5mdW5jdGlvbiBjYWNoZURpbWVuKHZpZXcpIHtcbiAgbGV0IHByb3BzID0gdmlldy5wcm9wcztcbiAgbGV0IGRpbWVuID0ge1xuICAgIHc6IHByb3BzLncsXG4gICAgaDogcHJvcHMuaCxcbiAgICB4OiBwcm9wcy54LFxuICAgIHk6IHByb3BzLnksXG4gICAgZ3Jhdml0eTogcHJvcHMuZ3Jhdml0eSxcbiAgICBwYWRkaW5nOiBwcm9wcy5wYWRkaW5nLFxuICAgIG9yaWVudGF0aW9uOiBwcm9wcy5vcmllbnRhdGlvbixcbiAgICBzdHJva2U6IHByb3BzLnN0cm9rZSA/IHByb3BzLnN0cm9rZS5zcGxpdChcIixcIilbMF0gKiAxIDogMCxcbiAgfVxuICB3aW5kb3cuX19WSUVXX0RJTUVOU0lPTlNbcHJvcHMuaWRdID0gZGltZW47XG59XG5cbmZ1bmN0aW9uIHNob3VsZE1vdmUodmlldykge1xuICBsZXQgcHJvcHMgPSB2aWV3LnByb3BzO1xuICBsZXQgZGltZW4gPSB7XG4gICAgdzogcHJvcHMudyxcbiAgICBoOiBwcm9wcy5oLFxuICAgIHg6IHByb3BzLngsXG4gICAgeTogcHJvcHMueVxuICB9O1xuICBsZXQgY2FjaGVkRGltZW4gPSB3aW5kb3cuX19WSUVXX0RJTUVOU0lPTlNbcHJvcHMuaWRdO1xuICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICBpZiAoIWNhY2hlZERpbWVuKVxuICAgIHJldHVybiBkaW1lbjtcbiAgZm9yIChsZXQga2V5IGluIGRpbWVuKSB7XG4gICAgaWYgKGNhY2hlZERpbWVuW2tleV0gIT0gZGltZW5ba2V5XSkge1xuICAgICAgZGltZW4uaWQgPSBwcm9wcy5pZDtcbiAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBpZiAoY2hhbmdlZClcbiAgICByZXR1cm4gZGltZW47XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRPUygpIHtcbiAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICghdXNlckFnZW50KVxuICAgIHJldHVybiBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIlVzZXJBZ2VudCBpcyBudWxsXCIpKTtcbiAgaWYgKHVzZXJBZ2VudC5pbmNsdWRlcyhcIkFuZHJvaWRcIikgJiYgdXNlckFnZW50LmluY2x1ZGVzKFwiVmVyc2lvblwiKSlcbiAgICByZXR1cm4gXCJBTkRST0lEXCI7XG4gIGlmICgodXNlckFnZW50LmluY2x1ZGVzKFwiaVBob25lXCIpIHx8IHVzZXJBZ2VudC5pbmNsdWRlcyhcImlQYWRcIikpICYmICF1c2VyQWdlbnQuaW5jbHVkZXMoXCJWZXJzaW9uXCIpKVxuICAgIHJldHVybiBcIklPU1wiO1xuICByZXR1cm4gXCJXRUJcIjtcbn1cblxuZnVuY3Rpb24gY2xlYXJWaWV3RXh0ZXJuYWxzKHZpZXcpIHtcbiAgaWYgKCF2aWV3KVxuICAgIHJldHVybjtcblxuICBkZWxldGUgd2luZG93Ll9fVklFV1Nbdmlldy5wcm9wcy5pZF07XG4gIGRlbGV0ZSB3aW5kb3cuX19WSUVXX0RJTUVOU0lPTlNbdmlldy5wcm9wcy5pZF07XG4gIFxuICBpZihfX09CU0VSVkVSU1t2aWV3LnByb3BzLmlkXSlcbiAgICBkZWxldGUgd2luZG93Ll9fT0JTRVJWRVJTW3ZpZXcucHJvcHMuaWRdO1xuXG4gIHZpZXcuY2hpbGRyZW4uZm9yRWFjaChjbGVhclZpZXdFeHRlcm5hbHMpO1xufVxuXG4vLyB1c2U6IGNsb25lKCA8dGhpbmcgdG8gY29weT4gKSByZXR1cm5zIDxuZXcgY29weT5cbmZ1bmN0aW9uIGNsb25lKG8sIG0pe1xuICAvLyByZXR1cm4gbm9uIG9iamVjdCB2YWx1ZXNcbiAgaWYoJ29iamVjdCcgIT09dHlwZW9mIG8pIHJldHVybiBvXG4gIC8vIG06IGEgbWFwIG9mIG9sZCByZWZzIHRvIG5ldyBvYmplY3QgcmVmcyB0byBzdG9wIHJlY3Vyc2lvblxuICBpZignb2JqZWN0JyAhPT10eXBlb2YgbSB8fCBudWxsID09PW0pIG0gPW5ldyBXZWFrTWFwKClcbiAgdmFyIG4gPW0uZ2V0KG8pXG4gIGlmKCd1bmRlZmluZWQnICE9PXR5cGVvZiBuKSByZXR1cm4gblxuICAvLyBzaGFsbG93L2xlYWYgY2xvbmUgb2JqZWN0XG4gIHZhciBjID1PYmplY3QuZ2V0UHJvdG90eXBlT2YobykuY29uc3RydWN0b3JcbiAgLy8gVE9ETzogc3BlY2lhbGl6ZSBjb3BpZXMgZm9yIGV4cGVjdGVkIGJ1aWx0IGluIHR5cGVzIGkuZS4gRGF0ZSBldGNcbiAgc3dpdGNoKGMpIHtcbiAgICAvLyBzaG91bGRuJ3QgYmUgY29waWVkLCBrZWVwIHJlZmVyZW5jZVxuICAgIGNhc2UgQm9vbGVhbjpcbiAgICBjYXNlIEVycm9yOlxuICAgIGNhc2UgRnVuY3Rpb246XG4gICAgY2FzZSBOdW1iZXI6XG4gICAgY2FzZSBQcm9taXNlOlxuICAgIGNhc2UgU3RyaW5nOlxuICAgIGNhc2UgU3ltYm9sOlxuICAgIGNhc2UgV2Vha01hcDpcbiAgICBjYXNlIFdlYWtTZXQ6XG4gICAgICBuID1vXG4gICAgICBicmVhaztcbiAgICAvLyBhcnJheSBsaWtlL2NvbGxlY3Rpb24gb2JqZWN0c1xuICAgIGNhc2UgQXJyYXk6XG4gICAgICBtLnNldChvLCBuID1vLnNsaWNlKDApKVxuICAgICAgLy8gcmVjdXJzaXZlIGNvcHkgZm9yIGNoaWxkIG9iamVjdHNcbiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbih2LGkpe1xuICAgICAgICBpZignb2JqZWN0JyA9PT10eXBlb2YgdikgbltpXSA9Y2xvbmUodiwgbSlcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBBcnJheUJ1ZmZlcjpcbiAgICAgIG0uc2V0KG8sIG4gPW8uc2xpY2UoMCkpXG4gICAgICBicmVhaztcbiAgICBjYXNlIERhdGFWaWV3OlxuICAgICAgbS5zZXQobywgbiA9bmV3IChjKShjbG9uZShvLmJ1ZmZlciwgbSksIG8uYnl0ZU9mZnNldCwgby5ieXRlTGVuZ3RoKSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTWFwOlxuICAgIGNhc2UgU2V0OlxuICAgICAgbS5zZXQobywgbiA9bmV3IChjKShjbG9uZShBcnJheS5mcm9tKG8uZW50cmllcygpKSwgbSkpKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBJbnQ4QXJyYXk6XG4gICAgY2FzZSBVaW50OEFycmF5OlxuICAgIGNhc2UgVWludDhDbGFtcGVkQXJyYXk6XG4gICAgY2FzZSBJbnQxNkFycmF5OlxuICAgIGNhc2UgVWludDE2QXJyYXk6XG4gICAgY2FzZSBJbnQzMkFycmF5OlxuICAgIGNhc2UgVWludDMyQXJyYXk6XG4gICAgY2FzZSBGbG9hdDMyQXJyYXk6XG4gICAgY2FzZSBGbG9hdDY0QXJyYXk6XG4gICAgICBtLnNldChvLCBuID1uZXcgKGMpKGNsb25lKG8uYnVmZmVyLCBtKSwgby5ieXRlT2Zmc2V0LCBvLmxlbmd0aCkpXG4gICAgICBicmVhaztcbiAgICAvLyB1c2UgYnVpbHQgaW4gY29weSBjb25zdHJ1Y3RvclxuICAgIGNhc2UgRGF0ZTpcbiAgICBjYXNlIFJlZ0V4cDpcbiAgICAgIG0uc2V0KG8sIG4gPW5ldyAoYykobykpXG4gICAgICBicmVhaztcbiAgICAvLyBmYWxsYmFjayBnZW5lcmljIG9iamVjdCBjb3B5XG4gICAgZGVmYXVsdDpcbiAgICAgIG0uc2V0KG8sIG4gPU9iamVjdC5hc3NpZ24obmV3IChjKSgpLCBvKSlcbiAgICAgIC8vIHJlY3Vyc2l2ZSBjb3B5IGZvciBjaGlsZCBvYmplY3RzXG4gICAgICBmb3IoYyBpbiBuKSBpZignb2JqZWN0JyA9PT10eXBlb2YgbltjXSkgbltjXSA9Y2xvbmUobltjXSwgbSlcbiAgfVxuICByZXR1cm4gblxufVxuXG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgdmFyIG9iaiA9IHt9LFxuICAgICAgaSA9IDAsXG4gICAgICBpbCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICBrZXk7XG4gIGZvciAoOyBpIDwgaWw7IGkrKykge1xuICAgICAgZm9yIChrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIG9ialtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hvdWxkTW92ZSxcbiAgY2FjaGVEaW1lbixcbiAgZ2V0T1MsXG4gIG1lcmdlLFxuICBjbGVhclZpZXdFeHRlcm5hbHMsXG4gIGNsb25lLFxufSIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHBhcnNlUGFyYW1zIDogcmVxdWlyZShcIi4vcGFyc2VQYXJhbXNcIiksXG5cdG1hcFByYW1zIDogcmVxdWlyZShcIi4vbWFwUGFyYW1zXCIpLFxuXHRjYWxsYmFja01hcHBlciA6IHJlcXVpcmUoXCIuLi9jb21tb24vY2FsbGJhY2tNYXBwZXJcIilcbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxudmFyIG1hcCA9IHtcbiAgdGV4dEZyb21IdG1sOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRUZXh0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYmFzZUFsaWduOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6IFwic2V0QmFzZWxpbmVBbGlnbmVkXCIsXG4gIH0sXG4gIHNob3dEaXZpZGVyczoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0U2hvd0RpdmlkZXJzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJkaXZpZGVyRHJhd2FibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RGl2aWRlckRyYXdhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgdGFiVGV4dENvbG9yczoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiAnc2V0VGFiVGV4dENvbG9ycycsXG4gIH0sXG4gIFwic2VsZWN0ZWRUYWJJbmRpY2F0b3JIZWlnaHRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2VsZWN0ZWRUYWJJbmRpY2F0b3JIZWlnaHQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBmb3JlZ3JvdW5kOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRDb2xvcicsXG4gICAgaW5Wb2tlZEluOiAnRk9SRUdST1VORCcsXG4gIH0sXG4gIHNlbGVjdGVkVGFiSW5kaWNhdG9yQ29sb3I6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNlbGVjdGVkVGFiSW5kaWNhdG9yQ29sb3InLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBsYXlvdXRUcmFuc2l0aW9uOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRMYXlvdXRUcmFuc2l0aW9uJyxcbiAgICBpblZva2VkSW46ICdMQVlPVVRfVFJBTlNJVElPTicsXG4gIH0sXG5cbiAgZm9jdXNPdXQ6IHsgLy8gZG9lc250IHdvcmtcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnY2xlYXJGb2N1cycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3JlcXVlc3RGb2N1cycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG5cbiAgZmlsbFZpZXdwb3J0OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6IFwic2V0RmlsbFZpZXdwb3J0XCIsXG4gIH0sXG4gIFwicHJpbWl0aXZlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0UHJpbWl0aXZlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LCBcbiAgXCJjeFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEN4JyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImN5XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q3knLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwicmFkaXVzXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0UmFkaXVzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImhleFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldENvbG9yJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInN0eWxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U3R5bGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwic3dlZXBBbmdsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFN3ZWVwQW5nbGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwic3RhcnRBbmdsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFN0YXJ0QW5nbGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwic3Ryb2tlV2lkdGhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTdHJva2VXaWR0aCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgc2V0RGF0ZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdsJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0RGF0ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIG1pbkRhdGU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnbCcsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldE1pbkRhdGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBtYXhEYXRlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2wnLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRNYXhEYXRlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgY2xpcENoaWxkcmVuOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRDbGlwQ2hpbGRyZW4nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBhZGp1c3RWaWV3Qm91bmRzOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRBZGp1c3RWaWV3Qm91bmRzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgbWF4TGluZXM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldE1heExpbmVzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgc2luZ2xlTGluZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0U2luZ2xlTGluZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGhhcmR3YXJlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRMYXllclR5cGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBzZWxlY3RlZDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2VsZWN0ZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBjdXJ2ZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICAgICdsaW5lYXInOiBcIjBcIlxuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldEludGVycG9sYXRvcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGZvbnRGYW1pbHk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ25vcm1hbCc6IDAsXG4gICAgICAnYm9sZCc6IDEsXG4gICAgICAnaXRhbGljJzogMixcbiAgICAgICdib2xkX2l0YWxpYyc6IDNcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRGb250RmFtaWx5JyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICB4OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICAnYnJpbmdUb0Zyb250Jzoge1xuICAgIHZhbHVlczogW10sXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiBcImJyaW5nVG9Gcm9udFwiLFxuICB9LFxuICAnYWJvdmUnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgXCJjaGVja2VkXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldENoZWNrZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB5OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImJhY2tncm91bmREcmF3YWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCYWNrZ3JvdW5kJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYnV0dG9uVGludDoge1xuICAgIHZhbHVlOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCdXR0b25UaW50TGlzdCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHZpc2liaWxpdHk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICB2aXNpYmxlOiAwLFxuICAgICAgaW52aXNpYmxlOiA0LFxuICAgICAgZ29uZTogOFxuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldFZpc2liaWxpdHknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNjYWxlVHlwZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTY2FsZVR5cGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInByb2dyZXNzQ29sb3JcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SW5kZXRlcm1pbmF0ZVRpbnRMaXN0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJhbHBoYVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRBbHBoYScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaW1hZ2VVcmxcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SW1hZ2VEcmF3YWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwicGxhY2VIb2xkZXJcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SW1hZ2VEcmF3YWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwicGFja2FnZUljb25cIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRJbWFnZURyYXdhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInNjcm9sbFRvXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzbW9vdGhTY3JvbGxUbycsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJjb3JuZXJSYWRpaVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldENvcm5lclJhZGlpJyxcbiAgICBpblZva2VkSW46ICdEUkFXQUJMRSdcbiAgfSxcbiAgXCJsaW5lU3BhY2luZ1wiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRMaW5lU3BhY2luZycsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJ1cmxcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnbG9hZFVybCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwidHJhbnNsYXRpb25ZXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRyYW5zbGF0aW9uWScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwidHJhbnNsYXRpb25YXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRyYW5zbGF0aW9uWCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHRyYW5zbGF0aW9uWjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VHJhbnNsYXRpb25aJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJkZWxheVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2wnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTdGFydERlbGF5JyxcbiAgfSxcbiAgXCJkdXJhdGlvblwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2wnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXREdXJhdGlvbicsXG4gIH0sXG4gIFwicGl2b3RYXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFBpdm90WCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwicGl2b3RZXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFBpdm90WScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwibWluV2lkdGhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TWluaW11bVdpZHRoJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJtaW5IZWlnaHRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TWluaW11bUhlaWdodCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwibWF4V2lkdGhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TWF4V2lkdGgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNoYWRvd1RhZ1wiOiB7XG4gICAgICB2YWx1ZXM6IFt7XG4gICAgICAgICAgICB0eXBlOiAnY3MnLFxuICAgICAgICAgIH1dLFxuICAgICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgICAgZm5OYW1lOiAnc2hhZG93VGFnJyxcbiAgICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIH0sXG4gIFwiYW5kcm9pZFNoYWRvd1wiOiB7XG4gICAgICB2YWx1ZXM6IFt7XG4gICAgICAgICAgICB0eXBlOiAnY3MnLFxuICAgICAgICAgIH1dLFxuICAgICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgICAgZm5OYW1lOiAnYW5kcm9pZFNoYWRvdycsXG4gICAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICB9LFxuICBcImdyYWRpZW50XCI6IHtcbiAgICAgIHZhbHVlczogW3tcbiAgICAgICAgdHlwZTogJ2NzJ1xuICAgICAgfV0sXG4gICAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgICBmbk5hbWU6ICdzZXRDb2xvcnMnLFxuICAgICAgaW5Wb2tlZEluOiAnRFJBV0FCTEUnXG4gIH0sXG4gIFwiZ3JhZGllbnRBbmdsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldE9yaWVudGF0aW9uJyxcbiAgICBpblZva2VkSW46ICdEUkFXQUJMRSdcbn0sXG4gIFwibGluZUhlaWdodFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRMaW5lSGVpZ2h0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImxldHRlclNwYWNpbmdcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TGV0dGVyU3BhY2luZycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaGludFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2NzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SGludCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaW5wdXRUeXBlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBwYXNzd29yZDogJzEyOScsXG4gICAgICBudW1lcmljOiAnMicsXG4gICAgICBudW1lcmljUGFzc3dvcmQ6ICcxOCcsXG4gICAgICBudW1lcmljV2l0aG91dFN1Z2dlc3Rpb246ICc1MjQyOTEnLFxuICAgICAgZGlzYWJsZWQ6ICcwJyxcbiAgICAgIHRleHQ6ICcxJyxcbiAgICAgIG11bHRpVGV4dDogJzMnXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0SW5wdXRUeXBlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJpbnB1dFR5cGVJXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SW5wdXRUeXBlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJ0ZXh0U2l6ZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUZXh0U2l6ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiZm9udFNpemVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRleHRTaXplJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJ0ZXh0SXNTZWxlY3RhYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRleHRJc1NlbGVjdGFibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImZvbnRTdHlsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRUeXBlZmFjZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwidGV4dEFsbENhcHNcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QWxsQ2FwcycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiZXhwYW5kXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RXhwYW5kJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImZvY3VzYWJsZUluVG91Y2hNb2RlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Rm9jdXNhYmxlSW5Ub3VjaE1vZGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZGVzY2VuZGFudEZvY3VzYWJpbGl0eVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldERlc2NlbmRhbnRGb2N1c2FiaWxpdHknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZXhwYW5kRHVyYXRpb25cIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRFeHBhbmREdXJhdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJleHBhbmRTY3JvbGxQYXJlbnRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTY3JvbGxQYXJlbnQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZXhwYW5kQWxwaGFcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRFeHBhbmRBbHBoYScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJkZWZhdWx0RXhwYW5kXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RGVmYXVsdEV4cGFuZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJzd3lwZUVuYWJsZWRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTd3lwZUVuYWJsZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIHRvYXN0OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2NzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2hvd1RvYXN0JyxcbiAgICBpblZva2VkSW46ICdDT05URVhUJyxcbiAgfSxcbiAgc2NhbGVYOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTY2FsZVgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBzY2FsZVk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNjYWxlWScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGlkOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRJZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGdyYXZpdHk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBjZW50ZXJfaG9yaXpvbnRhbDogMSxcbiAgICAgIGNlbnRlcl92ZXJ0aWNhbDogMTYsXG4gICAgICBib3R0b20gOiA4MCxcbiAgICAgIGxlZnQ6IDgzODg2MTEsXG4gICAgICByaWdodDogODM4ODYxMyxcbiAgICAgIGNlbnRlcjogMTcsXG4gICAgICBib3R0b206IDgwLFxuICAgICAgdG9wX3ZlcnRpY2FsOiA0OCxcbiAgICAgIHN0YXJ0OiA4Mzg4NjExLFxuICAgICAgZW5kOiA4Mzg4NjEzLFxuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldEdyYXZpdHknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBvcmllbnRhdGlvbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGhvcml6b250YWw6IDAsXG4gICAgICB2ZXJ0aWNhbDogMSxcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRPcmllbnRhdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHRleHQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnY3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUZXh0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgd2lkdGg6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBtYXRjaF9wYXJlbnQ6IC0xLFxuICAgICAgd3JhcF9jb250ZW50OiAtMixcbiAgICB9XSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGN0cjogdHJ1ZSxcbiAgICB2YXJOYW1lOiAndmFyX3dpZHRoJ1xuICB9LFxuICB3ZWlnaHQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgICBtYXRjaF9wYXJlbnQ6IC0xLFxuICAgICAgd3JhcF9jb250ZW50OiAtMixcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgdmFyTmFtZTogJ3Zhcl93ZWlnaHQnXG4gIH0sXG4gIGhlaWdodDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIG1hdGNoX3BhcmVudDogLTEsXG4gICAgICB3cmFwX2NvbnRlbnQ6IC0yLFxuICAgIH1dLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgY3RyOiB0cnVlLFxuICAgIHZhck5hbWU6ICd2YXJfaGVpZ2h0J1xuICB9LFxuICBsYXlvdXRfZ3Jhdml0eToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGJvdHRvbV9yaWdodDogMjEsXG4gICAgICB0b3A6IDMwLFxuICAgICAgYm90dG9tOiA1MCxcbiAgICAgIGxlZnQ6IDMsXG4gICAgICByaWdodDogNSxcbiAgICAgIGNlbnRlcjogMTcsXG4gICAgICBib3R0b206IDgwLFxuICAgICAgY2VudGVyX2hvcml6b250YWw6IDEsXG4gICAgICBjZW50ZXJfdmVydGljYWw6IDE2LFxuICAgICAgc3RhcnQ6IDgzODg2MTEsXG4gICAgICBlbmQ6IDgzODg2MTMsXG4gICAgfV0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICB2YXJOYW1lOiBcInZhcl9ncmF2aXR5XCIsXG4gIH0sXG4gIG1hcmdpbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcInNldE1hcmdpbnNcIixcbiAgfSxcbiAgbWFyZ2luU3RhcnQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJzZXRNYXJnaW5TdGFydFwiLFxuICB9LFxuICBtYXJnaW5FbmQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJzZXRNYXJnaW5FbmRcIixcbiAgfSxcbiAgcGFkZGluZzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogXCJzZXRQYWRkaW5nUmVsYXRpdmVcIixcbiAgfSxcbiAgJ2NlbnRlckluUGFyZW50Jzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMTMsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgJ2NlbnRlckhvcml6b250YWwnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAxNCxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICAnY2VudGVyVmVydGljYWwnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAxNSxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICBcImNoZWNrZWRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q2hlY2tlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gICdhbGlnblBhcmVudEJvdHRvbSc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDEyLFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gICdhbGlnblBhcmVudFRvcCc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDEwLFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gICdhbGlnblBhcmVudFJpZ2h0Jzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMTEsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgJ2FsaWduUGFyZW50TGVmdCc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDksXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgJ2xlZnRPZic6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDAsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgY29ybmVyUmFkaXVzOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwZidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ0RSQVdBQkxFJyxcbiAgICBmbk5hbWU6IFwic2V0Q29ybmVyUmFkaXVzXCIsXG4gIH0sXG4gIHN0cm9rZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ0RSQVdBQkxFJyxcbiAgICBmbk5hbWU6IFwic2V0U3Ryb2tlXCIsXG4gIH0sXG4gIFwidHlwZWZhY2VcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICdub3JtYWwnOiAwLFxuICAgICAgJ2JvbGQnOiAxLFxuICAgICAgJ2l0YWxpYyc6IDIsXG4gICAgICAnYm9sZF9pdGFsaWMnOiAzXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0VHlwZWZhY2UnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdEUkFXQUJMRScsXG4gICAgZm5OYW1lOiBcInNldENvbG9yXCIsXG4gIH0sXG4gIGJhY2tncm91bmREcmF3YWJsZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QmFja2dyb3VuZERyYXdhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6IFwic2V0QmFja2dyb3VuZENvbG9yXCIsXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUZXh0Q29sb3InLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBoaW50Q29sb3I6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEhpbnRUZXh0Q29sb3InLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBidG5CYWNrZ3JvdW5kOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdNVVRBVEVCRycsXG4gICAgZm5OYW1lOiBcInNldENvbG9yRmlsdGVyXCIsXG4gIH0sXG4gIGNvbG9yRmlsdGVyOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6IFwic2V0Q29sb3JGaWx0ZXJcIixcbiAgfSxcbiAgYnRuQ29sb3I6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRleHRDb2xvcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHNoYWRvd0xheWVyOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2YnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2YnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTaGFkb3dMYXllcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGVsZXZhdGlvbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RWxldmF0aW9uJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgcm90YXRpb25YOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRSb3RhdGlvblgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICByb3RhdGlvblk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFJvdGF0aW9uWScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHJvdGF0aW9uOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRSb3RhdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGJhY2tncm91bmRUaW50OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCYWNrZ3JvdW5kVGludExpc3QnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNjcm9sbEJhclhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SG9yaXpvbnRhbFNjcm9sbEJhckVuYWJsZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNjcm9sbEJhcllcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VmVydGljYWxTY3JvbGxCYXJFbmFibGVkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJjbGlja2FibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q2xpY2thYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJjdXJzb3JcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDdXJzb3JWaXNpYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImxvbmdDbGlja2FibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRMb25nQ2xpY2thYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImZvY3VzYWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRGb2N1c2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNlbGVjdGFibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QmFja2dyb3VuZFJlc291cmNlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzZWxlY3RhYmxlSXRlbVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCYWNrZ3JvdW5kUmVzb3VyY2UnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB2YWx1ZXM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEFkYXB0ZXInLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIG1heFNlZWs6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRNYXgnLFxuICAgIGluVm9rZWRJbjogXCJWSUVXXCIsXG4gICAgZG9udE1hcDogdHJ1ZVxuICB9LFxuICBhY2Nlc3NpYmlsaXR5SGludDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0Q29udGVudERlc2NyaXB0aW9uJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgaW1lT3B0aW9uczoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0SW1lT3B0aW9ucycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaG9yaXpvbnRhbEZhZGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SG9yaXpvbnRhbEZhZGluZ0VkZ2VFbmFibGVkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJmYWRpbmdFZGdlTGVuZ3RoXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RmFkaW5nRWRnZUxlbmd0aCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2hpbW1lclwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJhY2tncm91bmQnLFxuICAgIGFsdGVybmF0ZUZuTmFtZTogJ3NldFNoaW1tZXInLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNoaW1tZXJBY3RpdmVcIjoge1xuICAgIHZhbHVlcyA6IFtdLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzdGFydFNoaW1tZXInLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNoaW1tZXJJbmFjdGl2ZVwiOiB7XG4gICAgdmFsdWVzIDogW10sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3N0b3BTaGltbWVyJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJwZWFrSGVpZ2h0XCI6IHtcbiAgICB2YWx1ZXMgOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRQZWFrSGVpZ2h0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzaGVldFN0YXRlXCI6IHtcbiAgICB2YWx1ZXMgOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZXhwYW5kZWQgOiAzLFxuICAgICAgY29sbGFwc2VkIDogNCxcbiAgICAgIGhpZGRlbiA6IDUsXG4gICAgICBoYWxmRXhwYW5kZWQgOiA2XG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0U3RhdGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImhhbGZFeHBhbmRlZFJhdGlvXCI6IHtcbiAgICB2YWx1ZXMgOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEhhbGZFeHBhbmRlZFJhdGlvJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJoaWRlYWJsZVwiOiB7XG4gICAgdmFsdWVzIDogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRIaWRlYWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXA7XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cblxudmFyICBtYXAgPSB7XG4gICdQQVJBTVMnOiB7XG4gICAgJ3JlcXVpcmVkJzogJ3dpZHRoLCBoZWlnaHQnLFxuICAgICd2aWV3TWV0aG9kJzogJ3NldExheW91dFBhcmFtcyxnZXRMYXlvdXRQYXJhbXMnXG4gIH0sXG4gICdEUkFXQUJMRSc6IHtcbiAgICAnY3RyJzogJ2FuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS0+bmV3JyxcbiAgICAncmVxdWlyZWQnOiAnJyxcbiAgICAndmlld01ldGhvZCc6ICdzZXRCYWNrZ3JvdW5kLGdldEJhY2tncm91bmQnXG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcDtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxudmFyIG1hcFBhcmFtcyA9IHJlcXVpcmUoJy4vbWFwUGFyYW1zJyk7XG52YXIgb2JqTWFwID0gcmVxdWlyZSgnLi9vYmpNYXAnKTtcbnZhciBjYWxsYmFja01hcHBlciAgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NhbGxiYWNrTWFwcGVyXCIpXG5cbnZhciBnbG9iYWxPYmpNYXAgPSB7fTtcbnZhciBjb21tYW5kID0gXCJcIjtcbnZhciBlbGVtZW50VHlwZTtcbnZhciBnZXRTZXRUeXBlO1xuXG5mdW5jdGlvbiBpc1VSTChzdHIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgdXJsID0gbmV3IFVSTChzdHIpO1xuICAgIHJldHVybiAoc3RyLmluZGV4T2YoXCIuXCIpICE9IC0xKTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXR0YWNoRmVlZGJhY2soY29uZmlnLCBrZXlzLCBpKSB7XG4gIHZhciBmZWVkYmFja0ZuID0gZnVuY3Rpb24oKSB7fTtcblxuICBpZiAodHlwZW9mIGNvbmZpZy5mZWVkYmFjayAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmIChjb25maWcuZmVlZGJhY2sgPT0gXCJ0cnVlXCIpIHtcbiAgICAgIGNvbmZpZy5mZWVkYmFjayA9IGNhbGxiYWNrTWFwcGVyLm1hcChmZWVkYmFja0ZuKTtcbiAgICAgIHdpbmRvdy5fX0FMTF9PTkNMSUNLUy5wdXNoKGNvbmZpZy5mZWVkYmFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5vbkNsaWNrKSB7XG4gICAgY29uZmlnLmZlZWRiYWNrID0gY2FsbGJhY2tNYXBwZXIubWFwKGZlZWRiYWNrRm4pO1xuICAgIHdpbmRvdy5fX0FMTF9PTkNMSUNLUy5wdXNoKGNvbmZpZy5mZWVkYmFjayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29uZmlnR3JvdXBzKGNvbmZpZykge1xuICB2YXIgZ3JvdXBzID0ge307XG4gIHZhciBvYmpUeXBlO1xuICB2YXIgaXNBbmltYXRpb247XG4gIHZhciB3aWR0aEZvdW5kID0gMDtcbiAgdmFyIGhlaWdodEZvdW5kID0gMDtcbiAgbGV0IHBhZGRpbmdWYWwgPSBjb25maWdbXCJwYWRkaW5nXCJdO1xuICBpZiAoY29uZmlnLnN0cm9rZSlcbiAgICBkZWxldGUgY29uZmlnLnBhZGRpbmc7XG4gIGlmIChjb25maWcubWFyZ2luKSB7XG4gICAgbGV0IG1hcmdpbiA9IGNvbmZpZy5tYXJnaW4uc3BsaXQoJywnKS5tYXAoYSA9PiBhKjEpO1xuICAgIGNvbmZpZy5tYXJnaW5TdGFydCA9IG1hcmdpblswXSArICcnO1xuICAgIGNvbmZpZy5tYXJnaW5FbmQgPSBtYXJnaW5bMl0gKyAnJztcbiAgfVxuICB2YXIga2V5cyA9ICBPYmplY3Qua2V5cyhjb25maWcpO1xuICB2YXIgcHJveHlGbk5hbWU7XG4gICBmb3IgKHZhciBpID0gMDsgaTxrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXR0YWNoRmVlZGJhY2soY29uZmlnLCBrZXlzLCBpKTtcblxuICAgIGlmICh0eXBlb2YgY29uZmlnW2tleXNbaV1dID09IFwidW5kZWZpbmVkXCIgfHwgY29uZmlnW2tleXNbaV1dID09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBjb25maWdba2V5c1tpXV07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnW2tleXNbaV1dID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgaWYgKGtleXNbaV0gPT0gXCJhZnRlclJlbmRlclwiICYmIHR5cGVvZiB3aW5kb3cucmVtb3ZlQWZ0ZXJSZW5kZXJQcm9wID09IFwiZnVuY3Rpb25cIil7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZiB0aGUgZnVuY3Rpb24gaXMgcHJlc2VudCB0aGVuIHdlIGFyZSBoYW5kbGluZyBhZnRlclJlbmRlclxuICAgICAgICAgKiBwcm9wIGluIEpTIGl0c2VsZlxuICAgICAgICAgKi9cbiAgICAgICAgd2luZG93LnJlbW92ZUFmdGVyUmVuZGVyUHJvcChjb25maWdbXCJpZFwiXSwgY29uZmlnW1wiYWZ0ZXJSZW5kZXJcIl0pO1xuICAgICAgICBkZWxldGUgY29uZmlnW1wiYWZ0ZXJSZW5kZXJcIl07XG4gICAgICB9ZWxzZXtcbiAgICAgICAgY29uZmlnW2tleXNbaV1dID0gY2FsbGJhY2tNYXBwZXIubWFwKGNvbmZpZ1trZXlzW2ldXSk7XG5cbiAgICAgICAgaWYgKGtleXNbaV0gPT0gXCJvbkNsaWNrXCIpe1xuICAgICAgICAgIHdpbmRvdy5fX0ZOX01BUFtjb25maWdba2V5c1tpXV1dID0gY29uZmlnLnRleHQgfHwgY29uZmlnLmlkIHx8IFwiXCI7XG5cbiAgICAgICAgICBpZighY29uZmlnLmFsbG93TXVsdGlwbGVDbGlja3MgfHwgY29uZmlnLmFsbG93TXVsdGlwbGVDbGljaz09XCJmYWxzZVwiKXtcbiAgICAgICAgICAgIHdpbmRvdy5fX1RIUk9UVEVMRURfQUNUSU9OUy5wdXNoKGNvbmZpZ1trZXlzW2ldXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoa2V5c1tpXS5pbmRleE9mKCdfJykgJiYga2V5c1tpXS5zcGxpdCgnXycpWzBdID09ICdhJykge1xuICAgICAgICBvYmpUeXBlID0gbWFwUGFyYW1zW2tleXNbaV0uc3BsaXQoJ18nKVsxXV07XG4gICAgICAgIGlzQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialR5cGUgPSBtYXBQYXJhbXNba2V5c1tpXV07XG4gICAgICAgIGlzQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXlzW2ldID09IFwic3Ryb2tlXCIpIHtcbiAgICAgICAgbGV0IHBhZGRpbmcgPSBbMCwwLDAsMF07XG5cbiAgICAgICAgaWYgKHBhZGRpbmdWYWwpXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdWYWwuc3BsaXQoJywnKS5tYXAoYSA9PiBhKjEpO1xuXG4gICAgICAgIGxldCBzdHJva2VWYWx1ZSA9IGNvbmZpZ1tcInN0cm9rZVwiXS5zcGxpdCgnLCcpWzBdICogMTtcbiAgICAgICAgcGFkZGluZyA9IHBhZGRpbmcubWFwKGRpbSA9PiBkaW0gKyBzdHJva2VWYWx1ZSk7XG4gICAgICAgIGNvbmZpZ1tcInBhZGRpbmdcIl0gPSBwYWRkaW5nLmpvaW4oJywnKTtcbiAgICAgICAga2V5cy5wdXNoKFwicGFkZGluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9ialR5cGUpIHtcbiAgICAgICAgaWYgKGlzQW5pbWF0aW9uKXtcbiAgICAgICAgICBpZiAoIWdyb3Vwc1snQU5JTUFUSU9OJ10pXG4gICAgICAgICAgZ3JvdXBzWydBTklNQVRJT04nXSA9IFtdO1xuXG5cbiAgICAgICAgICBncm91cHNbJ0FOSU1BVElPTiddLnB1c2goe2tleToga2V5c1tpXS5zcGxpdCgnXycpWzFdLCB2YWx1ZTogY29uZmlnW2tleXNbaV1dfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWdyb3Vwc1tvYmpUeXBlLmluVm9rZWRJbl0pXG4gICAgICAgICAgZ3JvdXBzW29ialR5cGUuaW5Wb2tlZEluXSA9IFtdO1xuXG4gICAgICAgICAgaWYgKGtleXNbaV0gPT0gXCJ3aWR0aFwiKVxuICAgICAgICAgIHdpZHRoRm91bmQgKys7XG4gICAgICAgICAgaWYgKGtleXNbaV0gPT0gXCJoZWlnaHRcIilcbiAgICAgICAgICBoZWlnaHRGb3VuZCArKztcblxuICAgICAgICAgIGdyb3Vwc1tvYmpUeXBlLmluVm9rZWRJbl0ucHVzaCh7a2V5OiBrZXlzW2ldLCB2YWx1ZTogY29uZmlnW2tleXNbaV1dfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXlzW2ldIT09XCJwYXR0ZXJuXCIgJiYga2V5c1tpXSAhPT0gXCJyb290XCIgJiYga2V5c1tpXSAhPT0gXCJpZFwiICYmIGtleXNbaV0hPT0gXCJfX2ZpbGVuYW1lXCIpIHtcbiAgICAgICAgICBkZWxldGUgY29uZmlnW2tleXNbaV1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGdldFNldFR5cGUgPT0gXCJzZXRcIikge1xuICAgIGlmICghZ3JvdXBzLlBBUkFNUylcbiAgICBncm91cHMuUEFSQU1TID0gW107XG5cbiAgICBpZiAoIXdpZHRoRm91bmQpXG4gICAgZ3JvdXBzLlBBUkFNUy5wdXNoKHtrZXk6IFwid2lkdGhcIiwgdmFsdWU6ICd3cmFwX2NvbnRlbnQnfSk7XG4gICAgaWYgKCFoZWlnaHRGb3VuZClcbiAgICBncm91cHMuUEFSQU1TLnB1c2goe2tleTogXCJoZWlnaHRcIiwgdmFsdWU6ICd3cmFwX2NvbnRlbnQnfSk7XG4gIH1cblxuICByZXR1cm4gZ3JvdXBzO1xufVxuXG5mdW5jdGlvbiBnZXRDdHIodmlld0dyb3VwKSB7XG4gIHZhciB2aWV3R3JvdXBNYXAgPSAge1xuICAgICdsaW5lYXJMYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnY29vcmRpbmF0b3JMYXlvdXQnOiAnYW5kcm9pZHguY29vcmRpbmF0b3JsYXlvdXQud2lkZ2V0LkNvb3JkaW5hdG9yTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnc2Nyb2xsVmlldyc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdob3Jpem9udGFsU2Nyb2xsVmlldyc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdyZWxhdGl2ZUxheW91dCc6ICdhbmRyb2lkLndpZGdldC5SZWxhdGl2ZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2ZyYW1lTGF5b3V0JzogJ2FuZHJvaWQud2lkZ2V0LkZyYW1lTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAndG9vbGJhcic6ICdhbmRyb2lkLnN1cHBvcnQudjcud2lkZ2V0LlRvb2xiYXIkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdjb2xsYXBzaW5nVG9vbGJhckxheW91dCc6ICdhbmRyb2lkeC5jb29yZGluYXRvcmxheW91dC53aWRnZXQuQ29vcmRpbmF0b3JMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdhcHBCYXJMYXlvdXQnOiAnYW5kcm9pZC5zdXBwb3J0LmRlc2lnbi53aWRnZXQuQXBwQmFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAndmlldyc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICd0YWJMYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAndmlld1BhZ2VyJzogJ2FuZHJvaWQuc3VwcG9ydC52NC52aWV3LlZpZXdQYWdlciRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2xpc3RWaWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2V4cGFuZGFibGVMaXN0Vmlldyc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdyZWN5Y2xlclZpZXcnOiAnYW5kcm9pZC5zdXBwb3J0LnY3LndpZGdldC5SZWN5Y2xlclZpZXckTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdyYXRpbmdCYXInOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnYWNjb3JkaW9uTGF5b3V0JzogJ2FuZHJvaWQud2lkZ2V0LkZyYW1lTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnc3d5cGVMYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdzd3lwZVNjcm9sbCc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgIFwic2hpbW1lckZyYW1lTGF5b3V0XCI6IFwiYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXdcIixcbiAgICBcImJvdHRvbVNoZWV0TGF5b3V0XCI6ICdhbmRyb2lkLndpZGdldC5GcmFtZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ldydcbiAgfTtcblxuICBpZighdmlld0dyb3VwTWFwW3ZpZXdHcm91cF0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIHZpZXcgZ3JvdXAgZm91bmQgOiBcIiArIHZpZXdHcm91cCk7XG4gIH1cblxuICByZXR1cm4gIHZpZXdHcm91cE1hcFt2aWV3R3JvdXBdO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTcGVjaWFsQ2hhcnModmFsdWUpIHtcbiAgdmFsdWUgPSAgdmFsdWUuaW5kZXhPZignLCcpPi0xP3ZhbHVlLnJlcGxhY2UoL1xcLC9nLCAnXFxcXFxcXFwsJyk6dmFsdWU7XG4gIHZhbHVlID0gIHZhbHVlLmluZGV4T2YoJzonKT4tMT92YWx1ZS5yZXBsYWNlKC9cXDovZywgJ1xcXFxcXFxcOicpOnZhbHVlO1xuICB2YWx1ZSA9ICB2YWx1ZS5pbmRleE9mKCc6Jyk+LTE/dmFsdWUucmVwbGFjZSgvXFw9L2csICdcXFxcXFxcXD0nKTp2YWx1ZTtcbiAgdmFsdWUgPSAgdmFsdWUuaW5kZXhPZignOycpPi0xP3ZhbHVlLnJlcGxhY2UoL1xcOy9nLCAnXFxcXFxcXFw7Jyk6dmFsdWU7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRBcmdzKGF0dHJzLCBvYmopIHtcbiAgaWYgKCFvYmoudmFsdWVzKVxuICByZXR1cm4gXCJcIjtcblxuICB2YXIgYXJncyA9IFwiXCI7XG4gIHZhciB2YWx1ZSA9IChhdHRycy5rZXkgPT0gXCJ0ZXh0XCIgfHwgYXR0cnMua2V5ID09IFwiaGludFwiKVxuICAgID9hdHRycy52YWx1ZTphdHRycy52YWx1ZS5yZXBsYWNlKC8gL2csJycpO1xuXG4gIHZhciBpbmNvbWluZ0FyZ3M7XG4gIGlmIChhdHRycy5rZXkgPT0gXCJ0ZXh0XCIgfHwgYXR0cnMua2V5ID09IFwiaGludFwiKSB7XG4gICAgaW5jb21pbmdBcmdzID0gW107XG4gICAgaW5jb21pbmdBcmdzLnB1c2goaGFuZGxlU3BlY2lhbENoYXJzKHZhbHVlKSk7XG5cbiAgfSBlbHNlIHtcbiAgICBpbmNvbWluZ0FyZ3MgPSB2YWx1ZS5zcGxpdCgnLCcpO1xuICB9XG5cbiAgZm9yICAodmFyIGkgPTAgO2k8b2JqLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIGFyZ3MgKz0gIG9iai52YWx1ZXNbaV0udHlwZSArICdfJztcblxuICAgIGlmIChvYmouZG9udE1hcClcbiAgICBhcmdzICs9IGluY29taW5nQXJnc1tpXSArICcsJztcbiAgICBlbHNlICB7XG4gICAgICBpZiAob2JqLnZhbHVlc1tpXS5kb250TWFwKSB7XG4gICAgICAgIGFyZ3MgKz0gaW5jb21pbmdBcmdzW2ldICsgJywnO1xuICAgICAgfSBlbHNlIGlmIChhdHRycy5rZXkgPT0gXCJ3aWR0aFwiIHx8IGF0dHJzLmtleSA9PSBcImhlaWdodFwiKSB7XG4gICAgICAgIGlmICghaXNOYU4oaW5jb21pbmdBcmdzW2ldKjEpKVxuICAgICAgICBhcmdzID0gJ2RwXycgKyBpbmNvbWluZ0FyZ3NbaV0gKyAnLCc7XG4gICAgICAgIGVsc2VcbiAgICAgICAgYXJncyArPSBvYmoudmFsdWVzW2ldW2luY29taW5nQXJnc1tpXV0gKyAnLCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcmdzICs9IG9iai52YWx1ZXNbaV1baW5jb21pbmdBcmdzW2ldXSArICcsJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJncy5zdWJzdHJpbmcoMCwgYXJncy5sZW5ndGgtMSk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVDdHIoYXR0cnMsIGJlbG9uZ3NUbykge1xuICB2YXIgb2JqID0gb2JqTWFwW2JlbG9uZ3NUb107XG4gIHZhciBjdHIgPSBnbG9iYWxPYmpNYXBbYmVsb25nc1RvXS5jdHI7XG4gIHZhciByZXFBdHRycztcblxuICBpZiAoZ2V0U2V0VHlwZSA9PSBcImdldFwiICYmIChiZWxvbmdzVG8gPT0gXCJBTklNQVRJT05cIiB8fCBiZWxvbmdzVG8gPT0gXCJEUkFXQUJMRVwiIHx8IGJlbG9uZ3NUbyA9PSBcIlBBUkFNU1wiKSkge1xuICAgIHJldHVybiBjdHI7XG4gIH1cblxuICBpZiAoIW9iaiB8fCAhb2JqLnJlcXVpcmVkKVxuICByZXR1cm4gY3RyXG5cbiAgcmVxQXR0cnMgPSBvYmoucmVxdWlyZWQuc3BsaXQoJywnKTtcblxuICBjdHIgKz0gJzonO1xuXG4gIGZvciAodmFyIGkgPTA7IGk8cmVxQXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHZhciBqPTA7IGo8YXR0cnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChyZXFBdHRyc1tpXS50cmltKCkgPT0gYXR0cnNbal0ua2V5KSAge1xuICAgICAgICBjdHIgKz0gYXBwZW5kQXJncyhhdHRyc1tqXSwgbWFwUGFyYW1zW3JlcUF0dHJzW2ldLnRyaW0oKV0pICsgJywnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjdHIuc3Vic3RyaW5nKDAsIGN0ci5sZW5ndGggLSAxKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VIdG1sKHRleHQpIHtcbiAgcmV0dXJuICdzZXRfaHRtbD1hbmRyb2lkLnRleHQuSHRtbC0+ZnJvbUh0bWw6c18nICsgdGV4dCArICc7Jztcbn1cblxuZnVuY3Rpb24gcGFyc2VDb2xvcihjb2xvciwgc2V0dGVyTmFtZSkge1xuICBpZiAoIXNldHRlck5hbWUpXG4gIHNldHRlck5hbWUgPSAnc2V0X2NvbG9ySW50JztcbiAgcmV0dXJuIHNldHRlck5hbWUgKyAnPWFuZHJvaWQuZ3JhcGhpY3MuQ29sb3ItPnBhcnNlQ29sb3I6c18nICsgY29sb3IgKyAnOyc7XG59XG5cbmZ1bmN0aW9uIG1hc2hUaGlzKGF0dHJzLCBvYmosIGJlbG9uZ3NUbywgdHJhbnNmb3JtRm4sIGFsbFByb3BzLCB0eXBlKSB7XG4gIGlmIChnZXRTZXRUeXBlID09IFwiZ2V0XCIgJiYgKGF0dHJzLmtleSA9PSBcIndpZHRoXCIgfHwgYXR0cnMua2V5ID09IFwiaGVpZ2h0XCIpKSB7XG4gICAgLy8gZ2V0IGNhc2UgaS5lIGR1cmluZyBwYXRjaFxuICAgIGlmKCFpc05hTihhdHRycy52YWx1ZSAqIDEpKSB7XG4gICAgICByZXR1cm4gJ2dldF9QQVJBTVMtPicgKyBvYmoudmFyTmFtZSArICc6ZHBfJyArIGF0dHJzLnZhbHVlICsgJztnZXRfdmlldy0+c2V0TGF5b3V0UGFyYW1zOmdldF9QQVJBTVMgJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdnZXRfUEFSQU1TLT4nICsgb2JqLnZhck5hbWUgKyAnOmlfJyArIG1hcFBhcmFtc1thdHRycy5rZXldLnZhbHVlc1swXVthdHRycy52YWx1ZV0gKyAnO2dldF92aWV3LT5zZXRMYXlvdXRQYXJhbXM6Z2V0X1BBUkFNUyAnO1xuICAgIH1cbiAgfSBlbHNlIGlmKGF0dHJzLmtleSA9PSBcIndpZHRoXCIgfHwgYXR0cnMua2V5ID09IFwiaGVpZ2h0XCIpIHtcbiAgICAvLyBzZXQgY2FzZSBpLmUgZmlyc3QgcmVuZGVyXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIGJlZm9yZUNtZCA9IFwiXCI7XG4gIHZhciBhZnRlckNtZCA9IFwiXCI7XG4gIHZhciBwcmVQZW5kID0gJyc7XG4gIHZhciBjdXJyVHJhbnNWYWw7XG4gIHZhciBjb2xvcjtcbiAgdmFyIGFyciA9IFtdO1xuICB2YXIgcmVzO1xuICB2YXIgdmFsdWVzO1xuXG4gIHZhciBrZXlXb3JkO1xuICB2YXIgX2NtZDtcbiAgdmFyIGZpbmFsQ21kO1xuICB2YXIgY29sb3IxO1xuICBhdHRycy52YWx1ZSArPSAnJztcblxuICBpZiAoYXR0cnMua2V5ID09IFwidGV4dFNpemVcIikge1xuICAgIGF0dHJzLnZhbHVlID0gXCIxLFwiICsgKGF0dHJzLnZhbHVlIC0gMSk7XG4gIH1cblxuLy90b2RvOnRhYlRleHRDb2xvcnNcbiAgaWYgKGF0dHJzLmtleSA9PSBcImZvcmVncm91bmRcIiB8fFxuICAgIGF0dHJzLmtleSA9PSBcInRhYlRleHRDb2xvcnNcIiB8fFxuICAgIGF0dHJzLmtleSA9PSBcInNlbGVjdGVkVGFiSW5kaWNhdG9yQ29sb3JcIiAgfHxcbiAgICBhdHRycy5rZXkgPT0gXCJjb2xvclwiIHx8XG4gICAgYXR0cnMua2V5ID09IFwiYmFja2dyb3VuZFwiIHx8XG4gICAgYXR0cnMua2V5ID09IFwic3Ryb2tlXCIgfHxcbiAgICBhdHRycy5rZXkgPT0gXCJidG5Db2xvclwiKSB7XG5cbiAgICBpZiAoYXR0cnMua2V5ID09IFwic3Ryb2tlXCIpIHtcbiAgICAgIGNvbG9yID0gYXR0cnMudmFsdWUuc3BsaXQoJywnKVsxXTtcbiAgICAgIGN1cnJUcmFuc1ZhbCA9IGFwcGVuZEFyZ3MoYXR0cnMsb2JqKS5zcGxpdCgnLCcpWzBdICsgJyxnZXRfY29sb3JJbnQnO1xuICAgIH0gZWxzZSBpZihhdHRycy5rZXkgPT0gXCJ0YWJUZXh0Q29sb3JzXCIpe1xuICAgICAgY29sb3IgPSBhdHRycy52YWx1ZS5zcGxpdCgnLCcpWzBdO1xuICAgICAgY29sb3IxID0gYXR0cnMudmFsdWUuc3BsaXQoJywnKVsxXTtcbiAgICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfY29sb3JJbnQxJyArICcsZ2V0X2NvbG9ySW50JztcbiAgICB9ZWxzZSB7XG4gICAgICBjb2xvciA9IGF0dHJzLnZhbHVlO1xuICAgICAgY3VyclRyYW5zVmFsID0gJ2dldF9jb2xvckludCc7XG4gICAgfVxuXG4gICAgaWYoYXR0cnMua2V5ID09IFwidGFiVGV4dENvbG9yc1wiKXtcbiAgICAgIHByZVBlbmQgPSBwYXJzZUNvbG9yKGNvbG9yLFwic2V0X2NvbG9ySW50MVwiKSsnLCcrcGFyc2VDb2xvcihjb2xvcjEpO1xuICAgIH1lbHNle1xuICAgICAgcHJlUGVuZCA9IHBhcnNlQ29sb3IoY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJmb250U3R5bGVcIikge1xuICAgIGlmKGlzVVJMKGF0dHJzLnZhbHVlKSkge1xuICAgICAgaWYodHlwZW9mIHdpbmRvdy5fX1BST1hZX0ZOID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgd2luZG93Ll9fUFJPWFlfRk4gPSB7fTtcbiAgICAgIH1cbiAgICAgIHZhciBmb250ID0gYXR0cnMudmFsdWUuc3Vic3RyKGF0dHJzLnZhbHVlLmxhc3RJbmRleE9mKCcvJykgKyAxKVxuXG4gICAgICB2YXIgZmlsZVByZXNlbnQgPSAodHlwZW9mIEpCcmlkZ2UuaXNGaWxlUHJlc2VudCA9PSBcImZ1bmN0aW9uXCIpICYmIEpCcmlkZ2UuaXNGaWxlUHJlc2VudChmb250KTtcbiAgICAgIGlmICghZmlsZVByZXNlbnQpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tNYXBwZXIubWFwKGZ1bmN0aW9uIChpc05ldywgdXJsLCBmaWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGlkID0gYWxsUHJvcHMuZmluZChhID0+IGEua2V5ID09PSBcImlkXCIpO1xuICAgICAgICAgIGlmICghaWQpIHJldHVybjtcbiAgICAgICAgICB2YXIgdXJsU2V0Q29tbWFuZHMgPSBcInNldF9kaXJlY3Rvcnk9Y3R4LT5nZXREaXI6c19qdXNwYXksaV8wO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRGaWxlPWphdmEuaW8uRmlsZS0+bmV3OmdldF9kaXJlY3Rvcnksc19cIiArIGZpbGVOYW1lICsgXCI7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZFBhdGg9Z2V0X3Jlc29sdmVkRmlsZS0+dG9TdHJpbmc7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9kZm9udD1hbmRyb2lkLmdyYXBoaWNzLlR5cGVmYWNlLT5jcmVhdGVGcm9tRmlsZTpnZXRfcmVzb2x2ZWRQYXRoO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfdGV4dFY9Y3R4LT5maW5kVmlld0J5SWQ6aV9cIiArIGlkLnZhbHVlICsgXCI7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldF90ZXh0Vi0+c2V0VHlwZWZhY2U6Z2V0X2Rmb250XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5kcm9pZC5ydW5JblVJKHVybFNldENvbW1hbmRzICxudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIEpCcmlkZ2UucmVuZXdGaWxlKGF0dHJzLnZhbHVlLCBmb250LCBjYWxsYmFjayk7XG4gICAgICB9IGVsc2UgaWYoSkJyaWRnZS5nZXRGaWxlUGF0aCkge1xuICAgICAgICBwcmVQZW5kID0gXCJzZXRfZGlyZWN0b3J5PWN0eC0+Z2V0RGlyOnNfanVzcGF5LGlfMDtcIiArXG4gICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkRmlsZT1qYXZhLmlvLkZpbGUtPm5ldzpnZXRfZGlyZWN0b3J5LHNfXCIgKyBKQnJpZGdlLmdldEZpbGVQYXRoKGZvbnQpICsgXCI7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZFBhdGg9Z2V0X3Jlc29sdmVkRmlsZS0+dG9TdHJpbmc7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9kZm9udD1hbmRyb2lkLmdyYXBoaWNzLlR5cGVmYWNlLT5jcmVhdGVGcm9tRmlsZTpnZXRfcmVzb2x2ZWRQYXRoO1wiXG4gICAgICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X2Rmb250XCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZVBlbmQgPSBcInNldF9hc3Q9Y3R4LT5nZXRBc3NldHM7c2V0X3R5cGU9YW5kcm9pZC5ncmFwaGljcy5UeXBlZmFjZS0+Y3JlYXRlRnJvbUFzc2V0OmdldF9hc3Qsc19mb250c1xcL1wiICsgYXR0cnMudmFsdWUgKyBcIlxcLnR0ZjtcIjtcbiAgICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3R5cGVcIjtcbiAgICB9XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZ3JhZGllbnRBbmdsZVwiKSB7XG4gICAgb3JpZW50YXRpb24gKz0gXCJzZXRfZHI9dGhpcy0+Z2V0QmFja2dyb3VuZDtzZXRfbz1hbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUkT3JpZW50YXRpb24tPnZhbHVlT2Y6c19cIithdHRycy52YWx1ZStcIjtcIlxuICAgIHByZVBlbmQgKz0gb3JpZW50YXRpb247XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfb1wiXG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZ3JhZGllbnRcIikge1xuICAgIHZhciBncmFkaWVudE9iaiA9IEpTT04ucGFyc2UoYXR0cnMudmFsdWUpO1xuICAgIHZhciBvcmllbnRhdGlvbiA9IFwiXCI7XG4gICAgaWYgKGdyYWRpZW50T2JqLnR5cGUgPT0gXCJsaW5lYXJcIikge1xuICAgIH0gZWxzZSB7fVxuXG4gICAgdmFyIGludENsYXNzID0gXCJzZXRfY2M9amF2YS5sYW5nLkNsYXNzLT5mb3JOYW1lOnNfamF2YS5sYW5nLkludGVnZXI7XCI7XG4gICAgdmFyIGFyckxpc3QgPSBcInNldF9hcnI9amF2YS51dGlsLkFycmF5TGlzdC0+bmV3O1wiO1xuXG4gICAgcHJlUGVuZCArPSBncmFkaWVudE9iai52YWx1ZXMubWFwKGZ1bmN0aW9uIChjb2xvciwgaSkge1xuICAgICAgcmV0dXJuIHBhcnNlQ29sb3IoY29sb3IsIFwic2V0X2NvbG9yXCIgKyBpKTtcbiAgICB9KS5qb2luKFwiXCIpO1xuXG4gICAgYXJyTGlzdCArPSBncmFkaWVudE9iai52YWx1ZXMubWFwKGZ1bmN0aW9uIChjb2xvciwgaSkge1xuICAgICAgcmV0dXJuIFwiZ2V0X2Fyci0+YWRkOmdldF9jb2xvclwiICsgaTtcbiAgICB9KS5qb2luKFwiO1wiKTtcblxuICAgIHByZVBlbmQgKz0gXCJzZXRfZ2Q9YW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlLT5uZXc7XCI7XG4gICAgcHJlUGVuZCArPSBhcnJMaXN0ICsgXCI7XCI7XG4gICAgcHJlUGVuZCArPSBcInNldF9jPWphdmEubGFuZy5DbGFzcy0+Zm9yTmFtZTpzX2phdmEubGFuZy5JbnRlZ2VyO1wiO1xuICAgIHByZVBlbmQgKz0gXCJpbmZsLT5jb252ZXJ0QW5kU3RvcmVBcnJheTpnZXRfYXJyLGdldF9jLHNfcEFycixiX3RydWU7XCI7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfcEFyclwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImNvcm5lclJhZGlpXCIpIHtcbiAgICB2YXIgY29ybmVyUmFkaWlzID0gYXR0cnMudmFsdWUuc3BsaXQoJywnKTtcbiAgICB2YXIgY29ybmVyUmFkaXVzID0gY29ybmVyUmFkaWlzLnNwbGljZSgwLDEpO1xuICAgIHZhciBjb3JuZXJSYWRpaUFycmF5ID0gW107XG4gICAgZm9yKHZhciBpID0gMDsgaTwgY29ybmVyUmFkaWlzLmxlbmd0aDsrK2kpe1xuICAgICAgY29ybmVyUmFkaWlBcnJheS5wdXNoKChjb3JuZXJSYWRpaXNbaV0qY29ybmVyUmFkaXVzKStcIlwiKTtcbiAgICAgIGNvcm5lclJhZGlpQXJyYXkucHVzaCgoY29ybmVyUmFkaWlzW2ldKmNvcm5lclJhZGl1cykrXCJcIik7XG4gICAgfVxuICAgIHZhciBhcnJMaXN0ID0gXCJzZXRfYXJyPWphdmEudXRpbC5BcnJheUxpc3QtPm5ldztcIjtcbiAgICB2YXIgZmxvYXRBcnJheSA9IGNvcm5lclJhZGlpQXJyYXkubWFwKGZ1bmN0aW9uKHZhbCxpKXtyZXR1cm4gXCJzZXRfY29ybmVyUmFkaXVzPWphdmEubGFuZy5GbG9hdC0+bmV3OmRwZl9cIisgdmFsICsgXCI7Z2V0X2Fyci0+YWRkOmdldF9jb3JuZXJSYWRpdXM7XCJ9KTtcbiAgICBwcmVQZW5kICs9IGFyckxpc3QgKyBcIjtcIjtcbiAgICBwcmVQZW5kICs9IFwic2V0X2M9amF2YS5sYW5nLkNsYXNzLT5mb3JOYW1lOnNfamF2YS5sYW5nLkZsb2F0O1wiO1xuICAgIHByZVBlbmQgKz0gZmxvYXRBcnJheS5qb2luKFwiXCIpO1xuICAgIHByZVBlbmQgKz0gXCJpbmZsLT5jb252ZXJ0QW5kU3RvcmVBcnJheTpnZXRfYXJyLGdldF9jLHNfcEFycixiX3RydWU7XCI7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfcEFyclwiO1xuICB9XG5cbiAgLy8gc2hhZG93VGFnIDogbGV2ZWwsdGFnXG4gIGlmIChhdHRycy5rZXkgPT0gXCJzaGFkb3dUYWdcIikge1xuICAgIHZhciBhcnIgPSBhdHRycy52YWx1ZS5zcGxpdChcIixcIik7XG4gICAgdmFyIHRhZyA9IGFyclsxXTtcblx0XHRjb25zb2xlLndhcm4oXCJZT09PTyBTaGFkb3dcIiwgYXJyKTtcblxuICAgIGlmICghd2luZG93LnNoYWRvd09iamVjdFt0YWddKSB7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ10gPVxuICAgICAgICB7IGxldmVsIDogcGFyc2VJbnQoYXJyWzBdKSxcbiAgICAgICAgICB2aWV3SWQgOiBbXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBbXSxcbiAgICAgICAgICBibHVyVmFsdWUgOiBbXSxcbiAgICAgICAgICBzaGFkb3dDb2xvciA6IFtdLFxuICAgICAgICAgIGR4IDogW10sXG4gICAgICAgICAgZHkgOiBbXSxcbiAgICAgICAgICBzcHJlYWQgOiBbXSxcbiAgICAgICAgICBmYWN0b3IgOiBbXVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImxldmVsXCJdID0gcGFyc2VJbnQoYXJyWzBdKTtcbiAgICB9XG5cdFx0cmV0dXJuIFwiXCI7XG4gIH1cbiAgLy8gIC0tIGludCBkeCwgaW50IGR5LCBpbnQgYmx1clZhbHVlLCAgU3RyaW5nIHNoYWRvd0NvbG9yLCAgaW50IHNwcmVhZCwgZWxldmF0aXVvbiwgZmxvYXQgZmFjdG9yKVxuICBpZiAoYXR0cnMua2V5ID09IFwiYW5kcm9pZFNoYWRvd1wiKSB7XG4gICAgdmFyIGFyciA9IGF0dHJzLnZhbHVlLnNwbGl0KFwiLFwiKTtcblxuICAgIHZhciB0YWcgPSBhcnJbNl07XG5cbiAgICB2YXIgX19iYWNrZ3JvdW5kID0gXCIjZmZmZmZmXCI7XG4gICAgdmFyIF9faWQgPSBcIlwiO1xuXG4gICAgZm9yICh2YXIgaSA9MCA7aTxhbGxQcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFsbFByb3BzW2ldLmtleSA9PSBcImJhY2tncm91bmRcIikge1xuICAgICAgICBfX2JhY2tncm91bmQgPSBhbGxQcm9wc1tpXS52YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoYWxsUHJvcHNbaV0ua2V5ID09IFwiaWRcIikge1xuICAgICAgICBfX2lkID0gYWxsUHJvcHNbaV0udmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGZhY3RvciA9IGFycls1XTtcbiAgICBpZiAodHlwZW9mIEpCcmlkZ2UuZ2V0UGl4ZWxzID09IFwiZnVuY3Rpb25cIil7XG4gICAgICBmYWN0b3IgPSBKQnJpZGdlLmdldFBpeGVscygpO1xuICAgIH1cbiAgICAvLyAgICh2aWV3SWQsIGJhY2tncm91bmRDb2xvciwgaW50IGJsdXJWYWx1ZSxoYWRvd0NvbG9yLCBpbnQgZHgsIGludCBkeSwgaW50IHNwcmVhZCwgZmxvYXQgZmFjdG9yKVxuXG4gICAgaWYgKCF3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ10pIHtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXSA9XG4gICAgICAgIHsgbGV2ZWwgOiAtMSxcbiAgICAgICAgICB2aWV3SWQgOiBbX19pZF0sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogW19fYmFja2dyb3VuZF0sXG4gICAgICAgICAgYmx1clZhbHVlIDogW2FyclsyXV0sXG4gICAgICAgICAgc2hhZG93Q29sb3IgOiBbYXJyWzNdXSxcbiAgICAgICAgICBkeCA6IFthcnJbMF1dLFxuICAgICAgICAgIGR5IDogW2FyclsxXV0sXG4gICAgICAgICAgc3ByZWFkIDogW2Fycls0XV0sXG4gICAgICAgICAgZmFjdG9yIDogW2ZhY3Rvcl1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJ2aWV3SWRcIl0ucHVzaChfX2lkKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImJhY2tncm91bmRDb2xvclwiXS5wdXNoKF9fYmFja2dyb3VuZCk7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJibHVyVmFsdWVcIl0ucHVzaChhcnJbMl0pO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wic2hhZG93Q29sb3JcIl0ucHVzaChhcnJbM10pO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZHhcIl0ucHVzaChhcnJbMF0pO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZHlcIl0ucHVzaChhcnJbMV0pO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wic3ByZWFkXCJdLnB1c2goYXJyWzRdKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImZhY3RvclwiXS5wdXNoKGFycls1XSk7XG4gICAgfVxuXG5cdHJldHVybiBcIlwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImxldHRlclNwYWNpbmdcIikge1xuICAgIGF0dHJzLnZhbHVlID0gKGF0dHJzLnZhbHVlLzkpICsgXCJcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJkaXZpZGVyRHJhd2FibGVcIikge1xuICAgIHByZVBlbmQgPSBcInNldF8zNDIzNzI9Y3R4LT5nZXRQYWNrYWdlTmFtZTtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF8zNjgyNDg9Z2V0X3Jlcy0+Z2V0SWRlbnRpZmllcjpzX1wiKyAgYXR0cnMudmFsdWUgK1wiLHNfZHJhd2FibGUsZ2V0XzM0MjM3MjtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF80ODIzODA9Z2V0X3Jlcy0+Z2V0RHJhd2FibGU6Z2V0XzM2ODI0ODtcIlxuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzQ4MjM4MFwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInRleHRGcm9tSHRtbFwiKSB7XG4gICAgcHJlUGVuZCA9IHBhcnNlSHRtbChoYW5kbGVTcGVjaWFsQ2hhcnMoYXR0cnMudmFsdWUpKTtcbiAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2h0bWwnO1xuICB9XG5cbiAgaWYoYXR0cnMua2V5ID09IFwiYmFja2dyb3VuZFRpbnRcIil7XG4gICAgY29sb3IgPSBhdHRycy52YWx1ZTtcbiAgICBwcmVQZW5kID0gcGFyc2VDb2xvcihjb2xvcikrJ3NldF9jb2xvcnN0YXRlPWFuZHJvaWQuY29udGVudC5yZXMuQ29sb3JTdGF0ZUxpc3QtPnZhbHVlT2Y6Z2V0X2NvbG9ySW50OycgO1xuICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfY29sb3JzdGF0ZSdcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJ0eXBlZmFjZVwiKSB7XG4gICAgcHJlUGVuZCA9IFwic2V0X2ZhY2U9dGhpcy0+Z2V0VHlwZWZhY2U7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2ZhY2UsJyArIGFwcGVuZEFyZ3MoYXR0cnMsb2JqKTtcbiAgfVxuXG4gIGlmKGF0dHJzLmtleSA9PSBcImJ1dHRvblRpbnRcIil7XG4gICAgY29sb3IgPSBhdHRycy52YWx1ZTtcbiAgICBwcmVQZW5kID0gcGFyc2VDb2xvcihjb2xvcikrJ3NldF9jb2xvcnN0YXRlPWFuZHJvaWQuY29udGVudC5yZXMuQ29sb3JTdGF0ZUxpc3QtPnZhbHVlT2Y6Z2V0X2NvbG9ySW50OycgO1xuICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfY29sb3JzdGF0ZSdcbiAgfVxuXG4gIGlmKGF0dHJzLmtleSA9PSBcImhpbnRDb2xvclwiKXtcbiAgICBjb2xvciA9IGF0dHJzLnZhbHVlO1xuICAgIHByZVBlbmQgPSBwYXJzZUNvbG9yKGNvbG9yKSsnc2V0X2NvbG9yc3RhdGU9YW5kcm9pZC5jb250ZW50LnJlcy5Db2xvclN0YXRlTGlzdC0+dmFsdWVPZjpnZXRfY29sb3JJbnQ7JyA7XG4gICAgY3VyclRyYW5zVmFsID0gJ2dldF9jb2xvcnN0YXRlJ1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImJ0bkJhY2tncm91bmRcIikge1xuICAgIGNvbG9yID0gYXR0cnMudmFsdWU7XG4gICAgcHJlUGVuZCA9ICdzZXRfbW9kZT1hbmRyb2lkLmdyYXBoaWNzLlBvcnRlckR1ZmYtPmludFRvTW9kZTppXzk7JyArICBwYXJzZUNvbG9yKGNvbG9yKTtcbiAgICBjdXJyVHJhbnNWYWwgPSAgJ2dldF9jb2xvckludCxnZXRfbW9kZSc7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwic2VsZWN0YWJsZUl0ZW1cIikge1xuICAgIGNvbG9yID0gYXR0cnMudmFsdWU7XG4gICAgcHJlUGVuZCA9ICBcInNldF9vdXR2PWFuZHJvaWQudXRpbC5UeXBlZFZhbHVlLT5uZXc7c2V0X3RoZW1lPWN0eC0+Z2V0VGhlbWU7Z2V0X3RoZW1lLT5yZXNvbHZlQXR0cmlidXRlOmlfMTY4NDM1MzQsZ2V0X291dHYsYl90cnVlO3NldF9jPWdldF9vdXR2LT5nZXRDbGFzcztzZXRfZj1nZXRfYy0+Z2V0RGVjbGFyZWRGaWVsZDpzX3Jlc291cmNlSWQ7Z2V0X2YtPnNldEFjY2Vzc2libGU6Yl90cnVlO3NldF92PWdldF9mLT5nZXQ6Z2V0X291dHY7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSAgJ2dldF92JztcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJ1cmxcIikge1xuICAgIHByZVBlbmQgPSBcInNldF9TZXR0aW5nPXRoaXMtPmdldFNldHRpbmdzO2dldF9TZXR0aW5nLT5zZXRKYXZhU2NyaXB0RW5hYmxlZDpiX3RydWU7Z2V0X1NldHRpbmctPnNldERvbVN0b3JhZ2VFbmFibGVkOmJfdHJ1ZTtcIjtcbiAgICB2YXIgY29udmVydFRvU3RyaW5nID0gXCJzZXRfMTEyNz1hbmRyb2lkLnV0aWwuQmFzZTY0LT5kZWNvZGU6c19cIiArIGJ0b2EoYXR0cnMudmFsdWUpICsgXCIsaV8wO3NldF91cmw9amF2YS5sYW5nLlN0cmluZy0+bmV3OmdldF8xMTI3O1wiXG4gICAgcHJlUGVuZCArPSBjb252ZXJ0VG9TdHJpbmc7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfdXJsXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwicGFja2FnZUljb25cIikge1xuICAgIHByZVBlbmQgPSBcInNldF9QTT1jdHgtPmdldFBhY2thZ2VNYW5hZ2VyO3NldF9BST1nZXRfUE0tPmdldEFwcGxpY2F0aW9uSW5mbzpzX1wiICsgYXR0cnMudmFsdWUgKyBcIixpXzA7c2V0XzExNzQ3PWdldF9BSS0+bG9hZEljb246Z2V0X1BNO1wiO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzExNzQ3XCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiaW1hZ2VVcmxcIikge1xuXG4gICAgaWYoaXNVUkwoYXR0cnMudmFsdWUpKSB7XG4gICAgICBpZih0eXBlb2Ygd2luZG93Ll9fUFJPWFlfRk4gPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB3aW5kb3cuX19QUk9YWV9GTiA9IHt9O1xuICAgICAgfVxuICAgICAgdmFyIGltYWdlID0gYXR0cnMudmFsdWUuc3Vic3RyKGF0dHJzLnZhbHVlLmxhc3RJbmRleE9mKCcvJykgKyAxKVxuICAgICAgdmFyIGNhbGxiYWNrID0gXCJvbkltYWdlXCIgKyBpbWFnZS5zdWJzdHIoMCwgaW1hZ2UuaW5kZXhPZignLicpKVxuXG4gICAgICB2YXIgZmlsZVByZXNlbnQgPSAodHlwZW9mIEpCcmlkZ2UuaXNGaWxlUHJlc2VudCA9PSBcImZ1bmN0aW9uXCIpICYmIEpCcmlkZ2UuaXNGaWxlUHJlc2VudChpbWFnZSk7XG4gICAgICBpZiAoIWZpbGVQcmVzZW50KSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrTWFwcGVyLm1hcChmdW5jdGlvbiAoaXNOZXcsIHVybCwgZmlsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGFsbFByb3BzLmZpbmQoYSA9PiBhLmtleSA9PT0gXCJpZFwiKTtcbiAgICAgICAgICBpZiAoIWlkKSByZXR1cm47XG4gICAgICAgICAgdmFyIHVybFNldENvbW1hbmRzID0gXCJzZXRfZGlyZWN0b3J5PWN0eC0+Z2V0RGlyOnNfanVzcGF5LGlfMDtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkRmlsZT1qYXZhLmlvLkZpbGUtPm5ldzpnZXRfZGlyZWN0b3J5LHNfXCIgKyBmaWxlTmFtZSArIFwiO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRQYXRoPWdldF9yZXNvbHZlZEZpbGUtPnRvU3RyaW5nO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfZGltYWdlPWFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuRHJhd2FibGUtPmNyZWF0ZUZyb21QYXRoOmdldF9yZXNvbHZlZFBhdGg7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9pbWdWPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZC52YWx1ZSArIFwiO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRfaW1nVi0+c2V0SW1hZ2VEcmF3YWJsZTpnZXRfZGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5kcm9pZC5ydW5JblVJKHVybFNldENvbW1hbmRzICxudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIEpCcmlkZ2UucmVuZXdGaWxlKGF0dHJzLnZhbHVlLCBpbWFnZSwgY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIGlmKEpCcmlkZ2UuZ2V0RmlsZVBhdGgpIHtcbiAgICAgICAgcHJlUGVuZCA9IFwic2V0X2RpcmVjdG9yeT1jdHgtPmdldERpcjpzX2p1c3BheSxpXzA7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZEZpbGU9amF2YS5pby5GaWxlLT5uZXc6Z2V0X2RpcmVjdG9yeSxzX1wiICsgSkJyaWRnZS5nZXRGaWxlUGF0aChpbWFnZSkgKyBcIjtcIiArXG4gICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkUGF0aD1nZXRfcmVzb2x2ZWRGaWxlLT50b1N0cmluZztcIiArXG4gICAgICAgICAgICAgICAgICAgIFwic2V0X2RpbWFnZT1hbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkRyYXdhYmxlLT5jcmVhdGVGcm9tUGF0aDpnZXRfcmVzb2x2ZWRQYXRoO1wiXG4gICAgICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X2RpbWFnZVwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcmVQZW5kID0gXCJzZXRfMzQyMzcyPWN0eC0+Z2V0UGFja2FnZU5hbWU7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfMzY4MjQ4PWdldF9yZXMtPmdldElkZW50aWZpZXI6c19cIisgIGF0dHJzLnZhbHVlICtcIixzX2RyYXdhYmxlLGdldF8zNDIzNzI7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfNDgyMzgwPWdldF9yZXMtPmdldERyYXdhYmxlOmdldF8zNjgyNDg7XCJcbiAgICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzQ4MjM4MFwiO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJkZWZhdWx0SW1hZ2VcIikge1xuICAgIHByZVBlbmQgPSBcInNldF8zNDIzNzI9Y3R4LT5nZXRQYWNrYWdlTmFtZTtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF8zNjgyNDg9Z2V0X3Jlcy0+Z2V0SWRlbnRpZmllcjpzX1wiKyAgYXR0cnMudmFsdWUgK1wiLHNfZHJhd2FibGUsZ2V0XzM0MjM3MjtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF80ODIzODA9Z2V0X3Jlcy0+Z2V0RHJhd2FibGU6Z2V0XzM2ODI0ODtcIlxuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzQ4MjM4MFwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInBsYWNlSG9sZGVyXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfMzQyMzcyPWN0eC0+Z2V0UGFja2FnZU5hbWU7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfMzY4MjQ4PWdldF9yZXMtPmdldElkZW50aWZpZXI6c19cIisgIGF0dHJzLnZhbHVlICtcIixzX2RyYXdhYmxlLGdldF8zNDIzNzI7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfNDgyMzgwPWdldF9yZXMtPmdldERyYXdhYmxlOmdldF8zNjgyNDg7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF80ODIzODBcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJkeW5hbWljVXJsXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfZGlyZWN0b3J5PWN0eC0+Z2V0RGlyOnNfanVzcGF5LGlfMDtcIiArXG4gICAgXCJzZXRfcmVzb2x2ZWROYW1lPWluLmp1c3BheS5oeXBlcnNkay5zZXJ2aWNlcy5GaWxlUHJvdmlkZXJTZXJ2aWNlLT5hcHBlbmRTZGtOYW1lQW5kVmVyc2lvbjpzX1wiICsgYXR0cnMudmFsdWUgKyBcIjtcIiArXG4gICAgXCJzZXRfcmVzb2x2ZWRGaWxlPWphdmEuaW8uRmlsZS0+bmV3OmdldF9kaXJlY3RvcnksZ2V0X3Jlc29sdmVkTmFtZTtcIiArXG4gICAgXCJzZXRfcmVzb2x2ZWRQYXRoPWdldF9yZXNvbHZlZEZpbGUtPnRvU3RyaW5nO1wiICtcbiAgICBcInNldF9kaW1hZ2U9YW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5EcmF3YWJsZS0+Y3JlYXRlRnJvbVBhdGg6Z2V0X3Jlc29sdmVkUGF0aDtcIjtcblxuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X2RpbWFnZVwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImJhY2tncm91bmREcmF3YWJsZVwiKSB7XG4gICAgcHJlUGVuZCA9IFwic2V0XzM0MjM3Mj1jdHgtPmdldFBhY2thZ2VOYW1lO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzM2ODI0OD1nZXRfcmVzLT5nZXRJZGVudGlmaWVyOnNfXCIrICBhdHRycy52YWx1ZSArXCIsc19kcmF3YWJsZSxnZXRfMzQyMzcyO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzQ4MjM4MD1nZXRfcmVzLT5nZXREcmF3YWJsZTpnZXRfMzY4MjQ4O1wiXG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfNDgyMzgwXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZm9udEZhbWlseVwiKSB7XG4gICAgYXR0cnMudmFsdWUgPSBhcHBlbmRBcmdzKGF0dHJzLG9iaik7XG4gICAgdmFsdWVzID0gYXR0cnMudmFsdWUuc3BsaXQoJywnKTtcbiAgICByZXR1cm4gXCJzZXRfZm9udEZhY2U9YW5kcm9pZC5ncmFwaGljcy5UeXBlZmFjZS0+Y3JlYXRlOlwiK3ZhbHVlc1swXStcIixcIit2YWx1ZXNbMV0rXCI7XCIrXCJ0aGlzLT5zZXRUeXBlZmFjZTpnZXRfZm9udEZhY2UsXCIrdmFsdWVzWzFdK1wiO1wiXG4gIH1cblxuICBpZihhdHRycy5rZXk9PVwiZm9udFNpemVcIikge1xuICAgIGN1cnJUcmFuc1ZhbCA9IGFwcGVuZEFyZ3MoYXR0cnMsb2JqKS5zcGxpdCgnLCcpWzBdICsgJyxmXycgKyAoKHdpbmRvdy5fX1dJRFRIKihhdHRycy52YWx1ZS5zcGxpdCgnLCcpWzFdKSoxKSkvMTAwO1xuICB9XG5cbiAgaWYoYXR0cnMua2V5PT1cImN1cnZlXCIpIHtcbiAgICBwcmVQZW5kID0gIFwic2V0X2ludGVycD1hbmRyb2lkLnZpZXcuYW5pbWF0aW9uLkRlY2VsZXJhdGVJbnRlcnBvbGF0b3ItPm5ldztcIjtcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9pbnRlcnBcIjtcbiAgfVxuXG4gIGlmKGF0dHJzLmtleT09XCJzaGltbWVyXCIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHNoaW1tZXJNb2RlID0gXCJjb20uZmFjZWJvb2suc2hpbW1lci5TaGltbWVyJENvbG9ySGlnaGxpZ2h0QnVpbGRlclwiO1xuICAgICAgdmFyIHNoaW1tZXJDbWQgPSBcInNldF9zZHJ3PWNvbS5mYWNlYm9vay5zaGltbWVyLlNoaW1tZXJEcmF3YWJsZS0+bmV3O1wiO1xuICAgICAgdmFyIHNoaW1tZXJKc29uID0gSlNPTi5wYXJzZShhdHRycy52YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhzaGltbWVySnNvbiwgc2hpbW1lckpzb24uY29udGVudHMsIGF0dHJzLCBhdHRycywgb2JqLCBiZWxvbmdzVG8sIHRyYW5zZm9ybUZuLCBhbGxQcm9wcywgdHlwZSlcbiAgICAgIC8vIGlmKHNoaW1tZXJKc29uICYmIHNoaW1tZXJKc29uLmNvbnRlbnRzKXtcblxuICAgICAgICBzaGltbWVySnNvbiA9IHNoaW1tZXJKc29uLmNvbnRlbnRzXG4gICAgICAvLyB9XG4gICAgICBpZiAoc2hpbW1lckpzb24gJiYgc2hpbW1lckpzb24uc2hpbW1lclR5cGUgPT0gXCJhbHBoYVwiKXtcbiAgICAgICAgc2hpbW1lck1vZGUgPSBcImNvbS5mYWNlYm9vay5zaGltbWVyLlNoaW1tZXIkQWxwaGFIaWdobGlnaHRCdWlsZGVyXCJcbiAgICAgICAgc2hpbW1lckNtZCArPSBcInNldF9idWlsZGVyPVwiICsgc2hpbW1lck1vZGUgKyBcIi0+bmV3O1wiXG4gICAgICAgIGlmKHNoaW1tZXJKc29uLmJhc2Upe1xuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0QmFzZUFscGhhOmZfXCIgKyBzaGltbWVySnNvbi5iYXNlICsgXCI7XCJcbiAgICAgICAgfVxuICAgICAgICBpZihzaGltbWVySnNvbi5oaWdobGlnaHQpe1xuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0SGlnaGxpZ2h0QWxwaGE6Zl9cIiArIHNoaW1tZXJKc29uLmhpZ2hsaWdodCArIFwiO1wiXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJzZXRfYnVpbGRlcj1cIiArIHNoaW1tZXJNb2RlICsgXCItPm5ldztcIlxuICAgICAgICBpZihzaGltbWVySnNvbi5iYXNlKXtcbiAgICAgICAgICBzaGltbWVyQ21kICs9IHBhcnNlQ29sb3Ioc2hpbW1lckpzb24uYmFzZSAsIFwic2V0X2Jhc2VDb2xvclwiKSArIFwiO1wiXG4gICAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRCYXNlQ29sb3I6Z2V0X2Jhc2VDb2xvcjtcIlxuICAgICAgICB9XG4gICAgICAgIGlmKHNoaW1tZXJKc29uLmhpZ2hsaWdodCl7XG4gICAgICAgICAgc2hpbW1lckNtZCArPSBwYXJzZUNvbG9yKHNoaW1tZXJKc29uLmhpZ2hsaWdodCAsIFwic2V0X2Jhc2VDb2xvclwiKSArIFwiO1wiXG4gICAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRIaWdobGlnaHRDb2xvcjpnZXRfYmFzZUNvbG9yO1wiXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoc2hpbW1lckpzb24udGlsdCl7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0VGlsdDpmX1wiICsgc2hpbW1lckpzb24udGlsdCArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5pbnRlbnNpdHkpe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldEludGVuc2l0eTpmX1wiICsgc2hpbW1lckpzb24uaW50ZW5zaXR5ICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLmRpcmVjdGlvbil7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0RGlyZWN0aW9uOmlfXCIgKyBzaGltbWVySnNvbi5kaXJlY3Rpb24gKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24uZHVyYXRpb24pe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldER1cmF0aW9uOmxfXCIgKyBzaGltbWVySnNvbi5kaXJlY3Rpb24gKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24ucmVwZWF0Q291bnQpe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldFJlcGVhdENvdW50OmlfXCIgKyBzaGltbWVySnNvbi5yZXBlYXRDb3VudCArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5yZXBlYXREZWxheSl7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0UmVwZWF0RGVsYXk6bF9cIiArIHNoaW1tZXJKc29uLnJlcGVhdERlbGF5ICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLmNsaXBUb0NoaWxkcmVuKXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRDbGlwVG9DaGlsZHJlbjpiX1wiICsgc2hpbW1lckpzb24uY2xpcFRvQ2hpbGRyZW4gKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24uc2hhcGUpe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldFNoYXBlOmlfXCIgKyBzaGltbWVySnNvbi5zaGFwZSArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5kcm9wT2ZmKXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXREcm9wb2ZmOmZfXCIgKyBzaGltbWVySnNvbi5kcm9wT2ZmICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIHNoaW1tZXJDbWQgKz0gXCJzZXRfc2hpbW1lcj1nZXRfYnVpbGRlci0+YnVpbGQ7XCJcbiAgICAgIGlmKHR5cGUgPT0gXCJzaGltbWVyRnJhbWVMYXlvdXRcIil7XG4gICAgICAgIGF0dHJzLmtleSA9IFwic2hpbW1lclZpZXdcIlxuICAgICAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9zaGltbWVyXCI7XG4gICAgICAgIG9iai5mbk5hbWUgPSBvYmouYWx0ZXJuYXRlRm5OYW1lXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X3NkcnctPnNldFNoaW1tZXI6Z2V0X3NoaW1tZXI7XCJcbiAgICAgICAgaWYoc2hpbW1lckpzb24uYWN0aXZlKXtcbiAgICAgICAgICBhZnRlckNtZCArPSBcImdldF9zZHJ3LT5zdGFydFNoaW1tZXI7XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZnRlckNtZCArPSBcImdldF9zZHJ3LT5zdG9wU2hpbW1lcjtcIlxuICAgICAgICB9XG4gICAgICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3NkcndcIjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwidW5hYmxlIHRvIHNldCBzaGltbWVyXCIpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHNoaW1tZXJDbWQpXG4gICAgcHJlUGVuZCA9ICBzaGltbWVyQ21kO1xuICB9XG5cbiAgaWYoYXR0cnMua2V5PT1cImZvY3VzXCIpIHtcbiAgICBhZnRlckNtZCA9ICBcInNldF93aW49Y3R4LT5nZXRXaW5kb3c7Z2V0X3dpbi0+c2V0U29mdElucHV0TW9kZTo1O1wiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInNoYWRvd0xheWVyXCIpIHtcbiAgICBjb2xvciA9IGF0dHJzLnZhbHVlLnNwbGl0KCcsJylbM107XG4gICAgYXJyID0gYXBwZW5kQXJncyhhdHRycyxvYmopLnNwbGl0KCcsJyk7XG4gICAgYXJyLnNwbGljZShhcnIubGVuZ3RoMSAsIDEpO1xuXG4gICAgcHJlUGVuZCA9IHBhcnNlQ29sb3IoY29sb3IpO1xuICAgIGN1cnJUcmFuc1ZhbCA9ICBhcnIuam9pbignLCcpICsgJyxnZXRfY29sb3JJbnQnXG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwidmFsdWVzXCIpIHtcbiAgICB2YXIgdmFsID0gYXR0cnMudmFsdWUuc3BsaXQoXCIsXCIpO1xuICAgIHZhciB2YWx1ZXNTdHIgPSBcIlwiLCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBlbGVtZW50cyA9IHZhbFtpXS5zcGxpdChcIjpcIik7XG4gICAgICB2YWx1ZXNTdHIgKz0gXCJnZXRfc3Bpbm5lckFycmF5LT5hZGQ6c19cIitlbGVtZW50c1swXTtcbiAgICAgIGZvcih2YXIgaiA9IDE7IGogPCBlbGVtZW50cy5sZW5ndGg7IGorKylcbiAgICAgICAgdmFsdWVzU3RyICs9IFwiXFxuXCIgKyBlbGVtZW50c1tqXTtcbiAgICAgICAgdmFsdWVzU3RyICs9IFwiO1wiO1xuICAgIH1cbiAgICBwcmVQZW5kID0gIFwic2V0X3NwaW5uZXJBcnJheT1qYXZhLnV0aWwuQXJyYXlMaXN0LT5uZXc7XCIrIHZhbHVlc1N0ciArXG4gICAgXCJzZXRfc3Bpbm5lclZhbHVlcz1nZXRfc3Bpbm5lckFycmF5LT50b0FycmF5O3NldF9zcGlubmVyQWRhcHRlcj1hbmRyb2lkLndpZGdldC5BcnJheUFkYXB0ZXItPm5ldzpjdHhfY3R4LGlfMTczNjcwNDMsZ2V0X3NwaW5uZXJWYWx1ZXM7XCI7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfc3Bpbm5lckFkYXB0ZXJcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJzdGFydFBvaW50XCIpIHtcbiAgICB2YXIgYXJnID0gSlNPTi5wYXJzZShhdHRycy52YWx1ZSk7XG4gICAgcHJlUGVuZCA9IFwidGhpcy0+c2V0U3RhcnRYOmZfXCIgKyBhcmcueCArIFwiO1wiXG4gICAgcHJlUGVuZCArPSBcInRoaXMtPnNldFN0YXJ0WTpmX1wiICsgYXJnLnkgKyBcIjtcIlxuICAgIHJldHVybiBwcmVQZW5kXG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZW5kUG9pbnRcIikge1xuICAgIHZhciBhcmcgPSBKU09OLnBhcnNlKGF0dHJzLnZhbHVlKVxuICAgIHByZVBlbmQgPSBcInRoaXMtPnNldEVuZFg6Zl9cIiArIGFyZy54ICsgXCI7XCJcbiAgICBwcmVQZW5kICs9IFwidGhpcy0+c2V0RW5kWTpmX1wiICsgYXJnLnkgKyBcIjtcIlxuICAgIHJldHVybiBwcmVQZW5kXG4gIH1cblxuICBpZiAoYmVsb25nc1RvID09IFwiVklFV1wiKVxuICBrZXlXb3JkID0gZ2xvYmFsT2JqTWFwW2JlbG9uZ3NUb10udmFsO1xuICBlbHNlXG4gIGtleVdvcmQgPSAnZ2V0XycgKyBnbG9iYWxPYmpNYXBbYmVsb25nc1RvXS52YWw7XG5cbiAgaWYgKHRyYW5zZm9ybUZuIHx8IGF0dHJzLmtleSA9PSBcImR1cmF0aW9uXCIgfHwgYXR0cnMua2V5ID09IFwiZGVsYXlcIiB8fCBhdHRycy5rZXkgPT0gXCJjdXJ2ZVwiKVxuICBfY21kID0ga2V5V29yZCArICAnLT4nICsgKCh0eXBlb2Ygb2JqLmZuTmFtZSA9PSBcInVuZGVmaW5lZFwiKT9vYmoudmFyTmFtZTpvYmouZm5OYW1lKTtcbiAgZWxzZVxuICBfY21kID0ga2V5V29yZCArICctPicgKyAgIGF0dHJzLmtleTtcblxuICBpZiAob2JqLnZhbHVlcyAmJiBvYmoudmFsdWVzLmxlbmd0aClcbiAgX2NtZCArPSAnOic7XG5cbiAgaWYgKCFwcmVQZW5kICYmICFjdXJyVHJhbnNWYWwpXG4gIF9jbWQgKz0gIGFwcGVuZEFyZ3MoYXR0cnMsIG9iaikgKyAnOydcbiAgZWxzZVxuICBfY21kICs9IGN1cnJUcmFuc1ZhbCArICc7JztcblxuICAvLyBmb3IgdGVzdGluZ1xuICBpZiAodHlwZW9mIGZpbmFsQ21kICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY29uc29sZS5sb2coYmVmb3JlQ21kICArIHByZVBlbmQgKyBfY21kICsgYWZ0ZXJDbWQpO1xuICAgIHJldHVybiBmaW5hbENtZDtcbiAgfVxuICBpZih0eXBlID09IFwic2hpbW1lckZyYW1lTGF5b3V0XCIpe1xuICAgIGNvbnNvbGUubG9nKGJlZm9yZUNtZCAgKyBwcmVQZW5kICsgX2NtZCArIGFmdGVyQ21kKVxuICB9XG4gIHJldHVybiBiZWZvcmVDbWQgICsgcHJlUGVuZCArIF9jbWQgKyBhZnRlckNtZFxufVxuXG5mdW5jdGlvbiBwYXJzZUF0dHJzKGF0dHJzLCBiZWxvbmdzVG8sIHRyYW5zZm9ybUZuLCB0eXBlKSB7XG4gIHZhciBvYmo7XG4gIHZhciByZXRWYWw7XG4gIHZhciBjbWQgPSAnJztcbiAgdmFyIF9jbWQ7XG5cbiAgZm9yICh2YXIgaSA9MCA7aTxhdHRycy5sZW5ndGg7IGkrKykge1xuICAgIG9iaiA9IG1hcFBhcmFtc1thdHRyc1tpXS5rZXldO1xuICAgIGlmIChvYmopIHtcbiAgICAgIGNtZCArPSBtYXNoVGhpcyhhdHRyc1tpXSwgb2JqLCBiZWxvbmdzVG8sIHRyYW5zZm9ybUZuLCBhdHRycywgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGJlbG9uZ3NUbyA9PSBcIlZJRVdcIilcbiAgcmV0dXJuIGNtZDtcblxuICByZXR1cm4gcHJlcGFyZUN0cihhdHRycywgYmVsb25nc1RvKSArICc7JyArIGNtZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VHcm91cHModHlwZSwgZ3JvdXBzLCBjb25maWcpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhncm91cHMpO1xuICB2YXIgY3RyO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgIChrZXlzW2ldID09IFwiRk9SRUdST1VORFwiKSB7XG4gICAgICBpZiAoIWdsb2JhbE9iak1hcFtrZXlzW2ldXSkge1xuICAgICAgICBpZiAoZ2V0U2V0VHlwZSA9PSBcInNldFwiKSB7XG4gICAgICAgICAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dID0ge2N0cjogXCJhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUtPm5ld1wiLCAgdmFsOiAga2V5c1tpXSB9O1xuICAgICAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcFtrZXlzW2ldXS52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIHRydWUsIHR5cGUpXG4gICAgICAgICAgICArICd0aGlzLT4nICsgXCJzZXRGb3JlZ3JvdW5kXCIgKyAnOicgKyAnZ2V0XycgKyAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dLnZhbCArICc7J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdsb2JhbE9iak1hcFtrZXlzW2ldXSA9IHtjdHI6ICdnZXRfdmlldy0+Z2V0Rm9yZWdyb3VuZCcsICB2YWw6ICBrZXlzW2ldIH07XG4gICAgICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgdHJ1ZSwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleXNbaV0gPT0gXCJMQVlPVVRfVFJBTlNJVElPTlwiKSB7XG4gICAgICAgIGdsb2JhbE9iak1hcC5MQVlPVVRfVFJBTlNJVElPTiA9IHtjdHI6ICdhbmRyb2lkLmFuaW1hdGlvbi5MYXlvdXRUcmFuc2l0aW9uLT5uZXcnLCB2YWw6IFwiTEFZT1VUX1RSQU5TSVRJT05cIn07XG4gICAgICAgIGNvbW1hbmQgKz0gICdzZXRfJyArICBnbG9iYWxPYmpNYXAuTEFZT1VUX1RSQU5TSVRJT04udmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzLlBBUkFNUywgJ0xBWU9VVF9UUkFOU0lUSU9OJywgdHJ1ZSwgdHlwZSlcbiAgICAgICAgICAgICArICd0aGlzLT4nICsgXCJzZXRMYXlvdXRUcmFuc2l0aW9uXCIgKyAnOmdldF8nICArIGdsb2JhbE9iak1hcC5MQVlPVVRfVFJBTlNJVElPTi52YWwgKyAnOyc7XG4gICAgfSBlbHNlIGlmIChrZXlzW2ldID09IFwiVklFV1wiKSB7XG4gICAgICBpZiAoIWdsb2JhbE9iak1hcC5WSUVXKSB7XG4gICAgICAgIGlmIChnZXRTZXRUeXBlID09IFwic2V0XCIpXG4gICAgICAgIGdsb2JhbE9iak1hcC5WSUVXID0ge2N0cjogXCJ0aGlzXCIsIHZhbDogXCJ0aGlzXCJ9O1xuICAgICAgICBlbHNlXG4gICAgICAgIGdsb2JhbE9iak1hcC5WSUVXID0ge2N0cjogXCJnZXRfdmlld1wiLCB2YWw6IFwiZ2V0X3ZpZXdcIn07XG4gICAgICB9XG5cbiAgICAgIGNvbW1hbmQgKz0gIHBhcnNlQXR0cnMoZ3JvdXBzLlZJRVcsICdWSUVXJywgdHJ1ZSwgdHlwZSlcblxuICAgIH0gZWxzZSBpZiAoa2V5c1tpXSA9PSBcIlBBUkFNU1wiKSB7XG4gICAgICBpZiAoZ2V0U2V0VHlwZSA9PSBcInNldFwiKSB7XG4gICAgICAgIGlmICghZ2xvYmFsT2JqTWFwLlBBUkFNUykge1xuICAgICAgICAgIGN0ciA9IGNvbmZpZy5yb290P2dldEN0cih0eXBlKTonUEFSQU1fQ1RSX0hPTERFUic7XG4gICAgICAgICAgZ2xvYmFsT2JqTWFwLlBBUkFNUyA9IHtjdHI6IGN0ciwgdmFsOiBcIlBBUkFNU1wiIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21tYW5kICs9ICAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwLlBBUkFNUy52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHMuUEFSQU1TLCAnUEFSQU1TJywgdHJ1ZSwgdHlwZSlcbiAgICAgICAgICAgICArICd0aGlzLT4nICsgb2JqTWFwLlBBUkFNUy52aWV3TWV0aG9kLnNwbGl0KCcsJylbMF0gKyAnOmdldF8nICArIGdsb2JhbE9iak1hcC5QQVJBTVMudmFsICsgJzsnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFnbG9iYWxPYmpNYXAuUEFSQU1TKSB7XG4gICAgICAgICAgY3RyID0gXCJnZXRfdmlldy0+Z2V0TGF5b3V0UGFyYW1zXCI7XG4gICAgICAgICAgZ2xvYmFsT2JqTWFwLlBBUkFNUyA9IHtjdHI6IGN0ciwgdmFsOiBcIlBBUkFNU1wiIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXAuUEFSQU1TLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgdHJ1ZSwgdHlwZSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKGtleXNbaV0gPT0gXCJNVVRBVEVCR1wiKSB7XG4gICAgICBpZiAoIWdsb2JhbE9iak1hcC5NVVRBVEVCRykge1xuICAgICAgICBnbG9iYWxPYmpNYXAuTVVUQVRFQkcgPSB7Y3RyOiAndGhpcy0+Z2V0QmFja2dyb3VuZCcsIHZhbDogXCJNVVRBVEVCR1wifTtcbiAgICAgIH1cblxuICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwLk1VVEFURUJHLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgdHJ1ZSwgdHlwZSk7XG4gICAgfSBlbHNlIGlmIChrZXlzW2ldID09IFwiQU5JTUFUSU9OXCIpIHtcbiAgICAgIGlmICghZ2xvYmFsT2JqTWFwLkFOSU1BVElPTikge1xuICAgICAgICBpZiAoZ2V0U2V0VHlwZSA9PSBcInNldFwiKVxuICAgICAgICBnbG9iYWxPYmpNYXAuQU5JTUFUSU9OID0ge2N0cjogJ3RoaXMtPmFuaW1hdGUnLCB2YWw6IFwiQU5JTUFUSU9OXCJ9O1xuICAgICAgICBlbHNlXG4gICAgICAgIGdsb2JhbE9iak1hcC5BTklNQVRJT04gPSB7Y3RyOiAnZ2V0X3ZpZXctPmFuaW1hdGUnLCB2YWw6IFwiQU5JTUFUSU9OXCJ9O1xuICAgICAgfVxuXG4gICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXAuQU5JTUFUSU9OLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgZmFsc2UsIHR5cGUpO1xuXG4gICAgfSAgZWxzZSB7XG4gICAgICAvLyBXb3JrcyBvbmx5IGZvciBkcmF3YWJsZVxuICAgICAgaWYgKCFnbG9iYWxPYmpNYXBba2V5c1tpXV0pIHtcbiAgICAgICAgaWYgKGdldFNldFR5cGUgPT0gXCJzZXRcIikge1xuICAgICAgICAgIGdsb2JhbE9iak1hcFtrZXlzW2ldXSA9IHtjdHI6IG9iak1hcFtrZXlzW2ldXS5jdHIsICB2YWw6ICBrZXlzW2ldIH07XG4gICAgICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgdHJ1ZSwgdHlwZSlcbiAgICAgICAgICAgICsgJ3RoaXMtPicgKyBvYmpNYXBba2V5c1tpXV0udmlld01ldGhvZC5zcGxpdCgnLCcpWzBdICsgJzonICsgJ2dldF8nICsgIGdsb2JhbE9iak1hcFtrZXlzW2ldXS52YWwgKyAnOydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnbG9iYWxPYmpNYXBba2V5c1tpXV0gPSB7Y3RyOiAnZ2V0X3ZpZXctPmdldEJhY2tncm91bmQnLCAgdmFsOiAga2V5c1tpXSB9O1xuICAgICAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcFtrZXlzW2ldXS52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIHRydWUsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb21tYW5kLnN1YnN0cmluZygwLCBjb21tYW5kLmxlbmd0aCAtIDEpO1xufVxuXG52YXIgZmxhdHRlbk9iamVjdCA9IGZ1bmN0aW9uKG9iKSB7XG4gIHZhciB0b1JldHVybiA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iKSB7XG4gICAgaWYgKCFvYi5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG4gICAgaWYgKCh0eXBlb2Ygb2JbaV0pID09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgZmxhdE9iamVjdCA9IGZsYXR0ZW5PYmplY3Qob2JbaV0pO1xuICAgICAgZm9yICh2YXIgeCBpbiBmbGF0T2JqZWN0KSB7XG4gICAgICAgIGlmICghZmxhdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSh4KSkgY29udGludWU7XG4gICAgICAgIHRvUmV0dXJuW3hdID0gZmxhdE9iamVjdFt4XTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdG9SZXR1cm5baV0gPSBvYltpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvUmV0dXJuO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0eXBlLCBjb25maWcsIF9nZXRTZXRUeXBlKSB7XG4gIGNvbmZpZyA9IGZsYXR0ZW5PYmplY3QoY29uZmlnKTtcbiAgZ2V0U2V0VHlwZSA9IF9nZXRTZXRUeXBlO1xuICBlbGVtZW50VHlwZSA9IHR5cGU7XG5cbiAgdmFyIGdyb3VwcyA9ICBnZXRDb25maWdHcm91cHMoY29uZmlnKTtcblxuICBjb21tYW5kID0gJyc7XG4gIGdsb2JhbE9iak1hcCA9IHt9O1xuXG4gIHZhciBmbGFnID0gMDtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuICBmb3IgKHZhciBpPTA7IGk8a2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChrZXlzW2ldID09ICdydW5JblVJJykgIHtcbiAgICAgIGZsYWcgID0gMTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmICghZmxhZykge1xuICAgIGNvbmZpZy5ydW5JblVJID0gcGFyc2VHcm91cHModHlwZSwgZ3JvdXBzLCBjb25maWcpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuICogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4gKlxuICogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4gKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuICogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuICogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiAqIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuICogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4gKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuICogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5tYXAgPSAoZm4pID0+IHtcblx0aWYodHlwZW9mIHdpbmRvdy5fX0ZOX0lOREVYICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19GTl9JTkRFWCAhPT0gbnVsbCkge1xuXHRcdHZhciBwcm94eUZuTmFtZSA9ICdGJyArIHdpbmRvdy5fX0ZOX0lOREVYO1xuXHRcdGlmICh3aW5kb3cuX19wYXlsb2FkICYmIHdpbmRvdy5fX3BheWxvYWQuc2VydmljZSl7XG5cdFx0XHRwcm94eUZuTmFtZSA9IHdpbmRvdy5fX3BheWxvYWQuc2VydmljZSArIFwiX1wiICsgcHJveHlGbk5hbWU7XG5cdFx0fVxuXHRcdHdpbmRvdy5fX1BST1hZX0ZOW3Byb3h5Rm5OYW1lXSA9IGZuO1xuXHQgIFx0d2luZG93Ll9fRk5fSU5ERVgrKztcblx0XHRyZXR1cm4gcHJveHlGbk5hbWU7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGluaXRpYWxpc2Ugd2luZG93Ll9fRk5fSU5ERVggPSAwIGluIGluZGV4LmpzIG9mIHlvdXIgcHJvamVjdC5cIik7XG5cdH1cbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGNhbGxiYWNrTWFwcGVyIDogcmVxdWlyZShcIi4vY2FsbGJhY2tNYXBwZXJcIilcbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGFuZHJvaWQgOiByZXF1aXJlKFwiLi9hbmRyb2lkXCIpLFxuXHRpb3MgOiByZXF1aXJlKFwiLi9pb3NcIiksXG5cdHdlYiA6IHJlcXVpcmUoXCIuL3dlYlwiKSxcblx0Y29tbW9uIDogcmVxdWlyZShcIi4vY29tbW9uXCIpXG59IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFtcblx0XCIjODNGQ0U4XCIsXG5cdFwiIzg5RjZFNFwiLFxuXHRcIiM4RkVGREZcIixcblx0XCIjOTZFOURCXCIsXG5cdFwiIzlDRTNEN1wiLFxuXHRcIiNGRUU5RTZcIixcblx0XCIjRkVGN0U3XCIsXG5cdFwiI0ZGRkFFNVwiLFxuXHRcIiNGNUZBRUJcIixcblx0XCIjRTVGRkY1XCJcbl1cblxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZsYXR0ZW5PYmplY3Qob2IpIHtcbiAgdmFyIHRvUmV0dXJuID0ge307XG4gIGZvciAodmFyIGkgaW4gb2IpIHtcbiAgICBpZiAoIW9iLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcbiAgICBpZiAoKHR5cGVvZiBvYltpXSkgPT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBmbGF0T2JqZWN0ID0gZmxhdHRlbk9iamVjdChvYltpXSk7XG4gICAgICBmb3IgKHZhciB4IGluIGZsYXRPYmplY3QpIHtcbiAgICAgICAgaWYgKCFmbGF0T2JqZWN0Lmhhc093blByb3BlcnR5KHgpKSBjb250aW51ZTtcbiAgICAgICAgdG9SZXR1cm5beF0gPSBmbGF0T2JqZWN0W3hdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b1JldHVybltpXSA9IG9iW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0b1JldHVybjtcbn07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0cGFyc2VQYXJhbXMgOiByZXF1aXJlKFwiLi9wYXJzZVBhcmFtc1wiKSxcbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4vY29sb3JzXCI7XG5pbXBvcnQgZmxhdHRlbk9iamVjdCBmcm9tIFwiLi9mbGF0dGVuT2JqZWN0XCI7XG5cbnZhciBjYWxsYmFja01hcHBlciAgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NhbGxiYWNrTWFwcGVyXCIpXG5cbmxldCBnZXRTZXRUeXBlID0gMTtcblxuLyoqXG4gKiBDaGVja3MgdGhlIG5hdGl2ZSBzZXQgd2luZG93Ll9fREVWSUNFX0RFVEFJTFMubXlzdGlxdWVfdmVyc2lvblxuICogYW5kIGNoZWNrcyBpZiBteXN0aXF1ZSB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcGFzc2VkIHZlcnNpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiBudW1iZXIgdG8gYmUgY2hlY2tlZCBhZ2FpbnN0LiBJZiBwYXNzZWQgZW1wdHkgcmV0dXJucyB0cnVlLlxuICogQHJldHVybiB7Ym9vbH0gdHJ1ZSBpZiBteXN0aXF1ZSB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBwYXNzZWQgdmVyc2lvbiBlbHNlIGZhbHNlLiBEZWZhdWx0cyB0byB0cnVlLlxuICovXG5mdW5jdGlvbiBpc015c3RpcXVlVmVyc2lvbkdyZWF0ZXJUaGFuKHZlcnNpb24pIHtcbiAgaWYgKHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTICYmIHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLm15c3RpcXVlX3ZlcnNpb24pIHtcbiAgICB2YXIgc2RrVmVyc2lvbiA9IHBhcnNlRmxvYXQod2luZG93Ll9fREVWSUNFX0RFVEFJTFMubXlzdGlxdWVfdmVyc2lvbik7XG4gICAgaWYgKHNka1ZlcnNpb24+MCkge1xuICAgICAgICByZXR1cm4gc2RrVmVyc2lvbj5wYXJzZUZsb2F0KHZlcnNpb24pP3RydWU6ZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY29udmVydENvbG9yVG9SZ2JhKGNvbG9yKXtcbiAgY29sb3IgPSByV1MoY1MoY29sb3IpKTtcblxuICB2YXIgdmFsdWVzO1xuICB2YXIgYWxwaGEgPSBcIjEuMDBcIjtcblxuICBpZiAoY29sb3IubGVuZ3RoID49IDgpIHtcbiAgICBhbHBoYSA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAzKSwgMTYpO1xuICAgIGFscGhhID0gKGFscGhhIC8gMjU1KS50b0ZpeGVkKDIpO1xuICAgIGNvbG9yID0gY29sb3Iuc3Vic3RyaW5nKDMsIDkpO1xuICB9IGVsc2Uge1xuICAgIGNvbG9yID0gY29sb3Iuc3Vic3RyaW5nKDEsIGNvbG9yLmxlbmd0aCk7XG4gIH1cblxuICBjb2xvciA9IGNvbnZlcnRIZXhUb1JnYihyV1MoY29sb3IpKTtcbiAgdmFsdWVzID0gY29sb3Iuc3BsaXQoJywnKTtcblxuICByZXR1cm4ge1xuICAgIHI6IHJXUyh2YWx1ZXNbMF0pLFxuICAgIGc6IHJXUyh2YWx1ZXNbMV0pLFxuICAgIGI6IHJXUyh2YWx1ZXNbMl0pLFxuICAgIGE6IGFscGhhXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRIZXhUb1JnYihoZXgpIHtcbiAgdmFyIHIgPSAocGFyc2VJbnQoaGV4LnN1YnN0cmluZygwLDIpLCAxNikvMjU1KS50b0ZpeGVkKDIpO1xuICB2YXIgZyA9IChwYXJzZUludChoZXguc3Vic3RyaW5nKDIsNCksIDE2KS8yNTUpLnRvRml4ZWQoMik7XG4gIHZhciBiID0gKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoNCw2KSwgMTYpLzI1NSkudG9GaXhlZCgyKTtcblxuICByZXR1cm4gciArIFwiLFwiICsgZyArIFwiLFwiICsgYjtcbn1cblxuZnVuY3Rpb24gY1ModmFsdWUpIHtcbiAgcmV0dXJuICB2YWx1ZT92YWx1ZSArICcnOiBcIlwiO1xufVxuXG5mdW5jdGlvbiByV1ModmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyAvZywnJyk7XG59XG5cbmZ1bmN0aW9uIHNlbGZfc2l6ZUZyb21EaWN0aW9uYXJ5KHdpZHRoLCBoZWlnaHQpIHtcbiAgd2luZG93Ll9fU0laRV9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJzaXplXCIgKyB3aW5kb3cuX19TSVpFX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzaXplRnJvbURpY3Rpb25hcnk6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XG4gICAgICAgIFwid2lkdGhcIjogd2lkdGgsXG4gICAgICAgIFwiaGVpZ2h0XCI6IGhlaWdodCxcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlbGZfc2V0Q3Vyc29yUG9zaXRpb24oaWQsIHBvc2l0aW9uKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0Q3Vyc29yUG9zaXRpb246XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcbiAgICAgIFwidmlld0lkXCI6IGlkLFxuICAgICAgXCJwb3NpdGlvblwiOiBwb3NpdGlvblxuICAgIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0Q29udGVudFNpemUoKSB7XG4gIHJldHVybiAge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldENvbnRlbnRTaXplOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBcInNpemVcIiArIHdpbmRvdy5fX1NJWkVfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCIsIFwidHlwZVwiOiBcInNpemVcIn1cbiAgICBdXG4gIH07XG59XG5cbmZ1bmN0aW9uIFVJQ29sb3JfY29sb3JXaXRoUkdCQShyLGcsYixhKSB7XG4gIHdpbmRvdy5fX0NPTE9SX0lOREVYKys7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJjb2xvclwiICsgd2luZG93Ll9fQ09MT1JfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIlVJQ29sb3JcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImNvbG9yV2l0aFJlZDpncmVlbjpibHVlOmFscGhhOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiByICwgXCJ0eXBlXCI6IFwiZlwifSxcbiAgICAgIHtcIm5hbWVcIjogZyAsIFwidHlwZVwiOiBcImZcIn0sXG4gICAgICB7XCJuYW1lXCI6IGIgLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgICAge1wibmFtZVwiOiBhICwgXCJ0eXBlXCI6IFwiZlwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3Bpdm90WCh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFBpdm90WDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogdmFsdWUrXCJcIiwgXCJ0eXBlXCI6IFwic1wifSxcbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19waXZvdFkodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRQaXZvdFk6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHZhbHVlK1wiXCIsIFwidHlwZVwiOiBcInNcIn0sXG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGZfYW5pbWF0ZV90cmFuc2xhdGlvbihvYmosIHByb3BzKSB7XG4gIG9iai52YWx1ZXNbMF0ucHJvcGVydGllcyA9IFtcbiAgICAgIHtcbiAgICAgICAgXCJrZXlcIjogXCJmcmFtZVwiLFxuICAgICAgICBcInZhbHVlc1wiOiB7XG4gICAgICAgICAgXCJ4XCI6IHByb3BzLngsXG4gICAgICAgICAgXCJ5XCI6IHByb3BzLnksXG4gICAgICAgICAgXCJ3aWR0aFwiOiBwcm9wcy53LFxuICAgICAgICAgIFwiaGVpZ2h0XCI6IHByb3BzLmgsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gIF1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBzZWxmX2FuaW1hdGVfcm90YXRpb24ob2JqLCBwcm9wcykge1xuICBvYmoudmFsdWVzWzBdLnByb3BlcnRpZXMgPSBbXG4gICAge1xuICAgICAgXCJrZXlcIjogXCJhbmdsZVwiLFxuICAgICAgXCJ2YWx1ZXNcIjoge1xuXG4gICAgICB9XG4gICAgfSxcbiAgXVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VHJhbnNsYXRpb25aKHBhcmFtcykge1xuICAgIHJldHVybiB7XG4gICAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICAgIFwibWV0aG9kTmFtZVwiOiBcInRyYW5zbGF0aW9uWjpcIixcbiAgICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBwYXJhbXMsIHR5cGU6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlbGZfYW5pbWF0ZShwcm9wcykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiYW5pbWF0ZTpcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwianNvblwiOiBwcm9wcy5qc29uLFxuICAgICAgICBcInZpZXdUYWdcIjogcHJvcHMuaWQsXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEJhY2tncm91bmRDb2xvcigpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRCYWNrZ3JvdW5kQ29sb3I6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwiY29sb3JcIiArIHdpbmRvdy5fX0NPTE9SX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwifSxcbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zdXBlcnZpZXcoKSB7XG4gIHZhciBjdXJyVmlld0luZGV4ID0gd2luZG93Ll9fVklFV19JTkRFWDtcblxuICB3aW5kb3cuX19WSUVXX0lOREVYICsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyBjdXJyVmlld0luZGV4LFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic3VwZXJ2aWV3XCIsXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zY3JvbGxUb0luZGV4KGluZGV4KXtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzY3JvbGxUb0luZGV4OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBpbmRleCwgdHlwZTogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIFVJVmlld19ib3VuZHMoKSB7XG4gIHdpbmRvdy5fX1JFQ1RfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwicmVjdFwiICsgd2luZG93Ll9fUkVDVF9JTkRFWCxcbiAgICBcImZyb21TdG9yZVwiOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6XCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImJvdW5kc1wiLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0RW5hYmxlZChtb2RlKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0RW5hYmxlZDpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcImlcIn0sXG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX3Njcm9sbEVuYWJsZWQoc3RhdHVzKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQVGFibGVWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0U2Nyb2xsRW5hYmxlZDpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogc3RhdHVzLCBcInR5cGVcIjogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRBdXRvQ29ycmVjdGlvblR5cGUobW9kZSkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldEF1dG9jb3JyZWN0aW9uVHlwZTpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcImlcIn0sXG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEtleWJvYXJkVHlwZShtb2RlKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0S2V5Ym9hcmRUeXBlOlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogbW9kZSwgXCJ0eXBlXCI6IFwiaVwifSxcbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0QXV0b0NhcGl0YWxpemF0aW9uVHlwZShtb2RlKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0QXV0b2NhcGl0YWxpemF0aW9uVHlwZXM6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRTdGF0dXNCYXJTdHlsZShtb2RlKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldFN0YXR1c0JhclN0eWxlOlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogbW9kZSwgXCJ0eXBlXCI6IFwic1wifSxcbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfYmVjb21lRmlyc3RSZXNwb25kZXIobW9kZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcImZvY3VzOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0T25JdGVtQ2xpY2soY2FsbGJhY2spIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRPbkl0ZW1DbGljazpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHsgXCJuYW1lXCI6IGNhbGxiYWNrTWFwcGVyLm1hcChjYWxsYmFjayksIFwidHlwZVwiOiBcInNcIiB9LFxuICAgIF1cbiAgfVxuIH1cblxuZnVuY3Rpb24gdGhpc19zZXRPbkZvY3VzQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRPbkZvY3VzQ2FsbGJhY2s6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7IFwibmFtZVwiOiBjYWxsYmFja01hcHBlci5tYXAoY2FsbGJhY2spLCBcInR5cGVcIjogXCJzXCIgfSxcbiAgICBdXG4gIH1cbiB9XG5cbmZ1bmN0aW9uIHRoaXNfc2V0T25NZXJjaGFudFZpZXdIZWlnaHRDaGFuZ2VDYWxsYmFjayhjYWxsYmFjaykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE9uTWVyY2hhbnRWaWV3SGVpZ2h0Q2hhbmdlOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgeyBcIm5hbWVcIjogY2FsbGJhY2tNYXBwZXIubWFwKGNhbGxiYWNrKSwgXCJ0eXBlXCI6IFwic1wiIH0sXG4gICAgXVxuICB9XG4gfVxuXG5mdW5jdGlvbiB0aGlzX3NldE9uKGVuYWJsZWQpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRPbjphbmltYXRlZDpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IGVuYWJsZWQsIFwidHlwZVwiOiBcImlcIn0sXG4gICAgIHtcIm5hbWVcIjogXCIxXCIsIFwidHlwZVwiOiBcImlcIn1cbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2hvd1ZlcnRpY2FsU2Nyb2xsQmFyKGVuYWJsZWQpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRTaG93c1ZlcnRpY2FsU2Nyb2xsSW5kaWNhdG9yOlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogZW5hYmxlZCwgXCJ0eXBlXCI6IFwiaVwifVxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRTZWN1cmVUZXh0RW50cnkoZW5hYmxlZCkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldFNlY3VyZVRleHRFbnRyeTpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IGVuYWJsZWQsIFwidHlwZVwiOiBcImlcIn0sXG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiBVSUltYWdlX2ltYWdlTmFtZWQoaW1hZ2UpIHtcbiAgd2luZG93Ll9fSU1BR0VfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiaW1hZ2VcIiArIHdpbmRvdy5fX0lNQUdFX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJpbWFnZU5hbWVkOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBpbWFnZSwgXCJ0eXBlXCI6IFwic1wifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEltYWdlKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0SW1hZ2U6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwiaW1hZ2VcIiArIHdpbmRvdy5fX0lNQUdFX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxmX3JlY3RGcm9tRGljdGlvbmFyeSh4LHksdyxoKSB7XG4gIHdpbmRvdy5fX1JFQ1RfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwicmVjdFwiICsgd2luZG93Ll9fUkVDVF9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwicmVjdEZyb21EaWN0aW9uYXJ5OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1xuICAgICAgICBcInhcIjogeCxcbiAgICAgICAgXCJ5XCI6IHksXG4gICAgICAgIFwid2lkdGhcIjogdyxcbiAgICAgICAgXCJoZWlnaHRcIjogaCxcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc191cGRhdGVMYXlvdXRQYXJhbXMoY29uZmlnKSB7XG4gIHZhciBkYXRhID0ge1xuICAgIFwid2lkdGhcIjogY29uZmlnLndpZHRoLFxuICAgIFwiaGVpZ2h0XCI6IGNvbmZpZy5oZWlnaHQsXG4gICAgXCJtYXJnaW5cIjogY29uZmlnLm1hcmdpbixcbiAgICBcInBhZGRpbmdcIjogY29uZmlnLnBhZGRpbmcsXG4gICAgXCJ3ZWlnaHRcIjogY29uZmlnLndlaWdodCxcbiAgICBcImdyYXZpdHlcIjogY29uZmlnLmdyYXZpdHksXG4gICAgXCJ2aXNpYmlsaXR5XCI6IGNvbmZpZy52aXNpYmlsaXR5LFxuICAgIFwib3JpZW50YXRpb25cIjogY29uZmlnLm9yaWVudGF0aW9uLFxuICAgIFwiYWxpZ25tZW50X3J1bGVzXCIgOiBjb25maWcuYWxpZ25tZW50X3J1bGVzXG4gICAgfVxuICBpZihkYXRhLmFsaWdubWVudF9ydWxlcyAmJiBkYXRhLmFsaWdubWVudF9ydWxlcy5sZW5ndGggPT0gMCl7XG4gICAgZGVsZXRlIGRhdGEuYWxpZ25tZW50X3J1bGVzO1xuICB9XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJ0aGlzXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwidXBkYXRlTGF5b3V0UGFyYW1zOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XG4gICAgICAgIFwibmFtZVwiOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgXCJ0eXBlXCI6ICdzJ1xuICAgIH1dXG4gIH07XG59XG5cblxuZnVuY3Rpb24gdGhpc19zZXRQYWRkaW5nKHBhZGRpbmcpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiTUpQVmlld0FMXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRQYWRkaW5nTGVmdDpUb3A6UmlnaHQ6Qm90dG9tOlwiLFxuICAgIFwidmFsdWVzXCI6IHBhZGRpbmcuc3BsaXQoJywnKS5tYXAobWFrZVVuaXQpXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRNYXJnaW4obWFyZ2luKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIk1KUFZpZXdBTFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TWFyZ2luTGVmdDpUb3A6UmlnaHQ6Qm90dG9tOlwiLFxuICAgIFwidmFsdWVzXCI6IG1hcmdpbi5zcGxpdCgnLCcpLm1hcChtYWtlVW5pdClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlVW5pdCAodixpLGFycikge1xuICByZXR1cm4ge25hbWUgOiB2KycnLCB0eXBlIDogJ2YnfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEhlaWdodChoZWlnaHQpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiTUpQVmlld0FMXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRIZWlnaHQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IGhlaWdodCArJycsIFwidHlwZVwiOiAnaSd9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0V2lkdGgod2lkdGgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiTUpQVmlld0FMXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRXaWR0aDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogd2lkdGggKycnLCBcInR5cGVcIjogJ2knfVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEZyYW1lKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEZyYW1lOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBcInJlY3RcIiArIHdpbmRvdy5fX1JFQ1RfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCIsIFwidHlwZVwiOiBcInJlY3RcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZl9hbGlnblRvUGFyZW50KHR5cGUsIHZhbHVlcykge1xuICB3aW5kb3cuX19QT0lOVF9JTkRFWCsrO1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwicG9pbnRcIiArIHdpbmRvdy5fX1BPSU5UX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJhbGlnblRvUGFyZW50OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogdHlwZSxcbiAgICAgICAgXCJ4XCI6IHZhbHVlcy54LFxuICAgICAgICBcInlcIjogdmFsdWVzLnksXG4gICAgICAgIFwieU9mZnNldFwiOiB2YWx1ZXMueU9mZnNldCxcbiAgICAgICAgXCJ4T2Zmc2V0XCI6IHZhbHVlcy54T2Zmc2V0LFxuICAgICAgfVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldENlbnRlcigpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRDZW50ZXI6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICAgICAge1wibmFtZVwiOiBcInBvaW50XCIgKyB3aW5kb3cuX19QT0lOVF9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIiwgIFwidHlwZVwiOiBcInBvaW50XCJ9XG4gICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFRleHQodGV4dCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFRleHQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICAgICAge1wibmFtZVwiOiBlbmNvZGVVUkkodGV4dCksIFwidHlwZVwiOiBcInNcIn1cbiAgICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0UmVndWxhckV4cHJlc3Npb24odGV4dCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRSZWd1bGFyRXhwcmVzc2lvbjpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgICAgICB7XCJuYW1lXCI6IHRleHQsIFwidHlwZVwiOiBcInNcIn1cbiAgICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEVuY29kZWREYXRhKHRleHQpIHtcbiAgdmFyIGVuY29kZWRTdHJpbmcgPSB0ZXh0O1xuICBpZiAoaXNNeXN0aXF1ZVZlcnNpb25HcmVhdGVyVGhhbihcIjFcIikpIHtcbiAgICBlbmNvZGVkU3RyaW5nID0gYnRvYShlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9IGVsc2UgaWYgKGlzTXlzdGlxdWVWZXJzaW9uR3JlYXRlclRoYW4oXCIwXCIpKSB7XG4gICAgZW5jb2RlZFN0cmluZyA9IGJ0b2EodGV4dC5yZXBsYWNlKC9bXlxceDAwLVxceDdGXS9nLCBcIlwiKSk7XG4gIH1cbiAgcmV0dXJuIGVuY29kZWRTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0SFRNTFRleHQodGV4dCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEh0bWxUZXh0OlwiLFxuICAgIFwidmFsdWVzXCI6IFtcbiAgICAgIHsgXCJuYW1lXCI6IGdldEVuY29kZWREYXRhKHRleHQpXG4gICAgICAsIFwidHlwZVwiOiBcInNcIlxuICAgICAgfVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFBsYWNlaG9sZGVyKHRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRQbGFjZWhvbGRlcjpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgICAgICB7XCJuYW1lXCI6IHRleHQsIFwidHlwZVwiOiBcInNcIn1cbiAgICAgXVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldFBsYWNlaG9sZGVyUHJvcGVydGllcyhkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQVGV4dFZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRQbGFjZWhvbGRlclByb3BlcnRpZXM6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcIm5hbWVcIjogZGF0YSwgXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gVUlGb250X3N5c3RlbUZvbnRPZlNpemUoc2l6ZSkge1xuICB3aW5kb3cuX19GT05UX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZvbnRcIiArIHdpbmRvdy5fX0ZPTlRfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIlVJRm9udFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic3lzdGVtRm9udE9mU2l6ZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogc2l6ZSwgXCJ0eXBlXCI6IFwiZlwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBVSUZvbnRfZm9udFdpdGhOYW1lKG5hbWUsIHNpemUpIHtcbiAgd2luZG93Ll9fRk9OVF9JTkRFWCsrO1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZm9udFwiICsgd2luZG93Ll9fRk9OVF9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiTUpQRm9udFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiZm9udFdpdGhOYW1lOnNpemU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IG5hbWUsIFwidHlwZVwiOiBcInNcIn0sXG4gICAgICB7XCJuYW1lXCI6IHNpemUubGVuZ3RoPjA/c2l6ZTpcIjE0XCIsIFwidHlwZVwiOiBcImZcIn0sXG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0Rm9udCgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEZvbnQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcbiAgICAgIFwibmFtZVwiOiBcImZvbnRcIiArIHdpbmRvdy5fX0ZPTlRfSU5ERVgsXG4gICAgICBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiXG4gICAgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zaXplVG9GaXQoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2l6ZVRvRml0XCJcbiAgfVxufVxuXG5mdW5jdGlvbiBVSUZvbnRfYm9sZFN5c3RlbUZvbnRPZlNpemUoc2l6ZSkge1xuICB3aW5kb3cuX19GT05UX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZvbnRcIiArIHdpbmRvdy5fX0ZPTlRfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIlVJRm9udFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiYm9sZFN5c3RlbUZvbnRPZlNpemU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHNpemUsIFwidHlwZVwiOiBcImZcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gVUlGb250X3N5c3RlbUZvbnRPZlNpemVXZWlnaHQoc2l6ZSwgd2VpZ2h0KSB7XG4gIHdpbmRvdy5fX0ZPTlRfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZm9udFwiICsgd2luZG93Ll9fRk9OVF9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiVUlGb250XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzeXN0ZW1Gb250T2ZTaXplOndlaWdodDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogc2l6ZSAsIFwidHlwZVwiOiBcImZcIn0sXG4gICAgICB7XCJuYW1lXCI6IHdlaWdodCAsIFwidHlwZVwiOiBcImZcIn0sXG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0TGluZUJyZWFrTW9kZShtb2RlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TGluZUJyZWFrTW9kZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogbW9kZSwgXCJ0eXBlXCI6IFwiaVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldE51bWJlck9mTGluZXMoY291bnQpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXROdW1iZXJPZkxpbmVzOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBjb3VudCwgXCJ0eXBlXCI6IFwiaVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFRleHRBbGlnbm1lbnQobW9kZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEdyYXZpdHk6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IG1vZGUgLCBcInR5cGVcIjogXCJzXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VGV4dENvbG9yKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFRleHRDb2xvcjpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogJ2NvbG9yJyArIHdpbmRvdy5fX0NPTE9SX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFRleHRMZW5ndGhMaW1pdChsZW5ndGgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRUZXh0TGVuZ3RoTGltaXQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICAgIHtcIm5hbWVcIjogbGVuZ3RoICsgXCJcIiwgXCJ0eXBlXCI6IFwiaVwifVxuICAgICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfcmVtb3ZlQ2VsbChjZWxsSW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInJlbW92ZU9iamVjdEF0SW5kZXg6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICAgIHtcIm5hbWVcIjogY2VsbEluZGV4ICsgXCJcIiwgXCJ0eXBlXCI6IFwiaVwifVxuICAgICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIFVJQ29sb3JfZnJvbUxpdGVyYWwoY29sb3IpIHtcbiAgd2luZG93Ll9fQ09MT1JfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiY29sb3JcIiArIHdpbmRvdy5fX0NPTE9SX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJVSUNvbG9yXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IGNvbG9yICsgXCJDb2xvclwiLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfbGF5ZXIoKSB7XG4gIHdpbmRvdy5fX0xBWUVSX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImxheWVyXCIgKyB3aW5kb3cuX19MQVlFUl9JTkRFWCxcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJsYXllclwiLFxuICB9XG59XG5cbmZ1bmN0aW9uIHNldENvcm5lclJhZGl1cyhyYWRpdXMpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRNSlBDb3JuZXJSYWRpdXM6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHJhZGl1cyArIFwiXCIsIFwidHlwZVwiOiBcImZcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Qm9yZGVyV2lkdGgod2lkdGgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRNSlBCb3JkZXJXaWR0aDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogd2lkdGggKyBcIlwiLCAgXCJ0eXBlXCI6IFwiZlwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRCb3JkZXJDb2xvcigpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRNSlBCb3JkZXJDb2xvcjpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCJjb2xvclwiICsgd2luZG93Ll9fQ09MT1JfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCIsIHR5cGU6IFwiY2djb2xvclwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFNoYWRvdyhpZCwgc2hhZG93T2Zmc2V0LCBzaGFkb3dCbHVyLCBzaGFkb3dTcHJlYWQsIHNoYWRvd0NvbG9yLCBzaGFkb3dPcGFjaXR5KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0U2hhZG93OlwiLFxuICAgIFwidmFsdWVzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgXCJ2aWV3SWRcIjogaWQsXG4gICAgICAgIFwiY29sb3JcIjogc2hhZG93Q29sb3IsXG4gICAgICAgIFwiYmx1clwiOiBzaGFkb3dCbHVyLFxuICAgICAgICBcIm9wYWNpdHlcIjogc2hhZG93T3BhY2l0eSxcbiAgICAgICAgXCJvZmZzZXRcIjogc2hhZG93T2Zmc2V0LFxuICAgICAgICBcInNwcmVhZFwiOiBzaGFkb3dTcHJlYWRcbiAgICAgICAgfSksXG4gICAgICAgIFwidHlwZVwiOiBcInNcIlxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRHcmFkaWVudChkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0R3JhZGllbnQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcbiAgICAgIFwibmFtZVwiOiBkYXRhLFxuICAgICAgXCJ0eXBlXCI6IFwic1wiXG4gICAgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRCYWNrZ3JvdW5kSW1hZ2UoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRCYWNrZ3JvdW5kSW1hZ2U6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcbiAgICAgIFwibmFtZVwiOiBcImltYWdlXCIgKyB3aW5kb3cuX19JTUFHRV9JTkRFWCxcbiAgICAgIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCJcbiAgICB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiBfVUlMYWJlbExheWVyX3NldE1hc2tzVG9Cb3VuZHMoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOlwibGF5ZXJcIiArIHdpbmRvdy5fX0xBWUVSX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJfVUlMYWJlbExheWVyXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRNSlBNYXNrc1RvQm91bmRzOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBcIjFcIiwgdHlwZTogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VGFnKHRhZykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFRhZzpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogdGFnLCB0eXBlOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZl9nZXRWaWV3RnJvbVRhZyh0YWcpe1xuICB3aW5kb3cuX19WSUVXX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImdldFZpZXdGcm9tVGFnOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiB0YWcsIFwidHlwZVwiOiBcInNcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRJbWFnZVVSTChpZCx1cmwscGxhY2Vob2xkZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEltYWdlV2l0aFVybDo6OjpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCJcIiArIGlkLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgICAge1wibmFtZVwiOiB1cmwsIFwidHlwZVwiOiBcInNcIn0sXG4gICAgICB7XCJuYW1lXCI6IHBsYWNlaG9sZGVyLCBcInR5cGVcIjogXCJzXCJ9XG4gICAgXVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEdpZihpZCwgaW1hZ2VOYW1lKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwibG9hZEdpZjo6OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBcIlwiICsgaWQsIFwidHlwZVwiOiBcInNcIiB9LCB7IFwibmFtZVwiOiBpbWFnZU5hbWUsIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3N0YXJ0R2lmKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzdGFydEdJRlwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc3RvcEdpZigpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic3RvcEdJRlwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlbGZfc2V0QWxwaGEoYWxwaGEpe1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEFscGhhOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBTdHJpbmcoYWxwaGEpLCB0eXBlOiBcImZcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRIaWRkZW4oaGlkZGVuKXtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRIaWRkZW46XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6ICgoaGlkZGVuID09PSBcImdvbmVcIiB8fCBoaWRkZW4gPT09IFwiaW52aXNpYmxlXCIpID8gXCIxXCIgOiBcIjBcIiksIHR5cGU6IFwiaVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFRleHRQcm9wZXJ0aWVzKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUZXh0Vmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFRleHRQcm9wZXJ0aWVzOlwiLFxuICAgIFwidmFsdWVzXCI6IFtcbiAgICAgIHtcIm5hbWVcIjogZGF0YSxcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5cbmZ1bmN0aW9uIHRoaXNfc2V0TGV0dGVyU3BhY2luZyhkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQRWRpdFRleHRcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRMZXR0ZXJTcGFjaW5nOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBkYXRhLCBcInR5cGVcIjogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRMaW5lU3BhY2luZyhkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQTGFiZWxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRMaW5lU3BhY2luZzpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogZGF0YSwgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0Q2FyZXRDb2xvcigpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRUaW50Q29sb3I6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6ICdjb2xvcicgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3Njcm9sbFRvKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQVGFibGVWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2Nyb2xsVG86XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcIm5hbWVcIjogdmFsdWUsIFwidHlwZVwiOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0RXhwYW5kKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQRXhwYW5kYWJsZUNlbGxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRFeHBhbmQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcIm5hbWVcIjogdmFsdWUsIFwidHlwZVwiOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0RXhwYW5kRHVyYXRpb24odmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBFeHBhbmRhYmxlQ2VsbFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEV4cGFuZER1cmF0aW9uOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IHZhbHVlLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEV4cGFuZEFscGhhKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQRXhwYW5kYWJsZUNlbGxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRFeHBhbmRBbHBoYTpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiB2YWx1ZSwgXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRTd3lwZSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFN3eXBlOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiB2YWx1ZSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiLCBcInR5cGVcIjogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRVc2VySW50ZXJhY3Rpb24oaGlkZGVuKXtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRVc2VySW50ZXJhY3Rpb25FbmFibGVkOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiAoaGlkZGVuID09PSBcInRydWVcIiA/IFwiMVwiIDogXCIwXCIpLCB0eXBlOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRTZXBhcmF0b3IodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTZXBhcmF0b3I6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHZhbHVlLCB0eXBlOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldFNlcGFyYXRvclJlcGVhdCh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFNlcGFyYXRvclJlcGVhdDpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogdmFsdWUsIHR5cGU6IFwic1wiIH1dXG4gIH07XG59XG5cblxuZnVuY3Rpb24gdGhpc19zZXRTd2lwZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgICAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgICAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQVGFibGVWaWV3XCIsXG4gICAgICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFN3aXBlQ2FsbGJhY2s6XCIsXG4gICAgICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiB2YWx1ZSwgdHlwZTogXCJzXCIgfV1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldHVwTGlzdChsaXN0RGF0YSwgbGlzdEl0ZW0pIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFJlcGVhdFRhYmxlVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldHVwTGlzdDo6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IGxpc3REYXRhLCB0eXBlOiBcInNcIiB9LCB7IFwibmFtZVwiOiBsaXN0SXRlbSwgdHlwZTogXCJzXCIgfV1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX2lubGluZUFuaW1hdGlvbihjb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJ0aGlzXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0SW5saW5lQW5pbWF0aW9uOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBtb2RpZnlUcmFuc2xhdGlvbihjb25maWcpLCB0eXBlOiBcInNcIiB9XVxuICAgIH07XG59XG5cblxuZnVuY3Rpb24gbW9kaWZ5VHJhbnNsYXRpb24oY29uZmlnKXtcbiAgdmFyIHggPSBjb25maWcueCB8fCBcIjBcIjtcbiAgdmFyIHkgPSBjb25maWcueSB8fCBcIjBcIjtcbiAgdmFyIGFuaW1hdGlvbkFycmF5ID0gSlNPTi5wYXJzZShjb25maWcuaW5saW5lQW5pbWF0aW9uKTtcbiAgdmFyIGFuaW1hdGlvbkFycmF5ID0gYW5pbWF0aW9uQXJyYXkubWFwKGZ1bmN0aW9uKGEpe1xuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJmcm9tWFwiKSl7XG4gICAgICBhLmZyb21YID0gcGFyc2VJbnQoYS5mcm9tWCkgKyBwYXJzZUludCh4KSArICcnO1xuICAgICAgaWYoIWEuaGFzT3duUHJvcGVydHkoXCJ0b1hcIikpe1xuICAgICAgICBhLnRvWCA9IDAgKyBwYXJzZUludCh4KSArICcnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihhLmhhc093blByb3BlcnR5KFwidG9YXCIpKXtcbiAgICAgIGEudG9YID0gcGFyc2VJbnQoYS50b1gpICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICB9XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcImZyb21ZXCIpKXtcbiAgICAgIGEuZnJvbVkgPSBwYXJzZUludChhLmZyb21ZKSArIHBhcnNlSW50KHkpICsgJyc7XG4gICAgICBpZighYS5oYXNPd25Qcm9wZXJ0eShcInRvWVwiKSl7XG4gICAgICAgIGEudG9ZID0gMCArIHBhcnNlSW50KHkpICsgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJ0b1lcIikpe1xuICAgICAgYS50b1kgPSBwYXJzZUludChhLnRvWSkgKyBwYXJzZUludCh5KSArICcnO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfSlcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFuaW1hdGlvbkFycmF5KTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDbG9zZVN3aXBlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgICAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgICAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQVGFibGVWaWV3XCIsXG4gICAgICAgIFwibWV0aG9kTmFtZVwiOiBcImNsb3NlU3dpcGU6XCIsXG4gICAgICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiB2YWx1ZSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiLCB0eXBlOiBcInNcIiB9XVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0RW5hYmxlU3d5cGUodmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICAgICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUYWJsZVZpZXdcIixcbiAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwic2V0U3dpcGVFbmFibGVkOlwiLFxuICAgICAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogdmFsdWUgPyBcInRydWVcIiA6IFwiZmFsc2VcIiwgdHlwZTogXCJzXCIgfV1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX2JyaW5nU3ViVmlld1RvRnJvbnQocGFyYW1zKXtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImJyaW5nU3ViVmlld1RvRnJvbnQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcIm5hbWVcIjogcGFyYW1zLCB0eXBlOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0Q29udGVudE1vZGUobW9kZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldENvbnRlbnRNb2RlOlwiLFxuICAgIFwidmFsdWVzXCI6W3tcIm5hbWVcIjogbW9kZSwgdHlwZTogXCJpXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX2FkanVzdFZpZXdXaXRoS2V5Ym9hcmQoc3RhdHVzKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0QWRqdXN0Vmlld1dpdGhLZXlib2FyZDpcIixcbiAgICBcInZhbHVlc1wiOlt7XCJuYW1lXCI6IHN0YXR1cywgdHlwZTogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxmX3NldFBvcHVwTWVudShwb3B1cE1lbnUsIG9uTWVudUl0ZW1DbGljaykge1xuICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja01hcHBlci5tYXAob25NZW51SXRlbUNsaWNrKTtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJjcmVhdGVBY3Rpb25TaGVldFdpdGhUaXRsZXM6OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBwb3B1cE1lbnUsIFwidHlwZVwiOiBcInNcIiB9LCB7IFwibmFtZVwiOiBjYWxsYmFjaywgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0Q29ybmVyQ3VydmVzKGNvcm5lcikge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBcImZhbHNlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcInRoaXNcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRDb3JuZXJDdXJ2ZXM6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IGNvcm5lciArIFwiXCIsIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENsaXBzVG9Cb3VuZHMoYm91bmRzKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0Q2xpcHNUb0JvdW5kczpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogYm91bmRzID8gXCIxXCIgOiBcIjBcIiwgdHlwZTogXCJpXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19mb250V2l0aE5hbWUobmFtZSkge1xuICB3aW5kb3cuX19GT05UX0lOREVYKys7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJmb250V2l0aE5hbWU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IG5hbWUsIFwidHlwZVwiOiBcInNcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gVUlDb2xvcl9zZXRDb2xvcihjb2xvcikge1xuICBsZXQgdmFsdWVzO1xuICBsZXQgYWxwaGEgPSBcIjEuMDBcIjtcblxuICBpZiAoY29sb3IubGVuZ3RoID49IDgpIHtcbiAgICBhbHBoYSA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLDMpLCAxNik7XG4gICAgYWxwaGEgPSAoYWxwaGEvMjU1KS50b0ZpeGVkKDIpO1xuICAgIGNvbG9yID0gY29sb3Iuc3Vic3RyaW5nKDMsIDkpO1xuICB9IGVsc2Uge1xuICAgIGNvbG9yID0gY29sb3Iuc3Vic3RyaW5nKDEsIGNvbG9yLmxlbmd0aCk7XG4gIH1cblxuICBjb2xvciA9IGNvbnZlcnRIZXhUb1JnYihyV1MoY29sb3IpKTtcbiAgdmFsdWVzID0gY29sb3Iuc3BsaXQoJywnKTtcblxuICBsZXQgciA9IHJXUyh2YWx1ZXNbMF0pO1xuICBsZXQgZyA9IHJXUyh2YWx1ZXNbMV0pO1xuICBsZXQgYiA9IHJXUyh2YWx1ZXNbMl0pO1xuICBsZXQgYSA9IGFscGhhO1xuXG5cbiAgcmV0dXJuIFVJQ29sb3JfY29sb3JXaXRoUkdCQShyLCBnLCBiLCBhKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtS2V5cyhjb25maWcpIHtcbiAgdmFyIGtleXMgPSAgT2JqZWN0LmtleXMoY29uZmlnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGk8a2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnW2tleXNbaV1dID09IFwidW5kZWZpbmVkXCIgfHwgY29uZmlnW2tleXNbaV1dID09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBjb25maWdba2V5c1tpXV07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnW2tleXNbaV1dID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uZmlnW2tleXNbaV1dID0gY2FsbGJhY2tNYXBwZXIubWFwKGNvbmZpZ1trZXlzW2ldXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChrZXlzW2ldICE9PSBcImlkXCIgJiZcbiAgICAgICAgICBrZXlzW2ldICE9PSBcIl9fZmlsZW5hbWVcIiAmJlxuICAgICAgICAgIGtleXNbaV0gIT09IFwiY3VyckNoaWxkT2Zmc2V0XCIgJiZcbiAgICAgICAgICBrZXlzW2ldICE9PSBcIm1ldGhvZHNcIiAgJiZcbiAgICAgICAgICBrZXlzW2ldICE9PSBcInN3aXBlRW5hYmxlXCIgJiZcbiAgICAgICAgICBrZXlzW2ldICE9PSBcInZpZXdQYWdlclwiICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJ0YWJsZVZpZXdcIikge1xuXG4gICAgICAgIGRlbGV0ZSBjb25maWdba2V5c1tpXV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUeXBlKHR5cGUsIGNvbmZpZykge1xuICB2YXIgbW9kaWZpZWRUeXBlICA9IFwibUpQVmlld1wiO1xuICBzd2l0Y2godHlwZSl7XG4gICAgY2FzZSBcImVkaXRUZXh0XCI6e1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBFZGl0VGV4dFwiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwiaW1hZ2VWaWV3XCI6e1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBJbWFnZVZpZXdcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInRleHRWaWV3XCI6e1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBUZXh0Vmlld1wiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwic2Nyb2xsVmlld1wiOiB7XG4gICAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoJ2hlaWdodCcpJiYgY29uZmlnLmhlaWdodCA9PSAnd3JhcF9jb250ZW50Jyl7XG4gICAgICAgICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFNjcm9sbFZpZXdcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQU2Nyb2xsVmlld1wiO1xuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5vcmllbnRhdGlvbiA9IFwidmVydGljYWxcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJob3Jpem9udGFsU2Nyb2xsVmlld1wiOiB7XG4gICAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoJ3dpZHRoJykmJiBjb25maWcud2lkdGggPT0gJ3dyYXBfY29udGVudCcpe1xuICAgICAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTY3JvbGxWaWV3XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFNjcm9sbFZpZXdcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0YWJsZVZpZXdcIjpcbiAgICBjYXNlIFwibGlzdFZpZXdcIjoge1xuICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxpc3REYXRhXCIpICYmIGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxpc3RJdGVtXCIpKSB7XG4gICAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQUmVwZWF0VGFibGVWaWV3XCI7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFRhYmxlVmlld1wiO1xuICAgICAgfVxuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwiY29sbGVjdGlvblZpZXdcIjpcbiAgICBjYXNlIFwidmlld1BhZ2VyXCI6e1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBDb2xsZWN0aW9uVmlld1wiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwicHJvZ3Jlc3NCYXJcIjoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBBY3Rpdml0eUluZGljYXRvclwiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwic3dpdGNoXCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQU3dpdGNoXCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzd3lwZUxheW91dFwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFN3eXBlTGF5b3V0Q2VsbFwiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwiYWNjb3JkaW9uTGF5b3V0XCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQRXhwYW5kYWJsZUNlbGxcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImxpbmVhckxheW91dFwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUExpbmVhckxheW91dFwiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwicmVsYXRpdmVMYXlvdXRcIjoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBSZWxhdGl2ZUxheW91dFwiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwiZnJhbWVMYXlvdXRcIjoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBSZWxhdGl2ZUxheW91dFwiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBkZWZhdWx0OiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFZpZXdcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1vZGlmaWVkVHlwZTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlS2V5cyhjb25maWcsIHR5cGUpIHtcbiAgdmFyIG1hcCA9IHtcbiAgICBcImltYWdlVXJsXCI6IFwiaW1hZ2VOYW1lZFwiLFxuICAgIFwicGFja2FnZUljb25cIiA6IFwiaW1hZ2VOYW1lZFwiLFxuICAgIFwiY29sb3JcIjogXCJ0ZXh0Q29sb3JcIlxuICB9O1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnKTtcblxuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChtYXBba2V5XSkge1xuICAgICAgY29uZmlnW21hcFtrZXldXSA9IGNvbmZpZ1trZXldO1xuICAgICAgZGVsZXRlIGNvbmZpZ1trZXldO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGNvbmZpZy5zdHJva2UpICB7XG4gICAgY29uZmlnLmJvcmRlcldpZHRoID0gY29uZmlnLnN0cm9rZS5zcGxpdChcIixcIilbMF07XG4gICAgY29uZmlnLmJvcmRlckNvbG9yID0gY29uZmlnLnN0cm9rZS5zcGxpdChcIixcIilbMV07XG4gIH1cblxuICAvLyBBZGQgYWxsIHZpZXcgYmFzZWQgcHJvcCBpbmplY3Rpb25zIGJlbG93LlxuICBzd2l0Y2ggKHR5cGUudG9Mb3dlckNhc2UoKSl7XG4gICAgY2FzZSBcInNjcm9sbHZpZXdcIjp7XG4gICAgICBjb25maWcub3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCJcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImhvcml6b250YWxzY3JvbGx2aWV3XCI6e1xuICAgICAgY29uZmlnLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCJcbiAgICB9XG4gICAgYnJlYWs7XG4gIH1cbiAgLy8gQWRkIGFsbCB2aWV3IGJhc2VkIHByb3AgaW5qZWN0aW9ucyBhYm92ZS5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuXG4vLyBjUyAtIGNvbnZlcnQgdG8gU3RyaW5nXG4vLyByV1MgLSByZW1vdmUgd2hpdGUgc3BhY2VzXG4vLyBmcm9tU3RvcmUgbWV0aG9kcyBkb250ICB1c2UgaW52b2tlT25cbi8vIHRoZSBleHRyYWN0IGNsYXNzTmFtZSBvdXQgb2YgdGhlIHN0b3JlZCBvYmplY3QgaW4gdGhlIHN0b3JlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHR5cGUsIGNvbmZpZywgX2dldFNldFR5cGUpIHtcbiAgY29uZmlnID0gY2hhbmdlS2V5cyhmbGF0dGVuT2JqZWN0KGNvbmZpZyksIHR5cGUpO1xuICB0eXBlID0gZ2VuZXJhdGVUeXBlKHR5cGUsIGNvbmZpZyk7XG4gIGdldFNldFR5cGUgPSAoX2dldFNldFR5cGUgPT0gXCJzZXRcIik/MTowO1xuICBjb25maWcubWV0aG9kcyA9IFtdO1xuICBjb25maWcuYWxpZ25tZW50X3J1bGVzID0gW107XG5cbiAgLy8gdGFnIHNldFxuICBpZiAoY29uZmlnLmlkKSAge1xuICAgIGxldCB0YWcgPSAgcldTKGNTKGNvbmZpZy5pZCkpO1xuXG4gICAgaWYgKCFnZXRTZXRUeXBlKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfZ2V0Vmlld0Zyb21UYWcodGFnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUYWcodGFnKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnJhbWVcbiAgaWYgKCFjb25maWcudXNlQ29uc3RyYWl0cyAmJiAoY29uZmlnLnggfHwgY29uZmlnLnkgfHwgY29uZmlnLncgfHwgY29uZmlnLmgpKSB7XG4gICAgbGV0IHggPSByV1MoY1MoY29uZmlnLngpKSB8fCAgXCIwXCI7XG4gICAgbGV0IHkgPSAgcldTKGNTKGNvbmZpZy55KSl8fCBcIjBcIjtcbiAgICBsZXQgd2lkdGggPSByV1MoY1MoY29uZmlnLncpKSB8fCBcIjBcIjtcbiAgICBsZXQgaGVpZ2h0ID0gcldTKGNTKGNvbmZpZy5oKSkgfHwgXCIwXCI7XG5cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfcmVjdEZyb21EaWN0aW9uYXJ5KHgseSx3aWR0aCxoZWlnaHQpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RnJhbWUoKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidXNlQ29uc3RyYWl0c1wiKSAmJiBjb25maWcudXNlQ29uc3RyYWl0cyAmJiBjb25maWcuaGFzT3duUHJvcGVydHkoXCJleHBhbmRcIikpe1xuICAgIGNvbmZpZy52aXNpYmlsaXR5ID0gY29uZmlnLmV4cGFuZCA/IChjb25maWcudmlzaWJpbGl0eSA/IGNvbmZpZy52aXNpYmlsaXR5IDogXCJ2aXNpYmxlXCIpIDogXCJnb25lXCI7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYWxpZ25QYXJlbnRCb3R0b21cIikgJiYgY29uZmlnLmFsaWduUGFyZW50Qm90dG9tID09IFwidHJ1ZSwtMVwiKXtcbiAgICBjb25maWcuYWxpZ25tZW50X3J1bGVzLnB1c2goJ2FsaWduX3BhcmVudF9ib3R0b20nKTtcbiAgfVxuXG4gIGlmIChjb25maWcudXNlQ29uc3RyYWl0cykge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc191cGRhdGVMYXlvdXRQYXJhbXMoY29uZmlnKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwibGV0dGVyU3BhY2luZ1wiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRMZXR0ZXJTcGFjaW5nKGNvbmZpZy5sZXR0ZXJTcGFjaW5nKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwibGluZVNwYWNpbmdcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0TGluZVNwYWNpbmcoY29uZmlnLmxpbmVTcGFjaW5nKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY2FyZXRDb2xvclwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlDb2xvcl9zZXRDb2xvcihjb25maWcuY2FyZXRDb2xvcikpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRDYXJldENvbG9yKCkpO1xuICB9XG5cbiAgLy8gYmFja2dyb3VuZFxuICBpZiAoY29uZmlnLmJhY2tncm91bmQgfHwgY29uZmlnLmdyYWRpZW50IHx8IGNvbmZpZy5iYWNrZ3JvdW5kRHJhd2FibGUpIHtcbiAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZ3JhZGllbnRcIikpIHtcbiAgICAgIHZhciBncmFkaWVudCA9IEpTT04ucGFyc2UoY29uZmlnLmdyYWRpZW50KTtcbiAgICAgIHZhciBncmFkaWVudFR5cGUgPSBncmFkaWVudC50eXBlO1xuICAgICAgdmFyIGdyYWRpZW50QW5nbGUgPSBncmFkaWVudC5hbmdsZTtcbiAgICAgIHZhciBjb2xvdXJzID0gW107XG5cbiAgICAgIGdyYWRpZW50LnZhbHVlcy5mb3JFYWNoKGNvbG9yID0+IHtcbiAgICAgICAgY29sb3Vycy5wdXNoKGNvbnZlcnRDb2xvclRvUmdiYShjb2xvcikpO1xuICAgICAgfSk7XG5cbiAgICAgIGdyYWRpZW50ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBjb2xvcnM6IGNvbG91cnMsXG4gICAgICAgIHR5cGU6IGdyYWRpZW50VHlwZSxcbiAgICAgICAgYW5nbGU6IGdyYWRpZW50QW5nbGVcbiAgICAgIH0pO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEdyYWRpZW50KGdyYWRpZW50KSk7XG4gICAgfSBlbHNlIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJiYWNrZ3JvdW5kRHJhd2FibGVcIikpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlJbWFnZV9pbWFnZU5hbWVkKGNvbmZpZy5iYWNrZ3JvdW5kRHJhd2FibGUpKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRCYWNrZ3JvdW5kSW1hZ2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlDb2xvcl9zZXRDb2xvcihjb25maWcuYmFja2dyb3VuZCkpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEJhY2tncm91bmRDb2xvcigpKTtcbiAgICB9XG4gIH1cblxuICAvLyBib3JkZXJDb2xvciwgcmFkaXVzIGFuZCB3aWR0aFxuICAvLyB3aWxsIHdvcmsgb25seSBmb3IgdWlWaWV3IGFuZCB1aUxhYmVsXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJjb3JuZXJSYWRpdXNcIikpIHtcbiAgICBsZXQgYXJnID0gcldTKGNTKGNvbmZpZy5jb3JuZXJSYWRpdXMpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNldENvcm5lclJhZGl1cyhhcmcpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJib3JkZXJXaWR0aFwiKSkge1xuICAgIGxldCBhcmcgPSByV1MoY1MoY29uZmlnLmJvcmRlcldpZHRoKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZXRCb3JkZXJXaWR0aChhcmcpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJib3JkZXJDb2xvclwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlDb2xvcl9zZXRDb2xvcihjb25maWcuYm9yZGVyQ29sb3IpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNldEJvcmRlckNvbG9yKCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5kZWJ1Zykge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19sYXllcigpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNldEJvcmRlcldpZHRoKFwiMVwiKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNoYWRvdykge1xuICAgIHZhciBzaGFkb3dWYWx1ZXMgPSBjb25maWcuc2hhZG93LnNwbGl0KCcsJyk7XG4gICAgdmFyIHNoYWRvd0JsdXIgPSByV1MoY1Moc2hhZG93VmFsdWVzWzJdKSk7XG4gICAgdmFyIHNoYWRvd1NwcmVhZCA9IHJXUyhjUyhzaGFkb3dWYWx1ZXNbM10pKTtcbiAgICB2YXIgc2hhZG93T3BhY2l0eSA9IHJXUyhjUyhzaGFkb3dWYWx1ZXNbNV0pKTtcbiAgICB2YXIgc2hhZG93T2Zmc2V0ID0ge1xuICAgICAgeDogcldTKGNTKHNoYWRvd1ZhbHVlc1swXSkpLFxuICAgICAgeTogcldTKGNTKHNoYWRvd1ZhbHVlc1sxXSkpXG4gICAgfTtcblxuICAgIHZhciBzaGFkb3dDb2xvciA9IGNvbnZlcnRDb2xvclRvUmdiYShzaGFkb3dWYWx1ZXNbNF0pO1xuXG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFNoYWRvdyhjb25maWcuaWQsIHNoYWRvd09mZnNldCwgc2hhZG93Qmx1ciwgc2hhZG93U3ByZWFkLCBzaGFkb3dDb2xvciwgc2hhZG93T3BhY2l0eSkpO1xuICB9XG5cbiAgLy8gbWFrZSBjaGlsZCBmdWxsV2lkdGggYW5kIGhlaWdodCBvZiBwYXJlbnRcbiAgaWYgKGNvbmZpZy5maWxsUGFyZW50KSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3N1cGVydmlldygpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJVmlld19ib3VuZHMoKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEZyYW1lKCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImltYWdlTmFtZWRcIikpIHtcbiAgICBsZXQgaWQgPSBjUyhjb25maWcuaWQpO1xuICAgIGxldCBwbGFjZWhvbGRlciA9IGNvbmZpZy5wbGFjZUhvbGRlciB8fCBcIlwiO1xuICAgIGlmIChjb25maWcuaW1hZ2VOYW1lZC5lbmRzV2l0aChcIi5naWZcIikpe1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEdpZihpZCwgY29uZmlnLmltYWdlTmFtZWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEltYWdlVVJMKGlkLCBjb25maWcuaW1hZ2VOYW1lZCwgcGxhY2Vob2xkZXIpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYWRqdXN0Vmlld1dpdGhLZXlib2FyZFwiKSkge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX2FkanVzdFZpZXdXaXRoS2V5Ym9hcmQoY29uZmlnLmFkanVzdFZpZXdXaXRoS2V5Ym9hcmQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJwbGF5R2lmXCIpKXtcbiAgICBpZiAoY29uZmlnLnBsYXlHaWYpXG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc3RhcnRHaWYoKSk7XG4gICAgZWxzZVxuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3N0b3BHaWYoKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhpbnQpIHtcbiAgICBpZiAoY29uZmlnLmxldHRlclNwYWNpbmcpIHtcbiAgICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAnaGludCc6IGNTKGNvbmZpZy5oaW50KSxcbiAgICAgICAgJ2xldHRlclNwYWNpbmcnOiBjb25maWcubGV0dGVyU3BhY2luZ1xuICAgICAgfSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0UGxhY2Vob2xkZXJQcm9wZXJ0aWVzKGRhdGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFBsYWNlaG9sZGVyKGNTKGNvbmZpZy5oaW50KSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJzZXBhcmF0b3JcIikpIHtcbiAgICB2YXIgX2VuYWJsZWQ2ID0gY1MoY29uZmlnLnNlcGFyYXRvcik7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFNlcGFyYXRvcihfZW5hYmxlZDYpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJzZXBhcmF0b3JSZXBlYXRcIikpIHtcbiAgICB2YXIgX2VuYWJsZWQ2ID0gY1MoY29uZmlnLnNlcGFyYXRvclJlcGVhdCk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFNlcGFyYXRvclJlcGVhdChfZW5hYmxlZDYpKTtcbiAgfVxuXG4gICBpZiAoY29uZmlnLnRyYW5zbGF0aW9uWil7XG4gICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUcmFuc2xhdGlvblooY1MoY29uZmlnLnRyYW5zbGF0aW9uWikpKTtcbiAgIH1cblxuICBpZiAoY29uZmlnLnNjcm9sbFRvKSB7XG4gICAgdmFyIGRhdGEgPSBjb25maWcuc2Nyb2xsVG8uc3BsaXQoXCIsXCIpO1xuICAgIHZhciBwYXJzZWREYXRhID0gSlNPTi5zdHJpbmdpZnkoe1wieFwiOiBkYXRhWzBdLCBcInlcIjogZGF0YVsxXX0pO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zY3JvbGxUbyhjUyhwYXJzZWREYXRhKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImV4cGFuZFwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRFeHBhbmQoY29uZmlnLmV4cGFuZD9cIjFcIjpcIjBcIikpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImV4cGFuZER1cmF0aW9uXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEV4cGFuZER1cmF0aW9uKGNTKGNvbmZpZy5leHBhbmREdXJhdGlvbikpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJleHBhbmRBbHBoYVwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRFeHBhbmRBbHBoYShjUyhjb25maWcuZXhwYW5kQWxwaGEpKSk7XG4gIH1cblxuICAvL1VwZGF0ZWQgdG8gaGFuZGxlIDAgYmVpbmcgcGFzc2VkIGZvciBkZWZhdWx0IGFsaWdubWVudFxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dEFsaWdubWVudFwiKSkge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRleHRBbGlnbm1lbnQocldTKGNTKGNvbmZpZy50ZXh0QWxpZ25tZW50KSkpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ0ZXh0RnJvbUh0bWxcIikpIHtcbiAgICAgIHZhciBtb2RpZmllZEh0bWxTdHJpbmcgPSBcIjxzcGFuIHN0eWxlPVxcXCJcIlxuICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImZvbnRTdHlsZVwiKSkge1xuICAgICAgICAgIG1vZGlmaWVkSHRtbFN0cmluZyArPSBcImZvbnQtZmFtaWx5OlwiK2NvbmZpZy5mb250U3R5bGUrXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ0ZXh0U2l6ZVwiKSkge1xuICAgICAgICAgIG1vZGlmaWVkSHRtbFN0cmluZyArPSBcImZvbnQtc2l6ZTpcIitjb25maWcudGV4dFNpemUrXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ0ZXh0Q29sb3JcIikpIHtcbiAgICAgICAgICBtb2RpZmllZEh0bWxTdHJpbmcgKz0gXCJjb2xvcjpcIitjb25maWcudGV4dENvbG9yK1wiO1wiXG4gICAgICB9XG4gICAgICBtb2RpZmllZEh0bWxTdHJpbmcgKz1cIlxcXCI+XCIrY29uZmlnLnRleHRGcm9tSHRtbCtcIjwvc3Bhbj5cIjtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRIVE1MVGV4dChtb2RpZmllZEh0bWxTdHJpbmcpKTtcbiAgfVxuXG4gIGlmIChjb25maWcudGV4dENvbG9yKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUNvbG9yX3NldENvbG9yKGNvbmZpZy50ZXh0Q29sb3IpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VGV4dENvbG9yKCkpO1xuICB9XG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJmb250U3R5bGVcIikpIHtcbiAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dFNpemVcIikpIHtcbiAgICAgICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUZvbnRfZm9udFdpdGhOYW1lKGNvbmZpZy5mb250U3R5bGUsIGNvbmZpZy50ZXh0U2l6ZStcIlwiKSk7XG4gICAgfSBlbHNle1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX2ZvbnRXaXRoTmFtZShjb25maWcuZm9udFN0eWxlKSk7XG4gICAgfVxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRGb250KCkpO1xuICB9IGVsc2UgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInRleHRTaXplXCIpKXtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJRm9udF9zeXN0ZW1Gb250T2ZTaXplKGNvbmZpZy50ZXh0U2l6ZStcIlwiKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEZvbnQoKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNjcm9sbEVuYWJsZWQpe1xuICAgIHZhciBzY3JvbGxFbmFibGVkID0gY1MoY29uZmlnLnNjcm9sbEVuYWJsZWQpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zY3JvbGxFbmFibGVkKHNjcm9sbEVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuZm9udEZhbWlseSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlGb250X3N5c3RlbUZvbnRPZlNpemVXZWlnaHQoKGNvbmZpZy50ZXh0U2l6ZSB8fCBcIjE0XCIpICsgXCJcIiwgY29uZmlnLmZvbnRGYW1pbHkgfHwgXCIwLjBcIikpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRGb250KCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInNpbmdsZUxpbmVcIikpIHtcbiAgICBpZighY29uZmlnLnNpbmdsZUxpbmUpe1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldExpbmVCcmVha01vZGUoXCIwXCIpKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXROdW1iZXJPZkxpbmVzKFwiMFwiKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25maWcudXNlQ29uc3RyYWl0cyAmJiBjb25maWcudmlzaWJpbGl0eSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRIaWRkZW4oY29uZmlnLnZpc2liaWxpdHkpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJjbGlja2FibGVcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VXNlckludGVyYWN0aW9uKHJXUyhjUyhjb25maWcuY2xpY2thYmxlKSkpKTtcbiAgfVxuXG4gIGlmIChjb25maWcudHJhbnNsYXRpb25YKSB7XG4gICAgbGV0IHByb3BzID0gW3tcbiAgICAgICdpZCc6ICcnICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpLFxuICAgICAgJ3R5cGUnOiAndHJhbnNsYXRpb24nLFxuICAgICAgJ3J1bk9uUmVuZGVyJyA6ICd0cnVlJyxcbiAgICAgICdlYXNpbmcnIDogJ2xpbmVhcicsXG4gICAgICAnZGVsYXknOiAnMCcsXG4gICAgICAnZHVyYXRpb24nOiAnMScsXG4gICAgICAncHJvcHMnIDogSlNPTi5zdHJpbmdpZnkoW3sndG8nOiAnJyArIGNvbmZpZy50cmFuc2xhdGlvblgsICdwcm9wJzondHJhbnNsYXRpb25YJywgJ2Zyb20nOicwJ31dKVxuICAgIH1dO1xuXG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX2FuaW1hdGUoeydpZCc6JycrY29uZmlnLmlkLCdqc29uJzpKU09OLnN0cmluZ2lmeShwcm9wcyl9KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnRyYW5zbGF0aW9uWSkge1xuICAgIGxldCBwcm9wcyA9IFt7XG4gICAgICAnaWQnOiAnJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKSxcbiAgICAgICd0eXBlJzogJ3RyYW5zbGF0aW9uJyxcbiAgICAgICdydW5PblJlbmRlcicgOiAndHJ1ZScsXG4gICAgICAnZWFzaW5nJyA6ICdsaW5lYXInLFxuICAgICAgJ2RlbGF5JzogJzAnLFxuICAgICAgJ2R1cmF0aW9uJzogJzEnLFxuICAgICAgJ3Byb3BzJyA6IEpTT04uc3RyaW5naWZ5KFt7J3RvJzogJycgKyBjb25maWcudHJhbnNsYXRpb25ZLCdwcm9wJzondHJhbnNsYXRpb25ZJywnZnJvbSc6JzAnfV0pXG4gICAgfV07XG5cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfYW5pbWF0ZSh7J2lkJzonJytjb25maWcuaWQsJ2pzb24nOkpTT04uc3RyaW5naWZ5KHByb3BzKX0pKTtcbiAgfVxuXG4gIGlmIChjb25maWcuYV9yb3RhdGUpIHtcbiAgICAvL1RPRE86IEZJWCBUSElTIEJSSU5HIElUIE9VVFNJREVcbiAgICBsZXQgcHJvcHMgPSB7XG4gICAgICAgIFwiZHVyYXRpb25cIjogY29uZmlnLmFfZHVyYXRpb24sXG4gICAgICAgIFwiaWRcIjogY29uZmlnLmlkLFxuICAgICAgICBcImRlbGF5XCI6IGNvbmZpZy5hX2RlbGF5LFxuICAgICAgICBcIm9wdGlvblwiOiBjb25maWcuYV9vcHRpb24sXG4gICAgICAgIFwidHlwZVwiOiBcInJvdGF0aW9uXCIsXG4gICAgIH07XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfYW5pbWF0ZShwcm9wcykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImh0bWxUZXh0XCIpKSB7XG4gICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRIVE1MVGV4dChjb25maWcuaHRtbFRleHQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJicmluZ1N1YlZpZXdUb0Zyb250XCIpKSB7XG4gICAgbGV0IHZpZXdUYWcgPSBjUyhjb25maWcuaWQpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19icmluZ1N1YlZpZXdUb0Zyb250KHZpZXdUYWcpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJjb250ZW50TW9kZVwiKSkge1xuICAgIGxldCBjb250ZW50TW9kZSA9IGNTKGNvbmZpZy5jb250ZW50TW9kZSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldENvbnRlbnRNb2RlKGNvbnRlbnRNb2RlKSk7XG4gIH1cblxuICBpZihjb25maWcub25Gb2N1cyl7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldE9uRm9jdXNDYWxsYmFjayhjb25maWcub25Gb2N1cykpO1xuICB9XG5cbiAgaWYoY29uZmlnLmhhc093blByb3BlcnR5KFwib25NZXJjaGFudFZpZXdIZWlnaHRDaGFuZ2VcIikpe1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRPbk1lcmNoYW50Vmlld0hlaWdodENoYW5nZUNhbGxiYWNrKGNvbmZpZy5vbk1lcmNoYW50Vmlld0hlaWdodENoYW5nZSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInBpdm90WFwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19waXZvdFgoY29uZmlnLnBpdm90WCtcIlwiKSk7XG4gIH1cblxuaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInBpdm90WVwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19waXZvdFkoY29uZmlnLnBpdm90WStcIlwiKSk7XG4gIH1cblxuICBpZihjb25maWcuaGFzT3duUHJvcGVydHkoXCJvbkl0ZW1DbGlja1wiKSl7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldE9uSXRlbUNsaWNrKGNvbmZpZy5vbkl0ZW1DbGljaykpO1xuICB9XG5cblxuICBpZiAoY29uZmlnLnN0YXR1c0JhclN0eWxlKSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcuc3RhdHVzQmFyU3R5bGUpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFN0YXR1c0JhclN0eWxlKGVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJlbmFibGVkXCIpKSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcuZW5hYmxlZCk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RW5hYmxlZChlbmFibGVkKSk7XG4gIH1cblxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJpbnB1dFR5cGVJXCIpKSB7XG4gICAgICBsZXQga2V5Ym9hcmRUeXBlID0gY1MoY29uZmlnLmlucHV0VHlwZUkpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEtleWJvYXJkVHlwZShrZXlib2FyZFR5cGUpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaW5wdXRUeXBlKSB7XG4gICAgbGV0IGtleWJvYXJkVHlwZSA9IGNvbmZpZy5pbnB1dFR5cGU7XG4gICAgaWYgKGtleWJvYXJkVHlwZSA9PSBcIm51bWVyaWNcIiB8fCBrZXlib2FyZFR5cGUgPT0gXCJudW1lcmljV2l0aG91dFN1Z2dlc3Rpb25cIikge1xuICAgICAgY29uZmlnLmlucHV0VHlwZSA9IDQ7XG4gICAgfSBlbHNlIGlmIChrZXlib2FyZFR5cGUgPT0gXCJlbWFpbFwiKSB7XG4gICAgICBjb25maWcuaW5wdXRUeXBlID0gNztcbiAgICB9IGVsc2UgaWYgKGtleWJvYXJkVHlwZSA9PSBcIm51bWVyaWNQYXNzd29yZFwiKSB7XG4gICAgICBjb25maWcuaW5wdXRUeXBlID0gNDtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTZWN1cmVUZXh0RW50cnkoXCIxXCIpKTtcbiAgICB9IGVsc2UgaWYgKGtleWJvYXJkVHlwZSA9PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgIGNvbmZpZy5pbnB1dFR5cGUgPSAwO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFNlY3VyZVRleHRFbnRyeShcIjFcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuaW5wdXRUeXBlID0gMDtcbiAgICB9XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEtleWJvYXJkVHlwZShjUyhjb25maWcuaW5wdXRUeXBlKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImF1dG9DYXBpdGFsaXphdGlvblR5cGVcIikpIHtcbiAgICAgIGxldCBrZXlib2FyZFR5cGUgPSBjUyhjb25maWcuYXV0b0NhcGl0YWxpemF0aW9uVHlwZSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0QXV0b0NhcGl0YWxpemF0aW9uVHlwZShrZXlib2FyZFR5cGUpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJhdXRvQ29ycmVjdGlvblR5cGVcIikpIHtcbiAgICBsZXQgYXV0b0NvcnJlY3Rpb25UeXBlID0gY1MoY29uZmlnLmF1dG9Db3JyZWN0aW9uVHlwZSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0QXV0b0NvcnJlY3Rpb25UeXBlKGF1dG9Db3JyZWN0aW9uVHlwZSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImJlY29tZUZpcnN0UmVzcG9uZGVyXCIpKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfYmVjb21lRmlyc3RSZXNwb25kZXIoKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic2V0T25cIikpIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5zZXRPbik7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0T24oZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zY3JvbGxUb0luZGV4KSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcuc2Nyb2xsVG9JbmRleCk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2Nyb2xsVG9JbmRleChlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNob3dWZXJ0aWNhbFNjcm9sbEJhcikge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLnNob3dWZXJ0aWNhbFNjcm9sbEJhcik7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2hvd1ZlcnRpY2FsU2Nyb2xsQmFyKGVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcubGVuZ3RoTGltaXQpIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5sZW5ndGhMaW1pdCk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VGV4dExlbmd0aExpbWl0KGVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJzd3lwZUVuYWJsZWRcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U3d5cGUoY29uZmlnLnN3eXBlRW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImZvY3VzXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX2JlY29tZUZpcnN0UmVzcG9uZGVyKGNTKGNvbmZpZy5mb2N1cykpKTtcbiAgfVxuXG4gIGlmIChjb25maWcucGF0dGVybikge1xuICAgIHZhciBwYXRTdHIgPSBjUyhjb25maWcucGF0dGVybik7XG4gICAgdmFyIHBhdEFyciA9IHBhdFN0ci5zcGxpdChcIixcIik7XG4gICAgdmFyIHBhdExlbiA9IHBhdEFycltwYXRBcnIubGVuZ3RoIC0gMV07XG4gICAgcGF0U3RyID0gcGF0QXJyLnNsaWNlKDAsIHBhdEFyci5sZW5ndGggLSAxKS5qb2luKFwiLFwiKTtcblxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRSZWd1bGFyRXhwcmVzc2lvbihjUyhwYXRTdHIpKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRleHRMZW5ndGhMaW1pdChjUyhwYXRMZW4pKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnJlZ0V4cCkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLnJlZ0V4cCk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0UmVndWxhckV4cHJlc3Npb24oZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5yZW1vdmVDZWxsKSB7XG4gICAgbGV0IGNlbGxJbmRleCA9IGNTKGNvbmZpZy5yZW1vdmVDZWxsKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19yZW1vdmVDZWxsKGNlbGxJbmRleCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zZWN1cmVUZXh0RW50cnkpIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5zZWN1cmVUZXh0RW50cnkpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFNlY3VyZVRleHRFbnRyeShlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KCdjaGVja2VkJykpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0T24oY29uZmlnLmNoZWNrZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcucG9wdXBNZW51KSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX3NldFBvcHVwTWVudShjb25maWcucG9wdXBNZW51LCBjb25maWcub25NZW51SXRlbUNsaWNrKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYWxwaGFcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfc2V0QWxwaGEoY29uZmlnLmFscGhhKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmFuaW1hdGlvbikge1xuICAgIGxldCBhbmltUHJvcHMgPSB7XG4gICAgICB2aWV3VGFnOiAnJyArIGNvbmZpZy5pZCxcbiAgICAgIGpzb246IGNvbmZpZy5hbmltYXRpb25cbiAgICB9O1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9hbmltYXRlTmV3KGFuaW1Qcm9wcykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInRleHRcIikpIHtcbiAgICBpZiAoY29uZmlnLmxldHRlclNwYWNpbmcpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRMZXR0ZXJTcGFjaW5nKGNTKGNvbmZpZy5sZXR0ZXJTcGFjaW5nKSkpO1xuICAgIH1cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VGV4dChjUyhjb25maWcudGV4dCkpKTtcbiAgfVxuXG4gIGlmKGNvbmZpZy5jdXJzb3JQb3NpdGlvbikge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9zZXRDdXJzb3JQb3NpdGlvbihjUyhjb25maWcuaWQpLCBjUyhjb25maWcuY3Vyc29yUG9zaXRpb24pKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLm9uU3dpcGUgJiYgdHlwZW9mIGNvbmZpZy5vblN3aXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTd2lwZUNhbGxiYWNrKGNhbGxiYWNrTWFwcGVyLm1hcChjb25maWcub25Td2lwZSkpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJjbG9zZVN3aXBlXCIpKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Q2xvc2VTd2lwZShjb25maWcuY2xvc2VTd2lwZSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInN3eXBlRW5hYmxlZFwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRFbmFibGVTd3lwZShjb25maWcuc3d5cGVFbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwibGlzdERhdGFcIikgJiYgY29uZmlnLmhhc093blByb3BlcnR5KFwibGlzdEl0ZW1cIikpIHtcbiAgICBjb25zdCBpdGVtID0gSlNPTi5wYXJzZShjb25maWcubGlzdEl0ZW0pO1xuICAgIGl0ZW0uaXRlbVZpZXcgPSBBbmRyb2lkLmNyZWF0ZUxpc3REYXRhKGNvbmZpZy5pZCwgaXRlbS5pdGVtVmlldyk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldHVwTGlzdChjb25maWcubGlzdERhdGEsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiaW5saW5lQW5pbWF0aW9uXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX2lubGluZUFuaW1hdGlvbihjb25maWcpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJjbGlwc1RvQm91bmRzXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldENsaXBzVG9Cb3VuZHMoY29uZmlnLmNsaXBzVG9Cb3VuZHMpKTtcbiAgfVxuXG4gIGlmKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNvcm5lclJhZGlpXCIpKXtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Q29ybmVyQ3VydmVzKGNvbmZpZy5jb3JuZXJSYWRpaSkpO1xuICB9XG5cbiAgY29uZmlnLmN1cnJDaGlsZE9mZnNldCA9IDA7XG4gIGNvbmZpZyA9IHRyYW5zZm9ybUtleXMoY29uZmlnKTtcblxuICByZXR1cm4ge2NvbmZpZzogY29uZmlnLCB0eXBlOiB0eXBlfTtcbn07XG5cbmZ1bmN0aW9uIHNlbGZfYW5pbWF0ZU5ldyhwcm9wcykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiYW5pbWF0ZTpcIixcbiAgICBcInZhbHVlc1wiOiBbcHJvcHNdXG4gIH07XG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRwYXJzZVBhcmFtcyA6IHJlcXVpcmUoXCIuL3BhcnNlUGFyYW1zXCIpLFxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5BcnJheS5wcm90b3R5cGUucm90YXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gc2F2ZSByZWZlcmVuY2VzIHRvIGFycmF5IGZ1bmN0aW9ucyB0byBtYWtlIGxvb2t1cCBmYXN0ZXJcbiAgdmFyIHB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaCxcbiAgICBzcGxpY2UgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoY291bnQpIHtcbiAgICB2YXIgbGVuID0gdGhpcy5sZW5ndGggPj4+IDAsIC8vIGNvbnZlcnQgdG8gdWludFxuICAgICAgY291bnQgPSBjb3VudCA+PiAwOyAvLyBjb252ZXJ0IHRvIGludFxuXG4gICAgLy8gY29udmVydCBjb3VudCB0byB2YWx1ZSBpbiByYW5nZSBbMCwgbGVuKVxuICAgIGNvdW50ID0gKChjb3VudCAlIGxlbikgKyBsZW4pICUgbGVuO1xuXG4gICAgLy8gdXNlIHNwbGljZS5jYWxsKCkgaW5zdGVhZCBvZiB0aGlzLnNwbGljZSgpIHRvIG1ha2UgZnVuY3Rpb24gZ2VuZXJpY1xuICAgIHB1c2guYXBwbHkodGhpcywgc3BsaWNlLmNhbGwodGhpcywgMCwgY291bnQpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGZsYXR0ZW5PYmplY3Qob2IpIHtcbiAgdmFyIHRvUmV0dXJuID0ge307XG4gIGZvciAodmFyIGkgaW4gb2IpIHtcbiAgICBpZiAoIW9iLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcbiAgICBpZiAoKHR5cGVvZiBvYltpXSkgPT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBmbGF0T2JqZWN0ID0gZmxhdHRlbk9iamVjdChvYltpXSk7XG4gICAgICBmb3IgKHZhciB4IGluIGZsYXRPYmplY3QpIHtcbiAgICAgICAgaWYgKCFmbGF0T2JqZWN0Lmhhc093blByb3BlcnR5KHgpKSBjb250aW51ZTtcbiAgICAgICAgaWYgKHR5cGVvZiBmbGF0T2JqZWN0W3hdICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgIHRvUmV0dXJuW3hdID0gZmxhdE9iamVjdFt4XTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdG9SZXR1cm5baV0gPSBvYltpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9SZXR1cm47XG59XG5cbmZ1bmN0aW9uIHBhcnNlQ29sb3JzKGNvbG9yKSB7XG4gIGlmIChjb2xvci5sZW5ndGggPCA4KVxuICAgIHJldHVybiBjb2xvcjtcblxuICBpZiAoY29sb3IuaW5kZXhPZihcInJnYmFcIikgIT09IC0xIHx8IGNvbG9yLmluZGV4T2YoXCJyZ2JcIikgIT09IC0xKVxuICAgIHJldHVybiBjb2xvcjtcblxuICB2YXIgYWxwaGEgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMyksIDE2KTtcbiAgYWxwaGEgPSAoYWxwaGEgLyAyNTUpLnRvRml4ZWQoMik7XG5cbiAgdmFyIGhleENvbG9yID0gY29sb3Iuc3Vic3RyaW5nKDMsIDkpO1xuICB2YXIgcmdiYUNvbG9yID0gXCJyZ2JhKFwiICsgY29udmVydEhleFRvUmdiKGhleENvbG9yKSArIFwiLFwiICsgYWxwaGEgKyBcIilcIjtcblxuICByZXR1cm4gcmdiYUNvbG9yO1xufVxuXG5mdW5jdGlvbiBwYXJzZUxheW91dFByb3BzKHR5cGUsIGNvbmZpZywga2V5KSB7XG4gIGNvbnN0IGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA3MDBcbiAgaWYgKHR5cGVvZiBjb25maWdba2V5XSA9PSBcInVuZGVmaW5lZFwiIHx8IGNvbmZpZ1trZXldID09IG51bGwpIHtcbiAgICBkZWxldGUgY29uZmlnW2tleV07XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFjb25maWcuc3R5bGUpIHtcbiAgICBjb25maWcuc3R5bGUgPSB7fTtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICBjb25maWcuYW5pbWF0aW9uID0ge307XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gPSBcIlwiO1xuICB9XG5cbiAgaWYgKCFjb25maWcuYXR0cmlidXRlcylcbiAgICBjb25maWcuYXR0cmlidXRlcyA9IHt9O1xuXG4gIGlmICghY29uZmlnLnN0eWxlLmNsYXNzTmFtZSlcbiAgICBjb25maWcuc3R5bGUuY2xhc3NOYW1lID0gXCJcIjtcblxuICBpZiAoKGtleSA9PSBcIm9uQ2xpY2tcIiB8fCBrZXkgPT0gXCJvbkNsaWNrRXZlbnRcIikpIHtcbiAgICBpZighaXNNb2JpbGUgJiYgIWNvbmZpZy5jdXJzb3JUeXBlKXtcbiAgICAgIGNvbmZpZy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICB9XG4gIH1cbiAgaWYoa2V5ID09IFwiY3Vyc29yVHlwZVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmN1cnNvciA9IGNvbmZpZy5jdXJzb3JUeXBlO1xuICB9XG4gIGlmIChrZXkgPT0gXCJ0ZXh0U2l6ZVwiKVxuICAgIGNvbmZpZy5zdHlsZS5mb250U2l6ZSA9IGNvbmZpZy50ZXh0U2l6ZSArICdweCc7XG4gIGlmIChrZXkgPT0gJ2ZvbnRTaXplJylcbiAgICBjb25maWcuc3R5bGUuZm9udFNpemUgPSBjb25maWcuZm9udFNpemUgKyAncHgnO1xuICBcbiAgaWYgKGtleSA9PSAndXJsJylcbiAgICBjb25maWcuYXR0cmlidXRlcy5zcmMgPSBjb25maWcudXJsXG4gICAgXG4gIC8qaWYgKGtleSA9PSBcImltYWdlVXJsXCIpe1xuICAgIGxldCBpbWFnZVVybCA9IGNvbmZpZy5pbWFnZVVybDtcbiAgICBcbiAgICBpZihjb25maWcucmF3RGF0YSkge1xuICAgICAgLy8gRG8gbm90aGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGVtcCA9IGltYWdlVXJsLnNwbGl0KCcuJyk7XG4gICAgICBsZXQgZXh0ID0gJyc7XG4gICAgICBpZih0ZW1wICYmIHRlbXAubGVuZ3RoID4gMClcbiAgICAgICAgZXh0ID0gdGVtcFt0ZW1wLmxlbmd0aCAtIDFdO1xuICAgICAgXG4gICAgICBsZXQgZXh0cyA9IFtcImpwZWdcIiwgXCJqcGdcIiwgXCJwbmdcIiwgXCJibXBcIiwgXCJzdmdcIiwgXCJnaWZcIl07XG4gICAgICBleHQgPSBleHQudG9Mb3dlckNhc2UoKTtcblxuICAgICAgaWYoIWV4dHMuaW5jbHVkZXMoZXh0KSkge1xuICAgICAgICBpbWFnZVVybCArPSAnLnBuZyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlnLmF0dHJpYnV0ZXMuc3JjID0gaW1hZ2VVcmw7XG4gIH0qL1xuXG4gIGlmIChrZXkgPT0gXCJiYWNrZ3JvdW5kQ29sb3JcIikge1xuICAgIGNvbmZpZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJzZUNvbG9ycyhjb25maWcuYmFja2dyb3VuZENvbG9yKTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJiYWNrZ3JvdW5kXCIpIHtcbiAgICBjb25maWcuc3R5bGUuYmFja2dyb3VuZCA9IGNvbmZpZy5iYWNrZ3JvdW5kO1xuICB9XG4gIGlmIChrZXkgPT0gXCJiYWNrZ3JvdW5kRHJhd2FibGVcIikge1xuICAgIGNvbmZpZy5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBcInVybCgnXCIrY29uZmlnLmJhY2tncm91bmREcmF3YWJsZStcIicpXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiY29sb3JcIikge1xuICAgIGNvbmZpZy5zdHlsZS5jb2xvciA9IHBhcnNlQ29sb3JzKGNvbmZpZy5jb2xvcik7XG4gIH1cblxuICBpZihrZXkgPT0gXCJwb3NpdGlvblwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnBvc2l0aW9uID0gY29uZmlnLnBvc2l0aW9uO1xuICB9XG5cbiAgaWYoa2V5ID09IFwiYm90dG9tRml4ZWRcIikge1xuICAgIGNvbmZpZy5zdHlsZS5ib3R0b20gPSBjb25maWcuYm90dG9tRml4ZWQ7XG4gIH1cbiAgaWYoa2V5ID09IFwidG9wRml4ZWRcIikge1xuICAgIGNvbmZpZy5zdHlsZS50b3AgPSBjb25maWcudG9wRml4ZWQ7XG4gIH1cblxuICBpZihrZXkgPT0gXCJhdXRvZm9jdXNcIil7XG4gICAgaWYoY29uZmlnLmF1dG9mb2N1cyl7XG4gICAgICBjb25maWcuYXR0cmlidXRlc1tcImF1dG9mb2N1c1wiXSA9IFwiYXV0b2ZvY3VzXCI7ICBcbiAgICB9XG4gIH1cbiAgaWYoa2V5PT1cImZvY3VzXCIpIHtcbiAgICBpZiAoY29uZmlnLmZvY3VzICYmIGNvbmZpZy5pZCl7XG4gICAgICB2YXIgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmlkKTtcbiAgICAgIGlmIChkb2Mpe1xuICAgICAgICBkb2MuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJjb3JuZXJSYWRpdXNcIikge1xuICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBjb25maWcuY29ybmVyUmFkaXVzICsgXCJweFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFscGhhXCIpIHtcbiAgICBjb25maWcuc3R5bGUub3BhY2l0eSA9IGNvbmZpZ1trZXldO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfYWxwaGFcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24ub3BhY2l0eSA9IGNvbmZpZ1trZXldO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImZvbnRGYW1pbHlcIikge1xuICAgIGNvbmZpZy5zdHlsZS5mb250RmFtaWx5ID0gY29uZmlnLmZvbnRGYW1pbHk7XG4gIH1cblxuICBpZiAoa2V5ID09ICd0eXBlZmFjZScpIHtcbiAgICBzd2l0Y2goY29uZmlnLnR5cGVmYWNlKXtcbiAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgIGNvbmZpZy5zdHlsZS5mb250V2VpZ2h0ID0gNDAwO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib2xkJzpcbiAgICAgICAgY29uZmlnLnN0eWxlLmZvbnRXZWlnaHQgPSA3MDA7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2l0YWxpYyc6XG4gICAgICAgIGNvbmZpZy5zdHlsZS5mb250U3R5bGUgPSAnaXRhbGljJztcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm9sZF9pdGFsaWMnOlxuICAgICAgICBjb25maWcuc3R5bGUuZm9udFdlaWdodCA9IDcwMDtcbiAgICAgICAgY29uZmlnLnN0eWxlLmZvbnRTdHlsZSA9ICdpdGFsaWMnO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1bmRlcmxpbmUnOlxuICAgICAgICBjb25maWcuc3R5bGUudGV4dERlY29yYXRpb24gPSAndW5kZXJsaW5lJztcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJmb250U3R5bGVcIikge1xuICAgIGxldCBtYXRjaCA9IGNvbmZpZy5mb250U3R5bGUubWF0Y2goL1svLV0vKTtcbiAgICBsZXQgZm9udE5hbWUgPSBtYXRjaCA/IGNvbmZpZy5mb250U3R5bGUuc2xpY2UoMCwgbWF0Y2guaW5kZXgpIDogY29uZmlnLmZvbnRTdHlsZTtcbiAgICBjb25maWcuc3R5bGUuZm9udEZhbWlseSA9IGZvbnROYW1lO1xuXG4gICAgaWYgKCFtYXRjaClcbiAgICAgIHJldHVybjtcblxuICAgIGxldCB0eXBlID0gY29uZmlnLmZvbnRTdHlsZS5zbGljZShtYXRjaC5pbmRleCArIDEpO1xuICAgIHR5cGUgPSB0eXBlLnJlcGxhY2UoL1stL10vZywgJycpO1xuICAgIHR5cGUgID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHR5cGUuaW5kZXhPZignaXRhbGljJykgIT0gLTEpXG4gICAgICBjb25maWcuc3R5bGUuZm9udFN0eWxlID0gJ2l0YWxpYyc7XG5cbiAgICBsZXQgZm9udFdlaWdodCA9IDA7XG5cbiAgICBpZiAodHlwZS5pbmRleE9mKCdleHRyYWxpZ2h0JykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gMjAwO1xuICAgIGVsc2UgaWYgKHR5cGUuaW5kZXhPZignbGlnaHQnKSAhPSAtMSlcbiAgICAgIGZvbnRXZWlnaHQgPSAzMDA7XG4gICAgZWxzZSBpZiAodHlwZS5pbmRleE9mKCdyZWd1bGFyJykgIT0gLTEgfHwgdHlwZS5pbmRleE9mKCdib29rJykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gNDAwO1xuICAgIGVsc2UgaWYgKHR5cGUuaW5kZXhPZignc2VtaWJvbGQnKSAhPSAtMSB8fCB0eXBlLmluZGV4T2YoJ21lZGl1bScpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDUwMDtcbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2JvbGQnKSAhPSAtMSB8fCB0eXBlLmluZGV4T2YoJ2hlYXZ5JykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gNzAwO1xuICAgIGVsc2UgaWYgKHR5cGUuaW5kZXhPZignYmxhY2snKSAhPSAtMSlcbiAgICAgIGZvbnRXZWlnaHQgPSA5MDA7XG5cbiAgICBpZihmb250V2VpZ2h0ID4gMClcbiAgICAgIGNvbmZpZy5zdHlsZS5mb250V2VpZ2h0ID0gZm9udFdlaWdodDtcbiAgfVxuXG4gIGlmIChrZXkgPT0gJ3Zpc2liaWxpdHknKSB7XG4gICAgbGV0IHZpc2liaWxpdHkgPSBjb25maWcudmlzaWJpbGl0eTtcbiAgICBpZiAodmlzaWJpbGl0eSA9PSAnaW52aXNpYmxlJylcbiAgICAgIGNvbmZpZy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBlbHNlIGlmICh2aXNpYmlsaXR5ID09ICdnb25lJylcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZWxzZSB7XG4gICAgICBjb25maWcuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICAgIH1cbiAgfSBcblxuICBpZiAoa2V5ID09ICdleHBhbmQnKSB7XG4gICAgbGV0IHZpc2liaWxpdHkgPSBjb25maWcuZXhwYW5kICsgJyc7XG4gICAgaWYgKHZpc2liaWxpdHkgPT0gJ3RydWUnKXtcbiAgICAgIGNvbmZpZy5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwic3Ryb2tlXCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZS5zcGxpdChcIixcIik7XG5cbiAgICBpZih2YWx1ZXMubGVuZ3RoID09IDIpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICBlbHNlIGlmKHZhbHVlcy5sZW5ndGggPT0gMyl7XG4gICAgICBpZiAodmFsdWVzWzJdID09IFwicmJsXCIpe1xuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyQm90dG9tID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckxlZnQgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyUmlnaHQgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodmFsdWVzWzJdID09IFwiYlwiKXtcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckJvdHRvbSA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXIgPSB2YWx1ZXNbMF0gKyBcInB4IFwiICsgdmFsdWVzWzFdICsgXCIgXCIgKyB2YWx1ZXNbMl07XG4gICAgfVxuICAgIFxuICB9XG5cbiAgaWYgKGtleSA9PSBcInN0cm9rZVRvcFwiKSB7XG4gICAgbGV0IHZhbHVlcyA9IGNvbmZpZy5zdHJva2VUb3Auc3BsaXQoXCIsXCIpO1xuICAgIFxuICAgIGlmKHZhbHVlcy5sZW5ndGggPT0gMilcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJUb3AgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgIGVsc2UgaWYodmFsdWVzLmxlbmd0aCA9PSAzKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlclRvcCA9IHZhbHVlc1swXSArIFwicHggXCIgKyB2YWx1ZXNbMV0gKyBcIiBcIiArIHZhbHVlc1syXTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzdHJva2VSaWdodFwiKSB7XG4gICAgbGV0IHZhbHVlcyA9IGNvbmZpZy5zdHJva2VSaWdodC5zcGxpdChcIixcIik7XG4gICAgXG4gICAgaWYodmFsdWVzLmxlbmd0aCA9PSAyKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICBlbHNlIGlmKHZhbHVlcy5sZW5ndGggPT0gMylcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJSaWdodCA9IHZhbHVlc1swXSArIFwicHggXCIgKyB2YWx1ZXNbMV0gKyBcIiBcIiArIHZhbHVlc1syXTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzdHJva2VCb3R0b21cIikge1xuICAgIGxldCB2YWx1ZXMgPSBjb25maWcuc3Ryb2tlQm90dG9tLnNwbGl0KFwiLFwiKTtcbiAgICBcbiAgICBpZih2YWx1ZXMubGVuZ3RoID09IDIpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyQm90dG9tID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICBlbHNlIGlmKHZhbHVlcy5sZW5ndGggPT0gMylcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJCb3R0b20gPSB2YWx1ZXNbMF0gKyBcInB4IFwiICsgdmFsdWVzWzFdICsgXCIgXCIgKyB2YWx1ZXNbMl07XG4gIH1cblxuICBpZiAoa2V5ID09IFwic3Ryb2tlTGVmdFwiKSB7XG4gICAgbGV0IHZhbHVlcyA9IGNvbmZpZy5zdHJva2VMZWZ0LnNwbGl0KFwiLFwiKTtcbiAgICBcbiAgICBpZih2YWx1ZXMubGVuZ3RoID09IDIpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyTGVmdCA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgZWxzZSBpZih2YWx1ZXMubGVuZ3RoID09IDMpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyTGVmdCA9IHZhbHVlc1swXSArIFwicHggXCIgKyB2YWx1ZXNbMV0gKyBcIiBcIiArIHZhbHVlc1syXTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJ0cmFuc2xhdGlvbllcIikge1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gKz0gXCJ0cmFuc2xhdGVZKFwiICsgY29uZmlnW2tleV0gKyBcInB4KSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3RyYW5zbGF0aW9uWVwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gKz0gXCJ0cmFuc2xhdGVZKFwiICsgY29uZmlnW2tleV0gKyBcInB4KSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJ0cmFuc2xhdGlvblhcIikge1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gKz0gXCJ0cmFuc2xhdGVYKFwiICsgY29uZmlnW2tleV0gKyBcInB4KSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3RyYW5zbGF0aW9uWFwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gKz0gXCJ0cmFuc2xhdGVYKFwiICsgY29uZmlnW2tleV0gKyBcInB4KSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzY2FsZVhcIikge1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gKz0gXCJzY2FsZVgoXCIgKyBjb25maWdba2V5XSArIFwiKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3NjYWxlWFwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gKz0gXCJzY2FsZVgoXCIgKyBjb25maWdba2V5XSArIFwiKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzY2FsZVlcIikge1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gKz0gXCJzY2FsZVkoXCIgKyBjb25maWdba2V5XSArIFwiKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3NjYWxlWVwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gKz0gXCJzY2FsZVkoXCIgKyBjb25maWdba2V5XSArIFwiKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJyb3RhdGlvblwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInJvdGF0ZShcIiArIGNvbmZpZ1trZXldICsgXCJkZWcpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfcm90YXRpb25cIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwicm90YXRlKFwiICsgY29uZmlnW2tleV0gKyBcImRlZykgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwicm90YXRpb25YXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwicm90YXRlWChcIiArIGNvbmZpZ1trZXldICsgXCJkZWcpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfcm90YXRpb25YXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInJvdGF0ZVgoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJyb3RhdGlvbllcIikge1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gKz0gXCJyb3RhdGVZKFwiICsgY29uZmlnW2tleV0gKyBcImRlZykgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9yb3RhdGlvbllcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwicm90YXRlWShcIiArIGNvbmZpZ1trZXldICsgXCJkZWcpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInRyYW5zbGF0aW9uWlwiKSB7XG4gICAgdmFyIHYgPSBjb25maWdba2V5XTtcbiAgICBjb25maWcuc3R5bGVbXCItd2Via2l0LWJveC1zaGFkb3dcIl0gPSBcIjAgMCBcIit2LnRvU3RyaW5nKCkrXCJweCByZ2JhKDAsMCwwLCAuMSlcIjtcbiAgICBjb25maWcuc3R5bGVbXCItbW96LWJveC1zaGFkb3dcIl09IFwiMCAwIFwiK3YudG9TdHJpbmcoKStcInB4IHJnYmEoMCwwLDAsIC4xKVwiO1xuICAgIGNvbmZpZy5zdHlsZVtcImJveC1zaGFkb3dcIl09ICBcIjAgMCBcIit2LnRvU3RyaW5nKCkrXCJweCByZ2JhKDAsMCwwLCAuMSlcIjtcbiAgICBcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX2R1cmF0aW9uXCIgJiYgIWlzTmFOKGNvbmZpZ1trZXldKSkge1xuICAgIGNvbnN0IHN1ZmZpeCA9IGNvbmZpZy50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPyAoXCIgXCIgKyBjb25maWcudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uKSA6IFwiXCI7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2l0aW9uID0gY29uZmlnW2tleV0gKyAnbXMgYWxsJyArIHN1ZmZpeDtcbiAgfVxuICBcbiAgaWYgKHR5cGUgPT0gXCJ0ZXh0Vmlld1wiICYmIGtleSA9PSBcImdyYXZpdHlcIiAmJiBjb25maWcuZ3Jhdml0eSkge1xuICAgIGNvbmZpZy5zdHlsZS50ZXh0QWxpZ24gPSBjb25maWcuZ3Jhdml0eTtcbiAgICBpZiAoY29uZmlnLmdyYXZpdHkgPT0gXCJjZW50ZXJfdmVydGljYWxcIikge1xuICAgICAgY29uZmlnLnN0eWxlW1wiYWxpZ24taXRlbXNcIl0gPSBcImNlbnRlclwiO1xuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5ncmF2aXR5ID09IFwiY2VudGVyX2hvcml6b250YWxcIikge1xuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImp1c3RpZnktY29udGVudFwiXSA9IFwiY2VudGVyXCI7XG4gICAgfSBlbHNlIGlmIChjb25maWcuZ3Jhdml0eSA9PSBcImNlbnRlclwiKSB7XG4gICAgICBjb25maWcuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYWxpZ24taXRlbXNcIl0gPSBcImNlbnRlclwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wianVzdGlmeS1jb250ZW50XCJdID0gXCJjZW50ZXJcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29uZmlnLmdyYXZpdHkgPT0gXCJjZW50ZXJcIil7XG4gICAgICBjb25maWcuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYWxpZ24taXRlbXNcIl0gPSBcImNlbnRlclwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wianVzdGlmeS1jb250ZW50XCJdID0gXCJjZW50ZXJcIjtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGUgPT0gXCJsaW5lYXJMYXlvdXRcIiAmJiBrZXkgPT0gXCJncmF2aXR5XCIgJiYgY29uZmlnLmdyYXZpdHkpe1xuICAgIGlmIChjb25maWcubWFyZ2luICYmIGNvbmZpZy5ncmF2aXR5PT1cImNlbnRlcl92ZXJ0aWNhbFwiKXtcbiAgICAgIHZhciBtYXJnaW49Y29uZmlnLm1hcmdpbi5zcGxpdChcIixcIik7XG4gICAgICBpZiAoY29uZmlnLndpZHRoID09IFwibWF0Y2hfcGFyZW50XCIpe1xuICAgICAgICAgY29uZmlnLnN0eWxlLndpZHRoPVwiY2FsYygxMDAlIC0gXCIrKHBhcnNlSW50KG1hcmdpblswXSkrcGFyc2VJbnQobWFyZ2luWzJdKSkudG9TdHJpbmcoKStcInB4IClcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoa2V5ID09IFwiaGludFwiKXtcbiAgICBjb25maWcuYXR0cmlidXRlcy5wbGFjZWhvbGRlciA9IGNvbmZpZy5oaW50O1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImNvbnRlbnRFZGl0YWJsZVwiICYmIGNvbmZpZy5jb250ZW50RWRpdGFibGUpe1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzLmNvbnRlbnRlZGl0YWJsZSA9IHRydWU7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiaWRcIikge1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzLmlkID0gY29uZmlnLmlkO1xuICB9XG5cblxuICBpZiAoa2V5ID09IFwiZ3JhZGllbnRcIikge1xuICAgIHZhciBncmFkaWVudE9iaiA9SlNPTi5wYXJzZShjb25maWcuZ3JhZGllbnQpO1xuICAgIGlmIChncmFkaWVudE9iai50eXBlID09IFwibGluZWFyXCIpIHtcbiAgICAgIHZhciBhbmdsZSA9IGdyYWRpZW50T2JqLmFuZ2xlO1xuICAgICAgdmFyIHZhbHVlcyA9IGdyYWRpZW50T2JqLnZhbHVlcztcbiAgICAgIHZhciBjb2xvcnMgPSB2YWx1ZXMuam9pbihcIiwgXCIpO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYmFja2dyb3VuZC1pbWFnZVwiXSA9IFwibGluZWFyLWdyYWRpZW50KFwiK2FuZ2xlK1wiZGVnLCBcIitjb2xvcnMrXCIpXCJcbiAgICB9XG4gICAgIGVsc2Uge1xuICAgICAgdmFyIHZhbHVlcyA9IGdyYWRpZW50T2JqLnZhbHVlcztcbiAgICAgIHZhciBjb2xvcnMgPSB2YWx1ZXMuam9pbihcIiwgXCIpO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYmFja2dyb3VuZC1pbWFnZVwiXSA9IFwicmFkaWFsLWdyYWRpZW50KFwiK2NvbG9ycytcIilcIlxuICAgICB9XG4gIH1cblxuXG4gIGlmIChrZXkgPT0gXCJpbnB1dFR5cGVcIikge1xuICAgIHZhciBpbnB1dFR5cGUgPSBcInRleHRcIjtcbiAgICBpZiAoY29uZmlnLmlucHV0VHlwZSA9PSBcIm51bWVyaWNQYXNzd29yZFwiIHx8IGNvbmZpZy5pbnB1dFR5cGUgPT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICBpZihjb25maWcuaW5wdXRUeXBlSSA9PSA0ICYmIGlzTW9iaWxlKXtcbiAgICAgICAgaW5wdXRUeXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIGNvbmZpZy5zdHlsZVtcIi13ZWJraXQtdGV4dC1zZWN1cml0eVwiXSA9IFwiZGlzY1wiO1xuICAgICAgICBjb25maWcuc3R5bGVbXCItbW96LXRleHQtc2VjdXJpdHlcIl0gPSBcImRpc2NcIjtcbiAgICAgICAgY29uZmlnLnN0eWxlW1widGV4dC1zZWN1cml0eVwiXSA9IFwiZGlzY1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXRUeXBlID0gXCJwYXNzd29yZFwiXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb25maWcuaW5wdXRUeXBlID09IFwiZGlzYWJsZWRcIikge1xuICAgICAgICBjb25maWcuYXR0cmlidXRlcy5kaXNhYmxlZCA9ICdkaXNhYmxlZCdcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5pbnB1dFR5cGUgPT0gXCJudW1lcmljXCIpIHtcbiAgICAgICAgaW5wdXRUeXBlID0gXCJudW1iZXJcIlxuICAgIH1cbiAgICBpZiAoY29uZmlnLnNlcGFyYXRvcikge1xuICAgICAgaW5wdXRUeXBlID0gXCJ0ZXh0XCJcbiAgICB9XG5cbiAgICBjb25maWcuYXR0cmlidXRlcy50eXBlID0gaW5wdXRUeXBlXG4gIH1cblxuICBpZiAoa2V5ID09IFwicm90YXRlSW1hZ2VcIikge1xuICAgIGlmKGNvbmZpZy5yb3RhdGVJbWFnZSl7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tZHVyYXRpb25cIl0gPSBcIjRzXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXCJdID0gXCJsaW5lYXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1kZWxheVwiXSA9IFwiMHNcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1pdGVyYXRpb24tY291bnRcIl0gPSBcImluZmluaXRlXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tZGlyZWN0aW9uXCJdID0gXCJub3JtYWxcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1maWxsLW1vZGVcIl0gPSBcIm5vbmVcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1wbGF5LXN0YXRlXCJdID0gXCJydW5uaW5nXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tbmFtZVwiXSA9IFwicm90YXRpb25cIjtcblxuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJwYXR0ZXJuXCIpIHtcbiAgICBjb25maWcuYXR0cmlidXRlc1tcImRhdGEtcGF0dGVyblwiXSA9IGNvbmZpZy5wYXR0ZXJuO1xuICB9XG4gIGlmKGtleSA9PSBcImlucHV0VHlwZUlcIil7XG4gICAgaWYoY29uZmlnLmlucHV0VHlwZUkgPT0gNCl7XG4gICAgICBjb25maWcuYXR0cmlidXRlc1tcImlucHV0bW9kZVwiXSA9IFwibnVtZXJpY1wiO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzZXBhcmF0b3JcIikge1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wic2VwYXJhdG9yXCJdID0gY29uZmlnLnNlcGFyYXRvcjtcbiAgfVxuICBpZiAoa2V5ID09IFwic2VwYXJhdG9yUmVwZWF0XCIpIHtcbiAgICBjb25maWcuYXR0cmlidXRlc1tcInNlcGFyYXRvclJlcGVhdFwiXSA9IGNvbmZpZy5zZXBhcmF0b3JSZXBlYXQ7XG4gIH1cblxuICBpZiAoa2V5ID09IFwibXlBdHRyXCIpIHtcbiAgICBjb25maWcuYXR0cmlidXRlc1tcIm15QXR0clwiXSA9IGNvbmZpZy5teUF0dHI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwic2hhZG93XCIpIHtcbiAgICB2YXIgc2hhZG93VmFsdWVzID0gY29uZmlnLnNoYWRvdy5zcGxpdChjb25maWcuc2hhZG93U2VwYXJhdG9yIHx8ICcsJyk7XG4gICAgdmFyIHNoYWRvd0JsdXIgPSByV1MoY1Moc2hhZG93VmFsdWVzWzJdKSk7XG4gICAgdmFyIHNoYWRvd1NwcmVhZCA9IHJXUyhjUyhzaGFkb3dWYWx1ZXNbM10pKTtcbiAgICB2YXIgc2hhZG93T3BhY2l0eSA9IHJXUyhjUyhzaGFkb3dWYWx1ZXNbNV0pKTtcbiAgICB2YXIgc2hhZG93T2Zmc2V0ID0ge1xuICAgICAgICB4OiByV1MoY1Moc2hhZG93VmFsdWVzWzBdKSksXG4gICAgICAgIHk6IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMV0pKVxuICAgICAgfTtcblxuICAgIHZhciBzaGFkb3dDb2xvciA9IGNvbnZlcnRDb2xvclRvUmdiYShzaGFkb3dWYWx1ZXNbNF0pO1xuICAgIHZhciBzaGFkb3dUeXBlID0gY29uZmlnLnNoYWRvd1R5cGUgPyBgJHtjb25maWcuc2hhZG93VHlwZX0gYCA6ICcnXG5cbiAgICBjb25maWdbXCJzdHlsZVwiXVtcImJveC1zaGFkb3dcIl0gPSBzaGFkb3dUeXBlICsgcGFyc2VJbnQoc2hhZG93T2Zmc2V0LngpICsgXCJweCBcIiArIHBhcnNlSW50KHNoYWRvd09mZnNldC55KSArIFwicHggXCIgKyBwYXJzZUludChzaGFkb3dCbHVyKSArIFwicHggXCIgKyBwYXJzZUludChzaGFkb3dTcHJlYWQpICsgXCJweCByZ2JhKFwiICsgc2hhZG93Q29sb3IuciArIFwiLCBcIiArICBzaGFkb3dDb2xvci5nICsgXCIsIFwiICsgIHNoYWRvd0NvbG9yLmIgKyBcIiwgXCIgKyAgc2hhZG93Q29sb3IuYSArIFwiKVwiIDtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJsaW5lSGVpZ2h0XCIpXG4gICAgY29uZmlnLnN0eWxlLmxpbmVIZWlnaHQgPSBjb25maWcubGluZUhlaWdodDtcblxuICBpZiAoa2V5ID09IFwib2JqZWN0Rml0XCIpXG4gICAgY29uZmlnLnN0eWxlLm9iamVjdEZpdCA9IGNvbmZpZy5vYmplY3RGaXQ7XG5cbiAgaWYgKGtleSA9PSBcImNsaWNrYWJsZVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBjb25maWcuY2xpY2thYmxlID8gXCJhdXRvXCIgOiBcIm5vbmVcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0Q29sb3JUb1JnYmEoY29sb3IpIHtcbiAgY29sb3IgPSByV1MoY1MoY29sb3IpKTtcblxuICB2YXIgdmFsdWVzO1xuICB2YXIgYWxwaGEgPSBcIjEuMDBcIjtcblxuICBpZiAoY29sb3IubGVuZ3RoID49IDgpIHtcbiAgICBhbHBoYSA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAzKSwgMTYpO1xuICAgIGFscGhhID0gKGFscGhhIC8gMjU1KS50b0ZpeGVkKDIpO1xuICAgIGNvbG9yID0gY29sb3Iuc3Vic3RyaW5nKDMsIDkpO1xuICB9IGVsc2Uge1xuICAgIGNvbG9yID0gY29sb3Iuc3Vic3RyaW5nKDEsIGNvbG9yLmxlbmd0aCk7XG4gIH1cblxuICBjb2xvciA9IGNvbnZlcnRIZXhUb1JnYihyV1MoY29sb3IpKTtcbiAgdmFsdWVzID0gY29sb3Iuc3BsaXQoJywnKTtcblxuICByZXR1cm4ge1xuICAgIHI6IHBhcnNlSW50KHJXUyh2YWx1ZXNbMF0pKSxcbiAgICBnOiBwYXJzZUludChyV1ModmFsdWVzWzFdKSksXG4gICAgYjogcGFyc2VJbnQocldTKHZhbHVlc1syXSkpLFxuICAgIGE6IHBhcnNlRmxvYXQoYWxwaGEpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRIZXhUb1JnYihoZXgpIHtcbiAgdmFyIHIgPSAocGFyc2VJbnQoaGV4LnN1YnN0cmluZygwLCAyKSwgMTYpKS50b0ZpeGVkKDIpO1xuICB2YXIgZyA9IChwYXJzZUludChoZXguc3Vic3RyaW5nKDIsIDQpLCAxNikpLnRvRml4ZWQoMik7XG4gIHZhciBiID0gKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoNCwgNiksIDE2KSkudG9GaXhlZCgyKTtcblxuICByZXR1cm4gciArIFwiLFwiICsgZyArIFwiLFwiICsgYjtcbn1cblxuZnVuY3Rpb24gY1ModmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gdmFsdWUgKyAnJyA6IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHJXUyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvIC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIHNldERlZmF1bHRzKHR5cGUsIGNvbmZpZykge1xuICBpZiAodHlwZSA9PSBcImxpbmVhckxheW91dFwiKSB7XG4gICAgY29uZmlnLm9yaWVudGF0aW9uID0gY29uZmlnLm9yaWVudGF0aW9uO1xuICB9XG59XG5mdW5jdGlvbiB0aGlzX2lubGluZUFuaW1hdGlvbihjb25maWcpIHtcbiAgdmFyIGNvbj1tb2RpZnlUcmFuc2xhdGlvbihjb25maWcpO1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbi5uYW1lKTtcbn1cbmZ1bmN0aW9uIG1vZGlmeVRyYW5zbGF0aW9uKGNvbmZpZyl7XG4gIHZhciB4ID0gY29uZmlnLnggfHwgXCIwXCI7XG4gIHZhciB5ID0gY29uZmlnLnkgfHwgXCIwXCI7XG4gIHZhciBhbmltYXRpb25BcnJheSA9IEpTT04ucGFyc2UoY29uZmlnLmlubGluZUFuaW1hdGlvbik7XG4gIHZhciBhbmltYXRpb25BcnJheSA9IGFuaW1hdGlvbkFycmF5Lm1hcChmdW5jdGlvbihhKXtcbiAgICBpZihhLmhhc093blByb3BlcnR5KFwiZnJvbVhcIikpe1xuICAgICAgYS5mcm9tWCA9IHBhcnNlSW50KGEuZnJvbVgpICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICAgIGlmKCFhLmhhc093blByb3BlcnR5KFwidG9YXCIpKXtcbiAgICAgICAgYS50b1ggPSAwICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcInRvWFwiKSl7XG4gICAgICBhLnRvWCA9IHBhcnNlSW50KGEudG9YKSArIHBhcnNlSW50KHgpICsgJyc7XG4gICAgfVxuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJmcm9tWVwiKSl7XG4gICAgICBhLmZyb21ZID0gcGFyc2VJbnQoYS5mcm9tWSkgKyBwYXJzZUludCh5KSArICcnO1xuICAgICAgaWYoIWEuaGFzT3duUHJvcGVydHkoXCJ0b1lcIikpe1xuICAgICAgICBhLnRvWSA9IDAgKyBwYXJzZUludCh5KSArICcnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihhLmhhc093blByb3BlcnR5KFwidG9ZXCIpKXtcbiAgICAgIGEudG9ZID0gcGFyc2VJbnQoYS50b1kpICsgcGFyc2VJbnQoeSkgKyAnJztcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH0pXG4gIHJldHVybiAoYW5pbWF0aW9uQXJyYXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodHlwZSwgY29uZmlnLCBnZXRTZXRUeXBlKSB7XG4gIGNvbmZpZyA9IGZsYXR0ZW5PYmplY3QoY29uZmlnKTtcbiAgc2V0RGVmYXVsdHModHlwZSwgY29uZmlnKTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChjb25maWcuc3R5bGUgJiYgY29uZmlnLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykgJiYga2V5c1tpXSA9PT0gJ2dyYXZpdHknKSAge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHBhcnNlTGF5b3V0UHJvcHModHlwZSwgY29uZmlnLCBrZXlzW2ldKTtcbiAgfVxuXG4gIGNvbmZpZy50cmFuc2l0aW9uID0gW1xuICAgIFN0cmluZyhjb25maWcuYV9kdXJhdGlvbiB8fCAwKSArXCJtc1wiLFxuICAgIFwiYWxsXCIsXG4gICAgY29uZmlnLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblxuICBdXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5qb2luKFwiIFwiKTtcblxuICBpZiAoY29uZmlnLnN0eWxlLnRyYW5zZm9ybSA9PSBcIlwiKSB7XG4gICAgZGVsZXRlIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm07XG4gIH1cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImlubGluZUFuaW1hdGlvblwiKSkge1xuICAgIHRoaXNfaW5saW5lQW5pbWF0aW9uKGNvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufSIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuICogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4gKlxuICogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4gKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuICogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuICogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiAqIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuICogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4gKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuICogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiAqL1xuXG4vKlxuIFVzZWQgdG8gaW5pdGlhbGl6ZSBkZWZhdWx0cyBmb3Igd2luZG93IGZ1bmNpb25zIGFuZCB2YXJpYWJsZXMuXG4qL1xuY29uc3QgeyBtZXJnZSB9ID0gcmVxdWlyZSgnLi9oZWxwZXInKTtcbndpbmRvdy5QcmVzdG9VSSA9IHJlcXVpcmUoXCIuL1ByZXN0b1VJSW50ZXJmYWNlXCIpO1xuXG5jb25zdCBnZXRDdXJyVGltZSA9ICgpID0+IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcblxuLy8gd2luZG93Ll9fT1MgPSBnZXRPUygpXG5pZih3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIil7XG4gICAgdmFyIGdldFNjcmVlbkRldGFpbHMgPSBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgZGV0YWlscyA9IEpTT04ucGFyc2UoQW5kcm9pZC5nZXRTY3JlZW5EaW1lbnNpb25zKCkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyZWVuX3dpZHRoOiBkZXRhaWxzLndpZHRoICsgXCJcIixcbiAgICAgICAgICAgIHNjcmVlbl9oZWlnaHQ6IGRldGFpbHMuaGVpZ2h0ICsgXCJcIlxuICAgICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgXCJlcnJvciBpbiBnZXR0dGluZyBzY3JlZW4gZGltZW5zaW9ucywgc2V0dGluZyBkZWZhdWx0IHZhbHVlc1wiLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzY3JlZW5fd2lkdGg6IFwiMTA4MFwiLFxuICAgICAgICAgICAgICAgIHNjcmVlbl9oZWlnaHQ6IFwiMTkyMFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUyA9IGdldFNjcmVlbkRldGFpbHMoKTtcbn1cblxuaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpIHtcbiAgICB3aW5kb3cuQW5kcm9pZCA9IHJlcXVpcmUoXCIuL1dFQi9BbmRyb2lkSW50ZXJmYWNlXCIpXG4gICAgd2luZG93LkpCcmlkZ2UgPSByZXF1aXJlKFwiLi9XRUIvSkJyaWRnZUludGVyZmFjZVwiKVxufSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIklPU1wiKSB7XG4gICAgd2luZG93LkFuZHJvaWQgPSByZXF1aXJlKFwiLi9JT1MvQW5kcm9pZEludGVyZmFjZVwiKVxuICAgIHdpbmRvdy5KQnJpZGdlID0gbWVyZ2Uod2luZG93LkpCcmlkZ2UsIHt9KVxufVxuXG5pZiAod2luZG93Ll9fREVWSUNFX0RFVEFJTFMgJiYgd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuaGFzT3duUHJvcGVydHkoXCJzY3JlZW5fd2lkdGhcIikpIHtcbiAgICB3aW5kb3cuX19XSURUSCA9IHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLnNjcmVlbl93aWR0aDtcbn0gZWxzZSB7XG4gICAgd2luZG93Ll9fV0lEVEggPSBcIjEwODBcIjtcbn1cblxuaWYgKHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTICYmIHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLmhhc093blByb3BlcnR5KFwic2NyZWVuX2hlaWdodFwiKSkge1xuICAgIHdpbmRvdy5fX0hFSUdIVCA9IHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLnNjcmVlbl9oZWlnaHQ7XG59IGVsc2Uge1xuICAgIHdpbmRvdy5fX0hFSUdIVCA9IFwiMTkyMFwiO1xufVxuXG5jb25zdCBndWlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpXG5cbi8vSW50aWFsaXppbmcgZGVmYXVsdHNcbmlmICh3aW5kb3cuX19PUyA9PSBcIldFQlwiKSB7XG4gICAgLyogQ29tcG9uZW50cyAqL1xuICAgIHdpbmRvdy5fX0NPTV9FVkVOVCA9IGZhbHNlXG4gICAgd2luZG93Ll9fQ09NX1JFTkRFUkVEID0ge1xuICAgICAgICBTV0lUQ0hfR0xPQkFMOiBmYWxzZSxcbiAgICAgICAgRFJQOiB7fSxcbiAgICAgICAgRFNCOiB7fSxcbiAgICAgICAgREI6IHt9LFxuICAgICAgICBOQVZCQVI6IHt9XG4gICAgfVxuXG4gICAgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQID0ge1xuICAgICAgICBXUkFQUEVSOiAnUERDX2NvbV93cmFwcGVyJyxcbiAgICAgICAgTkFWQkFSOiAnUERDX2NvbV9uYXZiYXInLFxuICAgICAgICBOQVZCQVJfSVRFTTogJ1BEQ19jb21fbmF2YmFyX2l0ZW0nLFxuICAgICAgICBOQVZCQVJfSVRFTV9XSVRIX1NVQjogJ1BEQ19jb21fbmF2YmFyX2hhc19zdWInLFxuICAgICAgICBOQVZCQVJfU1VCOiAnUERDX2NvbV9uYXZiYXJfc3ViJyxcbiAgICAgICAgTkFWQkFSX1NVQl9SSUdIVDogJ1BEQ19jb21fbmF2YmFyX3N1Yl9yaWdodCcsXG4gICAgICAgIE5BVkJBUl9TVUJfSVRFTTogJ1BEQ19jb21fbmF2YmFyX3N1Yml0ZW0nLFxuICAgICAgICBEUlA6ICdQRENfY29tX2RycCcsXG4gICAgICAgIERSUF9CT0RZOiAnUERDX2NvbV9kcnBfYm9keScsXG4gICAgICAgIERCOiAnUERDX2NvbV9kYicsXG4gICAgICAgIERCX0ZVTExfQk9EWTogJ1BEQ19jb21fZGJfZnVsbF9ib2R5JyxcbiAgICAgICAgREJfQk9EWTogJ1BEQ19jb21fZGJfYm9keScsXG4gICAgICAgIERCX09QVElPTlM6ICdQRENfY29tX2RiX29wdGlvbnMnLFxuICAgICAgICBEQl9PUFRJT046ICdQRENfY29tX2RiX29wdGlvbicsXG4gICAgICAgIERTQjogJ1BEQ19jb21fZHNiJyxcbiAgICAgICAgRFNCX0ZVTExfQk9EWTogJ1BEQ19jb21fZHNiX2Z1bGxfYm9keScsXG4gICAgICAgIERTQl9CT0RZOiAnUERDX2NvbV9kc2JfYm9keScsXG4gICAgICAgIERTQl9PUFRJT05TOiAnUERDX2NvbV9kc2Jfb3B0aW9ucycsXG4gICAgICAgIERTQl9PUFRJT046ICdQRENfY29tX2RzYl9vcHRpb24nLFxuICAgICAgICBEU0JfU0VBUkNIX1dSQVA6ICdQRENfY29tX2RzYl9zZWFyY2hfd3JhcCcsXG4gICAgICAgIERTQl9TRUFSQ0g6ICdQRENfY29tX2RzYl9zZWFyY2gnLFxuICAgICAgICBTV0lUQ0g6ICdQRENfY29tX3N3aXRjaCcsXG4gICAgICAgIFNXSVRDSF9CT0RZOiAnUERDX2NvbV9zd2l0Y2hfYm9keScsXG4gICAgICAgIFNXSVRDSF9TTElERVI6ICdQRENfY29tX3N3aXRjaF9zbGlkZXInLFxuICAgICAgICBCVDogJ1BEQ19jb21fYnQnLFxuICAgICAgICBCVF9ESVNBQkxFRDogJ1BEQ19jb21fYnRfZGlzYWJsZWQnXG4gICAgfVxuICAgIHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUCA9IHtcbiAgICAgICAgQkc6ICcjZmZmZmZmJyxcbiAgICAgICAgQUNUSVZFX0JHOiAnI0VFRjFGOCcsXG4gICAgICAgIEFDVElWRV9DT0xPUjogJ3JnYig1MywgNjQsIDgyKScsXG4gICAgICAgIElOQUNUSVZFX0NPTE9SOiAncmdiYSg1MywgNjQsIDgyLCAwLjUpJyxcbiAgICAgICAgQk9SREVSX0NPTE9SOiAnI0EzQUZDMicsXG4gICAgICAgIEFDVElWRV9CT1JERVJfQ09MT1I6ICcjNzA3ODg2JyxcbiAgICAgICAgU0VBUkNIX0NPTE9SOiAnI2RkZGRkZCcsXG4gICAgICAgIElOQUNUSVZFX1NXSVRDSDogJyNCN0RCQkMnLFxuICAgICAgICBBQ1RJVkVfU1dJVENIOiAnIzM2QUY0NycsXG4gICAgICAgIEJUX0JPUkRFUl9DT0xPUjogJyMxNTg1RDgnLFxuICAgICAgICBCVF9CR19DT0xPUjogJyMxOTkxRUInLFxuICAgICAgICBCVF9DT0xPUjogJyNmZmZmZmYnXG4gICAgfVxuICAgIHdpbmRvdy5fX0NPTV9BQ1RJVkUgPSB7XG4gICAgICAgIERTQjogJycsXG4gICAgICAgIE5BVkJBUjogJycsXG4gICAgICAgIERCOiAnJ1xuICAgIH1cbiAgICAvKiBDb21wb25lbnRzIEVuZCAqL1xuXG4gICAgLyogTW9kYWwgKi9cbiAgICB3aW5kb3cuX19TVFlMRV9JRCA9ICdzdHlsZV8nICsgZ3VpZFxuICAgIHdpbmRvdy5fX1JFTkRFUkVEX0tFWUZSQU1FUyA9IFtdXG4gICAgd2luZG93Ll9fTU9EQUxfUFJPUFMgPSB7fVxuICAgIHdpbmRvdy5fX0NPTlRFTlRNT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwnXG4gICAgd2luZG93Ll9fT1BFTk1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1vcGVuJ1xuICAgIHdpbmRvdy5fX0JBQ0tEUk9QTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLWJhY2tkcm9wJ1xuICAgIHdpbmRvdy5fX0RJU0FCTEVEQkFDS0RST1BfQ0xBU1MgPSAnUERDX21vZGFsLWJhY2tkcm9wLWRpc2FibGVkJ1xuICAgIHdpbmRvdy5fX1NIT1dOTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLXNob3duJ1xuICAgIHdpbmRvdy5fX0ZBREVNT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtZmFkZSdcbiAgICB3aW5kb3cuX19TTElERU1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1zbGlkZSdcbiAgICAvKiBNb2RhbCBFbmQgKi9cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQkFDS0RST1BNT0RBTF9DTEFTUykgJiZcbiAgICAgICAgICAgICFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0RJU0FCTEVEQkFDS0RST1BfQ0xBU1MpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHdpbmRvdy5fX09QRU5NT0RBTF9DTEFTUyk7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSh3aW5kb3cuX19TSE9XTk1PREFMX0NMQVNTKTtcblxuICAgICAgICAgICAgbGV0IGlkID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgICAgICAgICAgaWQgPSBpZC5yZXBsYWNlKHdpbmRvdy5fX0JBQ0tEUk9QTU9EQUxfQ0xBU1MgKyAnXycsICcnKTtcblxuICAgICAgICAgICAgbGV0IHZpZXcgPSBfX1ZJRVdTW2lkXTtcbiAgICAgICAgICAgIGlmICh2aWV3ICYmIHZpZXcucHJvcHMub25EaXNtaXNzICYmIHR5cGVvZiB2aWV3LnByb3BzLm9uRGlzbWlzcyA9PVxuICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHZpZXcucHJvcHMub25EaXNtaXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkdWlTaG93U2NyZWVuID0gKGNhbGxiYWNrLCBzdGF0ZSkgPT4ge1xuICAgICAgICBsZXQgcG9wdXBNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBvcHVwTWVudVwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3B1cE1lbnUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvcHVwTWVudVtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5fX2R1aVNob3dTY3JlZW4gPSBkdWlTaG93U2NyZWVuO1xuXG59IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiSU9TXCIpIHtcbiAgICB3aW5kb3cuX19DT0xPUl9JTkRFWCA9IHdpbmRvdy5fX0NPTE9SX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fRk9OVF9JTkRFWCA9IHdpbmRvdy5fX0ZPTlRfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19SRUNUX0lOREVYID0gd2luZG93LlJFQ1RfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19WSUVXX0lOREVYID0gd2luZG93Ll9fVklFV19JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX0lNQUdFX0lOREVYID0gd2luZG93Ll9fSU1BR0VfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19QT0lOVF9JTkRFWCA9IHdpbmRvdy5fX1BPSU5UX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fTEFZRVJfSU5ERVggPSB3aW5kb3cuX19MQVlFUl9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX1NJWkVfSU5ERVggPSB3aW5kb3cuX19TSVpFX0lOREVYIHx8IDE7XG59IGVsc2Uge1xuICAgIC8vVGhpcyB3b3VsZCBiZSBjYXNlIGZvciBhbmRyb2lkXG4gICAgd2luZG93Ll9fRk5fTUFQID0ge307XG4gICAgd2luZG93Ll9fQUxMX09OQ0xJQ0tTID0gW107XG59XG5cbndpbmRvdy5fX0lEID0gMTtcbndpbmRvdy5fX05PREVfSUQgPSAxO1xud2luZG93Ll9fU0NSRUVOX0lOREVYID0gLTE7XG5cbndpbmRvdy5fX1BST1hZX0ZOID0ge307XG53aW5kb3cuX19GTl9JTkRFWCA9IDA7XG53aW5kb3cuX19ST09UU0NSRUVOID0gbnVsbDtcbndpbmRvdy5fX0NBQ0hFRF9TQ1JFRU5TID0ge307XG53aW5kb3cuX19TQ1JFRU5fQ09VTlQgPSAwO1xud2luZG93Ll9fQ1VSUl9TQ1JFRU4gPSBudWxsO1xud2luZG93Ll9fUFJFVl9TQ1JFRU4gPSBudWxsO1xud2luZG93Ll9fQU5JTUFURV9ESVIgPSBudWxsO1xud2luZG93Ll9fU0NSRUVOX1NUQUNLID0gW107XG53aW5kb3cuX19MQVNUX0ZOX0NBTExFRCA9IG51bGw7XG53aW5kb3cuX19USFJPVFRFTEVEX0FDVElPTlMgPSBbXTtcbndpbmRvdy5fX1ZJRVdTID0ge307XG53aW5kb3cuX19WSUVXX0RJTUVOU0lPTlMgPSB7fTtcbndpbmRvdy5fX09CU0VSVkVSUyA9IHt9O1xud2luZG93LlpJbmRleCA9IDA7XG5cbndpbmRvdy5jYWxsVUlDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJncyA9IChhcmd1bWVudHMubGVuZ3RoID09PSAxID8gW2FyZ3VtZW50c1swXV0gOiBBcnJheS5hcHBseShudWxsLFxuICAgICAgICBhcmd1bWVudHMpKTtcbiAgICB2YXIgZk5hbWUgPSBhcmdzWzBdXG4gICAgdmFyIGZ1bmN0aW9uQXJncyA9IGFyZ3Muc2xpY2UoMSlcbiAgICB2YXIgY3VyclRpbWU7XG4gICAgdmFyIHRpbWVEaWZmO1xuICAgIFxuICAgIGlmICh3aW5kb3cuX19BTExfT05DTElDS1MgJiYgd2luZG93Ll9fQUxMX09OQ0xJQ0tTLmluZGV4T2YoZk5hbWUpICE9IC0xICYmIGFyZ3NbMl0gPT0gXCJmZWVkYmFja1wiICYmIEpCcmlkZ2UgJiYgSkJyaWRnZS5zZXRDbGlja0ZlZWRiYWNrKSB7XG4gICAgICAgIHJldHVybiBKQnJpZGdlLnNldENsaWNrRmVlZGJhY2soYXJnc1sxXSk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5fX1RIUk9UVEVMRURfQUNUSU9OUyAmJiB3aW5kb3cuX19USFJPVFRFTEVEX0FDVElPTlMuaW5kZXhPZihmTmFtZSkgPT0gLTEpIHtcbiAgICAgICAgd2luZG93Ll9fUFJPWFlfRk5bZk5hbWVdLmFwcGx5KG51bGwsIGZ1bmN0aW9uQXJncyk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuX19MQVNUX0ZOX0NBTExFRCAmJiAoZk5hbWUgPT0gd2luZG93Ll9fTEFTVF9GTl9DQUxMRUQuZk5hbWUpKSB7XG4gICAgICAgIGN1cnJUaW1lID0gZ2V0Q3VyclRpbWUoKTtcbiAgICAgICAgdGltZURpZmYgPSBjdXJyVGltZSAtIHdpbmRvdy5fX0xBU1RfRk5fQ0FMTEVELnRpbWVTdGFtcDtcblxuICAgICAgICBpZiAodGltZURpZmYgPj0gMzAwKSB7XG4gICAgICAgICAgICB3aW5kb3cuX19QUk9YWV9GTltmTmFtZV0uYXBwbHkobnVsbCwgZnVuY3Rpb25BcmdzKTtcbiAgICAgICAgICAgIHdpbmRvdy5fX0xBU1RfRk5fQ0FMTEVELnRpbWVTdGFtcCA9IGN1cnJUaW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiZnVuY3Rpb24gdGhyb3R0ZWxlZFwiLCBmTmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJ0aW1lIGRpZmZcIiwgdGltZURpZmYpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93Ll9fUFJPWFlfRk5bZk5hbWVdLmFwcGx5KG51bGwsIGZ1bmN0aW9uQXJncyk7XG4gICAgICAgIHdpbmRvdy5fX0xBU1RfRk5fQ0FMTEVEID0ge1xuICAgICAgICAgICAgdGltZVN0YW1wOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgZk5hbWU6IGZOYW1lXG4gICAgICAgIH1cbiAgICB9XG59OyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBOzs7Ozs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlLQTs7Ozs7Ozs7Ozs7Ozs7QUNqREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7QUNuSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUVBO0FBQ0E7QUFDQSxTQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFFQTtBQUNBO0FBQ0EsV0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFPQTtBQUNBO0FBQ0EsV0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBRUE7QUFDQTtBQUNBO0FBQ0EsZUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFPQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDalNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQ25PQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0EsV0FJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsOERBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOzs7Ozs7Ozs7Ozs7OztBQzFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQWFBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFjQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUE1MUJBO0FBeTJCQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7Ozs7Ozs7Ozs7Ozs7O0FDdHdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUxBO0FBQ0E7QUFZQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVRBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDejVCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQTFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUxBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUxBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFUQTtBQVBBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBN0VBO0FBK0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7Ozs7Ozs7Ozs7O0FDMStEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0Esb0NBa0JBO0FBQ0E7QUFDQSxhQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
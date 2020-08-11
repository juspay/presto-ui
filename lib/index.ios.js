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
        if (!each.hasOwnProperty('text')) {
          delete view.props.text;
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
      config[keys[i]] = callbackMapper.map(config[keys[i]]);

      if (keys[i] == "onClick") {
        window.__FN_MAP[config[keys[i]]] = config.text || config.id || "";

        if (!config.allowMultipleClicks || config.allowMultipleClick == "false") {
          window.__THROTTELED_ACTIONS.push(config[keys[i]]);
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
    currTransVal = appendArgs(attrs, obj);
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
    debugger;
    var modifiedHtmlString = "<span style=\"";
    if (config.hasOwnProperty("fontStyle")) {
      modifiedHtmlString += "font-family:" + config.fontStyle + ";";
    }
    if (config.hasOwnProperty("textSize")) {
      modifiedHtmlString += "font-size:" + config.textSize + ";";
    }
    if (config.hasOwnProperty("textColor")) {
      modifiedHtmlString += "font-size:" + config.textColor + ";";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguaW9zLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL0lPUy9BbmRyb2lkSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy9zcmMvSU9TL1JlbmRlci5qcyIsIndlYnBhY2s6Ly8vc3JjL1ByZXN0b1VJSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jhc2VWaWV3LmpzIiwid2VicGFjazovLy9zcmMvY29tcHV0ZUlPUy5qcyIsIndlYnBhY2s6Ly8vc3JjL2RvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9kb21zL2lvcy5qcyIsIndlYnBhY2s6Ly8vc3JjL2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2FuZHJvaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2FuZHJvaWQvbWFwUGFyYW1zLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9hbmRyb2lkL29iak1hcC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvYW5kcm9pZC9wYXJzZVBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvY29tbW9uL2NhbGxiYWNrTWFwcGVyLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9pb3MvY29sb3JzLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9pb3MvZmxhdHRlbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvaW9zL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9pb3MvcGFyc2VQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL3dlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvd2ViL3BhcnNlUGFyYW1zLmpzIiwid2VicGFjazovLy9zcmMvaW5pdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpbml0OiByZXF1aXJlKFwiLi9zcmMvaW5pdFwiKSxcblx0ZG9tcyA6IHJlcXVpcmUoXCIuL3NyYy9kb21zXCIpLFxuXHRoYW5kbGVyIDogcmVxdWlyZShcIi4vc3JjL2hhbmRsZXJcIiksXG5cdGhlbHBlcnMgOiByZXF1aXJlKFwiLi9zcmMvaGVscGVyc1wiKSxcblx0YmFzZVZpZXcgOiByZXF1aXJlKFwiLi9zcmMvYmFzZVZpZXdcIiksXG5cdGFuaW1hdGlvbnM6IHJlcXVpcmUoJy4vc3JjL2FuaW1hdGlvbnMnKSxcblx0Y2FsbGJhY2tNYXBwZXI6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcnMvY29tbW9uL2NhbGxiYWNrTWFwcGVyJyksXG5cdGdldE9TOiByZXF1aXJlKCcuL3NyYy9oZWxwZXInKS5nZXRPUyxcblx0cHJlc3RvTWVyZ2U6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcicpLm1lcmdlLFxuXHRwcmVzdG9DbG9uZTogcmVxdWlyZSgnLi9zcmMvaGVscGVyJykuY2xvbmVcbn0iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbmNvbnN0IHJlbmRlciA9IHJlcXVpcmUoJy4vUmVuZGVyJyk7XG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuLi9oZWxwZXInKTtcbmNvbnN0IHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi4vaGVscGVycycpLmlvcy5wYXJzZVBhcmFtcztcblxubGV0IHJvb3RpZDtcblxuZnVuY3Rpb24gY2xlYXJWaWV3RXh0ZXJuYWxzKHZpZXcpIHtcbiAgZGVsZXRlIHdpbmRvdy5fX1ZJRVdTW3ZpZXcucHJvcHMuaWRdO1xuICBkZWxldGUgd2luZG93Ll9fVklFV19ESU1FTlNJT05TW3ZpZXcucHJvcHMuaWRdO1xuICB2aWV3LmNoaWxkcmVuLmZvckVhY2goY2xlYXJWaWV3RXh0ZXJuYWxzKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2VyaWFsaXplYWJsZVZpZXcodmlldywgcmVjdXJzZSkge1xuICB2YXIgb2JqID0gcGFyc2VQYXJhbXModmlldy50eXBlLCBoZWxwZXIuY2xvbmUodmlldy5wcm9wcyxudWxsKSwgXCJzZXRcIik7XG4gIHZhciBuZXdWaWV3ID0ge307XG4gIG5ld1ZpZXcucHJvcHMgPSBvYmouY29uZmlnO1xuICBuZXdWaWV3LnR5cGUgPSBvYmoudHlwZVswXS50b1VwcGVyQ2FzZSgpICsgb2JqLnR5cGUuc3Vic3RyKDEsIG9iai50eXBlLmxlbmd0aCk7XG4gIGlmIChyZWN1cnNlKVxuICAgIG5ld1ZpZXcuY2hpbGRyZW4gPSB2aWV3LmNoaWxkcmVuLm1hcChnZXRTZXJpYWxpemVhYmxlVmlldyk7XG4gIGVsc2VcbiAgICBuZXdWaWV3LmNoaWxkcmVuID0gW107XG4gIHJldHVybiBuZXdWaWV3O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0U2NyZWVuRGltZW5zaW9uczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB3aWR0aDogd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuc2NyZWVuX3dpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5zY3JlZW5faGVpZ2h0XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVjb21wdXRlVmlldzogZnVuY3Rpb24gKHZpZXcpIHtcbiAgICBpZiAodmlldy50eXBlLmluZGV4T2YoXCJzY3JvbGxcIikgIT0gLTEpIHtcbiAgICAgIHJlbmRlci5pbmZsYXRlKHZpZXcpO1xuICAgIH1cbiAgICByZW5kZXIuY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdmlldy5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgcmVuZGVyLmluZmxhdGUoY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgfSxcblxuICByZWNvbXB1dGU6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByb290dmlldyA9IHdpbmRvdy5fX1ZJRVdTW3Jvb3RpZF07XG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIHR5cGU6IFwibGluZWFyTGF5b3V0XCIsXG4gICAgICBwcm9wczoge1xuICAgICAgICBoOiB3aW5kb3cuX19IRUlHSFQsXG4gICAgICAgIHc6IHdpbmRvdy5fX1dJRFRIXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtyb290dmlld11cbiAgICB9O1xuICAgIHJlbmRlci5jb21wdXRlQ2hpbGREaW1lbnMob2JqKTtcbiAgICByZW5kZXIuaW5mbGF0ZShyb290dmlldyk7XG4gIH0sXG5cbiAgcnVuSW5VSTogZnVuY3Rpb24gKGNtZCkge1xuICAgIHJlbmRlci5ydW5JblVJKGNtZCk7XG4gIH0sXG5cbiAgUmVuZGVyOiBmdW5jdGlvbiAodmlldywgY2IpIHtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgdHlwZTogXCJsaW5lYXJMYXlvdXRcIixcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGg6IHdpbmRvdy5fX0hFSUdIVCxcbiAgICAgICAgdzogd2luZG93Ll9fV0lEVEhcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3ZpZXddXG4gICAgfTtcbiAgICByb290aWQgPSB2aWV3LnByb3BzLmlkO1xuICAgIHJlbmRlci5jb21wdXRlQ2hpbGREaW1lbnMob2JqKTtcbiAgICB2aWV3ID0gcmVuZGVyLmluZmxhdGUodmlldyk7XG4gICAgaWYgKHZpZXcpIHtcbiAgICAgIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLklPUy5wb3N0TWVzc2FnZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG1ldGhvZE5hbWU6IFwicmVuZGVyXCIsXG4gICAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgICAgdmlldzogdmlld1xuICAgICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKGNiKVxuICAgICAgd2luZG93LmNhbGxVSUNhbGxiYWNrKGNiKTtcbiAgfSxcblxuICBtb3ZlVmlldzogZnVuY3Rpb24gbW92ZVZpZXcoaWQsIGluZGV4KSB7XG4gICAgaWYgKCF3aW5kb3cuX19WSUVXU1tpZF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIk1vdmVWaWV3OiBJbnZhbGlkIHZpZXcgSUQ6IFwiICsgaWQpKTtcbiAgICB9XG4gICAgY29uc3QgdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXTtcbiAgICBjb25zdCBwYXJlbnQgPSB3aW5kb3cuX19WSUVXU1t2aWV3LnByb3BzLnBhcmVudElkXTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICBjaGlsZHJlbi5zcGxpY2UoY2hpbGRyZW4uaW5kZXhPZih2aWV3KSwgMSk7XG4gICAgY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCB2aWV3KTtcbiAgICB0aGlzLnJlY29tcHV0ZVZpZXcocGFyZW50KTtcbiAgfSxcblxuICBhZGRWaWV3VG9QYXJlbnQ6IGZ1bmN0aW9uIChpZCwgdmlldywgaW5kZXgsIGNiKSB7XG4gICAgaWYgKCF3aW5kb3cuX19WSUVXU1tpZF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIkFkZFZpZXdUb1BhcmVudDogSW52YWxpZCBwYXJlbnQgSUQ6IFwiICtcbiAgICAgICAgaWQpKTtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50ID0gd2luZG93Ll9fVklFV1NbaWRdO1xuICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIHZpZXcpO1xuICAgIHZpZXcucHJvcHMucGFyZW50SWQgPSBpZDtcbiAgICByZW5kZXIuY29tcHV0ZUNoaWxkRGltZW5zKHBhcmVudCk7XG4gICAgY29uc3QgcmVuZGVyZWRWaWV3ID0gcmVuZGVyLmluZmxhdGUodmlldyk7XG4gICAgaWYgKHJlbmRlcmVkVmlldykge1xuICAgICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuSU9TLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbWV0aG9kTmFtZTogXCJhZGRWaWV3VG9QYXJlbnRcIixcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBwYXJlbnRJZDogaWQsXG4gICAgICAgICAgdmlldzogcmVuZGVyZWRWaWV3LFxuICAgICAgICAgIGFmdGVyUmVuZGVyIDogY2IrXCJcIlxuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfVxuICAgIHRoaXMucmVjb21wdXRlVmlldyhwYXJlbnQpO1xuICB9LFxuXG4gIGNyZWF0ZUxpc3REYXRhOiBmdW5jdGlvbiAoaWQsIHZpZXcpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB3aW5kb3cuX19WSUVXU1tpZF07XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJldHVybiBcInt9XCI7XG4gICAgfVxuICAgIGNvbnN0IHZpZXdzID0gd2luZG93Ll9fVklFV1M7XG4gICAgd2luZG93Ll9fVklFV1MgPSB7fTtcbiAgICBwYXJlbnQuY2hpbGRyZW4gPSBbdmlld107XG4gICAgdmlldy5wcm9wcy5wYXJlbnRJZCA9IGlkO1xuICAgIHJlbmRlci5jb21wdXRlQ2hpbGREaW1lbnMocGFyZW50KTtcbiAgICBjb25zdCBpbmZsYXRlZFZpZXcgPSByZW5kZXIuaW5mbGF0ZSh2aWV3KTtcbiAgICB3aW5kb3cuX19WSUVXUyA9IHZpZXdzO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpbmZsYXRlZFZpZXcpO1xuICB9LFxuXG4gIHJlcGxhY2VWaWV3OiBmdW5jdGlvbiAodmlldywgaWQpIHtcbiAgICBpZiAoIXdpbmRvdy5fX1ZJRVdTW2lkXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiQWRkVmlld1RvUGFyZW50OiBJbnZhbGlkIHBhcmVudCBJRDogXCIgKyBpZCkpO1xuICAgIH1cbiAgICB2YXIgb2xkdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXTtcbiAgICB2YXIgcGFyZW50aWQgPSBvbGR2aWV3LnByb3BzLnBhcmVudElkO1xuICAgIG9sZHZpZXcucHJvcHMgPSBoZWxwZXIuY2xvbmUodmlldy5wcm9wcyxudWxsKTtcbiAgICBvbGR2aWV3LnByb3BzLnBhcmVudElkID0gcGFyZW50aWQ7XG4gICAgdmFyIHBhcmVudCA9IHdpbmRvdy5fX1ZJRVdTW3BhcmVudGlkXTtcbiAgICB2YXIgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihvbGR2aWV3KTtcbiAgICB0aGlzLnJlY29tcHV0ZVZpZXcocGFyZW50KTtcbiAgICB2YXIgbmV3VmlldyA9IGdldFNlcmlhbGl6ZWFibGVWaWV3KG9sZHZpZXcpO1xuICAgIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLklPUy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1ldGhvZE5hbWU6IFwicmVwbGFjZVZpZXdcIixcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgdmlldzogbmV3VmlldyxcbiAgICAgICAgICAgIHBhcmVudElkOiBwYXJlbnRpZCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICB9XG4gICAgfSkpO1xuICB9LFxuXG4gIHJlbW92ZVZpZXc6IGZ1bmN0aW9uIChpZCkge1xuICAgIGNvbnN0IHZpZXcgPSB3aW5kb3cuX19WSUVXU1tpZF07XG4gICAgY29uc3QgcGFyZW50ID0gd2luZG93Ll9fVklFV1Nbdmlldy5wcm9wcy5wYXJlbnRJZF07XG4gICAgY29uc3QgaW5kZXggPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih2aWV3KSA6IDA7XG4gICAgaWYocGFyZW50KXtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBjbGVhclZpZXdFeHRlcm5hbHModmlldyk7XG4gICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuSU9TLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1ldGhvZE5hbWU6IFwicmVtb3ZlVmlld1wiLFxuICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIGluZGV4LFxuICAgICAgfVxuICAgIH0pKTtcbiAgICBpZihwYXJlbnQpe1xuICAgICAgdGhpcy5yZWNvbXB1dGVWaWV3KHBhcmVudCk7XG4gICAgfVxuICB9LFxuXG4gIHN0YXJ0QW5pbTogZnVuY3Rpb24oaWQsIGNiTmFtZSkge1xuICAgIC8vIFRPRE8gaW1wbGVtZW50IG5hdGl2ZSBzaWRlIHdpdGggY2FsbGJhY2tcbiAgICAvLyBUaHVzLCBjdXJyZW50bHkgbm90IHByb3ZpZGluZyBvbiBjb21wbGV0ZSBob29rXG4gICAgLy8gb25FbmQgcHJvcGVydHkgY2FuIHN0aWxsIGJlIHVzZWQgZm9yIGNoYWluaW5nIGFuaW1hdGlvbnNcbiAgICB3aW5kb3cud2Via2l0Lm1lc3NhZ2VIYW5kbGVycy5JT1MucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbWV0aG9kTmFtZTogXCJzdGFydEFuaW1hdGlvblwiLFxuICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICBhbmltSWQ6IGlkXG4gICAgICB9XG4gICAgfSkpO1xuICB9LFxuXG4gIGNhbmNlbEFuaW06IGZ1bmN0aW9uKCkge1xuICAgIC8vIFRPRE8gaW1wbGVtZW50IG5hdGl2ZSBzaWRlXG4gIH0sXG5cbiAgdXBkYXRlQW5pbTogZnVuY3Rpb24oKSB7XG4gICAgLy8gVE9ETyBpbXBsZW1lbnQgbmF0aXZlIHNpZGVcbiAgfVxufTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuY29uc3QgcGFyc2VQYXJhbXMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lvcy9wYXJzZVBhcmFtcycpO1xuY29uc3Qge2NvbXB1dGVDaGlsZERpbWVuc30gPSByZXF1aXJlKCcuLi9jb21wdXRlSU9TJyk7XG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuLi9oZWxwZXInKTtcblxuXG5mdW5jdGlvbiBpbmZsYXRlKHZpZXcpIHtcbiAgY29uc3QgaWQgPSB2aWV3LnByb3BzLmlkO1xuXG4gIGlmICghd2luZG93Ll9fVklFV1MuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpO1xuICAgIGhlbHBlci5jYWNoZURpbWVuKHZpZXcpO1xuICAgIHdpbmRvdy5fX1ZJRVdTW2lkXSA9IHZpZXc7XG4gICAgY29uc3QgbmV3VmlldyA9IGhlbHBlci5jbG9uZSh2aWV3LG51bGwpO1xuICAgIHZpZXcuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcbiAgICAgIG5ld1ZpZXcuY2hpbGRyZW5baV0gPSBpbmZsYXRlKGNoaWxkKTtcbiAgICB9KTtcbiAgICBjb25zdCBvYmogPSBwYXJzZVBhcmFtcyhuZXdWaWV3LnR5cGUsIG5ld1ZpZXcucHJvcHMsIFwic2V0XCIpO1xuICAgIG5ld1ZpZXcucHJvcHMgPSBvYmouY29uZmlnO1xuICAgIG5ld1ZpZXcudHlwZSA9IG9iai50eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyBvYmoudHlwZS5zdWJzdHIoMSwgb2JqLnR5cGUubGVuZ3RoKTtcbiAgICByZXR1cm4gbmV3VmlldztcbiAgfVxuXG4gIGNvbnN0IG1vdmUgPSBoZWxwZXIuc2hvdWxkTW92ZSh2aWV3KTtcbiAgaGVscGVyLmNhY2hlRGltZW4odmlldyk7XG4gIGxldCByYW5SdW5JblVJID0gZmFsc2U7XG4gIGlmIChtb3ZlKSB7XG4gICAgbW92ZS5pZCA9IGlkO1xuICAgIHJ1bkluVUlIZWxwZXIodmlldy50eXBlLCB2aWV3LnByb3BzKTtcbiAgICByYW5SdW5JblVJID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbXB1dGVDaGlsZERpbWVucyh2aWV3KVxuICB2aWV3LmNoaWxkcmVuLmZvckVhY2goaW5mbGF0ZSk7XG4gIHJldHVybiByYW5SdW5JblVJO1xufVxuXG5mdW5jdGlvbiBydW5JblVJKGNtZCwgZnJvbUluZmxhdGUpIHtcbiAgaWYgKCEoY21kIGluc3RhbmNlb2YgQXJyYXkpKSBjbWQgPSBbY21kXTtcblxuICBpZiAoY21kLmxlbmd0aD09MSAmJiBjbWRbMF09PVwicmVtb3ZlQWxsVUlcIil7XG4gICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuSU9TLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1ldGhvZE5hbWU6IFwicmVtb3ZlQWxsVUlcIixcbiAgICAgIHBhcmFtZXRlcnM6IHtcImFuaW1hdGVkXCI6XCJmYWxzZVwifVxuICAgIH0pKTtcbiAgfWVsc2V7XG4gICAgY21kLmZvckVhY2goZnVuY3Rpb24gKGVhY2gpIHtcbiAgICAgIHZhciBpZCA9IGVhY2guaWQ7XG4gICAgICBlYWNoLnVzZUNvbnN0cmFpdHMgPSB0cnVlO1xuICAgICAgdmFyIHZpZXcgPSB3aW5kb3cuX19WSUVXU1tpZF07XG4gICAgICBpZiAodmlldykge1xuICAgICAgICB2YXIgcGFyZW50ID0gd2luZG93Ll9fVklFV1Nbdmlldy5wcm9wcy5wYXJlbnRJZF07XG4gICAgICAgIHZpZXcucHJvcHMgPSBoZWxwZXIubWVyZ2Uodmlldy5wcm9wcywgZWFjaCk7XG4gICAgICAgIGlmKHZpZXcucHJvcHMgJiYgdmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShcImxpc3RJdGVtXCIpICYmIGVhY2guaGFzT3duUHJvcGVydHkoXCJsaXN0RGF0YVwiKSAmJiAhZWFjaC5oYXNPd25Qcm9wZXJ0eShcImxpc3RJdGVtXCIpKXtcbiAgICAgICAgICBlYWNoLmxpc3RJdGVtID0gdmlldy5wcm9wcy5saXN0SXRlbVxuICAgICAgICB9XG4gICAgICAgIC8vQWRkaW5nIGFzIHN0b3AgZ2FnIHNvbHV0aW9uIGZvciBlZGl0VGV4dCBpbiBpb3Mgd2hlcmUgdGV4dCBcbiAgICAgICAgLy93YXMgZ2V0dGluZyBzZXQgZW1wdHkgaW4gY2FzZSBvdGhlciBwcm9wZXJ0aWVzIHdlcmUgbW9kaWZpZWQuXG4gICAgICAgIGlmICghZWFjaC5oYXNPd25Qcm9wZXJ0eSgndGV4dCcpKSB7XG4gICAgICAgICAgZGVsZXRlIHZpZXcucHJvcHMudGV4dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50ICYmICFmcm9tSW5mbGF0ZSkge1xuICAgICAgICAgIGlmIChwYXJlbnQudHlwZS5pbmRleE9mKFwic2Nyb2xsXCIpICE9IC0xKSB7XG4gICAgICAgICAgICBpbmZsYXRlKHBhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbXB1dGVDaGlsZERpbWVucyhwYXJlbnQpO1xuICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICBpZiAoIWluZmxhdGUodmlldykpIHtcbiAgICAgICAgICAgIHJ1bkluVUlIZWxwZXIodmlldy50eXBlLCBlYWNoLCB0cnVlKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHZpZXcgIT0gY2hpbGRyZW5baV0pIHtcbiAgICAgICAgICAgICAgaW5mbGF0ZShjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJ1bkluVUlIZWxwZXIodmlldy50eXBlLCBlYWNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBydW5JblVJSGVscGVyKHR5cGUsIG9iaiwgcmVtb3ZlRnJhbWUpIHtcbiAgdmFyIGNtZCA9IHBhcnNlUGFyYW1zKHR5cGUsIG9iaiwgXCJnZXRcIikuY29uZmlnLm1ldGhvZHM7XG4gIGlmKHJlbW92ZUZyYW1lKXtcbiAgICAgIGNtZCA9IGNtZC5maWx0ZXIoZnVuY3Rpb24oaXRtKXtcbiAgICAgICAgcmV0dXJuIGl0bS5tZXRob2ROYW1lICE9IFwic2V0RnJhbWU6XCJcbiAgICB9KVxuICB9XG4gIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLklPUy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgbWV0aG9kTmFtZTogXCJydW5JblVJXCIsXG4gICAgcGFyYW1ldGVyczogY21kXG4gIH0pKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluZmxhdGUsXG4gIGNvbXB1dGVDaGlsZERpbWVucyxcbiAgcnVuSW5VSVxufTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxudmFyIHByZXN0b0RvbSA9IHJlcXVpcmUoXCIuL2RvbXNcIik7XG52YXIgaGVscGVycyA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIilcbnZhciB3ZWJQYXJzZVBhcmFtcztcbnZhciBpT1NQYXJzZVBhcmFtcztcbnZhciBwYXJzZVBhcmFtcztcbmNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG5cbmlmICh3aW5kb3cuX19PUyA9PT0gXCJXRUJcIikge1xuICB3ZWJQYXJzZVBhcmFtcyA9IGhlbHBlcnMud2ViLnBhcnNlUGFyYW1zO1xufSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PT0gXCJJT1NcIikge1xuICBpT1NQYXJzZVBhcmFtcyA9IGhlbHBlcnMuaW9zLnBhcnNlUGFyYW1zO1xufSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PT0gXCJBTkRST0lEXCIpIHtcbiAgcGFyc2VQYXJhbXMgPSBoZWxwZXJzLmFuZHJvaWQucGFyc2VQYXJhbXM7XG59XG5cbmZ1bmN0aW9uIGRvbUFsbChlbGVtKSB7XG4gIGlmICghZWxlbS5fX3JlZikge1xuICAgIGVsZW0uX19yZWYgPSBjcmVhdGVQcmVzdG9FbGVtZW50KCk7XG4gIH1cblxuICBpZiAoZWxlbS5wcm9wcy5pZCkge1xuICAgIGVsZW0uX19yZWYuX19pZCA9IHBhcnNlSW50KGVsZW0ucHJvcHMuaWQsIDEwKSB8fCBlbGVtLl9fcmVmLl9faWQ7XG4gIH1cblxuICB2YXIgdHlwZSA9IGhlbHBlci5jbG9uZShlbGVtLnR5cGUsbnVsbCk7XG4gIHZhciBwcm9wcyA9IGhlbHBlci5jbG9uZShlbGVtLnByb3BzLG51bGwpO1xuXG4gIGlmIChwcm9wcy5mb2N1cyA9PSBmYWxzZSAmJiAgd2luZG93Ll9fT1MgPT09IFwiQU5EUk9JRFwiKSB7XG4gICAgZGVsZXRlIHByb3BzLmZvY3VzO1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRyZW4ucHVzaChkb21BbGwoZWxlbS5jaGlsZHJlbltpXSkpO1xuICB9XG5cblxuICBpZiAoX19PUyA9PSBcIldFQlwiICYmIHByb3BzLm9uUmVzaXplKSB7XG4gICAgd2luZG93Ll9fcmVzaXplRXZlbnQgPSBwcm9wcy5vblJlc2l6ZTtcbiAgfVxuXG4gIHByb3BzLmlkID0gZWxlbS5fX3JlZi5fX2lkO1xuICBpZihlbGVtLnBhcmVudFR5cGUgJiYgd2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gICAgcmV0dXJuIHByZXN0b0RvbSh7ZWxlbVR5cGU6IHR5cGUsIHBhcmVudFR5cGU6IGVsZW0ucGFyZW50VHlwZX0sIHByb3BzLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHByZXN0b0RvbSh0eXBlLCBwcm9wcywgY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBnZXREb21Ub1JlbmRlcihlbGVtKSB7XG4gIHZhciByZXMgPSBkb21BbGwoZWxlbSk7XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cblxuXG4vLyBOb3QgZXhwb3J0ZWRcbmZ1bmN0aW9uIGNtZEZvckFuZHJvaWQoY29uZmlnLCBzZXQsIHR5cGUpIHtcbiAgaWYgKHNldCkge1xuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIHZhciBvYmogPSBwYXJzZVBhcmFtcyh0eXBlLCBjb25maWcsIFwic2V0XCIpO1xuICAgICAgdmFyIGNtZCA9IG9iai5ydW5JblVJLnJlcGxhY2UoXCJ0aGlzLT5zZXRJZFwiLCBcInNldF92aWV3PWN0eC0+ZmluZFZpZXdCeUlkXCIpLnJlcGxhY2UoL3RoaXMtPi9nLCBcImdldF92aWV3LT5cIik7XG4gICAgICBjbWQgPSBjbWQucmVwbGFjZSgvUEFSQU1fQ1RSX0hPTERFUlteO10qL2csIFwiZ2V0X3ZpZXctPmdldExheW91dFBhcmFtcztcIik7XG4gICAgICBvYmoucnVuSW5VSSA9IGNtZDtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJJRCBudWxsLCB0aGlzIGlzIG5vdCBzdXBwb3NlZCB0byBoYXBwZW4uIERlYnVnIHRoaXMgb3IvYW5kIHJhaXNlIGEgaXNzdWUgaW4gYml0YnVja2V0LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgdmFyIF9pZCA9IGNvbmZpZy5pZDtcbiAgdmFyIGNtZCA9IFwic2V0X3ZpZXc9Y3R4LT5maW5kVmlld0J5SWQ6aV9cIiArIF9pZCArIFwiO1wiO1xuICAvLyB2YXIgcnVuSW5VSTtcbiAgZGVsZXRlIGNvbmZpZy5pZDtcbiAgY29uZmlnLnJvb3QgPSBcInRydWVcIjtcbiAgdmFyIG9iaiA9IHBhcnNlUGFyYW1zKHR5cGUsIGNvbmZpZywgXCJnZXRcIik7XG4gIG9iai5ydW5JblVJID0gY21kICsgb2JqLnJ1bkluVUkgKyAnOyc7XG4gIG9iai5pZCA9IF9pZDtcbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZ2V0UnVuSW5VSUNtZChwcm9wKSB7XG4gIHZhciBjbWQ7XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIGNtZCA9IGNtZEZvckFuZHJvaWQocHJvcCwgdHJ1ZSwgXCJsaW5lYXJMYXlvdXRcIikucnVuSW5VSTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIklPU1wiKXtcbiAgICBjbWQgPSBwcm9wO1xuICB9IGVsc2Uge1xuICAgIGNtZCA9IHdlYlBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIHByb3AsIFwic2V0XCIpO1xuICB9XG4gIHJldHVybiBjbWQ7XG59XG5cblxuXG4vLyBOb3QgZXhwb3J0ZWRcbmZ1bmN0aW9uIGFwcGx5UHJvcChlbGVtZW50LCBhdHRyaWJ1dGUsIHNldCkge1xuICB2YXIgcHJvcCA9IHtcbiAgICBpZDogZWxlbWVudC5fX3JlZi5fX2lkXG4gIH1cbiAgcHJvcFthdHRyaWJ1dGUudmFsdWUwXSA9IGF0dHJpYnV0ZS52YWx1ZTE7XG5cbiAgaWYgKGF0dHJpYnV0ZS52YWx1ZTAgPT0gJ2ZvY3VzJyAmJiBhdHRyaWJ1dGUudmFsdWUxID09IGZhbHNlICYmICB3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIHZhciBjbWQgPSBjbWRGb3JBbmRyb2lkKHByb3AsIHNldCwgZWxlbWVudC50eXBlKTtcbiAgICBpZiAoQW5kcm9pZC51cGRhdGVQcm9wZXJ0aWVzKSB7XG4gICAgICBBbmRyb2lkLnVwZGF0ZVByb3BlcnRpZXMoSlNPTi5zdHJpbmdpZnkoY21kKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEFuZHJvaWQucnVuSW5VSShjbWQucnVuSW5VSSwgbnVsbCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiSU9TXCIpe1xuICAgIEFuZHJvaWQucnVuSW5VSShwcm9wKTtcbiAgfSBlbHNlIHtcbiAgICBBbmRyb2lkLnJ1bkluVUkod2ViUGFyc2VQYXJhbXMoXCJsaW5lYXJMYXlvdXRcIiwgcHJvcCwgXCJzZXRcIikpO1xuICB9XG4gIC8vIEFuZHJvaWQucnVuSW5VSShwYXJzZVBhcmFtcyhcImxpbmVhckxheW91dFwiLCBwcm9wLCBcInNldFwiKSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VWaWV3KGVsZW1lbnQsIGF0dHJpYnV0ZSwgcmVtb3ZlUHJvcCkge1xuICAvLyBjb25zb2xlLmxvZyhcIlJFUExBQ0UgVklFV1wiLCBlbGVtZW50Ll9fcmVmLl9faWQsIGVsZW1lbnQucHJvcHMpO1xuICB2YXIgcHJvcHMgPSBoZWxwZXIuY2xvbmUoZWxlbWVudC5wcm9wcyxudWxsKTtcbiAgcHJvcHMuaWQgPSBlbGVtZW50Ll9fcmVmLl9faWQ7XG4gIHZhciByZXA7XG4gIHZhciB2aWV3R3JvdXBzID0gW1wibGluZWFyTGF5b3V0XCIsIFwicmVsYXRpdmVMYXlvdXRcIiwgXCJzY3JvbGxWaWV3XCIsIFwiZnJhbWVMYXlvdXRcIiwgXCJob3Jpem9udGFsU2Nyb2xsVmlld1wiXTtcblxuICBpZiAodmlld0dyb3Vwcy5pbmRleE9mKGVsZW1lbnQudHlwZSkgIT0gLTEpe1xuICAgIHByb3BzLnJvb3QgPSB0cnVlO1xuICAgIHJlcCA9IHByZXN0b0RvbShlbGVtZW50LnR5cGUsIHByb3BzLCBbXSk7XG4gIH0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICByZXAgPSBwcmVzdG9Eb20oe2VsZW1UeXBlOiBlbGVtZW50LnR5cGUsIHBhcmVudFR5cGU6IGVsZW1lbnQucGFyZW50Tm9kZS50eXBlfSwgcHJvcHMsIFtdKTtcbiAgfSBlbHNlIHtcbiAgICByZXAgPSBwcmVzdG9Eb20oZWxlbWVudC50eXBlLCBwcm9wcywgW10pO1xuICB9XG4gIGlmKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKXtcbiAgICBBbmRyb2lkLnJlcGxhY2VWaWV3KEpTT04uc3RyaW5naWZ5KHJlcCksIGVsZW1lbnQuX19yZWYuX19pZCk7XG4gIH0gZWxzZSB7XG4gICAgQW5kcm9pZC5yZXBsYWNlVmlldyhyZXAsIGVsZW1lbnQuX19yZWYuX19pZCk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVQcmVzdG9FbGVtZW50KCkge1xuICAgIGlmKHR5cGVvZih3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSkgIT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB7IF9faWQgOiArK3dpbmRvdy5fX3VpX2lkX3NlcXVlbmNlIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93Ll9fdWlfaWRfc2VxdWVuY2UgPSB0eXBlb2YgQW5kcm9pZC5nZXROZXdJRCA9PSBcImZ1bmN0aW9uXCIgPyBwYXJzZUludChBbmRyb2lkLmdldE5ld0lEKCkpICogMTAwMDAwMCA6IHdpbmRvdy5fX1BSRVNUT19JRCA7XG4gICAgICAgIHJldHVybiB7IF9faWQgOiArK3dpbmRvdy5fX3VpX2lkX3NlcXVlbmNlIH07XG4gICAgfVxufTtcblxuXG5mdW5jdGlvbiBtb3ZlQ2hpbGQoY2hpbGQsIHBhcmVudCwgaW5kZXgpIHtcbiAgQW5kcm9pZC5tb3ZlVmlldyhjaGlsZC5fX3JlZi5fX2lkLCBpbmRleCk7XG59XG5cblxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZChjaGlsZCwgcGFyZW50LCBpbmRleCkge1xuICAvLyBjb25zb2xlLmxvZyhcIlJlbW92ZSBjaGlsZCA6XCIsIGNoaWxkLnR5cGUpO1xuICBBbmRyb2lkLnJlbW92ZVZpZXcoY2hpbGQuX19yZWYuX19pZCArIFwiXCIpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChjaGlsZCwgcGFyZW50LCBpbmRleCkge1xuICBpZihjaGlsZC50eXBlID09IG51bGwpIHtcbiAgICBjb25zb2xlLndhcm4oXCJjaGlsZCBudWxsXCIpO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKFwiQWRkIGNoaWxkIDpcIiwgY2hpbGQuX19yZWYuX19pZCwgY2hpbGQudHlwZSk7XG4gIHZhciB2aWV3R3JvdXBzID0gW1wibGluZWFyTGF5b3V0XCIsIFwicmVsYXRpdmVMYXlvdXRcIiwgXCJzY3JvbGxWaWV3XCIsIFwiZnJhbWVMYXlvdXRcIiwgXCJob3Jpem9udGFsU2Nyb2xsVmlld1wiXTtcbiAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgaWYgKHZpZXdHcm91cHMuaW5kZXhPZihjaGlsZC50eXBlKSAhPSAtMSl7XG4gICAgICBjaGlsZC5wcm9wcy5yb290ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGQucGFyZW50VHlwZSA9IHBhcmVudC50eXBlO1xuICAgIH1cbiAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChwYXJlbnQuX19yZWYuX19pZCArIFwiXCIsIEpTT04uc3RyaW5naWZ5KGRvbUFsbChjaGlsZCkpLCBpbmRleCwgbnVsbCwgbnVsbCk7XG4gIH1cbiAgZWxzZVxuICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHBhcmVudC5fX3JlZi5fX2lkLCBkb21BbGwoY2hpbGQpLCBpbmRleCwgbnVsbCwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGUpIHtcbiAgLy8gY29uc29sZS5sb2coXCJhZGQgYXR0ciA6XCIsIGF0dHJpYnV0ZSk7XG4gIGVsZW1lbnQucHJvcHNbYXR0cmlidXRlLnZhbHVlMF0gPSBhdHRyaWJ1dGUudmFsdWUxO1xuICBhcHBseVByb3AoZWxlbWVudCwgYXR0cmlidXRlLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuICAvLyBjb25zb2xlLmxvZyhcInJlbW92ZSBhdHRyIDpcIiwgYXR0cmlidXRlKTtcbiAgcmVwbGFjZVZpZXcoZWxlbWVudCwgYXR0cmlidXRlLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZSBhdHRyIDpcIiwgYXR0cmlidXRlKTtcbiAgZWxlbWVudC5wcm9wc1thdHRyaWJ1dGUudmFsdWUwXSA9IGF0dHJpYnV0ZS52YWx1ZTE7XG5cbiAgYXBwbHlQcm9wKGVsZW1lbnQsIGF0dHJpYnV0ZSwgZmFsc2UpO1xufVxuXG5cbmZ1bmN0aW9uIGluc2VydERvbShyb290LCBkb20sIGNiKSB7XG4gIHJvb3QuY2hpbGRyZW4ucHVzaChkb20pO1xuICBkb20ucGFyZW50Tm9kZSA9IHJvb3Q7XG4gIGRvbS5fX3JlZiA9IGNyZWF0ZVByZXN0b0VsZW1lbnQoKTtcbiAgd2luZG93Lk4gPSByb290O1xuXG4gIHZhciByb290SWQgPSB3aW5kb3cuX19ST09UU0NSRUVOLmlkU2V0LnJvb3Q7XG5cbiAgZG9tLnByb3BzLnJvb3QgPSB0cnVlO1xuXG4gIHZhciBsZW5ndGggPSB3aW5kb3cuX19ST09UU0NSRUVOLmlkU2V0LmNoaWxkLnB1c2goZG9tLl9fcmVmLl9faWQpO1xuXG4gIHZhciBjYWxsYmFjayA9IHdpbmRvdy5jYWxsYmFja01hcHBlcihleGVjdXRlUG9zdFByb2Nlc3MoY2IpKTtcbiAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQocm9vdElkICsgXCJcIiwgSlNPTi5zdHJpbmdpZnkoZG9tQWxsKGRvbSkpLCBsZW5ndGggLSAxLCBjYWxsYmFjaywgbnVsbCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQocm9vdElkLCBkb21BbGwoZG9tKSwgbGVuZ3RoIC0gMSwgY2FsbGJhY2ssIG51bGwpO1xuICB9XG5cbiAgcmV0dXJuIGRvbS5fX3JlZi5fX2lkO1xuXG59XG5cblxuZnVuY3Rpb24gZXhlY3V0ZVBvc3RQcm9jZXNzKGNiKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjYigpO1xuXG4gICAgaWYod2luZG93Ll9fZHVpX3NjcmVlbiAmJiB3aW5kb3dbXCJhZnRlclJlbmRlclwiXSkge1xuICAgICAgZm9yICh2YXIgdGFnIGluIHdpbmRvd1tcImFmdGVyUmVuZGVyXCJdW3dpbmRvdy5fX2R1aV9zY3JlZW5dKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgd2luZG93W1wiYWZ0ZXJSZW5kZXJcIl1bd2luZG93Ll9fZHVpX3NjcmVlbl1bdGFnXSgpKCk7XG4gICAgICAgICAgd2luZG93W1wiYWZ0ZXJSZW5kZXJcIl1bd2luZG93Ll9fZHVpX3NjcmVlbl1bXCJleGVjdXRlZFwiXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKEpCcmlkZ2UgJiYgSkJyaWRnZS5zZXRTaGFkb3cpIHtcbiAgICAgIGZvciAodmFyIHRhZyBpbiB3aW5kb3cuc2hhZG93T2JqZWN0KSB7XG4gICAgICAgIEpCcmlkZ2Uuc2V0U2hhZG93KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImxldmVsXCJdLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1widmlld0lkXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImJhY2tncm91bmRDb2xvclwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJibHVyVmFsdWVcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wic2hhZG93Q29sb3JcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZHhcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZHlcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wic3ByZWFkXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImZhY3RvclwiXSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkb21BbGw6IGRvbUFsbCxcbiAgZ2V0RG9tVG9SZW5kZXI6IGdldERvbVRvUmVuZGVyLFxuICBnZXRSdW5JblVJQ21kOiBnZXRSdW5JblVJQ21kLFxuICByZXBsYWNlVmlldzogcmVwbGFjZVZpZXcsXG4gIGNyZWF0ZVByZXN0b0VsZW1lbnQ6IGNyZWF0ZVByZXN0b0VsZW1lbnQsXG4gIG1vdmVDaGlsZDogbW92ZUNoaWxkLFxuICByZW1vdmVDaGlsZDogcmVtb3ZlQ2hpbGQsXG4gIGFkZENoaWxkOiBhZGRDaGlsZCxcbiAgYWRkQXR0cmlidXRlOiBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZTogcmVtb3ZlQXR0cmlidXRlLFxuICB1cGRhdGVQcm9wZXJ0eTogdXBkYXRlQXR0cmlidXRlLFxuICBhZGRQcm9wZXJ0eTogYWRkQXR0cmlidXRlLFxuICBpbnNlcnREb206IGluc2VydERvbVxufTtcblxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5jb25zdCBCYXNlVmlldyA9IHJlcXVpcmUoJy4vYmFzZVZpZXcnKTtcbmNvbnN0IFZJRVcgPSBuZXcgQmFzZVZpZXcobnVsbCwgbnVsbCwge30pO1xuXG4vLyBPYmplY3Qgb2YgdHlwZXMgb2YgYW5pbWF0aW9ucyBhdmFpbGFibGUgb24gc2NyZWVuIGNoYW5nZVxuY29uc3QgQW5pbWF0aW9uVHlwZXMgPSB7XG4gIFNMSURFOiB7XG4gICAgbmFtZTogXCJzbGlkZVwiLFxuICAgIGhhbmRsZXI6IHNsaWRlSGFuZGxlclxuICB9LFxuICBTTElERV9WRVJUSUNBTDoge1xuICAgIG5hbWU6IFwic2xpZGVfZG93blwiLFxuICAgIGhhbmRsZXI6IHNsaWRlRG93bkhhbmRsZXJcbiAgfSxcbiAgU0lNUExFOiB7XG4gICAgbmFtZTogXCJzaW1wbGVcIixcbiAgICBoYW5kbGVyOiBzaW1wbGVIYW5kbGVyXG4gIH1cbn1cblxuY29uc3QgREVGQVVMVF9BTklNQVRJT04gPSBBbmltYXRpb25UeXBlcy5TTElERTtcblxuZnVuY3Rpb24gc2ltcGxlSGFuZGxlcihmcm9tSWQsIHRvSWQsIGRpcmVjdGlvbikge1xuICBsZXQgY21kID0gVklFVy5jbWQoe1xuICAgIGlkOiB0b0lkLFxuICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4XG4gIH0pO1xuICByZXR1cm4gY21kO1xufVxuXG5mdW5jdGlvbiBzbGlkZURvd25IYW5kbGVyKGZyb21JZCwgdG9JZCwgZGlyZWN0aW9uKSB7XG4gIGxldCBjb250YWluZXIgPSBWSUVXLmNtZENvbnRhaW5lcigpO1xuICBsZXQgY21kO1xuXG4gIGlmIChkaXJlY3Rpb24gPT0gMSkge1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiB0b0lkLFxuICAgICAgdHJhbnNsYXRpb25ZOiB3aW5kb3cuX19IRUlHSFQsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25ZOiAnMCcsXG4gICAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleCxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogZnJvbUlkLFxuICAgICAgYV90cmFuc2xhdGlvblk6IC0wLjIgKiB3aW5kb3cuX19IRUlHSFQsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJ1xuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICB3aW5kb3cuWkluZGV4Kys7XG4gIGNtZCA9IFZJRVcuY21kKHtcbiAgICBpZDogZnJvbUlkLFxuICAgIHRyYW5zbGF0aW9uWTogMCxcbiAgICBhX3RyYW5zbGF0aW9uWTogd2luZG93Ll9fSEVJR0hULFxuICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4XG4gIH0pO1xuICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgY21kID0gVklFVy5jbWQoe1xuICAgIGlkOiB0b0lkLFxuICAgIHRyYW5zbGF0aW9uWjogd2luZG93LlpJbmRleC0xLFxuICAgIGFfdHJhbnNsYXRpb25ZOiAnMCcsXG4gICAgdHJhbnNsYXRpb25ZOiAtMC4yICogd2luZG93Ll9fSEVJR0hULFxuICAgIGFfZHVyYXRpb246ICczMDAnLFxuICB9KTtcbiAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHNsaWRlSGFuZGxlcihmcm9tSWQsIHRvSWQsIGRpcmVjdGlvbikge1xuICBsZXQgY29udGFpbmVyID0gVklFVy5jbWRDb250YWluZXIoKTtcbiAgbGV0IGNtZDtcbiAgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IHRvSWQsXG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICB0cmFuc2xhdGlvblg6IHdpbmRvdy5fX1dJRFRILFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgICBhX3RyYW5zbGF0aW9uWDogJzAnLFxuICAgICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXgsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiBmcm9tSWQsXG4gICAgICB0cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6ICgtLjIgKiB3aW5kb3cuX19XSURUSCkgKyAnJyxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uID09IC0xKSB7XG4gICAgd2luZG93LlpJbmRleCsrO1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiBmcm9tSWQsXG4gICAgICB0cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6IHdpbmRvdy5fX1dJRFRILFxuICAgICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXgsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IHRvSWQsXG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICB0cmFuc2xhdGlvblg6ICgtLjIgKiB3aW5kb3cuX19XSURUSCkgKyAnJyxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIHRyYW5zbGF0aW9uWjogd2luZG93LlpJbmRleCAtIDEsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLypcbiAgR2VuZXJpYyBIYW5kbGVyIGZvciBBbmltYXRpb25cbiAgQXJndW1lbnRzOlxuICAgIGZyb21WaWV3SWQ6IE51bWJlciAtIElkIG9mIHRoZSB2aWV3IGN1cnJlbnRseSB2aXNpYmxlIG9uIHRoZSBzY3JlZW5cbiAgICB0b1ZpZXdJRDogTnVtYmVyIC0gSWQgb2YgdGhlIHZpZXcgd2hpY2ggaGFzIHRvIGJlIGJyb3VnaHQgb24gdGhlIHNjcmVlblxuICAgIElEOiBOdW1iZXIgLSBJZCBvZiB0aGUgdmlldyB0byBiZSBhbmltYXRlZFxuICAgIGFuaW1hdG9yOiBPYmogLSB7bmFtZTpzdHJpbmcsIGhhbmRsZXI6ZnVuY3Rpb259XG4gICAgZGlyZWN0aW9uOiBOdW1iZXIgLSBSZXByZXNlbnRzIG9mIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNjcmVlblxuICAgICAgLTEgOiBHbyBiYWNrIHRvIHRoZSBhbHJlYWR5IHJlbmRlcmVkIHNjcmVlbiAocmlnaHQgdG8gbGVmdClcbiAgICAgICAxIDogR28gdG8gdGhlIG5ldyBzY3JlZW4gKGxlZnQgdG8gcmlnaHQpXG4qL1xuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uKGZyb21WaWV3SUQsIHRvVmlld0lkLCBkaXJlY3Rpb24sIGFuaW1hdG9yKSB7XG4gIGlmICghYW5pbWF0b3IpXG4gICAgYW5pbWF0b3IgPSBERUZBVUxUX0FOSU1BVElPTjtcblxuICBpZiAodHlwZW9mIGFuaW1hdG9yID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBhbmltYXRvci5oYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpXG4gICAgcmV0dXJuIGFuaW1hdG9yLmhhbmRsZXIoZnJvbVZpZXdJRCwgdG9WaWV3SWQsIGRpcmVjdGlvbik7XG4gIGVsc2VcbiAgICBjb25zb2xlLmxvZyhuZXcgRXJyb3IoXCJBbmltYXRpb24gaGFuZGxlciBpcyBub3QgYSBmdW5jdGlvbiwgdHlwZTogXCIgK1xuICAgICAgYW5pbWF0b3IpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMudHlwZXMgPSBBbmltYXRpb25UeXBlcztcbm1vZHVsZS5leHBvcnRzLmdldEFuaW1hdGlvbiA9IGdldEFuaW1hdGlvbjsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbmNvbnN0IG1lcmdlID0gIHJlcXVpcmUoXCIuL2hlbHBlclwiKS5tZXJnZTtcblxuU3RyaW5nLnByb3RvdHlwZS5hZGRDbWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIHJldHVybiB0aGlzLmNvbmNhdChkYXRhKTtcbn07XG5cbkFycmF5LnByb3RvdHlwZS5hZGRDbWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIHRoaXMucHVzaChkYXRhKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5sZXQgcGFyc2VQYXJhbXM7XG5pZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi9oZWxwZXJzL2FuZHJvaWQvcGFyc2VQYXJhbXMnKTtcbmVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpXG4gIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi9oZWxwZXJzL3dlYi9wYXJzZVBhcmFtcycpO1xuZWxzZVxuICBwYXJzZVBhcmFtcyA9IHJlcXVpcmUoJy4vaGVscGVycy9pb3MvcGFyc2VQYXJhbXMnKTtcblxuY2xhc3MgQmFzZVZpZXcge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHMgfHwge307XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuIHx8IFtdO1xuXG4gICAgd2luZG93Ll9fU0VURk4gPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICBBbmRyb2lkLnJ1bkluVUkoXG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyksXG4gICAgICAgIG51bGxcbiAgICAgIClcbiAgICB9LmJpbmQodGhpcylcblxuICAgIHRoaXMuaWRTZXQgPSB7fTtcblxuICAgIGlmICh0aGlzLnByb3BzLmlkKSB7XG4gICAgICB0aGlzLmlkU2V0W1wiaWRcIl0gPSB0aGlzLnByb3BzLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmlkID0gdGhpcy5pZChcImlkXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLl9yZWYpIHtcbiAgICAgIHRoaXMucHJvcHMuX3JlZih0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kUmVjdXJzZShvYmosIHNlbGVjdG9yKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gb2JqLmNoaWxkcmVuO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNoaWxkcmVuW2ldLmRpc3BsYXlOYW1lICYmIGNoaWxkcmVuW2ldLmRpc3BsYXlOYW1lID09IHNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuZm91bmRDaGlsZHJlbi5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkcmVuW2ldLmNoaWxkcmVuICYmIGNoaWxkcmVuW2ldLmNoaWxkcmVuLmxlbmd0aClcbiAgICAgICAgdGhpcy5maW5kUmVjdXJzZShjaGlsZHJlbltpXSwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGZpbmQoc2VsZWN0b3IsIG9iaikge1xuICAgIHRoaXMuZm91bmRDaGlsZHJlbiA9IFtdO1xuXG4gICAgaWYgKCFvYmopXG4gICAgICB0aGlzLmZpbmRSZWN1cnNlKHRoaXMubGF5b3V0LCBzZWxlY3Rvcik7XG4gICAgZWxzZVxuICAgICAgdGhpcy5maW5kUmVjdXJzZShvYmosIHNlbGVjdG9yKTtcblxuICAgIHJldHVybiB0aGlzLmZvdW5kQ2hpbGRyZW47XG4gIH1cblxuICBpZChuYW1lKSB7XG4gICAgaWYgKCF0aGlzLmlkU2V0W25hbWVdKSB7XG4gICAgICB3aW5kb3cuX19JRCsrO1xuICAgICAgdGhpcy5pZFNldFtuYW1lXSA9IHdpbmRvdy5fX0lEO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5pZFNldFtuYW1lXTtcbiAgfVxuXG4gIHNldElkcyhhcnIpIHtcbiAgICBpZiAoIXRoaXMuaWRTZXQpXG4gICAgICB0aGlzLmlkU2V0ID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmlkU2V0W2FycltpXV0pIHtcbiAgICAgICAgd2luZG93Ll9fSUQrKztcbiAgICAgICAgdGhpcy5pZFNldFthcnJbaV1dID0gd2luZG93Ll9fSUQgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVTcGVjaWFsQ2hhcnModmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJywnKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFwsL2csICdcXFxcXFxcXCwnKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gdmFsdWUuaW5kZXhPZignOicpID4gLTEgPyB2YWx1ZS5yZXBsYWNlKC9cXDovZywgJ1xcXFxcXFxcOicpIDogdmFsdWU7XG4gICAgdmFsdWUgPSB2YWx1ZS5pbmRleE9mKCc9JykgPiAtMSA/IHZhbHVlLnJlcGxhY2UoL1xcPS9nLCAnXFxcXFxcXFw9JykgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJzsnKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFw7L2csICdcXFxcXFxcXDsnKSA6IHZhbHVlO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY21kRm9yQW5kcm9pZChjb25maWcpIHtcbiAgICB2YXIgY21kID0gXCJzZXRfdmlldz1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgY29uZmlnLmlkICsgXCI7XCI7XG4gICAgdmFyIHJ1bkluVUk7XG5cbiAgICBpZiAoY29uZmlnLnRvYXN0KSB7XG4gICAgICBjbWQgPSBcInNldF9UT0FTVD1hbmRyb2lkLndpZGdldC5Ub2FzdC0+bWFrZVRleHQ6Y3R4X2N0eCxjc19cIiArIHRoaXMuaGFuZGxlU3BlY2lhbENoYXJzKFxuICAgICAgICAgIGNvbmZpZy50ZXh0KSArIFwiLGlfXCIgKyAoY29uZmlnLmR1cmF0aW9uID09IFwic2hvcnRcIiA/IDAgOiAxKSArXG4gICAgICAgIFwiO2dldF9UT0FTVC0+c2hvd1wiO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnICYmIE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICBjb25maWcucm9vdCA9IFwidHJ1ZVwiO1xuICAgICAgcnVuSW5VSSA9IHBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIGNvbmZpZywgXCJnZXRcIikucnVuSW5VSTtcblxuICAgICAgY21kICs9IHJ1bkluVUkgKyAnOyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNtZDtcbiAgfVxuXG4gIGNtZENvbnRhaW5lcigpIHtcbiAgICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gICAgICByZXR1cm4gXCJcIjtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjbWRGb3JXZWIoY29uZmlnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoKVxuICAgICAgcmV0dXJuIHBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIGNvbmZpZywgXCJzZXRcIik7XG4gIH1cblxuICBjbWQoY29uZmlnKSB7XG4gICAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKVxuICAgICAgcmV0dXJuIHRoaXMuY21kRm9yQW5kcm9pZChjb25maWcpO1xuICAgIGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpXG4gICAgICByZXR1cm4gdGhpcy5jbWRGb3JXZWIoY29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoaWQsIGpzeCwgaW5kZXgsIGZuLCByZXBsYWNlQ2hpbGQpIHtcbiAgICB2YXIgcHJveHlGbk5hbWU7XG4gICAgaWYgKCFyZXBsYWNlQ2hpbGQpIHtcbiAgICAgIHJlcGxhY2VDaGlsZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChmbikge1xuICAgICAgcHJveHlGbk5hbWUgPSAnRicgKyB3aW5kb3cuX19GTl9JTkRFWDtcbiAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW3Byb3h5Rm5OYW1lXSA9IGZuO1xuICAgICAgd2luZG93Ll9fRk5fSU5ERVgrKztcbiAgICB9XG5cbiAgICBqc3ggPSAod2luZG93Ll9fT1MgIT0gXCJBTkRST0lEXCIpID8ganN4IDogSlNPTi5zdHJpbmdpZnkoanN4KTtcblxuICAgIGlmIChwcm94eUZuTmFtZSlcbiAgICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KGlkLCBqc3gsIGluZGV4LCBwcm94eUZuTmFtZSwgcmVwbGFjZUNoaWxkKTtcbiAgICBlbHNlXG4gICAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChpZCwganN4LCBpbmRleCwgbnVsbCwgcmVwbGFjZUNoaWxkKTtcbiAgfVxuXG4gIGdldFZpZXcoanN4KSB7XG4gICAgaWYgKHdpbmRvdy5fX09TICE9IFwiQU5EUk9JRFwiKVxuICAgICAgcmV0dXJuIGpzeDtcblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc3gpO1xuICB9XG5cbiAgdXBkYXRlUHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gbWVyZ2UodGhpcy5wcm9wcywgcHJvcHMpO1xuICAgIGNvbnN0IG9sZENvbnRhaW5lcklkID0gdGhpcy5sYXlvdXQuaWRTZXQuaWQ7XG4gICAgY29uc3QgbGF5b3V0ID0gdGhpcy5yZW5kZXIoKTtcbiAgICBmb3IgKGxldCBpPTA7IGk8bGF5b3V0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaT09MCkgdGhpcy5yZXBsYWNlQ2hpbGQob2xkQ29udGFpbmVySWQsIGxheW91dC5jaGlsZHJlbltpXSwgaSk7XG4gICAgICBlbHNlIHRoaXMuYXBwZW5kQ2hpbGQob2xkQ29udGFpbmVySWQsIGxheW91dC5jaGlsZHJlbltpXSwgaSk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0LmlkU2V0LmlkID0gb2xkQ29udGFpbmVySWQ7XG4gIH1cblxuICByZW1vdmVWaWV3KGlkKSB7XG4gICAgaWYgKF9fT1MgPT0gXCJXRUJcIilcbiAgICAgIHJldHVybiBBbmRyb2lkLnJlbW92ZVZpZXcoaWQpO1xuICAgIHJldHVybiBcInNldF9WSUVXPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZCArXG4gICAgICBcIjtzZXRfUEFSRU5UPWdldF9WSUVXLT5nZXRQYXJlbnQ7Z2V0X1BBUkVOVC0+cmVtb3ZlVmlldzpnZXRfVklFVztcIlxuICB9XG5cbiAgcmVtb3ZlQ2hpbGRyZW4oaWQpIHtcbiAgICBpZiAoX19PUyA9PSBcIldFQlwiKVxuICAgICAgcmV0dXJuIEFuZHJvaWQucmVtb3ZlQ2hpbGRyZW4oaWQpO1xuICAgIHJldHVybiBcInNldF9WSUVXPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZCArXG4gICAgICBcIjtnZXRfVklFVy0+cmVtb3ZlQWxsVmlld3M7XCJcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZChpZCwganN4LCBpbmRleCwgZm4pIHtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGlkLCBqc3gsIGluZGV4LCBmbiwgdHJ1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlVmlldzsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cblxuXG52YXIgY29tcHV0ZUNoaWxkRGltZW5zID0gZnVuY3Rpb24odmlldykge1xuICAgIGlmICh2aWV3LnByb3BzKSB7XG4gICAgICB2aWV3LnByb3BzLnVzZUNvbnN0cmFpdHMgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBpZiAodmlldy50eXBlID09IFwibGluZWFyTGF5b3V0XCIgJiYgdmlldy5jaGlsZHJlbiAmJiB2aWV3LmNoaWxkcmVuLmxlbmd0aCl7XG4gICAgLy8gICB2aWV3LnByb3BzLndlaWdodFN1bSA9IDAuMDtcbiAgICAvLyAgIHZpZXcucHJvcHMuZGlmZkhlaWdodCA9IDAuMDtcbiAgICAvLyAgIGZvcih2YXIgaSBpbiB2aWV3LmNoaWxkcmVuKXtcbiAgICAvLyAgICAgdmFyIGNoaWxkID0gdmlldy5jaGlsZHJlbltpXTtcbiAgICAvLyAgICAgaWYoY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMud2VpZ2h0KXtcbiAgICAvLyAgICAgICB2aWV3LnByb3BzLndlaWdodFN1bSArPSBwYXJzZUludChjaGlsZC5wcm9wcy53ZWlnaHQpXG4gICAgLy8gICAgIH0gZWxzZSBpZihjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy5oZWlnaHQpIHtcbiAgICAvLyAgICAgICB2aWV3LnByb3BzLmRpZmZIZWlnaHQgKz0gcGFyc2VJbnQoY2hpbGQucHJvcHMuaGVpZ2h0KVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICByZXR1cm4gdmlldztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXB1dGVMaW5lYXJsYXlvdXQ6KHZpZXcpID0+IGNvbXB1dGVDaGlsZERpbWVucyh2aWV3KSxcbiAgY29tcHV0ZVJlbGF0aXZlTGF5b3V0OiAodmlldykgPT4gY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpLFxuICBjb21wdXRlU2Nyb2xsVmlldzogKHZpZXcpID0+IGNvbXB1dGVDaGlsZERpbWVucyh2aWV3KSxcbiAgY29tcHV0ZUNoaWxkRGltZW5zXG59O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5mdW5jdGlvbiBydW4oKSB7XG4gIGlmICh3aW5kb3cuX19PUyA9PT0gXCJJT1NcIikge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi9pb3NcIilcbiAgfSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PT0gXCJXRUJcIikge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi93ZWJcIilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vYW5kcm9pZFwiKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcnVuKCk7IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5BcnJheS5wcm90b3R5cGUuZmxhdHRlbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgdmFyIG1vcmUgPSBbXS5jb25jYXQoY3VyKS5zb21lKEFycmF5LmlzQXJyYXkpO1xuICAgIHJldHVybiBwcmV2LmNvbmNhdChtb3JlID8gY3VyLmZsYXR0ZW4oKSA6IGN1cik7XG4gIH0sW10pO1xufTtcblxuZnVuY3Rpb24gZmxhdHRlbk9iamVjdChvYikge1xuICB2YXIgdG9SZXR1cm4gPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBvYikge1xuICAgIGlmICghb2IuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgIGlmICgodHlwZW9mIG9iW2ldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGZsYXRPYmplY3QgPSBmbGF0dGVuT2JqZWN0KG9iW2ldKTtcbiAgICAgIGZvciAodmFyIHggaW4gZmxhdE9iamVjdCkge1xuICAgICAgICBpZiAoIWZsYXRPYmplY3QuaGFzT3duUHJvcGVydHkoeCkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAodHlwZW9mIGZsYXRPYmplY3RbeF0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgdG9SZXR1cm5beF0gPSBmbGF0T2JqZWN0W3hdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b1JldHVybltpXSA9IG9iW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9SZXR1cm47XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHR5cGUsIHByb3BzLCAuLi5jaGlsZHJlbil7XG4gIHZhciBwYXJhbVR5cGU7XG5cbiAgY2hpbGRyZW4gPSAgY2hpbGRyZW4uZmxhdHRlbigpO1xuXG4gIGlmICghcHJvcHMpXG4gIHByb3BzID0ge307XG5cbiAgaWYodHlwZW9mIHR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBwcm9wcy5ub2RlX2lkID0gd2luZG93Ll9fTk9ERV9JRCArICcnO1xuICAgIHByb3BzID0gZmxhdHRlbk9iamVjdChwcm9wcyk7XG4gICAgd2luZG93Ll9fTk9ERV9JRCsrO1xuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQucHJvcHMucGFyZW50SWQgPSBwcm9wcy5pZDtcbiAgICB9KVxuXG4gICAgaWYgKCFwcm9wcy5fX2ZpbGVuYW1lKVxuICAgIHByb3BzLl9fZmlsZW5hbWUgPSBcImZpbGVuYW1lIG5vdCBhZGRlZFwiO1xuXG4gICAgcmV0dXJuIHt0eXBlOiB0eXBlLCAgcHJvcHM6IHByb3BzLCBjaGlsZHJlbjogY2hpbGRyZW59XG5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IHR5cGUocHJvcHMsIGNoaWxkcmVuKTtcbiAgfVxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaGFuZGxlIDogKHVpLCBjYWxsYmFjaykgPT4ge1xuICAgIGlmICghdWkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYodWkucmVuZGVyKSB7XG4gICAgICBpZiAodHlwZW9mIEFuZHJvaWQgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFuZHJvaWQgaXMgdW5kZWZpbmVkXCIpO1xuXG4gICAgICBpZiAod2luZG93Ll9fT1MgIT0gXCJBTkRST0lEXCIpXG4gICAgICAgIHJldHVybiBBbmRyb2lkLlJlbmRlcih1aS5yZW5kZXIsIG51bGwpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKHR5cGVvZiBBbmRyb2lkLmdldE5ld0lEID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBBbmRyb2lkLlJlbmRlcihKU09OLnN0cmluZ2lmeSh1aS5yZW5kZXIpLCBudWxsLCBcImZhbHNlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBBbmRyb2lkLlJlbmRlcihKU09OLnN0cmluZ2lmeSh1aS5yZW5kZXIpLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHVpLnJ1bkluVUkpIHtcbiAgICAgIEFuZHJvaWQucnVuSW5VSSh1aS5ydW5JblVJLCBudWxsKTtcbiAgICB9XG4gICAgaWYodWkuYWRkVmlld1RvUGFyZW50KSB7XG4gICAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudCh1aS5hZGRWaWV3VG9QYXJlbnQucGFyZW50SWQsIEpTT04uc3RyaW5naWZ5KHVpLmFkZFZpZXdUb1BhcmVudC5qc3gpLCB1aS5hZGRWaWV3VG9QYXJlbnQuaW5kZXgsIG51bGwpO1xuICAgIH1cbiAgfVxufSIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuLy8gRm9sbG93aW5nIGZ1bmN0aW9ucyBhcmUgdXNlZCBieSBXRUIgYW5kIElPUyBSZW5kZXJcbmZ1bmN0aW9uIGNhY2hlRGltZW4odmlldykge1xuICBsZXQgcHJvcHMgPSB2aWV3LnByb3BzO1xuICBsZXQgZGltZW4gPSB7XG4gICAgdzogcHJvcHMudyxcbiAgICBoOiBwcm9wcy5oLFxuICAgIHg6IHByb3BzLngsXG4gICAgeTogcHJvcHMueSxcbiAgICBncmF2aXR5OiBwcm9wcy5ncmF2aXR5LFxuICAgIHBhZGRpbmc6IHByb3BzLnBhZGRpbmcsXG4gICAgb3JpZW50YXRpb246IHByb3BzLm9yaWVudGF0aW9uLFxuICAgIHN0cm9rZTogcHJvcHMuc3Ryb2tlID8gcHJvcHMuc3Ryb2tlLnNwbGl0KFwiLFwiKVswXSAqIDEgOiAwLFxuICB9XG4gIHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1twcm9wcy5pZF0gPSBkaW1lbjtcbn1cblxuZnVuY3Rpb24gc2hvdWxkTW92ZSh2aWV3KSB7XG4gIGxldCBwcm9wcyA9IHZpZXcucHJvcHM7XG4gIGxldCBkaW1lbiA9IHtcbiAgICB3OiBwcm9wcy53LFxuICAgIGg6IHByb3BzLmgsXG4gICAgeDogcHJvcHMueCxcbiAgICB5OiBwcm9wcy55XG4gIH07XG4gIGxldCBjYWNoZWREaW1lbiA9IHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1twcm9wcy5pZF07XG4gIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gIGlmICghY2FjaGVkRGltZW4pXG4gICAgcmV0dXJuIGRpbWVuO1xuICBmb3IgKGxldCBrZXkgaW4gZGltZW4pIHtcbiAgICBpZiAoY2FjaGVkRGltZW5ba2V5XSAhPSBkaW1lbltrZXldKSB7XG4gICAgICBkaW1lbi5pZCA9IHByb3BzLmlkO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIGlmIChjaGFuZ2VkKVxuICAgIHJldHVybiBkaW1lbjtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldE9TKCkge1xuICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCF1c2VyQWdlbnQpXG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiVXNlckFnZW50IGlzIG51bGxcIikpO1xuICBpZiAodXNlckFnZW50LmluY2x1ZGVzKFwiQW5kcm9pZFwiKSAmJiB1c2VyQWdlbnQuaW5jbHVkZXMoXCJWZXJzaW9uXCIpKVxuICAgIHJldHVybiBcIkFORFJPSURcIjtcbiAgaWYgKCh1c2VyQWdlbnQuaW5jbHVkZXMoXCJpUGhvbmVcIikgfHwgdXNlckFnZW50LmluY2x1ZGVzKFwiaVBhZFwiKSkgJiYgIXVzZXJBZ2VudC5pbmNsdWRlcyhcIlZlcnNpb25cIikpXG4gICAgcmV0dXJuIFwiSU9TXCI7XG4gIHJldHVybiBcIldFQlwiO1xufVxuXG5mdW5jdGlvbiBjbGVhclZpZXdFeHRlcm5hbHModmlldykge1xuICBpZiAoIXZpZXcpXG4gICAgcmV0dXJuO1xuXG4gIGRlbGV0ZSB3aW5kb3cuX19WSUVXU1t2aWV3LnByb3BzLmlkXTtcbiAgZGVsZXRlIHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1t2aWV3LnByb3BzLmlkXTtcbiAgXG4gIGlmKF9fT0JTRVJWRVJTW3ZpZXcucHJvcHMuaWRdKVxuICAgIGRlbGV0ZSB3aW5kb3cuX19PQlNFUlZFUlNbdmlldy5wcm9wcy5pZF07XG5cbiAgdmlldy5jaGlsZHJlbi5mb3JFYWNoKGNsZWFyVmlld0V4dGVybmFscyk7XG59XG5cbi8vIHVzZTogY2xvbmUoIDx0aGluZyB0byBjb3B5PiApIHJldHVybnMgPG5ldyBjb3B5PlxuZnVuY3Rpb24gY2xvbmUobywgbSl7XG4gIC8vIHJldHVybiBub24gb2JqZWN0IHZhbHVlc1xuICBpZignb2JqZWN0JyAhPT10eXBlb2YgbykgcmV0dXJuIG9cbiAgLy8gbTogYSBtYXAgb2Ygb2xkIHJlZnMgdG8gbmV3IG9iamVjdCByZWZzIHRvIHN0b3AgcmVjdXJzaW9uXG4gIGlmKCdvYmplY3QnICE9PXR5cGVvZiBtIHx8IG51bGwgPT09bSkgbSA9bmV3IFdlYWtNYXAoKVxuICB2YXIgbiA9bS5nZXQobylcbiAgaWYoJ3VuZGVmaW5lZCcgIT09dHlwZW9mIG4pIHJldHVybiBuXG4gIC8vIHNoYWxsb3cvbGVhZiBjbG9uZSBvYmplY3RcbiAgdmFyIGMgPU9iamVjdC5nZXRQcm90b3R5cGVPZihvKS5jb25zdHJ1Y3RvclxuICAvLyBUT0RPOiBzcGVjaWFsaXplIGNvcGllcyBmb3IgZXhwZWN0ZWQgYnVpbHQgaW4gdHlwZXMgaS5lLiBEYXRlIGV0Y1xuICBzd2l0Y2goYykge1xuICAgIC8vIHNob3VsZG4ndCBiZSBjb3BpZWQsIGtlZXAgcmVmZXJlbmNlXG4gICAgY2FzZSBCb29sZWFuOlxuICAgIGNhc2UgRXJyb3I6XG4gICAgY2FzZSBGdW5jdGlvbjpcbiAgICBjYXNlIE51bWJlcjpcbiAgICBjYXNlIFByb21pc2U6XG4gICAgY2FzZSBTdHJpbmc6XG4gICAgY2FzZSBTeW1ib2w6XG4gICAgY2FzZSBXZWFrTWFwOlxuICAgIGNhc2UgV2Vha1NldDpcbiAgICAgIG4gPW9cbiAgICAgIGJyZWFrO1xuICAgIC8vIGFycmF5IGxpa2UvY29sbGVjdGlvbiBvYmplY3RzXG4gICAgY2FzZSBBcnJheTpcbiAgICAgIG0uc2V0KG8sIG4gPW8uc2xpY2UoMCkpXG4gICAgICAvLyByZWN1cnNpdmUgY29weSBmb3IgY2hpbGQgb2JqZWN0c1xuICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uKHYsaSl7XG4gICAgICAgIGlmKCdvYmplY3QnID09PXR5cGVvZiB2KSBuW2ldID1jbG9uZSh2LCBtKVxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFycmF5QnVmZmVyOlxuICAgICAgbS5zZXQobywgbiA9by5zbGljZSgwKSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRGF0YVZpZXc6XG4gICAgICBtLnNldChvLCBuID1uZXcgKGMpKGNsb25lKG8uYnVmZmVyLCBtKSwgby5ieXRlT2Zmc2V0LCBvLmJ5dGVMZW5ndGgpKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBNYXA6XG4gICAgY2FzZSBTZXQ6XG4gICAgICBtLnNldChvLCBuID1uZXcgKGMpKGNsb25lKEFycmF5LmZyb20oby5lbnRyaWVzKCkpLCBtKSkpXG4gICAgICBicmVhaztcbiAgICBjYXNlIEludDhBcnJheTpcbiAgICBjYXNlIFVpbnQ4QXJyYXk6XG4gICAgY2FzZSBVaW50OENsYW1wZWRBcnJheTpcbiAgICBjYXNlIEludDE2QXJyYXk6XG4gICAgY2FzZSBVaW50MTZBcnJheTpcbiAgICBjYXNlIEludDMyQXJyYXk6XG4gICAgY2FzZSBVaW50MzJBcnJheTpcbiAgICBjYXNlIEZsb2F0MzJBcnJheTpcbiAgICBjYXNlIEZsb2F0NjRBcnJheTpcbiAgICAgIG0uc2V0KG8sIG4gPW5ldyAoYykoY2xvbmUoby5idWZmZXIsIG0pLCBvLmJ5dGVPZmZzZXQsIG8ubGVuZ3RoKSlcbiAgICAgIGJyZWFrO1xuICAgIC8vIHVzZSBidWlsdCBpbiBjb3B5IGNvbnN0cnVjdG9yXG4gICAgY2FzZSBEYXRlOlxuICAgIGNhc2UgUmVnRXhwOlxuICAgICAgbS5zZXQobywgbiA9bmV3IChjKShvKSlcbiAgICAgIGJyZWFrO1xuICAgIC8vIGZhbGxiYWNrIGdlbmVyaWMgb2JqZWN0IGNvcHlcbiAgICBkZWZhdWx0OlxuICAgICAgbS5zZXQobywgbiA9T2JqZWN0LmFzc2lnbihuZXcgKGMpKCksIG8pKVxuICAgICAgLy8gcmVjdXJzaXZlIGNvcHkgZm9yIGNoaWxkIG9iamVjdHNcbiAgICAgIGZvcihjIGluIG4pIGlmKCdvYmplY3QnID09PXR5cGVvZiBuW2NdKSBuW2NdID1jbG9uZShuW2NdLCBtKVxuICB9XG4gIHJldHVybiBuXG59XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICB2YXIgb2JqID0ge30sXG4gICAgICBpID0gMCxcbiAgICAgIGlsID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgIGtleTtcbiAgZm9yICg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICBmb3IgKGtleSBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaG91bGRNb3ZlLFxuICBjYWNoZURpbWVuLFxuICBnZXRPUyxcbiAgbWVyZ2UsXG4gIGNsZWFyVmlld0V4dGVybmFscyxcbiAgY2xvbmUsXG59IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0cGFyc2VQYXJhbXMgOiByZXF1aXJlKFwiLi9wYXJzZVBhcmFtc1wiKSxcblx0bWFwUHJhbXMgOiByZXF1aXJlKFwiLi9tYXBQYXJhbXNcIiksXG5cdGNhbGxiYWNrTWFwcGVyIDogcmVxdWlyZShcIi4uL2NvbW1vbi9jYWxsYmFja01hcHBlclwiKVxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG52YXIgbWFwID0ge1xuICB0ZXh0RnJvbUh0bWw6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldFRleHQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBiYXNlQWxpZ246IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogXCJzZXRCYXNlbGluZUFsaWduZWRcIixcbiAgfSxcbiAgc2hvd0RpdmlkZXJzOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRTaG93RGl2aWRlcnMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImRpdmlkZXJEcmF3YWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXREaXZpZGVyRHJhd2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB0YWJUZXh0Q29sb3JzOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6ICdzZXRUYWJUZXh0Q29sb3JzJyxcbiAgfSxcbiAgXCJzZWxlY3RlZFRhYkluZGljYXRvckhlaWdodFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTZWxlY3RlZFRhYkluZGljYXRvckhlaWdodCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGZvcmVncm91bmQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldENvbG9yJyxcbiAgICBpblZva2VkSW46ICdGT1JFR1JPVU5EJyxcbiAgfSxcbiAgc2VsZWN0ZWRUYWJJbmRpY2F0b3JDb2xvcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2VsZWN0ZWRUYWJJbmRpY2F0b3JDb2xvcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGxheW91dFRyYW5zaXRpb246IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldExheW91dFRyYW5zaXRpb24nLFxuICAgIGluVm9rZWRJbjogJ0xBWU9VVF9UUkFOU0lUSU9OJyxcbiAgfSxcblxuICBmb2N1c091dDogeyAvLyBkb2VzbnQgd29ya1xuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdjbGVhckZvY3VzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgZm9jdXM6IHtcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAncmVxdWVzdEZvY3VzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcblxuICBmaWxsVmlld3BvcnQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogXCJzZXRGaWxsVmlld3BvcnRcIixcbiAgfSxcbiAgXCJwcmltaXRpdmVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRQcmltaXRpdmUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sIFxuICBcImN4XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q3gnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiY3lcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDeScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJyYWRpdXNcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRSYWRpdXMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiaGV4XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q29sb3InLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwic3R5bGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTdHlsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJzd2VlcEFuZ2xlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U3dlZXBBbmdsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJzdGFydEFuZ2xlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U3RhcnRBbmdsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJzdHJva2VXaWR0aFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFN0cm9rZVdpZHRoJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBzZXREYXRlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2wnLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXREYXRlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgbWluRGF0ZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdsJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0TWluRGF0ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIG1heERhdGU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnbCcsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldE1heERhdGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBjbGlwQ2hpbGRyZW46IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldENsaXBDaGlsZHJlbicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGFkanVzdFZpZXdCb3VuZHM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldEFkanVzdFZpZXdCb3VuZHMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBtYXhMaW5lczoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0TWF4TGluZXMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBzaW5nbGVMaW5lOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRTaW5nbGVMaW5lJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgaGFyZHdhcmU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldExheWVyVHlwZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHNlbGVjdGVkOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTZWxlY3RlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGN1cnZlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgICAgJ2xpbmVhcic6IFwiMFwiXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0SW50ZXJwb2xhdG9yJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgZm9udEZhbWlseToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAnbm9ybWFsJzogMCxcbiAgICAgICdib2xkJzogMSxcbiAgICAgICdpdGFsaWMnOiAyLFxuICAgICAgJ2JvbGRfaXRhbGljJzogM1xuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldEZvbnRGYW1pbHknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIHg6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0WCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gICdicmluZ1RvRnJvbnQnOiB7XG4gICAgdmFsdWVzOiBbXSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6IFwiYnJpbmdUb0Zyb250XCIsXG4gIH0sXG4gICdhYm92ZSc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICBcImNoZWNrZWRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q2hlY2tlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0WScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiYmFja2dyb3VuZERyYXdhYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJhY2tncm91bmQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBidXR0b25UaW50OiB7XG4gICAgdmFsdWU6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJ1dHRvblRpbnRMaXN0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgdmlzaWJpbGl0eToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIHZpc2libGU6IDAsXG4gICAgICBpbnZpc2libGU6IDQsXG4gICAgICBnb25lOiA4XG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0VmlzaWJpbGl0eScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2NhbGVUeXBlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNjYWxlVHlwZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwicHJvZ3Jlc3NDb2xvclwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRJbmRldGVybWluYXRlVGludExpc3QnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImFscGhhXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEFscGhhJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJpbWFnZVVybFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRJbWFnZURyYXdhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJwbGFjZUhvbGRlclwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRJbWFnZURyYXdhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJwYWNrYWdlSWNvblwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEltYWdlRHJhd2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwic2Nyb2xsVG9cIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3Ntb290aFNjcm9sbFRvJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImNvcm5lclJhZGlpXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q29ybmVyUmFkaWknLFxuICAgIGluVm9rZWRJbjogJ0RSQVdBQkxFJ1xuICB9LFxuICBcImxpbmVTcGFjaW5nXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldExpbmVTcGFjaW5nJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInVybFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdsb2FkVXJsJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJ0cmFuc2xhdGlvbllcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VHJhbnNsYXRpb25ZJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJ0cmFuc2xhdGlvblhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VHJhbnNsYXRpb25YJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgdHJhbnNsYXRpb25aOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUcmFuc2xhdGlvblonLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImRlbGF5XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnbCcsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFN0YXJ0RGVsYXknLFxuICB9LFxuICBcImR1cmF0aW9uXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnbCcsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldER1cmF0aW9uJyxcbiAgfSxcbiAgXCJwaXZvdFhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0UGl2b3RYJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJwaXZvdFlcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0UGl2b3RZJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJtaW5XaWR0aFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRNaW5pbXVtV2lkdGgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcIm1pbkhlaWdodFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRNaW5pbXVtSGVpZ2h0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJtYXhXaWR0aFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRNYXhXaWR0aCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2hhZG93VGFnXCI6IHtcbiAgICAgIHZhbHVlczogW3tcbiAgICAgICAgICAgIHR5cGU6ICdjcycsXG4gICAgICAgICAgfV0sXG4gICAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgICBmbk5hbWU6ICdzaGFkb3dUYWcnLFxuICAgICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgfSxcbiAgXCJhbmRyb2lkU2hhZG93XCI6IHtcbiAgICAgIHZhbHVlczogW3tcbiAgICAgICAgICAgIHR5cGU6ICdjcycsXG4gICAgICAgICAgfV0sXG4gICAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgICBmbk5hbWU6ICdhbmRyb2lkU2hhZG93JyxcbiAgICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIH0sXG4gIFwiZ3JhZGllbnRcIjoge1xuICAgICAgdmFsdWVzOiBbe1xuICAgICAgICB0eXBlOiAnY3MnXG4gICAgICB9XSxcbiAgICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICAgIGZuTmFtZTogJ3NldENvbG9ycycsXG4gICAgICBpblZva2VkSW46ICdEUkFXQUJMRSdcbiAgfSxcbiAgXCJncmFkaWVudEFuZ2xlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0T3JpZW50YXRpb24nLFxuICAgIGluVm9rZWRJbjogJ0RSQVdBQkxFJ1xufSxcbiAgXCJsaW5lSGVpZ2h0XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldExpbmVIZWlnaHQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwibGV0dGVyU3BhY2luZ1wiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRMZXR0ZXJTcGFjaW5nJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJoaW50XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnY3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRIaW50JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJpbnB1dFR5cGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIHBhc3N3b3JkOiAnMTI5JyxcbiAgICAgIG51bWVyaWM6ICcyJyxcbiAgICAgIG51bWVyaWNQYXNzd29yZDogJzE4JyxcbiAgICAgIG51bWVyaWNXaXRob3V0U3VnZ2VzdGlvbjogJzUyNDI5MScsXG4gICAgICBkaXNhYmxlZDogJzAnLFxuICAgICAgdGV4dDogJzEnLFxuICAgICAgbXVsdGlUZXh0OiAnMydcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRJbnB1dFR5cGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImlucHV0VHlwZUlcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRJbnB1dFR5cGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInRleHRTaXplXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRleHRTaXplJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJmb250U2l6ZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VGV4dFNpemUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInRleHRJc1NlbGVjdGFibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VGV4dElzU2VsZWN0YWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiZm9udFN0eWxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldFR5cGVmYWNlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJ0ZXh0QWxsQ2Fwc1wiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRBbGxDYXBzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJleHBhbmRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRFeHBhbmQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZm9jdXNhYmxlSW5Ub3VjaE1vZGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRGb2N1c2FibGVJblRvdWNoTW9kZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJkZXNjZW5kYW50Rm9jdXNhYmlsaXR5XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RGVzY2VuZGFudEZvY3VzYWJpbGl0eScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJleHBhbmREdXJhdGlvblwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEV4cGFuZER1cmF0aW9uJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImV4cGFuZFNjcm9sbFBhcmVudFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNjcm9sbFBhcmVudCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJleHBhbmRBbHBoYVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEV4cGFuZEFscGhhJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImRlZmF1bHRFeHBhbmRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXREZWZhdWx0RXhwYW5kJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInN3eXBlRW5hYmxlZFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFN3eXBlRW5hYmxlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgdG9hc3Q6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnY3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzaG93VG9hc3QnLFxuICAgIGluVm9rZWRJbjogJ0NPTlRFWFQnLFxuICB9LFxuICBzY2FsZVg6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNjYWxlWCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHNjYWxlWToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2NhbGVZJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgaWQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldElkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgZ3Jhdml0eToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGNlbnRlcl9ob3Jpem9udGFsOiAxLFxuICAgICAgY2VudGVyX3ZlcnRpY2FsOiAxNixcbiAgICAgIGJvdHRvbSA6IDgwLFxuICAgICAgbGVmdDogODM4ODYxMSxcbiAgICAgIHJpZ2h0OiA4Mzg4NjEzLFxuICAgICAgY2VudGVyOiAxNyxcbiAgICAgIGJvdHRvbTogODAsXG4gICAgICB0b3BfdmVydGljYWw6IDQ4LFxuICAgICAgc3RhcnQ6IDgzODg2MTEsXG4gICAgICBlbmQ6IDgzODg2MTMsXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0R3Jhdml0eScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIG9yaWVudGF0aW9uOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgaG9yaXpvbnRhbDogMCxcbiAgICAgIHZlcnRpY2FsOiAxLFxuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldE9yaWVudGF0aW9uJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgdGV4dDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdjcydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRleHQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB3aWR0aDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIG1hdGNoX3BhcmVudDogLTEsXG4gICAgICB3cmFwX2NvbnRlbnQ6IC0yLFxuICAgIH1dLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgY3RyOiB0cnVlLFxuICAgIHZhck5hbWU6ICd2YXJfd2lkdGgnXG4gIH0sXG4gIHdlaWdodDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICAgIG1hdGNoX3BhcmVudDogLTEsXG4gICAgICB3cmFwX2NvbnRlbnQ6IC0yLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICB2YXJOYW1lOiAndmFyX3dlaWdodCdcbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgbWF0Y2hfcGFyZW50OiAtMSxcbiAgICAgIHdyYXBfY29udGVudDogLTIsXG4gICAgfV0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBjdHI6IHRydWUsXG4gICAgdmFyTmFtZTogJ3Zhcl9oZWlnaHQnXG4gIH0sXG4gIGxheW91dF9ncmF2aXR5OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgYm90dG9tX3JpZ2h0OiAyMSxcbiAgICAgIHRvcDogMzAsXG4gICAgICBib3R0b206IDUwLFxuICAgICAgbGVmdDogMyxcbiAgICAgIHJpZ2h0OiA1LFxuICAgICAgY2VudGVyOiAxNyxcbiAgICAgIGJvdHRvbTogODAsXG4gICAgICBjZW50ZXJfaG9yaXpvbnRhbDogMSxcbiAgICAgIGNlbnRlcl92ZXJ0aWNhbDogMTYsXG4gICAgICBzdGFydDogODM4ODYxMSxcbiAgICAgIGVuZDogODM4ODYxMyxcbiAgICB9XSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIHZhck5hbWU6IFwidmFyX2dyYXZpdHlcIixcbiAgfSxcbiAgbWFyZ2luOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwic2V0TWFyZ2luc1wiLFxuICB9LFxuICBtYXJnaW5TdGFydDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcInNldE1hcmdpblN0YXJ0XCIsXG4gIH0sXG4gIG1hcmdpbkVuZDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcInNldE1hcmdpbkVuZFwiLFxuICB9LFxuICBwYWRkaW5nOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiBcInNldFBhZGRpbmdSZWxhdGl2ZVwiLFxuICB9LFxuICAnY2VudGVySW5QYXJlbnQnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAxMyxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICAnY2VudGVySG9yaXpvbnRhbCc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDE0LFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gICdjZW50ZXJWZXJ0aWNhbCc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDE1LFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gIFwiY2hlY2tlZFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDaGVja2VkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgJ2FsaWduUGFyZW50Qm90dG9tJzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMTIsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgJ2FsaWduUGFyZW50VG9wJzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMTAsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgJ2FsaWduUGFyZW50UmlnaHQnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAxMSxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICAnYWxpZ25QYXJlbnRMZWZ0Jzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogOSxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICAnbGVmdE9mJzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMCxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICBjb3JuZXJSYWRpdXM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHBmJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnRFJBV0FCTEUnLFxuICAgIGZuTmFtZTogXCJzZXRDb3JuZXJSYWRpdXNcIixcbiAgfSxcbiAgc3Ryb2tlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnRFJBV0FCTEUnLFxuICAgIGZuTmFtZTogXCJzZXRTdHJva2VcIixcbiAgfSxcbiAgXCJ0eXBlZmFjZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ25vcm1hbCc6IDAsXG4gICAgICAnYm9sZCc6IDEsXG4gICAgICAnaXRhbGljJzogMixcbiAgICAgICdib2xkX2l0YWxpYyc6IDNcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRUeXBlZmFjZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGJhY2tncm91bmQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ0RSQVdBQkxFJyxcbiAgICBmbk5hbWU6IFwic2V0Q29sb3JcIixcbiAgfSxcbiAgYmFja2dyb3VuZERyYXdhYmxlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCYWNrZ3JvdW5kRHJhd2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogXCJzZXRCYWNrZ3JvdW5kQ29sb3JcIixcbiAgfSxcbiAgY29sb3I6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRleHRDb2xvcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGhpbnRDb2xvcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SGludFRleHRDb2xvcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGJ0bkJhY2tncm91bmQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ01VVEFURUJHJyxcbiAgICBmbk5hbWU6IFwic2V0Q29sb3JGaWx0ZXJcIixcbiAgfSxcbiAgY29sb3JGaWx0ZXI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogXCJzZXRDb2xvckZpbHRlclwiLFxuICB9LFxuICBidG5Db2xvcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VGV4dENvbG9yJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgc2hhZG93TGF5ZXI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZidcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZidcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNoYWRvd0xheWVyJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgZWxldmF0aW9uOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRFbGV2YXRpb24nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICByb3RhdGlvblg6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFJvdGF0aW9uWCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHJvdGF0aW9uWToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Um90YXRpb25ZJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgcm90YXRpb246IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFJvdGF0aW9uJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYmFja2dyb3VuZFRpbnQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJhY2tncm91bmRUaW50TGlzdCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2Nyb2xsQmFyWFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRIb3Jpem9udGFsU2Nyb2xsQmFyRW5hYmxlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2Nyb2xsQmFyWVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRWZXJ0aWNhbFNjcm9sbEJhckVuYWJsZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImNsaWNrYWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDbGlja2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImN1cnNvclwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEN1cnNvclZpc2libGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwibG9uZ0NsaWNrYWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldExvbmdDbGlja2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZm9jdXNhYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEZvY3VzYWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2VsZWN0YWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCYWNrZ3JvdW5kUmVzb3VyY2UnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNlbGVjdGFibGVJdGVtXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJhY2tncm91bmRSZXNvdXJjZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHZhbHVlczoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QWRhcHRlcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgbWF4U2Vlazoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldE1heCcsXG4gICAgaW5Wb2tlZEluOiBcIlZJRVdcIixcbiAgICBkb250TWFwOiB0cnVlXG4gIH0sXG4gIGFjY2Vzc2liaWxpdHlIaW50OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRDb250ZW50RGVzY3JpcHRpb24nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBpbWVPcHRpb25zOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRJbWVPcHRpb25zJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJob3Jpem9udGFsRmFkZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRIb3Jpem9udGFsRmFkaW5nRWRnZUVuYWJsZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImZhZGluZ0VkZ2VMZW5ndGhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRGYWRpbmdFZGdlTGVuZ3RoJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzaGltbWVyXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QmFja2dyb3VuZCcsXG4gICAgYWx0ZXJuYXRlRm5OYW1lOiAnc2V0U2hpbW1lcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2hpbW1lckFjdGl2ZVwiOiB7XG4gICAgdmFsdWVzIDogW10sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3N0YXJ0U2hpbW1lcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2hpbW1lckluYWN0aXZlXCI6IHtcbiAgICB2YWx1ZXMgOiBbXSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc3RvcFNoaW1tZXInLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInBlYWtIZWlnaHRcIjoge1xuICAgIHZhbHVlcyA6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFBlYWtIZWlnaHQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNoZWV0U3RhdGVcIjoge1xuICAgIHZhbHVlcyA6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBleHBhbmRlZCA6IDMsXG4gICAgICBjb2xsYXBzZWQgOiA0LFxuICAgICAgaGlkZGVuIDogNSxcbiAgICAgIGhhbGZFeHBhbmRlZCA6IDZcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRTdGF0ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaGFsZkV4cGFuZGVkUmF0aW9cIjoge1xuICAgIHZhbHVlcyA6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SGFsZkV4cGFuZGVkUmF0aW8nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImhpZGVhYmxlXCI6IHtcbiAgICB2YWx1ZXMgOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEhpZGVhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcDtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuXG52YXIgIG1hcCA9IHtcbiAgJ1BBUkFNUyc6IHtcbiAgICAncmVxdWlyZWQnOiAnd2lkdGgsIGhlaWdodCcsXG4gICAgJ3ZpZXdNZXRob2QnOiAnc2V0TGF5b3V0UGFyYW1zLGdldExheW91dFBhcmFtcydcbiAgfSxcbiAgJ0RSQVdBQkxFJzoge1xuICAgICdjdHInOiAnYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlLT5uZXcnLFxuICAgICdyZXF1aXJlZCc6ICcnLFxuICAgICd2aWV3TWV0aG9kJzogJ3NldEJhY2tncm91bmQsZ2V0QmFja2dyb3VuZCdcbiAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gbWFwO1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG52YXIgbWFwUGFyYW1zID0gcmVxdWlyZSgnLi9tYXBQYXJhbXMnKTtcbnZhciBvYmpNYXAgPSByZXF1aXJlKCcuL29iak1hcCcpO1xudmFyIGNhbGxiYWNrTWFwcGVyICA9IHJlcXVpcmUoXCIuLi9jb21tb24vY2FsbGJhY2tNYXBwZXJcIilcblxudmFyIGdsb2JhbE9iak1hcCA9IHt9O1xudmFyIGNvbW1hbmQgPSBcIlwiO1xudmFyIGVsZW1lbnRUeXBlO1xudmFyIGdldFNldFR5cGU7XG5cbmZ1bmN0aW9uIGlzVVJMKHN0cikge1xuICB0cnkge1xuICAgIHZhciB1cmwgPSBuZXcgVVJMKHN0cik7XG4gICAgcmV0dXJuIChzdHIuaW5kZXhPZihcIi5cIikgIT0gLTEpO1xuICB9IGNhdGNoKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhdHRhY2hGZWVkYmFjayhjb25maWcsIGtleXMsIGkpIHtcbiAgdmFyIGZlZWRiYWNrRm4gPSBmdW5jdGlvbigpIHt9O1xuXG4gIGlmICh0eXBlb2YgY29uZmlnLmZlZWRiYWNrICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaWYgKGNvbmZpZy5mZWVkYmFjayA9PSBcInRydWVcIikge1xuICAgICAgY29uZmlnLmZlZWRiYWNrID0gY2FsbGJhY2tNYXBwZXIubWFwKGZlZWRiYWNrRm4pO1xuICAgICAgd2luZG93Ll9fQUxMX09OQ0xJQ0tTLnB1c2goY29uZmlnLmZlZWRiYWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY29uZmlnLm9uQ2xpY2spIHtcbiAgICBjb25maWcuZmVlZGJhY2sgPSBjYWxsYmFja01hcHBlci5tYXAoZmVlZGJhY2tGbik7XG4gICAgd2luZG93Ll9fQUxMX09OQ0xJQ0tTLnB1c2goY29uZmlnLmZlZWRiYWNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb25maWdHcm91cHMoY29uZmlnKSB7XG4gIHZhciBncm91cHMgPSB7fTtcbiAgdmFyIG9ialR5cGU7XG4gIHZhciBpc0FuaW1hdGlvbjtcbiAgdmFyIHdpZHRoRm91bmQgPSAwO1xuICB2YXIgaGVpZ2h0Rm91bmQgPSAwO1xuICBsZXQgcGFkZGluZ1ZhbCA9IGNvbmZpZ1tcInBhZGRpbmdcIl07XG4gIGlmIChjb25maWcuc3Ryb2tlKVxuICAgIGRlbGV0ZSBjb25maWcucGFkZGluZztcbiAgaWYgKGNvbmZpZy5tYXJnaW4pIHtcbiAgICBsZXQgbWFyZ2luID0gY29uZmlnLm1hcmdpbi5zcGxpdCgnLCcpLm1hcChhID0+IGEqMSk7XG4gICAgY29uZmlnLm1hcmdpblN0YXJ0ID0gbWFyZ2luWzBdICsgJyc7XG4gICAgY29uZmlnLm1hcmdpbkVuZCA9IG1hcmdpblsyXSArICcnO1xuICB9XG4gIHZhciBrZXlzID0gIE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gIHZhciBwcm94eUZuTmFtZTtcbiAgIGZvciAodmFyIGkgPSAwOyBpPGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBhdHRhY2hGZWVkYmFjayhjb25maWcsIGtleXMsIGkpO1xuXG4gICAgaWYgKHR5cGVvZiBjb25maWdba2V5c1tpXV0gPT0gXCJ1bmRlZmluZWRcIiB8fCBjb25maWdba2V5c1tpXV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGNvbmZpZ1trZXlzW2ldXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWdba2V5c1tpXV0gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25maWdba2V5c1tpXV0gPSBjYWxsYmFja01hcHBlci5tYXAoY29uZmlnW2tleXNbaV1dKTtcblxuXG4gICAgICBpZiAoa2V5c1tpXSA9PSBcIm9uQ2xpY2tcIil7XG4gICAgICAgIHdpbmRvdy5fX0ZOX01BUFtjb25maWdba2V5c1tpXV1dID0gY29uZmlnLnRleHQgfHwgY29uZmlnLmlkIHx8IFwiXCI7XG5cbiAgICAgICAgaWYoIWNvbmZpZy5hbGxvd011bHRpcGxlQ2xpY2tzIHx8IGNvbmZpZy5hbGxvd011bHRpcGxlQ2xpY2s9PVwiZmFsc2VcIil7XG4gICAgICAgICAgd2luZG93Ll9fVEhST1RURUxFRF9BQ1RJT05TLnB1c2goY29uZmlnW2tleXNbaV1dKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChrZXlzW2ldLmluZGV4T2YoJ18nKSAmJiBrZXlzW2ldLnNwbGl0KCdfJylbMF0gPT0gJ2EnKSB7XG4gICAgICAgIG9ialR5cGUgPSBtYXBQYXJhbXNba2V5c1tpXS5zcGxpdCgnXycpWzFdXTtcbiAgICAgICAgaXNBbmltYXRpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqVHlwZSA9IG1hcFBhcmFtc1trZXlzW2ldXTtcbiAgICAgICAgaXNBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGtleXNbaV0gPT0gXCJzdHJva2VcIikge1xuICAgICAgICBsZXQgcGFkZGluZyA9IFswLDAsMCwwXTtcblxuICAgICAgICBpZiAocGFkZGluZ1ZhbClcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ1ZhbC5zcGxpdCgnLCcpLm1hcChhID0+IGEqMSk7XG5cbiAgICAgICAgbGV0IHN0cm9rZVZhbHVlID0gY29uZmlnW1wic3Ryb2tlXCJdLnNwbGl0KCcsJylbMF0gKiAxO1xuICAgICAgICBwYWRkaW5nID0gcGFkZGluZy5tYXAoZGltID0+IGRpbSArIHN0cm9rZVZhbHVlKTtcbiAgICAgICAgY29uZmlnW1wicGFkZGluZ1wiXSA9IHBhZGRpbmcuam9pbignLCcpO1xuICAgICAgICBrZXlzLnB1c2goXCJwYWRkaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAob2JqVHlwZSkge1xuICAgICAgICBpZiAoaXNBbmltYXRpb24pe1xuICAgICAgICAgIGlmICghZ3JvdXBzWydBTklNQVRJT04nXSlcbiAgICAgICAgICBncm91cHNbJ0FOSU1BVElPTiddID0gW107XG5cblxuICAgICAgICAgIGdyb3Vwc1snQU5JTUFUSU9OJ10ucHVzaCh7a2V5OiBrZXlzW2ldLnNwbGl0KCdfJylbMV0sIHZhbHVlOiBjb25maWdba2V5c1tpXV19KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghZ3JvdXBzW29ialR5cGUuaW5Wb2tlZEluXSlcbiAgICAgICAgICBncm91cHNbb2JqVHlwZS5pblZva2VkSW5dID0gW107XG5cbiAgICAgICAgICBpZiAoa2V5c1tpXSA9PSBcIndpZHRoXCIpXG4gICAgICAgICAgd2lkdGhGb3VuZCArKztcbiAgICAgICAgICBpZiAoa2V5c1tpXSA9PSBcImhlaWdodFwiKVxuICAgICAgICAgIGhlaWdodEZvdW5kICsrO1xuXG4gICAgICAgICAgZ3JvdXBzW29ialR5cGUuaW5Wb2tlZEluXS5wdXNoKHtrZXk6IGtleXNbaV0sIHZhbHVlOiBjb25maWdba2V5c1tpXV19KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleXNbaV0hPT1cInBhdHRlcm5cIiAmJiBrZXlzW2ldICE9PSBcInJvb3RcIiAmJiBrZXlzW2ldICE9PSBcImlkXCIgJiYga2V5c1tpXSE9PSBcIl9fZmlsZW5hbWVcIikge1xuICAgICAgICAgIGRlbGV0ZSBjb25maWdba2V5c1tpXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZ2V0U2V0VHlwZSA9PSBcInNldFwiKSB7XG4gICAgaWYgKCFncm91cHMuUEFSQU1TKVxuICAgIGdyb3Vwcy5QQVJBTVMgPSBbXTtcblxuICAgIGlmICghd2lkdGhGb3VuZClcbiAgICBncm91cHMuUEFSQU1TLnB1c2goe2tleTogXCJ3aWR0aFwiLCB2YWx1ZTogJ3dyYXBfY29udGVudCd9KTtcbiAgICBpZiAoIWhlaWdodEZvdW5kKVxuICAgIGdyb3Vwcy5QQVJBTVMucHVzaCh7a2V5OiBcImhlaWdodFwiLCB2YWx1ZTogJ3dyYXBfY29udGVudCd9KTtcbiAgfVxuXG4gIHJldHVybiBncm91cHM7XG59XG5cbmZ1bmN0aW9uIGdldEN0cih2aWV3R3JvdXApIHtcbiAgdmFyIHZpZXdHcm91cE1hcCA9ICB7XG4gICAgJ2xpbmVhckxheW91dCc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdjb29yZGluYXRvckxheW91dCc6ICdhbmRyb2lkeC5jb29yZGluYXRvcmxheW91dC53aWRnZXQuQ29vcmRpbmF0b3JMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdzY3JvbGxWaWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2hvcml6b250YWxTY3JvbGxWaWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3JlbGF0aXZlTGF5b3V0JzogJ2FuZHJvaWQud2lkZ2V0LlJlbGF0aXZlTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnZnJhbWVMYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICd0b29sYmFyJzogJ2FuZHJvaWQuc3VwcG9ydC52Ny53aWRnZXQuVG9vbGJhciRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2NvbGxhcHNpbmdUb29sYmFyTGF5b3V0JzogJ2FuZHJvaWR4LmNvb3JkaW5hdG9ybGF5b3V0LndpZGdldC5Db29yZGluYXRvckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2FwcEJhckxheW91dCc6ICdhbmRyb2lkLnN1cHBvcnQuZGVzaWduLndpZGdldC5BcHBCYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICd2aWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3RhYkxheW91dCc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICd2aWV3UGFnZXInOiAnYW5kcm9pZC5zdXBwb3J0LnY0LnZpZXcuVmlld1BhZ2VyJExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnbGlzdFZpZXcnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnZXhwYW5kYWJsZUxpc3RWaWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3JlY3ljbGVyVmlldyc6ICdhbmRyb2lkLnN1cHBvcnQudjcud2lkZ2V0LlJlY3ljbGVyVmlldyRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3JhdGluZ0Jhcic6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdhY2NvcmRpb25MYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdzd3lwZUxheW91dCc6ICdhbmRyb2lkLndpZGdldC5GcmFtZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3N3eXBlU2Nyb2xsJzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgXCJzaGltbWVyRnJhbWVMYXlvdXRcIjogXCJhbmRyb2lkLndpZGdldC5GcmFtZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ld1wiLFxuICAgIFwiYm90dG9tU2hlZXRMYXlvdXRcIjogJ2FuZHJvaWQud2lkZ2V0LkZyYW1lTGF5b3V0JExheW91dFBhcmFtcy0+bmV3J1xuICB9O1xuXG4gIGlmKCF2aWV3R3JvdXBNYXBbdmlld0dyb3VwXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggdmlldyBncm91cCBmb3VuZCA6IFwiICsgdmlld0dyb3VwKTtcbiAgfVxuXG4gIHJldHVybiAgdmlld0dyb3VwTWFwW3ZpZXdHcm91cF07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNwZWNpYWxDaGFycyh2YWx1ZSkge1xuICB2YWx1ZSA9ICB2YWx1ZS5pbmRleE9mKCcsJyk+LTE/dmFsdWUucmVwbGFjZSgvXFwsL2csICdcXFxcXFxcXCwnKTp2YWx1ZTtcbiAgdmFsdWUgPSAgdmFsdWUuaW5kZXhPZignOicpPi0xP3ZhbHVlLnJlcGxhY2UoL1xcOi9nLCAnXFxcXFxcXFw6Jyk6dmFsdWU7XG4gIHZhbHVlID0gIHZhbHVlLmluZGV4T2YoJzonKT4tMT92YWx1ZS5yZXBsYWNlKC9cXD0vZywgJ1xcXFxcXFxcPScpOnZhbHVlO1xuICB2YWx1ZSA9ICB2YWx1ZS5pbmRleE9mKCc7Jyk+LTE/dmFsdWUucmVwbGFjZSgvXFw7L2csICdcXFxcXFxcXDsnKTp2YWx1ZTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEFyZ3MoYXR0cnMsIG9iaikge1xuICBpZiAoIW9iai52YWx1ZXMpXG4gIHJldHVybiBcIlwiO1xuXG4gIHZhciBhcmdzID0gXCJcIjtcbiAgdmFyIHZhbHVlID0gKGF0dHJzLmtleSA9PSBcInRleHRcIiB8fCBhdHRycy5rZXkgPT0gXCJoaW50XCIpXG4gICAgP2F0dHJzLnZhbHVlOmF0dHJzLnZhbHVlLnJlcGxhY2UoLyAvZywnJyk7XG5cbiAgdmFyIGluY29taW5nQXJncztcbiAgaWYgKGF0dHJzLmtleSA9PSBcInRleHRcIiB8fCBhdHRycy5rZXkgPT0gXCJoaW50XCIpIHtcbiAgICBpbmNvbWluZ0FyZ3MgPSBbXTtcbiAgICBpbmNvbWluZ0FyZ3MucHVzaChoYW5kbGVTcGVjaWFsQ2hhcnModmFsdWUpKTtcblxuICB9IGVsc2Uge1xuICAgIGluY29taW5nQXJncyA9IHZhbHVlLnNwbGl0KCcsJyk7XG4gIH1cblxuICBmb3IgICh2YXIgaSA9MCA7aTxvYmoudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJncyArPSAgb2JqLnZhbHVlc1tpXS50eXBlICsgJ18nO1xuXG4gICAgaWYgKG9iai5kb250TWFwKVxuICAgIGFyZ3MgKz0gaW5jb21pbmdBcmdzW2ldICsgJywnO1xuICAgIGVsc2UgIHtcbiAgICAgIGlmIChvYmoudmFsdWVzW2ldLmRvbnRNYXApIHtcbiAgICAgICAgYXJncyArPSBpbmNvbWluZ0FyZ3NbaV0gKyAnLCc7XG4gICAgICB9IGVsc2UgaWYgKGF0dHJzLmtleSA9PSBcIndpZHRoXCIgfHwgYXR0cnMua2V5ID09IFwiaGVpZ2h0XCIpIHtcbiAgICAgICAgaWYgKCFpc05hTihpbmNvbWluZ0FyZ3NbaV0qMSkpXG4gICAgICAgIGFyZ3MgPSAnZHBfJyArIGluY29taW5nQXJnc1tpXSArICcsJztcbiAgICAgICAgZWxzZVxuICAgICAgICBhcmdzICs9IG9iai52YWx1ZXNbaV1baW5jb21pbmdBcmdzW2ldXSArICcsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFyZ3MgKz0gb2JqLnZhbHVlc1tpXVtpbmNvbWluZ0FyZ3NbaV1dICsgJywnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcmdzLnN1YnN0cmluZygwLCBhcmdzLmxlbmd0aC0xKTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUN0cihhdHRycywgYmVsb25nc1RvKSB7XG4gIHZhciBvYmogPSBvYmpNYXBbYmVsb25nc1RvXTtcbiAgdmFyIGN0ciA9IGdsb2JhbE9iak1hcFtiZWxvbmdzVG9dLmN0cjtcbiAgdmFyIHJlcUF0dHJzO1xuXG4gIGlmIChnZXRTZXRUeXBlID09IFwiZ2V0XCIgJiYgKGJlbG9uZ3NUbyA9PSBcIkFOSU1BVElPTlwiIHx8IGJlbG9uZ3NUbyA9PSBcIkRSQVdBQkxFXCIgfHwgYmVsb25nc1RvID09IFwiUEFSQU1TXCIpKSB7XG4gICAgcmV0dXJuIGN0cjtcbiAgfVxuXG4gIGlmICghb2JqIHx8ICFvYmoucmVxdWlyZWQpXG4gIHJldHVybiBjdHJcblxuICByZXFBdHRycyA9IG9iai5yZXF1aXJlZC5zcGxpdCgnLCcpO1xuXG4gIGN0ciArPSAnOic7XG5cbiAgZm9yICh2YXIgaSA9MDsgaTxyZXFBdHRycy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGo9MDsgajxhdHRycy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHJlcUF0dHJzW2ldLnRyaW0oKSA9PSBhdHRyc1tqXS5rZXkpICB7XG4gICAgICAgIGN0ciArPSBhcHBlbmRBcmdzKGF0dHJzW2pdLCBtYXBQYXJhbXNbcmVxQXR0cnNbaV0udHJpbSgpXSkgKyAnLCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGN0ci5zdWJzdHJpbmcoMCwgY3RyLmxlbmd0aCAtIDEpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUh0bWwodGV4dCkge1xuICByZXR1cm4gJ3NldF9odG1sPWFuZHJvaWQudGV4dC5IdG1sLT5mcm9tSHRtbDpzXycgKyB0ZXh0ICsgJzsnO1xufVxuXG5mdW5jdGlvbiBwYXJzZUNvbG9yKGNvbG9yLCBzZXR0ZXJOYW1lKSB7XG4gIGlmICghc2V0dGVyTmFtZSlcbiAgc2V0dGVyTmFtZSA9ICdzZXRfY29sb3JJbnQnO1xuICByZXR1cm4gc2V0dGVyTmFtZSArICc9YW5kcm9pZC5ncmFwaGljcy5Db2xvci0+cGFyc2VDb2xvcjpzXycgKyBjb2xvciArICc7Jztcbn1cblxuZnVuY3Rpb24gbWFzaFRoaXMoYXR0cnMsIG9iaiwgYmVsb25nc1RvLCB0cmFuc2Zvcm1GbiwgYWxsUHJvcHMsIHR5cGUpIHtcbiAgaWYgKGdldFNldFR5cGUgPT0gXCJnZXRcIiAmJiAoYXR0cnMua2V5ID09IFwid2lkdGhcIiB8fCBhdHRycy5rZXkgPT0gXCJoZWlnaHRcIikpIHtcbiAgICAvLyBnZXQgY2FzZSBpLmUgZHVyaW5nIHBhdGNoXG4gICAgaWYoIWlzTmFOKGF0dHJzLnZhbHVlICogMSkpIHtcbiAgICAgIHJldHVybiAnZ2V0X1BBUkFNUy0+JyArIG9iai52YXJOYW1lICsgJzpkcF8nICsgYXR0cnMudmFsdWUgKyAnO2dldF92aWV3LT5zZXRMYXlvdXRQYXJhbXM6Z2V0X1BBUkFNUyAnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2dldF9QQVJBTVMtPicgKyBvYmoudmFyTmFtZSArICc6aV8nICsgbWFwUGFyYW1zW2F0dHJzLmtleV0udmFsdWVzWzBdW2F0dHJzLnZhbHVlXSArICc7Z2V0X3ZpZXctPnNldExheW91dFBhcmFtczpnZXRfUEFSQU1TICc7XG4gICAgfVxuICB9IGVsc2UgaWYoYXR0cnMua2V5ID09IFwid2lkdGhcIiB8fCBhdHRycy5rZXkgPT0gXCJoZWlnaHRcIikge1xuICAgIC8vIHNldCBjYXNlIGkuZSBmaXJzdCByZW5kZXJcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgYmVmb3JlQ21kID0gXCJcIjtcbiAgdmFyIGFmdGVyQ21kID0gXCJcIjtcbiAgdmFyIHByZVBlbmQgPSAnJztcbiAgdmFyIGN1cnJUcmFuc1ZhbDtcbiAgdmFyIGNvbG9yO1xuICB2YXIgYXJyID0gW107XG4gIHZhciByZXM7XG4gIHZhciB2YWx1ZXM7XG5cbiAgdmFyIGtleVdvcmQ7XG4gIHZhciBfY21kO1xuICB2YXIgZmluYWxDbWQ7XG4gIHZhciBjb2xvcjE7XG4gIGF0dHJzLnZhbHVlICs9ICcnO1xuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJ0ZXh0U2l6ZVwiKSB7XG4gICAgYXR0cnMudmFsdWUgPSBcIjEsXCIgKyAoYXR0cnMudmFsdWUgLSAxKTtcbiAgfVxuXG4vL3RvZG86dGFiVGV4dENvbG9yc1xuICBpZiAoYXR0cnMua2V5ID09IFwiZm9yZWdyb3VuZFwiIHx8XG4gICAgYXR0cnMua2V5ID09IFwidGFiVGV4dENvbG9yc1wiIHx8XG4gICAgYXR0cnMua2V5ID09IFwic2VsZWN0ZWRUYWJJbmRpY2F0b3JDb2xvclwiICB8fFxuICAgIGF0dHJzLmtleSA9PSBcImNvbG9yXCIgfHxcbiAgICBhdHRycy5rZXkgPT0gXCJiYWNrZ3JvdW5kXCIgfHxcbiAgICBhdHRycy5rZXkgPT0gXCJzdHJva2VcIiB8fFxuICAgIGF0dHJzLmtleSA9PSBcImJ0bkNvbG9yXCIpIHtcblxuICAgIGlmIChhdHRycy5rZXkgPT0gXCJzdHJva2VcIikge1xuICAgICAgY29sb3IgPSBhdHRycy52YWx1ZS5zcGxpdCgnLCcpWzFdO1xuICAgICAgY3VyclRyYW5zVmFsID0gYXBwZW5kQXJncyhhdHRycyxvYmopLnNwbGl0KCcsJylbMF0gKyAnLGdldF9jb2xvckludCc7XG4gICAgfSBlbHNlIGlmKGF0dHJzLmtleSA9PSBcInRhYlRleHRDb2xvcnNcIil7XG4gICAgICBjb2xvciA9IGF0dHJzLnZhbHVlLnNwbGl0KCcsJylbMF07XG4gICAgICBjb2xvcjEgPSBhdHRycy52YWx1ZS5zcGxpdCgnLCcpWzFdO1xuICAgICAgY3VyclRyYW5zVmFsID0gJ2dldF9jb2xvckludDEnICsgJyxnZXRfY29sb3JJbnQnO1xuICAgIH1lbHNlIHtcbiAgICAgIGNvbG9yID0gYXR0cnMudmFsdWU7XG4gICAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2NvbG9ySW50JztcbiAgICB9XG5cbiAgICBpZihhdHRycy5rZXkgPT0gXCJ0YWJUZXh0Q29sb3JzXCIpe1xuICAgICAgcHJlUGVuZCA9IHBhcnNlQ29sb3IoY29sb3IsXCJzZXRfY29sb3JJbnQxXCIpKycsJytwYXJzZUNvbG9yKGNvbG9yMSk7XG4gICAgfWVsc2V7XG4gICAgICBwcmVQZW5kID0gcGFyc2VDb2xvcihjb2xvcik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImZvbnRTdHlsZVwiKSB7XG4gICAgaWYoaXNVUkwoYXR0cnMudmFsdWUpKSB7XG4gICAgICBpZih0eXBlb2Ygd2luZG93Ll9fUFJPWFlfRk4gPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB3aW5kb3cuX19QUk9YWV9GTiA9IHt9O1xuICAgICAgfVxuICAgICAgdmFyIGZvbnQgPSBhdHRycy52YWx1ZS5zdWJzdHIoYXR0cnMudmFsdWUubGFzdEluZGV4T2YoJy8nKSArIDEpXG5cbiAgICAgIHZhciBmaWxlUHJlc2VudCA9ICh0eXBlb2YgSkJyaWRnZS5pc0ZpbGVQcmVzZW50ID09IFwiZnVuY3Rpb25cIikgJiYgSkJyaWRnZS5pc0ZpbGVQcmVzZW50KGZvbnQpO1xuICAgICAgaWYgKCFmaWxlUHJlc2VudCkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja01hcHBlci5tYXAoZnVuY3Rpb24gKGlzTmV3LCB1cmwsIGZpbGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBhbGxQcm9wcy5maW5kKGEgPT4gYS5rZXkgPT09IFwiaWRcIik7XG4gICAgICAgICAgaWYgKCFpZCkgcmV0dXJuO1xuICAgICAgICAgIHZhciB1cmxTZXRDb21tYW5kcyA9IFwic2V0X2RpcmVjdG9yeT1jdHgtPmdldERpcjpzX2p1c3BheSxpXzA7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZEZpbGU9amF2YS5pby5GaWxlLT5uZXc6Z2V0X2RpcmVjdG9yeSxzX1wiICsgZmlsZU5hbWUgKyBcIjtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkUGF0aD1nZXRfcmVzb2x2ZWRGaWxlLT50b1N0cmluZztcIiArIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9kZm9udD1hbmRyb2lkLmdyYXBoaWNzLlR5cGVmYWNlLT5jcmVhdGVGcm9tRmlsZTpnZXRfcmVzb2x2ZWRQYXRoO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfdGV4dFY9Y3R4LT5maW5kVmlld0J5SWQ6aV9cIiArIGlkLnZhbHVlICsgXCI7XCIgKyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRfdGV4dFYtPnNldFR5cGVmYWNlOmdldF9kZm9udFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuZHJvaWQucnVuSW5VSSh1cmxTZXRDb21tYW5kcyAsbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBKQnJpZGdlLnJlbmV3RmlsZShhdHRycy52YWx1ZSwgZm9udCwgY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIGlmKEpCcmlkZ2UuZ2V0RmlsZVBhdGgpIHtcbiAgICAgICAgcHJlUGVuZCA9IFwic2V0X2RpcmVjdG9yeT1jdHgtPmdldERpcjpzX2p1c3BheSxpXzA7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZEZpbGU9amF2YS5pby5GaWxlLT5uZXc6Z2V0X2RpcmVjdG9yeSxzX1wiICsgSkJyaWRnZS5nZXRGaWxlUGF0aChmb250KSArIFwiO1wiICtcbiAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRQYXRoPWdldF9yZXNvbHZlZEZpbGUtPnRvU3RyaW5nO1wiICsgXG4gICAgICAgICAgICAgICAgICAgIFwic2V0X2Rmb250PWFuZHJvaWQuZ3JhcGhpY3MuVHlwZWZhY2UtPmNyZWF0ZUZyb21GaWxlOmdldF9yZXNvbHZlZFBhdGg7XCJcbiAgICAgICAgY3VyclRyYW5zVmFsID0gXCJnZXRfZGZvbnRcIjsgXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZVBlbmQgPSBcInNldF9hc3Q9Y3R4LT5nZXRBc3NldHM7c2V0X3R5cGU9YW5kcm9pZC5ncmFwaGljcy5UeXBlZmFjZS0+Y3JlYXRlRnJvbUFzc2V0OmdldF9hc3Qsc19mb250c1xcL1wiICsgYXR0cnMudmFsdWUgKyBcIlxcLnR0ZjtcIjtcbiAgICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3R5cGVcIjtcbiAgICB9XG4gIH1cbiAgXG4gIGlmIChhdHRycy5rZXkgPT0gXCJncmFkaWVudEFuZ2xlXCIpIHtcbiAgICBvcmllbnRhdGlvbiArPSBcInNldF9kcj10aGlzLT5nZXRCYWNrZ3JvdW5kO3NldF9vPWFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZSRPcmllbnRhdGlvbi0+dmFsdWVPZjpzX1wiK2F0dHJzLnZhbHVlK1wiO1wiXG4gICAgcHJlUGVuZCArPSBvcmllbnRhdGlvbjtcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9vXCIgXG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZ3JhZGllbnRcIikge1xuICAgIHZhciBncmFkaWVudE9iaiA9IEpTT04ucGFyc2UoYXR0cnMudmFsdWUpO1xuICAgIHZhciBvcmllbnRhdGlvbiA9IFwiXCI7XG4gICAgaWYgKGdyYWRpZW50T2JqLnR5cGUgPT0gXCJsaW5lYXJcIikge1xuICAgIH0gZWxzZSB7fVxuXG4gICAgdmFyIGludENsYXNzID0gXCJzZXRfY2M9amF2YS5sYW5nLkNsYXNzLT5mb3JOYW1lOnNfamF2YS5sYW5nLkludGVnZXI7XCI7XG4gICAgdmFyIGFyckxpc3QgPSBcInNldF9hcnI9amF2YS51dGlsLkFycmF5TGlzdC0+bmV3O1wiO1xuXG4gICAgcHJlUGVuZCArPSBncmFkaWVudE9iai52YWx1ZXMubWFwKGZ1bmN0aW9uIChjb2xvciwgaSkge1xuICAgICAgcmV0dXJuIHBhcnNlQ29sb3IoY29sb3IsIFwic2V0X2NvbG9yXCIgKyBpKTtcbiAgICB9KS5qb2luKFwiXCIpO1xuXG4gICAgYXJyTGlzdCArPSBncmFkaWVudE9iai52YWx1ZXMubWFwKGZ1bmN0aW9uIChjb2xvciwgaSkge1xuICAgICAgcmV0dXJuIFwiZ2V0X2Fyci0+YWRkOmdldF9jb2xvclwiICsgaTtcbiAgICB9KS5qb2luKFwiO1wiKTtcblxuICAgIHByZVBlbmQgKz0gXCJzZXRfZ2Q9YW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlLT5uZXc7XCI7XG4gICAgcHJlUGVuZCArPSBhcnJMaXN0ICsgXCI7XCI7XG4gICAgcHJlUGVuZCArPSBcInNldF9jPWphdmEubGFuZy5DbGFzcy0+Zm9yTmFtZTpzX2phdmEubGFuZy5JbnRlZ2VyO1wiO1xuICAgIHByZVBlbmQgKz0gXCJpbmZsLT5jb252ZXJ0QW5kU3RvcmVBcnJheTpnZXRfYXJyLGdldF9jLHNfcEFycixiX3RydWU7XCI7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfcEFyclwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImNvcm5lclJhZGlpXCIpIHtcbiAgICB2YXIgY29ybmVyUmFkaWlzID0gYXR0cnMudmFsdWUuc3BsaXQoJywnKTtcbiAgICB2YXIgY29ybmVyUmFkaXVzID0gY29ybmVyUmFkaWlzLnNwbGljZSgwLDEpO1xuICAgIHZhciBjb3JuZXJSYWRpaUFycmF5ID0gW107XG4gICAgZm9yKHZhciBpID0gMDsgaTwgY29ybmVyUmFkaWlzLmxlbmd0aDsrK2kpe1xuICAgICAgY29ybmVyUmFkaWlBcnJheS5wdXNoKChjb3JuZXJSYWRpaXNbaV0qY29ybmVyUmFkaXVzKStcIlwiKTtcbiAgICAgIGNvcm5lclJhZGlpQXJyYXkucHVzaCgoY29ybmVyUmFkaWlzW2ldKmNvcm5lclJhZGl1cykrXCJcIik7XG4gICAgfVxuICAgIHZhciBhcnJMaXN0ID0gXCJzZXRfYXJyPWphdmEudXRpbC5BcnJheUxpc3QtPm5ldztcIjtcbiAgICB2YXIgZmxvYXRBcnJheSA9IGNvcm5lclJhZGlpQXJyYXkubWFwKGZ1bmN0aW9uKHZhbCxpKXtyZXR1cm4gXCJzZXRfY29ybmVyUmFkaXVzPWphdmEubGFuZy5GbG9hdC0+bmV3OmRwZl9cIisgdmFsICsgXCI7Z2V0X2Fyci0+YWRkOmdldF9jb3JuZXJSYWRpdXM7XCJ9KTtcbiAgICBwcmVQZW5kICs9IGFyckxpc3QgKyBcIjtcIjtcbiAgICBwcmVQZW5kICs9IFwic2V0X2M9amF2YS5sYW5nLkNsYXNzLT5mb3JOYW1lOnNfamF2YS5sYW5nLkZsb2F0O1wiO1xuICAgIHByZVBlbmQgKz0gZmxvYXRBcnJheS5qb2luKFwiXCIpO1xuICAgIHByZVBlbmQgKz0gXCJpbmZsLT5jb252ZXJ0QW5kU3RvcmVBcnJheTpnZXRfYXJyLGdldF9jLHNfcEFycixiX3RydWU7XCI7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfcEFyclwiO1xuICB9XG5cbiAgLy8gc2hhZG93VGFnIDogbGV2ZWwsdGFnXG4gIGlmIChhdHRycy5rZXkgPT0gXCJzaGFkb3dUYWdcIikge1xuICAgIHZhciBhcnIgPSBhdHRycy52YWx1ZS5zcGxpdChcIixcIik7XG4gICAgdmFyIHRhZyA9IGFyclsxXTtcblx0XHRjb25zb2xlLndhcm4oXCJZT09PTyBTaGFkb3dcIiwgYXJyKTtcblxuICAgIGlmICghd2luZG93LnNoYWRvd09iamVjdFt0YWddKSB7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ10gPVxuICAgICAgICB7IGxldmVsIDogcGFyc2VJbnQoYXJyWzBdKSxcbiAgICAgICAgICB2aWV3SWQgOiBbXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBbXSxcbiAgICAgICAgICBibHVyVmFsdWUgOiBbXSxcbiAgICAgICAgICBzaGFkb3dDb2xvciA6IFtdLFxuICAgICAgICAgIGR4IDogW10sXG4gICAgICAgICAgZHkgOiBbXSxcbiAgICAgICAgICBzcHJlYWQgOiBbXSxcbiAgICAgICAgICBmYWN0b3IgOiBbXVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImxldmVsXCJdID0gcGFyc2VJbnQoYXJyWzBdKTtcbiAgICB9XG5cdFx0cmV0dXJuIFwiXCI7XG4gIH1cbiAgLy8gIC0tIGludCBkeCwgaW50IGR5LCBpbnQgYmx1clZhbHVlLCAgU3RyaW5nIHNoYWRvd0NvbG9yLCAgaW50IHNwcmVhZCwgZWxldmF0aXVvbiwgZmxvYXQgZmFjdG9yKVxuICBpZiAoYXR0cnMua2V5ID09IFwiYW5kcm9pZFNoYWRvd1wiKSB7XG4gICAgdmFyIGFyciA9IGF0dHJzLnZhbHVlLnNwbGl0KFwiLFwiKTtcblxuICAgIHZhciB0YWcgPSBhcnJbNl07XG5cbiAgICB2YXIgX19iYWNrZ3JvdW5kID0gXCIjZmZmZmZmXCI7XG4gICAgdmFyIF9faWQgPSBcIlwiO1xuXG4gICAgZm9yICh2YXIgaSA9MCA7aTxhbGxQcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFsbFByb3BzW2ldLmtleSA9PSBcImJhY2tncm91bmRcIikge1xuICAgICAgICBfX2JhY2tncm91bmQgPSBhbGxQcm9wc1tpXS52YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoYWxsUHJvcHNbaV0ua2V5ID09IFwiaWRcIikge1xuICAgICAgICBfX2lkID0gYWxsUHJvcHNbaV0udmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGZhY3RvciA9IGFycls1XTtcbiAgICBpZiAodHlwZW9mIEpCcmlkZ2UuZ2V0UGl4ZWxzID09IFwiZnVuY3Rpb25cIil7XG4gICAgICBmYWN0b3IgPSBKQnJpZGdlLmdldFBpeGVscygpO1xuICAgIH1cbiAgICAvLyAgICh2aWV3SWQsIGJhY2tncm91bmRDb2xvciwgaW50IGJsdXJWYWx1ZSxoYWRvd0NvbG9yLCBpbnQgZHgsIGludCBkeSwgaW50IHNwcmVhZCwgZmxvYXQgZmFjdG9yKVxuXG4gICAgaWYgKCF3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ10pIHtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXSA9XG4gICAgICAgIHsgbGV2ZWwgOiAtMSxcbiAgICAgICAgICB2aWV3SWQgOiBbX19pZF0sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogW19fYmFja2dyb3VuZF0sXG4gICAgICAgICAgYmx1clZhbHVlIDogW2FyclsyXV0sXG4gICAgICAgICAgc2hhZG93Q29sb3IgOiBbYXJyWzNdXSxcbiAgICAgICAgICBkeCA6IFthcnJbMF1dLFxuICAgICAgICAgIGR5IDogW2FyclsxXV0sXG4gICAgICAgICAgc3ByZWFkIDogW2Fycls0XV0sXG4gICAgICAgICAgZmFjdG9yIDogW2ZhY3Rvcl1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJ2aWV3SWRcIl0ucHVzaChfX2lkKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImJhY2tncm91bmRDb2xvclwiXS5wdXNoKF9fYmFja2dyb3VuZCk7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJibHVyVmFsdWVcIl0ucHVzaChhcnJbMl0pO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wic2hhZG93Q29sb3JcIl0ucHVzaChhcnJbM10pO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZHhcIl0ucHVzaChhcnJbMF0pO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZHlcIl0ucHVzaChhcnJbMV0pO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wic3ByZWFkXCJdLnB1c2goYXJyWzRdKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImZhY3RvclwiXS5wdXNoKGFycls1XSk7XG4gICAgfVxuXG5cdHJldHVybiBcIlwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImxldHRlclNwYWNpbmdcIikge1xuICAgIGF0dHJzLnZhbHVlID0gKGF0dHJzLnZhbHVlLzkpICsgXCJcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJkaXZpZGVyRHJhd2FibGVcIikge1xuICAgIHByZVBlbmQgPSBcInNldF8zNDIzNzI9Y3R4LT5nZXRQYWNrYWdlTmFtZTtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF8zNjgyNDg9Z2V0X3Jlcy0+Z2V0SWRlbnRpZmllcjpzX1wiKyAgYXR0cnMudmFsdWUgK1wiLHNfZHJhd2FibGUsZ2V0XzM0MjM3MjtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF80ODIzODA9Z2V0X3Jlcy0+Z2V0RHJhd2FibGU6Z2V0XzM2ODI0ODtcIlxuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzQ4MjM4MFwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInRleHRGcm9tSHRtbFwiKSB7XG4gICAgcHJlUGVuZCA9IHBhcnNlSHRtbChoYW5kbGVTcGVjaWFsQ2hhcnMoYXR0cnMudmFsdWUpKTtcbiAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2h0bWwnO1xuICB9XG5cbiAgaWYoYXR0cnMua2V5ID09IFwiYmFja2dyb3VuZFRpbnRcIil7XG4gICAgY29sb3IgPSBhdHRycy52YWx1ZTtcbiAgICBwcmVQZW5kID0gcGFyc2VDb2xvcihjb2xvcikrJ3NldF9jb2xvcnN0YXRlPWFuZHJvaWQuY29udGVudC5yZXMuQ29sb3JTdGF0ZUxpc3QtPnZhbHVlT2Y6Z2V0X2NvbG9ySW50OycgO1xuICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfY29sb3JzdGF0ZSdcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJ0eXBlZmFjZVwiKSB7XG4gICAgcHJlUGVuZCA9IFwic2V0X2ZhY2U9dGhpcy0+Z2V0VHlwZWZhY2U7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2ZhY2UsJyArIGFwcGVuZEFyZ3MoYXR0cnMsb2JqKTtcbiAgfVxuXG4gIGlmKGF0dHJzLmtleSA9PSBcImJ1dHRvblRpbnRcIil7XG4gICAgY29sb3IgPSBhdHRycy52YWx1ZTtcbiAgICBwcmVQZW5kID0gcGFyc2VDb2xvcihjb2xvcikrJ3NldF9jb2xvcnN0YXRlPWFuZHJvaWQuY29udGVudC5yZXMuQ29sb3JTdGF0ZUxpc3QtPnZhbHVlT2Y6Z2V0X2NvbG9ySW50OycgO1xuICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfY29sb3JzdGF0ZSdcbiAgfVxuXG4gIGlmKGF0dHJzLmtleSA9PSBcImhpbnRDb2xvclwiKXtcbiAgICBjb2xvciA9IGF0dHJzLnZhbHVlO1xuICAgIHByZVBlbmQgPSBwYXJzZUNvbG9yKGNvbG9yKSsnc2V0X2NvbG9yc3RhdGU9YW5kcm9pZC5jb250ZW50LnJlcy5Db2xvclN0YXRlTGlzdC0+dmFsdWVPZjpnZXRfY29sb3JJbnQ7JyA7XG4gICAgY3VyclRyYW5zVmFsID0gJ2dldF9jb2xvcnN0YXRlJ1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImJ0bkJhY2tncm91bmRcIikge1xuICAgIGNvbG9yID0gYXR0cnMudmFsdWU7XG4gICAgcHJlUGVuZCA9ICdzZXRfbW9kZT1hbmRyb2lkLmdyYXBoaWNzLlBvcnRlckR1ZmYtPmludFRvTW9kZTppXzk7JyArICBwYXJzZUNvbG9yKGNvbG9yKTtcbiAgICBjdXJyVHJhbnNWYWwgPSAgJ2dldF9jb2xvckludCxnZXRfbW9kZSc7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwic2VsZWN0YWJsZUl0ZW1cIikge1xuICAgIGNvbG9yID0gYXR0cnMudmFsdWU7XG4gICAgcHJlUGVuZCA9ICBcInNldF9vdXR2PWFuZHJvaWQudXRpbC5UeXBlZFZhbHVlLT5uZXc7c2V0X3RoZW1lPWN0eC0+Z2V0VGhlbWU7Z2V0X3RoZW1lLT5yZXNvbHZlQXR0cmlidXRlOmlfMTY4NDM1MzQsZ2V0X291dHYsYl90cnVlO3NldF9jPWdldF9vdXR2LT5nZXRDbGFzcztzZXRfZj1nZXRfYy0+Z2V0RGVjbGFyZWRGaWVsZDpzX3Jlc291cmNlSWQ7Z2V0X2YtPnNldEFjY2Vzc2libGU6Yl90cnVlO3NldF92PWdldF9mLT5nZXQ6Z2V0X291dHY7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSAgJ2dldF92JztcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJ1cmxcIikge1xuICAgIHByZVBlbmQgPSBcInNldF9TZXR0aW5nPXRoaXMtPmdldFNldHRpbmdzO2dldF9TZXR0aW5nLT5zZXRKYXZhU2NyaXB0RW5hYmxlZDpiX3RydWU7Z2V0X1NldHRpbmctPnNldERvbVN0b3JhZ2VFbmFibGVkOmJfdHJ1ZTtcIjtcbiAgICBjdXJyVHJhbnNWYWwgPSBhcHBlbmRBcmdzKGF0dHJzLCBvYmopO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInBhY2thZ2VJY29uXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfUE09Y3R4LT5nZXRQYWNrYWdlTWFuYWdlcjtzZXRfQUk9Z2V0X1BNLT5nZXRBcHBsaWNhdGlvbkluZm86c19cIiArIGF0dHJzLnZhbHVlICsgXCIsaV8wO3NldF8xMTc0Nz1nZXRfQUktPmxvYWRJY29uOmdldF9QTTtcIjtcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF8xMTc0N1wiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImltYWdlVXJsXCIpIHtcbiAgICBcbiAgICBpZihpc1VSTChhdHRycy52YWx1ZSkpIHtcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cuX19QUk9YWV9GTiA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOID0ge307XG4gICAgICB9XG4gICAgICB2YXIgaW1hZ2UgPSBhdHRycy52YWx1ZS5zdWJzdHIoYXR0cnMudmFsdWUubGFzdEluZGV4T2YoJy8nKSArIDEpXG4gICAgICB2YXIgY2FsbGJhY2sgPSBcIm9uSW1hZ2VcIiArIGltYWdlLnN1YnN0cigwLCBpbWFnZS5pbmRleE9mKCcuJykpXG5cbiAgICAgIHZhciBmaWxlUHJlc2VudCA9ICh0eXBlb2YgSkJyaWRnZS5pc0ZpbGVQcmVzZW50ID09IFwiZnVuY3Rpb25cIikgJiYgSkJyaWRnZS5pc0ZpbGVQcmVzZW50KGltYWdlKTtcbiAgICAgIGlmICghZmlsZVByZXNlbnQpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tNYXBwZXIubWFwKGZ1bmN0aW9uIChpc05ldywgdXJsLCBmaWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGlkID0gYWxsUHJvcHMuZmluZChhID0+IGEua2V5ID09PSBcImlkXCIpO1xuICAgICAgICAgIGlmICghaWQpIHJldHVybjtcbiAgICAgICAgICB2YXIgdXJsU2V0Q29tbWFuZHMgPSBcInNldF9kaXJlY3Rvcnk9Y3R4LT5nZXREaXI6c19qdXNwYXksaV8wO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRGaWxlPWphdmEuaW8uRmlsZS0+bmV3OmdldF9kaXJlY3Rvcnksc19cIiArIGZpbGVOYW1lICsgXCI7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZFBhdGg9Z2V0X3Jlc29sdmVkRmlsZS0+dG9TdHJpbmc7XCIgKyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfZGltYWdlPWFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuRHJhd2FibGUtPmNyZWF0ZUZyb21QYXRoOmdldF9yZXNvbHZlZFBhdGg7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9pbWdWPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZC52YWx1ZSArIFwiO1wiICsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0X2ltZ1YtPnNldEltYWdlRHJhd2FibGU6Z2V0X2RpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuZHJvaWQucnVuSW5VSSh1cmxTZXRDb21tYW5kcyAsbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBKQnJpZGdlLnJlbmV3RmlsZShhdHRycy52YWx1ZSwgaW1hZ2UsIGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSBpZihKQnJpZGdlLmdldEZpbGVQYXRoKSB7XG4gICAgICAgIHByZVBlbmQgPSBcInNldF9kaXJlY3Rvcnk9Y3R4LT5nZXREaXI6c19qdXNwYXksaV8wO1wiICtcbiAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRGaWxlPWphdmEuaW8uRmlsZS0+bmV3OmdldF9kaXJlY3Rvcnksc19cIiArIEpCcmlkZ2UuZ2V0RmlsZVBhdGgoaW1hZ2UpICsgXCI7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZFBhdGg9Z2V0X3Jlc29sdmVkRmlsZS0+dG9TdHJpbmc7XCIgKyBcbiAgICAgICAgICAgICAgICAgICAgXCJzZXRfZGltYWdlPWFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuRHJhd2FibGUtPmNyZWF0ZUZyb21QYXRoOmdldF9yZXNvbHZlZFBhdGg7XCJcbiAgICAgICAgY3VyclRyYW5zVmFsID0gXCJnZXRfZGltYWdlXCI7IFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcmVQZW5kID0gXCJzZXRfMzQyMzcyPWN0eC0+Z2V0UGFja2FnZU5hbWU7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfMzY4MjQ4PWdldF9yZXMtPmdldElkZW50aWZpZXI6c19cIisgIGF0dHJzLnZhbHVlICtcIixzX2RyYXdhYmxlLGdldF8zNDIzNzI7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfNDgyMzgwPWdldF9yZXMtPmdldERyYXdhYmxlOmdldF8zNjgyNDg7XCJcbiAgICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzQ4MjM4MFwiO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJkZWZhdWx0SW1hZ2VcIikge1xuICAgIHByZVBlbmQgPSBcInNldF8zNDIzNzI9Y3R4LT5nZXRQYWNrYWdlTmFtZTtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF8zNjgyNDg9Z2V0X3Jlcy0+Z2V0SWRlbnRpZmllcjpzX1wiKyAgYXR0cnMudmFsdWUgK1wiLHNfZHJhd2FibGUsZ2V0XzM0MjM3MjtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF80ODIzODA9Z2V0X3Jlcy0+Z2V0RHJhd2FibGU6Z2V0XzM2ODI0ODtcIlxuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzQ4MjM4MFwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInBsYWNlSG9sZGVyXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfMzQyMzcyPWN0eC0+Z2V0UGFja2FnZU5hbWU7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfMzY4MjQ4PWdldF9yZXMtPmdldElkZW50aWZpZXI6c19cIisgIGF0dHJzLnZhbHVlICtcIixzX2RyYXdhYmxlLGdldF8zNDIzNzI7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfNDgyMzgwPWdldF9yZXMtPmdldERyYXdhYmxlOmdldF8zNjgyNDg7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF80ODIzODBcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJkeW5hbWljVXJsXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfZGlyZWN0b3J5PWN0eC0+Z2V0RGlyOnNfanVzcGF5LGlfMDtcIiArXG4gICAgXCJzZXRfcmVzb2x2ZWROYW1lPWluLmp1c3BheS5oeXBlcnNkay5zZXJ2aWNlcy5GaWxlUHJvdmlkZXJTZXJ2aWNlLT5hcHBlbmRTZGtOYW1lQW5kVmVyc2lvbjpzX1wiICsgYXR0cnMudmFsdWUgKyBcIjtcIiArXG4gICAgXCJzZXRfcmVzb2x2ZWRGaWxlPWphdmEuaW8uRmlsZS0+bmV3OmdldF9kaXJlY3RvcnksZ2V0X3Jlc29sdmVkTmFtZTtcIiArXG4gICAgXCJzZXRfcmVzb2x2ZWRQYXRoPWdldF9yZXNvbHZlZEZpbGUtPnRvU3RyaW5nO1wiICsgXG4gICAgXCJzZXRfZGltYWdlPWFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuRHJhd2FibGUtPmNyZWF0ZUZyb21QYXRoOmdldF9yZXNvbHZlZFBhdGg7XCI7XG5cbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9kaW1hZ2VcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJiYWNrZ3JvdW5kRHJhd2FibGVcIikge1xuICAgIHByZVBlbmQgPSBcInNldF8zNDIzNzI9Y3R4LT5nZXRQYWNrYWdlTmFtZTtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF8zNjgyNDg9Z2V0X3Jlcy0+Z2V0SWRlbnRpZmllcjpzX1wiKyAgYXR0cnMudmFsdWUgK1wiLHNfZHJhd2FibGUsZ2V0XzM0MjM3MjtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF80ODIzODA9Z2V0X3Jlcy0+Z2V0RHJhd2FibGU6Z2V0XzM2ODI0ODtcIlxuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzQ4MjM4MFwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImZvbnRGYW1pbHlcIikge1xuICAgIGF0dHJzLnZhbHVlID0gYXBwZW5kQXJncyhhdHRycyxvYmopO1xuICAgIHZhbHVlcyA9IGF0dHJzLnZhbHVlLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIFwic2V0X2ZvbnRGYWNlPWFuZHJvaWQuZ3JhcGhpY3MuVHlwZWZhY2UtPmNyZWF0ZTpcIit2YWx1ZXNbMF0rXCIsXCIrdmFsdWVzWzFdK1wiO1wiK1widGhpcy0+c2V0VHlwZWZhY2U6Z2V0X2ZvbnRGYWNlLFwiK3ZhbHVlc1sxXStcIjtcIlxuICB9XG5cbiAgaWYoYXR0cnMua2V5PT1cImZvbnRTaXplXCIpIHtcbiAgICBjdXJyVHJhbnNWYWwgPSBhcHBlbmRBcmdzKGF0dHJzLG9iaikuc3BsaXQoJywnKVswXSArICcsZl8nICsgKCh3aW5kb3cuX19XSURUSCooYXR0cnMudmFsdWUuc3BsaXQoJywnKVsxXSkqMSkpLzEwMDtcbiAgfVxuXG4gIGlmKGF0dHJzLmtleT09XCJjdXJ2ZVwiKSB7XG4gICAgcHJlUGVuZCA9ICBcInNldF9pbnRlcnA9YW5kcm9pZC52aWV3LmFuaW1hdGlvbi5EZWNlbGVyYXRlSW50ZXJwb2xhdG9yLT5uZXc7XCI7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfaW50ZXJwXCI7XG4gIH1cblxuICBpZihhdHRycy5rZXk9PVwic2hpbW1lclwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBzaGltbWVyTW9kZSA9IFwiY29tLmZhY2Vib29rLnNoaW1tZXIuU2hpbW1lciRDb2xvckhpZ2hsaWdodEJ1aWxkZXJcIjtcbiAgICAgIHZhciBzaGltbWVyQ21kID0gXCJzZXRfc2Rydz1jb20uZmFjZWJvb2suc2hpbW1lci5TaGltbWVyRHJhd2FibGUtPm5ldztcIjtcbiAgICAgIHZhciBzaGltbWVySnNvbiA9IEpTT04ucGFyc2UoYXR0cnMudmFsdWUpO1xuICAgICAgY29uc29sZS5sb2coc2hpbW1lckpzb24sIHNoaW1tZXJKc29uLmNvbnRlbnRzLCBhdHRycywgYXR0cnMsIG9iaiwgYmVsb25nc1RvLCB0cmFuc2Zvcm1GbiwgYWxsUHJvcHMsIHR5cGUpXG4gICAgICAvLyBpZihzaGltbWVySnNvbiAmJiBzaGltbWVySnNvbi5jb250ZW50cyl7XG5cbiAgICAgICAgc2hpbW1lckpzb24gPSBzaGltbWVySnNvbi5jb250ZW50c1xuICAgICAgLy8gfVxuICAgICAgaWYgKHNoaW1tZXJKc29uICYmIHNoaW1tZXJKc29uLnNoaW1tZXJUeXBlID09IFwiYWxwaGFcIil7XG4gICAgICAgIHNoaW1tZXJNb2RlID0gXCJjb20uZmFjZWJvb2suc2hpbW1lci5TaGltbWVyJEFscGhhSGlnaGxpZ2h0QnVpbGRlclwiXG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJzZXRfYnVpbGRlcj1cIiArIHNoaW1tZXJNb2RlICsgXCItPm5ldztcIlxuICAgICAgICBpZihzaGltbWVySnNvbi5iYXNlKXtcbiAgICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldEJhc2VBbHBoYTpmX1wiICsgc2hpbW1lckpzb24uYmFzZSArIFwiO1wiXG4gICAgICAgIH1cbiAgICAgICAgaWYoc2hpbW1lckpzb24uaGlnaGxpZ2h0KXtcbiAgICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldEhpZ2hsaWdodEFscGhhOmZfXCIgKyBzaGltbWVySnNvbi5oaWdobGlnaHQgKyBcIjtcIlxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGltbWVyQ21kICs9IFwic2V0X2J1aWxkZXI9XCIgKyBzaGltbWVyTW9kZSArIFwiLT5uZXc7XCJcbiAgICAgICAgaWYoc2hpbW1lckpzb24uYmFzZSl7XG4gICAgICAgICAgc2hpbW1lckNtZCArPSBwYXJzZUNvbG9yKHNoaW1tZXJKc29uLmJhc2UgLCBcInNldF9iYXNlQ29sb3JcIikgKyBcIjtcIlxuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0QmFzZUNvbG9yOmdldF9iYXNlQ29sb3I7XCJcbiAgICAgICAgfVxuICAgICAgICBpZihzaGltbWVySnNvbi5oaWdobGlnaHQpe1xuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gcGFyc2VDb2xvcihzaGltbWVySnNvbi5oaWdobGlnaHQgLCBcInNldF9iYXNlQ29sb3JcIikgKyBcIjtcIlxuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0SGlnaGxpZ2h0Q29sb3I6Z2V0X2Jhc2VDb2xvcjtcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKHNoaW1tZXJKc29uLnRpbHQpe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldFRpbHQ6Zl9cIiArIHNoaW1tZXJKc29uLnRpbHQgKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24uaW50ZW5zaXR5KXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRJbnRlbnNpdHk6Zl9cIiArIHNoaW1tZXJKc29uLmludGVuc2l0eSArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5kaXJlY3Rpb24pe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldERpcmVjdGlvbjppX1wiICsgc2hpbW1lckpzb24uZGlyZWN0aW9uICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLmR1cmF0aW9uKXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXREdXJhdGlvbjpsX1wiICsgc2hpbW1lckpzb24uZGlyZWN0aW9uICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLnJlcGVhdENvdW50KXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRSZXBlYXRDb3VudDppX1wiICsgc2hpbW1lckpzb24ucmVwZWF0Q291bnQgKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24ucmVwZWF0RGVsYXkpe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldFJlcGVhdERlbGF5OmxfXCIgKyBzaGltbWVySnNvbi5yZXBlYXREZWxheSArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5jbGlwVG9DaGlsZHJlbil7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0Q2xpcFRvQ2hpbGRyZW46Yl9cIiArIHNoaW1tZXJKc29uLmNsaXBUb0NoaWxkcmVuICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLnNoYXBlKXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRTaGFwZTppX1wiICsgc2hpbW1lckpzb24uc2hhcGUgKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24uZHJvcE9mZil7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0RHJvcG9mZjpmX1wiICsgc2hpbW1lckpzb24uZHJvcE9mZiArIFwiO1wiXG4gICAgICB9XG4gICAgICBzaGltbWVyQ21kICs9IFwic2V0X3NoaW1tZXI9Z2V0X2J1aWxkZXItPmJ1aWxkO1wiXG4gICAgICBpZih0eXBlID09IFwic2hpbW1lckZyYW1lTGF5b3V0XCIpe1xuICAgICAgICBhdHRycy5rZXkgPSBcInNoaW1tZXJWaWV3XCJcbiAgICAgICAgY3VyclRyYW5zVmFsID0gXCJnZXRfc2hpbW1lclwiO1xuICAgICAgICBvYmouZm5OYW1lID0gb2JqLmFsdGVybmF0ZUZuTmFtZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9zZHJ3LT5zZXRTaGltbWVyOmdldF9zaGltbWVyO1wiXG4gICAgICAgIGlmKHNoaW1tZXJKc29uLmFjdGl2ZSl7XG4gICAgICAgICAgYWZ0ZXJDbWQgKz0gXCJnZXRfc2Rydy0+c3RhcnRTaGltbWVyO1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWZ0ZXJDbWQgKz0gXCJnZXRfc2Rydy0+c3RvcFNoaW1tZXI7XCJcbiAgICAgICAgfVxuICAgICAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9zZHJ3XCI7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcInVuYWJsZSB0byBzZXQgc2hpbW1lclwiKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzaGltbWVyQ21kKVxuICAgIHByZVBlbmQgPSAgc2hpbW1lckNtZDtcbiAgfVxuXG4gIGlmKGF0dHJzLmtleT09XCJmb2N1c1wiKSB7XG4gICAgYWZ0ZXJDbWQgPSAgXCJzZXRfd2luPWN0eC0+Z2V0V2luZG93O2dldF93aW4tPnNldFNvZnRJbnB1dE1vZGU6NTtcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJzaGFkb3dMYXllclwiKSB7XG4gICAgY29sb3IgPSBhdHRycy52YWx1ZS5zcGxpdCgnLCcpWzNdO1xuICAgIGFyciA9IGFwcGVuZEFyZ3MoYXR0cnMsb2JqKS5zcGxpdCgnLCcpO1xuICAgIGFyci5zcGxpY2UoYXJyLmxlbmd0aDEgLCAxKTtcblxuICAgIHByZVBlbmQgPSBwYXJzZUNvbG9yKGNvbG9yKTtcbiAgICBjdXJyVHJhbnNWYWwgPSAgYXJyLmpvaW4oJywnKSArICcsZ2V0X2NvbG9ySW50J1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInZhbHVlc1wiKSB7XG4gICAgdmFyIHZhbCA9IGF0dHJzLnZhbHVlLnNwbGl0KFwiLFwiKTtcbiAgICB2YXIgdmFsdWVzU3RyID0gXCJcIiwgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZWxlbWVudHMgPSB2YWxbaV0uc3BsaXQoXCI6XCIpO1xuICAgICAgdmFsdWVzU3RyICs9IFwiZ2V0X3NwaW5uZXJBcnJheS0+YWRkOnNfXCIrZWxlbWVudHNbMF07XG4gICAgICBmb3IodmFyIGogPSAxOyBqIDwgZWxlbWVudHMubGVuZ3RoOyBqKyspXG4gICAgICAgIHZhbHVlc1N0ciArPSBcIlxcblwiICsgZWxlbWVudHNbal07XG4gICAgICAgIHZhbHVlc1N0ciArPSBcIjtcIjtcbiAgICB9XG4gICAgcHJlUGVuZCA9ICBcInNldF9zcGlubmVyQXJyYXk9amF2YS51dGlsLkFycmF5TGlzdC0+bmV3O1wiKyB2YWx1ZXNTdHIgK1xuICAgIFwic2V0X3NwaW5uZXJWYWx1ZXM9Z2V0X3NwaW5uZXJBcnJheS0+dG9BcnJheTtzZXRfc3Bpbm5lckFkYXB0ZXI9YW5kcm9pZC53aWRnZXQuQXJyYXlBZGFwdGVyLT5uZXc6Y3R4X2N0eCxpXzE3MzY3MDQzLGdldF9zcGlubmVyVmFsdWVzO1wiO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3NwaW5uZXJBZGFwdGVyXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwic3RhcnRQb2ludFwiKSB7XG4gICAgdmFyIGFyZyA9IEpTT04ucGFyc2UoYXR0cnMudmFsdWUpO1xuICAgIHByZVBlbmQgPSBcInRoaXMtPnNldFN0YXJ0WDpmX1wiICsgYXJnLnggKyBcIjtcIlxuICAgIHByZVBlbmQgKz0gXCJ0aGlzLT5zZXRTdGFydFk6Zl9cIiArIGFyZy55ICsgXCI7XCJcbiAgICByZXR1cm4gcHJlUGVuZFxuICB9XG4gICAgXG4gIGlmIChhdHRycy5rZXkgPT0gXCJlbmRQb2ludFwiKSB7XG4gICAgdmFyIGFyZyA9IEpTT04ucGFyc2UoYXR0cnMudmFsdWUpXG4gICAgcHJlUGVuZCA9IFwidGhpcy0+c2V0RW5kWDpmX1wiICsgYXJnLnggKyBcIjtcIlxuICAgIHByZVBlbmQgKz0gXCJ0aGlzLT5zZXRFbmRZOmZfXCIgKyBhcmcueSArIFwiO1wiXG4gICAgcmV0dXJuIHByZVBlbmRcbiAgfVxuXG4gIGlmIChiZWxvbmdzVG8gPT0gXCJWSUVXXCIpXG4gIGtleVdvcmQgPSBnbG9iYWxPYmpNYXBbYmVsb25nc1RvXS52YWw7XG4gIGVsc2VcbiAga2V5V29yZCA9ICdnZXRfJyArIGdsb2JhbE9iak1hcFtiZWxvbmdzVG9dLnZhbDtcblxuICBpZiAodHJhbnNmb3JtRm4gfHwgYXR0cnMua2V5ID09IFwiZHVyYXRpb25cIiB8fCBhdHRycy5rZXkgPT0gXCJkZWxheVwiIHx8IGF0dHJzLmtleSA9PSBcImN1cnZlXCIpXG4gIF9jbWQgPSBrZXlXb3JkICsgICctPicgKyAoKHR5cGVvZiBvYmouZm5OYW1lID09IFwidW5kZWZpbmVkXCIpP29iai52YXJOYW1lOm9iai5mbk5hbWUpO1xuICBlbHNlXG4gIF9jbWQgPSBrZXlXb3JkICsgJy0+JyArICAgYXR0cnMua2V5O1xuXG4gIGlmIChvYmoudmFsdWVzICYmIG9iai52YWx1ZXMubGVuZ3RoKVxuICBfY21kICs9ICc6JztcblxuICBpZiAoIXByZVBlbmQgJiYgIWN1cnJUcmFuc1ZhbClcbiAgX2NtZCArPSAgYXBwZW5kQXJncyhhdHRycywgb2JqKSArICc7J1xuICBlbHNlXG4gIF9jbWQgKz0gY3VyclRyYW5zVmFsICsgJzsnO1xuXG4gIC8vIGZvciB0ZXN0aW5nXG4gIGlmICh0eXBlb2YgZmluYWxDbWQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zb2xlLmxvZyhiZWZvcmVDbWQgICsgcHJlUGVuZCArIF9jbWQgKyBhZnRlckNtZCk7XG4gICAgcmV0dXJuIGZpbmFsQ21kO1xuICB9XG4gIGlmKHR5cGUgPT0gXCJzaGltbWVyRnJhbWVMYXlvdXRcIil7XG4gICAgY29uc29sZS5sb2coYmVmb3JlQ21kICArIHByZVBlbmQgKyBfY21kICsgYWZ0ZXJDbWQpXG4gIH1cbiAgcmV0dXJuIGJlZm9yZUNtZCAgKyBwcmVQZW5kICsgX2NtZCArIGFmdGVyQ21kXG59XG5cbmZ1bmN0aW9uIHBhcnNlQXR0cnMoYXR0cnMsIGJlbG9uZ3NUbywgdHJhbnNmb3JtRm4sIHR5cGUpIHtcbiAgdmFyIG9iajtcbiAgdmFyIHJldFZhbDtcbiAgdmFyIGNtZCA9ICcnO1xuICB2YXIgX2NtZDtcblxuICBmb3IgKHZhciBpID0wIDtpPGF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgb2JqID0gbWFwUGFyYW1zW2F0dHJzW2ldLmtleV07XG4gICAgaWYgKG9iaikge1xuICAgICAgY21kICs9IG1hc2hUaGlzKGF0dHJzW2ldLCBvYmosIGJlbG9uZ3NUbywgdHJhbnNmb3JtRm4sIGF0dHJzLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAoYmVsb25nc1RvID09IFwiVklFV1wiKVxuICByZXR1cm4gY21kO1xuXG4gIHJldHVybiBwcmVwYXJlQ3RyKGF0dHJzLCBiZWxvbmdzVG8pICsgJzsnICsgY21kO1xufVxuXG5mdW5jdGlvbiBwYXJzZUdyb3Vwcyh0eXBlLCBncm91cHMsIGNvbmZpZykge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGdyb3Vwcyk7XG4gIHZhciBjdHI7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGk8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAgKGtleXNbaV0gPT0gXCJGT1JFR1JPVU5EXCIpIHtcbiAgICAgIGlmICghZ2xvYmFsT2JqTWFwW2tleXNbaV1dKSB7XG4gICAgICAgIGlmIChnZXRTZXRUeXBlID09IFwic2V0XCIpIHtcbiAgICAgICAgICBnbG9iYWxPYmpNYXBba2V5c1tpXV0gPSB7Y3RyOiBcImFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS0+bmV3XCIsICB2YWw6ICBrZXlzW2ldIH07XG4gICAgICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgdHJ1ZSwgdHlwZSlcbiAgICAgICAgICAgICsgJ3RoaXMtPicgKyBcInNldEZvcmVncm91bmRcIiArICc6JyArICdnZXRfJyArICBnbG9iYWxPYmpNYXBba2V5c1tpXV0udmFsICsgJzsnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dID0ge2N0cjogJ2dldF92aWV3LT5nZXRGb3JlZ3JvdW5kJywgIHZhbDogIGtleXNbaV0gfTtcbiAgICAgICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXBba2V5c1tpXV0udmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCB0cnVlLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5c1tpXSA9PSBcIkxBWU9VVF9UUkFOU0lUSU9OXCIpIHtcbiAgICAgICAgZ2xvYmFsT2JqTWFwLkxBWU9VVF9UUkFOU0lUSU9OID0ge2N0cjogJ2FuZHJvaWQuYW5pbWF0aW9uLkxheW91dFRyYW5zaXRpb24tPm5ldycsIHZhbDogXCJMQVlPVVRfVFJBTlNJVElPTlwifTtcbiAgICAgICAgY29tbWFuZCArPSAgJ3NldF8nICsgIGdsb2JhbE9iak1hcC5MQVlPVVRfVFJBTlNJVElPTi52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHMuUEFSQU1TLCAnTEFZT1VUX1RSQU5TSVRJT04nLCB0cnVlLCB0eXBlKVxuICAgICAgICAgICAgICsgJ3RoaXMtPicgKyBcInNldExheW91dFRyYW5zaXRpb25cIiArICc6Z2V0XycgICsgZ2xvYmFsT2JqTWFwLkxBWU9VVF9UUkFOU0lUSU9OLnZhbCArICc7JztcbiAgICB9IGVsc2UgaWYgKGtleXNbaV0gPT0gXCJWSUVXXCIpIHtcbiAgICAgIGlmICghZ2xvYmFsT2JqTWFwLlZJRVcpIHtcbiAgICAgICAgaWYgKGdldFNldFR5cGUgPT0gXCJzZXRcIilcbiAgICAgICAgZ2xvYmFsT2JqTWFwLlZJRVcgPSB7Y3RyOiBcInRoaXNcIiwgdmFsOiBcInRoaXNcIn07XG4gICAgICAgIGVsc2VcbiAgICAgICAgZ2xvYmFsT2JqTWFwLlZJRVcgPSB7Y3RyOiBcImdldF92aWV3XCIsIHZhbDogXCJnZXRfdmlld1wifTtcbiAgICAgIH1cblxuICAgICAgY29tbWFuZCArPSAgcGFyc2VBdHRycyhncm91cHMuVklFVywgJ1ZJRVcnLCB0cnVlLCB0eXBlKVxuXG4gICAgfSBlbHNlIGlmIChrZXlzW2ldID09IFwiUEFSQU1TXCIpIHtcbiAgICAgIGlmIChnZXRTZXRUeXBlID09IFwic2V0XCIpIHtcbiAgICAgICAgaWYgKCFnbG9iYWxPYmpNYXAuUEFSQU1TKSB7XG4gICAgICAgICAgY3RyID0gY29uZmlnLnJvb3Q/Z2V0Q3RyKHR5cGUpOidQQVJBTV9DVFJfSE9MREVSJztcbiAgICAgICAgICBnbG9iYWxPYmpNYXAuUEFSQU1TID0ge2N0cjogY3RyLCB2YWw6IFwiUEFSQU1TXCIgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbW1hbmQgKz0gICdzZXRfJyArICBnbG9iYWxPYmpNYXAuUEFSQU1TLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwcy5QQVJBTVMsICdQQVJBTVMnLCB0cnVlLCB0eXBlKVxuICAgICAgICAgICAgICsgJ3RoaXMtPicgKyBvYmpNYXAuUEFSQU1TLnZpZXdNZXRob2Quc3BsaXQoJywnKVswXSArICc6Z2V0XycgICsgZ2xvYmFsT2JqTWFwLlBBUkFNUy52YWwgKyAnOyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWdsb2JhbE9iak1hcC5QQVJBTVMpIHtcbiAgICAgICAgICBjdHIgPSBcImdldF92aWV3LT5nZXRMYXlvdXRQYXJhbXNcIjtcbiAgICAgICAgICBnbG9iYWxPYmpNYXAuUEFSQU1TID0ge2N0cjogY3RyLCB2YWw6IFwiUEFSQU1TXCIgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcC5QQVJBTVMudmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCB0cnVlLCB0eXBlKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAoa2V5c1tpXSA9PSBcIk1VVEFURUJHXCIpIHtcbiAgICAgIGlmICghZ2xvYmFsT2JqTWFwLk1VVEFURUJHKSB7XG4gICAgICAgIGdsb2JhbE9iak1hcC5NVVRBVEVCRyA9IHtjdHI6ICd0aGlzLT5nZXRCYWNrZ3JvdW5kJywgdmFsOiBcIk1VVEFURUJHXCJ9O1xuICAgICAgfVxuXG4gICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXAuTVVUQVRFQkcudmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCB0cnVlLCB0eXBlKTtcbiAgICB9IGVsc2UgaWYgKGtleXNbaV0gPT0gXCJBTklNQVRJT05cIikge1xuICAgICAgaWYgKCFnbG9iYWxPYmpNYXAuQU5JTUFUSU9OKSB7XG4gICAgICAgIGlmIChnZXRTZXRUeXBlID09IFwic2V0XCIpXG4gICAgICAgIGdsb2JhbE9iak1hcC5BTklNQVRJT04gPSB7Y3RyOiAndGhpcy0+YW5pbWF0ZScsIHZhbDogXCJBTklNQVRJT05cIn07XG4gICAgICAgIGVsc2VcbiAgICAgICAgZ2xvYmFsT2JqTWFwLkFOSU1BVElPTiA9IHtjdHI6ICdnZXRfdmlldy0+YW5pbWF0ZScsIHZhbDogXCJBTklNQVRJT05cIn07XG4gICAgICB9XG5cbiAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcC5BTklNQVRJT04udmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCBmYWxzZSwgdHlwZSk7XG5cbiAgICB9ICBlbHNlIHtcbiAgICAgIC8vIFdvcmtzIG9ubHkgZm9yIGRyYXdhYmxlXG4gICAgICBpZiAoIWdsb2JhbE9iak1hcFtrZXlzW2ldXSkge1xuICAgICAgICBpZiAoZ2V0U2V0VHlwZSA9PSBcInNldFwiKSB7XG4gICAgICAgICAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dID0ge2N0cjogb2JqTWFwW2tleXNbaV1dLmN0ciwgIHZhbDogIGtleXNbaV0gfTtcbiAgICAgICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXBba2V5c1tpXV0udmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCB0cnVlLCB0eXBlKVxuICAgICAgICAgICAgKyAndGhpcy0+JyArIG9iak1hcFtrZXlzW2ldXS52aWV3TWV0aG9kLnNwbGl0KCcsJylbMF0gKyAnOicgKyAnZ2V0XycgKyAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dLnZhbCArICc7J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdsb2JhbE9iak1hcFtrZXlzW2ldXSA9IHtjdHI6ICdnZXRfdmlldy0+Z2V0QmFja2dyb3VuZCcsICB2YWw6ICBrZXlzW2ldIH07XG4gICAgICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgdHJ1ZSwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbW1hbmQuc3Vic3RyaW5nKDAsIGNvbW1hbmQubGVuZ3RoIC0gMSk7XG59XG5cbnZhciBmbGF0dGVuT2JqZWN0ID0gZnVuY3Rpb24ob2IpIHtcbiAgdmFyIHRvUmV0dXJuID0ge307XG4gIGZvciAodmFyIGkgaW4gb2IpIHtcbiAgICBpZiAoIW9iLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcbiAgICBpZiAoKHR5cGVvZiBvYltpXSkgPT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBmbGF0T2JqZWN0ID0gZmxhdHRlbk9iamVjdChvYltpXSk7XG4gICAgICBmb3IgKHZhciB4IGluIGZsYXRPYmplY3QpIHtcbiAgICAgICAgaWYgKCFmbGF0T2JqZWN0Lmhhc093blByb3BlcnR5KHgpKSBjb250aW51ZTtcbiAgICAgICAgdG9SZXR1cm5beF0gPSBmbGF0T2JqZWN0W3hdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b1JldHVybltpXSA9IG9iW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9SZXR1cm47XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHR5cGUsIGNvbmZpZywgX2dldFNldFR5cGUpIHtcbiAgY29uZmlnID0gZmxhdHRlbk9iamVjdChjb25maWcpO1xuICBnZXRTZXRUeXBlID0gX2dldFNldFR5cGU7XG4gIGVsZW1lbnRUeXBlID0gdHlwZTtcblxuICB2YXIgZ3JvdXBzID0gIGdldENvbmZpZ0dyb3Vwcyhjb25maWcpO1xuXG4gIGNvbW1hbmQgPSAnJztcbiAgZ2xvYmFsT2JqTWFwID0ge307XG5cbiAgdmFyIGZsYWcgPSAwO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gIGZvciAodmFyIGk9MDsgaTxrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGtleXNbaV0gPT0gJ3J1bkluVUknKSAge1xuICAgICAgZmxhZyAgPSAxO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFmbGFnKSB7XG4gICAgY29uZmlnLnJ1bkluVUkgPSBwYXJzZUdyb3Vwcyh0eXBlLCBncm91cHMsIGNvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4gKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbiAqXG4gKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiAqIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4gKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4gKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuICogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4gKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiAqIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4gKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuICovXG5cbm1vZHVsZS5leHBvcnRzLm1hcCA9IChmbikgPT4ge1xuXHRpZih0eXBlb2Ygd2luZG93Ll9fRk5fSU5ERVggIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX0ZOX0lOREVYICE9PSBudWxsKSB7XG5cdFx0dmFyIHByb3h5Rm5OYW1lID0gJ0YnICsgd2luZG93Ll9fRk5fSU5ERVg7XG5cdFx0aWYgKHdpbmRvdy5fX3BheWxvYWQgJiYgd2luZG93Ll9fcGF5bG9hZC5zZXJ2aWNlKXtcblx0XHRcdHByb3h5Rm5OYW1lID0gd2luZG93Ll9fcGF5bG9hZC5zZXJ2aWNlICsgXCJfXCIgKyBwcm94eUZuTmFtZTtcblx0XHR9XG5cdFx0d2luZG93Ll9fUFJPWFlfRk5bcHJveHlGbk5hbWVdID0gZm47XG5cdCAgXHR3aW5kb3cuX19GTl9JTkRFWCsrO1xuXHRcdHJldHVybiBwcm94eUZuTmFtZTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgaW5pdGlhbGlzZSB3aW5kb3cuX19GTl9JTkRFWCA9IDAgaW4gaW5kZXguanMgb2YgeW91ciBwcm9qZWN0LlwiKTtcblx0fVxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Y2FsbGJhY2tNYXBwZXIgOiByZXF1aXJlKFwiLi9jYWxsYmFja01hcHBlclwiKVxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0YW5kcm9pZCA6IHJlcXVpcmUoXCIuL2FuZHJvaWRcIiksXG5cdGlvcyA6IHJlcXVpcmUoXCIuL2lvc1wiKSxcblx0d2ViIDogcmVxdWlyZShcIi4vd2ViXCIpLFxuXHRjb21tb24gOiByZXF1aXJlKFwiLi9jb21tb25cIilcbn0iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0gW1xuXHRcIiM4M0ZDRThcIixcblx0XCIjODlGNkU0XCIsXG5cdFwiIzhGRUZERlwiLFxuXHRcIiM5NkU5REJcIixcblx0XCIjOUNFM0Q3XCIsXG5cdFwiI0ZFRTlFNlwiLFxuXHRcIiNGRUY3RTdcIixcblx0XCIjRkZGQUU1XCIsXG5cdFwiI0Y1RkFFQlwiLFxuXHRcIiNFNUZGRjVcIlxuXVxuXG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmxhdHRlbk9iamVjdChvYikge1xuICB2YXIgdG9SZXR1cm4gPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBvYikge1xuICAgIGlmICghb2IuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgIGlmICgodHlwZW9mIG9iW2ldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGZsYXRPYmplY3QgPSBmbGF0dGVuT2JqZWN0KG9iW2ldKTtcbiAgICAgIGZvciAodmFyIHggaW4gZmxhdE9iamVjdCkge1xuICAgICAgICBpZiAoIWZsYXRPYmplY3QuaGFzT3duUHJvcGVydHkoeCkpIGNvbnRpbnVlO1xuICAgICAgICB0b1JldHVyblt4XSA9IGZsYXRPYmplY3RbeF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvUmV0dXJuW2ldID0gb2JbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvUmV0dXJuO1xufTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRwYXJzZVBhcmFtcyA6IHJlcXVpcmUoXCIuL3BhcnNlUGFyYW1zXCIpLFxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi9jb2xvcnNcIjtcbmltcG9ydCBmbGF0dGVuT2JqZWN0IGZyb20gXCIuL2ZsYXR0ZW5PYmplY3RcIjtcblxudmFyIGNhbGxiYWNrTWFwcGVyICA9IHJlcXVpcmUoXCIuLi9jb21tb24vY2FsbGJhY2tNYXBwZXJcIilcblxubGV0IGdldFNldFR5cGUgPSAxO1xuXG4vKipcbiAqIENoZWNrcyB0aGUgbmF0aXZlIHNldCB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5teXN0aXF1ZV92ZXJzaW9uXG4gKiBhbmQgY2hlY2tzIGlmIG15c3RpcXVlIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIHRoZSBwYXNzZWQgdmVyc2lvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uIG51bWJlciB0byBiZSBjaGVja2VkIGFnYWluc3QuIElmIHBhc3NlZCBlbXB0eSByZXR1cm5zIHRydWUuXG4gKiBAcmV0dXJuIHtib29sfSB0cnVlIGlmIG15c3RpcXVlIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIHBhc3NlZCB2ZXJzaW9uIGVsc2UgZmFsc2UuIERlZmF1bHRzIHRvIHRydWUuXG4gKi9cbmZ1bmN0aW9uIGlzTXlzdGlxdWVWZXJzaW9uR3JlYXRlclRoYW4odmVyc2lvbikge1xuICBpZiAod2luZG93Ll9fREVWSUNFX0RFVEFJTFMgJiYgd2luZG93Ll9fREVWSUNFX0RFVEFJTFMubXlzdGlxdWVfdmVyc2lvbikge1xuICAgIHZhciBzZGtWZXJzaW9uID0gcGFyc2VGbG9hdCh3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5teXN0aXF1ZV92ZXJzaW9uKTtcbiAgICBpZiAoc2RrVmVyc2lvbj4wKSB7XG4gICAgICAgIHJldHVybiBzZGtWZXJzaW9uPnBhcnNlRmxvYXQodmVyc2lvbik/dHJ1ZTpmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0Q29sb3JUb1JnYmEoY29sb3Ipe1xuICBjb2xvciA9IHJXUyhjUyhjb2xvcikpO1xuXG4gIHZhciB2YWx1ZXM7XG4gIHZhciBhbHBoYSA9IFwiMS4wMFwiO1xuXG4gIGlmIChjb2xvci5sZW5ndGggPj0gOCkge1xuICAgIGFscGhhID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gICAgYWxwaGEgPSAoYWxwaGEgLyAyNTUpLnRvRml4ZWQoMik7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMywgOSk7XG4gIH0gZWxzZSB7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMSwgY29sb3IubGVuZ3RoKTtcbiAgfVxuXG4gIGNvbG9yID0gY29udmVydEhleFRvUmdiKHJXUyhjb2xvcikpO1xuICB2YWx1ZXMgPSBjb2xvci5zcGxpdCgnLCcpO1xuXG4gIHJldHVybiB7XG4gICAgcjogcldTKHZhbHVlc1swXSksXG4gICAgZzogcldTKHZhbHVlc1sxXSksXG4gICAgYjogcldTKHZhbHVlc1syXSksXG4gICAgYTogYWxwaGFcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udmVydEhleFRvUmdiKGhleCkge1xuICB2YXIgciA9IChwYXJzZUludChoZXguc3Vic3RyaW5nKDAsMiksIDE2KS8yNTUpLnRvRml4ZWQoMik7XG4gIHZhciBnID0gKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMiw0KSwgMTYpLzI1NSkudG9GaXhlZCgyKTtcbiAgdmFyIGIgPSAocGFyc2VJbnQoaGV4LnN1YnN0cmluZyg0LDYpLCAxNikvMjU1KS50b0ZpeGVkKDIpO1xuXG4gIHJldHVybiByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiO1xufVxuXG5mdW5jdGlvbiBjUyh2YWx1ZSkge1xuICByZXR1cm4gIHZhbHVlP3ZhbHVlICsgJyc6IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHJXUyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvIC9nLCcnKTtcbn1cblxuZnVuY3Rpb24gc2VsZl9zaXplRnJvbURpY3Rpb25hcnkod2lkdGgsIGhlaWdodCkge1xuICB3aW5kb3cuX19TSVpFX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInNpemVcIiArIHdpbmRvdy5fX1NJWkVfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNpemVGcm9tRGljdGlvbmFyeTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcbiAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aCxcbiAgICAgICAgXCJoZWlnaHRcIjogaGVpZ2h0LFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VsZl9zZXRDdXJzb3JQb3NpdGlvbihpZCwgcG9zaXRpb24pIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRDdXJzb3JQb3NpdGlvbjpcIixcbiAgICBcInZhbHVlc1wiOiBbe1xuICAgICAgXCJ2aWV3SWRcIjogaWQsXG4gICAgICBcInBvc2l0aW9uXCI6IHBvc2l0aW9uXG4gICAgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDb250ZW50U2l6ZSgpIHtcbiAgcmV0dXJuICB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0Q29udGVudFNpemU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwic2l6ZVwiICsgd2luZG93Ll9fU0laRV9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIiwgXCJ0eXBlXCI6IFwic2l6ZVwifVxuICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gVUlDb2xvcl9jb2xvcldpdGhSR0JBKHIsZyxiLGEpIHtcbiAgd2luZG93Ll9fQ09MT1JfSU5ERVgrKztcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImNvbG9yXCIgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiVUlDb2xvclwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiY29sb3JXaXRoUmVkOmdyZWVuOmJsdWU6YWxwaGE6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHIgLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgICAge1wibmFtZVwiOiBnICwgXCJ0eXBlXCI6IFwiZlwifSxcbiAgICAgIHtcIm5hbWVcIjogYiAsIFwidHlwZVwiOiBcImZcIn0sXG4gICAgICB7XCJuYW1lXCI6IGEgLCBcInR5cGVcIjogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfcGl2b3RYKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UGl2b3RYOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiB2YWx1ZStcIlwiLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3Bpdm90WSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFBpdm90WTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogdmFsdWUrXCJcIiwgXCJ0eXBlXCI6IFwic1wifSxcbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZl9hbmltYXRlX3RyYW5zbGF0aW9uKG9iaiwgcHJvcHMpIHtcbiAgb2JqLnZhbHVlc1swXS5wcm9wZXJ0aWVzID0gW1xuICAgICAge1xuICAgICAgICBcImtleVwiOiBcImZyYW1lXCIsXG4gICAgICAgIFwidmFsdWVzXCI6IHtcbiAgICAgICAgICBcInhcIjogcHJvcHMueCxcbiAgICAgICAgICBcInlcIjogcHJvcHMueSxcbiAgICAgICAgICBcIndpZHRoXCI6IHByb3BzLncsXG4gICAgICAgICAgXCJoZWlnaHRcIjogcHJvcHMuaCxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgXVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHNlbGZfYW5pbWF0ZV9yb3RhdGlvbihvYmosIHByb3BzKSB7XG4gIG9iai52YWx1ZXNbMF0ucHJvcGVydGllcyA9IFtcbiAgICB7XG4gICAgICBcImtleVwiOiBcImFuZ2xlXCIsXG4gICAgICBcInZhbHVlc1wiOiB7XG5cbiAgICAgIH1cbiAgICB9LFxuICBdXG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUcmFuc2xhdGlvbloocGFyYW1zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgICAgXCJtZXRob2ROYW1lXCI6IFwidHJhbnNsYXRpb25aOlwiLFxuICAgICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHBhcmFtcywgdHlwZTogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VsZl9hbmltYXRlKHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJhbmltYXRlOlwiLFxuICAgIFwidmFsdWVzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJqc29uXCI6IHByb3BzLmpzb24sXG4gICAgICAgIFwidmlld1RhZ1wiOiBwcm9wcy5pZCxcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0QmFja2dyb3VuZENvbG9yKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEJhY2tncm91bmRDb2xvcjpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCJjb2xvclwiICsgd2luZG93Ll9fQ09MT1JfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCJ9LFxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3N1cGVydmlldygpIHtcbiAgdmFyIGN1cnJWaWV3SW5kZXggPSB3aW5kb3cuX19WSUVXX0lOREVYO1xuXG4gIHdpbmRvdy5fX1ZJRVdfSU5ERVggKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIGN1cnJWaWV3SW5kZXgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzdXBlcnZpZXdcIixcbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3Njcm9sbFRvSW5kZXgoaW5kZXgpe1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNjcm9sbFRvSW5kZXg6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IGluZGV4LCB0eXBlOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gVUlWaWV3X2JvdW5kcygpIHtcbiAgd2luZG93Ll9fUkVDVF9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJyZWN0XCIgKyB3aW5kb3cuX19SRUNUX0lOREVYLFxuICAgIFwiZnJvbVN0b3JlXCI6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjpcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiYm91bmRzXCIsXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRFbmFibGVkKG1vZGUpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRFbmFibGVkOlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogbW9kZSwgXCJ0eXBlXCI6IFwiaVwifSxcbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2Nyb2xsRW5hYmxlZChzdGF0dXMpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUYWJsZVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTY3JvbGxFbmFibGVkOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBzdGF0dXMsIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEF1dG9Db3JyZWN0aW9uVHlwZShtb2RlKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0QXV0b2NvcnJlY3Rpb25UeXBlOlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogbW9kZSwgXCJ0eXBlXCI6IFwiaVwifSxcbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0S2V5Ym9hcmRUeXBlKG1vZGUpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRLZXlib2FyZFR5cGU6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRBdXRvQ2FwaXRhbGl6YXRpb25UeXBlKG1vZGUpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRBdXRvY2FwaXRhbGl6YXRpb25UeXBlczpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcImlcIn0sXG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFN0YXR1c0JhclN0eWxlKG1vZGUpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0U3RhdHVzQmFyU3R5bGU6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19iZWNvbWVGaXJzdFJlc3BvbmRlcihtb2RlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwiZm9jdXM6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcIm5hbWVcIjogbW9kZSwgXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRPbkl0ZW1DbGljayhjYWxsYmFjaykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE9uSXRlbUNsaWNrOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgeyBcIm5hbWVcIjogY2FsbGJhY2tNYXBwZXIubWFwKGNhbGxiYWNrKSwgXCJ0eXBlXCI6IFwic1wiIH0sXG4gICAgXVxuICB9XG4gfVxuXG5mdW5jdGlvbiB0aGlzX3NldE9uRm9jdXNDYWxsYmFjayhjYWxsYmFjaykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE9uRm9jdXNDYWxsYmFjazpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHsgXCJuYW1lXCI6IGNhbGxiYWNrTWFwcGVyLm1hcChjYWxsYmFjayksIFwidHlwZVwiOiBcInNcIiB9LFxuICAgIF1cbiAgfVxuIH1cblxuZnVuY3Rpb24gdGhpc19zZXRPbk1lcmNoYW50Vmlld0hlaWdodENoYW5nZUNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0T25NZXJjaGFudFZpZXdIZWlnaHRDaGFuZ2U6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7IFwibmFtZVwiOiBjYWxsYmFja01hcHBlci5tYXAoY2FsbGJhY2spLCBcInR5cGVcIjogXCJzXCIgfSxcbiAgICBdXG4gIH1cbiB9XG5cbmZ1bmN0aW9uIHRoaXNfc2V0T24oZW5hYmxlZCkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldE9uOmFuaW1hdGVkOlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogZW5hYmxlZCwgXCJ0eXBlXCI6IFwiaVwifSxcbiAgICAge1wibmFtZVwiOiBcIjFcIiwgXCJ0eXBlXCI6IFwiaVwifVxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zaG93VmVydGljYWxTY3JvbGxCYXIoZW5hYmxlZCkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldFNob3dzVmVydGljYWxTY3JvbGxJbmRpY2F0b3I6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBlbmFibGVkLCBcInR5cGVcIjogXCJpXCJ9XG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFNlY3VyZVRleHRFbnRyeShlbmFibGVkKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0U2VjdXJlVGV4dEVudHJ5OlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogZW5hYmxlZCwgXCJ0eXBlXCI6IFwiaVwifSxcbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIFVJSW1hZ2VfaW1hZ2VOYW1lZChpbWFnZSkge1xuICB3aW5kb3cuX19JTUFHRV9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJpbWFnZVwiICsgd2luZG93Ll9fSU1BR0VfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImltYWdlTmFtZWQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IGltYWdlLCBcInR5cGVcIjogXCJzXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0SW1hZ2UoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRJbWFnZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCJpbWFnZVwiICsgd2luZG93Ll9fSU1BR0VfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGZfcmVjdEZyb21EaWN0aW9uYXJ5KHgseSx3LGgpIHtcbiAgd2luZG93Ll9fUkVDVF9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJyZWN0XCIgKyB3aW5kb3cuX19SRUNUX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJyZWN0RnJvbURpY3Rpb25hcnk6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XG4gICAgICAgIFwieFwiOiB4LFxuICAgICAgICBcInlcIjogeSxcbiAgICAgICAgXCJ3aWR0aFwiOiB3LFxuICAgICAgICBcImhlaWdodFwiOiBoLFxuICAgICAgfVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3VwZGF0ZUxheW91dFBhcmFtcyhjb25maWcpIHtcbiAgdmFyIGRhdGEgPSB7XG4gICAgXCJ3aWR0aFwiOiBjb25maWcud2lkdGgsXG4gICAgXCJoZWlnaHRcIjogY29uZmlnLmhlaWdodCxcbiAgICBcIm1hcmdpblwiOiBjb25maWcubWFyZ2luLFxuICAgIFwicGFkZGluZ1wiOiBjb25maWcucGFkZGluZyxcbiAgICBcIndlaWdodFwiOiBjb25maWcud2VpZ2h0LFxuICAgIFwiZ3Jhdml0eVwiOiBjb25maWcuZ3Jhdml0eSxcbiAgICBcInZpc2liaWxpdHlcIjogY29uZmlnLnZpc2liaWxpdHksXG4gICAgXCJvcmllbnRhdGlvblwiOiBjb25maWcub3JpZW50YXRpb24sXG4gICAgXCJhbGlnbm1lbnRfcnVsZXNcIiA6IGNvbmZpZy5hbGlnbm1lbnRfcnVsZXNcbiAgICB9XG4gIGlmKGRhdGEuYWxpZ25tZW50X3J1bGVzICYmIGRhdGEuYWxpZ25tZW50X3J1bGVzLmxlbmd0aCA9PSAwKXtcbiAgICBkZWxldGUgZGF0YS5hbGlnbm1lbnRfcnVsZXM7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInRoaXNcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJ1cGRhdGVMYXlvdXRQYXJhbXM6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcbiAgICAgICAgXCJuYW1lXCI6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBcInR5cGVcIjogJ3MnXG4gICAgfV1cbiAgfTtcbn1cblxuXG5mdW5jdGlvbiB0aGlzX3NldFBhZGRpbmcocGFkZGluZykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJNSlBWaWV3QUxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFBhZGRpbmdMZWZ0OlRvcDpSaWdodDpCb3R0b206XCIsXG4gICAgXCJ2YWx1ZXNcIjogcGFkZGluZy5zcGxpdCgnLCcpLm1hcChtYWtlVW5pdClcbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldE1hcmdpbihtYXJnaW4pIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiTUpQVmlld0FMXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRNYXJnaW5MZWZ0OlRvcDpSaWdodDpCb3R0b206XCIsXG4gICAgXCJ2YWx1ZXNcIjogbWFyZ2luLnNwbGl0KCcsJykubWFwKG1ha2VVbml0KVxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VVbml0ICh2LGksYXJyKSB7XG4gIHJldHVybiB7bmFtZSA6IHYrJycsIHR5cGUgOiAnZid9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0SGVpZ2h0KGhlaWdodCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJNSlBWaWV3QUxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEhlaWdodDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogaGVpZ2h0ICsnJywgXCJ0eXBlXCI6ICdpJ31cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRXaWR0aCh3aWR0aCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJNSlBWaWV3QUxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFdpZHRoOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiB3aWR0aCArJycsIFwidHlwZVwiOiAnaSd9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0RnJhbWUoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0RnJhbWU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwicmVjdFwiICsgd2luZG93Ll9fUkVDVF9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIiwgXCJ0eXBlXCI6IFwicmVjdFwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxmX2FsaWduVG9QYXJlbnQodHlwZSwgdmFsdWVzKSB7XG4gIHdpbmRvdy5fX1BPSU5UX0lOREVYKys7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJwb2ludFwiICsgd2luZG93Ll9fUE9JTlRfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImFsaWduVG9QYXJlbnQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiB0eXBlLFxuICAgICAgICBcInhcIjogdmFsdWVzLngsXG4gICAgICAgIFwieVwiOiB2YWx1ZXMueSxcbiAgICAgICAgXCJ5T2Zmc2V0XCI6IHZhbHVlcy55T2Zmc2V0LFxuICAgICAgICBcInhPZmZzZXRcIjogdmFsdWVzLnhPZmZzZXQsXG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0Q2VudGVyKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldENlbnRlcjpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgICAgICB7XCJuYW1lXCI6IFwicG9pbnRcIiArIHdpbmRvdy5fX1BPSU5UX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiLCAgXCJ0eXBlXCI6IFwicG9pbnRcIn1cbiAgICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VGV4dCh0ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0VGV4dDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgICAgICB7XCJuYW1lXCI6IGVuY29kZVVSSSh0ZXh0KSwgXCJ0eXBlXCI6IFwic1wifVxuICAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRSZWd1bGFyRXhwcmVzc2lvbih0ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFJlZ3VsYXJFeHByZXNzaW9uOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICAgIHtcIm5hbWVcIjogdGV4dCwgXCJ0eXBlXCI6IFwic1wifVxuICAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RW5jb2RlZERhdGEodGV4dCkge1xuICB2YXIgZW5jb2RlZFN0cmluZyA9IHRleHQ7XG4gIGlmIChpc015c3RpcXVlVmVyc2lvbkdyZWF0ZXJUaGFuKFwiMVwiKSkge1xuICAgIGVuY29kZWRTdHJpbmcgPSBidG9hKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH0gZWxzZSBpZiAoaXNNeXN0aXF1ZVZlcnNpb25HcmVhdGVyVGhhbihcIjBcIikpIHtcbiAgICBlbmNvZGVkU3RyaW5nID0gYnRvYSh0ZXh0LnJlcGxhY2UoL1teXFx4MDAtXFx4N0ZdL2csIFwiXCIpKTtcbiAgfVxuICByZXR1cm4gZW5jb2RlZFN0cmluZztcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRIVE1MVGV4dCh0ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0SHRtbFRleHQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgeyBcIm5hbWVcIjogZ2V0RW5jb2RlZERhdGEodGV4dClcbiAgICAgICwgXCJ0eXBlXCI6IFwic1wiXG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0UGxhY2Vob2xkZXIodGV4dCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFBsYWNlaG9sZGVyOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICAgIHtcIm5hbWVcIjogdGV4dCwgXCJ0eXBlXCI6IFwic1wifVxuICAgICBdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0UGxhY2Vob2xkZXJQcm9wZXJ0aWVzKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUZXh0Vmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFBsYWNlaG9sZGVyUHJvcGVydGllczpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiBkYXRhLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiBVSUZvbnRfc3lzdGVtRm9udE9mU2l6ZShzaXplKSB7XG4gIHdpbmRvdy5fX0ZPTlRfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZm9udFwiICsgd2luZG93Ll9fRk9OVF9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiVUlGb250XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzeXN0ZW1Gb250T2ZTaXplOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBzaXplLCBcInR5cGVcIjogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIFVJRm9udF9mb250V2l0aE5hbWUobmFtZSwgc2l6ZSkge1xuICB3aW5kb3cuX19GT05UX0lOREVYKys7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJNSlBGb250XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJmb250V2l0aE5hbWU6c2l6ZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogbmFtZSwgXCJ0eXBlXCI6IFwic1wifSxcbiAgICAgIHtcIm5hbWVcIjogc2l6ZS5sZW5ndGg+MD9zaXplOlwiMTRcIiwgXCJ0eXBlXCI6IFwiZlwifSxcbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRGb250KCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0Rm9udDpcIixcbiAgICBcInZhbHVlc1wiOiBbe1xuICAgICAgXCJuYW1lXCI6IFwiZm9udFwiICsgd2luZG93Ll9fRk9OVF9JTkRFWCxcbiAgICAgIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCJcbiAgICB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NpemVUb0ZpdCgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzaXplVG9GaXRcIlxuICB9XG59XG5cbmZ1bmN0aW9uIFVJRm9udF9ib2xkU3lzdGVtRm9udE9mU2l6ZShzaXplKSB7XG4gIHdpbmRvdy5fX0ZPTlRfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZm9udFwiICsgd2luZG93Ll9fRk9OVF9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiVUlGb250XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJib2xkU3lzdGVtRm9udE9mU2l6ZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogc2l6ZSwgXCJ0eXBlXCI6IFwiZlwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBVSUZvbnRfc3lzdGVtRm9udE9mU2l6ZVdlaWdodChzaXplLCB3ZWlnaHQpIHtcbiAgd2luZG93Ll9fRk9OVF9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJVSUZvbnRcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInN5c3RlbUZvbnRPZlNpemU6d2VpZ2h0OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBzaXplICwgXCJ0eXBlXCI6IFwiZlwifSxcbiAgICAgIHtcIm5hbWVcIjogd2VpZ2h0ICwgXCJ0eXBlXCI6IFwiZlwifSxcbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRMaW5lQnJlYWtNb2RlKG1vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRMaW5lQnJlYWtNb2RlOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0TnVtYmVyT2ZMaW5lcyhjb3VudCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE51bWJlck9mTGluZXM6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IGNvdW50LCBcInR5cGVcIjogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VGV4dEFsaWdubWVudChtb2RlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0R3Jhdml0eTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogbW9kZSAsIFwidHlwZVwiOiBcInNcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0Q29sb3IoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0VGV4dENvbG9yOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiAnY29sb3InICsgd2luZG93Ll9fQ09MT1JfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VGV4dExlbmd0aExpbWl0KGxlbmd0aCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFRleHRMZW5ndGhMaW1pdDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgICAge1wibmFtZVwiOiBsZW5ndGggKyBcIlwiLCBcInR5cGVcIjogXCJpXCJ9XG4gICAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19yZW1vdmVDZWxsKGNlbGxJbmRleCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwicmVtb3ZlT2JqZWN0QXRJbmRleDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgICAge1wibmFtZVwiOiBjZWxsSW5kZXggKyBcIlwiLCBcInR5cGVcIjogXCJpXCJ9XG4gICAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gVUlDb2xvcl9mcm9tTGl0ZXJhbChjb2xvcikge1xuICB3aW5kb3cuX19DT0xPUl9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJjb2xvclwiICsgd2luZG93Ll9fQ09MT1JfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIlVJQ29sb3JcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogY29sb3IgKyBcIkNvbG9yXCIsXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19sYXllcigpIHtcbiAgd2luZG93Ll9fTEFZRVJfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwibGF5ZXJcIiArIHdpbmRvdy5fX0xBWUVSX0lOREVYLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcImxheWVyXCIsXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q29ybmVyUmFkaXVzKHJhZGl1cykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE1KUENvcm5lclJhZGl1czpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogcmFkaXVzICsgXCJcIiwgXCJ0eXBlXCI6IFwiZlwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRCb3JkZXJXaWR0aCh3aWR0aCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE1KUEJvcmRlcldpZHRoOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiB3aWR0aCArIFwiXCIsICBcInR5cGVcIjogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEJvcmRlckNvbG9yKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE1KUEJvcmRlckNvbG9yOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBcImNvbG9yXCIgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIiwgdHlwZTogXCJjZ2NvbG9yXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U2hhZG93KGlkLCBzaGFkb3dPZmZzZXQsIHNoYWRvd0JsdXIsIHNoYWRvd1NwcmVhZCwgc2hhZG93Q29sb3IsIHNoYWRvd09wYWNpdHkpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTaGFkb3c6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBcInZpZXdJZFwiOiBpZCxcbiAgICAgICAgXCJjb2xvclwiOiBzaGFkb3dDb2xvcixcbiAgICAgICAgXCJibHVyXCI6IHNoYWRvd0JsdXIsXG4gICAgICAgIFwib3BhY2l0eVwiOiBzaGFkb3dPcGFjaXR5LFxuICAgICAgICBcIm9mZnNldFwiOiBzaGFkb3dPZmZzZXQsXG4gICAgICAgIFwic3ByZWFkXCI6IHNoYWRvd1NwcmVhZFxuICAgICAgICB9KSxcbiAgICAgICAgXCJ0eXBlXCI6IFwic1wiXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEdyYWRpZW50KGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRHcmFkaWVudDpcIixcbiAgICBcInZhbHVlc1wiOiBbe1xuICAgICAgXCJuYW1lXCI6IGRhdGEsXG4gICAgICBcInR5cGVcIjogXCJzXCJcbiAgICB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEJhY2tncm91bmRJbWFnZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEJhY2tncm91bmRJbWFnZTpcIixcbiAgICBcInZhbHVlc1wiOiBbe1xuICAgICAgXCJuYW1lXCI6IFwiaW1hZ2VcIiArIHdpbmRvdy5fX0lNQUdFX0lOREVYLFxuICAgICAgXCJjb21wdXRlZFwiOiBcInRydWVcIlxuICAgIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIF9VSUxhYmVsTGF5ZXJfc2V0TWFza3NUb0JvdW5kcygpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6XCJsYXllclwiICsgd2luZG93Ll9fTEFZRVJfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIl9VSUxhYmVsTGF5ZXJcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE1KUE1hc2tzVG9Cb3VuZHM6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwiMVwiLCB0eXBlOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUYWcodGFnKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0VGFnOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiB0YWcsIHR5cGU6IFwiaVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxmX2dldFZpZXdGcm9tVGFnKHRhZyl7XG4gIHdpbmRvdy5fX1ZJRVdfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiZ2V0Vmlld0Zyb21UYWc6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHRhZywgXCJ0eXBlXCI6IFwic1wifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEltYWdlVVJMKGlkLHVybCxwbGFjZWhvbGRlcikge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0SW1hZ2VXaXRoVXJsOjo6OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBcIlwiICsgaWQsIFwidHlwZVwiOiBcInNcIn0sXG4gICAgICB7XCJuYW1lXCI6IHVybCwgXCJ0eXBlXCI6IFwic1wifSxcbiAgICAgIHtcIm5hbWVcIjogcGxhY2Vob2xkZXIsIFwidHlwZVwiOiBcInNcIn1cbiAgICBdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0R2lmKGlkLCBpbWFnZU5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJsb2FkR2lmOjo6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IFwiXCIgKyBpZCwgXCJ0eXBlXCI6IFwic1wiIH0sIHsgXCJuYW1lXCI6IGltYWdlTmFtZSwgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc3RhcnRHaWYoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInN0YXJ0R0lGXCJcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zdG9wR2lmKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzdG9wR0lGXCJcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VsZl9zZXRBbHBoYShhbHBoYSl7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0QWxwaGE6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFN0cmluZyhhbHBoYSksIHR5cGU6IFwiZlwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEhpZGRlbihoaWRkZW4pe1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEhpZGRlbjpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogKChoaWRkZW4gPT09IFwiZ29uZVwiIHx8IGhpZGRlbiA9PT0gXCJpbnZpc2libGVcIikgPyBcIjFcIiA6IFwiMFwiKSwgdHlwZTogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VGV4dFByb3BlcnRpZXMoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRleHRWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0VGV4dFByb3BlcnRpZXM6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAge1wibmFtZVwiOiBkYXRhLFwidHlwZVwiOiBcInNcIn1dXG4gIH07XG59XG5cblxuZnVuY3Rpb24gdGhpc19zZXRMZXR0ZXJTcGFjaW5nKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBFZGl0VGV4dFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldExldHRlclNwYWNpbmc6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IGRhdGEsIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldExpbmVTcGFjaW5nKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBMYWJlbFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldExpbmVTcGFjaW5nOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBkYXRhLCBcInR5cGVcIjogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDYXJldENvbG9yKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFRpbnRDb2xvcjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogJ2NvbG9yJyArIHdpbmRvdy5fX0NPTE9SX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2Nyb2xsVG8odmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUYWJsZVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzY3JvbGxUbzpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiB2YWx1ZSwgXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRFeHBhbmQodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBFeHBhbmRhYmxlQ2VsbFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEV4cGFuZDpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiB2YWx1ZSwgXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRFeHBhbmREdXJhdGlvbih2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUEV4cGFuZGFibGVDZWxsXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0RXhwYW5kRHVyYXRpb246XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcIm5hbWVcIjogdmFsdWUsIFwidHlwZVwiOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0RXhwYW5kQWxwaGEodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBFeHBhbmRhYmxlQ2VsbFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEV4cGFuZEFscGhhOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IHZhbHVlLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldFN3eXBlKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQVGFibGVWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0U3d5cGU6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHZhbHVlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIsIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldFVzZXJJbnRlcmFjdGlvbihoaWRkZW4pe1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFVzZXJJbnRlcmFjdGlvbkVuYWJsZWQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IChoaWRkZW4gPT09IFwidHJ1ZVwiID8gXCIxXCIgOiBcIjBcIiksIHR5cGU6IFwiaVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFNlcGFyYXRvcih2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFNlcGFyYXRvcjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogdmFsdWUsIHR5cGU6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U2VwYXJhdG9yUmVwZWF0KHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0U2VwYXJhdG9yUmVwZWF0OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiB2YWx1ZSwgdHlwZTogXCJzXCIgfV1cbiAgfTtcbn1cblxuXG5mdW5jdGlvbiB0aGlzX3NldFN3aXBlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICAgICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUYWJsZVZpZXdcIixcbiAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwic2V0U3dpcGVDYWxsYmFjazpcIixcbiAgICAgICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHZhbHVlLCB0eXBlOiBcInNcIiB9XVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0dXBMaXN0KGxpc3REYXRhLCBsaXN0SXRlbSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQUmVwZWF0VGFibGVWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0dXBMaXN0OjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogbGlzdERhdGEsIHR5cGU6IFwic1wiIH0sIHsgXCJuYW1lXCI6IGxpc3RJdGVtLCB0eXBlOiBcInNcIiB9XVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfaW5saW5lQW5pbWF0aW9uKGNvbmZpZykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcInRoaXNcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRJbmxpbmVBbmltYXRpb246XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IG1vZGlmeVRyYW5zbGF0aW9uKGNvbmZpZyksIHR5cGU6IFwic1wiIH1dXG4gICAgfTtcbn1cblxuXG5mdW5jdGlvbiBtb2RpZnlUcmFuc2xhdGlvbihjb25maWcpe1xuICB2YXIgeCA9IGNvbmZpZy54IHx8IFwiMFwiO1xuICB2YXIgeSA9IGNvbmZpZy55IHx8IFwiMFwiO1xuICB2YXIgYW5pbWF0aW9uQXJyYXkgPSBKU09OLnBhcnNlKGNvbmZpZy5pbmxpbmVBbmltYXRpb24pO1xuICB2YXIgYW5pbWF0aW9uQXJyYXkgPSBhbmltYXRpb25BcnJheS5tYXAoZnVuY3Rpb24oYSl7XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcImZyb21YXCIpKXtcbiAgICAgIGEuZnJvbVggPSBwYXJzZUludChhLmZyb21YKSArIHBhcnNlSW50KHgpICsgJyc7XG4gICAgICBpZighYS5oYXNPd25Qcm9wZXJ0eShcInRvWFwiKSl7XG4gICAgICAgIGEudG9YID0gMCArIHBhcnNlSW50KHgpICsgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJ0b1hcIikpe1xuICAgICAgYS50b1ggPSBwYXJzZUludChhLnRvWCkgKyBwYXJzZUludCh4KSArICcnO1xuICAgIH1cbiAgICBpZihhLmhhc093blByb3BlcnR5KFwiZnJvbVlcIikpe1xuICAgICAgYS5mcm9tWSA9IHBhcnNlSW50KGEuZnJvbVkpICsgcGFyc2VJbnQoeSkgKyAnJztcbiAgICAgIGlmKCFhLmhhc093blByb3BlcnR5KFwidG9ZXCIpKXtcbiAgICAgICAgYS50b1kgPSAwICsgcGFyc2VJbnQoeSkgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcInRvWVwiKSl7XG4gICAgICBhLnRvWSA9IHBhcnNlSW50KGEudG9ZKSArIHBhcnNlSW50KHkpICsgJyc7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9KVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYW5pbWF0aW9uQXJyYXkpO1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENsb3NlU3dpcGUodmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICAgICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUYWJsZVZpZXdcIixcbiAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwiY2xvc2VTd2lwZTpcIixcbiAgICAgICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHZhbHVlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIsIHR5cGU6IFwic1wiIH1dXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRFbmFibGVTd3lwZSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICAgICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgICAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICAgICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgICAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTd2lwZUVuYWJsZWQ6XCIsXG4gICAgICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiB2YWx1ZSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiLCB0eXBlOiBcInNcIiB9XVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfYnJpbmdTdWJWaWV3VG9Gcm9udChwYXJhbXMpe1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiYnJpbmdTdWJWaWV3VG9Gcm9udDpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiBwYXJhbXMsIHR5cGU6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDb250ZW50TW9kZShtb2RlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0Q29udGVudE1vZGU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbe1wibmFtZVwiOiBtb2RlLCB0eXBlOiBcImlcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfYWRqdXN0Vmlld1dpdGhLZXlib2FyZChzdGF0dXMpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRBZGp1c3RWaWV3V2l0aEtleWJvYXJkOlwiLFxuICAgIFwidmFsdWVzXCI6W3tcIm5hbWVcIjogc3RhdHVzLCB0eXBlOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlbGZfc2V0UG9wdXBNZW51KHBvcHVwTWVudSwgb25NZW51SXRlbUNsaWNrKSB7XG4gIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrTWFwcGVyLm1hcChvbk1lbnVJdGVtQ2xpY2spO1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcImNyZWF0ZUFjdGlvblNoZWV0V2l0aFRpdGxlczo6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHBvcHVwTWVudSwgXCJ0eXBlXCI6IFwic1wiIH0sIHsgXCJuYW1lXCI6IGNhbGxiYWNrLCBcInR5cGVcIjogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDb3JuZXJDdXJ2ZXMoY29ybmVyKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IFwiZmFsc2VcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwidGhpc1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldENvcm5lckN1cnZlczpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogY29ybmVyICsgXCJcIiwgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0Q2xpcHNUb0JvdW5kcyhib3VuZHMpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRDbGlwc1RvQm91bmRzOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBib3VuZHMgPyBcIjFcIiA6IFwiMFwiLCB0eXBlOiBcImlcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX2ZvbnRXaXRoTmFtZShuYW1lKSB7XG4gIHdpbmRvdy5fX0ZPTlRfSU5ERVgrKztcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZvbnRcIiArIHdpbmRvdy5fX0ZPTlRfSU5ERVgsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImZvbnRXaXRoTmFtZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogbmFtZSwgXCJ0eXBlXCI6IFwic1wifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBVSUNvbG9yX3NldENvbG9yKGNvbG9yKSB7XG4gIGxldCB2YWx1ZXM7XG4gIGxldCBhbHBoYSA9IFwiMS4wMFwiO1xuXG4gIGlmIChjb2xvci5sZW5ndGggPj0gOCkge1xuICAgIGFscGhhID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsMyksIDE2KTtcbiAgICBhbHBoYSA9IChhbHBoYS8yNTUpLnRvRml4ZWQoMik7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMywgOSk7XG4gIH0gZWxzZSB7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMSwgY29sb3IubGVuZ3RoKTtcbiAgfVxuXG4gIGNvbG9yID0gY29udmVydEhleFRvUmdiKHJXUyhjb2xvcikpO1xuICB2YWx1ZXMgPSBjb2xvci5zcGxpdCgnLCcpO1xuXG4gIGxldCByID0gcldTKHZhbHVlc1swXSk7XG4gIGxldCBnID0gcldTKHZhbHVlc1sxXSk7XG4gIGxldCBiID0gcldTKHZhbHVlc1syXSk7XG4gIGxldCBhID0gYWxwaGE7XG5cblxuICByZXR1cm4gVUlDb2xvcl9jb2xvcldpdGhSR0JBKHIsIGcsIGIsIGEpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1LZXlzKGNvbmZpZykge1xuICB2YXIga2V5cyA9ICBPYmplY3Qua2V5cyhjb25maWcpO1xuICBmb3IgKHZhciBpID0gMDsgaTxrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWdba2V5c1tpXV0gPT0gXCJ1bmRlZmluZWRcIiB8fCBjb25maWdba2V5c1tpXV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGNvbmZpZ1trZXlzW2ldXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWdba2V5c1tpXV0gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25maWdba2V5c1tpXV0gPSBjYWxsYmFja01hcHBlci5tYXAoY29uZmlnW2tleXNbaV1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGtleXNbaV0gIT09IFwiaWRcIiAmJlxuICAgICAgICAgIGtleXNbaV0gIT09IFwiX19maWxlbmFtZVwiICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJjdXJyQ2hpbGRPZmZzZXRcIiAmJlxuICAgICAgICAgIGtleXNbaV0gIT09IFwibWV0aG9kc1wiICAmJlxuICAgICAgICAgIGtleXNbaV0gIT09IFwic3dpcGVFbmFibGVcIiAmJlxuICAgICAgICAgIGtleXNbaV0gIT09IFwidmlld1BhZ2VyXCIgJiZcbiAgICAgICAgICBrZXlzW2ldICE9PSBcInRhYmxlVmlld1wiKSB7XG5cbiAgICAgICAgZGVsZXRlIGNvbmZpZ1trZXlzW2ldXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVR5cGUodHlwZSwgY29uZmlnKSB7XG4gIHZhciBtb2RpZmllZFR5cGUgID0gXCJtSlBWaWV3XCI7XG4gIHN3aXRjaCh0eXBlKXtcbiAgICBjYXNlIFwiZWRpdFRleHRcIjp7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUEVkaXRUZXh0XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpbWFnZVZpZXdcIjp7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUEltYWdlVmlld1wiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwidGV4dFZpZXdcIjp7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFRleHRWaWV3XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzY3JvbGxWaWV3XCI6IHtcbiAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnaGVpZ2h0JykmJiBjb25maWcuaGVpZ2h0ID09ICd3cmFwX2NvbnRlbnQnKXtcbiAgICAgICAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQU2Nyb2xsVmlld1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTY3JvbGxWaWV3XCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnLm9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcImhvcml6b250YWxTY3JvbGxWaWV3XCI6IHtcbiAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnd2lkdGgnKSYmIGNvbmZpZy53aWR0aCA9PSAnd3JhcF9jb250ZW50Jyl7XG4gICAgICAgICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFNjcm9sbFZpZXdcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQU2Nyb2xsVmlld1wiO1xuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInRhYmxlVmlld1wiOlxuICAgIGNhc2UgXCJsaXN0Vmlld1wiOiB7XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwibGlzdERhdGFcIikgJiYgY29uZmlnLmhhc093blByb3BlcnR5KFwibGlzdEl0ZW1cIikpIHtcbiAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBSZXBlYXRUYWJsZVZpZXdcIjtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQVGFibGVWaWV3XCI7XG4gICAgICB9XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjb2xsZWN0aW9uVmlld1wiOlxuICAgIGNhc2UgXCJ2aWV3UGFnZXJcIjp7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUENvbGxlY3Rpb25WaWV3XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcm9ncmVzc0JhclwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUEFjdGl2aXR5SW5kaWNhdG9yXCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzd2l0Y2hcIjoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTd2l0Y2hcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInN3eXBlTGF5b3V0XCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQU3d5cGVMYXlvdXRDZWxsXCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJhY2NvcmRpb25MYXlvdXRcIjoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBFeHBhbmRhYmxlQ2VsbFwiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwibGluZWFyTGF5b3V0XCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQTGluZWFyTGF5b3V0XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJyZWxhdGl2ZUxheW91dFwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFJlbGF0aXZlTGF5b3V0XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJmcmFtZUxheW91dFwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFJlbGF0aXZlTGF5b3V0XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQVmlld1wiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbW9kaWZpZWRUeXBlO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VLZXlzKGNvbmZpZywgdHlwZSkge1xuICB2YXIgbWFwID0ge1xuICAgIFwiaW1hZ2VVcmxcIjogXCJpbWFnZU5hbWVkXCIsXG4gICAgXCJwYWNrYWdlSWNvblwiIDogXCJpbWFnZU5hbWVkXCIsXG4gICAgXCJjb2xvclwiOiBcInRleHRDb2xvclwiXG4gIH07XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKG1hcFtrZXldKSB7XG4gICAgICBjb25maWdbbWFwW2tleV1dID0gY29uZmlnW2tleV07XG4gICAgICBkZWxldGUgY29uZmlnW2tleV07XG4gICAgfVxuICB9KTtcblxuICBpZiAoY29uZmlnLnN0cm9rZSkgIHtcbiAgICBjb25maWcuYm9yZGVyV2lkdGggPSBjb25maWcuc3Ryb2tlLnNwbGl0KFwiLFwiKVswXTtcbiAgICBjb25maWcuYm9yZGVyQ29sb3IgPSBjb25maWcuc3Ryb2tlLnNwbGl0KFwiLFwiKVsxXTtcbiAgfVxuXG4gIC8vIEFkZCBhbGwgdmlldyBiYXNlZCBwcm9wIGluamVjdGlvbnMgYmVsb3cuXG4gIHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKXtcbiAgICBjYXNlIFwic2Nyb2xsdmlld1wiOntcbiAgICAgIGNvbmZpZy5vcmllbnRhdGlvbiA9IFwidmVydGljYWxcIlxuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwiaG9yaXpvbnRhbHNjcm9sbHZpZXdcIjp7XG4gICAgICBjb25maWcub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIlxuICAgIH1cbiAgICBicmVhaztcbiAgfVxuICAvLyBBZGQgYWxsIHZpZXcgYmFzZWQgcHJvcCBpbmplY3Rpb25zIGFib3ZlLlxuICByZXR1cm4gY29uZmlnO1xufVxuXG5cbi8vIGNTIC0gY29udmVydCB0byBTdHJpbmdcbi8vIHJXUyAtIHJlbW92ZSB3aGl0ZSBzcGFjZXNcbi8vIGZyb21TdG9yZSBtZXRob2RzIGRvbnQgIHVzZSBpbnZva2VPblxuLy8gdGhlIGV4dHJhY3QgY2xhc3NOYW1lIG91dCBvZiB0aGUgc3RvcmVkIG9iamVjdCBpbiB0aGUgc3RvcmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odHlwZSwgY29uZmlnLCBfZ2V0U2V0VHlwZSkge1xuICBjb25maWcgPSBjaGFuZ2VLZXlzKGZsYXR0ZW5PYmplY3QoY29uZmlnKSwgdHlwZSk7XG4gIHR5cGUgPSBnZW5lcmF0ZVR5cGUodHlwZSwgY29uZmlnKTtcbiAgZ2V0U2V0VHlwZSA9IChfZ2V0U2V0VHlwZSA9PSBcInNldFwiKT8xOjA7XG4gIGNvbmZpZy5tZXRob2RzID0gW107XG4gIGNvbmZpZy5hbGlnbm1lbnRfcnVsZXMgPSBbXTtcblxuICAvLyB0YWcgc2V0XG4gIGlmIChjb25maWcuaWQpICB7XG4gICAgbGV0IHRhZyA9ICByV1MoY1MoY29uZmlnLmlkKSk7XG5cbiAgICBpZiAoIWdldFNldFR5cGUpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9nZXRWaWV3RnJvbVRhZyh0YWcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRhZyh0YWcpKTtcbiAgICB9XG4gIH1cblxuICAvLyBmcmFtZVxuICBpZiAoIWNvbmZpZy51c2VDb25zdHJhaXRzICYmIChjb25maWcueCB8fCBjb25maWcueSB8fCBjb25maWcudyB8fCBjb25maWcuaCkpIHtcbiAgICBsZXQgeCA9IHJXUyhjUyhjb25maWcueCkpIHx8ICBcIjBcIjtcbiAgICBsZXQgeSA9ICByV1MoY1MoY29uZmlnLnkpKXx8IFwiMFwiO1xuICAgIGxldCB3aWR0aCA9IHJXUyhjUyhjb25maWcudykpIHx8IFwiMFwiO1xuICAgIGxldCBoZWlnaHQgPSByV1MoY1MoY29uZmlnLmgpKSB8fCBcIjBcIjtcblxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9yZWN0RnJvbURpY3Rpb25hcnkoeCx5LHdpZHRoLGhlaWdodCkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRGcmFtZSgpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ1c2VDb25zdHJhaXRzXCIpICYmIGNvbmZpZy51c2VDb25zdHJhaXRzICYmIGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImV4cGFuZFwiKSl7XG4gICAgY29uZmlnLnZpc2liaWxpdHkgPSBjb25maWcuZXhwYW5kID8gKGNvbmZpZy52aXNpYmlsaXR5ID8gY29uZmlnLnZpc2liaWxpdHkgOiBcInZpc2libGVcIikgOiBcImdvbmVcIjtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJhbGlnblBhcmVudEJvdHRvbVwiKSAmJiBjb25maWcuYWxpZ25QYXJlbnRCb3R0b20gPT0gXCJ0cnVlLC0xXCIpe1xuICAgIGNvbmZpZy5hbGlnbm1lbnRfcnVsZXMucHVzaCgnYWxpZ25fcGFyZW50X2JvdHRvbScpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy51c2VDb25zdHJhaXRzKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3VwZGF0ZUxheW91dFBhcmFtcyhjb25maWcpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJsZXR0ZXJTcGFjaW5nXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldExldHRlclNwYWNpbmcoY29uZmlnLmxldHRlclNwYWNpbmcpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJsaW5lU3BhY2luZ1wiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRMaW5lU3BhY2luZyhjb25maWcubGluZVNwYWNpbmcpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJjYXJldENvbG9yXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUNvbG9yX3NldENvbG9yKGNvbmZpZy5jYXJldENvbG9yKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldENhcmV0Q29sb3IoKSk7XG4gIH1cblxuICAvLyBiYWNrZ3JvdW5kXG4gIGlmIChjb25maWcuYmFja2dyb3VuZCB8fCBjb25maWcuZ3JhZGllbnQgfHwgY29uZmlnLmJhY2tncm91bmREcmF3YWJsZSkge1xuICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJncmFkaWVudFwiKSkge1xuICAgICAgdmFyIGdyYWRpZW50ID0gSlNPTi5wYXJzZShjb25maWcuZ3JhZGllbnQpO1xuICAgICAgdmFyIGdyYWRpZW50VHlwZSA9IGdyYWRpZW50LnR5cGU7XG4gICAgICB2YXIgZ3JhZGllbnRBbmdsZSA9IGdyYWRpZW50LmFuZ2xlO1xuICAgICAgdmFyIGNvbG91cnMgPSBbXTtcblxuICAgICAgZ3JhZGllbnQudmFsdWVzLmZvckVhY2goY29sb3IgPT4ge1xuICAgICAgICBjb2xvdXJzLnB1c2goY29udmVydENvbG9yVG9SZ2JhKGNvbG9yKSk7XG4gICAgICB9KTtcblxuICAgICAgZ3JhZGllbnQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvbG9yczogY29sb3VycyxcbiAgICAgICAgdHlwZTogZ3JhZGllbnRUeXBlLFxuICAgICAgICBhbmdsZTogZ3JhZGllbnRBbmdsZVxuICAgICAgfSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0R3JhZGllbnQoZ3JhZGllbnQpKTtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImJhY2tncm91bmREcmF3YWJsZVwiKSkge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUltYWdlX2ltYWdlTmFtZWQoY29uZmlnLmJhY2tncm91bmREcmF3YWJsZSkpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEJhY2tncm91bmRJbWFnZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUNvbG9yX3NldENvbG9yKGNvbmZpZy5iYWNrZ3JvdW5kKSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0QmFja2dyb3VuZENvbG9yKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJvcmRlckNvbG9yLCByYWRpdXMgYW5kIHdpZHRoXG4gIC8vIHdpbGwgd29yayBvbmx5IGZvciB1aVZpZXcgYW5kIHVpTGFiZWxcbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNvcm5lclJhZGl1c1wiKSkge1xuICAgIGxldCBhcmcgPSByV1MoY1MoY29uZmlnLmNvcm5lclJhZGl1cykpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2V0Q29ybmVyUmFkaXVzKGFyZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImJvcmRlcldpZHRoXCIpKSB7XG4gICAgbGV0IGFyZyA9IHJXUyhjUyhjb25maWcuYm9yZGVyV2lkdGgpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNldEJvcmRlcldpZHRoKGFyZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImJvcmRlckNvbG9yXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUNvbG9yX3NldENvbG9yKGNvbmZpZy5ib3JkZXJDb2xvcikpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2V0Qm9yZGVyQ29sb3IoKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmRlYnVnKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX2xheWVyKCkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2V0Qm9yZGVyV2lkdGgoXCIxXCIpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2hhZG93KSB7XG4gICAgdmFyIHNoYWRvd1ZhbHVlcyA9IGNvbmZpZy5zaGFkb3cuc3BsaXQoJywnKTtcbiAgICB2YXIgc2hhZG93Qmx1ciA9IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMl0pKTtcbiAgICB2YXIgc2hhZG93U3ByZWFkID0gcldTKGNTKHNoYWRvd1ZhbHVlc1szXSkpO1xuICAgIHZhciBzaGFkb3dPcGFjaXR5ID0gcldTKGNTKHNoYWRvd1ZhbHVlc1s1XSkpO1xuICAgIHZhciBzaGFkb3dPZmZzZXQgPSB7XG4gICAgICB4OiByV1MoY1Moc2hhZG93VmFsdWVzWzBdKSksXG4gICAgICB5OiByV1MoY1Moc2hhZG93VmFsdWVzWzFdKSlcbiAgICB9O1xuXG4gICAgdmFyIHNoYWRvd0NvbG9yID0gY29udmVydENvbG9yVG9SZ2JhKHNoYWRvd1ZhbHVlc1s0XSk7XG5cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U2hhZG93KGNvbmZpZy5pZCwgc2hhZG93T2Zmc2V0LCBzaGFkb3dCbHVyLCBzaGFkb3dTcHJlYWQsIHNoYWRvd0NvbG9yLCBzaGFkb3dPcGFjaXR5KSk7XG4gIH1cblxuICAvLyBtYWtlIGNoaWxkIGZ1bGxXaWR0aCBhbmQgaGVpZ2h0IG9mIHBhcmVudFxuICBpZiAoY29uZmlnLmZpbGxQYXJlbnQpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc3VwZXJ2aWV3KCkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlWaWV3X2JvdW5kcygpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RnJhbWUoKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiaW1hZ2VOYW1lZFwiKSkge1xuICAgIGxldCBpZCA9IGNTKGNvbmZpZy5pZCk7XG4gICAgbGV0IHBsYWNlaG9sZGVyID0gY29uZmlnLnBsYWNlSG9sZGVyIHx8IFwiXCI7XG4gICAgaWYgKGNvbmZpZy5pbWFnZU5hbWVkLmVuZHNXaXRoKFwiLmdpZlwiKSl7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0R2lmKGlkLCBjb25maWcuaW1hZ2VOYW1lZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0SW1hZ2VVUkwoaWQsIGNvbmZpZy5pbWFnZU5hbWVkLCBwbGFjZWhvbGRlcikpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJhZGp1c3RWaWV3V2l0aEtleWJvYXJkXCIpKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfYWRqdXN0Vmlld1dpdGhLZXlib2FyZChjb25maWcuYWRqdXN0Vmlld1dpdGhLZXlib2FyZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInBsYXlHaWZcIikpe1xuICAgIGlmIChjb25maWcucGxheUdpZilcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zdGFydEdpZigpKTtcbiAgICBlbHNlXG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc3RvcEdpZigpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGludCkge1xuICAgIGlmIChjb25maWcubGV0dGVyU3BhY2luZykge1xuICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICdoaW50JzogY1MoY29uZmlnLmhpbnQpLFxuICAgICAgICAnbGV0dGVyU3BhY2luZyc6IGNvbmZpZy5sZXR0ZXJTcGFjaW5nXG4gICAgICB9KTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRQbGFjZWhvbGRlclByb3BlcnRpZXMoZGF0YSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0UGxhY2Vob2xkZXIoY1MoY29uZmlnLmhpbnQpKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInNlcGFyYXRvclwiKSkge1xuICAgIHZhciBfZW5hYmxlZDYgPSBjUyhjb25maWcuc2VwYXJhdG9yKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U2VwYXJhdG9yKF9lbmFibGVkNikpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInNlcGFyYXRvclJlcGVhdFwiKSkge1xuICAgIHZhciBfZW5hYmxlZDYgPSBjUyhjb25maWcuc2VwYXJhdG9yUmVwZWF0KTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U2VwYXJhdG9yUmVwZWF0KF9lbmFibGVkNikpO1xuICB9XG5cbiAgIGlmIChjb25maWcudHJhbnNsYXRpb25aKXtcbiAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRyYW5zbGF0aW9uWihjUyhjb25maWcudHJhbnNsYXRpb25aKSkpO1xuICAgfVxuXG4gIGlmIChjb25maWcuc2Nyb2xsVG8pIHtcbiAgICB2YXIgZGF0YSA9IGNvbmZpZy5zY3JvbGxUby5zcGxpdChcIixcIik7XG4gICAgdmFyIHBhcnNlZERhdGEgPSBKU09OLnN0cmluZ2lmeSh7XCJ4XCI6IGRhdGFbMF0sIFwieVwiOiBkYXRhWzFdfSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Njcm9sbFRvKGNTKHBhcnNlZERhdGEpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZXhwYW5kXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEV4cGFuZChjb25maWcuZXhwYW5kP1wiMVwiOlwiMFwiKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZXhwYW5kRHVyYXRpb25cIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RXhwYW5kRHVyYXRpb24oY1MoY29uZmlnLmV4cGFuZER1cmF0aW9uKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImV4cGFuZEFscGhhXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEV4cGFuZEFscGhhKGNTKGNvbmZpZy5leHBhbmRBbHBoYSkpKTtcbiAgfVxuXG4gIC8vVXBkYXRlZCB0byBoYW5kbGUgMCBiZWluZyBwYXNzZWQgZm9yIGRlZmF1bHQgYWxpZ25tZW50XG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ0ZXh0QWxpZ25tZW50XCIpKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VGV4dEFsaWdubWVudChyV1MoY1MoY29uZmlnLnRleHRBbGlnbm1lbnQpKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInRleHRGcm9tSHRtbFwiKSkge1xuICAgICAgZGVidWdnZXI7XG4gICAgICB2YXIgbW9kaWZpZWRIdG1sU3RyaW5nID0gXCI8c3BhbiBzdHlsZT1cXFwiXCJcbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJmb250U3R5bGVcIikpIHtcbiAgICAgICAgICBtb2RpZmllZEh0bWxTdHJpbmcgKz0gXCJmb250LWZhbWlseTpcIitjb25maWcuZm9udFN0eWxlK1wiO1wiXG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dFNpemVcIikpIHtcbiAgICAgICAgICBtb2RpZmllZEh0bWxTdHJpbmcgKz0gXCJmb250LXNpemU6XCIrY29uZmlnLnRleHRTaXplK1wiO1wiXG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dENvbG9yXCIpKSB7XG4gICAgICAgICAgbW9kaWZpZWRIdG1sU3RyaW5nICs9IFwiZm9udC1zaXplOlwiK2NvbmZpZy50ZXh0Q29sb3IrXCI7XCJcbiAgICAgIH1cbiAgICAgIG1vZGlmaWVkSHRtbFN0cmluZyArPVwiXFxcIj5cIitjb25maWcudGV4dEZyb21IdG1sK1wiPC9zcGFuPlwiO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEhUTUxUZXh0KG1vZGlmaWVkSHRtbFN0cmluZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy50ZXh0Q29sb3IpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJQ29sb3Jfc2V0Q29sb3IoY29uZmlnLnRleHRDb2xvcikpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUZXh0Q29sb3IoKSk7XG4gIH1cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImZvbnRTdHlsZVwiKSkge1xuICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ0ZXh0U2l6ZVwiKSkge1xuICAgICAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJRm9udF9mb250V2l0aE5hbWUoY29uZmlnLmZvbnRTdHlsZSwgY29uZmlnLnRleHRTaXplK1wiXCIpKTtcbiAgICB9IGVsc2V7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfZm9udFdpdGhOYW1lKGNvbmZpZy5mb250U3R5bGUpKTtcbiAgICB9XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEZvbnQoKSk7XG4gIH0gZWxzZSBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dFNpemVcIikpe1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlGb250X3N5c3RlbUZvbnRPZlNpemUoY29uZmlnLnRleHRTaXplK1wiXCIpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Rm9udCgpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2Nyb2xsRW5hYmxlZCl7XG4gICAgdmFyIHNjcm9sbEVuYWJsZWQgPSBjUyhjb25maWcuc2Nyb2xsRW5hYmxlZCk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Njcm9sbEVuYWJsZWQoc2Nyb2xsRW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5mb250RmFtaWx5KSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUZvbnRfc3lzdGVtRm9udE9mU2l6ZVdlaWdodCgoY29uZmlnLnRleHRTaXplIHx8IFwiMTRcIikgKyBcIlwiLCBjb25maWcuZm9udEZhbWlseSB8fCBcIjAuMFwiKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEZvbnQoKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic2luZ2xlTGluZVwiKSkge1xuICAgIGlmKCFjb25maWcuc2luZ2xlTGluZSl7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0TGluZUJyZWFrTW9kZShcIjBcIikpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldE51bWJlck9mTGluZXMoXCIwXCIpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmZpZy51c2VDb25zdHJhaXRzICYmIGNvbmZpZy52aXNpYmlsaXR5KSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEhpZGRlbihjb25maWcudmlzaWJpbGl0eSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNsaWNrYWJsZVwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRVc2VySW50ZXJhY3Rpb24ocldTKGNTKGNvbmZpZy5jbGlja2FibGUpKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy50cmFuc2xhdGlvblgpIHtcbiAgICBsZXQgcHJvcHMgPSBbe1xuICAgICAgJ2lkJzogJycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiksXG4gICAgICAndHlwZSc6ICd0cmFuc2xhdGlvbicsXG4gICAgICAncnVuT25SZW5kZXInIDogJ3RydWUnLFxuICAgICAgJ2Vhc2luZycgOiAnbGluZWFyJyxcbiAgICAgICdkZWxheSc6ICcwJyxcbiAgICAgICdkdXJhdGlvbic6ICcxJyxcbiAgICAgICdwcm9wcycgOiBKU09OLnN0cmluZ2lmeShbeyd0byc6ICcnICsgY29uZmlnLnRyYW5zbGF0aW9uWCwgJ3Byb3AnOid0cmFuc2xhdGlvblgnLCAnZnJvbSc6JzAnfV0pXG4gICAgfV07XG5cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfYW5pbWF0ZSh7J2lkJzonJytjb25maWcuaWQsJ2pzb24nOkpTT04uc3RyaW5naWZ5KHByb3BzKX0pKTtcbiAgfVxuXG4gIGlmIChjb25maWcudHJhbnNsYXRpb25ZKSB7XG4gICAgbGV0IHByb3BzID0gW3tcbiAgICAgICdpZCc6ICcnICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpLFxuICAgICAgJ3R5cGUnOiAndHJhbnNsYXRpb24nLFxuICAgICAgJ3J1bk9uUmVuZGVyJyA6ICd0cnVlJyxcbiAgICAgICdlYXNpbmcnIDogJ2xpbmVhcicsXG4gICAgICAnZGVsYXknOiAnMCcsXG4gICAgICAnZHVyYXRpb24nOiAnMScsXG4gICAgICAncHJvcHMnIDogSlNPTi5zdHJpbmdpZnkoW3sndG8nOiAnJyArIGNvbmZpZy50cmFuc2xhdGlvblksJ3Byb3AnOid0cmFuc2xhdGlvblknLCdmcm9tJzonMCd9XSlcbiAgICB9XTtcblxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9hbmltYXRlKHsnaWQnOicnK2NvbmZpZy5pZCwnanNvbic6SlNPTi5zdHJpbmdpZnkocHJvcHMpfSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5hX3JvdGF0ZSkge1xuICAgIC8vVE9ETzogRklYIFRISVMgQlJJTkcgSVQgT1VUU0lERVxuICAgIGxldCBwcm9wcyA9IHtcbiAgICAgICAgXCJkdXJhdGlvblwiOiBjb25maWcuYV9kdXJhdGlvbixcbiAgICAgICAgXCJpZFwiOiBjb25maWcuaWQsXG4gICAgICAgIFwiZGVsYXlcIjogY29uZmlnLmFfZGVsYXksXG4gICAgICAgIFwib3B0aW9uXCI6IGNvbmZpZy5hX29wdGlvbixcbiAgICAgICAgXCJ0eXBlXCI6IFwicm90YXRpb25cIixcbiAgICAgfTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9hbmltYXRlKHByb3BzKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiaHRtbFRleHRcIikpIHtcbiAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEhUTUxUZXh0KGNvbmZpZy5odG1sVGV4dCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImJyaW5nU3ViVmlld1RvRnJvbnRcIikpIHtcbiAgICBsZXQgdmlld1RhZyA9IGNTKGNvbmZpZy5pZCk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX2JyaW5nU3ViVmlld1RvRnJvbnQodmlld1RhZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNvbnRlbnRNb2RlXCIpKSB7XG4gICAgbGV0IGNvbnRlbnRNb2RlID0gY1MoY29uZmlnLmNvbnRlbnRNb2RlKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Q29udGVudE1vZGUoY29udGVudE1vZGUpKTtcbiAgfVxuXG4gIGlmKGNvbmZpZy5vbkZvY3VzKXtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0T25Gb2N1c0NhbGxiYWNrKGNvbmZpZy5vbkZvY3VzKSk7XG4gIH1cblxuICBpZihjb25maWcuaGFzT3duUHJvcGVydHkoXCJvbk1lcmNoYW50Vmlld0hlaWdodENoYW5nZVwiKSl7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldE9uTWVyY2hhbnRWaWV3SGVpZ2h0Q2hhbmdlQ2FsbGJhY2soY29uZmlnLm9uTWVyY2hhbnRWaWV3SGVpZ2h0Q2hhbmdlKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwicGl2b3RYXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Bpdm90WChjb25maWcucGl2b3RYK1wiXCIpKTtcbiAgfVxuXG5pZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwicGl2b3RZXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Bpdm90WShjb25maWcucGl2b3RZK1wiXCIpKTtcbiAgfVxuXG4gIGlmKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcIm9uSXRlbUNsaWNrXCIpKXtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0T25JdGVtQ2xpY2soY29uZmlnLm9uSXRlbUNsaWNrKSk7XG4gIH1cblxuXG4gIGlmIChjb25maWcuc3RhdHVzQmFyU3R5bGUpIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5zdGF0dXNCYXJTdHlsZSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U3RhdHVzQmFyU3R5bGUoZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImVuYWJsZWRcIikpIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5lbmFibGVkKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRFbmFibGVkKGVuYWJsZWQpKTtcbiAgfVxuXG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImlucHV0VHlwZUlcIikpIHtcbiAgICAgIGxldCBrZXlib2FyZFR5cGUgPSBjUyhjb25maWcuaW5wdXRUeXBlSSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0S2V5Ym9hcmRUeXBlKGtleWJvYXJkVHlwZSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5pbnB1dFR5cGUpIHtcbiAgICBsZXQga2V5Ym9hcmRUeXBlID0gY29uZmlnLmlucHV0VHlwZTtcbiAgICBpZiAoa2V5Ym9hcmRUeXBlID09IFwibnVtZXJpY1wiIHx8IGtleWJvYXJkVHlwZSA9PSBcIm51bWVyaWNXaXRob3V0U3VnZ2VzdGlvblwiKSB7XG4gICAgICBjb25maWcuaW5wdXRUeXBlID0gNDtcbiAgICB9IGVsc2UgaWYgKGtleWJvYXJkVHlwZSA9PSBcImVtYWlsXCIpIHtcbiAgICAgIGNvbmZpZy5pbnB1dFR5cGUgPSA3O1xuICAgIH0gZWxzZSBpZiAoa2V5Ym9hcmRUeXBlID09IFwibnVtZXJpY1Bhc3N3b3JkXCIpIHtcbiAgICAgIGNvbmZpZy5pbnB1dFR5cGUgPSA0O1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFNlY3VyZVRleHRFbnRyeShcIjFcIikpO1xuICAgIH0gZWxzZSBpZiAoa2V5Ym9hcmRUeXBlID09IFwicGFzc3dvcmRcIikge1xuICAgICAgY29uZmlnLmlucHV0VHlwZSA9IDA7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U2VjdXJlVGV4dEVudHJ5KFwiMVwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5pbnB1dFR5cGUgPSAwO1xuICAgIH1cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0S2V5Ym9hcmRUeXBlKGNTKGNvbmZpZy5pbnB1dFR5cGUpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYXV0b0NhcGl0YWxpemF0aW9uVHlwZVwiKSkge1xuICAgICAgbGV0IGtleWJvYXJkVHlwZSA9IGNTKGNvbmZpZy5hdXRvQ2FwaXRhbGl6YXRpb25UeXBlKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRBdXRvQ2FwaXRhbGl6YXRpb25UeXBlKGtleWJvYXJkVHlwZSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImF1dG9Db3JyZWN0aW9uVHlwZVwiKSkge1xuICAgIGxldCBhdXRvQ29ycmVjdGlvblR5cGUgPSBjUyhjb25maWcuYXV0b0NvcnJlY3Rpb25UeXBlKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRBdXRvQ29ycmVjdGlvblR5cGUoYXV0b0NvcnJlY3Rpb25UeXBlKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYmVjb21lRmlyc3RSZXNwb25kZXJcIikpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19iZWNvbWVGaXJzdFJlc3BvbmRlcigpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJzZXRPblwiKSkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLnNldE9uKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRPbihlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNjcm9sbFRvSW5kZXgpIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5zY3JvbGxUb0luZGV4KTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zY3JvbGxUb0luZGV4KGVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2hvd1ZlcnRpY2FsU2Nyb2xsQmFyKSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcuc2hvd1ZlcnRpY2FsU2Nyb2xsQmFyKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zaG93VmVydGljYWxTY3JvbGxCYXIoZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5sZW5ndGhMaW1pdCkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLmxlbmd0aExpbWl0KTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUZXh0TGVuZ3RoTGltaXQoZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInN3eXBlRW5hYmxlZFwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTd3lwZShjb25maWcuc3d5cGVFbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZm9jdXNcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfYmVjb21lRmlyc3RSZXNwb25kZXIoY1MoY29uZmlnLmZvY3VzKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5wYXR0ZXJuKSB7XG4gICAgdmFyIHBhdFN0ciA9IGNTKGNvbmZpZy5wYXR0ZXJuKTtcbiAgICB2YXIgcGF0QXJyID0gcGF0U3RyLnNwbGl0KFwiLFwiKTtcbiAgICB2YXIgcGF0TGVuID0gcGF0QXJyW3BhdEFyci5sZW5ndGggLSAxXTtcbiAgICBwYXRTdHIgPSBwYXRBcnIuc2xpY2UoMCwgcGF0QXJyLmxlbmd0aCAtIDEpLmpvaW4oXCIsXCIpO1xuXG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFJlZ3VsYXJFeHByZXNzaW9uKGNTKHBhdFN0cikpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VGV4dExlbmd0aExpbWl0KGNTKHBhdExlbikpKTtcbiAgfVxuXG4gIGlmIChjb25maWcucmVnRXhwKSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcucmVnRXhwKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRSZWd1bGFyRXhwcmVzc2lvbihlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnJlbW92ZUNlbGwpIHtcbiAgICBsZXQgY2VsbEluZGV4ID0gY1MoY29uZmlnLnJlbW92ZUNlbGwpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3JlbW92ZUNlbGwoY2VsbEluZGV4KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNlY3VyZVRleHRFbnRyeSkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLnNlY3VyZVRleHRFbnRyeSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U2VjdXJlVGV4dEVudHJ5KGVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoJ2NoZWNrZWQnKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRPbihjb25maWcuY2hlY2tlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5wb3B1cE1lbnUpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfc2V0UG9wdXBNZW51KGNvbmZpZy5wb3B1cE1lbnUsIGNvbmZpZy5vbk1lbnVJdGVtQ2xpY2spKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJhbHBoYVwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9zZXRBbHBoYShjb25maWcuYWxwaGEpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuYW5pbWF0aW9uKSB7XG4gICAgbGV0IGFuaW1Qcm9wcyA9IHtcbiAgICAgIHZpZXdUYWc6ICcnICsgY29uZmlnLmlkLFxuICAgICAganNvbjogY29uZmlnLmFuaW1hdGlvblxuICAgIH07XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX2FuaW1hdGVOZXcoYW5pbVByb3BzKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dFwiKSkge1xuICAgIGlmIChjb25maWcubGV0dGVyU3BhY2luZykge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldExldHRlclNwYWNpbmcoY1MoY29uZmlnLmxldHRlclNwYWNpbmcpKSk7XG4gICAgfVxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUZXh0KGNTKGNvbmZpZy50ZXh0KSkpO1xuICB9XG5cbiAgaWYoY29uZmlnLmN1cnNvclBvc2l0aW9uKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX3NldEN1cnNvclBvc2l0aW9uKGNTKGNvbmZpZy5pZCksIGNTKGNvbmZpZy5jdXJzb3JQb3NpdGlvbikpKTtcbiAgfVxuXG4gIGlmIChjb25maWcub25Td2lwZSAmJiB0eXBlb2YgY29uZmlnLm9uU3dpcGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFN3aXBlQ2FsbGJhY2soY2FsbGJhY2tNYXBwZXIubWFwKGNvbmZpZy5vblN3aXBlKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNsb3NlU3dpcGVcIikpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRDbG9zZVN3aXBlKGNvbmZpZy5jbG9zZVN3aXBlKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic3d5cGVFbmFibGVkXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEVuYWJsZVN3eXBlKGNvbmZpZy5zd3lwZUVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJsaXN0RGF0YVwiKSAmJiBjb25maWcuaGFzT3duUHJvcGVydHkoXCJsaXN0SXRlbVwiKSkge1xuICAgIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGNvbmZpZy5saXN0SXRlbSk7XG4gICAgaXRlbS5pdGVtVmlldyA9IEFuZHJvaWQuY3JlYXRlTGlzdERhdGEoY29uZmlnLmlkLCBpdGVtLml0ZW1WaWV3KTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0dXBMaXN0KGNvbmZpZy5saXN0RGF0YSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJpbmxpbmVBbmltYXRpb25cIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfaW5saW5lQW5pbWF0aW9uKGNvbmZpZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNsaXBzVG9Cb3VuZHNcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Q2xpcHNUb0JvdW5kcyhjb25maWcuY2xpcHNUb0JvdW5kcykpO1xuICB9XG5cbiAgaWYoY29uZmlnLmhhc093blByb3BlcnR5KFwiY29ybmVyUmFkaWlcIikpe1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRDb3JuZXJDdXJ2ZXMoY29uZmlnLmNvcm5lclJhZGlpKSk7XG4gIH1cblxuICBjb25maWcuY3VyckNoaWxkT2Zmc2V0ID0gMDtcbiAgY29uZmlnID0gdHJhbnNmb3JtS2V5cyhjb25maWcpO1xuXG4gIHJldHVybiB7Y29uZmlnOiBjb25maWcsIHR5cGU6IHR5cGV9O1xufTtcblxuZnVuY3Rpb24gc2VsZl9hbmltYXRlTmV3KHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJhbmltYXRlOlwiLFxuICAgIFwidmFsdWVzXCI6IFtwcm9wc11cbiAgfTtcbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHBhcnNlUGFyYW1zIDogcmVxdWlyZShcIi4vcGFyc2VQYXJhbXNcIiksXG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbkFycmF5LnByb3RvdHlwZS5yb3RhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBzYXZlIHJlZmVyZW5jZXMgdG8gYXJyYXkgZnVuY3Rpb25zIHRvIG1ha2UgbG9va3VwIGZhc3RlclxuICB2YXIgcHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoLFxuICAgIHNwbGljZSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2U7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjb3VudCkge1xuICAgIHZhciBsZW4gPSB0aGlzLmxlbmd0aCA+Pj4gMCwgLy8gY29udmVydCB0byB1aW50XG4gICAgICBjb3VudCA9IGNvdW50ID4+IDA7IC8vIGNvbnZlcnQgdG8gaW50XG5cbiAgICAvLyBjb252ZXJ0IGNvdW50IHRvIHZhbHVlIGluIHJhbmdlIFswLCBsZW4pXG4gICAgY291bnQgPSAoKGNvdW50ICUgbGVuKSArIGxlbikgJSBsZW47XG5cbiAgICAvLyB1c2Ugc3BsaWNlLmNhbGwoKSBpbnN0ZWFkIG9mIHRoaXMuc3BsaWNlKCkgdG8gbWFrZSBmdW5jdGlvbiBnZW5lcmljXG4gICAgcHVzaC5hcHBseSh0aGlzLCBzcGxpY2UuY2FsbCh0aGlzLCAwLCBjb3VudCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xufSkoKTtcblxuZnVuY3Rpb24gZmxhdHRlbk9iamVjdChvYikge1xuICB2YXIgdG9SZXR1cm4gPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBvYikge1xuICAgIGlmICghb2IuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgIGlmICgodHlwZW9mIG9iW2ldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGZsYXRPYmplY3QgPSBmbGF0dGVuT2JqZWN0KG9iW2ldKTtcbiAgICAgIGZvciAodmFyIHggaW4gZmxhdE9iamVjdCkge1xuICAgICAgICBpZiAoIWZsYXRPYmplY3QuaGFzT3duUHJvcGVydHkoeCkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAodHlwZW9mIGZsYXRPYmplY3RbeF0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgdG9SZXR1cm5beF0gPSBmbGF0T2JqZWN0W3hdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b1JldHVybltpXSA9IG9iW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0b1JldHVybjtcbn1cblxuZnVuY3Rpb24gcGFyc2VDb2xvcnMoY29sb3IpIHtcbiAgaWYgKGNvbG9yLmxlbmd0aCA8IDgpXG4gICAgcmV0dXJuIGNvbG9yO1xuXG4gIGlmIChjb2xvci5pbmRleE9mKFwicmdiYVwiKSAhPT0gLTEgfHwgY29sb3IuaW5kZXhPZihcInJnYlwiKSAhPT0gLTEpXG4gICAgcmV0dXJuIGNvbG9yO1xuXG4gIHZhciBhbHBoYSA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAzKSwgMTYpO1xuICBhbHBoYSA9IChhbHBoYSAvIDI1NSkudG9GaXhlZCgyKTtcblxuICB2YXIgaGV4Q29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMywgOSk7XG4gIHZhciByZ2JhQ29sb3IgPSBcInJnYmEoXCIgKyBjb252ZXJ0SGV4VG9SZ2IoaGV4Q29sb3IpICsgXCIsXCIgKyBhbHBoYSArIFwiKVwiO1xuXG4gIHJldHVybiByZ2JhQ29sb3I7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTGF5b3V0UHJvcHModHlwZSwgY29uZmlnLCBrZXkpIHtcbiAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDcwMFxuICBpZiAodHlwZW9mIGNvbmZpZ1trZXldID09IFwidW5kZWZpbmVkXCIgfHwgY29uZmlnW2tleV0gPT0gbnVsbCkge1xuICAgIGRlbGV0ZSBjb25maWdba2V5XTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWNvbmZpZy5zdHlsZSkge1xuICAgIGNvbmZpZy5zdHlsZSA9IHt9O1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgIGNvbmZpZy5hbmltYXRpb24gPSB7fTtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSA9IFwiXCI7XG4gIH1cblxuICBpZiAoIWNvbmZpZy5hdHRyaWJ1dGVzKVxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzID0ge307XG5cbiAgaWYgKCFjb25maWcuc3R5bGUuY2xhc3NOYW1lKVxuICAgIGNvbmZpZy5zdHlsZS5jbGFzc05hbWUgPSBcIlwiO1xuXG4gIGlmICgoa2V5ID09IFwib25DbGlja1wiIHx8IGtleSA9PSBcIm9uQ2xpY2tFdmVudFwiKSkge1xuICAgIGlmKCFpc01vYmlsZSAmJiAhY29uZmlnLmN1cnNvclR5cGUpe1xuICAgICAgY29uZmlnLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH1cbiAgfVxuICBpZihrZXkgPT0gXCJjdXJzb3JUeXBlXCIpIHtcbiAgICBjb25maWcuc3R5bGUuY3Vyc29yID0gY29uZmlnLmN1cnNvclR5cGU7XG4gIH1cbiAgaWYgKGtleSA9PSBcInRleHRTaXplXCIpXG4gICAgY29uZmlnLnN0eWxlLmZvbnRTaXplID0gY29uZmlnLnRleHRTaXplICsgJ3B4JztcbiAgaWYgKGtleSA9PSAnZm9udFNpemUnKVxuICAgIGNvbmZpZy5zdHlsZS5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZSArICdweCc7XG4gIFxuICBpZiAoa2V5ID09ICd1cmwnKVxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzLnNyYyA9IGNvbmZpZy51cmxcbiAgICBcbiAgLyppZiAoa2V5ID09IFwiaW1hZ2VVcmxcIil7XG4gICAgbGV0IGltYWdlVXJsID0gY29uZmlnLmltYWdlVXJsO1xuICAgIFxuICAgIGlmKGNvbmZpZy5yYXdEYXRhKSB7XG4gICAgICAvLyBEbyBub3RoaW5nXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZW1wID0gaW1hZ2VVcmwuc3BsaXQoJy4nKTtcbiAgICAgIGxldCBleHQgPSAnJztcbiAgICAgIGlmKHRlbXAgJiYgdGVtcC5sZW5ndGggPiAwKVxuICAgICAgICBleHQgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV07XG4gICAgICBcbiAgICAgIGxldCBleHRzID0gW1wianBlZ1wiLCBcImpwZ1wiLCBcInBuZ1wiLCBcImJtcFwiLCBcInN2Z1wiLCBcImdpZlwiXTtcbiAgICAgIGV4dCA9IGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZighZXh0cy5pbmNsdWRlcyhleHQpKSB7XG4gICAgICAgIGltYWdlVXJsICs9ICcucG5nJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWcuYXR0cmlidXRlcy5zcmMgPSBpbWFnZVVybDtcbiAgfSovXG5cbiAgaWYgKGtleSA9PSBcImJhY2tncm91bmRDb2xvclwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcnNlQ29sb3JzKGNvbmZpZy5iYWNrZ3JvdW5kQ29sb3IpO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImJhY2tncm91bmRcIikge1xuICAgIGNvbmZpZy5zdHlsZS5iYWNrZ3JvdW5kID0gY29uZmlnLmJhY2tncm91bmQ7XG4gIH1cbiAgaWYgKGtleSA9PSBcImJhY2tncm91bmREcmF3YWJsZVwiKSB7XG4gICAgY29uZmlnLnN0eWxlW1wiYmFja2dyb3VuZC1pbWFnZVwiXSA9IFwidXJsKCdcIitjb25maWcuYmFja2dyb3VuZERyYXdhYmxlK1wiJylcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJjb2xvclwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmNvbG9yID0gcGFyc2VDb2xvcnMoY29uZmlnLmNvbG9yKTtcbiAgfVxuXG4gIGlmKGtleSA9PSBcInBvc2l0aW9uXCIpIHtcbiAgICBjb25maWcuc3R5bGUucG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XG4gIH1cblxuICBpZihrZXkgPT0gXCJib3R0b21GaXhlZFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmJvdHRvbSA9IGNvbmZpZy5ib3R0b21GaXhlZDtcbiAgfVxuICBpZihrZXkgPT0gXCJ0b3BGaXhlZFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRvcCA9IGNvbmZpZy50b3BGaXhlZDtcbiAgfVxuXG4gIGlmKGtleSA9PSBcImF1dG9mb2N1c1wiKXtcbiAgICBpZihjb25maWcuYXV0b2ZvY3VzKXtcbiAgICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wiYXV0b2ZvY3VzXCJdID0gXCJhdXRvZm9jdXNcIjsgIFxuICAgIH1cbiAgfVxuICBpZihrZXk9PVwiZm9jdXNcIikge1xuICAgIGlmIChjb25maWcuZm9jdXMgJiYgY29uZmlnLmlkKXtcbiAgICAgIHZhciBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuaWQpO1xuICAgICAgaWYgKGRvYyl7XG4gICAgICAgIGRvYy5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSA9PSBcImNvcm5lclJhZGl1c1wiKSB7XG4gICAgY29uZmlnLnN0eWxlLmJvcmRlclJhZGl1cyA9IGNvbmZpZy5jb3JuZXJSYWRpdXMgKyBcInB4XCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYWxwaGFcIikge1xuICAgIGNvbmZpZy5zdHlsZS5vcGFjaXR5ID0gY29uZmlnW2tleV07XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9hbHBoYVwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi5vcGFjaXR5ID0gY29uZmlnW2tleV07XG4gIH1cblxuICBpZiAoa2V5ID09IFwiZm9udEZhbWlseVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmZvbnRGYW1pbHkgPSBjb25maWcuZm9udEZhbWlseTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gJ3R5cGVmYWNlJykge1xuICAgIHN3aXRjaChjb25maWcudHlwZWZhY2Upe1xuICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgY29uZmlnLnN0eWxlLmZvbnRXZWlnaHQgPSA0MDA7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvbGQnOlxuICAgICAgICBjb25maWcuc3R5bGUuZm9udFdlaWdodCA9IDcwMDtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaXRhbGljJzpcbiAgICAgICAgY29uZmlnLnN0eWxlLmZvbnRTdHlsZSA9ICdpdGFsaWMnO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib2xkX2l0YWxpYyc6XG4gICAgICAgIGNvbmZpZy5zdHlsZS5mb250V2VpZ2h0ID0gNzAwO1xuICAgICAgICBjb25maWcuc3R5bGUuZm9udFN0eWxlID0gJ2l0YWxpYyc7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3VuZGVybGluZSc6XG4gICAgICAgIGNvbmZpZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICd1bmRlcmxpbmUnO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSA9PSBcImZvbnRTdHlsZVwiKSB7XG4gICAgbGV0IG1hdGNoID0gY29uZmlnLmZvbnRTdHlsZS5tYXRjaCgvWy8tXS8pO1xuICAgIGxldCBmb250TmFtZSA9IG1hdGNoID8gY29uZmlnLmZvbnRTdHlsZS5zbGljZSgwLCBtYXRjaC5pbmRleCkgOiBjb25maWcuZm9udFN0eWxlO1xuICAgIGNvbmZpZy5zdHlsZS5mb250RmFtaWx5ID0gZm9udE5hbWU7XG5cbiAgICBpZiAoIW1hdGNoKVxuICAgICAgcmV0dXJuO1xuXG4gICAgbGV0IHR5cGUgPSBjb25maWcuZm9udFN0eWxlLnNsaWNlKG1hdGNoLmluZGV4ICsgMSk7XG4gICAgdHlwZSA9IHR5cGUucmVwbGFjZSgvWy0vXS9nLCAnJyk7XG4gICAgdHlwZSAgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodHlwZS5pbmRleE9mKCdpdGFsaWMnKSAhPSAtMSlcbiAgICAgIGNvbmZpZy5zdHlsZS5mb250U3R5bGUgPSAnaXRhbGljJztcblxuICAgIGxldCBmb250V2VpZ2h0ID0gMDtcblxuICAgIGlmICh0eXBlLmluZGV4T2YoJ2V4dHJhbGlnaHQnKSAhPSAtMSlcbiAgICAgIGZvbnRXZWlnaHQgPSAyMDA7XG4gICAgZWxzZSBpZiAodHlwZS5pbmRleE9mKCdsaWdodCcpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDMwMDtcbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ3JlZ3VsYXInKSAhPSAtMSB8fCB0eXBlLmluZGV4T2YoJ2Jvb2snKSAhPSAtMSlcbiAgICAgIGZvbnRXZWlnaHQgPSA0MDA7XG4gICAgZWxzZSBpZiAodHlwZS5pbmRleE9mKCdzZW1pYm9sZCcpICE9IC0xIHx8IHR5cGUuaW5kZXhPZignbWVkaXVtJykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gNTAwO1xuICAgIGVsc2UgaWYgKHR5cGUuaW5kZXhPZignYm9sZCcpICE9IC0xIHx8IHR5cGUuaW5kZXhPZignaGVhdnknKSAhPSAtMSlcbiAgICAgIGZvbnRXZWlnaHQgPSA3MDA7XG4gICAgZWxzZSBpZiAodHlwZS5pbmRleE9mKCdibGFjaycpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDkwMDtcblxuICAgIGlmKGZvbnRXZWlnaHQgPiAwKVxuICAgICAgY29uZmlnLnN0eWxlLmZvbnRXZWlnaHQgPSBmb250V2VpZ2h0O1xuICB9XG5cbiAgaWYgKGtleSA9PSAndmlzaWJpbGl0eScpIHtcbiAgICBsZXQgdmlzaWJpbGl0eSA9IGNvbmZpZy52aXNpYmlsaXR5O1xuICAgIGlmICh2aXNpYmlsaXR5ID09ICdpbnZpc2libGUnKVxuICAgICAgY29uZmlnLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIGVsc2UgaWYgKHZpc2liaWxpdHkgPT0gJ2dvbmUnKVxuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlbHNlIHtcbiAgICAgIGNvbmZpZy5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gICAgfVxuICB9IFxuXG4gIGlmIChrZXkgPT0gJ2V4cGFuZCcpIHtcbiAgICBsZXQgdmlzaWJpbGl0eSA9IGNvbmZpZy5leHBhbmQgKyAnJztcbiAgICBpZiAodmlzaWJpbGl0eSA9PSAndHJ1ZScpe1xuICAgICAgY29uZmlnLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICB9XG4gICAgZWxzZVxuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzdHJva2VcIikge1xuICAgIGxldCB2YWx1ZXMgPSBjb25maWcuc3Ryb2tlLnNwbGl0KFwiLFwiKTtcblxuICAgIGlmKHZhbHVlcy5sZW5ndGggPT0gMilcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXIgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgIGVsc2UgaWYodmFsdWVzLmxlbmd0aCA9PSAzKXtcbiAgICAgIGlmICh2YWx1ZXNbMl0gPT0gXCJyYmxcIil7XG4gICAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJCb3R0b20gPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyTGVmdCA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJSaWdodCA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh2YWx1ZXNbMl0gPT0gXCJiXCIpe1xuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyQm90dG9tID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlciA9IHZhbHVlc1swXSArIFwicHggXCIgKyB2YWx1ZXNbMV0gKyBcIiBcIiArIHZhbHVlc1syXTtcbiAgICB9XG4gICAgXG4gIH1cblxuICBpZiAoa2V5ID09IFwic3Ryb2tlVG9wXCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZVRvcC5zcGxpdChcIixcIik7XG4gICAgXG4gICAgaWYodmFsdWVzLmxlbmd0aCA9PSAyKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlclRvcCA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgZWxzZSBpZih2YWx1ZXMubGVuZ3RoID09IDMpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyVG9wID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInN0cm9rZVJpZ2h0XCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZVJpZ2h0LnNwbGl0KFwiLFwiKTtcbiAgICBcbiAgICBpZih2YWx1ZXMubGVuZ3RoID09IDIpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyUmlnaHQgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgIGVsc2UgaWYodmFsdWVzLmxlbmd0aCA9PSAzKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInN0cm9rZUJvdHRvbVwiKSB7XG4gICAgbGV0IHZhbHVlcyA9IGNvbmZpZy5zdHJva2VCb3R0b20uc3BsaXQoXCIsXCIpO1xuICAgIFxuICAgIGlmKHZhbHVlcy5sZW5ndGggPT0gMilcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJCb3R0b20gPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgIGVsc2UgaWYodmFsdWVzLmxlbmd0aCA9PSAzKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckJvdHRvbSA9IHZhbHVlc1swXSArIFwicHggXCIgKyB2YWx1ZXNbMV0gKyBcIiBcIiArIHZhbHVlc1syXTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzdHJva2VMZWZ0XCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZUxlZnQuc3BsaXQoXCIsXCIpO1xuICAgIFxuICAgIGlmKHZhbHVlcy5sZW5ndGggPT0gMilcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJMZWZ0ID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICBlbHNlIGlmKHZhbHVlcy5sZW5ndGggPT0gMylcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJMZWZ0ID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInRyYW5zbGF0aW9uWVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInRyYW5zbGF0ZVkoXCIgKyBjb25maWdba2V5XSArIFwicHgpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfdHJhbnNsYXRpb25ZXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInRyYW5zbGF0ZVkoXCIgKyBjb25maWdba2V5XSArIFwicHgpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInRyYW5zbGF0aW9uWFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInRyYW5zbGF0ZVgoXCIgKyBjb25maWdba2V5XSArIFwicHgpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfdHJhbnNsYXRpb25YXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInRyYW5zbGF0ZVgoXCIgKyBjb25maWdba2V5XSArIFwicHgpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInNjYWxlWFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInNjYWxlWChcIiArIGNvbmZpZ1trZXldICsgXCIpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfc2NhbGVYXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInNjYWxlWChcIiArIGNvbmZpZ1trZXldICsgXCIpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInNjYWxlWVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInNjYWxlWShcIiArIGNvbmZpZ1trZXldICsgXCIpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfc2NhbGVZXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInNjYWxlWShcIiArIGNvbmZpZ1trZXldICsgXCIpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInJvdGF0aW9uXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwicm90YXRlKFwiICsgY29uZmlnW2tleV0gKyBcImRlZykgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9yb3RhdGlvblwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gKz0gXCJyb3RhdGUoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJyb3RhdGlvblhcIikge1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gKz0gXCJyb3RhdGVYKFwiICsgY29uZmlnW2tleV0gKyBcImRlZykgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9yb3RhdGlvblhcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwicm90YXRlWChcIiArIGNvbmZpZ1trZXldICsgXCJkZWcpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInJvdGF0aW9uWVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInJvdGF0ZVkoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3JvdGF0aW9uWVwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gKz0gXCJyb3RhdGVZKFwiICsgY29uZmlnW2tleV0gKyBcImRlZykgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwidHJhbnNsYXRpb25aXCIpIHtcbiAgICB2YXIgdiA9IGNvbmZpZ1trZXldO1xuICAgIGNvbmZpZy5zdHlsZVtcIi13ZWJraXQtYm94LXNoYWRvd1wiXSA9IFwiMCAwIFwiK3YudG9TdHJpbmcoKStcInB4IHJnYmEoMCwwLDAsIC4xKVwiO1xuICAgIGNvbmZpZy5zdHlsZVtcIi1tb3otYm94LXNoYWRvd1wiXT0gXCIwIDAgXCIrdi50b1N0cmluZygpK1wicHggcmdiYSgwLDAsMCwgLjEpXCI7XG4gICAgY29uZmlnLnN0eWxlW1wiYm94LXNoYWRvd1wiXT0gIFwiMCAwIFwiK3YudG9TdHJpbmcoKStcInB4IHJnYmEoMCwwLDAsIC4xKVwiO1xuICAgIFxuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfZHVyYXRpb25cIiAmJiAhaXNOYU4oY29uZmlnW2tleV0pKSB7XG4gICAgY29uc3Qgc3VmZml4ID0gY29uZmlnLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA/IChcIiBcIiArIGNvbmZpZy50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24pIDogXCJcIjtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zaXRpb24gPSBjb25maWdba2V5XSArICdtcyBhbGwnICsgc3VmZml4O1xuICB9XG4gIFxuICBpZiAodHlwZSA9PSBcInRleHRWaWV3XCIgJiYga2V5ID09IFwiZ3Jhdml0eVwiICYmIGNvbmZpZy5ncmF2aXR5KSB7XG4gICAgY29uZmlnLnN0eWxlLnRleHRBbGlnbiA9IGNvbmZpZy5ncmF2aXR5O1xuICAgIGlmIChjb25maWcuZ3Jhdml0eSA9PSBcImNlbnRlcl92ZXJ0aWNhbFwiKSB7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbGlnbi1pdGVtc1wiXSA9IFwiY2VudGVyXCI7XG4gICAgICBjb25maWcuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmdyYXZpdHkgPT0gXCJjZW50ZXJfaG9yaXpvbnRhbFwiKSB7XG4gICAgICBjb25maWcuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wianVzdGlmeS1jb250ZW50XCJdID0gXCJjZW50ZXJcIjtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5ncmF2aXR5ID09IFwiY2VudGVyXCIpIHtcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbGlnbi1pdGVtc1wiXSA9IFwiY2VudGVyXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJqdXN0aWZ5LWNvbnRlbnRcIl0gPSBcImNlbnRlclwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb25maWcuZ3Jhdml0eSA9PSBcImNlbnRlclwiKXtcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbGlnbi1pdGVtc1wiXSA9IFwiY2VudGVyXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJqdXN0aWZ5LWNvbnRlbnRcIl0gPSBcImNlbnRlclwiO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZSA9PSBcImxpbmVhckxheW91dFwiICYmIGtleSA9PSBcImdyYXZpdHlcIiAmJiBjb25maWcuZ3Jhdml0eSl7XG4gICAgaWYgKGNvbmZpZy5tYXJnaW4gJiYgY29uZmlnLmdyYXZpdHk9PVwiY2VudGVyX3ZlcnRpY2FsXCIpe1xuICAgICAgdmFyIG1hcmdpbj1jb25maWcubWFyZ2luLnNwbGl0KFwiLFwiKTtcbiAgICAgIGlmIChjb25maWcud2lkdGggPT0gXCJtYXRjaF9wYXJlbnRcIil7XG4gICAgICAgICBjb25maWcuc3R5bGUud2lkdGg9XCJjYWxjKDEwMCUgLSBcIisocGFyc2VJbnQobWFyZ2luWzBdKStwYXJzZUludChtYXJnaW5bMl0pKS50b1N0cmluZygpK1wicHggKVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJoaW50XCIpe1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzLnBsYWNlaG9sZGVyID0gY29uZmlnLmhpbnQ7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiY29udGVudEVkaXRhYmxlXCIgJiYgY29uZmlnLmNvbnRlbnRFZGl0YWJsZSl7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXMuY29udGVudGVkaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJpZFwiKSB7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXMuaWQgPSBjb25maWcuaWQ7XG4gIH1cblxuXG4gIGlmIChrZXkgPT0gXCJncmFkaWVudFwiKSB7XG4gICAgdmFyIGdyYWRpZW50T2JqID1KU09OLnBhcnNlKGNvbmZpZy5ncmFkaWVudCk7XG4gICAgaWYgKGdyYWRpZW50T2JqLnR5cGUgPT0gXCJsaW5lYXJcIikge1xuICAgICAgdmFyIGFuZ2xlID0gZ3JhZGllbnRPYmouYW5nbGU7XG4gICAgICB2YXIgdmFsdWVzID0gZ3JhZGllbnRPYmoudmFsdWVzO1xuICAgICAgdmFyIGNvbG9ycyA9IHZhbHVlcy5qb2luKFwiLCBcIik7XG4gICAgICBjb25maWcuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gXCJsaW5lYXItZ3JhZGllbnQoXCIrYW5nbGUrXCJkZWcsIFwiK2NvbG9ycytcIilcIlxuICAgIH1cbiAgICAgZWxzZSB7XG4gICAgICB2YXIgdmFsdWVzID0gZ3JhZGllbnRPYmoudmFsdWVzO1xuICAgICAgdmFyIGNvbG9ycyA9IHZhbHVlcy5qb2luKFwiLCBcIik7XG4gICAgICBjb25maWcuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gXCJyYWRpYWwtZ3JhZGllbnQoXCIrY29sb3JzK1wiKVwiXG4gICAgIH1cbiAgfVxuXG5cbiAgaWYgKGtleSA9PSBcImlucHV0VHlwZVwiKSB7XG4gICAgdmFyIGlucHV0VHlwZSA9IFwidGV4dFwiO1xuICAgIGlmIChjb25maWcuaW5wdXRUeXBlID09IFwibnVtZXJpY1Bhc3N3b3JkXCIgfHwgY29uZmlnLmlucHV0VHlwZSA9PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgIGlmKGNvbmZpZy5pbnB1dFR5cGVJID09IDQgJiYgaXNNb2JpbGUpe1xuICAgICAgICBpbnB1dFR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgY29uZmlnLnN0eWxlW1wiLXdlYmtpdC10ZXh0LXNlY3VyaXR5XCJdID0gXCJkaXNjXCI7XG4gICAgICAgIGNvbmZpZy5zdHlsZVtcIi1tb3otdGV4dC1zZWN1cml0eVwiXSA9IFwiZGlzY1wiO1xuICAgICAgICBjb25maWcuc3R5bGVbXCJ0ZXh0LXNlY3VyaXR5XCJdID0gXCJkaXNjXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dFR5cGUgPSBcInBhc3N3b3JkXCJcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5pbnB1dFR5cGUgPT0gXCJkaXNhYmxlZFwiKSB7XG4gICAgICAgIGNvbmZpZy5hdHRyaWJ1dGVzLmRpc2FibGVkID0gJ2Rpc2FibGVkJ1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmlucHV0VHlwZSA9PSBcIm51bWVyaWNcIikge1xuICAgICAgICBpbnB1dFR5cGUgPSBcIm51bWJlclwiXG4gICAgfVxuICAgIGlmIChjb25maWcuc2VwYXJhdG9yKSB7XG4gICAgICBpbnB1dFR5cGUgPSBcInRleHRcIlxuICAgIH1cblxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzLnR5cGUgPSBpbnB1dFR5cGVcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJyb3RhdGVJbWFnZVwiKSB7XG4gICAgaWYoY29uZmlnLnJvdGF0ZUltYWdlKXtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1kdXJhdGlvblwiXSA9IFwiNHNcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cIl0gPSBcImxpbmVhclwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLWRlbGF5XCJdID0gXCIwc1wiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudFwiXSA9IFwiaW5maW5pdGVcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1kaXJlY3Rpb25cIl0gPSBcIm5vcm1hbFwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLWZpbGwtbW9kZVwiXSA9IFwibm9uZVwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLXBsYXktc3RhdGVcIl0gPSBcInJ1bm5pbmdcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1uYW1lXCJdID0gXCJyb3RhdGlvblwiO1xuXG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSA9PSBcInBhdHRlcm5cIikge1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wiZGF0YS1wYXR0ZXJuXCJdID0gY29uZmlnLnBhdHRlcm47XG4gIH1cbiAgaWYoa2V5ID09IFwiaW5wdXRUeXBlSVwiKXtcbiAgICBpZihjb25maWcuaW5wdXRUeXBlSSA9PSA0KXtcbiAgICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wiaW5wdXRtb2RlXCJdID0gXCJudW1lcmljXCI7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgaWYgKGtleSA9PSBcInNlcGFyYXRvclwiKSB7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJzZXBhcmF0b3JcIl0gPSBjb25maWcuc2VwYXJhdG9yO1xuICB9XG4gIGlmIChrZXkgPT0gXCJzZXBhcmF0b3JSZXBlYXRcIikge1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wic2VwYXJhdG9yUmVwZWF0XCJdID0gY29uZmlnLnNlcGFyYXRvclJlcGVhdDtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJteUF0dHJcIikge1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wibXlBdHRyXCJdID0gY29uZmlnLm15QXR0cjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzaGFkb3dcIikge1xuICAgIHZhciBzaGFkb3dWYWx1ZXMgPSBjb25maWcuc2hhZG93LnNwbGl0KGNvbmZpZy5zaGFkb3dTZXBhcmF0b3IgfHwgJywnKTtcbiAgICB2YXIgc2hhZG93Qmx1ciA9IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMl0pKTtcbiAgICB2YXIgc2hhZG93U3ByZWFkID0gcldTKGNTKHNoYWRvd1ZhbHVlc1szXSkpO1xuICAgIHZhciBzaGFkb3dPcGFjaXR5ID0gcldTKGNTKHNoYWRvd1ZhbHVlc1s1XSkpO1xuICAgIHZhciBzaGFkb3dPZmZzZXQgPSB7XG4gICAgICAgIHg6IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMF0pKSxcbiAgICAgICAgeTogcldTKGNTKHNoYWRvd1ZhbHVlc1sxXSkpXG4gICAgICB9O1xuXG4gICAgdmFyIHNoYWRvd0NvbG9yID0gY29udmVydENvbG9yVG9SZ2JhKHNoYWRvd1ZhbHVlc1s0XSk7XG4gICAgdmFyIHNoYWRvd1R5cGUgPSBjb25maWcuc2hhZG93VHlwZSA/IGAke2NvbmZpZy5zaGFkb3dUeXBlfSBgIDogJydcblxuICAgIGNvbmZpZ1tcInN0eWxlXCJdW1wiYm94LXNoYWRvd1wiXSA9IHNoYWRvd1R5cGUgKyBwYXJzZUludChzaGFkb3dPZmZzZXQueCkgKyBcInB4IFwiICsgcGFyc2VJbnQoc2hhZG93T2Zmc2V0LnkpICsgXCJweCBcIiArIHBhcnNlSW50KHNoYWRvd0JsdXIpICsgXCJweCBcIiArIHBhcnNlSW50KHNoYWRvd1NwcmVhZCkgKyBcInB4IHJnYmEoXCIgKyBzaGFkb3dDb2xvci5yICsgXCIsIFwiICsgIHNoYWRvd0NvbG9yLmcgKyBcIiwgXCIgKyAgc2hhZG93Q29sb3IuYiArIFwiLCBcIiArICBzaGFkb3dDb2xvci5hICsgXCIpXCIgO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImxpbmVIZWlnaHRcIilcbiAgICBjb25maWcuc3R5bGUubGluZUhlaWdodCA9IGNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChrZXkgPT0gXCJvYmplY3RGaXRcIilcbiAgICBjb25maWcuc3R5bGUub2JqZWN0Rml0ID0gY29uZmlnLm9iamVjdEZpdDtcblxuICBpZiAoa2V5ID09IFwiY2xpY2thYmxlXCIpIHtcbiAgICBjb25maWcuc3R5bGUucG9pbnRlckV2ZW50cyA9IGNvbmZpZy5jbGlja2FibGUgPyBcImF1dG9cIiA6IFwibm9uZVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRDb2xvclRvUmdiYShjb2xvcikge1xuICBjb2xvciA9IHJXUyhjUyhjb2xvcikpO1xuXG4gIHZhciB2YWx1ZXM7XG4gIHZhciBhbHBoYSA9IFwiMS4wMFwiO1xuXG4gIGlmIChjb2xvci5sZW5ndGggPj0gOCkge1xuICAgIGFscGhhID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gICAgYWxwaGEgPSAoYWxwaGEgLyAyNTUpLnRvRml4ZWQoMik7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMywgOSk7XG4gIH0gZWxzZSB7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMSwgY29sb3IubGVuZ3RoKTtcbiAgfVxuXG4gIGNvbG9yID0gY29udmVydEhleFRvUmdiKHJXUyhjb2xvcikpO1xuICB2YWx1ZXMgPSBjb2xvci5zcGxpdCgnLCcpO1xuXG4gIHJldHVybiB7XG4gICAgcjogcGFyc2VJbnQocldTKHZhbHVlc1swXSkpLFxuICAgIGc6IHBhcnNlSW50KHJXUyh2YWx1ZXNbMV0pKSxcbiAgICBiOiBwYXJzZUludChyV1ModmFsdWVzWzJdKSksXG4gICAgYTogcGFyc2VGbG9hdChhbHBoYSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udmVydEhleFRvUmdiKGhleCkge1xuICB2YXIgciA9IChwYXJzZUludChoZXguc3Vic3RyaW5nKDAsIDIpLCAxNikpLnRvRml4ZWQoMik7XG4gIHZhciBnID0gKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMiwgNCksIDE2KSkudG9GaXhlZCgyKTtcbiAgdmFyIGIgPSAocGFyc2VJbnQoaGV4LnN1YnN0cmluZyg0LCA2KSwgMTYpKS50b0ZpeGVkKDIpO1xuXG4gIHJldHVybiByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiO1xufVxuXG5mdW5jdGlvbiBjUyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyB2YWx1ZSArICcnIDogXCJcIjtcbn1cblxuZnVuY3Rpb24gcldTKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8gL2csICcnKTtcbn1cblxuZnVuY3Rpb24gc2V0RGVmYXVsdHModHlwZSwgY29uZmlnKSB7XG4gIGlmICh0eXBlID09IFwibGluZWFyTGF5b3V0XCIpIHtcbiAgICBjb25maWcub3JpZW50YXRpb24gPSBjb25maWcub3JpZW50YXRpb247XG4gIH1cbn1cbmZ1bmN0aW9uIHRoaXNfaW5saW5lQW5pbWF0aW9uKGNvbmZpZykge1xuICB2YXIgY29uPW1vZGlmeVRyYW5zbGF0aW9uKGNvbmZpZyk7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uLm5hbWUpO1xufVxuZnVuY3Rpb24gbW9kaWZ5VHJhbnNsYXRpb24oY29uZmlnKXtcbiAgdmFyIHggPSBjb25maWcueCB8fCBcIjBcIjtcbiAgdmFyIHkgPSBjb25maWcueSB8fCBcIjBcIjtcbiAgdmFyIGFuaW1hdGlvbkFycmF5ID0gSlNPTi5wYXJzZShjb25maWcuaW5saW5lQW5pbWF0aW9uKTtcbiAgdmFyIGFuaW1hdGlvbkFycmF5ID0gYW5pbWF0aW9uQXJyYXkubWFwKGZ1bmN0aW9uKGEpe1xuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJmcm9tWFwiKSl7XG4gICAgICBhLmZyb21YID0gcGFyc2VJbnQoYS5mcm9tWCkgKyBwYXJzZUludCh4KSArICcnO1xuICAgICAgaWYoIWEuaGFzT3duUHJvcGVydHkoXCJ0b1hcIikpe1xuICAgICAgICBhLnRvWCA9IDAgKyBwYXJzZUludCh4KSArICcnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihhLmhhc093blByb3BlcnR5KFwidG9YXCIpKXtcbiAgICAgIGEudG9YID0gcGFyc2VJbnQoYS50b1gpICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICB9XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcImZyb21ZXCIpKXtcbiAgICAgIGEuZnJvbVkgPSBwYXJzZUludChhLmZyb21ZKSArIHBhcnNlSW50KHkpICsgJyc7XG4gICAgICBpZighYS5oYXNPd25Qcm9wZXJ0eShcInRvWVwiKSl7XG4gICAgICAgIGEudG9ZID0gMCArIHBhcnNlSW50KHkpICsgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJ0b1lcIikpe1xuICAgICAgYS50b1kgPSBwYXJzZUludChhLnRvWSkgKyBwYXJzZUludCh5KSArICcnO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfSlcbiAgcmV0dXJuIChhbmltYXRpb25BcnJheSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0eXBlLCBjb25maWcsIGdldFNldFR5cGUpIHtcbiAgY29uZmlnID0gZmxhdHRlbk9iamVjdChjb25maWcpO1xuICBzZXREZWZhdWx0cyh0eXBlLCBjb25maWcpO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGNvbmZpZy5zdHlsZSAmJiBjb25maWcuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSAmJiBrZXlzW2ldID09PSAnZ3Jhdml0eScpICB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcGFyc2VMYXlvdXRQcm9wcyh0eXBlLCBjb25maWcsIGtleXNbaV0pO1xuICB9XG5cbiAgY29uZmlnLnRyYW5zaXRpb24gPSBbXG4gICAgU3RyaW5nKGNvbmZpZy5hX2R1cmF0aW9uIHx8IDApICtcIm1zXCIsXG4gICAgXCJhbGxcIixcbiAgICBjb25maWcudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXG4gIF1cbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oXCIgXCIpO1xuXG4gIGlmIChjb25maWcuc3R5bGUudHJhbnNmb3JtID09IFwiXCIpIHtcbiAgICBkZWxldGUgY29uZmlnLnN0eWxlLnRyYW5zZm9ybTtcbiAgfVxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiaW5saW5lQW5pbWF0aW9uXCIpKSB7XG4gICAgdGhpc19pbmxpbmVBbmltYXRpb24oY29uZmlnKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59IiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4gKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbiAqXG4gKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiAqIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4gKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4gKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuICogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4gKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiAqIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4gKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuICovXG5cbi8qXG4gVXNlZCB0byBpbml0aWFsaXplIGRlZmF1bHRzIGZvciB3aW5kb3cgZnVuY2lvbnMgYW5kIHZhcmlhYmxlcy5cbiovXG5jb25zdCB7IG1lcmdlIH0gPSByZXF1aXJlKCcuL2hlbHBlcicpO1xud2luZG93LlByZXN0b1VJID0gcmVxdWlyZShcIi4vUHJlc3RvVUlJbnRlcmZhY2VcIik7XG5cbmNvbnN0IGdldEN1cnJUaW1lID0gKCkgPT4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxuXG4vLyB3aW5kb3cuX19PUyA9IGdldE9TKClcbmlmKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKXtcbiAgICB2YXIgZ2V0U2NyZWVuRGV0YWlscyA9IGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBkZXRhaWxzID0gSlNPTi5wYXJzZShBbmRyb2lkLmdldFNjcmVlbkRpbWVuc2lvbnMoKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JlZW5fd2lkdGg6IGRldGFpbHMud2lkdGggKyBcIlwiLFxuICAgICAgICAgICAgc2NyZWVuX2hlaWdodDogZGV0YWlscy5oZWlnaHQgKyBcIlwiXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcImVycm9yIGluIGdldHR0aW5nIHNjcmVlbiBkaW1lbnNpb25zLCBzZXR0aW5nIGRlZmF1bHQgdmFsdWVzXCIsIGVycik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNjcmVlbl93aWR0aDogXCIxMDgwXCIsXG4gICAgICAgICAgICAgICAgc2NyZWVuX2hlaWdodDogXCIxOTIwXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTID0gZ2V0U2NyZWVuRGV0YWlscygpO1xufVxuXG5pZiAod2luZG93Ll9fT1MgPT0gXCJXRUJcIikge1xuICAgIHdpbmRvdy5BbmRyb2lkID0gcmVxdWlyZShcIi4vV0VCL0FuZHJvaWRJbnRlcmZhY2VcIilcbiAgICB3aW5kb3cuSkJyaWRnZSA9IHJlcXVpcmUoXCIuL1dFQi9KQnJpZGdlSW50ZXJmYWNlXCIpXG59IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiSU9TXCIpIHtcbiAgICB3aW5kb3cuQW5kcm9pZCA9IHJlcXVpcmUoXCIuL0lPUy9BbmRyb2lkSW50ZXJmYWNlXCIpXG4gICAgd2luZG93LkpCcmlkZ2UgPSBtZXJnZSh3aW5kb3cuSkJyaWRnZSwge30pXG59XG5cbmlmICh3aW5kb3cuX19ERVZJQ0VfREVUQUlMUyAmJiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5oYXNPd25Qcm9wZXJ0eShcInNjcmVlbl93aWR0aFwiKSkge1xuICAgIHdpbmRvdy5fX1dJRFRIID0gd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuc2NyZWVuX3dpZHRoO1xufSBlbHNlIHtcbiAgICB3aW5kb3cuX19XSURUSCA9IFwiMTA4MFwiO1xufVxuXG5pZiAod2luZG93Ll9fREVWSUNFX0RFVEFJTFMgJiYgd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuaGFzT3duUHJvcGVydHkoXCJzY3JlZW5faGVpZ2h0XCIpKSB7XG4gICAgd2luZG93Ll9fSEVJR0hUID0gd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuc2NyZWVuX2hlaWdodDtcbn0gZWxzZSB7XG4gICAgd2luZG93Ll9fSEVJR0hUID0gXCIxOTIwXCI7XG59XG5cbmNvbnN0IGd1aWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSlcblxuLy9JbnRpYWxpemluZyBkZWZhdWx0c1xuaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpIHtcbiAgICAvKiBDb21wb25lbnRzICovXG4gICAgd2luZG93Ll9fQ09NX0VWRU5UID0gZmFsc2VcbiAgICB3aW5kb3cuX19DT01fUkVOREVSRUQgPSB7XG4gICAgICAgIFNXSVRDSF9HTE9CQUw6IGZhbHNlLFxuICAgICAgICBEUlA6IHt9LFxuICAgICAgICBEU0I6IHt9LFxuICAgICAgICBEQjoge30sXG4gICAgICAgIE5BVkJBUjoge31cbiAgICB9XG5cbiAgICB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAgPSB7XG4gICAgICAgIFdSQVBQRVI6ICdQRENfY29tX3dyYXBwZXInLFxuICAgICAgICBOQVZCQVI6ICdQRENfY29tX25hdmJhcicsXG4gICAgICAgIE5BVkJBUl9JVEVNOiAnUERDX2NvbV9uYXZiYXJfaXRlbScsXG4gICAgICAgIE5BVkJBUl9JVEVNX1dJVEhfU1VCOiAnUERDX2NvbV9uYXZiYXJfaGFzX3N1YicsXG4gICAgICAgIE5BVkJBUl9TVUI6ICdQRENfY29tX25hdmJhcl9zdWInLFxuICAgICAgICBOQVZCQVJfU1VCX1JJR0hUOiAnUERDX2NvbV9uYXZiYXJfc3ViX3JpZ2h0JyxcbiAgICAgICAgTkFWQkFSX1NVQl9JVEVNOiAnUERDX2NvbV9uYXZiYXJfc3ViaXRlbScsXG4gICAgICAgIERSUDogJ1BEQ19jb21fZHJwJyxcbiAgICAgICAgRFJQX0JPRFk6ICdQRENfY29tX2RycF9ib2R5JyxcbiAgICAgICAgREI6ICdQRENfY29tX2RiJyxcbiAgICAgICAgREJfRlVMTF9CT0RZOiAnUERDX2NvbV9kYl9mdWxsX2JvZHknLFxuICAgICAgICBEQl9CT0RZOiAnUERDX2NvbV9kYl9ib2R5JyxcbiAgICAgICAgREJfT1BUSU9OUzogJ1BEQ19jb21fZGJfb3B0aW9ucycsXG4gICAgICAgIERCX09QVElPTjogJ1BEQ19jb21fZGJfb3B0aW9uJyxcbiAgICAgICAgRFNCOiAnUERDX2NvbV9kc2InLFxuICAgICAgICBEU0JfRlVMTF9CT0RZOiAnUERDX2NvbV9kc2JfZnVsbF9ib2R5JyxcbiAgICAgICAgRFNCX0JPRFk6ICdQRENfY29tX2RzYl9ib2R5JyxcbiAgICAgICAgRFNCX09QVElPTlM6ICdQRENfY29tX2RzYl9vcHRpb25zJyxcbiAgICAgICAgRFNCX09QVElPTjogJ1BEQ19jb21fZHNiX29wdGlvbicsXG4gICAgICAgIERTQl9TRUFSQ0hfV1JBUDogJ1BEQ19jb21fZHNiX3NlYXJjaF93cmFwJyxcbiAgICAgICAgRFNCX1NFQVJDSDogJ1BEQ19jb21fZHNiX3NlYXJjaCcsXG4gICAgICAgIFNXSVRDSDogJ1BEQ19jb21fc3dpdGNoJyxcbiAgICAgICAgU1dJVENIX0JPRFk6ICdQRENfY29tX3N3aXRjaF9ib2R5JyxcbiAgICAgICAgU1dJVENIX1NMSURFUjogJ1BEQ19jb21fc3dpdGNoX3NsaWRlcicsXG4gICAgICAgIEJUOiAnUERDX2NvbV9idCcsXG4gICAgICAgIEJUX0RJU0FCTEVEOiAnUERDX2NvbV9idF9kaXNhYmxlZCdcbiAgICB9XG4gICAgd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQID0ge1xuICAgICAgICBCRzogJyNmZmZmZmYnLFxuICAgICAgICBBQ1RJVkVfQkc6ICcjRUVGMUY4JyxcbiAgICAgICAgQUNUSVZFX0NPTE9SOiAncmdiKDUzLCA2NCwgODIpJyxcbiAgICAgICAgSU5BQ1RJVkVfQ09MT1I6ICdyZ2JhKDUzLCA2NCwgODIsIDAuNSknLFxuICAgICAgICBCT1JERVJfQ09MT1I6ICcjQTNBRkMyJyxcbiAgICAgICAgQUNUSVZFX0JPUkRFUl9DT0xPUjogJyM3MDc4ODYnLFxuICAgICAgICBTRUFSQ0hfQ09MT1I6ICcjZGRkZGRkJyxcbiAgICAgICAgSU5BQ1RJVkVfU1dJVENIOiAnI0I3REJCQycsXG4gICAgICAgIEFDVElWRV9TV0lUQ0g6ICcjMzZBRjQ3JyxcbiAgICAgICAgQlRfQk9SREVSX0NPTE9SOiAnIzE1ODVEOCcsXG4gICAgICAgIEJUX0JHX0NPTE9SOiAnIzE5OTFFQicsXG4gICAgICAgIEJUX0NPTE9SOiAnI2ZmZmZmZidcbiAgICB9XG4gICAgd2luZG93Ll9fQ09NX0FDVElWRSA9IHtcbiAgICAgICAgRFNCOiAnJyxcbiAgICAgICAgTkFWQkFSOiAnJyxcbiAgICAgICAgREI6ICcnXG4gICAgfVxuICAgIC8qIENvbXBvbmVudHMgRW5kICovXG5cbiAgICAvKiBNb2RhbCAqL1xuICAgIHdpbmRvdy5fX1NUWUxFX0lEID0gJ3N0eWxlXycgKyBndWlkXG4gICAgd2luZG93Ll9fUkVOREVSRURfS0VZRlJBTUVTID0gW11cbiAgICB3aW5kb3cuX19NT0RBTF9QUk9QUyA9IHt9XG4gICAgd2luZG93Ll9fQ09OVEVOVE1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbCdcbiAgICB3aW5kb3cuX19PUEVOTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLW9wZW4nXG4gICAgd2luZG93Ll9fQkFDS0RST1BNT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtYmFja2Ryb3AnXG4gICAgd2luZG93Ll9fRElTQUJMRURCQUNLRFJPUF9DTEFTUyA9ICdQRENfbW9kYWwtYmFja2Ryb3AtZGlzYWJsZWQnXG4gICAgd2luZG93Ll9fU0hPV05NT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtc2hvd24nXG4gICAgd2luZG93Ll9fRkFERU1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1mYWRlJ1xuICAgIHdpbmRvdy5fX1NMSURFTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLXNsaWRlJ1xuICAgIC8qIE1vZGFsIEVuZCAqL1xuXG4gICAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTKSAmJlxuICAgICAgICAgICAgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fRElTQUJMRURCQUNLRFJPUF9DTEFTUylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUod2luZG93Ll9fT1BFTk1PREFMX0NMQVNTKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHdpbmRvdy5fX1NIT1dOTU9EQUxfQ0xBU1MpO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgICAgICAgICBpZCA9IGlkLnJlcGxhY2Uod2luZG93Ll9fQkFDS0RST1BNT0RBTF9DTEFTUyArICdfJywgJycpO1xuXG4gICAgICAgICAgICBsZXQgdmlldyA9IF9fVklFV1NbaWRdO1xuICAgICAgICAgICAgaWYgKHZpZXcgJiYgdmlldy5wcm9wcy5vbkRpc21pc3MgJiYgdHlwZW9mIHZpZXcucHJvcHMub25EaXNtaXNzID09XG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdmlldy5wcm9wcy5vbkRpc21pc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGR1aVNob3dTY3JlZW4gPSAoY2FsbGJhY2ssIHN0YXRlKSA9PiB7XG4gICAgICAgIGxldCBwb3B1cE1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicG9wdXBNZW51XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcHVwTWVudS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9wdXBNZW51W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgd2luZG93Ll9fZHVpU2hvd1NjcmVlbiA9IGR1aVNob3dTY3JlZW47XG5cbn0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJJT1NcIikge1xuICAgIHdpbmRvdy5fX0NPTE9SX0lOREVYID0gd2luZG93Ll9fQ09MT1JfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19GT05UX0lOREVYID0gd2luZG93Ll9fRk9OVF9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX1JFQ1RfSU5ERVggPSB3aW5kb3cuUkVDVF9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX1ZJRVdfSU5ERVggPSB3aW5kb3cuX19WSUVXX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fSU1BR0VfSU5ERVggPSB3aW5kb3cuX19JTUFHRV9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX1BPSU5UX0lOREVYID0gd2luZG93Ll9fUE9JTlRfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19MQVlFUl9JTkRFWCA9IHdpbmRvdy5fX0xBWUVSX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fU0laRV9JTkRFWCA9IHdpbmRvdy5fX1NJWkVfSU5ERVggfHwgMTtcbn0gZWxzZSB7XG4gICAgLy9UaGlzIHdvdWxkIGJlIGNhc2UgZm9yIGFuZHJvaWRcbiAgICB3aW5kb3cuX19GTl9NQVAgPSB7fTtcbiAgICB3aW5kb3cuX19BTExfT05DTElDS1MgPSBbXTtcbn1cblxud2luZG93Ll9fSUQgPSAxO1xud2luZG93Ll9fTk9ERV9JRCA9IDE7XG53aW5kb3cuX19TQ1JFRU5fSU5ERVggPSAtMTtcblxud2luZG93Ll9fUFJPWFlfRk4gPSB7fTtcbndpbmRvdy5fX0ZOX0lOREVYID0gMDtcbndpbmRvdy5fX1JPT1RTQ1JFRU4gPSBudWxsO1xud2luZG93Ll9fQ0FDSEVEX1NDUkVFTlMgPSB7fTtcbndpbmRvdy5fX1NDUkVFTl9DT1VOVCA9IDA7XG53aW5kb3cuX19DVVJSX1NDUkVFTiA9IG51bGw7XG53aW5kb3cuX19QUkVWX1NDUkVFTiA9IG51bGw7XG53aW5kb3cuX19BTklNQVRFX0RJUiA9IG51bGw7XG53aW5kb3cuX19TQ1JFRU5fU1RBQ0sgPSBbXTtcbndpbmRvdy5fX0xBU1RfRk5fQ0FMTEVEID0gbnVsbDtcbndpbmRvdy5fX1RIUk9UVEVMRURfQUNUSU9OUyA9IFtdO1xud2luZG93Ll9fVklFV1MgPSB7fTtcbndpbmRvdy5fX1ZJRVdfRElNRU5TSU9OUyA9IHt9O1xud2luZG93Ll9fT0JTRVJWRVJTID0ge307XG53aW5kb3cuWkluZGV4ID0gMDtcblxud2luZG93LmNhbGxVSUNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcmdzID0gKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBbYXJndW1lbnRzWzBdXSA6IEFycmF5LmFwcGx5KG51bGwsXG4gICAgICAgIGFyZ3VtZW50cykpO1xuICAgIHZhciBmTmFtZSA9IGFyZ3NbMF1cbiAgICB2YXIgZnVuY3Rpb25BcmdzID0gYXJncy5zbGljZSgxKVxuICAgIHZhciBjdXJyVGltZTtcbiAgICB2YXIgdGltZURpZmY7XG4gICAgXG4gICAgaWYgKHdpbmRvdy5fX0FMTF9PTkNMSUNLUyAmJiB3aW5kb3cuX19BTExfT05DTElDS1MuaW5kZXhPZihmTmFtZSkgIT0gLTEgJiYgYXJnc1syXSA9PSBcImZlZWRiYWNrXCIgJiYgSkJyaWRnZSAmJiBKQnJpZGdlLnNldENsaWNrRmVlZGJhY2spIHtcbiAgICAgICAgcmV0dXJuIEpCcmlkZ2Uuc2V0Q2xpY2tGZWVkYmFjayhhcmdzWzFdKTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93Ll9fVEhST1RURUxFRF9BQ1RJT05TICYmIHdpbmRvdy5fX1RIUk9UVEVMRURfQUNUSU9OUy5pbmRleE9mKGZOYW1lKSA9PSAtMSkge1xuICAgICAgICB3aW5kb3cuX19QUk9YWV9GTltmTmFtZV0uYXBwbHkobnVsbCwgZnVuY3Rpb25BcmdzKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5fX0xBU1RfRk5fQ0FMTEVEICYmIChmTmFtZSA9PSB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRC5mTmFtZSkpIHtcbiAgICAgICAgY3VyclRpbWUgPSBnZXRDdXJyVGltZSgpO1xuICAgICAgICB0aW1lRGlmZiA9IGN1cnJUaW1lIC0gd2luZG93Ll9fTEFTVF9GTl9DQUxMRUQudGltZVN0YW1wO1xuXG4gICAgICAgIGlmICh0aW1lRGlmZiA+PSAzMDApIHtcbiAgICAgICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW2ZOYW1lXS5hcHBseShudWxsLCBmdW5jdGlvbkFyZ3MpO1xuICAgICAgICAgICAgd2luZG93Ll9fTEFTVF9GTl9DQUxMRUQudGltZVN0YW1wID0gY3VyclRpbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJmdW5jdGlvbiB0aHJvdHRlbGVkXCIsIGZOYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInRpbWUgZGlmZlwiLCB0aW1lRGlmZik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuX19QUk9YWV9GTltmTmFtZV0uYXBwbHkobnVsbCwgZnVuY3Rpb25BcmdzKTtcbiAgICAgICAgd2luZG93Ll9fTEFTVF9GTl9DQUxMRUQgPSB7XG4gICAgICAgICAgICB0aW1lU3RhbXA6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBmTmFtZTogZk5hbWVcbiAgICAgICAgfVxuICAgIH1cbn07Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUtBOzs7Ozs7Ozs7Ozs7OztBQ2pEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7O0FDeEhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFFQTtBQUNBO0FBQ0EsU0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBRUE7QUFDQTtBQUNBLFdBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBT0E7QUFDQTtBQUNBLFdBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUVBO0FBQ0E7QUFDQTtBQUNBLGVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUNuT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7O0FDOUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBLFdBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLDhEQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7Ozs7QUMxS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFhQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBY0E7QUFDQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBNTFCQTtBQXkyQkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFaQTtBQWVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBOzs7Ozs7Ozs7Ozs7OztBQ3R3Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFUQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOTRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQTFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUxBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUxBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFUQTtBQVBBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBN0VBO0FBK0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7Ozs7Ozs7Ozs7Ozs7QUMzK0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDam9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxvQ0FrQkE7QUFDQTtBQUNBLGFBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQW9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
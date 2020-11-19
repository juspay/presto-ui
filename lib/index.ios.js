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

var helpers = {
	common: __webpack_require__(/*! ./common */ "./src/helpers/common/index.js")
};

if (false) {} else if (false) {} else {
	helpers.ios = __webpack_require__(/*! ./ios */ "./src/helpers/ios/index.js");
}

module.exports = helpers;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguaW9zLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL0lPUy9BbmRyb2lkSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy9zcmMvSU9TL1JlbmRlci5qcyIsIndlYnBhY2s6Ly8vc3JjL1ByZXN0b1VJSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jhc2VWaWV3LmpzIiwid2VicGFjazovLy9zcmMvY29tcHV0ZUlPUy5qcyIsIndlYnBhY2s6Ly8vc3JjL2RvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9kb21zL2lvcy5qcyIsIndlYnBhY2s6Ly8vc3JjL2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2NvbW1vbi9jYWxsYmFja01hcHBlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvaW9zL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvaW9zL2ZsYXR0ZW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2lvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvaW9zL3BhcnNlUGFyYW1zLmpzIiwid2VicGFjazovLy9zcmMvaW5pdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpbml0OiByZXF1aXJlKFwiLi9zcmMvaW5pdFwiKSxcblx0ZG9tcyA6IHJlcXVpcmUoXCIuL3NyYy9kb21zXCIpLFxuXHRoYW5kbGVyIDogcmVxdWlyZShcIi4vc3JjL2hhbmRsZXJcIiksXG5cdGhlbHBlcnMgOiByZXF1aXJlKFwiLi9zcmMvaGVscGVyc1wiKSxcblx0YmFzZVZpZXcgOiByZXF1aXJlKFwiLi9zcmMvYmFzZVZpZXdcIiksXG5cdGFuaW1hdGlvbnM6IHJlcXVpcmUoJy4vc3JjL2FuaW1hdGlvbnMnKSxcblx0Y2FsbGJhY2tNYXBwZXI6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcnMvY29tbW9uL2NhbGxiYWNrTWFwcGVyJyksXG5cdGdldE9TOiByZXF1aXJlKCcuL3NyYy9oZWxwZXInKS5nZXRPUyxcblx0cHJlc3RvTWVyZ2U6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcicpLm1lcmdlLFxuXHRwcmVzdG9DbG9uZTogcmVxdWlyZSgnLi9zcmMvaGVscGVyJykuY2xvbmVcbn0iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbmNvbnN0IHJlbmRlciA9IHJlcXVpcmUoJy4vUmVuZGVyJyk7XG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuLi9oZWxwZXInKTtcbmNvbnN0IHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi4vaGVscGVycycpLmlvcy5wYXJzZVBhcmFtcztcblxubGV0IHJvb3RpZDtcblxuZnVuY3Rpb24gY2xlYXJWaWV3RXh0ZXJuYWxzKHZpZXcpIHtcbiAgZGVsZXRlIHdpbmRvdy5fX1ZJRVdTW3ZpZXcucHJvcHMuaWRdO1xuICBkZWxldGUgd2luZG93Ll9fVklFV19ESU1FTlNJT05TW3ZpZXcucHJvcHMuaWRdO1xuICB2aWV3LmNoaWxkcmVuLmZvckVhY2goY2xlYXJWaWV3RXh0ZXJuYWxzKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2VyaWFsaXplYWJsZVZpZXcodmlldywgcmVjdXJzZSkge1xuICB2YXIgb2JqID0gcGFyc2VQYXJhbXModmlldy50eXBlLCBoZWxwZXIuY2xvbmUodmlldy5wcm9wcyxudWxsKSwgXCJzZXRcIik7XG4gIHZhciBuZXdWaWV3ID0ge307XG4gIG5ld1ZpZXcucHJvcHMgPSBvYmouY29uZmlnO1xuICBuZXdWaWV3LnR5cGUgPSBvYmoudHlwZVswXS50b1VwcGVyQ2FzZSgpICsgb2JqLnR5cGUuc3Vic3RyKDEsIG9iai50eXBlLmxlbmd0aCk7XG4gIGlmIChyZWN1cnNlKVxuICAgIG5ld1ZpZXcuY2hpbGRyZW4gPSB2aWV3LmNoaWxkcmVuLm1hcChnZXRTZXJpYWxpemVhYmxlVmlldyk7XG4gIGVsc2VcbiAgICBuZXdWaWV3LmNoaWxkcmVuID0gW107XG4gIHJldHVybiBuZXdWaWV3O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0U2NyZWVuRGltZW5zaW9uczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB3aWR0aDogd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuc2NyZWVuX3dpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5zY3JlZW5faGVpZ2h0XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVjb21wdXRlVmlldzogZnVuY3Rpb24gKHZpZXcpIHtcbiAgICBpZiAodmlldy50eXBlLmluZGV4T2YoXCJzY3JvbGxcIikgIT0gLTEpIHtcbiAgICAgIHJlbmRlci5pbmZsYXRlKHZpZXcpO1xuICAgIH1cbiAgICByZW5kZXIuY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdmlldy5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgcmVuZGVyLmluZmxhdGUoY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgfSxcblxuICByZWNvbXB1dGU6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByb290dmlldyA9IHdpbmRvdy5fX1ZJRVdTW3Jvb3RpZF07XG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIHR5cGU6IFwibGluZWFyTGF5b3V0XCIsXG4gICAgICBwcm9wczoge1xuICAgICAgICBoOiB3aW5kb3cuX19IRUlHSFQsXG4gICAgICAgIHc6IHdpbmRvdy5fX1dJRFRIXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtyb290dmlld11cbiAgICB9O1xuICAgIHJlbmRlci5jb21wdXRlQ2hpbGREaW1lbnMob2JqKTtcbiAgICByZW5kZXIuaW5mbGF0ZShyb290dmlldyk7XG4gIH0sXG5cbiAgcnVuSW5VSTogZnVuY3Rpb24gKGNtZCkge1xuICAgIHJlbmRlci5ydW5JblVJKGNtZCk7XG4gIH0sXG5cbiAgUmVuZGVyOiBmdW5jdGlvbiAodmlldywgY2IpIHtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgdHlwZTogXCJsaW5lYXJMYXlvdXRcIixcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGg6IHdpbmRvdy5fX0hFSUdIVCxcbiAgICAgICAgdzogd2luZG93Ll9fV0lEVEhcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3ZpZXddXG4gICAgfTtcbiAgICByb290aWQgPSB2aWV3LnByb3BzLmlkO1xuICAgIHJlbmRlci5jb21wdXRlQ2hpbGREaW1lbnMob2JqKTtcbiAgICB2aWV3ID0gcmVuZGVyLmluZmxhdGUodmlldyk7XG4gICAgaWYgKHZpZXcpIHtcbiAgICAgIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLklPUy5wb3N0TWVzc2FnZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG1ldGhvZE5hbWU6IFwicmVuZGVyXCIsXG4gICAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgICAgdmlldzogdmlld1xuICAgICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKGNiKVxuICAgICAgd2luZG93LmNhbGxVSUNhbGxiYWNrKGNiKTtcbiAgfSxcblxuICBtb3ZlVmlldzogZnVuY3Rpb24gbW92ZVZpZXcoaWQsIGluZGV4KSB7XG4gICAgaWYgKCF3aW5kb3cuX19WSUVXU1tpZF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIk1vdmVWaWV3OiBJbnZhbGlkIHZpZXcgSUQ6IFwiICsgaWQpKTtcbiAgICB9XG4gICAgY29uc3QgdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXTtcbiAgICBjb25zdCBwYXJlbnQgPSB3aW5kb3cuX19WSUVXU1t2aWV3LnByb3BzLnBhcmVudElkXTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICBjaGlsZHJlbi5zcGxpY2UoY2hpbGRyZW4uaW5kZXhPZih2aWV3KSwgMSk7XG4gICAgY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCB2aWV3KTtcbiAgICB0aGlzLnJlY29tcHV0ZVZpZXcocGFyZW50KTtcbiAgfSxcblxuICBhZGRWaWV3VG9QYXJlbnQ6IGZ1bmN0aW9uIChpZCwgdmlldywgaW5kZXgsIGNiKSB7XG4gICAgaWYgKCF3aW5kb3cuX19WSUVXU1tpZF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIkFkZFZpZXdUb1BhcmVudDogSW52YWxpZCBwYXJlbnQgSUQ6IFwiICtcbiAgICAgICAgaWQpKTtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50ID0gd2luZG93Ll9fVklFV1NbaWRdO1xuICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIHZpZXcpO1xuICAgIHZpZXcucHJvcHMucGFyZW50SWQgPSBpZDtcbiAgICByZW5kZXIuY29tcHV0ZUNoaWxkRGltZW5zKHBhcmVudCk7XG4gICAgY29uc3QgcmVuZGVyZWRWaWV3ID0gcmVuZGVyLmluZmxhdGUodmlldyk7XG4gICAgaWYgKHJlbmRlcmVkVmlldykge1xuICAgICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuSU9TLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbWV0aG9kTmFtZTogXCJhZGRWaWV3VG9QYXJlbnRcIixcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBwYXJlbnRJZDogaWQsXG4gICAgICAgICAgdmlldzogcmVuZGVyZWRWaWV3LFxuICAgICAgICAgIGFmdGVyUmVuZGVyIDogY2IrXCJcIlxuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfVxuICAgIHRoaXMucmVjb21wdXRlVmlldyhwYXJlbnQpO1xuICB9LFxuXG4gIGNyZWF0ZUxpc3REYXRhOiBmdW5jdGlvbiAoaWQsIHZpZXcpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB3aW5kb3cuX19WSUVXU1tpZF07XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJldHVybiBcInt9XCI7XG4gICAgfVxuICAgIGNvbnN0IHZpZXdzID0gd2luZG93Ll9fVklFV1M7XG4gICAgd2luZG93Ll9fVklFV1MgPSB7fTtcbiAgICBwYXJlbnQuY2hpbGRyZW4gPSBbdmlld107XG4gICAgdmlldy5wcm9wcy5wYXJlbnRJZCA9IGlkO1xuICAgIHJlbmRlci5jb21wdXRlQ2hpbGREaW1lbnMocGFyZW50KTtcbiAgICBjb25zdCBpbmZsYXRlZFZpZXcgPSByZW5kZXIuaW5mbGF0ZSh2aWV3KTtcbiAgICB3aW5kb3cuX19WSUVXUyA9IHZpZXdzO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpbmZsYXRlZFZpZXcpO1xuICB9LFxuXG4gIHJlcGxhY2VWaWV3OiBmdW5jdGlvbiAodmlldywgaWQpIHtcbiAgICBpZiAoIXdpbmRvdy5fX1ZJRVdTW2lkXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiQWRkVmlld1RvUGFyZW50OiBJbnZhbGlkIHBhcmVudCBJRDogXCIgKyBpZCkpO1xuICAgIH1cbiAgICB2YXIgb2xkdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXTtcbiAgICB2YXIgcGFyZW50aWQgPSBvbGR2aWV3LnByb3BzLnBhcmVudElkO1xuICAgIG9sZHZpZXcucHJvcHMgPSBoZWxwZXIuY2xvbmUodmlldy5wcm9wcyxudWxsKTtcbiAgICBvbGR2aWV3LnByb3BzLnBhcmVudElkID0gcGFyZW50aWQ7XG4gICAgdmFyIHBhcmVudCA9IHdpbmRvdy5fX1ZJRVdTW3BhcmVudGlkXTtcbiAgICB2YXIgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihvbGR2aWV3KTtcbiAgICB0aGlzLnJlY29tcHV0ZVZpZXcocGFyZW50KTtcbiAgICB2YXIgbmV3VmlldyA9IGdldFNlcmlhbGl6ZWFibGVWaWV3KG9sZHZpZXcpO1xuICAgIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLklPUy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1ldGhvZE5hbWU6IFwicmVwbGFjZVZpZXdcIixcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgdmlldzogbmV3VmlldyxcbiAgICAgICAgICAgIHBhcmVudElkOiBwYXJlbnRpZCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICB9XG4gICAgfSkpO1xuICB9LFxuXG4gIHJlbW92ZVZpZXc6IGZ1bmN0aW9uIChpZCkge1xuICAgIGNvbnN0IHZpZXcgPSB3aW5kb3cuX19WSUVXU1tpZF07XG4gICAgY29uc3QgcGFyZW50ID0gd2luZG93Ll9fVklFV1Nbdmlldy5wcm9wcy5wYXJlbnRJZF07XG4gICAgY29uc3QgaW5kZXggPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih2aWV3KSA6IDA7XG4gICAgaWYocGFyZW50KXtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBjbGVhclZpZXdFeHRlcm5hbHModmlldyk7XG4gICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuSU9TLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1ldGhvZE5hbWU6IFwicmVtb3ZlVmlld1wiLFxuICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIGluZGV4LFxuICAgICAgfVxuICAgIH0pKTtcbiAgICBpZihwYXJlbnQpe1xuICAgICAgdGhpcy5yZWNvbXB1dGVWaWV3KHBhcmVudCk7XG4gICAgfVxuICB9LFxuXG4gIHN0YXJ0QW5pbTogZnVuY3Rpb24oaWQsIGNiTmFtZSkge1xuICAgIC8vIFRPRE8gaW1wbGVtZW50IG5hdGl2ZSBzaWRlIHdpdGggY2FsbGJhY2tcbiAgICAvLyBUaHVzLCBjdXJyZW50bHkgbm90IHByb3ZpZGluZyBvbiBjb21wbGV0ZSBob29rXG4gICAgLy8gb25FbmQgcHJvcGVydHkgY2FuIHN0aWxsIGJlIHVzZWQgZm9yIGNoYWluaW5nIGFuaW1hdGlvbnNcbiAgICB3aW5kb3cud2Via2l0Lm1lc3NhZ2VIYW5kbGVycy5JT1MucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbWV0aG9kTmFtZTogXCJzdGFydEFuaW1hdGlvblwiLFxuICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICBhbmltSWQ6IGlkXG4gICAgICB9XG4gICAgfSkpO1xuICB9LFxuXG4gIGNhbmNlbEFuaW06IGZ1bmN0aW9uKCkge1xuICAgIC8vIFRPRE8gaW1wbGVtZW50IG5hdGl2ZSBzaWRlXG4gIH0sXG5cbiAgdXBkYXRlQW5pbTogZnVuY3Rpb24oKSB7XG4gICAgLy8gVE9ETyBpbXBsZW1lbnQgbmF0aXZlIHNpZGVcbiAgfVxufTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuY29uc3QgcGFyc2VQYXJhbXMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lvcy9wYXJzZVBhcmFtcycpO1xuY29uc3Qge2NvbXB1dGVDaGlsZERpbWVuc30gPSByZXF1aXJlKCcuLi9jb21wdXRlSU9TJyk7XG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuLi9oZWxwZXInKTtcblxuXG5mdW5jdGlvbiBpbmZsYXRlKHZpZXcpIHtcbiAgY29uc3QgaWQgPSB2aWV3LnByb3BzLmlkO1xuXG4gIGlmICghd2luZG93Ll9fVklFV1MuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpO1xuICAgIGhlbHBlci5jYWNoZURpbWVuKHZpZXcpO1xuICAgIHdpbmRvdy5fX1ZJRVdTW2lkXSA9IHZpZXc7XG4gICAgY29uc3QgbmV3VmlldyA9IGhlbHBlci5jbG9uZSh2aWV3LG51bGwpO1xuICAgIHZpZXcuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcbiAgICAgIG5ld1ZpZXcuY2hpbGRyZW5baV0gPSBpbmZsYXRlKGNoaWxkKTtcbiAgICB9KTtcbiAgICBjb25zdCBvYmogPSBwYXJzZVBhcmFtcyhuZXdWaWV3LnR5cGUsIG5ld1ZpZXcucHJvcHMsIFwic2V0XCIpO1xuICAgIG5ld1ZpZXcucHJvcHMgPSBvYmouY29uZmlnO1xuICAgIG5ld1ZpZXcudHlwZSA9IG9iai50eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyBvYmoudHlwZS5zdWJzdHIoMSwgb2JqLnR5cGUubGVuZ3RoKTtcbiAgICByZXR1cm4gbmV3VmlldztcbiAgfVxuXG4gIGNvbnN0IG1vdmUgPSBoZWxwZXIuc2hvdWxkTW92ZSh2aWV3KTtcbiAgaGVscGVyLmNhY2hlRGltZW4odmlldyk7XG4gIGxldCByYW5SdW5JblVJID0gZmFsc2U7XG4gIGlmIChtb3ZlKSB7XG4gICAgbW92ZS5pZCA9IGlkO1xuICAgIHJ1bkluVUlIZWxwZXIodmlldy50eXBlLCB2aWV3LnByb3BzKTtcbiAgICByYW5SdW5JblVJID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbXB1dGVDaGlsZERpbWVucyh2aWV3KVxuICB2aWV3LmNoaWxkcmVuLmZvckVhY2goaW5mbGF0ZSk7XG4gIHJldHVybiByYW5SdW5JblVJO1xufVxuXG5mdW5jdGlvbiBydW5JblVJKGNtZCwgZnJvbUluZmxhdGUpIHtcbiAgaWYgKCEoY21kIGluc3RhbmNlb2YgQXJyYXkpKSBjbWQgPSBbY21kXTtcblxuICBpZiAoY21kLmxlbmd0aD09MSAmJiBjbWRbMF09PVwicmVtb3ZlQWxsVUlcIil7XG4gICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuSU9TLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1ldGhvZE5hbWU6IFwicmVtb3ZlQWxsVUlcIixcbiAgICAgIHBhcmFtZXRlcnM6IHtcImFuaW1hdGVkXCI6XCJmYWxzZVwifVxuICAgIH0pKTtcbiAgfWVsc2V7XG4gICAgY21kLmZvckVhY2goZnVuY3Rpb24gKGVhY2gpIHtcbiAgICAgIHZhciBpZCA9IGVhY2guaWQ7XG4gICAgICBlYWNoLnVzZUNvbnN0cmFpdHMgPSB0cnVlO1xuICAgICAgdmFyIHZpZXcgPSB3aW5kb3cuX19WSUVXU1tpZF07XG4gICAgICBpZiAodmlldykge1xuICAgICAgICB2YXIgcGFyZW50ID0gd2luZG93Ll9fVklFV1Nbdmlldy5wcm9wcy5wYXJlbnRJZF07XG4gICAgICAgIHZpZXcucHJvcHMgPSBoZWxwZXIubWVyZ2Uodmlldy5wcm9wcywgZWFjaCk7XG4gICAgICAgIGlmKHZpZXcucHJvcHMgJiYgdmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShcImxpc3RJdGVtXCIpICYmIGVhY2guaGFzT3duUHJvcGVydHkoXCJsaXN0RGF0YVwiKSAmJiAhZWFjaC5oYXNPd25Qcm9wZXJ0eShcImxpc3RJdGVtXCIpKXtcbiAgICAgICAgICBlYWNoLmxpc3RJdGVtID0gdmlldy5wcm9wcy5saXN0SXRlbVxuICAgICAgICB9XG4gICAgICAgIC8vQWRkaW5nIGFzIHN0b3AgZ2FnIHNvbHV0aW9uIGZvciBlZGl0VGV4dCBpbiBpb3Mgd2hlcmUgdGV4dCBcbiAgICAgICAgLy93YXMgZ2V0dGluZyBzZXQgZW1wdHkgaW4gY2FzZSBvdGhlciBwcm9wZXJ0aWVzIHdlcmUgbW9kaWZpZWQuXG4gICAgICAgIGlmICghZWFjaC5oYXNPd25Qcm9wZXJ0eSgndGV4dCcpKSB7XG4gICAgICAgICAgZGVsZXRlIHZpZXcucHJvcHMudGV4dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50ICYmICFmcm9tSW5mbGF0ZSkge1xuICAgICAgICAgIGlmIChwYXJlbnQudHlwZS5pbmRleE9mKFwic2Nyb2xsXCIpICE9IC0xKSB7XG4gICAgICAgICAgICBpbmZsYXRlKHBhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbXB1dGVDaGlsZERpbWVucyhwYXJlbnQpO1xuICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICBpZiAoIWluZmxhdGUodmlldykpIHtcbiAgICAgICAgICAgIHJ1bkluVUlIZWxwZXIodmlldy50eXBlLCBlYWNoLCB0cnVlKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHZpZXcgIT0gY2hpbGRyZW5baV0pIHtcbiAgICAgICAgICAgICAgaW5mbGF0ZShjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJ1bkluVUlIZWxwZXIodmlldy50eXBlLCBlYWNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBydW5JblVJSGVscGVyKHR5cGUsIG9iaiwgcmVtb3ZlRnJhbWUpIHtcbiAgdmFyIGNtZCA9IHBhcnNlUGFyYW1zKHR5cGUsIG9iaiwgXCJnZXRcIikuY29uZmlnLm1ldGhvZHM7XG4gIGlmKHJlbW92ZUZyYW1lKXtcbiAgICAgIGNtZCA9IGNtZC5maWx0ZXIoZnVuY3Rpb24oaXRtKXtcbiAgICAgICAgcmV0dXJuIGl0bS5tZXRob2ROYW1lICE9IFwic2V0RnJhbWU6XCJcbiAgICB9KVxuICB9XG4gIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLklPUy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgbWV0aG9kTmFtZTogXCJydW5JblVJXCIsXG4gICAgcGFyYW1ldGVyczogY21kXG4gIH0pKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluZmxhdGUsXG4gIGNvbXB1dGVDaGlsZERpbWVucyxcbiAgcnVuSW5VSVxufTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxudmFyIHByZXN0b0RvbSA9IHJlcXVpcmUoXCIuL2RvbXNcIik7XG52YXIgaGVscGVycyA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIilcbnZhciB3ZWJQYXJzZVBhcmFtcztcbnZhciBpT1NQYXJzZVBhcmFtcztcbnZhciBwYXJzZVBhcmFtcztcbmNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG5cbmlmICh3aW5kb3cuX19PUyA9PT0gXCJXRUJcIikge1xuICB3ZWJQYXJzZVBhcmFtcyA9IGhlbHBlcnMud2ViLnBhcnNlUGFyYW1zO1xufSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PT0gXCJJT1NcIikge1xuICBpT1NQYXJzZVBhcmFtcyA9IGhlbHBlcnMuaW9zLnBhcnNlUGFyYW1zO1xufSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PT0gXCJBTkRST0lEXCIpIHtcbiAgcGFyc2VQYXJhbXMgPSBoZWxwZXJzLmFuZHJvaWQucGFyc2VQYXJhbXM7XG59XG5cbmZ1bmN0aW9uIGRvbUFsbChlbGVtKSB7XG4gIGlmICghZWxlbS5fX3JlZikge1xuICAgIGVsZW0uX19yZWYgPSBjcmVhdGVQcmVzdG9FbGVtZW50KCk7XG4gIH1cblxuICBpZiAoZWxlbS5wcm9wcy5pZCkge1xuICAgIGVsZW0uX19yZWYuX19pZCA9IHBhcnNlSW50KGVsZW0ucHJvcHMuaWQsIDEwKSB8fCBlbGVtLl9fcmVmLl9faWQ7XG4gIH1cblxuICB2YXIgdHlwZSA9IGhlbHBlci5jbG9uZShlbGVtLnR5cGUsbnVsbCk7XG4gIHZhciBwcm9wcyA9IGhlbHBlci5jbG9uZShlbGVtLnByb3BzLG51bGwpO1xuXG4gIGlmIChwcm9wcy5mb2N1cyA9PSBmYWxzZSAmJiAgd2luZG93Ll9fT1MgPT09IFwiQU5EUk9JRFwiKSB7XG4gICAgZGVsZXRlIHByb3BzLmZvY3VzO1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRyZW4ucHVzaChkb21BbGwoZWxlbS5jaGlsZHJlbltpXSkpO1xuICB9XG5cblxuICBpZiAoX19PUyA9PSBcIldFQlwiICYmIHByb3BzLm9uUmVzaXplKSB7XG4gICAgd2luZG93Ll9fcmVzaXplRXZlbnQgPSBwcm9wcy5vblJlc2l6ZTtcbiAgfVxuXG4gIHByb3BzLmlkID0gZWxlbS5fX3JlZi5fX2lkO1xuICBpZihlbGVtLnBhcmVudFR5cGUgJiYgd2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gICAgcmV0dXJuIHByZXN0b0RvbSh7ZWxlbVR5cGU6IHR5cGUsIHBhcmVudFR5cGU6IGVsZW0ucGFyZW50VHlwZX0sIHByb3BzLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHByZXN0b0RvbSh0eXBlLCBwcm9wcywgY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBnZXREb21Ub1JlbmRlcihlbGVtKSB7XG4gIHZhciByZXMgPSBkb21BbGwoZWxlbSk7XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cblxuXG4vLyBOb3QgZXhwb3J0ZWRcbmZ1bmN0aW9uIGNtZEZvckFuZHJvaWQoY29uZmlnLCBzZXQsIHR5cGUpIHtcbiAgaWYgKHNldCkge1xuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIHZhciBvYmogPSBwYXJzZVBhcmFtcyh0eXBlLCBjb25maWcsIFwic2V0XCIpO1xuICAgICAgdmFyIGNtZCA9IG9iai5ydW5JblVJLnJlcGxhY2UoXCJ0aGlzLT5zZXRJZFwiLCBcInNldF92aWV3PWN0eC0+ZmluZFZpZXdCeUlkXCIpLnJlcGxhY2UoL3RoaXMtPi9nLCBcImdldF92aWV3LT5cIik7XG4gICAgICBjbWQgPSBjbWQucmVwbGFjZSgvUEFSQU1fQ1RSX0hPTERFUlteO10qL2csIFwiZ2V0X3ZpZXctPmdldExheW91dFBhcmFtcztcIik7XG4gICAgICBvYmoucnVuSW5VSSA9IGNtZDtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJJRCBudWxsLCB0aGlzIGlzIG5vdCBzdXBwb3NlZCB0byBoYXBwZW4uIERlYnVnIHRoaXMgb3IvYW5kIHJhaXNlIGEgaXNzdWUgaW4gYml0YnVja2V0LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgdmFyIF9pZCA9IGNvbmZpZy5pZDtcbiAgdmFyIGNtZCA9IFwic2V0X3ZpZXc9Y3R4LT5maW5kVmlld0J5SWQ6aV9cIiArIF9pZCArIFwiO1wiO1xuICAvLyB2YXIgcnVuSW5VSTtcbiAgZGVsZXRlIGNvbmZpZy5pZDtcbiAgY29uZmlnLnJvb3QgPSBcInRydWVcIjtcbiAgdmFyIG9iaiA9IHBhcnNlUGFyYW1zKHR5cGUsIGNvbmZpZywgXCJnZXRcIik7XG4gIG9iai5ydW5JblVJID0gY21kICsgb2JqLnJ1bkluVUkgKyAnOyc7XG4gIG9iai5pZCA9IF9pZDtcbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZ2V0UnVuSW5VSUNtZChwcm9wKSB7XG4gIHZhciBjbWQ7XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIGNtZCA9IGNtZEZvckFuZHJvaWQocHJvcCwgdHJ1ZSwgXCJsaW5lYXJMYXlvdXRcIikucnVuSW5VSTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIklPU1wiKXtcbiAgICBjbWQgPSBwcm9wO1xuICB9IGVsc2Uge1xuICAgIGNtZCA9IHdlYlBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIHByb3AsIFwic2V0XCIpO1xuICB9XG4gIHJldHVybiBjbWQ7XG59XG5cblxuXG4vLyBOb3QgZXhwb3J0ZWRcbmZ1bmN0aW9uIGFwcGx5UHJvcChlbGVtZW50LCBhdHRyaWJ1dGUsIHNldCkge1xuICB2YXIgcHJvcCA9IHtcbiAgICBpZDogZWxlbWVudC5fX3JlZi5fX2lkXG4gIH1cbiAgcHJvcFthdHRyaWJ1dGUudmFsdWUwXSA9IGF0dHJpYnV0ZS52YWx1ZTE7XG5cbiAgaWYgKGF0dHJpYnV0ZS52YWx1ZTAgPT0gJ2ZvY3VzJyAmJiBhdHRyaWJ1dGUudmFsdWUxID09IGZhbHNlICYmICB3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIHZhciBjbWQgPSBjbWRGb3JBbmRyb2lkKHByb3AsIHNldCwgZWxlbWVudC50eXBlKTtcbiAgICBpZiAoQW5kcm9pZC51cGRhdGVQcm9wZXJ0aWVzKSB7XG4gICAgICBBbmRyb2lkLnVwZGF0ZVByb3BlcnRpZXMoSlNPTi5zdHJpbmdpZnkoY21kKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEFuZHJvaWQucnVuSW5VSShjbWQucnVuSW5VSSwgbnVsbCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiSU9TXCIpe1xuICAgIEFuZHJvaWQucnVuSW5VSShwcm9wKTtcbiAgfSBlbHNlIHtcbiAgICBBbmRyb2lkLnJ1bkluVUkod2ViUGFyc2VQYXJhbXMoXCJsaW5lYXJMYXlvdXRcIiwgcHJvcCwgXCJzZXRcIikpO1xuICB9XG4gIC8vIEFuZHJvaWQucnVuSW5VSShwYXJzZVBhcmFtcyhcImxpbmVhckxheW91dFwiLCBwcm9wLCBcInNldFwiKSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VWaWV3KGVsZW1lbnQsIGF0dHJpYnV0ZSwgcmVtb3ZlUHJvcCkge1xuICAvLyBjb25zb2xlLmxvZyhcIlJFUExBQ0UgVklFV1wiLCBlbGVtZW50Ll9fcmVmLl9faWQsIGVsZW1lbnQucHJvcHMpO1xuICB2YXIgcHJvcHMgPSBoZWxwZXIuY2xvbmUoZWxlbWVudC5wcm9wcyxudWxsKTtcbiAgcHJvcHMuaWQgPSBlbGVtZW50Ll9fcmVmLl9faWQ7XG4gIHZhciByZXA7XG4gIHZhciB2aWV3R3JvdXBzID0gW1wibGluZWFyTGF5b3V0XCIsIFwicmVsYXRpdmVMYXlvdXRcIiwgXCJzY3JvbGxWaWV3XCIsIFwiZnJhbWVMYXlvdXRcIiwgXCJob3Jpem9udGFsU2Nyb2xsVmlld1wiXTtcblxuICBpZiAodmlld0dyb3Vwcy5pbmRleE9mKGVsZW1lbnQudHlwZSkgIT0gLTEpe1xuICAgIHByb3BzLnJvb3QgPSB0cnVlO1xuICAgIHJlcCA9IHByZXN0b0RvbShlbGVtZW50LnR5cGUsIHByb3BzLCBbXSk7XG4gIH0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICByZXAgPSBwcmVzdG9Eb20oe2VsZW1UeXBlOiBlbGVtZW50LnR5cGUsIHBhcmVudFR5cGU6IGVsZW1lbnQucGFyZW50Tm9kZS50eXBlfSwgcHJvcHMsIFtdKTtcbiAgfSBlbHNlIHtcbiAgICByZXAgPSBwcmVzdG9Eb20oZWxlbWVudC50eXBlLCBwcm9wcywgW10pO1xuICB9XG4gIGlmKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKXtcbiAgICBBbmRyb2lkLnJlcGxhY2VWaWV3KEpTT04uc3RyaW5naWZ5KHJlcCksIGVsZW1lbnQuX19yZWYuX19pZCk7XG4gIH0gZWxzZSB7XG4gICAgQW5kcm9pZC5yZXBsYWNlVmlldyhyZXAsIGVsZW1lbnQuX19yZWYuX19pZCk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVQcmVzdG9FbGVtZW50KCkge1xuICAgIGlmKHR5cGVvZih3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSkgIT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB7IF9faWQgOiArK3dpbmRvdy5fX3VpX2lkX3NlcXVlbmNlIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93Ll9fdWlfaWRfc2VxdWVuY2UgPSB0eXBlb2YgQW5kcm9pZC5nZXROZXdJRCA9PSBcImZ1bmN0aW9uXCIgPyBwYXJzZUludChBbmRyb2lkLmdldE5ld0lEKCkpICogMTAwMDAwMCA6IHdpbmRvdy5fX1BSRVNUT19JRCA7XG4gICAgICAgIHJldHVybiB7IF9faWQgOiArK3dpbmRvdy5fX3VpX2lkX3NlcXVlbmNlIH07XG4gICAgfVxufTtcblxuXG5mdW5jdGlvbiBtb3ZlQ2hpbGQoY2hpbGQsIHBhcmVudCwgaW5kZXgpIHtcbiAgQW5kcm9pZC5tb3ZlVmlldyhjaGlsZC5fX3JlZi5fX2lkLCBpbmRleCk7XG59XG5cblxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZChjaGlsZCwgcGFyZW50LCBpbmRleCkge1xuICAvLyBjb25zb2xlLmxvZyhcIlJlbW92ZSBjaGlsZCA6XCIsIGNoaWxkLnR5cGUpO1xuICBBbmRyb2lkLnJlbW92ZVZpZXcoY2hpbGQuX19yZWYuX19pZCArIFwiXCIpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChjaGlsZCwgcGFyZW50LCBpbmRleCkge1xuICBpZihjaGlsZC50eXBlID09IG51bGwpIHtcbiAgICBjb25zb2xlLndhcm4oXCJjaGlsZCBudWxsXCIpO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKFwiQWRkIGNoaWxkIDpcIiwgY2hpbGQuX19yZWYuX19pZCwgY2hpbGQudHlwZSk7XG4gIHZhciB2aWV3R3JvdXBzID0gW1wibGluZWFyTGF5b3V0XCIsIFwicmVsYXRpdmVMYXlvdXRcIiwgXCJzY3JvbGxWaWV3XCIsIFwiZnJhbWVMYXlvdXRcIiwgXCJob3Jpem9udGFsU2Nyb2xsVmlld1wiXTtcbiAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgaWYgKHZpZXdHcm91cHMuaW5kZXhPZihjaGlsZC50eXBlKSAhPSAtMSl7XG4gICAgICBjaGlsZC5wcm9wcy5yb290ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGQucGFyZW50VHlwZSA9IHBhcmVudC50eXBlO1xuICAgIH1cbiAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChwYXJlbnQuX19yZWYuX19pZCArIFwiXCIsIEpTT04uc3RyaW5naWZ5KGRvbUFsbChjaGlsZCkpLCBpbmRleCwgbnVsbCwgbnVsbCk7XG4gIH1cbiAgZWxzZVxuICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHBhcmVudC5fX3JlZi5fX2lkLCBkb21BbGwoY2hpbGQpLCBpbmRleCwgbnVsbCwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGUpIHtcbiAgLy8gY29uc29sZS5sb2coXCJhZGQgYXR0ciA6XCIsIGF0dHJpYnV0ZSk7XG4gIGVsZW1lbnQucHJvcHNbYXR0cmlidXRlLnZhbHVlMF0gPSBhdHRyaWJ1dGUudmFsdWUxO1xuICBhcHBseVByb3AoZWxlbWVudCwgYXR0cmlidXRlLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuICAvLyBjb25zb2xlLmxvZyhcInJlbW92ZSBhdHRyIDpcIiwgYXR0cmlidXRlKTtcbiAgcmVwbGFjZVZpZXcoZWxlbWVudCwgYXR0cmlidXRlLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZSBhdHRyIDpcIiwgYXR0cmlidXRlKTtcbiAgZWxlbWVudC5wcm9wc1thdHRyaWJ1dGUudmFsdWUwXSA9IGF0dHJpYnV0ZS52YWx1ZTE7XG5cbiAgYXBwbHlQcm9wKGVsZW1lbnQsIGF0dHJpYnV0ZSwgZmFsc2UpO1xufVxuXG5cbmZ1bmN0aW9uIGluc2VydERvbShyb290LCBkb20sIGNiKSB7XG4gIHJvb3QuY2hpbGRyZW4ucHVzaChkb20pO1xuICBkb20ucGFyZW50Tm9kZSA9IHJvb3Q7XG4gIGRvbS5fX3JlZiA9IGNyZWF0ZVByZXN0b0VsZW1lbnQoKTtcbiAgd2luZG93Lk4gPSByb290O1xuXG4gIHZhciByb290SWQgPSB3aW5kb3cuX19ST09UU0NSRUVOLmlkU2V0LnJvb3Q7XG5cbiAgZG9tLnByb3BzLnJvb3QgPSB0cnVlO1xuXG4gIHZhciBsZW5ndGggPSB3aW5kb3cuX19ST09UU0NSRUVOLmlkU2V0LmNoaWxkLnB1c2goZG9tLl9fcmVmLl9faWQpO1xuXG4gIHZhciBjYWxsYmFjayA9IHdpbmRvdy5jYWxsYmFja01hcHBlcihleGVjdXRlUG9zdFByb2Nlc3MoY2IpKTtcbiAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQocm9vdElkICsgXCJcIiwgSlNPTi5zdHJpbmdpZnkoZG9tQWxsKGRvbSkpLCBsZW5ndGggLSAxLCBjYWxsYmFjaywgbnVsbCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQocm9vdElkLCBkb21BbGwoZG9tKSwgbGVuZ3RoIC0gMSwgY2FsbGJhY2ssIG51bGwpO1xuICB9XG5cbiAgcmV0dXJuIGRvbS5fX3JlZi5fX2lkO1xuXG59XG5cblxuZnVuY3Rpb24gZXhlY3V0ZVBvc3RQcm9jZXNzKGNiKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjYigpO1xuXG4gICAgaWYod2luZG93Ll9fZHVpX3NjcmVlbiAmJiB3aW5kb3dbXCJhZnRlclJlbmRlclwiXSkge1xuICAgICAgZm9yICh2YXIgdGFnIGluIHdpbmRvd1tcImFmdGVyUmVuZGVyXCJdW3dpbmRvdy5fX2R1aV9zY3JlZW5dKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgd2luZG93W1wiYWZ0ZXJSZW5kZXJcIl1bd2luZG93Ll9fZHVpX3NjcmVlbl1bdGFnXSgpKCk7XG4gICAgICAgICAgd2luZG93W1wiYWZ0ZXJSZW5kZXJcIl1bd2luZG93Ll9fZHVpX3NjcmVlbl1bXCJleGVjdXRlZFwiXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKEpCcmlkZ2UgJiYgSkJyaWRnZS5zZXRTaGFkb3cpIHtcbiAgICAgIGZvciAodmFyIHRhZyBpbiB3aW5kb3cuc2hhZG93T2JqZWN0KSB7XG4gICAgICAgIEpCcmlkZ2Uuc2V0U2hhZG93KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImxldmVsXCJdLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1widmlld0lkXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImJhY2tncm91bmRDb2xvclwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJibHVyVmFsdWVcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wic2hhZG93Q29sb3JcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZHhcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZHlcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wic3ByZWFkXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImZhY3RvclwiXSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkb21BbGw6IGRvbUFsbCxcbiAgZ2V0RG9tVG9SZW5kZXI6IGdldERvbVRvUmVuZGVyLFxuICBnZXRSdW5JblVJQ21kOiBnZXRSdW5JblVJQ21kLFxuICByZXBsYWNlVmlldzogcmVwbGFjZVZpZXcsXG4gIGNyZWF0ZVByZXN0b0VsZW1lbnQ6IGNyZWF0ZVByZXN0b0VsZW1lbnQsXG4gIG1vdmVDaGlsZDogbW92ZUNoaWxkLFxuICByZW1vdmVDaGlsZDogcmVtb3ZlQ2hpbGQsXG4gIGFkZENoaWxkOiBhZGRDaGlsZCxcbiAgYWRkQXR0cmlidXRlOiBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZTogcmVtb3ZlQXR0cmlidXRlLFxuICB1cGRhdGVQcm9wZXJ0eTogdXBkYXRlQXR0cmlidXRlLFxuICBhZGRQcm9wZXJ0eTogYWRkQXR0cmlidXRlLFxuICBpbnNlcnREb206IGluc2VydERvbVxufTtcblxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5jb25zdCBCYXNlVmlldyA9IHJlcXVpcmUoJy4vYmFzZVZpZXcnKTtcbmNvbnN0IFZJRVcgPSBuZXcgQmFzZVZpZXcobnVsbCwgbnVsbCwge30pO1xuXG4vLyBPYmplY3Qgb2YgdHlwZXMgb2YgYW5pbWF0aW9ucyBhdmFpbGFibGUgb24gc2NyZWVuIGNoYW5nZVxuY29uc3QgQW5pbWF0aW9uVHlwZXMgPSB7XG4gIFNMSURFOiB7XG4gICAgbmFtZTogXCJzbGlkZVwiLFxuICAgIGhhbmRsZXI6IHNsaWRlSGFuZGxlclxuICB9LFxuICBTTElERV9WRVJUSUNBTDoge1xuICAgIG5hbWU6IFwic2xpZGVfZG93blwiLFxuICAgIGhhbmRsZXI6IHNsaWRlRG93bkhhbmRsZXJcbiAgfSxcbiAgU0lNUExFOiB7XG4gICAgbmFtZTogXCJzaW1wbGVcIixcbiAgICBoYW5kbGVyOiBzaW1wbGVIYW5kbGVyXG4gIH1cbn1cblxuY29uc3QgREVGQVVMVF9BTklNQVRJT04gPSBBbmltYXRpb25UeXBlcy5TTElERTtcblxuZnVuY3Rpb24gc2ltcGxlSGFuZGxlcihmcm9tSWQsIHRvSWQsIGRpcmVjdGlvbikge1xuICBsZXQgY21kID0gVklFVy5jbWQoe1xuICAgIGlkOiB0b0lkLFxuICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4XG4gIH0pO1xuICByZXR1cm4gY21kO1xufVxuXG5mdW5jdGlvbiBzbGlkZURvd25IYW5kbGVyKGZyb21JZCwgdG9JZCwgZGlyZWN0aW9uKSB7XG4gIGxldCBjb250YWluZXIgPSBWSUVXLmNtZENvbnRhaW5lcigpO1xuICBsZXQgY21kO1xuXG4gIGlmIChkaXJlY3Rpb24gPT0gMSkge1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiB0b0lkLFxuICAgICAgdHJhbnNsYXRpb25ZOiB3aW5kb3cuX19IRUlHSFQsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25ZOiAnMCcsXG4gICAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleCxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogZnJvbUlkLFxuICAgICAgYV90cmFuc2xhdGlvblk6IC0wLjIgKiB3aW5kb3cuX19IRUlHSFQsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJ1xuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICB3aW5kb3cuWkluZGV4Kys7XG4gIGNtZCA9IFZJRVcuY21kKHtcbiAgICBpZDogZnJvbUlkLFxuICAgIHRyYW5zbGF0aW9uWTogMCxcbiAgICBhX3RyYW5zbGF0aW9uWTogd2luZG93Ll9fSEVJR0hULFxuICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4XG4gIH0pO1xuICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgY21kID0gVklFVy5jbWQoe1xuICAgIGlkOiB0b0lkLFxuICAgIHRyYW5zbGF0aW9uWjogd2luZG93LlpJbmRleC0xLFxuICAgIGFfdHJhbnNsYXRpb25ZOiAnMCcsXG4gICAgdHJhbnNsYXRpb25ZOiAtMC4yICogd2luZG93Ll9fSEVJR0hULFxuICAgIGFfZHVyYXRpb246ICczMDAnLFxuICB9KTtcbiAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHNsaWRlSGFuZGxlcihmcm9tSWQsIHRvSWQsIGRpcmVjdGlvbikge1xuICBsZXQgY29udGFpbmVyID0gVklFVy5jbWRDb250YWluZXIoKTtcbiAgbGV0IGNtZDtcbiAgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IHRvSWQsXG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICB0cmFuc2xhdGlvblg6IHdpbmRvdy5fX1dJRFRILFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgICBhX3RyYW5zbGF0aW9uWDogJzAnLFxuICAgICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXgsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiBmcm9tSWQsXG4gICAgICB0cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6ICgtLjIgKiB3aW5kb3cuX19XSURUSCkgKyAnJyxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uID09IC0xKSB7XG4gICAgd2luZG93LlpJbmRleCsrO1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiBmcm9tSWQsXG4gICAgICB0cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6IHdpbmRvdy5fX1dJRFRILFxuICAgICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXgsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IHRvSWQsXG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICB0cmFuc2xhdGlvblg6ICgtLjIgKiB3aW5kb3cuX19XSURUSCkgKyAnJyxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIHRyYW5zbGF0aW9uWjogd2luZG93LlpJbmRleCAtIDEsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLypcbiAgR2VuZXJpYyBIYW5kbGVyIGZvciBBbmltYXRpb25cbiAgQXJndW1lbnRzOlxuICAgIGZyb21WaWV3SWQ6IE51bWJlciAtIElkIG9mIHRoZSB2aWV3IGN1cnJlbnRseSB2aXNpYmxlIG9uIHRoZSBzY3JlZW5cbiAgICB0b1ZpZXdJRDogTnVtYmVyIC0gSWQgb2YgdGhlIHZpZXcgd2hpY2ggaGFzIHRvIGJlIGJyb3VnaHQgb24gdGhlIHNjcmVlblxuICAgIElEOiBOdW1iZXIgLSBJZCBvZiB0aGUgdmlldyB0byBiZSBhbmltYXRlZFxuICAgIGFuaW1hdG9yOiBPYmogLSB7bmFtZTpzdHJpbmcsIGhhbmRsZXI6ZnVuY3Rpb259XG4gICAgZGlyZWN0aW9uOiBOdW1iZXIgLSBSZXByZXNlbnRzIG9mIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNjcmVlblxuICAgICAgLTEgOiBHbyBiYWNrIHRvIHRoZSBhbHJlYWR5IHJlbmRlcmVkIHNjcmVlbiAocmlnaHQgdG8gbGVmdClcbiAgICAgICAxIDogR28gdG8gdGhlIG5ldyBzY3JlZW4gKGxlZnQgdG8gcmlnaHQpXG4qL1xuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uKGZyb21WaWV3SUQsIHRvVmlld0lkLCBkaXJlY3Rpb24sIGFuaW1hdG9yKSB7XG4gIGlmICghYW5pbWF0b3IpXG4gICAgYW5pbWF0b3IgPSBERUZBVUxUX0FOSU1BVElPTjtcblxuICBpZiAodHlwZW9mIGFuaW1hdG9yID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBhbmltYXRvci5oYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpXG4gICAgcmV0dXJuIGFuaW1hdG9yLmhhbmRsZXIoZnJvbVZpZXdJRCwgdG9WaWV3SWQsIGRpcmVjdGlvbik7XG4gIGVsc2VcbiAgICBjb25zb2xlLmxvZyhuZXcgRXJyb3IoXCJBbmltYXRpb24gaGFuZGxlciBpcyBub3QgYSBmdW5jdGlvbiwgdHlwZTogXCIgK1xuICAgICAgYW5pbWF0b3IpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMudHlwZXMgPSBBbmltYXRpb25UeXBlcztcbm1vZHVsZS5leHBvcnRzLmdldEFuaW1hdGlvbiA9IGdldEFuaW1hdGlvbjsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbmNvbnN0IG1lcmdlID0gIHJlcXVpcmUoXCIuL2hlbHBlclwiKS5tZXJnZTtcblxuU3RyaW5nLnByb3RvdHlwZS5hZGRDbWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIHJldHVybiB0aGlzLmNvbmNhdChkYXRhKTtcbn07XG5cbkFycmF5LnByb3RvdHlwZS5hZGRDbWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIHRoaXMucHVzaChkYXRhKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5sZXQgcGFyc2VQYXJhbXM7XG5pZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi9oZWxwZXJzL2FuZHJvaWQvcGFyc2VQYXJhbXMnKTtcbmVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpXG4gIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi9oZWxwZXJzL3dlYi9wYXJzZVBhcmFtcycpO1xuZWxzZVxuICBwYXJzZVBhcmFtcyA9IHJlcXVpcmUoJy4vaGVscGVycy9pb3MvcGFyc2VQYXJhbXMnKTtcblxuY2xhc3MgQmFzZVZpZXcge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHMgfHwge307XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuIHx8IFtdO1xuXG4gICAgd2luZG93Ll9fU0VURk4gPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICBBbmRyb2lkLnJ1bkluVUkoXG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyksXG4gICAgICAgIG51bGxcbiAgICAgIClcbiAgICB9LmJpbmQodGhpcylcblxuICAgIHRoaXMuaWRTZXQgPSB7fTtcblxuICAgIGlmICh0aGlzLnByb3BzLmlkKSB7XG4gICAgICB0aGlzLmlkU2V0W1wiaWRcIl0gPSB0aGlzLnByb3BzLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmlkID0gdGhpcy5pZChcImlkXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLl9yZWYpIHtcbiAgICAgIHRoaXMucHJvcHMuX3JlZih0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kUmVjdXJzZShvYmosIHNlbGVjdG9yKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gb2JqLmNoaWxkcmVuO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNoaWxkcmVuW2ldLmRpc3BsYXlOYW1lICYmIGNoaWxkcmVuW2ldLmRpc3BsYXlOYW1lID09IHNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuZm91bmRDaGlsZHJlbi5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkcmVuW2ldLmNoaWxkcmVuICYmIGNoaWxkcmVuW2ldLmNoaWxkcmVuLmxlbmd0aClcbiAgICAgICAgdGhpcy5maW5kUmVjdXJzZShjaGlsZHJlbltpXSwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGZpbmQoc2VsZWN0b3IsIG9iaikge1xuICAgIHRoaXMuZm91bmRDaGlsZHJlbiA9IFtdO1xuXG4gICAgaWYgKCFvYmopXG4gICAgICB0aGlzLmZpbmRSZWN1cnNlKHRoaXMubGF5b3V0LCBzZWxlY3Rvcik7XG4gICAgZWxzZVxuICAgICAgdGhpcy5maW5kUmVjdXJzZShvYmosIHNlbGVjdG9yKTtcblxuICAgIHJldHVybiB0aGlzLmZvdW5kQ2hpbGRyZW47XG4gIH1cblxuICBpZChuYW1lKSB7XG4gICAgaWYgKCF0aGlzLmlkU2V0W25hbWVdKSB7XG4gICAgICB3aW5kb3cuX19JRCsrO1xuICAgICAgdGhpcy5pZFNldFtuYW1lXSA9IHdpbmRvdy5fX0lEO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5pZFNldFtuYW1lXTtcbiAgfVxuXG4gIHNldElkcyhhcnIpIHtcbiAgICBpZiAoIXRoaXMuaWRTZXQpXG4gICAgICB0aGlzLmlkU2V0ID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmlkU2V0W2FycltpXV0pIHtcbiAgICAgICAgd2luZG93Ll9fSUQrKztcbiAgICAgICAgdGhpcy5pZFNldFthcnJbaV1dID0gd2luZG93Ll9fSUQgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVTcGVjaWFsQ2hhcnModmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJywnKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFwsL2csICdcXFxcXFxcXCwnKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gdmFsdWUuaW5kZXhPZignOicpID4gLTEgPyB2YWx1ZS5yZXBsYWNlKC9cXDovZywgJ1xcXFxcXFxcOicpIDogdmFsdWU7XG4gICAgdmFsdWUgPSB2YWx1ZS5pbmRleE9mKCc9JykgPiAtMSA/IHZhbHVlLnJlcGxhY2UoL1xcPS9nLCAnXFxcXFxcXFw9JykgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJzsnKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFw7L2csICdcXFxcXFxcXDsnKSA6IHZhbHVlO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY21kRm9yQW5kcm9pZChjb25maWcpIHtcbiAgICB2YXIgY21kID0gXCJzZXRfdmlldz1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgY29uZmlnLmlkICsgXCI7XCI7XG4gICAgdmFyIHJ1bkluVUk7XG5cbiAgICBpZiAoY29uZmlnLnRvYXN0KSB7XG4gICAgICBjbWQgPSBcInNldF9UT0FTVD1hbmRyb2lkLndpZGdldC5Ub2FzdC0+bWFrZVRleHQ6Y3R4X2N0eCxjc19cIiArIHRoaXMuaGFuZGxlU3BlY2lhbENoYXJzKFxuICAgICAgICAgIGNvbmZpZy50ZXh0KSArIFwiLGlfXCIgKyAoY29uZmlnLmR1cmF0aW9uID09IFwic2hvcnRcIiA/IDAgOiAxKSArXG4gICAgICAgIFwiO2dldF9UT0FTVC0+c2hvd1wiO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnICYmIE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICBjb25maWcucm9vdCA9IFwidHJ1ZVwiO1xuICAgICAgcnVuSW5VSSA9IHBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIGNvbmZpZywgXCJnZXRcIikucnVuSW5VSTtcblxuICAgICAgY21kICs9IHJ1bkluVUkgKyAnOyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNtZDtcbiAgfVxuXG4gIGNtZENvbnRhaW5lcigpIHtcbiAgICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gICAgICByZXR1cm4gXCJcIjtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjbWRGb3JXZWIoY29uZmlnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoKVxuICAgICAgcmV0dXJuIHBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIGNvbmZpZywgXCJzZXRcIik7XG4gIH1cblxuICBjbWQoY29uZmlnKSB7XG4gICAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKVxuICAgICAgcmV0dXJuIHRoaXMuY21kRm9yQW5kcm9pZChjb25maWcpO1xuICAgIGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpXG4gICAgICByZXR1cm4gdGhpcy5jbWRGb3JXZWIoY29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoaWQsIGpzeCwgaW5kZXgsIGZuLCByZXBsYWNlQ2hpbGQpIHtcbiAgICB2YXIgcHJveHlGbk5hbWU7XG4gICAgaWYgKCFyZXBsYWNlQ2hpbGQpIHtcbiAgICAgIHJlcGxhY2VDaGlsZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChmbikge1xuICAgICAgcHJveHlGbk5hbWUgPSAnRicgKyB3aW5kb3cuX19GTl9JTkRFWDtcbiAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW3Byb3h5Rm5OYW1lXSA9IGZuO1xuICAgICAgd2luZG93Ll9fRk5fSU5ERVgrKztcbiAgICB9XG5cbiAgICBqc3ggPSAod2luZG93Ll9fT1MgIT0gXCJBTkRST0lEXCIpID8ganN4IDogSlNPTi5zdHJpbmdpZnkoanN4KTtcblxuICAgIGlmIChwcm94eUZuTmFtZSlcbiAgICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KGlkLCBqc3gsIGluZGV4LCBwcm94eUZuTmFtZSwgcmVwbGFjZUNoaWxkKTtcbiAgICBlbHNlXG4gICAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChpZCwganN4LCBpbmRleCwgbnVsbCwgcmVwbGFjZUNoaWxkKTtcbiAgfVxuXG4gIGdldFZpZXcoanN4KSB7XG4gICAgaWYgKHdpbmRvdy5fX09TICE9IFwiQU5EUk9JRFwiKVxuICAgICAgcmV0dXJuIGpzeDtcblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc3gpO1xuICB9XG5cbiAgdXBkYXRlUHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gbWVyZ2UodGhpcy5wcm9wcywgcHJvcHMpO1xuICAgIGNvbnN0IG9sZENvbnRhaW5lcklkID0gdGhpcy5sYXlvdXQuaWRTZXQuaWQ7XG4gICAgY29uc3QgbGF5b3V0ID0gdGhpcy5yZW5kZXIoKTtcbiAgICBmb3IgKGxldCBpPTA7IGk8bGF5b3V0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaT09MCkgdGhpcy5yZXBsYWNlQ2hpbGQob2xkQ29udGFpbmVySWQsIGxheW91dC5jaGlsZHJlbltpXSwgaSk7XG4gICAgICBlbHNlIHRoaXMuYXBwZW5kQ2hpbGQob2xkQ29udGFpbmVySWQsIGxheW91dC5jaGlsZHJlbltpXSwgaSk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0LmlkU2V0LmlkID0gb2xkQ29udGFpbmVySWQ7XG4gIH1cblxuICByZW1vdmVWaWV3KGlkKSB7XG4gICAgaWYgKF9fT1MgPT0gXCJXRUJcIilcbiAgICAgIHJldHVybiBBbmRyb2lkLnJlbW92ZVZpZXcoaWQpO1xuICAgIHJldHVybiBcInNldF9WSUVXPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZCArXG4gICAgICBcIjtzZXRfUEFSRU5UPWdldF9WSUVXLT5nZXRQYXJlbnQ7Z2V0X1BBUkVOVC0+cmVtb3ZlVmlldzpnZXRfVklFVztcIlxuICB9XG5cbiAgcmVtb3ZlQ2hpbGRyZW4oaWQpIHtcbiAgICBpZiAoX19PUyA9PSBcIldFQlwiKVxuICAgICAgcmV0dXJuIEFuZHJvaWQucmVtb3ZlQ2hpbGRyZW4oaWQpO1xuICAgIHJldHVybiBcInNldF9WSUVXPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZCArXG4gICAgICBcIjtnZXRfVklFVy0+cmVtb3ZlQWxsVmlld3M7XCJcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZChpZCwganN4LCBpbmRleCwgZm4pIHtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGlkLCBqc3gsIGluZGV4LCBmbiwgdHJ1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlVmlldzsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cblxuXG52YXIgY29tcHV0ZUNoaWxkRGltZW5zID0gZnVuY3Rpb24odmlldykge1xuICAgIGlmICh2aWV3LnByb3BzKSB7XG4gICAgICB2aWV3LnByb3BzLnVzZUNvbnN0cmFpdHMgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBpZiAodmlldy50eXBlID09IFwibGluZWFyTGF5b3V0XCIgJiYgdmlldy5jaGlsZHJlbiAmJiB2aWV3LmNoaWxkcmVuLmxlbmd0aCl7XG4gICAgLy8gICB2aWV3LnByb3BzLndlaWdodFN1bSA9IDAuMDtcbiAgICAvLyAgIHZpZXcucHJvcHMuZGlmZkhlaWdodCA9IDAuMDtcbiAgICAvLyAgIGZvcih2YXIgaSBpbiB2aWV3LmNoaWxkcmVuKXtcbiAgICAvLyAgICAgdmFyIGNoaWxkID0gdmlldy5jaGlsZHJlbltpXTtcbiAgICAvLyAgICAgaWYoY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMud2VpZ2h0KXtcbiAgICAvLyAgICAgICB2aWV3LnByb3BzLndlaWdodFN1bSArPSBwYXJzZUludChjaGlsZC5wcm9wcy53ZWlnaHQpXG4gICAgLy8gICAgIH0gZWxzZSBpZihjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy5oZWlnaHQpIHtcbiAgICAvLyAgICAgICB2aWV3LnByb3BzLmRpZmZIZWlnaHQgKz0gcGFyc2VJbnQoY2hpbGQucHJvcHMuaGVpZ2h0KVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICByZXR1cm4gdmlldztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXB1dGVMaW5lYXJsYXlvdXQ6KHZpZXcpID0+IGNvbXB1dGVDaGlsZERpbWVucyh2aWV3KSxcbiAgY29tcHV0ZVJlbGF0aXZlTGF5b3V0OiAodmlldykgPT4gY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpLFxuICBjb21wdXRlU2Nyb2xsVmlldzogKHZpZXcpID0+IGNvbXB1dGVDaGlsZERpbWVucyh2aWV3KSxcbiAgY29tcHV0ZUNoaWxkRGltZW5zXG59O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5mdW5jdGlvbiBydW4oKSB7XG4gIGlmICh3aW5kb3cuX19PUyA9PT0gXCJJT1NcIikge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi9pb3NcIilcbiAgfSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PT0gXCJXRUJcIikge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi93ZWJcIilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vYW5kcm9pZFwiKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcnVuKCk7IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5BcnJheS5wcm90b3R5cGUuZmxhdHRlbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgdmFyIG1vcmUgPSBbXS5jb25jYXQoY3VyKS5zb21lKEFycmF5LmlzQXJyYXkpO1xuICAgIHJldHVybiBwcmV2LmNvbmNhdChtb3JlID8gY3VyLmZsYXR0ZW4oKSA6IGN1cik7XG4gIH0sW10pO1xufTtcblxuZnVuY3Rpb24gZmxhdHRlbk9iamVjdChvYikge1xuICB2YXIgdG9SZXR1cm4gPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBvYikge1xuICAgIGlmICghb2IuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgIGlmICgodHlwZW9mIG9iW2ldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGZsYXRPYmplY3QgPSBmbGF0dGVuT2JqZWN0KG9iW2ldKTtcbiAgICAgIGZvciAodmFyIHggaW4gZmxhdE9iamVjdCkge1xuICAgICAgICBpZiAoIWZsYXRPYmplY3QuaGFzT3duUHJvcGVydHkoeCkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAodHlwZW9mIGZsYXRPYmplY3RbeF0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgdG9SZXR1cm5beF0gPSBmbGF0T2JqZWN0W3hdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b1JldHVybltpXSA9IG9iW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9SZXR1cm47XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHR5cGUsIHByb3BzLCAuLi5jaGlsZHJlbil7XG4gIHZhciBwYXJhbVR5cGU7XG5cbiAgY2hpbGRyZW4gPSAgY2hpbGRyZW4uZmxhdHRlbigpO1xuXG4gIGlmICghcHJvcHMpXG4gIHByb3BzID0ge307XG5cbiAgaWYodHlwZW9mIHR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBwcm9wcy5ub2RlX2lkID0gd2luZG93Ll9fTk9ERV9JRCArICcnO1xuICAgIHByb3BzID0gZmxhdHRlbk9iamVjdChwcm9wcyk7XG4gICAgd2luZG93Ll9fTk9ERV9JRCsrO1xuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQucHJvcHMucGFyZW50SWQgPSBwcm9wcy5pZDtcbiAgICB9KVxuXG4gICAgaWYgKCFwcm9wcy5fX2ZpbGVuYW1lKVxuICAgIHByb3BzLl9fZmlsZW5hbWUgPSBcImZpbGVuYW1lIG5vdCBhZGRlZFwiO1xuXG4gICAgcmV0dXJuIHt0eXBlOiB0eXBlLCAgcHJvcHM6IHByb3BzLCBjaGlsZHJlbjogY2hpbGRyZW59XG5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IHR5cGUocHJvcHMsIGNoaWxkcmVuKTtcbiAgfVxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaGFuZGxlIDogKHVpLCBjYWxsYmFjaykgPT4ge1xuICAgIGlmICghdWkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYodWkucmVuZGVyKSB7XG4gICAgICBpZiAodHlwZW9mIEFuZHJvaWQgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFuZHJvaWQgaXMgdW5kZWZpbmVkXCIpO1xuXG4gICAgICBpZiAod2luZG93Ll9fT1MgIT0gXCJBTkRST0lEXCIpXG4gICAgICAgIHJldHVybiBBbmRyb2lkLlJlbmRlcih1aS5yZW5kZXIsIG51bGwpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKHR5cGVvZiBBbmRyb2lkLmdldE5ld0lEID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBBbmRyb2lkLlJlbmRlcihKU09OLnN0cmluZ2lmeSh1aS5yZW5kZXIpLCBudWxsLCBcImZhbHNlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBBbmRyb2lkLlJlbmRlcihKU09OLnN0cmluZ2lmeSh1aS5yZW5kZXIpLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHVpLnJ1bkluVUkpIHtcbiAgICAgIEFuZHJvaWQucnVuSW5VSSh1aS5ydW5JblVJLCBudWxsKTtcbiAgICB9XG4gICAgaWYodWkuYWRkVmlld1RvUGFyZW50KSB7XG4gICAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudCh1aS5hZGRWaWV3VG9QYXJlbnQucGFyZW50SWQsIEpTT04uc3RyaW5naWZ5KHVpLmFkZFZpZXdUb1BhcmVudC5qc3gpLCB1aS5hZGRWaWV3VG9QYXJlbnQuaW5kZXgsIG51bGwpO1xuICAgIH1cbiAgfVxufSIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuLy8gRm9sbG93aW5nIGZ1bmN0aW9ucyBhcmUgdXNlZCBieSBXRUIgYW5kIElPUyBSZW5kZXJcbmZ1bmN0aW9uIGNhY2hlRGltZW4odmlldykge1xuICBsZXQgcHJvcHMgPSB2aWV3LnByb3BzO1xuICBsZXQgZGltZW4gPSB7XG4gICAgdzogcHJvcHMudyxcbiAgICBoOiBwcm9wcy5oLFxuICAgIHg6IHByb3BzLngsXG4gICAgeTogcHJvcHMueSxcbiAgICBncmF2aXR5OiBwcm9wcy5ncmF2aXR5LFxuICAgIHBhZGRpbmc6IHByb3BzLnBhZGRpbmcsXG4gICAgb3JpZW50YXRpb246IHByb3BzLm9yaWVudGF0aW9uLFxuICAgIHN0cm9rZTogcHJvcHMuc3Ryb2tlID8gcHJvcHMuc3Ryb2tlLnNwbGl0KFwiLFwiKVswXSAqIDEgOiAwLFxuICB9XG4gIHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1twcm9wcy5pZF0gPSBkaW1lbjtcbn1cblxuZnVuY3Rpb24gc2hvdWxkTW92ZSh2aWV3KSB7XG4gIGxldCBwcm9wcyA9IHZpZXcucHJvcHM7XG4gIGxldCBkaW1lbiA9IHtcbiAgICB3OiBwcm9wcy53LFxuICAgIGg6IHByb3BzLmgsXG4gICAgeDogcHJvcHMueCxcbiAgICB5OiBwcm9wcy55XG4gIH07XG4gIGxldCBjYWNoZWREaW1lbiA9IHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1twcm9wcy5pZF07XG4gIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gIGlmICghY2FjaGVkRGltZW4pXG4gICAgcmV0dXJuIGRpbWVuO1xuICBmb3IgKGxldCBrZXkgaW4gZGltZW4pIHtcbiAgICBpZiAoY2FjaGVkRGltZW5ba2V5XSAhPSBkaW1lbltrZXldKSB7XG4gICAgICBkaW1lbi5pZCA9IHByb3BzLmlkO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIGlmIChjaGFuZ2VkKVxuICAgIHJldHVybiBkaW1lbjtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldE9TKCkge1xuICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCF1c2VyQWdlbnQpXG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiVXNlckFnZW50IGlzIG51bGxcIikpO1xuICBpZiAodXNlckFnZW50LmluY2x1ZGVzKFwiQW5kcm9pZFwiKSAmJiB1c2VyQWdlbnQuaW5jbHVkZXMoXCJWZXJzaW9uXCIpKVxuICAgIHJldHVybiBcIkFORFJPSURcIjtcbiAgaWYgKCh1c2VyQWdlbnQuaW5jbHVkZXMoXCJpUGhvbmVcIikgfHwgdXNlckFnZW50LmluY2x1ZGVzKFwiaVBhZFwiKSkgJiYgIXVzZXJBZ2VudC5pbmNsdWRlcyhcIlZlcnNpb25cIikpXG4gICAgcmV0dXJuIFwiSU9TXCI7XG4gIHJldHVybiBcIldFQlwiO1xufVxuXG5mdW5jdGlvbiBjbGVhclZpZXdFeHRlcm5hbHModmlldykge1xuICBpZiAoIXZpZXcpXG4gICAgcmV0dXJuO1xuXG4gIGRlbGV0ZSB3aW5kb3cuX19WSUVXU1t2aWV3LnByb3BzLmlkXTtcbiAgZGVsZXRlIHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1t2aWV3LnByb3BzLmlkXTtcbiAgXG4gIGlmKF9fT0JTRVJWRVJTW3ZpZXcucHJvcHMuaWRdKVxuICAgIGRlbGV0ZSB3aW5kb3cuX19PQlNFUlZFUlNbdmlldy5wcm9wcy5pZF07XG5cbiAgdmlldy5jaGlsZHJlbi5mb3JFYWNoKGNsZWFyVmlld0V4dGVybmFscyk7XG59XG5cbi8vIHVzZTogY2xvbmUoIDx0aGluZyB0byBjb3B5PiApIHJldHVybnMgPG5ldyBjb3B5PlxuZnVuY3Rpb24gY2xvbmUobywgbSl7XG4gIC8vIHJldHVybiBub24gb2JqZWN0IHZhbHVlc1xuICBpZignb2JqZWN0JyAhPT10eXBlb2YgbykgcmV0dXJuIG9cbiAgLy8gbTogYSBtYXAgb2Ygb2xkIHJlZnMgdG8gbmV3IG9iamVjdCByZWZzIHRvIHN0b3AgcmVjdXJzaW9uXG4gIGlmKCdvYmplY3QnICE9PXR5cGVvZiBtIHx8IG51bGwgPT09bSkgbSA9bmV3IFdlYWtNYXAoKVxuICB2YXIgbiA9bS5nZXQobylcbiAgaWYoJ3VuZGVmaW5lZCcgIT09dHlwZW9mIG4pIHJldHVybiBuXG4gIC8vIHNoYWxsb3cvbGVhZiBjbG9uZSBvYmplY3RcbiAgdmFyIGMgPU9iamVjdC5nZXRQcm90b3R5cGVPZihvKS5jb25zdHJ1Y3RvclxuICAvLyBUT0RPOiBzcGVjaWFsaXplIGNvcGllcyBmb3IgZXhwZWN0ZWQgYnVpbHQgaW4gdHlwZXMgaS5lLiBEYXRlIGV0Y1xuICBzd2l0Y2goYykge1xuICAgIC8vIHNob3VsZG4ndCBiZSBjb3BpZWQsIGtlZXAgcmVmZXJlbmNlXG4gICAgY2FzZSBCb29sZWFuOlxuICAgIGNhc2UgRXJyb3I6XG4gICAgY2FzZSBGdW5jdGlvbjpcbiAgICBjYXNlIE51bWJlcjpcbiAgICBjYXNlIFByb21pc2U6XG4gICAgY2FzZSBTdHJpbmc6XG4gICAgY2FzZSBTeW1ib2w6XG4gICAgY2FzZSBXZWFrTWFwOlxuICAgIGNhc2UgV2Vha1NldDpcbiAgICAgIG4gPW9cbiAgICAgIGJyZWFrO1xuICAgIC8vIGFycmF5IGxpa2UvY29sbGVjdGlvbiBvYmplY3RzXG4gICAgY2FzZSBBcnJheTpcbiAgICAgIG0uc2V0KG8sIG4gPW8uc2xpY2UoMCkpXG4gICAgICAvLyByZWN1cnNpdmUgY29weSBmb3IgY2hpbGQgb2JqZWN0c1xuICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uKHYsaSl7XG4gICAgICAgIGlmKCdvYmplY3QnID09PXR5cGVvZiB2KSBuW2ldID1jbG9uZSh2LCBtKVxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFycmF5QnVmZmVyOlxuICAgICAgbS5zZXQobywgbiA9by5zbGljZSgwKSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRGF0YVZpZXc6XG4gICAgICBtLnNldChvLCBuID1uZXcgKGMpKGNsb25lKG8uYnVmZmVyLCBtKSwgby5ieXRlT2Zmc2V0LCBvLmJ5dGVMZW5ndGgpKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBNYXA6XG4gICAgY2FzZSBTZXQ6XG4gICAgICBtLnNldChvLCBuID1uZXcgKGMpKGNsb25lKEFycmF5LmZyb20oby5lbnRyaWVzKCkpLCBtKSkpXG4gICAgICBicmVhaztcbiAgICBjYXNlIEludDhBcnJheTpcbiAgICBjYXNlIFVpbnQ4QXJyYXk6XG4gICAgY2FzZSBVaW50OENsYW1wZWRBcnJheTpcbiAgICBjYXNlIEludDE2QXJyYXk6XG4gICAgY2FzZSBVaW50MTZBcnJheTpcbiAgICBjYXNlIEludDMyQXJyYXk6XG4gICAgY2FzZSBVaW50MzJBcnJheTpcbiAgICBjYXNlIEZsb2F0MzJBcnJheTpcbiAgICBjYXNlIEZsb2F0NjRBcnJheTpcbiAgICAgIG0uc2V0KG8sIG4gPW5ldyAoYykoY2xvbmUoby5idWZmZXIsIG0pLCBvLmJ5dGVPZmZzZXQsIG8ubGVuZ3RoKSlcbiAgICAgIGJyZWFrO1xuICAgIC8vIHVzZSBidWlsdCBpbiBjb3B5IGNvbnN0cnVjdG9yXG4gICAgY2FzZSBEYXRlOlxuICAgIGNhc2UgUmVnRXhwOlxuICAgICAgbS5zZXQobywgbiA9bmV3IChjKShvKSlcbiAgICAgIGJyZWFrO1xuICAgIC8vIGZhbGxiYWNrIGdlbmVyaWMgb2JqZWN0IGNvcHlcbiAgICBkZWZhdWx0OlxuICAgICAgbS5zZXQobywgbiA9T2JqZWN0LmFzc2lnbihuZXcgKGMpKCksIG8pKVxuICAgICAgLy8gcmVjdXJzaXZlIGNvcHkgZm9yIGNoaWxkIG9iamVjdHNcbiAgICAgIGZvcihjIGluIG4pIGlmKCdvYmplY3QnID09PXR5cGVvZiBuW2NdKSBuW2NdID1jbG9uZShuW2NdLCBtKVxuICB9XG4gIHJldHVybiBuXG59XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICB2YXIgb2JqID0ge30sXG4gICAgICBpID0gMCxcbiAgICAgIGlsID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgIGtleTtcbiAgZm9yICg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICBmb3IgKGtleSBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaG91bGRNb3ZlLFxuICBjYWNoZURpbWVuLFxuICBnZXRPUyxcbiAgbWVyZ2UsXG4gIGNsZWFyVmlld0V4dGVybmFscyxcbiAgY2xvbmUsXG59IiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4gKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbiAqXG4gKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiAqIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4gKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4gKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuICogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4gKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiAqIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4gKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuICovXG5cbm1vZHVsZS5leHBvcnRzLm1hcCA9IChmbikgPT4ge1xuXHRpZih0eXBlb2Ygd2luZG93Ll9fRk5fSU5ERVggIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX0ZOX0lOREVYICE9PSBudWxsKSB7XG5cdFx0dmFyIHByb3h5Rm5OYW1lID0gJ0YnICsgd2luZG93Ll9fRk5fSU5ERVg7XG5cdFx0aWYgKHdpbmRvdy5fX3BheWxvYWQgJiYgd2luZG93Ll9fcGF5bG9hZC5zZXJ2aWNlKXtcblx0XHRcdHByb3h5Rm5OYW1lID0gd2luZG93Ll9fcGF5bG9hZC5zZXJ2aWNlICsgXCJfXCIgKyBwcm94eUZuTmFtZTtcblx0XHR9XG5cdFx0d2luZG93Ll9fUFJPWFlfRk5bcHJveHlGbk5hbWVdID0gZm47XG5cdCAgXHR3aW5kb3cuX19GTl9JTkRFWCsrO1xuXHRcdHJldHVybiBwcm94eUZuTmFtZTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgaW5pdGlhbGlzZSB3aW5kb3cuX19GTl9JTkRFWCA9IDAgaW4gaW5kZXguanMgb2YgeW91ciBwcm9qZWN0LlwiKTtcblx0fVxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Y2FsbGJhY2tNYXBwZXIgOiByZXF1aXJlKFwiLi9jYWxsYmFja01hcHBlclwiKVxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5jb25zdCBoZWxwZXJzID0ge1xuXHRjb21tb24gOiByZXF1aXJlKFwiLi9jb21tb25cIilcbn07XG5cblxuaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG5cdGhlbHBlcnMuYW5kcm9pZCA9IHJlcXVpcmUoXCIuL2FuZHJvaWRcIilcbn1cbmVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpIHtcblx0aGVscGVycy53ZWIgPSByZXF1aXJlKFwiLi93ZWJcIik7XG59XG5lbHNlIHtcblx0aGVscGVycy5pb3MgPSByZXF1aXJlKFwiLi9pb3NcIik7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzOyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBbXG5cdFwiIzgzRkNFOFwiLFxuXHRcIiM4OUY2RTRcIixcblx0XCIjOEZFRkRGXCIsXG5cdFwiIzk2RTlEQlwiLFxuXHRcIiM5Q0UzRDdcIixcblx0XCIjRkVFOUU2XCIsXG5cdFwiI0ZFRjdFN1wiLFxuXHRcIiNGRkZBRTVcIixcblx0XCIjRjVGQUVCXCIsXG5cdFwiI0U1RkZGNVwiXG5dXG5cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmbGF0dGVuT2JqZWN0KG9iKSB7XG4gIHZhciB0b1JldHVybiA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iKSB7XG4gICAgaWYgKCFvYi5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG4gICAgaWYgKCh0eXBlb2Ygb2JbaV0pID09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgZmxhdE9iamVjdCA9IGZsYXR0ZW5PYmplY3Qob2JbaV0pO1xuICAgICAgZm9yICh2YXIgeCBpbiBmbGF0T2JqZWN0KSB7XG4gICAgICAgIGlmICghZmxhdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSh4KSkgY29udGludWU7XG4gICAgICAgIHRvUmV0dXJuW3hdID0gZmxhdE9iamVjdFt4XTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdG9SZXR1cm5baV0gPSBvYltpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9SZXR1cm47XG59OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHBhcnNlUGFyYW1zIDogcmVxdWlyZShcIi4vcGFyc2VQYXJhbXNcIiksXG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5pbXBvcnQgY29sb3JzIGZyb20gXCIuL2NvbG9yc1wiO1xuaW1wb3J0IGZsYXR0ZW5PYmplY3QgZnJvbSBcIi4vZmxhdHRlbk9iamVjdFwiO1xuXG52YXIgY2FsbGJhY2tNYXBwZXIgID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jYWxsYmFja01hcHBlclwiKVxuXG5sZXQgZ2V0U2V0VHlwZSA9IDE7XG5cbi8qKlxuICogQ2hlY2tzIHRoZSBuYXRpdmUgc2V0IHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLm15c3RpcXVlX3ZlcnNpb25cbiAqIGFuZCBjaGVja3MgaWYgbXlzdGlxdWUgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gdGhlIHBhc3NlZCB2ZXJzaW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gbnVtYmVyIHRvIGJlIGNoZWNrZWQgYWdhaW5zdC4gSWYgcGFzc2VkIGVtcHR5IHJldHVybnMgdHJ1ZS5cbiAqIEByZXR1cm4ge2Jvb2x9IHRydWUgaWYgbXlzdGlxdWUgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gcGFzc2VkIHZlcnNpb24gZWxzZSBmYWxzZS4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAqL1xuZnVuY3Rpb24gaXNNeXN0aXF1ZVZlcnNpb25HcmVhdGVyVGhhbih2ZXJzaW9uKSB7XG4gIGlmICh3aW5kb3cuX19ERVZJQ0VfREVUQUlMUyAmJiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5teXN0aXF1ZV92ZXJzaW9uKSB7XG4gICAgdmFyIHNka1ZlcnNpb24gPSBwYXJzZUZsb2F0KHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLm15c3RpcXVlX3ZlcnNpb24pO1xuICAgIGlmIChzZGtWZXJzaW9uPjApIHtcbiAgICAgICAgcmV0dXJuIHNka1ZlcnNpb24+cGFyc2VGbG9hdCh2ZXJzaW9uKT90cnVlOmZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRDb2xvclRvUmdiYShjb2xvcil7XG4gIGNvbG9yID0gcldTKGNTKGNvbG9yKSk7XG5cbiAgdmFyIHZhbHVlcztcbiAgdmFyIGFscGhhID0gXCIxLjAwXCI7XG5cbiAgaWYgKGNvbG9yLmxlbmd0aCA+PSA4KSB7XG4gICAgYWxwaGEgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMyksIDE2KTtcbiAgICBhbHBoYSA9IChhbHBoYSAvIDI1NSkudG9GaXhlZCgyKTtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygzLCA5KTtcbiAgfSBlbHNlIHtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygxLCBjb2xvci5sZW5ndGgpO1xuICB9XG5cbiAgY29sb3IgPSBjb252ZXJ0SGV4VG9SZ2IocldTKGNvbG9yKSk7XG4gIHZhbHVlcyA9IGNvbG9yLnNwbGl0KCcsJyk7XG5cbiAgcmV0dXJuIHtcbiAgICByOiByV1ModmFsdWVzWzBdKSxcbiAgICBnOiByV1ModmFsdWVzWzFdKSxcbiAgICBiOiByV1ModmFsdWVzWzJdKSxcbiAgICBhOiBhbHBoYVxuICB9O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0SGV4VG9SZ2IoaGV4KSB7XG4gIHZhciByID0gKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMCwyKSwgMTYpLzI1NSkudG9GaXhlZCgyKTtcbiAgdmFyIGcgPSAocGFyc2VJbnQoaGV4LnN1YnN0cmluZygyLDQpLCAxNikvMjU1KS50b0ZpeGVkKDIpO1xuICB2YXIgYiA9IChwYXJzZUludChoZXguc3Vic3RyaW5nKDQsNiksIDE2KS8yNTUpLnRvRml4ZWQoMik7XG5cbiAgcmV0dXJuIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGI7XG59XG5cbmZ1bmN0aW9uIGNTKHZhbHVlKSB7XG4gIHJldHVybiAgdmFsdWU/dmFsdWUgKyAnJzogXCJcIjtcbn1cblxuZnVuY3Rpb24gcldTKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8gL2csJycpO1xufVxuXG5mdW5jdGlvbiBzZWxmX3NpemVGcm9tRGljdGlvbmFyeSh3aWR0aCwgaGVpZ2h0KSB7XG4gIHdpbmRvdy5fX1NJWkVfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwic2l6ZVwiICsgd2luZG93Ll9fU0laRV9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2l6ZUZyb21EaWN0aW9uYXJ5OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1xuICAgICAgICBcIndpZHRoXCI6IHdpZHRoLFxuICAgICAgICBcImhlaWdodFwiOiBoZWlnaHQsXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxmX3NldEN1cnNvclBvc2l0aW9uKGlkLCBwb3NpdGlvbikge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEN1cnNvclBvc2l0aW9uOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XG4gICAgICBcInZpZXdJZFwiOiBpZCxcbiAgICAgIFwicG9zaXRpb25cIjogcG9zaXRpb25cbiAgICB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENvbnRlbnRTaXplKCkge1xuICByZXR1cm4gIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRDb250ZW50U2l6ZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCJzaXplXCIgKyB3aW5kb3cuX19TSVpFX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiLCBcInR5cGVcIjogXCJzaXplXCJ9XG4gICAgXVxuICB9O1xufVxuXG5mdW5jdGlvbiBVSUNvbG9yX2NvbG9yV2l0aFJHQkEocixnLGIsYSkge1xuICB3aW5kb3cuX19DT0xPUl9JTkRFWCsrO1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiY29sb3JcIiArIHdpbmRvdy5fX0NPTE9SX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJVSUNvbG9yXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJjb2xvcldpdGhSZWQ6Z3JlZW46Ymx1ZTphbHBoYTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogciAsIFwidHlwZVwiOiBcImZcIn0sXG4gICAgICB7XCJuYW1lXCI6IGcgLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgICAge1wibmFtZVwiOiBiICwgXCJ0eXBlXCI6IFwiZlwifSxcbiAgICAgIHtcIm5hbWVcIjogYSAsIFwidHlwZVwiOiBcImZcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19waXZvdFgodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRQaXZvdFg6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHZhbHVlK1wiXCIsIFwidHlwZVwiOiBcInNcIn0sXG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfcGl2b3RZKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UGl2b3RZOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiB2YWx1ZStcIlwiLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxmX2FuaW1hdGVfdHJhbnNsYXRpb24ob2JqLCBwcm9wcykge1xuICBvYmoudmFsdWVzWzBdLnByb3BlcnRpZXMgPSBbXG4gICAgICB7XG4gICAgICAgIFwia2V5XCI6IFwiZnJhbWVcIixcbiAgICAgICAgXCJ2YWx1ZXNcIjoge1xuICAgICAgICAgIFwieFwiOiBwcm9wcy54LFxuICAgICAgICAgIFwieVwiOiBwcm9wcy55LFxuICAgICAgICAgIFwid2lkdGhcIjogcHJvcHMudyxcbiAgICAgICAgICBcImhlaWdodFwiOiBwcm9wcy5oLFxuICAgICAgICB9XG4gICAgICB9LFxuICBdXG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gc2VsZl9hbmltYXRlX3JvdGF0aW9uKG9iaiwgcHJvcHMpIHtcbiAgb2JqLnZhbHVlc1swXS5wcm9wZXJ0aWVzID0gW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IFwiYW5nbGVcIixcbiAgICAgIFwidmFsdWVzXCI6IHtcblxuICAgICAgfVxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldFRyYW5zbGF0aW9uWihwYXJhbXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgICBcIm1ldGhvZE5hbWVcIjogXCJ0cmFuc2xhdGlvblo6XCIsXG4gICAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogcGFyYW1zLCB0eXBlOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxmX2FuaW1hdGUocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImFuaW1hdGU6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAge1xuICAgICAgICBcImpzb25cIjogcHJvcHMuanNvbixcbiAgICAgICAgXCJ2aWV3VGFnXCI6IHByb3BzLmlkLFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRCYWNrZ3JvdW5kQ29sb3IoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0QmFja2dyb3VuZENvbG9yOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBcImNvbG9yXCIgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIn0sXG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc3VwZXJ2aWV3KCkge1xuICB2YXIgY3VyclZpZXdJbmRleCA9IHdpbmRvdy5fX1ZJRVdfSU5ERVg7XG5cbiAgd2luZG93Ll9fVklFV19JTkRFWCArKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgY3VyclZpZXdJbmRleCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInN1cGVydmlld1wiLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2Nyb2xsVG9JbmRleChpbmRleCl7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2Nyb2xsVG9JbmRleDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogaW5kZXgsIHR5cGU6IFwiaVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBVSVZpZXdfYm91bmRzKCkge1xuICB3aW5kb3cuX19SRUNUX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInJlY3RcIiArIHdpbmRvdy5fX1JFQ1RfSU5ERVgsXG4gICAgXCJmcm9tU3RvcmVcIjogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOlwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJib3VuZHNcIixcbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEVuYWJsZWQobW9kZSkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldEVuYWJsZWQ6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zY3JvbGxFbmFibGVkKHN0YXR1cykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFNjcm9sbEVuYWJsZWQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHN0YXR1cywgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0QXV0b0NvcnJlY3Rpb25UeXBlKG1vZGUpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRBdXRvY29ycmVjdGlvblR5cGU6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRLZXlib2FyZFR5cGUobW9kZSkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldEtleWJvYXJkVHlwZTpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcImlcIn0sXG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEF1dG9DYXBpdGFsaXphdGlvblR5cGUobW9kZSkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldEF1dG9jYXBpdGFsaXphdGlvblR5cGVzOlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogbW9kZSwgXCJ0eXBlXCI6IFwiaVwifSxcbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U3RhdHVzQmFyU3R5bGUobW9kZSkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRTdGF0dXNCYXJTdHlsZTpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcInNcIn0sXG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX2JlY29tZUZpcnN0UmVzcG9uZGVyKG1vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJmb2N1czpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldE9uSXRlbUNsaWNrKGNhbGxiYWNrKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0T25JdGVtQ2xpY2s6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7IFwibmFtZVwiOiBjYWxsYmFja01hcHBlci5tYXAoY2FsbGJhY2spLCBcInR5cGVcIjogXCJzXCIgfSxcbiAgICBdXG4gIH1cbiB9XG5cbmZ1bmN0aW9uIHRoaXNfc2V0T25Gb2N1c0NhbGxiYWNrKGNhbGxiYWNrKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0T25Gb2N1c0NhbGxiYWNrOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgeyBcIm5hbWVcIjogY2FsbGJhY2tNYXBwZXIubWFwKGNhbGxiYWNrKSwgXCJ0eXBlXCI6IFwic1wiIH0sXG4gICAgXVxuICB9XG4gfVxuXG5mdW5jdGlvbiB0aGlzX3NldE9uTWVyY2hhbnRWaWV3SGVpZ2h0Q2hhbmdlQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRPbk1lcmNoYW50Vmlld0hlaWdodENoYW5nZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHsgXCJuYW1lXCI6IGNhbGxiYWNrTWFwcGVyLm1hcChjYWxsYmFjayksIFwidHlwZVwiOiBcInNcIiB9LFxuICAgIF1cbiAgfVxuIH1cblxuZnVuY3Rpb24gdGhpc19zZXRPbihlbmFibGVkKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0T246YW5pbWF0ZWQ6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBlbmFibGVkLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgICB7XCJuYW1lXCI6IFwiMVwiLCBcInR5cGVcIjogXCJpXCJ9XG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX3Nob3dWZXJ0aWNhbFNjcm9sbEJhcihlbmFibGVkKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0U2hvd3NWZXJ0aWNhbFNjcm9sbEluZGljYXRvcjpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IGVuYWJsZWQsIFwidHlwZVwiOiBcImlcIn1cbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U2VjdXJlVGV4dEVudHJ5KGVuYWJsZWQpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRTZWN1cmVUZXh0RW50cnk6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBlbmFibGVkLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gVUlJbWFnZV9pbWFnZU5hbWVkKGltYWdlKSB7XG4gIHdpbmRvdy5fX0lNQUdFX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImltYWdlXCIgKyB3aW5kb3cuX19JTUFHRV9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiaW1hZ2VOYW1lZDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogaW1hZ2UsIFwidHlwZVwiOiBcInNcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRJbWFnZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEltYWdlOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBcImltYWdlXCIgKyB3aW5kb3cuX19JTUFHRV9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZl9yZWN0RnJvbURpY3Rpb25hcnkoeCx5LHcsaCkge1xuICB3aW5kb3cuX19SRUNUX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInJlY3RcIiArIHdpbmRvdy5fX1JFQ1RfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInJlY3RGcm9tRGljdGlvbmFyeTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcbiAgICAgICAgXCJ4XCI6IHgsXG4gICAgICAgIFwieVwiOiB5LFxuICAgICAgICBcIndpZHRoXCI6IHcsXG4gICAgICAgIFwiaGVpZ2h0XCI6IGgsXG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfdXBkYXRlTGF5b3V0UGFyYW1zKGNvbmZpZykge1xuICB2YXIgZGF0YSA9IHtcbiAgICBcIndpZHRoXCI6IGNvbmZpZy53aWR0aCxcbiAgICBcImhlaWdodFwiOiBjb25maWcuaGVpZ2h0LFxuICAgIFwibWFyZ2luXCI6IGNvbmZpZy5tYXJnaW4sXG4gICAgXCJwYWRkaW5nXCI6IGNvbmZpZy5wYWRkaW5nLFxuICAgIFwid2VpZ2h0XCI6IGNvbmZpZy53ZWlnaHQsXG4gICAgXCJncmF2aXR5XCI6IGNvbmZpZy5ncmF2aXR5LFxuICAgIFwidmlzaWJpbGl0eVwiOiBjb25maWcudmlzaWJpbGl0eSxcbiAgICBcIm9yaWVudGF0aW9uXCI6IGNvbmZpZy5vcmllbnRhdGlvbixcbiAgICBcImFsaWdubWVudF9ydWxlc1wiIDogY29uZmlnLmFsaWdubWVudF9ydWxlc1xuICAgIH1cbiAgaWYoZGF0YS5hbGlnbm1lbnRfcnVsZXMgJiYgZGF0YS5hbGlnbm1lbnRfcnVsZXMubGVuZ3RoID09IDApe1xuICAgIGRlbGV0ZSBkYXRhLmFsaWdubWVudF9ydWxlcztcbiAgfVxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwidGhpc1wiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInVwZGF0ZUxheW91dFBhcmFtczpcIixcbiAgICBcInZhbHVlc1wiOiBbe1xuICAgICAgICBcIm5hbWVcIjogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIFwidHlwZVwiOiAncydcbiAgICB9XVxuICB9O1xufVxuXG5cbmZ1bmN0aW9uIHRoaXNfc2V0UGFkZGluZyhwYWRkaW5nKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIk1KUFZpZXdBTFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UGFkZGluZ0xlZnQ6VG9wOlJpZ2h0OkJvdHRvbTpcIixcbiAgICBcInZhbHVlc1wiOiBwYWRkaW5nLnNwbGl0KCcsJykubWFwKG1ha2VVbml0KVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0TWFyZ2luKG1hcmdpbikge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJNSlBWaWV3QUxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE1hcmdpbkxlZnQ6VG9wOlJpZ2h0OkJvdHRvbTpcIixcbiAgICBcInZhbHVlc1wiOiBtYXJnaW4uc3BsaXQoJywnKS5tYXAobWFrZVVuaXQpXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZVVuaXQgKHYsaSxhcnIpIHtcbiAgcmV0dXJuIHtuYW1lIDogdisnJywgdHlwZSA6ICdmJ31cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRIZWlnaHQoaGVpZ2h0KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIk1KUFZpZXdBTFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0SGVpZ2h0OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBoZWlnaHQgKycnLCBcInR5cGVcIjogJ2knfVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFdpZHRoKHdpZHRoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIk1KUFZpZXdBTFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0V2lkdGg6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHdpZHRoICsnJywgXCJ0eXBlXCI6ICdpJ31cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRGcmFtZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRGcmFtZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCJyZWN0XCIgKyB3aW5kb3cuX19SRUNUX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiLCBcInR5cGVcIjogXCJyZWN0XCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGZfYWxpZ25Ub1BhcmVudCh0eXBlLCB2YWx1ZXMpIHtcbiAgd2luZG93Ll9fUE9JTlRfSU5ERVgrKztcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInBvaW50XCIgKyB3aW5kb3cuX19QT0lOVF9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiYWxpZ25Ub1BhcmVudDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IHR5cGUsXG4gICAgICAgIFwieFwiOiB2YWx1ZXMueCxcbiAgICAgICAgXCJ5XCI6IHZhbHVlcy55LFxuICAgICAgICBcInlPZmZzZXRcIjogdmFsdWVzLnlPZmZzZXQsXG4gICAgICAgIFwieE9mZnNldFwiOiB2YWx1ZXMueE9mZnNldCxcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDZW50ZXIoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0Q2VudGVyOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICAgIHtcIm5hbWVcIjogXCJwb2ludFwiICsgd2luZG93Ll9fUE9JTlRfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCIsICBcInR5cGVcIjogXCJwb2ludFwifVxuICAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0KHRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRUZXh0OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICAgIHtcIm5hbWVcIjogZW5jb2RlVVJJKHRleHQpLCBcInR5cGVcIjogXCJzXCJ9XG4gICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFJlZ3VsYXJFeHByZXNzaW9uKHRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UmVndWxhckV4cHJlc3Npb246XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICAgICAge1wibmFtZVwiOiB0ZXh0LCBcInR5cGVcIjogXCJzXCJ9XG4gICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFbmNvZGVkRGF0YSh0ZXh0KSB7XG4gIHZhciBlbmNvZGVkU3RyaW5nID0gdGV4dDtcbiAgaWYgKGlzTXlzdGlxdWVWZXJzaW9uR3JlYXRlclRoYW4oXCIxXCIpKSB7XG4gICAgZW5jb2RlZFN0cmluZyA9IGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfSBlbHNlIGlmIChpc015c3RpcXVlVmVyc2lvbkdyZWF0ZXJUaGFuKFwiMFwiKSkge1xuICAgIGVuY29kZWRTdHJpbmcgPSBidG9hKHRleHQucmVwbGFjZSgvW15cXHgwMC1cXHg3Rl0vZywgXCJcIikpO1xuICB9XG4gIHJldHVybiBlbmNvZGVkU3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEhUTUxUZXh0KHRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRIdG1sVGV4dDpcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7IFwibmFtZVwiOiBnZXRFbmNvZGVkRGF0YSh0ZXh0KVxuICAgICAgLCBcInR5cGVcIjogXCJzXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRQbGFjZWhvbGRlcih0ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UGxhY2Vob2xkZXI6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICAgICAge1wibmFtZVwiOiB0ZXh0LCBcInR5cGVcIjogXCJzXCJ9XG4gICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRQbGFjZWhvbGRlclByb3BlcnRpZXMoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRleHRWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0UGxhY2Vob2xkZXJQcm9wZXJ0aWVzOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IGRhdGEsIFwidHlwZVwiOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIFVJRm9udF9zeXN0ZW1Gb250T2ZTaXplKHNpemUpIHtcbiAgd2luZG93Ll9fRk9OVF9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJVSUZvbnRcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInN5c3RlbUZvbnRPZlNpemU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHNpemUsIFwidHlwZVwiOiBcImZcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gVUlGb250X2ZvbnRXaXRoTmFtZShuYW1lLCBzaXplKSB7XG4gIHdpbmRvdy5fX0ZPTlRfSU5ERVgrKztcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZvbnRcIiArIHdpbmRvdy5fX0ZPTlRfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIk1KUEZvbnRcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImZvbnRXaXRoTmFtZTpzaXplOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBuYW1lLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgICAge1wibmFtZVwiOiBzaXplLmxlbmd0aD4wP3NpemU6XCIxNFwiLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEZvbnQoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRGb250OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XG4gICAgICBcIm5hbWVcIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgICAgXCJjb21wdXRlZFwiOiBcInRydWVcIlxuICAgIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2l6ZVRvRml0KCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNpemVUb0ZpdFwiXG4gIH1cbn1cblxuZnVuY3Rpb24gVUlGb250X2JvbGRTeXN0ZW1Gb250T2ZTaXplKHNpemUpIHtcbiAgd2luZG93Ll9fRk9OVF9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJVSUZvbnRcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImJvbGRTeXN0ZW1Gb250T2ZTaXplOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBzaXplLCBcInR5cGVcIjogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIFVJRm9udF9zeXN0ZW1Gb250T2ZTaXplV2VpZ2h0KHNpemUsIHdlaWdodCkge1xuICB3aW5kb3cuX19GT05UX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZvbnRcIiArIHdpbmRvdy5fX0ZPTlRfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIlVJRm9udFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic3lzdGVtRm9udE9mU2l6ZTp3ZWlnaHQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHNpemUgLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgICAge1wibmFtZVwiOiB3ZWlnaHQgLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldExpbmVCcmVha01vZGUobW9kZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldExpbmVCcmVha01vZGU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXROdW1iZXJPZkxpbmVzKGNvdW50KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TnVtYmVyT2ZMaW5lczpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogY291bnQsIFwidHlwZVwiOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0QWxpZ25tZW50KG1vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRHcmF2aXR5OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBtb2RlICwgXCJ0eXBlXCI6IFwic1wifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFRleHRDb2xvcigpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRUZXh0Q29sb3I6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6ICdjb2xvcicgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0TGVuZ3RoTGltaXQobGVuZ3RoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0VGV4dExlbmd0aExpbWl0OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICB7XCJuYW1lXCI6IGxlbmd0aCArIFwiXCIsIFwidHlwZVwiOiBcImlcIn1cbiAgICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3JlbW92ZUNlbGwoY2VsbEluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJyZW1vdmVPYmplY3RBdEluZGV4OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICB7XCJuYW1lXCI6IGNlbGxJbmRleCArIFwiXCIsIFwidHlwZVwiOiBcImlcIn1cbiAgICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBVSUNvbG9yX2Zyb21MaXRlcmFsKGNvbG9yKSB7XG4gIHdpbmRvdy5fX0NPTE9SX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImNvbG9yXCIgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiVUlDb2xvclwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBjb2xvciArIFwiQ29sb3JcIixcbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX2xheWVyKCkge1xuICB3aW5kb3cuX19MQVlFUl9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJsYXllclwiICsgd2luZG93Ll9fTEFZRVJfSU5ERVgsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwibGF5ZXJcIixcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDb3JuZXJSYWRpdXMocmFkaXVzKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TUpQQ29ybmVyUmFkaXVzOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiByYWRpdXMgKyBcIlwiLCBcInR5cGVcIjogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEJvcmRlcldpZHRoKHdpZHRoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TUpQQm9yZGVyV2lkdGg6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHdpZHRoICsgXCJcIiwgIFwidHlwZVwiOiBcImZcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Qm9yZGVyQ29sb3IoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TUpQQm9yZGVyQ29sb3I6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwiY29sb3JcIiArIHdpbmRvdy5fX0NPTE9SX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiLCB0eXBlOiBcImNnY29sb3JcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRTaGFkb3coaWQsIHNoYWRvd09mZnNldCwgc2hhZG93Qmx1ciwgc2hhZG93U3ByZWFkLCBzaGFkb3dDb2xvciwgc2hhZG93T3BhY2l0eSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFNoYWRvdzpcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFwidmlld0lkXCI6IGlkLFxuICAgICAgICBcImNvbG9yXCI6IHNoYWRvd0NvbG9yLFxuICAgICAgICBcImJsdXJcIjogc2hhZG93Qmx1cixcbiAgICAgICAgXCJvcGFjaXR5XCI6IHNoYWRvd09wYWNpdHksXG4gICAgICAgIFwib2Zmc2V0XCI6IHNoYWRvd09mZnNldCxcbiAgICAgICAgXCJzcHJlYWRcIjogc2hhZG93U3ByZWFkXG4gICAgICAgIH0pLFxuICAgICAgICBcInR5cGVcIjogXCJzXCJcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0R3JhZGllbnQoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEdyYWRpZW50OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XG4gICAgICBcIm5hbWVcIjogZGF0YSxcbiAgICAgIFwidHlwZVwiOiBcInNcIlxuICAgIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0QmFja2dyb3VuZEltYWdlKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0QmFja2dyb3VuZEltYWdlOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XG4gICAgICBcIm5hbWVcIjogXCJpbWFnZVwiICsgd2luZG93Ll9fSU1BR0VfSU5ERVgsXG4gICAgICBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiXG4gICAgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gX1VJTGFiZWxMYXllcl9zZXRNYXNrc1RvQm91bmRzKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjpcImxheWVyXCIgKyB3aW5kb3cuX19MQVlFUl9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiX1VJTGFiZWxMYXllclwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TUpQTWFza3NUb0JvdW5kczpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCIxXCIsIHR5cGU6IFwiaVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFRhZyh0YWcpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRUYWc6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHRhZywgdHlwZTogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGZfZ2V0Vmlld0Zyb21UYWcodGFnKXtcbiAgd2luZG93Ll9fVklFV19JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJnZXRWaWV3RnJvbVRhZzpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogdGFnLCBcInR5cGVcIjogXCJzXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0SW1hZ2VVUkwoaWQsdXJsLHBsYWNlaG9sZGVyKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRJbWFnZVdpdGhVcmw6Ojo6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwiXCIgKyBpZCwgXCJ0eXBlXCI6IFwic1wifSxcbiAgICAgIHtcIm5hbWVcIjogdXJsLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgICAge1wibmFtZVwiOiBwbGFjZWhvbGRlciwgXCJ0eXBlXCI6IFwic1wifVxuICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRHaWYoaWQsIGltYWdlTmFtZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcImxvYWRHaWY6OjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogXCJcIiArIGlkLCBcInR5cGVcIjogXCJzXCIgfSwgeyBcIm5hbWVcIjogaW1hZ2VOYW1lLCBcInR5cGVcIjogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zdGFydEdpZigpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic3RhcnRHSUZcIlxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3N0b3BHaWYoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInN0b3BHSUZcIlxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxmX3NldEFscGhhKGFscGhhKXtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRBbHBoYTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogU3RyaW5nKGFscGhhKSwgdHlwZTogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0SGlkZGVuKGhpZGRlbil7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0SGlkZGVuOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiAoKGhpZGRlbiA9PT0gXCJnb25lXCIgfHwgaGlkZGVuID09PSBcImludmlzaWJsZVwiKSA/IFwiMVwiIDogXCIwXCIpLCB0eXBlOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0UHJvcGVydGllcyhkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQVGV4dFZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRUZXh0UHJvcGVydGllczpcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7XCJuYW1lXCI6IGRhdGEsXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuXG5mdW5jdGlvbiB0aGlzX3NldExldHRlclNwYWNpbmcoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUEVkaXRUZXh0XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0TGV0dGVyU3BhY2luZzpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogZGF0YSwgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0TGluZVNwYWNpbmcoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUExhYmVsXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0TGluZVNwYWNpbmc6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IGRhdGEsIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENhcmV0Q29sb3IoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0VGludENvbG9yOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiAnY29sb3InICsgd2luZG93Ll9fQ09MT1JfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zY3JvbGxUbyh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNjcm9sbFRvOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IHZhbHVlLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEV4cGFuZCh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUEV4cGFuZGFibGVDZWxsXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0RXhwYW5kOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IHZhbHVlLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEV4cGFuZER1cmF0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQRXhwYW5kYWJsZUNlbGxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRFeHBhbmREdXJhdGlvbjpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiB2YWx1ZSwgXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRFeHBhbmRBbHBoYSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUEV4cGFuZGFibGVDZWxsXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0RXhwYW5kQWxwaGE6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcIm5hbWVcIjogdmFsdWUsIFwidHlwZVwiOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U3d5cGUodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUYWJsZVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTd3lwZTpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogdmFsdWUgPyBcInRydWVcIiA6IFwiZmFsc2VcIiwgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VXNlckludGVyYWN0aW9uKGhpZGRlbil7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0VXNlckludGVyYWN0aW9uRW5hYmxlZDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogKGhpZGRlbiA9PT0gXCJ0cnVlXCIgPyBcIjFcIiA6IFwiMFwiKSwgdHlwZTogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U2VwYXJhdG9yKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0U2VwYXJhdG9yOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiB2YWx1ZSwgdHlwZTogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRTZXBhcmF0b3JSZXBlYXQodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTZXBhcmF0b3JSZXBlYXQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHZhbHVlLCB0eXBlOiBcInNcIiB9XVxuICB9O1xufVxuXG5cbmZ1bmN0aW9uIHRoaXNfc2V0U3dpcGVDYWxsYmFjayh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICAgICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgICAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICAgICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgICAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTd2lwZUNhbGxiYWNrOlwiLFxuICAgICAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogdmFsdWUsIHR5cGU6IFwic1wiIH1dXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXR1cExpc3QobGlzdERhdGEsIGxpc3RJdGVtKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBSZXBlYXRUYWJsZVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXR1cExpc3Q6OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBsaXN0RGF0YSwgdHlwZTogXCJzXCIgfSwgeyBcIm5hbWVcIjogbGlzdEl0ZW0sIHR5cGU6IFwic1wiIH1dXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19pbmxpbmVBbmltYXRpb24oY29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwidGhpc1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldElubGluZUFuaW1hdGlvbjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogbW9kaWZ5VHJhbnNsYXRpb24oY29uZmlnKSwgdHlwZTogXCJzXCIgfV1cbiAgICB9O1xufVxuXG5cbmZ1bmN0aW9uIG1vZGlmeVRyYW5zbGF0aW9uKGNvbmZpZyl7XG4gIHZhciB4ID0gY29uZmlnLnggfHwgXCIwXCI7XG4gIHZhciB5ID0gY29uZmlnLnkgfHwgXCIwXCI7XG4gIHZhciBhbmltYXRpb25BcnJheSA9IEpTT04ucGFyc2UoY29uZmlnLmlubGluZUFuaW1hdGlvbik7XG4gIHZhciBhbmltYXRpb25BcnJheSA9IGFuaW1hdGlvbkFycmF5Lm1hcChmdW5jdGlvbihhKXtcbiAgICBpZihhLmhhc093blByb3BlcnR5KFwiZnJvbVhcIikpe1xuICAgICAgYS5mcm9tWCA9IHBhcnNlSW50KGEuZnJvbVgpICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICAgIGlmKCFhLmhhc093blByb3BlcnR5KFwidG9YXCIpKXtcbiAgICAgICAgYS50b1ggPSAwICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcInRvWFwiKSl7XG4gICAgICBhLnRvWCA9IHBhcnNlSW50KGEudG9YKSArIHBhcnNlSW50KHgpICsgJyc7XG4gICAgfVxuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJmcm9tWVwiKSl7XG4gICAgICBhLmZyb21ZID0gcGFyc2VJbnQoYS5mcm9tWSkgKyBwYXJzZUludCh5KSArICcnO1xuICAgICAgaWYoIWEuaGFzT3duUHJvcGVydHkoXCJ0b1lcIikpe1xuICAgICAgICBhLnRvWSA9IDAgKyBwYXJzZUludCh5KSArICcnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihhLmhhc093blByb3BlcnR5KFwidG9ZXCIpKXtcbiAgICAgIGEudG9ZID0gcGFyc2VJbnQoYS50b1kpICsgcGFyc2VJbnQoeSkgKyAnJztcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH0pXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhbmltYXRpb25BcnJheSk7XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0Q2xvc2VTd2lwZSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICAgICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgICAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICAgICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgICAgICBcIm1ldGhvZE5hbWVcIjogXCJjbG9zZVN3aXBlOlwiLFxuICAgICAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogdmFsdWUgPyBcInRydWVcIiA6IFwiZmFsc2VcIiwgdHlwZTogXCJzXCIgfV1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEVuYWJsZVN3eXBlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgICAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgICAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQVGFibGVWaWV3XCIsXG4gICAgICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFN3aXBlRW5hYmxlZDpcIixcbiAgICAgICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHZhbHVlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIsIHR5cGU6IFwic1wiIH1dXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19icmluZ1N1YlZpZXdUb0Zyb250KHBhcmFtcyl7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJicmluZ1N1YlZpZXdUb0Zyb250OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IHBhcmFtcywgdHlwZTogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENvbnRlbnRNb2RlKG1vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRDb250ZW50TW9kZTpcIixcbiAgICBcInZhbHVlc1wiOlt7XCJuYW1lXCI6IG1vZGUsIHR5cGU6IFwiaVwifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19hZGp1c3RWaWV3V2l0aEtleWJvYXJkKHN0YXR1cykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEFkanVzdFZpZXdXaXRoS2V5Ym9hcmQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbe1wibmFtZVwiOiBzdGF0dXMsIHR5cGU6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VsZl9zZXRQb3B1cE1lbnUocG9wdXBNZW51LCBvbk1lbnVJdGVtQ2xpY2spIHtcbiAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tNYXBwZXIubWFwKG9uTWVudUl0ZW1DbGljayk7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwiY3JlYXRlQWN0aW9uU2hlZXRXaXRoVGl0bGVzOjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogcG9wdXBNZW51LCBcInR5cGVcIjogXCJzXCIgfSwgeyBcIm5hbWVcIjogY2FsbGJhY2ssIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENvcm5lckN1cnZlcyhjb3JuZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogXCJmYWxzZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJ0aGlzXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0Q29ybmVyQ3VydmVzOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBjb3JuZXIgKyBcIlwiLCBcInR5cGVcIjogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDbGlwc1RvQm91bmRzKGJvdW5kcykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldENsaXBzVG9Cb3VuZHM6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IGJvdW5kcyA/IFwiMVwiIDogXCIwXCIsIHR5cGU6IFwiaVwiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfZm9udFdpdGhOYW1lKG5hbWUpIHtcbiAgd2luZG93Ll9fRk9OVF9JTkRFWCsrO1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZm9udFwiICsgd2luZG93Ll9fRk9OVF9JTkRFWCxcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiZm9udFdpdGhOYW1lOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBuYW1lLCBcInR5cGVcIjogXCJzXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIFVJQ29sb3Jfc2V0Q29sb3IoY29sb3IpIHtcbiAgbGV0IHZhbHVlcztcbiAgbGV0IGFscGhhID0gXCIxLjAwXCI7XG5cbiAgaWYgKGNvbG9yLmxlbmd0aCA+PSA4KSB7XG4gICAgYWxwaGEgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwzKSwgMTYpO1xuICAgIGFscGhhID0gKGFscGhhLzI1NSkudG9GaXhlZCgyKTtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygzLCA5KTtcbiAgfSBlbHNlIHtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygxLCBjb2xvci5sZW5ndGgpO1xuICB9XG5cbiAgY29sb3IgPSBjb252ZXJ0SGV4VG9SZ2IocldTKGNvbG9yKSk7XG4gIHZhbHVlcyA9IGNvbG9yLnNwbGl0KCcsJyk7XG5cbiAgbGV0IHIgPSByV1ModmFsdWVzWzBdKTtcbiAgbGV0IGcgPSByV1ModmFsdWVzWzFdKTtcbiAgbGV0IGIgPSByV1ModmFsdWVzWzJdKTtcbiAgbGV0IGEgPSBhbHBoYTtcblxuXG4gIHJldHVybiBVSUNvbG9yX2NvbG9yV2l0aFJHQkEociwgZywgYiwgYSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUtleXMoY29uZmlnKSB7XG4gIHZhciBrZXlzID0gIE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gIGZvciAodmFyIGkgPSAwOyBpPGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZ1trZXlzW2ldXSA9PSBcInVuZGVmaW5lZFwiIHx8IGNvbmZpZ1trZXlzW2ldXSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgY29uZmlnW2tleXNbaV1dO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZ1trZXlzW2ldXSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbmZpZ1trZXlzW2ldXSA9IGNhbGxiYWNrTWFwcGVyLm1hcChjb25maWdba2V5c1tpXV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoa2V5c1tpXSAhPT0gXCJpZFwiICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJfX2ZpbGVuYW1lXCIgJiZcbiAgICAgICAgICBrZXlzW2ldICE9PSBcImN1cnJDaGlsZE9mZnNldFwiICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJtZXRob2RzXCIgICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJzd2lwZUVuYWJsZVwiICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJ2aWV3UGFnZXJcIiAmJlxuICAgICAgICAgIGtleXNbaV0gIT09IFwidGFibGVWaWV3XCIpIHtcblxuICAgICAgICBkZWxldGUgY29uZmlnW2tleXNbaV1dO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVHlwZSh0eXBlLCBjb25maWcpIHtcbiAgdmFyIG1vZGlmaWVkVHlwZSAgPSBcIm1KUFZpZXdcIjtcbiAgc3dpdGNoKHR5cGUpe1xuICAgIGNhc2UgXCJlZGl0VGV4dFwiOntcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQRWRpdFRleHRcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImltYWdlVmlld1wiOntcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQSW1hZ2VWaWV3XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0ZXh0Vmlld1wiOntcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQVGV4dFZpZXdcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInNjcm9sbFZpZXdcIjoge1xuICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KCdoZWlnaHQnKSYmIGNvbmZpZy5oZWlnaHQgPT0gJ3dyYXBfY29udGVudCcpe1xuICAgICAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTY3JvbGxWaWV3XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFNjcm9sbFZpZXdcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcub3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIjoge1xuICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KCd3aWR0aCcpJiYgY29uZmlnLndpZHRoID09ICd3cmFwX2NvbnRlbnQnKXtcbiAgICAgICAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQU2Nyb2xsVmlld1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTY3JvbGxWaWV3XCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwidGFibGVWaWV3XCI6XG4gICAgY2FzZSBcImxpc3RWaWV3XCI6IHtcbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJsaXN0RGF0YVwiKSAmJiBjb25maWcuaGFzT3duUHJvcGVydHkoXCJsaXN0SXRlbVwiKSkge1xuICAgICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFJlcGVhdFRhYmxlVmlld1wiO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBUYWJsZVZpZXdcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImNvbGxlY3Rpb25WaWV3XCI6XG4gICAgY2FzZSBcInZpZXdQYWdlclwiOntcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQQ29sbGVjdGlvblZpZXdcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInByb2dyZXNzQmFyXCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQQWN0aXZpdHlJbmRpY2F0b3JcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInN3aXRjaFwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFN3aXRjaFwiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwic3d5cGVMYXlvdXRcIjoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTd3lwZUxheW91dENlbGxcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImFjY29yZGlvbkxheW91dFwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUEV4cGFuZGFibGVDZWxsXCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsaW5lYXJMYXlvdXRcIjoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBMaW5lYXJMYXlvdXRcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInJlbGF0aXZlTGF5b3V0XCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQUmVsYXRpdmVMYXlvdXRcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImZyYW1lTGF5b3V0XCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQUmVsYXRpdmVMYXlvdXRcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgZGVmYXVsdDoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBWaWV3XCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBtb2RpZmllZFR5cGU7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUtleXMoY29uZmlnLCB0eXBlKSB7XG4gIHZhciBtYXAgPSB7XG4gICAgXCJpbWFnZVVybFwiOiBcImltYWdlTmFtZWRcIixcbiAgICBcInBhY2thZ2VJY29uXCIgOiBcImltYWdlTmFtZWRcIixcbiAgICBcImNvbG9yXCI6IFwidGV4dENvbG9yXCJcbiAgfTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG5cbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAobWFwW2tleV0pIHtcbiAgICAgIGNvbmZpZ1ttYXBba2V5XV0gPSBjb25maWdba2V5XTtcbiAgICAgIGRlbGV0ZSBjb25maWdba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChjb25maWcuc3Ryb2tlKSAge1xuICAgIGNvbmZpZy5ib3JkZXJXaWR0aCA9IGNvbmZpZy5zdHJva2Uuc3BsaXQoXCIsXCIpWzBdO1xuICAgIGNvbmZpZy5ib3JkZXJDb2xvciA9IGNvbmZpZy5zdHJva2Uuc3BsaXQoXCIsXCIpWzFdO1xuICB9XG5cbiAgLy8gQWRkIGFsbCB2aWV3IGJhc2VkIHByb3AgaW5qZWN0aW9ucyBiZWxvdy5cbiAgc3dpdGNoICh0eXBlLnRvTG93ZXJDYXNlKCkpe1xuICAgIGNhc2UgXCJzY3JvbGx2aWV3XCI6e1xuICAgICAgY29uZmlnLm9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiXG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJob3Jpem9udGFsc2Nyb2xsdmlld1wiOntcbiAgICAgIGNvbmZpZy5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiXG4gICAgfVxuICAgIGJyZWFrO1xuICB9XG4gIC8vIEFkZCBhbGwgdmlldyBiYXNlZCBwcm9wIGluamVjdGlvbnMgYWJvdmUuXG4gIHJldHVybiBjb25maWc7XG59XG5cblxuLy8gY1MgLSBjb252ZXJ0IHRvIFN0cmluZ1xuLy8gcldTIC0gcmVtb3ZlIHdoaXRlIHNwYWNlc1xuLy8gZnJvbVN0b3JlIG1ldGhvZHMgZG9udCAgdXNlIGludm9rZU9uXG4vLyB0aGUgZXh0cmFjdCBjbGFzc05hbWUgb3V0IG9mIHRoZSBzdG9yZWQgb2JqZWN0IGluIHRoZSBzdG9yZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0eXBlLCBjb25maWcsIF9nZXRTZXRUeXBlKSB7XG4gIGNvbmZpZyA9IGNoYW5nZUtleXMoZmxhdHRlbk9iamVjdChjb25maWcpLCB0eXBlKTtcbiAgdHlwZSA9IGdlbmVyYXRlVHlwZSh0eXBlLCBjb25maWcpO1xuICBnZXRTZXRUeXBlID0gKF9nZXRTZXRUeXBlID09IFwic2V0XCIpPzE6MDtcbiAgY29uZmlnLm1ldGhvZHMgPSBbXTtcbiAgY29uZmlnLmFsaWdubWVudF9ydWxlcyA9IFtdO1xuXG4gIC8vIHRhZyBzZXRcbiAgaWYgKGNvbmZpZy5pZCkgIHtcbiAgICBsZXQgdGFnID0gIHJXUyhjUyhjb25maWcuaWQpKTtcblxuICAgIGlmICghZ2V0U2V0VHlwZSkge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX2dldFZpZXdGcm9tVGFnKHRhZykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VGFnKHRhZykpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZyYW1lXG4gIGlmICghY29uZmlnLnVzZUNvbnN0cmFpdHMgJiYgKGNvbmZpZy54IHx8IGNvbmZpZy55IHx8IGNvbmZpZy53IHx8IGNvbmZpZy5oKSkge1xuICAgIGxldCB4ID0gcldTKGNTKGNvbmZpZy54KSkgfHwgIFwiMFwiO1xuICAgIGxldCB5ID0gIHJXUyhjUyhjb25maWcueSkpfHwgXCIwXCI7XG4gICAgbGV0IHdpZHRoID0gcldTKGNTKGNvbmZpZy53KSkgfHwgXCIwXCI7XG4gICAgbGV0IGhlaWdodCA9IHJXUyhjUyhjb25maWcuaCkpIHx8IFwiMFwiO1xuXG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX3JlY3RGcm9tRGljdGlvbmFyeSh4LHksd2lkdGgsaGVpZ2h0KSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEZyYW1lKCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInVzZUNvbnN0cmFpdHNcIikgJiYgY29uZmlnLnVzZUNvbnN0cmFpdHMgJiYgY29uZmlnLmhhc093blByb3BlcnR5KFwiZXhwYW5kXCIpKXtcbiAgICBjb25maWcudmlzaWJpbGl0eSA9IGNvbmZpZy5leHBhbmQgPyAoY29uZmlnLnZpc2liaWxpdHkgPyBjb25maWcudmlzaWJpbGl0eSA6IFwidmlzaWJsZVwiKSA6IFwiZ29uZVwiO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImFsaWduUGFyZW50Qm90dG9tXCIpICYmIGNvbmZpZy5hbGlnblBhcmVudEJvdHRvbSA9PSBcInRydWUsLTFcIil7XG4gICAgY29uZmlnLmFsaWdubWVudF9ydWxlcy5wdXNoKCdhbGlnbl9wYXJlbnRfYm90dG9tJyk7XG4gIH1cblxuICBpZiAoY29uZmlnLnVzZUNvbnN0cmFpdHMpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfdXBkYXRlTGF5b3V0UGFyYW1zKGNvbmZpZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxldHRlclNwYWNpbmdcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0TGV0dGVyU3BhY2luZyhjb25maWcubGV0dGVyU3BhY2luZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxpbmVTcGFjaW5nXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldExpbmVTcGFjaW5nKGNvbmZpZy5saW5lU3BhY2luZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNhcmV0Q29sb3JcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJQ29sb3Jfc2V0Q29sb3IoY29uZmlnLmNhcmV0Q29sb3IpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Q2FyZXRDb2xvcigpKTtcbiAgfVxuXG4gIC8vIGJhY2tncm91bmRcbiAgaWYgKGNvbmZpZy5iYWNrZ3JvdW5kIHx8IGNvbmZpZy5ncmFkaWVudCB8fCBjb25maWcuYmFja2dyb3VuZERyYXdhYmxlKSB7XG4gICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImdyYWRpZW50XCIpKSB7XG4gICAgICB2YXIgZ3JhZGllbnQgPSBKU09OLnBhcnNlKGNvbmZpZy5ncmFkaWVudCk7XG4gICAgICB2YXIgZ3JhZGllbnRUeXBlID0gZ3JhZGllbnQudHlwZTtcbiAgICAgIHZhciBncmFkaWVudEFuZ2xlID0gZ3JhZGllbnQuYW5nbGU7XG4gICAgICB2YXIgY29sb3VycyA9IFtdO1xuXG4gICAgICBncmFkaWVudC52YWx1ZXMuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICAgIGNvbG91cnMucHVzaChjb252ZXJ0Q29sb3JUb1JnYmEoY29sb3IpKTtcbiAgICAgIH0pO1xuXG4gICAgICBncmFkaWVudCA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29sb3JzOiBjb2xvdXJzLFxuICAgICAgICB0eXBlOiBncmFkaWVudFR5cGUsXG4gICAgICAgIGFuZ2xlOiBncmFkaWVudEFuZ2xlXG4gICAgICB9KTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRHcmFkaWVudChncmFkaWVudCkpO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYmFja2dyb3VuZERyYXdhYmxlXCIpKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJSW1hZ2VfaW1hZ2VOYW1lZChjb25maWcuYmFja2dyb3VuZERyYXdhYmxlKSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0QmFja2dyb3VuZEltYWdlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJQ29sb3Jfc2V0Q29sb3IoY29uZmlnLmJhY2tncm91bmQpKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRCYWNrZ3JvdW5kQ29sb3IoKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gYm9yZGVyQ29sb3IsIHJhZGl1cyBhbmQgd2lkdGhcbiAgLy8gd2lsbCB3b3JrIG9ubHkgZm9yIHVpVmlldyBhbmQgdWlMYWJlbFxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY29ybmVyUmFkaXVzXCIpKSB7XG4gICAgbGV0IGFyZyA9IHJXUyhjUyhjb25maWcuY29ybmVyUmFkaXVzKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZXRDb3JuZXJSYWRpdXMoYXJnKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYm9yZGVyV2lkdGhcIikpIHtcbiAgICBsZXQgYXJnID0gcldTKGNTKGNvbmZpZy5ib3JkZXJXaWR0aCkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2V0Qm9yZGVyV2lkdGgoYXJnKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYm9yZGVyQ29sb3JcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJQ29sb3Jfc2V0Q29sb3IoY29uZmlnLmJvcmRlckNvbG9yKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZXRCb3JkZXJDb2xvcigpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuZGVidWcpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfbGF5ZXIoKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZXRCb3JkZXJXaWR0aChcIjFcIikpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zaGFkb3cpIHtcbiAgICB2YXIgc2hhZG93VmFsdWVzID0gY29uZmlnLnNoYWRvdy5zcGxpdCgnLCcpO1xuICAgIHZhciBzaGFkb3dCbHVyID0gcldTKGNTKHNoYWRvd1ZhbHVlc1syXSkpO1xuICAgIHZhciBzaGFkb3dTcHJlYWQgPSByV1MoY1Moc2hhZG93VmFsdWVzWzNdKSk7XG4gICAgdmFyIHNoYWRvd09wYWNpdHkgPSByV1MoY1Moc2hhZG93VmFsdWVzWzVdKSk7XG4gICAgdmFyIHNoYWRvd09mZnNldCA9IHtcbiAgICAgIHg6IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMF0pKSxcbiAgICAgIHk6IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMV0pKVxuICAgIH07XG5cbiAgICB2YXIgc2hhZG93Q29sb3IgPSBjb252ZXJ0Q29sb3JUb1JnYmEoc2hhZG93VmFsdWVzWzRdKTtcblxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTaGFkb3coY29uZmlnLmlkLCBzaGFkb3dPZmZzZXQsIHNoYWRvd0JsdXIsIHNoYWRvd1NwcmVhZCwgc2hhZG93Q29sb3IsIHNoYWRvd09wYWNpdHkpKTtcbiAgfVxuXG4gIC8vIG1ha2UgY2hpbGQgZnVsbFdpZHRoIGFuZCBoZWlnaHQgb2YgcGFyZW50XG4gIGlmIChjb25maWcuZmlsbFBhcmVudCkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zdXBlcnZpZXcoKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChVSVZpZXdfYm91bmRzKCkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRGcmFtZSgpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJpbWFnZU5hbWVkXCIpKSB7XG4gICAgbGV0IGlkID0gY1MoY29uZmlnLmlkKTtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSBjb25maWcucGxhY2VIb2xkZXIgfHwgXCJcIjtcbiAgICBpZiAoY29uZmlnLmltYWdlTmFtZWQuZW5kc1dpdGgoXCIuZ2lmXCIpKXtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRHaWYoaWQsIGNvbmZpZy5pbWFnZU5hbWVkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRJbWFnZVVSTChpZCwgY29uZmlnLmltYWdlTmFtZWQsIHBsYWNlaG9sZGVyKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImFkanVzdFZpZXdXaXRoS2V5Ym9hcmRcIikpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19hZGp1c3RWaWV3V2l0aEtleWJvYXJkKGNvbmZpZy5hZGp1c3RWaWV3V2l0aEtleWJvYXJkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwicGxheUdpZlwiKSl7XG4gICAgaWYgKGNvbmZpZy5wbGF5R2lmKVxuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3N0YXJ0R2lmKCkpO1xuICAgIGVsc2VcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zdG9wR2lmKCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oaW50KSB7XG4gICAgaWYgKGNvbmZpZy5sZXR0ZXJTcGFjaW5nKSB7XG4gICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgJ2hpbnQnOiBjUyhjb25maWcuaGludCksXG4gICAgICAgICdsZXR0ZXJTcGFjaW5nJzogY29uZmlnLmxldHRlclNwYWNpbmdcbiAgICAgIH0pO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFBsYWNlaG9sZGVyUHJvcGVydGllcyhkYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRQbGFjZWhvbGRlcihjUyhjb25maWcuaGludCkpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic2VwYXJhdG9yXCIpKSB7XG4gICAgdmFyIF9lbmFibGVkNiA9IGNTKGNvbmZpZy5zZXBhcmF0b3IpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTZXBhcmF0b3IoX2VuYWJsZWQ2KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic2VwYXJhdG9yUmVwZWF0XCIpKSB7XG4gICAgdmFyIF9lbmFibGVkNiA9IGNTKGNvbmZpZy5zZXBhcmF0b3JSZXBlYXQpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTZXBhcmF0b3JSZXBlYXQoX2VuYWJsZWQ2KSk7XG4gIH1cblxuICAgaWYgKGNvbmZpZy50cmFuc2xhdGlvblope1xuICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VHJhbnNsYXRpb25aKGNTKGNvbmZpZy50cmFuc2xhdGlvblopKSk7XG4gICB9XG5cbiAgaWYgKGNvbmZpZy5zY3JvbGxUbykge1xuICAgIHZhciBkYXRhID0gY29uZmlnLnNjcm9sbFRvLnNwbGl0KFwiLFwiKTtcbiAgICB2YXIgcGFyc2VkRGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcInhcIjogZGF0YVswXSwgXCJ5XCI6IGRhdGFbMV19KTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2Nyb2xsVG8oY1MocGFyc2VkRGF0YSkpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJleHBhbmRcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RXhwYW5kKGNvbmZpZy5leHBhbmQ/XCIxXCI6XCIwXCIpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJleHBhbmREdXJhdGlvblwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRFeHBhbmREdXJhdGlvbihjUyhjb25maWcuZXhwYW5kRHVyYXRpb24pKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZXhwYW5kQWxwaGFcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RXhwYW5kQWxwaGEoY1MoY29uZmlnLmV4cGFuZEFscGhhKSkpO1xuICB9XG5cbiAgLy9VcGRhdGVkIHRvIGhhbmRsZSAwIGJlaW5nIHBhc3NlZCBmb3IgZGVmYXVsdCBhbGlnbm1lbnRcbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInRleHRBbGlnbm1lbnRcIikpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUZXh0QWxpZ25tZW50KHJXUyhjUyhjb25maWcudGV4dEFsaWdubWVudCkpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dEZyb21IdG1sXCIpKSB7XG4gICAgICB2YXIgbW9kaWZpZWRIdG1sU3RyaW5nID0gXCI8c3BhbiBzdHlsZT1cXFwiXCJcbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJmb250U3R5bGVcIikpIHtcbiAgICAgICAgICBtb2RpZmllZEh0bWxTdHJpbmcgKz0gXCJmb250LWZhbWlseTpcIitjb25maWcuZm9udFN0eWxlK1wiO1wiXG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dFNpemVcIikpIHtcbiAgICAgICAgICBtb2RpZmllZEh0bWxTdHJpbmcgKz0gXCJmb250LXNpemU6XCIrY29uZmlnLnRleHRTaXplK1wiO1wiXG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dENvbG9yXCIpKSB7XG4gICAgICAgICAgbW9kaWZpZWRIdG1sU3RyaW5nICs9IFwiY29sb3I6XCIrY29uZmlnLnRleHRDb2xvcitcIjtcIlxuICAgICAgfVxuICAgICAgbW9kaWZpZWRIdG1sU3RyaW5nICs9XCJcXFwiPlwiK2NvbmZpZy50ZXh0RnJvbUh0bWwrXCI8L3NwYW4+XCI7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0SFRNTFRleHQobW9kaWZpZWRIdG1sU3RyaW5nKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnRleHRDb2xvcikge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlDb2xvcl9zZXRDb2xvcihjb25maWcudGV4dENvbG9yKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRleHRDb2xvcigpKTtcbiAgfVxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZm9udFN0eWxlXCIpKSB7XG4gICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInRleHRTaXplXCIpKSB7XG4gICAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlGb250X2ZvbnRXaXRoTmFtZShjb25maWcuZm9udFN0eWxlLCBjb25maWcudGV4dFNpemUrXCJcIikpO1xuICAgIH0gZWxzZXtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19mb250V2l0aE5hbWUoY29uZmlnLmZvbnRTdHlsZSkpO1xuICAgIH1cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Rm9udCgpKTtcbiAgfSBlbHNlIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ0ZXh0U2l6ZVwiKSl7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUZvbnRfc3lzdGVtRm9udE9mU2l6ZShjb25maWcudGV4dFNpemUrXCJcIikpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRGb250KCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zY3JvbGxFbmFibGVkKXtcbiAgICB2YXIgc2Nyb2xsRW5hYmxlZCA9IGNTKGNvbmZpZy5zY3JvbGxFbmFibGVkKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2Nyb2xsRW5hYmxlZChzY3JvbGxFbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmZvbnRGYW1pbHkpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJRm9udF9zeXN0ZW1Gb250T2ZTaXplV2VpZ2h0KChjb25maWcudGV4dFNpemUgfHwgXCIxNFwiKSArIFwiXCIsIGNvbmZpZy5mb250RmFtaWx5IHx8IFwiMC4wXCIpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Rm9udCgpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJzaW5nbGVMaW5lXCIpKSB7XG4gICAgaWYoIWNvbmZpZy5zaW5nbGVMaW5lKXtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRMaW5lQnJlYWtNb2RlKFwiMFwiKSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0TnVtYmVyT2ZMaW5lcyhcIjBcIikpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZmlnLnVzZUNvbnN0cmFpdHMgJiYgY29uZmlnLnZpc2liaWxpdHkpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0SGlkZGVuKGNvbmZpZy52aXNpYmlsaXR5KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY2xpY2thYmxlXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFVzZXJJbnRlcmFjdGlvbihyV1MoY1MoY29uZmlnLmNsaWNrYWJsZSkpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnRyYW5zbGF0aW9uWCkge1xuICAgIGxldCBwcm9wcyA9IFt7XG4gICAgICAnaWQnOiAnJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKSxcbiAgICAgICd0eXBlJzogJ3RyYW5zbGF0aW9uJyxcbiAgICAgICdydW5PblJlbmRlcicgOiAndHJ1ZScsXG4gICAgICAnZWFzaW5nJyA6ICdsaW5lYXInLFxuICAgICAgJ2RlbGF5JzogJzAnLFxuICAgICAgJ2R1cmF0aW9uJzogJzEnLFxuICAgICAgJ3Byb3BzJyA6IEpTT04uc3RyaW5naWZ5KFt7J3RvJzogJycgKyBjb25maWcudHJhbnNsYXRpb25YLCAncHJvcCc6J3RyYW5zbGF0aW9uWCcsICdmcm9tJzonMCd9XSlcbiAgICB9XTtcblxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9hbmltYXRlKHsnaWQnOicnK2NvbmZpZy5pZCwnanNvbic6SlNPTi5zdHJpbmdpZnkocHJvcHMpfSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy50cmFuc2xhdGlvblkpIHtcbiAgICBsZXQgcHJvcHMgPSBbe1xuICAgICAgJ2lkJzogJycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiksXG4gICAgICAndHlwZSc6ICd0cmFuc2xhdGlvbicsXG4gICAgICAncnVuT25SZW5kZXInIDogJ3RydWUnLFxuICAgICAgJ2Vhc2luZycgOiAnbGluZWFyJyxcbiAgICAgICdkZWxheSc6ICcwJyxcbiAgICAgICdkdXJhdGlvbic6ICcxJyxcbiAgICAgICdwcm9wcycgOiBKU09OLnN0cmluZ2lmeShbeyd0byc6ICcnICsgY29uZmlnLnRyYW5zbGF0aW9uWSwncHJvcCc6J3RyYW5zbGF0aW9uWScsJ2Zyb20nOicwJ31dKVxuICAgIH1dO1xuXG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX2FuaW1hdGUoeydpZCc6JycrY29uZmlnLmlkLCdqc29uJzpKU09OLnN0cmluZ2lmeShwcm9wcyl9KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmFfcm90YXRlKSB7XG4gICAgLy9UT0RPOiBGSVggVEhJUyBCUklORyBJVCBPVVRTSURFXG4gICAgbGV0IHByb3BzID0ge1xuICAgICAgICBcImR1cmF0aW9uXCI6IGNvbmZpZy5hX2R1cmF0aW9uLFxuICAgICAgICBcImlkXCI6IGNvbmZpZy5pZCxcbiAgICAgICAgXCJkZWxheVwiOiBjb25maWcuYV9kZWxheSxcbiAgICAgICAgXCJvcHRpb25cIjogY29uZmlnLmFfb3B0aW9uLFxuICAgICAgICBcInR5cGVcIjogXCJyb3RhdGlvblwiLFxuICAgICB9O1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX2FuaW1hdGUocHJvcHMpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJodG1sVGV4dFwiKSkge1xuICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0SFRNTFRleHQoY29uZmlnLmh0bWxUZXh0KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYnJpbmdTdWJWaWV3VG9Gcm9udFwiKSkge1xuICAgIGxldCB2aWV3VGFnID0gY1MoY29uZmlnLmlkKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfYnJpbmdTdWJWaWV3VG9Gcm9udCh2aWV3VGFnKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY29udGVudE1vZGVcIikpIHtcbiAgICBsZXQgY29udGVudE1vZGUgPSBjUyhjb25maWcuY29udGVudE1vZGUpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRDb250ZW50TW9kZShjb250ZW50TW9kZSkpO1xuICB9XG5cbiAgaWYoY29uZmlnLm9uRm9jdXMpe1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRPbkZvY3VzQ2FsbGJhY2soY29uZmlnLm9uRm9jdXMpKTtcbiAgfVxuXG4gIGlmKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcIm9uTWVyY2hhbnRWaWV3SGVpZ2h0Q2hhbmdlXCIpKXtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0T25NZXJjaGFudFZpZXdIZWlnaHRDaGFuZ2VDYWxsYmFjayhjb25maWcub25NZXJjaGFudFZpZXdIZWlnaHRDaGFuZ2UpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJwaXZvdFhcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfcGl2b3RYKGNvbmZpZy5waXZvdFgrXCJcIikpO1xuICB9XG5cbmlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJwaXZvdFlcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfcGl2b3RZKGNvbmZpZy5waXZvdFkrXCJcIikpO1xuICB9XG5cbiAgaWYoY29uZmlnLmhhc093blByb3BlcnR5KFwib25JdGVtQ2xpY2tcIikpe1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRPbkl0ZW1DbGljayhjb25maWcub25JdGVtQ2xpY2spKTtcbiAgfVxuXG5cbiAgaWYgKGNvbmZpZy5zdGF0dXNCYXJTdHlsZSkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLnN0YXR1c0JhclN0eWxlKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTdGF0dXNCYXJTdHlsZShlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZW5hYmxlZFwiKSkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLmVuYWJsZWQpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEVuYWJsZWQoZW5hYmxlZCkpO1xuICB9XG5cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiaW5wdXRUeXBlSVwiKSkge1xuICAgICAgbGV0IGtleWJvYXJkVHlwZSA9IGNTKGNvbmZpZy5pbnB1dFR5cGVJKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRLZXlib2FyZFR5cGUoa2V5Ym9hcmRUeXBlKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmlucHV0VHlwZSkge1xuICAgIGxldCBrZXlib2FyZFR5cGUgPSBjb25maWcuaW5wdXRUeXBlO1xuICAgIGlmIChrZXlib2FyZFR5cGUgPT0gXCJudW1lcmljXCIgfHwga2V5Ym9hcmRUeXBlID09IFwibnVtZXJpY1dpdGhvdXRTdWdnZXN0aW9uXCIpIHtcbiAgICAgIGNvbmZpZy5pbnB1dFR5cGUgPSA0O1xuICAgIH0gZWxzZSBpZiAoa2V5Ym9hcmRUeXBlID09IFwiZW1haWxcIikge1xuICAgICAgY29uZmlnLmlucHV0VHlwZSA9IDc7XG4gICAgfSBlbHNlIGlmIChrZXlib2FyZFR5cGUgPT0gXCJudW1lcmljUGFzc3dvcmRcIikge1xuICAgICAgY29uZmlnLmlucHV0VHlwZSA9IDQ7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U2VjdXJlVGV4dEVudHJ5KFwiMVwiKSk7XG4gICAgfSBlbHNlIGlmIChrZXlib2FyZFR5cGUgPT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICBjb25maWcuaW5wdXRUeXBlID0gMDtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTZWN1cmVUZXh0RW50cnkoXCIxXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLmlucHV0VHlwZSA9IDA7XG4gICAgfVxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRLZXlib2FyZFR5cGUoY1MoY29uZmlnLmlucHV0VHlwZSkpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJhdXRvQ2FwaXRhbGl6YXRpb25UeXBlXCIpKSB7XG4gICAgICBsZXQga2V5Ym9hcmRUeXBlID0gY1MoY29uZmlnLmF1dG9DYXBpdGFsaXphdGlvblR5cGUpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEF1dG9DYXBpdGFsaXphdGlvblR5cGUoa2V5Ym9hcmRUeXBlKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYXV0b0NvcnJlY3Rpb25UeXBlXCIpKSB7XG4gICAgbGV0IGF1dG9Db3JyZWN0aW9uVHlwZSA9IGNTKGNvbmZpZy5hdXRvQ29ycmVjdGlvblR5cGUpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEF1dG9Db3JyZWN0aW9uVHlwZShhdXRvQ29ycmVjdGlvblR5cGUpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJiZWNvbWVGaXJzdFJlc3BvbmRlclwiKSkge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX2JlY29tZUZpcnN0UmVzcG9uZGVyKCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInNldE9uXCIpKSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcuc2V0T24pO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldE9uKGVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2Nyb2xsVG9JbmRleCkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLnNjcm9sbFRvSW5kZXgpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Njcm9sbFRvSW5kZXgoZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zaG93VmVydGljYWxTY3JvbGxCYXIpIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5zaG93VmVydGljYWxTY3JvbGxCYXIpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Nob3dWZXJ0aWNhbFNjcm9sbEJhcihlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmxlbmd0aExpbWl0KSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcubGVuZ3RoTGltaXQpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRleHRMZW5ndGhMaW1pdChlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic3d5cGVFbmFibGVkXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFN3eXBlKGNvbmZpZy5zd3lwZUVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJmb2N1c1wiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19iZWNvbWVGaXJzdFJlc3BvbmRlcihjUyhjb25maWcuZm9jdXMpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnBhdHRlcm4pIHtcbiAgICB2YXIgcGF0U3RyID0gY1MoY29uZmlnLnBhdHRlcm4pO1xuICAgIHZhciBwYXRBcnIgPSBwYXRTdHIuc3BsaXQoXCIsXCIpO1xuICAgIHZhciBwYXRMZW4gPSBwYXRBcnJbcGF0QXJyLmxlbmd0aCAtIDFdO1xuICAgIHBhdFN0ciA9IHBhdEFyci5zbGljZSgwLCBwYXRBcnIubGVuZ3RoIC0gMSkuam9pbihcIixcIik7XG5cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0UmVndWxhckV4cHJlc3Npb24oY1MocGF0U3RyKSkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUZXh0TGVuZ3RoTGltaXQoY1MocGF0TGVuKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5yZWdFeHApIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5yZWdFeHApO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFJlZ3VsYXJFeHByZXNzaW9uKGVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcucmVtb3ZlQ2VsbCkge1xuICAgIGxldCBjZWxsSW5kZXggPSBjUyhjb25maWcucmVtb3ZlQ2VsbCk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfcmVtb3ZlQ2VsbChjZWxsSW5kZXgpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2VjdXJlVGV4dEVudHJ5KSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcuc2VjdXJlVGV4dEVudHJ5KTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTZWN1cmVUZXh0RW50cnkoZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnY2hlY2tlZCcpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldE9uKGNvbmZpZy5jaGVja2VkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnBvcHVwTWVudSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9zZXRQb3B1cE1lbnUoY29uZmlnLnBvcHVwTWVudSwgY29uZmlnLm9uTWVudUl0ZW1DbGljaykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImFscGhhXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX3NldEFscGhhKGNvbmZpZy5hbHBoYSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5hbmltYXRpb24pIHtcbiAgICBsZXQgYW5pbVByb3BzID0ge1xuICAgICAgdmlld1RhZzogJycgKyBjb25maWcuaWQsXG4gICAgICBqc29uOiBjb25maWcuYW5pbWF0aW9uXG4gICAgfTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfYW5pbWF0ZU5ldyhhbmltUHJvcHMpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ0ZXh0XCIpKSB7XG4gICAgaWYgKGNvbmZpZy5sZXR0ZXJTcGFjaW5nKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0TGV0dGVyU3BhY2luZyhjUyhjb25maWcubGV0dGVyU3BhY2luZykpKTtcbiAgICB9XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRleHQoY1MoY29uZmlnLnRleHQpKSk7XG4gIH1cblxuICBpZihjb25maWcuY3Vyc29yUG9zaXRpb24pIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfc2V0Q3Vyc29yUG9zaXRpb24oY1MoY29uZmlnLmlkKSwgY1MoY29uZmlnLmN1cnNvclBvc2l0aW9uKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5vblN3aXBlICYmIHR5cGVvZiBjb25maWcub25Td2lwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U3dpcGVDYWxsYmFjayhjYWxsYmFja01hcHBlci5tYXAoY29uZmlnLm9uU3dpcGUpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY2xvc2VTd2lwZVwiKSkge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldENsb3NlU3dpcGUoY29uZmlnLmNsb3NlU3dpcGUpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJzd3lwZUVuYWJsZWRcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RW5hYmxlU3d5cGUoY29uZmlnLnN3eXBlRW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxpc3REYXRhXCIpICYmIGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxpc3RJdGVtXCIpKSB7XG4gICAgY29uc3QgaXRlbSA9IEpTT04ucGFyc2UoY29uZmlnLmxpc3RJdGVtKTtcbiAgICBpdGVtLml0ZW1WaWV3ID0gQW5kcm9pZC5jcmVhdGVMaXN0RGF0YShjb25maWcuaWQsIGl0ZW0uaXRlbVZpZXcpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXR1cExpc3QoY29uZmlnLmxpc3REYXRhLCBKU09OLnN0cmluZ2lmeShpdGVtKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImlubGluZUFuaW1hdGlvblwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19pbmxpbmVBbmltYXRpb24oY29uZmlnKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY2xpcHNUb0JvdW5kc1wiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRDbGlwc1RvQm91bmRzKGNvbmZpZy5jbGlwc1RvQm91bmRzKSk7XG4gIH1cblxuICBpZihjb25maWcuaGFzT3duUHJvcGVydHkoXCJjb3JuZXJSYWRpaVwiKSl7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldENvcm5lckN1cnZlcyhjb25maWcuY29ybmVyUmFkaWkpKTtcbiAgfVxuXG4gIGNvbmZpZy5jdXJyQ2hpbGRPZmZzZXQgPSAwO1xuICBjb25maWcgPSB0cmFuc2Zvcm1LZXlzKGNvbmZpZyk7XG5cbiAgcmV0dXJuIHtjb25maWc6IGNvbmZpZywgdHlwZTogdHlwZX07XG59O1xuXG5mdW5jdGlvbiBzZWxmX2FuaW1hdGVOZXcocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImFuaW1hdGU6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3Byb3BzXVxuICB9O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4gKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbiAqXG4gKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiAqIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4gKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4gKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuICogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4gKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiAqIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4gKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuICovXG5cbi8qXG4gVXNlZCB0byBpbml0aWFsaXplIGRlZmF1bHRzIGZvciB3aW5kb3cgZnVuY2lvbnMgYW5kIHZhcmlhYmxlcy5cbiovXG5jb25zdCB7IG1lcmdlIH0gPSByZXF1aXJlKCcuL2hlbHBlcicpO1xud2luZG93LlByZXN0b1VJID0gcmVxdWlyZShcIi4vUHJlc3RvVUlJbnRlcmZhY2VcIik7XG5cbmNvbnN0IGdldEN1cnJUaW1lID0gKCkgPT4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxuXG4vLyB3aW5kb3cuX19PUyA9IGdldE9TKClcbmlmKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKXtcbiAgICB2YXIgZ2V0U2NyZWVuRGV0YWlscyA9IGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBkZXRhaWxzID0gSlNPTi5wYXJzZShBbmRyb2lkLmdldFNjcmVlbkRpbWVuc2lvbnMoKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JlZW5fd2lkdGg6IGRldGFpbHMud2lkdGggKyBcIlwiLFxuICAgICAgICAgICAgc2NyZWVuX2hlaWdodDogZGV0YWlscy5oZWlnaHQgKyBcIlwiXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcImVycm9yIGluIGdldHR0aW5nIHNjcmVlbiBkaW1lbnNpb25zLCBzZXR0aW5nIGRlZmF1bHQgdmFsdWVzXCIsIGVycik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNjcmVlbl93aWR0aDogXCIxMDgwXCIsXG4gICAgICAgICAgICAgICAgc2NyZWVuX2hlaWdodDogXCIxOTIwXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTID0gZ2V0U2NyZWVuRGV0YWlscygpO1xufVxuXG5pZiAod2luZG93Ll9fT1MgPT0gXCJXRUJcIikge1xuICAgIHdpbmRvdy5BbmRyb2lkID0gcmVxdWlyZShcIi4vV0VCL0FuZHJvaWRJbnRlcmZhY2VcIilcbiAgICB3aW5kb3cuSkJyaWRnZSA9IHJlcXVpcmUoXCIuL1dFQi9KQnJpZGdlSW50ZXJmYWNlXCIpXG59IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiSU9TXCIpIHtcbiAgICB3aW5kb3cuQW5kcm9pZCA9IHJlcXVpcmUoXCIuL0lPUy9BbmRyb2lkSW50ZXJmYWNlXCIpXG4gICAgd2luZG93LkpCcmlkZ2UgPSBtZXJnZSh3aW5kb3cuSkJyaWRnZSwge30pXG59XG5cbmlmICh3aW5kb3cuX19ERVZJQ0VfREVUQUlMUyAmJiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5oYXNPd25Qcm9wZXJ0eShcInNjcmVlbl93aWR0aFwiKSkge1xuICAgIHdpbmRvdy5fX1dJRFRIID0gd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuc2NyZWVuX3dpZHRoO1xufSBlbHNlIHtcbiAgICB3aW5kb3cuX19XSURUSCA9IFwiMTA4MFwiO1xufVxuXG5pZiAod2luZG93Ll9fREVWSUNFX0RFVEFJTFMgJiYgd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuaGFzT3duUHJvcGVydHkoXCJzY3JlZW5faGVpZ2h0XCIpKSB7XG4gICAgd2luZG93Ll9fSEVJR0hUID0gd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuc2NyZWVuX2hlaWdodDtcbn0gZWxzZSB7XG4gICAgd2luZG93Ll9fSEVJR0hUID0gXCIxOTIwXCI7XG59XG5cbmNvbnN0IGd1aWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSlcblxuLy9JbnRpYWxpemluZyBkZWZhdWx0c1xuaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpIHtcbiAgICAvKiBDb21wb25lbnRzICovXG4gICAgd2luZG93Ll9fQ09NX0VWRU5UID0gZmFsc2VcbiAgICB3aW5kb3cuX19DT01fUkVOREVSRUQgPSB7XG4gICAgICAgIFNXSVRDSF9HTE9CQUw6IGZhbHNlLFxuICAgICAgICBEUlA6IHt9LFxuICAgICAgICBEU0I6IHt9LFxuICAgICAgICBEQjoge30sXG4gICAgICAgIE5BVkJBUjoge31cbiAgICB9XG5cbiAgICB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAgPSB7XG4gICAgICAgIFdSQVBQRVI6ICdQRENfY29tX3dyYXBwZXInLFxuICAgICAgICBOQVZCQVI6ICdQRENfY29tX25hdmJhcicsXG4gICAgICAgIE5BVkJBUl9JVEVNOiAnUERDX2NvbV9uYXZiYXJfaXRlbScsXG4gICAgICAgIE5BVkJBUl9JVEVNX1dJVEhfU1VCOiAnUERDX2NvbV9uYXZiYXJfaGFzX3N1YicsXG4gICAgICAgIE5BVkJBUl9TVUI6ICdQRENfY29tX25hdmJhcl9zdWInLFxuICAgICAgICBOQVZCQVJfU1VCX1JJR0hUOiAnUERDX2NvbV9uYXZiYXJfc3ViX3JpZ2h0JyxcbiAgICAgICAgTkFWQkFSX1NVQl9JVEVNOiAnUERDX2NvbV9uYXZiYXJfc3ViaXRlbScsXG4gICAgICAgIERSUDogJ1BEQ19jb21fZHJwJyxcbiAgICAgICAgRFJQX0JPRFk6ICdQRENfY29tX2RycF9ib2R5JyxcbiAgICAgICAgREI6ICdQRENfY29tX2RiJyxcbiAgICAgICAgREJfRlVMTF9CT0RZOiAnUERDX2NvbV9kYl9mdWxsX2JvZHknLFxuICAgICAgICBEQl9CT0RZOiAnUERDX2NvbV9kYl9ib2R5JyxcbiAgICAgICAgREJfT1BUSU9OUzogJ1BEQ19jb21fZGJfb3B0aW9ucycsXG4gICAgICAgIERCX09QVElPTjogJ1BEQ19jb21fZGJfb3B0aW9uJyxcbiAgICAgICAgRFNCOiAnUERDX2NvbV9kc2InLFxuICAgICAgICBEU0JfRlVMTF9CT0RZOiAnUERDX2NvbV9kc2JfZnVsbF9ib2R5JyxcbiAgICAgICAgRFNCX0JPRFk6ICdQRENfY29tX2RzYl9ib2R5JyxcbiAgICAgICAgRFNCX09QVElPTlM6ICdQRENfY29tX2RzYl9vcHRpb25zJyxcbiAgICAgICAgRFNCX09QVElPTjogJ1BEQ19jb21fZHNiX29wdGlvbicsXG4gICAgICAgIERTQl9TRUFSQ0hfV1JBUDogJ1BEQ19jb21fZHNiX3NlYXJjaF93cmFwJyxcbiAgICAgICAgRFNCX1NFQVJDSDogJ1BEQ19jb21fZHNiX3NlYXJjaCcsXG4gICAgICAgIFNXSVRDSDogJ1BEQ19jb21fc3dpdGNoJyxcbiAgICAgICAgU1dJVENIX0JPRFk6ICdQRENfY29tX3N3aXRjaF9ib2R5JyxcbiAgICAgICAgU1dJVENIX1NMSURFUjogJ1BEQ19jb21fc3dpdGNoX3NsaWRlcicsXG4gICAgICAgIEJUOiAnUERDX2NvbV9idCcsXG4gICAgICAgIEJUX0RJU0FCTEVEOiAnUERDX2NvbV9idF9kaXNhYmxlZCdcbiAgICB9XG4gICAgd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQID0ge1xuICAgICAgICBCRzogJyNmZmZmZmYnLFxuICAgICAgICBBQ1RJVkVfQkc6ICcjRUVGMUY4JyxcbiAgICAgICAgQUNUSVZFX0NPTE9SOiAncmdiKDUzLCA2NCwgODIpJyxcbiAgICAgICAgSU5BQ1RJVkVfQ09MT1I6ICdyZ2JhKDUzLCA2NCwgODIsIDAuNSknLFxuICAgICAgICBCT1JERVJfQ09MT1I6ICcjQTNBRkMyJyxcbiAgICAgICAgQUNUSVZFX0JPUkRFUl9DT0xPUjogJyM3MDc4ODYnLFxuICAgICAgICBTRUFSQ0hfQ09MT1I6ICcjZGRkZGRkJyxcbiAgICAgICAgSU5BQ1RJVkVfU1dJVENIOiAnI0I3REJCQycsXG4gICAgICAgIEFDVElWRV9TV0lUQ0g6ICcjMzZBRjQ3JyxcbiAgICAgICAgQlRfQk9SREVSX0NPTE9SOiAnIzE1ODVEOCcsXG4gICAgICAgIEJUX0JHX0NPTE9SOiAnIzE5OTFFQicsXG4gICAgICAgIEJUX0NPTE9SOiAnI2ZmZmZmZidcbiAgICB9XG4gICAgd2luZG93Ll9fQ09NX0FDVElWRSA9IHtcbiAgICAgICAgRFNCOiAnJyxcbiAgICAgICAgTkFWQkFSOiAnJyxcbiAgICAgICAgREI6ICcnXG4gICAgfVxuICAgIC8qIENvbXBvbmVudHMgRW5kICovXG5cbiAgICAvKiBNb2RhbCAqL1xuICAgIHdpbmRvdy5fX1NUWUxFX0lEID0gJ3N0eWxlXycgKyBndWlkXG4gICAgd2luZG93Ll9fUkVOREVSRURfS0VZRlJBTUVTID0gW11cbiAgICB3aW5kb3cuX19NT0RBTF9QUk9QUyA9IHt9XG4gICAgd2luZG93Ll9fQ09OVEVOVE1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbCdcbiAgICB3aW5kb3cuX19PUEVOTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLW9wZW4nXG4gICAgd2luZG93Ll9fQkFDS0RST1BNT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtYmFja2Ryb3AnXG4gICAgd2luZG93Ll9fRElTQUJMRURCQUNLRFJPUF9DTEFTUyA9ICdQRENfbW9kYWwtYmFja2Ryb3AtZGlzYWJsZWQnXG4gICAgd2luZG93Ll9fU0hPV05NT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtc2hvd24nXG4gICAgd2luZG93Ll9fRkFERU1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1mYWRlJ1xuICAgIHdpbmRvdy5fX1NMSURFTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLXNsaWRlJ1xuICAgIC8qIE1vZGFsIEVuZCAqL1xuXG4gICAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTKSAmJlxuICAgICAgICAgICAgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fRElTQUJMRURCQUNLRFJPUF9DTEFTUylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUod2luZG93Ll9fT1BFTk1PREFMX0NMQVNTKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHdpbmRvdy5fX1NIT1dOTU9EQUxfQ0xBU1MpO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgICAgICAgICBpZCA9IGlkLnJlcGxhY2Uod2luZG93Ll9fQkFDS0RST1BNT0RBTF9DTEFTUyArICdfJywgJycpO1xuXG4gICAgICAgICAgICBsZXQgdmlldyA9IF9fVklFV1NbaWRdO1xuICAgICAgICAgICAgaWYgKHZpZXcgJiYgdmlldy5wcm9wcy5vbkRpc21pc3MgJiYgdHlwZW9mIHZpZXcucHJvcHMub25EaXNtaXNzID09XG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdmlldy5wcm9wcy5vbkRpc21pc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGR1aVNob3dTY3JlZW4gPSAoY2FsbGJhY2ssIHN0YXRlKSA9PiB7XG4gICAgICAgIGxldCBwb3B1cE1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicG9wdXBNZW51XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcHVwTWVudS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9wdXBNZW51W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgd2luZG93Ll9fZHVpU2hvd1NjcmVlbiA9IGR1aVNob3dTY3JlZW47XG5cbn0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJJT1NcIikge1xuICAgIHdpbmRvdy5fX0NPTE9SX0lOREVYID0gd2luZG93Ll9fQ09MT1JfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19GT05UX0lOREVYID0gd2luZG93Ll9fRk9OVF9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX1JFQ1RfSU5ERVggPSB3aW5kb3cuUkVDVF9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX1ZJRVdfSU5ERVggPSB3aW5kb3cuX19WSUVXX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fSU1BR0VfSU5ERVggPSB3aW5kb3cuX19JTUFHRV9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX1BPSU5UX0lOREVYID0gd2luZG93Ll9fUE9JTlRfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19MQVlFUl9JTkRFWCA9IHdpbmRvdy5fX0xBWUVSX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fU0laRV9JTkRFWCA9IHdpbmRvdy5fX1NJWkVfSU5ERVggfHwgMTtcbn0gZWxzZSB7XG4gICAgLy9UaGlzIHdvdWxkIGJlIGNhc2UgZm9yIGFuZHJvaWRcbiAgICB3aW5kb3cuX19GTl9NQVAgPSB7fTtcbiAgICB3aW5kb3cuX19BTExfT05DTElDS1MgPSBbXTtcbn1cblxud2luZG93Ll9fSUQgPSAxO1xud2luZG93Ll9fTk9ERV9JRCA9IDE7XG53aW5kb3cuX19TQ1JFRU5fSU5ERVggPSAtMTtcblxud2luZG93Ll9fUFJPWFlfRk4gPSB7fTtcbndpbmRvdy5fX0ZOX0lOREVYID0gMDtcbndpbmRvdy5fX1JPT1RTQ1JFRU4gPSBudWxsO1xud2luZG93Ll9fQ0FDSEVEX1NDUkVFTlMgPSB7fTtcbndpbmRvdy5fX1NDUkVFTl9DT1VOVCA9IDA7XG53aW5kb3cuX19DVVJSX1NDUkVFTiA9IG51bGw7XG53aW5kb3cuX19QUkVWX1NDUkVFTiA9IG51bGw7XG53aW5kb3cuX19BTklNQVRFX0RJUiA9IG51bGw7XG53aW5kb3cuX19TQ1JFRU5fU1RBQ0sgPSBbXTtcbndpbmRvdy5fX0xBU1RfRk5fQ0FMTEVEID0gbnVsbDtcbndpbmRvdy5fX1RIUk9UVEVMRURfQUNUSU9OUyA9IFtdO1xud2luZG93Ll9fVklFV1MgPSB7fTtcbndpbmRvdy5fX1ZJRVdfRElNRU5TSU9OUyA9IHt9O1xud2luZG93Ll9fT0JTRVJWRVJTID0ge307XG53aW5kb3cuWkluZGV4ID0gMDtcblxud2luZG93LmNhbGxVSUNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcmdzID0gKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBbYXJndW1lbnRzWzBdXSA6IEFycmF5LmFwcGx5KG51bGwsXG4gICAgICAgIGFyZ3VtZW50cykpO1xuICAgIHZhciBmTmFtZSA9IGFyZ3NbMF1cbiAgICB2YXIgZnVuY3Rpb25BcmdzID0gYXJncy5zbGljZSgxKVxuICAgIHZhciBjdXJyVGltZTtcbiAgICB2YXIgdGltZURpZmY7XG4gICAgXG4gICAgaWYgKHdpbmRvdy5fX0FMTF9PTkNMSUNLUyAmJiB3aW5kb3cuX19BTExfT05DTElDS1MuaW5kZXhPZihmTmFtZSkgIT0gLTEgJiYgYXJnc1syXSA9PSBcImZlZWRiYWNrXCIgJiYgSkJyaWRnZSAmJiBKQnJpZGdlLnNldENsaWNrRmVlZGJhY2spIHtcbiAgICAgICAgcmV0dXJuIEpCcmlkZ2Uuc2V0Q2xpY2tGZWVkYmFjayhhcmdzWzFdKTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93Ll9fVEhST1RURUxFRF9BQ1RJT05TICYmIHdpbmRvdy5fX1RIUk9UVEVMRURfQUNUSU9OUy5pbmRleE9mKGZOYW1lKSA9PSAtMSkge1xuICAgICAgICB3aW5kb3cuX19QUk9YWV9GTltmTmFtZV0uYXBwbHkobnVsbCwgZnVuY3Rpb25BcmdzKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5fX0xBU1RfRk5fQ0FMTEVEICYmIChmTmFtZSA9PSB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRC5mTmFtZSkpIHtcbiAgICAgICAgY3VyclRpbWUgPSBnZXRDdXJyVGltZSgpO1xuICAgICAgICB0aW1lRGlmZiA9IGN1cnJUaW1lIC0gd2luZG93Ll9fTEFTVF9GTl9DQUxMRUQudGltZVN0YW1wO1xuXG4gICAgICAgIGlmICh0aW1lRGlmZiA+PSAzMDApIHtcbiAgICAgICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW2ZOYW1lXS5hcHBseShudWxsLCBmdW5jdGlvbkFyZ3MpO1xuICAgICAgICAgICAgd2luZG93Ll9fTEFTVF9GTl9DQUxMRUQudGltZVN0YW1wID0gY3VyclRpbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJmdW5jdGlvbiB0aHJvdHRlbGVkXCIsIGZOYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInRpbWUgZGlmZlwiLCB0aW1lRGlmZik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuX19QUk9YWV9GTltmTmFtZV0uYXBwbHkobnVsbCwgZnVuY3Rpb25BcmdzKTtcbiAgICAgICAgd2luZG93Ll9fTEFTVF9GTl9DQUxMRUQgPSB7XG4gICAgICAgICAgICB0aW1lU3RhbXA6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBmTmFtZTogZk5hbWVcbiAgICAgICAgfVxuICAgIH1cbn07Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUtBOzs7Ozs7Ozs7Ozs7OztBQ2pEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7O0FDeEhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFFQTtBQUNBO0FBQ0EsU0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBRUE7QUFDQTtBQUNBLFdBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBT0E7QUFDQTtBQUNBLFdBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUVBO0FBQ0E7QUFDQTtBQUNBLGVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUNuT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7O0FDOUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBLFdBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLDhEQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7Ozs7QUMxS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQURBO0FBQ0E7QUFJQSxhQUVBLG1CQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDekNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQTFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUxBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUxBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFUQTtBQVBBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBN0VBO0FBK0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7Ozs7Ozs7Ozs7O0FDMStEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxvQ0FrQkE7QUFDQTtBQUNBLGFBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQW9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
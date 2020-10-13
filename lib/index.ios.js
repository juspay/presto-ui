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
    if (attribute.value0 == 'textFromHtml' && element.props) {
      if (element.props.hasOwnProperty('color')) {
        prop['color'] = element.props.color;
      }
      if (element.props.hasOwnProperty('fontStyle')) {
        prop['fontStyle'] = element.props.fontStyle;
      }
      if (element.props.hasOwnProperty('textSize')) {
        prop['textSize'] = element.props.textSize;
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguaW9zLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL0lPUy9BbmRyb2lkSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy9zcmMvSU9TL1JlbmRlci5qcyIsIndlYnBhY2s6Ly8vc3JjL1ByZXN0b1VJSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jhc2VWaWV3LmpzIiwid2VicGFjazovLy9zcmMvY29tcHV0ZUlPUy5qcyIsIndlYnBhY2s6Ly8vc3JjL2RvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9kb21zL2lvcy5qcyIsIndlYnBhY2s6Ly8vc3JjL2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2FuZHJvaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2FuZHJvaWQvbWFwUGFyYW1zLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9hbmRyb2lkL29iak1hcC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvYW5kcm9pZC9wYXJzZVBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvY29tbW9uL2NhbGxiYWNrTWFwcGVyLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9pb3MvY29sb3JzLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9pb3MvZmxhdHRlbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvaW9zL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9pb3MvcGFyc2VQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL3dlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvd2ViL3BhcnNlUGFyYW1zLmpzIiwid2VicGFjazovLy9zcmMvaW5pdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpbml0OiByZXF1aXJlKFwiLi9zcmMvaW5pdFwiKSxcblx0ZG9tcyA6IHJlcXVpcmUoXCIuL3NyYy9kb21zXCIpLFxuXHRoYW5kbGVyIDogcmVxdWlyZShcIi4vc3JjL2hhbmRsZXJcIiksXG5cdGhlbHBlcnMgOiByZXF1aXJlKFwiLi9zcmMvaGVscGVyc1wiKSxcblx0YmFzZVZpZXcgOiByZXF1aXJlKFwiLi9zcmMvYmFzZVZpZXdcIiksXG5cdGFuaW1hdGlvbnM6IHJlcXVpcmUoJy4vc3JjL2FuaW1hdGlvbnMnKSxcblx0Y2FsbGJhY2tNYXBwZXI6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcnMvY29tbW9uL2NhbGxiYWNrTWFwcGVyJyksXG5cdGdldE9TOiByZXF1aXJlKCcuL3NyYy9oZWxwZXInKS5nZXRPUyxcblx0cHJlc3RvTWVyZ2U6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcicpLm1lcmdlLFxuXHRwcmVzdG9DbG9uZTogcmVxdWlyZSgnLi9zcmMvaGVscGVyJykuY2xvbmVcbn0iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbmNvbnN0IHJlbmRlciA9IHJlcXVpcmUoJy4vUmVuZGVyJyk7XG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuLi9oZWxwZXInKTtcbmNvbnN0IHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi4vaGVscGVycycpLmlvcy5wYXJzZVBhcmFtcztcblxubGV0IHJvb3RpZDtcblxuZnVuY3Rpb24gY2xlYXJWaWV3RXh0ZXJuYWxzKHZpZXcpIHtcbiAgZGVsZXRlIHdpbmRvdy5fX1ZJRVdTW3ZpZXcucHJvcHMuaWRdO1xuICBkZWxldGUgd2luZG93Ll9fVklFV19ESU1FTlNJT05TW3ZpZXcucHJvcHMuaWRdO1xuICB2aWV3LmNoaWxkcmVuLmZvckVhY2goY2xlYXJWaWV3RXh0ZXJuYWxzKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2VyaWFsaXplYWJsZVZpZXcodmlldywgcmVjdXJzZSkge1xuICB2YXIgb2JqID0gcGFyc2VQYXJhbXModmlldy50eXBlLCBoZWxwZXIuY2xvbmUodmlldy5wcm9wcyxudWxsKSwgXCJzZXRcIik7XG4gIHZhciBuZXdWaWV3ID0ge307XG4gIG5ld1ZpZXcucHJvcHMgPSBvYmouY29uZmlnO1xuICBuZXdWaWV3LnR5cGUgPSBvYmoudHlwZVswXS50b1VwcGVyQ2FzZSgpICsgb2JqLnR5cGUuc3Vic3RyKDEsIG9iai50eXBlLmxlbmd0aCk7XG4gIGlmIChyZWN1cnNlKVxuICAgIG5ld1ZpZXcuY2hpbGRyZW4gPSB2aWV3LmNoaWxkcmVuLm1hcChnZXRTZXJpYWxpemVhYmxlVmlldyk7XG4gIGVsc2VcbiAgICBuZXdWaWV3LmNoaWxkcmVuID0gW107XG4gIHJldHVybiBuZXdWaWV3O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0U2NyZWVuRGltZW5zaW9uczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB3aWR0aDogd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuc2NyZWVuX3dpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5zY3JlZW5faGVpZ2h0XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVjb21wdXRlVmlldzogZnVuY3Rpb24gKHZpZXcpIHtcbiAgICBpZiAodmlldy50eXBlLmluZGV4T2YoXCJzY3JvbGxcIikgIT0gLTEpIHtcbiAgICAgIHJlbmRlci5pbmZsYXRlKHZpZXcpO1xuICAgIH1cbiAgICByZW5kZXIuY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdmlldy5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgcmVuZGVyLmluZmxhdGUoY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgfSxcblxuICByZWNvbXB1dGU6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByb290dmlldyA9IHdpbmRvdy5fX1ZJRVdTW3Jvb3RpZF07XG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIHR5cGU6IFwibGluZWFyTGF5b3V0XCIsXG4gICAgICBwcm9wczoge1xuICAgICAgICBoOiB3aW5kb3cuX19IRUlHSFQsXG4gICAgICAgIHc6IHdpbmRvdy5fX1dJRFRIXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtyb290dmlld11cbiAgICB9O1xuICAgIHJlbmRlci5jb21wdXRlQ2hpbGREaW1lbnMob2JqKTtcbiAgICByZW5kZXIuaW5mbGF0ZShyb290dmlldyk7XG4gIH0sXG5cbiAgcnVuSW5VSTogZnVuY3Rpb24gKGNtZCkge1xuICAgIHJlbmRlci5ydW5JblVJKGNtZCk7XG4gIH0sXG5cbiAgUmVuZGVyOiBmdW5jdGlvbiAodmlldywgY2IpIHtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgdHlwZTogXCJsaW5lYXJMYXlvdXRcIixcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGg6IHdpbmRvdy5fX0hFSUdIVCxcbiAgICAgICAgdzogd2luZG93Ll9fV0lEVEhcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3ZpZXddXG4gICAgfTtcbiAgICByb290aWQgPSB2aWV3LnByb3BzLmlkO1xuICAgIHJlbmRlci5jb21wdXRlQ2hpbGREaW1lbnMob2JqKTtcbiAgICB2aWV3ID0gcmVuZGVyLmluZmxhdGUodmlldyk7XG4gICAgaWYgKHZpZXcpIHtcbiAgICAgIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLklPUy5wb3N0TWVzc2FnZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG1ldGhvZE5hbWU6IFwicmVuZGVyXCIsXG4gICAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgICAgdmlldzogdmlld1xuICAgICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKGNiKVxuICAgICAgd2luZG93LmNhbGxVSUNhbGxiYWNrKGNiKTtcbiAgfSxcblxuICBtb3ZlVmlldzogZnVuY3Rpb24gbW92ZVZpZXcoaWQsIGluZGV4KSB7XG4gICAgaWYgKCF3aW5kb3cuX19WSUVXU1tpZF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIk1vdmVWaWV3OiBJbnZhbGlkIHZpZXcgSUQ6IFwiICsgaWQpKTtcbiAgICB9XG4gICAgY29uc3QgdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXTtcbiAgICBjb25zdCBwYXJlbnQgPSB3aW5kb3cuX19WSUVXU1t2aWV3LnByb3BzLnBhcmVudElkXTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICBjaGlsZHJlbi5zcGxpY2UoY2hpbGRyZW4uaW5kZXhPZih2aWV3KSwgMSk7XG4gICAgY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCB2aWV3KTtcbiAgICB0aGlzLnJlY29tcHV0ZVZpZXcocGFyZW50KTtcbiAgfSxcblxuICBhZGRWaWV3VG9QYXJlbnQ6IGZ1bmN0aW9uIChpZCwgdmlldywgaW5kZXgsIGNiKSB7XG4gICAgaWYgKCF3aW5kb3cuX19WSUVXU1tpZF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIkFkZFZpZXdUb1BhcmVudDogSW52YWxpZCBwYXJlbnQgSUQ6IFwiICtcbiAgICAgICAgaWQpKTtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50ID0gd2luZG93Ll9fVklFV1NbaWRdO1xuICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIHZpZXcpO1xuICAgIHZpZXcucHJvcHMucGFyZW50SWQgPSBpZDtcbiAgICByZW5kZXIuY29tcHV0ZUNoaWxkRGltZW5zKHBhcmVudCk7XG4gICAgY29uc3QgcmVuZGVyZWRWaWV3ID0gcmVuZGVyLmluZmxhdGUodmlldyk7XG4gICAgaWYgKHJlbmRlcmVkVmlldykge1xuICAgICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuSU9TLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbWV0aG9kTmFtZTogXCJhZGRWaWV3VG9QYXJlbnRcIixcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBwYXJlbnRJZDogaWQsXG4gICAgICAgICAgdmlldzogcmVuZGVyZWRWaWV3LFxuICAgICAgICAgIGFmdGVyUmVuZGVyIDogY2IrXCJcIlxuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfVxuICAgIHRoaXMucmVjb21wdXRlVmlldyhwYXJlbnQpO1xuICB9LFxuXG4gIGNyZWF0ZUxpc3REYXRhOiBmdW5jdGlvbiAoaWQsIHZpZXcpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB3aW5kb3cuX19WSUVXU1tpZF07XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJldHVybiBcInt9XCI7XG4gICAgfVxuICAgIGNvbnN0IHZpZXdzID0gd2luZG93Ll9fVklFV1M7XG4gICAgd2luZG93Ll9fVklFV1MgPSB7fTtcbiAgICBwYXJlbnQuY2hpbGRyZW4gPSBbdmlld107XG4gICAgdmlldy5wcm9wcy5wYXJlbnRJZCA9IGlkO1xuICAgIHJlbmRlci5jb21wdXRlQ2hpbGREaW1lbnMocGFyZW50KTtcbiAgICBjb25zdCBpbmZsYXRlZFZpZXcgPSByZW5kZXIuaW5mbGF0ZSh2aWV3KTtcbiAgICB3aW5kb3cuX19WSUVXUyA9IHZpZXdzO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpbmZsYXRlZFZpZXcpO1xuICB9LFxuXG4gIHJlcGxhY2VWaWV3OiBmdW5jdGlvbiAodmlldywgaWQpIHtcbiAgICBpZiAoIXdpbmRvdy5fX1ZJRVdTW2lkXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiQWRkVmlld1RvUGFyZW50OiBJbnZhbGlkIHBhcmVudCBJRDogXCIgKyBpZCkpO1xuICAgIH1cbiAgICB2YXIgb2xkdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXTtcbiAgICB2YXIgcGFyZW50aWQgPSBvbGR2aWV3LnByb3BzLnBhcmVudElkO1xuICAgIG9sZHZpZXcucHJvcHMgPSBoZWxwZXIuY2xvbmUodmlldy5wcm9wcyxudWxsKTtcbiAgICBvbGR2aWV3LnByb3BzLnBhcmVudElkID0gcGFyZW50aWQ7XG4gICAgdmFyIHBhcmVudCA9IHdpbmRvdy5fX1ZJRVdTW3BhcmVudGlkXTtcbiAgICB2YXIgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihvbGR2aWV3KTtcbiAgICB0aGlzLnJlY29tcHV0ZVZpZXcocGFyZW50KTtcbiAgICB2YXIgbmV3VmlldyA9IGdldFNlcmlhbGl6ZWFibGVWaWV3KG9sZHZpZXcpO1xuICAgIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLklPUy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1ldGhvZE5hbWU6IFwicmVwbGFjZVZpZXdcIixcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgdmlldzogbmV3VmlldyxcbiAgICAgICAgICAgIHBhcmVudElkOiBwYXJlbnRpZCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICB9XG4gICAgfSkpO1xuICB9LFxuXG4gIHJlbW92ZVZpZXc6IGZ1bmN0aW9uIChpZCkge1xuICAgIGNvbnN0IHZpZXcgPSB3aW5kb3cuX19WSUVXU1tpZF07XG4gICAgY29uc3QgcGFyZW50ID0gd2luZG93Ll9fVklFV1Nbdmlldy5wcm9wcy5wYXJlbnRJZF07XG4gICAgY29uc3QgaW5kZXggPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih2aWV3KSA6IDA7XG4gICAgaWYocGFyZW50KXtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBjbGVhclZpZXdFeHRlcm5hbHModmlldyk7XG4gICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuSU9TLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1ldGhvZE5hbWU6IFwicmVtb3ZlVmlld1wiLFxuICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIGluZGV4LFxuICAgICAgfVxuICAgIH0pKTtcbiAgICBpZihwYXJlbnQpe1xuICAgICAgdGhpcy5yZWNvbXB1dGVWaWV3KHBhcmVudCk7XG4gICAgfVxuICB9LFxuXG4gIHN0YXJ0QW5pbTogZnVuY3Rpb24oaWQsIGNiTmFtZSkge1xuICAgIC8vIFRPRE8gaW1wbGVtZW50IG5hdGl2ZSBzaWRlIHdpdGggY2FsbGJhY2tcbiAgICAvLyBUaHVzLCBjdXJyZW50bHkgbm90IHByb3ZpZGluZyBvbiBjb21wbGV0ZSBob29rXG4gICAgLy8gb25FbmQgcHJvcGVydHkgY2FuIHN0aWxsIGJlIHVzZWQgZm9yIGNoYWluaW5nIGFuaW1hdGlvbnNcbiAgICB3aW5kb3cud2Via2l0Lm1lc3NhZ2VIYW5kbGVycy5JT1MucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbWV0aG9kTmFtZTogXCJzdGFydEFuaW1hdGlvblwiLFxuICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICBhbmltSWQ6IGlkXG4gICAgICB9XG4gICAgfSkpO1xuICB9LFxuXG4gIGNhbmNlbEFuaW06IGZ1bmN0aW9uKCkge1xuICAgIC8vIFRPRE8gaW1wbGVtZW50IG5hdGl2ZSBzaWRlXG4gIH0sXG5cbiAgdXBkYXRlQW5pbTogZnVuY3Rpb24oKSB7XG4gICAgLy8gVE9ETyBpbXBsZW1lbnQgbmF0aXZlIHNpZGVcbiAgfVxufTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuY29uc3QgcGFyc2VQYXJhbXMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lvcy9wYXJzZVBhcmFtcycpO1xuY29uc3Qge2NvbXB1dGVDaGlsZERpbWVuc30gPSByZXF1aXJlKCcuLi9jb21wdXRlSU9TJyk7XG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuLi9oZWxwZXInKTtcblxuXG5mdW5jdGlvbiBpbmZsYXRlKHZpZXcpIHtcbiAgY29uc3QgaWQgPSB2aWV3LnByb3BzLmlkO1xuXG4gIGlmICghd2luZG93Ll9fVklFV1MuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpO1xuICAgIGhlbHBlci5jYWNoZURpbWVuKHZpZXcpO1xuICAgIHdpbmRvdy5fX1ZJRVdTW2lkXSA9IHZpZXc7XG4gICAgY29uc3QgbmV3VmlldyA9IGhlbHBlci5jbG9uZSh2aWV3LG51bGwpO1xuICAgIHZpZXcuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcbiAgICAgIG5ld1ZpZXcuY2hpbGRyZW5baV0gPSBpbmZsYXRlKGNoaWxkKTtcbiAgICB9KTtcbiAgICBjb25zdCBvYmogPSBwYXJzZVBhcmFtcyhuZXdWaWV3LnR5cGUsIG5ld1ZpZXcucHJvcHMsIFwic2V0XCIpO1xuICAgIG5ld1ZpZXcucHJvcHMgPSBvYmouY29uZmlnO1xuICAgIG5ld1ZpZXcudHlwZSA9IG9iai50eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyBvYmoudHlwZS5zdWJzdHIoMSwgb2JqLnR5cGUubGVuZ3RoKTtcbiAgICByZXR1cm4gbmV3VmlldztcbiAgfVxuXG4gIGNvbnN0IG1vdmUgPSBoZWxwZXIuc2hvdWxkTW92ZSh2aWV3KTtcbiAgaGVscGVyLmNhY2hlRGltZW4odmlldyk7XG4gIGxldCByYW5SdW5JblVJID0gZmFsc2U7XG4gIGlmIChtb3ZlKSB7XG4gICAgbW92ZS5pZCA9IGlkO1xuICAgIHJ1bkluVUlIZWxwZXIodmlldy50eXBlLCB2aWV3LnByb3BzKTtcbiAgICByYW5SdW5JblVJID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbXB1dGVDaGlsZERpbWVucyh2aWV3KVxuICB2aWV3LmNoaWxkcmVuLmZvckVhY2goaW5mbGF0ZSk7XG4gIHJldHVybiByYW5SdW5JblVJO1xufVxuXG5mdW5jdGlvbiBydW5JblVJKGNtZCwgZnJvbUluZmxhdGUpIHtcbiAgaWYgKCEoY21kIGluc3RhbmNlb2YgQXJyYXkpKSBjbWQgPSBbY21kXTtcblxuICBpZiAoY21kLmxlbmd0aD09MSAmJiBjbWRbMF09PVwicmVtb3ZlQWxsVUlcIil7XG4gICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuSU9TLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1ldGhvZE5hbWU6IFwicmVtb3ZlQWxsVUlcIixcbiAgICAgIHBhcmFtZXRlcnM6IHtcImFuaW1hdGVkXCI6XCJmYWxzZVwifVxuICAgIH0pKTtcbiAgfWVsc2V7XG4gICAgY21kLmZvckVhY2goZnVuY3Rpb24gKGVhY2gpIHtcbiAgICAgIHZhciBpZCA9IGVhY2guaWQ7XG4gICAgICBlYWNoLnVzZUNvbnN0cmFpdHMgPSB0cnVlO1xuICAgICAgdmFyIHZpZXcgPSB3aW5kb3cuX19WSUVXU1tpZF07XG4gICAgICBpZiAodmlldykge1xuICAgICAgICB2YXIgcGFyZW50ID0gd2luZG93Ll9fVklFV1Nbdmlldy5wcm9wcy5wYXJlbnRJZF07XG4gICAgICAgIHZpZXcucHJvcHMgPSBoZWxwZXIubWVyZ2Uodmlldy5wcm9wcywgZWFjaCk7XG4gICAgICAgIGlmKHZpZXcucHJvcHMgJiYgdmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShcImxpc3RJdGVtXCIpICYmIGVhY2guaGFzT3duUHJvcGVydHkoXCJsaXN0RGF0YVwiKSAmJiAhZWFjaC5oYXNPd25Qcm9wZXJ0eShcImxpc3RJdGVtXCIpKXtcbiAgICAgICAgICBlYWNoLmxpc3RJdGVtID0gdmlldy5wcm9wcy5saXN0SXRlbVxuICAgICAgICB9XG4gICAgICAgIC8vQWRkaW5nIGFzIHN0b3AgZ2FnIHNvbHV0aW9uIGZvciBlZGl0VGV4dCBpbiBpb3Mgd2hlcmUgdGV4dCBcbiAgICAgICAgLy93YXMgZ2V0dGluZyBzZXQgZW1wdHkgaW4gY2FzZSBvdGhlciBwcm9wZXJ0aWVzIHdlcmUgbW9kaWZpZWQuXG4gICAgICAgIGlmICghZWFjaC5oYXNPd25Qcm9wZXJ0eSgndGV4dCcpKSB7XG4gICAgICAgICAgZGVsZXRlIHZpZXcucHJvcHMudGV4dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50ICYmICFmcm9tSW5mbGF0ZSkge1xuICAgICAgICAgIGlmIChwYXJlbnQudHlwZS5pbmRleE9mKFwic2Nyb2xsXCIpICE9IC0xKSB7XG4gICAgICAgICAgICBpbmZsYXRlKHBhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbXB1dGVDaGlsZERpbWVucyhwYXJlbnQpO1xuICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICBpZiAoIWluZmxhdGUodmlldykpIHtcbiAgICAgICAgICAgIHJ1bkluVUlIZWxwZXIodmlldy50eXBlLCBlYWNoLCB0cnVlKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHZpZXcgIT0gY2hpbGRyZW5baV0pIHtcbiAgICAgICAgICAgICAgaW5mbGF0ZShjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJ1bkluVUlIZWxwZXIodmlldy50eXBlLCBlYWNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBydW5JblVJSGVscGVyKHR5cGUsIG9iaiwgcmVtb3ZlRnJhbWUpIHtcbiAgdmFyIGNtZCA9IHBhcnNlUGFyYW1zKHR5cGUsIG9iaiwgXCJnZXRcIikuY29uZmlnLm1ldGhvZHM7XG4gIGlmKHJlbW92ZUZyYW1lKXtcbiAgICAgIGNtZCA9IGNtZC5maWx0ZXIoZnVuY3Rpb24oaXRtKXtcbiAgICAgICAgcmV0dXJuIGl0bS5tZXRob2ROYW1lICE9IFwic2V0RnJhbWU6XCJcbiAgICB9KVxuICB9XG4gIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLklPUy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgbWV0aG9kTmFtZTogXCJydW5JblVJXCIsXG4gICAgcGFyYW1ldGVyczogY21kXG4gIH0pKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluZmxhdGUsXG4gIGNvbXB1dGVDaGlsZERpbWVucyxcbiAgcnVuSW5VSVxufTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxudmFyIHByZXN0b0RvbSA9IHJlcXVpcmUoXCIuL2RvbXNcIik7XG52YXIgaGVscGVycyA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIilcbnZhciB3ZWJQYXJzZVBhcmFtcztcbnZhciBpT1NQYXJzZVBhcmFtcztcbnZhciBwYXJzZVBhcmFtcztcbmNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG5cbmlmICh3aW5kb3cuX19PUyA9PT0gXCJXRUJcIikge1xuICB3ZWJQYXJzZVBhcmFtcyA9IGhlbHBlcnMud2ViLnBhcnNlUGFyYW1zO1xufSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PT0gXCJJT1NcIikge1xuICBpT1NQYXJzZVBhcmFtcyA9IGhlbHBlcnMuaW9zLnBhcnNlUGFyYW1zO1xufSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PT0gXCJBTkRST0lEXCIpIHtcbiAgcGFyc2VQYXJhbXMgPSBoZWxwZXJzLmFuZHJvaWQucGFyc2VQYXJhbXM7XG59XG5cbmZ1bmN0aW9uIGRvbUFsbChlbGVtKSB7XG4gIGlmICghZWxlbS5fX3JlZikge1xuICAgIGVsZW0uX19yZWYgPSBjcmVhdGVQcmVzdG9FbGVtZW50KCk7XG4gIH1cblxuICBpZiAoZWxlbS5wcm9wcy5pZCkge1xuICAgIGVsZW0uX19yZWYuX19pZCA9IHBhcnNlSW50KGVsZW0ucHJvcHMuaWQsIDEwKSB8fCBlbGVtLl9fcmVmLl9faWQ7XG4gIH1cblxuICB2YXIgdHlwZSA9IGhlbHBlci5jbG9uZShlbGVtLnR5cGUsbnVsbCk7XG4gIHZhciBwcm9wcyA9IGhlbHBlci5jbG9uZShlbGVtLnByb3BzLG51bGwpO1xuXG4gIGlmIChwcm9wcy5mb2N1cyA9PSBmYWxzZSAmJiAgd2luZG93Ll9fT1MgPT09IFwiQU5EUk9JRFwiKSB7XG4gICAgZGVsZXRlIHByb3BzLmZvY3VzO1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRyZW4ucHVzaChkb21BbGwoZWxlbS5jaGlsZHJlbltpXSkpO1xuICB9XG5cblxuICBpZiAoX19PUyA9PSBcIldFQlwiICYmIHByb3BzLm9uUmVzaXplKSB7XG4gICAgd2luZG93Ll9fcmVzaXplRXZlbnQgPSBwcm9wcy5vblJlc2l6ZTtcbiAgfVxuXG4gIHByb3BzLmlkID0gZWxlbS5fX3JlZi5fX2lkO1xuICBpZihlbGVtLnBhcmVudFR5cGUgJiYgd2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gICAgcmV0dXJuIHByZXN0b0RvbSh7ZWxlbVR5cGU6IHR5cGUsIHBhcmVudFR5cGU6IGVsZW0ucGFyZW50VHlwZX0sIHByb3BzLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHByZXN0b0RvbSh0eXBlLCBwcm9wcywgY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBnZXREb21Ub1JlbmRlcihlbGVtKSB7XG4gIHZhciByZXMgPSBkb21BbGwoZWxlbSk7XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cblxuXG4vLyBOb3QgZXhwb3J0ZWRcbmZ1bmN0aW9uIGNtZEZvckFuZHJvaWQoY29uZmlnLCBzZXQsIHR5cGUpIHtcbiAgaWYgKHNldCkge1xuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIHZhciBvYmogPSBwYXJzZVBhcmFtcyh0eXBlLCBjb25maWcsIFwic2V0XCIpO1xuICAgICAgdmFyIGNtZCA9IG9iai5ydW5JblVJLnJlcGxhY2UoXCJ0aGlzLT5zZXRJZFwiLCBcInNldF92aWV3PWN0eC0+ZmluZFZpZXdCeUlkXCIpLnJlcGxhY2UoL3RoaXMtPi9nLCBcImdldF92aWV3LT5cIik7XG4gICAgICBjbWQgPSBjbWQucmVwbGFjZSgvUEFSQU1fQ1RSX0hPTERFUlteO10qL2csIFwiZ2V0X3ZpZXctPmdldExheW91dFBhcmFtcztcIik7XG4gICAgICBvYmoucnVuSW5VSSA9IGNtZDtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJJRCBudWxsLCB0aGlzIGlzIG5vdCBzdXBwb3NlZCB0byBoYXBwZW4uIERlYnVnIHRoaXMgb3IvYW5kIHJhaXNlIGEgaXNzdWUgaW4gYml0YnVja2V0LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgdmFyIF9pZCA9IGNvbmZpZy5pZDtcbiAgdmFyIGNtZCA9IFwic2V0X3ZpZXc9Y3R4LT5maW5kVmlld0J5SWQ6aV9cIiArIF9pZCArIFwiO1wiO1xuICAvLyB2YXIgcnVuSW5VSTtcbiAgZGVsZXRlIGNvbmZpZy5pZDtcbiAgY29uZmlnLnJvb3QgPSBcInRydWVcIjtcbiAgdmFyIG9iaiA9IHBhcnNlUGFyYW1zKHR5cGUsIGNvbmZpZywgXCJnZXRcIik7XG4gIG9iai5ydW5JblVJID0gY21kICsgb2JqLnJ1bkluVUkgKyAnOyc7XG4gIG9iai5pZCA9IF9pZDtcbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZ2V0UnVuSW5VSUNtZChwcm9wKSB7XG4gIHZhciBjbWQ7XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIGNtZCA9IGNtZEZvckFuZHJvaWQocHJvcCwgdHJ1ZSwgXCJsaW5lYXJMYXlvdXRcIikucnVuSW5VSTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIklPU1wiKXtcbiAgICBjbWQgPSBwcm9wO1xuICB9IGVsc2Uge1xuICAgIGNtZCA9IHdlYlBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIHByb3AsIFwic2V0XCIpO1xuICB9XG4gIHJldHVybiBjbWQ7XG59XG5cblxuXG4vLyBOb3QgZXhwb3J0ZWRcbmZ1bmN0aW9uIGFwcGx5UHJvcChlbGVtZW50LCBhdHRyaWJ1dGUsIHNldCkge1xuICB2YXIgcHJvcCA9IHtcbiAgICBpZDogZWxlbWVudC5fX3JlZi5fX2lkXG4gIH1cbiAgcHJvcFthdHRyaWJ1dGUudmFsdWUwXSA9IGF0dHJpYnV0ZS52YWx1ZTE7XG5cbiAgaWYgKGF0dHJpYnV0ZS52YWx1ZTAgPT0gJ2ZvY3VzJyAmJiBhdHRyaWJ1dGUudmFsdWUxID09IGZhbHNlICYmICB3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIHZhciBjbWQgPSBjbWRGb3JBbmRyb2lkKHByb3AsIHNldCwgZWxlbWVudC50eXBlKTtcbiAgICBpZiAoQW5kcm9pZC51cGRhdGVQcm9wZXJ0aWVzKSB7XG4gICAgICBBbmRyb2lkLnVwZGF0ZVByb3BlcnRpZXMoSlNPTi5zdHJpbmdpZnkoY21kKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEFuZHJvaWQucnVuSW5VSShjbWQucnVuSW5VSSwgbnVsbCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiSU9TXCIpe1xuICAgIGlmIChhdHRyaWJ1dGUudmFsdWUwID09ICd0ZXh0RnJvbUh0bWwnICYmIGVsZW1lbnQucHJvcHMpIHtcbiAgICAgIGlmIChlbGVtZW50LnByb3BzLmhhc093blByb3BlcnR5KCdjb2xvcicpKSB7XG4gICAgICAgIHByb3BbJ2NvbG9yJ10gPSBlbGVtZW50LnByb3BzLmNvbG9yO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQucHJvcHMuaGFzT3duUHJvcGVydHkoJ2ZvbnRTdHlsZScpKSB7XG4gICAgICAgIHByb3BbJ2ZvbnRTdHlsZSddID0gZWxlbWVudC5wcm9wcy5mb250U3R5bGU7XG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndGV4dFNpemUnKSkge1xuICAgICAgICBwcm9wWyd0ZXh0U2l6ZSddID0gZWxlbWVudC5wcm9wcy50ZXh0U2l6ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgQW5kcm9pZC5ydW5JblVJKHByb3ApO1xuICB9IGVsc2Uge1xuICAgIEFuZHJvaWQucnVuSW5VSSh3ZWJQYXJzZVBhcmFtcyhcImxpbmVhckxheW91dFwiLCBwcm9wLCBcInNldFwiKSk7XG4gIH1cbiAgLy8gQW5kcm9pZC5ydW5JblVJKHBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIHByb3AsIFwic2V0XCIpKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVZpZXcoZWxlbWVudCwgYXR0cmlidXRlLCByZW1vdmVQcm9wKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiUkVQTEFDRSBWSUVXXCIsIGVsZW1lbnQuX19yZWYuX19pZCwgZWxlbWVudC5wcm9wcyk7XG4gIHZhciBwcm9wcyA9IGhlbHBlci5jbG9uZShlbGVtZW50LnByb3BzLG51bGwpO1xuICBwcm9wcy5pZCA9IGVsZW1lbnQuX19yZWYuX19pZDtcbiAgdmFyIHJlcDtcbiAgdmFyIHZpZXdHcm91cHMgPSBbXCJsaW5lYXJMYXlvdXRcIiwgXCJyZWxhdGl2ZUxheW91dFwiLCBcInNjcm9sbFZpZXdcIiwgXCJmcmFtZUxheW91dFwiLCBcImhvcml6b250YWxTY3JvbGxWaWV3XCJdO1xuXG4gIGlmICh2aWV3R3JvdXBzLmluZGV4T2YoZWxlbWVudC50eXBlKSAhPSAtMSl7XG4gICAgcHJvcHMucm9vdCA9IHRydWU7XG4gICAgcmVwID0gcHJlc3RvRG9tKGVsZW1lbnQudHlwZSwgcHJvcHMsIFtdKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIHJlcCA9IHByZXN0b0RvbSh7ZWxlbVR5cGU6IGVsZW1lbnQudHlwZSwgcGFyZW50VHlwZTogZWxlbWVudC5wYXJlbnROb2RlLnR5cGV9LCBwcm9wcywgW10pO1xuICB9IGVsc2Uge1xuICAgIHJlcCA9IHByZXN0b0RvbShlbGVtZW50LnR5cGUsIHByb3BzLCBbXSk7XG4gIH1cbiAgaWYod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpe1xuICAgIEFuZHJvaWQucmVwbGFjZVZpZXcoSlNPTi5zdHJpbmdpZnkocmVwKSwgZWxlbWVudC5fX3JlZi5fX2lkKTtcbiAgfSBlbHNlIHtcbiAgICBBbmRyb2lkLnJlcGxhY2VWaWV3KHJlcCwgZWxlbWVudC5fX3JlZi5fX2lkKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByZXN0b0VsZW1lbnQoKSB7XG4gICAgaWYodHlwZW9mKHdpbmRvdy5fX3VpX2lkX3NlcXVlbmNlKSAhPSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5fX3VpX2lkX3NlcXVlbmNlICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHsgX19pZCA6ICsrd2luZG93Ll9fdWlfaWRfc2VxdWVuY2UgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSA9IHR5cGVvZiBBbmRyb2lkLmdldE5ld0lEID09IFwiZnVuY3Rpb25cIiA/IHBhcnNlSW50KEFuZHJvaWQuZ2V0TmV3SUQoKSkgKiAxMDAwMDAwIDogd2luZG93Ll9fUFJFU1RPX0lEIDtcbiAgICAgICAgcmV0dXJuIHsgX19pZCA6ICsrd2luZG93Ll9fdWlfaWRfc2VxdWVuY2UgfTtcbiAgICB9XG59O1xuXG5cbmZ1bmN0aW9uIG1vdmVDaGlsZChjaGlsZCwgcGFyZW50LCBpbmRleCkge1xuICBBbmRyb2lkLm1vdmVWaWV3KGNoaWxkLl9fcmVmLl9faWQsIGluZGV4KTtcbn1cblxuXG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkKGNoaWxkLCBwYXJlbnQsIGluZGV4KSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiUmVtb3ZlIGNoaWxkIDpcIiwgY2hpbGQudHlwZSk7XG4gIEFuZHJvaWQucmVtb3ZlVmlldyhjaGlsZC5fX3JlZi5fX2lkICsgXCJcIik7XG59XG5cbmZ1bmN0aW9uIGFkZENoaWxkKGNoaWxkLCBwYXJlbnQsIGluZGV4KSB7XG4gIGlmKGNoaWxkLnR5cGUgPT0gbnVsbCkge1xuICAgIGNvbnNvbGUud2FybihcImNoaWxkIG51bGxcIik7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coXCJBZGQgY2hpbGQgOlwiLCBjaGlsZC5fX3JlZi5fX2lkLCBjaGlsZC50eXBlKTtcbiAgdmFyIHZpZXdHcm91cHMgPSBbXCJsaW5lYXJMYXlvdXRcIiwgXCJyZWxhdGl2ZUxheW91dFwiLCBcInNjcm9sbFZpZXdcIiwgXCJmcmFtZUxheW91dFwiLCBcImhvcml6b250YWxTY3JvbGxWaWV3XCJdO1xuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICBpZiAodmlld0dyb3Vwcy5pbmRleE9mKGNoaWxkLnR5cGUpICE9IC0xKXtcbiAgICAgIGNoaWxkLnByb3BzLnJvb3QgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZC5wYXJlbnRUeXBlID0gcGFyZW50LnR5cGU7XG4gICAgfVxuICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHBhcmVudC5fX3JlZi5fX2lkICsgXCJcIiwgSlNPTi5zdHJpbmdpZnkoZG9tQWxsKGNoaWxkKSksIGluZGV4LCBudWxsLCBudWxsKTtcbiAgfVxuICBlbHNlXG4gICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQocGFyZW50Ll9fcmVmLl9faWQsIGRvbUFsbChjaGlsZCksIGluZGV4LCBudWxsLCBudWxsKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuICAvLyBjb25zb2xlLmxvZyhcImFkZCBhdHRyIDpcIiwgYXR0cmlidXRlKTtcbiAgZWxlbWVudC5wcm9wc1thdHRyaWJ1dGUudmFsdWUwXSA9IGF0dHJpYnV0ZS52YWx1ZTE7XG4gIGFwcGx5UHJvcChlbGVtZW50LCBhdHRyaWJ1dGUsIHRydWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwicmVtb3ZlIGF0dHIgOlwiLCBhdHRyaWJ1dGUpO1xuICByZXBsYWNlVmlldyhlbGVtZW50LCBhdHRyaWJ1dGUsIHRydWUpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlIGF0dHIgOlwiLCBhdHRyaWJ1dGUpO1xuICBlbGVtZW50LnByb3BzW2F0dHJpYnV0ZS52YWx1ZTBdID0gYXR0cmlidXRlLnZhbHVlMTtcblxuICBhcHBseVByb3AoZWxlbWVudCwgYXR0cmlidXRlLCBmYWxzZSk7XG59XG5cblxuZnVuY3Rpb24gaW5zZXJ0RG9tKHJvb3QsIGRvbSwgY2IpIHtcbiAgcm9vdC5jaGlsZHJlbi5wdXNoKGRvbSk7XG4gIGRvbS5wYXJlbnROb2RlID0gcm9vdDtcbiAgZG9tLl9fcmVmID0gY3JlYXRlUHJlc3RvRWxlbWVudCgpO1xuICB3aW5kb3cuTiA9IHJvb3Q7XG5cbiAgdmFyIHJvb3RJZCA9IHdpbmRvdy5fX1JPT1RTQ1JFRU4uaWRTZXQucm9vdDtcblxuICBkb20ucHJvcHMucm9vdCA9IHRydWU7XG5cbiAgdmFyIGxlbmd0aCA9IHdpbmRvdy5fX1JPT1RTQ1JFRU4uaWRTZXQuY2hpbGQucHVzaChkb20uX19yZWYuX19pZCk7XG5cbiAgdmFyIGNhbGxiYWNrID0gd2luZG93LmNhbGxiYWNrTWFwcGVyKGV4ZWN1dGVQb3N0UHJvY2VzcyhjYikpO1xuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChyb290SWQgKyBcIlwiLCBKU09OLnN0cmluZ2lmeShkb21BbGwoZG9tKSksIGxlbmd0aCAtIDEsIGNhbGxiYWNrLCBudWxsKTtcbiAgfVxuICBlbHNlIHtcbiAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChyb290SWQsIGRvbUFsbChkb20pLCBsZW5ndGggLSAxLCBjYWxsYmFjaywgbnVsbCk7XG4gIH1cblxuICByZXR1cm4gZG9tLl9fcmVmLl9faWQ7XG5cbn1cblxuXG5mdW5jdGlvbiBleGVjdXRlUG9zdFByb2Nlc3MoY2IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNiKCk7XG5cbiAgICBpZih3aW5kb3cuX19kdWlfc2NyZWVuICYmIHdpbmRvd1tcImFmdGVyUmVuZGVyXCJdKSB7XG4gICAgICBmb3IgKHZhciB0YWcgaW4gd2luZG93W1wiYWZ0ZXJSZW5kZXJcIl1bd2luZG93Ll9fZHVpX3NjcmVlbl0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3aW5kb3dbXCJhZnRlclJlbmRlclwiXVt3aW5kb3cuX19kdWlfc2NyZWVuXVt0YWddKCkoKTtcbiAgICAgICAgICB3aW5kb3dbXCJhZnRlclJlbmRlclwiXVt3aW5kb3cuX19kdWlfc2NyZWVuXVtcImV4ZWN1dGVkXCJdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoSkJyaWRnZSAmJiBKQnJpZGdlLnNldFNoYWRvdykge1xuICAgICAgZm9yICh2YXIgdGFnIGluIHdpbmRvdy5zaGFkb3dPYmplY3QpIHtcbiAgICAgICAgSkJyaWRnZS5zZXRTaGFkb3cod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wibGV2ZWxcIl0sXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJ2aWV3SWRcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiYmFja2dyb3VuZENvbG9yXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImJsdXJWYWx1ZVwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJzaGFkb3dDb2xvclwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJkeFwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJkeVwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJzcHJlYWRcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZmFjdG9yXCJdKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRvbUFsbDogZG9tQWxsLFxuICBnZXREb21Ub1JlbmRlcjogZ2V0RG9tVG9SZW5kZXIsXG4gIGdldFJ1bkluVUlDbWQ6IGdldFJ1bkluVUlDbWQsXG4gIHJlcGxhY2VWaWV3OiByZXBsYWNlVmlldyxcbiAgY3JlYXRlUHJlc3RvRWxlbWVudDogY3JlYXRlUHJlc3RvRWxlbWVudCxcbiAgbW92ZUNoaWxkOiBtb3ZlQ2hpbGQsXG4gIHJlbW92ZUNoaWxkOiByZW1vdmVDaGlsZCxcbiAgYWRkQ2hpbGQ6IGFkZENoaWxkLFxuICBhZGRBdHRyaWJ1dGU6IGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlOiByZW1vdmVBdHRyaWJ1dGUsXG4gIHVwZGF0ZVByb3BlcnR5OiB1cGRhdGVBdHRyaWJ1dGUsXG4gIGFkZFByb3BlcnR5OiBhZGRBdHRyaWJ1dGUsXG4gIGluc2VydERvbTogaW5zZXJ0RG9tXG59O1xuXG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbmNvbnN0IEJhc2VWaWV3ID0gcmVxdWlyZSgnLi9iYXNlVmlldycpO1xuY29uc3QgVklFVyA9IG5ldyBCYXNlVmlldyhudWxsLCBudWxsLCB7fSk7XG5cbi8vIE9iamVjdCBvZiB0eXBlcyBvZiBhbmltYXRpb25zIGF2YWlsYWJsZSBvbiBzY3JlZW4gY2hhbmdlXG5jb25zdCBBbmltYXRpb25UeXBlcyA9IHtcbiAgU0xJREU6IHtcbiAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgaGFuZGxlcjogc2xpZGVIYW5kbGVyXG4gIH0sXG4gIFNMSURFX1ZFUlRJQ0FMOiB7XG4gICAgbmFtZTogXCJzbGlkZV9kb3duXCIsXG4gICAgaGFuZGxlcjogc2xpZGVEb3duSGFuZGxlclxuICB9LFxuICBTSU1QTEU6IHtcbiAgICBuYW1lOiBcInNpbXBsZVwiLFxuICAgIGhhbmRsZXI6IHNpbXBsZUhhbmRsZXJcbiAgfVxufVxuXG5jb25zdCBERUZBVUxUX0FOSU1BVElPTiA9IEFuaW1hdGlvblR5cGVzLlNMSURFO1xuXG5mdW5jdGlvbiBzaW1wbGVIYW5kbGVyKGZyb21JZCwgdG9JZCwgZGlyZWN0aW9uKSB7XG4gIGxldCBjbWQgPSBWSUVXLmNtZCh7XG4gICAgaWQ6IHRvSWQsXG4gICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXhcbiAgfSk7XG4gIHJldHVybiBjbWQ7XG59XG5cbmZ1bmN0aW9uIHNsaWRlRG93bkhhbmRsZXIoZnJvbUlkLCB0b0lkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGNvbnRhaW5lciA9IFZJRVcuY21kQ29udGFpbmVyKCk7XG4gIGxldCBjbWQ7XG5cbiAgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IHRvSWQsXG4gICAgICB0cmFuc2xhdGlvblk6IHdpbmRvdy5fX0hFSUdIVCxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblk6ICcwJyxcbiAgICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4LFxuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiBmcm9tSWQsXG4gICAgICBhX3RyYW5zbGF0aW9uWTogLTAuMiAqIHdpbmRvdy5fX0hFSUdIVCxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIHdpbmRvdy5aSW5kZXgrKztcbiAgY21kID0gVklFVy5jbWQoe1xuICAgIGlkOiBmcm9tSWQsXG4gICAgdHJhbnNsYXRpb25ZOiAwLFxuICAgIGFfdHJhbnNsYXRpb25ZOiB3aW5kb3cuX19IRUlHSFQsXG4gICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXhcbiAgfSk7XG4gIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgaWQ6IHRvSWQsXG4gICAgdHJhbnNsYXRpb25aOiB3aW5kb3cuWkluZGV4LTEsXG4gICAgYV90cmFuc2xhdGlvblk6ICcwJyxcbiAgICB0cmFuc2xhdGlvblk6IC0wLjIgKiB3aW5kb3cuX19IRUlHSFQsXG4gICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gIH0pO1xuICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gc2xpZGVIYW5kbGVyKGZyb21JZCwgdG9JZCwgZGlyZWN0aW9uKSB7XG4gIGxldCBjb250YWluZXIgPSBWSUVXLmNtZENvbnRhaW5lcigpO1xuICBsZXQgY21kO1xuICBpZiAoZGlyZWN0aW9uID09IDEpIHtcbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogdG9JZCxcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgIHRyYW5zbGF0aW9uWDogd2luZG93Ll9fV0lEVEgsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25YOiAnMCcsXG4gICAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleCxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IGZyb21JZCxcbiAgICAgIHRyYW5zbGF0aW9uWDogJzAnLFxuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgICBhX3RyYW5zbGF0aW9uWDogKC0uMiAqIHdpbmRvdy5fX1dJRFRIKSArICcnLFxuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcbiAgfVxuXG4gIGlmIChkaXJlY3Rpb24gPT0gLTEpIHtcbiAgICB3aW5kb3cuWkluZGV4Kys7XG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IGZyb21JZCxcbiAgICAgIHRyYW5zbGF0aW9uWDogJzAnLFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgICBhX3RyYW5zbGF0aW9uWDogd2luZG93Ll9fV0lEVEgsXG4gICAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleCxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogdG9JZCxcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgIHRyYW5zbGF0aW9uWDogKC0uMiAqIHdpbmRvdy5fX1dJRFRIKSArICcnLFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgICBhX3RyYW5zbGF0aW9uWDogJzAnLFxuICAgICAgdHJhbnNsYXRpb25aOiB3aW5kb3cuWkluZGV4IC0gMSxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vKlxuICBHZW5lcmljIEhhbmRsZXIgZm9yIEFuaW1hdGlvblxuICBBcmd1bWVudHM6XG4gICAgZnJvbVZpZXdJZDogTnVtYmVyIC0gSWQgb2YgdGhlIHZpZXcgY3VycmVudGx5IHZpc2libGUgb24gdGhlIHNjcmVlblxuICAgIHRvVmlld0lEOiBOdW1iZXIgLSBJZCBvZiB0aGUgdmlldyB3aGljaCBoYXMgdG8gYmUgYnJvdWdodCBvbiB0aGUgc2NyZWVuXG4gICAgSUQ6IE51bWJlciAtIElkIG9mIHRoZSB2aWV3IHRvIGJlIGFuaW1hdGVkXG4gICAgYW5pbWF0b3I6IE9iaiAtIHtuYW1lOnN0cmluZywgaGFuZGxlcjpmdW5jdGlvbn1cbiAgICBkaXJlY3Rpb246IE51bWJlciAtIFJlcHJlc2VudHMgb2YgdGhlIGRpcmVjdGlvbiBvZiB0aGUgc2NyZWVuXG4gICAgICAtMSA6IEdvIGJhY2sgdG8gdGhlIGFscmVhZHkgcmVuZGVyZWQgc2NyZWVuIChyaWdodCB0byBsZWZ0KVxuICAgICAgIDEgOiBHbyB0byB0aGUgbmV3IHNjcmVlbiAobGVmdCB0byByaWdodClcbiovXG5mdW5jdGlvbiBnZXRBbmltYXRpb24oZnJvbVZpZXdJRCwgdG9WaWV3SWQsIGRpcmVjdGlvbiwgYW5pbWF0b3IpIHtcbiAgaWYgKCFhbmltYXRvcilcbiAgICBhbmltYXRvciA9IERFRkFVTFRfQU5JTUFUSU9OO1xuXG4gIGlmICh0eXBlb2YgYW5pbWF0b3IgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGFuaW1hdG9yLmhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIilcbiAgICByZXR1cm4gYW5pbWF0b3IuaGFuZGxlcihmcm9tVmlld0lELCB0b1ZpZXdJZCwgZGlyZWN0aW9uKTtcbiAgZWxzZVxuICAgIGNvbnNvbGUubG9nKG5ldyBFcnJvcihcIkFuaW1hdGlvbiBoYW5kbGVyIGlzIG5vdCBhIGZ1bmN0aW9uLCB0eXBlOiBcIiArXG4gICAgICBhbmltYXRvcikpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy50eXBlcyA9IEFuaW1hdGlvblR5cGVzO1xubW9kdWxlLmV4cG9ydHMuZ2V0QW5pbWF0aW9uID0gZ2V0QW5pbWF0aW9uOyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuY29uc3QgbWVyZ2UgPSAgcmVxdWlyZShcIi4vaGVscGVyXCIpLm1lcmdlO1xuXG5TdHJpbmcucHJvdG90eXBlLmFkZENtZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgcmV0dXJuIHRoaXMuY29uY2F0KGRhdGEpO1xufTtcblxuQXJyYXkucHJvdG90eXBlLmFkZENtZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgdGhpcy5wdXNoKGRhdGEpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmxldCBwYXJzZVBhcmFtcztcbmlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIilcbiAgcGFyc2VQYXJhbXMgPSByZXF1aXJlKCcuL2hlbHBlcnMvYW5kcm9pZC9wYXJzZVBhcmFtcycpO1xuZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJXRUJcIilcbiAgcGFyc2VQYXJhbXMgPSByZXF1aXJlKCcuL2hlbHBlcnMvd2ViL3BhcnNlUGFyYW1zJyk7XG5lbHNlXG4gIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lvcy9wYXJzZVBhcmFtcycpO1xuXG5jbGFzcyBCYXNlVmlldyB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjaGlsZHJlbikge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW4gfHwgW107XG5cbiAgICB3aW5kb3cuX19TRVRGTiA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIEFuZHJvaWQucnVuSW5VSShcbiAgICAgICAgdGhpcy5zZXQoY29uZmlnKSxcbiAgICAgICAgbnVsbFxuICAgICAgKVxuICAgIH0uYmluZCh0aGlzKVxuXG4gICAgdGhpcy5pZFNldCA9IHt9O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaWQpIHtcbiAgICAgIHRoaXMuaWRTZXRbXCJpZFwiXSA9IHRoaXMucHJvcHMuaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuaWQgPSB0aGlzLmlkKFwiaWRcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuX3JlZikge1xuICAgICAgdGhpcy5wcm9wcy5fcmVmKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZC5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRSZWN1cnNlKG9iaiwgc2VsZWN0b3IpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBvYmouY2hpbGRyZW47XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY2hpbGRyZW5baV0uZGlzcGxheU5hbWUgJiYgY2hpbGRyZW5baV0uZGlzcGxheU5hbWUgPT0gc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5mb3VuZENoaWxkcmVuLnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRyZW5baV0uY2hpbGRyZW4gJiYgY2hpbGRyZW5baV0uY2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgICB0aGlzLmZpbmRSZWN1cnNlKGNoaWxkcmVuW2ldLCBzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZmluZChzZWxlY3Rvciwgb2JqKSB7XG4gICAgdGhpcy5mb3VuZENoaWxkcmVuID0gW107XG5cbiAgICBpZiAoIW9iailcbiAgICAgIHRoaXMuZmluZFJlY3Vyc2UodGhpcy5sYXlvdXQsIHNlbGVjdG9yKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmZpbmRSZWN1cnNlKG9iaiwgc2VsZWN0b3IpO1xuXG4gICAgcmV0dXJuIHRoaXMuZm91bmRDaGlsZHJlbjtcbiAgfVxuXG4gIGlkKG5hbWUpIHtcbiAgICBpZiAoIXRoaXMuaWRTZXRbbmFtZV0pIHtcbiAgICAgIHdpbmRvdy5fX0lEKys7XG4gICAgICB0aGlzLmlkU2V0W25hbWVdID0gd2luZG93Ll9fSUQ7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzLmlkU2V0W25hbWVdO1xuICB9XG5cbiAgc2V0SWRzKGFycikge1xuICAgIGlmICghdGhpcy5pZFNldClcbiAgICAgIHRoaXMuaWRTZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuaWRTZXRbYXJyW2ldXSkge1xuICAgICAgICB3aW5kb3cuX19JRCsrO1xuICAgICAgICB0aGlzLmlkU2V0W2FycltpXV0gPSB3aW5kb3cuX19JRCArICcnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNwZWNpYWxDaGFycyh2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUuaW5kZXhPZignLCcpID4gLTEgPyB2YWx1ZS5yZXBsYWNlKC9cXCwvZywgJ1xcXFxcXFxcLCcpIDogdmFsdWU7XG4gICAgdmFsdWUgPSB2YWx1ZS5pbmRleE9mKCc6JykgPiAtMSA/IHZhbHVlLnJlcGxhY2UoL1xcOi9nLCAnXFxcXFxcXFw6JykgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJz0nKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFw9L2csICdcXFxcXFxcXD0nKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gdmFsdWUuaW5kZXhPZignOycpID4gLTEgPyB2YWx1ZS5yZXBsYWNlKC9cXDsvZywgJ1xcXFxcXFxcOycpIDogdmFsdWU7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjbWRGb3JBbmRyb2lkKGNvbmZpZykge1xuICAgIHZhciBjbWQgPSBcInNldF92aWV3PWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBjb25maWcuaWQgKyBcIjtcIjtcbiAgICB2YXIgcnVuSW5VSTtcblxuICAgIGlmIChjb25maWcudG9hc3QpIHtcbiAgICAgIGNtZCA9IFwic2V0X1RPQVNUPWFuZHJvaWQud2lkZ2V0LlRvYXN0LT5tYWtlVGV4dDpjdHhfY3R4LGNzX1wiICsgdGhpcy5oYW5kbGVTcGVjaWFsQ2hhcnMoXG4gICAgICAgICAgY29uZmlnLnRleHQpICsgXCIsaV9cIiArIChjb25maWcuZHVyYXRpb24gPT0gXCJzaG9ydFwiID8gMCA6IDEpICtcbiAgICAgICAgXCI7Z2V0X1RPQVNULT5zaG93XCI7XG4gICAgfSBlbHNlIGlmIChjb25maWcgJiYgT2JqZWN0LmtleXMoY29uZmlnKS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG5cbiAgICAgIGNvbmZpZy5yb290ID0gXCJ0cnVlXCI7XG4gICAgICBydW5JblVJID0gcGFyc2VQYXJhbXMoXCJsaW5lYXJMYXlvdXRcIiwgY29uZmlnLCBcImdldFwiKS5ydW5JblVJO1xuXG4gICAgICBjbWQgKz0gcnVuSW5VSSArICc7JztcbiAgICB9XG5cbiAgICByZXR1cm4gY21kO1xuICB9XG5cbiAgY21kQ29udGFpbmVyKCkge1xuICAgIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIilcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNtZEZvcldlYihjb25maWcpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoY29uZmlnKS5sZW5ndGgpXG4gICAgICByZXR1cm4gcGFyc2VQYXJhbXMoXCJsaW5lYXJMYXlvdXRcIiwgY29uZmlnLCBcInNldFwiKTtcbiAgfVxuXG4gIGNtZChjb25maWcpIHtcbiAgICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gICAgICByZXR1cm4gdGhpcy5jbWRGb3JBbmRyb2lkKGNvbmZpZyk7XG4gICAgZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJXRUJcIilcbiAgICAgIHJldHVybiB0aGlzLmNtZEZvcldlYihjb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBhcHBlbmRDaGlsZChpZCwganN4LCBpbmRleCwgZm4sIHJlcGxhY2VDaGlsZCkge1xuICAgIHZhciBwcm94eUZuTmFtZTtcbiAgICBpZiAoIXJlcGxhY2VDaGlsZCkge1xuICAgICAgcmVwbGFjZUNoaWxkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGZuKSB7XG4gICAgICBwcm94eUZuTmFtZSA9ICdGJyArIHdpbmRvdy5fX0ZOX0lOREVYO1xuICAgICAgd2luZG93Ll9fUFJPWFlfRk5bcHJveHlGbk5hbWVdID0gZm47XG4gICAgICB3aW5kb3cuX19GTl9JTkRFWCsrO1xuICAgIH1cblxuICAgIGpzeCA9ICh3aW5kb3cuX19PUyAhPSBcIkFORFJPSURcIikgPyBqc3ggOiBKU09OLnN0cmluZ2lmeShqc3gpO1xuXG4gICAgaWYgKHByb3h5Rm5OYW1lKVxuICAgICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQoaWQsIGpzeCwgaW5kZXgsIHByb3h5Rm5OYW1lLCByZXBsYWNlQ2hpbGQpO1xuICAgIGVsc2VcbiAgICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KGlkLCBqc3gsIGluZGV4LCBudWxsLCByZXBsYWNlQ2hpbGQpO1xuICB9XG5cbiAgZ2V0Vmlldyhqc3gpIHtcbiAgICBpZiAod2luZG93Ll9fT1MgIT0gXCJBTkRST0lEXCIpXG4gICAgICByZXR1cm4ganN4O1xuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzeCk7XG4gIH1cblxuICB1cGRhdGVQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBtZXJnZSh0aGlzLnByb3BzLCBwcm9wcyk7XG4gICAgY29uc3Qgb2xkQ29udGFpbmVySWQgPSB0aGlzLmxheW91dC5pZFNldC5pZDtcbiAgICBjb25zdCBsYXlvdXQgPSB0aGlzLnJlbmRlcigpO1xuICAgIGZvciAobGV0IGk9MDsgaTxsYXlvdXQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpPT0wKSB0aGlzLnJlcGxhY2VDaGlsZChvbGRDb250YWluZXJJZCwgbGF5b3V0LmNoaWxkcmVuW2ldLCBpKTtcbiAgICAgIGVsc2UgdGhpcy5hcHBlbmRDaGlsZChvbGRDb250YWluZXJJZCwgbGF5b3V0LmNoaWxkcmVuW2ldLCBpKTtcbiAgICB9XG4gICAgdGhpcy5sYXlvdXQuaWRTZXQuaWQgPSBvbGRDb250YWluZXJJZDtcbiAgfVxuXG4gIHJlbW92ZVZpZXcoaWQpIHtcbiAgICBpZiAoX19PUyA9PSBcIldFQlwiKVxuICAgICAgcmV0dXJuIEFuZHJvaWQucmVtb3ZlVmlldyhpZCk7XG4gICAgcmV0dXJuIFwic2V0X1ZJRVc9Y3R4LT5maW5kVmlld0J5SWQ6aV9cIiArIGlkICtcbiAgICAgIFwiO3NldF9QQVJFTlQ9Z2V0X1ZJRVctPmdldFBhcmVudDtnZXRfUEFSRU5ULT5yZW1vdmVWaWV3OmdldF9WSUVXO1wiXG4gIH1cblxuICByZW1vdmVDaGlsZHJlbihpZCkge1xuICAgIGlmIChfX09TID09IFwiV0VCXCIpXG4gICAgICByZXR1cm4gQW5kcm9pZC5yZW1vdmVDaGlsZHJlbihpZCk7XG4gICAgcmV0dXJuIFwic2V0X1ZJRVc9Y3R4LT5maW5kVmlld0J5SWQ6aV9cIiArIGlkICtcbiAgICAgIFwiO2dldF9WSUVXLT5yZW1vdmVBbGxWaWV3cztcIlxuICB9XG5cbiAgcmVwbGFjZUNoaWxkKGlkLCBqc3gsIGluZGV4LCBmbikge1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoaWQsIGpzeCwgaW5kZXgsIGZuLCB0cnVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VWaWV3OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuXG5cbnZhciBjb21wdXRlQ2hpbGREaW1lbnMgPSBmdW5jdGlvbih2aWV3KSB7XG4gICAgaWYgKHZpZXcucHJvcHMpIHtcbiAgICAgIHZpZXcucHJvcHMudXNlQ29uc3RyYWl0cyA9IHRydWU7XG4gICAgfVxuICAgIC8vIGlmICh2aWV3LnR5cGUgPT0gXCJsaW5lYXJMYXlvdXRcIiAmJiB2aWV3LmNoaWxkcmVuICYmIHZpZXcuY2hpbGRyZW4ubGVuZ3RoKXtcbiAgICAvLyAgIHZpZXcucHJvcHMud2VpZ2h0U3VtID0gMC4wO1xuICAgIC8vICAgdmlldy5wcm9wcy5kaWZmSGVpZ2h0ID0gMC4wO1xuICAgIC8vICAgZm9yKHZhciBpIGluIHZpZXcuY2hpbGRyZW4pe1xuICAgIC8vICAgICB2YXIgY2hpbGQgPSB2aWV3LmNoaWxkcmVuW2ldO1xuICAgIC8vICAgICBpZihjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy53ZWlnaHQpe1xuICAgIC8vICAgICAgIHZpZXcucHJvcHMud2VpZ2h0U3VtICs9IHBhcnNlSW50KGNoaWxkLnByb3BzLndlaWdodClcbiAgICAvLyAgICAgfSBlbHNlIGlmKGNoaWxkLnByb3BzICYmIGNoaWxkLnByb3BzLmhlaWdodCkge1xuICAgIC8vICAgICAgIHZpZXcucHJvcHMuZGlmZkhlaWdodCArPSBwYXJzZUludChjaGlsZC5wcm9wcy5oZWlnaHQpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIHJldHVybiB2aWV3O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tcHV0ZUxpbmVhcmxheW91dDoodmlldykgPT4gY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpLFxuICBjb21wdXRlUmVsYXRpdmVMYXlvdXQ6ICh2aWV3KSA9PiBjb21wdXRlQ2hpbGREaW1lbnModmlldyksXG4gIGNvbXB1dGVTY3JvbGxWaWV3OiAodmlldykgPT4gY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpLFxuICBjb21wdXRlQ2hpbGREaW1lbnNcbn07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbmZ1bmN0aW9uIHJ1bigpIHtcbiAgaWYgKHdpbmRvdy5fX09TID09PSBcIklPU1wiKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL2lvc1wiKVxuICB9IGVsc2UgaWYgKHdpbmRvdy5fX09TID09PSBcIldFQlwiKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL3dlYlwiKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi9hbmRyb2lkXCIpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBydW4oKTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbkFycmF5LnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICB2YXIgbW9yZSA9IFtdLmNvbmNhdChjdXIpLnNvbWUoQXJyYXkuaXNBcnJheSk7XG4gICAgcmV0dXJuIHByZXYuY29uY2F0KG1vcmUgPyBjdXIuZmxhdHRlbigpIDogY3VyKTtcbiAgfSxbXSk7XG59O1xuXG5mdW5jdGlvbiBmbGF0dGVuT2JqZWN0KG9iKSB7XG4gIHZhciB0b1JldHVybiA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iKSB7XG4gICAgaWYgKCFvYi5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG4gICAgaWYgKCh0eXBlb2Ygb2JbaV0pID09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgZmxhdE9iamVjdCA9IGZsYXR0ZW5PYmplY3Qob2JbaV0pO1xuICAgICAgZm9yICh2YXIgeCBpbiBmbGF0T2JqZWN0KSB7XG4gICAgICAgIGlmICghZmxhdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSh4KSkgY29udGludWU7XG4gICAgICAgIGlmICh0eXBlb2YgZmxhdE9iamVjdFt4XSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICB0b1JldHVyblt4XSA9IGZsYXRPYmplY3RbeF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvUmV0dXJuW2ldID0gb2JbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0b1JldHVybjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odHlwZSwgcHJvcHMsIC4uLmNoaWxkcmVuKXtcbiAgdmFyIHBhcmFtVHlwZTtcblxuICBjaGlsZHJlbiA9ICBjaGlsZHJlbi5mbGF0dGVuKCk7XG5cbiAgaWYgKCFwcm9wcylcbiAgcHJvcHMgPSB7fTtcblxuICBpZih0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHByb3BzLm5vZGVfaWQgPSB3aW5kb3cuX19OT0RFX0lEICsgJyc7XG4gICAgcHJvcHMgPSBmbGF0dGVuT2JqZWN0KHByb3BzKTtcbiAgICB3aW5kb3cuX19OT0RFX0lEKys7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBjaGlsZC5wcm9wcy5wYXJlbnRJZCA9IHByb3BzLmlkO1xuICAgIH0pXG5cbiAgICBpZiAoIXByb3BzLl9fZmlsZW5hbWUpXG4gICAgcHJvcHMuX19maWxlbmFtZSA9IFwiZmlsZW5hbWUgbm90IGFkZGVkXCI7XG5cbiAgICByZXR1cm4ge3R5cGU6IHR5cGUsICBwcm9wczogcHJvcHMsIGNoaWxkcmVuOiBjaGlsZHJlbn1cblxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgdHlwZShwcm9wcywgY2hpbGRyZW4pO1xuICB9XG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoYW5kbGUgOiAodWksIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYgKCF1aSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZih1aS5yZW5kZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgQW5kcm9pZCA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW5kcm9pZCBpcyB1bmRlZmluZWRcIik7XG5cbiAgICAgIGlmICh3aW5kb3cuX19PUyAhPSBcIkFORFJPSURcIilcbiAgICAgICAgcmV0dXJuIEFuZHJvaWQuUmVuZGVyKHVpLnJlbmRlciwgbnVsbCk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYodHlwZW9mIEFuZHJvaWQuZ2V0TmV3SUQgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIEFuZHJvaWQuUmVuZGVyKEpTT04uc3RyaW5naWZ5KHVpLnJlbmRlciksIG51bGwsIFwiZmFsc2VcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIEFuZHJvaWQuUmVuZGVyKEpTT04uc3RyaW5naWZ5KHVpLnJlbmRlciksIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodWkucnVuSW5VSSkge1xuICAgICAgQW5kcm9pZC5ydW5JblVJKHVpLnJ1bkluVUksIG51bGwpO1xuICAgIH1cbiAgICBpZih1aS5hZGRWaWV3VG9QYXJlbnQpIHtcbiAgICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHVpLmFkZFZpZXdUb1BhcmVudC5wYXJlbnRJZCwgSlNPTi5zdHJpbmdpZnkodWkuYWRkVmlld1RvUGFyZW50LmpzeCksIHVpLmFkZFZpZXdUb1BhcmVudC5pbmRleCwgbnVsbCk7XG4gICAgfVxuICB9XG59IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG4vLyBGb2xsb3dpbmcgZnVuY3Rpb25zIGFyZSB1c2VkIGJ5IFdFQiBhbmQgSU9TIFJlbmRlclxuZnVuY3Rpb24gY2FjaGVEaW1lbih2aWV3KSB7XG4gIGxldCBwcm9wcyA9IHZpZXcucHJvcHM7XG4gIGxldCBkaW1lbiA9IHtcbiAgICB3OiBwcm9wcy53LFxuICAgIGg6IHByb3BzLmgsXG4gICAgeDogcHJvcHMueCxcbiAgICB5OiBwcm9wcy55LFxuICAgIGdyYXZpdHk6IHByb3BzLmdyYXZpdHksXG4gICAgcGFkZGluZzogcHJvcHMucGFkZGluZyxcbiAgICBvcmllbnRhdGlvbjogcHJvcHMub3JpZW50YXRpb24sXG4gICAgc3Ryb2tlOiBwcm9wcy5zdHJva2UgPyBwcm9wcy5zdHJva2Uuc3BsaXQoXCIsXCIpWzBdICogMSA6IDAsXG4gIH1cbiAgd2luZG93Ll9fVklFV19ESU1FTlNJT05TW3Byb3BzLmlkXSA9IGRpbWVuO1xufVxuXG5mdW5jdGlvbiBzaG91bGRNb3ZlKHZpZXcpIHtcbiAgbGV0IHByb3BzID0gdmlldy5wcm9wcztcbiAgbGV0IGRpbWVuID0ge1xuICAgIHc6IHByb3BzLncsXG4gICAgaDogcHJvcHMuaCxcbiAgICB4OiBwcm9wcy54LFxuICAgIHk6IHByb3BzLnlcbiAgfTtcbiAgbGV0IGNhY2hlZERpbWVuID0gd2luZG93Ll9fVklFV19ESU1FTlNJT05TW3Byb3BzLmlkXTtcbiAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgaWYgKCFjYWNoZWREaW1lbilcbiAgICByZXR1cm4gZGltZW47XG4gIGZvciAobGV0IGtleSBpbiBkaW1lbikge1xuICAgIGlmIChjYWNoZWREaW1lbltrZXldICE9IGRpbWVuW2tleV0pIHtcbiAgICAgIGRpbWVuLmlkID0gcHJvcHMuaWQ7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKGNoYW5nZWQpXG4gICAgcmV0dXJuIGRpbWVuO1xuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0T1MoKSB7XG4gIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICBpZiAoIXVzZXJBZ2VudClcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcihuZXcgRXJyb3IoXCJVc2VyQWdlbnQgaXMgbnVsbFwiKSk7XG4gIGlmICh1c2VyQWdlbnQuaW5jbHVkZXMoXCJBbmRyb2lkXCIpICYmIHVzZXJBZ2VudC5pbmNsdWRlcyhcIlZlcnNpb25cIikpXG4gICAgcmV0dXJuIFwiQU5EUk9JRFwiO1xuICBpZiAoKHVzZXJBZ2VudC5pbmNsdWRlcyhcImlQaG9uZVwiKSB8fCB1c2VyQWdlbnQuaW5jbHVkZXMoXCJpUGFkXCIpKSAmJiAhdXNlckFnZW50LmluY2x1ZGVzKFwiVmVyc2lvblwiKSlcbiAgICByZXR1cm4gXCJJT1NcIjtcbiAgcmV0dXJuIFwiV0VCXCI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVmlld0V4dGVybmFscyh2aWV3KSB7XG4gIGlmICghdmlldylcbiAgICByZXR1cm47XG5cbiAgZGVsZXRlIHdpbmRvdy5fX1ZJRVdTW3ZpZXcucHJvcHMuaWRdO1xuICBkZWxldGUgd2luZG93Ll9fVklFV19ESU1FTlNJT05TW3ZpZXcucHJvcHMuaWRdO1xuICBcbiAgaWYoX19PQlNFUlZFUlNbdmlldy5wcm9wcy5pZF0pXG4gICAgZGVsZXRlIHdpbmRvdy5fX09CU0VSVkVSU1t2aWV3LnByb3BzLmlkXTtcblxuICB2aWV3LmNoaWxkcmVuLmZvckVhY2goY2xlYXJWaWV3RXh0ZXJuYWxzKTtcbn1cblxuLy8gdXNlOiBjbG9uZSggPHRoaW5nIHRvIGNvcHk+ICkgcmV0dXJucyA8bmV3IGNvcHk+XG5mdW5jdGlvbiBjbG9uZShvLCBtKXtcbiAgLy8gcmV0dXJuIG5vbiBvYmplY3QgdmFsdWVzXG4gIGlmKCdvYmplY3QnICE9PXR5cGVvZiBvKSByZXR1cm4gb1xuICAvLyBtOiBhIG1hcCBvZiBvbGQgcmVmcyB0byBuZXcgb2JqZWN0IHJlZnMgdG8gc3RvcCByZWN1cnNpb25cbiAgaWYoJ29iamVjdCcgIT09dHlwZW9mIG0gfHwgbnVsbCA9PT1tKSBtID1uZXcgV2Vha01hcCgpXG4gIHZhciBuID1tLmdldChvKVxuICBpZigndW5kZWZpbmVkJyAhPT10eXBlb2YgbikgcmV0dXJuIG5cbiAgLy8gc2hhbGxvdy9sZWFmIGNsb25lIG9iamVjdFxuICB2YXIgYyA9T2JqZWN0LmdldFByb3RvdHlwZU9mKG8pLmNvbnN0cnVjdG9yXG4gIC8vIFRPRE86IHNwZWNpYWxpemUgY29waWVzIGZvciBleHBlY3RlZCBidWlsdCBpbiB0eXBlcyBpLmUuIERhdGUgZXRjXG4gIHN3aXRjaChjKSB7XG4gICAgLy8gc2hvdWxkbid0IGJlIGNvcGllZCwga2VlcCByZWZlcmVuY2VcbiAgICBjYXNlIEJvb2xlYW46XG4gICAgY2FzZSBFcnJvcjpcbiAgICBjYXNlIEZ1bmN0aW9uOlxuICAgIGNhc2UgTnVtYmVyOlxuICAgIGNhc2UgUHJvbWlzZTpcbiAgICBjYXNlIFN0cmluZzpcbiAgICBjYXNlIFN5bWJvbDpcbiAgICBjYXNlIFdlYWtNYXA6XG4gICAgY2FzZSBXZWFrU2V0OlxuICAgICAgbiA9b1xuICAgICAgYnJlYWs7XG4gICAgLy8gYXJyYXkgbGlrZS9jb2xsZWN0aW9uIG9iamVjdHNcbiAgICBjYXNlIEFycmF5OlxuICAgICAgbS5zZXQobywgbiA9by5zbGljZSgwKSlcbiAgICAgIC8vIHJlY3Vyc2l2ZSBjb3B5IGZvciBjaGlsZCBvYmplY3RzXG4gICAgICBuLmZvckVhY2goZnVuY3Rpb24odixpKXtcbiAgICAgICAgaWYoJ29iamVjdCcgPT09dHlwZW9mIHYpIG5baV0gPWNsb25lKHYsIG0pXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQXJyYXlCdWZmZXI6XG4gICAgICBtLnNldChvLCBuID1vLnNsaWNlKDApKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBEYXRhVmlldzpcbiAgICAgIG0uc2V0KG8sIG4gPW5ldyAoYykoY2xvbmUoby5idWZmZXIsIG0pLCBvLmJ5dGVPZmZzZXQsIG8uYnl0ZUxlbmd0aCkpXG4gICAgICBicmVhaztcbiAgICBjYXNlIE1hcDpcbiAgICBjYXNlIFNldDpcbiAgICAgIG0uc2V0KG8sIG4gPW5ldyAoYykoY2xvbmUoQXJyYXkuZnJvbShvLmVudHJpZXMoKSksIG0pKSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgSW50OEFycmF5OlxuICAgIGNhc2UgVWludDhBcnJheTpcbiAgICBjYXNlIFVpbnQ4Q2xhbXBlZEFycmF5OlxuICAgIGNhc2UgSW50MTZBcnJheTpcbiAgICBjYXNlIFVpbnQxNkFycmF5OlxuICAgIGNhc2UgSW50MzJBcnJheTpcbiAgICBjYXNlIFVpbnQzMkFycmF5OlxuICAgIGNhc2UgRmxvYXQzMkFycmF5OlxuICAgIGNhc2UgRmxvYXQ2NEFycmF5OlxuICAgICAgbS5zZXQobywgbiA9bmV3IChjKShjbG9uZShvLmJ1ZmZlciwgbSksIG8uYnl0ZU9mZnNldCwgby5sZW5ndGgpKVxuICAgICAgYnJlYWs7XG4gICAgLy8gdXNlIGJ1aWx0IGluIGNvcHkgY29uc3RydWN0b3JcbiAgICBjYXNlIERhdGU6XG4gICAgY2FzZSBSZWdFeHA6XG4gICAgICBtLnNldChvLCBuID1uZXcgKGMpKG8pKVxuICAgICAgYnJlYWs7XG4gICAgLy8gZmFsbGJhY2sgZ2VuZXJpYyBvYmplY3QgY29weVxuICAgIGRlZmF1bHQ6XG4gICAgICBtLnNldChvLCBuID1PYmplY3QuYXNzaWduKG5ldyAoYykoKSwgbykpXG4gICAgICAvLyByZWN1cnNpdmUgY29weSBmb3IgY2hpbGQgb2JqZWN0c1xuICAgICAgZm9yKGMgaW4gbikgaWYoJ29iamVjdCcgPT09dHlwZW9mIG5bY10pIG5bY10gPWNsb25lKG5bY10sIG0pXG4gIH1cbiAgcmV0dXJuIG5cbn1cblxuZnVuY3Rpb24gbWVyZ2UoKSB7XG4gIHZhciBvYmogPSB7fSxcbiAgICAgIGkgPSAwLFxuICAgICAgaWwgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAga2V5O1xuICBmb3IgKDsgaSA8IGlsOyBpKyspIHtcbiAgICAgIGZvciAoa2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNob3VsZE1vdmUsXG4gIGNhY2hlRGltZW4sXG4gIGdldE9TLFxuICBtZXJnZSxcbiAgY2xlYXJWaWV3RXh0ZXJuYWxzLFxuICBjbG9uZSxcbn0iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRwYXJzZVBhcmFtcyA6IHJlcXVpcmUoXCIuL3BhcnNlUGFyYW1zXCIpLFxuXHRtYXBQcmFtcyA6IHJlcXVpcmUoXCIuL21hcFBhcmFtc1wiKSxcblx0Y2FsbGJhY2tNYXBwZXIgOiByZXF1aXJlKFwiLi4vY29tbW9uL2NhbGxiYWNrTWFwcGVyXCIpXG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbnZhciBtYXAgPSB7XG4gIHRleHRGcm9tSHRtbDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0VGV4dCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGJhc2VBbGlnbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiBcInNldEJhc2VsaW5lQWxpZ25lZFwiLFxuICB9LFxuICBzaG93RGl2aWRlcnM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldFNob3dEaXZpZGVycycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiZGl2aWRlckRyYXdhYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldERpdmlkZXJEcmF3YWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHRhYlRleHRDb2xvcnM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9LCB7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogJ3NldFRhYlRleHRDb2xvcnMnLFxuICB9LFxuICBcInNlbGVjdGVkVGFiSW5kaWNhdG9ySGVpZ2h0XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNlbGVjdGVkVGFiSW5kaWNhdG9ySGVpZ2h0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgZm9yZWdyb3VuZDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0Q29sb3InLFxuICAgIGluVm9rZWRJbjogJ0ZPUkVHUk9VTkQnLFxuICB9LFxuICBzZWxlY3RlZFRhYkluZGljYXRvckNvbG9yOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTZWxlY3RlZFRhYkluZGljYXRvckNvbG9yJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgbGF5b3V0VHJhbnNpdGlvbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0TGF5b3V0VHJhbnNpdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnTEFZT1VUX1RSQU5TSVRJT04nLFxuICB9LFxuXG4gIGZvY3VzT3V0OiB7IC8vIGRvZXNudCB3b3JrXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ2NsZWFyRm9jdXMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBmb2N1czoge1xuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdyZXF1ZXN0Rm9jdXMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuXG4gIGZpbGxWaWV3cG9ydDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiBcInNldEZpbGxWaWV3cG9ydFwiLFxuICB9LFxuICBcInByaW1pdGl2ZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFByaW1pdGl2ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSwgXG4gIFwiY3hcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDeCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJjeVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEN5JyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInJhZGl1c1wiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFJhZGl1cycsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJoZXhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDb2xvcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFN0eWxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInN3ZWVwQW5nbGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTd2VlcEFuZ2xlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInN0YXJ0QW5nbGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTdGFydEFuZ2xlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInN0cm9rZVdpZHRoXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U3Ryb2tlV2lkdGgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIHNldERhdGU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnbCcsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldERhdGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBtaW5EYXRlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2wnLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRNaW5EYXRlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgbWF4RGF0ZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdsJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0TWF4RGF0ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGNsaXBDaGlsZHJlbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0Q2xpcENoaWxkcmVuJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYWRqdXN0Vmlld0JvdW5kczoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0QWRqdXN0Vmlld0JvdW5kcycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIG1heExpbmVzOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRNYXhMaW5lcycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHNpbmdsZUxpbmU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldFNpbmdsZUxpbmUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBoYXJkd2FyZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TGF5ZXJUeXBlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgc2VsZWN0ZWQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNlbGVjdGVkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgY3VydmU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgICAnbGluZWFyJzogXCIwXCJcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRJbnRlcnBvbGF0b3InLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBmb250RmFtaWx5OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICdub3JtYWwnOiAwLFxuICAgICAgJ2JvbGQnOiAxLFxuICAgICAgJ2l0YWxpYyc6IDIsXG4gICAgICAnYm9sZF9pdGFsaWMnOiAzXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0Rm9udEZhbWlseScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgeDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRYJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgJ2JyaW5nVG9Gcm9udCc6IHtcbiAgICB2YWx1ZXM6IFtdLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogXCJicmluZ1RvRnJvbnRcIixcbiAgfSxcbiAgJ2Fib3ZlJzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gIFwiY2hlY2tlZFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDaGVja2VkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgeToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRZJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJiYWNrZ3JvdW5kRHJhd2FibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QmFja2dyb3VuZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGJ1dHRvblRpbnQ6IHtcbiAgICB2YWx1ZTogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QnV0dG9uVGludExpc3QnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB2aXNpYmlsaXR5OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgdmlzaWJsZTogMCxcbiAgICAgIGludmlzaWJsZTogNCxcbiAgICAgIGdvbmU6IDhcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRWaXNpYmlsaXR5JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzY2FsZVR5cGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2NhbGVUeXBlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJwcm9ncmVzc0NvbG9yXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEluZGV0ZXJtaW5hdGVUaW50TGlzdCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiYWxwaGFcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QWxwaGEnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImltYWdlVXJsXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEltYWdlRHJhd2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInBsYWNlSG9sZGVyXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEltYWdlRHJhd2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInBhY2thZ2VJY29uXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SW1hZ2VEcmF3YWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJzY3JvbGxUb1wiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc21vb3RoU2Nyb2xsVG8nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiY29ybmVyUmFkaWlcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDb3JuZXJSYWRpaScsXG4gICAgaW5Wb2tlZEluOiAnRFJBV0FCTEUnXG4gIH0sXG4gIFwibGluZVNwYWNpbmdcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TGluZVNwYWNpbmcnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwidXJsXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ2xvYWRVcmwnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInRyYW5zbGF0aW9uWVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUcmFuc2xhdGlvblknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInRyYW5zbGF0aW9uWFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUcmFuc2xhdGlvblgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB0cmFuc2xhdGlvblo6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRyYW5zbGF0aW9uWicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiZGVsYXlcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdsJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U3RhcnREZWxheScsXG4gIH0sXG4gIFwiZHVyYXRpb25cIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdsJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RHVyYXRpb24nLFxuICB9LFxuICBcInBpdm90WFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRQaXZvdFgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInBpdm90WVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRQaXZvdFknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcIm1pbldpZHRoXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldE1pbmltdW1XaWR0aCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwibWluSGVpZ2h0XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldE1pbmltdW1IZWlnaHQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcIm1heFdpZHRoXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldE1heFdpZHRoJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzaGFkb3dUYWdcIjoge1xuICAgICAgdmFsdWVzOiBbe1xuICAgICAgICAgICAgdHlwZTogJ2NzJyxcbiAgICAgICAgICB9XSxcbiAgICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICAgIGZuTmFtZTogJ3NoYWRvd1RhZycsXG4gICAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICB9LFxuICBcImFuZHJvaWRTaGFkb3dcIjoge1xuICAgICAgdmFsdWVzOiBbe1xuICAgICAgICAgICAgdHlwZTogJ2NzJyxcbiAgICAgICAgICB9XSxcbiAgICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICAgIGZuTmFtZTogJ2FuZHJvaWRTaGFkb3cnLFxuICAgICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgfSxcbiAgXCJncmFkaWVudFwiOiB7XG4gICAgICB2YWx1ZXM6IFt7XG4gICAgICAgIHR5cGU6ICdjcydcbiAgICAgIH1dLFxuICAgICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgICAgZm5OYW1lOiAnc2V0Q29sb3JzJyxcbiAgICAgIGluVm9rZWRJbjogJ0RSQVdBQkxFJ1xuICB9LFxuICBcImdyYWRpZW50QW5nbGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRPcmllbnRhdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnRFJBV0FCTEUnXG59LFxuICBcImxpbmVIZWlnaHRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TGluZUhlaWdodCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJsZXR0ZXJTcGFjaW5nXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldExldHRlclNwYWNpbmcnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImhpbnRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdjcycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEhpbnQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImlucHV0VHlwZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgcGFzc3dvcmQ6ICcxMjknLFxuICAgICAgbnVtZXJpYzogJzInLFxuICAgICAgbnVtZXJpY1Bhc3N3b3JkOiAnMTgnLFxuICAgICAgbnVtZXJpY1dpdGhvdXRTdWdnZXN0aW9uOiAnNTI0MjkxJyxcbiAgICAgIGRpc2FibGVkOiAnMCcsXG4gICAgICB0ZXh0OiAnMScsXG4gICAgICBtdWx0aVRleHQ6ICczJ1xuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldElucHV0VHlwZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaW5wdXRUeXBlSVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldElucHV0VHlwZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwidGV4dFNpemVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VGV4dFNpemUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImZvbnRTaXplXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUZXh0U2l6ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwidGV4dElzU2VsZWN0YWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUZXh0SXNTZWxlY3RhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJmb250U3R5bGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0VHlwZWZhY2UnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInRleHRBbGxDYXBzXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEFsbENhcHMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImV4cGFuZFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEV4cGFuZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJmb2N1c2FibGVJblRvdWNoTW9kZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEZvY3VzYWJsZUluVG91Y2hNb2RlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImRlc2NlbmRhbnRGb2N1c2FiaWxpdHlcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXREZXNjZW5kYW50Rm9jdXNhYmlsaXR5JyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImV4cGFuZER1cmF0aW9uXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RXhwYW5kRHVyYXRpb24nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZXhwYW5kU2Nyb2xsUGFyZW50XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2Nyb2xsUGFyZW50JyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImV4cGFuZEFscGhhXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RXhwYW5kQWxwaGEnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZGVmYXVsdEV4cGFuZFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldERlZmF1bHRFeHBhbmQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwic3d5cGVFbmFibGVkXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U3d5cGVFbmFibGVkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICB0b2FzdDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdjcycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3Nob3dUb2FzdCcsXG4gICAgaW5Wb2tlZEluOiAnQ09OVEVYVCcsXG4gIH0sXG4gIHNjYWxlWDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2NhbGVYJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgc2NhbGVZOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTY2FsZVknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBpZDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBncmF2aXR5OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgY2VudGVyX2hvcml6b250YWw6IDEsXG4gICAgICBjZW50ZXJfdmVydGljYWw6IDE2LFxuICAgICAgYm90dG9tIDogODAsXG4gICAgICBsZWZ0OiA4Mzg4NjExLFxuICAgICAgcmlnaHQ6IDgzODg2MTMsXG4gICAgICBjZW50ZXI6IDE3LFxuICAgICAgYm90dG9tOiA4MCxcbiAgICAgIHRvcF92ZXJ0aWNhbDogNDgsXG4gICAgICBzdGFydDogODM4ODYxMSxcbiAgICAgIGVuZDogODM4ODYxMyxcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRHcmF2aXR5JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgb3JpZW50YXRpb246IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBob3Jpem9udGFsOiAwLFxuICAgICAgdmVydGljYWw6IDEsXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0T3JpZW50YXRpb24nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2NzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VGV4dCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHdpZHRoOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgbWF0Y2hfcGFyZW50OiAtMSxcbiAgICAgIHdyYXBfY29udGVudDogLTIsXG4gICAgfV0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBjdHI6IHRydWUsXG4gICAgdmFyTmFtZTogJ3Zhcl93aWR0aCdcbiAgfSxcbiAgd2VpZ2h0OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgICAgbWF0Y2hfcGFyZW50OiAtMSxcbiAgICAgIHdyYXBfY29udGVudDogLTIsXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIHZhck5hbWU6ICd2YXJfd2VpZ2h0J1xuICB9LFxuICBoZWlnaHQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBtYXRjaF9wYXJlbnQ6IC0xLFxuICAgICAgd3JhcF9jb250ZW50OiAtMixcbiAgICB9XSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGN0cjogdHJ1ZSxcbiAgICB2YXJOYW1lOiAndmFyX2hlaWdodCdcbiAgfSxcbiAgbGF5b3V0X2dyYXZpdHk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBib3R0b21fcmlnaHQ6IDIxLFxuICAgICAgdG9wOiAzMCxcbiAgICAgIGJvdHRvbTogNTAsXG4gICAgICBsZWZ0OiAzLFxuICAgICAgcmlnaHQ6IDUsXG4gICAgICBjZW50ZXI6IDE3LFxuICAgICAgYm90dG9tOiA4MCxcbiAgICAgIGNlbnRlcl9ob3Jpem9udGFsOiAxLFxuICAgICAgY2VudGVyX3ZlcnRpY2FsOiAxNixcbiAgICAgIHN0YXJ0OiA4Mzg4NjExLFxuICAgICAgZW5kOiA4Mzg4NjEzLFxuICAgIH1dLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgdmFyTmFtZTogXCJ2YXJfZ3Jhdml0eVwiLFxuICB9LFxuICBtYXJnaW46IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJzZXRNYXJnaW5zXCIsXG4gIH0sXG4gIG1hcmdpblN0YXJ0OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwic2V0TWFyZ2luU3RhcnRcIixcbiAgfSxcbiAgbWFyZ2luRW5kOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwic2V0TWFyZ2luRW5kXCIsXG4gIH0sXG4gIHBhZGRpbmc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6IFwic2V0UGFkZGluZ1JlbGF0aXZlXCIsXG4gIH0sXG4gICdjZW50ZXJJblBhcmVudCc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDEzLFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gICdjZW50ZXJIb3Jpem9udGFsJzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMTQsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgJ2NlbnRlclZlcnRpY2FsJzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMTUsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgXCJjaGVja2VkXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldENoZWNrZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICAnYWxpZ25QYXJlbnRCb3R0b20nOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAxMixcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICAnYWxpZ25QYXJlbnRUb3AnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAxMCxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICAnYWxpZ25QYXJlbnRSaWdodCc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDExLFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gICdhbGlnblBhcmVudExlZnQnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiA5LFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gICdsZWZ0T2YnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAwLFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gIGNvcm5lclJhZGl1czoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcGYnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdEUkFXQUJMRScsXG4gICAgZm5OYW1lOiBcInNldENvcm5lclJhZGl1c1wiLFxuICB9LFxuICBzdHJva2U6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdEUkFXQUJMRScsXG4gICAgZm5OYW1lOiBcInNldFN0cm9rZVwiLFxuICB9LFxuICBcInR5cGVmYWNlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAnbm9ybWFsJzogMCxcbiAgICAgICdib2xkJzogMSxcbiAgICAgICdpdGFsaWMnOiAyLFxuICAgICAgJ2JvbGRfaXRhbGljJzogM1xuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldFR5cGVmYWNlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYmFja2dyb3VuZDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnRFJBV0FCTEUnLFxuICAgIGZuTmFtZTogXCJzZXRDb2xvclwiLFxuICB9LFxuICBiYWNrZ3JvdW5kRHJhd2FibGU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJhY2tncm91bmREcmF3YWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGJhY2tncm91bmRDb2xvcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiBcInNldEJhY2tncm91bmRDb2xvclwiLFxuICB9LFxuICBjb2xvcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VGV4dENvbG9yJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgaGludENvbG9yOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRIaW50VGV4dENvbG9yJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYnRuQmFja2dyb3VuZDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnTVVUQVRFQkcnLFxuICAgIGZuTmFtZTogXCJzZXRDb2xvckZpbHRlclwiLFxuICB9LFxuICBjb2xvckZpbHRlcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiBcInNldENvbG9yRmlsdGVyXCIsXG4gIH0sXG4gIGJ0bkNvbG9yOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUZXh0Q29sb3InLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBzaGFkb3dMYXllcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2hhZG93TGF5ZXInLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBlbGV2YXRpb246IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEVsZXZhdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHJvdGF0aW9uWDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Um90YXRpb25YJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgcm90YXRpb25ZOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRSb3RhdGlvblknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICByb3RhdGlvbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Um90YXRpb24nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBiYWNrZ3JvdW5kVGludDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QmFja2dyb3VuZFRpbnRMaXN0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzY3JvbGxCYXJYXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEhvcml6b250YWxTY3JvbGxCYXJFbmFibGVkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzY3JvbGxCYXJZXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFZlcnRpY2FsU2Nyb2xsQmFyRW5hYmxlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiY2xpY2thYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldENsaWNrYWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiY3Vyc29yXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q3Vyc29yVmlzaWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJsb25nQ2xpY2thYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TG9uZ0NsaWNrYWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJmb2N1c2FibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Rm9jdXNhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzZWxlY3RhYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJhY2tncm91bmRSZXNvdXJjZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2VsZWN0YWJsZUl0ZW1cIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QmFja2dyb3VuZFJlc291cmNlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgdmFsdWVzOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRBZGFwdGVyJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBtYXhTZWVrOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0TWF4JyxcbiAgICBpblZva2VkSW46IFwiVklFV1wiLFxuICAgIGRvbnRNYXA6IHRydWVcbiAgfSxcbiAgYWNjZXNzaWJpbGl0eUhpbnQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldENvbnRlbnREZXNjcmlwdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGltZU9wdGlvbnM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldEltZU9wdGlvbnMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImhvcml6b250YWxGYWRlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEhvcml6b250YWxGYWRpbmdFZGdlRW5hYmxlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiZmFkaW5nRWRnZUxlbmd0aFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEZhZGluZ0VkZ2VMZW5ndGgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNoaW1tZXJcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCYWNrZ3JvdW5kJyxcbiAgICBhbHRlcm5hdGVGbk5hbWU6ICdzZXRTaGltbWVyJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzaGltbWVyQWN0aXZlXCI6IHtcbiAgICB2YWx1ZXMgOiBbXSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc3RhcnRTaGltbWVyJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzaGltbWVySW5hY3RpdmVcIjoge1xuICAgIHZhbHVlcyA6IFtdLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzdG9wU2hpbW1lcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwicGVha0hlaWdodFwiOiB7XG4gICAgdmFsdWVzIDogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0UGVha0hlaWdodCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2hlZXRTdGF0ZVwiOiB7XG4gICAgdmFsdWVzIDogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGV4cGFuZGVkIDogMyxcbiAgICAgIGNvbGxhcHNlZCA6IDQsXG4gICAgICBoaWRkZW4gOiA1LFxuICAgICAgaGFsZkV4cGFuZGVkIDogNlxuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldFN0YXRlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJoYWxmRXhwYW5kZWRSYXRpb1wiOiB7XG4gICAgdmFsdWVzIDogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRIYWxmRXhwYW5kZWRSYXRpbycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaGlkZWFibGVcIjoge1xuICAgIHZhbHVlcyA6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SGlkZWFibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwO1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5cbnZhciAgbWFwID0ge1xuICAnUEFSQU1TJzoge1xuICAgICdyZXF1aXJlZCc6ICd3aWR0aCwgaGVpZ2h0JyxcbiAgICAndmlld01ldGhvZCc6ICdzZXRMYXlvdXRQYXJhbXMsZ2V0TGF5b3V0UGFyYW1zJ1xuICB9LFxuICAnRFJBV0FCTEUnOiB7XG4gICAgJ2N0cic6ICdhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUtPm5ldycsXG4gICAgJ3JlcXVpcmVkJzogJycsXG4gICAgJ3ZpZXdNZXRob2QnOiAnc2V0QmFja2dyb3VuZCxnZXRCYWNrZ3JvdW5kJ1xuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBtYXA7XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbnZhciBtYXBQYXJhbXMgPSByZXF1aXJlKCcuL21hcFBhcmFtcycpO1xudmFyIG9iak1hcCA9IHJlcXVpcmUoJy4vb2JqTWFwJyk7XG52YXIgY2FsbGJhY2tNYXBwZXIgID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jYWxsYmFja01hcHBlclwiKVxuXG52YXIgZ2xvYmFsT2JqTWFwID0ge307XG52YXIgY29tbWFuZCA9IFwiXCI7XG52YXIgZWxlbWVudFR5cGU7XG52YXIgZ2V0U2V0VHlwZTtcblxuZnVuY3Rpb24gaXNVUkwoc3RyKSB7XG4gIHRyeSB7XG4gICAgdmFyIHVybCA9IG5ldyBVUkwoc3RyKTtcbiAgICByZXR1cm4gKHN0ci5pbmRleE9mKFwiLlwiKSAhPSAtMSk7XG4gIH0gY2F0Y2goZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGF0dGFjaEZlZWRiYWNrKGNvbmZpZywga2V5cywgaSkge1xuICB2YXIgZmVlZGJhY2tGbiA9IGZ1bmN0aW9uKCkge307XG5cbiAgaWYgKHR5cGVvZiBjb25maWcuZmVlZGJhY2sgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpZiAoY29uZmlnLmZlZWRiYWNrID09IFwidHJ1ZVwiKSB7XG4gICAgICBjb25maWcuZmVlZGJhY2sgPSBjYWxsYmFja01hcHBlci5tYXAoZmVlZGJhY2tGbik7XG4gICAgICB3aW5kb3cuX19BTExfT05DTElDS1MucHVzaChjb25maWcuZmVlZGJhY2spO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjb25maWcub25DbGljaykge1xuICAgIGNvbmZpZy5mZWVkYmFjayA9IGNhbGxiYWNrTWFwcGVyLm1hcChmZWVkYmFja0ZuKTtcbiAgICB3aW5kb3cuX19BTExfT05DTElDS1MucHVzaChjb25maWcuZmVlZGJhY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbmZpZ0dyb3Vwcyhjb25maWcpIHtcbiAgdmFyIGdyb3VwcyA9IHt9O1xuICB2YXIgb2JqVHlwZTtcbiAgdmFyIGlzQW5pbWF0aW9uO1xuICB2YXIgd2lkdGhGb3VuZCA9IDA7XG4gIHZhciBoZWlnaHRGb3VuZCA9IDA7XG4gIGxldCBwYWRkaW5nVmFsID0gY29uZmlnW1wicGFkZGluZ1wiXTtcbiAgaWYgKGNvbmZpZy5zdHJva2UpXG4gICAgZGVsZXRlIGNvbmZpZy5wYWRkaW5nO1xuICBpZiAoY29uZmlnLm1hcmdpbikge1xuICAgIGxldCBtYXJnaW4gPSBjb25maWcubWFyZ2luLnNwbGl0KCcsJykubWFwKGEgPT4gYSoxKTtcbiAgICBjb25maWcubWFyZ2luU3RhcnQgPSBtYXJnaW5bMF0gKyAnJztcbiAgICBjb25maWcubWFyZ2luRW5kID0gbWFyZ2luWzJdICsgJyc7XG4gIH1cbiAgdmFyIGtleXMgPSAgT2JqZWN0LmtleXMoY29uZmlnKTtcbiAgdmFyIHByb3h5Rm5OYW1lO1xuICAgZm9yICh2YXIgaSA9IDA7IGk8a2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGF0dGFjaEZlZWRiYWNrKGNvbmZpZywga2V5cywgaSk7XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZ1trZXlzW2ldXSA9PSBcInVuZGVmaW5lZFwiIHx8IGNvbmZpZ1trZXlzW2ldXSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgY29uZmlnW2tleXNbaV1dO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZ1trZXlzW2ldXSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGlmIChrZXlzW2ldID09IFwiYWZ0ZXJSZW5kZXJcIiAmJiB0eXBlb2Ygd2luZG93LnJlbW92ZUFmdGVyUmVuZGVyUHJvcCA9PSBcImZ1bmN0aW9uXCIpe1xuICAgICAgICAvKipcbiAgICAgICAgICogaWYgdGhlIGZ1bmN0aW9uIGlzIHByZXNlbnQgdGhlbiB3ZSBhcmUgaGFuZGxpbmcgYWZ0ZXJSZW5kZXJcbiAgICAgICAgICogcHJvcCBpbiBKUyBpdHNlbGZcbiAgICAgICAgICovXG4gICAgICAgIHdpbmRvdy5yZW1vdmVBZnRlclJlbmRlclByb3AoY29uZmlnW1wiaWRcIl0sIGNvbmZpZ1tcImFmdGVyUmVuZGVyXCJdKTtcbiAgICAgICAgZGVsZXRlIGNvbmZpZ1tcImFmdGVyUmVuZGVyXCJdO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGNvbmZpZ1trZXlzW2ldXSA9IGNhbGxiYWNrTWFwcGVyLm1hcChjb25maWdba2V5c1tpXV0pO1xuXG4gICAgICAgIGlmIChrZXlzW2ldID09IFwib25DbGlja1wiKXtcbiAgICAgICAgICB3aW5kb3cuX19GTl9NQVBbY29uZmlnW2tleXNbaV1dXSA9IGNvbmZpZy50ZXh0IHx8IGNvbmZpZy5pZCB8fCBcIlwiO1xuXG4gICAgICAgICAgaWYoIWNvbmZpZy5hbGxvd011bHRpcGxlQ2xpY2tzIHx8IGNvbmZpZy5hbGxvd011bHRpcGxlQ2xpY2s9PVwiZmFsc2VcIil7XG4gICAgICAgICAgICB3aW5kb3cuX19USFJPVFRFTEVEX0FDVElPTlMucHVzaChjb25maWdba2V5c1tpXV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGtleXNbaV0uaW5kZXhPZignXycpICYmIGtleXNbaV0uc3BsaXQoJ18nKVswXSA9PSAnYScpIHtcbiAgICAgICAgb2JqVHlwZSA9IG1hcFBhcmFtc1trZXlzW2ldLnNwbGl0KCdfJylbMV1dO1xuICAgICAgICBpc0FuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpUeXBlID0gbWFwUGFyYW1zW2tleXNbaV1dO1xuICAgICAgICBpc0FuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5c1tpXSA9PSBcInN0cm9rZVwiKSB7XG4gICAgICAgIGxldCBwYWRkaW5nID0gWzAsMCwwLDBdO1xuXG4gICAgICAgIGlmIChwYWRkaW5nVmFsKVxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nVmFsLnNwbGl0KCcsJykubWFwKGEgPT4gYSoxKTtcblxuICAgICAgICBsZXQgc3Ryb2tlVmFsdWUgPSBjb25maWdbXCJzdHJva2VcIl0uc3BsaXQoJywnKVswXSAqIDE7XG4gICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nLm1hcChkaW0gPT4gZGltICsgc3Ryb2tlVmFsdWUpO1xuICAgICAgICBjb25maWdbXCJwYWRkaW5nXCJdID0gcGFkZGluZy5qb2luKCcsJyk7XG4gICAgICAgIGtleXMucHVzaChcInBhZGRpbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvYmpUeXBlKSB7XG4gICAgICAgIGlmIChpc0FuaW1hdGlvbil7XG4gICAgICAgICAgaWYgKCFncm91cHNbJ0FOSU1BVElPTiddKVxuICAgICAgICAgIGdyb3Vwc1snQU5JTUFUSU9OJ10gPSBbXTtcblxuXG4gICAgICAgICAgZ3JvdXBzWydBTklNQVRJT04nXS5wdXNoKHtrZXk6IGtleXNbaV0uc3BsaXQoJ18nKVsxXSwgdmFsdWU6IGNvbmZpZ1trZXlzW2ldXX0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFncm91cHNbb2JqVHlwZS5pblZva2VkSW5dKVxuICAgICAgICAgIGdyb3Vwc1tvYmpUeXBlLmluVm9rZWRJbl0gPSBbXTtcblxuICAgICAgICAgIGlmIChrZXlzW2ldID09IFwid2lkdGhcIilcbiAgICAgICAgICB3aWR0aEZvdW5kICsrO1xuICAgICAgICAgIGlmIChrZXlzW2ldID09IFwiaGVpZ2h0XCIpXG4gICAgICAgICAgaGVpZ2h0Rm91bmQgKys7XG5cbiAgICAgICAgICBncm91cHNbb2JqVHlwZS5pblZva2VkSW5dLnB1c2goe2tleToga2V5c1tpXSwgdmFsdWU6IGNvbmZpZ1trZXlzW2ldXX0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5c1tpXSE9PVwicGF0dGVyblwiICYmIGtleXNbaV0gIT09IFwicm9vdFwiICYmIGtleXNbaV0gIT09IFwiaWRcIiAmJiBrZXlzW2ldIT09IFwiX19maWxlbmFtZVwiKSB7XG4gICAgICAgICAgZGVsZXRlIGNvbmZpZ1trZXlzW2ldXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChnZXRTZXRUeXBlID09IFwic2V0XCIpIHtcbiAgICBpZiAoIWdyb3Vwcy5QQVJBTVMpXG4gICAgZ3JvdXBzLlBBUkFNUyA9IFtdO1xuXG4gICAgaWYgKCF3aWR0aEZvdW5kKVxuICAgIGdyb3Vwcy5QQVJBTVMucHVzaCh7a2V5OiBcIndpZHRoXCIsIHZhbHVlOiAnd3JhcF9jb250ZW50J30pO1xuICAgIGlmICghaGVpZ2h0Rm91bmQpXG4gICAgZ3JvdXBzLlBBUkFNUy5wdXNoKHtrZXk6IFwiaGVpZ2h0XCIsIHZhbHVlOiAnd3JhcF9jb250ZW50J30pO1xuICB9XG5cbiAgcmV0dXJuIGdyb3Vwcztcbn1cblxuZnVuY3Rpb24gZ2V0Q3RyKHZpZXdHcm91cCkge1xuICB2YXIgdmlld0dyb3VwTWFwID0gIHtcbiAgICAnbGluZWFyTGF5b3V0JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2Nvb3JkaW5hdG9yTGF5b3V0JzogJ2FuZHJvaWR4LmNvb3JkaW5hdG9ybGF5b3V0LndpZGdldC5Db29yZGluYXRvckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3Njcm9sbFZpZXcnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnaG9yaXpvbnRhbFNjcm9sbFZpZXcnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAncmVsYXRpdmVMYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuUmVsYXRpdmVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdmcmFtZUxheW91dCc6ICdhbmRyb2lkLndpZGdldC5GcmFtZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3Rvb2xiYXInOiAnYW5kcm9pZC5zdXBwb3J0LnY3LndpZGdldC5Ub29sYmFyJExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnY29sbGFwc2luZ1Rvb2xiYXJMYXlvdXQnOiAnYW5kcm9pZHguY29vcmRpbmF0b3JsYXlvdXQud2lkZ2V0LkNvb3JkaW5hdG9yTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnYXBwQmFyTGF5b3V0JzogJ2FuZHJvaWQuc3VwcG9ydC5kZXNpZ24ud2lkZ2V0LkFwcEJhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3ZpZXcnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAndGFiTGF5b3V0JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3ZpZXdQYWdlcic6ICdhbmRyb2lkLnN1cHBvcnQudjQudmlldy5WaWV3UGFnZXIkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdsaXN0Vmlldyc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdleHBhbmRhYmxlTGlzdFZpZXcnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAncmVjeWNsZXJWaWV3JzogJ2FuZHJvaWQuc3VwcG9ydC52Ny53aWRnZXQuUmVjeWNsZXJWaWV3JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAncmF0aW5nQmFyJzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2FjY29yZGlvbkxheW91dCc6ICdhbmRyb2lkLndpZGdldC5GcmFtZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3N3eXBlTGF5b3V0JzogJ2FuZHJvaWQud2lkZ2V0LkZyYW1lTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnc3d5cGVTY3JvbGwnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICBcInNoaW1tZXJGcmFtZUxheW91dFwiOiBcImFuZHJvaWQud2lkZ2V0LkZyYW1lTGF5b3V0JExheW91dFBhcmFtcy0+bmV3XCIsXG4gICAgXCJib3R0b21TaGVldExheW91dFwiOiAnYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnXG4gIH07XG5cbiAgaWYoIXZpZXdHcm91cE1hcFt2aWV3R3JvdXBdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCB2aWV3IGdyb3VwIGZvdW5kIDogXCIgKyB2aWV3R3JvdXApO1xuICB9XG5cbiAgcmV0dXJuICB2aWV3R3JvdXBNYXBbdmlld0dyb3VwXTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3BlY2lhbENoYXJzKHZhbHVlKSB7XG4gIHZhbHVlID0gIHZhbHVlLmluZGV4T2YoJywnKT4tMT92YWx1ZS5yZXBsYWNlKC9cXCwvZywgJ1xcXFxcXFxcLCcpOnZhbHVlO1xuICB2YWx1ZSA9ICB2YWx1ZS5pbmRleE9mKCc6Jyk+LTE/dmFsdWUucmVwbGFjZSgvXFw6L2csICdcXFxcXFxcXDonKTp2YWx1ZTtcbiAgdmFsdWUgPSAgdmFsdWUuaW5kZXhPZignOicpPi0xP3ZhbHVlLnJlcGxhY2UoL1xcPS9nLCAnXFxcXFxcXFw9Jyk6dmFsdWU7XG4gIHZhbHVlID0gIHZhbHVlLmluZGV4T2YoJzsnKT4tMT92YWx1ZS5yZXBsYWNlKC9cXDsvZywgJ1xcXFxcXFxcOycpOnZhbHVlO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQXJncyhhdHRycywgb2JqKSB7XG4gIGlmICghb2JqLnZhbHVlcylcbiAgcmV0dXJuIFwiXCI7XG5cbiAgdmFyIGFyZ3MgPSBcIlwiO1xuICB2YXIgdmFsdWUgPSAoYXR0cnMua2V5ID09IFwidGV4dFwiIHx8IGF0dHJzLmtleSA9PSBcImhpbnRcIilcbiAgICA/YXR0cnMudmFsdWU6YXR0cnMudmFsdWUucmVwbGFjZSgvIC9nLCcnKTtcblxuICB2YXIgaW5jb21pbmdBcmdzO1xuICBpZiAoYXR0cnMua2V5ID09IFwidGV4dFwiIHx8IGF0dHJzLmtleSA9PSBcImhpbnRcIikge1xuICAgIGluY29taW5nQXJncyA9IFtdO1xuICAgIGluY29taW5nQXJncy5wdXNoKGhhbmRsZVNwZWNpYWxDaGFycyh2YWx1ZSkpO1xuXG4gIH0gZWxzZSB7XG4gICAgaW5jb21pbmdBcmdzID0gdmFsdWUuc3BsaXQoJywnKTtcbiAgfVxuXG4gIGZvciAgKHZhciBpID0wIDtpPG9iai52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBhcmdzICs9ICBvYmoudmFsdWVzW2ldLnR5cGUgKyAnXyc7XG5cbiAgICBpZiAob2JqLmRvbnRNYXApXG4gICAgYXJncyArPSBpbmNvbWluZ0FyZ3NbaV0gKyAnLCc7XG4gICAgZWxzZSAge1xuICAgICAgaWYgKG9iai52YWx1ZXNbaV0uZG9udE1hcCkge1xuICAgICAgICBhcmdzICs9IGluY29taW5nQXJnc1tpXSArICcsJztcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnMua2V5ID09IFwid2lkdGhcIiB8fCBhdHRycy5rZXkgPT0gXCJoZWlnaHRcIikge1xuICAgICAgICBpZiAoIWlzTmFOKGluY29taW5nQXJnc1tpXSoxKSlcbiAgICAgICAgYXJncyA9ICdkcF8nICsgaW5jb21pbmdBcmdzW2ldICsgJywnO1xuICAgICAgICBlbHNlXG4gICAgICAgIGFyZ3MgKz0gb2JqLnZhbHVlc1tpXVtpbmNvbWluZ0FyZ3NbaV1dICsgJywnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJncyArPSBvYmoudmFsdWVzW2ldW2luY29taW5nQXJnc1tpXV0gKyAnLCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyZ3Muc3Vic3RyaW5nKDAsIGFyZ3MubGVuZ3RoLTEpO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlQ3RyKGF0dHJzLCBiZWxvbmdzVG8pIHtcbiAgdmFyIG9iaiA9IG9iak1hcFtiZWxvbmdzVG9dO1xuICB2YXIgY3RyID0gZ2xvYmFsT2JqTWFwW2JlbG9uZ3NUb10uY3RyO1xuICB2YXIgcmVxQXR0cnM7XG5cbiAgaWYgKGdldFNldFR5cGUgPT0gXCJnZXRcIiAmJiAoYmVsb25nc1RvID09IFwiQU5JTUFUSU9OXCIgfHwgYmVsb25nc1RvID09IFwiRFJBV0FCTEVcIiB8fCBiZWxvbmdzVG8gPT0gXCJQQVJBTVNcIikpIHtcbiAgICByZXR1cm4gY3RyO1xuICB9XG5cbiAgaWYgKCFvYmogfHwgIW9iai5yZXF1aXJlZClcbiAgcmV0dXJuIGN0clxuXG4gIHJlcUF0dHJzID0gb2JqLnJlcXVpcmVkLnNwbGl0KCcsJyk7XG5cbiAgY3RyICs9ICc6JztcblxuICBmb3IgKHZhciBpID0wOyBpPHJlcUF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaj0wOyBqPGF0dHJzLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAocmVxQXR0cnNbaV0udHJpbSgpID09IGF0dHJzW2pdLmtleSkgIHtcbiAgICAgICAgY3RyICs9IGFwcGVuZEFyZ3MoYXR0cnNbal0sIG1hcFBhcmFtc1tyZXFBdHRyc1tpXS50cmltKCldKSArICcsJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3RyLnN1YnN0cmluZygwLCBjdHIubGVuZ3RoIC0gMSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbCh0ZXh0KSB7XG4gIHJldHVybiAnc2V0X2h0bWw9YW5kcm9pZC50ZXh0Lkh0bWwtPmZyb21IdG1sOnNfJyArIHRleHQgKyAnOyc7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQ29sb3IoY29sb3IsIHNldHRlck5hbWUpIHtcbiAgaWYgKCFzZXR0ZXJOYW1lKVxuICBzZXR0ZXJOYW1lID0gJ3NldF9jb2xvckludCc7XG4gIHJldHVybiBzZXR0ZXJOYW1lICsgJz1hbmRyb2lkLmdyYXBoaWNzLkNvbG9yLT5wYXJzZUNvbG9yOnNfJyArIGNvbG9yICsgJzsnO1xufVxuXG5mdW5jdGlvbiBtYXNoVGhpcyhhdHRycywgb2JqLCBiZWxvbmdzVG8sIHRyYW5zZm9ybUZuLCBhbGxQcm9wcywgdHlwZSkge1xuICBpZiAoZ2V0U2V0VHlwZSA9PSBcImdldFwiICYmIChhdHRycy5rZXkgPT0gXCJ3aWR0aFwiIHx8IGF0dHJzLmtleSA9PSBcImhlaWdodFwiKSkge1xuICAgIC8vIGdldCBjYXNlIGkuZSBkdXJpbmcgcGF0Y2hcbiAgICBpZighaXNOYU4oYXR0cnMudmFsdWUgKiAxKSkge1xuICAgICAgcmV0dXJuICdnZXRfUEFSQU1TLT4nICsgb2JqLnZhck5hbWUgKyAnOmRwXycgKyBhdHRycy52YWx1ZSArICc7Z2V0X3ZpZXctPnNldExheW91dFBhcmFtczpnZXRfUEFSQU1TICc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnZ2V0X1BBUkFNUy0+JyArIG9iai52YXJOYW1lICsgJzppXycgKyBtYXBQYXJhbXNbYXR0cnMua2V5XS52YWx1ZXNbMF1bYXR0cnMudmFsdWVdICsgJztnZXRfdmlldy0+c2V0TGF5b3V0UGFyYW1zOmdldF9QQVJBTVMgJztcbiAgICB9XG4gIH0gZWxzZSBpZihhdHRycy5rZXkgPT0gXCJ3aWR0aFwiIHx8IGF0dHJzLmtleSA9PSBcImhlaWdodFwiKSB7XG4gICAgLy8gc2V0IGNhc2UgaS5lIGZpcnN0IHJlbmRlclxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHZhciBiZWZvcmVDbWQgPSBcIlwiO1xuICB2YXIgYWZ0ZXJDbWQgPSBcIlwiO1xuICB2YXIgcHJlUGVuZCA9ICcnO1xuICB2YXIgY3VyclRyYW5zVmFsO1xuICB2YXIgY29sb3I7XG4gIHZhciBhcnIgPSBbXTtcbiAgdmFyIHJlcztcbiAgdmFyIHZhbHVlcztcblxuICB2YXIga2V5V29yZDtcbiAgdmFyIF9jbWQ7XG4gIHZhciBmaW5hbENtZDtcbiAgdmFyIGNvbG9yMTtcbiAgYXR0cnMudmFsdWUgKz0gJyc7XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInRleHRTaXplXCIpIHtcbiAgICBhdHRycy52YWx1ZSA9IFwiMSxcIiArIChhdHRycy52YWx1ZSAtIDEpO1xuICB9XG5cbi8vdG9kbzp0YWJUZXh0Q29sb3JzXG4gIGlmIChhdHRycy5rZXkgPT0gXCJmb3JlZ3JvdW5kXCIgfHxcbiAgICBhdHRycy5rZXkgPT0gXCJ0YWJUZXh0Q29sb3JzXCIgfHxcbiAgICBhdHRycy5rZXkgPT0gXCJzZWxlY3RlZFRhYkluZGljYXRvckNvbG9yXCIgIHx8XG4gICAgYXR0cnMua2V5ID09IFwiY29sb3JcIiB8fFxuICAgIGF0dHJzLmtleSA9PSBcImJhY2tncm91bmRcIiB8fFxuICAgIGF0dHJzLmtleSA9PSBcInN0cm9rZVwiIHx8XG4gICAgYXR0cnMua2V5ID09IFwiYnRuQ29sb3JcIikge1xuXG4gICAgaWYgKGF0dHJzLmtleSA9PSBcInN0cm9rZVwiKSB7XG4gICAgICBjb2xvciA9IGF0dHJzLnZhbHVlLnNwbGl0KCcsJylbMV07XG4gICAgICBjdXJyVHJhbnNWYWwgPSBhcHBlbmRBcmdzKGF0dHJzLG9iaikuc3BsaXQoJywnKVswXSArICcsZ2V0X2NvbG9ySW50JztcbiAgICB9IGVsc2UgaWYoYXR0cnMua2V5ID09IFwidGFiVGV4dENvbG9yc1wiKXtcbiAgICAgIGNvbG9yID0gYXR0cnMudmFsdWUuc3BsaXQoJywnKVswXTtcbiAgICAgIGNvbG9yMSA9IGF0dHJzLnZhbHVlLnNwbGl0KCcsJylbMV07XG4gICAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2NvbG9ySW50MScgKyAnLGdldF9jb2xvckludCc7XG4gICAgfWVsc2Uge1xuICAgICAgY29sb3IgPSBhdHRycy52YWx1ZTtcbiAgICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfY29sb3JJbnQnO1xuICAgIH1cblxuICAgIGlmKGF0dHJzLmtleSA9PSBcInRhYlRleHRDb2xvcnNcIil7XG4gICAgICBwcmVQZW5kID0gcGFyc2VDb2xvcihjb2xvcixcInNldF9jb2xvckludDFcIikrJywnK3BhcnNlQ29sb3IoY29sb3IxKTtcbiAgICB9ZWxzZXtcbiAgICAgIHByZVBlbmQgPSBwYXJzZUNvbG9yKGNvbG9yKTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZm9udFN0eWxlXCIpIHtcbiAgICBpZihpc1VSTChhdHRycy52YWx1ZSkpIHtcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cuX19QUk9YWV9GTiA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOID0ge307XG4gICAgICB9XG4gICAgICB2YXIgZm9udCA9IGF0dHJzLnZhbHVlLnN1YnN0cihhdHRycy52YWx1ZS5sYXN0SW5kZXhPZignLycpICsgMSlcblxuICAgICAgdmFyIGZpbGVQcmVzZW50ID0gKHR5cGVvZiBKQnJpZGdlLmlzRmlsZVByZXNlbnQgPT0gXCJmdW5jdGlvblwiKSAmJiBKQnJpZGdlLmlzRmlsZVByZXNlbnQoZm9udCk7XG4gICAgICBpZiAoIWZpbGVQcmVzZW50KSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrTWFwcGVyLm1hcChmdW5jdGlvbiAoaXNOZXcsIHVybCwgZmlsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGFsbFByb3BzLmZpbmQoYSA9PiBhLmtleSA9PT0gXCJpZFwiKTtcbiAgICAgICAgICBpZiAoIWlkKSByZXR1cm47XG4gICAgICAgICAgdmFyIHVybFNldENvbW1hbmRzID0gXCJzZXRfZGlyZWN0b3J5PWN0eC0+Z2V0RGlyOnNfanVzcGF5LGlfMDtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkRmlsZT1qYXZhLmlvLkZpbGUtPm5ldzpnZXRfZGlyZWN0b3J5LHNfXCIgKyBmaWxlTmFtZSArIFwiO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRQYXRoPWdldF9yZXNvbHZlZEZpbGUtPnRvU3RyaW5nO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfZGZvbnQ9YW5kcm9pZC5ncmFwaGljcy5UeXBlZmFjZS0+Y3JlYXRlRnJvbUZpbGU6Z2V0X3Jlc29sdmVkUGF0aDtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X3RleHRWPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZC52YWx1ZSArIFwiO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRfdGV4dFYtPnNldFR5cGVmYWNlOmdldF9kZm9udFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuZHJvaWQucnVuSW5VSSh1cmxTZXRDb21tYW5kcyAsbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBKQnJpZGdlLnJlbmV3RmlsZShhdHRycy52YWx1ZSwgZm9udCwgY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIGlmKEpCcmlkZ2UuZ2V0RmlsZVBhdGgpIHtcbiAgICAgICAgcHJlUGVuZCA9IFwic2V0X2RpcmVjdG9yeT1jdHgtPmdldERpcjpzX2p1c3BheSxpXzA7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZEZpbGU9amF2YS5pby5GaWxlLT5uZXc6Z2V0X2RpcmVjdG9yeSxzX1wiICsgSkJyaWRnZS5nZXRGaWxlUGF0aChmb250KSArIFwiO1wiICtcbiAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRQYXRoPWdldF9yZXNvbHZlZEZpbGUtPnRvU3RyaW5nO1wiICtcbiAgICAgICAgICAgICAgICAgICAgXCJzZXRfZGZvbnQ9YW5kcm9pZC5ncmFwaGljcy5UeXBlZmFjZS0+Y3JlYXRlRnJvbUZpbGU6Z2V0X3Jlc29sdmVkUGF0aDtcIlxuICAgICAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9kZm9udFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcmVQZW5kID0gXCJzZXRfYXN0PWN0eC0+Z2V0QXNzZXRzO3NldF90eXBlPWFuZHJvaWQuZ3JhcGhpY3MuVHlwZWZhY2UtPmNyZWF0ZUZyb21Bc3NldDpnZXRfYXN0LHNfZm9udHNcXC9cIiArIGF0dHJzLnZhbHVlICsgXCJcXC50dGY7XCI7XG4gICAgICBjdXJyVHJhbnNWYWwgPSBcImdldF90eXBlXCI7XG4gICAgfVxuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImdyYWRpZW50QW5nbGVcIikge1xuICAgIG9yaWVudGF0aW9uICs9IFwic2V0X2RyPXRoaXMtPmdldEJhY2tncm91bmQ7c2V0X289YW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlJE9yaWVudGF0aW9uLT52YWx1ZU9mOnNfXCIrYXR0cnMudmFsdWUrXCI7XCJcbiAgICBwcmVQZW5kICs9IG9yaWVudGF0aW9uO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X29cIlxuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImdyYWRpZW50XCIpIHtcbiAgICB2YXIgZ3JhZGllbnRPYmogPSBKU09OLnBhcnNlKGF0dHJzLnZhbHVlKTtcbiAgICB2YXIgb3JpZW50YXRpb24gPSBcIlwiO1xuICAgIGlmIChncmFkaWVudE9iai50eXBlID09IFwibGluZWFyXCIpIHtcbiAgICB9IGVsc2Uge31cblxuICAgIHZhciBpbnRDbGFzcyA9IFwic2V0X2NjPWphdmEubGFuZy5DbGFzcy0+Zm9yTmFtZTpzX2phdmEubGFuZy5JbnRlZ2VyO1wiO1xuICAgIHZhciBhcnJMaXN0ID0gXCJzZXRfYXJyPWphdmEudXRpbC5BcnJheUxpc3QtPm5ldztcIjtcblxuICAgIHByZVBlbmQgKz0gZ3JhZGllbnRPYmoudmFsdWVzLm1hcChmdW5jdGlvbiAoY29sb3IsIGkpIHtcbiAgICAgIHJldHVybiBwYXJzZUNvbG9yKGNvbG9yLCBcInNldF9jb2xvclwiICsgaSk7XG4gICAgfSkuam9pbihcIlwiKTtcblxuICAgIGFyckxpc3QgKz0gZ3JhZGllbnRPYmoudmFsdWVzLm1hcChmdW5jdGlvbiAoY29sb3IsIGkpIHtcbiAgICAgIHJldHVybiBcImdldF9hcnItPmFkZDpnZXRfY29sb3JcIiArIGk7XG4gICAgfSkuam9pbihcIjtcIik7XG5cbiAgICBwcmVQZW5kICs9IFwic2V0X2dkPWFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS0+bmV3O1wiO1xuICAgIHByZVBlbmQgKz0gYXJyTGlzdCArIFwiO1wiO1xuICAgIHByZVBlbmQgKz0gXCJzZXRfYz1qYXZhLmxhbmcuQ2xhc3MtPmZvck5hbWU6c19qYXZhLmxhbmcuSW50ZWdlcjtcIjtcbiAgICBwcmVQZW5kICs9IFwiaW5mbC0+Y29udmVydEFuZFN0b3JlQXJyYXk6Z2V0X2FycixnZXRfYyxzX3BBcnIsYl90cnVlO1wiO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3BBcnJcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJjb3JuZXJSYWRpaVwiKSB7XG4gICAgdmFyIGNvcm5lclJhZGlpcyA9IGF0dHJzLnZhbHVlLnNwbGl0KCcsJyk7XG4gICAgdmFyIGNvcm5lclJhZGl1cyA9IGNvcm5lclJhZGlpcy5zcGxpY2UoMCwxKTtcbiAgICB2YXIgY29ybmVyUmFkaWlBcnJheSA9IFtdO1xuICAgIGZvcih2YXIgaSA9IDA7IGk8IGNvcm5lclJhZGlpcy5sZW5ndGg7KytpKXtcbiAgICAgIGNvcm5lclJhZGlpQXJyYXkucHVzaCgoY29ybmVyUmFkaWlzW2ldKmNvcm5lclJhZGl1cykrXCJcIik7XG4gICAgICBjb3JuZXJSYWRpaUFycmF5LnB1c2goKGNvcm5lclJhZGlpc1tpXSpjb3JuZXJSYWRpdXMpK1wiXCIpO1xuICAgIH1cbiAgICB2YXIgYXJyTGlzdCA9IFwic2V0X2Fycj1qYXZhLnV0aWwuQXJyYXlMaXN0LT5uZXc7XCI7XG4gICAgdmFyIGZsb2F0QXJyYXkgPSBjb3JuZXJSYWRpaUFycmF5Lm1hcChmdW5jdGlvbih2YWwsaSl7cmV0dXJuIFwic2V0X2Nvcm5lclJhZGl1cz1qYXZhLmxhbmcuRmxvYXQtPm5ldzpkcGZfXCIrIHZhbCArIFwiO2dldF9hcnItPmFkZDpnZXRfY29ybmVyUmFkaXVzO1wifSk7XG4gICAgcHJlUGVuZCArPSBhcnJMaXN0ICsgXCI7XCI7XG4gICAgcHJlUGVuZCArPSBcInNldF9jPWphdmEubGFuZy5DbGFzcy0+Zm9yTmFtZTpzX2phdmEubGFuZy5GbG9hdDtcIjtcbiAgICBwcmVQZW5kICs9IGZsb2F0QXJyYXkuam9pbihcIlwiKTtcbiAgICBwcmVQZW5kICs9IFwiaW5mbC0+Y29udmVydEFuZFN0b3JlQXJyYXk6Z2V0X2FycixnZXRfYyxzX3BBcnIsYl90cnVlO1wiO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3BBcnJcIjtcbiAgfVxuXG4gIC8vIHNoYWRvd1RhZyA6IGxldmVsLHRhZ1xuICBpZiAoYXR0cnMua2V5ID09IFwic2hhZG93VGFnXCIpIHtcbiAgICB2YXIgYXJyID0gYXR0cnMudmFsdWUuc3BsaXQoXCIsXCIpO1xuICAgIHZhciB0YWcgPSBhcnJbMV07XG5cdFx0Y29uc29sZS53YXJuKFwiWU9PT08gU2hhZG93XCIsIGFycik7XG5cbiAgICBpZiAoIXdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXSkge1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddID1cbiAgICAgICAgeyBsZXZlbCA6IHBhcnNlSW50KGFyclswXSksXG4gICAgICAgICAgdmlld0lkIDogW10sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogW10sXG4gICAgICAgICAgYmx1clZhbHVlIDogW10sXG4gICAgICAgICAgc2hhZG93Q29sb3IgOiBbXSxcbiAgICAgICAgICBkeCA6IFtdLFxuICAgICAgICAgIGR5IDogW10sXG4gICAgICAgICAgc3ByZWFkIDogW10sXG4gICAgICAgICAgZmFjdG9yIDogW11cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJsZXZlbFwiXSA9IHBhcnNlSW50KGFyclswXSk7XG4gICAgfVxuXHRcdHJldHVybiBcIlwiO1xuICB9XG4gIC8vICAtLSBpbnQgZHgsIGludCBkeSwgaW50IGJsdXJWYWx1ZSwgIFN0cmluZyBzaGFkb3dDb2xvciwgIGludCBzcHJlYWQsIGVsZXZhdGl1b24sIGZsb2F0IGZhY3RvcilcbiAgaWYgKGF0dHJzLmtleSA9PSBcImFuZHJvaWRTaGFkb3dcIikge1xuICAgIHZhciBhcnIgPSBhdHRycy52YWx1ZS5zcGxpdChcIixcIik7XG5cbiAgICB2YXIgdGFnID0gYXJyWzZdO1xuXG4gICAgdmFyIF9fYmFja2dyb3VuZCA9IFwiI2ZmZmZmZlwiO1xuICAgIHZhciBfX2lkID0gXCJcIjtcblxuICAgIGZvciAodmFyIGkgPTAgO2k8YWxsUHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbGxQcm9wc1tpXS5rZXkgPT0gXCJiYWNrZ3JvdW5kXCIpIHtcbiAgICAgICAgX19iYWNrZ3JvdW5kID0gYWxsUHJvcHNbaV0udmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKGFsbFByb3BzW2ldLmtleSA9PSBcImlkXCIpIHtcbiAgICAgICAgX19pZCA9IGFsbFByb3BzW2ldLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBmYWN0b3IgPSBhcnJbNV07XG4gICAgaWYgKHR5cGVvZiBKQnJpZGdlLmdldFBpeGVscyA9PSBcImZ1bmN0aW9uXCIpe1xuICAgICAgZmFjdG9yID0gSkJyaWRnZS5nZXRQaXhlbHMoKTtcbiAgICB9XG4gICAgLy8gICAodmlld0lkLCBiYWNrZ3JvdW5kQ29sb3IsIGludCBibHVyVmFsdWUsaGFkb3dDb2xvciwgaW50IGR4LCBpbnQgZHksIGludCBzcHJlYWQsIGZsb2F0IGZhY3RvcilcblxuICAgIGlmICghd2luZG93LnNoYWRvd09iamVjdFt0YWddKSB7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ10gPVxuICAgICAgICB7IGxldmVsIDogLTEsXG4gICAgICAgICAgdmlld0lkIDogW19faWRdLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IFtfX2JhY2tncm91bmRdLFxuICAgICAgICAgIGJsdXJWYWx1ZSA6IFthcnJbMl1dLFxuICAgICAgICAgIHNoYWRvd0NvbG9yIDogW2FyclszXV0sXG4gICAgICAgICAgZHggOiBbYXJyWzBdXSxcbiAgICAgICAgICBkeSA6IFthcnJbMV1dLFxuICAgICAgICAgIHNwcmVhZCA6IFthcnJbNF1dLFxuICAgICAgICAgIGZhY3RvciA6IFtmYWN0b3JdXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1widmlld0lkXCJdLnB1c2goX19pZCk7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJiYWNrZ3JvdW5kQ29sb3JcIl0ucHVzaChfX2JhY2tncm91bmQpO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiYmx1clZhbHVlXCJdLnB1c2goYXJyWzJdKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInNoYWRvd0NvbG9yXCJdLnB1c2goYXJyWzNdKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImR4XCJdLnB1c2goYXJyWzBdKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImR5XCJdLnB1c2goYXJyWzFdKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInNwcmVhZFwiXS5wdXNoKGFycls0XSk7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJmYWN0b3JcIl0ucHVzaChhcnJbNV0pO1xuICAgIH1cblxuXHRyZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJsZXR0ZXJTcGFjaW5nXCIpIHtcbiAgICBhdHRycy52YWx1ZSA9IChhdHRycy52YWx1ZS85KSArIFwiXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZGl2aWRlckRyYXdhYmxlXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfMzQyMzcyPWN0eC0+Z2V0UGFja2FnZU5hbWU7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfMzY4MjQ4PWdldF9yZXMtPmdldElkZW50aWZpZXI6c19cIisgIGF0dHJzLnZhbHVlICtcIixzX2RyYXdhYmxlLGdldF8zNDIzNzI7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfNDgyMzgwPWdldF9yZXMtPmdldERyYXdhYmxlOmdldF8zNjgyNDg7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF80ODIzODBcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJ0ZXh0RnJvbUh0bWxcIikge1xuICAgIHByZVBlbmQgPSBwYXJzZUh0bWwoaGFuZGxlU3BlY2lhbENoYXJzKGF0dHJzLnZhbHVlKSk7XG4gICAgY3VyclRyYW5zVmFsID0gJ2dldF9odG1sJztcbiAgfVxuXG4gIGlmKGF0dHJzLmtleSA9PSBcImJhY2tncm91bmRUaW50XCIpe1xuICAgIGNvbG9yID0gYXR0cnMudmFsdWU7XG4gICAgcHJlUGVuZCA9IHBhcnNlQ29sb3IoY29sb3IpKydzZXRfY29sb3JzdGF0ZT1hbmRyb2lkLmNvbnRlbnQucmVzLkNvbG9yU3RhdGVMaXN0LT52YWx1ZU9mOmdldF9jb2xvckludDsnIDtcbiAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2NvbG9yc3RhdGUnXG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwidHlwZWZhY2VcIikge1xuICAgIHByZVBlbmQgPSBcInNldF9mYWNlPXRoaXMtPmdldFR5cGVmYWNlO1wiXG4gICAgY3VyclRyYW5zVmFsID0gJ2dldF9mYWNlLCcgKyBhcHBlbmRBcmdzKGF0dHJzLG9iaik7XG4gIH1cblxuICBpZihhdHRycy5rZXkgPT0gXCJidXR0b25UaW50XCIpe1xuICAgIGNvbG9yID0gYXR0cnMudmFsdWU7XG4gICAgcHJlUGVuZCA9IHBhcnNlQ29sb3IoY29sb3IpKydzZXRfY29sb3JzdGF0ZT1hbmRyb2lkLmNvbnRlbnQucmVzLkNvbG9yU3RhdGVMaXN0LT52YWx1ZU9mOmdldF9jb2xvckludDsnIDtcbiAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2NvbG9yc3RhdGUnXG4gIH1cblxuICBpZihhdHRycy5rZXkgPT0gXCJoaW50Q29sb3JcIil7XG4gICAgY29sb3IgPSBhdHRycy52YWx1ZTtcbiAgICBwcmVQZW5kID0gcGFyc2VDb2xvcihjb2xvcikrJ3NldF9jb2xvcnN0YXRlPWFuZHJvaWQuY29udGVudC5yZXMuQ29sb3JTdGF0ZUxpc3QtPnZhbHVlT2Y6Z2V0X2NvbG9ySW50OycgO1xuICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfY29sb3JzdGF0ZSdcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJidG5CYWNrZ3JvdW5kXCIpIHtcbiAgICBjb2xvciA9IGF0dHJzLnZhbHVlO1xuICAgIHByZVBlbmQgPSAnc2V0X21vZGU9YW5kcm9pZC5ncmFwaGljcy5Qb3J0ZXJEdWZmLT5pbnRUb01vZGU6aV85OycgKyAgcGFyc2VDb2xvcihjb2xvcik7XG4gICAgY3VyclRyYW5zVmFsID0gICdnZXRfY29sb3JJbnQsZ2V0X21vZGUnO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInNlbGVjdGFibGVJdGVtXCIpIHtcbiAgICBjb2xvciA9IGF0dHJzLnZhbHVlO1xuICAgIHByZVBlbmQgPSAgXCJzZXRfb3V0dj1hbmRyb2lkLnV0aWwuVHlwZWRWYWx1ZS0+bmV3O3NldF90aGVtZT1jdHgtPmdldFRoZW1lO2dldF90aGVtZS0+cmVzb2x2ZUF0dHJpYnV0ZTppXzE2ODQzNTM0LGdldF9vdXR2LGJfdHJ1ZTtzZXRfYz1nZXRfb3V0di0+Z2V0Q2xhc3M7c2V0X2Y9Z2V0X2MtPmdldERlY2xhcmVkRmllbGQ6c19yZXNvdXJjZUlkO2dldF9mLT5zZXRBY2Nlc3NpYmxlOmJfdHJ1ZTtzZXRfdj1nZXRfZi0+Z2V0OmdldF9vdXR2O1wiXG4gICAgY3VyclRyYW5zVmFsID0gICdnZXRfdic7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwidXJsXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfU2V0dGluZz10aGlzLT5nZXRTZXR0aW5ncztnZXRfU2V0dGluZy0+c2V0SmF2YVNjcmlwdEVuYWJsZWQ6Yl90cnVlO2dldF9TZXR0aW5nLT5zZXREb21TdG9yYWdlRW5hYmxlZDpiX3RydWU7XCI7XG4gICAgdmFyIGNvbnZlcnRUb1N0cmluZyA9IFwic2V0XzExMjc9YW5kcm9pZC51dGlsLkJhc2U2NC0+ZGVjb2RlOnNfXCIgKyBidG9hKGF0dHJzLnZhbHVlKSArIFwiLGlfMDtzZXRfdXJsPWphdmEubGFuZy5TdHJpbmctPm5ldzpnZXRfMTEyNztcIlxuICAgIHByZVBlbmQgKz0gY29udmVydFRvU3RyaW5nO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3VybFwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInBhY2thZ2VJY29uXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfUE09Y3R4LT5nZXRQYWNrYWdlTWFuYWdlcjtzZXRfQUk9Z2V0X1BNLT5nZXRBcHBsaWNhdGlvbkluZm86c19cIiArIGF0dHJzLnZhbHVlICsgXCIsaV8wO3NldF8xMTc0Nz1nZXRfQUktPmxvYWRJY29uOmdldF9QTTtcIjtcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF8xMTc0N1wiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImltYWdlVXJsXCIpIHtcblxuICAgIGlmKGlzVVJMKGF0dHJzLnZhbHVlKSkge1xuICAgICAgaWYodHlwZW9mIHdpbmRvdy5fX1BST1hZX0ZOID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgd2luZG93Ll9fUFJPWFlfRk4gPSB7fTtcbiAgICAgIH1cbiAgICAgIHZhciBpbWFnZSA9IGF0dHJzLnZhbHVlLnN1YnN0cihhdHRycy52YWx1ZS5sYXN0SW5kZXhPZignLycpICsgMSlcbiAgICAgIHZhciBjYWxsYmFjayA9IFwib25JbWFnZVwiICsgaW1hZ2Uuc3Vic3RyKDAsIGltYWdlLmluZGV4T2YoJy4nKSlcblxuICAgICAgdmFyIGZpbGVQcmVzZW50ID0gKHR5cGVvZiBKQnJpZGdlLmlzRmlsZVByZXNlbnQgPT0gXCJmdW5jdGlvblwiKSAmJiBKQnJpZGdlLmlzRmlsZVByZXNlbnQoaW1hZ2UpO1xuICAgICAgaWYgKCFmaWxlUHJlc2VudCkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja01hcHBlci5tYXAoZnVuY3Rpb24gKGlzTmV3LCB1cmwsIGZpbGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBhbGxQcm9wcy5maW5kKGEgPT4gYS5rZXkgPT09IFwiaWRcIik7XG4gICAgICAgICAgaWYgKCFpZCkgcmV0dXJuO1xuICAgICAgICAgIHZhciB1cmxTZXRDb21tYW5kcyA9IFwic2V0X2RpcmVjdG9yeT1jdHgtPmdldERpcjpzX2p1c3BheSxpXzA7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZEZpbGU9amF2YS5pby5GaWxlLT5uZXc6Z2V0X2RpcmVjdG9yeSxzX1wiICsgZmlsZU5hbWUgKyBcIjtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkUGF0aD1nZXRfcmVzb2x2ZWRGaWxlLT50b1N0cmluZztcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X2RpbWFnZT1hbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkRyYXdhYmxlLT5jcmVhdGVGcm9tUGF0aDpnZXRfcmVzb2x2ZWRQYXRoO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfaW1nVj1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgaWQudmFsdWUgKyBcIjtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0X2ltZ1YtPnNldEltYWdlRHJhd2FibGU6Z2V0X2RpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuZHJvaWQucnVuSW5VSSh1cmxTZXRDb21tYW5kcyAsbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBKQnJpZGdlLnJlbmV3RmlsZShhdHRycy52YWx1ZSwgaW1hZ2UsIGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSBpZihKQnJpZGdlLmdldEZpbGVQYXRoKSB7XG4gICAgICAgIHByZVBlbmQgPSBcInNldF9kaXJlY3Rvcnk9Y3R4LT5nZXREaXI6c19qdXNwYXksaV8wO1wiICtcbiAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRGaWxlPWphdmEuaW8uRmlsZS0+bmV3OmdldF9kaXJlY3Rvcnksc19cIiArIEpCcmlkZ2UuZ2V0RmlsZVBhdGgoaW1hZ2UpICsgXCI7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZFBhdGg9Z2V0X3Jlc29sdmVkRmlsZS0+dG9TdHJpbmc7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9kaW1hZ2U9YW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5EcmF3YWJsZS0+Y3JlYXRlRnJvbVBhdGg6Z2V0X3Jlc29sdmVkUGF0aDtcIlxuICAgICAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9kaW1hZ2VcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJlUGVuZCA9IFwic2V0XzM0MjM3Mj1jdHgtPmdldFBhY2thZ2VOYW1lO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzM2ODI0OD1nZXRfcmVzLT5nZXRJZGVudGlmaWVyOnNfXCIrICBhdHRycy52YWx1ZSArXCIsc19kcmF3YWJsZSxnZXRfMzQyMzcyO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzQ4MjM4MD1nZXRfcmVzLT5nZXREcmF3YWJsZTpnZXRfMzY4MjQ4O1wiXG4gICAgICBjdXJyVHJhbnNWYWwgPSBcImdldF80ODIzODBcIjtcbiAgICB9XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZGVmYXVsdEltYWdlXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfMzQyMzcyPWN0eC0+Z2V0UGFja2FnZU5hbWU7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfMzY4MjQ4PWdldF9yZXMtPmdldElkZW50aWZpZXI6c19cIisgIGF0dHJzLnZhbHVlICtcIixzX2RyYXdhYmxlLGdldF8zNDIzNzI7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfNDgyMzgwPWdldF9yZXMtPmdldERyYXdhYmxlOmdldF8zNjgyNDg7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF80ODIzODBcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJwbGFjZUhvbGRlclwiKSB7XG4gICAgcHJlUGVuZCA9IFwic2V0XzM0MjM3Mj1jdHgtPmdldFBhY2thZ2VOYW1lO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzM2ODI0OD1nZXRfcmVzLT5nZXRJZGVudGlmaWVyOnNfXCIrICBhdHRycy52YWx1ZSArXCIsc19kcmF3YWJsZSxnZXRfMzQyMzcyO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzQ4MjM4MD1nZXRfcmVzLT5nZXREcmF3YWJsZTpnZXRfMzY4MjQ4O1wiXG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfNDgyMzgwXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZHluYW1pY1VybFwiKSB7XG4gICAgcHJlUGVuZCA9IFwic2V0X2RpcmVjdG9yeT1jdHgtPmdldERpcjpzX2p1c3BheSxpXzA7XCIgK1xuICAgIFwic2V0X3Jlc29sdmVkTmFtZT1pbi5qdXNwYXkuaHlwZXJzZGsuc2VydmljZXMuRmlsZVByb3ZpZGVyU2VydmljZS0+YXBwZW5kU2RrTmFtZUFuZFZlcnNpb246c19cIiArIGF0dHJzLnZhbHVlICsgXCI7XCIgK1xuICAgIFwic2V0X3Jlc29sdmVkRmlsZT1qYXZhLmlvLkZpbGUtPm5ldzpnZXRfZGlyZWN0b3J5LGdldF9yZXNvbHZlZE5hbWU7XCIgK1xuICAgIFwic2V0X3Jlc29sdmVkUGF0aD1nZXRfcmVzb2x2ZWRGaWxlLT50b1N0cmluZztcIiArXG4gICAgXCJzZXRfZGltYWdlPWFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuRHJhd2FibGUtPmNyZWF0ZUZyb21QYXRoOmdldF9yZXNvbHZlZFBhdGg7XCI7XG5cbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9kaW1hZ2VcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJiYWNrZ3JvdW5kRHJhd2FibGVcIikge1xuICAgIHByZVBlbmQgPSBcInNldF8zNDIzNzI9Y3R4LT5nZXRQYWNrYWdlTmFtZTtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF8zNjgyNDg9Z2V0X3Jlcy0+Z2V0SWRlbnRpZmllcjpzX1wiKyAgYXR0cnMudmFsdWUgK1wiLHNfZHJhd2FibGUsZ2V0XzM0MjM3MjtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF80ODIzODA9Z2V0X3Jlcy0+Z2V0RHJhd2FibGU6Z2V0XzM2ODI0ODtcIlxuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzQ4MjM4MFwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImZvbnRGYW1pbHlcIikge1xuICAgIGF0dHJzLnZhbHVlID0gYXBwZW5kQXJncyhhdHRycyxvYmopO1xuICAgIHZhbHVlcyA9IGF0dHJzLnZhbHVlLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIFwic2V0X2ZvbnRGYWNlPWFuZHJvaWQuZ3JhcGhpY3MuVHlwZWZhY2UtPmNyZWF0ZTpcIit2YWx1ZXNbMF0rXCIsXCIrdmFsdWVzWzFdK1wiO1wiK1widGhpcy0+c2V0VHlwZWZhY2U6Z2V0X2ZvbnRGYWNlLFwiK3ZhbHVlc1sxXStcIjtcIlxuICB9XG5cbiAgaWYoYXR0cnMua2V5PT1cImZvbnRTaXplXCIpIHtcbiAgICBjdXJyVHJhbnNWYWwgPSBhcHBlbmRBcmdzKGF0dHJzLG9iaikuc3BsaXQoJywnKVswXSArICcsZl8nICsgKCh3aW5kb3cuX19XSURUSCooYXR0cnMudmFsdWUuc3BsaXQoJywnKVsxXSkqMSkpLzEwMDtcbiAgfVxuXG4gIGlmKGF0dHJzLmtleT09XCJjdXJ2ZVwiKSB7XG4gICAgcHJlUGVuZCA9ICBcInNldF9pbnRlcnA9YW5kcm9pZC52aWV3LmFuaW1hdGlvbi5EZWNlbGVyYXRlSW50ZXJwb2xhdG9yLT5uZXc7XCI7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfaW50ZXJwXCI7XG4gIH1cblxuICBpZihhdHRycy5rZXk9PVwic2hpbW1lclwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBzaGltbWVyTW9kZSA9IFwiY29tLmZhY2Vib29rLnNoaW1tZXIuU2hpbW1lciRDb2xvckhpZ2hsaWdodEJ1aWxkZXJcIjtcbiAgICAgIHZhciBzaGltbWVyQ21kID0gXCJzZXRfc2Rydz1jb20uZmFjZWJvb2suc2hpbW1lci5TaGltbWVyRHJhd2FibGUtPm5ldztcIjtcbiAgICAgIHZhciBzaGltbWVySnNvbiA9IEpTT04ucGFyc2UoYXR0cnMudmFsdWUpO1xuICAgICAgY29uc29sZS5sb2coc2hpbW1lckpzb24sIHNoaW1tZXJKc29uLmNvbnRlbnRzLCBhdHRycywgYXR0cnMsIG9iaiwgYmVsb25nc1RvLCB0cmFuc2Zvcm1GbiwgYWxsUHJvcHMsIHR5cGUpXG4gICAgICAvLyBpZihzaGltbWVySnNvbiAmJiBzaGltbWVySnNvbi5jb250ZW50cyl7XG5cbiAgICAgICAgc2hpbW1lckpzb24gPSBzaGltbWVySnNvbi5jb250ZW50c1xuICAgICAgLy8gfVxuICAgICAgaWYgKHNoaW1tZXJKc29uICYmIHNoaW1tZXJKc29uLnNoaW1tZXJUeXBlID09IFwiYWxwaGFcIil7XG4gICAgICAgIHNoaW1tZXJNb2RlID0gXCJjb20uZmFjZWJvb2suc2hpbW1lci5TaGltbWVyJEFscGhhSGlnaGxpZ2h0QnVpbGRlclwiXG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJzZXRfYnVpbGRlcj1cIiArIHNoaW1tZXJNb2RlICsgXCItPm5ldztcIlxuICAgICAgICBpZihzaGltbWVySnNvbi5iYXNlKXtcbiAgICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldEJhc2VBbHBoYTpmX1wiICsgc2hpbW1lckpzb24uYmFzZSArIFwiO1wiXG4gICAgICAgIH1cbiAgICAgICAgaWYoc2hpbW1lckpzb24uaGlnaGxpZ2h0KXtcbiAgICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldEhpZ2hsaWdodEFscGhhOmZfXCIgKyBzaGltbWVySnNvbi5oaWdobGlnaHQgKyBcIjtcIlxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGltbWVyQ21kICs9IFwic2V0X2J1aWxkZXI9XCIgKyBzaGltbWVyTW9kZSArIFwiLT5uZXc7XCJcbiAgICAgICAgaWYoc2hpbW1lckpzb24uYmFzZSl7XG4gICAgICAgICAgc2hpbW1lckNtZCArPSBwYXJzZUNvbG9yKHNoaW1tZXJKc29uLmJhc2UgLCBcInNldF9iYXNlQ29sb3JcIikgKyBcIjtcIlxuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0QmFzZUNvbG9yOmdldF9iYXNlQ29sb3I7XCJcbiAgICAgICAgfVxuICAgICAgICBpZihzaGltbWVySnNvbi5oaWdobGlnaHQpe1xuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gcGFyc2VDb2xvcihzaGltbWVySnNvbi5oaWdobGlnaHQgLCBcInNldF9iYXNlQ29sb3JcIikgKyBcIjtcIlxuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0SGlnaGxpZ2h0Q29sb3I6Z2V0X2Jhc2VDb2xvcjtcIlxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHNoaW1tZXJKc29uLnRpbHQpe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldFRpbHQ6Zl9cIiArIHNoaW1tZXJKc29uLnRpbHQgKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24uaW50ZW5zaXR5KXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRJbnRlbnNpdHk6Zl9cIiArIHNoaW1tZXJKc29uLmludGVuc2l0eSArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5kaXJlY3Rpb24pe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldERpcmVjdGlvbjppX1wiICsgc2hpbW1lckpzb24uZGlyZWN0aW9uICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLmR1cmF0aW9uKXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXREdXJhdGlvbjpsX1wiICsgc2hpbW1lckpzb24uZGlyZWN0aW9uICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLnJlcGVhdENvdW50KXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRSZXBlYXRDb3VudDppX1wiICsgc2hpbW1lckpzb24ucmVwZWF0Q291bnQgKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24ucmVwZWF0RGVsYXkpe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldFJlcGVhdERlbGF5OmxfXCIgKyBzaGltbWVySnNvbi5yZXBlYXREZWxheSArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5jbGlwVG9DaGlsZHJlbil7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0Q2xpcFRvQ2hpbGRyZW46Yl9cIiArIHNoaW1tZXJKc29uLmNsaXBUb0NoaWxkcmVuICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLnNoYXBlKXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRTaGFwZTppX1wiICsgc2hpbW1lckpzb24uc2hhcGUgKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24uZHJvcE9mZil7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0RHJvcG9mZjpmX1wiICsgc2hpbW1lckpzb24uZHJvcE9mZiArIFwiO1wiXG4gICAgICB9XG4gICAgICBzaGltbWVyQ21kICs9IFwic2V0X3NoaW1tZXI9Z2V0X2J1aWxkZXItPmJ1aWxkO1wiXG4gICAgICBpZih0eXBlID09IFwic2hpbW1lckZyYW1lTGF5b3V0XCIpe1xuICAgICAgICBhdHRycy5rZXkgPSBcInNoaW1tZXJWaWV3XCJcbiAgICAgICAgY3VyclRyYW5zVmFsID0gXCJnZXRfc2hpbW1lclwiO1xuICAgICAgICBvYmouZm5OYW1lID0gb2JqLmFsdGVybmF0ZUZuTmFtZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9zZHJ3LT5zZXRTaGltbWVyOmdldF9zaGltbWVyO1wiXG4gICAgICAgIGlmKHNoaW1tZXJKc29uLmFjdGl2ZSl7XG4gICAgICAgICAgYWZ0ZXJDbWQgKz0gXCJnZXRfc2Rydy0+c3RhcnRTaGltbWVyO1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWZ0ZXJDbWQgKz0gXCJnZXRfc2Rydy0+c3RvcFNoaW1tZXI7XCJcbiAgICAgICAgfVxuICAgICAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9zZHJ3XCI7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcInVuYWJsZSB0byBzZXQgc2hpbW1lclwiKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzaGltbWVyQ21kKVxuICAgIHByZVBlbmQgPSAgc2hpbW1lckNtZDtcbiAgfVxuXG4gIGlmKGF0dHJzLmtleT09XCJmb2N1c1wiKSB7XG4gICAgYWZ0ZXJDbWQgPSAgXCJzZXRfd2luPWN0eC0+Z2V0V2luZG93O2dldF93aW4tPnNldFNvZnRJbnB1dE1vZGU6NTtcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJzaGFkb3dMYXllclwiKSB7XG4gICAgY29sb3IgPSBhdHRycy52YWx1ZS5zcGxpdCgnLCcpWzNdO1xuICAgIGFyciA9IGFwcGVuZEFyZ3MoYXR0cnMsb2JqKS5zcGxpdCgnLCcpO1xuICAgIGFyci5zcGxpY2UoYXJyLmxlbmd0aDEgLCAxKTtcblxuICAgIHByZVBlbmQgPSBwYXJzZUNvbG9yKGNvbG9yKTtcbiAgICBjdXJyVHJhbnNWYWwgPSAgYXJyLmpvaW4oJywnKSArICcsZ2V0X2NvbG9ySW50J1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInZhbHVlc1wiKSB7XG4gICAgdmFyIHZhbCA9IGF0dHJzLnZhbHVlLnNwbGl0KFwiLFwiKTtcbiAgICB2YXIgdmFsdWVzU3RyID0gXCJcIiwgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZWxlbWVudHMgPSB2YWxbaV0uc3BsaXQoXCI6XCIpO1xuICAgICAgdmFsdWVzU3RyICs9IFwiZ2V0X3NwaW5uZXJBcnJheS0+YWRkOnNfXCIrZWxlbWVudHNbMF07XG4gICAgICBmb3IodmFyIGogPSAxOyBqIDwgZWxlbWVudHMubGVuZ3RoOyBqKyspXG4gICAgICAgIHZhbHVlc1N0ciArPSBcIlxcblwiICsgZWxlbWVudHNbal07XG4gICAgICAgIHZhbHVlc1N0ciArPSBcIjtcIjtcbiAgICB9XG4gICAgcHJlUGVuZCA9ICBcInNldF9zcGlubmVyQXJyYXk9amF2YS51dGlsLkFycmF5TGlzdC0+bmV3O1wiKyB2YWx1ZXNTdHIgK1xuICAgIFwic2V0X3NwaW5uZXJWYWx1ZXM9Z2V0X3NwaW5uZXJBcnJheS0+dG9BcnJheTtzZXRfc3Bpbm5lckFkYXB0ZXI9YW5kcm9pZC53aWRnZXQuQXJyYXlBZGFwdGVyLT5uZXc6Y3R4X2N0eCxpXzE3MzY3MDQzLGdldF9zcGlubmVyVmFsdWVzO1wiO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3NwaW5uZXJBZGFwdGVyXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwic3RhcnRQb2ludFwiKSB7XG4gICAgdmFyIGFyZyA9IEpTT04ucGFyc2UoYXR0cnMudmFsdWUpO1xuICAgIHByZVBlbmQgPSBcInRoaXMtPnNldFN0YXJ0WDpmX1wiICsgYXJnLnggKyBcIjtcIlxuICAgIHByZVBlbmQgKz0gXCJ0aGlzLT5zZXRTdGFydFk6Zl9cIiArIGFyZy55ICsgXCI7XCJcbiAgICByZXR1cm4gcHJlUGVuZFxuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImVuZFBvaW50XCIpIHtcbiAgICB2YXIgYXJnID0gSlNPTi5wYXJzZShhdHRycy52YWx1ZSlcbiAgICBwcmVQZW5kID0gXCJ0aGlzLT5zZXRFbmRYOmZfXCIgKyBhcmcueCArIFwiO1wiXG4gICAgcHJlUGVuZCArPSBcInRoaXMtPnNldEVuZFk6Zl9cIiArIGFyZy55ICsgXCI7XCJcbiAgICByZXR1cm4gcHJlUGVuZFxuICB9XG5cbiAgaWYgKGJlbG9uZ3NUbyA9PSBcIlZJRVdcIilcbiAga2V5V29yZCA9IGdsb2JhbE9iak1hcFtiZWxvbmdzVG9dLnZhbDtcbiAgZWxzZVxuICBrZXlXb3JkID0gJ2dldF8nICsgZ2xvYmFsT2JqTWFwW2JlbG9uZ3NUb10udmFsO1xuXG4gIGlmICh0cmFuc2Zvcm1GbiB8fCBhdHRycy5rZXkgPT0gXCJkdXJhdGlvblwiIHx8IGF0dHJzLmtleSA9PSBcImRlbGF5XCIgfHwgYXR0cnMua2V5ID09IFwiY3VydmVcIilcbiAgX2NtZCA9IGtleVdvcmQgKyAgJy0+JyArICgodHlwZW9mIG9iai5mbk5hbWUgPT0gXCJ1bmRlZmluZWRcIik/b2JqLnZhck5hbWU6b2JqLmZuTmFtZSk7XG4gIGVsc2VcbiAgX2NtZCA9IGtleVdvcmQgKyAnLT4nICsgICBhdHRycy5rZXk7XG5cbiAgaWYgKG9iai52YWx1ZXMgJiYgb2JqLnZhbHVlcy5sZW5ndGgpXG4gIF9jbWQgKz0gJzonO1xuXG4gIGlmICghcHJlUGVuZCAmJiAhY3VyclRyYW5zVmFsKVxuICBfY21kICs9ICBhcHBlbmRBcmdzKGF0dHJzLCBvYmopICsgJzsnXG4gIGVsc2VcbiAgX2NtZCArPSBjdXJyVHJhbnNWYWwgKyAnOyc7XG5cbiAgLy8gZm9yIHRlc3RpbmdcbiAgaWYgKHR5cGVvZiBmaW5hbENtZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnNvbGUubG9nKGJlZm9yZUNtZCAgKyBwcmVQZW5kICsgX2NtZCArIGFmdGVyQ21kKTtcbiAgICByZXR1cm4gZmluYWxDbWQ7XG4gIH1cbiAgaWYodHlwZSA9PSBcInNoaW1tZXJGcmFtZUxheW91dFwiKXtcbiAgICBjb25zb2xlLmxvZyhiZWZvcmVDbWQgICsgcHJlUGVuZCArIF9jbWQgKyBhZnRlckNtZClcbiAgfVxuICByZXR1cm4gYmVmb3JlQ21kICArIHByZVBlbmQgKyBfY21kICsgYWZ0ZXJDbWRcbn1cblxuZnVuY3Rpb24gcGFyc2VBdHRycyhhdHRycywgYmVsb25nc1RvLCB0cmFuc2Zvcm1GbiwgdHlwZSkge1xuICB2YXIgb2JqO1xuICB2YXIgcmV0VmFsO1xuICB2YXIgY21kID0gJyc7XG4gIHZhciBfY21kO1xuXG4gIGZvciAodmFyIGkgPTAgO2k8YXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICBvYmogPSBtYXBQYXJhbXNbYXR0cnNbaV0ua2V5XTtcbiAgICBpZiAob2JqKSB7XG4gICAgICBjbWQgKz0gbWFzaFRoaXMoYXR0cnNbaV0sIG9iaiwgYmVsb25nc1RvLCB0cmFuc2Zvcm1GbiwgYXR0cnMsIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChiZWxvbmdzVG8gPT0gXCJWSUVXXCIpXG4gIHJldHVybiBjbWQ7XG5cbiAgcmV0dXJuIHByZXBhcmVDdHIoYXR0cnMsIGJlbG9uZ3NUbykgKyAnOycgKyBjbWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlR3JvdXBzKHR5cGUsIGdyb3VwcywgY29uZmlnKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZ3JvdXBzKTtcbiAgdmFyIGN0cjtcblxuICBmb3IgKHZhciBpID0gMDsgaTwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmICAoa2V5c1tpXSA9PSBcIkZPUkVHUk9VTkRcIikge1xuICAgICAgaWYgKCFnbG9iYWxPYmpNYXBba2V5c1tpXV0pIHtcbiAgICAgICAgaWYgKGdldFNldFR5cGUgPT0gXCJzZXRcIikge1xuICAgICAgICAgIGdsb2JhbE9iak1hcFtrZXlzW2ldXSA9IHtjdHI6IFwiYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlLT5uZXdcIiwgIHZhbDogIGtleXNbaV0gfTtcbiAgICAgICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXBba2V5c1tpXV0udmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCB0cnVlLCB0eXBlKVxuICAgICAgICAgICAgKyAndGhpcy0+JyArIFwic2V0Rm9yZWdyb3VuZFwiICsgJzonICsgJ2dldF8nICsgIGdsb2JhbE9iak1hcFtrZXlzW2ldXS52YWwgKyAnOydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnbG9iYWxPYmpNYXBba2V5c1tpXV0gPSB7Y3RyOiAnZ2V0X3ZpZXctPmdldEZvcmVncm91bmQnLCAgdmFsOiAga2V5c1tpXSB9O1xuICAgICAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcFtrZXlzW2ldXS52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIHRydWUsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXlzW2ldID09IFwiTEFZT1VUX1RSQU5TSVRJT05cIikge1xuICAgICAgICBnbG9iYWxPYmpNYXAuTEFZT1VUX1RSQU5TSVRJT04gPSB7Y3RyOiAnYW5kcm9pZC5hbmltYXRpb24uTGF5b3V0VHJhbnNpdGlvbi0+bmV3JywgdmFsOiBcIkxBWU9VVF9UUkFOU0lUSU9OXCJ9O1xuICAgICAgICBjb21tYW5kICs9ICAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwLkxBWU9VVF9UUkFOU0lUSU9OLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwcy5QQVJBTVMsICdMQVlPVVRfVFJBTlNJVElPTicsIHRydWUsIHR5cGUpXG4gICAgICAgICAgICAgKyAndGhpcy0+JyArIFwic2V0TGF5b3V0VHJhbnNpdGlvblwiICsgJzpnZXRfJyAgKyBnbG9iYWxPYmpNYXAuTEFZT1VUX1RSQU5TSVRJT04udmFsICsgJzsnO1xuICAgIH0gZWxzZSBpZiAoa2V5c1tpXSA9PSBcIlZJRVdcIikge1xuICAgICAgaWYgKCFnbG9iYWxPYmpNYXAuVklFVykge1xuICAgICAgICBpZiAoZ2V0U2V0VHlwZSA9PSBcInNldFwiKVxuICAgICAgICBnbG9iYWxPYmpNYXAuVklFVyA9IHtjdHI6IFwidGhpc1wiLCB2YWw6IFwidGhpc1wifTtcbiAgICAgICAgZWxzZVxuICAgICAgICBnbG9iYWxPYmpNYXAuVklFVyA9IHtjdHI6IFwiZ2V0X3ZpZXdcIiwgdmFsOiBcImdldF92aWV3XCJ9O1xuICAgICAgfVxuXG4gICAgICBjb21tYW5kICs9ICBwYXJzZUF0dHJzKGdyb3Vwcy5WSUVXLCAnVklFVycsIHRydWUsIHR5cGUpXG5cbiAgICB9IGVsc2UgaWYgKGtleXNbaV0gPT0gXCJQQVJBTVNcIikge1xuICAgICAgaWYgKGdldFNldFR5cGUgPT0gXCJzZXRcIikge1xuICAgICAgICBpZiAoIWdsb2JhbE9iak1hcC5QQVJBTVMpIHtcbiAgICAgICAgICBjdHIgPSBjb25maWcucm9vdD9nZXRDdHIodHlwZSk6J1BBUkFNX0NUUl9IT0xERVInO1xuICAgICAgICAgIGdsb2JhbE9iak1hcC5QQVJBTVMgPSB7Y3RyOiBjdHIsIHZhbDogXCJQQVJBTVNcIiB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29tbWFuZCArPSAgJ3NldF8nICsgIGdsb2JhbE9iak1hcC5QQVJBTVMudmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzLlBBUkFNUywgJ1BBUkFNUycsIHRydWUsIHR5cGUpXG4gICAgICAgICAgICAgKyAndGhpcy0+JyArIG9iak1hcC5QQVJBTVMudmlld01ldGhvZC5zcGxpdCgnLCcpWzBdICsgJzpnZXRfJyAgKyBnbG9iYWxPYmpNYXAuUEFSQU1TLnZhbCArICc7JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghZ2xvYmFsT2JqTWFwLlBBUkFNUykge1xuICAgICAgICAgIGN0ciA9IFwiZ2V0X3ZpZXctPmdldExheW91dFBhcmFtc1wiO1xuICAgICAgICAgIGdsb2JhbE9iak1hcC5QQVJBTVMgPSB7Y3RyOiBjdHIsIHZhbDogXCJQQVJBTVNcIiB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwLlBBUkFNUy52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIHRydWUsIHR5cGUpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChrZXlzW2ldID09IFwiTVVUQVRFQkdcIikge1xuICAgICAgaWYgKCFnbG9iYWxPYmpNYXAuTVVUQVRFQkcpIHtcbiAgICAgICAgZ2xvYmFsT2JqTWFwLk1VVEFURUJHID0ge2N0cjogJ3RoaXMtPmdldEJhY2tncm91bmQnLCB2YWw6IFwiTVVUQVRFQkdcIn07XG4gICAgICB9XG5cbiAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcC5NVVRBVEVCRy52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIHRydWUsIHR5cGUpO1xuICAgIH0gZWxzZSBpZiAoa2V5c1tpXSA9PSBcIkFOSU1BVElPTlwiKSB7XG4gICAgICBpZiAoIWdsb2JhbE9iak1hcC5BTklNQVRJT04pIHtcbiAgICAgICAgaWYgKGdldFNldFR5cGUgPT0gXCJzZXRcIilcbiAgICAgICAgZ2xvYmFsT2JqTWFwLkFOSU1BVElPTiA9IHtjdHI6ICd0aGlzLT5hbmltYXRlJywgdmFsOiBcIkFOSU1BVElPTlwifTtcbiAgICAgICAgZWxzZVxuICAgICAgICBnbG9iYWxPYmpNYXAuQU5JTUFUSU9OID0ge2N0cjogJ2dldF92aWV3LT5hbmltYXRlJywgdmFsOiBcIkFOSU1BVElPTlwifTtcbiAgICAgIH1cblxuICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwLkFOSU1BVElPTi52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIGZhbHNlLCB0eXBlKTtcblxuICAgIH0gIGVsc2Uge1xuICAgICAgLy8gV29ya3Mgb25seSBmb3IgZHJhd2FibGVcbiAgICAgIGlmICghZ2xvYmFsT2JqTWFwW2tleXNbaV1dKSB7XG4gICAgICAgIGlmIChnZXRTZXRUeXBlID09IFwic2V0XCIpIHtcbiAgICAgICAgICBnbG9iYWxPYmpNYXBba2V5c1tpXV0gPSB7Y3RyOiBvYmpNYXBba2V5c1tpXV0uY3RyLCAgdmFsOiAga2V5c1tpXSB9O1xuICAgICAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcFtrZXlzW2ldXS52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIHRydWUsIHR5cGUpXG4gICAgICAgICAgICArICd0aGlzLT4nICsgb2JqTWFwW2tleXNbaV1dLnZpZXdNZXRob2Quc3BsaXQoJywnKVswXSArICc6JyArICdnZXRfJyArICBnbG9iYWxPYmpNYXBba2V5c1tpXV0udmFsICsgJzsnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dID0ge2N0cjogJ2dldF92aWV3LT5nZXRCYWNrZ3JvdW5kJywgIHZhbDogIGtleXNbaV0gfTtcbiAgICAgICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXBba2V5c1tpXV0udmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCB0cnVlLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29tbWFuZC5zdWJzdHJpbmcoMCwgY29tbWFuZC5sZW5ndGggLSAxKTtcbn1cblxudmFyIGZsYXR0ZW5PYmplY3QgPSBmdW5jdGlvbihvYikge1xuICB2YXIgdG9SZXR1cm4gPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBvYikge1xuICAgIGlmICghb2IuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgIGlmICgodHlwZW9mIG9iW2ldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGZsYXRPYmplY3QgPSBmbGF0dGVuT2JqZWN0KG9iW2ldKTtcbiAgICAgIGZvciAodmFyIHggaW4gZmxhdE9iamVjdCkge1xuICAgICAgICBpZiAoIWZsYXRPYmplY3QuaGFzT3duUHJvcGVydHkoeCkpIGNvbnRpbnVlO1xuICAgICAgICB0b1JldHVyblt4XSA9IGZsYXRPYmplY3RbeF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvUmV0dXJuW2ldID0gb2JbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0b1JldHVybjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odHlwZSwgY29uZmlnLCBfZ2V0U2V0VHlwZSkge1xuICBjb25maWcgPSBmbGF0dGVuT2JqZWN0KGNvbmZpZyk7XG4gIGdldFNldFR5cGUgPSBfZ2V0U2V0VHlwZTtcbiAgZWxlbWVudFR5cGUgPSB0eXBlO1xuXG4gIHZhciBncm91cHMgPSAgZ2V0Q29uZmlnR3JvdXBzKGNvbmZpZyk7XG5cbiAgY29tbWFuZCA9ICcnO1xuICBnbG9iYWxPYmpNYXAgPSB7fTtcblxuICB2YXIgZmxhZyA9IDA7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnKTtcbiAgZm9yICh2YXIgaT0wOyBpPGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoa2V5c1tpXSA9PSAncnVuSW5VSScpICB7XG4gICAgICBmbGFnICA9IDE7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIWZsYWcpIHtcbiAgICBjb25maWcucnVuSW5VSSA9IHBhcnNlR3JvdXBzKHR5cGUsIGdyb3VwcywgY29uZmlnKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiAqIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuICpcbiAqIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuICogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiAqIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiAqIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4gKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiAqIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuICogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2VcbiAqIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMubWFwID0gKGZuKSA9PiB7XG5cdGlmKHR5cGVvZiB3aW5kb3cuX19GTl9JTkRFWCAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fRk5fSU5ERVggIT09IG51bGwpIHtcblx0XHR2YXIgcHJveHlGbk5hbWUgPSAnRicgKyB3aW5kb3cuX19GTl9JTkRFWDtcblx0XHRpZiAod2luZG93Ll9fcGF5bG9hZCAmJiB3aW5kb3cuX19wYXlsb2FkLnNlcnZpY2Upe1xuXHRcdFx0cHJveHlGbk5hbWUgPSB3aW5kb3cuX19wYXlsb2FkLnNlcnZpY2UgKyBcIl9cIiArIHByb3h5Rm5OYW1lO1xuXHRcdH1cblx0XHR3aW5kb3cuX19QUk9YWV9GTltwcm94eUZuTmFtZV0gPSBmbjtcblx0ICBcdHdpbmRvdy5fX0ZOX0lOREVYKys7XG5cdFx0cmV0dXJuIHByb3h5Rm5OYW1lO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBpbml0aWFsaXNlIHdpbmRvdy5fX0ZOX0lOREVYID0gMCBpbiBpbmRleC5qcyBvZiB5b3VyIHByb2plY3QuXCIpO1xuXHR9XG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRjYWxsYmFja01hcHBlciA6IHJlcXVpcmUoXCIuL2NhbGxiYWNrTWFwcGVyXCIpXG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRhbmRyb2lkIDogcmVxdWlyZShcIi4vYW5kcm9pZFwiKSxcblx0aW9zIDogcmVxdWlyZShcIi4vaW9zXCIpLFxuXHR3ZWIgOiByZXF1aXJlKFwiLi93ZWJcIiksXG5cdGNvbW1vbiA6IHJlcXVpcmUoXCIuL2NvbW1vblwiKVxufSIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBbXG5cdFwiIzgzRkNFOFwiLFxuXHRcIiM4OUY2RTRcIixcblx0XCIjOEZFRkRGXCIsXG5cdFwiIzk2RTlEQlwiLFxuXHRcIiM5Q0UzRDdcIixcblx0XCIjRkVFOUU2XCIsXG5cdFwiI0ZFRjdFN1wiLFxuXHRcIiNGRkZBRTVcIixcblx0XCIjRjVGQUVCXCIsXG5cdFwiI0U1RkZGNVwiXG5dXG5cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmbGF0dGVuT2JqZWN0KG9iKSB7XG4gIHZhciB0b1JldHVybiA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iKSB7XG4gICAgaWYgKCFvYi5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG4gICAgaWYgKCh0eXBlb2Ygb2JbaV0pID09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgZmxhdE9iamVjdCA9IGZsYXR0ZW5PYmplY3Qob2JbaV0pO1xuICAgICAgZm9yICh2YXIgeCBpbiBmbGF0T2JqZWN0KSB7XG4gICAgICAgIGlmICghZmxhdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSh4KSkgY29udGludWU7XG4gICAgICAgIHRvUmV0dXJuW3hdID0gZmxhdE9iamVjdFt4XTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdG9SZXR1cm5baV0gPSBvYltpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9SZXR1cm47XG59OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHBhcnNlUGFyYW1zIDogcmVxdWlyZShcIi4vcGFyc2VQYXJhbXNcIiksXG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5pbXBvcnQgY29sb3JzIGZyb20gXCIuL2NvbG9yc1wiO1xuaW1wb3J0IGZsYXR0ZW5PYmplY3QgZnJvbSBcIi4vZmxhdHRlbk9iamVjdFwiO1xuXG52YXIgY2FsbGJhY2tNYXBwZXIgID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jYWxsYmFja01hcHBlclwiKVxuXG5sZXQgZ2V0U2V0VHlwZSA9IDE7XG5cbi8qKlxuICogQ2hlY2tzIHRoZSBuYXRpdmUgc2V0IHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLm15c3RpcXVlX3ZlcnNpb25cbiAqIGFuZCBjaGVja3MgaWYgbXlzdGlxdWUgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gdGhlIHBhc3NlZCB2ZXJzaW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gbnVtYmVyIHRvIGJlIGNoZWNrZWQgYWdhaW5zdC4gSWYgcGFzc2VkIGVtcHR5IHJldHVybnMgdHJ1ZS5cbiAqIEByZXR1cm4ge2Jvb2x9IHRydWUgaWYgbXlzdGlxdWUgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gcGFzc2VkIHZlcnNpb24gZWxzZSBmYWxzZS4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAqL1xuZnVuY3Rpb24gaXNNeXN0aXF1ZVZlcnNpb25HcmVhdGVyVGhhbih2ZXJzaW9uKSB7XG4gIGlmICh3aW5kb3cuX19ERVZJQ0VfREVUQUlMUyAmJiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5teXN0aXF1ZV92ZXJzaW9uKSB7XG4gICAgdmFyIHNka1ZlcnNpb24gPSBwYXJzZUZsb2F0KHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLm15c3RpcXVlX3ZlcnNpb24pO1xuICAgIGlmIChzZGtWZXJzaW9uPjApIHtcbiAgICAgICAgcmV0dXJuIHNka1ZlcnNpb24+cGFyc2VGbG9hdCh2ZXJzaW9uKT90cnVlOmZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRDb2xvclRvUmdiYShjb2xvcil7XG4gIGNvbG9yID0gcldTKGNTKGNvbG9yKSk7XG5cbiAgdmFyIHZhbHVlcztcbiAgdmFyIGFscGhhID0gXCIxLjAwXCI7XG5cbiAgaWYgKGNvbG9yLmxlbmd0aCA+PSA4KSB7XG4gICAgYWxwaGEgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMyksIDE2KTtcbiAgICBhbHBoYSA9IChhbHBoYSAvIDI1NSkudG9GaXhlZCgyKTtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygzLCA5KTtcbiAgfSBlbHNlIHtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygxLCBjb2xvci5sZW5ndGgpO1xuICB9XG5cbiAgY29sb3IgPSBjb252ZXJ0SGV4VG9SZ2IocldTKGNvbG9yKSk7XG4gIHZhbHVlcyA9IGNvbG9yLnNwbGl0KCcsJyk7XG5cbiAgcmV0dXJuIHtcbiAgICByOiByV1ModmFsdWVzWzBdKSxcbiAgICBnOiByV1ModmFsdWVzWzFdKSxcbiAgICBiOiByV1ModmFsdWVzWzJdKSxcbiAgICBhOiBhbHBoYVxuICB9O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0SGV4VG9SZ2IoaGV4KSB7XG4gIHZhciByID0gKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMCwyKSwgMTYpLzI1NSkudG9GaXhlZCgyKTtcbiAgdmFyIGcgPSAocGFyc2VJbnQoaGV4LnN1YnN0cmluZygyLDQpLCAxNikvMjU1KS50b0ZpeGVkKDIpO1xuICB2YXIgYiA9IChwYXJzZUludChoZXguc3Vic3RyaW5nKDQsNiksIDE2KS8yNTUpLnRvRml4ZWQoMik7XG5cbiAgcmV0dXJuIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGI7XG59XG5cbmZ1bmN0aW9uIGNTKHZhbHVlKSB7XG4gIHJldHVybiAgdmFsdWU/dmFsdWUgKyAnJzogXCJcIjtcbn1cblxuZnVuY3Rpb24gcldTKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8gL2csJycpO1xufVxuXG5mdW5jdGlvbiBzZWxmX3NpemVGcm9tRGljdGlvbmFyeSh3aWR0aCwgaGVpZ2h0KSB7XG4gIHdpbmRvdy5fX1NJWkVfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwic2l6ZVwiICsgd2luZG93Ll9fU0laRV9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2l6ZUZyb21EaWN0aW9uYXJ5OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1xuICAgICAgICBcIndpZHRoXCI6IHdpZHRoLFxuICAgICAgICBcImhlaWdodFwiOiBoZWlnaHQsXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxmX3NldEN1cnNvclBvc2l0aW9uKGlkLCBwb3NpdGlvbikge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEN1cnNvclBvc2l0aW9uOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XG4gICAgICBcInZpZXdJZFwiOiBpZCxcbiAgICAgIFwicG9zaXRpb25cIjogcG9zaXRpb25cbiAgICB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENvbnRlbnRTaXplKCkge1xuICByZXR1cm4gIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRDb250ZW50U2l6ZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCJzaXplXCIgKyB3aW5kb3cuX19TSVpFX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiLCBcInR5cGVcIjogXCJzaXplXCJ9XG4gICAgXVxuICB9O1xufVxuXG5mdW5jdGlvbiBVSUNvbG9yX2NvbG9yV2l0aFJHQkEocixnLGIsYSkge1xuICB3aW5kb3cuX19DT0xPUl9JTkRFWCsrO1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiY29sb3JcIiArIHdpbmRvdy5fX0NPTE9SX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJVSUNvbG9yXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJjb2xvcldpdGhSZWQ6Z3JlZW46Ymx1ZTphbHBoYTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogciAsIFwidHlwZVwiOiBcImZcIn0sXG4gICAgICB7XCJuYW1lXCI6IGcgLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgICAge1wibmFtZVwiOiBiICwgXCJ0eXBlXCI6IFwiZlwifSxcbiAgICAgIHtcIm5hbWVcIjogYSAsIFwidHlwZVwiOiBcImZcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19waXZvdFgodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRQaXZvdFg6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHZhbHVlK1wiXCIsIFwidHlwZVwiOiBcInNcIn0sXG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfcGl2b3RZKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UGl2b3RZOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiB2YWx1ZStcIlwiLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxmX2FuaW1hdGVfdHJhbnNsYXRpb24ob2JqLCBwcm9wcykge1xuICBvYmoudmFsdWVzWzBdLnByb3BlcnRpZXMgPSBbXG4gICAgICB7XG4gICAgICAgIFwia2V5XCI6IFwiZnJhbWVcIixcbiAgICAgICAgXCJ2YWx1ZXNcIjoge1xuICAgICAgICAgIFwieFwiOiBwcm9wcy54LFxuICAgICAgICAgIFwieVwiOiBwcm9wcy55LFxuICAgICAgICAgIFwid2lkdGhcIjogcHJvcHMudyxcbiAgICAgICAgICBcImhlaWdodFwiOiBwcm9wcy5oLFxuICAgICAgICB9XG4gICAgICB9LFxuICBdXG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gc2VsZl9hbmltYXRlX3JvdGF0aW9uKG9iaiwgcHJvcHMpIHtcbiAgb2JqLnZhbHVlc1swXS5wcm9wZXJ0aWVzID0gW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IFwiYW5nbGVcIixcbiAgICAgIFwidmFsdWVzXCI6IHtcblxuICAgICAgfVxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldFRyYW5zbGF0aW9uWihwYXJhbXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgICBcIm1ldGhvZE5hbWVcIjogXCJ0cmFuc2xhdGlvblo6XCIsXG4gICAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogcGFyYW1zLCB0eXBlOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxmX2FuaW1hdGUocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImFuaW1hdGU6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAge1xuICAgICAgICBcImpzb25cIjogcHJvcHMuanNvbixcbiAgICAgICAgXCJ2aWV3VGFnXCI6IHByb3BzLmlkLFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRCYWNrZ3JvdW5kQ29sb3IoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0QmFja2dyb3VuZENvbG9yOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBcImNvbG9yXCIgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIn0sXG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc3VwZXJ2aWV3KCkge1xuICB2YXIgY3VyclZpZXdJbmRleCA9IHdpbmRvdy5fX1ZJRVdfSU5ERVg7XG5cbiAgd2luZG93Ll9fVklFV19JTkRFWCArKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgY3VyclZpZXdJbmRleCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInN1cGVydmlld1wiLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2Nyb2xsVG9JbmRleChpbmRleCl7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2Nyb2xsVG9JbmRleDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogaW5kZXgsIHR5cGU6IFwiaVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBVSVZpZXdfYm91bmRzKCkge1xuICB3aW5kb3cuX19SRUNUX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInJlY3RcIiArIHdpbmRvdy5fX1JFQ1RfSU5ERVgsXG4gICAgXCJmcm9tU3RvcmVcIjogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOlwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJib3VuZHNcIixcbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEVuYWJsZWQobW9kZSkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldEVuYWJsZWQ6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zY3JvbGxFbmFibGVkKHN0YXR1cykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFNjcm9sbEVuYWJsZWQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHN0YXR1cywgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0QXV0b0NvcnJlY3Rpb25UeXBlKG1vZGUpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRBdXRvY29ycmVjdGlvblR5cGU6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRLZXlib2FyZFR5cGUobW9kZSkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldEtleWJvYXJkVHlwZTpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcImlcIn0sXG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEF1dG9DYXBpdGFsaXphdGlvblR5cGUobW9kZSkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldEF1dG9jYXBpdGFsaXphdGlvblR5cGVzOlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogbW9kZSwgXCJ0eXBlXCI6IFwiaVwifSxcbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U3RhdHVzQmFyU3R5bGUobW9kZSkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRTdGF0dXNCYXJTdHlsZTpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcInNcIn0sXG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX2JlY29tZUZpcnN0UmVzcG9uZGVyKG1vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJmb2N1czpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldE9uSXRlbUNsaWNrKGNhbGxiYWNrKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0T25JdGVtQ2xpY2s6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7IFwibmFtZVwiOiBjYWxsYmFja01hcHBlci5tYXAoY2FsbGJhY2spLCBcInR5cGVcIjogXCJzXCIgfSxcbiAgICBdXG4gIH1cbiB9XG5cbmZ1bmN0aW9uIHRoaXNfc2V0T25Gb2N1c0NhbGxiYWNrKGNhbGxiYWNrKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0T25Gb2N1c0NhbGxiYWNrOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgeyBcIm5hbWVcIjogY2FsbGJhY2tNYXBwZXIubWFwKGNhbGxiYWNrKSwgXCJ0eXBlXCI6IFwic1wiIH0sXG4gICAgXVxuICB9XG4gfVxuXG5mdW5jdGlvbiB0aGlzX3NldE9uTWVyY2hhbnRWaWV3SGVpZ2h0Q2hhbmdlQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRPbk1lcmNoYW50Vmlld0hlaWdodENoYW5nZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHsgXCJuYW1lXCI6IGNhbGxiYWNrTWFwcGVyLm1hcChjYWxsYmFjayksIFwidHlwZVwiOiBcInNcIiB9LFxuICAgIF1cbiAgfVxuIH1cblxuZnVuY3Rpb24gdGhpc19zZXRPbihlbmFibGVkKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0T246YW5pbWF0ZWQ6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBlbmFibGVkLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgICB7XCJuYW1lXCI6IFwiMVwiLCBcInR5cGVcIjogXCJpXCJ9XG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX3Nob3dWZXJ0aWNhbFNjcm9sbEJhcihlbmFibGVkKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0U2hvd3NWZXJ0aWNhbFNjcm9sbEluZGljYXRvcjpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IGVuYWJsZWQsIFwidHlwZVwiOiBcImlcIn1cbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U2VjdXJlVGV4dEVudHJ5KGVuYWJsZWQpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRTZWN1cmVUZXh0RW50cnk6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBlbmFibGVkLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gVUlJbWFnZV9pbWFnZU5hbWVkKGltYWdlKSB7XG4gIHdpbmRvdy5fX0lNQUdFX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImltYWdlXCIgKyB3aW5kb3cuX19JTUFHRV9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiaW1hZ2VOYW1lZDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogaW1hZ2UsIFwidHlwZVwiOiBcInNcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRJbWFnZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEltYWdlOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBcImltYWdlXCIgKyB3aW5kb3cuX19JTUFHRV9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZl9yZWN0RnJvbURpY3Rpb25hcnkoeCx5LHcsaCkge1xuICB3aW5kb3cuX19SRUNUX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInJlY3RcIiArIHdpbmRvdy5fX1JFQ1RfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInJlY3RGcm9tRGljdGlvbmFyeTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcbiAgICAgICAgXCJ4XCI6IHgsXG4gICAgICAgIFwieVwiOiB5LFxuICAgICAgICBcIndpZHRoXCI6IHcsXG4gICAgICAgIFwiaGVpZ2h0XCI6IGgsXG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfdXBkYXRlTGF5b3V0UGFyYW1zKGNvbmZpZykge1xuICB2YXIgZGF0YSA9IHtcbiAgICBcIndpZHRoXCI6IGNvbmZpZy53aWR0aCxcbiAgICBcImhlaWdodFwiOiBjb25maWcuaGVpZ2h0LFxuICAgIFwibWFyZ2luXCI6IGNvbmZpZy5tYXJnaW4sXG4gICAgXCJwYWRkaW5nXCI6IGNvbmZpZy5wYWRkaW5nLFxuICAgIFwid2VpZ2h0XCI6IGNvbmZpZy53ZWlnaHQsXG4gICAgXCJncmF2aXR5XCI6IGNvbmZpZy5ncmF2aXR5LFxuICAgIFwidmlzaWJpbGl0eVwiOiBjb25maWcudmlzaWJpbGl0eSxcbiAgICBcIm9yaWVudGF0aW9uXCI6IGNvbmZpZy5vcmllbnRhdGlvbixcbiAgICBcImFsaWdubWVudF9ydWxlc1wiIDogY29uZmlnLmFsaWdubWVudF9ydWxlc1xuICAgIH1cbiAgaWYoZGF0YS5hbGlnbm1lbnRfcnVsZXMgJiYgZGF0YS5hbGlnbm1lbnRfcnVsZXMubGVuZ3RoID09IDApe1xuICAgIGRlbGV0ZSBkYXRhLmFsaWdubWVudF9ydWxlcztcbiAgfVxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwidGhpc1wiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInVwZGF0ZUxheW91dFBhcmFtczpcIixcbiAgICBcInZhbHVlc1wiOiBbe1xuICAgICAgICBcIm5hbWVcIjogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIFwidHlwZVwiOiAncydcbiAgICB9XVxuICB9O1xufVxuXG5cbmZ1bmN0aW9uIHRoaXNfc2V0UGFkZGluZyhwYWRkaW5nKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIk1KUFZpZXdBTFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UGFkZGluZ0xlZnQ6VG9wOlJpZ2h0OkJvdHRvbTpcIixcbiAgICBcInZhbHVlc1wiOiBwYWRkaW5nLnNwbGl0KCcsJykubWFwKG1ha2VVbml0KVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0TWFyZ2luKG1hcmdpbikge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJNSlBWaWV3QUxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE1hcmdpbkxlZnQ6VG9wOlJpZ2h0OkJvdHRvbTpcIixcbiAgICBcInZhbHVlc1wiOiBtYXJnaW4uc3BsaXQoJywnKS5tYXAobWFrZVVuaXQpXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZVVuaXQgKHYsaSxhcnIpIHtcbiAgcmV0dXJuIHtuYW1lIDogdisnJywgdHlwZSA6ICdmJ31cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRIZWlnaHQoaGVpZ2h0KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIk1KUFZpZXdBTFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0SGVpZ2h0OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBoZWlnaHQgKycnLCBcInR5cGVcIjogJ2knfVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFdpZHRoKHdpZHRoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIk1KUFZpZXdBTFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0V2lkdGg6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHdpZHRoICsnJywgXCJ0eXBlXCI6ICdpJ31cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRGcmFtZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRGcmFtZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCJyZWN0XCIgKyB3aW5kb3cuX19SRUNUX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiLCBcInR5cGVcIjogXCJyZWN0XCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGZfYWxpZ25Ub1BhcmVudCh0eXBlLCB2YWx1ZXMpIHtcbiAgd2luZG93Ll9fUE9JTlRfSU5ERVgrKztcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInBvaW50XCIgKyB3aW5kb3cuX19QT0lOVF9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiYWxpZ25Ub1BhcmVudDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IHR5cGUsXG4gICAgICAgIFwieFwiOiB2YWx1ZXMueCxcbiAgICAgICAgXCJ5XCI6IHZhbHVlcy55LFxuICAgICAgICBcInlPZmZzZXRcIjogdmFsdWVzLnlPZmZzZXQsXG4gICAgICAgIFwieE9mZnNldFwiOiB2YWx1ZXMueE9mZnNldCxcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDZW50ZXIoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0Q2VudGVyOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICAgIHtcIm5hbWVcIjogXCJwb2ludFwiICsgd2luZG93Ll9fUE9JTlRfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCIsICBcInR5cGVcIjogXCJwb2ludFwifVxuICAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0KHRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRUZXh0OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICAgIHtcIm5hbWVcIjogZW5jb2RlVVJJKHRleHQpLCBcInR5cGVcIjogXCJzXCJ9XG4gICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFJlZ3VsYXJFeHByZXNzaW9uKHRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UmVndWxhckV4cHJlc3Npb246XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICAgICAge1wibmFtZVwiOiB0ZXh0LCBcInR5cGVcIjogXCJzXCJ9XG4gICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFbmNvZGVkRGF0YSh0ZXh0KSB7XG4gIHZhciBlbmNvZGVkU3RyaW5nID0gdGV4dDtcbiAgaWYgKGlzTXlzdGlxdWVWZXJzaW9uR3JlYXRlclRoYW4oXCIxXCIpKSB7XG4gICAgZW5jb2RlZFN0cmluZyA9IGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfSBlbHNlIGlmIChpc015c3RpcXVlVmVyc2lvbkdyZWF0ZXJUaGFuKFwiMFwiKSkge1xuICAgIGVuY29kZWRTdHJpbmcgPSBidG9hKHRleHQucmVwbGFjZSgvW15cXHgwMC1cXHg3Rl0vZywgXCJcIikpO1xuICB9XG4gIHJldHVybiBlbmNvZGVkU3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEhUTUxUZXh0KHRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRIdG1sVGV4dDpcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7IFwibmFtZVwiOiBnZXRFbmNvZGVkRGF0YSh0ZXh0KVxuICAgICAgLCBcInR5cGVcIjogXCJzXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRQbGFjZWhvbGRlcih0ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UGxhY2Vob2xkZXI6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICAgICAge1wibmFtZVwiOiB0ZXh0LCBcInR5cGVcIjogXCJzXCJ9XG4gICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRQbGFjZWhvbGRlclByb3BlcnRpZXMoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRleHRWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0UGxhY2Vob2xkZXJQcm9wZXJ0aWVzOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IGRhdGEsIFwidHlwZVwiOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIFVJRm9udF9zeXN0ZW1Gb250T2ZTaXplKHNpemUpIHtcbiAgd2luZG93Ll9fRk9OVF9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJVSUZvbnRcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInN5c3RlbUZvbnRPZlNpemU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHNpemUsIFwidHlwZVwiOiBcImZcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gVUlGb250X2ZvbnRXaXRoTmFtZShuYW1lLCBzaXplKSB7XG4gIHdpbmRvdy5fX0ZPTlRfSU5ERVgrKztcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZvbnRcIiArIHdpbmRvdy5fX0ZPTlRfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIk1KUEZvbnRcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImZvbnRXaXRoTmFtZTpzaXplOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBuYW1lLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgICAge1wibmFtZVwiOiBzaXplLmxlbmd0aD4wP3NpemU6XCIxNFwiLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEZvbnQoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRGb250OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XG4gICAgICBcIm5hbWVcIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgICAgXCJjb21wdXRlZFwiOiBcInRydWVcIlxuICAgIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2l6ZVRvRml0KCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNpemVUb0ZpdFwiXG4gIH1cbn1cblxuZnVuY3Rpb24gVUlGb250X2JvbGRTeXN0ZW1Gb250T2ZTaXplKHNpemUpIHtcbiAgd2luZG93Ll9fRk9OVF9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJVSUZvbnRcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImJvbGRTeXN0ZW1Gb250T2ZTaXplOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBzaXplLCBcInR5cGVcIjogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIFVJRm9udF9zeXN0ZW1Gb250T2ZTaXplV2VpZ2h0KHNpemUsIHdlaWdodCkge1xuICB3aW5kb3cuX19GT05UX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZvbnRcIiArIHdpbmRvdy5fX0ZPTlRfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIlVJRm9udFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic3lzdGVtRm9udE9mU2l6ZTp3ZWlnaHQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHNpemUgLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgICAge1wibmFtZVwiOiB3ZWlnaHQgLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldExpbmVCcmVha01vZGUobW9kZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldExpbmVCcmVha01vZGU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXROdW1iZXJPZkxpbmVzKGNvdW50KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TnVtYmVyT2ZMaW5lczpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogY291bnQsIFwidHlwZVwiOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0QWxpZ25tZW50KG1vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRHcmF2aXR5OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBtb2RlICwgXCJ0eXBlXCI6IFwic1wifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFRleHRDb2xvcigpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRUZXh0Q29sb3I6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6ICdjb2xvcicgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0TGVuZ3RoTGltaXQobGVuZ3RoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0VGV4dExlbmd0aExpbWl0OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICB7XCJuYW1lXCI6IGxlbmd0aCArIFwiXCIsIFwidHlwZVwiOiBcImlcIn1cbiAgICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3JlbW92ZUNlbGwoY2VsbEluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJyZW1vdmVPYmplY3RBdEluZGV4OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICB7XCJuYW1lXCI6IGNlbGxJbmRleCArIFwiXCIsIFwidHlwZVwiOiBcImlcIn1cbiAgICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBVSUNvbG9yX2Zyb21MaXRlcmFsKGNvbG9yKSB7XG4gIHdpbmRvdy5fX0NPTE9SX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImNvbG9yXCIgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiVUlDb2xvclwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBjb2xvciArIFwiQ29sb3JcIixcbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX2xheWVyKCkge1xuICB3aW5kb3cuX19MQVlFUl9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJsYXllclwiICsgd2luZG93Ll9fTEFZRVJfSU5ERVgsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwibGF5ZXJcIixcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDb3JuZXJSYWRpdXMocmFkaXVzKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TUpQQ29ybmVyUmFkaXVzOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiByYWRpdXMgKyBcIlwiLCBcInR5cGVcIjogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEJvcmRlcldpZHRoKHdpZHRoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TUpQQm9yZGVyV2lkdGg6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHdpZHRoICsgXCJcIiwgIFwidHlwZVwiOiBcImZcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Qm9yZGVyQ29sb3IoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TUpQQm9yZGVyQ29sb3I6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwiY29sb3JcIiArIHdpbmRvdy5fX0NPTE9SX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiLCB0eXBlOiBcImNnY29sb3JcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRTaGFkb3coaWQsIHNoYWRvd09mZnNldCwgc2hhZG93Qmx1ciwgc2hhZG93U3ByZWFkLCBzaGFkb3dDb2xvciwgc2hhZG93T3BhY2l0eSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFNoYWRvdzpcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFwidmlld0lkXCI6IGlkLFxuICAgICAgICBcImNvbG9yXCI6IHNoYWRvd0NvbG9yLFxuICAgICAgICBcImJsdXJcIjogc2hhZG93Qmx1cixcbiAgICAgICAgXCJvcGFjaXR5XCI6IHNoYWRvd09wYWNpdHksXG4gICAgICAgIFwib2Zmc2V0XCI6IHNoYWRvd09mZnNldCxcbiAgICAgICAgXCJzcHJlYWRcIjogc2hhZG93U3ByZWFkXG4gICAgICAgIH0pLFxuICAgICAgICBcInR5cGVcIjogXCJzXCJcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0R3JhZGllbnQoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEdyYWRpZW50OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XG4gICAgICBcIm5hbWVcIjogZGF0YSxcbiAgICAgIFwidHlwZVwiOiBcInNcIlxuICAgIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0QmFja2dyb3VuZEltYWdlKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0QmFja2dyb3VuZEltYWdlOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XG4gICAgICBcIm5hbWVcIjogXCJpbWFnZVwiICsgd2luZG93Ll9fSU1BR0VfSU5ERVgsXG4gICAgICBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiXG4gICAgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gX1VJTGFiZWxMYXllcl9zZXRNYXNrc1RvQm91bmRzKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjpcImxheWVyXCIgKyB3aW5kb3cuX19MQVlFUl9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiX1VJTGFiZWxMYXllclwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TUpQTWFza3NUb0JvdW5kczpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCIxXCIsIHR5cGU6IFwiaVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFRhZyh0YWcpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRUYWc6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHRhZywgdHlwZTogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGZfZ2V0Vmlld0Zyb21UYWcodGFnKXtcbiAgd2luZG93Ll9fVklFV19JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJnZXRWaWV3RnJvbVRhZzpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogdGFnLCBcInR5cGVcIjogXCJzXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0SW1hZ2VVUkwoaWQsdXJsLHBsYWNlaG9sZGVyKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRJbWFnZVdpdGhVcmw6Ojo6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwiXCIgKyBpZCwgXCJ0eXBlXCI6IFwic1wifSxcbiAgICAgIHtcIm5hbWVcIjogdXJsLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgICAge1wibmFtZVwiOiBwbGFjZWhvbGRlciwgXCJ0eXBlXCI6IFwic1wifVxuICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRHaWYoaWQsIGltYWdlTmFtZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcImxvYWRHaWY6OjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogXCJcIiArIGlkLCBcInR5cGVcIjogXCJzXCIgfSwgeyBcIm5hbWVcIjogaW1hZ2VOYW1lLCBcInR5cGVcIjogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zdGFydEdpZigpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic3RhcnRHSUZcIlxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3N0b3BHaWYoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInN0b3BHSUZcIlxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxmX3NldEFscGhhKGFscGhhKXtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRBbHBoYTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogU3RyaW5nKGFscGhhKSwgdHlwZTogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0SGlkZGVuKGhpZGRlbil7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0SGlkZGVuOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiAoKGhpZGRlbiA9PT0gXCJnb25lXCIgfHwgaGlkZGVuID09PSBcImludmlzaWJsZVwiKSA/IFwiMVwiIDogXCIwXCIpLCB0eXBlOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0UHJvcGVydGllcyhkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQVGV4dFZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRUZXh0UHJvcGVydGllczpcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7XCJuYW1lXCI6IGRhdGEsXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuXG5mdW5jdGlvbiB0aGlzX3NldExldHRlclNwYWNpbmcoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUEVkaXRUZXh0XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0TGV0dGVyU3BhY2luZzpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogZGF0YSwgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0TGluZVNwYWNpbmcoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUExhYmVsXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0TGluZVNwYWNpbmc6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IGRhdGEsIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENhcmV0Q29sb3IoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0VGludENvbG9yOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiAnY29sb3InICsgd2luZG93Ll9fQ09MT1JfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zY3JvbGxUbyh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNjcm9sbFRvOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IHZhbHVlLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEV4cGFuZCh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUEV4cGFuZGFibGVDZWxsXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0RXhwYW5kOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IHZhbHVlLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEV4cGFuZER1cmF0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQRXhwYW5kYWJsZUNlbGxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRFeHBhbmREdXJhdGlvbjpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiB2YWx1ZSwgXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRFeHBhbmRBbHBoYSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUEV4cGFuZGFibGVDZWxsXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0RXhwYW5kQWxwaGE6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcIm5hbWVcIjogdmFsdWUsIFwidHlwZVwiOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U3d5cGUodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUYWJsZVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTd3lwZTpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogdmFsdWUgPyBcInRydWVcIiA6IFwiZmFsc2VcIiwgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VXNlckludGVyYWN0aW9uKGhpZGRlbil7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0VXNlckludGVyYWN0aW9uRW5hYmxlZDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogKGhpZGRlbiA9PT0gXCJ0cnVlXCIgPyBcIjFcIiA6IFwiMFwiKSwgdHlwZTogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U2VwYXJhdG9yKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0U2VwYXJhdG9yOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiB2YWx1ZSwgdHlwZTogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRTZXBhcmF0b3JSZXBlYXQodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTZXBhcmF0b3JSZXBlYXQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHZhbHVlLCB0eXBlOiBcInNcIiB9XVxuICB9O1xufVxuXG5cbmZ1bmN0aW9uIHRoaXNfc2V0U3dpcGVDYWxsYmFjayh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICAgICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgICAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICAgICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgICAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTd2lwZUNhbGxiYWNrOlwiLFxuICAgICAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogdmFsdWUsIHR5cGU6IFwic1wiIH1dXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXR1cExpc3QobGlzdERhdGEsIGxpc3RJdGVtKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBSZXBlYXRUYWJsZVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXR1cExpc3Q6OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBsaXN0RGF0YSwgdHlwZTogXCJzXCIgfSwgeyBcIm5hbWVcIjogbGlzdEl0ZW0sIHR5cGU6IFwic1wiIH1dXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19pbmxpbmVBbmltYXRpb24oY29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwidGhpc1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldElubGluZUFuaW1hdGlvbjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogbW9kaWZ5VHJhbnNsYXRpb24oY29uZmlnKSwgdHlwZTogXCJzXCIgfV1cbiAgICB9O1xufVxuXG5cbmZ1bmN0aW9uIG1vZGlmeVRyYW5zbGF0aW9uKGNvbmZpZyl7XG4gIHZhciB4ID0gY29uZmlnLnggfHwgXCIwXCI7XG4gIHZhciB5ID0gY29uZmlnLnkgfHwgXCIwXCI7XG4gIHZhciBhbmltYXRpb25BcnJheSA9IEpTT04ucGFyc2UoY29uZmlnLmlubGluZUFuaW1hdGlvbik7XG4gIHZhciBhbmltYXRpb25BcnJheSA9IGFuaW1hdGlvbkFycmF5Lm1hcChmdW5jdGlvbihhKXtcbiAgICBpZihhLmhhc093blByb3BlcnR5KFwiZnJvbVhcIikpe1xuICAgICAgYS5mcm9tWCA9IHBhcnNlSW50KGEuZnJvbVgpICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICAgIGlmKCFhLmhhc093blByb3BlcnR5KFwidG9YXCIpKXtcbiAgICAgICAgYS50b1ggPSAwICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcInRvWFwiKSl7XG4gICAgICBhLnRvWCA9IHBhcnNlSW50KGEudG9YKSArIHBhcnNlSW50KHgpICsgJyc7XG4gICAgfVxuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJmcm9tWVwiKSl7XG4gICAgICBhLmZyb21ZID0gcGFyc2VJbnQoYS5mcm9tWSkgKyBwYXJzZUludCh5KSArICcnO1xuICAgICAgaWYoIWEuaGFzT3duUHJvcGVydHkoXCJ0b1lcIikpe1xuICAgICAgICBhLnRvWSA9IDAgKyBwYXJzZUludCh5KSArICcnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihhLmhhc093blByb3BlcnR5KFwidG9ZXCIpKXtcbiAgICAgIGEudG9ZID0gcGFyc2VJbnQoYS50b1kpICsgcGFyc2VJbnQoeSkgKyAnJztcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH0pXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhbmltYXRpb25BcnJheSk7XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0Q2xvc2VTd2lwZSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICAgICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgICAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICAgICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgICAgICBcIm1ldGhvZE5hbWVcIjogXCJjbG9zZVN3aXBlOlwiLFxuICAgICAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogdmFsdWUgPyBcInRydWVcIiA6IFwiZmFsc2VcIiwgdHlwZTogXCJzXCIgfV1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEVuYWJsZVN3eXBlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgICAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgICAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQVGFibGVWaWV3XCIsXG4gICAgICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFN3aXBlRW5hYmxlZDpcIixcbiAgICAgICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHZhbHVlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIsIHR5cGU6IFwic1wiIH1dXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19icmluZ1N1YlZpZXdUb0Zyb250KHBhcmFtcyl7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJicmluZ1N1YlZpZXdUb0Zyb250OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IHBhcmFtcywgdHlwZTogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENvbnRlbnRNb2RlKG1vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRDb250ZW50TW9kZTpcIixcbiAgICBcInZhbHVlc1wiOlt7XCJuYW1lXCI6IG1vZGUsIHR5cGU6IFwiaVwifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19hZGp1c3RWaWV3V2l0aEtleWJvYXJkKHN0YXR1cykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEFkanVzdFZpZXdXaXRoS2V5Ym9hcmQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbe1wibmFtZVwiOiBzdGF0dXMsIHR5cGU6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VsZl9zZXRQb3B1cE1lbnUocG9wdXBNZW51LCBvbk1lbnVJdGVtQ2xpY2spIHtcbiAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tNYXBwZXIubWFwKG9uTWVudUl0ZW1DbGljayk7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwiY3JlYXRlQWN0aW9uU2hlZXRXaXRoVGl0bGVzOjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogcG9wdXBNZW51LCBcInR5cGVcIjogXCJzXCIgfSwgeyBcIm5hbWVcIjogY2FsbGJhY2ssIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENvcm5lckN1cnZlcyhjb3JuZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogXCJmYWxzZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJ0aGlzXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0Q29ybmVyQ3VydmVzOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBjb3JuZXIgKyBcIlwiLCBcInR5cGVcIjogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDbGlwc1RvQm91bmRzKGJvdW5kcykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldENsaXBzVG9Cb3VuZHM6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IGJvdW5kcyA/IFwiMVwiIDogXCIwXCIsIHR5cGU6IFwiaVwiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfZm9udFdpdGhOYW1lKG5hbWUpIHtcbiAgd2luZG93Ll9fRk9OVF9JTkRFWCsrO1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZm9udFwiICsgd2luZG93Ll9fRk9OVF9JTkRFWCxcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiZm9udFdpdGhOYW1lOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBuYW1lLCBcInR5cGVcIjogXCJzXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIFVJQ29sb3Jfc2V0Q29sb3IoY29sb3IpIHtcbiAgbGV0IHZhbHVlcztcbiAgbGV0IGFscGhhID0gXCIxLjAwXCI7XG5cbiAgaWYgKGNvbG9yLmxlbmd0aCA+PSA4KSB7XG4gICAgYWxwaGEgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwzKSwgMTYpO1xuICAgIGFscGhhID0gKGFscGhhLzI1NSkudG9GaXhlZCgyKTtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygzLCA5KTtcbiAgfSBlbHNlIHtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygxLCBjb2xvci5sZW5ndGgpO1xuICB9XG5cbiAgY29sb3IgPSBjb252ZXJ0SGV4VG9SZ2IocldTKGNvbG9yKSk7XG4gIHZhbHVlcyA9IGNvbG9yLnNwbGl0KCcsJyk7XG5cbiAgbGV0IHIgPSByV1ModmFsdWVzWzBdKTtcbiAgbGV0IGcgPSByV1ModmFsdWVzWzFdKTtcbiAgbGV0IGIgPSByV1ModmFsdWVzWzJdKTtcbiAgbGV0IGEgPSBhbHBoYTtcblxuXG4gIHJldHVybiBVSUNvbG9yX2NvbG9yV2l0aFJHQkEociwgZywgYiwgYSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUtleXMoY29uZmlnKSB7XG4gIHZhciBrZXlzID0gIE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gIGZvciAodmFyIGkgPSAwOyBpPGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZ1trZXlzW2ldXSA9PSBcInVuZGVmaW5lZFwiIHx8IGNvbmZpZ1trZXlzW2ldXSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgY29uZmlnW2tleXNbaV1dO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZ1trZXlzW2ldXSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbmZpZ1trZXlzW2ldXSA9IGNhbGxiYWNrTWFwcGVyLm1hcChjb25maWdba2V5c1tpXV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoa2V5c1tpXSAhPT0gXCJpZFwiICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJfX2ZpbGVuYW1lXCIgJiZcbiAgICAgICAgICBrZXlzW2ldICE9PSBcImN1cnJDaGlsZE9mZnNldFwiICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJtZXRob2RzXCIgICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJzd2lwZUVuYWJsZVwiICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJ2aWV3UGFnZXJcIiAmJlxuICAgICAgICAgIGtleXNbaV0gIT09IFwidGFibGVWaWV3XCIpIHtcblxuICAgICAgICBkZWxldGUgY29uZmlnW2tleXNbaV1dO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVHlwZSh0eXBlLCBjb25maWcpIHtcbiAgdmFyIG1vZGlmaWVkVHlwZSAgPSBcIm1KUFZpZXdcIjtcbiAgc3dpdGNoKHR5cGUpe1xuICAgIGNhc2UgXCJlZGl0VGV4dFwiOntcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQRWRpdFRleHRcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImltYWdlVmlld1wiOntcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQSW1hZ2VWaWV3XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0ZXh0Vmlld1wiOntcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQVGV4dFZpZXdcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInNjcm9sbFZpZXdcIjoge1xuICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KCdoZWlnaHQnKSYmIGNvbmZpZy5oZWlnaHQgPT0gJ3dyYXBfY29udGVudCcpe1xuICAgICAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTY3JvbGxWaWV3XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFNjcm9sbFZpZXdcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcub3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIjoge1xuICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KCd3aWR0aCcpJiYgY29uZmlnLndpZHRoID09ICd3cmFwX2NvbnRlbnQnKXtcbiAgICAgICAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQU2Nyb2xsVmlld1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTY3JvbGxWaWV3XCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwidGFibGVWaWV3XCI6XG4gICAgY2FzZSBcImxpc3RWaWV3XCI6IHtcbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJsaXN0RGF0YVwiKSAmJiBjb25maWcuaGFzT3duUHJvcGVydHkoXCJsaXN0SXRlbVwiKSkge1xuICAgICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFJlcGVhdFRhYmxlVmlld1wiO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBUYWJsZVZpZXdcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImNvbGxlY3Rpb25WaWV3XCI6XG4gICAgY2FzZSBcInZpZXdQYWdlclwiOntcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQQ29sbGVjdGlvblZpZXdcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInByb2dyZXNzQmFyXCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQQWN0aXZpdHlJbmRpY2F0b3JcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInN3aXRjaFwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFN3aXRjaFwiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwic3d5cGVMYXlvdXRcIjoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTd3lwZUxheW91dENlbGxcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImFjY29yZGlvbkxheW91dFwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUEV4cGFuZGFibGVDZWxsXCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsaW5lYXJMYXlvdXRcIjoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBMaW5lYXJMYXlvdXRcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInJlbGF0aXZlTGF5b3V0XCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQUmVsYXRpdmVMYXlvdXRcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImZyYW1lTGF5b3V0XCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQUmVsYXRpdmVMYXlvdXRcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgZGVmYXVsdDoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBWaWV3XCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBtb2RpZmllZFR5cGU7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUtleXMoY29uZmlnLCB0eXBlKSB7XG4gIHZhciBtYXAgPSB7XG4gICAgXCJpbWFnZVVybFwiOiBcImltYWdlTmFtZWRcIixcbiAgICBcInBhY2thZ2VJY29uXCIgOiBcImltYWdlTmFtZWRcIixcbiAgICBcImNvbG9yXCI6IFwidGV4dENvbG9yXCJcbiAgfTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG5cbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAobWFwW2tleV0pIHtcbiAgICAgIGNvbmZpZ1ttYXBba2V5XV0gPSBjb25maWdba2V5XTtcbiAgICAgIGRlbGV0ZSBjb25maWdba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChjb25maWcuc3Ryb2tlKSAge1xuICAgIGNvbmZpZy5ib3JkZXJXaWR0aCA9IGNvbmZpZy5zdHJva2Uuc3BsaXQoXCIsXCIpWzBdO1xuICAgIGNvbmZpZy5ib3JkZXJDb2xvciA9IGNvbmZpZy5zdHJva2Uuc3BsaXQoXCIsXCIpWzFdO1xuICB9XG5cbiAgLy8gQWRkIGFsbCB2aWV3IGJhc2VkIHByb3AgaW5qZWN0aW9ucyBiZWxvdy5cbiAgc3dpdGNoICh0eXBlLnRvTG93ZXJDYXNlKCkpe1xuICAgIGNhc2UgXCJzY3JvbGx2aWV3XCI6e1xuICAgICAgY29uZmlnLm9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiXG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJob3Jpem9udGFsc2Nyb2xsdmlld1wiOntcbiAgICAgIGNvbmZpZy5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiXG4gICAgfVxuICAgIGJyZWFrO1xuICB9XG4gIC8vIEFkZCBhbGwgdmlldyBiYXNlZCBwcm9wIGluamVjdGlvbnMgYWJvdmUuXG4gIHJldHVybiBjb25maWc7XG59XG5cblxuLy8gY1MgLSBjb252ZXJ0IHRvIFN0cmluZ1xuLy8gcldTIC0gcmVtb3ZlIHdoaXRlIHNwYWNlc1xuLy8gZnJvbVN0b3JlIG1ldGhvZHMgZG9udCAgdXNlIGludm9rZU9uXG4vLyB0aGUgZXh0cmFjdCBjbGFzc05hbWUgb3V0IG9mIHRoZSBzdG9yZWQgb2JqZWN0IGluIHRoZSBzdG9yZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0eXBlLCBjb25maWcsIF9nZXRTZXRUeXBlKSB7XG4gIGNvbmZpZyA9IGNoYW5nZUtleXMoZmxhdHRlbk9iamVjdChjb25maWcpLCB0eXBlKTtcbiAgdHlwZSA9IGdlbmVyYXRlVHlwZSh0eXBlLCBjb25maWcpO1xuICBnZXRTZXRUeXBlID0gKF9nZXRTZXRUeXBlID09IFwic2V0XCIpPzE6MDtcbiAgY29uZmlnLm1ldGhvZHMgPSBbXTtcbiAgY29uZmlnLmFsaWdubWVudF9ydWxlcyA9IFtdO1xuXG4gIC8vIHRhZyBzZXRcbiAgaWYgKGNvbmZpZy5pZCkgIHtcbiAgICBsZXQgdGFnID0gIHJXUyhjUyhjb25maWcuaWQpKTtcblxuICAgIGlmICghZ2V0U2V0VHlwZSkge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX2dldFZpZXdGcm9tVGFnKHRhZykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VGFnKHRhZykpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZyYW1lXG4gIGlmICghY29uZmlnLnVzZUNvbnN0cmFpdHMgJiYgKGNvbmZpZy54IHx8IGNvbmZpZy55IHx8IGNvbmZpZy53IHx8IGNvbmZpZy5oKSkge1xuICAgIGxldCB4ID0gcldTKGNTKGNvbmZpZy54KSkgfHwgIFwiMFwiO1xuICAgIGxldCB5ID0gIHJXUyhjUyhjb25maWcueSkpfHwgXCIwXCI7XG4gICAgbGV0IHdpZHRoID0gcldTKGNTKGNvbmZpZy53KSkgfHwgXCIwXCI7XG4gICAgbGV0IGhlaWdodCA9IHJXUyhjUyhjb25maWcuaCkpIHx8IFwiMFwiO1xuXG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX3JlY3RGcm9tRGljdGlvbmFyeSh4LHksd2lkdGgsaGVpZ2h0KSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEZyYW1lKCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInVzZUNvbnN0cmFpdHNcIikgJiYgY29uZmlnLnVzZUNvbnN0cmFpdHMgJiYgY29uZmlnLmhhc093blByb3BlcnR5KFwiZXhwYW5kXCIpKXtcbiAgICBjb25maWcudmlzaWJpbGl0eSA9IGNvbmZpZy5leHBhbmQgPyAoY29uZmlnLnZpc2liaWxpdHkgPyBjb25maWcudmlzaWJpbGl0eSA6IFwidmlzaWJsZVwiKSA6IFwiZ29uZVwiO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImFsaWduUGFyZW50Qm90dG9tXCIpICYmIGNvbmZpZy5hbGlnblBhcmVudEJvdHRvbSA9PSBcInRydWUsLTFcIil7XG4gICAgY29uZmlnLmFsaWdubWVudF9ydWxlcy5wdXNoKCdhbGlnbl9wYXJlbnRfYm90dG9tJyk7XG4gIH1cblxuICBpZiAoY29uZmlnLnVzZUNvbnN0cmFpdHMpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfdXBkYXRlTGF5b3V0UGFyYW1zKGNvbmZpZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxldHRlclNwYWNpbmdcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0TGV0dGVyU3BhY2luZyhjb25maWcubGV0dGVyU3BhY2luZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxpbmVTcGFjaW5nXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldExpbmVTcGFjaW5nKGNvbmZpZy5saW5lU3BhY2luZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNhcmV0Q29sb3JcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJQ29sb3Jfc2V0Q29sb3IoY29uZmlnLmNhcmV0Q29sb3IpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Q2FyZXRDb2xvcigpKTtcbiAgfVxuXG4gIC8vIGJhY2tncm91bmRcbiAgaWYgKGNvbmZpZy5iYWNrZ3JvdW5kIHx8IGNvbmZpZy5ncmFkaWVudCB8fCBjb25maWcuYmFja2dyb3VuZERyYXdhYmxlKSB7XG4gICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImdyYWRpZW50XCIpKSB7XG4gICAgICB2YXIgZ3JhZGllbnQgPSBKU09OLnBhcnNlKGNvbmZpZy5ncmFkaWVudCk7XG4gICAgICB2YXIgZ3JhZGllbnRUeXBlID0gZ3JhZGllbnQudHlwZTtcbiAgICAgIHZhciBncmFkaWVudEFuZ2xlID0gZ3JhZGllbnQuYW5nbGU7XG4gICAgICB2YXIgY29sb3VycyA9IFtdO1xuXG4gICAgICBncmFkaWVudC52YWx1ZXMuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICAgIGNvbG91cnMucHVzaChjb252ZXJ0Q29sb3JUb1JnYmEoY29sb3IpKTtcbiAgICAgIH0pO1xuXG4gICAgICBncmFkaWVudCA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29sb3JzOiBjb2xvdXJzLFxuICAgICAgICB0eXBlOiBncmFkaWVudFR5cGUsXG4gICAgICAgIGFuZ2xlOiBncmFkaWVudEFuZ2xlXG4gICAgICB9KTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRHcmFkaWVudChncmFkaWVudCkpO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYmFja2dyb3VuZERyYXdhYmxlXCIpKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJSW1hZ2VfaW1hZ2VOYW1lZChjb25maWcuYmFja2dyb3VuZERyYXdhYmxlKSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0QmFja2dyb3VuZEltYWdlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJQ29sb3Jfc2V0Q29sb3IoY29uZmlnLmJhY2tncm91bmQpKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRCYWNrZ3JvdW5kQ29sb3IoKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gYm9yZGVyQ29sb3IsIHJhZGl1cyBhbmQgd2lkdGhcbiAgLy8gd2lsbCB3b3JrIG9ubHkgZm9yIHVpVmlldyBhbmQgdWlMYWJlbFxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY29ybmVyUmFkaXVzXCIpKSB7XG4gICAgbGV0IGFyZyA9IHJXUyhjUyhjb25maWcuY29ybmVyUmFkaXVzKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZXRDb3JuZXJSYWRpdXMoYXJnKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYm9yZGVyV2lkdGhcIikpIHtcbiAgICBsZXQgYXJnID0gcldTKGNTKGNvbmZpZy5ib3JkZXJXaWR0aCkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2V0Qm9yZGVyV2lkdGgoYXJnKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYm9yZGVyQ29sb3JcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJQ29sb3Jfc2V0Q29sb3IoY29uZmlnLmJvcmRlckNvbG9yKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZXRCb3JkZXJDb2xvcigpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuZGVidWcpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfbGF5ZXIoKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZXRCb3JkZXJXaWR0aChcIjFcIikpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zaGFkb3cpIHtcbiAgICB2YXIgc2hhZG93VmFsdWVzID0gY29uZmlnLnNoYWRvdy5zcGxpdCgnLCcpO1xuICAgIHZhciBzaGFkb3dCbHVyID0gcldTKGNTKHNoYWRvd1ZhbHVlc1syXSkpO1xuICAgIHZhciBzaGFkb3dTcHJlYWQgPSByV1MoY1Moc2hhZG93VmFsdWVzWzNdKSk7XG4gICAgdmFyIHNoYWRvd09wYWNpdHkgPSByV1MoY1Moc2hhZG93VmFsdWVzWzVdKSk7XG4gICAgdmFyIHNoYWRvd09mZnNldCA9IHtcbiAgICAgIHg6IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMF0pKSxcbiAgICAgIHk6IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMV0pKVxuICAgIH07XG5cbiAgICB2YXIgc2hhZG93Q29sb3IgPSBjb252ZXJ0Q29sb3JUb1JnYmEoc2hhZG93VmFsdWVzWzRdKTtcblxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTaGFkb3coY29uZmlnLmlkLCBzaGFkb3dPZmZzZXQsIHNoYWRvd0JsdXIsIHNoYWRvd1NwcmVhZCwgc2hhZG93Q29sb3IsIHNoYWRvd09wYWNpdHkpKTtcbiAgfVxuXG4gIC8vIG1ha2UgY2hpbGQgZnVsbFdpZHRoIGFuZCBoZWlnaHQgb2YgcGFyZW50XG4gIGlmIChjb25maWcuZmlsbFBhcmVudCkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zdXBlcnZpZXcoKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChVSVZpZXdfYm91bmRzKCkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRGcmFtZSgpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJpbWFnZU5hbWVkXCIpKSB7XG4gICAgbGV0IGlkID0gY1MoY29uZmlnLmlkKTtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSBjb25maWcucGxhY2VIb2xkZXIgfHwgXCJcIjtcbiAgICBpZiAoY29uZmlnLmltYWdlTmFtZWQuZW5kc1dpdGgoXCIuZ2lmXCIpKXtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRHaWYoaWQsIGNvbmZpZy5pbWFnZU5hbWVkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRJbWFnZVVSTChpZCwgY29uZmlnLmltYWdlTmFtZWQsIHBsYWNlaG9sZGVyKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImFkanVzdFZpZXdXaXRoS2V5Ym9hcmRcIikpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19hZGp1c3RWaWV3V2l0aEtleWJvYXJkKGNvbmZpZy5hZGp1c3RWaWV3V2l0aEtleWJvYXJkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwicGxheUdpZlwiKSl7XG4gICAgaWYgKGNvbmZpZy5wbGF5R2lmKVxuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3N0YXJ0R2lmKCkpO1xuICAgIGVsc2VcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zdG9wR2lmKCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oaW50KSB7XG4gICAgaWYgKGNvbmZpZy5sZXR0ZXJTcGFjaW5nKSB7XG4gICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgJ2hpbnQnOiBjUyhjb25maWcuaGludCksXG4gICAgICAgICdsZXR0ZXJTcGFjaW5nJzogY29uZmlnLmxldHRlclNwYWNpbmdcbiAgICAgIH0pO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFBsYWNlaG9sZGVyUHJvcGVydGllcyhkYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRQbGFjZWhvbGRlcihjUyhjb25maWcuaGludCkpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic2VwYXJhdG9yXCIpKSB7XG4gICAgdmFyIF9lbmFibGVkNiA9IGNTKGNvbmZpZy5zZXBhcmF0b3IpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTZXBhcmF0b3IoX2VuYWJsZWQ2KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic2VwYXJhdG9yUmVwZWF0XCIpKSB7XG4gICAgdmFyIF9lbmFibGVkNiA9IGNTKGNvbmZpZy5zZXBhcmF0b3JSZXBlYXQpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTZXBhcmF0b3JSZXBlYXQoX2VuYWJsZWQ2KSk7XG4gIH1cblxuICAgaWYgKGNvbmZpZy50cmFuc2xhdGlvblope1xuICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VHJhbnNsYXRpb25aKGNTKGNvbmZpZy50cmFuc2xhdGlvblopKSk7XG4gICB9XG5cbiAgaWYgKGNvbmZpZy5zY3JvbGxUbykge1xuICAgIHZhciBkYXRhID0gY29uZmlnLnNjcm9sbFRvLnNwbGl0KFwiLFwiKTtcbiAgICB2YXIgcGFyc2VkRGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcInhcIjogZGF0YVswXSwgXCJ5XCI6IGRhdGFbMV19KTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2Nyb2xsVG8oY1MocGFyc2VkRGF0YSkpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJleHBhbmRcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RXhwYW5kKGNvbmZpZy5leHBhbmQ/XCIxXCI6XCIwXCIpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJleHBhbmREdXJhdGlvblwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRFeHBhbmREdXJhdGlvbihjUyhjb25maWcuZXhwYW5kRHVyYXRpb24pKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZXhwYW5kQWxwaGFcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RXhwYW5kQWxwaGEoY1MoY29uZmlnLmV4cGFuZEFscGhhKSkpO1xuICB9XG5cbiAgLy9VcGRhdGVkIHRvIGhhbmRsZSAwIGJlaW5nIHBhc3NlZCBmb3IgZGVmYXVsdCBhbGlnbm1lbnRcbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInRleHRBbGlnbm1lbnRcIikpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUZXh0QWxpZ25tZW50KHJXUyhjUyhjb25maWcudGV4dEFsaWdubWVudCkpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dEZyb21IdG1sXCIpKSB7XG4gICAgICB2YXIgbW9kaWZpZWRIdG1sU3RyaW5nID0gXCI8c3BhbiBzdHlsZT1cXFwiXCJcbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJmb250U3R5bGVcIikpIHtcbiAgICAgICAgICBtb2RpZmllZEh0bWxTdHJpbmcgKz0gXCJmb250LWZhbWlseTpcIitjb25maWcuZm9udFN0eWxlK1wiO1wiXG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dFNpemVcIikpIHtcbiAgICAgICAgICBtb2RpZmllZEh0bWxTdHJpbmcgKz0gXCJmb250LXNpemU6XCIrY29uZmlnLnRleHRTaXplK1wiO1wiXG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dENvbG9yXCIpKSB7XG4gICAgICAgICAgbW9kaWZpZWRIdG1sU3RyaW5nICs9IFwiY29sb3I6XCIrY29uZmlnLnRleHRDb2xvcitcIjtcIlxuICAgICAgfVxuICAgICAgbW9kaWZpZWRIdG1sU3RyaW5nICs9XCJcXFwiPlwiK2NvbmZpZy50ZXh0RnJvbUh0bWwrXCI8L3NwYW4+XCI7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0SFRNTFRleHQobW9kaWZpZWRIdG1sU3RyaW5nKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnRleHRDb2xvcikge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlDb2xvcl9zZXRDb2xvcihjb25maWcudGV4dENvbG9yKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRleHRDb2xvcigpKTtcbiAgfVxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZm9udFN0eWxlXCIpKSB7XG4gICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInRleHRTaXplXCIpKSB7XG4gICAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlGb250X2ZvbnRXaXRoTmFtZShjb25maWcuZm9udFN0eWxlLCBjb25maWcudGV4dFNpemUrXCJcIikpO1xuICAgIH0gZWxzZXtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19mb250V2l0aE5hbWUoY29uZmlnLmZvbnRTdHlsZSkpO1xuICAgIH1cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Rm9udCgpKTtcbiAgfSBlbHNlIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ0ZXh0U2l6ZVwiKSl7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUZvbnRfc3lzdGVtRm9udE9mU2l6ZShjb25maWcudGV4dFNpemUrXCJcIikpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRGb250KCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zY3JvbGxFbmFibGVkKXtcbiAgICB2YXIgc2Nyb2xsRW5hYmxlZCA9IGNTKGNvbmZpZy5zY3JvbGxFbmFibGVkKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2Nyb2xsRW5hYmxlZChzY3JvbGxFbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmZvbnRGYW1pbHkpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJRm9udF9zeXN0ZW1Gb250T2ZTaXplV2VpZ2h0KChjb25maWcudGV4dFNpemUgfHwgXCIxNFwiKSArIFwiXCIsIGNvbmZpZy5mb250RmFtaWx5IHx8IFwiMC4wXCIpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Rm9udCgpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJzaW5nbGVMaW5lXCIpKSB7XG4gICAgaWYoIWNvbmZpZy5zaW5nbGVMaW5lKXtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRMaW5lQnJlYWtNb2RlKFwiMFwiKSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0TnVtYmVyT2ZMaW5lcyhcIjBcIikpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZmlnLnVzZUNvbnN0cmFpdHMgJiYgY29uZmlnLnZpc2liaWxpdHkpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0SGlkZGVuKGNvbmZpZy52aXNpYmlsaXR5KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY2xpY2thYmxlXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFVzZXJJbnRlcmFjdGlvbihyV1MoY1MoY29uZmlnLmNsaWNrYWJsZSkpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnRyYW5zbGF0aW9uWCkge1xuICAgIGxldCBwcm9wcyA9IFt7XG4gICAgICAnaWQnOiAnJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKSxcbiAgICAgICd0eXBlJzogJ3RyYW5zbGF0aW9uJyxcbiAgICAgICdydW5PblJlbmRlcicgOiAndHJ1ZScsXG4gICAgICAnZWFzaW5nJyA6ICdsaW5lYXInLFxuICAgICAgJ2RlbGF5JzogJzAnLFxuICAgICAgJ2R1cmF0aW9uJzogJzEnLFxuICAgICAgJ3Byb3BzJyA6IEpTT04uc3RyaW5naWZ5KFt7J3RvJzogJycgKyBjb25maWcudHJhbnNsYXRpb25YLCAncHJvcCc6J3RyYW5zbGF0aW9uWCcsICdmcm9tJzonMCd9XSlcbiAgICB9XTtcblxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9hbmltYXRlKHsnaWQnOicnK2NvbmZpZy5pZCwnanNvbic6SlNPTi5zdHJpbmdpZnkocHJvcHMpfSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy50cmFuc2xhdGlvblkpIHtcbiAgICBsZXQgcHJvcHMgPSBbe1xuICAgICAgJ2lkJzogJycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiksXG4gICAgICAndHlwZSc6ICd0cmFuc2xhdGlvbicsXG4gICAgICAncnVuT25SZW5kZXInIDogJ3RydWUnLFxuICAgICAgJ2Vhc2luZycgOiAnbGluZWFyJyxcbiAgICAgICdkZWxheSc6ICcwJyxcbiAgICAgICdkdXJhdGlvbic6ICcxJyxcbiAgICAgICdwcm9wcycgOiBKU09OLnN0cmluZ2lmeShbeyd0byc6ICcnICsgY29uZmlnLnRyYW5zbGF0aW9uWSwncHJvcCc6J3RyYW5zbGF0aW9uWScsJ2Zyb20nOicwJ31dKVxuICAgIH1dO1xuXG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX2FuaW1hdGUoeydpZCc6JycrY29uZmlnLmlkLCdqc29uJzpKU09OLnN0cmluZ2lmeShwcm9wcyl9KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmFfcm90YXRlKSB7XG4gICAgLy9UT0RPOiBGSVggVEhJUyBCUklORyBJVCBPVVRTSURFXG4gICAgbGV0IHByb3BzID0ge1xuICAgICAgICBcImR1cmF0aW9uXCI6IGNvbmZpZy5hX2R1cmF0aW9uLFxuICAgICAgICBcImlkXCI6IGNvbmZpZy5pZCxcbiAgICAgICAgXCJkZWxheVwiOiBjb25maWcuYV9kZWxheSxcbiAgICAgICAgXCJvcHRpb25cIjogY29uZmlnLmFfb3B0aW9uLFxuICAgICAgICBcInR5cGVcIjogXCJyb3RhdGlvblwiLFxuICAgICB9O1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX2FuaW1hdGUocHJvcHMpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJodG1sVGV4dFwiKSkge1xuICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0SFRNTFRleHQoY29uZmlnLmh0bWxUZXh0KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYnJpbmdTdWJWaWV3VG9Gcm9udFwiKSkge1xuICAgIGxldCB2aWV3VGFnID0gY1MoY29uZmlnLmlkKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfYnJpbmdTdWJWaWV3VG9Gcm9udCh2aWV3VGFnKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY29udGVudE1vZGVcIikpIHtcbiAgICBsZXQgY29udGVudE1vZGUgPSBjUyhjb25maWcuY29udGVudE1vZGUpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRDb250ZW50TW9kZShjb250ZW50TW9kZSkpO1xuICB9XG5cbiAgaWYoY29uZmlnLm9uRm9jdXMpe1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRPbkZvY3VzQ2FsbGJhY2soY29uZmlnLm9uRm9jdXMpKTtcbiAgfVxuXG4gIGlmKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcIm9uTWVyY2hhbnRWaWV3SGVpZ2h0Q2hhbmdlXCIpKXtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0T25NZXJjaGFudFZpZXdIZWlnaHRDaGFuZ2VDYWxsYmFjayhjb25maWcub25NZXJjaGFudFZpZXdIZWlnaHRDaGFuZ2UpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJwaXZvdFhcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfcGl2b3RYKGNvbmZpZy5waXZvdFgrXCJcIikpO1xuICB9XG5cbmlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJwaXZvdFlcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfcGl2b3RZKGNvbmZpZy5waXZvdFkrXCJcIikpO1xuICB9XG5cbiAgaWYoY29uZmlnLmhhc093blByb3BlcnR5KFwib25JdGVtQ2xpY2tcIikpe1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRPbkl0ZW1DbGljayhjb25maWcub25JdGVtQ2xpY2spKTtcbiAgfVxuXG5cbiAgaWYgKGNvbmZpZy5zdGF0dXNCYXJTdHlsZSkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLnN0YXR1c0JhclN0eWxlKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTdGF0dXNCYXJTdHlsZShlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZW5hYmxlZFwiKSkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLmVuYWJsZWQpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEVuYWJsZWQoZW5hYmxlZCkpO1xuICB9XG5cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiaW5wdXRUeXBlSVwiKSkge1xuICAgICAgbGV0IGtleWJvYXJkVHlwZSA9IGNTKGNvbmZpZy5pbnB1dFR5cGVJKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRLZXlib2FyZFR5cGUoa2V5Ym9hcmRUeXBlKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmlucHV0VHlwZSkge1xuICAgIGxldCBrZXlib2FyZFR5cGUgPSBjb25maWcuaW5wdXRUeXBlO1xuICAgIGlmIChrZXlib2FyZFR5cGUgPT0gXCJudW1lcmljXCIgfHwga2V5Ym9hcmRUeXBlID09IFwibnVtZXJpY1dpdGhvdXRTdWdnZXN0aW9uXCIpIHtcbiAgICAgIGNvbmZpZy5pbnB1dFR5cGUgPSA0O1xuICAgIH0gZWxzZSBpZiAoa2V5Ym9hcmRUeXBlID09IFwiZW1haWxcIikge1xuICAgICAgY29uZmlnLmlucHV0VHlwZSA9IDc7XG4gICAgfSBlbHNlIGlmIChrZXlib2FyZFR5cGUgPT0gXCJudW1lcmljUGFzc3dvcmRcIikge1xuICAgICAgY29uZmlnLmlucHV0VHlwZSA9IDQ7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U2VjdXJlVGV4dEVudHJ5KFwiMVwiKSk7XG4gICAgfSBlbHNlIGlmIChrZXlib2FyZFR5cGUgPT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICBjb25maWcuaW5wdXRUeXBlID0gMDtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTZWN1cmVUZXh0RW50cnkoXCIxXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLmlucHV0VHlwZSA9IDA7XG4gICAgfVxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRLZXlib2FyZFR5cGUoY1MoY29uZmlnLmlucHV0VHlwZSkpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJhdXRvQ2FwaXRhbGl6YXRpb25UeXBlXCIpKSB7XG4gICAgICBsZXQga2V5Ym9hcmRUeXBlID0gY1MoY29uZmlnLmF1dG9DYXBpdGFsaXphdGlvblR5cGUpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEF1dG9DYXBpdGFsaXphdGlvblR5cGUoa2V5Ym9hcmRUeXBlKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYXV0b0NvcnJlY3Rpb25UeXBlXCIpKSB7XG4gICAgbGV0IGF1dG9Db3JyZWN0aW9uVHlwZSA9IGNTKGNvbmZpZy5hdXRvQ29ycmVjdGlvblR5cGUpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEF1dG9Db3JyZWN0aW9uVHlwZShhdXRvQ29ycmVjdGlvblR5cGUpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJiZWNvbWVGaXJzdFJlc3BvbmRlclwiKSkge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX2JlY29tZUZpcnN0UmVzcG9uZGVyKCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInNldE9uXCIpKSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcuc2V0T24pO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldE9uKGVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2Nyb2xsVG9JbmRleCkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLnNjcm9sbFRvSW5kZXgpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Njcm9sbFRvSW5kZXgoZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zaG93VmVydGljYWxTY3JvbGxCYXIpIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5zaG93VmVydGljYWxTY3JvbGxCYXIpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Nob3dWZXJ0aWNhbFNjcm9sbEJhcihlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmxlbmd0aExpbWl0KSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcubGVuZ3RoTGltaXQpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRleHRMZW5ndGhMaW1pdChlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic3d5cGVFbmFibGVkXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFN3eXBlKGNvbmZpZy5zd3lwZUVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJmb2N1c1wiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19iZWNvbWVGaXJzdFJlc3BvbmRlcihjUyhjb25maWcuZm9jdXMpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnBhdHRlcm4pIHtcbiAgICB2YXIgcGF0U3RyID0gY1MoY29uZmlnLnBhdHRlcm4pO1xuICAgIHZhciBwYXRBcnIgPSBwYXRTdHIuc3BsaXQoXCIsXCIpO1xuICAgIHZhciBwYXRMZW4gPSBwYXRBcnJbcGF0QXJyLmxlbmd0aCAtIDFdO1xuICAgIHBhdFN0ciA9IHBhdEFyci5zbGljZSgwLCBwYXRBcnIubGVuZ3RoIC0gMSkuam9pbihcIixcIik7XG5cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0UmVndWxhckV4cHJlc3Npb24oY1MocGF0U3RyKSkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUZXh0TGVuZ3RoTGltaXQoY1MocGF0TGVuKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5yZWdFeHApIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5yZWdFeHApO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFJlZ3VsYXJFeHByZXNzaW9uKGVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcucmVtb3ZlQ2VsbCkge1xuICAgIGxldCBjZWxsSW5kZXggPSBjUyhjb25maWcucmVtb3ZlQ2VsbCk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfcmVtb3ZlQ2VsbChjZWxsSW5kZXgpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2VjdXJlVGV4dEVudHJ5KSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcuc2VjdXJlVGV4dEVudHJ5KTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTZWN1cmVUZXh0RW50cnkoZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnY2hlY2tlZCcpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldE9uKGNvbmZpZy5jaGVja2VkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnBvcHVwTWVudSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9zZXRQb3B1cE1lbnUoY29uZmlnLnBvcHVwTWVudSwgY29uZmlnLm9uTWVudUl0ZW1DbGljaykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImFscGhhXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX3NldEFscGhhKGNvbmZpZy5hbHBoYSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5hbmltYXRpb24pIHtcbiAgICBsZXQgYW5pbVByb3BzID0ge1xuICAgICAgdmlld1RhZzogJycgKyBjb25maWcuaWQsXG4gICAgICBqc29uOiBjb25maWcuYW5pbWF0aW9uXG4gICAgfTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfYW5pbWF0ZU5ldyhhbmltUHJvcHMpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ0ZXh0XCIpKSB7XG4gICAgaWYgKGNvbmZpZy5sZXR0ZXJTcGFjaW5nKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0TGV0dGVyU3BhY2luZyhjUyhjb25maWcubGV0dGVyU3BhY2luZykpKTtcbiAgICB9XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRleHQoY1MoY29uZmlnLnRleHQpKSk7XG4gIH1cblxuICBpZihjb25maWcuY3Vyc29yUG9zaXRpb24pIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfc2V0Q3Vyc29yUG9zaXRpb24oY1MoY29uZmlnLmlkKSwgY1MoY29uZmlnLmN1cnNvclBvc2l0aW9uKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5vblN3aXBlICYmIHR5cGVvZiBjb25maWcub25Td2lwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U3dpcGVDYWxsYmFjayhjYWxsYmFja01hcHBlci5tYXAoY29uZmlnLm9uU3dpcGUpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY2xvc2VTd2lwZVwiKSkge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldENsb3NlU3dpcGUoY29uZmlnLmNsb3NlU3dpcGUpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJzd3lwZUVuYWJsZWRcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RW5hYmxlU3d5cGUoY29uZmlnLnN3eXBlRW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxpc3REYXRhXCIpICYmIGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxpc3RJdGVtXCIpKSB7XG4gICAgY29uc3QgaXRlbSA9IEpTT04ucGFyc2UoY29uZmlnLmxpc3RJdGVtKTtcbiAgICBpdGVtLml0ZW1WaWV3ID0gQW5kcm9pZC5jcmVhdGVMaXN0RGF0YShjb25maWcuaWQsIGl0ZW0uaXRlbVZpZXcpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXR1cExpc3QoY29uZmlnLmxpc3REYXRhLCBKU09OLnN0cmluZ2lmeShpdGVtKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImlubGluZUFuaW1hdGlvblwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19pbmxpbmVBbmltYXRpb24oY29uZmlnKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY2xpcHNUb0JvdW5kc1wiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRDbGlwc1RvQm91bmRzKGNvbmZpZy5jbGlwc1RvQm91bmRzKSk7XG4gIH1cblxuICBpZihjb25maWcuaGFzT3duUHJvcGVydHkoXCJjb3JuZXJSYWRpaVwiKSl7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldENvcm5lckN1cnZlcyhjb25maWcuY29ybmVyUmFkaWkpKTtcbiAgfVxuXG4gIGNvbmZpZy5jdXJyQ2hpbGRPZmZzZXQgPSAwO1xuICBjb25maWcgPSB0cmFuc2Zvcm1LZXlzKGNvbmZpZyk7XG5cbiAgcmV0dXJuIHtjb25maWc6IGNvbmZpZywgdHlwZTogdHlwZX07XG59O1xuXG5mdW5jdGlvbiBzZWxmX2FuaW1hdGVOZXcocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImFuaW1hdGU6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3Byb3BzXVxuICB9O1xufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0cGFyc2VQYXJhbXMgOiByZXF1aXJlKFwiLi9wYXJzZVBhcmFtc1wiKSxcbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuQXJyYXkucHJvdG90eXBlLnJvdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIHNhdmUgcmVmZXJlbmNlcyB0byBhcnJheSBmdW5jdGlvbnMgdG8gbWFrZSBsb29rdXAgZmFzdGVyXG4gIHZhciBwdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2gsXG4gICAgc3BsaWNlID0gQXJyYXkucHJvdG90eXBlLnNwbGljZTtcblxuICByZXR1cm4gZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoID4+PiAwLCAvLyBjb252ZXJ0IHRvIHVpbnRcbiAgICAgIGNvdW50ID0gY291bnQgPj4gMDsgLy8gY29udmVydCB0byBpbnRcblxuICAgIC8vIGNvbnZlcnQgY291bnQgdG8gdmFsdWUgaW4gcmFuZ2UgWzAsIGxlbilcbiAgICBjb3VudCA9ICgoY291bnQgJSBsZW4pICsgbGVuKSAlIGxlbjtcblxuICAgIC8vIHVzZSBzcGxpY2UuY2FsbCgpIGluc3RlYWQgb2YgdGhpcy5zcGxpY2UoKSB0byBtYWtlIGZ1bmN0aW9uIGdlbmVyaWNcbiAgICBwdXNoLmFwcGx5KHRoaXMsIHNwbGljZS5jYWxsKHRoaXMsIDAsIGNvdW50KSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59KSgpO1xuXG5mdW5jdGlvbiBmbGF0dGVuT2JqZWN0KG9iKSB7XG4gIHZhciB0b1JldHVybiA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iKSB7XG4gICAgaWYgKCFvYi5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG4gICAgaWYgKCh0eXBlb2Ygb2JbaV0pID09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgZmxhdE9iamVjdCA9IGZsYXR0ZW5PYmplY3Qob2JbaV0pO1xuICAgICAgZm9yICh2YXIgeCBpbiBmbGF0T2JqZWN0KSB7XG4gICAgICAgIGlmICghZmxhdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSh4KSkgY29udGludWU7XG4gICAgICAgIGlmICh0eXBlb2YgZmxhdE9iamVjdFt4XSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICB0b1JldHVyblt4XSA9IGZsYXRPYmplY3RbeF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvUmV0dXJuW2ldID0gb2JbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvUmV0dXJuO1xufVxuXG5mdW5jdGlvbiBwYXJzZUNvbG9ycyhjb2xvcikge1xuICBpZiAoY29sb3IubGVuZ3RoIDwgOClcbiAgICByZXR1cm4gY29sb3I7XG5cbiAgaWYgKGNvbG9yLmluZGV4T2YoXCJyZ2JhXCIpICE9PSAtMSB8fCBjb2xvci5pbmRleE9mKFwicmdiXCIpICE9PSAtMSlcbiAgICByZXR1cm4gY29sb3I7XG5cbiAgdmFyIGFscGhhID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gIGFscGhhID0gKGFscGhhIC8gMjU1KS50b0ZpeGVkKDIpO1xuXG4gIHZhciBoZXhDb2xvciA9IGNvbG9yLnN1YnN0cmluZygzLCA5KTtcbiAgdmFyIHJnYmFDb2xvciA9IFwicmdiYShcIiArIGNvbnZlcnRIZXhUb1JnYihoZXhDb2xvcikgKyBcIixcIiArIGFscGhhICsgXCIpXCI7XG5cbiAgcmV0dXJuIHJnYmFDb2xvcjtcbn1cblxuZnVuY3Rpb24gcGFyc2VMYXlvdXRQcm9wcyh0eXBlLCBjb25maWcsIGtleSkge1xuICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzAwXG4gIGlmICh0eXBlb2YgY29uZmlnW2tleV0gPT0gXCJ1bmRlZmluZWRcIiB8fCBjb25maWdba2V5XSA9PSBudWxsKSB7XG4gICAgZGVsZXRlIGNvbmZpZ1trZXldO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghY29uZmlnLnN0eWxlKSB7XG4gICAgY29uZmlnLnN0eWxlID0ge307XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgY29uZmlnLmFuaW1hdGlvbiA9IHt9O1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtID0gXCJcIjtcbiAgfVxuXG4gIGlmICghY29uZmlnLmF0dHJpYnV0ZXMpXG4gICAgY29uZmlnLmF0dHJpYnV0ZXMgPSB7fTtcblxuICBpZiAoIWNvbmZpZy5zdHlsZS5jbGFzc05hbWUpXG4gICAgY29uZmlnLnN0eWxlLmNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgaWYgKChrZXkgPT0gXCJvbkNsaWNrXCIgfHwga2V5ID09IFwib25DbGlja0V2ZW50XCIpKSB7XG4gICAgaWYoIWlzTW9iaWxlICYmICFjb25maWcuY3Vyc29yVHlwZSl7XG4gICAgICBjb25maWcuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgfVxuICB9XG4gIGlmKGtleSA9PSBcImN1cnNvclR5cGVcIikge1xuICAgIGNvbmZpZy5zdHlsZS5jdXJzb3IgPSBjb25maWcuY3Vyc29yVHlwZTtcbiAgfVxuICBpZiAoa2V5ID09IFwidGV4dFNpemVcIilcbiAgICBjb25maWcuc3R5bGUuZm9udFNpemUgPSBjb25maWcudGV4dFNpemUgKyAncHgnO1xuICBpZiAoa2V5ID09ICdmb250U2l6ZScpXG4gICAgY29uZmlnLnN0eWxlLmZvbnRTaXplID0gY29uZmlnLmZvbnRTaXplICsgJ3B4JztcbiAgXG4gIGlmIChrZXkgPT0gJ3VybCcpXG4gICAgY29uZmlnLmF0dHJpYnV0ZXMuc3JjID0gY29uZmlnLnVybFxuICAgIFxuICAvKmlmIChrZXkgPT0gXCJpbWFnZVVybFwiKXtcbiAgICBsZXQgaW1hZ2VVcmwgPSBjb25maWcuaW1hZ2VVcmw7XG4gICAgXG4gICAgaWYoY29uZmlnLnJhd0RhdGEpIHtcbiAgICAgIC8vIERvIG5vdGhpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRlbXAgPSBpbWFnZVVybC5zcGxpdCgnLicpO1xuICAgICAgbGV0IGV4dCA9ICcnO1xuICAgICAgaWYodGVtcCAmJiB0ZW1wLmxlbmd0aCA+IDApXG4gICAgICAgIGV4dCA9IHRlbXBbdGVtcC5sZW5ndGggLSAxXTtcbiAgICAgIFxuICAgICAgbGV0IGV4dHMgPSBbXCJqcGVnXCIsIFwianBnXCIsIFwicG5nXCIsIFwiYm1wXCIsIFwic3ZnXCIsIFwiZ2lmXCJdO1xuICAgICAgZXh0ID0gZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGlmKCFleHRzLmluY2x1ZGVzKGV4dCkpIHtcbiAgICAgICAgaW1hZ2VVcmwgKz0gJy5wbmcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzLnNyYyA9IGltYWdlVXJsO1xuICB9Ki9cblxuICBpZiAoa2V5ID09IFwiYmFja2dyb3VuZENvbG9yXCIpIHtcbiAgICBjb25maWcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyc2VDb2xvcnMoY29uZmlnLmJhY2tncm91bmRDb2xvcik7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYmFja2dyb3VuZFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmJhY2tncm91bmQgPSBjb25maWcuYmFja2dyb3VuZDtcbiAgfVxuICBpZiAoa2V5ID09IFwiYmFja2dyb3VuZERyYXdhYmxlXCIpIHtcbiAgICBjb25maWcuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gXCJ1cmwoJ1wiK2NvbmZpZy5iYWNrZ3JvdW5kRHJhd2FibGUrXCInKVwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImNvbG9yXCIpIHtcbiAgICBjb25maWcuc3R5bGUuY29sb3IgPSBwYXJzZUNvbG9ycyhjb25maWcuY29sb3IpO1xuICB9XG5cbiAgaWYoa2V5ID09IFwicG9zaXRpb25cIikge1xuICAgIGNvbmZpZy5zdHlsZS5wb3NpdGlvbiA9IGNvbmZpZy5wb3NpdGlvbjtcbiAgfVxuXG4gIGlmKGtleSA9PSBcImJvdHRvbUZpeGVkXCIpIHtcbiAgICBjb25maWcuc3R5bGUuYm90dG9tID0gY29uZmlnLmJvdHRvbUZpeGVkO1xuICB9XG4gIGlmKGtleSA9PSBcInRvcEZpeGVkXCIpIHtcbiAgICBjb25maWcuc3R5bGUudG9wID0gY29uZmlnLnRvcEZpeGVkO1xuICB9XG5cbiAgaWYoa2V5ID09IFwiYXV0b2ZvY3VzXCIpe1xuICAgIGlmKGNvbmZpZy5hdXRvZm9jdXMpe1xuICAgICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJhdXRvZm9jdXNcIl0gPSBcImF1dG9mb2N1c1wiOyAgXG4gICAgfVxuICB9XG4gIGlmKGtleT09XCJmb2N1c1wiKSB7XG4gICAgaWYgKGNvbmZpZy5mb2N1cyAmJiBjb25maWcuaWQpe1xuICAgICAgdmFyIGRvYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5pZCk7XG4gICAgICBpZiAoZG9jKXtcbiAgICAgICAgZG9jLmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoa2V5ID09IFwiY29ybmVyUmFkaXVzXCIpIHtcbiAgICBjb25maWcuc3R5bGUuYm9yZGVyUmFkaXVzID0gY29uZmlnLmNvcm5lclJhZGl1cyArIFwicHhcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhbHBoYVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLm9wYWNpdHkgPSBjb25maWdba2V5XTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX2FscGhhXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLm9wYWNpdHkgPSBjb25maWdba2V5XTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJmb250RmFtaWx5XCIpIHtcbiAgICBjb25maWcuc3R5bGUuZm9udEZhbWlseSA9IGNvbmZpZy5mb250RmFtaWx5O1xuICB9XG5cbiAgaWYgKGtleSA9PSAndHlwZWZhY2UnKSB7XG4gICAgc3dpdGNoKGNvbmZpZy50eXBlZmFjZSl7XG4gICAgICBjYXNlICdub3JtYWwnOlxuICAgICAgICBjb25maWcuc3R5bGUuZm9udFdlaWdodCA9IDQwMDtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm9sZCc6XG4gICAgICAgIGNvbmZpZy5zdHlsZS5mb250V2VpZ2h0ID0gNzAwO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpdGFsaWMnOlxuICAgICAgICBjb25maWcuc3R5bGUuZm9udFN0eWxlID0gJ2l0YWxpYyc7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvbGRfaXRhbGljJzpcbiAgICAgICAgY29uZmlnLnN0eWxlLmZvbnRXZWlnaHQgPSA3MDA7XG4gICAgICAgIGNvbmZpZy5zdHlsZS5mb250U3R5bGUgPSAnaXRhbGljJztcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndW5kZXJsaW5lJzpcbiAgICAgICAgY29uZmlnLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ3VuZGVybGluZSc7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoa2V5ID09IFwiZm9udFN0eWxlXCIpIHtcbiAgICBsZXQgbWF0Y2ggPSBjb25maWcuZm9udFN0eWxlLm1hdGNoKC9bLy1dLyk7XG4gICAgbGV0IGZvbnROYW1lID0gbWF0Y2ggPyBjb25maWcuZm9udFN0eWxlLnNsaWNlKDAsIG1hdGNoLmluZGV4KSA6IGNvbmZpZy5mb250U3R5bGU7XG4gICAgY29uZmlnLnN0eWxlLmZvbnRGYW1pbHkgPSBmb250TmFtZTtcblxuICAgIGlmICghbWF0Y2gpXG4gICAgICByZXR1cm47XG5cbiAgICBsZXQgdHlwZSA9IGNvbmZpZy5mb250U3R5bGUuc2xpY2UobWF0Y2guaW5kZXggKyAxKTtcbiAgICB0eXBlID0gdHlwZS5yZXBsYWNlKC9bLS9dL2csICcnKTtcbiAgICB0eXBlICA9IHR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh0eXBlLmluZGV4T2YoJ2l0YWxpYycpICE9IC0xKVxuICAgICAgY29uZmlnLnN0eWxlLmZvbnRTdHlsZSA9ICdpdGFsaWMnO1xuXG4gICAgbGV0IGZvbnRXZWlnaHQgPSAwO1xuXG4gICAgaWYgKHR5cGUuaW5kZXhPZignZXh0cmFsaWdodCcpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDIwMDtcbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2xpZ2h0JykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gMzAwO1xuICAgIGVsc2UgaWYgKHR5cGUuaW5kZXhPZigncmVndWxhcicpICE9IC0xIHx8IHR5cGUuaW5kZXhPZignYm9vaycpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDQwMDtcbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ3NlbWlib2xkJykgIT0gLTEgfHwgdHlwZS5pbmRleE9mKCdtZWRpdW0nKSAhPSAtMSlcbiAgICAgIGZvbnRXZWlnaHQgPSA1MDA7XG4gICAgZWxzZSBpZiAodHlwZS5pbmRleE9mKCdib2xkJykgIT0gLTEgfHwgdHlwZS5pbmRleE9mKCdoZWF2eScpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDcwMDtcbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2JsYWNrJykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gOTAwO1xuXG4gICAgaWYoZm9udFdlaWdodCA+IDApXG4gICAgICBjb25maWcuc3R5bGUuZm9udFdlaWdodCA9IGZvbnRXZWlnaHQ7XG4gIH1cblxuICBpZiAoa2V5ID09ICd2aXNpYmlsaXR5Jykge1xuICAgIGxldCB2aXNpYmlsaXR5ID0gY29uZmlnLnZpc2liaWxpdHk7XG4gICAgaWYgKHZpc2liaWxpdHkgPT0gJ2ludmlzaWJsZScpXG4gICAgICBjb25maWcuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgZWxzZSBpZiAodmlzaWJpbGl0eSA9PSAnZ29uZScpXG4gICAgICBjb25maWcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVsc2Uge1xuICAgICAgY29uZmlnLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICB9XG4gIH0gXG5cbiAgaWYgKGtleSA9PSAnZXhwYW5kJykge1xuICAgIGxldCB2aXNpYmlsaXR5ID0gY29uZmlnLmV4cGFuZCArICcnO1xuICAgIGlmICh2aXNpYmlsaXR5ID09ICd0cnVlJyl7XG4gICAgICBjb25maWcuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICBjb25maWcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInN0cm9rZVwiKSB7XG4gICAgbGV0IHZhbHVlcyA9IGNvbmZpZy5zdHJva2Uuc3BsaXQoXCIsXCIpO1xuXG4gICAgaWYodmFsdWVzLmxlbmd0aCA9PSAyKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlciA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgZWxzZSBpZih2YWx1ZXMubGVuZ3RoID09IDMpe1xuICAgICAgaWYgKHZhbHVlc1syXSA9PSBcInJibFwiKXtcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckJvdHRvbSA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJMZWZ0ID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHZhbHVlc1syXSA9PSBcImJcIil7XG4gICAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJCb3R0b20gPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzdHJva2VUb3BcIikge1xuICAgIGxldCB2YWx1ZXMgPSBjb25maWcuc3Ryb2tlVG9wLnNwbGl0KFwiLFwiKTtcbiAgICBcbiAgICBpZih2YWx1ZXMubGVuZ3RoID09IDIpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyVG9wID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICBlbHNlIGlmKHZhbHVlcy5sZW5ndGggPT0gMylcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJUb3AgPSB2YWx1ZXNbMF0gKyBcInB4IFwiICsgdmFsdWVzWzFdICsgXCIgXCIgKyB2YWx1ZXNbMl07XG4gIH1cblxuICBpZiAoa2V5ID09IFwic3Ryb2tlUmlnaHRcIikge1xuICAgIGxldCB2YWx1ZXMgPSBjb25maWcuc3Ryb2tlUmlnaHQuc3BsaXQoXCIsXCIpO1xuICAgIFxuICAgIGlmKHZhbHVlcy5sZW5ndGggPT0gMilcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJSaWdodCA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgZWxzZSBpZih2YWx1ZXMubGVuZ3RoID09IDMpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyUmlnaHQgPSB2YWx1ZXNbMF0gKyBcInB4IFwiICsgdmFsdWVzWzFdICsgXCIgXCIgKyB2YWx1ZXNbMl07XG4gIH1cblxuICBpZiAoa2V5ID09IFwic3Ryb2tlQm90dG9tXCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZUJvdHRvbS5zcGxpdChcIixcIik7XG4gICAgXG4gICAgaWYodmFsdWVzLmxlbmd0aCA9PSAyKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckJvdHRvbSA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgZWxzZSBpZih2YWx1ZXMubGVuZ3RoID09IDMpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyQm90dG9tID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInN0cm9rZUxlZnRcIikge1xuICAgIGxldCB2YWx1ZXMgPSBjb25maWcuc3Ryb2tlTGVmdC5zcGxpdChcIixcIik7XG4gICAgXG4gICAgaWYodmFsdWVzLmxlbmd0aCA9PSAyKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckxlZnQgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgIGVsc2UgaWYodmFsdWVzLmxlbmd0aCA9PSAzKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckxlZnQgPSB2YWx1ZXNbMF0gKyBcInB4IFwiICsgdmFsdWVzWzFdICsgXCIgXCIgKyB2YWx1ZXNbMl07XG4gIH1cblxuICBpZiAoa2V5ID09IFwidHJhbnNsYXRpb25ZXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwidHJhbnNsYXRlWShcIiArIGNvbmZpZ1trZXldICsgXCJweCkgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV90cmFuc2xhdGlvbllcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwidHJhbnNsYXRlWShcIiArIGNvbmZpZ1trZXldICsgXCJweCkgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwidHJhbnNsYXRpb25YXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwidHJhbnNsYXRlWChcIiArIGNvbmZpZ1trZXldICsgXCJweCkgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV90cmFuc2xhdGlvblhcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwidHJhbnNsYXRlWChcIiArIGNvbmZpZ1trZXldICsgXCJweCkgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwic2NhbGVYXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwic2NhbGVYKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9zY2FsZVhcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwic2NhbGVYKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwic2NhbGVZXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwic2NhbGVZKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9zY2FsZVlcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwic2NhbGVZKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwicm90YXRpb25cIikge1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gKz0gXCJyb3RhdGUoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3JvdGF0aW9uXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInJvdGF0ZShcIiArIGNvbmZpZ1trZXldICsgXCJkZWcpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInJvdGF0aW9uWFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInJvdGF0ZVgoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3JvdGF0aW9uWFwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gKz0gXCJyb3RhdGVYKFwiICsgY29uZmlnW2tleV0gKyBcImRlZykgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwicm90YXRpb25ZXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwicm90YXRlWShcIiArIGNvbmZpZ1trZXldICsgXCJkZWcpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfcm90YXRpb25ZXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInJvdGF0ZVkoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJ0cmFuc2xhdGlvblpcIikge1xuICAgIHZhciB2ID0gY29uZmlnW2tleV07XG4gICAgY29uZmlnLnN0eWxlW1wiLXdlYmtpdC1ib3gtc2hhZG93XCJdID0gXCIwIDAgXCIrdi50b1N0cmluZygpK1wicHggcmdiYSgwLDAsMCwgLjEpXCI7XG4gICAgY29uZmlnLnN0eWxlW1wiLW1vei1ib3gtc2hhZG93XCJdPSBcIjAgMCBcIit2LnRvU3RyaW5nKCkrXCJweCByZ2JhKDAsMCwwLCAuMSlcIjtcbiAgICBjb25maWcuc3R5bGVbXCJib3gtc2hhZG93XCJdPSAgXCIwIDAgXCIrdi50b1N0cmluZygpK1wicHggcmdiYSgwLDAsMCwgLjEpXCI7XG4gICAgXG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9kdXJhdGlvblwiICYmICFpc05hTihjb25maWdba2V5XSkpIHtcbiAgICBjb25zdCBzdWZmaXggPSBjb25maWcudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID8gKFwiIFwiICsgY29uZmlnLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbikgOiBcIlwiO1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNpdGlvbiA9IGNvbmZpZ1trZXldICsgJ21zIGFsbCcgKyBzdWZmaXg7XG4gIH1cbiAgXG4gIGlmICh0eXBlID09IFwidGV4dFZpZXdcIiAmJiBrZXkgPT0gXCJncmF2aXR5XCIgJiYgY29uZmlnLmdyYXZpdHkpIHtcbiAgICBjb25maWcuc3R5bGUudGV4dEFsaWduID0gY29uZmlnLmdyYXZpdHk7XG4gICAgaWYgKGNvbmZpZy5ncmF2aXR5ID09IFwiY2VudGVyX3ZlcnRpY2FsXCIpIHtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSBlbHNlIGlmIChjb25maWcuZ3Jhdml0eSA9PSBcImNlbnRlcl9ob3Jpem9udGFsXCIpIHtcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJqdXN0aWZ5LWNvbnRlbnRcIl0gPSBcImNlbnRlclwiO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmdyYXZpdHkgPT0gXCJjZW50ZXJcIikge1xuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImp1c3RpZnktY29udGVudFwiXSA9IFwiY2VudGVyXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbmZpZy5ncmF2aXR5ID09IFwiY2VudGVyXCIpe1xuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImp1c3RpZnktY29udGVudFwiXSA9IFwiY2VudGVyXCI7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlID09IFwibGluZWFyTGF5b3V0XCIgJiYga2V5ID09IFwiZ3Jhdml0eVwiICYmIGNvbmZpZy5ncmF2aXR5KXtcbiAgICBpZiAoY29uZmlnLm1hcmdpbiAmJiBjb25maWcuZ3Jhdml0eT09XCJjZW50ZXJfdmVydGljYWxcIil7XG4gICAgICB2YXIgbWFyZ2luPWNvbmZpZy5tYXJnaW4uc3BsaXQoXCIsXCIpO1xuICAgICAgaWYgKGNvbmZpZy53aWR0aCA9PSBcIm1hdGNoX3BhcmVudFwiKXtcbiAgICAgICAgIGNvbmZpZy5zdHlsZS53aWR0aD1cImNhbGMoMTAwJSAtIFwiKyhwYXJzZUludChtYXJnaW5bMF0pK3BhcnNlSW50KG1hcmdpblsyXSkpLnRvU3RyaW5nKCkrXCJweCApXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSA9PSBcImhpbnRcIil7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXMucGxhY2Vob2xkZXIgPSBjb25maWcuaGludDtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJjb250ZW50RWRpdGFibGVcIiAmJiBjb25maWcuY29udGVudEVkaXRhYmxlKXtcbiAgICBjb25maWcuYXR0cmlidXRlcy5jb250ZW50ZWRpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImlkXCIpIHtcbiAgICBjb25maWcuYXR0cmlidXRlcy5pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG5cbiAgaWYgKGtleSA9PSBcImdyYWRpZW50XCIpIHtcbiAgICB2YXIgZ3JhZGllbnRPYmogPUpTT04ucGFyc2UoY29uZmlnLmdyYWRpZW50KTtcbiAgICBpZiAoZ3JhZGllbnRPYmoudHlwZSA9PSBcImxpbmVhclwiKSB7XG4gICAgICB2YXIgYW5nbGUgPSBncmFkaWVudE9iai5hbmdsZTtcbiAgICAgIHZhciB2YWx1ZXMgPSBncmFkaWVudE9iai52YWx1ZXM7XG4gICAgICB2YXIgY29sb3JzID0gdmFsdWVzLmpvaW4oXCIsIFwiKTtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBcImxpbmVhci1ncmFkaWVudChcIithbmdsZStcImRlZywgXCIrY29sb3JzK1wiKVwiXG4gICAgfVxuICAgICBlbHNlIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBncmFkaWVudE9iai52YWx1ZXM7XG4gICAgICB2YXIgY29sb3JzID0gdmFsdWVzLmpvaW4oXCIsIFwiKTtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBcInJhZGlhbC1ncmFkaWVudChcIitjb2xvcnMrXCIpXCJcbiAgICAgfVxuICB9XG5cblxuICBpZiAoa2V5ID09IFwiaW5wdXRUeXBlXCIpIHtcbiAgICB2YXIgaW5wdXRUeXBlID0gXCJ0ZXh0XCI7XG4gICAgaWYgKGNvbmZpZy5pbnB1dFR5cGUgPT0gXCJudW1lcmljUGFzc3dvcmRcIiB8fCBjb25maWcuaW5wdXRUeXBlID09IFwicGFzc3dvcmRcIikge1xuICAgICAgaWYoY29uZmlnLmlucHV0VHlwZUkgPT0gNCAmJiBpc01vYmlsZSl7XG4gICAgICAgIGlucHV0VHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBjb25maWcuc3R5bGVbXCItd2Via2l0LXRleHQtc2VjdXJpdHlcIl0gPSBcImRpc2NcIjtcbiAgICAgICAgY29uZmlnLnN0eWxlW1wiLW1vei10ZXh0LXNlY3VyaXR5XCJdID0gXCJkaXNjXCI7XG4gICAgICAgIGNvbmZpZy5zdHlsZVtcInRleHQtc2VjdXJpdHlcIl0gPSBcImRpc2NcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0VHlwZSA9IFwicGFzc3dvcmRcIlxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29uZmlnLmlucHV0VHlwZSA9PSBcImRpc2FibGVkXCIpIHtcbiAgICAgICAgY29uZmlnLmF0dHJpYnV0ZXMuZGlzYWJsZWQgPSAnZGlzYWJsZWQnXG4gICAgfSBlbHNlIGlmIChjb25maWcuaW5wdXRUeXBlID09IFwibnVtZXJpY1wiKSB7XG4gICAgICAgIGlucHV0VHlwZSA9IFwibnVtYmVyXCJcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5zZXBhcmF0b3IpIHtcbiAgICAgIGlucHV0VHlwZSA9IFwidGV4dFwiXG4gICAgfVxuXG4gICAgY29uZmlnLmF0dHJpYnV0ZXMudHlwZSA9IGlucHV0VHlwZVxuICB9XG5cbiAgaWYgKGtleSA9PSBcInJvdGF0ZUltYWdlXCIpIHtcbiAgICBpZihjb25maWcucm90YXRlSW1hZ2Upe1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLWR1cmF0aW9uXCJdID0gXCI0c1wiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvblwiXSA9IFwibGluZWFyXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tZGVsYXlcIl0gPSBcIjBzXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24taXRlcmF0aW9uLWNvdW50XCJdID0gXCJpbmZpbml0ZVwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLWRpcmVjdGlvblwiXSA9IFwibm9ybWFsXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tZmlsbC1tb2RlXCJdID0gXCJub25lXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tcGxheS1zdGF0ZVwiXSA9IFwicnVubmluZ1wiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLW5hbWVcIl0gPSBcInJvdGF0aW9uXCI7XG5cbiAgICB9XG4gIH1cblxuICBpZiAoa2V5ID09IFwicGF0dGVyblwiKSB7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJkYXRhLXBhdHRlcm5cIl0gPSBjb25maWcucGF0dGVybjtcbiAgfVxuICBpZihrZXkgPT0gXCJpbnB1dFR5cGVJXCIpe1xuICAgIGlmKGNvbmZpZy5pbnB1dFR5cGVJID09IDQpe1xuICAgICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJpbnB1dG1vZGVcIl0gPSBcIm51bWVyaWNcIjtcbiAgICB9XG4gICAgXG4gIH1cblxuICBpZiAoa2V5ID09IFwic2VwYXJhdG9yXCIpIHtcbiAgICBjb25maWcuYXR0cmlidXRlc1tcInNlcGFyYXRvclwiXSA9IGNvbmZpZy5zZXBhcmF0b3I7XG4gIH1cbiAgaWYgKGtleSA9PSBcInNlcGFyYXRvclJlcGVhdFwiKSB7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJzZXBhcmF0b3JSZXBlYXRcIl0gPSBjb25maWcuc2VwYXJhdG9yUmVwZWF0O1xuICB9XG5cbiAgaWYgKGtleSA9PSBcIm15QXR0clwiKSB7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJteUF0dHJcIl0gPSBjb25maWcubXlBdHRyO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInNoYWRvd1wiKSB7XG4gICAgdmFyIHNoYWRvd1ZhbHVlcyA9IGNvbmZpZy5zaGFkb3cuc3BsaXQoY29uZmlnLnNoYWRvd1NlcGFyYXRvciB8fCAnLCcpO1xuICAgIHZhciBzaGFkb3dCbHVyID0gcldTKGNTKHNoYWRvd1ZhbHVlc1syXSkpO1xuICAgIHZhciBzaGFkb3dTcHJlYWQgPSByV1MoY1Moc2hhZG93VmFsdWVzWzNdKSk7XG4gICAgdmFyIHNoYWRvd09wYWNpdHkgPSByV1MoY1Moc2hhZG93VmFsdWVzWzVdKSk7XG4gICAgdmFyIHNoYWRvd09mZnNldCA9IHtcbiAgICAgICAgeDogcldTKGNTKHNoYWRvd1ZhbHVlc1swXSkpLFxuICAgICAgICB5OiByV1MoY1Moc2hhZG93VmFsdWVzWzFdKSlcbiAgICAgIH07XG5cbiAgICB2YXIgc2hhZG93Q29sb3IgPSBjb252ZXJ0Q29sb3JUb1JnYmEoc2hhZG93VmFsdWVzWzRdKTtcbiAgICB2YXIgc2hhZG93VHlwZSA9IGNvbmZpZy5zaGFkb3dUeXBlID8gYCR7Y29uZmlnLnNoYWRvd1R5cGV9IGAgOiAnJ1xuXG4gICAgY29uZmlnW1wic3R5bGVcIl1bXCJib3gtc2hhZG93XCJdID0gc2hhZG93VHlwZSArIHBhcnNlSW50KHNoYWRvd09mZnNldC54KSArIFwicHggXCIgKyBwYXJzZUludChzaGFkb3dPZmZzZXQueSkgKyBcInB4IFwiICsgcGFyc2VJbnQoc2hhZG93Qmx1cikgKyBcInB4IFwiICsgcGFyc2VJbnQoc2hhZG93U3ByZWFkKSArIFwicHggcmdiYShcIiArIHNoYWRvd0NvbG9yLnIgKyBcIiwgXCIgKyAgc2hhZG93Q29sb3IuZyArIFwiLCBcIiArICBzaGFkb3dDb2xvci5iICsgXCIsIFwiICsgIHNoYWRvd0NvbG9yLmEgKyBcIilcIiA7XG4gIH1cblxuICBpZiAoa2V5ID09IFwibGluZUhlaWdodFwiKVxuICAgIGNvbmZpZy5zdHlsZS5saW5lSGVpZ2h0ID0gY29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKGtleSA9PSBcIm9iamVjdEZpdFwiKVxuICAgIGNvbmZpZy5zdHlsZS5vYmplY3RGaXQgPSBjb25maWcub2JqZWN0Rml0O1xuXG4gIGlmIChrZXkgPT0gXCJjbGlja2FibGVcIikge1xuICAgIGNvbmZpZy5zdHlsZS5wb2ludGVyRXZlbnRzID0gY29uZmlnLmNsaWNrYWJsZSA/IFwiYXV0b1wiIDogXCJub25lXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udmVydENvbG9yVG9SZ2JhKGNvbG9yKSB7XG4gIGNvbG9yID0gcldTKGNTKGNvbG9yKSk7XG5cbiAgdmFyIHZhbHVlcztcbiAgdmFyIGFscGhhID0gXCIxLjAwXCI7XG5cbiAgaWYgKGNvbG9yLmxlbmd0aCA+PSA4KSB7XG4gICAgYWxwaGEgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMyksIDE2KTtcbiAgICBhbHBoYSA9IChhbHBoYSAvIDI1NSkudG9GaXhlZCgyKTtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygzLCA5KTtcbiAgfSBlbHNlIHtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygxLCBjb2xvci5sZW5ndGgpO1xuICB9XG5cbiAgY29sb3IgPSBjb252ZXJ0SGV4VG9SZ2IocldTKGNvbG9yKSk7XG4gIHZhbHVlcyA9IGNvbG9yLnNwbGl0KCcsJyk7XG5cbiAgcmV0dXJuIHtcbiAgICByOiBwYXJzZUludChyV1ModmFsdWVzWzBdKSksXG4gICAgZzogcGFyc2VJbnQocldTKHZhbHVlc1sxXSkpLFxuICAgIGI6IHBhcnNlSW50KHJXUyh2YWx1ZXNbMl0pKSxcbiAgICBhOiBwYXJzZUZsb2F0KGFscGhhKVxuICB9O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0SGV4VG9SZ2IoaGV4KSB7XG4gIHZhciByID0gKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMCwgMiksIDE2KSkudG9GaXhlZCgyKTtcbiAgdmFyIGcgPSAocGFyc2VJbnQoaGV4LnN1YnN0cmluZygyLCA0KSwgMTYpKS50b0ZpeGVkKDIpO1xuICB2YXIgYiA9IChwYXJzZUludChoZXguc3Vic3RyaW5nKDQsIDYpLCAxNikpLnRvRml4ZWQoMik7XG5cbiAgcmV0dXJuIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGI7XG59XG5cbmZ1bmN0aW9uIGNTKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHZhbHVlICsgJycgOiBcIlwiO1xufVxuXG5mdW5jdGlvbiByV1ModmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyAvZywgJycpO1xufVxuXG5mdW5jdGlvbiBzZXREZWZhdWx0cyh0eXBlLCBjb25maWcpIHtcbiAgaWYgKHR5cGUgPT0gXCJsaW5lYXJMYXlvdXRcIikge1xuICAgIGNvbmZpZy5vcmllbnRhdGlvbiA9IGNvbmZpZy5vcmllbnRhdGlvbjtcbiAgfVxufVxuZnVuY3Rpb24gdGhpc19pbmxpbmVBbmltYXRpb24oY29uZmlnKSB7XG4gIHZhciBjb249bW9kaWZ5VHJhbnNsYXRpb24oY29uZmlnKTtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb24ubmFtZSk7XG59XG5mdW5jdGlvbiBtb2RpZnlUcmFuc2xhdGlvbihjb25maWcpe1xuICB2YXIgeCA9IGNvbmZpZy54IHx8IFwiMFwiO1xuICB2YXIgeSA9IGNvbmZpZy55IHx8IFwiMFwiO1xuICB2YXIgYW5pbWF0aW9uQXJyYXkgPSBKU09OLnBhcnNlKGNvbmZpZy5pbmxpbmVBbmltYXRpb24pO1xuICB2YXIgYW5pbWF0aW9uQXJyYXkgPSBhbmltYXRpb25BcnJheS5tYXAoZnVuY3Rpb24oYSl7XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcImZyb21YXCIpKXtcbiAgICAgIGEuZnJvbVggPSBwYXJzZUludChhLmZyb21YKSArIHBhcnNlSW50KHgpICsgJyc7XG4gICAgICBpZighYS5oYXNPd25Qcm9wZXJ0eShcInRvWFwiKSl7XG4gICAgICAgIGEudG9YID0gMCArIHBhcnNlSW50KHgpICsgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJ0b1hcIikpe1xuICAgICAgYS50b1ggPSBwYXJzZUludChhLnRvWCkgKyBwYXJzZUludCh4KSArICcnO1xuICAgIH1cbiAgICBpZihhLmhhc093blByb3BlcnR5KFwiZnJvbVlcIikpe1xuICAgICAgYS5mcm9tWSA9IHBhcnNlSW50KGEuZnJvbVkpICsgcGFyc2VJbnQoeSkgKyAnJztcbiAgICAgIGlmKCFhLmhhc093blByb3BlcnR5KFwidG9ZXCIpKXtcbiAgICAgICAgYS50b1kgPSAwICsgcGFyc2VJbnQoeSkgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcInRvWVwiKSl7XG4gICAgICBhLnRvWSA9IHBhcnNlSW50KGEudG9ZKSArIHBhcnNlSW50KHkpICsgJyc7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9KVxuICByZXR1cm4gKGFuaW1hdGlvbkFycmF5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHR5cGUsIGNvbmZpZywgZ2V0U2V0VHlwZSkge1xuICBjb25maWcgPSBmbGF0dGVuT2JqZWN0KGNvbmZpZyk7XG4gIHNldERlZmF1bHRzKHR5cGUsIGNvbmZpZyk7XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmICgoY29uZmlnLnN0eWxlICYmIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpICYmIGtleXNbaV0gPT09ICdncmF2aXR5JykgIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBwYXJzZUxheW91dFByb3BzKHR5cGUsIGNvbmZpZywga2V5c1tpXSk7XG4gIH1cblxuICBjb25maWcudHJhbnNpdGlvbiA9IFtcbiAgICBTdHJpbmcoY29uZmlnLmFfZHVyYXRpb24gfHwgMCkgK1wibXNcIixcbiAgICBcImFsbFwiLFxuICAgIGNvbmZpZy50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cbiAgXVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbihcIiBcIik7XG5cbiAgaWYgKGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gPT0gXCJcIikge1xuICAgIGRlbGV0ZSBjb25maWcuc3R5bGUudHJhbnNmb3JtO1xuICB9XG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJpbmxpbmVBbmltYXRpb25cIikpIHtcbiAgICB0aGlzX2lubGluZUFuaW1hdGlvbihjb25maWcpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn0iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiAqIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuICpcbiAqIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuICogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiAqIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiAqIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4gKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiAqIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuICogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2VcbiAqIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4gKi9cblxuLypcbiBVc2VkIHRvIGluaXRpYWxpemUgZGVmYXVsdHMgZm9yIHdpbmRvdyBmdW5jaW9ucyBhbmQgdmFyaWFibGVzLlxuKi9cbmNvbnN0IHsgbWVyZ2UgfSA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG53aW5kb3cuUHJlc3RvVUkgPSByZXF1aXJlKFwiLi9QcmVzdG9VSUludGVyZmFjZVwiKTtcblxuY29uc3QgZ2V0Q3VyclRpbWUgPSAoKSA9PiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG5cbi8vIHdpbmRvdy5fX09TID0gZ2V0T1MoKVxuaWYod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpe1xuICAgIHZhciBnZXRTY3JlZW5EZXRhaWxzID0gZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGRldGFpbHMgPSBKU09OLnBhcnNlKEFuZHJvaWQuZ2V0U2NyZWVuRGltZW5zaW9ucygpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmVlbl93aWR0aDogZGV0YWlscy53aWR0aCArIFwiXCIsXG4gICAgICAgICAgICBzY3JlZW5faGVpZ2h0OiBkZXRhaWxzLmhlaWdodCArIFwiXCJcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiZXJyb3IgaW4gZ2V0dHRpbmcgc2NyZWVuIGRpbWVuc2lvbnMsIHNldHRpbmcgZGVmYXVsdCB2YWx1ZXNcIiwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2NyZWVuX3dpZHRoOiBcIjEwODBcIixcbiAgICAgICAgICAgICAgICBzY3JlZW5faGVpZ2h0OiBcIjE5MjBcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgd2luZG93Ll9fREVWSUNFX0RFVEFJTFMgPSBnZXRTY3JlZW5EZXRhaWxzKCk7XG59XG5cbmlmICh3aW5kb3cuX19PUyA9PSBcIldFQlwiKSB7XG4gICAgd2luZG93LkFuZHJvaWQgPSByZXF1aXJlKFwiLi9XRUIvQW5kcm9pZEludGVyZmFjZVwiKVxuICAgIHdpbmRvdy5KQnJpZGdlID0gcmVxdWlyZShcIi4vV0VCL0pCcmlkZ2VJbnRlcmZhY2VcIilcbn0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJJT1NcIikge1xuICAgIHdpbmRvdy5BbmRyb2lkID0gcmVxdWlyZShcIi4vSU9TL0FuZHJvaWRJbnRlcmZhY2VcIilcbiAgICB3aW5kb3cuSkJyaWRnZSA9IG1lcmdlKHdpbmRvdy5KQnJpZGdlLCB7fSlcbn1cblxuaWYgKHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTICYmIHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLmhhc093blByb3BlcnR5KFwic2NyZWVuX3dpZHRoXCIpKSB7XG4gICAgd2luZG93Ll9fV0lEVEggPSB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5zY3JlZW5fd2lkdGg7XG59IGVsc2Uge1xuICAgIHdpbmRvdy5fX1dJRFRIID0gXCIxMDgwXCI7XG59XG5cbmlmICh3aW5kb3cuX19ERVZJQ0VfREVUQUlMUyAmJiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5oYXNPd25Qcm9wZXJ0eShcInNjcmVlbl9oZWlnaHRcIikpIHtcbiAgICB3aW5kb3cuX19IRUlHSFQgPSB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5zY3JlZW5faGVpZ2h0O1xufSBlbHNlIHtcbiAgICB3aW5kb3cuX19IRUlHSFQgPSBcIjE5MjBcIjtcbn1cblxuY29uc3QgZ3VpZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KVxuXG4vL0ludGlhbGl6aW5nIGRlZmF1bHRzXG5pZiAod2luZG93Ll9fT1MgPT0gXCJXRUJcIikge1xuICAgIC8qIENvbXBvbmVudHMgKi9cbiAgICB3aW5kb3cuX19DT01fRVZFTlQgPSBmYWxzZVxuICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRCA9IHtcbiAgICAgICAgU1dJVENIX0dMT0JBTDogZmFsc2UsXG4gICAgICAgIERSUDoge30sXG4gICAgICAgIERTQjoge30sXG4gICAgICAgIERCOiB7fSxcbiAgICAgICAgTkFWQkFSOiB7fVxuICAgIH1cblxuICAgIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUCA9IHtcbiAgICAgICAgV1JBUFBFUjogJ1BEQ19jb21fd3JhcHBlcicsXG4gICAgICAgIE5BVkJBUjogJ1BEQ19jb21fbmF2YmFyJyxcbiAgICAgICAgTkFWQkFSX0lURU06ICdQRENfY29tX25hdmJhcl9pdGVtJyxcbiAgICAgICAgTkFWQkFSX0lURU1fV0lUSF9TVUI6ICdQRENfY29tX25hdmJhcl9oYXNfc3ViJyxcbiAgICAgICAgTkFWQkFSX1NVQjogJ1BEQ19jb21fbmF2YmFyX3N1YicsXG4gICAgICAgIE5BVkJBUl9TVUJfUklHSFQ6ICdQRENfY29tX25hdmJhcl9zdWJfcmlnaHQnLFxuICAgICAgICBOQVZCQVJfU1VCX0lURU06ICdQRENfY29tX25hdmJhcl9zdWJpdGVtJyxcbiAgICAgICAgRFJQOiAnUERDX2NvbV9kcnAnLFxuICAgICAgICBEUlBfQk9EWTogJ1BEQ19jb21fZHJwX2JvZHknLFxuICAgICAgICBEQjogJ1BEQ19jb21fZGInLFxuICAgICAgICBEQl9GVUxMX0JPRFk6ICdQRENfY29tX2RiX2Z1bGxfYm9keScsXG4gICAgICAgIERCX0JPRFk6ICdQRENfY29tX2RiX2JvZHknLFxuICAgICAgICBEQl9PUFRJT05TOiAnUERDX2NvbV9kYl9vcHRpb25zJyxcbiAgICAgICAgREJfT1BUSU9OOiAnUERDX2NvbV9kYl9vcHRpb24nLFxuICAgICAgICBEU0I6ICdQRENfY29tX2RzYicsXG4gICAgICAgIERTQl9GVUxMX0JPRFk6ICdQRENfY29tX2RzYl9mdWxsX2JvZHknLFxuICAgICAgICBEU0JfQk9EWTogJ1BEQ19jb21fZHNiX2JvZHknLFxuICAgICAgICBEU0JfT1BUSU9OUzogJ1BEQ19jb21fZHNiX29wdGlvbnMnLFxuICAgICAgICBEU0JfT1BUSU9OOiAnUERDX2NvbV9kc2Jfb3B0aW9uJyxcbiAgICAgICAgRFNCX1NFQVJDSF9XUkFQOiAnUERDX2NvbV9kc2Jfc2VhcmNoX3dyYXAnLFxuICAgICAgICBEU0JfU0VBUkNIOiAnUERDX2NvbV9kc2Jfc2VhcmNoJyxcbiAgICAgICAgU1dJVENIOiAnUERDX2NvbV9zd2l0Y2gnLFxuICAgICAgICBTV0lUQ0hfQk9EWTogJ1BEQ19jb21fc3dpdGNoX2JvZHknLFxuICAgICAgICBTV0lUQ0hfU0xJREVSOiAnUERDX2NvbV9zd2l0Y2hfc2xpZGVyJyxcbiAgICAgICAgQlQ6ICdQRENfY29tX2J0JyxcbiAgICAgICAgQlRfRElTQUJMRUQ6ICdQRENfY29tX2J0X2Rpc2FibGVkJ1xuICAgIH1cbiAgICB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAgPSB7XG4gICAgICAgIEJHOiAnI2ZmZmZmZicsXG4gICAgICAgIEFDVElWRV9CRzogJyNFRUYxRjgnLFxuICAgICAgICBBQ1RJVkVfQ09MT1I6ICdyZ2IoNTMsIDY0LCA4MiknLFxuICAgICAgICBJTkFDVElWRV9DT0xPUjogJ3JnYmEoNTMsIDY0LCA4MiwgMC41KScsXG4gICAgICAgIEJPUkRFUl9DT0xPUjogJyNBM0FGQzInLFxuICAgICAgICBBQ1RJVkVfQk9SREVSX0NPTE9SOiAnIzcwNzg4NicsXG4gICAgICAgIFNFQVJDSF9DT0xPUjogJyNkZGRkZGQnLFxuICAgICAgICBJTkFDVElWRV9TV0lUQ0g6ICcjQjdEQkJDJyxcbiAgICAgICAgQUNUSVZFX1NXSVRDSDogJyMzNkFGNDcnLFxuICAgICAgICBCVF9CT1JERVJfQ09MT1I6ICcjMTU4NUQ4JyxcbiAgICAgICAgQlRfQkdfQ09MT1I6ICcjMTk5MUVCJyxcbiAgICAgICAgQlRfQ09MT1I6ICcjZmZmZmZmJ1xuICAgIH1cbiAgICB3aW5kb3cuX19DT01fQUNUSVZFID0ge1xuICAgICAgICBEU0I6ICcnLFxuICAgICAgICBOQVZCQVI6ICcnLFxuICAgICAgICBEQjogJydcbiAgICB9XG4gICAgLyogQ29tcG9uZW50cyBFbmQgKi9cblxuICAgIC8qIE1vZGFsICovXG4gICAgd2luZG93Ll9fU1RZTEVfSUQgPSAnc3R5bGVfJyArIGd1aWRcbiAgICB3aW5kb3cuX19SRU5ERVJFRF9LRVlGUkFNRVMgPSBbXVxuICAgIHdpbmRvdy5fX01PREFMX1BST1BTID0ge31cbiAgICB3aW5kb3cuX19DT05URU5UTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsJ1xuICAgIHdpbmRvdy5fX09QRU5NT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtb3BlbidcbiAgICB3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1iYWNrZHJvcCdcbiAgICB3aW5kb3cuX19ESVNBQkxFREJBQ0tEUk9QX0NMQVNTID0gJ1BEQ19tb2RhbC1iYWNrZHJvcC1kaXNhYmxlZCdcbiAgICB3aW5kb3cuX19TSE9XTk1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1zaG93bidcbiAgICB3aW5kb3cuX19GQURFTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLWZhZGUnXG4gICAgd2luZG93Ll9fU0xJREVNT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtc2xpZGUnXG4gICAgLyogTW9kYWwgRW5kICovXG5cbiAgICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0JBQ0tEUk9QTU9EQUxfQ0xBU1MpICYmXG4gICAgICAgICAgICAhZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19ESVNBQkxFREJBQ0tEUk9QX0NMQVNTKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh3aW5kb3cuX19PUEVOTU9EQUxfQ0xBU1MpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUod2luZG93Ll9fU0hPV05NT0RBTF9DTEFTUyk7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgICAgIGlkID0gaWQucmVwbGFjZSh3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTICsgJ18nLCAnJyk7XG5cbiAgICAgICAgICAgIGxldCB2aWV3ID0gX19WSUVXU1tpZF07XG4gICAgICAgICAgICBpZiAodmlldyAmJiB2aWV3LnByb3BzLm9uRGlzbWlzcyAmJiB0eXBlb2Ygdmlldy5wcm9wcy5vbkRpc21pc3MgPT1cbiAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB2aWV3LnByb3BzLm9uRGlzbWlzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZHVpU2hvd1NjcmVlbiA9IChjYWxsYmFjaywgc3RhdGUpID0+IHtcbiAgICAgICAgbGV0IHBvcHVwTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwb3B1cE1lbnVcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wdXBNZW51Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3B1cE1lbnVbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuX19kdWlTaG93U2NyZWVuID0gZHVpU2hvd1NjcmVlbjtcblxufSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIklPU1wiKSB7XG4gICAgd2luZG93Ll9fQ09MT1JfSU5ERVggPSB3aW5kb3cuX19DT0xPUl9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX0ZPTlRfSU5ERVggPSB3aW5kb3cuX19GT05UX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fUkVDVF9JTkRFWCA9IHdpbmRvdy5SRUNUX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fVklFV19JTkRFWCA9IHdpbmRvdy5fX1ZJRVdfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19JTUFHRV9JTkRFWCA9IHdpbmRvdy5fX0lNQUdFX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fUE9JTlRfSU5ERVggPSB3aW5kb3cuX19QT0lOVF9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX0xBWUVSX0lOREVYID0gd2luZG93Ll9fTEFZRVJfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19TSVpFX0lOREVYID0gd2luZG93Ll9fU0laRV9JTkRFWCB8fCAxO1xufSBlbHNlIHtcbiAgICAvL1RoaXMgd291bGQgYmUgY2FzZSBmb3IgYW5kcm9pZFxuICAgIHdpbmRvdy5fX0ZOX01BUCA9IHt9O1xuICAgIHdpbmRvdy5fX0FMTF9PTkNMSUNLUyA9IFtdO1xufVxuXG53aW5kb3cuX19JRCA9IDE7XG53aW5kb3cuX19OT0RFX0lEID0gMTtcbndpbmRvdy5fX1NDUkVFTl9JTkRFWCA9IC0xO1xuXG53aW5kb3cuX19QUk9YWV9GTiA9IHt9O1xud2luZG93Ll9fRk5fSU5ERVggPSAwO1xud2luZG93Ll9fUk9PVFNDUkVFTiA9IG51bGw7XG53aW5kb3cuX19DQUNIRURfU0NSRUVOUyA9IHt9O1xud2luZG93Ll9fU0NSRUVOX0NPVU5UID0gMDtcbndpbmRvdy5fX0NVUlJfU0NSRUVOID0gbnVsbDtcbndpbmRvdy5fX1BSRVZfU0NSRUVOID0gbnVsbDtcbndpbmRvdy5fX0FOSU1BVEVfRElSID0gbnVsbDtcbndpbmRvdy5fX1NDUkVFTl9TVEFDSyA9IFtdO1xud2luZG93Ll9fTEFTVF9GTl9DQUxMRUQgPSBudWxsO1xud2luZG93Ll9fVEhST1RURUxFRF9BQ1RJT05TID0gW107XG53aW5kb3cuX19WSUVXUyA9IHt9O1xud2luZG93Ll9fVklFV19ESU1FTlNJT05TID0ge307XG53aW5kb3cuX19PQlNFUlZFUlMgPSB7fTtcbndpbmRvdy5aSW5kZXggPSAwO1xuXG53aW5kb3cuY2FsbFVJQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFyZ3MgPSAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IFthcmd1bWVudHNbMF1dIDogQXJyYXkuYXBwbHkobnVsbCxcbiAgICAgICAgYXJndW1lbnRzKSk7XG4gICAgdmFyIGZOYW1lID0gYXJnc1swXVxuICAgIHZhciBmdW5jdGlvbkFyZ3MgPSBhcmdzLnNsaWNlKDEpXG4gICAgdmFyIGN1cnJUaW1lO1xuICAgIHZhciB0aW1lRGlmZjtcbiAgICBcbiAgICBpZiAod2luZG93Ll9fQUxMX09OQ0xJQ0tTICYmIHdpbmRvdy5fX0FMTF9PTkNMSUNLUy5pbmRleE9mKGZOYW1lKSAhPSAtMSAmJiBhcmdzWzJdID09IFwiZmVlZGJhY2tcIiAmJiBKQnJpZGdlICYmIEpCcmlkZ2Uuc2V0Q2xpY2tGZWVkYmFjaykge1xuICAgICAgICByZXR1cm4gSkJyaWRnZS5zZXRDbGlja0ZlZWRiYWNrKGFyZ3NbMV0pO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuX19USFJPVFRFTEVEX0FDVElPTlMgJiYgd2luZG93Ll9fVEhST1RURUxFRF9BQ1RJT05TLmluZGV4T2YoZk5hbWUpID09IC0xKSB7XG4gICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW2ZOYW1lXS5hcHBseShudWxsLCBmdW5jdGlvbkFyZ3MpO1xuICAgIH0gZWxzZSBpZiAod2luZG93Ll9fTEFTVF9GTl9DQUxMRUQgJiYgKGZOYW1lID09IHdpbmRvdy5fX0xBU1RfRk5fQ0FMTEVELmZOYW1lKSkge1xuICAgICAgICBjdXJyVGltZSA9IGdldEN1cnJUaW1lKCk7XG4gICAgICAgIHRpbWVEaWZmID0gY3VyclRpbWUgLSB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRC50aW1lU3RhbXA7XG5cbiAgICAgICAgaWYgKHRpbWVEaWZmID49IDMwMCkge1xuICAgICAgICAgICAgd2luZG93Ll9fUFJPWFlfRk5bZk5hbWVdLmFwcGx5KG51bGwsIGZ1bmN0aW9uQXJncyk7XG4gICAgICAgICAgICB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRC50aW1lU3RhbXAgPSBjdXJyVGltZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImZ1bmN0aW9uIHRocm90dGVsZWRcIiwgZk5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwidGltZSBkaWZmXCIsIHRpbWVEaWZmKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW2ZOYW1lXS5hcHBseShudWxsLCBmdW5jdGlvbkFyZ3MpO1xuICAgICAgICB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRCA9IHtcbiAgICAgICAgICAgIHRpbWVTdGFtcDogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIGZOYW1lOiBmTmFtZVxuICAgICAgICB9XG4gICAgfVxufTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5S0E7Ozs7Ozs7Ozs7Ozs7O0FDakRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7QUN4SEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUVBO0FBQ0E7QUFDQSxTQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFFQTtBQUNBO0FBQ0EsV0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUVBO0FBQ0E7QUFDQTtBQUNBLGVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUNuT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7O0FDOUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBLFdBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLDhEQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7Ozs7QUMxS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFhQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBY0E7QUFDQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBNTFCQTtBQXkyQkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFaQTtBQWVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBOzs7Ozs7Ozs7Ozs7OztBQ3R3Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFUQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3o1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUExQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFMQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFMQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBVEE7QUFQQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTdFQTtBQStFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7Ozs7Ozs7Ozs7OztBQzErREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLG9DQWtCQTtBQUNBO0FBQ0EsYUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBb0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
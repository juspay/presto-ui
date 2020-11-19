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

if (false) {} else if (false) {} else if (true) {
  parseParams = helpers.android.parseParams;
}

function domAll(elem) {
  if (!elem.__ref) {
    elem.__ref = createPrestoElement();
  }

  if (elem.props.id) {
    elem.__ref.__id = parseInt(elem.props.id, 10) || elem.__ref.__id;
  }

  var type = helper.clone(elem.type, null);
  var props = helper.clone(elem.props, null);

  if (props.focus == false && "ANDROID" === "ANDROID") {
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
  if (elem.parentType && "ANDROID" == "ANDROID") return prestoDom({ elemType: type, parentType: elem.parentType }, props, children);

  return prestoDom(type, props, children);
}

function getDomToRender(elem) {
  var res = domAll(elem);
  if (true) {
    return JSON.stringify(res);
  } else {}
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
  if (true) {
    cmd = cmdForAndroid(prop, true, "linearLayout").runInUI;
  } else {}
  return cmd;
}

// Not exported
function applyProp(element, attribute, set) {
  var prop = {
    id: element.__ref.__id
  };
  prop[attribute.value0] = attribute.value1;

  if (attribute.value0 == 'focus' && attribute.value1 == false && "ANDROID" == "ANDROID") {
    return;
  }

  if (true) {
    var cmd = cmdForAndroid(prop, set, element.type);
    if (Android.updateProperties) {
      Android.updateProperties(JSON.stringify(cmd));
    } else {
      Android.runInUI(cmd.runInUI, null);
    }
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
  } else if (true) {
    rep = prestoDom({ elemType: element.type, parentType: element.parentNode.type }, props, []);
  } else {}
  if (true) {
    Android.replaceView(JSON.stringify(rep), element.__ref.__id);
  } else {}
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
  if (true) {
    if (viewGroups.indexOf(child.type) != -1) {
      child.props.root = true;
    } else {
      child.parentType = parent.type;
    }
    Android.addViewToParent(parent.__ref.__id + "", JSON.stringify(domAll(child)), index, null, null);
  } else {}
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
  if (true) {
    Android.addViewToParent(rootId + "", JSON.stringify(domAll(dom)), length - 1, callback, null);
  } else {}

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
if (true) parseParams = __webpack_require__(/*! ./helpers/android/parseParams */ "./src/helpers/android/parseParams.js");else {}

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
      if (true) return "";
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
      if (true) return this.cmdForAndroid(config);else {}
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

      jsx =  false ? undefined : JSON.stringify(jsx);

      if (proxyFnName) Android.addViewToParent(id, jsx, index, proxyFnName, replaceChild);else Android.addViewToParent(id, jsx, index, null, replaceChild);
    }
  }, {
    key: "getView",
    value: function getView(jsx) {
      if (false) {}

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

/***/ "./src/doms/android.js":
/*!*****************************!*\
  !*** ./src/doms/android.js ***!
  \*****************************/
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

var excluded = {
  "CoordinatorLayout": "androidx.coordinatorlayout.widget.",
  "FloatingActionButton": "android.support.design.widget.",
  "Toolbar": "android.support.v7.widget.",
  "AppBarLayout": "android.support.design.widget.",
  "CollapsingToolbarLayout": "android.support.design.widget.",
  "View": "android.view.",
  "WebView": "android.webkit.",
  "ViewPager": "android.support.v4.view.",
  "RotateAnimation": "android.view.animation.",
  "LinearInterpolator": "android.view.animation.",
  "Animation": "android.view.animation.",
  "RecyclerView": "android.support.v7.widget.",
  "PagerTabStrip": "android.support.v4.view.",
  "PagerTitleStrip": "android.support.v4.view.",
  "TabLayout": "in.org.npci.upiapp.",
  "ShimmerFrameLayout": "com.facebook.shimmer.",
  "SwypeLayout": "in.juspay.mystique.",
  "SwypeScroll": "in.juspay.mystique.",
  "AccordionLayout": "in.juspay.mystique.",
  "Shape": "in.juspay.mystique.",
  "BottomSheetLayout": "in.juspay.mystique.",
  "LottieAnimationView": "com.airbnb.lottie."
};

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
    'shimmerFrameLayout': 'android.widget.FrameLayout$LayoutParams->new',
    "bottomSheetLayout": 'android.widget.FrameLayout$LayoutParams->new'
  };

  return viewGroupMap[viewGroup];
}

Array.prototype.flatten = function () {
  return this.reduce(function (prev, cur) {
    var more = [].concat(cur).some(Array.isArray);
    return prev.concat(more ? cur.flatten() : cur);
  }, []);
};

var parseParams = __webpack_require__(/*! ../helpers/android */ "./src/helpers/android/index.js").parseParams;

function setAutogenId(props) {
  props.node_id = window.__NODE_ID + '';
  window.__NODE_ID++;

  if (!props.__filename) props.__filename = "filename not added";
  return props;
}

module.exports = function (type, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var paramType;

  children = children.flatten();

  if (!props) props = {};

  if ((typeof type === "undefined" ? "undefined" : _typeof(type)) === "object") {
    paramType = getCtr(type.parentType);
    props = parseParams(type.elemType, props, "set");
    props = setAutogenId(props);
    props.runInUI = props.runInUI.replace('PARAM_CTR_HOLDER', paramType);
    if (type.elemType == "webView") {
      props.runInUI = "set_xyz=android.webkit.WebViewClient->new;this->setWebViewClient:get_xyz;" + props.runInUI;
    }
    var finalType = type.elemType;
    finalType = finalType[0].toUpperCase() + finalType.substr(1, finalType.length);
    for (var excludedType in excluded) {
      if (excludedType === finalType) {
        return { type: excluded[excludedType] + finalType, props: props, children: children };
      }
    }
    return { type: "android.widget." + finalType, props: props, children: children };
  } else if (typeof type === "string") {
    paramType = getCtr(type);
    props = parseParams(type, props, "set");

    props = setAutogenId(props);

    for (var j = 0; j < children.length; j++) {
      if (children[j].props.runInUI) {
        children[j].props.runInUI = children[j].props.runInUI.replace('PARAM_CTR_HOLDER', paramType);
      }
    }

    type = type[0].toUpperCase() + type.substr(1, type.length);

    for (var excludedType in excluded) {
      if (excludedType === type) {
        return { type: excluded[excludedType] + type, props: props, children: children };
      }
    }

    return { type: "android.widget." + type, props: props, children: children };
  } else {
    return new type(props, children);
  }
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
  if (false) {} else if (false) {} else {
    return __webpack_require__(/*! ./android */ "./src/doms/android.js");
  }
}

module.exports = run();

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

      if (false) {}else {
        if (typeof Android.getNewID == "function") {
          return Android.Render(JSON.stringify(ui.render), null, "false");
        } else {
          return Android.Render(JSON.stringify(ui.render), null);
        }
      }
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

var helpers = {
	common: __webpack_require__(/*! ./common */ "./src/helpers/common/index.js")
};

if (true) {
	helpers.android = __webpack_require__(/*! ./android */ "./src/helpers/android/index.js");
} else {}

module.exports = helpers;

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
if (true) {
    var getScreenDetails = function getScreenDetails() {
        try {
            var details = JSON.parse(Android.getScreenDimensions());
            return {
                screen_width: details.width + "",
                screen_height: details.height + ""
            };
        } catch (err) {
            console.error("error in gettting screen dimensions, setting default values", err);
            return {
                screen_width: "1080",
                screen_height: "1920"
            };
        }
    };
    window.__DEVICE_DETAILS = getScreenDetails();
}

if (false) {} else if (false) {}

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
if (false) { var duiShowScreen; } else if (false) {} else {
    //This would be case for android
    window.__FN_MAP = {};
    window.__ALL_ONCLICKS = [];
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYW5kcm9pZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9QcmVzdG9VSUludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9iYXNlVmlldy5qcyIsIndlYnBhY2s6Ly8vc3JjL2RvbXMvYW5kcm9pZC5qcyIsIndlYnBhY2s6Ly8vc3JjL2RvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9oYW5kbGVyLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVyLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9hbmRyb2lkL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9hbmRyb2lkL21hcFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvYW5kcm9pZC9vYmpNYXAuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2FuZHJvaWQvcGFyc2VQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2NvbW1vbi9jYWxsYmFja01hcHBlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2luaXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0aW5pdDogcmVxdWlyZShcIi4vc3JjL2luaXRcIiksXG5cdGRvbXMgOiByZXF1aXJlKFwiLi9zcmMvZG9tc1wiKSxcblx0aGFuZGxlciA6IHJlcXVpcmUoXCIuL3NyYy9oYW5kbGVyXCIpLFxuXHRoZWxwZXJzIDogcmVxdWlyZShcIi4vc3JjL2hlbHBlcnNcIiksXG5cdGJhc2VWaWV3IDogcmVxdWlyZShcIi4vc3JjL2Jhc2VWaWV3XCIpLFxuXHRhbmltYXRpb25zOiByZXF1aXJlKCcuL3NyYy9hbmltYXRpb25zJyksXG5cdGNhbGxiYWNrTWFwcGVyOiByZXF1aXJlKCcuL3NyYy9oZWxwZXJzL2NvbW1vbi9jYWxsYmFja01hcHBlcicpLFxuXHRnZXRPUzogcmVxdWlyZSgnLi9zcmMvaGVscGVyJykuZ2V0T1MsXG5cdHByZXN0b01lcmdlOiByZXF1aXJlKCcuL3NyYy9oZWxwZXInKS5tZXJnZSxcblx0cHJlc3RvQ2xvbmU6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcicpLmNsb25lXG59IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG52YXIgcHJlc3RvRG9tID0gcmVxdWlyZShcIi4vZG9tc1wiKTtcbnZhciBoZWxwZXJzID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKVxudmFyIHdlYlBhcnNlUGFyYW1zO1xudmFyIGlPU1BhcnNlUGFyYW1zO1xudmFyIHBhcnNlUGFyYW1zO1xuY29uc3QgaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXInKTtcblxuaWYgKHdpbmRvdy5fX09TID09PSBcIldFQlwiKSB7XG4gIHdlYlBhcnNlUGFyYW1zID0gaGVscGVycy53ZWIucGFyc2VQYXJhbXM7XG59IGVsc2UgaWYgKHdpbmRvdy5fX09TID09PSBcIklPU1wiKSB7XG4gIGlPU1BhcnNlUGFyYW1zID0gaGVscGVycy5pb3MucGFyc2VQYXJhbXM7XG59IGVsc2UgaWYgKHdpbmRvdy5fX09TID09PSBcIkFORFJPSURcIikge1xuICBwYXJzZVBhcmFtcyA9IGhlbHBlcnMuYW5kcm9pZC5wYXJzZVBhcmFtcztcbn1cblxuZnVuY3Rpb24gZG9tQWxsKGVsZW0pIHtcbiAgaWYgKCFlbGVtLl9fcmVmKSB7XG4gICAgZWxlbS5fX3JlZiA9IGNyZWF0ZVByZXN0b0VsZW1lbnQoKTtcbiAgfVxuXG4gIGlmIChlbGVtLnByb3BzLmlkKSB7XG4gICAgZWxlbS5fX3JlZi5fX2lkID0gcGFyc2VJbnQoZWxlbS5wcm9wcy5pZCwgMTApIHx8IGVsZW0uX19yZWYuX19pZDtcbiAgfVxuXG4gIHZhciB0eXBlID0gaGVscGVyLmNsb25lKGVsZW0udHlwZSxudWxsKTtcbiAgdmFyIHByb3BzID0gaGVscGVyLmNsb25lKGVsZW0ucHJvcHMsbnVsbCk7XG5cbiAgaWYgKHByb3BzLmZvY3VzID09IGZhbHNlICYmICB3aW5kb3cuX19PUyA9PT0gXCJBTkRST0lEXCIpIHtcbiAgICBkZWxldGUgcHJvcHMuZm9jdXM7XG4gIH1cblxuICB2YXIgY2hpbGRyZW4gPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW0uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjaGlsZHJlbi5wdXNoKGRvbUFsbChlbGVtLmNoaWxkcmVuW2ldKSk7XG4gIH1cblxuXG4gIGlmIChfX09TID09IFwiV0VCXCIgJiYgcHJvcHMub25SZXNpemUpIHtcbiAgICB3aW5kb3cuX19yZXNpemVFdmVudCA9IHByb3BzLm9uUmVzaXplO1xuICB9XG5cbiAgcHJvcHMuaWQgPSBlbGVtLl9fcmVmLl9faWQ7XG4gIGlmKGVsZW0ucGFyZW50VHlwZSAmJiB3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIilcbiAgICByZXR1cm4gcHJlc3RvRG9tKHtlbGVtVHlwZTogdHlwZSwgcGFyZW50VHlwZTogZWxlbS5wYXJlbnRUeXBlfSwgcHJvcHMsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcHJlc3RvRG9tKHR5cGUsIHByb3BzLCBjaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIGdldERvbVRvUmVuZGVyKGVsZW0pIHtcbiAgdmFyIHJlcyA9IGRvbUFsbChlbGVtKTtcbiAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG5cbi8vIE5vdCBleHBvcnRlZFxuZnVuY3Rpb24gY21kRm9yQW5kcm9pZChjb25maWcsIHNldCwgdHlwZSkge1xuICBpZiAoc2V0KSB7XG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgdmFyIG9iaiA9IHBhcnNlUGFyYW1zKHR5cGUsIGNvbmZpZywgXCJzZXRcIik7XG4gICAgICB2YXIgY21kID0gb2JqLnJ1bkluVUkucmVwbGFjZShcInRoaXMtPnNldElkXCIsIFwic2V0X3ZpZXc9Y3R4LT5maW5kVmlld0J5SWRcIikucmVwbGFjZSgvdGhpcy0+L2csIFwiZ2V0X3ZpZXctPlwiKTtcbiAgICAgIGNtZCA9IGNtZC5yZXBsYWNlKC9QQVJBTV9DVFJfSE9MREVSW147XSovZywgXCJnZXRfdmlldy0+Z2V0TGF5b3V0UGFyYW1zO1wiKTtcbiAgICAgIG9iai5ydW5JblVJID0gY21kO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIklEIG51bGwsIHRoaXMgaXMgbm90IHN1cHBvc2VkIHRvIGhhcHBlbi4gRGVidWcgdGhpcyBvci9hbmQgcmFpc2UgYSBpc3N1ZSBpbiBiaXRidWNrZXQuXCIpO1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICB2YXIgX2lkID0gY29uZmlnLmlkO1xuICB2YXIgY21kID0gXCJzZXRfdmlldz1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgX2lkICsgXCI7XCI7XG4gIC8vIHZhciBydW5JblVJO1xuICBkZWxldGUgY29uZmlnLmlkO1xuICBjb25maWcucm9vdCA9IFwidHJ1ZVwiO1xuICB2YXIgb2JqID0gcGFyc2VQYXJhbXModHlwZSwgY29uZmlnLCBcImdldFwiKTtcbiAgb2JqLnJ1bkluVUkgPSBjbWQgKyBvYmoucnVuSW5VSSArICc7JztcbiAgb2JqLmlkID0gX2lkO1xuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBnZXRSdW5JblVJQ21kKHByb3ApIHtcbiAgdmFyIGNtZDtcbiAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgY21kID0gY21kRm9yQW5kcm9pZChwcm9wLCB0cnVlLCBcImxpbmVhckxheW91dFwiKS5ydW5JblVJO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiSU9TXCIpe1xuICAgIGNtZCA9IHByb3A7XG4gIH0gZWxzZSB7XG4gICAgY21kID0gd2ViUGFyc2VQYXJhbXMoXCJsaW5lYXJMYXlvdXRcIiwgcHJvcCwgXCJzZXRcIik7XG4gIH1cbiAgcmV0dXJuIGNtZDtcbn1cblxuXG5cbi8vIE5vdCBleHBvcnRlZFxuZnVuY3Rpb24gYXBwbHlQcm9wKGVsZW1lbnQsIGF0dHJpYnV0ZSwgc2V0KSB7XG4gIHZhciBwcm9wID0ge1xuICAgIGlkOiBlbGVtZW50Ll9fcmVmLl9faWRcbiAgfVxuICBwcm9wW2F0dHJpYnV0ZS52YWx1ZTBdID0gYXR0cmlidXRlLnZhbHVlMTtcblxuICBpZiAoYXR0cmlidXRlLnZhbHVlMCA9PSAnZm9jdXMnICYmIGF0dHJpYnV0ZS52YWx1ZTEgPT0gZmFsc2UgJiYgIHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgdmFyIGNtZCA9IGNtZEZvckFuZHJvaWQocHJvcCwgc2V0LCBlbGVtZW50LnR5cGUpO1xuICAgIGlmIChBbmRyb2lkLnVwZGF0ZVByb3BlcnRpZXMpIHtcbiAgICAgIEFuZHJvaWQudXBkYXRlUHJvcGVydGllcyhKU09OLnN0cmluZ2lmeShjbWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQW5kcm9pZC5ydW5JblVJKGNtZC5ydW5JblVJLCBudWxsKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJJT1NcIil7XG4gICAgQW5kcm9pZC5ydW5JblVJKHByb3ApO1xuICB9IGVsc2Uge1xuICAgIEFuZHJvaWQucnVuSW5VSSh3ZWJQYXJzZVBhcmFtcyhcImxpbmVhckxheW91dFwiLCBwcm9wLCBcInNldFwiKSk7XG4gIH1cbiAgLy8gQW5kcm9pZC5ydW5JblVJKHBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIHByb3AsIFwic2V0XCIpKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVZpZXcoZWxlbWVudCwgYXR0cmlidXRlLCByZW1vdmVQcm9wKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiUkVQTEFDRSBWSUVXXCIsIGVsZW1lbnQuX19yZWYuX19pZCwgZWxlbWVudC5wcm9wcyk7XG4gIHZhciBwcm9wcyA9IGhlbHBlci5jbG9uZShlbGVtZW50LnByb3BzLG51bGwpO1xuICBwcm9wcy5pZCA9IGVsZW1lbnQuX19yZWYuX19pZDtcbiAgdmFyIHJlcDtcbiAgdmFyIHZpZXdHcm91cHMgPSBbXCJsaW5lYXJMYXlvdXRcIiwgXCJyZWxhdGl2ZUxheW91dFwiLCBcInNjcm9sbFZpZXdcIiwgXCJmcmFtZUxheW91dFwiLCBcImhvcml6b250YWxTY3JvbGxWaWV3XCJdO1xuXG4gIGlmICh2aWV3R3JvdXBzLmluZGV4T2YoZWxlbWVudC50eXBlKSAhPSAtMSl7XG4gICAgcHJvcHMucm9vdCA9IHRydWU7XG4gICAgcmVwID0gcHJlc3RvRG9tKGVsZW1lbnQudHlwZSwgcHJvcHMsIFtdKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIHJlcCA9IHByZXN0b0RvbSh7ZWxlbVR5cGU6IGVsZW1lbnQudHlwZSwgcGFyZW50VHlwZTogZWxlbWVudC5wYXJlbnROb2RlLnR5cGV9LCBwcm9wcywgW10pO1xuICB9IGVsc2Uge1xuICAgIHJlcCA9IHByZXN0b0RvbShlbGVtZW50LnR5cGUsIHByb3BzLCBbXSk7XG4gIH1cbiAgaWYod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpe1xuICAgIEFuZHJvaWQucmVwbGFjZVZpZXcoSlNPTi5zdHJpbmdpZnkocmVwKSwgZWxlbWVudC5fX3JlZi5fX2lkKTtcbiAgfSBlbHNlIHtcbiAgICBBbmRyb2lkLnJlcGxhY2VWaWV3KHJlcCwgZWxlbWVudC5fX3JlZi5fX2lkKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByZXN0b0VsZW1lbnQoKSB7XG4gICAgaWYodHlwZW9mKHdpbmRvdy5fX3VpX2lkX3NlcXVlbmNlKSAhPSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5fX3VpX2lkX3NlcXVlbmNlICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHsgX19pZCA6ICsrd2luZG93Ll9fdWlfaWRfc2VxdWVuY2UgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSA9IHR5cGVvZiBBbmRyb2lkLmdldE5ld0lEID09IFwiZnVuY3Rpb25cIiA/IHBhcnNlSW50KEFuZHJvaWQuZ2V0TmV3SUQoKSkgKiAxMDAwMDAwIDogd2luZG93Ll9fUFJFU1RPX0lEIDtcbiAgICAgICAgcmV0dXJuIHsgX19pZCA6ICsrd2luZG93Ll9fdWlfaWRfc2VxdWVuY2UgfTtcbiAgICB9XG59O1xuXG5cbmZ1bmN0aW9uIG1vdmVDaGlsZChjaGlsZCwgcGFyZW50LCBpbmRleCkge1xuICBBbmRyb2lkLm1vdmVWaWV3KGNoaWxkLl9fcmVmLl9faWQsIGluZGV4KTtcbn1cblxuXG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkKGNoaWxkLCBwYXJlbnQsIGluZGV4KSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiUmVtb3ZlIGNoaWxkIDpcIiwgY2hpbGQudHlwZSk7XG4gIEFuZHJvaWQucmVtb3ZlVmlldyhjaGlsZC5fX3JlZi5fX2lkICsgXCJcIik7XG59XG5cbmZ1bmN0aW9uIGFkZENoaWxkKGNoaWxkLCBwYXJlbnQsIGluZGV4KSB7XG4gIGlmKGNoaWxkLnR5cGUgPT0gbnVsbCkge1xuICAgIGNvbnNvbGUud2FybihcImNoaWxkIG51bGxcIik7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coXCJBZGQgY2hpbGQgOlwiLCBjaGlsZC5fX3JlZi5fX2lkLCBjaGlsZC50eXBlKTtcbiAgdmFyIHZpZXdHcm91cHMgPSBbXCJsaW5lYXJMYXlvdXRcIiwgXCJyZWxhdGl2ZUxheW91dFwiLCBcInNjcm9sbFZpZXdcIiwgXCJmcmFtZUxheW91dFwiLCBcImhvcml6b250YWxTY3JvbGxWaWV3XCJdO1xuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICBpZiAodmlld0dyb3Vwcy5pbmRleE9mKGNoaWxkLnR5cGUpICE9IC0xKXtcbiAgICAgIGNoaWxkLnByb3BzLnJvb3QgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZC5wYXJlbnRUeXBlID0gcGFyZW50LnR5cGU7XG4gICAgfVxuICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHBhcmVudC5fX3JlZi5fX2lkICsgXCJcIiwgSlNPTi5zdHJpbmdpZnkoZG9tQWxsKGNoaWxkKSksIGluZGV4LCBudWxsLCBudWxsKTtcbiAgfVxuICBlbHNlXG4gICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQocGFyZW50Ll9fcmVmLl9faWQsIGRvbUFsbChjaGlsZCksIGluZGV4LCBudWxsLCBudWxsKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuICAvLyBjb25zb2xlLmxvZyhcImFkZCBhdHRyIDpcIiwgYXR0cmlidXRlKTtcbiAgZWxlbWVudC5wcm9wc1thdHRyaWJ1dGUudmFsdWUwXSA9IGF0dHJpYnV0ZS52YWx1ZTE7XG4gIGFwcGx5UHJvcChlbGVtZW50LCBhdHRyaWJ1dGUsIHRydWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwicmVtb3ZlIGF0dHIgOlwiLCBhdHRyaWJ1dGUpO1xuICByZXBsYWNlVmlldyhlbGVtZW50LCBhdHRyaWJ1dGUsIHRydWUpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlIGF0dHIgOlwiLCBhdHRyaWJ1dGUpO1xuICBlbGVtZW50LnByb3BzW2F0dHJpYnV0ZS52YWx1ZTBdID0gYXR0cmlidXRlLnZhbHVlMTtcblxuICBhcHBseVByb3AoZWxlbWVudCwgYXR0cmlidXRlLCBmYWxzZSk7XG59XG5cblxuZnVuY3Rpb24gaW5zZXJ0RG9tKHJvb3QsIGRvbSwgY2IpIHtcbiAgcm9vdC5jaGlsZHJlbi5wdXNoKGRvbSk7XG4gIGRvbS5wYXJlbnROb2RlID0gcm9vdDtcbiAgZG9tLl9fcmVmID0gY3JlYXRlUHJlc3RvRWxlbWVudCgpO1xuICB3aW5kb3cuTiA9IHJvb3Q7XG5cbiAgdmFyIHJvb3RJZCA9IHdpbmRvdy5fX1JPT1RTQ1JFRU4uaWRTZXQucm9vdDtcblxuICBkb20ucHJvcHMucm9vdCA9IHRydWU7XG5cbiAgdmFyIGxlbmd0aCA9IHdpbmRvdy5fX1JPT1RTQ1JFRU4uaWRTZXQuY2hpbGQucHVzaChkb20uX19yZWYuX19pZCk7XG5cbiAgdmFyIGNhbGxiYWNrID0gd2luZG93LmNhbGxiYWNrTWFwcGVyKGV4ZWN1dGVQb3N0UHJvY2VzcyhjYikpO1xuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChyb290SWQgKyBcIlwiLCBKU09OLnN0cmluZ2lmeShkb21BbGwoZG9tKSksIGxlbmd0aCAtIDEsIGNhbGxiYWNrLCBudWxsKTtcbiAgfVxuICBlbHNlIHtcbiAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChyb290SWQsIGRvbUFsbChkb20pLCBsZW5ndGggLSAxLCBjYWxsYmFjaywgbnVsbCk7XG4gIH1cblxuICByZXR1cm4gZG9tLl9fcmVmLl9faWQ7XG5cbn1cblxuXG5mdW5jdGlvbiBleGVjdXRlUG9zdFByb2Nlc3MoY2IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNiKCk7XG5cbiAgICBpZih3aW5kb3cuX19kdWlfc2NyZWVuICYmIHdpbmRvd1tcImFmdGVyUmVuZGVyXCJdKSB7XG4gICAgICBmb3IgKHZhciB0YWcgaW4gd2luZG93W1wiYWZ0ZXJSZW5kZXJcIl1bd2luZG93Ll9fZHVpX3NjcmVlbl0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3aW5kb3dbXCJhZnRlclJlbmRlclwiXVt3aW5kb3cuX19kdWlfc2NyZWVuXVt0YWddKCkoKTtcbiAgICAgICAgICB3aW5kb3dbXCJhZnRlclJlbmRlclwiXVt3aW5kb3cuX19kdWlfc2NyZWVuXVtcImV4ZWN1dGVkXCJdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoSkJyaWRnZSAmJiBKQnJpZGdlLnNldFNoYWRvdykge1xuICAgICAgZm9yICh2YXIgdGFnIGluIHdpbmRvdy5zaGFkb3dPYmplY3QpIHtcbiAgICAgICAgSkJyaWRnZS5zZXRTaGFkb3cod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wibGV2ZWxcIl0sXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJ2aWV3SWRcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiYmFja2dyb3VuZENvbG9yXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImJsdXJWYWx1ZVwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJzaGFkb3dDb2xvclwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJkeFwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJkeVwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJzcHJlYWRcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZmFjdG9yXCJdKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRvbUFsbDogZG9tQWxsLFxuICBnZXREb21Ub1JlbmRlcjogZ2V0RG9tVG9SZW5kZXIsXG4gIGdldFJ1bkluVUlDbWQ6IGdldFJ1bkluVUlDbWQsXG4gIHJlcGxhY2VWaWV3OiByZXBsYWNlVmlldyxcbiAgY3JlYXRlUHJlc3RvRWxlbWVudDogY3JlYXRlUHJlc3RvRWxlbWVudCxcbiAgbW92ZUNoaWxkOiBtb3ZlQ2hpbGQsXG4gIHJlbW92ZUNoaWxkOiByZW1vdmVDaGlsZCxcbiAgYWRkQ2hpbGQ6IGFkZENoaWxkLFxuICBhZGRBdHRyaWJ1dGU6IGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlOiByZW1vdmVBdHRyaWJ1dGUsXG4gIHVwZGF0ZVByb3BlcnR5OiB1cGRhdGVBdHRyaWJ1dGUsXG4gIGFkZFByb3BlcnR5OiBhZGRBdHRyaWJ1dGUsXG4gIGluc2VydERvbTogaW5zZXJ0RG9tXG59O1xuXG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbmNvbnN0IEJhc2VWaWV3ID0gcmVxdWlyZSgnLi9iYXNlVmlldycpO1xuY29uc3QgVklFVyA9IG5ldyBCYXNlVmlldyhudWxsLCBudWxsLCB7fSk7XG5cbi8vIE9iamVjdCBvZiB0eXBlcyBvZiBhbmltYXRpb25zIGF2YWlsYWJsZSBvbiBzY3JlZW4gY2hhbmdlXG5jb25zdCBBbmltYXRpb25UeXBlcyA9IHtcbiAgU0xJREU6IHtcbiAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgaGFuZGxlcjogc2xpZGVIYW5kbGVyXG4gIH0sXG4gIFNMSURFX1ZFUlRJQ0FMOiB7XG4gICAgbmFtZTogXCJzbGlkZV9kb3duXCIsXG4gICAgaGFuZGxlcjogc2xpZGVEb3duSGFuZGxlclxuICB9LFxuICBTSU1QTEU6IHtcbiAgICBuYW1lOiBcInNpbXBsZVwiLFxuICAgIGhhbmRsZXI6IHNpbXBsZUhhbmRsZXJcbiAgfVxufVxuXG5jb25zdCBERUZBVUxUX0FOSU1BVElPTiA9IEFuaW1hdGlvblR5cGVzLlNMSURFO1xuXG5mdW5jdGlvbiBzaW1wbGVIYW5kbGVyKGZyb21JZCwgdG9JZCwgZGlyZWN0aW9uKSB7XG4gIGxldCBjbWQgPSBWSUVXLmNtZCh7XG4gICAgaWQ6IHRvSWQsXG4gICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXhcbiAgfSk7XG4gIHJldHVybiBjbWQ7XG59XG5cbmZ1bmN0aW9uIHNsaWRlRG93bkhhbmRsZXIoZnJvbUlkLCB0b0lkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGNvbnRhaW5lciA9IFZJRVcuY21kQ29udGFpbmVyKCk7XG4gIGxldCBjbWQ7XG5cbiAgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IHRvSWQsXG4gICAgICB0cmFuc2xhdGlvblk6IHdpbmRvdy5fX0hFSUdIVCxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblk6ICcwJyxcbiAgICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4LFxuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiBmcm9tSWQsXG4gICAgICBhX3RyYW5zbGF0aW9uWTogLTAuMiAqIHdpbmRvdy5fX0hFSUdIVCxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIHdpbmRvdy5aSW5kZXgrKztcbiAgY21kID0gVklFVy5jbWQoe1xuICAgIGlkOiBmcm9tSWQsXG4gICAgdHJhbnNsYXRpb25ZOiAwLFxuICAgIGFfdHJhbnNsYXRpb25ZOiB3aW5kb3cuX19IRUlHSFQsXG4gICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXhcbiAgfSk7XG4gIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgaWQ6IHRvSWQsXG4gICAgdHJhbnNsYXRpb25aOiB3aW5kb3cuWkluZGV4LTEsXG4gICAgYV90cmFuc2xhdGlvblk6ICcwJyxcbiAgICB0cmFuc2xhdGlvblk6IC0wLjIgKiB3aW5kb3cuX19IRUlHSFQsXG4gICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gIH0pO1xuICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gc2xpZGVIYW5kbGVyKGZyb21JZCwgdG9JZCwgZGlyZWN0aW9uKSB7XG4gIGxldCBjb250YWluZXIgPSBWSUVXLmNtZENvbnRhaW5lcigpO1xuICBsZXQgY21kO1xuICBpZiAoZGlyZWN0aW9uID09IDEpIHtcbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogdG9JZCxcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgIHRyYW5zbGF0aW9uWDogd2luZG93Ll9fV0lEVEgsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25YOiAnMCcsXG4gICAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleCxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IGZyb21JZCxcbiAgICAgIHRyYW5zbGF0aW9uWDogJzAnLFxuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgICBhX3RyYW5zbGF0aW9uWDogKC0uMiAqIHdpbmRvdy5fX1dJRFRIKSArICcnLFxuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcbiAgfVxuXG4gIGlmIChkaXJlY3Rpb24gPT0gLTEpIHtcbiAgICB3aW5kb3cuWkluZGV4Kys7XG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IGZyb21JZCxcbiAgICAgIHRyYW5zbGF0aW9uWDogJzAnLFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgICBhX3RyYW5zbGF0aW9uWDogd2luZG93Ll9fV0lEVEgsXG4gICAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleCxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogdG9JZCxcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgIHRyYW5zbGF0aW9uWDogKC0uMiAqIHdpbmRvdy5fX1dJRFRIKSArICcnLFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgICBhX3RyYW5zbGF0aW9uWDogJzAnLFxuICAgICAgdHJhbnNsYXRpb25aOiB3aW5kb3cuWkluZGV4IC0gMSxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vKlxuICBHZW5lcmljIEhhbmRsZXIgZm9yIEFuaW1hdGlvblxuICBBcmd1bWVudHM6XG4gICAgZnJvbVZpZXdJZDogTnVtYmVyIC0gSWQgb2YgdGhlIHZpZXcgY3VycmVudGx5IHZpc2libGUgb24gdGhlIHNjcmVlblxuICAgIHRvVmlld0lEOiBOdW1iZXIgLSBJZCBvZiB0aGUgdmlldyB3aGljaCBoYXMgdG8gYmUgYnJvdWdodCBvbiB0aGUgc2NyZWVuXG4gICAgSUQ6IE51bWJlciAtIElkIG9mIHRoZSB2aWV3IHRvIGJlIGFuaW1hdGVkXG4gICAgYW5pbWF0b3I6IE9iaiAtIHtuYW1lOnN0cmluZywgaGFuZGxlcjpmdW5jdGlvbn1cbiAgICBkaXJlY3Rpb246IE51bWJlciAtIFJlcHJlc2VudHMgb2YgdGhlIGRpcmVjdGlvbiBvZiB0aGUgc2NyZWVuXG4gICAgICAtMSA6IEdvIGJhY2sgdG8gdGhlIGFscmVhZHkgcmVuZGVyZWQgc2NyZWVuIChyaWdodCB0byBsZWZ0KVxuICAgICAgIDEgOiBHbyB0byB0aGUgbmV3IHNjcmVlbiAobGVmdCB0byByaWdodClcbiovXG5mdW5jdGlvbiBnZXRBbmltYXRpb24oZnJvbVZpZXdJRCwgdG9WaWV3SWQsIGRpcmVjdGlvbiwgYW5pbWF0b3IpIHtcbiAgaWYgKCFhbmltYXRvcilcbiAgICBhbmltYXRvciA9IERFRkFVTFRfQU5JTUFUSU9OO1xuXG4gIGlmICh0eXBlb2YgYW5pbWF0b3IgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGFuaW1hdG9yLmhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIilcbiAgICByZXR1cm4gYW5pbWF0b3IuaGFuZGxlcihmcm9tVmlld0lELCB0b1ZpZXdJZCwgZGlyZWN0aW9uKTtcbiAgZWxzZVxuICAgIGNvbnNvbGUubG9nKG5ldyBFcnJvcihcIkFuaW1hdGlvbiBoYW5kbGVyIGlzIG5vdCBhIGZ1bmN0aW9uLCB0eXBlOiBcIiArXG4gICAgICBhbmltYXRvcikpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy50eXBlcyA9IEFuaW1hdGlvblR5cGVzO1xubW9kdWxlLmV4cG9ydHMuZ2V0QW5pbWF0aW9uID0gZ2V0QW5pbWF0aW9uOyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuY29uc3QgbWVyZ2UgPSAgcmVxdWlyZShcIi4vaGVscGVyXCIpLm1lcmdlO1xuXG5TdHJpbmcucHJvdG90eXBlLmFkZENtZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgcmV0dXJuIHRoaXMuY29uY2F0KGRhdGEpO1xufTtcblxuQXJyYXkucHJvdG90eXBlLmFkZENtZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgdGhpcy5wdXNoKGRhdGEpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmxldCBwYXJzZVBhcmFtcztcbmlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIilcbiAgcGFyc2VQYXJhbXMgPSByZXF1aXJlKCcuL2hlbHBlcnMvYW5kcm9pZC9wYXJzZVBhcmFtcycpO1xuZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJXRUJcIilcbiAgcGFyc2VQYXJhbXMgPSByZXF1aXJlKCcuL2hlbHBlcnMvd2ViL3BhcnNlUGFyYW1zJyk7XG5lbHNlXG4gIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lvcy9wYXJzZVBhcmFtcycpO1xuXG5jbGFzcyBCYXNlVmlldyB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjaGlsZHJlbikge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW4gfHwgW107XG5cbiAgICB3aW5kb3cuX19TRVRGTiA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIEFuZHJvaWQucnVuSW5VSShcbiAgICAgICAgdGhpcy5zZXQoY29uZmlnKSxcbiAgICAgICAgbnVsbFxuICAgICAgKVxuICAgIH0uYmluZCh0aGlzKVxuXG4gICAgdGhpcy5pZFNldCA9IHt9O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaWQpIHtcbiAgICAgIHRoaXMuaWRTZXRbXCJpZFwiXSA9IHRoaXMucHJvcHMuaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuaWQgPSB0aGlzLmlkKFwiaWRcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuX3JlZikge1xuICAgICAgdGhpcy5wcm9wcy5fcmVmKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZC5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRSZWN1cnNlKG9iaiwgc2VsZWN0b3IpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBvYmouY2hpbGRyZW47XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY2hpbGRyZW5baV0uZGlzcGxheU5hbWUgJiYgY2hpbGRyZW5baV0uZGlzcGxheU5hbWUgPT0gc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5mb3VuZENoaWxkcmVuLnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRyZW5baV0uY2hpbGRyZW4gJiYgY2hpbGRyZW5baV0uY2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgICB0aGlzLmZpbmRSZWN1cnNlKGNoaWxkcmVuW2ldLCBzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZmluZChzZWxlY3Rvciwgb2JqKSB7XG4gICAgdGhpcy5mb3VuZENoaWxkcmVuID0gW107XG5cbiAgICBpZiAoIW9iailcbiAgICAgIHRoaXMuZmluZFJlY3Vyc2UodGhpcy5sYXlvdXQsIHNlbGVjdG9yKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmZpbmRSZWN1cnNlKG9iaiwgc2VsZWN0b3IpO1xuXG4gICAgcmV0dXJuIHRoaXMuZm91bmRDaGlsZHJlbjtcbiAgfVxuXG4gIGlkKG5hbWUpIHtcbiAgICBpZiAoIXRoaXMuaWRTZXRbbmFtZV0pIHtcbiAgICAgIHdpbmRvdy5fX0lEKys7XG4gICAgICB0aGlzLmlkU2V0W25hbWVdID0gd2luZG93Ll9fSUQ7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzLmlkU2V0W25hbWVdO1xuICB9XG5cbiAgc2V0SWRzKGFycikge1xuICAgIGlmICghdGhpcy5pZFNldClcbiAgICAgIHRoaXMuaWRTZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuaWRTZXRbYXJyW2ldXSkge1xuICAgICAgICB3aW5kb3cuX19JRCsrO1xuICAgICAgICB0aGlzLmlkU2V0W2FycltpXV0gPSB3aW5kb3cuX19JRCArICcnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNwZWNpYWxDaGFycyh2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUuaW5kZXhPZignLCcpID4gLTEgPyB2YWx1ZS5yZXBsYWNlKC9cXCwvZywgJ1xcXFxcXFxcLCcpIDogdmFsdWU7XG4gICAgdmFsdWUgPSB2YWx1ZS5pbmRleE9mKCc6JykgPiAtMSA/IHZhbHVlLnJlcGxhY2UoL1xcOi9nLCAnXFxcXFxcXFw6JykgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJz0nKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFw9L2csICdcXFxcXFxcXD0nKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gdmFsdWUuaW5kZXhPZignOycpID4gLTEgPyB2YWx1ZS5yZXBsYWNlKC9cXDsvZywgJ1xcXFxcXFxcOycpIDogdmFsdWU7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjbWRGb3JBbmRyb2lkKGNvbmZpZykge1xuICAgIHZhciBjbWQgPSBcInNldF92aWV3PWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBjb25maWcuaWQgKyBcIjtcIjtcbiAgICB2YXIgcnVuSW5VSTtcblxuICAgIGlmIChjb25maWcudG9hc3QpIHtcbiAgICAgIGNtZCA9IFwic2V0X1RPQVNUPWFuZHJvaWQud2lkZ2V0LlRvYXN0LT5tYWtlVGV4dDpjdHhfY3R4LGNzX1wiICsgdGhpcy5oYW5kbGVTcGVjaWFsQ2hhcnMoXG4gICAgICAgICAgY29uZmlnLnRleHQpICsgXCIsaV9cIiArIChjb25maWcuZHVyYXRpb24gPT0gXCJzaG9ydFwiID8gMCA6IDEpICtcbiAgICAgICAgXCI7Z2V0X1RPQVNULT5zaG93XCI7XG4gICAgfSBlbHNlIGlmIChjb25maWcgJiYgT2JqZWN0LmtleXMoY29uZmlnKS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG5cbiAgICAgIGNvbmZpZy5yb290ID0gXCJ0cnVlXCI7XG4gICAgICBydW5JblVJID0gcGFyc2VQYXJhbXMoXCJsaW5lYXJMYXlvdXRcIiwgY29uZmlnLCBcImdldFwiKS5ydW5JblVJO1xuXG4gICAgICBjbWQgKz0gcnVuSW5VSSArICc7JztcbiAgICB9XG5cbiAgICByZXR1cm4gY21kO1xuICB9XG5cbiAgY21kQ29udGFpbmVyKCkge1xuICAgIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIilcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNtZEZvcldlYihjb25maWcpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoY29uZmlnKS5sZW5ndGgpXG4gICAgICByZXR1cm4gcGFyc2VQYXJhbXMoXCJsaW5lYXJMYXlvdXRcIiwgY29uZmlnLCBcInNldFwiKTtcbiAgfVxuXG4gIGNtZChjb25maWcpIHtcbiAgICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gICAgICByZXR1cm4gdGhpcy5jbWRGb3JBbmRyb2lkKGNvbmZpZyk7XG4gICAgZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJXRUJcIilcbiAgICAgIHJldHVybiB0aGlzLmNtZEZvcldlYihjb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBhcHBlbmRDaGlsZChpZCwganN4LCBpbmRleCwgZm4sIHJlcGxhY2VDaGlsZCkge1xuICAgIHZhciBwcm94eUZuTmFtZTtcbiAgICBpZiAoIXJlcGxhY2VDaGlsZCkge1xuICAgICAgcmVwbGFjZUNoaWxkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGZuKSB7XG4gICAgICBwcm94eUZuTmFtZSA9ICdGJyArIHdpbmRvdy5fX0ZOX0lOREVYO1xuICAgICAgd2luZG93Ll9fUFJPWFlfRk5bcHJveHlGbk5hbWVdID0gZm47XG4gICAgICB3aW5kb3cuX19GTl9JTkRFWCsrO1xuICAgIH1cblxuICAgIGpzeCA9ICh3aW5kb3cuX19PUyAhPSBcIkFORFJPSURcIikgPyBqc3ggOiBKU09OLnN0cmluZ2lmeShqc3gpO1xuXG4gICAgaWYgKHByb3h5Rm5OYW1lKVxuICAgICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQoaWQsIGpzeCwgaW5kZXgsIHByb3h5Rm5OYW1lLCByZXBsYWNlQ2hpbGQpO1xuICAgIGVsc2VcbiAgICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KGlkLCBqc3gsIGluZGV4LCBudWxsLCByZXBsYWNlQ2hpbGQpO1xuICB9XG5cbiAgZ2V0Vmlldyhqc3gpIHtcbiAgICBpZiAod2luZG93Ll9fT1MgIT0gXCJBTkRST0lEXCIpXG4gICAgICByZXR1cm4ganN4O1xuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzeCk7XG4gIH1cblxuICB1cGRhdGVQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBtZXJnZSh0aGlzLnByb3BzLCBwcm9wcyk7XG4gICAgY29uc3Qgb2xkQ29udGFpbmVySWQgPSB0aGlzLmxheW91dC5pZFNldC5pZDtcbiAgICBjb25zdCBsYXlvdXQgPSB0aGlzLnJlbmRlcigpO1xuICAgIGZvciAobGV0IGk9MDsgaTxsYXlvdXQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpPT0wKSB0aGlzLnJlcGxhY2VDaGlsZChvbGRDb250YWluZXJJZCwgbGF5b3V0LmNoaWxkcmVuW2ldLCBpKTtcbiAgICAgIGVsc2UgdGhpcy5hcHBlbmRDaGlsZChvbGRDb250YWluZXJJZCwgbGF5b3V0LmNoaWxkcmVuW2ldLCBpKTtcbiAgICB9XG4gICAgdGhpcy5sYXlvdXQuaWRTZXQuaWQgPSBvbGRDb250YWluZXJJZDtcbiAgfVxuXG4gIHJlbW92ZVZpZXcoaWQpIHtcbiAgICBpZiAoX19PUyA9PSBcIldFQlwiKVxuICAgICAgcmV0dXJuIEFuZHJvaWQucmVtb3ZlVmlldyhpZCk7XG4gICAgcmV0dXJuIFwic2V0X1ZJRVc9Y3R4LT5maW5kVmlld0J5SWQ6aV9cIiArIGlkICtcbiAgICAgIFwiO3NldF9QQVJFTlQ9Z2V0X1ZJRVctPmdldFBhcmVudDtnZXRfUEFSRU5ULT5yZW1vdmVWaWV3OmdldF9WSUVXO1wiXG4gIH1cblxuICByZW1vdmVDaGlsZHJlbihpZCkge1xuICAgIGlmIChfX09TID09IFwiV0VCXCIpXG4gICAgICByZXR1cm4gQW5kcm9pZC5yZW1vdmVDaGlsZHJlbihpZCk7XG4gICAgcmV0dXJuIFwic2V0X1ZJRVc9Y3R4LT5maW5kVmlld0J5SWQ6aV9cIiArIGlkICtcbiAgICAgIFwiO2dldF9WSUVXLT5yZW1vdmVBbGxWaWV3cztcIlxuICB9XG5cbiAgcmVwbGFjZUNoaWxkKGlkLCBqc3gsIGluZGV4LCBmbikge1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoaWQsIGpzeCwgaW5kZXgsIGZuLCB0cnVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VWaWV3OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxudmFyIGV4Y2x1ZGVkID0ge1xuICBcIkNvb3JkaW5hdG9yTGF5b3V0XCI6IFwiYW5kcm9pZHguY29vcmRpbmF0b3JsYXlvdXQud2lkZ2V0LlwiLFxuICBcIkZsb2F0aW5nQWN0aW9uQnV0dG9uXCI6IFwiYW5kcm9pZC5zdXBwb3J0LmRlc2lnbi53aWRnZXQuXCIsXG4gIFwiVG9vbGJhclwiOiBcImFuZHJvaWQuc3VwcG9ydC52Ny53aWRnZXQuXCIsXG4gIFwiQXBwQmFyTGF5b3V0XCI6IFwiYW5kcm9pZC5zdXBwb3J0LmRlc2lnbi53aWRnZXQuXCIsXG4gIFwiQ29sbGFwc2luZ1Rvb2xiYXJMYXlvdXRcIjogXCJhbmRyb2lkLnN1cHBvcnQuZGVzaWduLndpZGdldC5cIixcbiAgXCJWaWV3XCI6IFwiYW5kcm9pZC52aWV3LlwiLFxuICBcIldlYlZpZXdcIjogXCJhbmRyb2lkLndlYmtpdC5cIixcbiAgXCJWaWV3UGFnZXJcIjogXCJhbmRyb2lkLnN1cHBvcnQudjQudmlldy5cIixcbiAgXCJSb3RhdGVBbmltYXRpb25cIjogXCJhbmRyb2lkLnZpZXcuYW5pbWF0aW9uLlwiLFxuICBcIkxpbmVhckludGVycG9sYXRvclwiOiBcImFuZHJvaWQudmlldy5hbmltYXRpb24uXCIsXG4gIFwiQW5pbWF0aW9uXCI6IFwiYW5kcm9pZC52aWV3LmFuaW1hdGlvbi5cIixcbiAgXCJSZWN5Y2xlclZpZXdcIjogXCJhbmRyb2lkLnN1cHBvcnQudjcud2lkZ2V0LlwiLFxuICBcIlBhZ2VyVGFiU3RyaXBcIjogXCJhbmRyb2lkLnN1cHBvcnQudjQudmlldy5cIixcbiAgXCJQYWdlclRpdGxlU3RyaXBcIjogXCJhbmRyb2lkLnN1cHBvcnQudjQudmlldy5cIixcbiAgXCJUYWJMYXlvdXRcIjogXCJpbi5vcmcubnBjaS51cGlhcHAuXCIsXG4gIFwiU2hpbW1lckZyYW1lTGF5b3V0XCI6IFwiY29tLmZhY2Vib29rLnNoaW1tZXIuXCIsXG4gIFwiU3d5cGVMYXlvdXRcIjogXCJpbi5qdXNwYXkubXlzdGlxdWUuXCIsXG4gIFwiU3d5cGVTY3JvbGxcIjogXCJpbi5qdXNwYXkubXlzdGlxdWUuXCIsXG4gIFwiQWNjb3JkaW9uTGF5b3V0XCI6IFwiaW4uanVzcGF5Lm15c3RpcXVlLlwiLFxuICBcIlNoYXBlXCI6IFwiaW4uanVzcGF5Lm15c3RpcXVlLlwiLFxuICBcIkJvdHRvbVNoZWV0TGF5b3V0XCI6IFwiaW4uanVzcGF5Lm15c3RpcXVlLlwiLFxuICBcIkxvdHRpZUFuaW1hdGlvblZpZXdcIjogXCJjb20uYWlyYm5iLmxvdHRpZS5cIlxufVxuXG5mdW5jdGlvbiBnZXRDdHIodmlld0dyb3VwKSB7XG4gIHZhciB2aWV3R3JvdXBNYXAgPSB7XG4gICAgJ2xpbmVhckxheW91dCc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdjb29yZGluYXRvckxheW91dCc6ICdhbmRyb2lkeC5jb29yZGluYXRvcmxheW91dC53aWRnZXQuQ29vcmRpbmF0b3JMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdzY3JvbGxWaWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2hvcml6b250YWxTY3JvbGxWaWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3JlbGF0aXZlTGF5b3V0JzogJ2FuZHJvaWQud2lkZ2V0LlJlbGF0aXZlTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnZnJhbWVMYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICd0b29sYmFyJzogJ2FuZHJvaWQuc3VwcG9ydC52Ny53aWRnZXQuVG9vbGJhciRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2NvbGxhcHNpbmdUb29sYmFyTGF5b3V0JzogJ2FuZHJvaWR4LmNvb3JkaW5hdG9ybGF5b3V0LndpZGdldC5Db29yZGluYXRvckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2FwcEJhckxheW91dCc6ICdhbmRyb2lkLnN1cHBvcnQuZGVzaWduLndpZGdldC5BcHBCYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICd2aWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3RhYkxheW91dCc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICd2aWV3UGFnZXInOiAnYW5kcm9pZC5zdXBwb3J0LnY0LnZpZXcuVmlld1BhZ2VyJExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnbGlzdFZpZXcnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnZXhwYW5kYWJsZUxpc3RWaWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3JlY3ljbGVyVmlldyc6ICdhbmRyb2lkLnN1cHBvcnQudjcud2lkZ2V0LlJlY3ljbGVyVmlldyRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3JhdGluZ0Jhcic6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdhY2NvcmRpb25MYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdzd3lwZUxheW91dCc6ICdhbmRyb2lkLndpZGdldC5GcmFtZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3N3eXBlU2Nyb2xsJzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3NoaW1tZXJGcmFtZUxheW91dCc6ICdhbmRyb2lkLndpZGdldC5GcmFtZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgXCJib3R0b21TaGVldExheW91dFwiOiAnYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnXG4gIH1cblxuICByZXR1cm4gdmlld0dyb3VwTWFwW3ZpZXdHcm91cF07XG59XG5cbkFycmF5LnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICB2YXIgbW9yZSA9IFtdLmNvbmNhdChjdXIpLnNvbWUoQXJyYXkuaXNBcnJheSk7XG4gICAgcmV0dXJuIHByZXYuY29uY2F0KG1vcmUgPyBjdXIuZmxhdHRlbigpIDogY3VyKTtcbiAgfSwgW10pO1xufTtcblxudmFyIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi4vaGVscGVycy9hbmRyb2lkJykucGFyc2VQYXJhbXM7XG5cbmZ1bmN0aW9uIHNldEF1dG9nZW5JZChwcm9wcykge1xuICAgIHByb3BzLm5vZGVfaWQgPSB3aW5kb3cuX19OT0RFX0lEICsgJyc7XG4gICAgd2luZG93Ll9fTk9ERV9JRCsrO1xuXG4gICAgaWYgKCFwcm9wcy5fX2ZpbGVuYW1lKVxuICAgICAgcHJvcHMuX19maWxlbmFtZSA9IFwiZmlsZW5hbWUgbm90IGFkZGVkXCI7XG4gIHJldHVybiBwcm9wcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0eXBlLCBwcm9wcywgLi4uY2hpbGRyZW4pIHtcbiAgdmFyIHBhcmFtVHlwZTtcblxuICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZsYXR0ZW4oKTtcblxuICBpZiAoIXByb3BzKVxuICAgIHByb3BzID0ge307XG5cbiAgaWYodHlwZW9mIHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICBwYXJhbVR5cGUgPSBnZXRDdHIodHlwZS5wYXJlbnRUeXBlKTtcbiAgICBwcm9wcyA9IHBhcnNlUGFyYW1zKHR5cGUuZWxlbVR5cGUsIHByb3BzLCBcInNldFwiKTtcbiAgICBwcm9wcyA9IHNldEF1dG9nZW5JZChwcm9wcyk7XG4gICAgcHJvcHMucnVuSW5VSSA9IHByb3BzLnJ1bkluVUkucmVwbGFjZSgnUEFSQU1fQ1RSX0hPTERFUicsIHBhcmFtVHlwZSk7XG4gICAgaWYodHlwZS5lbGVtVHlwZSA9PSBcIndlYlZpZXdcIikge1xuICAgICAgcHJvcHMucnVuSW5VSSA9IFwic2V0X3h5ej1hbmRyb2lkLndlYmtpdC5XZWJWaWV3Q2xpZW50LT5uZXc7dGhpcy0+c2V0V2ViVmlld0NsaWVudDpnZXRfeHl6O1wiICsgcHJvcHMucnVuSW5VSTtcbiAgICB9XG4gICAgdmFyIGZpbmFsVHlwZSA9IHR5cGUuZWxlbVR5cGU7XG4gICAgZmluYWxUeXBlID0gZmluYWxUeXBlWzBdLnRvVXBwZXJDYXNlKCkgKyBmaW5hbFR5cGUuc3Vic3RyKDEsIGZpbmFsVHlwZS5sZW5ndGgpO1xuICAgIGZvciAodmFyIGV4Y2x1ZGVkVHlwZSBpbiBleGNsdWRlZCkge1xuICAgICAgaWYgKGV4Y2x1ZGVkVHlwZSA9PT0gZmluYWxUeXBlKSB7XG4gICAgICAgIHJldHVybiB7IHR5cGU6IGV4Y2x1ZGVkW2V4Y2x1ZGVkVHlwZV0gKyBmaW5hbFR5cGUsIHByb3BzOiBwcm9wcywgY2hpbGRyZW46IGNoaWxkcmVuIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt0eXBlOiBcImFuZHJvaWQud2lkZ2V0LlwiICsgZmluYWxUeXBlLCBwcm9wczogcHJvcHMsIGNoaWxkcmVuOiBjaGlsZHJlbn1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHBhcmFtVHlwZSA9IGdldEN0cih0eXBlKTtcbiAgICBwcm9wcyA9IHBhcnNlUGFyYW1zKHR5cGUsIHByb3BzLCBcInNldFwiKTtcblxuICAgIHByb3BzID0gc2V0QXV0b2dlbklkKHByb3BzKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChjaGlsZHJlbltqXS5wcm9wcy5ydW5JblVJKSB7XG4gICAgICAgIGNoaWxkcmVuW2pdLnByb3BzLnJ1bkluVUkgPSBjaGlsZHJlbltqXS5wcm9wcy5ydW5JblVJLnJlcGxhY2UoJ1BBUkFNX0NUUl9IT0xERVInLCBwYXJhbVR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHR5cGUgPSB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnN1YnN0cigxLCB0eXBlLmxlbmd0aClcblxuICAgIGZvciAodmFyIGV4Y2x1ZGVkVHlwZSBpbiBleGNsdWRlZCkge1xuICAgICAgaWYgKGV4Y2x1ZGVkVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICByZXR1cm4geyB0eXBlOiBleGNsdWRlZFtleGNsdWRlZFR5cGVdICsgdHlwZSwgcHJvcHM6IHByb3BzLCBjaGlsZHJlbjogY2hpbGRyZW4gfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHR5cGU6IFwiYW5kcm9pZC53aWRnZXQuXCIgKyB0eXBlLCBwcm9wczogcHJvcHMsIGNoaWxkcmVuOiBjaGlsZHJlbiB9XG5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IHR5cGUocHJvcHMsIGNoaWxkcmVuKTtcbiAgfVxufSIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuZnVuY3Rpb24gcnVuKCkge1xuICBpZiAod2luZG93Ll9fT1MgPT09IFwiSU9TXCIpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vaW9zXCIpXG4gIH0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT09IFwiV0VCXCIpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vd2ViXCIpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL2FuZHJvaWRcIilcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1bigpOyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGhhbmRsZSA6ICh1aSwgY2FsbGJhY2spID0+IHtcbiAgICBpZiAoIXVpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKHVpLnJlbmRlcikge1xuICAgICAgaWYgKHR5cGVvZiBBbmRyb2lkID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbmRyb2lkIGlzIHVuZGVmaW5lZFwiKTtcblxuICAgICAgaWYgKHdpbmRvdy5fX09TICE9IFwiQU5EUk9JRFwiKVxuICAgICAgICByZXR1cm4gQW5kcm9pZC5SZW5kZXIodWkucmVuZGVyLCBudWxsKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBpZih0eXBlb2YgQW5kcm9pZC5nZXROZXdJRCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gQW5kcm9pZC5SZW5kZXIoSlNPTi5zdHJpbmdpZnkodWkucmVuZGVyKSwgbnVsbCwgXCJmYWxzZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gQW5kcm9pZC5SZW5kZXIoSlNPTi5zdHJpbmdpZnkodWkucmVuZGVyKSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih1aS5ydW5JblVJKSB7XG4gICAgICBBbmRyb2lkLnJ1bkluVUkodWkucnVuSW5VSSwgbnVsbCk7XG4gICAgfVxuICAgIGlmKHVpLmFkZFZpZXdUb1BhcmVudCkge1xuICAgICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQodWkuYWRkVmlld1RvUGFyZW50LnBhcmVudElkLCBKU09OLnN0cmluZ2lmeSh1aS5hZGRWaWV3VG9QYXJlbnQuanN4KSwgdWkuYWRkVmlld1RvUGFyZW50LmluZGV4LCBudWxsKTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbi8vIEZvbGxvd2luZyBmdW5jdGlvbnMgYXJlIHVzZWQgYnkgV0VCIGFuZCBJT1MgUmVuZGVyXG5mdW5jdGlvbiBjYWNoZURpbWVuKHZpZXcpIHtcbiAgbGV0IHByb3BzID0gdmlldy5wcm9wcztcbiAgbGV0IGRpbWVuID0ge1xuICAgIHc6IHByb3BzLncsXG4gICAgaDogcHJvcHMuaCxcbiAgICB4OiBwcm9wcy54LFxuICAgIHk6IHByb3BzLnksXG4gICAgZ3Jhdml0eTogcHJvcHMuZ3Jhdml0eSxcbiAgICBwYWRkaW5nOiBwcm9wcy5wYWRkaW5nLFxuICAgIG9yaWVudGF0aW9uOiBwcm9wcy5vcmllbnRhdGlvbixcbiAgICBzdHJva2U6IHByb3BzLnN0cm9rZSA/IHByb3BzLnN0cm9rZS5zcGxpdChcIixcIilbMF0gKiAxIDogMCxcbiAgfVxuICB3aW5kb3cuX19WSUVXX0RJTUVOU0lPTlNbcHJvcHMuaWRdID0gZGltZW47XG59XG5cbmZ1bmN0aW9uIHNob3VsZE1vdmUodmlldykge1xuICBsZXQgcHJvcHMgPSB2aWV3LnByb3BzO1xuICBsZXQgZGltZW4gPSB7XG4gICAgdzogcHJvcHMudyxcbiAgICBoOiBwcm9wcy5oLFxuICAgIHg6IHByb3BzLngsXG4gICAgeTogcHJvcHMueVxuICB9O1xuICBsZXQgY2FjaGVkRGltZW4gPSB3aW5kb3cuX19WSUVXX0RJTUVOU0lPTlNbcHJvcHMuaWRdO1xuICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICBpZiAoIWNhY2hlZERpbWVuKVxuICAgIHJldHVybiBkaW1lbjtcbiAgZm9yIChsZXQga2V5IGluIGRpbWVuKSB7XG4gICAgaWYgKGNhY2hlZERpbWVuW2tleV0gIT0gZGltZW5ba2V5XSkge1xuICAgICAgZGltZW4uaWQgPSBwcm9wcy5pZDtcbiAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBpZiAoY2hhbmdlZClcbiAgICByZXR1cm4gZGltZW47XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRPUygpIHtcbiAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICghdXNlckFnZW50KVxuICAgIHJldHVybiBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIlVzZXJBZ2VudCBpcyBudWxsXCIpKTtcbiAgaWYgKHVzZXJBZ2VudC5pbmNsdWRlcyhcIkFuZHJvaWRcIikgJiYgdXNlckFnZW50LmluY2x1ZGVzKFwiVmVyc2lvblwiKSlcbiAgICByZXR1cm4gXCJBTkRST0lEXCI7XG4gIGlmICgodXNlckFnZW50LmluY2x1ZGVzKFwiaVBob25lXCIpIHx8IHVzZXJBZ2VudC5pbmNsdWRlcyhcImlQYWRcIikpICYmICF1c2VyQWdlbnQuaW5jbHVkZXMoXCJWZXJzaW9uXCIpKVxuICAgIHJldHVybiBcIklPU1wiO1xuICByZXR1cm4gXCJXRUJcIjtcbn1cblxuZnVuY3Rpb24gY2xlYXJWaWV3RXh0ZXJuYWxzKHZpZXcpIHtcbiAgaWYgKCF2aWV3KVxuICAgIHJldHVybjtcblxuICBkZWxldGUgd2luZG93Ll9fVklFV1Nbdmlldy5wcm9wcy5pZF07XG4gIGRlbGV0ZSB3aW5kb3cuX19WSUVXX0RJTUVOU0lPTlNbdmlldy5wcm9wcy5pZF07XG4gIFxuICBpZihfX09CU0VSVkVSU1t2aWV3LnByb3BzLmlkXSlcbiAgICBkZWxldGUgd2luZG93Ll9fT0JTRVJWRVJTW3ZpZXcucHJvcHMuaWRdO1xuXG4gIHZpZXcuY2hpbGRyZW4uZm9yRWFjaChjbGVhclZpZXdFeHRlcm5hbHMpO1xufVxuXG4vLyB1c2U6IGNsb25lKCA8dGhpbmcgdG8gY29weT4gKSByZXR1cm5zIDxuZXcgY29weT5cbmZ1bmN0aW9uIGNsb25lKG8sIG0pe1xuICAvLyByZXR1cm4gbm9uIG9iamVjdCB2YWx1ZXNcbiAgaWYoJ29iamVjdCcgIT09dHlwZW9mIG8pIHJldHVybiBvXG4gIC8vIG06IGEgbWFwIG9mIG9sZCByZWZzIHRvIG5ldyBvYmplY3QgcmVmcyB0byBzdG9wIHJlY3Vyc2lvblxuICBpZignb2JqZWN0JyAhPT10eXBlb2YgbSB8fCBudWxsID09PW0pIG0gPW5ldyBXZWFrTWFwKClcbiAgdmFyIG4gPW0uZ2V0KG8pXG4gIGlmKCd1bmRlZmluZWQnICE9PXR5cGVvZiBuKSByZXR1cm4gblxuICAvLyBzaGFsbG93L2xlYWYgY2xvbmUgb2JqZWN0XG4gIHZhciBjID1PYmplY3QuZ2V0UHJvdG90eXBlT2YobykuY29uc3RydWN0b3JcbiAgLy8gVE9ETzogc3BlY2lhbGl6ZSBjb3BpZXMgZm9yIGV4cGVjdGVkIGJ1aWx0IGluIHR5cGVzIGkuZS4gRGF0ZSBldGNcbiAgc3dpdGNoKGMpIHtcbiAgICAvLyBzaG91bGRuJ3QgYmUgY29waWVkLCBrZWVwIHJlZmVyZW5jZVxuICAgIGNhc2UgQm9vbGVhbjpcbiAgICBjYXNlIEVycm9yOlxuICAgIGNhc2UgRnVuY3Rpb246XG4gICAgY2FzZSBOdW1iZXI6XG4gICAgY2FzZSBQcm9taXNlOlxuICAgIGNhc2UgU3RyaW5nOlxuICAgIGNhc2UgU3ltYm9sOlxuICAgIGNhc2UgV2Vha01hcDpcbiAgICBjYXNlIFdlYWtTZXQ6XG4gICAgICBuID1vXG4gICAgICBicmVhaztcbiAgICAvLyBhcnJheSBsaWtlL2NvbGxlY3Rpb24gb2JqZWN0c1xuICAgIGNhc2UgQXJyYXk6XG4gICAgICBtLnNldChvLCBuID1vLnNsaWNlKDApKVxuICAgICAgLy8gcmVjdXJzaXZlIGNvcHkgZm9yIGNoaWxkIG9iamVjdHNcbiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbih2LGkpe1xuICAgICAgICBpZignb2JqZWN0JyA9PT10eXBlb2YgdikgbltpXSA9Y2xvbmUodiwgbSlcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBBcnJheUJ1ZmZlcjpcbiAgICAgIG0uc2V0KG8sIG4gPW8uc2xpY2UoMCkpXG4gICAgICBicmVhaztcbiAgICBjYXNlIERhdGFWaWV3OlxuICAgICAgbS5zZXQobywgbiA9bmV3IChjKShjbG9uZShvLmJ1ZmZlciwgbSksIG8uYnl0ZU9mZnNldCwgby5ieXRlTGVuZ3RoKSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTWFwOlxuICAgIGNhc2UgU2V0OlxuICAgICAgbS5zZXQobywgbiA9bmV3IChjKShjbG9uZShBcnJheS5mcm9tKG8uZW50cmllcygpKSwgbSkpKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBJbnQ4QXJyYXk6XG4gICAgY2FzZSBVaW50OEFycmF5OlxuICAgIGNhc2UgVWludDhDbGFtcGVkQXJyYXk6XG4gICAgY2FzZSBJbnQxNkFycmF5OlxuICAgIGNhc2UgVWludDE2QXJyYXk6XG4gICAgY2FzZSBJbnQzMkFycmF5OlxuICAgIGNhc2UgVWludDMyQXJyYXk6XG4gICAgY2FzZSBGbG9hdDMyQXJyYXk6XG4gICAgY2FzZSBGbG9hdDY0QXJyYXk6XG4gICAgICBtLnNldChvLCBuID1uZXcgKGMpKGNsb25lKG8uYnVmZmVyLCBtKSwgby5ieXRlT2Zmc2V0LCBvLmxlbmd0aCkpXG4gICAgICBicmVhaztcbiAgICAvLyB1c2UgYnVpbHQgaW4gY29weSBjb25zdHJ1Y3RvclxuICAgIGNhc2UgRGF0ZTpcbiAgICBjYXNlIFJlZ0V4cDpcbiAgICAgIG0uc2V0KG8sIG4gPW5ldyAoYykobykpXG4gICAgICBicmVhaztcbiAgICAvLyBmYWxsYmFjayBnZW5lcmljIG9iamVjdCBjb3B5XG4gICAgZGVmYXVsdDpcbiAgICAgIG0uc2V0KG8sIG4gPU9iamVjdC5hc3NpZ24obmV3IChjKSgpLCBvKSlcbiAgICAgIC8vIHJlY3Vyc2l2ZSBjb3B5IGZvciBjaGlsZCBvYmplY3RzXG4gICAgICBmb3IoYyBpbiBuKSBpZignb2JqZWN0JyA9PT10eXBlb2YgbltjXSkgbltjXSA9Y2xvbmUobltjXSwgbSlcbiAgfVxuICByZXR1cm4gblxufVxuXG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgdmFyIG9iaiA9IHt9LFxuICAgICAgaSA9IDAsXG4gICAgICBpbCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICBrZXk7XG4gIGZvciAoOyBpIDwgaWw7IGkrKykge1xuICAgICAgZm9yIChrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIG9ialtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hvdWxkTW92ZSxcbiAgY2FjaGVEaW1lbixcbiAgZ2V0T1MsXG4gIG1lcmdlLFxuICBjbGVhclZpZXdFeHRlcm5hbHMsXG4gIGNsb25lLFxufSIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHBhcnNlUGFyYW1zIDogcmVxdWlyZShcIi4vcGFyc2VQYXJhbXNcIiksXG5cdG1hcFByYW1zIDogcmVxdWlyZShcIi4vbWFwUGFyYW1zXCIpLFxuXHRjYWxsYmFja01hcHBlciA6IHJlcXVpcmUoXCIuLi9jb21tb24vY2FsbGJhY2tNYXBwZXJcIilcbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxudmFyIG1hcCA9IHtcbiAgdGV4dEZyb21IdG1sOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRUZXh0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYmFzZUFsaWduOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6IFwic2V0QmFzZWxpbmVBbGlnbmVkXCIsXG4gIH0sXG4gIHNob3dEaXZpZGVyczoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0U2hvd0RpdmlkZXJzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJkaXZpZGVyRHJhd2FibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RGl2aWRlckRyYXdhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgdGFiVGV4dENvbG9yczoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiAnc2V0VGFiVGV4dENvbG9ycycsXG4gIH0sXG4gIFwic2VsZWN0ZWRUYWJJbmRpY2F0b3JIZWlnaHRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2VsZWN0ZWRUYWJJbmRpY2F0b3JIZWlnaHQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBmb3JlZ3JvdW5kOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRDb2xvcicsXG4gICAgaW5Wb2tlZEluOiAnRk9SRUdST1VORCcsXG4gIH0sXG4gIHNlbGVjdGVkVGFiSW5kaWNhdG9yQ29sb3I6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNlbGVjdGVkVGFiSW5kaWNhdG9yQ29sb3InLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBsYXlvdXRUcmFuc2l0aW9uOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRMYXlvdXRUcmFuc2l0aW9uJyxcbiAgICBpblZva2VkSW46ICdMQVlPVVRfVFJBTlNJVElPTicsXG4gIH0sXG5cbiAgZm9jdXNPdXQ6IHsgLy8gZG9lc250IHdvcmtcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnY2xlYXJGb2N1cycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3JlcXVlc3RGb2N1cycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG5cbiAgZmlsbFZpZXdwb3J0OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6IFwic2V0RmlsbFZpZXdwb3J0XCIsXG4gIH0sXG4gIFwicHJpbWl0aXZlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0UHJpbWl0aXZlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LCBcbiAgXCJjeFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEN4JyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImN5XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q3knLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwicmFkaXVzXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0UmFkaXVzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImhleFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldENvbG9yJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInN0eWxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U3R5bGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwic3dlZXBBbmdsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFN3ZWVwQW5nbGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwic3RhcnRBbmdsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFN0YXJ0QW5nbGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwic3Ryb2tlV2lkdGhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTdHJva2VXaWR0aCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgc2V0RGF0ZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdsJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0RGF0ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIG1pbkRhdGU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnbCcsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldE1pbkRhdGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBtYXhEYXRlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2wnLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRNYXhEYXRlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgY2xpcENoaWxkcmVuOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRDbGlwQ2hpbGRyZW4nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBhZGp1c3RWaWV3Qm91bmRzOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRBZGp1c3RWaWV3Qm91bmRzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgbWF4TGluZXM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldE1heExpbmVzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgc2luZ2xlTGluZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0U2luZ2xlTGluZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGhhcmR3YXJlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRMYXllclR5cGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBzZWxlY3RlZDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2VsZWN0ZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBjdXJ2ZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICAgICdsaW5lYXInOiBcIjBcIlxuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldEludGVycG9sYXRvcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGZvbnRGYW1pbHk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ25vcm1hbCc6IDAsXG4gICAgICAnYm9sZCc6IDEsXG4gICAgICAnaXRhbGljJzogMixcbiAgICAgICdib2xkX2l0YWxpYyc6IDNcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRGb250RmFtaWx5JyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICB4OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICAnYnJpbmdUb0Zyb250Jzoge1xuICAgIHZhbHVlczogW10sXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiBcImJyaW5nVG9Gcm9udFwiLFxuICB9LFxuICAnYWJvdmUnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgXCJjaGVja2VkXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldENoZWNrZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB5OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImJhY2tncm91bmREcmF3YWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCYWNrZ3JvdW5kJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYnV0dG9uVGludDoge1xuICAgIHZhbHVlOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCdXR0b25UaW50TGlzdCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHZpc2liaWxpdHk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICB2aXNpYmxlOiAwLFxuICAgICAgaW52aXNpYmxlOiA0LFxuICAgICAgZ29uZTogOFxuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldFZpc2liaWxpdHknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNjYWxlVHlwZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTY2FsZVR5cGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInByb2dyZXNzQ29sb3JcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SW5kZXRlcm1pbmF0ZVRpbnRMaXN0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJhbHBoYVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRBbHBoYScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaW1hZ2VVcmxcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SW1hZ2VEcmF3YWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwicGxhY2VIb2xkZXJcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SW1hZ2VEcmF3YWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwicGFja2FnZUljb25cIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRJbWFnZURyYXdhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInNjcm9sbFRvXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzbW9vdGhTY3JvbGxUbycsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJjb3JuZXJSYWRpaVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldENvcm5lclJhZGlpJyxcbiAgICBpblZva2VkSW46ICdEUkFXQUJMRSdcbiAgfSxcbiAgXCJsaW5lU3BhY2luZ1wiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRMaW5lU3BhY2luZycsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJ1cmxcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnbG9hZFVybCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwidHJhbnNsYXRpb25ZXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRyYW5zbGF0aW9uWScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwidHJhbnNsYXRpb25YXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRyYW5zbGF0aW9uWCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHRyYW5zbGF0aW9uWjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VHJhbnNsYXRpb25aJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJkZWxheVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2wnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTdGFydERlbGF5JyxcbiAgfSxcbiAgXCJkdXJhdGlvblwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2wnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXREdXJhdGlvbicsXG4gIH0sXG4gIFwicGl2b3RYXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFBpdm90WCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwicGl2b3RZXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFBpdm90WScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwibWluV2lkdGhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TWluaW11bVdpZHRoJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJtaW5IZWlnaHRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TWluaW11bUhlaWdodCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwibWF4V2lkdGhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TWF4V2lkdGgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNoYWRvd1RhZ1wiOiB7XG4gICAgICB2YWx1ZXM6IFt7XG4gICAgICAgICAgICB0eXBlOiAnY3MnLFxuICAgICAgICAgIH1dLFxuICAgICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgICAgZm5OYW1lOiAnc2hhZG93VGFnJyxcbiAgICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIH0sXG4gIFwiYW5kcm9pZFNoYWRvd1wiOiB7XG4gICAgICB2YWx1ZXM6IFt7XG4gICAgICAgICAgICB0eXBlOiAnY3MnLFxuICAgICAgICAgIH1dLFxuICAgICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgICAgZm5OYW1lOiAnYW5kcm9pZFNoYWRvdycsXG4gICAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICB9LFxuICBcImdyYWRpZW50XCI6IHtcbiAgICAgIHZhbHVlczogW3tcbiAgICAgICAgdHlwZTogJ2NzJ1xuICAgICAgfV0sXG4gICAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgICBmbk5hbWU6ICdzZXRDb2xvcnMnLFxuICAgICAgaW5Wb2tlZEluOiAnRFJBV0FCTEUnXG4gIH0sXG4gIFwiZ3JhZGllbnRBbmdsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldE9yaWVudGF0aW9uJyxcbiAgICBpblZva2VkSW46ICdEUkFXQUJMRSdcbn0sXG4gIFwibGluZUhlaWdodFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRMaW5lSGVpZ2h0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImxldHRlclNwYWNpbmdcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TGV0dGVyU3BhY2luZycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaGludFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2NzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SGludCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaW5wdXRUeXBlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBwYXNzd29yZDogJzEyOScsXG4gICAgICBudW1lcmljOiAnMicsXG4gICAgICBudW1lcmljUGFzc3dvcmQ6ICcxOCcsXG4gICAgICBudW1lcmljV2l0aG91dFN1Z2dlc3Rpb246ICc1MjQyOTEnLFxuICAgICAgZGlzYWJsZWQ6ICcwJyxcbiAgICAgIHRleHQ6ICcxJyxcbiAgICAgIG11bHRpVGV4dDogJzMnXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0SW5wdXRUeXBlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJpbnB1dFR5cGVJXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SW5wdXRUeXBlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJ0ZXh0U2l6ZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUZXh0U2l6ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiZm9udFNpemVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRleHRTaXplJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJ0ZXh0SXNTZWxlY3RhYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRleHRJc1NlbGVjdGFibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImZvbnRTdHlsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRUeXBlZmFjZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwidGV4dEFsbENhcHNcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QWxsQ2FwcycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiZXhwYW5kXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RXhwYW5kJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImZvY3VzYWJsZUluVG91Y2hNb2RlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Rm9jdXNhYmxlSW5Ub3VjaE1vZGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZGVzY2VuZGFudEZvY3VzYWJpbGl0eVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldERlc2NlbmRhbnRGb2N1c2FiaWxpdHknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZXhwYW5kRHVyYXRpb25cIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRFeHBhbmREdXJhdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJleHBhbmRTY3JvbGxQYXJlbnRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTY3JvbGxQYXJlbnQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZXhwYW5kQWxwaGFcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRFeHBhbmRBbHBoYScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJkZWZhdWx0RXhwYW5kXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RGVmYXVsdEV4cGFuZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJzd3lwZUVuYWJsZWRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTd3lwZUVuYWJsZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIHRvYXN0OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2NzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2hvd1RvYXN0JyxcbiAgICBpblZva2VkSW46ICdDT05URVhUJyxcbiAgfSxcbiAgc2NhbGVYOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTY2FsZVgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBzY2FsZVk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNjYWxlWScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGlkOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRJZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGdyYXZpdHk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBjZW50ZXJfaG9yaXpvbnRhbDogMSxcbiAgICAgIGNlbnRlcl92ZXJ0aWNhbDogMTYsXG4gICAgICBib3R0b20gOiA4MCxcbiAgICAgIGxlZnQ6IDgzODg2MTEsXG4gICAgICByaWdodDogODM4ODYxMyxcbiAgICAgIGNlbnRlcjogMTcsXG4gICAgICBib3R0b206IDgwLFxuICAgICAgdG9wX3ZlcnRpY2FsOiA0OCxcbiAgICAgIHN0YXJ0OiA4Mzg4NjExLFxuICAgICAgZW5kOiA4Mzg4NjEzLFxuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldEdyYXZpdHknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBvcmllbnRhdGlvbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGhvcml6b250YWw6IDAsXG4gICAgICB2ZXJ0aWNhbDogMSxcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRPcmllbnRhdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHRleHQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnY3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUZXh0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgd2lkdGg6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBtYXRjaF9wYXJlbnQ6IC0xLFxuICAgICAgd3JhcF9jb250ZW50OiAtMixcbiAgICB9XSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGN0cjogdHJ1ZSxcbiAgICB2YXJOYW1lOiAndmFyX3dpZHRoJ1xuICB9LFxuICB3ZWlnaHQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgICBtYXRjaF9wYXJlbnQ6IC0xLFxuICAgICAgd3JhcF9jb250ZW50OiAtMixcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgdmFyTmFtZTogJ3Zhcl93ZWlnaHQnXG4gIH0sXG4gIGhlaWdodDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIG1hdGNoX3BhcmVudDogLTEsXG4gICAgICB3cmFwX2NvbnRlbnQ6IC0yLFxuICAgIH1dLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgY3RyOiB0cnVlLFxuICAgIHZhck5hbWU6ICd2YXJfaGVpZ2h0J1xuICB9LFxuICBsYXlvdXRfZ3Jhdml0eToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGJvdHRvbV9yaWdodDogMjEsXG4gICAgICB0b3A6IDMwLFxuICAgICAgYm90dG9tOiA1MCxcbiAgICAgIGxlZnQ6IDMsXG4gICAgICByaWdodDogNSxcbiAgICAgIGNlbnRlcjogMTcsXG4gICAgICBib3R0b206IDgwLFxuICAgICAgY2VudGVyX2hvcml6b250YWw6IDEsXG4gICAgICBjZW50ZXJfdmVydGljYWw6IDE2LFxuICAgICAgc3RhcnQ6IDgzODg2MTEsXG4gICAgICBlbmQ6IDgzODg2MTMsXG4gICAgfV0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICB2YXJOYW1lOiBcInZhcl9ncmF2aXR5XCIsXG4gIH0sXG4gIG1hcmdpbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcInNldE1hcmdpbnNcIixcbiAgfSxcbiAgbWFyZ2luU3RhcnQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJzZXRNYXJnaW5TdGFydFwiLFxuICB9LFxuICBtYXJnaW5FbmQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJzZXRNYXJnaW5FbmRcIixcbiAgfSxcbiAgcGFkZGluZzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogXCJzZXRQYWRkaW5nUmVsYXRpdmVcIixcbiAgfSxcbiAgJ2NlbnRlckluUGFyZW50Jzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMTMsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgJ2NlbnRlckhvcml6b250YWwnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAxNCxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICAnY2VudGVyVmVydGljYWwnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAxNSxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICBcImNoZWNrZWRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q2hlY2tlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gICdhbGlnblBhcmVudEJvdHRvbSc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDEyLFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gICdhbGlnblBhcmVudFRvcCc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDEwLFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gICdhbGlnblBhcmVudFJpZ2h0Jzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMTEsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgJ2FsaWduUGFyZW50TGVmdCc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDksXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgJ2xlZnRPZic6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDAsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgY29ybmVyUmFkaXVzOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwZidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ0RSQVdBQkxFJyxcbiAgICBmbk5hbWU6IFwic2V0Q29ybmVyUmFkaXVzXCIsXG4gIH0sXG4gIHN0cm9rZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ0RSQVdBQkxFJyxcbiAgICBmbk5hbWU6IFwic2V0U3Ryb2tlXCIsXG4gIH0sXG4gIFwidHlwZWZhY2VcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICdub3JtYWwnOiAwLFxuICAgICAgJ2JvbGQnOiAxLFxuICAgICAgJ2l0YWxpYyc6IDIsXG4gICAgICAnYm9sZF9pdGFsaWMnOiAzXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0VHlwZWZhY2UnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdEUkFXQUJMRScsXG4gICAgZm5OYW1lOiBcInNldENvbG9yXCIsXG4gIH0sXG4gIGJhY2tncm91bmREcmF3YWJsZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QmFja2dyb3VuZERyYXdhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6IFwic2V0QmFja2dyb3VuZENvbG9yXCIsXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUZXh0Q29sb3InLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBoaW50Q29sb3I6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEhpbnRUZXh0Q29sb3InLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBidG5CYWNrZ3JvdW5kOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdNVVRBVEVCRycsXG4gICAgZm5OYW1lOiBcInNldENvbG9yRmlsdGVyXCIsXG4gIH0sXG4gIGNvbG9yRmlsdGVyOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6IFwic2V0Q29sb3JGaWx0ZXJcIixcbiAgfSxcbiAgYnRuQ29sb3I6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRleHRDb2xvcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHNoYWRvd0xheWVyOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2YnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2YnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTaGFkb3dMYXllcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGVsZXZhdGlvbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RWxldmF0aW9uJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgcm90YXRpb25YOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRSb3RhdGlvblgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICByb3RhdGlvblk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFJvdGF0aW9uWScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHJvdGF0aW9uOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRSb3RhdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGJhY2tncm91bmRUaW50OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCYWNrZ3JvdW5kVGludExpc3QnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNjcm9sbEJhclhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SG9yaXpvbnRhbFNjcm9sbEJhckVuYWJsZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNjcm9sbEJhcllcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VmVydGljYWxTY3JvbGxCYXJFbmFibGVkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJjbGlja2FibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q2xpY2thYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJjdXJzb3JcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDdXJzb3JWaXNpYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImxvbmdDbGlja2FibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRMb25nQ2xpY2thYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImZvY3VzYWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRGb2N1c2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNlbGVjdGFibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QmFja2dyb3VuZFJlc291cmNlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzZWxlY3RhYmxlSXRlbVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCYWNrZ3JvdW5kUmVzb3VyY2UnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB2YWx1ZXM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEFkYXB0ZXInLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIG1heFNlZWs6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRNYXgnLFxuICAgIGluVm9rZWRJbjogXCJWSUVXXCIsXG4gICAgZG9udE1hcDogdHJ1ZVxuICB9LFxuICBhY2Nlc3NpYmlsaXR5SGludDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0Q29udGVudERlc2NyaXB0aW9uJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgaW1lT3B0aW9uczoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0SW1lT3B0aW9ucycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaG9yaXpvbnRhbEZhZGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SG9yaXpvbnRhbEZhZGluZ0VkZ2VFbmFibGVkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJmYWRpbmdFZGdlTGVuZ3RoXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RmFkaW5nRWRnZUxlbmd0aCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2hpbW1lclwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJhY2tncm91bmQnLFxuICAgIGFsdGVybmF0ZUZuTmFtZTogJ3NldFNoaW1tZXInLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNoaW1tZXJBY3RpdmVcIjoge1xuICAgIHZhbHVlcyA6IFtdLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzdGFydFNoaW1tZXInLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNoaW1tZXJJbmFjdGl2ZVwiOiB7XG4gICAgdmFsdWVzIDogW10sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3N0b3BTaGltbWVyJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJwZWFrSGVpZ2h0XCI6IHtcbiAgICB2YWx1ZXMgOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRQZWFrSGVpZ2h0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzaGVldFN0YXRlXCI6IHtcbiAgICB2YWx1ZXMgOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZXhwYW5kZWQgOiAzLFxuICAgICAgY29sbGFwc2VkIDogNCxcbiAgICAgIGhpZGRlbiA6IDUsXG4gICAgICBoYWxmRXhwYW5kZWQgOiA2XG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0U3RhdGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImhhbGZFeHBhbmRlZFJhdGlvXCI6IHtcbiAgICB2YWx1ZXMgOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEhhbGZFeHBhbmRlZFJhdGlvJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJoaWRlYWJsZVwiOiB7XG4gICAgdmFsdWVzIDogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRIaWRlYWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXA7XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cblxudmFyICBtYXAgPSB7XG4gICdQQVJBTVMnOiB7XG4gICAgJ3JlcXVpcmVkJzogJ3dpZHRoLCBoZWlnaHQnLFxuICAgICd2aWV3TWV0aG9kJzogJ3NldExheW91dFBhcmFtcyxnZXRMYXlvdXRQYXJhbXMnXG4gIH0sXG4gICdEUkFXQUJMRSc6IHtcbiAgICAnY3RyJzogJ2FuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS0+bmV3JyxcbiAgICAncmVxdWlyZWQnOiAnJyxcbiAgICAndmlld01ldGhvZCc6ICdzZXRCYWNrZ3JvdW5kLGdldEJhY2tncm91bmQnXG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcDtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxudmFyIG1hcFBhcmFtcyA9IHJlcXVpcmUoJy4vbWFwUGFyYW1zJyk7XG52YXIgb2JqTWFwID0gcmVxdWlyZSgnLi9vYmpNYXAnKTtcbnZhciBjYWxsYmFja01hcHBlciAgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NhbGxiYWNrTWFwcGVyXCIpXG5cbnZhciBnbG9iYWxPYmpNYXAgPSB7fTtcbnZhciBjb21tYW5kID0gXCJcIjtcbnZhciBlbGVtZW50VHlwZTtcbnZhciBnZXRTZXRUeXBlO1xuXG5mdW5jdGlvbiBpc1VSTChzdHIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgdXJsID0gbmV3IFVSTChzdHIpO1xuICAgIHJldHVybiAoc3RyLmluZGV4T2YoXCIuXCIpICE9IC0xKTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXR0YWNoRmVlZGJhY2soY29uZmlnLCBrZXlzLCBpKSB7XG4gIHZhciBmZWVkYmFja0ZuID0gZnVuY3Rpb24oKSB7fTtcblxuICBpZiAodHlwZW9mIGNvbmZpZy5mZWVkYmFjayAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmIChjb25maWcuZmVlZGJhY2sgPT0gXCJ0cnVlXCIpIHtcbiAgICAgIGNvbmZpZy5mZWVkYmFjayA9IGNhbGxiYWNrTWFwcGVyLm1hcChmZWVkYmFja0ZuKTtcbiAgICAgIHdpbmRvdy5fX0FMTF9PTkNMSUNLUy5wdXNoKGNvbmZpZy5mZWVkYmFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5vbkNsaWNrKSB7XG4gICAgY29uZmlnLmZlZWRiYWNrID0gY2FsbGJhY2tNYXBwZXIubWFwKGZlZWRiYWNrRm4pO1xuICAgIHdpbmRvdy5fX0FMTF9PTkNMSUNLUy5wdXNoKGNvbmZpZy5mZWVkYmFjayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29uZmlnR3JvdXBzKGNvbmZpZykge1xuICB2YXIgZ3JvdXBzID0ge307XG4gIHZhciBvYmpUeXBlO1xuICB2YXIgaXNBbmltYXRpb247XG4gIHZhciB3aWR0aEZvdW5kID0gMDtcbiAgdmFyIGhlaWdodEZvdW5kID0gMDtcbiAgbGV0IHBhZGRpbmdWYWwgPSBjb25maWdbXCJwYWRkaW5nXCJdO1xuICBpZiAoY29uZmlnLnN0cm9rZSlcbiAgICBkZWxldGUgY29uZmlnLnBhZGRpbmc7XG4gIGlmIChjb25maWcubWFyZ2luKSB7XG4gICAgbGV0IG1hcmdpbiA9IGNvbmZpZy5tYXJnaW4uc3BsaXQoJywnKS5tYXAoYSA9PiBhKjEpO1xuICAgIGNvbmZpZy5tYXJnaW5TdGFydCA9IG1hcmdpblswXSArICcnO1xuICAgIGNvbmZpZy5tYXJnaW5FbmQgPSBtYXJnaW5bMl0gKyAnJztcbiAgfVxuICB2YXIga2V5cyA9ICBPYmplY3Qua2V5cyhjb25maWcpO1xuICB2YXIgcHJveHlGbk5hbWU7XG4gICBmb3IgKHZhciBpID0gMDsgaTxrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXR0YWNoRmVlZGJhY2soY29uZmlnLCBrZXlzLCBpKTtcblxuICAgIGlmICh0eXBlb2YgY29uZmlnW2tleXNbaV1dID09IFwidW5kZWZpbmVkXCIgfHwgY29uZmlnW2tleXNbaV1dID09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBjb25maWdba2V5c1tpXV07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnW2tleXNbaV1dID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgaWYgKGtleXNbaV0gPT0gXCJhZnRlclJlbmRlclwiICYmIHR5cGVvZiB3aW5kb3cucmVtb3ZlQWZ0ZXJSZW5kZXJQcm9wID09IFwiZnVuY3Rpb25cIil7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZiB0aGUgZnVuY3Rpb24gaXMgcHJlc2VudCB0aGVuIHdlIGFyZSBoYW5kbGluZyBhZnRlclJlbmRlclxuICAgICAgICAgKiBwcm9wIGluIEpTIGl0c2VsZlxuICAgICAgICAgKi9cbiAgICAgICAgd2luZG93LnJlbW92ZUFmdGVyUmVuZGVyUHJvcChjb25maWdbXCJpZFwiXSwgY29uZmlnW1wiYWZ0ZXJSZW5kZXJcIl0pO1xuICAgICAgICBkZWxldGUgY29uZmlnW1wiYWZ0ZXJSZW5kZXJcIl07XG4gICAgICB9ZWxzZXtcbiAgICAgICAgY29uZmlnW2tleXNbaV1dID0gY2FsbGJhY2tNYXBwZXIubWFwKGNvbmZpZ1trZXlzW2ldXSk7XG5cbiAgICAgICAgaWYgKGtleXNbaV0gPT0gXCJvbkNsaWNrXCIpe1xuICAgICAgICAgIHdpbmRvdy5fX0ZOX01BUFtjb25maWdba2V5c1tpXV1dID0gY29uZmlnLnRleHQgfHwgY29uZmlnLmlkIHx8IFwiXCI7XG5cbiAgICAgICAgICBpZighY29uZmlnLmFsbG93TXVsdGlwbGVDbGlja3MgfHwgY29uZmlnLmFsbG93TXVsdGlwbGVDbGljaz09XCJmYWxzZVwiKXtcbiAgICAgICAgICAgIHdpbmRvdy5fX1RIUk9UVEVMRURfQUNUSU9OUy5wdXNoKGNvbmZpZ1trZXlzW2ldXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoa2V5c1tpXS5pbmRleE9mKCdfJykgJiYga2V5c1tpXS5zcGxpdCgnXycpWzBdID09ICdhJykge1xuICAgICAgICBvYmpUeXBlID0gbWFwUGFyYW1zW2tleXNbaV0uc3BsaXQoJ18nKVsxXV07XG4gICAgICAgIGlzQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialR5cGUgPSBtYXBQYXJhbXNba2V5c1tpXV07XG4gICAgICAgIGlzQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXlzW2ldID09IFwic3Ryb2tlXCIpIHtcbiAgICAgICAgbGV0IHBhZGRpbmcgPSBbMCwwLDAsMF07XG5cbiAgICAgICAgaWYgKHBhZGRpbmdWYWwpXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdWYWwuc3BsaXQoJywnKS5tYXAoYSA9PiBhKjEpO1xuXG4gICAgICAgIGxldCBzdHJva2VWYWx1ZSA9IGNvbmZpZ1tcInN0cm9rZVwiXS5zcGxpdCgnLCcpWzBdICogMTtcbiAgICAgICAgcGFkZGluZyA9IHBhZGRpbmcubWFwKGRpbSA9PiBkaW0gKyBzdHJva2VWYWx1ZSk7XG4gICAgICAgIGNvbmZpZ1tcInBhZGRpbmdcIl0gPSBwYWRkaW5nLmpvaW4oJywnKTtcbiAgICAgICAga2V5cy5wdXNoKFwicGFkZGluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9ialR5cGUpIHtcbiAgICAgICAgaWYgKGlzQW5pbWF0aW9uKXtcbiAgICAgICAgICBpZiAoIWdyb3Vwc1snQU5JTUFUSU9OJ10pXG4gICAgICAgICAgZ3JvdXBzWydBTklNQVRJT04nXSA9IFtdO1xuXG5cbiAgICAgICAgICBncm91cHNbJ0FOSU1BVElPTiddLnB1c2goe2tleToga2V5c1tpXS5zcGxpdCgnXycpWzFdLCB2YWx1ZTogY29uZmlnW2tleXNbaV1dfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWdyb3Vwc1tvYmpUeXBlLmluVm9rZWRJbl0pXG4gICAgICAgICAgZ3JvdXBzW29ialR5cGUuaW5Wb2tlZEluXSA9IFtdO1xuXG4gICAgICAgICAgaWYgKGtleXNbaV0gPT0gXCJ3aWR0aFwiKVxuICAgICAgICAgIHdpZHRoRm91bmQgKys7XG4gICAgICAgICAgaWYgKGtleXNbaV0gPT0gXCJoZWlnaHRcIilcbiAgICAgICAgICBoZWlnaHRGb3VuZCArKztcblxuICAgICAgICAgIGdyb3Vwc1tvYmpUeXBlLmluVm9rZWRJbl0ucHVzaCh7a2V5OiBrZXlzW2ldLCB2YWx1ZTogY29uZmlnW2tleXNbaV1dfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXlzW2ldIT09XCJwYXR0ZXJuXCIgJiYga2V5c1tpXSAhPT0gXCJyb290XCIgJiYga2V5c1tpXSAhPT0gXCJpZFwiICYmIGtleXNbaV0hPT0gXCJfX2ZpbGVuYW1lXCIpIHtcbiAgICAgICAgICBkZWxldGUgY29uZmlnW2tleXNbaV1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGdldFNldFR5cGUgPT0gXCJzZXRcIikge1xuICAgIGlmICghZ3JvdXBzLlBBUkFNUylcbiAgICBncm91cHMuUEFSQU1TID0gW107XG5cbiAgICBpZiAoIXdpZHRoRm91bmQpXG4gICAgZ3JvdXBzLlBBUkFNUy5wdXNoKHtrZXk6IFwid2lkdGhcIiwgdmFsdWU6ICd3cmFwX2NvbnRlbnQnfSk7XG4gICAgaWYgKCFoZWlnaHRGb3VuZClcbiAgICBncm91cHMuUEFSQU1TLnB1c2goe2tleTogXCJoZWlnaHRcIiwgdmFsdWU6ICd3cmFwX2NvbnRlbnQnfSk7XG4gIH1cblxuICByZXR1cm4gZ3JvdXBzO1xufVxuXG5mdW5jdGlvbiBnZXRDdHIodmlld0dyb3VwKSB7XG4gIHZhciB2aWV3R3JvdXBNYXAgPSAge1xuICAgICdsaW5lYXJMYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnY29vcmRpbmF0b3JMYXlvdXQnOiAnYW5kcm9pZHguY29vcmRpbmF0b3JsYXlvdXQud2lkZ2V0LkNvb3JkaW5hdG9yTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnc2Nyb2xsVmlldyc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdob3Jpem9udGFsU2Nyb2xsVmlldyc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdyZWxhdGl2ZUxheW91dCc6ICdhbmRyb2lkLndpZGdldC5SZWxhdGl2ZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2ZyYW1lTGF5b3V0JzogJ2FuZHJvaWQud2lkZ2V0LkZyYW1lTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAndG9vbGJhcic6ICdhbmRyb2lkLnN1cHBvcnQudjcud2lkZ2V0LlRvb2xiYXIkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdjb2xsYXBzaW5nVG9vbGJhckxheW91dCc6ICdhbmRyb2lkeC5jb29yZGluYXRvcmxheW91dC53aWRnZXQuQ29vcmRpbmF0b3JMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdhcHBCYXJMYXlvdXQnOiAnYW5kcm9pZC5zdXBwb3J0LmRlc2lnbi53aWRnZXQuQXBwQmFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAndmlldyc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICd0YWJMYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAndmlld1BhZ2VyJzogJ2FuZHJvaWQuc3VwcG9ydC52NC52aWV3LlZpZXdQYWdlciRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2xpc3RWaWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2V4cGFuZGFibGVMaXN0Vmlldyc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdyZWN5Y2xlclZpZXcnOiAnYW5kcm9pZC5zdXBwb3J0LnY3LndpZGdldC5SZWN5Y2xlclZpZXckTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdyYXRpbmdCYXInOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnYWNjb3JkaW9uTGF5b3V0JzogJ2FuZHJvaWQud2lkZ2V0LkZyYW1lTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnc3d5cGVMYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdzd3lwZVNjcm9sbCc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgIFwic2hpbW1lckZyYW1lTGF5b3V0XCI6IFwiYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXdcIixcbiAgICBcImJvdHRvbVNoZWV0TGF5b3V0XCI6ICdhbmRyb2lkLndpZGdldC5GcmFtZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ldydcbiAgfTtcblxuICBpZighdmlld0dyb3VwTWFwW3ZpZXdHcm91cF0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIHZpZXcgZ3JvdXAgZm91bmQgOiBcIiArIHZpZXdHcm91cCk7XG4gIH1cblxuICByZXR1cm4gIHZpZXdHcm91cE1hcFt2aWV3R3JvdXBdO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTcGVjaWFsQ2hhcnModmFsdWUpIHtcbiAgdmFsdWUgPSAgdmFsdWUuaW5kZXhPZignLCcpPi0xP3ZhbHVlLnJlcGxhY2UoL1xcLC9nLCAnXFxcXFxcXFwsJyk6dmFsdWU7XG4gIHZhbHVlID0gIHZhbHVlLmluZGV4T2YoJzonKT4tMT92YWx1ZS5yZXBsYWNlKC9cXDovZywgJ1xcXFxcXFxcOicpOnZhbHVlO1xuICB2YWx1ZSA9ICB2YWx1ZS5pbmRleE9mKCc6Jyk+LTE/dmFsdWUucmVwbGFjZSgvXFw9L2csICdcXFxcXFxcXD0nKTp2YWx1ZTtcbiAgdmFsdWUgPSAgdmFsdWUuaW5kZXhPZignOycpPi0xP3ZhbHVlLnJlcGxhY2UoL1xcOy9nLCAnXFxcXFxcXFw7Jyk6dmFsdWU7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRBcmdzKGF0dHJzLCBvYmopIHtcbiAgaWYgKCFvYmoudmFsdWVzKVxuICByZXR1cm4gXCJcIjtcblxuICB2YXIgYXJncyA9IFwiXCI7XG4gIHZhciB2YWx1ZSA9IChhdHRycy5rZXkgPT0gXCJ0ZXh0XCIgfHwgYXR0cnMua2V5ID09IFwiaGludFwiKVxuICAgID9hdHRycy52YWx1ZTphdHRycy52YWx1ZS5yZXBsYWNlKC8gL2csJycpO1xuXG4gIHZhciBpbmNvbWluZ0FyZ3M7XG4gIGlmIChhdHRycy5rZXkgPT0gXCJ0ZXh0XCIgfHwgYXR0cnMua2V5ID09IFwiaGludFwiKSB7XG4gICAgaW5jb21pbmdBcmdzID0gW107XG4gICAgaW5jb21pbmdBcmdzLnB1c2goaGFuZGxlU3BlY2lhbENoYXJzKHZhbHVlKSk7XG5cbiAgfSBlbHNlIHtcbiAgICBpbmNvbWluZ0FyZ3MgPSB2YWx1ZS5zcGxpdCgnLCcpO1xuICB9XG5cbiAgZm9yICAodmFyIGkgPTAgO2k8b2JqLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIGFyZ3MgKz0gIG9iai52YWx1ZXNbaV0udHlwZSArICdfJztcblxuICAgIGlmIChvYmouZG9udE1hcClcbiAgICBhcmdzICs9IGluY29taW5nQXJnc1tpXSArICcsJztcbiAgICBlbHNlICB7XG4gICAgICBpZiAob2JqLnZhbHVlc1tpXS5kb250TWFwKSB7XG4gICAgICAgIGFyZ3MgKz0gaW5jb21pbmdBcmdzW2ldICsgJywnO1xuICAgICAgfSBlbHNlIGlmIChhdHRycy5rZXkgPT0gXCJ3aWR0aFwiIHx8IGF0dHJzLmtleSA9PSBcImhlaWdodFwiKSB7XG4gICAgICAgIGlmICghaXNOYU4oaW5jb21pbmdBcmdzW2ldKjEpKVxuICAgICAgICBhcmdzID0gJ2RwXycgKyBpbmNvbWluZ0FyZ3NbaV0gKyAnLCc7XG4gICAgICAgIGVsc2VcbiAgICAgICAgYXJncyArPSBvYmoudmFsdWVzW2ldW2luY29taW5nQXJnc1tpXV0gKyAnLCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcmdzICs9IG9iai52YWx1ZXNbaV1baW5jb21pbmdBcmdzW2ldXSArICcsJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJncy5zdWJzdHJpbmcoMCwgYXJncy5sZW5ndGgtMSk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVDdHIoYXR0cnMsIGJlbG9uZ3NUbykge1xuICB2YXIgb2JqID0gb2JqTWFwW2JlbG9uZ3NUb107XG4gIHZhciBjdHIgPSBnbG9iYWxPYmpNYXBbYmVsb25nc1RvXS5jdHI7XG4gIHZhciByZXFBdHRycztcblxuICBpZiAoZ2V0U2V0VHlwZSA9PSBcImdldFwiICYmIChiZWxvbmdzVG8gPT0gXCJBTklNQVRJT05cIiB8fCBiZWxvbmdzVG8gPT0gXCJEUkFXQUJMRVwiIHx8IGJlbG9uZ3NUbyA9PSBcIlBBUkFNU1wiKSkge1xuICAgIHJldHVybiBjdHI7XG4gIH1cblxuICBpZiAoIW9iaiB8fCAhb2JqLnJlcXVpcmVkKVxuICByZXR1cm4gY3RyXG5cbiAgcmVxQXR0cnMgPSBvYmoucmVxdWlyZWQuc3BsaXQoJywnKTtcblxuICBjdHIgKz0gJzonO1xuXG4gIGZvciAodmFyIGkgPTA7IGk8cmVxQXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHZhciBqPTA7IGo8YXR0cnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChyZXFBdHRyc1tpXS50cmltKCkgPT0gYXR0cnNbal0ua2V5KSAge1xuICAgICAgICBjdHIgKz0gYXBwZW5kQXJncyhhdHRyc1tqXSwgbWFwUGFyYW1zW3JlcUF0dHJzW2ldLnRyaW0oKV0pICsgJywnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjdHIuc3Vic3RyaW5nKDAsIGN0ci5sZW5ndGggLSAxKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VIdG1sKHRleHQpIHtcbiAgcmV0dXJuICdzZXRfaHRtbD1hbmRyb2lkLnRleHQuSHRtbC0+ZnJvbUh0bWw6c18nICsgdGV4dCArICc7Jztcbn1cblxuZnVuY3Rpb24gcGFyc2VDb2xvcihjb2xvciwgc2V0dGVyTmFtZSkge1xuICBpZiAoIXNldHRlck5hbWUpXG4gIHNldHRlck5hbWUgPSAnc2V0X2NvbG9ySW50JztcbiAgcmV0dXJuIHNldHRlck5hbWUgKyAnPWFuZHJvaWQuZ3JhcGhpY3MuQ29sb3ItPnBhcnNlQ29sb3I6c18nICsgY29sb3IgKyAnOyc7XG59XG5cbmZ1bmN0aW9uIG1hc2hUaGlzKGF0dHJzLCBvYmosIGJlbG9uZ3NUbywgdHJhbnNmb3JtRm4sIGFsbFByb3BzLCB0eXBlKSB7XG4gIGlmIChnZXRTZXRUeXBlID09IFwiZ2V0XCIgJiYgKGF0dHJzLmtleSA9PSBcIndpZHRoXCIgfHwgYXR0cnMua2V5ID09IFwiaGVpZ2h0XCIpKSB7XG4gICAgLy8gZ2V0IGNhc2UgaS5lIGR1cmluZyBwYXRjaFxuICAgIGlmKCFpc05hTihhdHRycy52YWx1ZSAqIDEpKSB7XG4gICAgICByZXR1cm4gJ2dldF9QQVJBTVMtPicgKyBvYmoudmFyTmFtZSArICc6ZHBfJyArIGF0dHJzLnZhbHVlICsgJztnZXRfdmlldy0+c2V0TGF5b3V0UGFyYW1zOmdldF9QQVJBTVMgJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdnZXRfUEFSQU1TLT4nICsgb2JqLnZhck5hbWUgKyAnOmlfJyArIG1hcFBhcmFtc1thdHRycy5rZXldLnZhbHVlc1swXVthdHRycy52YWx1ZV0gKyAnO2dldF92aWV3LT5zZXRMYXlvdXRQYXJhbXM6Z2V0X1BBUkFNUyAnO1xuICAgIH1cbiAgfSBlbHNlIGlmKGF0dHJzLmtleSA9PSBcIndpZHRoXCIgfHwgYXR0cnMua2V5ID09IFwiaGVpZ2h0XCIpIHtcbiAgICAvLyBzZXQgY2FzZSBpLmUgZmlyc3QgcmVuZGVyXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIGJlZm9yZUNtZCA9IFwiXCI7XG4gIHZhciBhZnRlckNtZCA9IFwiXCI7XG4gIHZhciBwcmVQZW5kID0gJyc7XG4gIHZhciBjdXJyVHJhbnNWYWw7XG4gIHZhciBjb2xvcjtcbiAgdmFyIGFyciA9IFtdO1xuICB2YXIgcmVzO1xuICB2YXIgdmFsdWVzO1xuXG4gIHZhciBrZXlXb3JkO1xuICB2YXIgX2NtZDtcbiAgdmFyIGZpbmFsQ21kO1xuICB2YXIgY29sb3IxO1xuICBhdHRycy52YWx1ZSArPSAnJztcblxuICBpZiAoYXR0cnMua2V5ID09IFwidGV4dFNpemVcIikge1xuICAgIGF0dHJzLnZhbHVlID0gXCIxLFwiICsgKGF0dHJzLnZhbHVlIC0gMSk7XG4gIH1cblxuLy90b2RvOnRhYlRleHRDb2xvcnNcbiAgaWYgKGF0dHJzLmtleSA9PSBcImZvcmVncm91bmRcIiB8fFxuICAgIGF0dHJzLmtleSA9PSBcInRhYlRleHRDb2xvcnNcIiB8fFxuICAgIGF0dHJzLmtleSA9PSBcInNlbGVjdGVkVGFiSW5kaWNhdG9yQ29sb3JcIiAgfHxcbiAgICBhdHRycy5rZXkgPT0gXCJjb2xvclwiIHx8XG4gICAgYXR0cnMua2V5ID09IFwiYmFja2dyb3VuZFwiIHx8XG4gICAgYXR0cnMua2V5ID09IFwic3Ryb2tlXCIgfHxcbiAgICBhdHRycy5rZXkgPT0gXCJidG5Db2xvclwiKSB7XG5cbiAgICBpZiAoYXR0cnMua2V5ID09IFwic3Ryb2tlXCIpIHtcbiAgICAgIGNvbG9yID0gYXR0cnMudmFsdWUuc3BsaXQoJywnKVsxXTtcbiAgICAgIGN1cnJUcmFuc1ZhbCA9IGFwcGVuZEFyZ3MoYXR0cnMsb2JqKS5zcGxpdCgnLCcpWzBdICsgJyxnZXRfY29sb3JJbnQnO1xuICAgIH0gZWxzZSBpZihhdHRycy5rZXkgPT0gXCJ0YWJUZXh0Q29sb3JzXCIpe1xuICAgICAgY29sb3IgPSBhdHRycy52YWx1ZS5zcGxpdCgnLCcpWzBdO1xuICAgICAgY29sb3IxID0gYXR0cnMudmFsdWUuc3BsaXQoJywnKVsxXTtcbiAgICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfY29sb3JJbnQxJyArICcsZ2V0X2NvbG9ySW50JztcbiAgICB9ZWxzZSB7XG4gICAgICBjb2xvciA9IGF0dHJzLnZhbHVlO1xuICAgICAgY3VyclRyYW5zVmFsID0gJ2dldF9jb2xvckludCc7XG4gICAgfVxuXG4gICAgaWYoYXR0cnMua2V5ID09IFwidGFiVGV4dENvbG9yc1wiKXtcbiAgICAgIHByZVBlbmQgPSBwYXJzZUNvbG9yKGNvbG9yLFwic2V0X2NvbG9ySW50MVwiKSsnLCcrcGFyc2VDb2xvcihjb2xvcjEpO1xuICAgIH1lbHNle1xuICAgICAgcHJlUGVuZCA9IHBhcnNlQ29sb3IoY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJmb250U3R5bGVcIikge1xuICAgIGlmKGlzVVJMKGF0dHJzLnZhbHVlKSkge1xuICAgICAgaWYodHlwZW9mIHdpbmRvdy5fX1BST1hZX0ZOID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgd2luZG93Ll9fUFJPWFlfRk4gPSB7fTtcbiAgICAgIH1cbiAgICAgIHZhciBmb250ID0gYXR0cnMudmFsdWUuc3Vic3RyKGF0dHJzLnZhbHVlLmxhc3RJbmRleE9mKCcvJykgKyAxKVxuXG4gICAgICB2YXIgZmlsZVByZXNlbnQgPSAodHlwZW9mIEpCcmlkZ2UuaXNGaWxlUHJlc2VudCA9PSBcImZ1bmN0aW9uXCIpICYmIEpCcmlkZ2UuaXNGaWxlUHJlc2VudChmb250KTtcbiAgICAgIGlmICghZmlsZVByZXNlbnQpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tNYXBwZXIubWFwKGZ1bmN0aW9uIChpc05ldywgdXJsLCBmaWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGlkID0gYWxsUHJvcHMuZmluZChhID0+IGEua2V5ID09PSBcImlkXCIpO1xuICAgICAgICAgIGlmICghaWQpIHJldHVybjtcbiAgICAgICAgICB2YXIgdXJsU2V0Q29tbWFuZHMgPSBcInNldF9kaXJlY3Rvcnk9Y3R4LT5nZXREaXI6c19qdXNwYXksaV8wO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRGaWxlPWphdmEuaW8uRmlsZS0+bmV3OmdldF9kaXJlY3Rvcnksc19cIiArIGZpbGVOYW1lICsgXCI7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZFBhdGg9Z2V0X3Jlc29sdmVkRmlsZS0+dG9TdHJpbmc7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9kZm9udD1hbmRyb2lkLmdyYXBoaWNzLlR5cGVmYWNlLT5jcmVhdGVGcm9tRmlsZTpnZXRfcmVzb2x2ZWRQYXRoO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfdGV4dFY9Y3R4LT5maW5kVmlld0J5SWQ6aV9cIiArIGlkLnZhbHVlICsgXCI7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldF90ZXh0Vi0+c2V0VHlwZWZhY2U6Z2V0X2Rmb250XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5kcm9pZC5ydW5JblVJKHVybFNldENvbW1hbmRzICxudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIEpCcmlkZ2UucmVuZXdGaWxlKGF0dHJzLnZhbHVlLCBmb250LCBjYWxsYmFjayk7XG4gICAgICB9IGVsc2UgaWYoSkJyaWRnZS5nZXRGaWxlUGF0aCkge1xuICAgICAgICBwcmVQZW5kID0gXCJzZXRfZGlyZWN0b3J5PWN0eC0+Z2V0RGlyOnNfanVzcGF5LGlfMDtcIiArXG4gICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkRmlsZT1qYXZhLmlvLkZpbGUtPm5ldzpnZXRfZGlyZWN0b3J5LHNfXCIgKyBKQnJpZGdlLmdldEZpbGVQYXRoKGZvbnQpICsgXCI7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZFBhdGg9Z2V0X3Jlc29sdmVkRmlsZS0+dG9TdHJpbmc7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9kZm9udD1hbmRyb2lkLmdyYXBoaWNzLlR5cGVmYWNlLT5jcmVhdGVGcm9tRmlsZTpnZXRfcmVzb2x2ZWRQYXRoO1wiXG4gICAgICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X2Rmb250XCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZVBlbmQgPSBcInNldF9hc3Q9Y3R4LT5nZXRBc3NldHM7c2V0X3R5cGU9YW5kcm9pZC5ncmFwaGljcy5UeXBlZmFjZS0+Y3JlYXRlRnJvbUFzc2V0OmdldF9hc3Qsc19mb250c1xcL1wiICsgYXR0cnMudmFsdWUgKyBcIlxcLnR0ZjtcIjtcbiAgICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3R5cGVcIjtcbiAgICB9XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZ3JhZGllbnRBbmdsZVwiKSB7XG4gICAgb3JpZW50YXRpb24gKz0gXCJzZXRfZHI9dGhpcy0+Z2V0QmFja2dyb3VuZDtzZXRfbz1hbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUkT3JpZW50YXRpb24tPnZhbHVlT2Y6c19cIithdHRycy52YWx1ZStcIjtcIlxuICAgIHByZVBlbmQgKz0gb3JpZW50YXRpb247XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfb1wiXG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZ3JhZGllbnRcIikge1xuICAgIHZhciBncmFkaWVudE9iaiA9IEpTT04ucGFyc2UoYXR0cnMudmFsdWUpO1xuICAgIHZhciBvcmllbnRhdGlvbiA9IFwiXCI7XG4gICAgaWYgKGdyYWRpZW50T2JqLnR5cGUgPT0gXCJsaW5lYXJcIikge1xuICAgIH0gZWxzZSB7fVxuXG4gICAgdmFyIGludENsYXNzID0gXCJzZXRfY2M9amF2YS5sYW5nLkNsYXNzLT5mb3JOYW1lOnNfamF2YS5sYW5nLkludGVnZXI7XCI7XG4gICAgdmFyIGFyckxpc3QgPSBcInNldF9hcnI9amF2YS51dGlsLkFycmF5TGlzdC0+bmV3O1wiO1xuXG4gICAgcHJlUGVuZCArPSBncmFkaWVudE9iai52YWx1ZXMubWFwKGZ1bmN0aW9uIChjb2xvciwgaSkge1xuICAgICAgcmV0dXJuIHBhcnNlQ29sb3IoY29sb3IsIFwic2V0X2NvbG9yXCIgKyBpKTtcbiAgICB9KS5qb2luKFwiXCIpO1xuXG4gICAgYXJyTGlzdCArPSBncmFkaWVudE9iai52YWx1ZXMubWFwKGZ1bmN0aW9uIChjb2xvciwgaSkge1xuICAgICAgcmV0dXJuIFwiZ2V0X2Fyci0+YWRkOmdldF9jb2xvclwiICsgaTtcbiAgICB9KS5qb2luKFwiO1wiKTtcblxuICAgIHByZVBlbmQgKz0gXCJzZXRfZ2Q9YW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlLT5uZXc7XCI7XG4gICAgcHJlUGVuZCArPSBhcnJMaXN0ICsgXCI7XCI7XG4gICAgcHJlUGVuZCArPSBcInNldF9jPWphdmEubGFuZy5DbGFzcy0+Zm9yTmFtZTpzX2phdmEubGFuZy5JbnRlZ2VyO1wiO1xuICAgIHByZVBlbmQgKz0gXCJpbmZsLT5jb252ZXJ0QW5kU3RvcmVBcnJheTpnZXRfYXJyLGdldF9jLHNfcEFycixiX3RydWU7XCI7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfcEFyclwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImNvcm5lclJhZGlpXCIpIHtcbiAgICB2YXIgY29ybmVyUmFkaWlzID0gYXR0cnMudmFsdWUuc3BsaXQoJywnKTtcbiAgICB2YXIgY29ybmVyUmFkaXVzID0gY29ybmVyUmFkaWlzLnNwbGljZSgwLDEpO1xuICAgIHZhciBjb3JuZXJSYWRpaUFycmF5ID0gW107XG4gICAgZm9yKHZhciBpID0gMDsgaTwgY29ybmVyUmFkaWlzLmxlbmd0aDsrK2kpe1xuICAgICAgY29ybmVyUmFkaWlBcnJheS5wdXNoKChjb3JuZXJSYWRpaXNbaV0qY29ybmVyUmFkaXVzKStcIlwiKTtcbiAgICAgIGNvcm5lclJhZGlpQXJyYXkucHVzaCgoY29ybmVyUmFkaWlzW2ldKmNvcm5lclJhZGl1cykrXCJcIik7XG4gICAgfVxuICAgIHZhciBhcnJMaXN0ID0gXCJzZXRfYXJyPWphdmEudXRpbC5BcnJheUxpc3QtPm5ldztcIjtcbiAgICB2YXIgZmxvYXRBcnJheSA9IGNvcm5lclJhZGlpQXJyYXkubWFwKGZ1bmN0aW9uKHZhbCxpKXtyZXR1cm4gXCJzZXRfY29ybmVyUmFkaXVzPWphdmEubGFuZy5GbG9hdC0+bmV3OmRwZl9cIisgdmFsICsgXCI7Z2V0X2Fyci0+YWRkOmdldF9jb3JuZXJSYWRpdXM7XCJ9KTtcbiAgICBwcmVQZW5kICs9IGFyckxpc3QgKyBcIjtcIjtcbiAgICBwcmVQZW5kICs9IFwic2V0X2M9amF2YS5sYW5nLkNsYXNzLT5mb3JOYW1lOnNfamF2YS5sYW5nLkZsb2F0O1wiO1xuICAgIHByZVBlbmQgKz0gZmxvYXRBcnJheS5qb2luKFwiXCIpO1xuICAgIHByZVBlbmQgKz0gXCJpbmZsLT5jb252ZXJ0QW5kU3RvcmVBcnJheTpnZXRfYXJyLGdldF9jLHNfcEFycixiX3RydWU7XCI7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfcEFyclwiO1xuICB9XG5cbiAgLy8gc2hhZG93VGFnIDogbGV2ZWwsdGFnXG4gIGlmIChhdHRycy5rZXkgPT0gXCJzaGFkb3dUYWdcIikge1xuICAgIHZhciBhcnIgPSBhdHRycy52YWx1ZS5zcGxpdChcIixcIik7XG4gICAgdmFyIHRhZyA9IGFyclsxXTtcblx0XHRjb25zb2xlLndhcm4oXCJZT09PTyBTaGFkb3dcIiwgYXJyKTtcblxuICAgIGlmICghd2luZG93LnNoYWRvd09iamVjdFt0YWddKSB7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ10gPVxuICAgICAgICB7IGxldmVsIDogcGFyc2VJbnQoYXJyWzBdKSxcbiAgICAgICAgICB2aWV3SWQgOiBbXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBbXSxcbiAgICAgICAgICBibHVyVmFsdWUgOiBbXSxcbiAgICAgICAgICBzaGFkb3dDb2xvciA6IFtdLFxuICAgICAgICAgIGR4IDogW10sXG4gICAgICAgICAgZHkgOiBbXSxcbiAgICAgICAgICBzcHJlYWQgOiBbXSxcbiAgICAgICAgICBmYWN0b3IgOiBbXVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImxldmVsXCJdID0gcGFyc2VJbnQoYXJyWzBdKTtcbiAgICB9XG5cdFx0cmV0dXJuIFwiXCI7XG4gIH1cbiAgLy8gIC0tIGludCBkeCwgaW50IGR5LCBpbnQgYmx1clZhbHVlLCAgU3RyaW5nIHNoYWRvd0NvbG9yLCAgaW50IHNwcmVhZCwgZWxldmF0aXVvbiwgZmxvYXQgZmFjdG9yKVxuICBpZiAoYXR0cnMua2V5ID09IFwiYW5kcm9pZFNoYWRvd1wiKSB7XG4gICAgdmFyIGFyciA9IGF0dHJzLnZhbHVlLnNwbGl0KFwiLFwiKTtcblxuICAgIHZhciB0YWcgPSBhcnJbNl07XG5cbiAgICB2YXIgX19iYWNrZ3JvdW5kID0gXCIjZmZmZmZmXCI7XG4gICAgdmFyIF9faWQgPSBcIlwiO1xuXG4gICAgZm9yICh2YXIgaSA9MCA7aTxhbGxQcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFsbFByb3BzW2ldLmtleSA9PSBcImJhY2tncm91bmRcIikge1xuICAgICAgICBfX2JhY2tncm91bmQgPSBhbGxQcm9wc1tpXS52YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoYWxsUHJvcHNbaV0ua2V5ID09IFwiaWRcIikge1xuICAgICAgICBfX2lkID0gYWxsUHJvcHNbaV0udmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGZhY3RvciA9IGFycls1XTtcbiAgICBpZiAodHlwZW9mIEpCcmlkZ2UuZ2V0UGl4ZWxzID09IFwiZnVuY3Rpb25cIil7XG4gICAgICBmYWN0b3IgPSBKQnJpZGdlLmdldFBpeGVscygpO1xuICAgIH1cbiAgICAvLyAgICh2aWV3SWQsIGJhY2tncm91bmRDb2xvciwgaW50IGJsdXJWYWx1ZSxoYWRvd0NvbG9yLCBpbnQgZHgsIGludCBkeSwgaW50IHNwcmVhZCwgZmxvYXQgZmFjdG9yKVxuXG4gICAgaWYgKCF3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ10pIHtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXSA9XG4gICAgICAgIHsgbGV2ZWwgOiAtMSxcbiAgICAgICAgICB2aWV3SWQgOiBbX19pZF0sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogW19fYmFja2dyb3VuZF0sXG4gICAgICAgICAgYmx1clZhbHVlIDogW2FyclsyXV0sXG4gICAgICAgICAgc2hhZG93Q29sb3IgOiBbYXJyWzNdXSxcbiAgICAgICAgICBkeCA6IFthcnJbMF1dLFxuICAgICAgICAgIGR5IDogW2FyclsxXV0sXG4gICAgICAgICAgc3ByZWFkIDogW2Fycls0XV0sXG4gICAgICAgICAgZmFjdG9yIDogW2ZhY3Rvcl1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJ2aWV3SWRcIl0ucHVzaChfX2lkKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImJhY2tncm91bmRDb2xvclwiXS5wdXNoKF9fYmFja2dyb3VuZCk7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJibHVyVmFsdWVcIl0ucHVzaChhcnJbMl0pO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wic2hhZG93Q29sb3JcIl0ucHVzaChhcnJbM10pO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZHhcIl0ucHVzaChhcnJbMF0pO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZHlcIl0ucHVzaChhcnJbMV0pO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wic3ByZWFkXCJdLnB1c2goYXJyWzRdKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImZhY3RvclwiXS5wdXNoKGFycls1XSk7XG4gICAgfVxuXG5cdHJldHVybiBcIlwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImxldHRlclNwYWNpbmdcIikge1xuICAgIGF0dHJzLnZhbHVlID0gKGF0dHJzLnZhbHVlLzkpICsgXCJcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJkaXZpZGVyRHJhd2FibGVcIikge1xuICAgIHByZVBlbmQgPSBcInNldF8zNDIzNzI9Y3R4LT5nZXRQYWNrYWdlTmFtZTtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF8zNjgyNDg9Z2V0X3Jlcy0+Z2V0SWRlbnRpZmllcjpzX1wiKyAgYXR0cnMudmFsdWUgK1wiLHNfZHJhd2FibGUsZ2V0XzM0MjM3MjtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF80ODIzODA9Z2V0X3Jlcy0+Z2V0RHJhd2FibGU6Z2V0XzM2ODI0ODtcIlxuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzQ4MjM4MFwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInRleHRGcm9tSHRtbFwiKSB7XG4gICAgcHJlUGVuZCA9IHBhcnNlSHRtbChoYW5kbGVTcGVjaWFsQ2hhcnMoYXR0cnMudmFsdWUpKTtcbiAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2h0bWwnO1xuICB9XG5cbiAgaWYoYXR0cnMua2V5ID09IFwiYmFja2dyb3VuZFRpbnRcIil7XG4gICAgY29sb3IgPSBhdHRycy52YWx1ZTtcbiAgICBwcmVQZW5kID0gcGFyc2VDb2xvcihjb2xvcikrJ3NldF9jb2xvcnN0YXRlPWFuZHJvaWQuY29udGVudC5yZXMuQ29sb3JTdGF0ZUxpc3QtPnZhbHVlT2Y6Z2V0X2NvbG9ySW50OycgO1xuICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfY29sb3JzdGF0ZSdcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJ0eXBlZmFjZVwiKSB7XG4gICAgcHJlUGVuZCA9IFwic2V0X2ZhY2U9dGhpcy0+Z2V0VHlwZWZhY2U7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2ZhY2UsJyArIGFwcGVuZEFyZ3MoYXR0cnMsb2JqKTtcbiAgfVxuXG4gIGlmKGF0dHJzLmtleSA9PSBcImJ1dHRvblRpbnRcIil7XG4gICAgY29sb3IgPSBhdHRycy52YWx1ZTtcbiAgICBwcmVQZW5kID0gcGFyc2VDb2xvcihjb2xvcikrJ3NldF9jb2xvcnN0YXRlPWFuZHJvaWQuY29udGVudC5yZXMuQ29sb3JTdGF0ZUxpc3QtPnZhbHVlT2Y6Z2V0X2NvbG9ySW50OycgO1xuICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfY29sb3JzdGF0ZSdcbiAgfVxuXG4gIGlmKGF0dHJzLmtleSA9PSBcImhpbnRDb2xvclwiKXtcbiAgICBjb2xvciA9IGF0dHJzLnZhbHVlO1xuICAgIHByZVBlbmQgPSBwYXJzZUNvbG9yKGNvbG9yKSsnc2V0X2NvbG9yc3RhdGU9YW5kcm9pZC5jb250ZW50LnJlcy5Db2xvclN0YXRlTGlzdC0+dmFsdWVPZjpnZXRfY29sb3JJbnQ7JyA7XG4gICAgY3VyclRyYW5zVmFsID0gJ2dldF9jb2xvcnN0YXRlJ1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImJ0bkJhY2tncm91bmRcIikge1xuICAgIGNvbG9yID0gYXR0cnMudmFsdWU7XG4gICAgcHJlUGVuZCA9ICdzZXRfbW9kZT1hbmRyb2lkLmdyYXBoaWNzLlBvcnRlckR1ZmYtPmludFRvTW9kZTppXzk7JyArICBwYXJzZUNvbG9yKGNvbG9yKTtcbiAgICBjdXJyVHJhbnNWYWwgPSAgJ2dldF9jb2xvckludCxnZXRfbW9kZSc7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwic2VsZWN0YWJsZUl0ZW1cIikge1xuICAgIGNvbG9yID0gYXR0cnMudmFsdWU7XG4gICAgcHJlUGVuZCA9ICBcInNldF9vdXR2PWFuZHJvaWQudXRpbC5UeXBlZFZhbHVlLT5uZXc7c2V0X3RoZW1lPWN0eC0+Z2V0VGhlbWU7Z2V0X3RoZW1lLT5yZXNvbHZlQXR0cmlidXRlOmlfMTY4NDM1MzQsZ2V0X291dHYsYl90cnVlO3NldF9jPWdldF9vdXR2LT5nZXRDbGFzcztzZXRfZj1nZXRfYy0+Z2V0RGVjbGFyZWRGaWVsZDpzX3Jlc291cmNlSWQ7Z2V0X2YtPnNldEFjY2Vzc2libGU6Yl90cnVlO3NldF92PWdldF9mLT5nZXQ6Z2V0X291dHY7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSAgJ2dldF92JztcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJ1cmxcIikge1xuICAgIHByZVBlbmQgPSBcInNldF9TZXR0aW5nPXRoaXMtPmdldFNldHRpbmdzO2dldF9TZXR0aW5nLT5zZXRKYXZhU2NyaXB0RW5hYmxlZDpiX3RydWU7Z2V0X1NldHRpbmctPnNldERvbVN0b3JhZ2VFbmFibGVkOmJfdHJ1ZTtcIjtcbiAgICB2YXIgY29udmVydFRvU3RyaW5nID0gXCJzZXRfMTEyNz1hbmRyb2lkLnV0aWwuQmFzZTY0LT5kZWNvZGU6c19cIiArIGJ0b2EoYXR0cnMudmFsdWUpICsgXCIsaV8wO3NldF91cmw9amF2YS5sYW5nLlN0cmluZy0+bmV3OmdldF8xMTI3O1wiXG4gICAgcHJlUGVuZCArPSBjb252ZXJ0VG9TdHJpbmc7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfdXJsXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwicGFja2FnZUljb25cIikge1xuICAgIHByZVBlbmQgPSBcInNldF9QTT1jdHgtPmdldFBhY2thZ2VNYW5hZ2VyO3NldF9BST1nZXRfUE0tPmdldEFwcGxpY2F0aW9uSW5mbzpzX1wiICsgYXR0cnMudmFsdWUgKyBcIixpXzA7c2V0XzExNzQ3PWdldF9BSS0+bG9hZEljb246Z2V0X1BNO1wiO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzExNzQ3XCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiaW1hZ2VVcmxcIikge1xuXG4gICAgaWYoaXNVUkwoYXR0cnMudmFsdWUpKSB7XG4gICAgICBpZih0eXBlb2Ygd2luZG93Ll9fUFJPWFlfRk4gPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB3aW5kb3cuX19QUk9YWV9GTiA9IHt9O1xuICAgICAgfVxuICAgICAgdmFyIGltYWdlID0gYXR0cnMudmFsdWUuc3Vic3RyKGF0dHJzLnZhbHVlLmxhc3RJbmRleE9mKCcvJykgKyAxKVxuICAgICAgdmFyIGNhbGxiYWNrID0gXCJvbkltYWdlXCIgKyBpbWFnZS5zdWJzdHIoMCwgaW1hZ2UuaW5kZXhPZignLicpKVxuXG4gICAgICB2YXIgZmlsZVByZXNlbnQgPSAodHlwZW9mIEpCcmlkZ2UuaXNGaWxlUHJlc2VudCA9PSBcImZ1bmN0aW9uXCIpICYmIEpCcmlkZ2UuaXNGaWxlUHJlc2VudChpbWFnZSk7XG4gICAgICBpZiAoIWZpbGVQcmVzZW50KSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrTWFwcGVyLm1hcChmdW5jdGlvbiAoaXNOZXcsIHVybCwgZmlsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGFsbFByb3BzLmZpbmQoYSA9PiBhLmtleSA9PT0gXCJpZFwiKTtcbiAgICAgICAgICBpZiAoIWlkKSByZXR1cm47XG4gICAgICAgICAgdmFyIHVybFNldENvbW1hbmRzID0gXCJzZXRfZGlyZWN0b3J5PWN0eC0+Z2V0RGlyOnNfanVzcGF5LGlfMDtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkRmlsZT1qYXZhLmlvLkZpbGUtPm5ldzpnZXRfZGlyZWN0b3J5LHNfXCIgKyBmaWxlTmFtZSArIFwiO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRQYXRoPWdldF9yZXNvbHZlZEZpbGUtPnRvU3RyaW5nO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfZGltYWdlPWFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuRHJhd2FibGUtPmNyZWF0ZUZyb21QYXRoOmdldF9yZXNvbHZlZFBhdGg7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9pbWdWPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZC52YWx1ZSArIFwiO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRfaW1nVi0+c2V0SW1hZ2VEcmF3YWJsZTpnZXRfZGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5kcm9pZC5ydW5JblVJKHVybFNldENvbW1hbmRzICxudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIEpCcmlkZ2UucmVuZXdGaWxlKGF0dHJzLnZhbHVlLCBpbWFnZSwgY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIGlmKEpCcmlkZ2UuZ2V0RmlsZVBhdGgpIHtcbiAgICAgICAgcHJlUGVuZCA9IFwic2V0X2RpcmVjdG9yeT1jdHgtPmdldERpcjpzX2p1c3BheSxpXzA7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZEZpbGU9amF2YS5pby5GaWxlLT5uZXc6Z2V0X2RpcmVjdG9yeSxzX1wiICsgSkJyaWRnZS5nZXRGaWxlUGF0aChpbWFnZSkgKyBcIjtcIiArXG4gICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkUGF0aD1nZXRfcmVzb2x2ZWRGaWxlLT50b1N0cmluZztcIiArXG4gICAgICAgICAgICAgICAgICAgIFwic2V0X2RpbWFnZT1hbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkRyYXdhYmxlLT5jcmVhdGVGcm9tUGF0aDpnZXRfcmVzb2x2ZWRQYXRoO1wiXG4gICAgICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X2RpbWFnZVwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcmVQZW5kID0gXCJzZXRfMzQyMzcyPWN0eC0+Z2V0UGFja2FnZU5hbWU7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfMzY4MjQ4PWdldF9yZXMtPmdldElkZW50aWZpZXI6c19cIisgIGF0dHJzLnZhbHVlICtcIixzX2RyYXdhYmxlLGdldF8zNDIzNzI7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfNDgyMzgwPWdldF9yZXMtPmdldERyYXdhYmxlOmdldF8zNjgyNDg7XCJcbiAgICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzQ4MjM4MFwiO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJkZWZhdWx0SW1hZ2VcIikge1xuICAgIHByZVBlbmQgPSBcInNldF8zNDIzNzI9Y3R4LT5nZXRQYWNrYWdlTmFtZTtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF8zNjgyNDg9Z2V0X3Jlcy0+Z2V0SWRlbnRpZmllcjpzX1wiKyAgYXR0cnMudmFsdWUgK1wiLHNfZHJhd2FibGUsZ2V0XzM0MjM3MjtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF80ODIzODA9Z2V0X3Jlcy0+Z2V0RHJhd2FibGU6Z2V0XzM2ODI0ODtcIlxuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzQ4MjM4MFwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInBsYWNlSG9sZGVyXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfMzQyMzcyPWN0eC0+Z2V0UGFja2FnZU5hbWU7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfMzY4MjQ4PWdldF9yZXMtPmdldElkZW50aWZpZXI6c19cIisgIGF0dHJzLnZhbHVlICtcIixzX2RyYXdhYmxlLGdldF8zNDIzNzI7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfNDgyMzgwPWdldF9yZXMtPmdldERyYXdhYmxlOmdldF8zNjgyNDg7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF80ODIzODBcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJkeW5hbWljVXJsXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfZGlyZWN0b3J5PWN0eC0+Z2V0RGlyOnNfanVzcGF5LGlfMDtcIiArXG4gICAgXCJzZXRfcmVzb2x2ZWROYW1lPWluLmp1c3BheS5oeXBlcnNkay5zZXJ2aWNlcy5GaWxlUHJvdmlkZXJTZXJ2aWNlLT5hcHBlbmRTZGtOYW1lQW5kVmVyc2lvbjpzX1wiICsgYXR0cnMudmFsdWUgKyBcIjtcIiArXG4gICAgXCJzZXRfcmVzb2x2ZWRGaWxlPWphdmEuaW8uRmlsZS0+bmV3OmdldF9kaXJlY3RvcnksZ2V0X3Jlc29sdmVkTmFtZTtcIiArXG4gICAgXCJzZXRfcmVzb2x2ZWRQYXRoPWdldF9yZXNvbHZlZEZpbGUtPnRvU3RyaW5nO1wiICtcbiAgICBcInNldF9kaW1hZ2U9YW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5EcmF3YWJsZS0+Y3JlYXRlRnJvbVBhdGg6Z2V0X3Jlc29sdmVkUGF0aDtcIjtcblxuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X2RpbWFnZVwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImJhY2tncm91bmREcmF3YWJsZVwiKSB7XG4gICAgcHJlUGVuZCA9IFwic2V0XzM0MjM3Mj1jdHgtPmdldFBhY2thZ2VOYW1lO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzM2ODI0OD1nZXRfcmVzLT5nZXRJZGVudGlmaWVyOnNfXCIrICBhdHRycy52YWx1ZSArXCIsc19kcmF3YWJsZSxnZXRfMzQyMzcyO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzQ4MjM4MD1nZXRfcmVzLT5nZXREcmF3YWJsZTpnZXRfMzY4MjQ4O1wiXG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfNDgyMzgwXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZm9udEZhbWlseVwiKSB7XG4gICAgYXR0cnMudmFsdWUgPSBhcHBlbmRBcmdzKGF0dHJzLG9iaik7XG4gICAgdmFsdWVzID0gYXR0cnMudmFsdWUuc3BsaXQoJywnKTtcbiAgICByZXR1cm4gXCJzZXRfZm9udEZhY2U9YW5kcm9pZC5ncmFwaGljcy5UeXBlZmFjZS0+Y3JlYXRlOlwiK3ZhbHVlc1swXStcIixcIit2YWx1ZXNbMV0rXCI7XCIrXCJ0aGlzLT5zZXRUeXBlZmFjZTpnZXRfZm9udEZhY2UsXCIrdmFsdWVzWzFdK1wiO1wiXG4gIH1cblxuICBpZihhdHRycy5rZXk9PVwiZm9udFNpemVcIikge1xuICAgIGN1cnJUcmFuc1ZhbCA9IGFwcGVuZEFyZ3MoYXR0cnMsb2JqKS5zcGxpdCgnLCcpWzBdICsgJyxmXycgKyAoKHdpbmRvdy5fX1dJRFRIKihhdHRycy52YWx1ZS5zcGxpdCgnLCcpWzFdKSoxKSkvMTAwO1xuICB9XG5cbiAgaWYoYXR0cnMua2V5PT1cImN1cnZlXCIpIHtcbiAgICBwcmVQZW5kID0gIFwic2V0X2ludGVycD1hbmRyb2lkLnZpZXcuYW5pbWF0aW9uLkRlY2VsZXJhdGVJbnRlcnBvbGF0b3ItPm5ldztcIjtcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9pbnRlcnBcIjtcbiAgfVxuXG4gIGlmKGF0dHJzLmtleT09XCJzaGltbWVyXCIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHNoaW1tZXJNb2RlID0gXCJjb20uZmFjZWJvb2suc2hpbW1lci5TaGltbWVyJENvbG9ySGlnaGxpZ2h0QnVpbGRlclwiO1xuICAgICAgdmFyIHNoaW1tZXJDbWQgPSBcInNldF9zZHJ3PWNvbS5mYWNlYm9vay5zaGltbWVyLlNoaW1tZXJEcmF3YWJsZS0+bmV3O1wiO1xuICAgICAgdmFyIHNoaW1tZXJKc29uID0gSlNPTi5wYXJzZShhdHRycy52YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhzaGltbWVySnNvbiwgc2hpbW1lckpzb24uY29udGVudHMsIGF0dHJzLCBhdHRycywgb2JqLCBiZWxvbmdzVG8sIHRyYW5zZm9ybUZuLCBhbGxQcm9wcywgdHlwZSlcbiAgICAgIC8vIGlmKHNoaW1tZXJKc29uICYmIHNoaW1tZXJKc29uLmNvbnRlbnRzKXtcblxuICAgICAgICBzaGltbWVySnNvbiA9IHNoaW1tZXJKc29uLmNvbnRlbnRzXG4gICAgICAvLyB9XG4gICAgICBpZiAoc2hpbW1lckpzb24gJiYgc2hpbW1lckpzb24uc2hpbW1lclR5cGUgPT0gXCJhbHBoYVwiKXtcbiAgICAgICAgc2hpbW1lck1vZGUgPSBcImNvbS5mYWNlYm9vay5zaGltbWVyLlNoaW1tZXIkQWxwaGFIaWdobGlnaHRCdWlsZGVyXCJcbiAgICAgICAgc2hpbW1lckNtZCArPSBcInNldF9idWlsZGVyPVwiICsgc2hpbW1lck1vZGUgKyBcIi0+bmV3O1wiXG4gICAgICAgIGlmKHNoaW1tZXJKc29uLmJhc2Upe1xuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0QmFzZUFscGhhOmZfXCIgKyBzaGltbWVySnNvbi5iYXNlICsgXCI7XCJcbiAgICAgICAgfVxuICAgICAgICBpZihzaGltbWVySnNvbi5oaWdobGlnaHQpe1xuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0SGlnaGxpZ2h0QWxwaGE6Zl9cIiArIHNoaW1tZXJKc29uLmhpZ2hsaWdodCArIFwiO1wiXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJzZXRfYnVpbGRlcj1cIiArIHNoaW1tZXJNb2RlICsgXCItPm5ldztcIlxuICAgICAgICBpZihzaGltbWVySnNvbi5iYXNlKXtcbiAgICAgICAgICBzaGltbWVyQ21kICs9IHBhcnNlQ29sb3Ioc2hpbW1lckpzb24uYmFzZSAsIFwic2V0X2Jhc2VDb2xvclwiKSArIFwiO1wiXG4gICAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRCYXNlQ29sb3I6Z2V0X2Jhc2VDb2xvcjtcIlxuICAgICAgICB9XG4gICAgICAgIGlmKHNoaW1tZXJKc29uLmhpZ2hsaWdodCl7XG4gICAgICAgICAgc2hpbW1lckNtZCArPSBwYXJzZUNvbG9yKHNoaW1tZXJKc29uLmhpZ2hsaWdodCAsIFwic2V0X2Jhc2VDb2xvclwiKSArIFwiO1wiXG4gICAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRIaWdobGlnaHRDb2xvcjpnZXRfYmFzZUNvbG9yO1wiXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoc2hpbW1lckpzb24udGlsdCl7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0VGlsdDpmX1wiICsgc2hpbW1lckpzb24udGlsdCArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5pbnRlbnNpdHkpe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldEludGVuc2l0eTpmX1wiICsgc2hpbW1lckpzb24uaW50ZW5zaXR5ICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLmRpcmVjdGlvbil7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0RGlyZWN0aW9uOmlfXCIgKyBzaGltbWVySnNvbi5kaXJlY3Rpb24gKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24uZHVyYXRpb24pe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldER1cmF0aW9uOmxfXCIgKyBzaGltbWVySnNvbi5kaXJlY3Rpb24gKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24ucmVwZWF0Q291bnQpe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldFJlcGVhdENvdW50OmlfXCIgKyBzaGltbWVySnNvbi5yZXBlYXRDb3VudCArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5yZXBlYXREZWxheSl7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0UmVwZWF0RGVsYXk6bF9cIiArIHNoaW1tZXJKc29uLnJlcGVhdERlbGF5ICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLmNsaXBUb0NoaWxkcmVuKXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRDbGlwVG9DaGlsZHJlbjpiX1wiICsgc2hpbW1lckpzb24uY2xpcFRvQ2hpbGRyZW4gKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24uc2hhcGUpe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldFNoYXBlOmlfXCIgKyBzaGltbWVySnNvbi5zaGFwZSArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5kcm9wT2ZmKXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXREcm9wb2ZmOmZfXCIgKyBzaGltbWVySnNvbi5kcm9wT2ZmICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIHNoaW1tZXJDbWQgKz0gXCJzZXRfc2hpbW1lcj1nZXRfYnVpbGRlci0+YnVpbGQ7XCJcbiAgICAgIGlmKHR5cGUgPT0gXCJzaGltbWVyRnJhbWVMYXlvdXRcIil7XG4gICAgICAgIGF0dHJzLmtleSA9IFwic2hpbW1lclZpZXdcIlxuICAgICAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9zaGltbWVyXCI7XG4gICAgICAgIG9iai5mbk5hbWUgPSBvYmouYWx0ZXJuYXRlRm5OYW1lXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X3NkcnctPnNldFNoaW1tZXI6Z2V0X3NoaW1tZXI7XCJcbiAgICAgICAgaWYoc2hpbW1lckpzb24uYWN0aXZlKXtcbiAgICAgICAgICBhZnRlckNtZCArPSBcImdldF9zZHJ3LT5zdGFydFNoaW1tZXI7XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZnRlckNtZCArPSBcImdldF9zZHJ3LT5zdG9wU2hpbW1lcjtcIlxuICAgICAgICB9XG4gICAgICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3NkcndcIjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwidW5hYmxlIHRvIHNldCBzaGltbWVyXCIpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHNoaW1tZXJDbWQpXG4gICAgcHJlUGVuZCA9ICBzaGltbWVyQ21kO1xuICB9XG5cbiAgaWYoYXR0cnMua2V5PT1cImZvY3VzXCIpIHtcbiAgICBhZnRlckNtZCA9ICBcInNldF93aW49Y3R4LT5nZXRXaW5kb3c7Z2V0X3dpbi0+c2V0U29mdElucHV0TW9kZTo1O1wiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInNoYWRvd0xheWVyXCIpIHtcbiAgICBjb2xvciA9IGF0dHJzLnZhbHVlLnNwbGl0KCcsJylbM107XG4gICAgYXJyID0gYXBwZW5kQXJncyhhdHRycyxvYmopLnNwbGl0KCcsJyk7XG4gICAgYXJyLnNwbGljZShhcnIubGVuZ3RoMSAsIDEpO1xuXG4gICAgcHJlUGVuZCA9IHBhcnNlQ29sb3IoY29sb3IpO1xuICAgIGN1cnJUcmFuc1ZhbCA9ICBhcnIuam9pbignLCcpICsgJyxnZXRfY29sb3JJbnQnXG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwidmFsdWVzXCIpIHtcbiAgICB2YXIgdmFsID0gYXR0cnMudmFsdWUuc3BsaXQoXCIsXCIpO1xuICAgIHZhciB2YWx1ZXNTdHIgPSBcIlwiLCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBlbGVtZW50cyA9IHZhbFtpXS5zcGxpdChcIjpcIik7XG4gICAgICB2YWx1ZXNTdHIgKz0gXCJnZXRfc3Bpbm5lckFycmF5LT5hZGQ6c19cIitlbGVtZW50c1swXTtcbiAgICAgIGZvcih2YXIgaiA9IDE7IGogPCBlbGVtZW50cy5sZW5ndGg7IGorKylcbiAgICAgICAgdmFsdWVzU3RyICs9IFwiXFxuXCIgKyBlbGVtZW50c1tqXTtcbiAgICAgICAgdmFsdWVzU3RyICs9IFwiO1wiO1xuICAgIH1cbiAgICBwcmVQZW5kID0gIFwic2V0X3NwaW5uZXJBcnJheT1qYXZhLnV0aWwuQXJyYXlMaXN0LT5uZXc7XCIrIHZhbHVlc1N0ciArXG4gICAgXCJzZXRfc3Bpbm5lclZhbHVlcz1nZXRfc3Bpbm5lckFycmF5LT50b0FycmF5O3NldF9zcGlubmVyQWRhcHRlcj1hbmRyb2lkLndpZGdldC5BcnJheUFkYXB0ZXItPm5ldzpjdHhfY3R4LGlfMTczNjcwNDMsZ2V0X3NwaW5uZXJWYWx1ZXM7XCI7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfc3Bpbm5lckFkYXB0ZXJcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJzdGFydFBvaW50XCIpIHtcbiAgICB2YXIgYXJnID0gSlNPTi5wYXJzZShhdHRycy52YWx1ZSk7XG4gICAgcHJlUGVuZCA9IFwidGhpcy0+c2V0U3RhcnRYOmZfXCIgKyBhcmcueCArIFwiO1wiXG4gICAgcHJlUGVuZCArPSBcInRoaXMtPnNldFN0YXJ0WTpmX1wiICsgYXJnLnkgKyBcIjtcIlxuICAgIHJldHVybiBwcmVQZW5kXG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZW5kUG9pbnRcIikge1xuICAgIHZhciBhcmcgPSBKU09OLnBhcnNlKGF0dHJzLnZhbHVlKVxuICAgIHByZVBlbmQgPSBcInRoaXMtPnNldEVuZFg6Zl9cIiArIGFyZy54ICsgXCI7XCJcbiAgICBwcmVQZW5kICs9IFwidGhpcy0+c2V0RW5kWTpmX1wiICsgYXJnLnkgKyBcIjtcIlxuICAgIHJldHVybiBwcmVQZW5kXG4gIH1cblxuICBpZiAoYmVsb25nc1RvID09IFwiVklFV1wiKVxuICBrZXlXb3JkID0gZ2xvYmFsT2JqTWFwW2JlbG9uZ3NUb10udmFsO1xuICBlbHNlXG4gIGtleVdvcmQgPSAnZ2V0XycgKyBnbG9iYWxPYmpNYXBbYmVsb25nc1RvXS52YWw7XG5cbiAgaWYgKHRyYW5zZm9ybUZuIHx8IGF0dHJzLmtleSA9PSBcImR1cmF0aW9uXCIgfHwgYXR0cnMua2V5ID09IFwiZGVsYXlcIiB8fCBhdHRycy5rZXkgPT0gXCJjdXJ2ZVwiKVxuICBfY21kID0ga2V5V29yZCArICAnLT4nICsgKCh0eXBlb2Ygb2JqLmZuTmFtZSA9PSBcInVuZGVmaW5lZFwiKT9vYmoudmFyTmFtZTpvYmouZm5OYW1lKTtcbiAgZWxzZVxuICBfY21kID0ga2V5V29yZCArICctPicgKyAgIGF0dHJzLmtleTtcblxuICBpZiAob2JqLnZhbHVlcyAmJiBvYmoudmFsdWVzLmxlbmd0aClcbiAgX2NtZCArPSAnOic7XG5cbiAgaWYgKCFwcmVQZW5kICYmICFjdXJyVHJhbnNWYWwpXG4gIF9jbWQgKz0gIGFwcGVuZEFyZ3MoYXR0cnMsIG9iaikgKyAnOydcbiAgZWxzZVxuICBfY21kICs9IGN1cnJUcmFuc1ZhbCArICc7JztcblxuICAvLyBmb3IgdGVzdGluZ1xuICBpZiAodHlwZW9mIGZpbmFsQ21kICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY29uc29sZS5sb2coYmVmb3JlQ21kICArIHByZVBlbmQgKyBfY21kICsgYWZ0ZXJDbWQpO1xuICAgIHJldHVybiBmaW5hbENtZDtcbiAgfVxuICBpZih0eXBlID09IFwic2hpbW1lckZyYW1lTGF5b3V0XCIpe1xuICAgIGNvbnNvbGUubG9nKGJlZm9yZUNtZCAgKyBwcmVQZW5kICsgX2NtZCArIGFmdGVyQ21kKVxuICB9XG4gIHJldHVybiBiZWZvcmVDbWQgICsgcHJlUGVuZCArIF9jbWQgKyBhZnRlckNtZFxufVxuXG5mdW5jdGlvbiBwYXJzZUF0dHJzKGF0dHJzLCBiZWxvbmdzVG8sIHRyYW5zZm9ybUZuLCB0eXBlKSB7XG4gIHZhciBvYmo7XG4gIHZhciByZXRWYWw7XG4gIHZhciBjbWQgPSAnJztcbiAgdmFyIF9jbWQ7XG5cbiAgZm9yICh2YXIgaSA9MCA7aTxhdHRycy5sZW5ndGg7IGkrKykge1xuICAgIG9iaiA9IG1hcFBhcmFtc1thdHRyc1tpXS5rZXldO1xuICAgIGlmIChvYmopIHtcbiAgICAgIGNtZCArPSBtYXNoVGhpcyhhdHRyc1tpXSwgb2JqLCBiZWxvbmdzVG8sIHRyYW5zZm9ybUZuLCBhdHRycywgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGJlbG9uZ3NUbyA9PSBcIlZJRVdcIilcbiAgcmV0dXJuIGNtZDtcblxuICByZXR1cm4gcHJlcGFyZUN0cihhdHRycywgYmVsb25nc1RvKSArICc7JyArIGNtZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VHcm91cHModHlwZSwgZ3JvdXBzLCBjb25maWcpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhncm91cHMpO1xuICB2YXIgY3RyO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgIChrZXlzW2ldID09IFwiRk9SRUdST1VORFwiKSB7XG4gICAgICBpZiAoIWdsb2JhbE9iak1hcFtrZXlzW2ldXSkge1xuICAgICAgICBpZiAoZ2V0U2V0VHlwZSA9PSBcInNldFwiKSB7XG4gICAgICAgICAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dID0ge2N0cjogXCJhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUtPm5ld1wiLCAgdmFsOiAga2V5c1tpXSB9O1xuICAgICAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcFtrZXlzW2ldXS52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIHRydWUsIHR5cGUpXG4gICAgICAgICAgICArICd0aGlzLT4nICsgXCJzZXRGb3JlZ3JvdW5kXCIgKyAnOicgKyAnZ2V0XycgKyAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dLnZhbCArICc7J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdsb2JhbE9iak1hcFtrZXlzW2ldXSA9IHtjdHI6ICdnZXRfdmlldy0+Z2V0Rm9yZWdyb3VuZCcsICB2YWw6ICBrZXlzW2ldIH07XG4gICAgICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgdHJ1ZSwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleXNbaV0gPT0gXCJMQVlPVVRfVFJBTlNJVElPTlwiKSB7XG4gICAgICAgIGdsb2JhbE9iak1hcC5MQVlPVVRfVFJBTlNJVElPTiA9IHtjdHI6ICdhbmRyb2lkLmFuaW1hdGlvbi5MYXlvdXRUcmFuc2l0aW9uLT5uZXcnLCB2YWw6IFwiTEFZT1VUX1RSQU5TSVRJT05cIn07XG4gICAgICAgIGNvbW1hbmQgKz0gICdzZXRfJyArICBnbG9iYWxPYmpNYXAuTEFZT1VUX1RSQU5TSVRJT04udmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzLlBBUkFNUywgJ0xBWU9VVF9UUkFOU0lUSU9OJywgdHJ1ZSwgdHlwZSlcbiAgICAgICAgICAgICArICd0aGlzLT4nICsgXCJzZXRMYXlvdXRUcmFuc2l0aW9uXCIgKyAnOmdldF8nICArIGdsb2JhbE9iak1hcC5MQVlPVVRfVFJBTlNJVElPTi52YWwgKyAnOyc7XG4gICAgfSBlbHNlIGlmIChrZXlzW2ldID09IFwiVklFV1wiKSB7XG4gICAgICBpZiAoIWdsb2JhbE9iak1hcC5WSUVXKSB7XG4gICAgICAgIGlmIChnZXRTZXRUeXBlID09IFwic2V0XCIpXG4gICAgICAgIGdsb2JhbE9iak1hcC5WSUVXID0ge2N0cjogXCJ0aGlzXCIsIHZhbDogXCJ0aGlzXCJ9O1xuICAgICAgICBlbHNlXG4gICAgICAgIGdsb2JhbE9iak1hcC5WSUVXID0ge2N0cjogXCJnZXRfdmlld1wiLCB2YWw6IFwiZ2V0X3ZpZXdcIn07XG4gICAgICB9XG5cbiAgICAgIGNvbW1hbmQgKz0gIHBhcnNlQXR0cnMoZ3JvdXBzLlZJRVcsICdWSUVXJywgdHJ1ZSwgdHlwZSlcblxuICAgIH0gZWxzZSBpZiAoa2V5c1tpXSA9PSBcIlBBUkFNU1wiKSB7XG4gICAgICBpZiAoZ2V0U2V0VHlwZSA9PSBcInNldFwiKSB7XG4gICAgICAgIGlmICghZ2xvYmFsT2JqTWFwLlBBUkFNUykge1xuICAgICAgICAgIGN0ciA9IGNvbmZpZy5yb290P2dldEN0cih0eXBlKTonUEFSQU1fQ1RSX0hPTERFUic7XG4gICAgICAgICAgZ2xvYmFsT2JqTWFwLlBBUkFNUyA9IHtjdHI6IGN0ciwgdmFsOiBcIlBBUkFNU1wiIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21tYW5kICs9ICAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwLlBBUkFNUy52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHMuUEFSQU1TLCAnUEFSQU1TJywgdHJ1ZSwgdHlwZSlcbiAgICAgICAgICAgICArICd0aGlzLT4nICsgb2JqTWFwLlBBUkFNUy52aWV3TWV0aG9kLnNwbGl0KCcsJylbMF0gKyAnOmdldF8nICArIGdsb2JhbE9iak1hcC5QQVJBTVMudmFsICsgJzsnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFnbG9iYWxPYmpNYXAuUEFSQU1TKSB7XG4gICAgICAgICAgY3RyID0gXCJnZXRfdmlldy0+Z2V0TGF5b3V0UGFyYW1zXCI7XG4gICAgICAgICAgZ2xvYmFsT2JqTWFwLlBBUkFNUyA9IHtjdHI6IGN0ciwgdmFsOiBcIlBBUkFNU1wiIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXAuUEFSQU1TLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgdHJ1ZSwgdHlwZSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKGtleXNbaV0gPT0gXCJNVVRBVEVCR1wiKSB7XG4gICAgICBpZiAoIWdsb2JhbE9iak1hcC5NVVRBVEVCRykge1xuICAgICAgICBnbG9iYWxPYmpNYXAuTVVUQVRFQkcgPSB7Y3RyOiAndGhpcy0+Z2V0QmFja2dyb3VuZCcsIHZhbDogXCJNVVRBVEVCR1wifTtcbiAgICAgIH1cblxuICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwLk1VVEFURUJHLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgdHJ1ZSwgdHlwZSk7XG4gICAgfSBlbHNlIGlmIChrZXlzW2ldID09IFwiQU5JTUFUSU9OXCIpIHtcbiAgICAgIGlmICghZ2xvYmFsT2JqTWFwLkFOSU1BVElPTikge1xuICAgICAgICBpZiAoZ2V0U2V0VHlwZSA9PSBcInNldFwiKVxuICAgICAgICBnbG9iYWxPYmpNYXAuQU5JTUFUSU9OID0ge2N0cjogJ3RoaXMtPmFuaW1hdGUnLCB2YWw6IFwiQU5JTUFUSU9OXCJ9O1xuICAgICAgICBlbHNlXG4gICAgICAgIGdsb2JhbE9iak1hcC5BTklNQVRJT04gPSB7Y3RyOiAnZ2V0X3ZpZXctPmFuaW1hdGUnLCB2YWw6IFwiQU5JTUFUSU9OXCJ9O1xuICAgICAgfVxuXG4gICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXAuQU5JTUFUSU9OLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgZmFsc2UsIHR5cGUpO1xuXG4gICAgfSAgZWxzZSB7XG4gICAgICAvLyBXb3JrcyBvbmx5IGZvciBkcmF3YWJsZVxuICAgICAgaWYgKCFnbG9iYWxPYmpNYXBba2V5c1tpXV0pIHtcbiAgICAgICAgaWYgKGdldFNldFR5cGUgPT0gXCJzZXRcIikge1xuICAgICAgICAgIGdsb2JhbE9iak1hcFtrZXlzW2ldXSA9IHtjdHI6IG9iak1hcFtrZXlzW2ldXS5jdHIsICB2YWw6ICBrZXlzW2ldIH07XG4gICAgICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgdHJ1ZSwgdHlwZSlcbiAgICAgICAgICAgICsgJ3RoaXMtPicgKyBvYmpNYXBba2V5c1tpXV0udmlld01ldGhvZC5zcGxpdCgnLCcpWzBdICsgJzonICsgJ2dldF8nICsgIGdsb2JhbE9iak1hcFtrZXlzW2ldXS52YWwgKyAnOydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnbG9iYWxPYmpNYXBba2V5c1tpXV0gPSB7Y3RyOiAnZ2V0X3ZpZXctPmdldEJhY2tncm91bmQnLCAgdmFsOiAga2V5c1tpXSB9O1xuICAgICAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcFtrZXlzW2ldXS52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIHRydWUsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb21tYW5kLnN1YnN0cmluZygwLCBjb21tYW5kLmxlbmd0aCAtIDEpO1xufVxuXG52YXIgZmxhdHRlbk9iamVjdCA9IGZ1bmN0aW9uKG9iKSB7XG4gIHZhciB0b1JldHVybiA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iKSB7XG4gICAgaWYgKCFvYi5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG4gICAgaWYgKCh0eXBlb2Ygb2JbaV0pID09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgZmxhdE9iamVjdCA9IGZsYXR0ZW5PYmplY3Qob2JbaV0pO1xuICAgICAgZm9yICh2YXIgeCBpbiBmbGF0T2JqZWN0KSB7XG4gICAgICAgIGlmICghZmxhdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSh4KSkgY29udGludWU7XG4gICAgICAgIHRvUmV0dXJuW3hdID0gZmxhdE9iamVjdFt4XTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdG9SZXR1cm5baV0gPSBvYltpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvUmV0dXJuO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0eXBlLCBjb25maWcsIF9nZXRTZXRUeXBlKSB7XG4gIGNvbmZpZyA9IGZsYXR0ZW5PYmplY3QoY29uZmlnKTtcbiAgZ2V0U2V0VHlwZSA9IF9nZXRTZXRUeXBlO1xuICBlbGVtZW50VHlwZSA9IHR5cGU7XG5cbiAgdmFyIGdyb3VwcyA9ICBnZXRDb25maWdHcm91cHMoY29uZmlnKTtcblxuICBjb21tYW5kID0gJyc7XG4gIGdsb2JhbE9iak1hcCA9IHt9O1xuXG4gIHZhciBmbGFnID0gMDtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuICBmb3IgKHZhciBpPTA7IGk8a2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChrZXlzW2ldID09ICdydW5JblVJJykgIHtcbiAgICAgIGZsYWcgID0gMTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmICghZmxhZykge1xuICAgIGNvbmZpZy5ydW5JblVJID0gcGFyc2VHcm91cHModHlwZSwgZ3JvdXBzLCBjb25maWcpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuICogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4gKlxuICogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4gKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuICogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuICogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiAqIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuICogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4gKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuICogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5tYXAgPSAoZm4pID0+IHtcblx0aWYodHlwZW9mIHdpbmRvdy5fX0ZOX0lOREVYICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19GTl9JTkRFWCAhPT0gbnVsbCkge1xuXHRcdHZhciBwcm94eUZuTmFtZSA9ICdGJyArIHdpbmRvdy5fX0ZOX0lOREVYO1xuXHRcdGlmICh3aW5kb3cuX19wYXlsb2FkICYmIHdpbmRvdy5fX3BheWxvYWQuc2VydmljZSl7XG5cdFx0XHRwcm94eUZuTmFtZSA9IHdpbmRvdy5fX3BheWxvYWQuc2VydmljZSArIFwiX1wiICsgcHJveHlGbk5hbWU7XG5cdFx0fVxuXHRcdHdpbmRvdy5fX1BST1hZX0ZOW3Byb3h5Rm5OYW1lXSA9IGZuO1xuXHQgIFx0d2luZG93Ll9fRk5fSU5ERVgrKztcblx0XHRyZXR1cm4gcHJveHlGbk5hbWU7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGluaXRpYWxpc2Ugd2luZG93Ll9fRk5fSU5ERVggPSAwIGluIGluZGV4LmpzIG9mIHlvdXIgcHJvamVjdC5cIik7XG5cdH1cbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGNhbGxiYWNrTWFwcGVyIDogcmVxdWlyZShcIi4vY2FsbGJhY2tNYXBwZXJcIilcbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuY29uc3QgaGVscGVycyA9IHtcblx0Y29tbW9uIDogcmVxdWlyZShcIi4vY29tbW9uXCIpXG59O1xuXG5cbmlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuXHRoZWxwZXJzLmFuZHJvaWQgPSByZXF1aXJlKFwiLi9hbmRyb2lkXCIpXG59XG5lbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIldFQlwiKSB7XG5cdGhlbHBlcnMud2ViID0gcmVxdWlyZShcIi4vd2ViXCIpO1xufVxuZWxzZSB7XG5cdGhlbHBlcnMuaW9zID0gcmVxdWlyZShcIi4vaW9zXCIpO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gaGVscGVyczsiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiAqIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuICpcbiAqIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuICogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiAqIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiAqIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4gKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiAqIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuICogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2VcbiAqIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4gKi9cblxuLypcbiBVc2VkIHRvIGluaXRpYWxpemUgZGVmYXVsdHMgZm9yIHdpbmRvdyBmdW5jaW9ucyBhbmQgdmFyaWFibGVzLlxuKi9cbmNvbnN0IHsgbWVyZ2UgfSA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG53aW5kb3cuUHJlc3RvVUkgPSByZXF1aXJlKFwiLi9QcmVzdG9VSUludGVyZmFjZVwiKTtcblxuY29uc3QgZ2V0Q3VyclRpbWUgPSAoKSA9PiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG5cbi8vIHdpbmRvdy5fX09TID0gZ2V0T1MoKVxuaWYod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpe1xuICAgIHZhciBnZXRTY3JlZW5EZXRhaWxzID0gZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGRldGFpbHMgPSBKU09OLnBhcnNlKEFuZHJvaWQuZ2V0U2NyZWVuRGltZW5zaW9ucygpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmVlbl93aWR0aDogZGV0YWlscy53aWR0aCArIFwiXCIsXG4gICAgICAgICAgICBzY3JlZW5faGVpZ2h0OiBkZXRhaWxzLmhlaWdodCArIFwiXCJcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiZXJyb3IgaW4gZ2V0dHRpbmcgc2NyZWVuIGRpbWVuc2lvbnMsIHNldHRpbmcgZGVmYXVsdCB2YWx1ZXNcIiwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2NyZWVuX3dpZHRoOiBcIjEwODBcIixcbiAgICAgICAgICAgICAgICBzY3JlZW5faGVpZ2h0OiBcIjE5MjBcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgd2luZG93Ll9fREVWSUNFX0RFVEFJTFMgPSBnZXRTY3JlZW5EZXRhaWxzKCk7XG59XG5cbmlmICh3aW5kb3cuX19PUyA9PSBcIldFQlwiKSB7XG4gICAgd2luZG93LkFuZHJvaWQgPSByZXF1aXJlKFwiLi9XRUIvQW5kcm9pZEludGVyZmFjZVwiKVxuICAgIHdpbmRvdy5KQnJpZGdlID0gcmVxdWlyZShcIi4vV0VCL0pCcmlkZ2VJbnRlcmZhY2VcIilcbn0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJJT1NcIikge1xuICAgIHdpbmRvdy5BbmRyb2lkID0gcmVxdWlyZShcIi4vSU9TL0FuZHJvaWRJbnRlcmZhY2VcIilcbiAgICB3aW5kb3cuSkJyaWRnZSA9IG1lcmdlKHdpbmRvdy5KQnJpZGdlLCB7fSlcbn1cblxuaWYgKHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTICYmIHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLmhhc093blByb3BlcnR5KFwic2NyZWVuX3dpZHRoXCIpKSB7XG4gICAgd2luZG93Ll9fV0lEVEggPSB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5zY3JlZW5fd2lkdGg7XG59IGVsc2Uge1xuICAgIHdpbmRvdy5fX1dJRFRIID0gXCIxMDgwXCI7XG59XG5cbmlmICh3aW5kb3cuX19ERVZJQ0VfREVUQUlMUyAmJiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5oYXNPd25Qcm9wZXJ0eShcInNjcmVlbl9oZWlnaHRcIikpIHtcbiAgICB3aW5kb3cuX19IRUlHSFQgPSB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5zY3JlZW5faGVpZ2h0O1xufSBlbHNlIHtcbiAgICB3aW5kb3cuX19IRUlHSFQgPSBcIjE5MjBcIjtcbn1cblxuY29uc3QgZ3VpZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KVxuXG4vL0ludGlhbGl6aW5nIGRlZmF1bHRzXG5pZiAod2luZG93Ll9fT1MgPT0gXCJXRUJcIikge1xuICAgIC8qIENvbXBvbmVudHMgKi9cbiAgICB3aW5kb3cuX19DT01fRVZFTlQgPSBmYWxzZVxuICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRCA9IHtcbiAgICAgICAgU1dJVENIX0dMT0JBTDogZmFsc2UsXG4gICAgICAgIERSUDoge30sXG4gICAgICAgIERTQjoge30sXG4gICAgICAgIERCOiB7fSxcbiAgICAgICAgTkFWQkFSOiB7fVxuICAgIH1cblxuICAgIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUCA9IHtcbiAgICAgICAgV1JBUFBFUjogJ1BEQ19jb21fd3JhcHBlcicsXG4gICAgICAgIE5BVkJBUjogJ1BEQ19jb21fbmF2YmFyJyxcbiAgICAgICAgTkFWQkFSX0lURU06ICdQRENfY29tX25hdmJhcl9pdGVtJyxcbiAgICAgICAgTkFWQkFSX0lURU1fV0lUSF9TVUI6ICdQRENfY29tX25hdmJhcl9oYXNfc3ViJyxcbiAgICAgICAgTkFWQkFSX1NVQjogJ1BEQ19jb21fbmF2YmFyX3N1YicsXG4gICAgICAgIE5BVkJBUl9TVUJfUklHSFQ6ICdQRENfY29tX25hdmJhcl9zdWJfcmlnaHQnLFxuICAgICAgICBOQVZCQVJfU1VCX0lURU06ICdQRENfY29tX25hdmJhcl9zdWJpdGVtJyxcbiAgICAgICAgRFJQOiAnUERDX2NvbV9kcnAnLFxuICAgICAgICBEUlBfQk9EWTogJ1BEQ19jb21fZHJwX2JvZHknLFxuICAgICAgICBEQjogJ1BEQ19jb21fZGInLFxuICAgICAgICBEQl9GVUxMX0JPRFk6ICdQRENfY29tX2RiX2Z1bGxfYm9keScsXG4gICAgICAgIERCX0JPRFk6ICdQRENfY29tX2RiX2JvZHknLFxuICAgICAgICBEQl9PUFRJT05TOiAnUERDX2NvbV9kYl9vcHRpb25zJyxcbiAgICAgICAgREJfT1BUSU9OOiAnUERDX2NvbV9kYl9vcHRpb24nLFxuICAgICAgICBEU0I6ICdQRENfY29tX2RzYicsXG4gICAgICAgIERTQl9GVUxMX0JPRFk6ICdQRENfY29tX2RzYl9mdWxsX2JvZHknLFxuICAgICAgICBEU0JfQk9EWTogJ1BEQ19jb21fZHNiX2JvZHknLFxuICAgICAgICBEU0JfT1BUSU9OUzogJ1BEQ19jb21fZHNiX29wdGlvbnMnLFxuICAgICAgICBEU0JfT1BUSU9OOiAnUERDX2NvbV9kc2Jfb3B0aW9uJyxcbiAgICAgICAgRFNCX1NFQVJDSF9XUkFQOiAnUERDX2NvbV9kc2Jfc2VhcmNoX3dyYXAnLFxuICAgICAgICBEU0JfU0VBUkNIOiAnUERDX2NvbV9kc2Jfc2VhcmNoJyxcbiAgICAgICAgU1dJVENIOiAnUERDX2NvbV9zd2l0Y2gnLFxuICAgICAgICBTV0lUQ0hfQk9EWTogJ1BEQ19jb21fc3dpdGNoX2JvZHknLFxuICAgICAgICBTV0lUQ0hfU0xJREVSOiAnUERDX2NvbV9zd2l0Y2hfc2xpZGVyJyxcbiAgICAgICAgQlQ6ICdQRENfY29tX2J0JyxcbiAgICAgICAgQlRfRElTQUJMRUQ6ICdQRENfY29tX2J0X2Rpc2FibGVkJ1xuICAgIH1cbiAgICB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAgPSB7XG4gICAgICAgIEJHOiAnI2ZmZmZmZicsXG4gICAgICAgIEFDVElWRV9CRzogJyNFRUYxRjgnLFxuICAgICAgICBBQ1RJVkVfQ09MT1I6ICdyZ2IoNTMsIDY0LCA4MiknLFxuICAgICAgICBJTkFDVElWRV9DT0xPUjogJ3JnYmEoNTMsIDY0LCA4MiwgMC41KScsXG4gICAgICAgIEJPUkRFUl9DT0xPUjogJyNBM0FGQzInLFxuICAgICAgICBBQ1RJVkVfQk9SREVSX0NPTE9SOiAnIzcwNzg4NicsXG4gICAgICAgIFNFQVJDSF9DT0xPUjogJyNkZGRkZGQnLFxuICAgICAgICBJTkFDVElWRV9TV0lUQ0g6ICcjQjdEQkJDJyxcbiAgICAgICAgQUNUSVZFX1NXSVRDSDogJyMzNkFGNDcnLFxuICAgICAgICBCVF9CT1JERVJfQ09MT1I6ICcjMTU4NUQ4JyxcbiAgICAgICAgQlRfQkdfQ09MT1I6ICcjMTk5MUVCJyxcbiAgICAgICAgQlRfQ09MT1I6ICcjZmZmZmZmJ1xuICAgIH1cbiAgICB3aW5kb3cuX19DT01fQUNUSVZFID0ge1xuICAgICAgICBEU0I6ICcnLFxuICAgICAgICBOQVZCQVI6ICcnLFxuICAgICAgICBEQjogJydcbiAgICB9XG4gICAgLyogQ29tcG9uZW50cyBFbmQgKi9cblxuICAgIC8qIE1vZGFsICovXG4gICAgd2luZG93Ll9fU1RZTEVfSUQgPSAnc3R5bGVfJyArIGd1aWRcbiAgICB3aW5kb3cuX19SRU5ERVJFRF9LRVlGUkFNRVMgPSBbXVxuICAgIHdpbmRvdy5fX01PREFMX1BST1BTID0ge31cbiAgICB3aW5kb3cuX19DT05URU5UTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsJ1xuICAgIHdpbmRvdy5fX09QRU5NT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtb3BlbidcbiAgICB3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1iYWNrZHJvcCdcbiAgICB3aW5kb3cuX19ESVNBQkxFREJBQ0tEUk9QX0NMQVNTID0gJ1BEQ19tb2RhbC1iYWNrZHJvcC1kaXNhYmxlZCdcbiAgICB3aW5kb3cuX19TSE9XTk1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1zaG93bidcbiAgICB3aW5kb3cuX19GQURFTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLWZhZGUnXG4gICAgd2luZG93Ll9fU0xJREVNT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtc2xpZGUnXG4gICAgLyogTW9kYWwgRW5kICovXG5cbiAgICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0JBQ0tEUk9QTU9EQUxfQ0xBU1MpICYmXG4gICAgICAgICAgICAhZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19ESVNBQkxFREJBQ0tEUk9QX0NMQVNTKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh3aW5kb3cuX19PUEVOTU9EQUxfQ0xBU1MpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUod2luZG93Ll9fU0hPV05NT0RBTF9DTEFTUyk7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgICAgIGlkID0gaWQucmVwbGFjZSh3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTICsgJ18nLCAnJyk7XG5cbiAgICAgICAgICAgIGxldCB2aWV3ID0gX19WSUVXU1tpZF07XG4gICAgICAgICAgICBpZiAodmlldyAmJiB2aWV3LnByb3BzLm9uRGlzbWlzcyAmJiB0eXBlb2Ygdmlldy5wcm9wcy5vbkRpc21pc3MgPT1cbiAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB2aWV3LnByb3BzLm9uRGlzbWlzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZHVpU2hvd1NjcmVlbiA9IChjYWxsYmFjaywgc3RhdGUpID0+IHtcbiAgICAgICAgbGV0IHBvcHVwTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwb3B1cE1lbnVcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wdXBNZW51Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3B1cE1lbnVbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuX19kdWlTaG93U2NyZWVuID0gZHVpU2hvd1NjcmVlbjtcblxufSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIklPU1wiKSB7XG4gICAgd2luZG93Ll9fQ09MT1JfSU5ERVggPSB3aW5kb3cuX19DT0xPUl9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX0ZPTlRfSU5ERVggPSB3aW5kb3cuX19GT05UX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fUkVDVF9JTkRFWCA9IHdpbmRvdy5SRUNUX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fVklFV19JTkRFWCA9IHdpbmRvdy5fX1ZJRVdfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19JTUFHRV9JTkRFWCA9IHdpbmRvdy5fX0lNQUdFX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fUE9JTlRfSU5ERVggPSB3aW5kb3cuX19QT0lOVF9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX0xBWUVSX0lOREVYID0gd2luZG93Ll9fTEFZRVJfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19TSVpFX0lOREVYID0gd2luZG93Ll9fU0laRV9JTkRFWCB8fCAxO1xufSBlbHNlIHtcbiAgICAvL1RoaXMgd291bGQgYmUgY2FzZSBmb3IgYW5kcm9pZFxuICAgIHdpbmRvdy5fX0ZOX01BUCA9IHt9O1xuICAgIHdpbmRvdy5fX0FMTF9PTkNMSUNLUyA9IFtdO1xufVxuXG53aW5kb3cuX19JRCA9IDE7XG53aW5kb3cuX19OT0RFX0lEID0gMTtcbndpbmRvdy5fX1NDUkVFTl9JTkRFWCA9IC0xO1xuXG53aW5kb3cuX19QUk9YWV9GTiA9IHt9O1xud2luZG93Ll9fRk5fSU5ERVggPSAwO1xud2luZG93Ll9fUk9PVFNDUkVFTiA9IG51bGw7XG53aW5kb3cuX19DQUNIRURfU0NSRUVOUyA9IHt9O1xud2luZG93Ll9fU0NSRUVOX0NPVU5UID0gMDtcbndpbmRvdy5fX0NVUlJfU0NSRUVOID0gbnVsbDtcbndpbmRvdy5fX1BSRVZfU0NSRUVOID0gbnVsbDtcbndpbmRvdy5fX0FOSU1BVEVfRElSID0gbnVsbDtcbndpbmRvdy5fX1NDUkVFTl9TVEFDSyA9IFtdO1xud2luZG93Ll9fTEFTVF9GTl9DQUxMRUQgPSBudWxsO1xud2luZG93Ll9fVEhST1RURUxFRF9BQ1RJT05TID0gW107XG53aW5kb3cuX19WSUVXUyA9IHt9O1xud2luZG93Ll9fVklFV19ESU1FTlNJT05TID0ge307XG53aW5kb3cuX19PQlNFUlZFUlMgPSB7fTtcbndpbmRvdy5aSW5kZXggPSAwO1xuXG53aW5kb3cuY2FsbFVJQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFyZ3MgPSAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IFthcmd1bWVudHNbMF1dIDogQXJyYXkuYXBwbHkobnVsbCxcbiAgICAgICAgYXJndW1lbnRzKSk7XG4gICAgdmFyIGZOYW1lID0gYXJnc1swXVxuICAgIHZhciBmdW5jdGlvbkFyZ3MgPSBhcmdzLnNsaWNlKDEpXG4gICAgdmFyIGN1cnJUaW1lO1xuICAgIHZhciB0aW1lRGlmZjtcbiAgICBcbiAgICBpZiAod2luZG93Ll9fQUxMX09OQ0xJQ0tTICYmIHdpbmRvdy5fX0FMTF9PTkNMSUNLUy5pbmRleE9mKGZOYW1lKSAhPSAtMSAmJiBhcmdzWzJdID09IFwiZmVlZGJhY2tcIiAmJiBKQnJpZGdlICYmIEpCcmlkZ2Uuc2V0Q2xpY2tGZWVkYmFjaykge1xuICAgICAgICByZXR1cm4gSkJyaWRnZS5zZXRDbGlja0ZlZWRiYWNrKGFyZ3NbMV0pO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuX19USFJPVFRFTEVEX0FDVElPTlMgJiYgd2luZG93Ll9fVEhST1RURUxFRF9BQ1RJT05TLmluZGV4T2YoZk5hbWUpID09IC0xKSB7XG4gICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW2ZOYW1lXS5hcHBseShudWxsLCBmdW5jdGlvbkFyZ3MpO1xuICAgIH0gZWxzZSBpZiAod2luZG93Ll9fTEFTVF9GTl9DQUxMRUQgJiYgKGZOYW1lID09IHdpbmRvdy5fX0xBU1RfRk5fQ0FMTEVELmZOYW1lKSkge1xuICAgICAgICBjdXJyVGltZSA9IGdldEN1cnJUaW1lKCk7XG4gICAgICAgIHRpbWVEaWZmID0gY3VyclRpbWUgLSB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRC50aW1lU3RhbXA7XG5cbiAgICAgICAgaWYgKHRpbWVEaWZmID49IDMwMCkge1xuICAgICAgICAgICAgd2luZG93Ll9fUFJPWFlfRk5bZk5hbWVdLmFwcGx5KG51bGwsIGZ1bmN0aW9uQXJncyk7XG4gICAgICAgICAgICB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRC50aW1lU3RhbXAgPSBjdXJyVGltZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImZ1bmN0aW9uIHRocm90dGVsZWRcIiwgZk5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwidGltZSBkaWZmXCIsIHRpbWVEaWZmKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW2ZOYW1lXS5hcHBseShudWxsLCBmdW5jdGlvbkFyZ3MpO1xuICAgICAgICB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRCA9IHtcbiAgICAgICAgICAgIHRpbWVTdGFtcDogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIGZOYW1lOiBmTmFtZVxuICAgICAgICB9XG4gICAgfVxufTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUVBLG1CQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRUE7QUFDQTtBQUNBO0FBQ0EsV0FFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0tBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQUNBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0EsZUFFQSxtQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7Ozs7Ozs7O0FDMUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBYUE7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQWNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFWQTtBQTUxQkE7QUF5MkJBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBWkE7QUFlQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFTQTs7Ozs7Ozs7Ozs7Ozs7QUN0d0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTEE7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6NUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBLFNBTUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3pDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBR0EsbUJBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQW9HQSxtQkFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
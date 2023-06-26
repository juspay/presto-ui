/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
  getOS: (__webpack_require__(/*! ./src/helper */ "./src/helper.js").getOS),
  prestoMerge: (__webpack_require__(/*! ./src/helper */ "./src/helper.js").merge),
  prestoClone: (__webpack_require__(/*! ./src/helper */ "./src/helper.js").clone)
};

/***/ }),

/***/ "./src/PrestoUIInterface.js":
/*!**********************************!*\
  !*** ./src/PrestoUIInterface.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
window.fontsWhiteList = [];
if (false) {} else if (false) {} else if (true) {
  var androidHelpers = helpers.android;
  parseParams = androidHelpers.parseParams;
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
  if (elem.parentType && "ANDROID" == "ANDROID") return prestoDom({
    elemType: type,
    parentType: elem.parentType
  }, props, children);
  return prestoDom(type, props, children);
}
function getDomToRender(elem) {
  var res = domAll(elem);
  if (true) {
    return JSON.stringify(res);
  } else {}
}
function addFontsToWhitelist(fonts) {
  androidHelpers.addToFontsWhiteList(fonts);
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
    rep = prestoDom({
      elemType: element.type,
      parentType: element.parentNode.type
    }, props, []);
  } else {}
  if (true) {
    Android.replaceView(JSON.stringify(rep), element.__ref.__id);
  } else {}
}
function createPrestoElement() {
  if (typeof window.__ui_id_sequence != "undefined" && window.__ui_id_sequence != null) {
    return {
      __id: ++window.__ui_id_sequence
    };
  } else {
    window.__ui_id_sequence = typeof Android.getNewID == "function" ? parseInt(Android.getNewID()) * 1000000 : window.__PRESTO_ID;
    return {
      __id: ++window.__ui_id_sequence
    };
  }
}
;
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
  insertDom: insertDom,
  addFontsToWhitelist: addFontsToWhitelist
};

/***/ }),

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
  var cmd;
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
  var cmd;
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
  if (_typeof(animator) === "object" && typeof animator.handler === "function") return animator.handler(fromViewID, toViewId, direction);else console.log(new Error("Animation handler is not a function, type: " + animator));
}
module.exports.types = AnimationTypes;
module.exports.getAnimation = getAnimation;

/***/ }),

/***/ "./src/baseView.js":
/*!*************************!*\
  !*** ./src/baseView.js ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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

var merge = (__webpack_require__(/*! ./helper */ "./src/helper.js").merge);
String.prototype.addCmd = function (data) {
  return this.concat(data);
};
Array.prototype.addCmd = function (data) {
  this.push(data);
  return this;
};
var parseParams;
if (true) parseParams = (__webpack_require__(/*! ./helpers/android/parseParams */ "./src/helpers/android/parseParams.js").configFunction);else {}
var BaseView = /*#__PURE__*/function () {
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
      jsx =  false ? 0 : JSON.stringify(jsx);
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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
  "SwipeRefreshLayout": "androidx.swiperefreshlayout.widget.",
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
  "RecyclerView": "androidx.recyclerview.widget.",
  "TextureView": "android.view.",
  "PagerTabStrip": "android.support.v4.view.",
  "PagerTitleStrip": "android.support.v4.view.",
  "TabLayout": "in.org.npci.upiapp.",
  "ShimmerFrameLayout": "com.facebook.shimmer.",
  "SwypeLayout": "in.juspay.mystique.",
  "SwypeScroll": "in.juspay.mystique.",
  "AccordionLayout": "in.juspay.mystique.",
  "Shape": "in.juspay.mystique.",
  "BottomSheetLayout": "in.juspay.mystique.",
  "LottieAnimationView": "com.airbnb.lottie.",
  "NestedScrollView": "androidx.core.widget."
};
function getCtr(viewGroup) {
  var viewGroupMap = {
    'linearLayout': 'android.widget.LinearLayout$LayoutParams->new',
    'coordinatorLayout': 'androidx.coordinatorlayout.widget.CoordinatorLayout$LayoutParams->new',
    'swipeRefreshLayout': 'androidx.swiperefreshlayout.widget.SwipeRefreshLayout$LayoutParams->new',
    'scrollView': 'android.widget.LinearLayout$LayoutParams->new',
    'nestedScrollView': 'android.widget.LinearLayout$LayoutParams->new',
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
var parseParams = (__webpack_require__(/*! ../helpers/android */ "./src/helpers/android/index.js").parseParams);
function setAutogenId(props) {
  props.node_id = window.__NODE_ID + '';
  window.__NODE_ID++;
  if (!props.__filename) props.__filename = "filename not added";
  return props;
}
module.exports = function (type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  var paramType;
  children = children.flatten();
  if (!props) props = {};
  if (_typeof(type) === "object") {
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
        return {
          type: excluded[excludedType] + finalType,
          props: props,
          children: children
        };
      }
    }
    return {
      type: "android.widget." + finalType,
      props: props,
      children: children
    };
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
        return {
          type: excluded[excludedType] + type,
          props: props,
          children: children
        };
      }
    }
    return {
      type: "android.widget." + type,
      props: props,
      children: children
    };
  } else {
    return new type(props, children);
  }
};

/***/ }),

/***/ "./src/doms/index.js":
/*!***************************!*\
  !*** ./src/doms/index.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module) {

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
/***/ (function(module) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
  if ('object' !== _typeof(o)) return o;
  // m: a map of old refs to new object refs to stop recursion
  if ('object' !== _typeof(m) || null === m) m = new WeakMap();
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
        if ('object' === _typeof(v)) n[i] = clone(v, m);
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
      for (c in n) if ('object' === _typeof(n[c])) n[c] = clone(n[c], m);
  }
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
}
;
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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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

if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, 'startsWith', {
    value: function value(search, rawPos) {
      var pos = rawPos > 0 ? rawPos | 0 : 0;
      return this.substring(pos, pos + search.length) === search;
    }
  });
}
var parseParams_ = __webpack_require__(/*! ./parseParams */ "./src/helpers/android/parseParams.js");
module.exports = {
  parseParams: parseParams_.configFunction,
  mapPrams: __webpack_require__(/*! ./mapParams */ "./src/helpers/android/mapParams.js"),
  callbackMapper: __webpack_require__(/*! ../common/callbackMapper */ "./src/helpers/common/callbackMapper.js"),
  addToFontsWhiteList: parseParams_.appendToFontWhiteList
};

/***/ }),

/***/ "./src/helpers/android/mapParams.js":
/*!******************************************!*\
  !*** ./src/helpers/android/mapParams.js ***!
  \******************************************/
/***/ (function(module) {

var _ref, _ref2, _map;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  ellipsize: {
    values: [{
      type: 'b'
    }],
    dontMap: 'true',
    fnName: 'setEllipsize',
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
  enableRefresh: {
    values: [{
      type: 'b'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setRefreshing"
  },
  setEnable: {
    values: [{
      type: 'b'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setEnabled"
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
  focusOut: {
    // doesnt work
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
  clipToPadding: {
    values: [{
      type: 'b'
    }],
    dontMap: 'true',
    fnName: 'setClipToPadding',
    inVokedIn: 'VIEW'
  },
  clipToOutline: {
    values: [{
      type: 'b'
    }],
    dontMap: 'true',
    fnName: 'setClipToOutline',
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
  "imageWithFallback": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setImageDrawable',
    inVokedIn: 'VIEW'
  },
  "gifUrl": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setBackgroundDrawable',
    inVokedIn: 'VIEW'
  },
  "numFrames": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setBackgroundDrawable',
    inVokedIn: 'VIEW'
  },
  "frameDelay": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setBackgroundDrawable',
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
    subDrawable: "GradientDrawable",
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
      type: 'dp'
    }],
    'dontMap': true,
    fnName: 'setMinimumWidth',
    inVokedIn: 'VIEW'
  },
  "minHeight": {
    values: [{
      type: 'dp'
    }],
    'dontMap': true,
    fnName: 'setMinimumHeight',
    inVokedIn: 'VIEW'
  },
  "maxWidth": {
    values: [{
      type: 'dp'
    }],
    'dontMap': true,
    fnName: 'setMaxWidth',
    inVokedIn: 'VIEW'
  },
  "testID": {
    values: [{
      type: 'cs'
    }],
    'dontMap': true,
    fnName: 'setContentDescription',
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
    subDrawable: "GradientDrawable",
    inVokedIn: 'DRAWABLE'
  },
  "gradientAngle": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setOrientation',
    subDrawable: "GradientDrawable",
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
      telephone: '3',
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
  "textSizeSp": {
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
  "font": {
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
    }, _defineProperty(_ref, "bottom", 80), _defineProperty(_ref, "top_vertical", 48), _defineProperty(_ref, "start", 8388611), _defineProperty(_ref, "end", 8388613), _ref)],
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
    }, _defineProperty(_ref2, "bottom", 80), _defineProperty(_ref2, "center_horizontal", 1), _defineProperty(_ref2, "center_vertical", 16), _defineProperty(_ref2, "start", 8388611), _defineProperty(_ref2, "end", 8388613), _ref2)],
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
}, _defineProperty(_map, "checked", {
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
}), _defineProperty(_map, "cornerRadius", {
  values: [{
    type: 'dpf'
  }],
  dontMap: true,
  subDrawable: "GradientDrawable",
  inVokedIn: 'DRAWABLE',
  fnName: "setCornerRadius"
}), _defineProperty(_map, "stroke", {
  values: [{
    type: 'dp'
  }, {
    type: 's'
  }],
  dontMap: true,
  subDrawable: "GradientDrawable",
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
}), _defineProperty(_map, "background", {
  values: [{
    type: 's'
  }],
  dontMap: true,
  subDrawable: "GradientDrawable",
  inVokedIn: 'DRAWABLE',
  fnName: "setColor"
}), _defineProperty(_map, "backgroundDrawable", {
  values: [{
    type: 's'
  }],
  'dontMap': true,
  fnName: 'setBackgroundDrawable',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "backgroundColor", {
  values: [{
    type: 's'
  }],
  dontMap: true,
  inVokedIn: 'VIEW',
  fnName: "setBackgroundColor"
}), _defineProperty(_map, "color", {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setTextColor',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "hintColor", {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setHintTextColor',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "btnBackground", {
  values: [{
    type: 's'
  }, {
    type: 'i'
  }],
  dontMap: true,
  inVokedIn: 'MUTATEBG',
  fnName: "setColorFilter"
}), _defineProperty(_map, "colorFilter", {
  values: [{
    type: 's'
  }, {
    type: 'i'
  }],
  dontMap: true,
  inVokedIn: 'VIEW',
  fnName: "setColorFilter"
}), _defineProperty(_map, "btnColor", {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setTextColor',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "shadow", {
  values: [{
    type: 'f'
  }],
  dontMap: true,
  fnName: 'setShape',
  inVokedIn: 'DRAWABLE',
  subDrawable: "ShapeDrawable"
}), _defineProperty(_map, "elevation", {
  values: [{
    type: 'i'
  }],
  dontMap: true,
  fnName: 'setElevation',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "rotationX", {
  values: [{
    type: 'f'
  }],
  dontMap: true,
  fnName: 'setRotationX',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "rotationY", {
  values: [{
    type: 'f'
  }],
  dontMap: true,
  fnName: 'setRotationY',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "rotation", {
  values: [{
    type: 'f'
  }],
  dontMap: true,
  fnName: 'setRotation',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "backgroundTint", {
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
}), _defineProperty(_map, "values", {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setAdapter',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "maxSeek", {
  values: [{
    type: 'i'
  }],
  fnName: 'setMax',
  inVokedIn: "VIEW",
  dontMap: true
}), _defineProperty(_map, "accessibilityHint", {
  values: [{
    type: 's'
  }],
  dontMap: 'true',
  fnName: 'setContentDescription',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "imeOptions", {
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
}), _defineProperty(_map, "cursorColor", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setTextCursorDrawable',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "cursorColorV2", {
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "progressBarColor", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: "setIndeterminateTintList",
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "disableFeedback", {
  values: [{
    type: 'b'
  }],
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "scrollToDescendant", {
  values: [{
    type: "s"
  }],
  dontMap: true,
  fnName: "scrollToDescendant",
  inVokedIn: "VIEW"
}), _map);
module.exports = map;

/***/ }),

/***/ "./src/helpers/android/objMap.js":
/*!***************************************!*\
  !*** ./src/helpers/android/objMap.js ***!
  \***************************************/
/***/ (function(module) {

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

//Index is priority only.
// We map to the earliest available index based on the priority
var map = {
  'PARAMS': {
    'required': 'width, height',
    'viewMethod': 'setLayoutParams,getLayoutParams'
  },
  'DRAWABLE': {
    'ctr': 'android.graphics.drawable.LayerDrawable->new:get_lyrArr',
    'required': '',
    'viewMethod': 'setBackground,getBackground'
  },
  'ShapeDrawable': {
    'ctr': 'android.graphics.drawable.ShapeDrawable->new',
    'required': '',
    'viewMethod': 'setBackground,getBackground',
    'index': 0
  },
  'GradientDrawable': {
    'ctr': 'android.graphics.drawable.GradientDrawable->new',
    'required': '',
    'viewMethod': 'setBackground,getBackground',
    'index': 1
  }
};
module.exports = map;

/***/ }),

/***/ "./src/helpers/android/parseParams.js":
/*!********************************************!*\
  !*** ./src/helpers/android/parseParams.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var utils = __webpack_require__(/*! ./utils */ "./src/helpers/android/utils.js");
var globalObjMap = {};
var command = "";
var elementType;
var getSetType;
var sessionInfo = window.sessionInfo ? typeof window.sessionInfo == "string" ? JSON.parse(window.sessionInfo) : window.sessionInfo : JSON.parse(JBridge.getSessionInfo());
// primary key is id
// value is array of subDrawbles
// Sample {"10000034" : [{isCreated : true, "dr" : "GradientDrawble"}, {"dr" : "ShapeDrawble", isCreated : false}]} // Drawbable
var drawableMap = {};
var state = {
  fontsWhiteList: []
};
function getGradientOrientation(angle) {
  function roundOff(num) {
    return Math.floor(num % 360 / 45) * 45;
  }
  if (typeof angle == "number") {
    switch (roundOff(angle)) {
      case 0:
        return "BOTTOM_TOP";
      case 45:
        return "BL_TR";
      case 90:
        return "LEFT_RIGHT";
      case 135:
        return "TL_BR";
      case 180:
        return "TOP_BOTTOM";
      case 225:
        return "TR_BL";
      case 270:
        return "RIGHT_LEFT";
      case 315:
        return "BR_TL";
      default:
        return "BOTTOM_TOP";
    }
  } else {
    return "BOTTOM_TOP";
  }
}
function isValidFontStyleFormat(font) {
  try {
    if (font == undefined) return false;
    if (isNaN(parseInt(font))) {
      return /^\w+[0-9a-zA-z\-\_]*[.](otf|ttf|xml)[,](assets|res)(\/|$)/.test(font);
    } else return /^\d+$/.test(font);
  } catch (err) {}
  return false;
}
function isURL(str) {
  try {
    var url = new URL(str);
    return str.indexOf(".") != -1;
  } catch (err) {
    return false;
  }
}
function getConfigGroups(config, type) {
  var groups = {};
  var objType;
  var isAnimation;
  var widthFound = 0;
  var heightFound = 0;
  var paddingVal = config["padding"];
  var strokeVal = config["stroke"];
  var currentDrawables = [];
  if (type == "editText" && _typeof(config["cursorColor"]) != undefined) {
    if (sessionInfo["android_api_level"] < 28) {
      config["cursorColorV2"] = config.cursorColor;
      delete config.cursorColor;
    }
  }
  if (type != "textView") {
    delete config.maxWidth;
  }
  if (type == "progressBar") {
    console.log("progressBar", strokeVal);
    config["progressBarColor"] = strokeVal;
    delete config.stroke;
  }
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
  var _loop = function _loop() {
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
          window.__FN_MAP[config[keys[i]]] = config.text || utils.getId(config) || "";
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
      }
      if (objType) {
        if (isAnimation) {
          if (!groups['ANIMATION']) groups['ANIMATION'] = {
            props: [],
            id: utils.getId(config)
          };
          groups['ANIMATION'].props.push({
            key: keys[i].split('_')[1],
            value: config[keys[i]]
          });
        } else {
          if (!groups[objType.inVokedIn]) {
            groups[objType.inVokedIn] = {
              props: [],
              id: utils.getId(config)
            };
          }
          if (objType.inVokedIn == "DRAWABLE") {
            currentDrawables.push(objType.subDrawable);
          }
          if (keys[i] == "width") widthFound++;
          if (keys[i] == "height") heightFound++;
          groups[objType.inVokedIn].props.push({
            key: keys[i],
            value: config[keys[i]]
          });
        }
        if (keys[i] !== "pattern" && keys[i] !== "root" && keys[i] !== "id" && keys[i] !== "__filename") {
          delete config[keys[i]];
        }
      }
    }
  };
  for (var i = 0; i < keys.length; i++) {
    _loop();
  }
  if (getSetType == "set") {
    if (!groups.PARAMS) groups.PARAMS = {
      props: [],
      id: utils.getId(config)
    };
    if (!config.hasOwnProperty("padding")) {
      config.padding = "0,0,0,0";
    }
    if (!widthFound) groups.PARAMS.props.push({
      key: "width",
      value: 'wrap_content'
    });
    if (!heightFound) groups.PARAMS.props.push({
      key: "height",
      value: 'wrap_content'
    });
    if (drawableMap[utils.getId(config)]) {
      drawableMap[utils.getId(config)] = [];
    }
  }
  if (groups.DRAWABLE) {
    var _loop2 = function _loop2() {
      var drawable = currentDrawables[_i];
      drawableMap[utils.getId(config)] = drawableMap[utils.getId(config)] || [];
      var isExist = drawableMap[utils.getId(config)].some(function (_ref) {
        var dr = _ref.dr;
        return dr === drawable;
      });
      if (!isExist) {
        var _id = objMap[drawable].index;
        drawableMap[utils.getId(config)].splice(_id, 0, {
          dr: drawable,
          isCreated: false
        });
      }
    };
    for (var _i = 0; _i < currentDrawables.length; _i++) {
      _loop2();
    }
  }
  return groups;
}
function getCtr(viewGroup) {
  var viewGroupMap = {
    'linearLayout': 'android.widget.LinearLayout$LayoutParams->new',
    'coordinatorLayout': 'androidx.coordinatorlayout.widget.CoordinatorLayout$LayoutParams->new',
    'swipeRefreshLayout': 'androidx.swiperefreshlayout.widget.SwipeRefreshLayout$LayoutParams->new',
    'scrollView': 'android.widget.LinearLayout$LayoutParams->new',
    'nestedScrollView': 'android.widget.LinearLayout$LayoutParams->new',
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
    'recyclerView': 'androidx.recyclerview.widget.RecyclerView$LayoutParams->new',
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
function prepareCtr(attrs, belongsTo, id) {
  var obj = objMap[belongsTo];
  var ctr = globalObjMap[belongsTo].ctr;
  var reqAttrs;
  if (belongsTo == "DRAWABLE") {
    var lastDrawableIndex = -1;
    ctr = ctr + ";set_layersArray=java.util.ArrayList->new;";
    for (var i = 0; i < drawableMap[id].length; ++i) {
      // if not isCreated then create drawable and add to bg
      // else fetch from index.
      if (!drawableMap[id][i].isCreated) {
        drawableMap[id][i].isCreated = true;
        var dr = drawableMap[id][i].dr;
        ctr = ctr + ";set_" + dr + "=" + objMap[dr].ctr + ";";
      } else {
        var dr = drawableMap[id][i].dr;
        lastDrawableIndex++;
        ctr = ctr + ";set_" + dr + "=get_DRAWABLE->getDrawable:i_" + lastDrawableIndex + ";";
      }
      ctr = ctr + "get_layersArray->add:get_" + dr + ";";
    }
    ctr += ";set_c=java.lang.Class->forName:s_android.graphics.drawable.Drawable;";
    ctr += "infl->convertAndStoreArray:get_layersArray,get_c,s_layers,b_false;";
    ctr += "set_DRAWABLE=android.graphics.drawable.LayerDrawable->new:get_layers;";
  }
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
function makeUrlCmd(imageUrl) {
  var imageValue = imageUrl;
  var jpImageName = 'jp_' + imageUrl;
  if (window.juspayAssetConfig && window.juspayAssetConfig.images && window.juspayAssetConfig.images[jpImageName]) {
    imageValue = jpImageName;
  }
  var prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_" + imageValue + ",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;";
  var currTransVal = "get_482380";
  return {
    prePend: prePend,
    currTransVal: currTransVal
  };
}
function mashThis(attrs, obj, belongsTo, transformFn, allProps, type) {
  if (getSetType == "get" && (attrs.key == "width" || attrs.key == "height")) {
    // get case i.e during patch
    if (!isNaN(attrs.value * 1)) {
      return 'get_PARAMS->' + obj.varName + ':dp_' + attrs.value + ';get_view->setLayoutParams:get_PARAMS;';
    } else {
      return 'get_PARAMS->' + obj.varName + ':i_' + mapParams[attrs.key].values[0][attrs.value] + ';get_view->setLayoutParams:get_PARAMS;';
    }
  } else if (attrs.key == "width" || attrs.key == "height") {
    // set case i.e first render
    return '';
  }
  var beforeCmd = "";
  var afterCmd = "";
  var prePend = '';
  var currTransVal;
  var dontLoad = false;
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
  if (attrs.key == "textSizeSp") {
    attrs.value = "2," + attrs.value;
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
        dontLoad = true;
      } else if (JBridge.getFilePath) {
        prePend = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedFile=java.io.File->new:get_directory,s_" + JBridge.getFilePath(font) + ";" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dfont=android.graphics.Typeface->createFromFile:get_resolvedPath;";
        currTransVal = "get_dfont";
      }
    } else {
      var fontValue = attrs.value,
        jpFont = "jp_" + attrs.value;
      if (state.fontsWhiteList.indexOf(jpFont) !== -1 || window.juspayAssetConfig && window.juspayAssetConfig.fonts && window.juspayAssetConfig.fonts[jpFont]) {
        fontValue = "jp_" + fontValue;
        prePend = "set_ast=ctx->getAssets;set_type=android.graphics.Typeface->createFromAsset:get_ast,s_fonts\/" + fontValue + "\.ttf;";
        currTransVal = "get_type";
      } else if (state.fontsWhiteList.indexOf(fontValue) !== -1 || window.juspayAssetConfig && window.juspayAssetConfig.fonts && window.juspayAssetConfig.fonts[fontValue]) {
        prePend = "set_ast=ctx->getAssets;set_type=android.graphics.Typeface->createFromAsset:get_ast,s_fonts\/" + fontValue + "\.ttf;";
        currTransVal = "get_type";
      } else {
        dontLoad = true;
      }
    }
  }
  if (attrs.key == "scrollToDescendant") {
    var id = attrs.value;
    prePend = "set_v=ctx->findViewById:i_" + id + ";";
    currTransVal = "get_v";
  }
  if (attrs.key == "font") {
    try {
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
        if (attrs.value == "") throw "font not provided";
        var fontPrefix = attrs.value.split(",")[0],
          fontSuffix = attrs.value.split(",")[1];
        if (fontPrefix == undefined || fontSuffix == undefined) throw "Incorrect Font format";
        switch (fontPrefix) {
          case "name":
            prePend = "set_ast=ctx->getAssets;set_type=android.graphics.Typeface->createFromAsset:get_ast,s_fonts\/" + fontSuffix + "\.ttf;";
            currTransVal = "get_type";
            break;
          case "path":
            if (fontSuffix.indexOf("assets/") != -1) {
              var fontPath = fontSuffix.replace("assets/", "");
              prePend = "set_ast=ctx->getAssets;set_type=android.graphics.Typeface->createFromAsset:get_ast,s_" + fontPath + ";";
              currTransVal = "get_type";
            } else if (fontSuffix.indexOf("res/") != -1) {
              var fontTempArr = fontSuffix.split("/");
              var fontResName = fontTempArr[fontTempArr.length - 1].split(".")[0];
              prePend = "set_pkgname=ctx->getPackageName;set_resobj=ctx->getResources;set_resid=get_resobj->getIdentifier:s_" + fontResName + ",s_font,get_pkgname;set_type=get_resobj->getFont:get_resid;";
              currTransVal = "get_type";
            }
            break;
          case "resId":
            prePend = "set_resobj=ctx->getResources;set_type=get_resobj->getFont:i_" + fontSuffix + ";";
            currTransVal = "get_type";
            break;
        }
      }
    } catch (err) {
      console.log("FONT_ERROR :: " + "error in fetching fonts : " + err);
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
    prePend += "set_o=android.graphics.drawable.GradientDrawable$Orientation->valueOf:s_" + getGradientOrientation(Number(gradientObj.angle)) + ";get_GradientDrawable->setOrientation:get_o;";
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
      window.shadowObject[tag] = {
        level: parseInt(arr[0]),
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
      window.shadowObject[tag] = {
        level: -1,
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
  if (attrs.key == "testID") {
    attrs.value = attrs.value.replace(/\W|_/g, '_').replace(/_+/g, '_').toLowerCase();
  }
  if (attrs.key == "letterSpacing") {
    attrs.value = attrs.value / 9 + "";
  }
  if (attrs.key == "dividerDrawable") {
    var out = makeUrlCmd(attrs.value);
    prePend = out.prePend;
    currTransVal = out.currTransVal;
  }
  if (attrs.key == "textFromHtml") {
    prePend = parseHtml(handleSpecialChars(attrs.value));
    currTransVal = 'get_html';
  }
  if (attrs.key == "ellipsize") {
    prePend = "set_elipse=android.text.TextUtils$TruncateAt->valueOf:s_END;";
    currTransVal = 'get_elipse';
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
  if (attrs.key == "gifUrl") {
    var numFrames = allProps.find(function (a) {
      return a.key === "numFrames";
    }).value;
    delay = allProps.find(function (a) {
      return a.key === "frameDelay";
    }).value;
    delay = (delay || 50) + "";
    var _id2 = allProps.find(function (a) {
      return a.key === "id";
    });
    if (!numFrames || !_id2) {
      console.error(">>>> Please provide numFrames for GIF Animation");
      return;
    }
    if (isURL(attrs.value)) {
      var ind = attrs.value.lastIndexOf('/');
      var image = attrs.value.substr(ind + 1);
      var imageName = image.substr(0, image.lastIndexOf('.'));
      var rawUrl = attrs.value.substr(0, ind + 1);
      var urlSetCommands = "set_directory=ctx->getDir:s_juspay,i_0;set_anime=android.graphics.drawable.AnimationDrawable->new;get_anime->setOneShot:b_true;";
      for (var i = 0; i < numFrames; i++) {
        var currFrame = imageName + i + ".png";
        JBridge.renewFile(rawUrl + currFrame, currFrame);
      }
      for (var i = 0; i < numFrames; i++) {
        var currFrame = imageName + i + ".png";
        if (!JBridge.isFilePresent(currFrame)) {
          console.error("Some images are not available for GIF :" + rawUrl + currFrame);
          return "";
        }
        urlSetCommands += "set_resolvedFile" + i + "=java.io.File->new:get_directory,s_" + JBridge.getFilePath(currFrame) + ";" + "set_resolvedPath" + i + "=get_resolvedFile" + i + "->toString;" + "set_bmp" + i + "=android.graphics.BitmapFactory->decodeFile:get_resolvedPath" + i + ";" + "set_frame" + i + "=android.graphics.drawable.BitmapDrawable->new:get_bmp" + i + ";" + "get_anime->addFrame:get_frame" + i + ",i_" + delay + ";";
      }
      urlSetCommands += "this->setBackgroundDrawable:get_anime;" + "get_anime->start;";
      prePend = urlSetCommands;
      dontLoad = true;
    } else {
      console.error(">>>> The value provided for gifUrl is not a valid URL");
    }
  }
  if (attrs.key == "numFrames") {
    return "";
  }
  if (attrs.key == "frameDelay") {
    return "";
  }
  function getImage(imageUrl) {
    if (isURL(imageUrl)) {
      if (typeof window.__PROXY_FN == "undefined") {
        window.__PROXY_FN = {};
      }
      var image = imageUrl.substr(imageUrl.lastIndexOf('/') + 1);
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
        JBridge.renewFile(imageUrl, image, callback);
        dontLoad = true;
      } else if (JBridge.getFilePath) {
        prePend = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedFile=java.io.File->new:get_directory,s_" + JBridge.getFilePath(image) + ";" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;";
        currTransVal = "get_dimage";
      }
    } else {
      var out = makeUrlCmd(imageUrl);
      prePend = out.prePend;
      currTransVal = out.currTransVal;
    }
  }
  if (attrs.key == "imageUrl") {
    getImage(attrs.value);
  }
  if (attrs.key == "imageWithFallback") {
    image = attrs.value.split(",");
    imageName = image[0];
    url = image[1];
    if (window.juspayAssetConfig && window.juspayAssetConfig.images && window.juspayAssetConfig.images[imageName]) {
      var out = makeUrlCmd(imageName);
      prePend = out.prePend;
      currTransVal = out.currTransVal;
    } else if (isURL(url)) {
      if (typeof window.__PROXY_FN == "undefined") {
        window.__PROXY_FN = {};
      }
      var image = url.substr(url.lastIndexOf('/') + 1);
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
        JBridge.renewFile(url, image, callback);
        dontLoad = true;
      } else if (JBridge.getFilePath) {
        prePend = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedFile=java.io.File->new:get_directory,s_" + JBridge.getFilePath(image) + ";" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;";
        currTransVal = "get_dimage";
      }
    }
  }
  if (attrs.key == "cursorColorV2") {
    var _id3 = allProps.find(function (a) {
      return a.key === "id";
    });
    dontLoad = true;
    if (_id3 != undefined) {
      prePend = parseColor(attrs.value, "set_cursorColor");
      prePend += ";set_kl=java.lang.Class->forName:s_android.widget.TextView";
      prePend += ";set_draw=android.graphics.drawable.ShapeDrawable->new;get_draw->setIntrinsicHeight:i_25;get_draw->setIntrinsicWidth:i_4;set_p=get_draw->getPaint;get_p->setColor:get_cursorColor";
      prePend += ";set_currentView=this->findViewById:i_" + _id3.value;
      prePend += ";set_c=java.lang.Class->forName:s_android.graphics.drawable.Drawable";
      prePend += ";set_f=get_kl->getDeclaredField:s_mEditor";
      prePend += ";get_f->setAccessible:b_true";
      prePend += ";set_editor=get_f->get:get_currentView";
      prePend += ";set_drawablesArr=java.util.ArrayList->new";
      prePend += ";get_drawablesArr->add:get_draw";
      prePend += ";get_drawablesArr->add:get_draw";
      prePend += ";infl->convertAndStoreArray:get_drawablesArr,get_c,s_drawables,b_false";
      prePend += ";set_fieldDash=get_editor->getClass;set_f=get_fieldDash->getDeclaredField:s_mCursorDrawable";
      prePend += ";get_f->setAccessible:b_true";
      prePend += ";get_f->set:get_editor,get_drawables;";
    }
  }
  if (attrs.key == "cursorColor") {
    console.log("cursor reached", attrs.value);
    prePend = parseColor(attrs.value, "set_cursorColor");
    prePend += ";set_draw=android.graphics.drawable.ShapeDrawable->new;get_draw->setIntrinsicHeight:i_25;get_draw->setIntrinsicWidth:i_4;set_p=get_draw->getPaint;get_p->setColor:get_cursorColor;";
    currTransVal = "get_draw";
  }
  if (attrs.key == "progressBarColor") {
    prePend = parseColor(attrs.value, "set_progressBarColor"); // Thickness value is ignored for android for now.
    prePend += ";set_progressBarColorTint=android.content.res.ColorStateList->valueOf:get_progressBarColor;";
    currTransVal = "get_progressBarColorTint";
  }

  // Implementation with thickness support, but the animation is not that good for the below one.
  // if(attrs.key == "progressBarColor") {
  //     let values = attrs.value.split(",")
  //   prePend = parseColor(values[1], "set_progressBarColor");
  //   prePend += ";set_gradientDraw=android.graphics.drawable.GradientDrawable->new;get_gradientDraw->setShape:i_3" //setShape:i_3, because in android these shapes are mapped to integers and circle is at mapped to 3.
  //   prePend += `;get_gradientDraw->setColor:get_progressBarColor;get_gradientDraw->setThickness:i_${values[0]};get_gradientDraw->setUseLevel:b_false`
  //   prePend += ";set_rotateDraw=android.graphics.drawable.RotateDrawable->new;get_rotateDraw->setDrawable:get_gradientDraw;get_rotateDraw->setToDegrees:f_1080;"
  //   currTransVal = "get_rotateDraw"
  // }

  if (attrs.key == "defaultImage") {
    var out = makeUrlCmd(attrs.value);
    prePend = out.prePend;
    currTransVal = out.currTransVal;
    ;
  }
  if (attrs.key == "placeHolder") {
    var out = makeUrlCmd(attrs.value);
    prePend = out.prePend;
    currTransVal = out.currTransVal;
  }
  if (attrs.key == "dynamicUrl") {
    prePend = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedName=in.juspay.hypersdk.services.FileProviderService->appendSdkNameAndVersion:s_" + attrs.value + ";" + "set_resolvedFile=java.io.File->new:get_directory,get_resolvedName;" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;";
    currTransVal = "get_dimage";
  }
  if (attrs.key == "backgroundDrawable") {
    getImage(attrs.value);
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
  if (attrs.key == "shadow") {
    var shadowValues = attrs.value.split(',');
    var cornerRadiiArray = [];
    var _iterator = _createForOfIteratorHelper(allProps),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        if (prop.key == "cornerRadius") {
          cornerRadiiArray = [prop.value, prop.value, prop.value, prop.value, prop.value, prop.value, prop.value, prop.value];
          break;
        } else if (attrs.key == "cornerRadii") {
          var cornerRadiis = attrs.value.split(',');
          var cornerRadius = cornerRadiis.splice(0, 1);
          for (var i = 0; i < cornerRadiis.length; ++i) {
            cornerRadiiArray.push(cornerRadiis[i] * cornerRadius + "");
            cornerRadiiArray.push(cornerRadiis[i] * cornerRadius + "");
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var shadowBlur = shadowValues[2];
    var shadowOffset = {
      x: shadowValues[0],
      y: shadowValues[1]
    };
    var shadowColor = shadowValues[4];
    prePend = parseColor(shadowColor);
    prePend += "set_paint=get_ShapeDrawable->getPaint;";
    prePend += "get_paint->setShadowLayer:dpf_" + shadowBlur + ",dpf_" + shadowOffset.x + ",dpf_" + shadowOffset.y + ",get_colorInt;";
    prePend += "get_paint->setColor:get_colorInt;";
    var _arrList = "set_arr=java.util.ArrayList->new;";
    var _floatArray = cornerRadiiArray.map(function (val, i) {
      return "set_cornerRadius=java.lang.Float->new:dpf_" + val + ";get_arr->add:get_cornerRadius;";
    });
    prePend += _arrList + ";";
    prePend += "set_c=java.lang.Class->forName:s_java.lang.Float;";
    prePend += _floatArray.join("");
    prePend += "infl->convertAndStoreArray:get_arr,get_c,s_pArr,b_true;";
    prePend += "set_r=android.graphics.drawable.shapes.RoundRectShape->new:get_pArr,null_pointer,null_pointer;";
    currTransVal = "get_r";
  }
  if (attrs.key == "values") {
    var val = attrs.value.split(",");
    var valuesStr = "",
      i;
    for (i = 0; i < val.length; i++) {
      var elements = val[i].split(":");
      valuesStr += "get_spinnerArray->add:s_" + elements[0];
      for (var j = 1; j < elements.length; j++) valuesStr += "\n" + elements[j];
      valuesStr += ";";
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

  // if (attrs.key == "ripple" && sessionInfo["android_api_level"] >= 23) {
  //   vals = JSON.parse(attrs.value);
  //   prePend = addClickFeedback(vals.rippleColor, vals.disableFeedback, vals.enableRadii);
  //   currTransVal = ":get_ripple";
  // }

  if (belongsTo == "VIEW") keyWord = globalObjMap[belongsTo].val;else if (belongsTo == "DRAWABLE") {
    keyWord = 'get_' + mapParams[attrs.key].subDrawable;
  } else {
    keyWord = 'get_' + globalObjMap[belongsTo].val;
  }
  if (transformFn || attrs.key == "duration" || attrs.key == "delay" || attrs.key == "curve") _cmd = keyWord + '->' + (typeof obj.fnName == "undefined" ? obj.varName : obj.fnName);else _cmd = keyWord + '->' + attrs.key;
  if (obj.values && obj.values.length) _cmd += ':';
  if (!currTransVal && dontLoad) _cmd = "";else if (!prePend && !currTransVal) _cmd += appendArgs(attrs, obj) + ';';else _cmd += currTransVal + ';';

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
function parseAttrs(group, belongsTo, transformFn, type) {
  attrs = group.props;
  id = group.id;
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
  return prepareCtr(attrs, belongsTo, id) + ';' + cmd;
}
function parseGroups(type, groups, config) {
  var keys = Object.keys(groups);
  var ctr;
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] == "FOREGROUND") {
      if (!globalObjMap[keys[i]]) {
        if (getSetType == "set") {
          globalObjMap[keys[i]] = {
            ctr: "android.graphics.drawable.GradientDrawable->new",
            val: keys[i]
          };
          command += 'set_' + globalObjMap[keys[i]].val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type) + 'this->' + "setForeground" + ':' + 'get_' + globalObjMap[keys[i]].val + ';';
        } else {
          globalObjMap[keys[i]] = {
            ctr: 'get_view->getForeground',
            val: keys[i]
          };
          command += 'set_' + globalObjMap[keys[i]].val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type);
        }
      }
    } else if (keys[i] == "LAYOUT_TRANSITION") {
      globalObjMap.LAYOUT_TRANSITION = {
        ctr: 'android.animation.LayoutTransition->new',
        val: "LAYOUT_TRANSITION"
      };
      command += 'set_' + globalObjMap.LAYOUT_TRANSITION.val + '=' + parseAttrs(groups.PARAMS, 'LAYOUT_TRANSITION', true, type) + 'this->' + "setLayoutTransition" + ':get_' + globalObjMap.LAYOUT_TRANSITION.val + ';';
    } else if (keys[i] == "VIEW") {
      if (!globalObjMap.VIEW) {
        if (getSetType == "set") {
          if (type != "linearLayout") {
            groups.VIEW.props = groups.VIEW.props.filter(function (views) {
              if (views.key != "orientation") return views;
            });
          }
          globalObjMap.VIEW = {
            ctr: "this",
            val: "this"
          };
        } else globalObjMap.VIEW = {
          ctr: "get_view",
          val: "get_view"
        };
      }
      if (config.hasOwnProperty("onClick")) {
        groups.VIEW.props.push({
          "key": "ripple",
          "value": JSON.stringify({
            "rippleColor": config.hasOwnProperty("rippleColor") ? config.rippleColor : "#e0e0e0",
            "disableFeedback": config.hasOwnProperty("disableFeedback") ? config.disableFeedback : false,
            "enableRadii": config.hasOwnProperty("enableRoundedRipple") && config.enableRoundedRipple
          })
        });
      }
      command += parseAttrs(groups.VIEW, 'VIEW', true, type);
    } else if (keys[i] == "PARAMS") {
      if (getSetType == "set") {
        if (!globalObjMap.PARAMS) {
          ctr = config.root ? getCtr(type) : 'PARAM_CTR_HOLDER';
          globalObjMap.PARAMS = {
            ctr: ctr,
            val: "PARAMS"
          };
        }
        command += 'set_' + globalObjMap.PARAMS.val + '=' + parseAttrs(groups.PARAMS, 'PARAMS', true, type) + 'this->' + objMap.PARAMS.viewMethod.split(',')[0] + ':get_' + globalObjMap.PARAMS.val + ';';
      } else {
        if (!globalObjMap.PARAMS) {
          ctr = "get_view->getLayoutParams";
          globalObjMap.PARAMS = {
            ctr: ctr,
            val: "PARAMS"
          };
        }
        command += 'set_' + globalObjMap.PARAMS.val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type);
      }
    } else if (keys[i] == "MUTATEBG") {
      if (!globalObjMap.MUTATEBG) {
        globalObjMap.MUTATEBG = {
          ctr: 'this->getBackground',
          val: "MUTATEBG"
        };
      }
      command += 'set_' + globalObjMap.MUTATEBG.val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type);
    } else if (keys[i] == "ANIMATION") {
      if (!globalObjMap.ANIMATION) {
        if (getSetType == "set") globalObjMap.ANIMATION = {
          ctr: 'this->animate',
          val: "ANIMATION"
        };else globalObjMap.ANIMATION = {
          ctr: 'get_view->animate',
          val: "ANIMATION"
        };
      }
      command += 'set_' + globalObjMap.ANIMATION.val + '=' + parseAttrs(groups[keys[i]], keys[i], false, type);
    } else {
      // Works only for drawable
      if (!globalObjMap[keys[i]]) {
        if (getSetType == "set") {
          command += "set_arr=java.util.ArrayList->new;";
          command += "set_c=java.lang.Class->forName:s_android.graphics.drawable.Drawable;";
          command += "infl->convertAndStoreArray:get_arr,get_c,s_lyrArr,b_false;";
          globalObjMap[keys[i]] = {
            ctr: objMap[keys[i]].ctr,
            val: keys[i]
          };
          command += 'set_' + globalObjMap[keys[i]].val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type) + 'this->' + objMap[keys[i]].viewMethod.split(',')[0] + ':' + 'get_' + globalObjMap[keys[i]].val + ';';
        } else {
          globalObjMap[keys[i]] = {
            ctr: 'get_view->getBackground',
            val: keys[i]
          };
          command += 'set_' + globalObjMap[keys[i]].val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type);
          command += 'this->' + objMap[keys[i]].viewMethod.split(',')[0] + ':' + 'get_' + globalObjMap[keys[i]].val + ';';
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
function addClickFeedback(rippleColor, disableFeedback, enableRadii) {
  if (disableFeedback) return "";
  var feedback = "set_mask=android.graphics.drawable.ShapeDrawable->new;";
  if (enableRadii) {
    feedback += "set_c=java.lang.Class->forName:s_java.lang.Float;";
    feedback += "set_arr=java.util.ArrayList->new;";
    // 8 values, 2 for each corner. Starts at the left-top and moves clock-wise
    feedback += "set_r=java.lang.Float->new:dpf_30;";
    for (var i = 0; i < 8; i++) feedback += "get_arr->add:get_r;";
    feedback += "infl->convertAndStoreArray:get_arr,get_c,s_pArr,b_true;";
    feedback += "set_rect=android.graphics.drawable.shapes.RoundRectShape->new:get_pArr,null_pointer,null_pointer;";
    feedback += "get_mask->setShape:get_rect;";
  }
  feedback += parseColor(rippleColor, "set_ripplecolor");
  feedback += "set_paint=get_mask->getPaint;get_paint->setColor:get_ripplecolor;";
  feedback += "set_colorlist=android.content.res.ColorStateList->valueOf:get_ripplecolor;";
  feedback += "set_ripple=android.graphics.drawable.RippleDrawable->new:get_colorlist,null_pointer,get_mask;";
  return feedback;
}
function configFunction(type, config, _getSetType) {
  config = flattenObject(config);
  getSetType = _getSetType;
  elementType = type;
  var groups = getConfigGroups(config, elementType);
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
  if (config['lottieAnimation']) {
    try {
      var animationArray = JSON.parse(config['lottieAnimation']);
      for (i = 0; i < animationArray.length; i++) {
        if (!animationArray[i].lottieUrl) continue;
        var lottieUrl = JSON.parse(animationArray[i].lottieUrl);
        if (!isURL(lottieUrl)) continue;
        var strictMode = animationArray[i].strictMode ? JSON.parse(animationArray[i].strictMode) : false;
        var animation = animationArray[i];
        var lottieName = lottieUrl.substring(lottieUrl.lastIndexOf('/') + 1);
        var filePresent = typeof JBridge.isFilePresent == "function" && JBridge.isFilePresent(lottieName);
        if (filePresent) {
          animationArray[i].lottieUrl = lottieName;
          config.lottieAnimation = JSON.stringify(animationArray);
        } else {
          if (strictMode) {
            JBridge.renewFile(lottieUrl, lottieName);
          } else {
            var callback = callbackMapper.map(function (isNew, url, fileName) {
              animation.lottieUrl = lottieName;
              var updatedProps = {};
              updatedProps.id = config.id;
              updatedProps.lottieAnimation = JSON.stringify([animation]);
              Android.updateProperties(JSON.stringify(updatedProps));
            });
            JBridge.renewFile(lottieUrl, lottieName, callback);
          }
          animationArray.splice(i, 1);
        }
      }
    } catch (err) {
      console.log(">>>>error in prestoUI lottie Animation:", err);
    }
  }
  if (!flag) {
    config.runInUI = parseGroups(type, groups, config);
  }
  return config;
}
function appendToFontWhiteList(fonts) {
  state.fontsWhiteList = state.fontsWhiteList.concat(fonts);
}
module.exports = {
  configFunction: configFunction,
  appendToFontWhiteList: appendToFontWhiteList
};

/***/ }),

/***/ "./src/helpers/android/utils.js":
/*!**************************************!*\
  !*** ./src/helpers/android/utils.js ***!
  \**************************************/
/***/ (function(module) {

function getId(config) {
  return config.id || config.__id;
}
module.exports = {
  getId: getId
};

/***/ }),

/***/ "./src/helpers/common/callbackMapper.js":
/*!**********************************************!*\
  !*** ./src/helpers/common/callbackMapper.js ***!
  \**********************************************/
/***/ (function(module) {

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
This takes a function and puts it in a hashmap called __PROXY_FN and returns the key (a string). 
Key is contructed using a global variables. 
Hashmap is also a global variable. 
Point To Note : Since iframes, we have different DOM Documents. So, these global variables are global to Presto-UI's document. 
*/
module.exports.map = function (fn) {
  // console.debug("presto-ui callback-mapper document location",document.location); 
  if (typeof window.__FN_INDEX !== 'undefined' && window.__FN_INDEX !== null) {
    var proxyFnName = 'F' + window.__FN_INDEX;
    if (window.__payload && window.__payload.service) {
      proxyFnName = window.__payload.service + "_" + proxyFnName;
    }
    window.__PROXY_FN[proxyFnName] = fn;
    window.__FN_INDEX++;
    // console.log("Presto-UI Callback Mapper proxyFnName is",proxyFnName); 
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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

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

window.presto_ui_version = "1.4.1";
var _require = __webpack_require__(/*! ./helper */ "./src/helper.js"),
  merge = _require.merge;
window.PrestoUI = __webpack_require__(/*! ./PrestoUIInterface */ "./src/PrestoUIInterface.js");
var getCurrTime = function getCurrTime() {
  return new Date().getTime();
};
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
if (true) {
  if (!window.parent.juspayAssetConfig) {
    try {
      window.parent.juspayAssetConfig = JSON.parse(JBridge.loadFileInDUI("juspay_assets.json"));
    } catch (e) {
      window.parent.juspayAssetConfig = {};
    }
  }
  window.juspayAssetConfig = window.parent.juspayAssetConfig;
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
// Adding temp fix - Will be moved to mystique-web
try {
  window.__PROXY_FN = window.parent.__PROXY_FN ? window.parent.__PROXY_FN : {};
} catch (error) {
  window.__PROXY_FN = {};
}
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
window.__isMOBILE = window.innerWidth < 550; // this line takes up 80ms out of 360ms
window.__isFIREFOX = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || typeof InstallTrigger !== 'undefined';
// Adding temp fix - Will be moved to mystique-web
try {
  window.__VIEWS = window.parent.__VIEWS ? window.parent.__VIEWS : {};
} catch (error) {
  window.__VIEWS = {};
}
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.android.js.map
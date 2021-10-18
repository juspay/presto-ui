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
  getOS: __webpack_require__(/*! ./src/helper */ "./src/helper.js").getOS,
  prestoMerge: __webpack_require__(/*! ./src/helper */ "./src/helper.js").merge,
  prestoClone: __webpack_require__(/*! ./src/helper */ "./src/helper.js").clone
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

if (true) {
  webParseParams = helpers.web.parseParams;
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

  if (props.focus == false && "WEB" === "ANDROID") {}

  var children = [];

  for (var i = 0; i < elem.children.length; i++) {
    children.push(domAll(elem.children[i]));
  }

  if (__OS == "WEB" && props.onResize) {
    window.__resizeEvent = props.onResize;
  }

  props.id = elem.__ref.__id;
  if (elem.parentType && "WEB" == "ANDROID") {}
  return prestoDom(type, props, children);
}

function getDomToRender(elem) {
  var res = domAll(elem);

  if (false) {} else {
    return res;
  }
} // Not exported


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
  var cmd = "set_view=ctx->findViewById:i_" + _id + ";"; // var runInUI;

  delete config.id;
  config.root = "true";
  var obj = parseParams(type, config, "get");
  obj.runInUI = cmd + obj.runInUI + ';';
  obj.id = _id;
  return obj;
}

function getRunInUICmd(prop) {
  var cmd;

  if (false) {} else if (false) {} else {
    cmd = webParseParams("linearLayout", prop, "set");
  }

  return cmd;
} // Not exported


function applyProp(element, attribute, set) {
  var prop = {
    id: element.__ref.__id
  };
  prop[attribute.value0] = attribute.value1;

  if (attribute.value0 == 'focus' && attribute.value1 == false && "WEB" == "ANDROID") {}

  if (false) { var cmd; } else if (false) {} else {
    Android.runInUI(webParseParams("linearLayout", prop, "set"));
  } // Android.runInUI(parseParams("linearLayout", prop, "set"));

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
  } // console.log("Add child :", child.__ref.__id, child.type);


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

/***/ "./src/WEB/AndroidInterface.js":
/*!*************************************!*\
  !*** ./src/WEB/AndroidInterface.js ***!
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
var _require = __webpack_require__(/*! ./Render */ "./src/WEB/Render.js"),
    inflateView = _require.inflateView,
    computeChildDimens = _require.computeChildDimens,
    List = _require.List,
    postComputeLayoutDimens = _require.postComputeLayoutDimens,
    preComputeLayoutDimens = _require.preComputeLayoutDimens,
    postCompute = _require.postCompute,
    isChrome50 = _require.isChrome50,
    handleMatchParentChrome50 = _require.handleMatchParentChrome50;

var helper = __webpack_require__(/*! ../helper */ "./src/helper.js");

var callbackInvoker = __webpack_require__(/*! ../helpers/common/callbackInvoker */ "./src/helpers/common/callbackInvoker.js");

var _require2 = __webpack_require__(/*! ./ListPresto */ "./src/WEB/ListPresto.js"),
    diffArray = _require2.diffArray;

var _require3 = __webpack_require__(/*! ./Utils */ "./src/WEB/Utils.js"),
    addToContainerList = _require3.addToContainerList,
    getContainer = _require3.getContainer,
    getParentView = _require3.getParentView;

function getScreenDimensions(namespace) {
  var element = getContainer(namespace);
  return JSON.stringify({
    width: element.offsetWidth,
    height: element.offsetHeight
  });
} // Due to jos, PrestoDOM's document is different from the DOM Document which actaully contains the nodes.
// This utility function allows PrestoDOM to acquire an actual DOM object.


function getUIElement(id, namespace) {
  var ele = document.getElementById(id);
  return ele;
}

function findSiblingView(parentView, id) {
  for (var i = 0; i < parentView.children.length; i++) {
    if (parentView.children[i].props.id == id) {
      if (i != 0) return parentView.children[i - 1];else return parentView;
    }
  }

  return null;
}

function isOrientatationChanged(props) {
  if (props['orientation']) return false;
  return true;
}

function runInUI(cmd, namespace) {
  if (typeof cmd == "string") return;
  var id = cmd.id;

  if (id) {
    var elem = document.getElementById(id);

    if (elem) {
      var view = window.__VIEWS[id];

      if (cmd.itemView) {
        return;
      }

      if (!cmd.listData && view.listData) return;

      if (cmd.listData) {
        //diffing arrrays to find the difference between old data and new data
        //console.time('diffArray')
        console.log("diff");
        view.props.diffArray = List.diffArray(view.props.itemDatas, JSON.parse(cmd.listData)); //console.dir(view.props.diffArray)
        //console.timeEnd('diffArray')
        //no difference in data

        if (view.props.diffArray == []) {
          return;
        }
      }

      view.props = helper.merge(view.props, cmd);
      var parentId = null;
      var parentElement = null;
      var parentView = null;
      var stopChild = !isOrientatationChanged(cmd);
      parentId = elem.parentNode.id;

      if (parentId) {
        parentView = window.__VIEWS[parentId];
        parentElement = document.getElementById(parentId);

        if (parentElement && parentView) {
          var siblingView = findSiblingView(parentView, id);
          computeChildDimens(parentView);
          var computeList = []; // if(view.type == "relativeLayout")
          //   computeList.push(view.props.id);

          var chrome50matchList;

          if (isChrome50()) {
            chrome50matchList = {
              h: [],
              w: []
            };
          }

          inflateView({
            view: view,
            parentElement: parentElement,
            siblingView: siblingView,
            renderStyle: true,
            stopChild: stopChild,
            isListItem: true,
            computeList: computeList,
            chrome50matchList: chrome50matchList
          });
          var parent = view.parent;

          while (parent && parent.type == "relativeLayout") {
            computeList.unshift(view.parent.props.id);
            parent = parent.parent;
          }

          postCompute(computeList);
          handleMatchParentChrome50(chrome50matchList);
        }
      }
    }
  } //recompute()
  //Render.runInUI(cmd)

}

function Render(view, cb, namespace) {
  var parentElement = getContainer(namespace); // console.debug("presto content element found?? ",parentElement);

  var parentView = getParentView(namespace, view);

  if (parentView.oldView) {
    addViewToParent(parentElement.id, view, parentView.children.indexOf(view), cb, false);
  } else {
    computeChildDimens(parentView);
    var computeList = [];
    var elem = inflateView({
      view: view,
      parentElement: parentElement,
      computeList: computeList
    });
    postCompute(computeList);
    var elements = document.getElementById('content');
    if (cb) callbackInvoker.invoke(cb);
  }
}

function getUpdatedChildren(parent, view, index) {
  var children = parent.children;
  children.splice(children.indexOf(view), 1);
  children.splice(index, 0, view);
  return children;
}

function moveView(id, index) {
  if (!window.__VIEWS[id]) {
    return console.error(new Error("MoveView: Invalid view ID: " + id));
  }

  var view = window.__VIEWS[id];
  var viewElem = document.getElementById(id);
  var parentId = viewElem.parentNode.id;
  var parent = window.__VIEWS[parentId];
  var children = getUpdatedChildren(parent, view, index);
  computeChildDimens(parent);
  children.forEach(function (child) {
    var computeList = [];
    console.log("moving");
    var chrome50matchList;

    if (isChrome50()) {
      chrome50matchList = {
        h: [],
        w: []
      };
    }

    inflateView({
      view: child,
      parentElement: parent,
      computeList: computeList,
      chrome50matchList: chrome50matchList
    });
    handleMatchParentChrome50(chrome50matchList);
    postCompute(computeList);
  });
} // Android.addViewToParent(rootId, dom_all, length (window.__ROOTSCREEN.idSet.child) - 1 , callback, null); -- call to this function


function addViewToParent(id, view, index, cb, replace, namespace) {
  // console.log("addViewToParent document location is",document.location);
  var parentElement = document.getElementById(id);
  var parentView = window.__VIEWS[id];
  view.parent = parentView;
  var siblingView = null;
  if (!parentElement || !parentView) return;
  parentView.children.splice(index, 0, view);
  if (index == 0) siblingView = parentView;else siblingView = parentView.children[index - 1];
  preComputeLayoutDimens(parentView);
  var computeList = [];
  var chrome50matchList;

  if (isChrome50()) {
    chrome50matchList = {
      h: [],
      w: []
    };
  }

  var elem = inflateView({
    view: view,
    siblingView: siblingView,
    namespace: namespace,
    computeList: computeList,
    chrome50matchList: chrome50matchList
  }); // pass parent element as null, so that the element created doesn't immediately get attached to the DOM

  var pv = parentView;
  var pe = parentElement;

  while (pv && pv.type == "relativeLayout") {
    // postComputeLayoutDimens(pv, pe);
    computeList.unshift(pv.props.id);
    pv = pv.parent;
    pe = pe.parentElement;
  } // attach the elem to live dom once the elem has been constructed (parentElem is the liveDOM)


  if (parentElement) {
    var siblingElement = siblingView ? document.getElementById(siblingView.props.id) : null;

    if (siblingElement && siblingElement != undefined) {
      if (parentElement == siblingElement) {
        // Prepend
        parentElement.insertBefore(elem, parentElement.childNodes[0]);
      } else {
        // Insert in specified position
        var nextSiblingElement = siblingElement.nextSibling;
        parentElement.insertBefore(elem, nextSiblingElement);
      }
    } else {
      parentElement.appendChild(elem);
    }
  }

  if (window.focusedElement !== undefined) {
    var c = document.getElementById(window.focusedElement);
    window.focusedElement = undefined;

    if (c) {
      console.debug("now focusing");
      c.focus();
    }
  }

  postCompute(computeList);
  handleMatchParentChrome50(chrome50matchList);
  if (cb) callbackInvoker.invoke(cb);
}

function removeView(id, namespace) {
  var viewElem = document.getElementById(id);

  if (!viewElem) {
    helper.clearViewExternals(view);
    return;
  }

  var parentId = viewElem.parentNode.id;

  if (!parentId) {
    helper.clearViewExternals(view);
    viewElem.remove();
    return;
  }

  var parentElem = document.getElementById(parentId);

  if (!parentElem) {
    helper.clearViewExternals(view);
    viewElem.remove();
    return;
  }

  var view = window.__VIEWS[id];
  if (!view || !view.type) return;
  var parent = null;
  var idx;
  parent = window.__VIEWS[parentId];

  if (parent) {
    idx = parent.children.indexOf(view);
    parent.children.splice(idx, 1);
    helper.clearViewExternals(view);
  }

  viewElem.remove();
}

function replaceView(view, id, namespace) {
  var elem = document.getElementById(id);
  if (!elem) return;
  var parentId = elem.parentNode.id;
  var parentElem = document.getElementById(parentId);
  var parentView = window.__VIEWS[parentId];
  var oldView = null;
  var siblingView = null;

  for (var i = 0; i < parentView.children.length; i++) {
    if (parentView.children[i].props.id == id) {
      oldView = parentView.children[i];
      if (i != 0) siblingView = parentView.children[i - 1];else siblingView = parentView;
      break;
    }
  }

  if (!oldView) return;
  /* Get Children */

  var childrenElem = [];
  var children = oldView.children;

  if (elem && children) {
    for (var _i = 0; _i < children.length; _i++) {
      var childId = children[_i].props.id;
      var childElem = document.getElementById(childId);
      if (childElem) childrenElem.push(childElem);
    }
  }
  /* Get Children End */


  oldView.props = view.props;
  parentElem.removeChild(elem);
  var computeList = [];
  var chrome50matchList;

  if (isChrome50()) {
    chrome50matchList = {
      h: [],
      w: []
    };
  }

  inflateView({
    view: oldView,
    parentElement: parentElem,
    siblingView: siblingView,
    stopChild: true,
    computeList: computeList,
    chrome50matchList: chrome50matchList
  });
  window.__VIEWS[id] = oldView;
  /* Append Children */

  elem = document.getElementById(id);

  if (elem && childrenElem.length > 0) {
    for (var _i2 = 0; _i2 < childrenElem.length; _i2++) {
      elem.appendChild(childrenElem[_i2]);
    }
  }

  postCompute(computeList);
  handleMatchParentChrome50(chrome50matchList);
  /* Append Children End */
} // function recompute() {
//   const rootnode = document.getElementById('content');
//   const child = rootnode.firstElementChild;
//   const rootview = window.__VIEWS[child.id];
//   Render(rootview, null);
// }


function getNewID() {
  window.JOS_PRESTO_ID = window.JOS_PRESTO_ID || 1;
  return window.JOS_PRESTO_ID++;
}

function getWindow() {
  return window;
}

function getDocument() {
  return document;
}

module.exports = {
  addToContainerList: addToContainerList,
  getScreenDimensions: getScreenDimensions,
  getUIElement: getUIElement,
  runInUI: runInUI,
  Render: Render,
  addViewToParent: addViewToParent,
  moveView: moveView,
  removeView: removeView,
  replaceView: replaceView,
  getNewID: getNewID,
  getWindow: getWindow,
  getDocument: getDocument
};

/***/ }),

/***/ "./src/WEB/ListPresto.js":
/*!*******************************!*\
  !*** ./src/WEB/ListPresto.js ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//view.data= itemView && holderViews
//itemView=template
//holderViews= array of props that will be changed from the template
var _require = __webpack_require__(/*! ../helpers/common/callbackInvoker */ "./src/helpers/common/callbackInvoker.js"),
    invoke = _require.invoke;

var _require2 = __webpack_require__(/*! ../helper */ "./src/helper.js"),
    clone = _require2.clone; //sets the holder attributes


var setChildAttributes = function setChildAttributes(view, holder, itemData, index) {
  for (var key in holder) {
    if (key == 'onClick') {
      var onClickFunction = function onClickFunction() {
        return invoke(holder.onClick, index);
      };

      view.props.onClick = onClickFunction;
    } else if (itemData.hasOwnProperty(holder[key])) {
      view.props[key] = itemData[holder[key]];
    }
  }
};

var setList = function setList(view, holderViews, itemData, index) {
  if (holderViews[view.props.holderId]) {
    setChildAttributes(view, holderViews[view.props.holderId], itemData, index);
  }

  for (var _i = 0; _i < view.children.length; _i++) {
    setList(view.children[_i], holderViews, itemData, index);
  }

  return view;
}; //gets the mapped view


var getItemView = function getItemView(view, holderViews, itemData, index) {
  if (holderViews[view.props.holderId]) {
    setChildAttributes(view, holderViews[view.props.holderId], itemData, index);
  }

  if (view.children) for (var _i2 = 0; _i2 < view.children.length; _i2++) {
    setList(view.children[_i2], holderViews, itemData, index);
  }
  return view;
}; //returns "filter" if arrays are of different length
//returns the indexes which have different elements in it


function diffArray(oldItems, newItems) {
  if (oldItems.length != newItems.length) return "filter";
  var diffIndexes = [];
  var limit = 10;
  limit = newItems.length > 10 ? 10 : newItems.length;

  for (var _i3 = 0; _i3 < newItems.length; _i3++) {
    var keys = Object.keys(newItems[_i3]);

    if (keys) {
      var _iterator = _createForOfIteratorHelper(keys),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;

          if (newItems[_i3][key] != oldItems[_i3][key]) {
            diffIndexes.push(_i3);
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

  return diffIndexes;
}

function mergeHolderViews(holderViews) {
  var finalHolder = {};

  for (var _i4 = 0; _i4 < holderViews.length; _i4++) {
    if (finalHolder[holderViews[_i4].id] == undefined) {
      finalHolder[holderViews[_i4].id] = {};
    }

    for (var key in holderViews[_i4]) {
      finalHolder[holderViews[_i4].id][key] = holderViews[_i4][key];
    }
  }

  return finalHolder;
} //generates the list items views


function createListView(view) {
  view.props.data.holderViews = mergeHolderViews(view.props.data.holderViews);
  view.children = [];
  changeItemView(view.props.data.itemView);

  for (var _i5 = 0; _i5 < view.props.itemDatas.length; _i5++) {
    var cloneTemplate = clone(view.props.data.itemView);
    var childView = getItemView(cloneTemplate, view.props.data.holderViews, view.props.itemDatas[_i5], _i5);
    view.children.push(childView);
  }
}

var itemClick = function itemClick(onItemClick) {
  return function () {
    return function () {
      onItemClick(i);
    };
  };
}; //Get the child element for a particular index


var getChildItemViewByIndex = function getChildItemViewByIndex(view, i) {
  var cloneTemplate = clone(view.props.data.itemView); // if(view.props.hasOwnProperty('onItemClick')){
  //     let onItemClick = view.props.onItemClick;
  //     cloneTemplate.props.onClick =itemClick(onItemClick)(i);
  // }

  var res = getItemView(cloneTemplate, view.props.data.holderViews, view.props.itemDatas[i], i);
  return res;
}; //reformat the template


function changeItemView(view) {
  view.props.holderId = view.props.id;
  view.props.id = undefined;

  if (view.children) {
    var _iterator2 = _createForOfIteratorHelper(view.children),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var child = _step2.value;
        changeItemView(child);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
}

module.exports = {
  diffArray: diffArray,
  createListView: createListView,
  getItemView: getItemView,
  getChildItemViewByIndex: getChildItemViewByIndex
}; //newinflated -> isNewInflated
//add spaces
//add summary

/***/ }),

/***/ "./src/WEB/MapAttributes.js":
/*!**********************************!*\
  !*** ./src/WEB/MapAttributes.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var utils = __webpack_require__(/*! ./Utils */ "./src/WEB/Utils.js");

function mapPropToStyle(element, props, type) {
  var ele_style = "";
  ele_style += addProps(props);
  ele_style += addFontProp(props);
  ele_style += addTransformProp(props);
  ele_style += addStrokeProp(props);
  ele_style += addGradientProp(props);
  ele_style += addRotateProp(props);
  ele_style += addShadowProp(props);
  ele_style += addTypeSpecificProp(type, props); // TODO: mapPropToStyle should not do these side effect, when merging Render.js and MapAttributes.js, seperate out these functions from here.

  ele_style += addSetInputTypeProp(element, props); // also sets an attribute on mutable element
  // setElemAttributes(element,props);

  return ele_style;
}

var initializeShow = function initializeShow(elem, props, type) {
  var style = "";

  if (type == 'linearLayout') {
    if (props.hasOwnProperty('width') && props.width == 'wrap_content') {
      style += "display: inline-flex;";
      style += "width: max-content;"; // elem.style.display = 'inline-flex';
      // elem.style.width = 'max-content';
    } else {
      style += "display: flex;"; //elem.style.display = "flex";
    }
  } else {
    if (props.hasOwnProperty('width') && props.width == 'wrap_content') {
      style += "display:inline-block;";
      style += "width:max-content;"; // elem.style.display = 'inline-block';
      // elem.style.width = 'max-content';
    } else {
      // iFrame/webView display is set to none by default in hyper-sdk-web.
      // enabling explicitly for visible case.
      if (type == 'webView') {
        style += "display: block;";
      } // style += "display:'';";
      //    elem.style.display = '';

    }
  }

  return style;
}; // Author's Note: Haskel's pattern matching would've made this code prettier. - Convert Presto to Purs?
// fontStyle take precedence over fontFamily


function addProps(props) {
  var ele_style = "";

  if (props.hasOwnProperty("onClick") || props.hasOwnProperty("onClickEvent")) {
    if (window.innerWidth > 550 && !props.cursorType) {
      ele_style += "cursor:pointer;";
    }
  }

  if (props.hasOwnProperty("cursorType")) {
    ele_style += "cursor: " + props.cursorType + ";";
  }

  if (props.hasOwnProperty("textSize")) {
    ele_style += "font-size: " + props.textSize + "px;";
  }

  if (props.hasOwnProperty("fontSize")) {
    ele_style += "font-size: " + props.fontSize + "px;";
  }

  if (props.hasOwnProperty("backgroundColor")) {
    ele_style += "background-color: " + utils.parseColors(props.backgroundColor) + ";";
  }

  ;

  if (props.hasOwnProperty("background") && !props.hasOwnProperty("shouldShimmer")) {
    ele_style += "background: " + utils.parseColors(props.background) + ";";
  }

  ;

  if (props.hasOwnProperty("background") && props.hasOwnProperty("shouldShimmer") && props.shouldShimmer) {
    shimmerColor = utils.parseColors(props.background);
    ele_style += "animation : shimmer 2s infinite;";
    ele_style += "background-color: " + shimmerColor + ";";
    ele_style += "background-repeat: no-repeat;";
    ele_style += "background-image: linear-gradient(to right," + shimmerColor + " 0%, #edeef1 20%, " + shimmerColor + " 40%, " + shimmerColor + " 100%);";
    ele_style += "background-size: " + props.width + " 100%;";
  }

  if (props.hasOwnProperty("backgroundDrawable")) {
    ele_style += "background-image: " + "url('" + props.backgroundDrawable + "')" + ";";
  }

  ;

  if (props.hasOwnProperty("color")) {
    ele_style += "color: " + utils.parseColors(props.color) + ";";
  }

  ;

  if (props.hasOwnProperty("position")) {
    ele_style += "position: " + props.position + ";";
  }

  ;

  if (props.hasOwnProperty("bottomFixed")) {
    ele_style += "bottom: " + props.bottomFixed + ";";
  }

  ;

  if (props.hasOwnProperty("topFixed")) {
    ele_style += "top: " + props.topFixed + ";";
  }

  ;

  if (props.hasOwnProperty("leftFixed")) {
    ele_style += "left: " + props.leftFixed + ";";
  }

  ;

  if (props.hasOwnProperty("rightFixed")) {
    ele_style += "right: " + props.rightFixed + ";";
  }

  ;

  if (props.hasOwnProperty("zIndex")) {
    ele_style += "z-index:" + props.zIndex + ";";
  }

  ;

  if (props.hasOwnProperty("cornerRadius")) {
    ele_style += "border-radius:" + props.cornerRadius + "px;";
  }

  ;

  if (props.hasOwnProperty("alpha")) {
    ele_style += "opacity:" + props.alpha + ";";
  }

  ;

  if (props.hasOwnProperty("fontFamily")) {
    ele_style += "font-family:" + props.fontFamily + ";";
  }

  ;

  if (props.hasOwnProperty("blurBackground") && props.blurBackground) {
    ele_style += "backdrop-filter: blur(3px)";
  }

  if (props.hasOwnProperty("lineHeight")) {
    ele_style += "line-height: " + props.lineHeight + ";";
  }

  if (props.hasOwnProperty("objectFit")) {
    ele_style += "object-fit: " + props.objectFit + ";";
  }

  if (props.hasOwnProperty("clickable")) {
    ele_style += "pointer-events: " + (props.clickable ? "auto" : "none") + ";";
  }

  if (props.hasOwnProperty("display")) {
    ele_style += "display:" + props.display + ";";
  }

  if (props.ellipsize) {
    ele_style += "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;";
  }

  return ele_style;
} // These values are hardcoded likely since same prestoDOM property is being used for Android, iOS and Web


function addFontProp(props) {
  var ele_style = "";

  if (props.typeface) {
    switch (props.typeface) {
      case 'normal':
        ele_style += "font-weight: 400;";
        break;

      case 'bold':
        ele_style += "font-weight: 700;";
        break;

      case 'italic':
        ele_style += "font-style: italic;";
        break;

      case 'bold_italic':
        ele_style += "font-weight: 700;";
        ele_style += "font-style: italic;";
        break;

      case 'underline':
        ele_style += "text-decoration: underline;";
        break;
    }
  }

  if (props.fontStyle) {
    var match = props.fontStyle.match(/[/-]/);
    var fontName = match ? props.fontStyle.slice(0, match.index) : props.fontStyle;
    ele_style += "font-family:" + fontName + ";";

    if (match) {
      var type = props.fontStyle.slice(match.index + 1);
      type = type.replace(/[-/]/g, '');
      type = type.toLowerCase();
      if (type.indexOf('italic') != -1) ele_style += "font-style: italic;";
      var fontWeight = 0;
      if (type.indexOf('extralight') != -1) fontWeight = 200;else if (type.indexOf('light') != -1) fontWeight = 300;else if (type.indexOf('regular') != -1 || type.indexOf('book') != -1) fontWeight = 400;else if (type.indexOf('semibold') != -1 || type.indexOf('medium') != -1) fontWeight = 500;else if (type.indexOf('bold') != -1 || type.indexOf('heavy') != -1) fontWeight = 700;else if (type.indexOf('black') != -1) fontWeight = 900;
      if (fontWeight > 0) ele_style += "font-weight:" + fontWeight + ";";
    }
  }

  return ele_style;
}

function addTransformProp(props) {
  var ele_style = "";
  var transform = "";

  if (props.translationX) {
    transform += "translateX(" + props.translationX + "px) ";
  }

  ;

  if (props.translationY) {
    transform += "translateY(" + props.translationY + "px) ";
  }

  ;

  if (props.scaleX) {
    transform += "scaleX(" + props.scaleX + ") ";
  }

  ;

  if (props.scaleY) {
    transform += "scaleY(" + props.scaleY + ") ";
  }

  ;

  if (props.rotation) {
    transform += "rotate(" + props.rotation + ") ";
  }

  ;

  if (props.rotationX) {
    transform += "rotateX(" + props.rotationX + ") ";
  }

  ;

  if (props.rotationY) {
    transform += "rotateY(" + props.rotationY + ") ";
  }

  ; // if (key == "translationZ") {
  //     var v = config[key];
  //     config.style["-webkit-box-shadow"] = "0 0 "+v.toString()+"px rgba(0,0,0, .1)";
  //     config.style["-moz-box-shadow"]= "0 0 "+v.toString()+"px rgba(0,0,0, .1)";
  //     config.style["box-shadow"]=  "0 0 "+v.toString()+"px rgba(0,0,0, .1)";
  //   }

  if (transform.length > 0) {
    ele_style += "transform : " + transform + ";";
  }

  ;
  return ele_style;
}

function addStrokeProp(props) {
  var ele_style = "";

  if (props.hasOwnProperty("stroke")) {
    var values = props.stroke.split(",");

    if (values.length == 2) {
      ele_style += "border: " + values[0] + "px solid " + values[1] + ";";
    } else if (values.length == 3) {
      if (values[2] == "rbl") {
        ele_style += "border-bottom: " + values[0] + "px solid " + values[1] + ";";
        ele_style += "border-left: " + values[0] + "px solid " + values[1] + ";";
        ele_style += "border-right: " + values[0] + "px solid " + values[1] + ";";
      } else if (values[2] == "b") {
        ele_style += "border-bottom: " + values[0] + "px solid " + values[1] + ";";
      } else if (values[2] == "r") {
        ele_style += "border-right: " + values[0] + "px solid " + values[1] + ";";
      } else if (values[2] == "rb") {
        ele_style += "border-bottom: " + values[0] + "px solid " + values[1] + ";";
        ele_style += "border-right: " + values[0] + "px solid " + values[1] + ";";
      } else if (values[2] == "l") {
        ele_style += "border-left: " + values[0] + "px solid " + values[1] + ";";
      } else ele_style += "border: " + values[0] + "px  " + values[1] + " " + values[2] + ";";
    }
  }

  if (props.hasOwnProperty("strokeTop")) {
    var _values = props.strokeTop.split(",");

    if (_values.length == 2) ele_style += "border-top: " + _values[0] + "px solid " + _values[1] + ";";else if (_values.length == 3) ele_style += "border-top: " + _values[0] + "px  " + _values[1] + " " + _values[2] + ";";
  }

  if (props.hasOwnProperty("strokeRight")) {
    var _values2 = props.strokeRight.split(",");

    if (_values2.length == 2) ele_style += "border-right: " + _values2[0] + "px solid " + _values2[1] + ";";else if (_values2.length == 3) ele_style += "border-right: " + _values2[0] + "px  " + _values2[1] + " " + _values2[2] + ";";
  }

  if (props.hasOwnProperty("strokeBottom")) {
    var _values3 = props.strokeBottom.split(",");

    if (_values3.length == 2) ele_style += "border-bottom: " + _values3[0] + "px solid " + _values3[1] + ";";else if (_values3.length == 3) ele_style += "border-bottom: " + _values3[0] + "px  " + _values3[1] + " " + _values3[2] + ";";
  }

  if (props.hasOwnProperty("strokeRight")) {
    var _values4 = props.strokeRight.split(",");

    if (_values4.length == 2) ele_style += "border-right: " + _values4[0] + "px solid " + _values4[1] + ";";else if (_values4.length == 3) ele_style += "border-right: " + _values4[0] + "px  " + _values4[1] + " " + _values4[2] + ";";
  }

  if (props.hasOwnProperty("strokeLeft")) {
    var _values5 = props.strokeLeft.split(",");

    if (_values5.length == 2) ele_style += "border-left: " + _values5[0] + "px solid " + _values5[1] + ";";else if (_values5.length == 3) ele_style += "border-left: " + _values5[0] + "px  " + _values5[1] + " " + _values5[2] + ";";
  }

  return ele_style;
}

function addGradientProp(props) {
  var ele_style = "";

  if (props.hasOwnProperty("gradient")) {
    var gradientObj = JSON.parse(props.gradient);

    if (gradientObj.type == "linear") {
      var angle = gradientObj.angle;
      var values = gradientObj.values;
      var colors = values.join(", ");
      ele_style += "background-image: " + "linear-gradient(" + angle + "deg, " + colors + ");";
    } else {
      var values = gradientObj.values;
      var colors = values.join(", ");
      ele_style += "background-image: " + "radial-gradient(" + colors + ");";
    }
  }

  return ele_style;
}

function addTransitionValue(props) {
  //let elem_transition = props.transition == undefined ? "0ms all" : props.transition // It will always be undefined lol
  var transition_val = [String(props.a_duration || 0) + "ms", "all", props.transitionTimingFunction].filter(Boolean).join(" ");
  return "transition:" + transition_val + ";";
}

function addSize() {
  var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = view.props;
  var parentView = view.parent || {};
  parentView.state = parentView.state || {};
  view.state = view.state || {};
  var parentProps = parentView.props || {}; // Add elem as an argument if you are gonna uncomment it
  // elem.style.width = 'auto';
  // elem.style.height = 'auto';

  var elem_style = "width : auto; ";
  elem_style += "height: auto; ";

  if (props.hasOwnProperty('width')) {
    if (props.width == 'match_parent' && !parentView.state.treatMatchParentAsWrapWidth) {
      // treat parent wrap content as wrap_content instead of match_parent
      if (props.hasOwnProperty('margin')) {
        var margin = props.margin.split(",");
        elem_style += "width:" + "calc(100% - " + (parseInt(margin[0]) + parseInt(margin[2])).toString() + "px );";
      } else elem_style += "width : 100%; "; //elem.style.width = '100%';

    } else if (props.width == 'match_parent' && parentView.state.treatMatchParentAsWrapWidth) {
      view.state.practicalWidth = 'wrap_content';
    } else if (props.width == 'wrap_content') {
      view.state.practicalWidth = 'wrap_content';
    } else if (!isNaN(props.width)) {
      if (props.hasOwnProperty('percentWidth') && props.percentWidth) elem_style += "width: " + props.width + "%;"; // elem.style.width = props.width + '%';
      else elem_style += "width: " + props.width + "px;"; //elem.style.width = props.width + 'px';
    }
  }

  if (props.hasOwnProperty('height')) {
    if (props.height == 'match_parent' && !parentView.state.treatMatchParentAsWrapHeight) {
      elem_style += "height: 100%;"; // elem.style.height = '100%';
    } else if (props.height == 'match_parent' && parentView.state.treatMatchParentAsWrapHeight) {
      view.state.practicalHeight = 'wrap_content';
      elem_style += "height: auto;"; //elem.style.height = "auto";
      // You see below
    } else if (props.height == 'wrap_content') {
      view.state.practicalHeight = 'wrap_content';
    } else if (!isNaN(props.height)) {
      if (props.hasOwnProperty('percentHeight') && props.percentHeight) elem_style += "height: " + props.height + "%;"; //                elem.style.height = props.height + '%';
      else elem_style += "height: " + props.height + "px;"; //            elem.style.height = props.height + 'px';
    }
  }

  if (props.hasOwnProperty('minWidth') && !isNaN(props.minWidth)) {
    if (props.percentMinWidth) elem_style += "min-width: " + props.minWidth + "%;"; //            elem.style.minWidth = props.minWidth + '%';
    else elem_style += "min-width: " + props.minWidth + "px;"; //    elem.style.minWidth = props.minWidth + 'px';
  }

  if (props.hasOwnProperty('minHeight') && !isNaN(props.minHeight)) {
    if (props.percentMinHeight) elem_style += "min-height: " + props.minHeight + "%;"; // elem.style.minHeight = props.minHeight + '%';
    else elem_style += "min-height: " + props.minHeight + "px;"; // elem.style.minHeight = props.minHeight + 'px';
  }

  if (props.hasOwnProperty('maxWidth') && !isNaN(props.maxWidth)) {
    if (props.percentMaxWidth) elem_style += "max-width: " + props.maxWidth + "%;"; //            elem.style.maxWidth = props.maxWidth + '%';
    else elem_style += "max-width: " + props.maxWidth + "px;"; //            elem.style.maxWidth = props.maxWidth + 'px';
  }

  if (props.hasOwnProperty('maxHeight') && !isNaN(props.maxHeight)) {
    if (props.percentMaxHeight) elem_style += "max-height: " + props.maxHeight + "%;"; // elem.style.maxHeight = props.maxHeight + '%';
    else elem_style += "max-height: " + props.maxHeight + "px;"; //elem.style.maxHeight = props.maxHeight + 'px';
  }

  return elem_style;
}

function addBorder(props) {
  var elem_style = "";

  if (props.hasOwnProperty('padding')) {
    var padding = props.padding.split(',').map(function (a) {
      return a * 1;
    });
    elem_style += "padding: " + padding[1] + "px " + padding[2] + "px " + padding[3] + "px " + padding[0] + "px;"; //        elem.style['padding'] = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
  }

  if (props.hasOwnProperty('margin')) {
    var margin = props.margin.split(',').map(function (a) {
      return a * 1;
    });
    elem_style += "margin: " + margin[1] + "px " + margin[2] + "px " + margin[3] + "px " + margin[0] + "px;"; //        elem.style['margin'] = margin[1] + 'px ' + margin[2] + 'px ' + margin[3] + 'px ' + margin[0] + 'px';
  }

  return elem_style;
}

function addVisibility(elem, props, type) {
  var elem_style = "";

  if (props.hasOwnProperty('visibility')) {
    var visibility = props.visibility;
    if (visibility == 'invisible') elem_style += "visibility: hidden;"; //elem.style.visibility = "hidden";
    else if (visibility == 'gone') elem_style += "display: none;"; //elem.style.display = "none";
    else {
      // elem_style += "visibility: '';";
      //elem.style.visibility = '';
      elem_style += initializeShow(elem, props, type);
    }
  } else {
    elem_style += initializeShow(elem, props, type);
  }

  return elem_style;
}

function addExpandability(elem, props, type) {
  var elem_style = "";

  if (props.hasOwnProperty('expand')) {
    var visibility = props.expand + '';

    if (visibility == 'true') {
      // elem_style += "visibility: '';";
      // elem.style.visibility = '';
      elem_style += initializeShow(elem, props, type);
    } else elem_style += "display: none;"; //    elem.style.display = "none";

  }

  return elem_style;
}

function addOverFlow(props) {
  var elem_style = "";

  if (props.hasOwnProperty('overFlowVisible')) {
    if (props.overFlowVisible) {
      elem_style += "overflow: visible;"; // elem.style.overflow = "visible"
    }
  }

  return elem_style;
}

function setGravityStylesForRow(elem, props) {
  var gravity_row_style = "";

  if (!props.hasOwnProperty('gravity') || !props.gravity) {
    props.gravity = ''; //return;
  }

  switch (props.gravity) {
    case 'center_vertical':
      gravity_row_style += "align-items: center;";
      gravity_row_style += "justify-content: flex-start;"; // elem.gravity_row_style['align-items'] = 'center';
      // elem.gravity_row_style['justify-content'] = 'flex-start';

      break;

    case 'center_horizontal':
      gravity_row_style += "align-items: flex-start;";
      gravity_row_style += "justify-content: center;"; // elem.gravity_row_style['align-items'] = 'flex-start';
      // elem.gravity_row_style['justify-content'] = 'center';

      break;

    case 'center':
      gravity_row_style += "align-items: center;";
      gravity_row_style += "justify-content: center;"; // elem.gravity_row_style['align-items'] = "center";
      // elem.gravity_row_style['justify-content'] = "center";

      break;

    case 'left':
    case 'start':
      gravity_row_style += "align-items: flex-start;";
      gravity_row_style += "justify-content: flex-start;"; // elem.gravity_row_style['align-items'] = 'flex-start';
      // elem.gravity_row_style['justify-content'] = 'flex-start';

      break;

    case 'right':
    case 'end':
      gravity_row_style += "align-items: flex-start;";
      gravity_row_style += "justify-content: flex-end;"; // elem.gravity_row_style['align-items'] = 'flex-start';
      // elem.gravity_row_style['justify-content'] = 'flex-end';

      break;

    case 'stretch':
      gravity_row_style += "align-items: stretch;";
      gravity_row_style += "justify-content: flex-start;"; // elem.gravity_row_style['align-items'] = 'stretch';
      // elem.gravity_row_style['justify-content'] = 'flex-start';

      break;

    default:
      gravity_row_style += "align-items: flex-start;";
      gravity_row_style += "justify-content: flex-start;"; // elem.gravity_row_style['align-items'] = 'flex-start';
      // elem.gravity_row_style['justify-content'] = 'flex-start';

      break;
  }

  return gravity_row_style;
}

function setGravityStylesForColumn(elem, props) {
  var gravity_col_style = "";

  if (!props.hasOwnProperty('gravity') || !props.gravity) {
    props.gravity = ''; //return;
  }

  switch (props.gravity) {
    case 'center_vertical':
      gravity_col_style += "align-items: flex-start;";
      gravity_col_style += "justify-content: center;"; // elem.style['align-items'] = 'flex-start';
      // elem.style['justify-content'] = 'center';

      break;

    case 'center_horizontal':
      gravity_col_style += "align-items: center;";
      gravity_col_style += "justify-content: flex-start;"; // elem.style['align-items'] = 'center';
      // elem.style['justify-content'] = 'flex-start';

      break;

    case 'center':
      gravity_col_style += "align-items: center;";
      gravity_col_style += "justify-content: center;"; // elem.style["align-items"] = "center";
      // elem.style["justify-content"] = "center";

      break;

    case 'left':
    case 'start':
      gravity_col_style += "align-items: flex-start;";
      gravity_col_style += "justify-content: flex-start;"; // elem.style['justify-content'] = 'flex-start';
      // elem.style['align-items'] = 'flex-start';

      break;

    case 'right':
    case 'end':
      gravity_col_style += "align-items: flex-end;";
      gravity_col_style += "justify-content: flex-start;"; // elem.style['align-items'] = 'flex-end';
      // elem.style['justify-content'] = 'flex-start';

      break;

    case 'stretch':
      gravity_col_style += "align-items: stretch;";
      gravity_col_style += "justify-content: flex-start;"; // elem.style['align-items'] = 'stretch';
      // elem.style['justify-content'] = 'flex-start';

      break;

    default:
      gravity_col_style += "align-items: flex-start;";
      gravity_col_style += "justify-content: flex-start;"; // elem.style['align-items'] = 'flex-start';
      // elem.style['justify-content'] = 'flex-start';

      break;
  }

  return gravity_col_style;
}

function addLayout(elem, type, props) {
  var scrollBarX = props.hasOwnProperty('scrollBarX') ? props.scrollBarX : true;
  var scrollBarY = props.hasOwnProperty('scrollBarY') ? props.scrollBarX : true;
  var elem_style = "";

  switch (type) {
    case 'linearLayout':
      elem_style += "box-sizing: border-box;"; //elem.style["box-sizing"] = "border-box";

      if (props.hasOwnProperty('fixedWrap') && !props.fixedWrap) {
        elem_style += "flex-wrap: nowrap;"; //elem.style["flex-wrap"] = "nowrap";
      } else {// elem_style += "flex-wrap: wrap;";
        //elem.style["flex-wrap"] = "wrap";
      }

      var orient = props.orientation == "vertical" ? "column" : "row";
      elem_style += "flex-direction: " + orient + ";"; // elem.style["flex-direction"] =

      if (orient == 'row') elem_style += setGravityStylesForRow(elem, props);else elem_style += setGravityStylesForColumn(elem, props); // if (elem.style["flex-direction"] == 'row')
      //     setGravityStylesForRow(elem, props);
      // else
      //     setGravityStylesForColumn(elem, props);

      if (props.hasOwnProperty('scrollBarX')) {
        if (props.scrollBarX) elem_style += "overflow-x: auto;"; //                  elem.style.overflowX = 'auto'
        else elem_style += "overflow-x: hidden;"; //              elem.style.overflowX = 'hidden'
      }

      if (props.hasOwnProperty('scrollBarY')) {
        if (props.scrollBarY) elem_style += "overflow-y: auto;"; // elem.style.overflowY = 'auto'
        else elem_style += "overflow-y: hidden;"; // elem.style.overflowY = 'hidden'
      }

      break;

    case "horizontaScrollView":
      elem_style += "overflow-x: auto;";
      elem_style += "overflow-y: hidden;"; // elem.style.overflowX = "auto";
      // elem.style.overflowY = "hidden";
      // if (!scrollBarX)
      //     elem_style += "overflow-x: hidden;";

      break;

    case 'listView':
      elem_style += "overflow-x: hidden;";
      elem_style += "overflow-y: auto;"; // elem.style.overflowY = "auto";
      // elem.style.overflowX = "hidden";
      // if (!scrollBarY)
      //     elem_style += "overflow-y: hidden;";
      // elem.style.overflowY = 'hidden';

      break;

    case 'scrollView':
      elem_style += "overflow-x: auto;";
      elem_style += "overflow-y: auto;"; // elem.style.overflowX = 'auto';
      // elem.style.overflowY = 'auto';
      // if (!scrollBarX)
      //     elem_style += "overflow-x: hidden;";
      // if (!scrollBarY)
      //     elem_style += "overflow-y: hidden;";

      break;

    case 'relativeLayout':
      elem_style += "position: relative;"; // elem.style.position = 'relative';

      if (props.hasOwnProperty('scrollBarX')) {
        if (props.scrollBarX) elem_style += "overflow-x: auto;"; // elem.style.overflowX = 'auto'
        else elem_style += "overflow-x: hidden;"; // elem.style.overflowX = 'hidden'
      }

      if (props.hasOwnProperty('scrollBarY')) {
        if (props.scrollBarY) elem_style += "overflow-y: auto;"; //  elem.style.overflowY = 'auto'
        else elem_style += "overflow-y: hidden;"; //          elem.style.overflowY = 'hidden'
      }

  }

  return elem_style;
}

function addImage(type, props, elem) {
  if (type == 'imageView') {
    if (props.imageUrl) {
      var imageUrl = props.imageUrl;

      if (props.rawData) {// Do Nothing
      } else {
        var temp = imageUrl.split('.');
        var ext = '';
        if (temp && temp.length > 0) ext = temp[temp.length - 1];
        var exts = ["jpeg", "jpg", "png", "bmp", "svg", "gif"];
        ext = ext.toLowerCase();

        if (!imageUrl.includes("data:image/") && !exts.includes(ext)) {
          imageUrl += '.png';
        }
      }

      elem.setAttribute('src', imageUrl);
    }
  }
}

function findArticle(children) {
  var article = null;

  if (children.length) {
    for (var i = 0; i < children.length; i++) {
      if (children[i].nodeName.toLowerCase() == 'article') {
        article = children[i];
        break;
      }
    }
  }

  return article ? article : document.createElement('article');
}

function getArticle(children, config) {
  var article = findArticle(children);
  if (config.isHtmlContent) article.innerHTML = config.textFromHtml;else article.innerText = config.text;
  article.style.wordBreak = "break-word";
  article.style.display = "inline";
  return article;
}

function getTextStyle(config) {
  var text = "white-space:initial;";
  return config.letterSpacing ? text + "letter-spacing:" + config.letterSpacing + ";" : text;
}

function createTextElement(elem, config) {
  var text_style = getTextStyle(config);
  var article = getArticle(elem.childNodes, config);
  elem.appendChild(article);
  return text_style;
}

function addTextProperties(props, elem, type) {
  var elem_style = "";

  if (props.hasOwnProperty("text")) {
    if (type == "editText") elem.value = props.text;else elem_style += createTextElement(elem, props);
  }

  if (props.hasOwnProperty("textFromHtml")) {
    props.isHtmlContent = true;
    if (type == "editText") elem.value = props.textFromHtml;else elem_style += createTextElement(elem, props);
  }

  delete props.text;
  return elem_style;
}

function addClassNameProperties(props, elem) {
  if (props.hasOwnProperty("className")) {
    if ((props.className || "").trim() !== "") {
      props.className.split(" ").map(function (className) {
        elem.classList.add(className);
      });
    }
  }

  if (props.hasOwnProperty("classList")) {
    JSON.parse(props.classList).forEach(function (obj) {
      elem.classList.add(obj);
    });
  }

  if (props.hasOwnProperty("removeClassList")) {
    JSON.parse(props.removeClassList).forEach(function (obj) {
      elem.classList.remove(obj);
    });
  }
}

function addFunctions(props, elem) {
  var elem_style = "";

  for (var key in props) {
    if (props[key] && typeof props[key] == "function") {
      var eventType = key.substring(2, key.length).toLowerCase();
      var elemCB = props[key];
      elem_style += "user-select: none;"; //elem.style.userSelect = 'none';

      if (eventType == "change") {
        eventType = "input";
      }

      elem.addEventListener('blur', function () {
        var inputValue = elem.value;

        if (inputValue == "") {
          elem.classList.remove("filled");
          elem.parentNode.classList.remove('focused');
        } else {
          elem.classList.add('filled');
        }
      });

      elem['onfocus'] = function (e) {
        elem.parentNode.classList.add('focused');

        if (eventType == "focus") {
          e.stopPropagation();
          elemCB(e);
        }
      };
    }
  }

  return elem_style;
}

function addAnimationAttributes(props) {
  var elem_style = "";
  var animation_transition = getAnimeTransition(props);
  var animation_transform = getAnimeTransform(props);
  var animation_opacity = getAnimeOpacity(props);

  if (animation_transition.length > 0 && animation_transform.length + animation_opacity.length > 0) {
    // this will need to be renamed actually to VDOM output's
    var afterTransition = function afterTransition() {
      elem_style += animation_transition;
      if (animation_transform.length > 0) elem_style += animation_transform;

      if (animation_opacity.length > 0) {
        elem_style += animation_opacity;
      }
    };

    if (props.style.transform || props.style.opacity) {
      setTimeout(afterTransition, 100); // Why is a time out here?
    } else {
      afterTransition();
    }
  }

  return elem_style;
}

function addTypeSpecificProp(type, props) {
  var ele_style = "";

  if (props.hasOwnProperty('visibility')) {
    if (props.visibility == "gone") return ele_style;
  }

  if (props.hasOwnProperty('display')) {
    if (props.display == "none") return ele_style;
  }

  if (type == "textView" && props.hasOwnProperty("gravity")) {
    ele_style += "text-align:" + props.gravity + ";";

    if (props.gravity == "center_vertical") {
      ele_style += "align-items:center;";
      ele_style += "display:flex;";
    } else if (props.gravity == "center_horizontal") {
      ele_style += "justify-content:center;";
      ele_style += "display:flex;";
    } else if (props.gravity == "center") {
      ele_style += "justify-content:center;";
      ele_style += "align-items:center;";
      ele_style += "display:flex;";
    }
  }

  if (type == "linearLayout" && props.hasOwnProperty("gravity")) {
    if (props.margin && props.gravity == "center_vertical") {
      var margin = props.margin.split(",");

      if (props.width == "match_parent") {
        var width = "calc(100% - " + (parseInt(margin[0]) + parseInt(margin[2])).toString() + "px )";
        ele_style += "width:" + width + ";";
      }
    }
  }

  return ele_style;
}

function addRotateProp(props) {
  var ele_style = "";

  if (props.hasOwnProperty("rotateImage")) {
    if (props.rotateImage) {
      ele_style += "-webkit-animation:load3 4s infinite linear;";
      ele_style += "animation-duration:4s;";
      ele_style += "animation-timing-function:linear;";
      ele_style += "animation-delay:0s;";
      ele_style += "animation-iteration-count:infinite;";
      ele_style += "animation-direction:normal;";
      ele_style += "animation-fill-mode:none;";
      ele_style += "animation-play-state:running;";
      ele_style += "animation-name:rotation;";
    }
  }

  return ele_style;
}

function addShadowProp(props) {
  var ele_style = "";

  if (props.hasOwnProperty("shadow")) {
    var shadowValues = props.shadow.split(props.shadowSeparator || ',');
    var shadowBlur = utils.rWS(utils.cS(shadowValues[2]));
    var shadowSpread = utils.rWS(utils.cS(shadowValues[3]));
    var shadowOpacity = utils.rWS(utils.cS(shadowValues[5]));
    var shadowOffset = {
      x: utils.rWS(utils.cS(shadowValues[0])),
      y: utils.rWS(utils.cS(shadowValues[1]))
    };
    var shadowColor = utils.convertColorToRgba(shadowValues[4]);
    var shadowType = props.shadowType ? "".concat(props.shadowType, " ") : '';
    ele_style += "box-shadow:" + shadowType + parseInt(shadowOffset.x) + "px " + parseInt(shadowOffset.y) + "px " + parseInt(shadowBlur) + "px " + parseInt(shadowSpread) + "px rgba(" + shadowColor.r + ", " + shadowColor.g + ", " + shadowColor.b + ", " + shadowColor.a + ");";
  }

  return ele_style;
}

function addSetInputTypeProp(ele, props) {
  var ele_style = "";

  if (props.hasOwnProperty("inputType")) {
    var inputType = "text";

    if (props.inputType == "numericPassword" || props.inputType == "password") {
      if (props.inputTypeI == 4 && window.innerWidth < 550) {
        // This feels like a very specific use-case? Investigate
        inputType = "tel";
        ele_style += "-webkit-text-security:disc;";
        ele_style += "-moz-text-security:disc;";
        ele_style += "text-security:disc;";
      } else {
        ele.setAttribute("autocomplete", "new-password");
        inputType = "password";
      }
    } else if (props.inputType == "disabled") {
      ele.setAttribute("disabled", "disabled");
    } else if (props.inputType == "numeric") {
      inputType = "number";
    } else if (props.inputType === "telephone") {
      inputType = "tel";
    }

    if (props.hasOwnProperty("separator")) {
      if (props.inputType == "numeric") {
        inputType = "tel";
      } else {
        inputType = "text";
      }
    }

    ele.setAttribute("type", inputType);
  }

  return ele_style;
}

function getAnimeTransform(props) {
  var elem_style_value = "";

  if (props.hasOwnProperty("a_translationY")) {
    elem_style_value += "translateY(" + props["a_translationY"] + "px) ";
  }

  if (props.hasOwnProperty("a_translationX")) {
    elem_style_value += "translateX(" + props["a_translationX"] + "px) ";
  }

  if (props.hasOwnProperty("a_scaleX")) {
    elem_style_value += "scaleX(" + props["a_scaleX"] + ") ";
  }

  if (props.hasOwnProperty("a_scaleY")) {
    elem_style_value += "scaleY(" + props["a_scaleY"] + ") ";
  }

  if (props.hasOwnProperty("a_rotation")) {
    elem_style_value += "rotate(" + props["a_rotation"] + "deg) ";
  }

  if (props.hasOwnProperty("a_rotationX")) {
    elem_style_value += "rotateX(" + props["a_rotationX"] + "deg) ";
  }

  if (props.hasOwnProperty("a_rotationY")) {
    elem_style_value += "rotateY(" + props["a_rotationY"] + "deg) ";
  }

  if (elem_style_value.length > 0) return " transform: " + elem_style_value + ";";else return "";
}

function getAnimeOpacity(props) {
  if (props.hasOwnProperty("a_alpha")) {
    return "opacity: " + props["a_alpha"] + "; ";
  } else return "";
}

function getAnimeTransition(props) {
  if (props.hasOwnProperty("a_duration") && !isNaN(props["a_duration"])) {
    var suffix = props.transitionTimingFunction ? " " + props.transitionTimingFunction : "";
    return "transition: " + props["a_duration"] + 'ms all' + suffix + ";";
  } else return "";
} // add attributes to the mutable element


function setElemAttributes(element, props) {
  if (props.hasOwnProperty("url")) {
    element.setAttribute('src', props.url);
  }

  if (props.hasOwnProperty("autofocus") && navigator.userAgent.indexOf("iPhone") == -1) {
    element.setAttribute('autofocus', 'autofocus');
  }

  ; // device should not be an iphone

  if (props.hasOwnProperty("focus")) {
    if (props.focus && props.id) {
      var doc = document.getElementById(props.id);

      if (doc) {
        doc.focus();
      }
    }
  }

  if (props.hasOwnProperty('contentEditable')) {
    element.setAttribute('contentEditable', 'true');
  }

  ;

  if (props.hasOwnProperty('hint')) {
    element.setAttribute('hint', props.hint);
  }

  ;

  if (props.hasOwnProperty("pattern")) {
    element.setAttribute("data-pattern", props.pattern);
    var data = props.pattern.split(',');
    var length = parseInt(data.pop());

    if (length > 10) {
      length = 10;
    }

    element.setAttribute("size", length);
  }

  if (props.hasOwnProperty("separator")) {
    element.setAttribute("separator", props.separator);
  }

  if (props.hasOwnProperty("separatorRepeat")) {
    element.setAttribute("separatorRepeat", props.separatorRepeat);
  }

  return element; // if (props.hasOwnProperty("myAttr")) {
  //     element.setAttribute(config.myAttr,config.myAttr);
  // }
}

function addPseudoClasses(elem, props) {
  var styleElem = document.getElementById(window.__STYLE_ID) || document.getElementsByTagName("body")[0].getElementsByTagName("style")[0];
  var css = "";

  if (props.hasOwnProperty("hoverBg")) {
    css += "div#\\3" + elem.id[0] + " " + elem.id.substring(1) + ":hover{background:" + props["hoverBg"] + "!important;}";
  }

  if (props.hasOwnProperty("hoverColor")) {
    css += "div#\\3" + elem.id[0] + " " + elem.id.substring(1) + ":hover{color:" + props["hoverColor"] + "!important;}";
  }

  if (!css) return;

  if (styleElem) {
    styleElem.innerText += css;
  } else {
    styleElem = document.createElement('style');
    styleElem.appendChild(document.createTextNode(css));
    document.getElementsByTagName("body")[0].appendChild(styleElem);
  }
}

module.exports = {
  mapPropToStyle: mapPropToStyle,
  getAnimeTransform: getAnimeTransform,
  getAnimeOpacity: getAnimeOpacity,
  getAnimeTransition: getAnimeTransition,
  setElemAttributes: setElemAttributes,
  addAnimationAttributes: addAnimationAttributes,
  addTransitionValue: addTransitionValue,
  addSize: addSize,
  addBorder: addBorder,
  addVisibility: addVisibility,
  addExpandability: addExpandability,
  addOverFlow: addOverFlow,
  addLayout: addLayout,
  addImage: addImage,
  addTextProperties: addTextProperties,
  addClassNameProperties: addClassNameProperties,
  addFunctions: addFunctions,
  addPseudoClasses: addPseudoClasses
};

/***/ }),

/***/ "./src/WEB/Render.js":
/*!***************************!*\
  !*** ./src/WEB/Render.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
var _require = __webpack_require__(/*! ../compute */ "./src/compute.js"),
    computeChildDimens = _require.computeChildDimens;

var mapAttributes = __webpack_require__(/*! ./MapAttributes */ "./src/WEB/MapAttributes.js");

var List = __webpack_require__(/*! ./ListPresto */ "./src/WEB/ListPresto.js");

function initiateElement(type, props, elem) {
  if (type == "editText" && elem.tagName.toLowerCase() == "input") {
    var isIPhone = navigator.userAgent.indexOf("iPhone") !== -1;

    if (elem.autofocus && !isIPhone) {
      elem.focus();
    }

    if (window.preponeSpace) {
      elem.addEventListener('input', separatorInputKeyDownHandlerNew);
    } else {
      elem.addEventListener('input', separatorInputKeyDownHandler);
    }
  }

  var events = ['onClick', 'onEnterPressedEvent', 'onChange', 'onMouseDown', 'onMouseUp', 'onMouseEnter', 'onMouseOver', 'onMouseMove', 'onMouseOut', 'onMouseLeave', 'onFocus', 'onPaste'];

  for (var i = 0; i < events.length; i++) {
    var key = events[i];
    var eventType = key.substring(2, key.length).toLowerCase();

    if (props.hasOwnProperty(key) && typeof props[key] == "function") {
      (function () {
        var callback = props[key];

        if (key == "onEnterPressedEvent") {
          elem.addEventListener('keyup', function (e) {
            e.stopPropagation();

            if (e.keyCode == 13) {
              callback(e);
            }
          });
        }

        if (eventType == "change") {
          elem.addEventListener('input', function (e) {
            callback(e.target.value);
          });
        } else if (eventType == "focus") {
          elem.addEventListener('focus', function (e) {
            callback("true");
          });
          elem.addEventListener('blur', function (e) {
            callback("false");
          });
        } else {
          props.oldEventListener = props.oldEventListener || {};

          if (typeof props.oldEventListener[eventType] == "function") {
            elem.removeEventListener(eventType, props.oldEventListener[eventType]);
          }

          props.oldEventListener[eventType] = function (e) {
            e.stopPropagation();
            callback(e);
          };

          elem.addEventListener(eventType, props.oldEventListener[eventType]);
        }
      })();
    }
  }
} // not being used in hyper-widget web


function popup(elem, props) {
  var menuItems = props["popupMenu"].split(',');
  var menuBar = document.createElement("div");
  menuBar.setAttribute("class", "popupMenu");
  menuBar.style.cssText = "display: none; position: absolute; right: 20px; top:20px; z-index: 5;" + "box-shadow: 0px 5px 10px #888888;";
  document.body.appendChild(menuBar);
  var clickCb = "onMenuItemClick";

  var _loop = function _loop(i) {
    var menuDiv = document.createElement("div");
    menuDiv.setAttribute("class", "menuItem");
    menuDiv.textContent = menuItems[i];
    menuBar.appendChild(menuDiv);
    var index = i;

    if (props[clickCb] && typeof props[clickCb] == "function") {
      menuDiv.addEventListener("click", function () {
        props[clickCb](index);
      });
    }
  };

  for (var i = 0; i < menuItems.length; i++) {
    _loop(i);
  }

  elem.addEventListener("click", function () {
    if (menuBar.style.display == "none") menuBar.style.display = "";else menuBar.style.display = "none";
  });
}

function setAnimationStyles(elem, props) {
  var animation_style = "";

  if (!props.hasOwnProperty('hasAnimation') || !props.hasAnimation) {
    return animation_style;
  }

  var keyframeName = "keyframe_" + props.id;
  var styleElem = document.getElementById(window.__STYLE_ID);
  var data = null;

  if (props.inlineAnimation) {
    console.log("INLINE");
    data = JSON.parse(props.inlineAnimation);

    if (data && data.length > 0) {
      data = data[0];
    }
  }

  if (!data) {
    return animation_style;
  }

  var css = "";
  css += "@keyframes " + keyframeName + "{";
  css += "from {";

  if (data.hasOwnProperty('fromX')) {
    css += "margin-left: " + data.fromX + "%;";
  }

  if (data.hasOwnProperty('fromY')) {
    css += "margin-top: " + data.fromY + "%;";
  }

  if (data.hasOwnProperty('fromAlpha')) {
    css += "opacity: " + data.fromAlpha + ";";
  }

  if (data.hasOwnProperty('fromScale')) {
    animation_style += 'transform-origin:top left;';
    css += "transform: scale(" + data.fromScale + ");";
  } else if (data.hasOwnProperty('fromScaleX') && data.hasOwnProperty('fromScaleY')) {
    animation_style += 'transform-origin:top left;';
    css += "transform: scale(" + data.fromScaleX + ", " + data.fromScaleY + ");";
  } else if (data.hasOwnProperty('fromScaleX')) {
    animation_style += 'transform-origin:top left;';
    css += "transform: scaleX(" + data.fromScaleX + ");";
  } else if (data.hasOwnProperty('fromScaleY')) {
    animation_style += 'transform-origin:top left;';
    css += "transform: scaleY(" + data.fromScaleY + ");";
  }

  if (data.hasOwnProperty('fromRotation')) {
    css += "transform: rotate(" + data.fromRotation + "deg);";
  } else {
    if (data.hasOwnProperty('fromRotationX')) {
      css += "transform: rotateX(" + data.fromRotationX + "deg);";
    } else if (data.hasOwnProperty('fromRotationY')) {
      css += "transform: rotateY(" + data.fromRotationY + "deg);";
    }
  }

  css += "} ";
  css += "to {";

  if (data.hasOwnProperty('toX')) {
    css += "margin-left: " + data.toX + "%;";
  }

  if (data.hasOwnProperty('toY')) {
    css += "margin-top: " + data.toY + "%;";
  }

  if (data.hasOwnProperty('toAlpha')) {
    css += "opacity: " + data.toAlpha + ";";
  }

  if (data.hasOwnProperty('toScale')) {
    css += "transform: scale(" + data.toScale + ");";
  } else if (data.hasOwnProperty('toScaleX') && data.hasOwnProperty('toScaleY')) {
    css += "transform: scale(" + data.toScaleX + ", " + data.toScaleY + ");";
  } else if (data.hasOwnProperty('toScaleX')) {
    css += "transform: scaleX(" + data.toScaleX + ");";
  } else if (data.hasOwnProperty('toScaleY')) {
    css += "transform: scaleY(" + data.toScaleY + ");";
  }

  if (data.hasOwnProperty('toRotation')) {
    css += "transform: rotate(" + data.toRotation + "deg);";
  } else {
    if (data.hasOwnProperty('toRotationX')) {
      css += "transform: rotateX(" + data.toRotationX + "deg);";
    } else if (data.hasOwnProperty('toRotationY')) {
      css += "transform: rotateY(" + data.toRotationY + "deg);";
    }
  }

  css += "} ";
  css += "}"; // console.log("css ", css);

  if (styleElem && styleElem.styleSheet) {
    styleElem.styleSheet.cssText += css;
  } else {
    styleElem = document.createElement('style');
    styleElem.appendChild(document.createTextNode(css));
    document.getElementsByTagName("head")[0].appendChild(styleElem);
  }

  animation_style += "animation-name:" + keyframeName + ";"; // elem.style.animationName = keyframeName
  //elem.style.animationDuration = "1s"

  if (data.hasOwnProperty('duration') && !isNaN(data.duration)) {
    var duration = parseFloat(parseFloat(data.duration) / 1000).toFixed(2);
    animation_style += "animation-duration:" + duration + "s;"; //elem.style.animationDuration = duration + "s"
  } else {
    animation_style += "animation-duration: 1s;";
  }

  if (data.hasOwnProperty('repeatCount')) {
    // TODO: this needs to be check the curve from the params sent to the api
    animation_style += "animation-timing-function: linear;";

    if (data.repeatCount == "-1" || data.repeatCount == -1) {
      animation_style += "animation-iteration-count:infinite;"; // elem.style.animationIterationCount = "infinite"
    } else {
      animation_style += "animation-iteration-count:" + (data.repeatCount + 1) + ";"; // elem.style.animationIterationCount = data.repeatCount
    }
  }

  if (data.hasOwnProperty("interpolator")) {
    animation_style += "animation-timing-function:" + "cubic-bezier(" + data.interpolator + ")" + ";"; //   elem.style.animationTimingFunction = "cubic-bezier(" + data.interpolator + ")";
  }

  window.__RENDERED_KEYFRAMES.push(keyframeName);

  console.log("animation style ", animation_style);
  return animation_style;
}

function setComputedStyles(elem, props) {
  var computed_styles = "";
  /* Computed Styles */
  // LinearLayout Styles

  if (props.hasOwnProperty('activeDimen') && props.hasOwnProperty('activeWeight')) {
    var activeDimen = props.activeDimen;
    var weight = props.activeWeight;

    if (weight > 0) {
      computed_styles += "flex:" + weight + ";";
      computed_styles += "flex-basis:auto;"; //elem.style.flex = weight;

      if (activeDimen == 'w') {//elem.style.width = 'auto';
      } else {// computed_styles += "height:auto;";
        // elem.style.height = 'auto';
      }
    } else {
      computed_styles += "flex:none;"; //elem.style.flex = 'none';
    }
  } else {
    computed_styles += "flex:none;"; //        elem.style.flex = 'none';
  } // RelativeLayout Styles


  if (props.hasOwnProperty('absolute') && props.absolute) {
    if (props.hasOwnProperty("position")) {
      computed_styles += "position:" + props.hasOwnProperty("position") + ";";
    } else {
      computed_styles += "position:absolute;";
    } //elem.style.position = 'absolute';


    if (props.hasOwnProperty("fromTop")) {
      if (isNaN(props.fromTop)) computed_styles += "top: " + props.fromTop + ";"; // elem.style.top = props.fromTop;
      else computed_styles += "top: " + props.fromTop + "px;"; // elem.style.top = props.fromTop + 'px';
    }

    if (props.hasOwnProperty("fromBottom")) {
      if (isNaN(props.fromBottom)) computed_styles += "bottom: " + props.fromBottom + ";"; //elem.style.bottom = props.fromBottom;
      else computed_styles += "bottom: " + props.fromBottom + "px;"; //elem.style.bottom = props.fromBottom + 'px';
    }

    if (props.hasOwnProperty("fromLeft")) {
      if (isNaN(props.fromLeft)) computed_styles += "left: " + props.fromLeft + ";"; // elem.style.left = props.fromLeft;
      else computed_styles += "left: " + props.fromLeft + "px;"; // elem.style.left = props.fromLeft + 'px';
    }

    if (props.hasOwnProperty("fromRight")) {
      if (isNaN(props.fromRight)) computed_styles += "right: " + props.fromRight + ";"; // elem.style.right = props.fromRight;
      else computed_styles += "right: " + props.fromRight + "px;"; // elem.style.right = props.fromRight + 'px';
    }
  }
  /* Computed Styles End */


  return computed_styles;
} // what does this do?


function separatorInputKeyDownHandlerNew(ev) {
  ev.stopPropagation();

  try {
    var inputId = ev.target.id;
    var inputType = ev.inputType;
    var input = document.getElementById(inputId);
    var oldValidValue = "";

    if (input.oldValidValue) {
      oldValidValue = input.oldValidValue;
    }

    if (input.value.length === 0) {
      input.oldValidValue = input.value;
      return;
    }

    var dataPattern = input.getAttribute("data-pattern");

    if (dataPattern) {
      var data = dataPattern.split(',');
      var length = parseInt(data.pop());
      var regexPattern = new RegExp(data.join(''));
      var selectionStart = input.selectionStart;
      var selectionEnd = input.selectionEnd;
      var separator = input.getAttribute("separator");
      var separatorRepeat = parseInt(input.getAttribute("separatorRepeat"));
      var value = input.value.replace(/[^a-zA-Z0-9@.-]/g, ""); //If existing value itself greater than equal to max length

      if (length) {
        input.setAttribute("maxlength", length);
      } // If code doesn't matches regex pattern


      if (!regexPattern.test(value)) {
        input.value = oldValidValue;
        input.selectionStart = selectionStart - (selectionEnd - selectionStart) - 1;
        input.selectionEnd = selectionEnd - (selectionEnd - selectionStart) - 1;
        return;
      } //Insert separator


      if (separator && separatorRepeat) {
        ev.preventDefault();
        var formattedString = "";

        for (var i = 0; i < value.length; i++) {
          var element = value[i];
          formattedString += element;
          var factor = 0;

          if (formattedString.length && formattedString.replace(/[^a-zA-Z0-9@.-]/g, "").length % (separatorRepeat + factor) == 0) {
            formattedString += separator;
          }
        }

        if (formattedString[length] == separator) {
          formattedString = formattedString.substring(0, formattedString.length - 1);
        }

        input.value = formattedString;

        if (inputType == "deleteContentBackward") {
          var cursorPosition = selectionStart;

          if (cursorPosition % (separatorRepeat + 1) === 0) {
            if (input.oldValidValue.length < formattedString.length) {
              cursorPosition += 1;
            } else {
              cursorPosition -= 1;
            }
          }

          if (cursorPosition < 0) {
            cursorPosition = 0;
          }

          input.oldValidValue = formattedString;
          input.focus();
          input.selectionStart = cursorPosition;
          input.selectionEnd = cursorPosition;
        }
      }

      input.oldValidValue = input.value;
    }
  } catch (err) {
    console.error(err);
  }
} // what does this do?


function separatorInputKeyDownHandler(ev) {
  ev.stopPropagation();

  try {
    var inputId = ev.target.id;
    var input = document.getElementById(inputId);
    var oldValidValue = "";

    if (input.oldValidValue) {
      oldValidValue = input.oldValidValue;
    }

    if (input.value.length === 0) {
      input.oldValidValue = input.value;
      return;
    }

    var dataPattern = input.getAttribute("data-pattern");

    if (dataPattern) {
      var data = dataPattern.split(',');
      var length = parseInt(data.pop());
      var regexString = data.join('');
      var selectionStart = input.selectionStart;
      var selectionEnd = input.selectionEnd;
      var newValue = input.value;

      if (length) {
        if (oldValidValue.length < input.value.length && oldValidValue.length + 1 > length) {
          input.value = oldValidValue;
          ev.preventDefault();
          input.selectionStart = selectionStart - (selectionEnd - selectionStart) - 1;
          input.selectionEnd = selectionEnd - (selectionEnd - selectionStart) - 1;
          return;
        }
      }

      var finalData = newValue.replace(/[^a-zA-Z0-9@.-]/g, "");

      if (regexString) {
        var regexPattern = new RegExp(regexString);

        if (!regexPattern.test(finalData)) {
          ev.preventDefault();
          input.value = oldValidValue;
          input.selectionStart = selectionStart - (selectionEnd - selectionStart) - 1;
          input.selectionEnd = selectionEnd - (selectionEnd - selectionStart) - 1;
          return;
        }
      }

      var separator = input.getAttribute("separator");
      var separatorRepeat = parseInt(input.getAttribute("separatorRepeat"));

      if (separator && separatorRepeat) {
        ev.preventDefault();
        var formattedString = "";

        for (var index = 0; index < finalData.length; index++) {
          var element = finalData[index];
          formattedString += element;
          var factor = 0;

          if (formattedString.length && formattedString.replace(/[^a-zA-Z0-9@.-]/g, "").length % (separatorRepeat + factor) == 0) {
            formattedString += separator;
          }
        }

        if (formattedString[formattedString.length - 1] == separator) {
          formattedString = formattedString.substring(0, formattedString.length - 1);
        }

        input.value = formattedString;
        var cursorPosition = selectionStart;

        if (cursorPosition % (separatorRepeat + 1) === 0) {
          if (input.oldValidValue.length < formattedString.length) {
            cursorPosition += 1;
          } else {
            cursorPosition -= 1;
          }
        }

        if (cursorPosition < 0) {
          cursorPosition = 0;
        }

        input.oldValidValue = formattedString;
        input.focus();
        input.selectionStart = cursorPosition;
        input.selectionEnd = cursorPosition; // console.log("formattedString----", formattedString);
      } else {
        input.oldValidValue = finalData;
      }
    }
  } catch (err) {
    console.error(err);
  }
}

function setAttributes(view, elem, firstRender) {
  var type = view.type;
  var props = view.props;
  var elem_style = "";
  elem.setAttribute("id", props.id); // elem_style += "id:"+props.id+";";

  if (type == "relativeLayout") {
    elem_style += "overflow:hidden;";
  }

  if (elem.classList && elem.classList.length > 0) elem.classList.add(type);else elem.className = type;
  elem_style += mapAttributes.addTransitionValue(props); // elem.style.transition = props.transition;

  /* New Style */

  /* Render from global styles */

  elem_style += mapAttributes.addSize(view); // The order here matters, as for elements with same precedence, the element on the right side of the array will be considered

  elem_style += mapAttributes.addBorder(props);
  elem_style += mapAttributes.addVisibility(elem, props, type);
  elem_style += mapAttributes.addExpandability(elem, props, type);
  /* Render global styles end */

  elem_style += mapAttributes.addOverFlow(props);
  elem_style += mapAttributes.addLayout(elem, type, props);
  mapAttributes.addImage(type, props, elem);
  mapAttributes.addTextProperties(props, elem, type);
  mapAttributes.addClassNameProperties(props, elem);
  elem_style += mapAttributes.mapPropToStyle(elem, props, type);
  elem = mapAttributes.setElemAttributes(elem, props);
  elem_style += mapAttributes.addFunctions(props, elem);
  elem_style += mapAttributes.addAnimationAttributes(props);
  mapAttributes.addPseudoClasses(elem, props);

  if (firstRender) {
    // Events are added when the element is created for the first time
    initiateElement(type, props, elem);
  }

  return elem_style;
} // mutation observers are slow, what is this and why can't global events solve this problem?

/* Observer for afterRender */


var observer = function observer(elem) {
  var id = elem.id;
  if (!id || __OBSERVERS[id]) return;
  __OBSERVERS[id] = new MutationObserver(function (item, observer) {
    if (item && item[0].target) {
      var target = item[0].target;
      var _id = target.id;

      if (_id) {
        var view = __VIEWS[_id];

        if (view && view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function") {
          view.props.afterRender();
        }
      }
    }

    observer.disconnect();
  });

  __OBSERVERS[id].observe(elem, {
    attributes: true
  });
};
/* Do some actions after rendered */
// just use global events no?


var cb = function cb(elem, view) {
  if (view.props.feedback && typeof view.props.feedback == "function") {
    view.props.feedback();
  }
};

window.inflateTimings = {
  lastUpdatedAt: null
}; // Creates the DOM element if it has not been already inflated
// View: Object similar to ReactDOM struct, {type, props, children}
// parentElement: DOM Object

var setToolTip = function setToolTip(view, elem) {
  if (view.type != 'linearLayout' && view.type != 'relativeLayout' && view.type != 'horizontalScrollView' && view.type != 'scrollView' && view.type != 'listView') {
    if (view.props.hasOwnProperty('tooltipText')) {
      var tooltipText = view.props.tooltipText.trim();

      if (tooltipText) {
        var tooltipGravity = view.props.tooltipGravity ? view.props.tooltipGravity : 'top';
        elem.classList.add('hasTooltip');
        var tooltipElem = document.createElement('div');
        tooltipElem.innerHTML = '<pre>' + tooltipText + '</pre>';
        tooltipElem.classList.add('tooltipText');
        tooltipElem.classList.add('tooltipGravity_' + tooltipGravity);
        var size = 15;

        if (view.props.hasOwnProperty('tooltipTextSize') && !isNaN(view.props.tooltipTextSize)) {
          size = view.props.tooltipTextSize;
        }

        tooltipElem.style.fontSize = size + 'px';
        elem.appendChild(tooltipElem);
      }
    }
  }
};

var createNewElement = function createNewElement(view, parentElement, siblingView) {
  var elem = null;
  var subElem = null;
  var element_style = ""; //console.log(view.type);

  switch (view.type) {
    case "webView":
      elem = document.createElement('iframe');
      elem.style.border = 'none';
      break;

    case "imageView":
      elem = document.createElement("img");
      element_style = "";
      element_style += "margin:0;";
      element_style += "padding:0;";
      element_style += "display:block;";
      element_style += "max-width:100%;";
      element_style += "max-height:100%;";
      element_style += "box-sizing:border-box;"; // elem["style"]["margin"] = "0";
      // elem["style"]["padding"] = "0";
      // elem["style"]["display"] = "block";
      // elem["style"]["max-width"] = "100%";
      // elem["style"]["max-height"] = "100%";
      // elem["style"]["box-sizing"] = "border-box";

      elem.setAttribute("alt", "");
      break;

    case "checkBox":
      elem = document.createElement("input");
      elem.setAttribute('type', 'checkbox');

      if (view.props.hasOwnProperty('checked') && view.props.checked == true) {
        elem.checked = true;
      } else {
        elem.checked = false;
      }

      if (view.props.hasOwnProperty('label') && view.props.label != '' && parentElement) {
        subElem = document.createElement('label');
        subElem.setAttribute('for', view.props.id);
        subElem.innerHTML = view.props.label;
        subElem.style.padding = "0 0 0 5px";
        subElem.classList.add('input-label');
        delete view.props.label;
      }

      break;

    case "editText":
      element_style = "";

      if (view.props.hasOwnProperty('inputType') && view.props.inputType == 'multiText') {
        elem = document.createElement("textarea");
        element_style += "border:none;";
        element_style += "resize:none;";
        element_style += "outline:none;"; //console.log('creating a component')
        // elem.style.border = 'none';
        // elem.style.resize = 'none';
        // elem.style.outline = 'none';
      } else {
        elem = document.createElement("input");
      }

      elem.value = view.props.text || "";

      if (view.props.letterSpacing) {
        element_style += "letter-spacing : " + view.props.letterSpacing + ";"; // elem["style"]["letter-spacing"] = view.props.letterSpacing;
      }

      if (view.props.label) {
        // var inputViewStyle = "";
        var inputView = elem;
        element_style += "width:100%;"; // inputView.style.width = '100%';

        element_style += setAttributes(view, inputView, true);
        inputView.setAttribute("id", view.props.id + "_input");
        var l = document.createElement("label");
        var label_style = "";
        l.setAttribute("for", view.props.id + "_input");
        l.innerHTML = view.props.label;
        l.classList.add('input-label');
        label_style += "position:absolute;";
        label_style += "color:#999;";
        label_style += "background-color:#fff;";
        label_style += "padding: 0 5px;";
        label_style += "z-index: 10;";
        label_style += "transition: transform 150ms ease-out, font-size 150ms ease-out;"; // l["style"]["position"] = "absolute";
        // l["style"]["color"] = "#999";
        // l["style"]["background-color"] = "#fff";
        // l["style"]["padding"] = "0 5px";
        // l["style"]["z-index"] = 10;
        // l["style"]["transition"] = "transform 150ms ease-out, font-size 150ms ease-out";

        if (view.props.letterSpacing) {
          label_style += "letter-spacing: " + view.props.letterSpacing + ";"; // l["style"]["letter-spacing"] = view.props.letterSpacing;
        }

        l.setAttribute("style", label_style);
        inputView.setAttribute("style", element_style);
        elem = document.createElement("div");
        element_style = "";
        elem.classList.add('input-group');
        elem.appendChild(l);
        elem.appendChild(inputView);
        view.props.style.position = "relative";
        view.props.style.overflow;
        element_style += setAttributes(view, elem, true);
        delete view.props.label;
      } else if (view.props.hint) {
        elem.placeholder = view.props.hint || "";
      }

      break;

    case 'shimmerFrameLayout':
      // for shimmerFrameLayout tag leaf nodes in the DOM tree so that CSS properties
      // for animations and styles can be added
      // every leaf node is tagged with a boolean shouldShimmer property in props
      if (view.props.isSeen == undefined) {
        var maxShimmerWidth = tagShimmerElementsForRender(view, view.children, 0) + 10;
        styleElem = document.createElement('style');
        styleElem.appendChild(document.createTextNode("@keyframes shimmer{0% {background-position: -" + maxShimmerWidth + "px 0;} 100% {background-position: " + maxShimmerWidth + "px 0;}}"));
        document.getElementsByTagName("body")[0].appendChild(styleElem);
      }

    // do not add a break here

    default:
      elem = document.createElement(view.elName || "div"); // create the element here

      element_style = "";
  }

  setToolTip(view, elem);
  addToParentElement(parentElement, siblingView, elem, subElem); // appened attributes, nodes & style to the elemenent

  element_style += setAttributes(view, elem, true);
  /*if(view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function"){
    if(!stopObserver){
      // We should run observer for the element
      observer(elem);
      elem.setAttribute('has_render', true);
    }
  }*/

  return {
    elem: elem,
    subElem: subElem,
    element_style: element_style
  };
};

var addToParentElement = function addToParentElement(parentElement, siblingView, elem, subElem) {
  if (parentElement) {
    var siblingElement = siblingView ? document.getElementById(siblingView.props.id) : null;

    if (siblingElement && siblingElement != undefined) {
      if (parentElement == siblingElement) {
        // Prepend
        if (subElem) {
          parentElement.insertBefore(subElem, parentElement.childNodes[0]);
        }

        parentElement.insertBefore(elem, parentElement.childNodes[0]);
      } else {
        // Insert in specified position
        var nextSiblingElement = siblingElement.nextSibling;
        parentElement.insertBefore(elem, nextSiblingElement);

        if (subElem) {
          parentElement.insertBefore(subElem, nextSiblingElement);
        }
      }
    } else {
      parentElement.appendChild(elem);

      if (subElem) {
        parentElement.appendChild(subElem);
      }
    }
  }
};

var setLayout = function setLayout(view, elem) {
  switch (view.type) {
    case 'horizontalScrollView':
      if (view.props.hasOwnProperty('scrollLeft') && !isNaN(view.props.scrollLeft)) elem.scrollLeft = view.props.scrollLeft;
      break;

    case 'listView':
      if (view.props.hasOwnProperty('scrollTop') && !isNaN(view.props.scrollTop)) elem.scrollTop = view.props.scrollTop;
      break;

    case 'scrollView':
      if (view.props.hasOwnProperty('scrollLeft') && !isNaN(view.props.scrollLeft)) elem.scrollLeft = view.props.scrollLeft;
      if (view.props.hasOwnProperty('scrollTop') && !isNaN(view.props.scrollTop)) elem.scrollTop = view.props.scrollTop;
  }
};

var getElementByView = function getElementByView(view, parentElement, siblingView, stopChild, renderStyle) {
  if (!view.props.id) {
    view.props.id = window.JOS_PRESTO_ID++; //window.__VIEWS[view.props.id] =  view;
  }

  var elem = document.getElementById(view.props.id);
  var subElem = null; //  this is being used only for lablel property

  var newInflated = false;
  var element_style = "";

  if (view.props.x == "NaN" || view.props.y == "NaN") {
    view = handleWrapContent(view, parentElement);
  }

  if (!elem) {
    var element = createNewElement(view, parentElement, siblingView);
    newInflated = true;
    elem = element.elem;
    subElem = element.subElem;
    element_style += element.element_style;
    if (view.props.hasOwnProperty("focus") && view.props.focus) window.focusedElement = view.props.id;
  } else if (renderStyle) {
    element_style += setAttributes(view, elem, true);
  }

  setLayout(elem, view);
  if (!stopChild) computeChildDimens(view);
  element_style += setComputedStyles(elem, view.props);
  element_style += setAnimationStyles(elem, view.props);
  elem.setAttribute("style", element_style); // finally attach all the styles to the element

  return {
    elem: elem,
    newInflated: newInflated
  };
};

var setAfterRenderFunctions = function setAfterRenderFunctions(newInflated, view, elem, stopObserver) {
  if (newInflated) {
    if (view.hasOwnProperty) if (view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function") {
      // mutation observers are expensive
      if (!stopObserver) {
        // We should run observer for the element
        observer(elem);
        elem.setAttribute('has_render', true);
      }
    } // if(view.data){
    //     for(let i=0;i<view.children.length;i++){
    //         let child = document.getElementById(view.children[i].props.id);
    //         child.addEventListener('onClick',()=>view.onItemClick(i));}
    // }

    cb(elem, view);
  }
};

function isChrome50() {
  var a = navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome/') + 7);
  return parseInt(a.substring(0, a.indexOf("."))) <= 50;
}

var renderList = function renderList(view, elem, computeList) {
  //console.dir(view.props.diffArray)
  if (view.props.diffArray == "filter") {
    // console.log("filtering")
    // console.time('filtering')
    view.children = [];
    elem.innerHTML = '';

    for (var i = 0; i < view.props.itemDatas.length; i++) {
      view.children.push(List.getChildItemViewByIndex(view, i));
    }

    computeChildDimens(view);

    for (var _i = 0; _i < view.props.itemDatas.length; _i++) {
      var chrome50matchList;

      if (isChrome50()) {
        chrome50matchList = {
          h: [],
          w: []
        };
      }

      elem.appendChild(inflateView({
        view: view.children[_i],
        computeList: computeList
      }));
    }

    handleMatchParentChrome50(chrome50matchList); // TODO :: run height enforcer
    //console.timeEnd('filtering')
  } //replacing only the diff elements
  else if (view.props.diffArray) {
    //console.time('patch')
    var _iterator = _createForOfIteratorHelper(view.props.diffArray),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _i2 = _step.value;
        //console.log("CHANGING VIEW OF "+i)
        console.time("patchingElement");
        var oldView = view.children[_i2];
        var oldChild = document.getElementById(oldView.props.id);

        if (oldChild) {
          var newChildView = List.getChildItemViewByIndex(view, _i2);
          newChildView.onClick = oldView.onClick;
          view.children[_i2] = newChildView;
          computeChildDimens(view);
          var chrome50matchList;

          if (isChrome50()) {
            chrome50matchList = {
              h: [],
              w: []
            };
          }

          var newChild = inflateView({
            view: newChildView,
            computeList: computeList,
            chrome50matchList: chrome50matchList
          });
          handleMatchParentChrome50(chrome50matchList); // newChild.addEventListener('click',newChildView.props.onClick)
          // newChild.style.cursor='pointer'
          // console.dir(newChild)

          elem.replaceChild(newChild, oldChild);
        }

        console.timeEnd('patchingElement');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  view.props.diffArray = undefined;
};

var inflateView = function inflateView() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      view = _ref.view,
      parentElement = _ref.parentElement,
      siblingView = _ref.siblingView,
      stopChild = _ref.stopChild,
      renderStyle = _ref.renderStyle,
      computeList = _ref.computeList,
      chrome50matchList = _ref.chrome50matchList;

  view.state = view.state || {};

  if (view.props.listData) {
    view.props.itemDatas = JSON.parse(view.props.listData);

    if (!view.props.data) {
      view.props.data = JSON.parse(view.props.listItem);
    }
  }

  if (_typeof(chrome50matchList) == "object") {
    chrome50matchList.h = chrome50matchList.h || [];
    chrome50matchList.w = chrome50matchList.w || [];

    if (view.props.height == "match_parent") {
      chrome50matchList.h.push(view);
    }

    if (view.props.width == "match_parent") {
      chrome50matchList.w.push(view);
    }
  }

  var _getElementByView = getElementByView(view, parentElement, siblingView, stopChild, renderStyle),
      elem = _getElementByView.elem,
      newInflated = _getElementByView.newInflated; //patching list


  if (view.props.listData && renderStyle) {
    renderList(view, elem, computeList);
  } else if (!stopChild) {
    //firstRender List
    if (view.props.itemDatas) {
      List.createListView(view);
      computeChildDimens(view);
    }

    if (view.hasOwnProperty('children') && view.children.length > 0) {
      preComputeLayoutDimens(view);
      postComputeLayoutDimens2(view, computeList);

      for (var i = 0; i < view.children.length; i++) {
        if (view.children[i]) {
          view.children[i].parent = view;

          if (i != 0) {
            inflateView({
              view: view.children[i],
              parentElement: elem,
              siblingView: view.children[i - 1],
              stopChild: renderStyle,
              renderStyle: renderStyle,
              computeList: computeList,
              chrome50matchList: chrome50matchList
            });
          } else {
            inflateView({
              view: view.children[i],
              parentElement: elem,
              siblingView: view,
              stopChild: renderStyle,
              renderStyle: renderStyle,
              computeList: computeList,
              chrome50matchList: chrome50matchList
            });
          }
        }
      }
    }

    view.state = view.state || {};
    view.state.computedHeight = isNaN(parseInt(view.props.height)) ? view.state.computedHeight || 0 : parseInt(view.props.height);
    view.state.computedWidth = isNaN(parseInt(view.props.width)) ? view.state.computedWidth || 0 : parseInt(view.props.width);
  } else {
    postComputeLayoutDimens2(view, computeList);
  }

  setAfterRenderFunctions(newInflated, view, elem);
  return elem;
};

var preComputeLayoutDimens = function preComputeLayoutDimens(view) {
  view.state = view.state || {};

  if (view.type == "relativeLayout") {
    view.state.treatMatchParentAsWrapHeight = view.state.practicalHeight == "wrap_content";
    view.state.treatMatchParentAsWrapWidth = view.state.practicalWidth == "wrap_content"; // if(view.state.treatMatchParentAsWrapHeight && view.state.treatMatchParentAsWrapWidth)

    for (var i = 0; i < view.children.length; ++i) {
      if (view.children[i].props.height != "match_parent") view.state.treatMatchParentAsWrapHeight = false;
      if (view.children[i].props.width != "match_parent") view.state.treatMatchParentAsWrapWidth = false;
      if (!view.state.treatMatchParentAsWrapWidth && !view.state.treatMatchParentAsWrapHeight) break;
    }
  }
};

var postComputeLayoutDimens2 = function postComputeLayoutDimens2(view, postComputeList) {
  if (postComputeList && view.type == "relativeLayout" && (view.state.practicalWidth == "wrap_content" || view.state.practicalHeight == "wrap_content") && view.children.length > 0) {
    postComputeList.push(view.props.id);
    window.__VIEWS[view.props.id] = window.__VIEWS[view.props.id] || view;
  }
};

var getValueFromPixel = function getValueFromPixel(pixel) {
  return parseInt(pixel.substring(0, pixel.length - 1));
};

var postCompute = function postCompute(list) {
  while (list.length > 0) {
    var id = list.pop();
    var elem = document.getElementById(id);
    if (!elem) continue;
    var childNodes = elem.childNodes;
    var maxHeight = 0;
    var maxWidth = 0;

    for (var i = 0; i < childNodes.length; ++i) {
      var style = childNodes[i].currentStyle || window.getComputedStyle(childNodes[i]);
      maxHeight = maxHeight > childNodes[i].offsetHeight ? maxHeight : childNodes[i].offsetHeight + getValueFromPixel(style.marginTop) + getValueFromPixel(style.marginBottom);
      maxWidth = maxWidth > childNodes[i].offsetWidth ? maxWidth : childNodes[i].offsetWidth;
    }

    var view = window.__VIEWS[id];

    if (view && view.state && view.state.practicalHeight == "wrap_content") {
      elem.style.height = maxHeight + "px";
    }

    if (view && view.state && view.state.practicalWidth == "wrap_content") {
      elem.style.width = maxWidth + "px";
    }
  }
};

var postComputeLayoutDimens = function postComputeLayoutDimens(view, elem) {
  if (view && view.type == "relativeLayout" && view.state && (view.state.practicalWidth == "wrap_content" || view.state.practicalHeight == "wrap_content") && view.children.length > 0) {
    var largestHeight = view.children[0].state.computedHeight;
    var largestWidth = view.children[0].state.computedWidth;

    for (var i = 1; i < view.children.length; ++i) {
      if (view.state && view.state.practicalHeight == "wrap_content") {
        largestHeight = largestHeight > view.children[i].state.computedHeight ? largestHeight : view.children[i].state.computedHeight;
      }

      if (view.state && view.state.practicalWidth == "wrap_content") {
        largestWidth = largestWidth > view.children[i].state.computedWidth ? largestWidth : view.children[i].state.computedWidth;
      }
    }

    if (view.state && view.state.practicalHeight == "wrap_content") {
      elem.style.height = largestHeight + "px";
      view.state.computedHeight = largestHeight;
    }

    if (view.state && view.state.practicalWidth == "wrap_content") {
      elem.style.width = largestWidth + "px";
      view.state.computedWidth = largestWidth;
    }
  }
}; // what?


var handleWrapContent = function handleWrapContent(view, parentElement) {
  var newDimen = 0;

  for (var i = 0; i < parentElement.childNodes.length; i++) {
    newDimen += parentElement.childNodes[i].offsetWidth;
  }

  view.props.x = newDimen;
  return view;
};

function handleMatchParentChrome50(chrome50matchList) {
  // Chrome 50 is not supporting height/ width 100% inside flex : 1 layouts.
  // Below code derives height from parent in cases where it failed to compute
  if (!chrome50matchList) {
    return;
  } // Commented code is used for debugging purposes, to find misfires
  // window.modifiedIds = window.modifiedIds || []


  for (var x = chrome50matchList.h, i = 0; x && i < x.length; ++i) {
    if (x[i] && x[i].props && x[i].props.id) {
      var elm = document.getElementById(x[i].props.id);

      if (elm && elm.parentElement && elm.parentElement.parentElement // Code to handle cases where parent is height 0 weight 1
      // and parent of parent is orientation vertical
      && elm.parentElement.parentElement.style && elm.parentElement.parentElement.style.flexDirection == "column" && elm.parentElement.style['flex-grow'] == "1" && elm.parentElement.style['flex-shrink'] == "1" // Do not apply if offset height is 0; 
      // this will happen for relative layouts; 
      // 100% which is already present will give correct result
      && elm.parentElement.offsetHeight) {
        elm.style.height = elm.parentElement.offsetHeight + "px"; // window.modifiedIds.push(x[i].props.id)
      }
    }
  }

  for (var x = chrome50matchList.w, i = 0; x && i < x.length; ++i) {
    if (x[i] && x[i].props && x[i].props.id) {
      var elm = document.getElementById(x[i].props.id);

      if (elm && elm.parentElement && elm.parentElement.parentElement && elm.parentElement.parentElement.style // Code to handle cases where parent is width 0 weight 1
      // and parent of parent is orientation horizontal
      && elm.parentElement.parentElement.style.flexDirection == "row" && elm.parentElement.style['flex-grow'] == "1" && elm.parentElement.style['flex-shrink'] == "1" // Do not apply if offset width is 0; 
      // this will happen for relative layouts; 
      // 100% which is already present will give correct result
      && elm.parentElement.offsetWidth) {
        elm.style.width = elm.parentElement.offsetWidth + "px"; // window.modifiedIds.push(x[i].props.id)
      }
    }
  }
}

var tagShimmerElementsForRender = function tagShimmerElementsForRender(node, children, width) {
  // console.log("shimmer children", node, children);
  if (children.length == 0) {
    node.props.shouldShimmer = true;
    return node.props.width;
  }

  for (var i = 0; i < children.length; i++) {
    // console.log("tagging children", children[i], children[i].children);
    width = Math.max(tagShimmerElementsForRender(children[i], children[i].children, width), width);
  }

  node.props.isSeen = true;
  return width;
};

module.exports = {
  inflateView: inflateView,
  computeChildDimens: computeChildDimens,
  List: List,
  postComputeLayoutDimens: postComputeLayoutDimens,
  preComputeLayoutDimens: preComputeLayoutDimens,
  postCompute: postCompute,
  isChrome50: isChrome50,
  handleMatchParentChrome50: handleMatchParentChrome50
};

/***/ }),

/***/ "./src/WEB/Utils.js":
/*!**************************!*\
  !*** ./src/WEB/Utils.js ***!
  \**************************/
/***/ (function(module) {

function parseColors(color) {
  if (color.length < 8) return color;
  if (color.indexOf("rgba") !== -1 || color.indexOf("rgb") !== -1) return color;
  var alpha = parseInt(color.substring(1, 3), 16);
  alpha = (alpha / 255).toFixed(2);
  var hexColor = color.substring(3, 9);
  var rgbaColor = "rgba(" + convertHexToRgb(hexColor) + "," + alpha + ")";
  return rgbaColor;
}

function rWS(value) {
  return value.replace(/ /g, '');
}

function cS(value) {
  return value ? value + '' : "";
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
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);
  return r + "," + g + "," + b;
}

var state = {
  fragments: {},
  fragmentTypes: {},
  mainRootView: {
    type: "relativeLayout",
    props: {
      "h": document.getElementById("content").clientHeight,
      "w": document.getElementById("content").clientWidth
    }
  }
};

function addToContainerList(id, namespace) {
  var container = getContainer(namespace, true);

  if (container) {
    var key = function () {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      }

      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }();

    state.fragments[key] = document.getElementById(id);
    state.fragmentTypes[key] = window.__VIEWS[id];
    return key;
  }

  return "__failed";
}

function getContainer(namespace) {
  if (namespace) {
    var container = state.fragments[namespace];
    if (container) return container;
  }

  return document.getElementById("content");
}

function getParentView(namespace, view) {
  if (window.__VIEWS && !window.__VIEWS.content) {
    window.__VIEWS.content = state.mainRootView;
  }

  if (namespace) {
    var containerType = state.fragmentTypes[namespace];

    if (containerType) {
      containerType.children = containerType.children || [];
      containerType.children.push(view);
      containerType.oldView = true;
      return containerType;
    }
  }

  if (state.mainRootView.children) {
    state.mainRootView.oldView = true;
  }

  state.mainRootView.children = state.mainRootView.children || [];
  state.mainRootView.children.push(view);
  return state.mainRootView;
} // function modifyTranslation(config){
//   var x = config.x || "0";
//   var y = config.y || "0";
//   var animationArray = JSON.parse(config.inlineAnimation);
//   var animationArray = animationArray.map(function(a){
//     if(a.hasOwnProperty("fromX")){
//       a.fromX = parseInt(a.fromX) + parseInt(x) + '';
//       if(!a.hasOwnProperty("toX")){
//         a.toX = 0 + parseInt(x) + '';
//       }
//     }
//     if(a.hasOwnProperty("toX")){
//       a.toX = parseInt(a.toX) + parseInt(x) + '';
//     }
//     if(a.hasOwnProperty("fromY")){
//       a.fromY = parseInt(a.fromY) + parseInt(y) + '';
//       if(!a.hasOwnProperty("toY")){
//         a.toY = 0 + parseInt(y) + '';
//       }
//     }
//     if(a.hasOwnProperty("toY")){
//       a.toY = parseInt(a.toY) + parseInt(y) + '';
//     }
//     return a;
//   })
//   return (animationArray);
// }


module.exports = {
  parseColors: parseColors,
  rWS: rWS,
  cS: cS,
  convertColorToRgba: convertColorToRgba,
  addToContainerList: addToContainerList,
  getParentView: getParentView,
  getContainer: getContainer
};

/***/ }),

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var VIEW = new BaseView(null, null, {}); // Object of types of animations available on screen change

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var parseParams;
if (false) {}else if (true) parseParams = __webpack_require__(/*! ./helpers/web/parseParams */ "./src/helpers/web/parseParams.js");else {}

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
      if (false) {}else if (true) return this.cmdForWeb(config);
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

      jsx =  true ? jsx : 0;
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

/***/ "./src/compute.js":
/*!************************!*\
  !*** ./src/compute.js ***!
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

/*
  ViewContext of the Parent.f
  Obj holds the available width and height of it's parent container
  and x & y offset for it's children
*/
function viewCtxObj(view) {
  var props = view.props;
  var obj = {
    w: props.w * 1,
    h: props.h * 1,
    width: props.w * 1
  };
  view.children.forEach(function (child) {
    child.props.w = child.props.width;
    child.props.h = child.props.height;
  });
  return obj;
}
/*
  Returns true if container has a child with match_parent for a
  given dimension (width or height)
*/


function hasMatchParentChild(childs, dimen) {
  for (var i = 0; i < childs.length; i++) {
    var childProp = childs[i].props;

    if (childProp[dimen] && childProp[dimen] == "match_parent") {
      return true;
    }
  }

  return false;
}
/*
  Returns true if container has weighted child
*/


function hasWeightChild(type, childs) {
  if (type != "linearLayout") {
    return false;
  }

  for (var i = 0; i < childs.length; i++) {
    var child = childs[i].props;

    if (child.weight && parseFloat(child.weight) > 0) {
      return true;
    }
  }

  return false;
}

function computeRelativeLayout(view) {
  var viewCtx = viewCtxObj(view);
  var children = view.children;
  children.forEach(function (child) {
    var props = child.props;
    var pl = 0,
        pr = 0,
        pt = 0,
        pb = 0;

    if (view.props && view.props.hasOwnProperty('padding')) {
      var padding = view.props.padding.split(',');
      pl = padding[0];
      pt = padding[1];
      pr = padding[2];
      pb = padding[3];
    }

    props.absolute = true;
    props.fromTop = pt;
    props.fromBottom = 'auto';
    props.fromLeft = pl;
    props.fromRight = 'auto';

    if (props.hasOwnProperty('alignParentLeft') && props.alignParentLeft) {
      props.fromLeft = 0;
      props.fromRight = 'auto';
    }

    if (props.hasOwnProperty('alignParentRight') && props.alignParentRight) {
      props.fromLeft = 'auto';
      props.fromRight = pr;
    }

    if (props.hasOwnProperty('alignParentBottom') && props.alignParentBottom) {
      props.fromTop = 'auto';
      props.fromBottom = pb;
    }
  });
}

function computeLinearlayout(view) {
  var viewCtx = viewCtxObj(view);
  var parentProps = view.props;
  var children = view.children;
  var isHorizontal = parentProps.orientation === "vertical" ? false : true;
  var activeDimen = isHorizontal ? "w" : "h";
  var passiveDimen = isHorizontal ? "h" : "w";
  var hasWeight = hasWeightChild(view.type, children);
  var hasMatchParent = hasMatchParentChild(children, activeDimen);

  if (hasWeight && hasMatchParent) {
    // We can't use both at the same time
    return;
  }
  /* Initialize */


  children.forEach(function (child) {
    var props = child.props;
    if (props.hasOwnProperty("activeDimen")) delete props["activeDimen"];
    if (props.hasOwnProperty("activeWeight")) delete props["activeWeight"];
  });
  /* Initialize End */

  if (hasMatchParent || hasWeight) {
    var first = true;
    /* Iterate Child */

    children.forEach(function (child) {
      var props = child.props;

      if (props.hasOwnProperty(activeDimen) && props[activeDimen] == 'match_parent') {
        props['activeDimen'] = activeDimen;

        if (first) {
          props['activeWeight'] = 1;
          first = false;
        } else {
          props['activeWeight'] = 0;
        }
      } else {
        if (props.hasOwnProperty('weight') && !isNaN(props['weight'])) {
          var weight = parseFloat(props['weight']);

          if (weight > 0) {
            props['activeDimen'] = activeDimen;
            props['activeWeight'] = weight;
          }
        }
      }
    });
    /* Iterate Child End */
  }
} // End Compute LinearLayout


function computeChildDimens(view) {
  if (view.type == "linearLayout") {
    computeLinearlayout(view);
  } else if (view.type == "scrollView" || view.type == "listView") {
    view.props.orientation = "vertical";
    computeLinearlayout(view);
  } else if (view.type == "horizontalScrollView") {
    view.props.orientation = "horizontal";
    computeLinearlayout(view);
  } else if (view.type == "relativeLayout") {
    computeRelativeLayout(view);
  } else {// Do Nothing
  }

  return view;
}

module.exports = {
  computeChildDimens: computeChildDimens
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
  if (false) {} else if (true) {
    return __webpack_require__(/*! ./web */ "./src/doms/web.js");
  } else {}
}

module.exports = run();

/***/ }),

/***/ "./src/doms/web.js":
/*!*************************!*\
  !*** ./src/doms/web.js ***!
  \*************************/
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
var parseParams = __webpack_require__(/*! ../helpers/web */ "./src/helpers/web/index.js").parseParams;

Array.prototype.flatten = function () {
  return this.reduce(function (prev, cur) {
    var more = [].concat(cur).some(Array.isArray);
    return prev.concat(more ? cur.flatten() : cur);
  }, []);
};

module.exports = function (type, props, children) {
  // console.log("type is",type); 
  // console.log("props are",props); 
  // console.log("children is",children); 
  // children = children.flatten();
  // console.log("children after flatten is",children);
  if (!props) props = {};

  if (typeof type === "string") {
    //props = parseParams(type, props);
    var obj = {
      props: props,
      type: type,
      children: children
    };
    window.__VIEWS[props.id] = obj;
    window.__VIEW_DIMENSIONS[props.id] = null;
    return obj;
  } else {
    return new type(props, children);
  }
};

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
/***/ (function(module) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
} // use: clone( <thing to copy> ) returns <new copy>


function clone(o, m) {
  // return non object values
  if ('object' !== _typeof(o)) return o; // m: a map of old refs to new object refs to stop recursion

  if ('object' !== _typeof(m) || null === m) m = new WeakMap();
  var n = m.get(o);
  if ('undefined' !== typeof n) return n; // shallow/leaf clone object

  var c = Object.getPrototypeOf(o).constructor; // TODO: specialize copies for expected built in types i.e. Date etc

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
      m.set(o, n = o.slice(0)); // recursive copy for child objects

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
      m.set(o, n = Object.assign(new c(), o)); // recursive copy for child objects

      for (c in n) {
        if ('object' === _typeof(n[c])) n[c] = clone(n[c], m);
      }

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

/***/ "./src/helpers/common/callbackInvoker.js":
/*!***********************************************!*\
  !*** ./src/helpers/common/callbackInvoker.js ***!
  \***********************************************/
/***/ (function(module) {

/* 

This function executes a function stored in a hashmap. 
It takes atleast a callback string (key for hashmap) to excute the function. 
In essence this is the read function for the global hashmap.
./callbackMapper.j is the write function for the global hashmap. 

While the function name contains `UI` in it, it is not related to UI is any way. 
It is mostly called after the UI is rendered but JBridge also calls it to call APIs. 

*/
function invokeUICallback() {
  var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
  var fName = args[0];
  var functionArgs = args.slice(1);
  var currTime;
  var timeDiff;

  if (window.__ALL_ONCLICKS && window.__ALL_ONCLICKS.indexOf(fName) != -1 && args[2] == "feedback" && JBridge && JBridge.setClickFeedback) {
    return JBridge.setClickFeedback(args[1]);
  }

  if (window.__THROTTELED_ACTIONS && window.__THROTTELED_ACTIONS.indexOf(fName) == -1) {
    var proxyFnKey = fName;
    if (proxyFnKey.charAt(0) == '"') proxyFnKey = fName.substring(1, fName.length - 1);

    window.__PROXY_FN[proxyFnKey].apply(null, functionArgs);
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
}

;
module.exports = {
  invoke: invokeUICallback
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
    window.__FN_INDEX++; // console.log("Presto-UI Callback Mapper proxyFnName is",proxyFnName); 

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

if (false) {} else if (true) {
  helpers.web = __webpack_require__(/*! ./web */ "./src/helpers/web/index.js");
} else {}

module.exports = helpers;

/***/ }),

/***/ "./src/helpers/web/index.js":
/*!**********************************!*\
  !*** ./src/helpers/web/index.js ***!
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
module.exports = {
  parseParams: __webpack_require__(/*! ./parseParams */ "./src/helpers/web/parseParams.js")
};

/***/ }),

/***/ "./src/helpers/web/parseParams.js":
/*!****************************************!*\
  !*** ./src/helpers/web/parseParams.js ***!
  \****************************************/
/***/ (function(module) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


THIS FILE IS REDUNDANT NOW, WEB NO LONGER CALLS ANY FUNCTION OF THIS FILE


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

    count = (count % len + len) % len; // use splice.call() instead of this.splice() to make function generic

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

function lookAndReplaceProp(str, match, val) {
  var output = match + "(" + val + "px)";
  if (!str) return output;
  var start = str.indexOf(match);

  if (start >= 0) {
    var end = str.substr(start).indexOf(")");

    if (end >= 0) {
      var found = str.substr(start, end + 1);
      return str.replace(found, output);
    } else {
      return str + output;
    }
  } else return str + output;
}

function parseLayoutProps(type, config, key) {
  if (typeof config[key] == "undefined" || config[key] == null) {
    delete config[key];
    return;
  }

  if (!config.style) {
    var t = "";
    var ele_id = document.getElementById(config.id);

    if (ele_id) {
      if (ele_id.style) t = ele_id.style.transform ? ele_id.style.transform : "";
    }

    config.style = {};
    config.style.transform = t;
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

  if (key == "leftFixed") {
    config.style.left = config.leftFixed;
  }

  if (key == "rightFixed") {
    config.style.right = config.rightFixed;
  }

  if (key == "zIndex") {
    config.style["z-index"] = config.zIndex;
  }

  if (key == "autofocus") {
    var isIPhone = navigator.userAgent.indexOf("iPhone") !== -1;

    if (config.autofocus && !isIPhone) {
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
      } else if (_values[2] == "r") {
        config.style.borderRight = _values[0] + "px solid " + _values[1];
      } else if (_values[2] == "rb") {
        config.style.borderBottom = _values[0] + "px solid " + _values[1];
        config.style.borderRight = _values[0] + "px solid " + _values[1];
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
    config.style.transform = lookAndReplaceProp(config.style.transform, "translateY", config[key]);
  }

  if (key == "a_translationY") {
    config.animation.transform += "translateY(" + config[key] + "px) ";
  }

  if (key == "translationX") {
    config.style.transform = lookAndReplaceProp(config.style.transform, "translateX", config[key]);
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

  if (key == "inputType" && window.__isMOBILE && !window.__isFIREFOX) {
    var inputType = "text";

    if (config.inputType == "numericPassword" || config.inputType == "password") {
      if (config.inputTypeI == 4 && isMobile) {
        inputType = "tel";
        config.style["-webkit-text-security"] = "disc";
        config.style["-moz-text-security"] = "disc";
        config.style["text-security"] = "disc";
      } else {
        inputType = "password";
        config.attributes.autocomplete = "new-password";
      }
    } else if (config.inputType == "disabled") {
      config.attributes.disabled = 'disabled';
    } else if (config.inputType == "numeric") {
      inputType = "number";
    }

    if (config.separator) {
      if (config.inputType == "numeric") {
        inputType = "tel";
      } else {
        inputType = "text";
      }
    }

    config.attributes.type = inputType;
  }

  if (key == "rotateImage") {
    if (config.rotateImage) {
      config.style["-webkit-animation"] = "load3 4s infinite linear";
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
    var data = config.pattern.split(',');
    var length = parseInt(data.pop());

    if (length > 10) {
      length = 10;
    }

    config.attributes["size"] = length;
  } // if(key == "inputTypeI"){
  //   if(config.inputTypeI == 4){
  //     config.attributes["inputmode"] = "numeric";
  //   }
  // }


  if (key == "separator") {
    config.attributes["separator"] = config.separator;
  }

  if (key == "separatorRepeat") {
    config.attributes["separatorRepeat"] = config.separatorRepeat;
  }

  if (key == "myAttr") {
    config.attributes["myAttr"] = config.myAttr;
  }

  if (key == "blurBackground" && config.blurBackground) {
    config.style["backdrop-filter"] = "blur(3px)";
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
    var shadowType = config.shadowType ? "".concat(config.shadowType, " ") : '';
    config["style"]["box-shadow"] = shadowType + parseInt(shadowOffset.x) + "px " + parseInt(shadowOffset.y) + "px " + parseInt(shadowBlur) + "px " + parseInt(shadowSpread) + "px rgba(" + shadowColor.r + ", " + shadowColor.g + ", " + shadowColor.b + ", " + shadowColor.a + ")";
  }

  if (key == "lineHeight") config.style.lineHeight = config.lineHeight;
  if (key == "objectFit") config.style.objectFit = config.objectFit;

  if (key == "clickable") {
    config.style.pointerEvents = config.clickable ? "auto" : "none";
  }

  if (key == "display") {
    config.style.display = config.display;
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
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);
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
  // var ok = flattenObject(c);
  // console.log("object after flatten",ok); 
  // var config = ok
  setDefaults(type, config); // console.log("object after flatten",config); 

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
var _require = __webpack_require__(/*! ./helper */ "./src/helper.js"),
    merge = _require.merge;

window.PrestoUI = __webpack_require__(/*! ./PrestoUIInterface */ "./src/PrestoUIInterface.js");

var getCurrTime = function getCurrTime() {
  return new Date().getTime();
};

if (false) { var getScreenDetails; }

if (true) {
  // In case of iFrame based integration, this will cause CORS exception.
  try {
    window.Android = window.parent.Android ? window.parent.Android : __webpack_require__(/*! ./WEB/AndroidInterface */ "./src/WEB/AndroidInterface.js");
  } catch (e) {
    window.Android = __webpack_require__(/*! ./WEB/AndroidInterface */ "./src/WEB/AndroidInterface.js");
    console.log("Failed to load window.parent.Android");
  }

  window.JBridge = window.JBridge ? window.JBridge : window.parent.JBridge;
} else {}

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

var guid = Math.random().toString(36).substr(2, 9); //Intializing defaults

if (true) {
  /* Components */
  window.__COM_EVENT = false;
  window.__COM_RENDERED = {
    SWITCH_GLOBAL: false,
    DRP: {},
    DSB: {},
    DB: {},
    NAVBAR: {}
  };
  window.__COM_CLASS_GROUP = {
    WRAPPER: 'PDC_com_wrapper',
    NAVBAR: 'PDC_com_navbar',
    NAVBAR_ITEM: 'PDC_com_navbar_item',
    NAVBAR_ITEM_WITH_SUB: 'PDC_com_navbar_has_sub',
    NAVBAR_SUB: 'PDC_com_navbar_sub',
    NAVBAR_SUB_RIGHT: 'PDC_com_navbar_sub_right',
    NAVBAR_SUB_ITEM: 'PDC_com_navbar_subitem',
    DRP: 'PDC_com_drp',
    DRP_BODY: 'PDC_com_drp_body',
    DB: 'PDC_com_db',
    DB_FULL_BODY: 'PDC_com_db_full_body',
    DB_BODY: 'PDC_com_db_body',
    DB_OPTIONS: 'PDC_com_db_options',
    DB_OPTION: 'PDC_com_db_option',
    DSB: 'PDC_com_dsb',
    DSB_FULL_BODY: 'PDC_com_dsb_full_body',
    DSB_BODY: 'PDC_com_dsb_body',
    DSB_OPTIONS: 'PDC_com_dsb_options',
    DSB_OPTION: 'PDC_com_dsb_option',
    DSB_SEARCH_WRAP: 'PDC_com_dsb_search_wrap',
    DSB_SEARCH: 'PDC_com_dsb_search',
    SWITCH: 'PDC_com_switch',
    SWITCH_BODY: 'PDC_com_switch_body',
    SWITCH_SLIDER: 'PDC_com_switch_slider',
    BT: 'PDC_com_bt',
    BT_DISABLED: 'PDC_com_bt_disabled'
  };
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
  };
  window.__COM_ACTIVE = {
    DSB: '',
    NAVBAR: '',
    DB: ''
  };
  /* Components End */

  /* Modal */

  window.__STYLE_ID = 'style_' + guid;
  window.__RENDERED_KEYFRAMES = [];
  window.__MODAL_PROPS = {};
  window.__CONTENTMODAL_CLASS = 'PDC_modal';
  window.__OPENMODAL_CLASS = 'PDC_modal-open';
  window.__BACKDROPMODAL_CLASS = 'PDC_modal-backdrop';
  window.__DISABLEDBACKDROP_CLASS = 'PDC_modal-backdrop-disabled';
  window.__SHOWNMODAL_CLASS = 'PDC_modal-shown';
  window.__FADEMODAL_CLASS = 'PDC_modal-fade';
  window.__SLIDEMODAL_CLASS = 'PDC_modal-slide';
  /* Modal End */

  window.onclick = function (event) {
    if (event.target && event.target.classList.contains(window.__BACKDROPMODAL_CLASS) && !event.target.classList.contains(window.__DISABLEDBACKDROP_CLASS)) {
      document.body.classList.remove(window.__OPENMODAL_CLASS);
      event.target.classList.remove(window.__SHOWNMODAL_CLASS);
      var id = event.target.id;
      id = id.replace(window.__BACKDROPMODAL_CLASS + '_', '');
      var view = __VIEWS[id];

      if (view && view.props.onDismiss && typeof view.props.onDismiss == "function") {
        view.props.onDismiss();
      }
    }
  };

  var duiShowScreen = function duiShowScreen(callback, state) {
    var popupMenu = document.getElementsByClassName("popupMenu");

    for (var i = 0; i < popupMenu.length; i++) {
      popupMenu[i].style.display = "none";
    }
  };

  window.__duiShowScreen = duiShowScreen;
} else {}

window.__ID = 1;
window.__NODE_ID = 1;
window.__SCREEN_INDEX = -1; // Adding temp fix - Will be moved to mystique-web

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

window.__isFIREFOX = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || typeof InstallTrigger !== 'undefined'; // Adding temp fix - Will be moved to mystique-web

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
//# sourceMappingURL=index.web.js.map
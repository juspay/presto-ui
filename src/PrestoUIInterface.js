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

var prestoDom = require("./doms");
var helpers = require("./helpers")
var webParseParams;
var iOSParseParams;
var parseParams;
const helper = require('./helper');

if (window.__OS === "WEB") {
  webParseParams = helpers.web.parseParams;
} else if (window.__OS === "IOS") {
  iOSParseParams = helpers.ios.parseParams;
} else if (window.__OS === "ANDROID") {
  parseParams = helpers.android.parseParams;
}

function domAll(elem) {
  if (!elem.__ref) {
    elem.__ref = createPrestoElement();
  }

  if (elem.props.id) {
    elem.__ref.__id = parseInt(elem.props.id, 10) || elem.__ref.__id;
  }

  var type = helper.clone(elem.type,null);
  var props = helper.clone(elem.props,null);

  if (props.focus == false &&  window.__OS === "ANDROID") {
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
  if(elem.parentType && window.__OS == "ANDROID")
    return prestoDom({elemType: type, parentType: elem.parentType}, props, children);

  return prestoDom(type, props, children);
}

function getDomToRender(elem) {
  var res = domAll(elem);
  if (window.__OS == "ANDROID") {
    return JSON.stringify(res);
  } else {
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
  if (window.__OS == "ANDROID") {
    cmd = cmdForAndroid(prop, true, "linearLayout").runInUI;
  } else if (window.__OS == "IOS"){
    cmd = prop;
  } else {
    cmd = webParseParams("linearLayout", prop, "set");
  }
  return cmd;
}



// Not exported
function applyProp(element, attribute, set) {
  var prop = {
    id: element.__ref.__id
  }
  prop[attribute.value0] = attribute.value1;

  if (attribute.value0 == 'focus' && attribute.value1 == false &&  window.__OS == "ANDROID") {
    return;
  }

  if (window.__OS == "ANDROID") {
    var cmd = cmdForAndroid(prop, set, element.type);
    if (Android.updateProperties) {
      Android.updateProperties(JSON.stringify(cmd));
    } else {
      Android.runInUI(cmd.runInUI, null);
    }
  } else if (window.__OS == "IOS"){
    Android.runInUI(prop);
  } else {
    Android.runInUI(webParseParams("linearLayout", prop, "set"));
  }
  // Android.runInUI(parseParams("linearLayout", prop, "set"));
}

function replaceView(element, attribute, removeProp) {
  // console.log("REPLACE VIEW", element.__ref.__id, element.props);
  var props = helper.clone(element.props,null);
  props.id = element.__ref.__id;
  var rep;
  var viewGroups = ["linearLayout", "relativeLayout", "scrollView", "frameLayout", "horizontalScrollView"];

  if (viewGroups.indexOf(element.type) != -1){
    props.root = true;
    rep = prestoDom(element.type, props, []);
  } else if (window.__OS == "ANDROID") {
    rep = prestoDom({elemType: element.type, parentType: element.parentNode.type}, props, []);
  } else {
    rep = prestoDom(element.type, props, []);
  }
  if(window.__OS == "ANDROID"){
    Android.replaceView(JSON.stringify(rep), element.__ref.__id);
  } else {
    Android.replaceView(rep, element.__ref.__id);
  }
}


function createPrestoElement() {
    if(typeof(window.__ui_id_sequence) != "undefined" && window.__ui_id_sequence != null) {
        return { __id : ++window.__ui_id_sequence };
    } else {
        window.__ui_id_sequence = typeof Android.getNewID == "function" ? parseInt(Android.getNewID()) * 1000000 : window.__PRESTO_ID ;
        return { __id : ++window.__ui_id_sequence };
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
  if(child.type == null) {
    console.warn("child null");
  }
  // console.log("Add child :", child.__ref.__id, child.type);
  var viewGroups = ["linearLayout", "relativeLayout", "scrollView", "frameLayout", "horizontalScrollView"];
  if (window.__OS == "ANDROID") {
    if (viewGroups.indexOf(child.type) != -1){
      child.props.root = true;
    } else {
      child.parentType = parent.type;
    }
    Android.addViewToParent(parent.__ref.__id + "", JSON.stringify(domAll(child)), index, null, null);
  }
  else
    Android.addViewToParent(parent.__ref.__id, domAll(child), index, null, null);
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
  if (window.__OS == "ANDROID") {
    Android.addViewToParent(rootId + "", JSON.stringify(domAll(dom)), length - 1, callback, null);
  }
  else {
    Android.addViewToParent(rootId, domAll(dom), length - 1, callback, null);
  }

  return dom.__ref.__id;

}


function executePostProcess(cb) {
  return function() {
    cb();

    if(window.__dui_screen && window["afterRender"]) {
      for (var tag in window["afterRender"][window.__dui_screen]) {
        try {
          window["afterRender"][window.__dui_screen][tag]()();
          window["afterRender"][window.__dui_screen]["executed"] = true;
        }
        catch (err) {
          console.warn(err);
        }
      }
    }

    if (JBridge && JBridge.setShadow) {
      for (var tag in window.shadowObject) {
        JBridge.setShadow(window.shadowObject[tag]["level"],
            JSON.stringify(window.shadowObject[tag]["viewId"]),
            JSON.stringify(window.shadowObject[tag]["backgroundColor"]),
            JSON.stringify(window.shadowObject[tag]["blurValue"]),
            JSON.stringify(window.shadowObject[tag]["shadowColor"]),
            JSON.stringify(window.shadowObject[tag]["dx"]),
            JSON.stringify(window.shadowObject[tag]["dy"]),
            JSON.stringify(window.shadowObject[tag]["spread"]),
            JSON.stringify(window.shadowObject[tag]["factor"])
        );
      }
    } 
  }
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


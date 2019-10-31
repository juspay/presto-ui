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

const render = require('./Render');
const helper = require('../helper');
const parseParams = require('../helpers').ios.parseParams;

let rootid;

function clearViewExternals(view) {
  delete window.__VIEWS[view.props.id];
  delete window.__VIEW_DIMENSIONS[view.props.id];
  view.children.forEach(clearViewExternals);
}

function getSerializeableView(view, recurse) {
  var obj = parseParams(view.type, helper.clone(view.props,null), "set");
  var newView = {};
  newView.props = obj.config;
  newView.type = obj.type[0].toUpperCase() + obj.type.substr(1, obj.type.length);
  if (recurse)
    newView.children = view.children.map(getSerializeableView);
  else
    newView.children = [];
  return newView;
}

module.exports = {
  getScreenDimensions: function () {
    return JSON.stringify({
      width: window.__DEVICE_DETAILS.screen_width,
      height: window.__DEVICE_DETAILS.screen_height
    });
  },

  recomputeView: function (view) {
    if (view.type.indexOf("scroll") != -1) {
      render.inflate(view);
    }
    render.computeChildDimens(view);
    const children = view.children;
    for (let i = 0, len = children.length; i < len; i++) {
        render.inflate(children[i]);
    }
  },

  recompute: function () {
    const rootview = window.__VIEWS[rootid];
    let obj = {
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

  runInUI: function (cmd) {
    render.runInUI(cmd);
  },

  Render: function (view, cb) {
    let obj = {
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
      window.webkit.messageHandlers.IOS.postMessage(
        JSON.stringify({
          methodName: "render",
          parameters: {
            view: view
          }
      }));
    }
    if (cb)
      window.callUICallback(cb);
  },

  moveView: function moveView(id, index) {
    if (!window.__VIEWS[id]) {
      return console.error(new Error("MoveView: Invalid view ID: " + id));
    }
    const view = window.__VIEWS[id];
    const parent = window.__VIEWS[view.props.parentId];
    const children = parent.children;
    children.splice(children.indexOf(view), 1);
    children.splice(index, 0, view);
    this.recomputeView(parent);
  },

  addViewToParent: function (id, view, index, cb) {
    if (!window.__VIEWS[id]) {
      return console.error(new Error("AddViewToParent: Invalid parent ID: " +
        id));
    }
    const parent = window.__VIEWS[id];
    parent.children.splice(index, 0, view);
    view.props.parentId = id;
    render.computeChildDimens(parent);
    const renderedView = render.inflate(view);
    if (renderedView) {
      window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
        methodName: "addViewToParent",
        parameters: {
          index: index,
          parentId: id,
          view: renderedView,
          afterRender : cb+""
        }
      }));
    }
    this.recomputeView(parent);
  },

  createListData: function (id, view) {
    const parent = window.__VIEWS[id];
    if (!parent) {
      return "{}";
    }
    const views = window.__VIEWS;
    window.__VIEWS = {};
    parent.children = [view];
    view.props.parentId = id;
    render.computeChildDimens(parent);
    const inflatedView = render.inflate(view);
    window.__VIEWS = views;
    return JSON.stringify(inflatedView);
  },

  replaceView: function (view, id) {
    if (!window.__VIEWS[id]) {
      return console.error(new Error("AddViewToParent: Invalid parent ID: " + id));
    }
    var oldview = window.__VIEWS[id];
    var parentid = oldview.props.parentId;
    oldview.props = helper.clone(view.props,null);
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

  removeView: function (id) {
    debugger;
    const view = window.__VIEWS[id];
    const parent = window.__VIEWS[view.props.parentId];
    const index = parent ? parent.children.indexOf(view) : 0;
    if(parent){
      parent.children.splice(index, 1);
    }
    clearViewExternals(view);
    window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
      methodName: "removeView",
      parameters: {
        id: id,
        index,
      }
    }));
    if(parent){
      this.recomputeView(parent);
    }
  },

  startAnim: function(id, cbName) {
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

  cancelAnim: function() {
    // TODO implement native side
  },

  updateAnim: function() {
    // TODO implement native side
  }
};

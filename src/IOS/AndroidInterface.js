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
const R = require('ramda');
const parseParams = require('../helpers').ios.parseParams;

let rootid;

function clearViewExternals(view) {
  delete window.__VIEWS[view.props.id];
  delete window.__VIEW_DIMENSIONS[view.props.id];
  view.children.forEach(clearViewExternals);
}

module.exports = {
  getScreenDimensions: function () {
    return JSON.stringify({
      width: window.__DEVICE_DETAILS.screen_width,
      height: window.__DEVICE_DETAILS.screen_height
    });
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
    this.recompute();
  },

  Render: function (view) {
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
  },

  addViewToParent: function (id, view, index) {
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
      console.log("here:", renderedView);
      window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
        methodName: "addViewToParent",
        parameters: {
          index: index,
          parentId: id,
          view: renderedView
        }
      }));
    }
    this.recompute();
  },

  replaceView: function (newView, id) {
    if (!window.__VIEWS[id]) {
      return console.error(new Error("AddViewToParent: Invalid parent ID: " + id));
    }
    var view = window.__VIEWS[id];
    newView.props.parentId = view.props.parentId;
    view.props = R.clone(newView.props);
    var props = parseParams(newView.type, newView.props, "set");
    window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
      methodName: "replaceView",
      parameters: {
        id: id,
        parentId: view.props.parentId,
        view: {
          type: newView.type,
          props: props,
          children: []
        }
      }
    }));
    this.recompute();
  },

  removeView: function (id) {
    const view = window.__VIEWS[id];
    const parent = window.__VIEWS[view.props.parentId];
    const index = parent.children.indexOf(view);
    parent.children.splice(index, 1);
    clearViewExternals(view);
    window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
      methodName: "removeView",
      parameters: {
        id: id
      }
    }));
    this.recompute();
  },
};

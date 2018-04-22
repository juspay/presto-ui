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

  runInUI: function (cmd) {
    if (typeof cmd == "string")
      return;

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

  addViewToParent: function (id, view, index, cb, replace) {
    if (!window.__VIEWS[id]) {
      return console.error(new Error("AddViewToParent: Invalid parent ID: " +
        id));
    }
    let parent = window.__VIEWS[id];
    if (replace) {
      parent.children.forEach(clearViewExternals);
      parent.children.splice(0);
    }
    parent.children.splice(index, 0, view);
    view.props.parentId = id;
    render.computeChildDimens(parent);
    const renderedView = render.inflate(view);
    if (parent.props.parentIsScroll) {
      render.inflate(window.__VIEWS[parent.props.parentId]);
    }
    if (replace) {
      window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
        methodName: "removeChildren",
        parameters: {
          parentId: id
        }
      }));
    }
    if (renderedView) {
      window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
        methodName: "addViewToParent",
        parameters: {
          index: index,
          parentId: id,
          view: renderedView
        }
      }));
    }
    parent.children.forEach(child => {
      if (child.props.id != view.props.id)
        render.inflate(child);
    });
    if (cb)
      window.callUICallback(cb);
  },

  removeView: function (id) {
    const view = window.__VIEWS[id];
    const parent = window.__VIEWS[view.props.parentId];
    const index = parent.children.indexOf(view);
    parent.children.splice(index, 1);
    clearViewExternals(view);
    render.computeChildDimens(parent);
    parent.children.forEach(child => {
      render.inflate(child);
    });
    window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
      methodName: "removeView",
      parameters: {
        id: id
      }
    }));
  },

  moveChild: function (id, position) {
    const view = window.__VIEWS[id];
    const parent = window.__VIEWS[view.props.parentId];
    const index = parent.children.indexOf(view);
    parent.children.splice(index, 1);
    parent.children.splice(position, 0, view);
    render.computeChildDimens(parent);
    parent.children.forEach(child => {
      render.inflate(child);
    });
  },
};
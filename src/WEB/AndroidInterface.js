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

var Render = require("./Render");
var helper = require('../helper');
const R = require('ramda');

module.exports = {
  getScreenDimensions: function () {
    let element = document.getElementById("content");
    return JSON.stringify({
      width: element.offsetWidth,
      height: element.offsetHeight
    });
  },

  runInUI: function (cmd) {
    if (typeof cmd == "string")
      return;

    Render.runInUI(cmd);

    this.recompute();
  },

  recompute: function (view, cb) {
    var parentElement = document.getElementById("content");
    let parentView = {
      type: "linearLayout",
      props: {
        "h": parentElement.clientHeight,
        "w": parentElement.clientWidth,
      },
      children: [view]
    };
    Render.computeChildDimens(parentView);
    Render.inflateView(view, parentElement);
  },

  Render: function (view, cb) {
    var parentElement = document.getElementById("content");
    let parentView = {
      type: "linearLayout",
      props: {
        "h": parentElement.clientHeight,
        "w": parentElement.clientWidth,
      },
      children: [view]
    };

    Render.computeChildDimens(parentView);
    const elem = Render.inflateView(view, parentElement);

    if (cb)
      window.callUICallback(cb);

    if (parentElement.childElementCount > 1) {
      var iterableChildNodes = Array.prototype.slice.call(parentElement.children);
      iterableChildNodes.forEach((each) => {
        helper.clearViewExternals(window.__VIEWS[each.id]);
        each.remove();
      });
      parentElement.appendChild(elem);
    }
  },

  moveView: function moveView(id, index) {
    if (!window.__VIEWS[id]) {
      return console.error(new Error("MoveView: Invalid view ID: " + id));
    }
    var view = window.__VIEWS[id];
    var viewElem = document.getElementById(id);
    var parentId = viewElem.parentNode.id;
    var parent = window.__VIEWS[parentId];
    var parentElem = document.getElementById(parentId);
    var children = parent.children;
    children.splice(children.indexOf(view), 1);
    children.splice(index, 0, view);
    Render.computeChildDimens(parent)
    children.forEach(child => {
      Render.inflateView(child, parentElem)
    })
  },

  addViewToParent: function (id, view, index, cb, replace) {
    var parent = document.getElementById(id);
    var props = window.__VIEWS[id].props;
    var type = parent.className;
    var iterableChildNodes = Array.prototype.slice.call(parent.children);
    let parentView = window.__VIEWS[id];

    if (replace) {
      helper.clearViewExternals(window.__VIEWS[each.id]);
      parentView.children = [];
      iterableChildNodes.forEach((each) => {
        each.remove();
      });
    }

    parentView.children.splice(index, 0, view);
    this.recompute();

    if (cb)
      window.callUICallback(cb);
  },

  removeView: function (id) {
    let viewElem = document.getElementById(id);
    let parentid = viewElem.parentNode.id;
    let parentElem = document.getElementById(parentid);
    let view = window.__VIEWS[id];
    let parent = window.__VIEWS[parentid];
    let idx = parent.children.indexOf(view);
    helper.clearViewExternals(view);
    parent.children.splice(idx, 1);
    viewElem.remove();
    this.recompute();
  },

  replaceView: function (view, id) {
    var viewElem = document.getElementById(id);
    var parentid = viewElem.parentNode.id;
    var parentElem = document.getElementById(parentid);
    parentElem.removeChild(viewElem);

    var oldview;
    var parentView = window.__VIEWS[parentid];

    for (var i = 0; i < parentView.children.length; i++) {
      var child = parentView.children[i];
      if (child.props.id == id) {
        oldview = parentView.children[i];
        break;
      }
    }

    var oldchildren = oldview.children;
    var iterableChildNodes = Array.prototype.slice.call(viewElem.children);

    oldview.props = view.props;
    oldview.children = [];
    this.recompute();

    oldview.children = oldchildren;
    viewElem = document.getElementById(id);
    if (view.type != "textView") {
      iterableChildNodes.forEach(function (each) {
        viewElem.appendChild(each);
      });
    }
    this.recompute();
  },

  recompute: function () {
    const rootnode = document.getElementById('content');
    const child = rootnode.firstElementChild;
    const rootview = window.__VIEWS[child.id];
    this.Render(rootview);
  }
};
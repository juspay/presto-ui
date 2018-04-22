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
    Render.inflateView(view, parentElement);
    if (cb)
      window.callUICallback(cb);
  },

  addViewToParent: function (id, view, index, cb, replace) {
    const parent = document.getElementById(id);
    const parentView = window.__VIEWS[id];

    if (replace) {
      parentView.children.splice(0);
      const iterableChildNodes = Array.prototype.slice.call(parent.children);
      for (let i = 0, len = iterableChildNodes.length; i < len; i++) {
        iterableChildNodes[i].remove();
      }
    }

    parentView.children.splice(index, 0, view);
    Render.computeChildDimens(parentView);

    const children = parentView.children;
    for (let i = 0, len = children.length; i < len; i++) {
        Render.inflateView(children[i], parent);
    }

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

    parent.children.splice(idx, 1);
    viewElem.remove();

    Render.computeChildDimens(parent);
    const children = parent.children;
    for (let i = 0, len = children.length; i < len; i++) {
      Render.inflateView(children[i], parentElem);
    }
  },

  moveChild: function (id, position) {
    const viewElem = document.getElementById(id);
    const parentElem = viewElem.parentNode;
    const view = window.__VIEWS[id];
    const parent = window.__VIEWS[parentElem.id];

    const idx = parent.children.indexOf(view);
    parent.children.splice(idx, 1);
    parent.children.splice(position, 0, view);

    Render.computeChildDimens(parent);

    const children = parent.children;
    for (let i = 0, len = children.length; i < len; i++) {
      Render.inflateView(children[i], parentElem);
    }
  },

  removeChildren: function (id) {
    let viewElem = document.getElementById(id);
    let view = window.__VIEWS[id];

    while(viewElem.firstChild) {
      viewElem.firstChild.remove();
    }

    view.children.splice(0);
  }
};
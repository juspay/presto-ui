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

var View = require("./View");
const parseParams = require('../helpers/ios/parseParams');

class IOSBaseView extends View {
  constructor(props, children) {
    super(props, children);
  }

  animateView(index, direction, _animate) {
    var cmd = [];
    var _this = this;
    var width = __WIDTH + '';
    var a_x = (direction == 1) ? '-' + width : width;
    var animate = (typeof _animate != "undefined") ? _animate : true;

    if (animate) {
      // prevScreen
      cmd =  cmd.concat(this.set({
        id: window.__CACHED_SCREENS[index].value.layout.idSet.id,
        a_translation: "true",
        a_x: a_x,
        a_duration: "0.3"
      }));

      // currScreen
      cmd =  cmd.concat(this.set({
        id: _this.layout.idSet.id,
        a_translation: "true",
        a_x: "0",
        a_duration: "0.3"
      }));
    } else {
      // prevScreen
      cmd = cmd.concat(this.set({
        id: window.__CACHED_SCREENS[index].value.layout.idSet.id,
        x: a_x
      }));

      // currScreen
      cmd = cmd.concat(this.set({
        id: this.layout.idSet.id,
        x: '0'
      }));
    }

    return cmd;
  }

  findRecurse(obj, selector) {
    var children = obj.children;

    for (var i = 0; i < children.length; i++) {
      if (children[i].displayName && children[i].displayName == selector) {
        this.foundChildren.push(children[i]);
      }

      if (children[i].children && children[i].children.length)
      this.findRecurse(children[i], selector);
    }

    return;
  }

  find(selector, obj) {
    this.foundChildren = [];

    if (!obj)
    this.findRecurse(this.layout, selector);
    else
    this.findRecurse(obj, selector);

    return this.foundChildren;
  }

  setIds(arr) {
    this.idSet = {};

    for (var i = 0; i < arr.length; i++) {
      window.__ID++;
      this.idSet[arr[i]] = window.__ID + '';
    }
  }

  appendChild(id, jsx, fn) {
    var data;

    window.__CURR_PARENT_INDEX = id;
    if (jsx.render) {
      data = {parentTag: id, view: jsx.render()};
    } else {
      data = {parentTag: id, view: jsx};
    }

    window.__CURR_PARENT_INDEX = null;
    window.webkit.messageHandlers.addView.postMessage(JSON.stringify(data));

  }

  set(config) {
    return parseParams("dummy", config, "get").methods;
  }
}

module.exports = IOSBaseView;

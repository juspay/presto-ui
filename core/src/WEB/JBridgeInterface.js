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

var ViewPageAdapter = require("./ViewPageAdapter");
var axios = require('axios');
var Renderer = require("./Render");
let imageSync = require('qr-image').imageSync;

module.exports = {
  getSymbol: function (type) {
    switch (type) {
    case "tick":
      return "\u2713";
    case "rupee":
      return "\u20B9";
    default:
      return "symbol";
    }
  },

  listViewAdapter: function (id, jsx, callback, type, more) {
    let parent = document.getElementById(id);
    if (!parent) {
      console.error(new Error("Listview parent null"));
      return;
    }
    while (parent.firstElementChild)
      parent.removeChild(parent.firstElementChild);

    let view = JSON.parse(jsx);
    let parentView = window.__VIEWS[parent.id];
    view.map((x, i) => {
      parentView.children.push(x.view);
      parentView.type = "linearLayout";
      Renderer.computeChildDimens(parentView);
      parentView.type = "listView";
      let elem = Renderer.inflateView(x.view, parent);
      elem.addEventListener("click", function () {
        window.callJSCallback(callback, [i]);
      });
      Android.runInUI(x.value);
    });
    if (more) {
      let elem = document.createElement('div');
      elem.style.width = "100%";
      elem.style.height = "100px";
      elem.style.borderBottom = "1px solid #eee";
      parent.appendChild(elem);
      let a = JSON.parse(more);
      console.log(a, "more");

      Renderer.inflateView(JSON.parse(more), elem);
    }
  },

  hideKeyboard: function () {

  },

  trackEvent: function () {

  },

  isNetworkAvailable: function () {
    return true;
  },

  callAPI: function (method, url, data, headers, type, callback) {
    axios({
      method: method,
      url: url,
      data: JSON.parse(data),
      headers: JSON.parse(headers),
    }).then(function (resp) {
      window.callJSCallback(callback, "success",
        btoa(JSON.stringify(resp.data)), resp.status);
    }).catch(function (err) {
      console.log(err);
    })
  },

  checkPermission: function (cb) {
    var s = {
      PHONE_STATE_PERMISSION: true,
      SMS_PERMISSION: true,
      STORAGE_PERMISSION: true
    };
    window.callUICallback(cb, s);
  },

  getFromSharedPrefs: function (key) {
    return localStorage.getItem(key) || "__failed";
  },

  setInSharedPrefs: function (key, value) {
    localStorage.setItem(key, value);
  },

  getDeviceDetails: () => {
    return JSON.stringify({
      "deviceId": "TEST",
      "packageName": "in.juspay.dui_android",
      "os": "Android",
      "model": "2014818",
      "version": 22,
      "manufacturer": "Xiaomi"
    });
  },

  viewPagerAdapter: function (id, jsx, tabJsx, cb) {
    ViewPageAdapter.createTabs(id, jsx, tabJsx, cb);
  },

  setClickFeedback: function (id, jsx) {

  },

  switchToViewPagerIndex: function (index) {
    ViewPageAdapter.toggleView(index);
  },

  showQrCode: function (id, uri, vpa, type, callback) {
    var img = imageSync(uri, {
      type: 'png'
    });
    var imgBase64 = img.toString("base64");
    document.getElementById(id).src = "data:image/png;base64," + imgBase64;
  },

  getKey: function (key, defaultValue) {
    return localStorage.getItem(key) || defaultValue;
  },

  setKey: function (key, value) {
    return localStorage.setItem(key, value);
  },

  showVideo: function (id, youtubeURL) {
    let dom = document.getElementById(id);
    dom.innerHTML = `<iframe width="100%" height="100%" src="${youtubeURL}" frameborder="0" allowfullscreen></iframe>`
  }
}
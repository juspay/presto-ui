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
var Renderer = require("./Render");
const qsstringify = require("qs/lib/stringify");

function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}

function sendAnalytics(data) {
  const url = "https://logs.juspay.in/godel/analytics";
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, JSON.stringify({ data }));
  } else {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, false); // third parameter of `false` means synchronous
      xhr.send(JSON.stringify({data}));   
    } catch(err) {
      //
    }
  }
}

module.exports = {
  getSymbol: function(type) {
    switch (type) {
      case "tick":
        return "\u2713";
      case "rupee":
        return "\u20B9";
      default:
        return "symbol";
    }
  },

  listViewAdapter: function(id, jsx, callback, type, more) {
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
      elem.addEventListener("click", function() {
        window.callUICallback(callback, [i]);
      });
      Android.runInUI(x.value);
    });
    if (more) {
      let elem = document.createElement("div");
      elem.style.width = "100%";
      elem.style.height = "100px";
      elem.style.borderBottom = "1px solid #eee";
      parent.appendChild(elem);

      Renderer.inflateView(JSON.parse(more), elem);
    }
  },

  callAPI: async function callAPI(method, url, data, headers, type, callback) {
    headers = parseJson(headers);
    data = parseJson(data);
    let something = false;
    if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
      if (typeof data == "object") {
        something = true;
        data = qsstringify(data);
      }
    } else {
      data = JSON.stringify(data);
    }
    if (["GET", "HEAD"].includes(method)) {
      data = undefined;
    }
    try {
      const resp = await fetch(url, { method, body: data, headers });
      const json = await resp.json();
      window.callUICallback(
        callback,
        "success",
        btoa(JSON.stringify(json)),
        resp.status
      );
    } catch (err) {
      console.log("ERR", err);
      window.callUICallback(callback, "failure", btoa("{}"), 50);
    }
  },

  getFromSharedPrefs: function(key) {
    return localStorage.getItem(key) || "__failed";
  },

  setInSharedPrefs: function(key, value) {
    localStorage.setItem(key, value);
  },

  viewPagerAdapter: function(id, jsx, tabJsx, cb) {
    ViewPageAdapter.createTabs(id, jsx, tabJsx, cb);
  },

  switchToViewPagerIndex: function(index) {
    ViewPageAdapter.toggleView(index);
  },

  getKey: function(key, defaultValue) {
    return localStorage.getItem(key) || defaultValue;
  },

  setKey: function(key, value) {
    return localStorage.setItem(key, value);
  },

  getResourceByName: function getResourceByName(tag) {
    return -1;
  },

  getSessionAttribute: function getSessionAttribute(v1, v2) {
    return JSON.stringify({ a: v1 });
  },

  setAnalyticsEndPoint: function setAnalyticsEndPoint(url) {
    return;
  },

  getSessionInfo: function getSessionInfo() {
    return JSON.stringify({});
  },

  attach: function attach() {
    return;
  },

  addToLogList: function addToLogList(data) {
    const newLog = JSON.parse(data);
    const logsArr = Array.isArray(newLog) ? newLog : [newLog];
    sendAnalytics(logsArr)
  },
  saveToLocal: function(a,b,c){
    try{
    window.localStorage.removeItem(c+":"+"defOptionType");
    window.localStorage.removeItem(c+":"+"defOption");
    }
    catch(e){}
    window.localStorage.setItem(c+":"+'defOptionType', a);
    window.localStorage.setItem(c+":"+'defOption', JSON.stringify(b));

  },
  deleteFromLocal: function(){},
  loadFromLocal: function(key){
    if (window.localStorage.getItem(key)==undefined)
      return ""
    try{
    const a =  JSON.parse(window.localStorage.getItem(key));
    if (a==undefined)
      return ""
    return a
    } catch(e){
      return window.localStorage.getItem(key)
    }
  },
  postLogs(endPoint, logs) {
    return;
  },

  submitAllLogs: function submitAllLogs() {
    return;
  },

  getLogList: function getLogList() {
    return JSON.stringify([]);
  },

  updateLogList: function updateLogList() {
    return JSON.stringify({});
  },

  isOnline: function isOnline() {
    return true;
  },

  getDeviceDetails: function getDeviceDetails() {
    const deviceDetails = {
      appVersion: "",
      osVersion: "",
      os: "",
      macAddress: "",
      isDual: "",
      manufacturer: "",
      isRooted: "",
      androidId: "",
      appPackageName: "",
      networkOperator: "",
      simOperatorName: "",
      screenHeight: "",
      screenWidth: "",
      screenPpi: "",
      brand: "",
      model: "",
    }
    return JSON.stringify(deviceDetails);
  },

  getDeviceInfo: function getDeviceInfo() {
    return JSON.stringify({})
  },

  getUUID: function getUUID() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();  
  },

  renewFile: function renewFile(file) {
    return;
  },
  hideKeyboardOnNavigation: function hideKeyboardOnNavigation() {
    return;
  },
  runInJuspayBrowser: function runInJuspayBrowser(eventName, arg2, arg3) {
    //
  }
};

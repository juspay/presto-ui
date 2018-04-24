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

const getOS = require('./helper').getOS;
const merge =  require("./helper").merge;

String.prototype.addCmd = function(data) {
  return this.concat(data);
};

Array.prototype.addCmd = function(data) {
  this.push(data);
  return this;
};

if (!window.__OS)
  window.__OS = getOS();

let parseParams;
if (window.__OS == "ANDROID")
  parseParams = require('./helpers/android/parseParams');
else if (window.__OS == "WEB")
  parseParams = require('./helpers/web/parseParams');
else
  parseParams = require('./helpers/ios/parseParams');

class BaseView {

  constructor(props, children) {
    this.props = props || {};
    this.children = children || [];

    window.__SETFN = function (config) {
      Android.runInUI(
        this.set(config),
        null
      )
    }.bind(this)

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

  resolveChildren() {
    const children = (Array.isArray(this.props.children)) ? this.props.children : this.children;
    this.props.children = null;
    return children.map(function(child) {
      return child.render();
    });
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

  id(name) {
    if (!this.idSet[name]) {
      window.__ID = (typeof Android.getNewID == "function")? Android.getNewID() : (window.__ID + 1);
      this.idSet[name] = window.__ID;
    }
    return this.idSet[name];
  }

  setIds(arr) {
    if (!this.idSet)
      this.idSet = {};

    for (var i = 0; i < arr.length; i++) {
      if (!this.idSet[arr[i]]) {
        window.__ID = (typeof Android.getNewID == "function")? Android.getNewID() : (window.__ID + 1);
        this.idSet[arr[i]] = window.__ID + '';
      }
    }
  }

  handleSpecialChars(value) {
    value = value.indexOf(',') > -1 ? value.replace(/\,/g, '\\\\,') : value;
    value = value.indexOf(':') > -1 ? value.replace(/\:/g, '\\\\:') : value;
    value = value.indexOf('=') > -1 ? value.replace(/\=/g, '\\\\=') : value;
    value = value.indexOf(';') > -1 ? value.replace(/\;/g, '\\\\;') : value;

    return value;
  }

  cmdForAndroid(config) {
    var cmd = "set_view=ctx->findViewById:i_" + config.id + ";";
    var runInUI;

    if (config.toast) {
      cmd = "set_TOAST=android.widget.Toast->makeText:ctx_ctx,cs_" + this.handleSpecialChars(
          config.text) + ",i_" + (config.duration == "short" ? 0 : 1) +
        ";get_TOAST->show";
    } else if (config && Object.keys(config).length) {
      delete config.id;

      config.root = "true";
      runInUI = parseParams("linearLayout", config, "get").runInUI;

      cmd += runInUI + ';';
    }

    return cmd;
  }

  cmdContainer() {
    if (window.__OS == "ANDROID")
      return "";
    return [];
  }

  cmdForWeb(config) {
    if (Object.keys(config).length)
      return parseParams("linearLayout", config, "set");
  }

  cmd(config) {
    if (window.__OS == "ANDROID")
      return this.cmdForAndroid(config);
    else if (window.__OS == "WEB")
      return this.cmdForWeb(config);
    return config;
  }

  appendChild(id, jsx, index, fn, replaceChild) {
    var proxyFnName;
    if (!replaceChild) {
      replaceChild = false;
    }

    if (fn) {
      proxyFnName = 'F' + window.__FN_INDEX;
      window.__PROXY_FN[proxyFnName] = fn;
      window.__FN_INDEX++;
    }

    jsx = (window.__OS != "ANDROID") ? jsx : JSON.stringify(jsx);

    if (proxyFnName)
      Android.addViewToParent(id, jsx, index, proxyFnName, replaceChild);
    else
      Android.addViewToParent(id, jsx, index, null, replaceChild);
  }

  getView(jsx) {
    if (window.__OS != "ANDROID")
      return jsx;

    return JSON.stringify(jsx);
  }

  updateProps(props) {
    this.props = merge(this.props, props);
    const oldContainerId = this.layout.idSet.id;
    const layout = this.render();
    for (let i=0; i<layout.children.length; i++) {
      if (i==0) this.replaceChild(oldContainerId, layout.children[i], i);
      else this.appendChild(oldContainerId, layout.children[i], i);
    }
    this.layout.idSet.id = oldContainerId;
  }

  removeView(id) {
    if (__OS == "WEB")
      return Android.removeView(id);
    return "set_VIEW=ctx->findViewById:i_" + id +
      ";set_PARENT=get_VIEW->getParent;get_PARENT->removeView:get_VIEW;"
  }

  removeChildren(id) {
    if (__OS == "WEB")
      return Android.removeChildren(id);
    return "set_VIEW=ctx->findViewById:i_" + id +
      ";get_VIEW->removeAllViews;"
  }

  replaceChild(id, jsx, index, fn) {
    this.appendChild(id, jsx, index, fn, true);
  }
}

module.exports = BaseView;
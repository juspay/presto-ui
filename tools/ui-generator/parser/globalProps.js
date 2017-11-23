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

let utils = require('../utils');

function Definitions() {
  this.definitions = {};

  this.addId = function (name) {
    this.definitions[name] = {
      "type": "id"
    };
  }

  this.addTextDef = function (name, value) {
    this.definitions[name] = {
      "type": "text",
      "value": value
    };
  }

  this.addStrmap = function (name, value) {
    this.definitions[name] = {
      "type": "strmap",
      "value": value
    };
  }

  this.addFuncCall = function (name, funcType) {
    this.definitions[name] = {
      "type": "functionCall",
      "funcType": funcType,
    };
  }

  this.addConditionalDef = function (name) {
    this.definitions[name] = {
      "type": "condition",
      "value": name,
    };
  }

  this.removeDef = function (name) {
    delete this.definitions[name];
  }
}

function config() {
  this.constructor = new Definitions();
  this.render = new Definitions();
  this.overrides = {};
  this.screenFlow = {};
  this.adapters = {};

  this.addOverride = function (name, value, defaultVal) {
    if (!this.overrides[name])
      this.overrides[name] = {
        "list": [],
        "default": defaultVal
      };
    if (this.overrides[name].list.indexOf(value) == -1)
      this.overrides[name].list.push(value);
  }

  this.addScreenFlow = function (functionName, screenName){
    this.screenFlow[functionName] = screenName;
  }

  this.addAdapter = function  (name, type, id, data, isProd) {
    this.adapters[name] = {
      id,
      data,
      type,
      isProd
    };
  }
}

module.exports = config;
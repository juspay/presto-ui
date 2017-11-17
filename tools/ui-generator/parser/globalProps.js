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
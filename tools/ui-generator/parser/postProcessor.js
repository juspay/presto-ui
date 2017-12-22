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

const utils = require('../utils');
const parser = require('./parser');

function findViewById(id, view) {
  if (!view)
    return null;
  if (view.elem["do_objectID"] == id)
    return view;
  for (let i in view.childs) {
    let found = findViewById(id, view.childs[i]);
    if (found)
      return found;
  }
  return null;
}

function findViewByName(name, view) {
  if (!view)
    return null;
  if (view.elem["name"] == name)
    return view;
  for (let i in view.childs) {
    let found = findViewByName(name, view.childs[i]);
    if (found)
      return found;
  }
  return null;
}

function listPropSetter(name, symbolList) {
  for (let i in symbolList) {
    let symbol = symbolList[i];
    symbol.setProp(name, name, "property");
  }
}

function textOverride(view, symbol, overrides, symbolList, symbolTable) {
  for (let key in overrides) {
    let override = overrides[key];
    if (typeof override != "string") {
      let symbolView = findViewById(key, symbol.view);
      if (!symbolView)
        continue;
      symbolList.push(symbolView);
      textOverride(view, symbolTable[symbolView.id], override, symbolList,
        symbolTable);
      symbolList.pop();
      continue;
    } else if (key == "symbolID") {
      continue;
    }
    let child = findViewById(key, symbol.view);
    if (!child)
      continue;
    if (child.type != "TextView")
      continue;
    let name = utils.escape(child.name, true);
    let value = "";
    if (!child.props.text) {
      symbol.props.constructor.addTextDef(name, "");
    } else if (child.props.text.value.indexOf("this") == 0) {
      symbol.props.constructor.addTextDef(name, child.props.text.value, child.props.text.type)
    }
    symbol.props.render.addConditionalDef(name);
    child.setProp("text", name, "variable");

    if (symbolList.length  == 0)
      return view.setProp(name, override, "text");

    view.setProp(utils.escape(symbolList[0].name, true) + "_" + name, override, "text");
    for (let i=0; i < (symbolList.length - 1); i++) {
      let delegatePropName = utils.escape(symbolList[i+1].name, true) + "_" + name;
      let propName = utils.escape(symbolList[i].name, true) + "_" + name;
      symbolList[i].setProp(delegatePropName, propName, "property");
    }
    let lastSymbol = symbolList[symbolList.length - 1];
    lastSymbol.setProp(name, utils.escape(lastSymbol.name, true) + "_" + name, "property");
  }
}

function symbolOverride(view, symbol, overrides, symbolList,
  symbolTable, globalConf) {
  for (let key in overrides) {
    let override = overrides[key];
    if (typeof override != "object")
      continue;
    else if (!override["symbolID"]) {
      let symbolView = findViewById(key, symbol.view);
      if (!symbolView)
        continue;
      symbolList.push(symbolView);
      symbolOverride(view, symbolTable[symbolView.id], override, symbolList,
        symbolTable, globalConf);
      symbolList.pop();
      continue;
    }
    let child = findViewById(key, symbol.view);
    if (!child)
      continue;
    let name = utils.escape(child.name, true);
    let symbolName = utils.escape(symbol.name, true);
    let newSymbolName = utils.escape(symbolTable[override["symbolID"]].name,
      true);
    if (!globalConf[symbolName])
      globalConf[symbolName] = {};

    if (!globalConf[symbolName][name])
      globalConf[symbolName][name] = {};

    let globals = globalConf[symbolName][name];
    if (!globals[newSymbolName])
      globals[newSymbolName] = Object.keys(globals).length;

    symbol.props.addOverride(name, override["symbolID"], child.id);
    symbol.props.render.addFuncCall(name, "override");
    view.setProp(name, [symbolName, name, newSymbolName], "global");
    child.nameOverride = name;
    listPropSetter(name, symbolList);
  }
}

function override(view, symbolTable, globalConf) {
  if (view.type == "symbol") {
    if (!view.elem.overrides)
      return;
    let overrides = view.elem.overrides;
    textOverride(view, symbolTable[view.id], overrides, [], symbolTable);
    symbolOverride(view, symbolTable[view.id], overrides, [], symbolTable,
      globalConf);
  }
  view.childs.forEach((child) => override(child, symbolTable, globalConf));
}

function screenFlow(view, artboardProp, config) {
  view.childs.forEach((child) => screenFlow(child, artboardProp, config));
  let id = view.elem["do_objectID"];
  if (!config[id])
    return;
  if (!config[id]["screenFlowTarget"])
    return;
  let screenName = utils.escape(config[id]["screenFlowTarget"], true);
  let viewName = utils.escape(view.name, true);
  view.setProp("onClick", viewName + "_flow", "this");
  artboardProp.addScreenFlow(viewName + "_flow", screenName);
}

function overlay(view, table, id) {
  let rootview = table[id].view;
  let relative = rootview;
  if (rootview.type != "RelativeLayout") {
    relative = new parser.View("RelativeLayout", rootview.elem);
    relative.setProp("style", relative.props.style.value + "_relative", "variable");
    rootview.props.id = relative.props.id;
    delete relative.props.id;
    relative.addChild(rootview);
    rootview.setProp("root", "true", "bool");
    relative.props.height = rootview.props.height;
    rootview.setProp("height", "match_parent");
    relative.props.width = rootview.props.width;
    rootview.setProp("width", "match_parent");
    if (rootview.props.margin) {
      relative.props.margin = rootview.props.margin;
      delete rootview.props.margin;
    }
    table[id].view = relative;
  }
  table[id].props.addOverlay(view.name, view);
}

function overlayPages(view, artboardMap, config) {
  let status = false;
  let id = view.elem["do_objectID"];
  view.childs.forEach((child) => status = status || overlayPages(child,
    artboardMap, config));
  if (!config[id])
    return status;
  if (!config[id]["overlayTarget"])
    return status;
  // Do not add the layout if the overlayType prop is given
  if (config[id]["overlayType"])
    return true;

  let screenName = utils.escape(config[id]["overlayTarget"]);
  overlay(view, artboardMap, screenName);
  delete config[id]["overlayTarget"];
  return true;
}

function overlaySymbol(view, symbolTable, config) {
  let status;
  let id = view.elem["do_objectID"];
  view.childs.forEach((child) => status = overlaySymbol(child,
    symbolTable, config));

  if (!config[id])
    return status;
  if (!config[id]["overlayTarget"])
    return status;

  let symbolName = utils.escape(config[id]["overlayTarget"]);
  let symbolId;

  for (let j in symbolTable) {
    if (symbolTable[j].name == symbolName) {
      symbolId = j;
      break;
    }
  }

  if (!symbolId) {
    utils.warn("Invalid symbol overlay", view.name,
      "Overlay target does not exist: " + symbolName);
    return status;
  }
  delete config[id]["overlayTarget"];
  // Do not add the layout if the overlayType prop is given
  if (config[id]["overlayType"])
    return symbolId;

  overlay(view, symbolTable, symbolId);

  return symbolId;
}

function replaceSymbols(artboardMap, replacedSymbols) {
  let sanitize = function (view) {
    if (view.type == "symbol" && replacedSymbols[view.id]) {
      view.id = replacedSymbols[view.id];
    }
    view.childs.forEach(child => sanitize(child));
  }
  Object.keys(artboardMap).forEach((id) => sanitize(artboardMap[id].view));
}

module.exports = function (pages, symbolTable, config) {
  let globalConf = {};
  let artboardMap = {};
  let replacedSymbols = {};
  pages.forEach(page => page.artboards.forEach(a => artboardMap[a.name] = a))

  for (let i=0; i < pages.length; i++) {
    let page = pages[i];
    let artboards = page.artboards.filter(board=> {
      if (overlayPages(board.view, artboardMap, config)) {
        delete artboardMap[board.name];
      } else {
        return board;
      }
    })
    page.artboards = artboards;
  }

  for (let i in symbolTable) {
    let symbol = symbolTable[i];
    let symbolId = overlaySymbol(symbol.view, symbolTable, config);
    override(symbol.view, symbolTable, globalConf);
    if (symbolId) {
      replacedSymbols[i] = symbolId;
      delete symbolTable[i];
    }
  }

  replaceSymbols(artboardMap, replacedSymbols);

  for (let j in artboardMap) {
    let artboard = artboardMap[j];
    artboardMap[artboard.name] = artboard;
    override(artboard.view, symbolTable, globalConf);
    screenFlow(artboard.view, artboard.props, config);
  }
  return globalConf;
}
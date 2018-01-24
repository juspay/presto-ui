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

/**
 @module generator/viewsComponent
*/
const transpiler = require('./transpiler');
const mapper = require('./mapper');
const utils = require('../utils');
const ignoreProp = ["width", "height", "margin", "weight", "parentProps", "accessibilityHint"];
const mandatoryImports = ["View", "dom"];

function definitionsToCode(definitions, artboardName) {
  let code = "";
  let ids = [];
  for (let name in definitions) {
    let type = definitions[name].type;
    let value = definitions[name].value;
    if (type == "string" || type == "text")
      code += utils.indent(`this.${name}="${value}";\n`, 2);
    else if (type == "condition")
      code += utils.indent(
        `let ${value} = (this.props.${value}) ? this.props.${value} : this.${value};\n`,
        2);
    else if (type == "functionCall") {
      code += utils.indent(`let ${name} = this.override_${name}();\n`, 2);
    } else if (type == "id") {
      ids.push(name);
    } else if (type == "variable") {
      code += utils.indent(`this.${name} = ${value};\n`, 2);
    } else
      utils.warn("definitions type not supported", type, "Artboard name: " +
        artboardName)
  }
  if (ids.length > 0) {
    code += utils.indent(`let ids = ${JSON.stringify(ids)};\n`, 2);
    code += utils.indent(`this.setIds(ids);\n`, 2);
  }
  return code;
}

/**
 * Helper used to find the all the layouts/symbols used in the view
 * @param {View}
 * @param {object} layoutTable - Empty object populated with layout/symbol names
 * @param {boolean} isComponent - identifier for symbol(true)/artboard
 * @return {string} code
 */
function uniqueLayoutTypes(view, layoutTable, symbolTable) {
  if (view.type == "symbol") {
    if (!symbolTable[view.id]) {
      return;
    }
    let symbolName = symbolTable[view.id].name;
    layoutTable[symbolName] = "component";
    return;
  }
  layoutTable[view.type] = "native";
  for (let i = 0; i < view.childs.length; i++)
    uniqueLayoutTypes(view.childs[i], layoutTable, symbolTable);
}

/**
 * Generates code for the imports
 * @param {artboard}
 * @param {SymbolTable}
 * @param {boolean} isComponent - identifier for symbol(true)/artboard
 * @return {string} code
 */
function importsCode(artboard, symbolTable, isComponent) {

  let
    layoutTable = {},
    code = "",
    props = artboard.props;

  for (let i in props.overrides) {
    let list = props.overrides[i].list;
    for (let j in list) {
      let id = list[j];
      let symbolName = symbolTable[id].name;
      layoutTable[symbolName] = "component";
    }
  }

  uniqueLayoutTypes(artboard.view, layoutTable, symbolTable);

  for (let name in props.overlays) {
    uniqueLayoutTypes(props.overlays[name], layoutTable, symbolTable);
  }

  for (let iLayout in mandatoryImports) {
    let layout = mandatoryImports[iLayout];
    code += `const ${layout} = ${mapper[layout]};\n`;
  }

  code += '\n';

  for (let layout in layoutTable) {
    let importLine = "";

    if (layoutTable[layout] == "native") {

      if (!mapper[layout]) {
        utils.fatal("Invalid layout type", layout,
          "please check ./generator/mapper for supported layouts");
      }

      importLine = `const ${layout} = ${mapper[layout]};`;
    } else {
      let Cname = utils.escape(layout, true);
      importLine = `const ${Cname} = `;
      if (isComponent) {
        let length = artboard.name.split('/').length;
        let dots = '../'.repeat(length);
        importLine += `require('./components/${dots}${layout}');`
      } else {
        importLine += `require('../../components/${layout}');`
      }
    }

    code += importLine + '\n';
  }

  for (let i in artboard.props.adapters) {
    let obj = artboard.props.adapters[i];
    let symbolName = symbolTable[obj.id].name;
    let name = utils.escape(symbolName, true);
    code += `const ${name} = require('../../components/${symbolName}');\n`
  }

  code += '\n';

  if (isComponent) {
    let length = artboard.name.split('/').length;
    let dots = '../'.repeat(length);
    code += `const Config = require('./${dots}globalConfig');\n`;
    code +=
      `const Controller = require('./${dots}${'controller/components/' + artboard.name}');\n`;
    code += `const STR = require('./${dots}res/string').values;\n`;
    code += `const HINT = require('./${dots}res/accessibility').values;\n`;
    code += `const Font = require('./${dots}res/fontStyle').values;\n`;
    code += `const FontColor = require('./${dots}res/fontColor').values;\n`;
    code += `const FontSize = require('./${dots}res/fontSize').values;\n`;
    code += `const Color = require('./${dots}res/color').values;\n`;
  } else {
    code += `const Config = require('./../../globalConfig');\n`;
    code +=
      `const Controller = require('./../../controller/pages/${artboard.pageName}/${artboard.name}');\n`;
    code += `const STR = require('./../../res/string').values;\n`;
    code += `const HINT = require('./../../res/accessibility').values;\n`;
    code += `const Font = require('./../../res/fontStyle').values;\n`;
    code += `const Color = require('./../../res/color').values;\n`;
    code += `const FontSize = require('./../../res/fontSize').values;\n`;
    code += `const FontColor = require('./../../res/fontColor').values;\n`;
  }

  return code + '\n';
}

function constructor(artboard) {
  let definitions = artboard.props.constructor.definitions;
  let code = utils.indent(`constructor(props, children, state) {\n`, 1);
  code += utils.indent(`super(props, children, state);\n`, 2);
  code += definitionsToCode(definitions, artboard.name);
  code += utils.indent(`}\n\n`, 1);
  return code;
}

function onPop() {
  return utils.indent(`onPop = () => {}\n\n`, 1);
}

function render(artboard, symbolTable, isComponent) {
  let code = "";
  code += utils.indent('render = () => {\n', 1);
  code += utils.indent('if (typeof this.preRender === "function") { this.preRender(); }\n', 2)
  let definitions = artboard.props.render.definitions;
  code += definitionsToCode(definitions, artboard.name);
  code += utils.indent('this.layout = (\n', 2);
  code += transpiler(artboard.view, symbolTable, 3);
  code += utils.indent(");\n", 2);
  code += utils.indent(`this.containerId = this.layout.idSet.id;\n`, 2);
  code += utils.indent('return this.layout.render();\n', 2);
  code += utils.indent('}\n\n', 1);
  return code;
}

function overrideFunc(artboard, name, override, symbolTable) {
  let code = "";
  let artboardName = utils.escape(artboard.name, true);
  name = utils.escape(name, true);
  code += utils.indent(`override_${name} = () => {\n`, 1);
  code += utils.indent(`let overrides = Config["${artboardName}"]["${name}"]\n`,
    2);
  code += utils.indent(`switch(this.props.${name}) {\n`, 2);
  for (let i in override.list) {
    let id = override.list[i];
    let o_name = utils.escape(symbolTable[id].name, true);
    code += utils.indent(`case overrides["${o_name}"]:\n`, 3);
    code += utils.indent(`return ${o_name};\n`, 3);
  }
  let defaultName = utils.escape(symbolTable[override.default].name, true);
  code += utils.indent(`};\n`, 2);
  code += utils.indent(`return ${defaultName};\n`, 2);
  code += utils.indent('}\n\n', 1);
  return code;
}

function getItemFunction(id, data, symbolTable) {
  let code = "";
  let propSet = new Set();
  let view = {
    type: "symbol",
    "id": id,
    "childs": [],
    "props": {},
  }
  data.forEach((props) => {
    let keys = Object.keys(props);
    keys.forEach((name) => {
      if (ignoreProp.indexOf(name) == -1)
        propSet.add(name)
      else if (!view.props[name])
        view.props[name] = props[name];
    });
  })
  propSet.forEach((name) => {
    view.props[name] = {
      "type": "variable",
      "value": name
    }
  });
  view.props["data"] = {
    type: "variable",
    value: "data"
  };
  let fnName = utils.escape(symbolTable[id].name, true) + "Item";
  code += utils.indent(`${fnName} = (data) => {\n`, 1);
  propSet.forEach((name) => {
    code += utils.indent(`let ${name} = data["${name}"];\n`, 2);
  });
  code += utils.indent(`let layout = (\n`, 2);
  code += transpiler(view, symbolTable, 3);
  code += utils.indent(");\n", 2);
  code += utils.indent("return layout;\n", 2);
  // code += utils.indent('return {view:layout.render(), value: "", viewType: 0};\n', 2);
  code += utils.indent('}\n\n', 1);
  return code;
}

function getAdapter(name, obj, symbolTable) {
  let code = "";
  let id = obj.id;
  let data = obj.data;
  let type = obj.type;
  let isProd = obj.isProd;

  code += getItemFunction(id, data, symbolTable);

  let fnName = utils.escape(symbolTable[id].name, true) + "Item";
  if (!isProd) {
    code += utils.indent(`${name} = () => {\n`, 1);
    code += utils.indent(`let data = [\n`, 2);
    data.forEach((props) => {
      let keys = Object.keys(props);
      let obj = utils.indent("{", 3);
      keys.forEach((name) => {
        if (ignoreProp.indexOf(name) != -1)
          return;
        let prop = props[name];
        let value = "";
        if (prop.type == "text")
          value = `"${prop.value}"`;
        else if (prop.type == "global") {
          value = "Config";
          prop.value.forEach((val) => {
            value += `["${val}"]`
          });
        } else {
          utils.warn("Listview type not supported", prop.type);
        }
        obj += `${name}: ${value}, `;
      });
      obj += "},\n";
      code += obj;
    });
    code += utils.indent(`];\n`, 2);
  } else {
    code += utils.indent(`${name} = (data) => {\n`, 1);
  }
  code += utils.indent(`if (!data) { return; }\n`, 2);
  if (type == "listview") {
    code += utils.indent('let views = [];\n', 2);
    code += utils.indent('data.forEach((d)=>views.push({\n', 2);
    code += utils.indent(
      `view:this.${fnName}(d).render(), value: "", viewType: 0\n`, 3);
    code += utils.indent(`}));\n`, 2);
    code += utils.indent(
      `JBridge.listViewAdapter(this.id("${name}"), JSON.stringify(views), null, data.length, null);\n`,
      2);
  } else if (type == "scroll") {
    code += utils.indent('data.forEach((d, i)=>{\n',2);
    code += utils.indent(`let view = this.${fnName}(d).render();\n`,3);
    code += utils.indent(`this.appendChild(this.id("${name}"), view, i, null, false);\n`, 3);
    code += utils.indent(`});\n`,2);
  }
  code += utils.indent('}\n', 1);
  return code + '\n';
}

function screenFlowFunc(funcName, screenName) {
  let code = "";
  code += utils.indent(`${funcName} = () => {\n`, 1);
  code += utils.indent(
    `window.__duiShowScreen(null, {screen: "${screenName}"});\n`, 2);
  code += utils.indent(`}\n`, 1);
  return code + '\n';
}

function overlayCode(name, view, symbolTable) {
  let code = "";
  code += utils.indent(`${name + "_overlay"} = () => {\n`,1);
  code += utils.indent(`return (\n`,2);
  code += transpiler(view, symbolTable, 3);
  code += utils.indent(');\n', 2);
  code += utils.indent('}\n\n',1);
  return code;
}

/**
 * Generates code for the class
 * @param {Artboard}
 * @param {SymbolTable}
 * @return {string} code
 */
function classCode(artboard, symbolTable, isComponent) {
  let name = utils.escape(artboard.name, true);
  let code = `class ${name} extends Controller {\n\n`;
  let overrides = artboard.props.overrides;
  code += constructor(artboard);
  code += onPop();
  for (let name in overrides) {
    code += overrideFunc(artboard, name, overrides[name], symbolTable);
  }
  for (let name in artboard.props.screenFlow) {
    code += screenFlowFunc(name, artboard.props.screenFlow[name]);
  }
  for (let name in artboard.props.adapters) {
    let obj = artboard.props.adapters[name];
    code += getAdapter(name, obj, symbolTable);
  }
  for (let name in artboard.props.overlays) {
    let obj = artboard.props.overlays[name];
    code += overlayCode(name, obj, symbolTable);
  }
  code += render(artboard, symbolTable, isComponent);
  code += "};\n";
  return code + '\n';
}

/**
 * Generates code module.exports
 * @param {Artboard}
 * @param {boolean} isComponent - identifier for symbol(true)/artboard
 * @return {string} code
 */
function exportsCode(artboard, isComponent) {
  let name = artboard.name;
  name = utils.escape(name, true);
  return `module.exports = ${name};\n`;
}

/**
 * Code Generator for symbol and artboard
 * @param {Artboard} artboard - Name of the artboard/symbol
 * @param {boolean} isComponent - identifier for symbol(true)/artboard
 * @return {string} code
 */
function codify(artboard, symbolTable, isComponent) {
  let code = "";
  code += importsCode(artboard, symbolTable, isComponent);
  code += classCode(artboard, symbolTable, isComponent);
  code += exportsCode(artboard, isComponent);
  return code;
}

/**
 * Generates code for symbols
 * @param {SymbolTable}
 * @return {Array.<{name:string, code:string}>}
 */
function components(symbolTable) {
  let components = [];
  for (let id in symbolTable) {
    let symbol = symbolTable[id];
    let code = codify(symbol, symbolTable, true)
    components.push({
      "name": symbol.name,
      "code": code
    });
  }
  return components;
}

/**
 * Generates code for pages
 * @param {Array.<{name:string, artboards:Array.<Artboard>}>}
 * @param {SymbolTable}
 * @return {Array.<{name:string, artboards:Array.<{name:string, code:string}>}>}
 */
function pages(pages, symbolTable) {
  let pageCodes = [];
  for (let iPage in pages) {
    let page = pages[iPage];
    let artboardCodes = [];
    for (let iArtboard in page.artboards) {
      let artboard = page.artboards[iArtboard];
      artboard.pageName = page.name;
      let code = codify(artboard, symbolTable, false);
      artboardCodes.push({
        "name": artboard.name,
        "code": code,
      });
    }
    pageCodes.push({
      "name": page.name,
      "artboards": artboardCodes
    });
  }
  return pageCodes;
}

module.exports = {
  components,
  pages
};
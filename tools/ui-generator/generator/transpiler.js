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
 * @module generator/transpiler
 */
const utils = require('../utils');

function props(props, tabs) {
  let jsx = "";
  let spreads = [];
  for (let key in props) {
    let obj = props[key];
    let type = obj.type;
    let value = obj.value;
    if (type == "string" || type == "text") {
      value = `"${value}"`;
    }
    else if (type == "this") {
      value = `{this.${value}}`;
    }
    else if (type == "property") {
      value = `{this.props.${value}}`;
    }
    else if (type == "strmap") {
      value = `{STR.${value}}`;
    }
    else if (type == "global") {
      let str = "Config";
      for (let i in value)
        str += `["${value[i]}"]`;
      value = `{${str}}`
    } else if (type == "spread") {
      spreads.push(`{...${value}}`);
      continue;
    } else {
      value = `{${value}}`;
    }
    jsx += "\n";
    jsx += utils.indent(`${key}=${value}`, tabs + 1);
  }
  for (let i of spreads) {
    jsx += "\n";
    jsx += utils.indent(i, tabs + 1);
  }
  return jsx;
}

/**
 * Translates the View JSON to JSX
 * @param {View}
 * @param {SymbolTable}
 * @param {integer} tabs - level of indent
 * @return {string} code
 */
function translate(view, symbolTable, tabs) {
  let name = view.type;
  if (view.type == "symbol") {

    if(!symbolTable[view.id]){
      console.log("no symbol in table")
      return "";
    }
    if (view.nameOverride)
      name = view.nameOverride;
    else
      name = utils.escape(symbolTable[view.id].name, true)
  }
  let jsx = utils.indent(`<${name}`, tabs);
  jsx += props(view.props, tabs);
  if (view.childs.length == 0) {
    jsx += ' />\n';
    return jsx;
  }
  jsx += '>\n';
  for (let i in view.childs) {
    let child = view.childs[i];
    jsx += translate(child, symbolTable, tabs + 1);
  }
  return jsx + utils.indent(`</${name}>\n`, tabs);
}

module.exports = translate;
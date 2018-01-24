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
 * @module Generator
 */
const components = require('./viewsComponent').components;
const pages = require('./viewsComponent').pages;
const controller = require('./controller');
const duiScreens = require('./duiScreens');
const meta = require('./screenMeta');
const res = require('./res');

function globalConfig(config){
	let json = JSON.stringify(config, null, 2);
	let value = `module.exports = ${json}`;
	return value;
}

/**
 * Generator - Converts the json objects to code
 * @param {Array.<{name:string, artboards:Array.<Artboard>}>} pages - Array of page objects
 * @param {SymbolTable} symbolTable - Map of symbolId and views
 * @return {object} code - Object containing codes for each type.
 */
module.exports = function (obj) {
  let pagesObj = obj.pages;
  let symbolTable = obj.symbolTable;
  let globalConf = obj.globalConfig;
  let result = {
    "components": components(symbolTable),
    "pages": pages(pagesObj, symbolTable),
    "duiScreens": duiScreens(pagesObj),
    "globalConfig": globalConfig(globalConf),
    "controller": controller(pagesObj, symbolTable),
    "screenMeta": meta(pagesObj),
    "string": res(obj.resMap.string),
    "accessibility": res(obj.resMap.accessibility),
    "fontStyle": res(obj.resMap.fontStyle),
    "fontColor": res(obj.resMap.fontColor),
    "fontSize": res(obj.resMap.fontSize),
    "color": res(obj.resMap.color),
  };
  return result;
}
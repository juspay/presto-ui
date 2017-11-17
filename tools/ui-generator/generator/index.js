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
    "strings": res(obj.strmap.strings),
    "accessibility": res(obj.strmap.accessibility)
  };
  return result;
}
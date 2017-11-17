const utils = require('../utils');
const path = require('path');
const parser = require('./parser');
const Props = require('./globalProps');
const postProcessor = require('./postProcessor');
const smartComponents = require('./smartComponents');

const metaFileName = "meta.json";
/**
 * Parses the artboards and symbols of a page
 * @param {Array.<{name:string, path:string}>} pageObj - Object of page name and path
 * @param {SymbolTable}
 * @return {Array.<Artboard>}
 */

function mapStrings(artboard, map) {
  let constructorObj = artboard.props.constructor;
  let definitions = constructorObj.definitions;
  for (let key in definitions) {
    if (definitions[key].type == "text") {
      let value = definitions[key].value;
      constructorObj.removeDef(key);
      let mapKey = 'DEFAULT_' + utils.escape(artboard.name, true).toUpperCase() +
        '_' + key.toUpperCase();
      if (!map.hasOwnProperty('strings')) {
        map["strings"] = {};
      }
      constructorObj.addStrmap(key, mapKey);
      map['strings'][mapKey] = value;
    }
  }
  let removeText = (view) => {
    let props = view.props;
    for (let key in props) {
      if (props[key].type != "text")
        continue;
      let text = props[key];
      let value = text.value;
      delete props[key];
      let prefix = (key == "text") ? "STR" : "HINT";
      let type = (key == "text") ? "strings" : "accessibility";
      let mapKey = [utils.escape(artboard.name, true), utils.escape(view.name,
        true)];
      if (view.type == "symbol") {
        prefix = "STR";
        type = "strings";
        mapKey.push(key);
      }
      mapKey = mapKey.join('_');
      mapKey = mapKey.toUpperCase();
      view.setProp(key, prefix + '.' + mapKey, 'variable');
      if (!map.hasOwnProperty(type)) {
        map[type] = {};
      }
      map[type][mapKey] = value;
    }
    view.childs.forEach(child => removeText(child));
  }
  removeText(artboard.view);
}

function parsePage(pagePath, symbolTable, config) {
  let page = utils.parseJSONFile(pagePath);
  let artboards = [];

  for (let key in page.layers) {
    let elem = page.layers[key];
    let artboard = parser.parse(elem, symbolTable, config);
    if (!artboard)
      continue;
    artboard.props = new Props();
    artboards.push(artboard);
  }
  return artboards;
}

module.exports = function (folderPath, config, isProd) {
  utils.pathExists(folderPath);
  let metaPath = path.join(folderPath, metaFileName);
  let metadata = utils.parseJSONFile(metaPath);
  let pagesArts = metadata["pagesAndArtboards"];
  let symbolTable = {};
  let pages = [];

  if (!pagesArts)
    throw Error("Empty sketch export");

  for (let page in pagesArts) {
    let pagePath = path.join(folderPath, 'pages', page + '.json')
    let artboards = parsePage(pagePath, symbolTable, config);
    if (artboards.length == 0)
      continue;
    pages.push({
      "name": pagesArts[page].name,
      "artboards": artboards,
    });
  }

  for (let id in symbolTable) {
    let symbol = symbolTable[id];
    symbol.props = new Props();
  }

  let globalConfig = postProcessor(pages, symbolTable, config);
  smartComponents.pages(pages, config, isProd);
  smartComponents.symbols(symbolTable, config, isProd);

  let strmap = {
    strings: {},
    accessibility: {}
  };

  pages.forEach(page => {
    page.artboards.forEach(artboard => {
      mapStrings(artboard, strmap);
    })
  })

  for (let id in symbolTable) {
    mapStrings(symbolTable[id], strmap);
  }

  return {
    pages,
    symbolTable,
    globalConfig,
    strmap
  };
}
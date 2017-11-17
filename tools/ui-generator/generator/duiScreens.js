/**
  @module generator/duiScreens
*/
const utils = require('../utils');

/**
 * Generates code for duiScreens JSON
 * @param {Array.<{name:string, artboards:Array.<Artboard>}>}
 * @return {string} code
 */
function generate(pages) {
  let artboards = [];
  let pagesDict = {};
  for (let iPage in pages) {
    let page = pages[iPage];
    if (page.artboards.length == 0)
      continue;
    pagesDict[page.name] = [];
    for (let iArtboard in page.artboards) {
      let artboard = page.artboards[iArtboard];
      pagesDict[page.name].push(artboard.name);
      artboards.push(artboard.name);
    }
  }
  let obj = {
    pages: pagesDict,
    artboards: artboards
  };
  obj = JSON.stringify(obj, null, 2);
  return obj;
}

module.exports = generate;
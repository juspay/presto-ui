/**
 @module generator/container
*/
const utils = require('../utils');

function importsCode(pages) {
  let code = `const RootScreen = require("./views/RootScreen");\n`;
  for (let iPage in pages) {
    let page = pages[iPage];

    if (page.artboards.length == 0)
      continue;

    code += `// Screens of page: ${page.name}\n`;
    for (let iArtboard in page.artboards) {
      let artboard = page.artboards[iArtboard];
      code +=
        `const ${artboard.name} = require("./views/${page.name}/${artboard.name}");\n`;
    }
    code += '\n';
  }

  return code;
}

/**
 * @static
 * Generates code for screenMeta.js
 * @param {Array.<{name:string, artboards:Array.<Artboard>}>}
 * @return {string} code
 */
function meta(pages) {
  let code = importsCode(pages);
  code += "const screens = {\n";
  let init;
  pages.forEach(page => {
    page.artboards.forEach(artboard => {
      let name = artboard.name;
      if (!init) {
        init = name;
      }
      code += utils.indent(`${name},\n`, 1);
    });
  });
  code += utils.indent('RootScreen\n', 1);
  code += "};\n\n";
  code += `const INIT_UI = "${init}";\n\n`;
  code += "module.exports = {\n\tscreens,\n\tINIT_UI\n};\n";
  return code;
}

module.exports = meta;
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
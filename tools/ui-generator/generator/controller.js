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
const mapper = require('./mapper');

function code(name) {
  let code = "";
  code += `const View = ${mapper["View"]};\n\n`;
  code += `class ${name} extends View {\n\n`;
  code += utils.indent(`constructor(props, children, state) {\n`, 1);
  code += utils.indent(`super(props, children, state);\n`, 2);
  code += utils.indent(`this.shouldCacheScreen = false;\n`, 2);
  code += utils.indent(`}\n\n`, 1);
  code += '}\n\n';
  code += `module.exports = ${name};\n`;
  return code;
}

module.exports = function (pages, symbolTable) {
  let pagesController = [];
  for (let i in pages) {
    let page = pages[i];
    let controller = {
      "name": page.name,
      "artboards": []
    };
    for (let j in page.artboards) {
      let artboard = page.artboards[j];
      controller.artboards.push({
        name: artboard.name,
        code: code(utils.escape(artboard.name, true))
      });
    }
    pagesController.push(controller);
  }

  let symbolController = [];
  for (let i in symbolTable) {
    symbolController.push({
      "name": symbolTable[i].name,
      "code": code(utils.escape(symbolTable[i].name, true))
    });
  }

  return {
  	pages: pagesController,
  	symbols: symbolController
  };
}

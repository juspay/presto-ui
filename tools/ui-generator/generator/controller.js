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

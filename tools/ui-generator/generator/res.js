const utils = require('../utils');

/**
 @module generator/strings
*/

module.exports = (data) => {
  let defaultlang = "en_US";
  let code = "";
  code += `const DEFAULT = "${defaultlang}";\n\n`;
  let obj = {};
  obj[defaultlang] = data;
  let json = JSON.stringify(obj, null, 2);
  code += 'const strings = ' + json;
  code += '\n\n';
  code +=
    `module.exports = () => Object.assign({}, strings[DEFAULT], strings[window.LANGUAGE]);\n`;
  return code;
}
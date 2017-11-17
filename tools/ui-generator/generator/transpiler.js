/**
 * @module generator/transpiler
 */
const utils = require('../utils');

function props(props, tabs) {
  let jsx = "";
  let styleValue;
  for (let key in props) {
    let obj = props[key];
    let type = obj.type;
    let value = obj.value;
    if (type == "string" || type == "text")
      value = `"${value}"`;
    else if (type == "this")
      value = `{this.${value}}`;
    else if (type == "property")
      value = `{this.props.${value}}`;
    else if (type == "strmap")
      value = `{STR.${value}}`;
    else if (type == "global") {
      let globals = "Config";
      for (let i in value)
        globals += `["${value[i]}"]`;
      value = `{${globals}}`;
    } else
      value = `{${value}}`;
    if (key == "style") {
      styleValue = value;
      continue;
    }
    jsx += "\n";
    jsx += utils.indent(`${key}=${value}`, tabs + 1);
  }
  if (styleValue) {
    jsx += "\n";
    jsx += utils.indent(`style=${styleValue}`, tabs + 1);
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
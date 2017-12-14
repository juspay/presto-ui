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

function mutableTextview(view, props, config) {
  let id = view.elem["do_objectID"];
  if (config[id] && config[id]["componentType"] == "Mutable TextView") {
    if (view.type == "TextView") {
      let name = utils.escape(view.elem.name, true);
      let value = (view.props.text) ? view.props.text.value : "";
      props.constructor.addTextDef(name, value);

      if (!view.props.text || view.props.text.type == "string")
        view.setProp("text", name, "this");
    } else {
      utils.warn("Mutable property on " + view.type, view.name,
        "Mutable property can be applied only on text");
    }
  }
  view.childs.forEach((child) => mutableTextview(child, props, config));
}

function listview(view, props, config, isProd) {
  let id = view.elem["do_objectID"];
  if (!(config[id] && config[id]["componentType"] == "ListView"))
    return view.childs.forEach((child) => listview(child, props, config, isProd));

  if (view.type != "LinearLayout")
    return utils.warn("Invalid ListView", view.name,
      "ListView property should be given to a group containing symbols of same type"
    );

  let items = view.childs;
  view.type = "ListView";
  view.childs = [];

  if (items.length == 0) {
    utils.warn("Invalid listview", view.name,
      "Listview group should have components");
    return;
  }
  let itemId = items[0].id;
  let data = [];

  for (let i in items) {
    let item = items[i];
    data.push(item.props);
  }
  let idName = utils.escape(view.name, true) + '_listview';
  props.constructor.addId(idName);
  props.addAdapter(idName, "listview", itemId, data, isProd);
  view.setProp("afterRender", idName, "this");
  view.setProp("root", "true", "bool");
  view.setProp("id", `id("${idName}")`, "this");
}

function qr(view, props, config) {
  let id = view.elem["do_objectID"];
  if (!(config[id] && config[id]["componentType"] == "QR"))
    return view.childs.forEach((child) => qr(child, props, config));

  if (view.type != "ImageView")
    return utils.warn("Invalid QR", view.name, "QR should be a imageview");

  view.setProp("id", `id("qr")`, "this");
  props.constructor.addId("qr");
}

function edittext(view, props, config, parentProp) {
  let id = view.elem["do_objectID"];
  if (!(config[id] && config[id]["componentType"] == "EditText"))
    return view.childs.forEach((child) => edittext(child, props, config, view.props));

  if (view.type != "TextView")
    return utils.warn("Invalid edittext", view.name,
      "Edittext should be a text element");

  view.type = "EditText";
  if (view.props.text) {
    view.props.hint = view.props.text;
    delete view.props.text;
  }
  if (view.props.height) {
    view.setProp("height", view.props.height.value);
  }

  if (parentProp.background)
    view.setProp("background", parentProp.background.value);
  else
    view.setProp("background", "#ffffff");

  view.setProp("padding", "0,0,0,0");
}

function scrollViewAdapter(view, props, isProd) {
  if (view.type.toLowerCase().indexOf('scroll') != -1) {
    let childs = view.childs[0].childs;
    if (childs.length == 0)
      return;
    if (childs[0].type != "symbol")
      return;
    let id = childs[0].id;
    for (let i in childs) {
      let child = childs[i];
      if (child.type != 'symbol' || child.id != id)
        return;
    }
    view.childs[0].childs = [];
    let data = [];

    for (let i in childs) {
      let child = childs[i];
      data.push(child.props);
    }
    let idName = utils.escape(view.name, true) + '_scroll';
    props.constructor.addId(idName);
    props.addAdapter(idName, "scroll", id, data, isProd);
    view.childs[0].setProp("afterRender", idName, "this");
    view.childs[0].setProp("id", `id("${idName}")`, "this");
    return;
  }
  view.childs.forEach(child => scrollViewAdapter(child, props, isProd));
}

function helper(artboard, config, isProd) {
  mutableTextview(artboard.view, artboard.props, config);
  listview(artboard.view, artboard.props, config, isProd);
  qr(artboard.view, artboard.props, config);
  edittext(artboard.view, artboard.props, config);
  scrollViewAdapter(artboard.view, artboard.props, isProd);
}

module.exports.pages = function (pages, config, isProd) {
  for (let i in pages) {
    let artboards = pages[i].artboards;

    for (let j in artboards) {
      let artboard = artboards[j];
      helper(artboard, config, isProd);
    }
  }
};

module.exports.symbols = function (symbolTable, config, isProd) {
  for (let id in symbolTable) {
    let symbol = symbolTable[id];
    helper(symbol, config, isProd);
  }
};
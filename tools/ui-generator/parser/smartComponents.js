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
  view.setProp("id", "idSet." + idName, "this");
}

function qr(view, props, config) {
  let id = view.elem["do_objectID"];
  if (!(config[id] && config[id]["componentType"] == "QR"))
    return view.childs.forEach((child) => qr(child, props, config));

  if (view.type != "ImageView")
    return utils.warn("Invalid QR", view.name, "QR should be a imageview");

  view.setProp("id", "idSet.qr", "this");
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
    view.childs[0].setProp("id", "idSet." + idName, "this");
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
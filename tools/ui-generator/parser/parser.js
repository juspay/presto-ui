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
  @module parser/page
*/
const utils = require('../utils');
const R = require('ramda');

const orientations = ["vertical", "horizontal"];

const gravitys = ["top", "left", "center_vertical", "center_horizontal", "center"];

const alignments = ["top", "center", "left", "right", "bottom"];

const rootLayouts = ["LinearLayout", "ScrollView", "RelativeLayout",
    "HorizontalScrollView", "ListView"
  ];
  /**
   * @typedef {Object} Props - Map of properties
   * @example {'width':'100'}
   */

/**
 * @typedef {Object} Elem - JSON of sketch element
 * @example {'_class': 'shapeGroup', 'frame':{}, 'layers':[]}
 */

/**
 * @typedef {Object} Config - JSON given by sketch plugin
 * @example {'12312312314234': {'orientation': 'horizontal'}}
 */

/**
 * @global
 * @type {Object}
 * @property {string} type - Type of the view eg: LinearLayout;
 * @property {object} props - Map of properties
 * @property {Array.<View>} childs - Array of childs of a view
 * @property {Object} elem - Sketch JSON
 * @property {name} Name
 */
function View(type, elem) {
  this.type = type;
  this.props = {};
  this.childs = [];
  this.elem = elem;
  this.name = elem.name;

  if (type == "symbol")
    this.id = elem["symbolID"];

  this.addChild = function (child) {
    this.childs.push(child)
  }

  this.setProp = function (name, value, type) {
    if (!type)
      type = "string";
    this.props[name] = {
      type,
      value
    };
  }

  this.setBasicProps = function () {
    let escapedName = utils.escape(this.elem.name, true);
    if (this.elem.name && this.type != "symbol") {
      this.setProp("id", "this.idSet." + escapedName, "variable");
      this.setProp("style", "this.style_" + escapedName, "variable");
      this.setProp("accessibilityHint", this.elem.name, "text");
    } else {
      this.setProp("parentProps", "this.props_" + escapedName, "variable");
    }
  }

  this.setBasicProps();
}

function setEvents(view, config) {
  let id = view.elem["do_objectID"];
  if (!config[id])
    return;
  if (!config[id].events)
    return;
  let events = config[id].events;
  events.forEach(event => {
    let name = event + '_' + utils.escape(view.name, true);
    view.setProp(event, `(this.${name}) ? this.${name}.bind(this) : null`,
      "condition");
  });
}

/**
 * Sets textview properties such as text, textsize from the config
 * @param {View}
 * @param {Config}
 */
function setTextViewProps(view, config) {
  let id = view.elem["do_objectID"];
  if (!config[id])
    return;
  if (config[id].text) {
    var text = decodeURIComponent(config[id].text);
    view.setProp("text", text, "text");
  }
  if (config[id].fontSize)
    view.setProp("textSize", parseInt(config[id].fontSize), "string");
  if (config[id].textRGBA)
    view.setProp("color", utils.rgb2hexText(config[id].textRGBA), "string");
  if (config[id]["font-family"])
    view.setProp("fontStyle", config[id]["font-family"]);
  if (config[id]["textAlign"])
    view.setProp("textAlign", config[id]["textAlign"]);
  if (config[id]["line-height"])
    view.setProp("lineHeight", config[id]["line-height"]);
}

/**
 * Sets height and width of the elem
 * @param {View}
 */
function setDims(view, config) {
  let frame = view.elem.frame;
  let id = view.elem["do_objectID"];
  let width, height;
  if (config[id] && config[id]["width"])
    width = config[id]["width"];
  else
    width = parseInt(frame.width);

  if (config[id] && config[id]["height"])
    height = config[id]["height"];
  else
    height = parseInt(frame.height);
  view.setProp("height", height, "string");
  view.setProp("width", width, "string");
}

/**
 * Sets background color of the elem
 * @param {View}
 */
function setStyle(view) {
  let elemStyle = view.elem.style;
  if (elemStyle && elemStyle.fills) {
    let background = utils.rgb2hex(elemStyle.fills[0].color);
    view.setProp("background", background, "string");
  }
  if (elemStyle && elemStyle.borders && elemStyle.borders[0].isEnabled) {
    let color = utils.rgb2hex(elemStyle.borders[0].color, true);
    let thickness = parseInt(elemStyle.borders[0].thickness);
    view.setProp("stroke", thickness + ',' + color);
  }
}

/**
 * Sets orienetation of the elem from the config
 * @param {View}
 * @param {Config}
 */
function setOrientation(view, config) {
  let id = view.elem["do_objectID"];
  if (config[id] && config[id]["orientation"]) {
    let orientation = config[id]["orientation"];
    if (orientations.indexOf(orientation) == -1) {
      utils.error("Invalid orientation", orientation, "accepted values for orientation: " + orientations);
      return;
    }
    view.setProp("orientation", orientation);
    
  }
  if (config[id] && config[id]["gravity"]) {
    let gravity = config[id]["gravity"];
    if (gravitys.indexOf(gravity) == -1) {
      utils.error("Invalid gravity", gravity, "accepted values for gravity: " + gravitys);
      return;
    }
    view.setProp("gravity", gravity);
  }
}

/**
 * Sets padding of the elem from the config
 * @param {View}
 * @param {Config}
 */
function setPadding(view, config) {
  let id = view.elem["do_objectID"];
  if (!config[id])
    return;
  let econf = config[id];
  let left = parseInt(econf["paddingLeft"]);
  let right = parseInt(econf["paddingRight"]);
  let top = parseInt(econf["paddingTop"]);
  let bottom = parseInt(econf["paddingBottom"]);
  if (left || right || top || bottom) {
    view.setProp("padding",
      `${(left)?left:0},${(top)?top:0},${(right)?right:0},${(bottom)?bottom:0}`
    );
  }
}

/**
 * Sets margin of the elem from the config
 * @param {View}
 * @param {Config}
 */
function setMargin(view, config) {
  let id = view.elem["do_objectID"];
  if (!config[id])
    return;
  let econf = config[id];
  let left = parseInt(econf["marginLeft"]);
  let right = parseInt(econf["marginRight"]);
  let top = parseInt(econf["marginTop"]);
  let bottom = parseInt(econf["marginBottom"]);
  if (left || right || top || bottom) {
    view.setProp("margin",
      `${(left)?left:0},${(top)?top:0},${(right)?right:0},${(bottom)?bottom:0}`
    );
  }
}

/**
 * Sets weight of the elem from the config
 * @param {View}
 * @param {Config}
 */
function setWeight(view, config) {
  let id = view.elem["do_objectID"];
  if (!config[id])
    return;
  let econf = config[id];
  let weight = parseInt(econf["weight"]);
  if (weight) {
    view.setProp("weight", weight);
  }
}

/**
 * Sets alignment of the elem from the config
 * @param {View}
 * @param {Config}
 */
function setAlignments(view, config) {
  let id = view.elem["do_objectID"];
  if (config[id] && config[id]["align"]) {
    let align = config[id]["align"];
    if (alignments.indexOf(align) == -1) {
      utils.error("Invalid alignment", align, "accepted alignments: " +
        alignments);
      return;
    }
    view.setProp("align", align);
  }
}

/**
 * Responsible for setting properties of the elem
 * @param {View}
 */
function setProps(view, config) {
  setDims(view, config);
  if (view.type.indexOf("ScrollView") == -1) {
    setStyle(view);
    setOrientation(view, config);
    setPadding(view, config);
  }
  setMargin(view, config);
  setWeight(view, config);
  setAlignments(view, config);
  setEvents(view, config);
}

/**
 * Parses the `text` elem
 * @param {Elem}
 * @param {Config}
 * @return {View}
 */
function parseTextview(elem, config) {
  let view = new View("TextView", elem);
  setProps(view, config);
  setTextViewProps(view, config);
  return view;
}

/**
 * Parses the `ImageView` elem (Imageview)
 * @param {Elem}
 * @param {Config}
 * @return {View}
 */
function parseImageView(elem, config) {
  let id = elem["do_objectID"];
  let view = new View("ImageView", elem);
  let imageUrl = config[id]["imageSource"];
  setProps(view, config);
  view.setProp('imageUrl', imageUrl);
  return view;
}

/**
 * Parses the `bitmap` elem (Imageview)
 * @param {Elem}
 * @param {Config}
 * @return {View}
 */
function parseBitmap(elem, config) {
  let view = new View("ImageView", elem);
  let imageUrl = elem.image["_ref"].split("/");
  setProps(view, config);
  view.setProp('imageUrl', imageUrl[1]);
  return view;
}

/**
 * Parses the `shapeGroup` elem
 * @param {Elem}
 * @param {Config}
 * @return {View}
 */
function parseShapeGroup(elem, config) {
  let view = new View("LinearLayout", elem);
  setProps(view, config);
  if (elem.layers[0])
    view.setProp("cornerRadius", parseInt(elem.layers[0].path.points[0].cornerRadius));
  return view;
}

function parseSymbol(elem, config) {
  let id = elem["do_objectID"];
  let view = new View("symbol", elem);
  setProps(view, config);
  return view;
}

/**
 * Responsible for invoking the correct elem type parser
 * @param {Elem}
 * @param {Config}
 * @return {View}
 */
function parseView(elem, config) {
  let id = elem["do_objectID"];
  if (config[id] && config[id]["imageSource"]) {
    return parseImageView(elem, config);
  }

  switch (elem["_class"]) {
  case "group":
    return parseGroup(elem, config);
  case "shapeGroup":
    return parseShapeGroup(elem, config);
  case "bitmap":
    return parseBitmap(elem, config);
  case "text":
    return parseTextview(elem, config);
  case "symbolInstance":
    return parseSymbol(elem, config);
  default:
    utils.warn("Invalid view", elem["name"], "type `" + elem["_class"] +
      "` not supported");
    return new View("LinearLayout", elem);
  }
}

/**
 * Parses the `Group` elem
 * @param {Elem}
 * @param {Config}
 * @return {View}
 */
function parseGroup(group, config) {
  if (group.layers.length == 0) {
    utils.warn("Invalid group", group.name, "no layers found");
    return new View("LinearLayout", group);
  }

  let baseView;
  let layer;
  let layers = [];
  let originalLayers = group.layers;
  let type = "LinearLayout";
  let id = group["do_objectID"];

  if (config[id] && config[id]["children"]) {
    let children = config[id]["children"];
    for (let i = 0; i < children.length; i++) {
      layer = originalLayers.filter(elem => elem["do_objectID"] == children[i]);
      if (layer.length == 0) {
        utils.error("Group:",
          group.name, "Invalid Child ID found in children " + children[i]);
      } else {
        layers.push(layer[0]);
      }
    }
    group.layers = layers;
  }

  if (config[id] && config[id]["scrollView"]) {
    let scrollType = config[id]["scrollView"];
    type = (scrollType == "horizontal") ? "HorizontalScrollView" : "ScrollView";
  }

  baseView = new View(type, group);
  setProps(baseView, config);

  if (config[id] && config[id]["bg"]) {
    let bgLayer = originalLayers.filter(elem => elem["do_objectID"] == config[
      id]["bg"]);
    if (bgLayer.length == 0) {
      utils.error("Group:", group.name, "Invalid BG layer ID " + config[id][
        "bg"
      ]);
    } else {
      baseView.elem = bgLayer[0];
      setStyle(baseView);
      if (bgLayer[0].layers[0]) {
        baseView.setProp("cornerRadius", parseInt(bgLayer[0].layers[0].path.points[
          0].cornerRadius));
      }
      baseView.elem = group;
    }
  }

  for (let i = 0; i < group.layers.length; i++) {
    let view = parseView(group.layers[i], config);
    baseView.addChild(view);
  }
  return baseView;
}

/**
 * Top level function responsible for parsing an Artboard or a Symbol
 * @param {Elem}
 * @param {Config}
 * @return {View}
 */
function parseRootView(board, config) {
  if (!board.layers || board.layers.length == 0) {
    utils.error("Invalid artboard", board.name, "no layers found");
    return new View("LinearLayout", board);
  }

  if (board.layers.length > 1) {
    utils.error("Invalid artboard", board.name,
      "artboard/symbol should have only one group at the top level");
    return new View("LinearLayout", board);
  }

  return parseView(board.layers[0], config);
}

/**
 * Processes and replaces the align property with a Space (Weight=1)
 * @param {Elem}
 * @param {Config}
 * @return {View}
 */
function processAlignments(parentProps, view) {
  if (view.type == "symbol")
    return;

  let name = view.name;
  let props = view.props;
  let whileListedAlignments = ["center_vertical", "center_horizontal"];
  // Root view if the parent parentProps is empty
  let isHorizontal = (props.orientation && props.orientation.value ==
      "horizontal") ? true : false;
  // Make sure current view does not have align property except center
  if (props.align) {
    if (props.align.value != "center") {
      utils.error("Invalid artboard/symbol", name,
        "parsing error, view cannot have align except center got `" + props.align
        .value +
        "`");
    } else {
      props.gravity = {
        type: "string",
        value: "center"
      };
    }
    delete props.align;
  }

  let childs = view.childs;
  let final_childs = [];
  for (let i = 0; i < childs.length; i++) {
    let child = childs[i];
    let props = child.props;
    final_childs.push(child);

    if (!props.align)
      continue;

    let align = props.align.value;

    if (align == "center")
      continue;

    if (whileListedAlignments.indexOf(align) != -1)
      continue;

    if ((align == "top" || align == "bottom") && isHorizontal) {
      utils.warn("Invalid alignment", name,
        "horizontal view cannot have top/bottom alginment");
      delete props.align;
      continue;
    } else if ((align == "right" || align == "left") && !isHorizontal) {
      utils.warn("Invalid alignment", name,
        "vertical view cannot have left/right alginment");
      delete props.align;
      continue;
    }

    if (align == "left" || align == "top") {
      delete props.align;
      continue;
    }

    if (i == 0 && childs.length > 1) {
      if (align == "right" && isHorizontal) {
        utils.warn("Invalid alignment", name,
          "first child of a view cannot have right align when it has sibilings"
        );
        delete props.align;
        continue;
      } else if (align == "bottom" && !isHorizontal) {
        utils.warn("Invalid alignment", name,
          "first child of a view cannot have bottom align when it has sibilings"
        );
        delete props.align;
        continue;
      }
    }

    let space = new View("LinearLayout", {
      name: "space"
    });

    space.setProp('weight', 1);
    final_childs.splice(final_childs.length - 1, 0, space);

    delete props.align;
  }
  view.childs = final_childs;

  view.childs.forEach((child) => processAlignments(view.props, child));
}

function processTextAlign(view) {
  if (view.type != "TextView")
    return view.childs.forEach((child) => processTextAlign(child));
  if (!view.props.textAlign)
    return;
  view.setProp("gravity", view.props.textAlign.value);
  delete view.props.textAlign;
}

/**
 * Parses the artboards and symbols of a page
 * @param {Array.<{name:string, path:string}>} pageObj - Object of page name and path
 * @param {SymbolTable}
 * @return {Array.<Artboard>}
 */
function parse(elem, symbolTable, config) {
  let view = parseRootView(elem, config);
  let name = utils.escape(elem.name);
  processAlignments(null, view);
  processTextAlign(view);

  if (rootLayouts.indexOf(view.type) != -1)
      view.setProp("root", "true", "bool");

  if (elem["_class"] == "artboard") {
    view.setProp("width", "match_parent");
    view.setProp("height", "match_parent");
    delete view.props.id;
    return {
      "name": name,
      "view": view
    };
  } else if (elem["_class"] == "symbolMaster") {
    let parentProps = ["width", "height", "margin", "weight"];
    parentProps.forEach((prop) => {
      let value = "0";

      if (prop == "margin")
        value = "0,0,0,0";

      if (view.props[prop]) {
        value = view.props[prop].value;
      }

      view.setProp(prop,
        `this.props.${prop} ? this.props.${prop}:"${value}"`,
        "variable");

    });
    symbolTable[elem.symbolID] = {
      "name": name,
      "view": view
    };
  } else {
    utils.error("Invalid artboard", elem["name"],
      "Unknown type of class of artboard `" + elem["_class"] + "`")
  }
  return null;
}

module.exports = {
  parse,
  View
}
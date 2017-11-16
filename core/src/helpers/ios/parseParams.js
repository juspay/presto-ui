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

import colors from "./colors";
import flattenObject from "./flattenObject";
const R = require('ramda');

var callbackMapper  = require("./callbackMapper");

let getSetType = 1;

function convertHexToRgb(hex) {
  var r = (parseInt(hex.substring(0,2), 16)/255).toFixed(2);
  var g = (parseInt(hex.substring(2,4), 16)/255).toFixed(2);
  var b = (parseInt(hex.substring(4,6), 16)/255).toFixed(2);

  return r + "," + g + "," + b;
}

function cS(value) {
  return  value?value + '': "";
}

function rWS(value) {
  return value.replace(/ /g,'');
}

function self_sizeFromDictionary(width, height) {
  window.__SIZE_INDEX++;

  return {
    "return": "size" + window.__SIZE_INDEX,
    "invokeOn": "self",
    "methodName":"sizeFromDictionary:",
    "values":[
      {
        "width": width,
        "height": height,
      }
    ]
  };
}

function this_setContentSize() {
  return  {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setContentSize:",
    "values":[
      {"name": "size" + window.__SIZE_INDEX, "computed": "true", "type": "size"}
    ]
  };
}

function UIColor_colorWithRGBA(r,g,b,a) {
  window.__COLOR_INDEX++;
  return {
    "return": "color" + window.__COLOR_INDEX,
    "invokeOn": "UIColor",
    "methodName":"colorWithRed:green:blue:alpha:",
    "values":[
      {"name": r , "type": "f"},
      {"name": g , "type": "f"},
      {"name": b , "type": "f"},
      {"name": a , "type": "f"}
    ]
  }
}

function self_animate_translation(obj, props) {
  obj.values[0].properties = [
      {
        "key": "frame",
        "values": {
          "x": props.x,
          "y": props.y,
          "width": props.w,
          "height": props.h,
        }
      },
  ]

  return obj;
}

function self_animate_rotation(obj, props) {
  obj.values[0].properties = [
    {
      "key": "angle",
      "values": {

      }
    },
  ]

  return obj;
}

function self_animate(props) {
  let obj = {
    "return": "false",
    "invokeOn": "self",
    "methodName":"animate:",
    "values": [
      {
        "duration": props.duration,
        "viewTag": props.id,
        "type": props.type,
        "delay": props.delay,
        "option": props.option
      }
    ]
  };

  if (props.type == "translation")
  return self_animate_translation(obj, props);
  else if (props.type == "rotation")
  return self_animate_rotation(obj, props);
}

function this_setBackgroundColor() {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setBackgroundColor:",
    "values":[
      {"name": "color" + window.__COLOR_INDEX, "computed": "true"},
    ]
  }
}

function this_superview() {
  var currViewIndex = window.__VIEW_INDEX;

  window.__VIEW_INDEX ++;

  return {
    "return": "view" + window.__VIEW_INDEX,
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + currViewIndex,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"superview",
  }
}

function this_scrollToIndex(index){
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"scrollToIndex:",
    "values":[
      {"name": index, type: "i"}
    ]
  }
}

function UIView_bounds() {
  window.__RECT_INDEX++;

  return {
    "return": "rect" + window.__RECT_INDEX,
    "fromStore": "true",
    "storeKey":"view" + window.__VIEW_INDEX,
    "invokeOn": "UIView",
    "methodName":"bounds",
  }
}

function this_setEnabled(mode) {
 return {
   "return": "false",
   "fromStore": getSetType?"false":"true",
   "storeKey": "view" + window.__VIEW_INDEX,
   "invokeOn": getSetType?"this":"UIView",
   "methodName":"setEnabled:",
   "values":[
     {"name": mode, "type": "i"},
   ]
 }
}

function this_setAutoCorrectionType(mode) {
 return {
   "return": "false",
   "fromStore": getSetType?"false":"true",
   "storeKey": "view" + window.__VIEW_INDEX,
   "invokeOn": getSetType?"this":"UIView",
   "methodName":"setAutocorrectionType:",
   "values":[
     {"name": mode, "type": "i"},
   ]
 }
}

function this_setKeyboardType(mode) {
 return {
   "return": "false",
   "fromStore": getSetType?"false":"true",
   "storeKey": "view" + window.__VIEW_INDEX,
   "invokeOn": getSetType?"this":"UIView",
   "methodName":"setKeyboardType:",
   "values":[
     {"name": mode, "type": "i"},
   ]
 }
}

function this_setAutocapitalizationType(mode) {
 return {
   "return": "false",
   "fromStore": getSetType?"false":"true",
   "storeKey": "view" + window.__VIEW_INDEX,
   "invokeOn": getSetType?"this":"UIView",
   "methodName":"setAutocapitalizationTypes:",
   "values":[
     {"name": mode, "type": "i"},
   ]
 }
}

function this_setStatusBarStyle(mode) {
 return {
   "return": "false",
   "invokeOn": "self",
   "methodName":"setStatusBarStyle:",
   "values":[
     {"name": mode, "type": "s"},
   ]
 }
}

function this_becomeFirstResponder() {
 return {
   "return": "false",
   "fromStore": getSetType?"false":"true",
   "storeKey": "view" + window.__VIEW_INDEX,
   "invokeOn": getSetType?"this":"UIView",
   "methodName":"becomeFirstResponder",
   "values":[

   ]
 }
}

function this_setOn(enabled) {
 return {
   "return": "false",
   "fromStore": getSetType?"false":"true",
   "storeKey": "view" + window.__VIEW_INDEX,
   "invokeOn": getSetType?"this":"UIView",
   "methodName":"setOn:animated:",
   "values":[
     {"name": enabled, "type": "i"},
     {"name": "1", "type": "i"}
   ]
 }
}

function this_showVerticalScrollBar(enabled) {
 return {
   "return": "false",
   "fromStore": getSetType?"false":"true",
   "storeKey": "view" + window.__VIEW_INDEX,
   "invokeOn": getSetType?"this":"UIView",
   "methodName":"setShowsVerticalScrollIndicator:",
   "values":[
     {"name": enabled, "type": "i"}
   ]
 }
}

function this_setSecureTextEntry(enabled) {
 return {
   "return": "false",
   "fromStore": getSetType?"false":"true",
   "storeKey": "view" + window.__VIEW_INDEX,
   "invokeOn": getSetType?"this":"UIView",
   "methodName":"setSecureTextEntry:",
   "values":[
     {"name": enabled, "type": "i"},
   ]
 }
}

function UIImage_imageNamed(image) {
  window.__IMAGE_INDEX++;

  return {
    "return": "image" + window.__IMAGE_INDEX,
    "invokeOn": "self",
    "methodName":"imageNamed:",
    "values":[
      {"name": image, "type": "s"}
    ]
  }
}

function this_setImage() {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
   "invokeOn": getSetType?"this":"UIView",
    "methodName":"setImage:",
    "values":[
      {"name": "image" + window.__IMAGE_INDEX, "computed": "true"}
    ]
  }
}

function self_rectFromDictionary(x,y,w,h) {
  window.__RECT_INDEX++;

  return {
    "return": "rect" + window.__RECT_INDEX,
    "invokeOn": "self",
    "methodName":"rectFromDictionary:",
    "values":[
      {
        "x": x,
        "y": y,
        "width": w,
        "height": h,
      }
    ]
  }
}

function this_setFrame() {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setFrame:",
    "values":[
      {"name": "rect" + window.__RECT_INDEX, "computed": "true", "type": "rect"}
    ]
  }
}

function self_alignToParent(type, values) {
  window.__POINT_INDEX++;
  return {
    "return": "point" + window.__POINT_INDEX,
    "invokeOn": "self",
    "methodName":"alignToParent:",
    "values":[
      {
        "name": type,
        "x": values.x,
        "y": values.y,
        "yOffset": values.yOffset,
        "xOffset": values.xOffset,
      }
    ]
  }
}

function this_setCenter() {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setCenter:",
    "values":[
          {"name": "point" + window.__POINT_INDEX, "computed": "true",  "type": "point"}
     ]
  }
}

function this_setText(text) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
  "invokeOn": getSetType?"this":"UIView",
    "methodName":"setText:",
    "values":[
          {"name": encodeURI(text), "type": "s"}
     ]
  }
}

function this_setRegularExpression(text) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
  "invokeOn": getSetType?"this":"UIView",
    "methodName":"setRegularExpression:",
    "values":[
          {"name": text, "type": "s"}
     ]
  }
}

function self_setHTMLText(props) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName":"setHtmlText:",
    "values": [
      {
        "text": props.text,
        "viewTag": props.id,
      }
    ]
  }
}

function this_setPlaceholder(text) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setPlaceholder:",
    "values":[
          {"name": text, "type": "s"}
     ]
  }
}

function UIFont_systemFontOfSize(size) {
  window.__FONT_INDEX++;

  return {
    "return": "font" + window.__FONT_INDEX,
    "invokeOn": "UIFont",
    "methodName":"systemFontOfSize:",
    "values":[
      {"name": size, "type": "f"}
    ]
  }
}

function UIFont_fontWithName(name, size) {
  window.__FONT_INDEX++;

  return {
    "return": "font" + window.__FONT_INDEX,
    "invokeOn": "UIFont",
    "methodName":"fontWithName:size:",
    "values":[
      {"name": name, "type": "s"},
      {"name": size, "type": "f"},
    ]
  }
}

function this_setFont() {
  return {
    "return": "false",
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setFont:",
    "values":[
      {"name": "font" + window.__FONT_INDEX, "computed": "true"}
    ]
  }
}

function this_sizeToFit() {
  return {
    "return": "false",
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"sizeToFit"
  }
}

function UIFont_boldSystemFontOfSize(size) {
  window.__FONT_INDEX++;

  return {
    "return": "font" + window.__FONT_INDEX,
    "invokeOn": "UIFont",
    "methodName":"boldSystemFontOfSize:",
    "values":[
      {"name": size, "type": "f"}
    ]
  }
}

function UIFont_systemFontOfSizeWeight(size, weight) {
  window.__FONT_INDEX++;

  return {
    "return": "font" + window.__FONT_INDEX,
    "invokeOn": "UIFont",
    "methodName":"systemFontOfSize:weight:",
    "values":[
      {"name": size , "type": "f"},
      {"name": weight , "type": "f"},
    ]
  }
}

function this_setLineBreakMode(mode) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setLineBreakMode:",
    "values":[
      {"name": mode, "type": "i"}
    ]
  }
}

function this_setNumberOfLines(count) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setNumberOfLines:",
    "values":[
      {"name": count, "type": "i"}
    ]
  }
}

function this_setTextAlignment(mode) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setTextAlignment:",
    "values":[
      {"name": mode , "type": "i"}
    ]
  }
}

function this_setTextColor() {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setTextColor:",
    "values":[
      {"name": 'color' + window.__COLOR_INDEX, "computed": "true"}
    ]
  }
}

function this_setTextLengthLimit(length) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setTextLengthLimit:",
    "values":[
        {"name": length + "", "type": "i"}
      ]
  }
}

function this_removeCell(cellIndex) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
      "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"removeObjectAtIndex:",
    "values":[
        {"name": cellIndex + "", "type": "i"}
      ]
  }
}

function UIColor_fromLiteral(color) {
  window.__COLOR_INDEX++;

  return {
    "return": "color" + window.__COLOR_INDEX,
    "invokeOn": "UIColor",
    "methodName": color + "Color",
  }
}

function this_layer() {
  window.__LAYER_INDEX++;

  return {
    "return": "layer" + window.__LAYER_INDEX,
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName": "layer",
  }
}

function _UILabelLayer_setCornerRadius(radius) {
  return {
    "return": "false",
    "fromStore":"true",
    "storeKey":"layer" + window.__LAYER_INDEX,
    "invokeOn": "_UILabelLayer",
    "methodName":"setCornerRadius:",
    "values":[
      {"name": radius + "", "type": "f"}
    ]
  }
}

function _UILabelLayer_setBorderWidth(width) {
  return {
    "return": "false",
    "fromStore":"true",
    "storeKey":"layer" + window.__LAYER_INDEX,
    "invokeOn": "_UILabelLayer",
    "methodName":"setBorderWidth:",
    "values":[
      {"name": width + "",  "type": "f"}
    ]
  }
}

function _UILabelLayer_setBorderColor() {
  return {
    "return": "false",
    "fromStore":"true",
    "storeKey":"layer" + window.__LAYER_INDEX,
    "invokeOn": "_UILabelLayer",
    "methodName":"setBorderColor:",
    "values":[
      {"name": "color" + window.__COLOR_INDEX, "computed": "true", type: "cgcolor"}
    ]
  }
}

function _UILabelLayer_setMasksToBounds() {
  return {
    "return": "false",
    "fromStore":"true",
    "storeKey":"layer" + window.__LAYER_INDEX,
    "invokeOn": "_UILabelLayer",
    "methodName":"setMasksToBounds:",
    "values":[
      {"name": "1", type: "i"}
    ]
  }
}

function this_setTag(tag) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setTag:",
    "values":[
      {"name": tag, type: "i"}
    ]
  }
}

function self_getViewFromTag(tag){
  window.__VIEW_INDEX++;

  return {
    "return": "view" + window.__VIEW_INDEX,
    "invokeOn": "self",
    "methodName":"getViewFromTag:",
    "values":[
      {"name": tag, "type": "s"}
    ]
  }
}

function this_setHidden(hidden){
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setHidden:",
    "values":[
      {"name": hidden, type: "i"}
    ]
  }
}

function UIView_bounds() {
  window.__RECT_INDEX++;

  return {
    "return": "rect" + window.__RECT_INDEX,
    "fromStore": "true",
    "storeKey":"view" + window.__VIEW_INDEX,
    "invokeOn": "UIView",
    "methodName":"bounds",
  }
}

function this_bringSubViewToFront(params){
  return {
  "return": "false",
    "invokeOn": "self",
    "methodName":"bringSubViewToFront:",
    "values": [
        {"name": params, type: "s"}
      ]
  }
}

function this_setContentMode(mode) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setContentMode:",
    "values":[
      {"name": mode, type: "i"}
    ]
  }
}

function UIColor_setColor(color) {
  let values;
  let alpha = "1.00";

  if (color.length >= 8) {
    alpha = parseInt(color.substring(1,3), 16);
    alpha = (alpha/255).toFixed(2);
    color = color.substring(3, 9);
  } else {
    color = color.substring(1, color.length);
  }

  color = convertHexToRgb(rWS(color));
  values = color.split(',');

  let r = rWS(values[0]);
  let g = rWS(values[1]);
  let b = rWS(values[2]);
  let a = alpha;


  return UIColor_colorWithRGBA(r, g, b, a);
}

function transformKeys(config) {
  var keys =  Object.keys(config);
  for (var i = 0; i<keys.length; i++) {
    if (typeof config[keys[i]] == "undefined" || config[keys[i]] == null) {
      delete config[keys[i]];
    } else if (typeof config[keys[i]] == "function") {
      config[keys[i]] = callbackMapper.map(config[keys[i]]);
    } else {
      if (keys[i] !== "id" &&
          keys[i]!== "__filename" &&
          keys[i]!== "currChildOffset" &&
          keys[i]  !== "methods"  &&
          keys[i]  !== "collectionView" &&
          keys[i] !== "tableView") {

        delete config[keys[i]];
      }
    }
  }

  return config;
}

function generateType(type){
  var generatedType = "uIView";

  if (type == "customTextField") {
    return "customTextField";
  }

  if (type == "editText") {
    generatedType = "customTextField";
  } else if (type=="imageView") {
    generatedType = "uIImageView";
  } else if (type=="textView") {
    generatedType = "uILabel";
  } else if (type == "scrollView" || type == "horizontalScrollView") {
    generatedType = "uIScrollView";
  } else {
    generatedType = "uIView";
  }

  return generatedType;
}

function changeKeys(config, type) {
  var map = {
    "imageUrl": "imageNamed",
    "color": "textColor"
  };

  var keys = Object.keys(config);

  keys.forEach((key) => {
    if (map[key]) {
      config[map[key]] = config[key];
      delete config[key];
    }
  });

  if (config.stroke)  {
    config.borderWidth = config.stroke.split(",")[0];
    config.borderColor = config.stroke.split(",")[1];
  }

  if (config.alignParentBottom){
    delete config.alignParentBottom;
  }

  if (type == "textView" && config.gravity) {
    let value = config.gravity;
    let alignMent = 0;

    alignMent = (value == "left" ? "0" : (value == "center" ?  "1" : "2"));

    config.textAlignment = alignMent;
    delete config.gravity;
  }

  return config;
}


// cS - convert to String
// rWS - remove white spaces
// fromStore methods dont  use invokeOn
// the extract className out of the stored object in the store
module.exports = function(type, config, _getSetType) {
  config = changeKeys(flattenObject(config), type);
  type = generateType(type);
  getSetType = (_getSetType == "set")?1:0;
  config.methods = [];

  // tag set
  if (config.id)  {
    let tag =  rWS(cS(config.id));

    if (!getSetType) {
      config.methods.push(self_getViewFromTag(tag));
    } else {
      config.methods.push(this_setTag(tag));
    }
  }

  // frame
  if (config.x || config.y || config.w || config.h) {
    let x = rWS(cS(config.x)) ||  "0";
    let y =  rWS(cS(config.y))|| "0";
    let width = rWS(cS(config.w)) || "100";
    let height = rWS(cS(config.h)) || "100";

    config.methods.push(self_rectFromDictionary(x,y,width,height));
    config.methods.push(this_setFrame());
  }

  // background
  if (config.background) {
    config.methods.push(UIColor_setColor(config.background));
    config.methods.push(this_setBackgroundColor());
  }

  // borderColor, radius and width
  // will work only for uiView and uiLabel
  if (config.cornerRadius || config.borderWidth) {
    config.methods.push(this_layer());

    if (config.cornerRadius) {
      let arg = rWS(cS(config.cornerRadius));
      config.methods.push(_UILabelLayer_setCornerRadius(arg));
      config.methods.push(_UILabelLayer_setMasksToBounds());
    }

    if (config.borderWidth) {
      let arg = rWS(cS(config.borderWidth));
      config.methods.push(_UILabelLayer_setBorderWidth(arg));
    }

    if (config.borderColor) {
      config.methods.push(UIColor_setColor(config.borderColor));
      config.methods.push(_UILabelLayer_setBorderColor());
    }
  } else if (config.debug) {
    config.methods.push(this_layer());
    config.methods.push(_UILabelLayer_setBorderWidth("1"));
  }

  // make child fullWidth and height of parent
  if (config.fillParent) {
    config.methods.push(this_superview());
    config.methods.push(UIView_bounds());
    config.methods.push(this_setFrame());
  }

  if (config.imageNamed) {
    let arg = rWS(cS(config.imageNamed));
    let x = rWS(cS(config.x)) ||  "0";
      let y =  rWS(cS(config.y))|| "0";
      let width = rWS(cS(config.w)) || "100";
      let height = rWS(cS(config.h)) || "100";
      let frame = JSON.stringify({'x':x,'y':y,'width':width,'height':height});
    config.methods.push(UIImage_imageNamed(arg));
    config.methods.push(this_setImage());
  }

  if (config.text) {
    config.methods.push(this_setText(cS(config.text)));
  }

  if (config.hint) {
    config.methods.push(this_setPlaceholder(cS(config.hint)));
  }

  if (config.textAlignment) {
    config.methods.push(this_setTextAlignment(rWS(cS(config.textAlignment))));
  }

  if (config.textColor) {
    config.methods.push(UIColor_setColor(config.textColor));
    config.methods.push(this_setTextColor());
  }

  if (config.fontStyle) {
    config.methods.push(UIFont_fontWithName(config.fontStyle, config.textSize));

    // if (type == "bold")
    // config.methods.push(UIFont_boldSystemFontOfSize(size));
    // else if (type == "heavy")
    //   config.methods.push(UIFont_systemFontOfSizeWeight(size, "0.5"));
    //   else
    // config.methods.push(UIFont_systemFontOfSize(size));

    config.methods.push(this_setFont());
  }

  if (config.multipleLine) {
    config.methods.push(this_setLineBreakMode("0"));
    config.methods.push(this_setNumberOfLines("0"));
    config.methods.push(this_sizeToFit());
  }

  if (config.hidden) {
    let arg = rWS(cS(config.hidden));
    config.methods.push(this_setHidden(arg));
  }

  if (config.translationX) {
    let props = {
      'x': '' + config.translationX,
      'id': config.id,
      'type': 'translation',
      'delay': '0',
      'duration': '0'
    };

    let animate = self_animate(props);
    console.log(animate);
    config.methods.push(self_animate(props));
  }

  if (config.translationY) {
    let props = {
      'y': '' + config.translationY,
      'id': config.id,
      'type': 'translation',
      'delay': '0',
      'duration': '0'
    };

    config.methods.push(self_animate(props));
  }

  if (config.a_translationX) {
    let props = {
      "x": config.a_translationX,
      "duration": config.a_duration || '0',
      "id": config.id,
      "delay": config.a_delay,
      "option": config.a_option,
      "type": "translation",
    };

    let animate = self_animate(props);
    console.log(animate);
    config.methods.push(self_animate(props));
  }

  if (config.a_translationY) {
    let props = {
      "y": config.a_translationY,
      "duration": config.a_duration || '0',
      "id": config.id,
      "delay": config.a_delay,
      "option": config.a_option,
      "type": "translation",
    };

    config.methods.push(self_animate(props));
  }

  if (config.a_rotate) {
    //TODO: FIX THIS BRING IT OUTSIDE
    let props = {
        "duration": config.a_duration,
        "id": config.id,
        "delay": config.a_delay,
        "option": config.a_option,
        "type": "rotation",
     };
      config.methods.push(self_animate(props));
  }

  if (config.htmlText) {
    //TODO: FIX THIS BRING IT OUTSIDE
    let props = {
        "text": config.htmlText,
        "id": config.id,
     };
      config.methods.push(self_setHTMLText(props));
  }

  // doesnt work
  if (config.bringSubViewToFront) {
    let viewTag = cS(config.viewTag);
    config.methods.push(this_bringSubViewToFront(viewTag));
  }

  if (type == 'uIImageView') {
    let contentMode = cS(config.contentMode || 1);
    config.methods.push(this_setContentMode(contentMode));
  }

  if (type == 'uIScrollView') {
    let width = cS(config.contentWidth) || "0";
    let height = cS(config.contentHeight) || "0";

    config.methods.push(self_sizeFromDictionary(width, height));
    config.methods.push(this_setContentSize());
  }

  if (config.bringSubViewToFront) {
    let enabled = cS(config.enabled);
      config.methods.push(this_setEnabled(enabled));
  }

  if (config.statusBarStyle) {
    let enabled = cS(config.statusBarStyle);
      config.methods.push(this_setStatusBarStyle(enabled));
  }

  if (config.enabled) {
    let enabled = cS(config.enabled);
      config.methods.push(this_setEnabled(enabled));
  }

  if (config.keyboardType) {
    let keyboardType = cS(config.keyboardType);
      config.methods.push(this_setKeyboardType(keyboardType));
  }

  if (config.autocapitalizationType) {
      let keyboardType = cS(config.autocapitalizationType);
      config.methods.push(this_setAutocapitalizationType(keyboardType));
  }

  if (config.autoCorrectionType) {
    let autoCorrectionType = cS(config.autoCorrectionType);
      config.methods.push(this_setAutoCorrectionType(autoCorrectionType));
  }

  if (config.becomeFirstResponder) {
      config.methods.push(this_becomeFirstResponder());
  }

  if (config.setOn) {
    let enabled = cS(config.setOn);
      config.methods.push(this_setOn(enabled));
  }

  if (config.scrollToIndex) {
    let enabled = cS(config.scrollToIndex);
      config.methods.push(this_scrollToIndex(enabled));
  }

  if (config.showVerticalScrollBar) {
    let enabled = cS(config.showVerticalScrollBar);
      config.methods.push(this_showVerticalScrollBar(enabled));
  }

  if (config.lengthLimit) {
    let enabled = cS(config.lengthLimit);
      config.methods.push(this_setTextLengthLimit(enabled));
  }

  if (config.regExp) {
    let enabled = cS(config.regExp);
      config.methods.push(this_setRegularExpression(enabled));
  }
  if (config.removeCell) {
    let cellIndex = cS(config.removeCell);
      config.methods.push(this_removeCell(cellIndex));
  }

  if (config.secureTextEntry) {
    let enabled = cS(config.secureTextEntry);
      config.methods.push(this_setSecureTextEntry(enabled));
  }

  config.currChildOffset = 0;
  return {config: transformKeys(config), type: type};
}

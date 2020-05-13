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

var callbackMapper  = require("../common/callbackMapper")

let getSetType = 1;

function convertColorToRgba(color){
  color = rWS(cS(color));

  var values;
  var alpha = "1.00";

  if (color.length >= 8) {
    alpha = parseInt(color.substring(1, 3), 16);
    alpha = (alpha / 255).toFixed(2);
    color = color.substring(3, 9);
  } else {
    color = color.substring(1, color.length);
  }

  color = convertHexToRgb(rWS(color));
  values = color.split(',');

  return {
    r: rWS(values[0]),
    g: rWS(values[1]),
    b: rWS(values[2]),
    a: alpha
  };
}

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

function self_setCursorPosition(id, position) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "setCursorPosition:",
    "values": [{
      "viewId": id,
      "position": position
    }]
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

function self_pivotX(data) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "setPivotX:",
    "values": [{
      id:data.id+"",
      value:data.value+""
    }]
  };
}

function self_pivotY(data) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "setPivotY:",
    "values": [{
      id:data.id+"",
      value:data.value+""
    }]
  };
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

function this_setTranslationZ(params) {
    return {
      "return": "false",
      "fromStore": getSetType ? "false" : "true",
      "storeKey": "view" + window.__VIEW_INDEX,
      "invokeOn": getSetType ? "this" : "UIView",
      "methodName": "translationZ:",
      "values": [{ "name": params, type: "s" }]
  };
}

function self_animate(props) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName":"animate:",
    "values": [
      {
        "json": props.json,
        "viewTag": props.id,
      }
    ]
  };
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

function this_scrollEnabled(status) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "setScrollEnabled:",
    "values": [{ "name": status, "type": "s" }]
  };
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

function this_setAutoCapitalizationType(mode) {
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

function this_becomeFirstResponder(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "focus:",
    "values": [{"name": mode, "type": "s"}]
  };
}

function this_setOnItemClick(callback) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setOnItemClick:",
    "values":[
      { "name": callbackMapper.map(callback), "type": "s" },
    ]
  }
 }

function this_setOnFocusCallback(callback) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setOnFocusCallback:",
    "values":[
      { "name": callbackMapper.map(callback), "type": "s" },
    ]
  }
 }

function this_setOnMerchantViewHeightChangeCallback(callback) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setOnMerchantViewHeightChange:",
    "values":[
      { "name": callbackMapper.map(callback), "type": "s" },
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

function this_updateLayoutParams(config) {
  var data = {
    "width": config.width,
    "height": config.height,
    "margin": config.margin,
    "padding": config.padding,
    "weight": config.weight,
    "gravity": config.gravity,
    "visibility": config.visibility,
    "orientation": config.orientation,
    "alignment_rules" : config.alignment_rules
    }
  if(data.alignment_rules && data.alignment_rules.length == 0){
    delete data.alignment_rules;
  }
  return {
    "return": "false",
    "invokeOn": "this",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "methodName": "updateLayoutParams:",
    "values": [{ 
        "name": JSON.stringify(data), 
        "type": 's' 
    }]
  };
}
 

function this_setPadding(padding) {
  return {
    "return": "false",
    "invokeOn": getSetType?"this":"MJPViewAL",
    "methodName":"setPaddingLeft:Top:Right:Bottom:",
    "values": padding.split(',').map(makeUnit)
  }
}

function this_setMargin(margin) {
  return {
    "return": "false",
    "invokeOn": getSetType?"this":"MJPViewAL",
    "methodName":"setMarginLeft:Top:Right:Bottom:",
    "values": margin.split(',').map(makeUnit)
  }
}

function makeUnit (v,i,arr) {
  return {name : v+'', type : 'f'}
}

function this_setHeight(height) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"MJPViewAL",
    "methodName":"setHeight:",
    "values":[
      {"name": height +'', "type": 'i'}
    ]
  }
}

function this_setWidth(width) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"MJPViewAL",
    "methodName":"setWidth:",
    "values":[
      {"name": width +'', "type": 'i'}
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

function this_setHTMLText(text) {
  return {
    "return": "false",
    "fromStore": "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "methodName":"setHtmlText:",
    "values": [
      { "name": text
      , "type": "s"
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
  };
}

function this_setPlaceholderProperties(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTextView",
    "methodName": "setPlaceholderProperties:",
    "values": [{"name": data, "type": "s"}]
  };
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
    "invokeOn": "MJPFont",
    "methodName":"fontWithName:size:",
    "values":[
      {"name": name, "type": "s"},
      {"name": size.length<1?size:"14", "type": "f"},
    ]
  }
}

function this_setFont() {
  return {
    "return": "false",
    "fromStore": "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setFont:",
    "values": [{
      "name": "font" + window.__FONT_INDEX,
      "computed": "true"
    }]
  };
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
    "methodName":"setGravity:",
    "values":[
      {"name": mode , "type": "s"}
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
    "methodName":"setMJPCornerRadius:",
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
    "methodName":"setMJPBorderWidth:",
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
    "methodName":"setMJPBorderColor:",
    "values":[
      {"name": "color" + window.__COLOR_INDEX, "computed": "true", type: "cgcolor"}
    ]
  }
}

function this_setShadow(id, shadowOffset, shadowBlur, shadowSpread, shadowColor, shadowOpacity) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setShadow:",
    "values": [
      {
        "name": JSON.stringify({
        "viewId": id,
        "color": shadowColor,
        "blur": shadowBlur,
        "opacity": shadowOpacity,
        "offset": shadowOffset,
        "spread": shadowSpread
        }),
        "type": "s"
      }
    ]
  };
}

function this_setGradient(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setGradient:",
    "values": [{
      "name": data,
      "type": "s"
    }]
  };
}

function this_setBackgroundImage() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName": "setBackgroundImage:",
    "values": [{
      "name": "image" + window.__IMAGE_INDEX,
      "computed": "true"
    }]
  };
}

function _UILabelLayer_setMasksToBounds() {
  return {
    "return": "false",
    "fromStore":"true",
    "storeKey":"layer" + window.__LAYER_INDEX,
    "invokeOn": "_UILabelLayer",
    "methodName":"setMJPMasksToBounds:",
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

function this_setImageURL(id,url,placeholder) {
  return {
    "return": "false",
    "invokeOn": "self",
    "storeKey": "view" + window.__VIEW_INDEX,
    "methodName":"setImageWithUrl::::",
    "values":[
      {"name": "" + id, "type": "s"},
      {"name": url, "type": "s"},
      {"name": placeholder, "type": "s"}
    ]
  };
}

function this_setGif(id, imageName) {
  return {
    "return": "false",
    "invokeOn": "self",
    "storeKey": "view" + window.__VIEW_INDEX,
    "methodName": "loadGif:::",
    "values": [{ "name": "" + id, "type": "s" }, { "name": imageName, "type": "s" }]
  };
}

function this_startGif() {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName": "startGIF"
  };
}

function this_stopGif() {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName": "stopGIF"
  };
}

function self_setAlpha(alpha){
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setAlpha:",
    "values":[
      {"name": String(alpha), type: "f"}
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
      {"name": ((hidden === "gone" || hidden === "invisible") ? "1" : "0"), type: "i"}
    ]
  }
}

function this_setTextProperties(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTextView",
    "methodName": "setTextProperties:",
    "values": [
      {"name": data,"type": "s"}]
  };
}


function this_setLetterSpacing(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPEditText",
    "methodName": "setLetterSpacing:",
    "values": [{ "name": data, "type": "s" }]
  };
}

function this_setLineSpacing(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPLabel",
    "methodName": "setLineSpacing:",
    "values": [{ "name": data, "type": "s" }]
  };
}

function this_setCaretColor() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setTintColor:",
    "values": [{ "name": 'color' + window.__COLOR_INDEX, "computed": "true" }]
  };
}

function this_scrollTo(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "scrollTo:",
    "values": [{"name": value, "type": "s"}]
  };
}

function this_setExpand(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPExpandableCell",
    "methodName": "setExpand:",
    "values": [{"name": value, "type": "s"}]
  };
}

function this_setExpandDuration(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPExpandableCell",
    "methodName": "setExpandDuration:",
    "values": [{"name": value, "type": "s"}]
  };
}

function this_setExpandAlpha(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPExpandableCell",
    "methodName": "setExpandAlpha:",
    "values": [{"name": value, "type": "s"}]
  };
}

function this_setSwype(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "setSwype:",
    "values": [{ "name": value ? "true" : "false", "type": "s" }]
  };
}

function this_setUserInteraction(hidden){
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setUserInteractionEnabled:",
    "values":[
      {"name": (hidden === "true" ? "1" : "0"), type: "i"}
    ]
  }
}

function this_setSeparator(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setSeparator:",
    "values": [{ "name": value, type: "s" }]
  };
}

function this_setSeparatorRepeat(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setSeparatorRepeat:",
    "values": [{ "name": value, type: "s" }]
  };
}


function this_setSwipeCallback(value) {
    return {
        "return": "false",
        "fromStore": getSetType ? "false" : "true",
        "storeKey": "view" + window.__VIEW_INDEX,
        "invokeOn": getSetType ? "this" : "MJPTableView",
        "methodName": "setSwipeCallback:",
        "values": [{ "name": value, type: "s" }]
    };
}

function this_setupList(listData, listItem) {
  return {
    "return": "false",
    "fromStore": "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPRepeatTableView",
    "methodName": "setupList::",
    "values": [{ "name": listData, type: "s" }, { "name": listItem, type: "s" }]
    };
}

function this_inlineAnimation(config) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": "this",
    "methodName": "setInlineAnimation:",
    "values": [{ "name": modifyTranslation(config), type: "s" }]
    };
}


function modifyTranslation(config){
  var x = config.x || "0";
  var y = config.y || "0";
  var animationArray = JSON.parse(config.inlineAnimation);
  var animationArray = animationArray.map(function(a){
    if(a.hasOwnProperty("fromX")){
      a.fromX = parseInt(a.fromX) + parseInt(x) + '';
      if(!a.hasOwnProperty("toX")){
        a.toX = 0 + parseInt(x) + '';
      }
    }
    if(a.hasOwnProperty("toX")){
      a.toX = parseInt(a.toX) + parseInt(x) + '';
    }
    if(a.hasOwnProperty("fromY")){
      a.fromY = parseInt(a.fromY) + parseInt(y) + '';
      if(!a.hasOwnProperty("toY")){
        a.toY = 0 + parseInt(y) + '';
      }
    }
    if(a.hasOwnProperty("toY")){
      a.toY = parseInt(a.toY) + parseInt(y) + '';
    }
    return a;
  })
  return JSON.stringify(animationArray);
}

function this_setCloseSwipe(value) {
    return {
        "return": "false",
        "fromStore": getSetType ? "false" : "true",
        "storeKey": "view" + window.__VIEW_INDEX,
        "invokeOn": getSetType ? "this" : "MJPTableView",
        "methodName": "closeSwipe:",
        "values": [{ "name": value ? "true" : "false", type: "s" }]
    };
}

function this_setEnableSwype(value) {
    return {
        "return": "false",
        "fromStore": getSetType ? "false" : "true",
        "storeKey": "view" + window.__VIEW_INDEX,
        "invokeOn": getSetType ? "this" : "MJPTableView",
        "methodName": "setSwipeEnabled:",
        "values": [{ "name": value ? "true" : "false", type: "s" }]
    };
}

function this_bringSubViewToFront(params){
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName":"bringSubViewToFront:",
    "values": [{"name": params, type: "s"}]
  };
}

function this_setContentMode(mode) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setContentMode:",
    "values":[{"name": mode, type: "i"}]
  };
}

function this_adjustViewWithKeyboard(status) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setAdjustViewWithKeyboard:",
    "values":[{"name": status, type: "s"}]
  };
}

function self_setPopupMenu(popupMenu, onMenuItemClick) {
  var callback = callbackMapper.map(onMenuItemClick);
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "createActionSheetWithTitles::",
    "values": [{ "name": popupMenu, "type": "s" }, { "name": callback, "type": "s" }]
  };
}

function this_setCornerCurves(corner) {
  return {
    "return": "false",
    "fromStore": "false",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": "this",
    "methodName": "setCornerCurves:",
    "values": [{ "name": corner + "", "type": "s" }]
  };
}

function this_setClipsToBounds(bounds) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setClipsToBounds:",
    "values": [{ "name": bounds ? "1" : "0", type: "i" }]
  };
}

function this_fontWithName(name) {
  window.__FONT_INDEX++;
  return {
    "return": "font" + window.__FONT_INDEX,
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName":"fontWithName:",
    "values":[
      {"name": name, "type": "s"}
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
          keys[i] !== "__filename" &&
          keys[i] !== "currChildOffset" &&
          keys[i] !== "methods"  &&
          keys[i] !== "swipeEnable" &&
          keys[i] !== "viewPager" &&
          keys[i] !== "tableView") {

        delete config[keys[i]];
      }
    }
  }

  return config;
}

function generateType(type, config) {
  var modifiedType  = "mJPView";
  switch(type){
    case "editText":{
      modifiedType = "mJPEditText";
    }
    break;
    case "imageView":{
      modifiedType = "mJPImageView";
    }
    break;
    case "textView":{
      modifiedType = "mJPTextView";
    }
    break;
    case "scrollView": {
        if (config.hasOwnProperty('height')&& config.height == 'wrap_content'){
            modifiedType = "mJPScrollView";
        } else {
            modifiedType = "mJPScrollView";
        }
        config.orientation = "vertical"; 
        break;
    }
    case "horizontalScrollView": {
        if (config.hasOwnProperty('width')&& config.width == 'wrap_content'){
            modifiedType = "mJPScrollView";  
        } else {
            modifiedType = "mJPScrollView";
        }
        config.orientation = "horizontal";
        break;
    }
    break;
    case "tableView":
    case "listView": {
      if (config.hasOwnProperty("listData") && config.hasOwnProperty("listItem")) {
        modifiedType = "mJPRepeatTableView";
      }
      else{
        modifiedType = "mJPTableView";
      }
    }
    break;
    case "collectionView":
    case "viewPager":{
      modifiedType = "mJPCollectionView";
    }
    break;
    case "progressBar": {
      modifiedType = "mJPActivityIndicator";
    }
    break;
    case "switch": {
      modifiedType = "mJPSwitch";
    }
    break;
    case "swypeLayout": {
      modifiedType = "mJPSwypeLayoutCell";
    }
    break;
    case "accordionLayout": {
      modifiedType = "mJPExpandableCell";
    }
    break;
    case "linearLayout": {
      modifiedType = "mJPLinearLayout";
    }
    break;
    case "relativeLayout": {
      modifiedType = "mJPRelativeLayout";
    }
    break;
    case "frameLayout": {
      modifiedType = "mJPRelativeLayout";
    }
    break;
    default: {
      modifiedType = "mJPView";
    }
  }
  return modifiedType;
}

function changeKeys(config, type) {
  var map = {
    "imageUrl": "imageNamed",
    "packageIcon" : "imageNamed",
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

  // Add all view based prop injections below.
  switch (type.toLowerCase()){
    case "scrollview":{
      config.orientation = "vertical"
    }
    break;
    case "horizontalscrollview":{
      config.orientation = "horizontal"
    }
    break;
  }
  // Add all view based prop injections above.
  return config;
}


// cS - convert to String
// rWS - remove white spaces
// fromStore methods dont  use invokeOn
// the extract className out of the stored object in the store
module.exports = function(type, config, _getSetType) {
  config = changeKeys(flattenObject(config), type);
  type = generateType(type, config);
  getSetType = (_getSetType == "set")?1:0;
  config.methods = [];
  config.alignment_rules = [];

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
  if (!config.useConstraits && (config.x || config.y || config.w || config.h)) {
    let x = rWS(cS(config.x)) ||  "0";
    let y =  rWS(cS(config.y))|| "0";
    let width = rWS(cS(config.w)) || "0";
    let height = rWS(cS(config.h)) || "0";

    config.methods.push(self_rectFromDictionary(x,y,width,height));
    config.methods.push(this_setFrame());
  }

  if (config.hasOwnProperty("useConstraits") && config.useConstraits && config.hasOwnProperty("expand")){
    config.visibility = config.expand ? (config.visibility ? config.visibility : "visible") : "gone";
  }

  if (config.hasOwnProperty("alignParentBottom") && config.alignParentBottom == "true,-1"){
    config.alignment_rules.push('align_parent_bottom');
  }

  if (config.useConstraits) {
    config.methods.push(this_updateLayoutParams(config));
  }

  if (config.letterSpacing && !config.hasOwnProperty("text")) {
    config.methods.push(this_setLetterSpacing(config.letterSpacing));
  }

  if (config.lineSpacing) {
    config.methods.push(this_setLineSpacing(config.lineSpacing));
  }

  if (config.hasOwnProperty("caretColor")) {
    config.methods.push(UIColor_setColor(config.caretColor));
    config.methods.push(this_setCaretColor());
  }

  // background
  if (config.background || config.gradient || config.backgroundDrawable) {
    if (config.hasOwnProperty("gradient")) {
      var gradient = JSON.parse(config.gradient);
      var gradientType = gradient.type;
      var gradientAngle = gradient.angle;
      var colours = [];

      gradient.values.forEach(color => {
        colours.push(convertColorToRgba(color));
      });

      gradient = JSON.stringify({
        colors: colours,
        type: gradientType,
        angle: gradientAngle
      });
      config.methods.push(this_setGradient(gradient));
    } else if (config.hasOwnProperty("backgroundDrawable")) {
      config.methods.push(UIImage_imageNamed(config.backgroundDrawable));
      config.methods.push(this_setBackgroundImage());
    } else {
      config.methods.push(UIColor_setColor(config.background));
      config.methods.push(this_setBackgroundColor());
    }
  }

  // borderColor, radius and width
  // will work only for uiView and uiLabel
  if (config.cornerRadius || config.borderWidth) {
    config.methods.push(this_layer());

    if (config.cornerRadius) {
      let arg = rWS(cS(config.cornerRadius));
      config.methods.push(_UILabelLayer_setCornerRadius(arg));
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

  if (config.shadow) {
    var shadowValues = config.shadow.split(',');
    var shadowBlur = rWS(cS(shadowValues[2]));
    var shadowSpread = rWS(cS(shadowValues[3]));
    var shadowOpacity = rWS(cS(shadowValues[5]));
    var shadowOffset = {
      x: rWS(cS(shadowValues[0])),
      y: rWS(cS(shadowValues[1]))
    };

    var shadowColor = convertColorToRgba(shadowValues[4]);

    config.methods.push(this_setShadow(config.id, shadowOffset, shadowBlur, shadowSpread, shadowColor, shadowOpacity));
  }

  // make child fullWidth and height of parent
  if (config.fillParent) {
    config.methods.push(this_superview());
    config.methods.push(UIView_bounds());
    config.methods.push(this_setFrame());
  }

  if (config.imageNamed) {
    let id = cS(config.id);
    let placeholder = config.placeHolder || "";
    if (config.imageNamed.endsWith(".gif")){
      config.methods.push(this_setGif(id, config.imageNamed));
    } else {
      config.methods.push(this_setImageURL(id, config.imageNamed, placeholder));
    }
  }
  
  if (config.hasOwnProperty("adjustViewWithKeyboard")) {
      config.methods.push(this_adjustViewWithKeyboard(config.adjustViewWithKeyboard));
  }

  if (config.hasOwnProperty("playGif")){
    if (config.playGif)
      config.methods.push(this_startGif());
    else 
      config.methods.push(this_stopGif());
  }

  if (config.hint) {
    if (config.letterSpacing) {
      var data = JSON.stringify({
        'hint': cS(config.hint),
        'letterSpacing': config.letterSpacing
      });
      config.methods.push(this_setPlaceholderProperties(data));
    } else {
      config.methods.push(this_setPlaceholder(cS(config.hint)));
    }
  }

  if (config.hasOwnProperty("separator")) {
    var _enabled6 = cS(config.separator);
    config.methods.push(this_setSeparator(_enabled6));
  }

  if (config.hasOwnProperty("separatorRepeat")) {
    var _enabled6 = cS(config.separatorRepeat);
    config.methods.push(this_setSeparatorRepeat(_enabled6));
  }

   if (config.translationZ){
     config.methods.push(this_setTranslationZ(cS(config.translationZ)));
   }

  if (config.scrollTo) {
    var data = config.scrollTo.split(",");
    var parsedData = JSON.stringify({"x": data[0], "y": data[1]});
    config.methods.push(this_scrollTo(cS(parsedData)));
  }

  if (config.hasOwnProperty("expand")) {
    config.methods.push(this_setExpand(config.expand?"1":"0"));
  }

  if (config.hasOwnProperty("expandDuration")) {
    config.methods.push(this_setExpandDuration(cS(config.expandDuration)));
  }

  if (config.hasOwnProperty("expandAlpha")) {
    config.methods.push(this_setExpandAlpha(cS(config.expandAlpha)));
  }
  
  //Updated to handle 0 being passed for default alignment
  if (config.hasOwnProperty("textAlignment")) {
      config.methods.push(this_setTextAlignment(rWS(cS(config.textAlignment))));
  }

  if (config.hasOwnProperty("textFromHtml")) {
    //TODO: FIX THIS BRING IT OUTSIDE
      config.methods.push(this_setHTMLText(config.textFromHtml));
  }

  if (config.textColor) {
    config.methods.push(UIColor_setColor(config.textColor));
    config.methods.push(this_setTextColor());
  }

  if (config.hasOwnProperty("fontStyle")) {
    if (config.hasOwnProperty("textSize")) {
        config.methods.push(UIFont_fontWithName(config.fontStyle, config.textSize));
    }else{
      config.methods.push(this_fontWithName(config.fontStyle));
    }
    config.methods.push(this_setFont());
  }

  if (!config.hasOwnProperty("fontStyle") && config.hasOwnProperty("textSize")){
    config.methods.push(UIFont_systemFontOfSize(config.textSize));
    config.methods.push(this_setFont());
  }

  if (config.scrollEnabled){
    var scrollEnabled = cS(config.scrollEnabled);
    config.methods.push(this_scrollEnabled(scrollEnabled));
  }

  if (config.fontFamily) {
    config.methods.push(UIFont_systemFontOfSizeWeight((config.textSize || "14") + "", config.fontFamily || "0.0"));
    config.methods.push(this_setFont());
  }

  if (config.hasOwnProperty("singleLine")) {
    if(!config.singleLine){
      config.methods.push(this_setLineBreakMode("0"));
      config.methods.push(this_setNumberOfLines("0"));
    }
  }

  if (!config.useConstraits && config.visibility) {
    config.methods.push(this_setHidden(config.visibility));
  }

  if (config.hasOwnProperty("clickable")) {
    config.methods.push(this_setUserInteraction(rWS(cS(config.clickable))));
  }

  if (config.translationX) {
    let props = [{
      'id': '' + Math.random().toString(36).substring(2),
      'type': 'translation',
      'runOnRender' : 'true',
      'easing' : 'linear',
      'delay': '0',
      'duration': '1',
      'props' : JSON.stringify([{'to': '' + config.translationX, 'prop':'translationX', 'from':'0'}])
    }];

    config.methods.push(self_animate({'id':''+config.id,'json':JSON.stringify(props)}));
  }

  if (config.translationY) {
    let props = [{
      'id': '' + Math.random().toString(36).substring(2),
      'type': 'translation',
      'runOnRender' : 'true',
      'easing' : 'linear',
      'delay': '0',
      'duration': '1',
      'props' : JSON.stringify([{'to': '' + config.translationY,'prop':'translationY','from':'0'}])
    }];

    config.methods.push(self_animate({'id':''+config.id,'json':JSON.stringify(props)}));
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
    config.methods.push(this_setHTMLText(config.htmlText));
  }

  if (config.hasOwnProperty("bringSubViewToFront")) {
    let viewTag = cS(config.id);
    config.methods.push(this_bringSubViewToFront(viewTag));
  }

  if (config.hasOwnProperty("contentMode")) {
    let contentMode = cS(config.contentMode);
    config.methods.push(this_setContentMode(contentMode));
  }

  if(config.onFocus){
    config.methods.push(this_setOnFocusCallback(config.onFocus));
  }

  if(config.hasOwnProperty("onMerchantViewHeightChange")){
    config.methods.push(this_setOnMerchantViewHeightChangeCallback(config.onMerchantViewHeightChange));
  }

  if (config.hasOwnProperty("pivotX")) {
    var data = {
      "value": config.pivotX,
      "id": config.id
    };
    config.methods.push(self_pivotX(data));
  }

if (config.hasOwnProperty("pivotY")) {
    var data = {
      "value": config.pivotY,
      "id": config.id
    };
    config.methods.push(self_pivotY(data));
  }

  if(config.hasOwnProperty("onItemClick")){
    config.methods.push(this_setOnItemClick(config.onItemClick));
  }


  if (config.statusBarStyle) {
    let enabled = cS(config.statusBarStyle);
      config.methods.push(this_setStatusBarStyle(enabled));
  }

  if (config.hasOwnProperty("enabled")) {
    let enabled = cS(config.enabled);
      config.methods.push(this_setEnabled(enabled));
  }


  if (config.hasOwnProperty("inputTypeI")) {
      let keyboardType = cS(config.inputTypeI);
      config.methods.push(this_setKeyboardType(keyboardType));
  }

  if (config.inputType) {
    let keyboardType = config.inputType;
    if (keyboardType == "numeric" || keyboardType == "numericWithoutSuggestion") {
      config.inputType = 4;
    } else if (keyboardType == "email") {
      config.inputType = 7;
    } else if (keyboardType == "numericPassword") {
      config.inputType = 4;
      config.methods.push(this_setSecureTextEntry("1"));
    } else if (keyboardType == "password") {
      config.inputType = 0;
      config.methods.push(this_setSecureTextEntry("1"));
    } else {
      config.inputType = 0;
    }
    config.methods.push(this_setKeyboardType(cS(config.inputType)));
  }

  if (config.hasOwnProperty("autoCapitalizationType")) {
      let keyboardType = cS(config.autoCapitalizationType);
      config.methods.push(this_setAutoCapitalizationType(keyboardType));
  }

  if (config.hasOwnProperty("autoCorrectionType")) {
    let autoCorrectionType = cS(config.autoCorrectionType);
      config.methods.push(this_setAutoCorrectionType(autoCorrectionType));
  }

  if (config.hasOwnProperty("becomeFirstResponder")) {
      config.methods.push(this_becomeFirstResponder());
  }

  if (config.hasOwnProperty("setOn")) {
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

  if (config.hasOwnProperty("swypeEnabled")) {
    config.methods.push(this_setSwype(config.swypeEnabled));
  }

  if (config.hasOwnProperty("focus")) {
    config.methods.push(this_becomeFirstResponder(cS(config.focus)));
  }

  if (config.pattern) {
    var patStr = cS(config.pattern);
    var patArr = patStr.split(",");
    var patLen = patArr[patArr.length - 1];
    patStr = patArr.slice(0, patArr.length - 1).join(",");

    config.methods.push(this_setRegularExpression(cS(patStr)));
    config.methods.push(this_setTextLengthLimit(cS(patLen)));
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

  if (config.hasOwnProperty('checked')) {
    config.methods.push(this_setOn(config.checked));
  }

  if (config.popupMenu) {
    config.methods.push(self_setPopupMenu(config.popupMenu, config.onMenuItemClick));
  }

  if (config.hasOwnProperty("alpha")) {
    config.methods.push(self_setAlpha(config.alpha));
  }

  if (config.animation) {
    let animProps = {
      viewTag: '' + config.id,
      json: config.animation
    };
    config.methods.push(self_animateNew(animProps));
  }

  if (config.hasOwnProperty("text")) {
    if (config.letterSpacing) {
      config.methods.push(this_setLetterSpacing(cS(config.letterSpacing)));
    }
    config.methods.push(this_setText(cS(config.text)));
  }

  if(config.cursorPosition) {
    config.methods.push(self_setCursorPosition(cS(config.id), cS(config.cursorPosition)));
  }

  if (config.onSwipe && typeof config.onSwipe === "function") {
      config.methods.push(this_setSwipeCallback(callbackMapper.map(config.onSwipe)));
  }

  if (config.hasOwnProperty("closeSwipe")) {
      config.methods.push(this_setCloseSwipe(config.closeSwipe));
  }

  if (config.hasOwnProperty("swypeEnabled")) {
    config.methods.push(this_setEnableSwype(config.swypeEnabled));
  }

  if (config.hasOwnProperty("listData") && config.hasOwnProperty("listItem")) {
    const item = JSON.parse(config.listItem);
    item.itemView = Android.createListData(config.id, item.itemView);
    config.methods.push(this_setupList(config.listData, JSON.stringify(item)));
  }

  if (config.hasOwnProperty("inlineAnimation")) {
    config.methods.push(this_inlineAnimation(config));
  }

  if (config.hasOwnProperty("clipsToBounds")) {
    config.methods.push(this_setClipsToBounds(config.clipsToBounds));
  }

  if(config.hasOwnProperty("cornerRadii")){
    config.methods.push(this_setCornerCurves(config.cornerRadii));
  }

  config.currChildOffset = 0;
  config = transformKeys(config);

  return {config: config, type: type};
};

function self_animateNew(props) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName":"animate:",
    "values": [props]
  };
}

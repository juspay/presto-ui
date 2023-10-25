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
var {flattenObject}  = require("./flattenObject")
var callbackMapper  = require("../common/callbackMapper")

let getSetType = 1;

/**
 * Checks the native set window.__DEVICE_DETAILS.mystique_version
 * and checks if mystique version is greater than the passed version.
 * @param {string} version number to be checked against. If passed empty returns true.
 * @return {bool} true if mystique version is greater than passed version else false. Defaults to true.
 */
function isMystiqueVersionGreaterThan(version) {
  if (window.__DEVICE_DETAILS && window.__DEVICE_DETAILS.mystique_version) {
    var sdkVersion = parseFloat(window.__DEVICE_DETAILS.mystique_version);
    if (sdkVersion>0) {
        return sdkVersion>parseFloat(version)?true:false;
    }
  }
  return false;
}

function makeImageName(name){
  let jpName = 'jp_' +name;
  if(window.juspayAssetConfig
    && window.juspayAssetConfig.images
    && window.juspayAssetConfig.images[jpName])
      return jpName;
  return name;
}

function isURL(str) {
  try{
    var url = new URL(str);
    return str.indexOf(".") != -1;
  } catch (err) {
    return false;
  }
}

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

function self_setCursorPosition(id, position, namespace) {
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

function this_pivotX(value) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setPivotX:",
    "values":[
      {"name": value+"", "type": "s"},
    ]
  }
}

function this_pivotY(value) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setPivotY:",
    "values":[
      {"name": value+"", "type": "s"},
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

function this_setDisableCopy(value){
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setDisableCopy:",
    "values":[
      {"name": (value ? "1" : "0"), type: "i"}
    ]
  }
}

function this_setDisablePaste(value){
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setDisablePaste:",
    "values":[
      {"name": (value ? "1" : "0"), type: "i"}
    ]
  }
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

function this_setAccessibilityHint(tag) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setAccessibilityHint:",
    "values":[
      {"name": tag, type: "s"}
    ]
  }
}

function this_setImportantForAccessibility(tag) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setImportantForAccessibility:",
    "values":[
      {"name": tag, "type" : "s"},
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
  image = makeImageName(image);
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

function this_setZPosition(zIndex) {
  return {
    "return": "false",
    "fromStore": "true",
    "storeKey": "layer" + window.__LAYER_INDEX,
    "invokeOn": "this",
    "methodName": "setZPosition:",
    "values": [{ "name": zIndex, type: "f" }]
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

function getEncodedData(text) {
  var encodedString = text;
  if (isMystiqueVersionGreaterThan("1")) {
    encodedString = btoa(encodeURIComponent(text));
  } else if (isMystiqueVersionGreaterThan("0")) {
    encodedString = btoa(text.replace(/[^\x00-\x7F]/g, ""));
  }
  return encodedString;
}

function this_setHTMLText(text, namespace) {
  return {
    "return": "false",
    "fromStore": "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setHtmlText:",
    "values": [
      { "name": getEncodedData(text)
      , "type": "s"
      , "namespace" : namespace
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
      {"name": size.length>0?size:"14", "type": "f"},
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

function mapToIosFontWeight (weight){
  switch(weight) {
    case "100" : return "-0.600"
    case "200" : return "-0.800"
    case "300" : return "-0.400"
    case "400" : return "0.000"
    case "500" : return "0.230"
    case "600" : return "0.300"
    case "700" : return "0.400"
    case "800" : return "0.450"
    case "900" : return "0.560"
    case "950" : return "0.620"
    default : return "0.000"
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

function this_setAdjustsFontSizeToFitWidth(enabled) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setAdjustsFontSizeToFitWidth:",
    "values":[
      {"name": enabled, "type": "i"}
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

function setCornerRadius(radius) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setMJPCornerRadius:",
    "values":[
      {"name": radius + "", "type": "f"}
    ]
  }
}

function setBorderWidth(width) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setMJPBorderWidth:",
    "values":[
      {"name": width + "",  "type": "f"}
    ]
  }
}

function setBorderColor() {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setMJPBorderColor:",
    "values":[
      {"name": "color" + window.__COLOR_INDEX, "computed": "true", type: "cgcolor"}
    ]
  }
}

function this_setShadow(id, shadowOffset, shadowBlur, shadowSpread, shadowColor, shadowOpacity, namespace) {
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
        "offset": shadowOffset
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

function _UILabelLayer_setMasksToBounds(shouldClipBounds) {
  return {
    "return": "false",
    "fromStore":"true",
    "storeKey":"layer" + window.__LAYER_INDEX,
    "invokeOn": "_UILabelLayer",
    "methodName":"setMJPMasksToBounds:",
    "values":[
      {"name": shouldClipBounds ? "1" : "0", type: "i"}
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

function this_setAccessibilityId(tag) {
  return {
    "return": "false",
    "fromStore": getSetType?"false":"true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName":"setAccessibilityIdentifier:",
    "values":[
      {"name": tag, type: "s"}
    ]
  }
}

function self_getViewFromTag(tag, namespace){
  window.__VIEW_INDEX++;

  return {
    "return": "view" + window.__VIEW_INDEX,
    "invokeOn": "self",
    "methodName":"getViewFromTag:",
    "values":[
      {"name": tag, "type": "s", "namespace" : namespace}
    ]
  }
}

function this_setImageURL(id,url,placeholder, namespace) {
  url = makeImageName(url);
  return {
    "return": "false",
    "invokeOn": "self",
    "storeKey": "view" + window.__VIEW_INDEX,
    "methodName":"setImageWithUrl::::",
    "values":[
      {"name": "" + id, "type": "s", namespace : namespace},
      {"name": url, "type": "s"},
      {"name": placeholder, "type": "s"}
    ]
  };
}

function this_setGif(id, imageName, namespace) {
  imageName = makeImageName(imageName);
  return {
    "return": "false",
    "invokeOn": "self",
    "storeKey": "view" + window.__VIEW_INDEX,
    "methodName": "loadGif:::",
    "values": [{ "name": "" + id, "type": "s", namespace : namespace }, { "name": imageName, "type": "s" }]
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
    "values": [{ "name": encodeURI(listData), type: "s" }, { "name": listItem, type: "s" }]
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

function this_lottieAnimation(config){
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "invokeOn": "this",
    "storeKey": "view" + window.__VIEW_INDEX,
    "methodName": "addLottie:",
    "values": [ { "name": JSON.stringify(config), "type": "s" }]
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

function this_bringSubViewToFront(params, namespace){
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

function this_setPeakHeight(height) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setPeakHeight:",
    "values": [{
      "name": String(height),
      type: "f"
    }]
  };
}

function this_setDraggingEnabled(isEnabled) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setDraggingEnabled:",
    "values": [{
      "name": String(isEnabled),
      type: "s"
    }]
  };
}

function this_setRippleColor() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"UIView",
    "methodName": "setRippleColor:",
    "values": [{
      "name": 'color' + window.__COLOR_INDEX,
      "computed": "true",
      "type": "cgcolor"
    }]
  };
}

function this_setHalfExpandedRatio(ratio) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setHalfExpandedRatio:",
    "values": [{
      "name": String(ratio),
      type: "f"
    }]
  };
}

function this_setSheetState(state) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setSheetState:",
    "values": [{
      "name": String(state),
      type: "i"
    }]
  };
}

function this_disableFeedback(disableFeedback) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType?"this":"MJPView",
    "methodName": "disableFeedback:",
    "values":[
      {"name": disableFeedback, "type": "i"}
    ]
  };
}

function this_loadURL(url) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPWebView",
    "methodName": "loadURL:",
    "values": [{
      "name": url,
      "type": "s"
    }]
  };
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
    case "multiLineEditText":{
      modifiedType = "mJPMultiLineEditText";
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
      if (config.hasOwnProperty("circularLoader") && config.circularLoader && isMystiqueVersionGreaterThan("1.3")) {
        modifiedType = "mJPCircularProgressView";
      } else {
        modifiedType = "mJPActivityIndicator";
      }
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
    case "shimmerFrameLayout": {
      modifiedType = "mJPShimmerFrameLayout";
    }
    break;
    case "bottomSheetLayout": {
      modifiedType = "mJPBottomSheetLayout";
    }
    break;
    case "coordinatorLayout": {
      modifiedType = "mJPRelativeLayout";
    }
    break;
    case "swipeRefreshLayout": {
      modifiedType = "mJPLinearLayout";
    }
    break;
    case "webView":
    {
      modifiedType = "mJPWebView";
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
    case "listview":
      if(config.hasOwnProperty("height") && config.height == "wrap_content"){
        config.height = "match_parent"
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
module.exports = function(type, config, _getSetType, namespace) {
  config = changeKeys(flattenObject(config), type);
  type = generateType(type, config);
  getSetType = (_getSetType == "set")?1:0;
  config.methods = [];
  config.alignment_rules = [];

  // tag set
  if (config.id)  {
    let tag =  rWS(cS(config.id));

    if (!getSetType) {
      config.methods.push(self_getViewFromTag(tag, namespace));
    } else {
      config.methods.push(this_setTag(tag));
    }
  }
  if (config.testID) {
    config.testID = config.testID.replace(/\W|_/g, '_').replace(/_+/g, '_').toLowerCase();
    config.methods.push(this_setAccessibilityId(config.testID));
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

  if (config.hasOwnProperty("letterSpacing")) {
    config.methods.push(this_setLetterSpacing(config.letterSpacing));
  }

  if (config.hasOwnProperty("lineSpacing")) {
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
  if (config.hasOwnProperty("cornerRadius")) {
    let arg = rWS(cS(config.cornerRadius));
    config.methods.push(setCornerRadius(arg));
  }

  if (config.hasOwnProperty("borderWidth")) {
    let arg = rWS(cS(config.borderWidth));
    config.methods.push(setBorderWidth(arg));
  }

  if (config.hasOwnProperty("disableCopy")) {
    config.methods.push(this_setDisableCopy(config.disableCopy));
  }

  if (config.hasOwnProperty("disablePaste")) {
    config.methods.push(this_setDisablePaste(config.disablePaste));
  }

  if (config.hasOwnProperty("borderColor")) {
    config.methods.push(UIColor_setColor(config.borderColor));
    config.methods.push(setBorderColor());
  }

  if (config.debug) {
    config.methods.push(this_layer());
    config.methods.push(setBorderWidth("1"));
  }

  if(config.hasOwnProperty("clipChildren")) { 
    config.methods.push(_UILabelLayer_setMasksToBounds(config.clipChildren));
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

    config.methods.push(_UILabelLayer_setMasksToBounds(false));
    config.methods.push(this_setShadow(config.id, shadowOffset, shadowBlur, shadowSpread, shadowColor, shadowOpacity, namespace));
  }

  // make child fullWidth and height of parent
  if (config.fillParent) {
    config.methods.push(this_superview());
    config.methods.push(UIView_bounds());
    config.methods.push(this_setFrame());
  }

  if(config.hasOwnProperty("gifUrl") && JBridge.getResourcePath && isMystiqueVersionGreaterThan(1.5))
  {
    let id = cS(config.id);
    if (config.gifUrl.endsWith(".gif")){
      var gifName=config.gifUrl.substring(config.gifUrl.lastIndexOf("/")+1);
      JBridge.renewFile(config.gifUrl,gifName);
      config.methods.push(this_setGif(id,JBridge.getResourcePath(gifName), namespace));
      config.methods.push(this_startGif());
    }
  }

  function validString(str){
    return (str && str != "");
  }
  
  if (config.hasOwnProperty("imageUrlWithFallback")) {
    try{
      const id = cS(config.id);
      const strArray = config.imageUrlWithFallback.split(",");
      const imageName = strArray[0];
      const url = strArray[1];
      const preferLocal = strArray[2]=="true";
      if(window.juspayAssetConfig && window.juspayAssetConfig.images){
        const images = window.juspayAssetConfig.images;
        if(validString(imageName) && (images[imageName] || images["jp_"+imageName])){
          const assetUrl = images["jp_"+imageName] || images[imageName] ;

          if(preferLocal || assetUrl === url || (!isURL(url))){
            config.methods.push(this_setImageURL(id, imageName, "", namespace));
          }
          else {
            config.methods.push(this_setImageURL(id, url, imageName, namespace));
          }
        }
        else if (isURL(url)){
          config.methods.push(this_setImageURL(id, url, "", namespace));
        }
      }
      else {
        if(preferLocal && validString(imageName)) {
          config.methods.push(this_setImageURL(id, imageName, "", namespace));
        }
        else{
          config.methods.push(this_setImageURL(id, url, imageName, namespace));
        }
      }
    }
    catch(e){
    }
  }

  if (config.hasOwnProperty("imageNamed")) {
    let id = cS(config.id);
    let placeholder = config.placeHolder || "";
    if (config.imageNamed.endsWith(".gif")){
      config.methods.push(this_setGif(id, config.imageNamed, namespace));
    } else {
      config.methods.push(this_setImageURL(id, config.imageNamed, placeholder, namespace));
    }
  }
  
  if (config.hasOwnProperty("imageWithFallback")) {
    let id = cS(config.id);
    let placeholder = "";

    let imageData = config.imageWithFallback.split(",")
    let imageName = makeImageName(imageData[0])
    let url = imageData[1]

    if (window.juspayAssetConfig && window.juspayAssetConfig.images && window.juspayAssetConfig.images[imageName]) {
      config.methods.push(this_setImageURL(id, imageName, placeholder, namespace));
    } else if (isURL(url)) {
      let urlImageName = url.substr(url.lastIndexOf('/') + 1)
      var filePresent = (typeof JBridge.isFilePresent == "function") && JBridge.isFilePresent(urlImageName) == "1";
      if (filePresent) {
        config.methods.push(this_setImageURL(id, urlImageName, placeholder, namespace));
      } else {
        var callback = callbackMapper.map(function () {
          Android.runInUI({
            id: id,
            imageNamed: urlImageName
          });
        });
        JBridge.renewFile(url, urlImageName, callback);
      }
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
    var hintProps = {
      'hint': cS(config.hint)
    }
    if (config.letterSpacing) {
      var lS = parseFloat(config.letterSpacing);
      if(!isNaN(lS)) {
        hintProps['letterSpacing'] = lS;
      }
    }
    if (config.hintColor) {
      hintProps['hintColor'] = convertColorToRgba(config.hintColor);
    }
    var data = JSON.stringify(hintProps);
    config.methods.push(this_setPlaceholderProperties(data));
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

   if (config.hasOwnProperty("zIndex")){
    config.methods.push(this_layer());
    config.methods.push(this_setZPosition(cS(config.zIndex)));
  }
  if (config.scrollTo) {
    var data = config.scrollTo.split(",");
    var parsedData = JSON.stringify({"x": data[0], "y": data[1]});
    config.methods.push(this_scrollTo(cS(parsedData)));
  }

  if(config.hasOwnProperty("scrollToDescendant")) {
    config.methods.push(this_scrollToTag(config.scrollToDescendant));
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
  
  if(config.hasOwnProperty("accessibilityHint")){
    config.methods.push(this_setAccessibilityHint(config.accessibilityHint));
  }

  if(config.hasOwnProperty("accessibility")){
    config.methods.push(this_setImportantForAccessibility(config.accessibility));
  }

  if (config.hasOwnProperty("textFromHtml")) {
      var modifiedHtmlString = "<span style=\""
      if (config.hasOwnProperty("fontStyle")) {
          modifiedHtmlString += "font-family:"+config.fontStyle+";"
      }
      if (config.hasOwnProperty("textSize")) {
          modifiedHtmlString += "font-size:"+config.textSize+";"
      }
      if (config.hasOwnProperty("textColor")) {
          modifiedHtmlString += "color:"+config.textColor+";"
      }
      modifiedHtmlString +="\">"+config.textFromHtml+"</span>";
      config.methods.push(this_setHTMLText(modifiedHtmlString, namespace));
  }

  if (config.textColor) {
    config.methods.push(UIColor_setColor(config.textColor));
    config.methods.push(this_setTextColor());
  }
  if (config.hasOwnProperty("fontStyle")) {
    if (config.hasOwnProperty("textSize")) {
        config.methods.push(UIFont_fontWithName(config.fontStyle, config.textSize+""));
    } else{
      config.methods.push(this_fontWithName(config.fontStyle));
    }
    config.methods.push(this_setFont());
  } else if (config.hasOwnProperty("textSize")){
    config.methods.push(UIFont_systemFontOfSize(config.textSize+""));
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

  if (config.fontWeight) {
    var prop = config.fontWeight.split(",");
    console.log("inside font Weight", config.fontWeight, prop)
    config.methods.push(UIFont_systemFontOfSizeWeight((config.textSize || "14") + "", mapToIosFontWeight(prop[0]) || "0.0"));
    config.methods.push(this_setFont());
  }

  if (config.hasOwnProperty("singleLine")) {
    if(!config.singleLine){
      config.methods.push(this_setLineBreakMode("0"));
      config.methods.push(this_setNumberOfLines("0"));
    } else {
      config.methods.push(this_setNumberOfLines("1"));
    }
  }


  if (config.hasOwnProperty("ellipsize")) {
    if(config.ellipsize){
      config.methods.push(this_setLineBreakMode("4"));
      config.methods.push(this_setNumberOfLines("1"));
      config.methods.push(this_setAdjustsFontSizeToFitWidth(false));
    } else {
      config.methods.push(this_setLineBreakMode("0"));
      config.methods.push(this_setNumberOfLines("0"));
    }
  }

  if (config.hasOwnProperty("maxLines")) {
    config.methods.push(this_setNumberOfLines(""+config.maxLines));
  }

  if (!config.useConstraits && config.visibility) {
    config.methods.push(this_setHidden(config.visibility));
  }

  if (config.hasOwnProperty("clickable")) {
    config.methods.push(this_setUserInteraction(rWS(cS(config.clickable))));
  }

  if (config.hasOwnProperty("translationX")) {
    let props = [{
      'id': '' + Math.random().toString(36).substring(2),
      'type': 'translation',
      'runOnRender': 'true',
      'easing': 'linear',
      'delay': '0',
      'duration': '1',
      'props': JSON.stringify([{ 'to': '' + config.translationX, 'prop': 'translationX', 'from': '0' }])
    }];

    var inlineAnimation = this_mapToInlineAnimation(config.id, JSON.stringify(props));
    inlineAnimation.animations.forEach(function(method) {
      config.methods.push(method);
    })
  }

  if (config.hasOwnProperty("translationY")) {
    let props = [{
      'id': '' + Math.random().toString(36).substring(2),
      'type': 'translation',
      'runOnRender': 'true',
      'easing': 'linear',
      'delay': '0',
      'duration': '1',
      'props': JSON.stringify([{ 'to': '' + config.translationY, 'prop': 'translationY', 'from': '0' }])
    }];

    var inlineAnimation = this_mapToInlineAnimation(config.id, JSON.stringify(props));
    inlineAnimation.animations.forEach(function(method) {
      config.methods.push(method);
    })
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

  if (config.hasOwnProperty("htmlText")) {
     config.methods.push(this_setHTMLText(config.htmlText, namespace));
  }

  if (config.hasOwnProperty("bringSubViewToFront")) {
    let viewTag = cS(config.id);
    config.methods.push(this_bringSubViewToFront(viewTag, namespace));
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
    if (JBridge.getSessionDetails().indexOf("mystique_version") != -1)
      config.methods.push(this_pivotX(config.pivotX+""));
  }

  if (config.hasOwnProperty("pivotY")) {
    if (JBridge.getSessionDetails().indexOf("mystique_version") != -1)
      config.methods.push(this_pivotY(config.pivotY+""));
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
    if (keyboardType == "numeric" || keyboardType == "numericWithoutSuggestion" || keyboardType == "telephone") {
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
    var inlineAnimation = this_mapToInlineAnimation(config.id, config.animation);
    inlineAnimation.animations.forEach(function(method) {
      config.methods.push(method);
    })
    if (inlineAnimation.callbacks.length > 0) {
      config.onAnimationEnd = function() {
        var firstCallback = inlineAnimation.callbacks.shift();
        if (firstCallback) {
          firstCallback();
        }
      }
    }
  }

  if (config.hasOwnProperty("text")) {
    if (config.letterSpacing) {
      config.methods.push(this_setLetterSpacing(cS(config.letterSpacing)));
    }
    config.methods.push(this_setText(cS(config.text)));
  }

  if(config.cursorPosition) {
    config.methods.push(self_setCursorPosition(cS(config.id), cS(config.cursorPosition), namespace));
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
    const listDataObj = JSON.parse(config.listData)
    for(var i = 0; i < listDataObj.length; i++){
      for(var key in listDataObj[i]){
        if(key.substring(key.length - 6) == "TestId"){
          listDataObj[i][key] = listDataObj[i][key].replaceAll(/[^a-z0-9_]/gi, '_').replace(/_+/g, '_').toLowerCase();
        }
      }
    }
    config.listData = JSON.stringify(listDataObj)
    item.itemView = Android.createListData(config.id, item.itemView);
    config.methods.push(this_setupList(config.listData, JSON.stringify(item)));
  }

  if (config.hasOwnProperty("inlineAnimation")) {
    config.methods.push(this_inlineAnimation(config));
  }

  if (config.hasOwnProperty("lottieAnimation")) {
    try {
          let id = cS(config.id);
          let animationArray = JSON.parse(config['lottieAnimation']);
          let animation = animationArray[animationArray.length - 1];
          if(animation.lottieUrl && JBridge.getResourcePath)
          {
            let lottieUrl = JSON.parse(animation.lottieUrl);
            let strictMode = animation.strictMode ? JSON.parse(animation.strictMode) : false;
            let lottieName = lottieUrl.substr(lottieUrl.lastIndexOf('/') + 1);
            let filePresent = (typeof JBridge.isFilePresent == "function") && JBridge.isFilePresent(lottieName) == "1";
            if (filePresent) {
              animation.lottieUrl = JBridge.getResourcePath(lottieName);
              config.methods.push(this_lottieAnimation(animation));
            } 
            else {
              if(strictMode){
                JBridge.renewFile(lottieUrl, lottieName);
              }
              else{
                var runInUIObj = {
                  id: id,
                  lottieAnimation: config["lottieAnimation"]
                };
                var callback = callbackMapper.map(function () {
                  Android.runInUI(runInUIObj);
                });
                JBridge.renewFile(lottieUrl, lottieName, callback);
              }
            }
        }
        else
        {
          config.methods.push(this_lottieAnimation(animation));
        }
  }
  catch(err){
       console.log(">>>>error in prestoUI lottie Animation:",err);
  }
}


  if (config.hasOwnProperty("clipsToBounds")) {
    config.methods.push(this_setClipsToBounds(config.clipsToBounds));
  }

  if(config.hasOwnProperty("cornerRadii")){
    try {
      var radiiLen = config.cornerRadii.length;
      var newCornerRadii = config.cornerRadii.substr(0, radiiLen-3);
      newCornerRadii +=
        config.cornerRadii[radiiLen-1] + "," + config.cornerRadii[radiiLen-3];
      config.methods.push(this_setCornerCurves(newCornerRadii));
    } catch(e){
      console.log(e);
      config.methods.push(this_setCornerCurves(config.cornerRadii));
    }
  }

  config.methods.push(this_disableFeedback(true));

  if (config.hasOwnProperty("peakHeight")) {
    config.methods.push(this_setPeakHeight(config.peakHeight));
  }
  if (config.hasOwnProperty("draggingEnabled")) {
    config.methods.push(this_setDraggingEnabled(config.draggingEnabled));
  }
  if (config.hasOwnProperty("halfExpandedRatio")) {
    config.methods.push(this_setHalfExpandedRatio(config.halfExpandedRatio));
  }

  if (config.hasOwnProperty("sheetState")) {
    var state = 0;
    var sheetState = config.sheetState;
    if (sheetState == "expanded") {
      state = 3;
    } else if (sheetState == "collapsed") {
      state = 4;
    } else if (sheetState == "hidden") {
      state = 5;
    } else if (sheetState == "halfExpanded") {
      state = 6;
    }
    config.methods.push(this_setSheetState(state));
  }

  if (config.hasOwnProperty("rippleColor")) {
    config.methods.push(UIColor_setColor(config.rippleColor));
    config.methods.push(this_setRippleColor());
  }

  if (config.hasOwnProperty("disableFeedback")) {
    config.methods.push(this_disableFeedback(config.disableFeedback));
  }

  if (config.hasOwnProperty("url")) {
    config.methods.push(this_loadURL(config.url));
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

window.cachedAnimations = {};
window.startCachedAnimation = function(id) {
  var animation = window.cachedAnimations[id];
  if (animation) {
    Android.runInUI({
      id: animation.viewTag,
      inlineAnimation: animation.config
    })
  }
}

function this_scrollToTag(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "mJPScrollView",
    "methodName": "scrollRectToVisible:",
    "values": [{"name": value, "type": "s"}]
  };
}

function this_mapToInlineAnimation(id, config) {

  var animations = [];
  var callbacks = [];

  var parsedConfigs = JSON.parse(config);

  parsedConfigs.forEach(parsedConfig => {

    var innerProps = JSON.parse(parsedConfig.props);
    var configArray = [];
    innerProps.forEach(props => {
      var updatedConfig = {};
      updatedConfig.duration = parsedConfig.duration;
      updatedConfig.name = id;
      if (parsedConfig.repeatCount) {
        updatedConfig.repeatCount = parsedConfig.repeatCount;
      }
      if (parsedConfig.delay) {
        updatedConfig.delay = parsedConfig.delay;
      }
      if (parsedConfig.easing) {
        if (parsedConfig.easing == "ease-in") {
          updatedConfig["interpolator"] = "easein";
        } else if (parsedConfig.easing == "ease-out") {
          updatedConfig["interpolator"] = "easeout";
        } else if (parsedConfig.easing == "ease-in-out") {
          updatedConfig["interpolator"] = "easeinout";
        } else if (parsedConfig.easing == "linear") {
          updatedConfig["interpolator"] = "linear";
        } else if (parsedConfig.easing == "bounce") {
          updatedConfig["interpolator"] = "bounce";
        } else if (parsedConfig.easing.includes("bazier")) {
          var str = parsedConfig.easing;
          updatedConfig["interpolator"] = str.substring(str.lastIndexOf("[") + 1, str.lastIndexOf("]"));
        }
      }
      if (props.prop == "translationX") {
        updatedConfig["fromX"] = props.from;
        updatedConfig["toX"] = props.to;
      } else if (props.prop == "translationY") {
        updatedConfig["fromY"] = props.from;
        updatedConfig["toY"] = props.to;
      } else if (props.prop == "alpha") {
        updatedConfig["fromAlpha"] = props.from;
        updatedConfig["toAlpha"] = props.to;
      } else if (props.prop == "rotation") {
        updatedConfig["fromRotation"] = props.from;
        updatedConfig["toRotation"] = props.to;
      } else if (props.prop == "scaleX") {
        updatedConfig["fromScaleX"] = props.from;
        updatedConfig["toScaleX"] = props.to;
      } else if (props.prop == "scaleY") {
        updatedConfig["fromScaleY"] = props.from;
        updatedConfig["toScaleY"] = props.to;
      }
      updatedConfig["isMapperAnimation"] = true;
      configArray.push(updatedConfig);
    });

    if (parsedConfig.onEnd) {
      callbacks.push(function() {
        window.startCachedAnimation(parsedConfig.onEnd);
      })
    }

    if (parsedConfig.startImmediate || parsedConfig.runOnRender) {
      var currentAnimation = {
        "return": "false",
        "fromStore": getSetType ? "false" : "true",
        "storeKey": "view" + window.__VIEW_INDEX,
        "invokeOn": "this",
        "methodName": "setInlineAnimation:",
        "values": [{ "name": JSON.stringify(configArray), type: "s" }]
      }
      animations.push(currentAnimation);
    }

    window.cachedAnimations[parsedConfig.id] = { viewTag: id, config: JSON.stringify(configArray) };
  });

  return {animations, callbacks};
}
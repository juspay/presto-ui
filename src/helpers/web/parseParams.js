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

Array.prototype.rotate = (function () {
  // save references to array functions to make lookup faster
  var push = Array.prototype.push,
    splice = Array.prototype.splice;

  return function (count) {
    var len = this.length >>> 0, // convert to uint
      count = count >> 0; // convert to int

    // convert count to value in range [0, len)
    count = ((count % len) + len) % len;

    // use splice.call() instead of this.splice() to make function generic
    push.apply(this, splice.call(this, 0, count));
    return this;
  };
})();

function convertHexToRgb(hex) {
  var r = (parseInt(hex.substring(0, 2), 16));
  var g = (parseInt(hex.substring(2, 4), 16));
  var b = (parseInt(hex.substring(4, 6), 16));

  return r + "," + g + "," + b;
}

function flattenObject(ob) {
  var toReturn = {};
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if ((typeof ob[i]) == 'object') {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        if (typeof flatObject[x] !== "undefined")
          toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }

  return toReturn;
}

function parseColors(color) {
  if (color.length < 8)
    return color;

  if (color.indexOf("rgba") !== -1 || color.indexOf("rgb") !== -1)
    return color;

  var alpha = parseInt(color.substring(1, 3), 16);
  alpha = (alpha / 255).toFixed(2);

  var hexColor = color.substring(3, 9);
  var rgbaColor = "rgba(" + convertHexToRgb(hexColor) + "," + alpha + ")";

  return rgbaColor;
}

function parseLayoutProps(type, config, key) {
  const isMobile = window.innerWidth < 700
  if (typeof config[key] == "undefined" || config[key] == null) {
    delete config[key];
    return;
  }

  if (!config.style) {
    config.style = {};
    config.style.transform = "";
    config.animation = {};
    config.animation.transform = "";
  }

  if (!config.attributes)
    config.attributes = {};

  if (!config.style.className)
    config.style.className = "";

  if ((key == "onClick" || key == "onClickEvent")) {
    if(!isMobile){
      config.style.cursor = "pointer";
    }
  }

  if (key == "textSize")
    config.style.fontSize = config.textSize + 'px';
  if (key == 'fontSize')
    config.style.fontSize = config.fontSize + 'px';
  
  if (key == 'url')
    config.attributes.src = config.url
    
  /*if (key == "imageUrl"){
    let imageUrl = config.imageUrl;
    
    if(config.rawData) {
      // Do nothing
    } else {
      let temp = imageUrl.split('.');
      let ext = '';
      if(temp && temp.length > 0)
        ext = temp[temp.length - 1];
      
      let exts = ["jpeg", "jpg", "png", "bmp", "svg", "gif"];
      ext = ext.toLowerCase();

      if(!exts.includes(ext)) {
        imageUrl += '.png';
      }
    }

    config.attributes.src = imageUrl;
  }*/

  if (key == "backgroundColor") {
    config.style.backgroundColor = parseColors(config.backgroundColor);
  }

  if (key == "background") {
    config.style.background = config.background;
  }
  if (key == "backgroundDrawable") {
    config.style["background-image"] = "url('"+config.backgroundDrawable+"')";
  }

  if (key == "color") {
    config.style.color = parseColors(config.color);
  }

  if(key == "position") {
    config.style.position = config.position;
  }

  if(key == "bottomFixed") {
    config.style.bottom = config.bottomFixed;
  }

  if(key == "autofocus"){
    if(config.autofocus){
      config.attributes["autofocus"] = "autofocus";  
    }
  }

  if (key == "cornerRadius") {
    config.style.borderRadius = config.cornerRadius + "px";
  }

  if (key == "alpha") {
    config.style.opacity = config[key];
  }

  if (key == "a_alpha") {
    config.animation.opacity = config[key];
  }

  if (key == "fontFamily") {
    config.style.fontFamily = config.fontFamily;
  }

  if (key == 'typeface') {
    switch(config.typeface){
      case 'normal':
        config.style.fontWeight = 400;
      break;
      case 'bold':
        config.style.fontWeight = 700;
      break;
      case 'italic':
        config.style.fontStyle = 'italic';
      break;
      case 'bold_italic':
        config.style.fontWeight = 700;
        config.style.fontStyle = 'italic';
      break;
      case 'underline':
        config.style.textDecoration = 'underline';
      break;
    }
  }

  if (key == "fontStyle") {
    let match = config.fontStyle.match(/[/-]/);
    let fontName = match ? config.fontStyle.slice(0, match.index) : config.fontStyle;
    config.style.fontFamily = fontName;

    if (!match)
      return;

    let type = config.fontStyle.slice(match.index + 1);
    type = type.replace(/[-/]/g, '');
    type  = type.toLowerCase();

    if (type.indexOf('italic') != -1)
      config.style.fontStyle = 'italic';

    let fontWeight = 0;

    if (type.indexOf('extralight') != -1)
      fontWeight = 200;
    else if (type.indexOf('light') != -1)
      fontWeight = 300;
    else if (type.indexOf('regular') != -1 || type.indexOf('book') != -1)
      fontWeight = 400;
    else if (type.indexOf('semibold') != -1 || type.indexOf('medium') != -1)
      fontWeight = 500;
    else if (type.indexOf('bold') != -1 || type.indexOf('heavy') != -1)
      fontWeight = 700;
    else if (type.indexOf('black') != -1)
      fontWeight = 900;

    if(fontWeight > 0)
      config.style.fontWeight = fontWeight;
  }

  if (key == 'visibility') {
    let visibility = config.visibility;
    if (visibility == 'invisible')
      config.style.visibility = "hidden";
    else if (visibility == 'gone')
      config.style.display = "none";
    else {
      config.style.visibility = '';
    }
  } 

  if (key == 'expand') {
    let visibility = config.expand + '';
    if (visibility == 'true'){
      config.style.visibility = '';
    }
    else
      config.style.display = "none";
  }

  if (key == "stroke") {
    let values = config.stroke.split(",");

    if(values.length == 2)
      config.style.border = values[0] + "px solid " + values[1];
    else if(values.length == 3)
      config.style.border = values[0] + "px " + values[1] + " " + values[2];
  }

  if (key == "strokeTop") {
    let values = config.strokeTop.split(",");
    
    if(values.length == 2)
      config.style.borderTop = values[0] + "px solid " + values[1];
    else if(values.length == 3)
      config.style.borderTop = values[0] + "px " + values[1] + " " + values[2];
  }

  if (key == "strokeRight") {
    let values = config.strokeRight.split(",");
    
    if(values.length == 2)
      config.style.borderRight = values[0] + "px solid " + values[1];
    else if(values.length == 3)
      config.style.borderRight = values[0] + "px " + values[1] + " " + values[2];
  }

  if (key == "strokeBottom") {
    let values = config.strokeBottom.split(",");
    
    if(values.length == 2)
      config.style.borderBottom = values[0] + "px solid " + values[1];
    else if(values.length == 3)
      config.style.borderBottom = values[0] + "px " + values[1] + " " + values[2];
  }

  if (key == "strokeLeft") {
    let values = config.strokeLeft.split(",");
    
    if(values.length == 2)
      config.style.borderLeft = values[0] + "px solid " + values[1];
    else if(values.length == 3)
      config.style.borderLeft = values[0] + "px " + values[1] + " " + values[2];
  }

  if (key == "translationY") {
    config.style.transform += "translateY(" + config[key] + "px) ";
  }

  if (key == "a_translationY") {
    config.animation.transform += "translateY(" + config[key] + "px) ";
  }

  if (key == "translationX") {
    config.style.transform += "translateX(" + config[key] + "px) ";
  }

  if (key == "a_translationX") {
    config.animation.transform += "translateX(" + config[key] + "px) ";
  }

  if (key == "scaleX") {
    config.style.transform += "scaleX(" + config[key] + ") ";
  }

  if (key == "a_scaleX") {
    config.animation.transform += "scaleX(" + config[key] + ") ";
  }

  if (key == "scaleY") {
    config.style.transform += "scaleY(" + config[key] + ") ";
  }

  if (key == "a_scaleY") {
    config.animation.transform += "scaleY(" + config[key] + ") ";
  }

  if (key == "rotation") {
    config.style.transform += "rotate(" + config[key] + "deg) ";
  }

  if (key == "a_rotation") {
    config.animation.transform += "rotate(" + config[key] + "deg) ";
  }

  if (key == "rotationX") {
    config.style.transform += "rotateX(" + config[key] + "deg) ";
  }

  if (key == "a_rotationX") {
    config.animation.transform += "rotateX(" + config[key] + "deg) ";
  }

  if (key == "rotationY") {
    config.style.transform += "rotateY(" + config[key] + "deg) ";
  }

  if (key == "a_rotationY") {
    config.animation.transform += "rotateY(" + config[key] + "deg) ";
  }

  if (key == "translationZ") {
    var v = config[key];
    config.style["-webkit-box-shadow"] = "0 0 "+v.toString()+"px rgba(0,0,0, .3)";
    config.style["-moz-box-shadow"]= "0 0 "+v.toString()+"px rgba(0,0,0, .3)";
    config.style["box-shadow"]=  "0 0 "+v.toString()+"px rgba(0,0,0, .3)";
    
  }

  if (key == "a_duration" && !isNaN(config[key])) {
    config.animation.transition = config[key] + 'ms all';
  }
  
  if (type == "textView" && key == "gravity" && config.gravity) {
    config.style.textAlign = config.gravity;
    if (config.gravity == "center_vertical") {
      config.style["align-items"] = "center";
      config.style.display = "flex";
    } else if (config.gravity == "center_horizontal") {
      config.style.display = "flex";
      config.style["justify-content"] = "center";
    } else if (config.gravity == "center") {
      config.style.display = "flex";
      config.style["align-items"] = "center";
      config.style["justify-content"] = "center";
    }
    else if (config.gravity == "center"){
      config.style.display = "flex";
      config.style["align-items"] = "center";
      config.style["justify-content"] = "center";
    }
  }
  if (type == "linearLayout" && key == "gravity" && config.gravity){
    if (config.margin && config.gravity=="center_vertical"){
      var margin=config.margin.split(",");
      if (config.width == "match_parent"){
         config.style.width="calc(100% - "+(parseInt(margin[0])+parseInt(margin[2])).toString()+"px )";
      }
    }
  }

  if (key == "hint"){
    config.attributes.placeholder = config.hint;
  }

  if (key == "contentEditable" && config.contentEditable){
    config.attributes.contenteditable = true;
  }

  if (key == "id") {
    config.attributes.id = config.id;
  }


  if (key == "gradient") {
    var gradientObj =JSON.parse(config.gradient);
    console.log(gradientObj);
    if (gradientObj.type == "linear") {
      var angle = gradientObj.angle;
      var values = gradientObj.values;
      var colors = values.join(", ");
      config.style["background-image"] = "linear-gradient("+angle+"deg, "+colors+")"
    }
     else {
      var values = gradientObj.values;
      var colors = values.join(", ");
      config.style["background-image"] = "radial-gradient("+colors+")"
     }
  }


  if (key == "inputType") {
    var inputType = "text";
    console.log("input type ", config.inputType, "  ", config.inputTypeI)
    if (config.inputType == "numericPassword" || config.inputType == "password") {
      if(config.inputTypeI == 4 && isMobile){
        inputType = "text";
        config.style["-webkit-text-security"] = "disc";
        config.style["-moz-text-security"] = "disc";
        config.style["text-security"] = "disc";
      } else {
        inputType = "password"
      }
    } else if (config.inputType == "disabled") {
        config.attributes.disabled = 'disabled'
    } else if (config.inputType == "numeric") {
        inputType = "number"
    }
    if (config.separator) {
      inputType = "text"
    }

    config.attributes.type = inputType
  }

  if (key == "rotateImage") {
    if(config.rotateImage){
      config.style["animation-duration"] = "4s";
      config.style["animation-timing-function"] = "linear";
      config.style["animation-delay"] = "0s";
      config.style["animation-iteration-count"] = "infinite";
      config.style["animation-direction"] = "normal";
      config.style["animation-fill-mode"] = "none";
      config.style["animation-play-state"] = "running";
      config.style["animation-name"] = "rotation";

    }
  }

  if (key == "pattern") {
    config.attributes["data-pattern"] = config.pattern;
  }
  if(key == "inputTypeI"){
    if(config.inputTypeI == 4){
      config.attributes["inputmode"] = "numeric";
    }
    
  }

  if (key == "separator") {
    config.attributes["separator"] = config.separator;
  }
  if (key == "separatorRepeat") {
    config.attributes["separatorRepeat"] = config.separatorRepeat;
  }

  if (key == "myAttr") {
    config.attributes["myAttr"] = config.myAttr;
  }

  if (key == "shadow") {
    alert("HEY")
    var shadowValues = config.shadow.split(',');
    var shadowBlur = rWS(cS(shadowValues[2]));
    var shadowSpread = rWS(cS(shadowValues[3]));
    var shadowOpacity = rWS(cS(shadowValues[5]));
    var shadowOffset = {
        x: rWS(cS(shadowValues[0])),
        y: rWS(cS(shadowValues[1]))
      };

    var shadowColor = convertColorToRgba(shadowValues[4]);

    config["style"]["box-shadow"] = parseInt(shadowOffset.x) + "px " + parseInt(shadowOffset.y) + "px " + parseInt(shadowBlur) + "px " + parseInt(shadowSpread) + "px rgba(" + shadowColor.r + ", " +  shadowColor.g + ", " +  shadowColor.b + ", " +  shadowColor.a + ")" ;
  }

  if (key == "lineHeight")
    config.style.lineHeight = config.lineHeight;

  if (key == "objectFit")
    config.style.objectFit = config.objectFit;

  if (key == "clickable") {
    config.style.pointerEvents = config.clickable ? "auto" : "none";
  }
}

function convertColorToRgba(color) {
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
    r: parseInt(rWS(values[0])),
    g: parseInt(rWS(values[1])),
    b: parseInt(rWS(values[2])),
    a: parseFloat(alpha)
  };
}

function convertHexToRgb(hex) {
  var r = (parseInt(hex.substring(0, 2), 16) / 255).toFixed(2);
  var g = (parseInt(hex.substring(2, 4), 16) / 255).toFixed(2);
  var b = (parseInt(hex.substring(4, 6), 16) / 255).toFixed(2);

  return r + "," + g + "," + b;
}

function cS(value) {
  return value ? value + '' : "";
}

function rWS(value) {
  return value.replace(/ /g, '');
}

function setDefaults(type, config) {
  if (type == "linearLayout") {
    config.orientation = config.orientation;
  }
}
function this_inlineAnimation(config) {
  var con=modifyTranslation(config);
  var element = document.getElementById(con.name);
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
  return (animationArray);
}
module.exports = function (type, config, getSetType) {
  config = flattenObject(config);
  setDefaults(type, config);

  var keys = Object.keys(config);

  for (var i = 0; i < keys.length; i++) {
    parseLayoutProps(type, config, keys[i]);
  }

  config.transition = "0ms all";

  if (config.style.transform == "") {
    delete config.style.transform;
  }
  if (config.hasOwnProperty("inlineAnimation")) {
    this_inlineAnimation(config);
  }

  return config;
}
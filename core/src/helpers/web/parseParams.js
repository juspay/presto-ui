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
};

function parseColors(color) {
  if (color.length < 8)
    return color;

  var alpha = parseInt(color.substring(1, 3), 16);
  alpha = (alpha / 255).toFixed(2);

  var hexColor = color.substring(3, 9);
  var rgbaColor = "rgba(" + convertHexToRgb(hexColor) + "," + alpha + ")";

  return rgbaColor;
}

function parseLayoutProps(type, config, key) {
  const value = config[key];
  if (key == "className") {
    config.attributes.class = config.className;
  }

  else if (key == "onClick") {
    if (typeof config.onClick !== "function") {
      config.style.cursor = "";
      config.style.userSelect = "";
    }
    else {
      config.style.cursor = "pointer";
      config.style.userSelect = "none";
    }
  }

  else if (key == "textSize")
    config.style.fontSize = config.textSize + "px";

  else if (key == "imageUrl")
    config.attributes.src = config.imageUrl + ".png";

  else if (key == "background") {
    config.style.background = parseColors(config.background);
  }

  else if (key == "color") {
    config.style.color = parseColors(config.color);
  }

  else if (key == "cornerRadius") {
    config.style.borderRadius = config.cornerRadius + "px";
  }

  else if (key == "alpha" && value != "") {
    config.style.opacity = config[key];
  }

  else if (key == "fontStyle") {
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

    if (type.indexOf('extralight') != -1)
      type = '200';
    else if (type.indexOf('light') != -1)
      type = '300';
    else if (type.indexOf('regular') != -1 || type.indexOf('book') != -1)
      type = '400';
    else if (type.indexOf('semibold') != -1 || type.indexOf('medium') != -1)
      type = '500';
    else if (type.indexOf('bold') != -1 || type.indexOf('heavy') != -1)
      type = '700';
    else if (type.indexOf('black') != -1)
      type = '900';

    config.style.fontWeight = type;
  }

  else if (key == "stroke") {
    let values = config.stroke.split(",");
    config.style.border = values[0] + "px solid" + values[1];
  }

  else if (key == "translationY" && value != "") {
    config.style.transform += "translateY(" + config[key] + "px) ";
  }

  else if (key == "translationX" && value != "") {
    config.style.transform += "translateX(" + config[key] + "px) ";
  }

  else if (key == "scaleX" && value != "") {
    config.style.transform += "scaleX(" + config[key] + ") ";
  }

  else if (key == "scaleY" && value != "") {
    config.style.transform += "scaleY(" + config[key] + ") ";
  }

  else if (key == "rotation" && value != "") {
    config.style.transform += "rotate(" + config[key] + "deg) ";
  }

  else if (key == "rotationX" && value != "") {
    config.style.transform += "rotateX(" + config[key] + "deg) ";
  }

  else if (key == "rotationY" && value != "") {
    config.style.transform += "rotateY(" + config[key] + "deg) ";
  }

  else if (key == "translationZ" && value != "") {
    config.style["z-index"] = config[key];
  }

  else if (type == "textView" && key == "gravity" && config.gravity) {
    config.style.textAlign = config.gravity;
  }

  else if ((type == "textView" || type == "editText" || type == "imageView") && key == "padding") {
    const tokens = config.padding.split(',');
    config.style.padding = [tokens[1], tokens[2], tokens[3], tokens[0]].join('px ') + "px";
  }

  else if (key == "inputType") {
    config.attributes.type = config.inputType;
  }

  else if (key == "hint") {
    config.attributes.placeholder = config.hint;
  }

  else if (key == "text") {
    config.attributes.value = config.text;
  }

  else if (key == "id") {
    config.attributes.id = config.id;
  }

  else if (key == "lineHeight")
    config.style.lineHeight = config.lineHeight + "px";
}

module.exports = function (type, config) {
  const css = config.css;
  delete config.css;
  delete config.attributes;
  delete config.style;

  config = flattenObject(config);

  config.style = {
    transform: "",
    transition: ""
  };

  config.attributes = {};

  for (let key in config) {
    if (key !== "style" && key !== "attributes")
      parseLayoutProps(type, config, key);
  }

  if (config.duration || config.delay) {
    config.style.transitionProperty = "transform, opacity";
    config.style.transitionDuration = (config.duration || 0) + "ms";
    config.style.transitionDelay = (config.delay || 0) + "ms";
  }

  if (css) {
    for (const key in css) {
      if (css.hasOwnProperty(key)) {
        config.style[key] = css[key];
      }
    }
  }

  return config;
}
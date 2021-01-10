

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

function rWS(value) {
  return value.replace(/ /g, '');
}

function cS(value) {
  return value ? value + '' : "";
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



module.exports = {
    parseColors
}


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


module.exports = {
    parseColors
}
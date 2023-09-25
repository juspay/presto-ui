function hexToAlpha(hex) {
    if (hex.startsWith("#")) {
      hex = hex.slice(1);
    }
    var decimal = parseInt(hex, 16);
    var alpha = decimal / 255;
    alpha = Math.round(alpha * 100) / 100;
    return alpha;
  }

function alphaToHex(alpha) {
    if(alpha < 0){
        alpha = 0.0;
    } else if(alpha > 1){
        alpha = 1.0;
    }
    var decimal = Math.round(alpha * 255);
    var hex = decimal.toString(16).toUpperCase();
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
}

function isURL(str) {
  try{
    var url = new URL(str);
    return str.indexOf(".") != -1;
  } catch (err) {
    return false;
  }
}

module.exports = {
    hexToAlpha,
    alphaToHex,
    isURL
  }
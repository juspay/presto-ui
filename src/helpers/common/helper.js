module.exports.convertHexToRgb = (hex) => {
    var r = (parseInt(hex.substring(0,2), 16)/255).toFixed(2);
    var g = (parseInt(hex.substring(2,4), 16)/255).toFixed(2);
    var b = (parseInt(hex.substring(4,6), 16)/255).toFixed(2);
  
    return r + "," + g + "," + b;
}

module.exports.isURL= (str) => {
    try {
      var url = new URL(str);
      return true;
    } catch(err) {
      return false;
    }
  }
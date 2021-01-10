

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

// function modifyTranslation(config){
//   var x = config.x || "0";
//   var y = config.y || "0";
//   var animationArray = JSON.parse(config.inlineAnimation);
//   var animationArray = animationArray.map(function(a){
//     if(a.hasOwnProperty("fromX")){
//       a.fromX = parseInt(a.fromX) + parseInt(x) + '';
//       if(!a.hasOwnProperty("toX")){
//         a.toX = 0 + parseInt(x) + '';
//       }
//     }
//     if(a.hasOwnProperty("toX")){
//       a.toX = parseInt(a.toX) + parseInt(x) + '';
//     }
//     if(a.hasOwnProperty("fromY")){
//       a.fromY = parseInt(a.fromY) + parseInt(y) + '';
//       if(!a.hasOwnProperty("toY")){
//         a.toY = 0 + parseInt(y) + '';
//       }
//     }
//     if(a.hasOwnProperty("toY")){
//       a.toY = parseInt(a.toY) + parseInt(y) + '';
//     }
//     return a;
//   })
//   return (animationArray);
// }

module.exports = {
    parseColors,
    rWS, 
    cS, 
    convertColorToRgba
}
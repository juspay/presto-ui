const {hexToAlpha,alphaToHex} = require("../../utils");

function getId(config){
    return config.id || config.__id;
}

function addAlphaToColor(color, alpha) {
    if(!color) return color;
    if(color.length >= 8) {
        var colorValue = color.slice(3);
        var alphaInColor = hexToAlpha(color.slice(1,3));
        var finalAlpha = alphaToHex(alpha * alphaInColor);
        return color[0] + finalAlpha + colorValue
    }else {
        var colorValue = color.slice(1);
        var alphaHex = alphaToHex(alpha);
        return color[0] + alphaHex + colorValue
    }
}

function parseColor(color, setterName) {
    if (!setterName)
    setterName = 'set_colorInt';
    return setterName + '=android.graphics.Color->parseColor:s_' + color + ';';
}

function insertionSort(arr, key, fun) {
    if(!fun) fun = (a,b) => b<a;
    let max = key;
    let tmp = max;
    // debugger;
    for (let i = 0; i < arr.length; i++) {
        console.log("gebin here",fun(arr[i],max));
        if(fun(arr[i],max)){
            tmp = arr[i];
            arr[i] = max;
            max = tmp;
        }
    }
    arr.push(max);
    return arr;
}
module.exports = {getId, addAlphaToColor, parseColor,insertionSort}
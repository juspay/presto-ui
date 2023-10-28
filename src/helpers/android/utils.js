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


function insertionSort(arr, key, fun) {
    if(!fun) fun = (a,b) => b<a;
    let max = key;
    let tmp = max;
    for (let i = 0; i < arr.length; i++) {
        if(fun(arr[i],max)){
            tmp = arr[i];
            arr[i] = max;
            max = tmp;
        }
    }
    arr.push(max);
    return arr;
}
module.exports = {getId, addAlphaToColor,insertionSort}
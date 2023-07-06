function getId(config){
    return config.id || config.__id;
}

function addAlphaToColor(color, alpha) {
    if(!color) return color;
    if(color.length >= 8) {
        var alphaInColor = parseInt("0x"+(color.slice(1,3))) / 100;
        var finalAlpha = (alpha * alphaInColor * 100).toString(16);
        return color[0] + finalAlpha + colorValue
    }else {
        var colorValue = color.slice(1);
        var alphaHex = (alpha * 100).toString(16);
        return color[0] + alphaHex + colorValue
    }
}

module.exports = {getId, addAlphaToColor}
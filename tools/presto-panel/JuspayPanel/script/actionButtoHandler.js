@import "script.js"

function copyPropertiesOfSubLayers (currentLayer, newLayer) {

    layers = [];
    newLayers = [];
    currentLayer.iterate(function(layer) {
        layers.push(layer);
    });

    newLayer.iterate(function(layer){
        newLayers.push(layer);
    });

    for (var i = 0 ; i < layers.length; i++) {
       [DUIPropsMapper setPropertiesOfLayer:layers[i].id to:newLayers[i].id];
       if(layers[i].isGroup) {
          copyPropertiesOfSubLayers(layers[i], newLayers[i]);
       }
    }
}

var createBGLayer = function(groupLayer) {
  if(groupLayer.isGroup) {
    //  groupLayer.adjustToFit();
     var groupFrame = groupLayer.frame;
     groupFrame.x = 0;
     groupFrame.y = 0;
     removeBGLayer(groupLayer);

     var bgLayer = groupLayer.newShape({frame:groupFrame, name: "bg"});
     bgLayer.style.borders = [];
    //  bgLayer.style.fills = [];
     bgLayer.moveToBack();
  } else {
     // doc._object.showMessage('Background layer is not applicable for this selection');
  }
}

var getBGLayer = function(groupLayer) {
  if(groupLayer.isGroup) {
    var bgLayer = null;
    groupLayer.iterate(function(layer) {
        if(layer.sketchObject.name() == "bg") {
            bgLayer = layer;
        }
    });
  }
  return bgLayer;
}

var removeBGLayer = function(groupLayer) {

    if(groupLayer.isGroup) {
      var bgLayer = getBGLayer(groupLayer);
      if(bgLayer) {
          bgLayer.remove();
      }
    } else {
      // doc._object.showMessage('Background layer is not applicable for this selection');
    }
}

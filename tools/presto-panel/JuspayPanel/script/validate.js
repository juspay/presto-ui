@import "align.js"
@import "orientation.js"
@import "script.js"

function validate (sketchObject) {
    log('reached validate ');

    orientation(sketchObject, 'get');

    var layerClass = sketchObject.class();

    if (layerClass == "MSLayerGroup") {
        var allLayers = sketchObject.containedLayers();
        // log(sketchObject.containedLayers());
        // log(allLayers);
        for (var i = 1; i < allLayers.count(); i++ ) {
            layer = allLayers[i];
            align(layer, 'get');
        }
    }

}

function validateFeedback (key) {
    var data = getFeedback(key);
    
    var old = convertNSArrayToJSArray(data.old);
    var current = convertNSArrayToJSArray(data.current);

    var remove = old.filter(function(obj) { return current.indexOf(obj) == -1; });
    
    for (var i = 0; i < remove.length; i++) {
        removeProperty(remove[i].objectID(), key);
    }
}

@import "script.js"

function orientation(sketchObject, type) {
    log("reached orientation");
    var loffset = 0;
    var toffset = 0;
    var currChildren = [];
    var sketchObject;
    var layer;
    var parentFrame;

    parentFrame = sketchObject.frame();

    var layerClass = sketchObject.class();

    var layerId = sketchObject.objectID();
    var  paddingTop, paddingBottom;

    // log("+++++++++++ setting orientation properties ++++++++");
    // log('layerId: '+layerId+' type: '+type+' class: '+layerClass);

    if (type == 'get') {
        try {
            type = getProperty(layerId, 'orientation');
        } catch(e) {
            log('Validate orientation: failed fetching type');
        }
    } else {
        setProperty(layerId, 'orientation', type);
    }

    try {
        // Default values to 0 in case, map of properties is defined for `layerId`
        // but the map has no value for paddingLeft / paddingRight
        paddingLeft = getProperty(layerId, 'paddingLeft') || 0;
        paddingRight = getProperty(layerId, 'paddingRight') || 0;
        paddingTop = getProperty(layerId, 'paddingTop') || 0;
        paddingBottom = getProperty(layerId, 'paddingBottom') || 0;
    } catch (e) {
        paddingLeft = 0;
        paddingRight = 0;
        paddingBottom = 0;
        paddingTop = 0;
        log ("------- orientation: error in getting padding--------");
        // log(sketchObject.name());
    }

    loffset = paddingLeft;
    toffset = paddingTop;

    var verticalOffset = paddingTop + paddingBottom;
    var horizontalOffset = paddingLeft + paddingRight;

    var parentH = parentFrame.height() + paddingTop - paddingBottom;
    var parentW = parentFrame.width() + paddingLeft - paddingRight;

    var weightSum = 0;
    var weightList = [];
    var marginList = [];
    var align = [];

    if (layerClass == "MSLayerGroup") {
        var allLayers = sketchObject.containedLayers();

        for (var i = 0; i < allLayers.count(); i++ ) {
            layer = allLayers[i];
            // log(layer.name());
            if (layer.name().toUpperCase() != "BG") {
                currChildren.push(layer);
                var w = 0;
                var margin = [];
                try {
                    w = getProperty(layer.objectID(), 'weight') || 0;
                } catch (e) {
                    log ("------ orientation: error in getting weight.");
                }
                try {
                    // If getProperty returns undefined, set a defaault value of 0
                    margin.push(getProperty(layer.objectID(), 'marginLeft') || 0);
                    margin.push(getProperty(layer.objectID(), 'marginTop') || 0);
                    margin.push(getProperty(layer.objectID(), 'marginRight') || 0);
                    margin.push(getProperty(layer.objectID(), 'marginBottom') || 0);

                } catch (e) {
                    margin = [0,0,0,0];
                    log ("------- orientation: error in getting margin --------");
                    // log(sketchObject.name());
                }

                try {
                    align.push(getProperty(layer.objectID(), 'align'));
                    // log('getProp: '+layer.objectID()+'aType: '+type);
                } catch (e) {
                    log ('Validate: Failed fetching align type');
                }

                weightSum += w;
                weightList.push(w);
                marginList.push(margin);
            }
        }
    }

    for (var j = currChildren.length - 1; j >=  0; j--) {

        sketchObject = currChildren[j];

        var frame = sketchObject.frame();

        verticalOffset += frame.height() + marginList[j][1] + marginList[j][3];
        horizontalOffset += frame.width() + marginList[j][0] + marginList[j][2];
    }

    var remainingH = parentW - horizontalOffset;
    var remainingV = parentH - verticalOffset;

    for (var j = currChildren.length - 1 ; j >=  0; j--) {

        sketchObject = currChildren[j];

        var frame = sketchObject.frame();

        if (type == "vertical" || type == "centerHorizontal") {
            if (align[j] != "bottom") {
                if (align[j])
                    removeProperty(sketchObject.objectID(), 'align');
                frame.y = toffset + marginList[j][1];
            }
            frame.height = frame.height() + remainingV * weightList[j] / weightSum;
            toffset += frame.height() + marginList[j][1] + marginList[j][3];
            if (type == "centerHorizontal") {
                var frameW = frame.width();

                frame.x = parentW/2 - frameW/2;
            } else {
                frame.x = loffset + marginList[j][0];
            }
        } else {
            if (align[j] != "right"){
                if (align[j])
                    removeProperty(sketchObject.objectID(), 'align');
                frame.x = loffset + marginList[j][0];
            }
            frame.width = frame.width() + remainingH * weightList[j] / weightSum;
            loffset += frame.width() + marginList[j][0] + marginList[j][2];
            if (type == "horizontal") {
                frame.y = toffset + marginList[j][1];
            } else if (type == "centerVertical") {
                var frameH = frame.height();

                frame.y = parentH/2  - frameH/2;
            }
        }
    }
}

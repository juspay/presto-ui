@import "script.js";

function align(currSelection, type){
    var parentGroup = currSelection.parentGroup();

    var currId = currSelection.objectID();
    var frame = currSelection.frame();

    var margin = [];

    if (type == 'get') {
        try {
            type = getProperty(currId, 'align');
        } catch (e) {
            log ('Validate: Failed fetching align type');
        }
    } else {
        setProperty(currId, 'align', type);
    }

    var layerId = parentGroup.objectID();

    var paddingTop, paddingBottom, paddingLeft, paddingRight;

    try {
        paddingTop = getProperty(layerId, 'paddingTop') || 0;
        paddingBottom = getProperty(layerId, 'paddingBottom') || 0;
        paddingLeft = getProperty(layerId, 'paddingLeft') || 0;
        paddingRight = getProperty(layerId, 'paddingRight') || 0;

        margin.push(getProperty(currId, 'marginLeft') || 0);
        margin.push(getProperty(currId, 'marginTop') || 0);
        margin.push(getProperty(currId, 'marginRight') || 0);
        margin.push(getProperty(currId, 'marginBottom') || 0);
    } catch (e) {
        margin = [0,0,0,0];
        paddingTop = 0;
        paddingBottom = 0;
        paddingLeft = 0;
        paddingRight = 0;
    }

    var parentFrame = parentGroup.frame();

    var parentH = parentFrame.height();
    var parentW = parentFrame.width();
    var frameH = frame.height();
    var frameW = frame.width();

    if (type == "matchParent") {
        frame.width = parentW - paddingLeft - paddingRight;
        frame.x = paddingLeft;
    }

    if (type == "center") {
        frame.x = parentW/2  - frameW/2;
        frame.y = parentH/2  - frameH/2;
    }

    if (type == "left") {
        frame.x = paddingLeft + margin[0];
    }

    if (type == "right") {
        frame.x = parentW - frameW - paddingRight - margin[2];
    }

    if (type == "bottom") {
        frame.y = parentH - frameH - paddingBottom - margin[3];
    }

    if (type == "top") {
        frame.y = paddingTop + margin[1];
    }

}

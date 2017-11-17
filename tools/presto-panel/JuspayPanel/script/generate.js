@import "script.js"
@import "validate.js"

// TODO: Rewrite the whole code to make it more readable and understandable.
function createHorizontalLayout(sortedLayersByX, index, padding, parentH) {
    var threshold = 50;
    var sizeThreshold = 100;
    var tolerance = 5;
    //  top  right   bottom  left
    //  0    1       2       3
    var marginList = [];
    var centerVertical = true;

    // For checking wether to apply weights or not
    // var weightFlag = false;
    var weightFlag = true;
    var largestElements = [];

    // What is the purpose of this condition??
    // Maybe make flag true by default.
    // if (padding[3] == padding[1]) {
    //  weightFlag = true;
        //  }

    var frame, frameNext;

    frame = sortedLayersByX[index].frame();

    // left margin of 1st element not needed.
    // Its taken care by padding.
    var margin = [0, 0, 0, 0];
    // top
    margin[0] = frame.y() - padding[0];

    // bottom
    margin[2] = parentH - frame.y() - frame.height() - padding[2];

    marginList.push(margin);

    var larger = 0;
    var largest = frame.width();
    largestElements.push(sortedLayersByX[index]);

    // if (margin[0] != margin[2])
    if (Math.abs(margin[0] - margin[2]) > 1)
        centerVertical = false;

    // First pass to calculate everything.
    for (var i = index; i < sortedLayersByX.length - 1; i++ ) {

        var margin = [0, 0, 0, 0];


        frame = sortedLayersByX[i].frame();
        frameNext = sortedLayersByX[i+1].frame();

        // top
        margin[0] = frameNext.y() - padding[0];

        // bottom
        margin[2] = parentH - frameNext.y() - frameNext.height() - padding[2];

        //left
        margin[3] = frameNext.x() - frame.x() - frame.width();

        marginList.push(margin);

        // if (margin[0] != margin[2])
        if (Math.abs(margin[0] - margin[2]) > 1)
            centerVertical = false;


        if(frameNext.width() == largest) {
            largestElements.push(sortedLayersByX[i+1]);
        } else if (frameNext.width() > largest) {
            larger = largest;
            largest = frameNext.width();

            largestElements = [];
            largestElements.push(sortedLayersByX[i+1]);
            weightFlag = true;
        } else if (larger == 0) {
            larger = frameNext.width();
        }

        if (margin[3] > threshold) {
            weightFlag = false;
        }

    }

    if (larger != 0 && largest - larger < sizeThreshold) {
        weightFlag = false;
    }

    ///////////////////////////////////////////////////////////////////////////////
    // TODO: Store largest and 2nd largest.
    //      If (| largest - larger | >= someThreshold)
    //          then apply weight 1 to largest
    //  # Value of someThreshold?
    //      -- Around 200?
    //
    //
    //      If multiple elements are of same size and belong to largest category
    //      -- Apply weight 1 to all of them.
    //  # Should we give a tollerance of 4-5px while considering equal size?
    //
    //
    //      @ Need to maintain a list of largest elements...
    //      @ Single variable for larger
    //      @ expandableFlag Maybe??
    //
    //
    ////////////////////////////////////////////////////////////////////////////////
    // Check if equal weights should be applied to all or not.
    // for (var i = 1; i<marginCheck.length; i++) {
    //    if (marginCheck[i-1] >= threshold) {
    //        weightFlag = false;
    //        break;
    //    }
    // }

    if (marginList.length == 1) {
        weightFlag = false;
    }

    for (var i = 0; i < marginList.length; i++ ) {
        var layer = sortedLayersByX[i+index];
        // Margin right is always zero.
        setProperty(layer.objectID(), "marginRight", marginList[i][1]);
        // TODO: If margin left is more than a threshold then make it a variable space
        if (i != marginList.length - 1 || marginList[i][3] <= threshold) {
            removeProperty(layer.objectID(), "align");
            setProperty(layer.objectID(), "marginLeft", marginList[i][3]);
        } else {
            setProperty(layer.objectID(), "align", "right");
            setProperty(layer.objectID(), "marginLeft", 0);
        }

        if (!centerVertical) {
            setProperty(layer.objectID(), "marginTop", marginList[i][0]);
            // setProperty(layer.objectID(), "marginBottom", marginList[i][2]);
        } else {
            setProperty(layer.objectID(), "marginTop", 0);
        }
        setProperty(layer.objectID(), "marginBottom", 0);
        /*
        if (marginList[i][0] + padding[0] ==  marginList[i][2] + padding[2]) {
            setProperty(layer.objectID(), "marginBottom", marginList[i][2]);
            setProperty(layer.objectID(), "height", "match_parent");
        } else {
            removeProperty(layer.objectID(), "height");
        }
        */
        removeProperty(layer.objectID(), "width");

        removeProperty(layer.objectID(), "weight");
    }

    if (marginList.length == 1 && checkIfNotImage(sortLayersByX[0+index])) {
            setProperty(sortedLayersByX[0+index].objectID(), "width", "match_parent")
    }

    // TODO: handle the image case properly.
    if (weightFlag) {
        for (var i = 0; i < largestElements.length; i++) {
            if (checkIfNotImage(largestElements[i]))
                setProperty(largestElements[i].objectID(), "weight", 1);
        }
    }

    return centerVertical;
}

function createVerticalLayout(sortedLayersByY, index, padding, parentW) {
    var threshold = 50;
    //  top  right   bottom  left
    //  0    1       2       3
    var marginList = [];
    var centerHorizontal = true;

    var frame, frameNext;

    frame = sortedLayersByY[index].frame();

    // top margin of 1st element not needed.
    // Its taken care by padding.
    var margin = [0, 0, 0, 0];
    // left
    margin[3] = frame.x() - padding[3];

    // right
    margin[1] = parentW - frame.x() - frame.width() - padding[1];

    marginList.push(margin);

    // if (margin[3] != margin[1])
    if (Math.abs(margin[3] - margin[1]) > 1)
        centerHorizontal = false;


    for (var i = index; i < sortedLayersByY.length - 1; i++ ) {

        var margin = [0, 0, 0, 0];


        frame = sortedLayersByY[i].frame();
        frameNext = sortedLayersByY[i+1].frame();

        // top
        margin[0] = frameNext.y() - frame.y() - frame.height();

        // right
        margin[1] = parentW - frameNext.x() - frameNext.width() - padding[1];

        // left
        margin[3] = frameNext.x() - padding[3];

        marginList.push(margin);

        // if (margin[3] != margin[1])
        if (Math.abs(margin[3] - margin[1]) > 1)
            centerHorizontal = false;
    }

    // log (" centerHorizontal not handled in DUI");
    // centerHorizontal = false;

    for (var i = 0; i < marginList.length; i++ ) {
        var layer = sortedLayersByY[i+index];
        // TODO: If margin top is more than a threshold then make it a variable space
        if (i != marginList.length - 1 || marginList[i][0] <= threshold) {
            removeProperty(layer.objectID(), "align");
            setProperty(layer.objectID(), "marginTop", marginList[i][0]);
        } else {
            setProperty(layer.objectID(), "align", "bottom");
            setProperty(layer.objectID(), "marginTop", 0);
        }
        // Margin bottom is always zero.
        setProperty(layer.objectID(), "marginBottom", marginList[i][2]);

        if (!centerHorizontal) {
            // setProperty(layer.objectID(), "marginRight", marginList[i][1]);
            setProperty(layer.objectID(), "marginLeft", marginList[i][3]);
        } else {
            setProperty(layer.objectID(), "marginLeft", 0);
        }
        setProperty(layer.objectID(), "marginRight", 0);

        // Previously I was checking class of element before applying match_parent
        if (Math.abs(marginList[i][1] + padding[1] - marginList[i][3] - padding[3]) <= 1 && checkIfNotImage(layer)) {
            setProperty(layer.objectID(), "marginRight", marginList[i][1]);
            setProperty(layer.objectID(), "marginLeft", marginList[i][3]);
            setProperty(layer.objectID(), "width", "match_parent");
        } else {
            removeProperty(layer.objectID(), "width");
        }
        try {
            var height = getProperty(layer.objectID(), "height");
            if (height == "match_parent")
                removeProperty(layer.objectID(), "height");
        } catch(e) {
            removeProperty(layer.objectID(), "height");
        }
    }

    if (marginList.length == 1 && checkIfNotImage(sortLayersByY[0+index])) {
        setProperty(sortedLayersByY[0+index].objectID(), "height", "match_parent");
    }

    return centerHorizontal;
}

function createDefaultLayout(sortedLayers, index, padding, parentGroup) {
    var threshold = 60;
    var parentFrame = parentGroup.frame();

    var parentH = parentFrame.height();
    var parentW = parentFrame.width();

    var frame = sortedLayers[index].frame();

    var centerVertical = true;
    var centerHorizontal = true;

    // top margin of 1st element not needed.
    // Its taken care by padding.
    var margin = [0, 0, 0, 0];
    // left
    var left = frame.x();

    // right
    var right = parentW - frame.x() - frame.width();

    if (Math.abs(left - right) > 1)
        centerHorizontal = false;

    // top
    var top = frame.y();

    // bottom
    var bottom = parentH - frame.y() - frame.height();

    // if (margin[0] != margin[2])
    if (Math.abs(top - bottom) > 1)
        centerVertical = false;

    if (Math.abs(top - bottom) < threshold) {
        if (top > bottom)
            marginTop = top - bottom;
        else
            marginBottom = bottom - top;

        centerVertical = true;
    }

    if (Math.abs(left - right) < threshold) {
        if (left > bottom)
            marginLeft = left - bottom;
        else
            marginRight = right - bottom;

        centerHorizontal = true;
    }

    if (centerVertical && centerHorizontal)
        return "center";
    else if (centerVertical)
        return "centerVertical";
    else if (centerHorizontal)
        return "centerHorizontal";
    else
        return "horizontal";
}


function autoCreateGroup(allLayers) {
    log ("right now I am not handling autoGroupCreate.")
    if (debug)
        showAlert("Grouping Problem", "Please check the Grouping");
}

function getScrollType(parentGroup) {
    log ("Inside get Scroll Type");
    var allLayers = parentGroup.containedLayers();
    var layer = allLayers[1];

    var layerFrame = layer.frame();
    var parentFrame = parentGroup.frame();

    setProperty(layer.objectID(), "width", "match_parent");
    setProperty(layer.objectID(), "height", "match_parent");

    if (layerFrame.height() > parentFrame.height() && layerFrame.width() <= parentFrame.width()) {
        return "vertical";
    } else if (layerFrame.width() > parentFrame.width() && layerFrame.height() <= parentFrame.height()) {
        return "horizontal";
    } else {
        return "vertical";
    }
}

function checkBG (layer, parentGroup) {
    log("Inside Check BG");
    var c1 = layer.name().toUpperCase() == "BG";
    var c2 = layer.name().toUpperCase() == "BGLAYER";

    var layerFrame = layer.frame();
    var parentFrame = parentGroup.frame();

    // TODO: c3 = check if size of layer is same as parentGroup..
    var c3 = layerFrame.height() == parentFrame.height() && layerFrame.width() == parentFrame.width();
    if (c1 || c2) {
        if (!c3 && debug)
            showAlert("Invalid Background", "Background of group \""+parentGroup.name()+"\" is not correct");
    }
    log ("Checking mask");
    var mask = layer.hasClippingMask();

    if (mask) {
        log("Mask is true, calling getScrollType");
        var scroll = getScrollType(parentGroup);
        // var scroll = "vertical";
        // case of Vertical Scroll
        if (scroll == "vertical") {
            setProperty(parentGroup.objectID(), "scrollView", "vertical");
            setProperty(parentGroup.objectID(), "weight", 1);
            setProperty(parentGroup.objectID(), "height", "0");
        }

        // case of Horizontal Scroll
        if (scroll == "horizontal") {
            setProperty(parentGroup.objectID(), "scrollView", "horizontal");
            // setProperty(parentGroup.objectID(), "weight", 1);
            // setProperty(parentGroup.objectID(), "width", "0");
        }
    }

    return (c1 || c2 || mask);

}

function checkIfNotImage(layer) {
    var image;
    try {
        image = getProperty(layer.objectID(), "imageSource")
    } catch (e) {
        return true;
    }
    if (image)
        return false;
    return true;
}

function setChildren(parentId, sortedLayers, index) {
    if (index) {
        setProperty(parentId, "bg", sortedLayers[0].objectID());
    } else {
        removeProperty(parentId, "bg");
    }
    var children = [];
    for (var i=index; i < sortedLayers.length; i++) {
        children.push(sortedLayers[i].objectID());
    }

    setProperty(parentId, "children", children);
}


function autoGenerate(parentGroup) {
    var layer, layerNext;
    var index;

    var parentFrame = parentGroup.frame();

    var parentH = parentFrame.height();
    var parentW = parentFrame.width();

    var layerClass = parentGroup.class();
    // log("YFGHJK");
    // log(parentGroup.name());

    var parentId = parentGroup.objectID();


    var hOrient = [];
    var vOrient = [];

    var frameX = [];
    var frameY = [];


    var allLayers = parentGroup.containedLayers();

    var h = true;
    var v = true;

    var frame, frameNext;

    var sortedLayersByX = sortLayersByX(allLayers);

    var sortedLayersByY = sortLayersByY(allLayers);

    log ("Going to check BG");
    index = checkBG(sortedLayersByX[0], parentGroup) ? 1 : 0;
    // log("####$$$$$$$$$$$$$$$$$$$$###########")
    // log(checkBG(sortedLayersByX[0]));
    // log(index);
    layer = sortedLayersByX[index];
    frame = layer.frame();
    var maxY = frame.y() + frame.height();

    if (layer.class() == "MSLayerGroup") {
        // recursively call autoGenerate
        autoGenerate(layer);
    }

    frame = sortedLayersByY[index].frame();
    var maxX = frame.x() + frame.width();


    for (var i = index; i < sortedLayersByX.length - 1; i++ ) {
        layer = sortedLayersByX[i];
        layerNext = sortedLayersByX[i+1];

        if (layerNext.class() == "MSLayerGroup") {
            // log("recursively call autoGenerate");
            // log(layerNext.name());
            autoGenerate(layerNext);
        }

        frame = layer.frame();
        frameNext = layerNext.frame();

        if (frameNext.x() < frame.x() + frame.width()) {
            h = false;
        }

        if (frameNext.y() + frameNext.height() > maxY)
            maxY = frameNext.y() + frameNext.height();

    }

    for (var i = index; i < sortedLayersByY.length - 1; i++ ) {
        layer = sortedLayersByY[i];
        layerNext = sortedLayersByY[i+1];

        frame = layer.frame();
        frameNext = layerNext.frame();

        if (frameNext.y() < frame.y() + frame.height()) {
            v = false;
        }

        if (frameNext.x() + frameNext.width() > maxX)
            maxX = frameNext.x() + frameNext.width();
    }


    //  top  right   bottom  left
    //  0    1       2       3
    var padding = [0,0,0,0];

    padding[0] = sortedLayersByY[index].frame().y();    // top
    padding[1] = parentW - maxX;                        // right
    padding[2] = parentH - maxY;                        // bottom
    padding[3] = sortedLayersByX[index].frame().x();    // left

    setProperty(parentGroup.objectID(), "paddingTop", padding[0]);
    setProperty(parentGroup.objectID(), "paddingRight", padding[1]);
    setProperty(parentGroup.objectID(), "paddingBottom", padding[2]);
    setProperty(parentGroup.objectID(), "paddingLeft", padding[3]);


    if (h && !v) {
        // case of horizontal layout
        var centerVertical = createHorizontalLayout(sortedLayersByX, index, padding, parentH);
        if (centerVertical)
            setProperty(parentId, 'orientation', "centerVertical");
        else
            setProperty(parentId, 'orientation', "horizontal");

        setChildren(parentId, sortedLayersByX, index);

    } else if (!h && v) {
        // case of vertical layout
        var centerHorizontal = createVerticalLayout(sortedLayersByY, index, padding, parentW);
        if (centerHorizontal)
            setProperty(parentId, 'orientation', "centerHorizontal");
        else
            setProperty(parentId, 'orientation', "vertical");

        setChildren(parentId, sortedLayersByY, index);

    } else if (!h && !v) {
        // create group.
        autoCreateGroup(allLayers);
    } else {
        // TODO: need to optimize this condition.
        // Case of both horizontal and vertical layout (Taking Horizontal by default)
        // var centerHorizontal = createVerticalLayout(sortedLayersByY, index, padding, parentW);

        // Failsafe case, it shoud never hit this case
        if (sortLayersByX[index+1] || sortLayersByY[index+1]) {
            showAlert("ERROR 007", "Please inform developers of JuspayPanel Plugin about this Error.");
            return;
        }

        var layout = createDefaultLayout(sortedLayersByY, index, padding, parentGroup);
        // var centerVertical = createHorizontalLayout(sortedLayersByX, index, padding, parentH);
        // if (centerVertical && centerHorizontal)
        //  setProperty(parentId, 'orientation', "center");
        // else if (centerVertical)
        if (layout == "center") {
            setProperty(parentId, 'align', "center");
            setProperty(parentId, 'orientation', "vertical");
        }
        else {
            setProperty(parentId, 'orientation', layout);
            removeProperty(parentId, 'align');
        }

        setChildren(parentId, sortedLayersByY, index);
    }


	log("NOT going to call validate");
    // validate(parentGroup);
}

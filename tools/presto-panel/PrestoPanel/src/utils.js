@import "script.js";
@import "align.js";
@import "orientation.js";

function getName (layer) {
    var name = layer.name();
    // Remove all special characters and spaces.
    name = name.toLowerCase().replace(/[^\w]/gi, '');

    return name;
}

function getId (layer) {
    return layer.objectID() + "";
}

function getClass (layer) {
    return layer.class() + "";
}

function hasDups(array) {
    var newArray = [];
    array.map(function(element) {
        if (newArray.indexOf(element) === -1) {
            newArray.push(element);
        }
    });
    return newArray.length != array.length;
}
function removeDups (arr) {
    var arrObj = {};
    arr.map(function(currentLayer) {
        var currentLayerId = getId(currentLayer);
        arrObj[currentLayerId] = currentLayer;
    });
    var uniqueArr = [];
    Object.keys(arr).map(function(currentLayerId) {
        uniqueArr.push(arrObj[currentLayerId]);
    });
    return uniqueArr;
}

function convertNSArrayToJSArray (nsArray) {
    var jsArray = [];
    if (nsArray && nsArray.length && nsArray.length > 0) {;
        for (var i = 0; i < nsArray.length; i++) {
            jsArray = jsArray.concat(nsArray[i]);
        }
    }
    return jsArray;
}

function numberOfInstances (arr, key) {
    return arr.filter(function(elem) { return elem == key; }).length;
}

function getMode(array) {
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

function removeDups(array) {
    var newArray = [];
    array.map(function(element) {
        if (newArray.indexOf(element) === -1) {
            newArray.push(element);
        }
    });
    return newArray;
}

function getFlattenedChildren (layer, getSymbols) {
    var allChildren = [];
    if (layer.class() == "MSSymbolInstance" && getSymbols) {
        var allLayers = layer.symbolMaster().layers();
        for (var j = 0; j < allLayers.length; j++) {
            allChildren = allChildren.concat(getFlattenedChildren(allLayers[j], getSymbols));
        }
        return removeDups(allChildren);
    }

    var directChildren = layer.containedLayers();
    allChildren = allChildren.concat(layer);
    if (directChildren != null && directChildren.count()) {
        for (var i = 0; i < directChildren.count(); i++) {
            allChildren = allChildren.concat(getFlattenedChildren(directChildren[i], getSymbols));
        }
    }
    return allChildren;
}

function hasChildrenOfClass (layer, classname) {
    var children = getFlattenedChildren(layer, true);
    var onlyChildren = children.map(getId).filter(function(currentChildId) { return currentChildId != getId(layer); });
    children = children.filter(function(currentChild) { return onlyChildren.indexOf(getId(currentChild)) != -1; });
    return children.map(getClass).indexOf(classname) != -1;
}

function hasDirectChildrenOfClass (layer, classname) {
    var children = layer.containedLayers();
    return (children != null && children.count() != null && children.count() > 0 && convertNSArrayToJSArray(children).map(getClass).indexOf(classname) != -1);
}

function getSelection(context) {
    if (context.action) {
        var document = getDocument(context);
        var selection = document.selectedLayers().containedLayers();
        return convertNSArrayToJSArray(selection);
    }
    return convertNSArrayToJSArray(context.selection);
}

// ------General Helpers--------
// get all pages except the symbol page
function getPages(document) {
    return convertNSArrayToJSArray(document.pages());
}

function getPagesNoSymbols(document) {
    return getPages.filter(function(currentPage) {
        return getName(currentPage) != "symbols";
    });
}

function getPageById(document, pageId) {
    return getPages(document).find(function(currentPage) {
        return getId(currentPage) == pageId;
    });
}

function getPageFromArtboardId(document, artboardId) {
    return getPages(document).find(function(currentPage) {
        var allArtboards = convertNSArrayToJSArray(getArtboardsOnPageId(document, getId(currentPage)));
        return allArtboards.find(function(currentArtboard){
            return getId(currentArtboard) == artboardId;
        });
    });
}

//---------
function getArtboardsOnPageId(document, pageId) {
    return convertNSArrayToJSArray(getPageById(document, pageId).artboards());
}

function getArtboardById (document, artboardId) {
    var currentPage = getPageFromArtboardId(document, artboardId);
    return getArtboardsOnPageId(document, getId(currentPage)).find(function(currentArtboard) {
        return getId(currentArtboard) == artboardId;
    });
}

//------------
function getLayersOnArtboardId(document, artboardId) {
    var artboardObj = getArtboardById(document, artboardId);
    return convertNSArrayToJSArray(artboardObj.layers());
}

function getFlattenedLayersOnArtboardId(document, artboardId, getSymbols) {
    var flattenedLayers = [];
    var layers = convertNSArrayToJSArray(getArtboardById(document, artboardId).layers());
    layers.map(function(currentLayer){
        flattenedLayers = flattenedLayers.concat(getFlattenedChildren(currentLayer, getSymbols));
    });
    return removeDups(flattenedLayers);
}

function getAllLayersFlattened(document, getSymbols) {
    var pages = getPages(document);
    var artboards = [], layers = [], allLayers = [];
    pages.map(function(currentPage) {
        artboards = artboards.concat(convertNSArrayToJSArray(getArtboardsOnPageId(document, getId(currentPage))));
    });
    artboards.map(function(currentArtboard) {
        layers = layers.concat(getLayersOnArtboardId(document, getId(currentArtboard)));
    });
    layers.map(function(currentLayer) {
        allLayers = allLayers.concat(getFlattenedChildren(currentLayer, getSymbols));
    });
    return removeDups(allLayers);
}

function getDirectChildren(currentLayer) {
    if (currentLayer && currentLayer.layers) {
        return convertNSArrayToJSArray(currentLayer.layers());
    }
    return [];
}

function getLayerByLayerId(document, layerId, getSymbols) {
    return getAllLayersFlattened(document, getSymbols ? getSymbols : false).find(function(currentLayer){
        return getId(currentLayer) == layerId;
    });
}

function getLayersByClassName(document, classname, getSymbols) {
    return getAllLayersFlattened(document, getSymbols).filter(function(currentLayer){
        return getClass(currentLayer) == classname;
    });
}

// -------------

function getAllSymbolMasters(document) {
    var symbolsPage = getPages(document).find(function(currentPage) {
        return getName(currentPage) == "symbols";
    });
    return getArtboardsOnPageId(document, getId(symbolsPage));
}

function getAllUsedSymbols(document) {
    return getAllSymbolMasters(document).filter(function(currentSymbol) {
        return currentSymbol.hasInstances();
    });
}

// --------------

function getEmptyGroups(document) {
    var layerGroups = getLayersByClassName(document, "MSLayerGroup");
    return layerGroups.filter(function(currentLayer) {
        return !currentLayer.layers().count();
    });
}

function getSingleGroups(document) {
    return getLayersByClassName(document, "MSLayerGroup").filter(function(currentLayer) {
        return currentLayer.layers().count() == 1;
    });
}

//-----------------

function checkIfNotImage(layer) {
    var image;
    try {
        image = getProperty(layer.objectID(), "imageSource");
    } catch (e) {
        return true;
    }
    if (image)
        return false;
    return true;
}

//----------------

//TODO check if safe to ungroup - https://github.com/Ashung/Automate-Sketch/blob/master/automate-sketch.sketchplugin/Contents/Sketch/Layer/Remove_Redundant_Groups.cocoascript#L71 
function flattenSingleGroup(document, layer) {
    var child = layer.layers().firstObject();
    if (getClass(child) == "MSLayerGroup") {
        layer.setName(layer.name() + "_" + child.name());
        child.ungroup();
    } else {
        child.setName(layer.name() + "_" + child.name());
        layer.ungroup();
    }
}

function exportLayers(document, layers){
    var exportRootPath = document.fileURL().URLByDeletingLastPathComponent().path() + "/assets/";
    layers.map(function(currentLayer, index) {
        var newExportFormat = [[MSExportFormat formatWithScale:3.0 name:currentLayer.name() fileFormat:"png"]];
        var rect = [currentLayer absoluteInfluenceRect];
        var exportFileName = getName(currentLayer) + index;
        var exportFileURL = exportRootPath + exportFileName + ".png";

        var exportFormat = [[MSExportFormat alloc] init];

        var exportRequest = [MSExportRequest exportRequestFromExportFormat:exportFormat layer:currentLayer inRect:rect useIDForName: false];

        exportRequest.setScale(3.0)

        [document saveExportRequest:exportRequest toFile:exportFileURL];
        setProperty(getId(currentLayer), "imageSource", exportFileName);
    });
}

var inThreshold = function(value) {
    return (value > 0) && (value < 5);
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function ascendingLayersByFrame(a, b, prop) {
    switch (prop) {
    case "X": return a.frame().x() - b.frame().x();
    case "Y": return a.frame().y() - b.frame().y();
    case "XEnd": return (a.frame().x() + a.frame().width()) - (b.frame().x() + b.frame().width());
    case "YEnd": return (a.frame().y() + a.frame().height()) - (b.frame().y() + b.frame().height());
    };
};

function sortLayersByFrame(layers, prop) {
    var newLayers = layers.slice(0);
    newLayers.sort(function(a, b) {
        return ascendingLayersByFrame(a, b, prop);
    });
    return newLayers;
};

var notExactlyEqual = function(value) {
    return value > -5 && value < 5 && value != 0;
};

function getMisalign(layers, prop) {
    // log (layers)
    var propVals = layers.map(function(curr) {
        switch (prop) {
        case "x": return curr.frame().x();
        case "y": return curr.frame().y();
        case "width": return curr.frame().width();
        case "height": return curr.frame().height();
        default: return 0;
        }
    });
    var mode = getMode(propVals);
    return layers.filter(function(curr) {
        switch (prop) {
        case "x": return curr.frame().x() - mode < 5 && mode != curr.frame().x();
        case "y": return curr.frame().y() - mode < 5 && mode != curr.frame().y();
        case "height": return curr.frame().height() - mode < 5 && mode != curr.frame().height();
        case "width": return curr.frame().width() - mode < 5 && mode != curr.frame().width();
        default: return 0;
        }
    });

}

function getBg(group) {
    var directChildren = getDirectChildren(group);
    if (directChildren.length == 0) {
        //empty group
        return null;
    }
    if (directChildren.length == 1) {
        //single child, check if single layer is a rectangle to make sure
        var child = directChildren[0];
        var grandChildren = getDirectChildren(child);
        if (grandChildren.length == 1 && getClass(grandChildren[0]) == "MSRectangleShape") {
            return child;
        }
        return null;
    }
    var bgLayer = directChildren[0];
    var fullSize = (bgLayer.frame().width() == group.frame().width()) && (bgLayer.frame().height() == group.frame().height());
    var artboard = group.parentArtboard();
    var artboardSize = (bgLayer.frame().width() == artboard.frame().width() && bgLayer.frame().height() == artboard.frame().height());
    var bgName = (getName(bgLayer) == "bg" || getName(bgLayer) == "bglayer" || getName(bgLayer) == "background");
    return (fullSize || artboardSize || bgName) ? bgLayer : null;
}

function createBg(group) {
    if (getClass(group) == "MSLayerGroup" && !getBg(group)) {
        var groupFrame = {
            x: 0,
            y: 0,
            width: group.frame().width(),
            height: group.frame().height()
        };

        var rect = MSRectangleShape.alloc().init();
        rect.frame = MSRect.rectWithRect(NSMakeRect(groupFrame.x, groupFrame.y, groupFrame.width, groupFrame.height));
        var bgLayer = MSShapeGroup.shapeWithPath(rect);
        bgLayer.setName("bg");
        bgLayer.fills = ['#ffffff'];
        group.insertLayer_atIndex(bgLayer, 0);
    }
}

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

function getTextAlignment (layer) {
    var textAlign = "left";
    if (layer && layer.textAlignment()) {
        switch(layer.textAlignment()) {
        case 0:
            textAlign = "left";
            break;
        case 1:
            textAlign = "right";
            break;
        case 2:
            textAlign = "center";
            break;
        case 3:
            textAlign = "justify";
            break;
        default:
            textAlign = "center";
        }
    }
    return textAlign;
}

function getCSS (layer) {
    var css = {};
    if (layer && layer.CSSAttributes()) {
        var cssAttrib = convertNSArrayToJSArray(layer.CSSAttributes());
        cssAttrib.forEach(function(currentProp, ind) {
            if (ind != 0) {
                var rule = currentProp.replace(";", "");
                rule = rule.split(":");
                var prop = rule[0].replace('\"').trim();
                var value = rule[1].replace('\"').trim();
                css[prop] = value;
            }
        });
    }
    return css;
}

function getTextProps (layer) {
    var props = {};
    if (layer && getClass(layer) && getClass(layer) == "MSTextLayer") {
        var textColor = layer.textColor();
        var textRGBA = {
            r: textColor.red(),
            g: textColor.green(),
            b: textColor.blue(),
            a: textColor.alpha()
        };
        var css = getCSS(layer);
        props = {
            textRGBA: textRGBA,
            text: encodeURIComponent(layer.stringValue()),
            fontSize: layer.fontSize(),
            textAlign: getTextAlignment(layer)
        };
        Object.keys(css).forEach(function(key) {
            props[key] = css[key];
        });
    }
    return props;
}

function checkIcon (layer) {
    var isBitmap = layer.class() == "MSBitmapLayer";
    var isValidClass = layer.class() == "MSShapeGroup" || layer.class() == "MSLayerGroup";
    var isValidShapeGroup = layer.class() == "MSShapeGroup" && (layer.containedLayers().count() > 1 || (layer.containedLayers().count() == 0 && hasDirectChildrenOfClass(layer, "MSShapePathLayer")));

    var isValidLayerGroup = layer.class() == "MSLayerGroup" && !hasChildrenOfClass(layer, "MSTextLayer") && !hasDirectChildrenOfClass(layer, "MSLayerGroup");

    if (isBitmap || (isValidClass && layer.containedLayers() && (isValidLayerGroup || isValidShapeGroup))) {
        return true;
    }
    return false;
};

function validate (sketchObject) {
    orientation(sketchObject, 'get');

    var layerClass = sketchObject.class();

    if (layerClass == "MSLayerGroup") {
        var allLayers = sketchObject.containedLayers();
        for (var i = 1; i < allLayers.count(); i++ ) {
            layer = allLayers[i];
            align(layer, 'get');
        }
    }
}

function getSelectionProps (context) {
    var props = {};
    return getSelection(context).map(function(currentLayer) {
        props = getPropertiesForId(getId(currentLayer)) || {};
        props.id = getId(currentLayer);
        props.name = getName(currentLayer);
        return props;
    });
};

@import "script.js"

function getName (layer) {
    var name = layer.name();
    // Remove all special characters and spaces.
    name = name.toLowerCase().replace(/[^\w]/gi, '');

    return name;
}

function getId (layer) {
    return layer.objectID() + ""
}

function getClass (layer) {
    return layer.class() + ""
}

function convertNSArrayToJSArray (nsArray) {
    var jsArray = []
    if (nsArray && nsArray.length && nsArray.length > 0) {
        for (var i = 0; i < nsArray.length; i++) {
            jsArray = jsArray.concat(nsArray[i])
        }
    }
    return jsArray
}

function numberOfInstances (arr, key) {
    return arr.filter(function(elem) { return elem == key }).length
}

function removeDups(array) {
    var newArray = [];
    array.map(function(element) {
        if (newArray.indexOf(element) === -1) {
            newArray.push(element);
        }
    });
    return newArray
}

function getFlattenedChildren (layer) {
    var allChildren = []
    if (layer.class() == "MSSymbolInstance") {
        var allLayers = layer.symbolMaster().layers()
        for (var j = 0; j < allLayers.length; j++) {
            allChildren = allChildren.concat(getFlattenedChildren(allLayers[j]))
        }
        return allChildren
    }

    var directChildren = layer.containedLayers()
    allChildren = allChildren.concat(layer)
    if (directChildren != null && directChildren.count()) {
        for (var i = 0; i < directChildren.count(); i++) {
            allChildren = allChildren.concat(getFlattenedChildren(directChildren[i]))
        }
    }
    return allChildren
}

function hasChildrenOfClass (layer, classname) {
    var children = getFlattenedChildren(layer)
    var onlyChildren = children.map(getId).filter(function(currentChildId) { return currentChildId != getId(layer) })
    children = children.filter(function(currentChild) { return onlyChildren.indexOf(getId(currentChild)) != -1 })
    return children.map(getClass).indexOf(classname) != -1
}

function hasDirectChildrenOfClass (layer, classname) {
    var children = layer.containedLayers()
    return (children != null && children.count() != null && children.count() > 0 && convertNSArrayToJSArray(children).map(getClass).indexOf(classname) != -1)
}

function getSelection(context) {
    var sketch = context.api();
    var app = new sketch.Application(context);
    var doc = new sketch.Document(context.actionContext.document, app);
    return doc.selectedLayers;
}

function exportLayers(document, layers){
    var exportRootPath = document.fileURL().URLByDeletingLastPathComponent().path() + "/assets/"
    layers.map(function(currentLayer, index) {
        var newExportFormat = [[MSExportFormat formatWithScale:3.0 name:currentLayer.name() fileFormat:"png"]];
        var rect = [currentLayer absoluteInfluenceRect];
        var exportFileName = getName(currentLayer) + index;
        var exportFileURL = exportRootPath + exportFileName + ".png";

        var exportFormat = [[MSExportFormat alloc] init];

        var exportRequest = [MSExportRequest exportRequestFromExportFormat:exportFormat layer:currentLayer inRect:rect useIDForName: false];

        exportRequest.setScale(3.0)

        [document saveExportRequest:exportRequest toFile: exportFileURL]
        setProperty(getId(currentLayer), "imageSource", exportFileName)
    })
}


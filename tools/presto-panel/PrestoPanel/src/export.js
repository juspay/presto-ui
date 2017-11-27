@import "script.js";
@import "bitmap.js";
@import "utils.js";
@import "validate.js";

var setTextStyles = function (document) {
    var pages = getPages(document);
    var allArtboards = [];
    pages.forEach(function(currentPage) {
        allArtboards = allArtboards.concat(getArtboardsOnPageId(document, getId(currentPage)));
    });
    var textLayers = [];
    allArtboards.forEach(function(currentArtboard) {
        var flattenedLayers = getFlattenedLayersOnArtboardId(document, getId(currentArtboard), false);
        var textLayersOnArtboard = flattenedLayers.filter(function(currentLayer) {
            return getClass(currentLayer) == "MSTextLayer";
        });
        textLayers = textLayers.concat(textLayersOnArtboard);
    });
    textLayers.forEach(function(currentLayer) {
        var currentProps = getTextProps(currentLayer);
        Object.keys(currentProps).forEach(function(key) {
            setProperty(getId(currentLayer), key, currentProps[key]);
        });
    });
};

// This function is set to be called when the action for DocumentSaved is fired.
// By default the mapping file is created in the same location as the sketch file
// with the same name, only that `.json` is appended to the name.
var exportStyles = function (context) {
    // Dont export file on autosave.
    if (context.actionContext.autosaved == "1") {
        log("Not exporting files on autosave");
        return;
    }

    var documentBeingSaved = context.actionContext.document;
    var saveLocation = [documentBeingSaved fileURL];
    var savePath = saveLocation.path() + "";
    var fileManager = [NSFileManager defaultManager];
    var sketchFileName = savePath.substring(savePath.lastIndexOf("/") + 1, savePath.length);

    setTextStyles(documentBeingSaved);
    try {
        saveLocation = [[saveLocation URLByDeletingLastPathComponent] path];
        var jsonlocation = savePath + '.json';
        var properties = [DUIPropsMapper getAllPropertiesAsJSON];

        [fileManager createFileAtPath: jsonlocation  contents: properties attributes: null];
        [DEUApi zipBundle: saveLocation fromFile: sketchFileName];
        log("Exported all styles for document to: " + saveLocation);
    } catch (e) {
        log("Failed to write the properties of the file to disk at save time");
        log(e);
    }
};

var exportImages = function(context) {
    var document = getDocument(context);
    var sliceLayers = convertNSArrayToJSArray(document.allExportableLayers());

    var imageLayers = sliceLayers.map(function(currentLayer) {
        if (getClass(currentLayer) == "MSSymbolInstance") {
            return currentLayer.symbolMaster();
        }
        return currentLayer;
    });

    imageLayers = removeDups(imageLayers);

    DUIPropsFeedback.setFeedback({key: "imageSource", value: imageLayers});

    exportLayers(document, imageLayers);
    var exportString = imageLayers.length + " icon(s) exported!";

    validateFeedback("imageSource");
    document.showMessage(exportString);
};

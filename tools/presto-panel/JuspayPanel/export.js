@import "JuspayPanelUI.framework/JuspayPanelUI.js"
@import "script/script.js"
@import "script/bitmap.js"
@import "script/utils.js"
@import "script/validate.js"

/*
 Get all symbols from document and for all text inputs, save the font details.
 */
var dumpSymbolTextStyles = function (context) {
    var traverseLayer = function traverseLayer(allLayers) {
        // The last element of a group is the group itself.
        for (var k = 0; k < allLayers.count()-1; k++) {
            var layer = allLayers[k];
            var layerClass = layer.class();
            if(layerClass == MSTextLayer) {

                var textColor = [layer textColor];
                var text = encodeURIComponent(layer.stringValue());
                var fontSize = [layer fontSize];

                var font = [layer font];
                font = [font familyName];
                var textAlign = [layer textAlignment];

                switch (textAlign) {
                    case 0:
                        setProperty(layer.objectID(), "textAlign", "left");
                        break;
                    case 1:
                        setProperty(layer.objectID(), "textAlign", "right");
                        break;
                    case 2:
                        setProperty(layer.objectID(), "textAlign", "center");
                        break;
                    case 3:
                        setProperty(layer.objectID(), "textAlign", "justify");
                        break;
                    default:
                        setProperty(layer.objectID(), "textAlign", "center");
                }

                var css = layer.CSSAttributes();


                for (var c = 1; c < css.length; c++) {
                    var str = css[c].replace(";", "").split(":");
                    // log(str[0].trim()+" "+str[1].trim());
                    setProperty(layer.objectID(), str[0].trim(), str[1].trim());
                }

                var r = [textColor red];
                var g = [textColor green];
                var b = [textColor blue];
                var a = [textColor alpha];

                setProperty(layer.objectID(), 'font', font);
                setProperty(layer.objectID(), 'fontSize', fontSize);
                setProperty(layer.objectID(), 'textRGBA', {r: r, g:g, b:b, a:a});
                setProperty(layer.objectID(), 'text', text);

                // setProperty(layer.objectID(), 'css', css);

            } else if (layerClass == "MSLayerGroup") {
                traverseLayer(layer.children());
            } else if (layerClass == "MSShapeGroup") {
                // log("SORRY! I don't know yet, how to handle shape group");
            } else if (layerClass == "MSSymbolInstance") {
                // log("will deal with you later");
                // log([layer symbolID]);
            }
        }
    };

    var sketch = context.api();

    var app = new sketch.Application(context);
    var doc = new sketch.Document(context.actionContext.document, app);

    var allSymbols = doc._object.documentData().allSymbols();


    for (var i = 0; i < allSymbols.count(); i++) {
        var currentSymbol = allSymbols[i];
        // var currentClass = [currentSymbol class];
        var allLayers = currentSymbol.layers();

        for (var j = 0; j < allLayers.count(); j++) {
            var layer = allLayers[j];
            var layerClass = layer.class();

            if (layerClass == "MSLayerGroup") {

                traverseLayer(layer.children());

            } else if (layerClass == "MSShapeGroup") {
                // log("SORRY! I don't know yet, how to handle shape group");
            } else if (layerClass == "MSSymbolInstance") {
                // log("will deal with you later");
                // log([layer symbolID]);
            }
        }
    }
}

/*
 Traverse the view tree and for all text inputs, save the font details.
 */
var dumpTextStyles = function (context) {
    var traverseArtboard = function traverseArboard(layer) {
        if(layer.isText) {
            var nativeObj = layer._object;

            var textColor = [nativeObj textColor];
            var text = encodeURIComponent(layer.text);
            var fontSize = [nativeObj fontSize];

            var font = [nativeObj font];
            font = [font familyName];
            var textAlign = [nativeObj textAlignment];
            // log("TEXT "+text);
            // log ("text alignment "+textAlign);

            switch (textAlign) {
                case 0:
                    setProperty(layer.id, "textAlign", "left");
                    break;
                case 1:
                    setProperty(layer.id, "textAlign", "right");
                    break;
                case 2:
                    setProperty(layer.id, "textAlign", "center");
                    break;
                case 3:
                    setProperty(layer.id, "textAlign", "justify");
                    break;
                default:
                    setProperty(layer.id, "textAlign", "center");
            }

            var css = nativeObj.CSSAttributes();


            for (var c = 1; c < css.length; c++) {
                var str = css[c].replace(";", "").split(":");
                // log(str[0].trim()+" "+str[1].trim());
                setProperty(layer.id, str[0].trim(), str[1].trim());
            }

            var r = [textColor red];
            var g = [textColor green];
            var b = [textColor blue];
            var a = [textColor alpha];

            setProperty(layer.id, 'font', font);
            setProperty(layer.id, 'fontSize', fontSize);
            setProperty(layer.id, 'textRGBA', {r: r, g:g, b:b, a:a});
            setProperty(layer.id, 'text', text);
        }

        if(layer.iterate)
            layer.iterate(function (subLayer) {
                traverseArtboard(subLayer);
            });
    };

    var sketch = context.api();

    var app = new sketch.Application(context);
    var doc = new sketch.Document(context.actionContext.document, app);

    var pages = doc.pages;

    // Follow the document hierarchy: document -> pages -> artboards -> layers
    for(var page of pages) {
        page.iterate(function (subLayer) {
            if(subLayer.isArtboard) {
                subLayer.iterate(function (page) {
                    traverseArtboard(page)
                });
            }
        });
    }
}


// This function is set to be called when the action for DocumentSaved is fired.
// The MSDocument class extends NSDocument, so same APIs can be used.
// By default the mapping file is created in the same location as the sketch file
// with the same name, only that `.json` is appended to the name.
var exportStyles = function (context) {
    // Not exporting files on autosave.
    if (context.actionContext.autosaved == "1") {
        log("Not exporting files on autosave");
        return;
    }

    dumpTextStyles(context);
    dumpSymbolTextStyles(context);

    var documentBeingSaved = context.actionContext.document;
    var saveLocation = [documentBeingSaved fileURL];
    var savePath = saveLocation.path() + ""
    var fileManager = [NSFileManager defaultManager];
    var sketchFileName = savePath.substring(savePath.lastIndexOf("/") + 1, savePath.length)

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
    var sketch = context.api();
    var app = new sketch.Application(context);
    var doc = new sketch.Document(context.actionContext.document, app);

    var selection = doc.selectedLayers;

    var layers = doc._object.allExportableLayers();

    var iconArray = [];

    for(var i = 0; i < layers.length; i++) {
        if (layers[i].class() == "MSSymbolInstance") {
            iconArray.push(layers[i].symbolMaster());
        } else {
            iconArray.push(layers[i]);
        }
    }

    iconArray = removeDups(iconArray);

    DUIPropsFeedback.setFeedback({key: "imageSource", value: iconArray});

    exportLayers(doc._object, iconArray)
    var exportString = iconArray.length + " icon(s) exported!"

    validateFeedback("imageSource");
    doc._object.showMessage(exportString);
}

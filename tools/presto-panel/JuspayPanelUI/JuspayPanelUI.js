@import "../script/script.js"
@import "../script/validate.js"
@import "../script/align.js"
@import "../script/orientation.js"
@import "../script/actionButtoHandler.js"
@import "../script/generate.js"
@import "../script/utils.js"
@import "../script/bitmap.js"
@import "../export.js"

/***********************************************************************************************************
 *                                    FRAMEWORK CODE FOLLOWS                                               *
 ***********************************************************************************************************/
var onStartup = function(context) {
    var JuspayPanelUI_FrameworkPath = JuspayPanelUI_FrameworkPath || COScript.currentCOScript().env().scriptURL.path().stringByDeletingLastPathComponent().stringByDeletingLastPathComponent();
    var JuspayPanelUI_Log = JuspayPanelUI_Log || log;

    (function() {
        var mocha = Mocha.sharedRuntime();
        var frameworkName = "JuspayPanelUI";
        var directory = JuspayPanelUI_FrameworkPath;
        if (mocha.valueForKey(frameworkName)) {
            [JuspayPanelUI saveContext: context];
            JuspayPanelUI_Log("😎 loadFramework: `" + frameworkName + "` already loaded.");
            return true;
        } else if ([mocha loadFrameworkWithName:frameworkName inDirectory:directory]) {
            [JuspayPanelUI saveContext: context];
            JuspayPanelUI_Log("✅ loadFramework: `" + frameworkName + "` success!");
            mocha.setValue_forKey_(true, frameworkName);
            [DUIPropsMapper initializeProps];
            return true;
        } else {
            JuspayPanelUI_Log("❌ loadFramework: `" + frameworkName + "` failed!: " + directory + ". Please define JuspayPanelUI_FrameworkPath if you're trying to @import in a custom plugin");
            return false;
        }
     })();
};

var onOpenDocument = function(context) {
    // [DUIPropsMapper initializeProps];
    // [DUIPropsFeedback initializePropsFeedback];
};

var onCloseDocument = function(context) {
    exportStyles(context);
}

var onSelectionChanged = function(context) {
    var sketch = context.api();
    var app = new sketch.Application(context);
    var doc = new sketch.Document(context.actionContext.document, app);
    var pages = doc.sketchObject.pages();
    var selection = doc.selectedLayers;
    var currentPage = doc.selectedPage.sketchObject;
    var artboards = [];
    for(var i=0; i<pages.length; i++) {
        var page = new sketch.Page(pages[i], doc);
        page.sketchObject.artboards().forEach(function(artboard, index) {
            artboards.push(artboard);
        });
    }
    [JuspayPanelUI onSelectionChanged:context artboards:artboards currentPage:currentPage];
};

var initProps = function (document, context) {
    var filePath = [document fileURL];
    filePath = [filePath path] + '.json';

    var sketch = context.api();
    var app = new sketch.Application(context);
    var doc = new sketch.Document(context.actionContext.document, app);

    [DUIPropsMapper initializeProps];
    [DUIPropsFeedback initializePropsFeedback];

    var fileManager = [NSFileManager defaultManager];

    if([fileManager fileExistsAtPath: filePath]) {
        try {
            var fileData = [fileManager contentsAtPath: filePath];
            var contents = [NSString alloc];
            var fileDataTemp = [contents initWithData: fileData encoding: NSUTF8StringEncoding];
            // TODO: a more robust way to find string encoding\
            if (fileDataTemp) {
                fileData = fileDataTemp;
            } else {
                log("not UTF-8 encoding");
                fileData = [contents initWithData: fileData encoding: NSWindowsCP1252StringEncoding];
            }
            fileData = JSON.parse(fileData);

            // log(fileData);
            doc._object.showMessage('Props loaded from memory 😎');

            [DUIPropsMapper initializePropsWith: fileData];
        } catch (e) {
            app.alert(filePath + ' file is corrupted', 'Styles file could not be read');
        }
    } else {
        app.alert(filePath + ' could not be found', 'Styles file could not be read');
    }

};

var onZipUploaded = function (context) {
    var sketch = context.api();
    var app = new sketch.Application(context);
    var doc = new sketch.Document(context.actionContext.document, app);

    doc._object.showMessage('ZIP pushed to DEU');
};

var onZipUploadFailed = function (context) {
    var sketch = context.api();
    var app = new sketch.Application(context);
    var doc = new sketch.Document(context.actionContext.document, app);

    doc._object.showMessage('Failed to push ZIP');
};


var onActionClicked = function (context, option) {
    var sketch = context.api();

    var app = new sketch.Application(context);
    var doc = new sketch.Document(context.actionContext.document, app);

    var selection = doc.selectedLayers;

    // var selection = getSelection(context);
    if (option == "create") {
      selection.iterate(function(layer) {
         createBGLayer(layer)
      });
        // } else if (option == "remove") {
        // selection.iterate(function(layer) {
        //   removeBGLayer(layer);
        // });
    } else if (option == "export") {
        exportImages(context);
    } else if (option == "autoGenPage") {
        var pages = doc.pages;

        exportImages(context);

        // Follow the document hierarchy: document -> pages -> artboards -> layers
        for(var page of pages) {
            page.iterate(function (subLayer) {
                log (subLayer.sketchObject.class());
                if(subLayer.sketchObject.class() == "MSSymbolMaster") {
                    var allLayers = subLayer.sketchObject.layers();

                    for (var j = 0; j < allLayers.count(); j++) {
                        var layer = allLayers[j];
                        var layerClass = layer.class();

                        if (layerClass == "MSLayerGroup") {
                            autoGenerate(layer);
                        }
                    }
                }
                if(subLayer.isArtboard) {
                    subLayer.iterate(function (currSelection) {
                        if (currSelection.sketchObject.class() == "MSLayerGroup")
                            autoGenerate(currSelection.sketchObject);
                    });
                }
            });
        }
        doc._object.showMessage('Auto generation Complete');
        log ("AutoGen of all pages complete");
    } else if (option == "reset") {
        selection.iterate(function (currSelection) {
            var obj = currSelection.sketchObject;
            deleteAllForId(obj.objectID());
            doc._object.showMessage('All props of '+obj.name()+' are deleted');
            log('All props of '+obj.name()+' are deleted');
        });
        log("in reset");
    } else if (option == "autoGen") {
        log("in autoGen");
        // myFunction("Hello i reached here yohooo");
        selection.iterate(function (currSelection) {
            if (currSelection.sketchObject.class() == "MSLayerGroup")
                autoGenerate(currSelection.sketchObject);
        });
        doc._object.showMessage('Auto generation Complete');
    } else if (option == "refresh") {
        selection.iterate(function (currSelection) {
            if (currSelection.sketchObject.class() == "MSLayerGroup")
                validate(currSelection.sketchObject);
        });
    }
}

var onOrientationSet = function (context, orient, state) {

    var selection = getSelection(context);

    if(state.localeCompare("OFF") == 0) {
        selection.iterate(function(currentSelection) {
            var layerId = currentSelection.id;
            removeProperty(layerId, "orientation");
        });
    } else {
        selection.iterate(function (currSelection) {
            orientation(currSelection.sketchObject, orient);
        });
    }

    // Go over the current selection
    // If it is a group, then adjust to fit.
    selection.iterate(function(layer) {
        if(layer.isGroup) {
            layer.adjustToFit();
        }
    });
};

var onAlignmentSet = function (context, alignment, state) {

    var selection = getSelection(context);

    if(state.localeCompare("OFF") == 0) {
        selection.iterate(function(currentSelection) {
            var layerId = currentSelection.id;
            if (alignment == "align")
                removeProperty(layerId, "align");
            else if (alignment == "centerVertical" || alignment == "centerHorizontal")
                removeProperty(layerId, "orientation");
            else if (alignment == "heightMatchParent")
                removeProperty(layerId, "height");
            else if (alignment == "widthMatchParent")
                removeProperty(layerId, "width")
        });
    } else {
        if (alignment == "centerVertical" || alignment == "centerHorizontal") {
            selection.iterate(function (currSelection) {
                orientation(currSelection.sketchObject, alignment);
            });
        } else if (alignment == "heightMatchParent") {
            selection.iterate(function (currentSelection) {
                var layerId = currentSelection.id;
                setProperty(layerId, "height", "match_parent");
            });
        } else if (alignment == "widthMatchParent") {
            selection.iterate(function (currentSelection) {
                var layerId = currentSelection.id;
                setProperty(layerId, "width", "match_parent");
            });
        } else {
            selection.iterate(function (currentSelection) {
                align(currentSelection.sketchObject, alignment);
            });
        }
    }
};

var onSpacingSet = function (context, spacingProperty, value) {

    var selection = getSelection(context);

    selection.iterate(function (currentSelection) {
        var layerId = currentSelection.id;
        setProperty(layerId, spacingProperty, value);
        var sketchObject = currentSelection.sketchObject;
        if (spacingProperty.slice(0, 6) == "margin") {
            validate(sketchObject.parentGroup())
        } else {
            validate(sketchObject);
        }
    });

}

var onTypeChanged = function (context, name, type) {

    var selection = getSelection(context);
    selection.iterate(function(currentSelection) {
        var layerId = currentSelection.id;
        if(type.localeCompare("None") == 0) {
            removeProperty(layerId, name);
        } else {
            setProperty(layerId, name, type);
        }
    });
}

var onActionTypeSet = function (context, name, value) {

    var selection = getSelection(context);
    selection.iterate(function(currentSelection) {
        var layerId = currentSelection.id;
        if(value.localeCompare("None") == 0) {
            removeProperty(layerId, name);
        } else {
            if(name.localeCompare("overlayTarget") == 0 || name.localeCompare("overlayType") == 0){
                removeProperty(layerId, "screenFlowTarget");
            } else {
                removeProperty(layerId, "overlayTarget");
                removeProperty(layerId, "overlayType");
            }
            setProperty(layerId, name, value);
        }
    });
}

var onEventSet = function(context, name, value) {
    var selection = getSelection(context);
    selection.iterate(function(currentSelection) {
        var layerId = currentSelection.id;
        var eventsArr = [];
        var events = getProperty(layerId, "events") || [];
        for(var i = 0; i < events.length; i++) {
            eventsArr.push(events[i]);
        }
        if(value.localeCompare("true") == 0) {
            eventsArr.push(name);
        } else {
            var index = eventsArr.indexOf(name);
            if (index > -1) {
                eventsArr.splice(index, 1);
            }
        }
        setProperty(layerId, "events", eventsArr);
    });
    // log(DUIPropsMapper. getAllPropertiesAsJSON());
}


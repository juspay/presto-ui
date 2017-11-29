@import "../src/script.js";
@import "../src/align.js";
@import "../src/orientation.js";
@import "../src/generate.js";
@import "../src/utils.js";
@import "../src/props.js";
@import "../src/export.js";
@import "../src/helpers.js";
@import "../src/logs.js";
@import "../src/test.js";

/***********************************************************************************************************
 *                                    FRAMEWORK CODE FOLLOWS                                               *
 ***********************************************************************************************************/
var onStartup = function(context) {
    var PrestoPanelUI_FrameworkPath = PrestoPanelUI_FrameworkPath || COScript.currentCOScript().env().scriptURL.path().stringByDeletingLastPathComponent().stringByDeletingLastPathComponent();
    var PrestoPanelUI_Log = PrestoPanelUI_Log || log;

    (function() {
        var mocha = Mocha.sharedRuntime();
        var frameworkName = "PrestoPanelUI";
        var directory = PrestoPanelUI_FrameworkPath;
        if (mocha.valueForKey(frameworkName)) {
            [PrestoPanelUI saveContext: context];
            PrestoPanelUI_Log("😎 loadFramework: `" + frameworkName + "` already loaded.");
            return true;
        } else if ([mocha loadFrameworkWithName:frameworkName inDirectory:directory]) {
            [PrestoPanelUI saveContext: context];
            PrestoPanelUI_Log("✅ loadFramework: `" + frameworkName + "` success!");
            mocha.setValue_forKey_(true, frameworkName);
            [DUIPropsMapper initializeProps];
            return true;
        } else {
            PrestoPanelUI_Log("❌ loadFramework: `" + frameworkName + "` failed!: " + directory + ". Please define PrestoPanelUI_FrameworkPath if you're trying to @import in a custom plugin");
            return false;
        }
     })();
};

var onOpenDocument = function(context) {
    // on open hook
};

var onCloseDocument = function(context) {
    exportStyles(context);
};

var onSaveDocument = function(context) {
    autoGenArtboard(context);
    exportStyles(context);
};

var onSelectionChanged = function(context) {
    var document = getDocument(context);
    var currentPage = document.currentPage();
    var selection = getSelection(context);
    var pages = getPages(document);
    var allArtboards = [];
    pages.forEach(function(curr) {
        allArtboards = allArtboards.concat(getArtboardsOnPageId(document, getId(curr)));
    });

    [PrestoPanelUI onSelectionChanged:context artboards:allArtboards currentPage:currentPage];
};

var initProps = function (context) {
    var document = getDocument(context);

    var filePath = [document fileURL];
    filePath = [filePath path] + '.json';

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

            document.showMessage('Props loaded from memory 😎');

            [DUIPropsMapper initializePropsWith: fileData];
        } catch (e) {
            document.showMessage('Json file is corrupted. Styles could not be read');
        }
    } else {
        document.showMessage('Json file could not be found. No styles were read');
    }
};

var onZipUploaded = function (context) {
    var document = getDocument(context);
    document.showMessage('ZIP pushed to DEU');
};

var onZipUploadFailed = function (context) {
    var document = getDocument(context);
    //dont need to handle this yet
};

var onActionClicked = function (context, option, state) {
    var document = getDocument(context);
    var currentSelection = getSelection(context);
    switch (String(option)) {
    case "create":
        currentSelection.forEach(function(currentLayer) {
            createBg(currentLayer);
        });
        break;
    case "export":
        exportImages(context);
        break;
    case "autoGenArtboard":
        autoGenArtboard(context);
        break;
    case "reset":
        document.showMessage("Didnt handle this guy");
    default:
        document.showMessage("Didn't even handle these guys");
    }
};

var onOrientationSet = function (context, orient, state) {

    var selection = getSelection(context);

    if(state.localeCompare("OFF") == 0) {
        selection.forEach(function(currentSelection) {
            var layerId = currentSelection.id;
            removeProperty(layerId, "orientation");
        });
    } else {
        selection.forEach(function (currSelection) {
            orientation(currSelection, orient);
        });
    }

    // Go over the current selection
    // If it is a group, then adjust to fit.
    selection.forEach(function(layer) {
        if(layer.isGroup) {
            layer.adjustToFit();
        }
    });
};

var onAlignmentSet = function (context, alignment, state) {

    var selection = getSelection(context);

    if(state.localeCompare("OFF") == 0) {
        selection.forEach(function(currentSelection) {
            var layerId = currentSelection.id;
            if (alignment == "align")
                removeProperty(layerId, "align");
            else if (alignment == "centerVertical" || alignment == "centerHorizontal")
                removeProperty(layerId, "orientation");
            else if (alignment == "heightMatchParent")
                removeProperty(layerId, "height");
            else if (alignment == "widthMatchParent")
                removeProperty(layerId, "width");
        });
    } else {
        if (alignment == "centerVertical" || alignment == "centerHorizontal") {
            selection.forEach(function (currSelection) {
                orientation(currSelection.sketchObject, alignment);
            });
        } else if (alignment == "heightMatchParent") {
            selection.forEach(function (currentSelection) {
                var layerId = currentSelection.id;
                setProperty(layerId, "height", "match_parent");
            });
        } else if (alignment == "widthMatchParent") {
            selection.forEach(function (currentSelection) {
                var layerId = currentSelection.id;
                setProperty(layerId, "width", "match_parent");
            });
        } else {
            selection.forEach(function (currentSelection) {
                align(currentSelection.sketchObject, alignment);
            });
        }
    }
};

var onSpacingSet = function (context, spacingProperty, value) {

    var selection = getSelection(context);
    selection.forEach(function (currentLayer) {
        var layerId = getId(currentLayer);
        setProperty(getId(currentLayer), spacingProperty, value);
        if (spacingProperty.slice(0, 6) == "margin") {
            validate(currentLayer.parentGroup());
        } else {
            validate(currentLayer);
        }
    });
};

var onTypeChanged = function (context, name, type) {

    var selection = getSelection(context);
    selection.forEach(function(currentLayer) {
        if(type.localeCompare("None") == 0) {
            removeProperty(getId(currentLayer), name);
        } else {
            setProperty(getId(currentLayer), name, type);
        }
    });
};

var onActionTypeSet = function (context, name, value) {

    var selection = getSelection(context);
    selection.forEach(function(currentLayer) {
        var layerId = getId(currentLayer);
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
};

var onEventSet = function(context, name, value) {
    var selection = getSelection(context);
    selection.forEach(function(currentSelection) {
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
};

var displayLogs = function(context) {
    var document = getDocument(context);
    var currentArtboard = document.findCurrentArtboardGroup();
    var layers = getLayersOnArtboardId(document, getId(currentArtboard));
    layers.map(function(currentLayer) {
        if (getClass(currentLayer) == "MSLayerGroup") {
            autoGen(document, currentLayer);
        }
    });
    // document.showMessage("Autogeneration done! Press ⌘(Cmd) + ⌥(Alt) + L to view logs");
    showFeedback(document, getId(currentArtboard));
};

var displayProps = function(context, actionContext) {
    var selection = getSelection(context);
    var props = getSelectionProps(context);
    log (props);
    //display in UI
};

var autoGenPage = function (context) {
    var document = getDocument(context);
    var currentPage = document.currentPage();
    var artboards = convertNSArrayToJSArray(currentPage.artboards());
    artboards.map(function(currentArtboard) {
        autoGen(document, currentArtboard);
    });
    document.showMessage("Autogeneration done! Press ⌘(Cmd) + ⌥(Alt) + L after selecting an artboard to view logs");
};

var autoGenArtboard = function(context) {
    var document = getDocument(context);
    var currentArtboard = document.findCurrentArtboardGroup();
    autoGen(document, currentArtboard);
    document.showMessage("Autogeneration done! Press ⌘(Cmd) + ⌥(Alt) + L to view logs");
};

var autoGenSelection = function(context) {
    var document = getDocument(context);
    var currentSelection = getSelection(context);
    currentSelection.map(function(currentLayer) {
        autoGen(document, currentLayer);
    });
};

var exportImage = function (context) {
    exportImages(context);
};

var createBackground = function (context) {
    var selection = getSelection(context);
    selection.forEach(function(currentLayer) {
        createBg(currentLayer);
    });
};

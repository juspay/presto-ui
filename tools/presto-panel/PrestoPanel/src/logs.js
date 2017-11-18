@import "utils.js";
@import "helpers.js";

var showFeedback = function(document, artboardId) {
    var allLayers = getLayersOnArtboardId(document, artboardId);
    showLogs(getLogs(document, artboardId), document);
};

function showLogs (logs, document) {

    var buttonHeight = 50;

    var warningBoxes = logs.warnings.map(function(currentLog, index) {
        return createNSBox({
            x: 0,
            y: 99,
            width: 300,
            height: 99
        }, {
            title: currentLog.text
        });
    });

    var errorBoxes = logs.errors.map(function(currentLog, index) {
        return createNSBox({
            x: 0,
            y: 99,
            width: 300,
            height: 99
        }, {
            title: currentLog.text
        });
    });

    var warningsContainer = createNSView({
        x: 0,
        y: 0,
        width: 340,
        height: 400
    });
    var errorsContainer = createNSView({
        x: 0,
        y: 0,
        width: 340,
        height: 400
    });

    var warningsScrollView = createNSScrollView({
        x: 0,
        y: 300,
        width: 340,
        height: 250
    }, warningsContainer, {});
    var errorsScrollView = createNSScrollView({
        x: 0,
        y: 0,
        width: 340,
        height: 250
    }, errorsContainer, {});

    var mainContainer = createNSView({
        x: 0,
        y: 0,
        width: 350,
        height: 500
    });

    mainContainer.addSubview(errorsScrollView);
    mainContainer.addSubview(warningsScrollView);

    var logsModal = createNSAlert("Error and Warning Log", mainContainer, {});

    var warningY = logs.warnings.reduce(function(prev, currentLog, index) {
        setFrame(warningBoxes[index], {
            x: 0,
            y: prev,
            width: 300,
            height: (currentLog.groups.length * 40) + 10
        });
        currentLog.groups.map(function(currentType, ind) {
            var currButton = createNSButton(currentType.name, {
                x: 0,
                y: 35 * ind,
                width: 150,
                height: 30
            }, function(sender) {
                [NSApp endSheet:[logsModal window]];
                var currentLayer = getLayerByLayerId(document, currentType.id, false);
                document.currentPage().changeSelectionBySelectingLayers([currentLayer]);
            }, {
                drawsBackground: false
            });
            warningBoxes[index].addSubview(currButton);
        });
        warningsContainer.addSubview(warningBoxes[index]);
        return prev + (currentLog.groups.length * 40) + 30;
    }, 0);
    var errorY = logs.errors.reduce(function(prev, currentLog, index) {
        setFrame(errorBoxes[index], {
            x: 0,
            y: prev,
            width: 300,
            height: (currentLog.groups.length * 40) + 10
        });
        currentLog.groups.map(function(currentType, ind) {
            var currButton = createNSButton(currentType.name, {
                x: 0,
                y: 35 * ind,
                width: 150,
                height: 30
            }, function(sender) {
                [NSApp endSheet:[logsModal window]];
                var currentLayer = getLayerByLayerId(document, currentType.id, false);
                document.currentPage().changeSelectionBySelectingLayers([currentLayer]);
            }, {
                drawsBackground: false
            });
            currButton.layer.backgroundColor = NSColor.redColor.CGColor;
            errorBoxes[index].addSubview(currButton);
        });
        errorsContainer.addSubview(errorBoxes[index]);
        return prev + (currentLog.groups.length * 40) + 30;
    }, 0);

    setFrame(warningsContainer, {
        x: 0,
        y: 0,
        width: 340,
        height: warningY + 30
    });
    setFrame (errorsContainer, {
        x: 0,
        y: 0,
        width: 340,
        height: errorY + 30
    });

    logsModal.runModal();
};


function getLogs (document, artboardId) {
    var logs = {
        warnings: [
            backgroundLog(document, artboardId)
        ],
        errors: [
            hiddenLayersLog(document, artboardId),
            // paddingLog(document, artboardId),
            overlapLog(document, artboardId),
            misalignmentLog(document, artboardId),
            uniqueNamesLog(document, artboardId)
        ]
    };
    logs.warnings = logs.warnings.filter(function(currentType) {
        return currentType.groups.length > 0;
    });
    logs.errors = logs.errors.filter(function(currentType) {
        return currentType.groups.length > 0;
    });
    return logs;
}

function backgroundLog (document, artboardId) {
    var allLayerGroups = getFlattenedLayersOnArtboardId(document, artboardId).filter(function(currentLayer) {
        return getClass(currentLayer) == "MSLayerGroup";
    });
    var noBgGroups = allLayerGroups.filter(function(currentLayer) {
        return !getBg(currentLayer);
    });
    return {
        id: "background",
        text: "No Background on groups:",
        groups: noBgGroups.map(function(currentLayer) {
            return {
                id: getId(currentLayer),
                name: getName(currentLayer)
            };
        })
    };
}

function hiddenLayersLog (document, artboardId) {
    var allLayers = getFlattenedLayersOnArtboardId(document, artboardId);
    var hiddenLayers = allLayers.filter(function(currentLayer) {
        return !currentLayer.isVisible();
    });
    return {
        id: "hidden",
        text: "Hidden Layers:",
        groups: hiddenLayers.map(function(currentLayer) {
            return {
                id: getId(currentLayer),
                name: getName(currentLayer)
            };
        })
    };
}

function paddingLog (document, artboardId) {
    var allLayers = getFlattenedLayersOnArtboardId(document, artboardId);
    var directChildren = getDirectChildren(artboardId);
    var paddingGroups = allLayers.filter(function(currentLayer) {
        var layerFrame = currentLayer.frame();
        var parentFrame = currentLayer.parentGroup().frame();
        var rightPadding = parentFrame.width() - (layerFrame.x() + layerFrame.width());
        var leftPadding = layerFrame.x();
        var deltaPadding = rightPadding - leftPadding;
        if (deltaPadding < 5 && deltaPadding > -5 && deltaPadding != 0 && layerFrame.width() > 120) {
            return true;
        }
        return false;
    });
    return {
        id: "padding",
        text: "Layers not centered properly:",
        groups: paddingGroups.map(function(currentLayer) {
            return {
                id: getId(currentLayer),
                name: getName(currentLayer)
            };
        })
    };
}

function misalignmentLog (document, artboardId) {
    var allLayers = getFlattenedLayersOnArtboardId(document, artboardId);

    var layerGroups = allLayers.filter(function(curr) {
        return getClass(curr) == "MSLayerGroup";
    });

    var misaligned = layerGroups.filter(function(curr) {
        return hasMisalign(curr);
    });
    return {
        id: "misalign",
        text: "Layers are misaligned in groups:",
        groups: misaligned.map(function(currentLayer) {
            return {
                id: getId(currentLayer),
                name: getName(currentLayer)
            };
        })
    };
}

function hasMisalign (group) {
    var children = getDirectChildren(group);
    var bgLayer = getBg(group);
    var noBgChildren = children.filter(function(currentLayer) {
        if (!bgLayer) return true;
        return getId(bgLayer) != getId(currentLayer);
    });
    var misalignX = getMisalign(noBgChildren, "x");
    var misalignY = getMisalign(noBgChildren, "y");
    var misalignWidth = getMisalign(noBgChildren, "width");
    var misalignHeight = getMisalign(noBgChildren, "height");

    return misalignX.length || misalignY.length || misalignWidth.length || misalignHeight.length ? true : false;

}

function overlapLog (document, artboardId) {
    var allLayers = getFlattenedLayersOnArtboardId(document, artboardId);
    var layerGroups = allLayers.filter(function(currentLayer) {
        return getClass(currentLayer) == "MSLayerGroup";
    });
    var overlapping = layerGroups.filter(function(currentLayer) {
        return hasOverlap(currentLayer);
    });
    return {
        id: "overlap",
        text: "Layers are overlapping in groups:",
        groups: overlapping.map(function(currentLayer) {
            return {
                id: getId(currentLayer),
                name: getName(currentLayer)
            };
        })
    };
}

function hasOverlap (group) {
    var children = getDirectChildren(group);
    var bgLayer = getBg(group);
    var noBgChildren = children.filter(function(currentLayer) {
        if (!bgLayer) return true;
        return getId(bgLayer) != getId(currentLayer);
    });
    var sortedLayersByX = noBgChildren.slice(0);
    sortedLayersByX.sort(function(a, b) {
        return a.frame().x() - b.frame().x();
    });
    var sortedLayersByY = noBgChildren.slice(0);
    sortedLayersByY.sort(function(a, b) {
        return a.frame().y() - b.frame().y();
    });

    var sortedLayerFrames = sortedLayersByY.map(function(curr) {
        return {
            name: getName(curr),
            x: curr.frame().x(),
            y: curr.frame().y(),
            width: curr.frame().width(),
            height: curr.frame().height()
        };
    });

    var overlaps = sortedLayersByX.map(function(curr, ind, arr) {
        if (ind == 0) {
            return false;
        }
        var prev = arr[ind - 1];

        var isXOverlap = curr.frame().x() < (prev.frame().x() + prev.frame().width());

        var isYOverlap = false;

        if (curr.frame().y() > prev.frame().y()) {
            isYOverlap = (curr.frame().y() < (prev.frame().y() + prev.frame().height()));
        } else {
            isYOverlap = (prev.frame().y() < (curr.frame().y() + curr.frame().height()));
        }

        if (isXOverlap && isYOverlap) {
            return true;
        }
        return false;
    });
    return overlaps.reduce(function(prev, curr) {
        return prev || curr;
    });
}

function uniqueNamesLog(document, artboardId) {
    var allLayers = getFlattenedLayersOnArtboardId(document, artboardId);
    var layerGroups = allLayers.filter(function(curr) {
        return getClass(curr) == "MSLayerGroup";
    });

    var layerGroupBgs = layerGroups.map(function(curr) {
        return getBg(curr);
    });

    var layerGroupBgIds = layerGroupBgs.map(function(curr) {
        if (!curr) return "";
        return getId(curr);
    });

    var nonBgLayers = allLayers.filter(function(curr) {
        return layerGroupBgIds.indexOf(getId(curr)) == -1;
    });

    nonBgLayers = nonBgLayers.filter(function(curr) {
        return getClass(curr) != "MSShapePathLayer" && getClass(curr) != "MSRectangleShape" && getClass(curr) != "MSOvalShape";
    });

    var nonBgLayerNames = nonBgLayers.map(getName);
    var nonBgLayerClasses = nonBgLayers.map(getClass);
    var uniqueNames = hasDups(nonBgLayerNames);

    if (uniqueNames) {
        return {
            id: "names",
            text: "Some layers on artboard have same name",
            groups: [
                {
                    id: artboardId,
                    name: getName(getArtboardById(document, artboardId))
                }
            ]
        };
    } else {
        return {
            id: "names",
            text: "Some layers on artboard have same name",
            groups : []
        };
    }

}

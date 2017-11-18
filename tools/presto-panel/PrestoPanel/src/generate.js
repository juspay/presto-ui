@import "script.js";
@import "utils.js";

function autoGen(document, parentGroup) {
    if (isValidGroup(parentGroup)) {
        flushGroupProps(parentGroup);
        var directChildren = getDirectChildren(parentGroup);
        var bgLayer = getBg(parentGroup);
        var noBgChildren = directChildren.filter(function(currentChild) {
            if (!bgLayer) {
                return true;
            }
            return getId(currentChild) != getId(bgLayer);
        });

        var childrenGroups = noBgChildren.filter(function(currentChild) {
            return getClass(currentChild) == "MSLayerGroup";
        });

        var sortedLayersByX = sortLayersByFrame(noBgChildren, "X");
        var sortedLayersByY = sortLayersByFrame(noBgChildren, "Y");
        var sortedLayersByXEnd = sortLayersByFrame(noBgChildren, "XEnd");
        var sortedLayersByYEnd = sortLayersByFrame(noBgChildren, "YEnd");

        //set bg if it exists
        if (bgLayer) {
            setProperty(getId(parentGroup), "bg", getId(bgLayer));
        }

        //set padding
        //will be overridden later in some cases
        var padding = getPadding(parentGroup);
        Object.keys(padding).map(function(key) {
            setProperty(getId(parentGroup), "padding" + capitalize(key), padding[key]);
        });

        //first check for scrollview
        //then single child
        //then horizontal
        //then vertical
        //if none invalid

        if (isScrollView(parentGroup)) {
            createScrollView(parentGroup, noBgChildren);
        } else {
            if (noBgChildren.length == 1) {
                createSingleChildGroup(parentGroup);
            } else {
                if (isHorizontalGroup(parentGroup)) {
                    createHorizontalGroup(parentGroup);
                } else {
                    if (isVerticalGroup(parentGroup)) {
                        createVerticalGroup(parentGroup);
                    } else {
                        //invalid group
                        log ("invalid group -> " + getName(parentGroup));
                    }
                }
            }
        }

        //call on children groups as well
        childrenGroups.map(function(currentChild) {
            autoGen(document, currentChild);
        });
    }
}

function isScrollView(parentGroup) {
    var bgLayer = getBg(parentGroup);
    var noBgChildren = getNoBgChildren(parentGroup);
    return (bgLayer && bgLayer.hasClippingMask() && noBgChildren.length == 1);
}

//sets scrollView property and match parent to child
function createScrollView(parentGroup) {
    var noBgChildren = getNoBgChildren(parentGroup);
    var maskLayer = noBgChildren[0];
    var isHorizontalScrollView = (maskLayer.frame().width() > parentGroup.frame().width()) && (maskLayer.frame().height() == parentGroup.frame().height());
    var isVerticalScrollView = (maskLayer.frame().height() > parentGroup.frame().height()) && (maskLayer.frame().width() == parentGroup.frame().width());
    if (isHorizontalScrollView) {
        //horizontal scroll group
        setProperty(getId(parentGroup), "scrollView", "horizontal");
        setProperty(getId(parentGroup), "weight", "1");
        setProperty(getId(parentGroup), "width", "0");
        setProperty(getId(maskLayer), "height", "match_parent");
        setProperty(getId(maskLayer), "width", maskLayer.frame().width());
    } else {
        //vertical scroll group
        setProperty(getId(parentGroup), "scrollView", "vertical");
        setProperty(getId(parentGroup), "weight", "1");
        setProperty(getId(parentGroup), "height", "0");
        setProperty(getId(maskLayer), "width", "match_parent");
        setProperty(getId(maskLayer), "height", maskLayer.frame().height());
    }
    var childrenIds = noBgChildren.map(getId);
    setProperty(getId(parentGroup), "children", childrenIds);
    Object.keys(getPadding(parentGroup)).map(function(key) {
        setProperty(getId(parentGroup), "padding" + capitalize(key), 0);
    });
}

function isHorizontalGroup (parentGroup) {
    var bgLayer = getBg(parentGroup);
    var directChildren = getDirectChildren(parentGroup);
    var noBgChildren = getNoBgChildren(parentGroup);
    var layerFrames = noBgChildren.map(function(curr) {
        return curr.frame();
    });
    var sortedLayersByX = sortLayersByFrame(noBgChildren, "X");
    var noXOverlap = sortedLayersByX.reduce(function(prev, curr, ind, arr) {
        if (ind == 0) {
            return true;
        }
        return (prev && arr[ind - 1].frame().x() + arr[ind - 1].frame().width() <= curr.frame().x());
    }, true);
    return noXOverlap;
}

function isVerticalGroup(parentGroup) {
    var bgLayer = getBg(parentGroup);
    var directChildren = getDirectChildren(parentGroup);
    var noBgChildren = getNoBgChildren(parentGroup);
    var sortedLayersByY = sortLayersByFrame(noBgChildren, "Y");
    var noYOverlap = sortedLayersByY.reduce(function(prev, curr, ind, arr) {
        if (ind == 0) {
            return true;
        }
        return (prev && arr[ind - 1].frame().y() + arr[ind - 1].frame().height() <= curr.frame().y());
    }, true);
    return noYOverlap;
}

function getPadding(parentGroup) {
    var noBgChildren = getNoBgChildren(parentGroup);

    var sortedLayersByX = sortLayersByFrame(noBgChildren, "X");
    var sortedLayersByY = sortLayersByFrame(noBgChildren, "Y");
    var sortedLayersByXEnd = sortLayersByFrame(noBgChildren, "XEnd");
    var sortedLayersByYEnd = sortLayersByFrame(noBgChildren, "YEnd");

    return {
        top: Math.floor(sortedLayersByY[0].frame().y()),
        right: Math.floor(parentGroup.frame().width() - (sortedLayersByXEnd[noBgChildren.length - 1].frame().x() + sortedLayersByXEnd[noBgChildren.length - 1].frame().width())),
        bottom: Math.floor(parentGroup.frame().height() - (sortedLayersByYEnd[noBgChildren.length - 1].frame().y() + sortedLayersByYEnd[noBgChildren.length - 1].frame().height())),
        left: Math.floor(sortedLayersByX[0].frame().x())
    };
}

function createHorizontalGroup(parentGroup) {
    var noBgChildren = getNoBgChildren(parentGroup);
    var sortedLayersByX = sortLayersByFrame(noBgChildren, "X");
    var padding = getPadding(parentGroup);
    var threshold = (parentGroup.frame().width() - padding.right - padding.left)/ (noBgChildren.length + 1), sizeThreshold = 30;
    var sortedLayersByWidth = sortedLayersByX.slice(0);
    var hasMatchParent = false, hasAlign = false;
    sortedLayersByWidth.sort(function(a, b) {
        return Math.floor(a.frame().width() - b.frame().width());
    });
    var maxWidth = sortedLayersByWidth[noBgChildren.length - 1].frame().width();
    var notMaxWidthLayers = sortedLayersByWidth.filter(function(curr) {
        return Math.floor(curr.frame().width()) < Math.floor(maxWidth);
    });
    var maxWidthLayers = sortedLayersByWidth.filter(function(curr) {
        return Math.floor(curr.frame().width()) == Math.floor(maxWidth);
    });
    var secondMaxWidth = notMaxWidthLayers.length > 0 ? notMaxWidthLayers[notMaxWidthLayers.length - 1].frame().width() : 0;
    var deltaWidth = maxWidth - secondMaxWidth;

    var margins = sortedLayersByX.map(function(currentChild, ind, arr) {
        return {
            top: currentChild.frame().y() - padding.top,
            right: 0,
            bottom: (parentGroup.frame().y() + parentGroup.frame().height()) - padding.bottom - (currentChild.frame().y() + currentChild.frame().height()),
            left: (ind > 0) ? Math.floor(currentChild.frame().x() - (arr[ind - 1].frame().x() + arr[ind - 1].frame().width())) : 0
        };
    });

    var centerVertical = sortedLayersByX.reduce(function(prev, curr, ind, arr) {
        return prev && (Math.floor(margins[ind].top - margins[ind].bottom) < 1);
    }, Math.floor(padding.top - padding.bottom));

    //set orientation of group
    setProperty(getId(parentGroup), "orientation", "horizontal");

    //set children
    var childrenIds = sortedLayersByX.map(getId);
    setProperty(getId(parentGroup), "children", childrenIds);

    //set margins to children
    sortedLayersByX.map(function(currentChild, ind, arr) {
        var currentMargin = margins[ind];
        //margin bottom is always set to zero
        //but had to be calculated to check for center case
        currentMargin.bottom = 0;
        Object.keys(currentMargin).map(function(key) {
            setProperty(getId(currentChild), "margin" + capitalize(key), currentMargin[key]);
        });
        if (ind == arr.length - 1 && currentMargin.left > threshold) {
            hasAlign = true;
            setProperty(getId(currentChild), "marginLeft", "0");
            setProperty(getId(currentChild), "align", "right");
        }
    });

    //set gravity of group
    if (centerVertical) {
        setProperty(getId(parentGroup), "gravity", "center_vertical");
        sortedLayersByX.map(function(currentChild) {
            setProperty(getId(currentChild), "marginTop", "0");
        });
    }

    // set weights
    // remove right padding if no children with weights and no right align
    if (maxWidth > threshold && !hasMatchParent && !hasAlign) {
        //weights can be applied now
        maxWidthLayers.map(function(curr) {
            setProperty(getId(curr), "weight", 1);
        });
    } else {
        if (padding.right < 30) {
            var lastChild = sortedLayersByX[noBgChildren.length - 1];
            setProperty(getId(lastChild), "align", "right");
            setProperty(getId(lastChild), "marginLeft", 0);
        }
    }
}

function createVerticalGroup(parentGroup) {
    var noBgChildren = getNoBgChildren(parentGroup);
    var childrenGroups = noBgChildren.filter(function(currentChild) {
        return getClass(currentChild) == "MSLayerGroup";
    });
    var sortedLayersByY = sortLayersByFrame(noBgChildren, "Y");
    var padding = getPadding(parentGroup);
    var threshold = (parentGroup.frame().height() - padding.top - padding.bottom) / (noBgChildren.length + 1), sizeThreshold = 50;
    var hasMatchParent = false;
    var sortedLayersByHeight = sortedLayersByY.slice(0);
    sortedLayersByHeight.sort(function(a, b) {
        return a.frame().height() - b.frame().height();
    });
    var maxHeight = sortedLayersByHeight[noBgChildren.length - 1].frame().height();
    var notMaxHeightLayers = sortedLayersByHeight.filter(function(curr) {
        return curr.frame().height() < maxHeight;
    });
    var maxHeightLayers = sortedLayersByHeight.filter(function(curr) {
        return curr.frame().height() == maxHeight;
    });

    var secondMaxHeight = notMaxHeightLayers.length > 0 ? notMaxHeightLayers[notMaxHeightLayers.length - 1].frame().height() : 0;
    var deltaHeight = maxHeight - secondMaxHeight;

    var margins = sortedLayersByY.map(function(currentChild, ind, arr) {
        return {
            top: (ind > 0) ? Math.floor(currentChild.frame().y() - (arr[ind - 1].frame().y() + arr[ind - 1].frame().height())) : 0,
            right: Math.floor(parentGroup.frame().width() - (padding.right + currentChild.frame().x() + currentChild.frame().width())),
            bottom: 0,
            left: Math.floor(currentChild.frame().x() - padding.left)
        };
    });

    var widths = sortedLayersByY.map(function(currentChild, ind, arr) {
        if (Math.floor(margins[ind].left) < 20 && Math.floor(margins[ind].right) < 20 && (parentGroup.frame().width() - currentChild.frame().width()) < (parentGroup.frame().width() * 0.9)) {
            hasMatchParent = true;
            //full width - apply match parent on width
            setProperty(getId(currentChild), "width", "match_parent");
            return "match_parent";
        }
        return currentChild.frame().width();
    });

    var hasAlign = false;
    var centerHorizontal = sortedLayersByY.reduce(function(prev, curr, ind, arr) {
        return prev && (Math.floor(margins[ind].left - margins[ind].right) < 1);
    }, Math.floor(padding.left - padding.right) < 1);

    //set orientation of group
    setProperty(getId(parentGroup), "orientation", "vertical");

    //set children
    var sortedLayersByYIds = sortedLayersByY.map(getId);
    setProperty(getId(parentGroup), "children", sortedLayersByYIds);

    //set margins to children
    sortedLayersByY.map(function(currentChild, ind, arr) {
        var currentMargin = margins[ind];
        Object.keys(currentMargin).map(function(key) {
            setProperty(getId(currentChild), "margin" + capitalize(key), currentMargin[key]);
        });
        if (ind == arr.length - 1 && currentMargin.top > sizeThreshold) {
            hasAlign = true;
            setProperty(getId(currentChild), "marginTop", "0");
            setProperty(getId(currentChild), "align", "bottom");
        }
    });

    //set gravity of group
    if (centerHorizontal) {
        setProperty(getId(parentGroup), "gravity", "center_horizontal");
        sortedLayersByY.map(function(currentChild, ind) {
            var currentMargin = margins[ind];
            if (Math.floor(currentMargin.right - currentMargin.left) < 1 && currentMargin.left < 30) {
                setProperty(getId(currentChild), "width", "match_parent");
                hasMatchParent = true;
            } else {
                //reset margin right cause we never give margin right to vertical group children
                setProperty(getId(currentChild), "marginRight", 0);
                setProperty(getId(currentChild), "marginLeft", 0);
            }
        });
    } else {
        setProperty(getId(parentGroup), "orientation", "vertical");
        sortedLayersByY.map(function(currentChild) {
            setProperty(getId(currentChild), "marginRight", 0);
        });
    }

    //set weights
    //remove bottom padding if no children with weights or bottom align
    if (maxHeight > threshold && !hasAlign && !hasMatchParent) {
        //weights can be applied now
        maxHeightLayers.map(function(curr) {
            setProperty(getId(curr), "weight", 1);
        });
    } else {
        var hasScrollChild = childrenGroups.reduce(function(prev, curr) {
            return prev || isScrollView(curr);
        }, false);
        if (!hasAlign && !hasScrollChild) {
            setProperty(getId(parentGroup), "paddingBottom", 0);
        }
    }
}

function createSingleChildGroup(parentGroup) {
    var threshold = 100;
    var noBgChildren = getNoBgChildren(parentGroup);
    var padding = getPadding(parentGroup);
    var child = noBgChildren[0];
    var parentArtboard = parentGroup.parentArtboard();
    var orientation = "vertical";
    var gravity = "top";
    var hasMatchWidth = false, hasRightAlign = false;
    var hasMatchHeight = false, hasBottomAlign = false;
    if (padding.left < 30 && padding.right < 30 && child.frame().width() > threshold) {
        setProperty(getId(child), "width", "match_parent");
        hasMatchWidth = true;
    }
    if ((padding.top < 30 && padding.top < 30 && getClass(child) != "MSTextLayer") || child.frame().height() > threshold) {
        setProperty(getId(child), "height", "match_parent");
        hasMatchHeight = true;
    }
    //assume vertical group if same size as artboard
    if (Math.floor(parentGroup.frame().width() - parentArtboard.frame().width()) < 1 && Math.floor(parentGroup.frame().height() == parentArtboard.frame().height()) < 1) {
        orientation = "vertical";
    }
    if (Math.floor(padding.top - padding.bottom) < 1) {
        orientation = "horizontal";
        gravity = "center_vertical";
        if (!hasMatchHeight) {
            padding.top = 0;
            padding.bottom = 0;
            setProperty(getId(parentGroup), "paddingTop", 0);
            setProperty(getId(parentGroup), "paddingBottom", 0);
        }
        setProperty(getId(parentGroup), "gravity", gravity);
        if (Math.floor(padding.left - padding.right) < 1) {
            gravity = "center";
            setProperty(getId(parentGroup), "gravity", gravity);
            if (!hasMatchHeight) {
                padding.top = 0;
                padding.bottom = 0;
                setProperty(getId(parentGroup), "paddingTop", 0);
                setProperty(getId(parentGroup), "paddingBottom", 0);
            }
            if (!hasMatchWidth) {
                padding.right = 0;
                padding.left = 0;
                setProperty(getId(parentGroup), "paddingLeft", 0);
                setProperty(getId(parentGroup), "paddingRight", 0);
            }
        }
    }
    if (Math.floor(padding.left - padding.right) > 40) {
        orientation = "horizontal";
        setProperty(getId(child), "align", "right");
        setProperty(getId(parentGroup), "paddingLeft", 0);
        hasRightAlign = true;
    }
    if (Math.floor(padding.top - padding.bottom) > 50) {
        orientation = "vertical";
        setProperty(getId(child), "align", "bottom");
        setProperty(getId(parentGroup), "paddingTop", 0);
        hasBottomAlign = true;
    }

    //check to remove padding
    if (padding.right >= 30 && !hasMatchWidth && !hasRightAlign) {
        setProperty(getId(parentGroup), "paddingRight", 0);
    }
    if (padding.bottom >= 40 && !hasMatchHeight && !hasBottomAlign) {
        setProperty(getId(parentGroup), "paddingBottom", 0);
    }
    //reset padding right and padding bottom for a single child group
    setProperty(getId(parentGroup), "orientation", orientation);

    var childrenIds = noBgChildren.map(getId);
    setProperty(getId(parentGroup), "children", childrenIds);
}

function getNoBgChildren(parentGroup) {
    var bgLayer = getBg(parentGroup);
    var directChildren = getDirectChildren(parentGroup);
    return directChildren.filter(function(currentChild) {
        if (!bgLayer) {
            return true;
        }
        return getId(currentChild) != getId(bgLayer);
    });
}

function flushGroupProps(group) {
    var children = getDirectChildren(group);
    var propertiesOnChildren = ["weight", "marginTop", "marginBottom", "marginLeft", "marginRight", "width", "height", "align"];
    var propertiesOnGroup = ["orientation", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "children", "bg", "align"];
    children.map(function(currentChild) {
        Object.keys(propertiesOnChildren).map(function(key) {
            removeProperty(getId(currentChild), key);
        });
    });
    Object.keys(propertiesOnGroup).map(function(key) {
        removeProperty(getId(group), key);
    });
}

function isValidLayer (group) {
    var validLayers = ["MSLayerGroup", "MSShapeGroup"];
    return validLayers.indexOf(getClass(group)) != -1;
}

function isValidGroup (group) {
    var validGroups = ["MSLayerGroup", "MSArtboardGroup", "MSSymbolMaster"];
    var isSlice = !group.hasSliceIcon();
    var isValid = validGroups.indexOf(getClass(group)) != -1 && isSlice;
    return isValid;
}

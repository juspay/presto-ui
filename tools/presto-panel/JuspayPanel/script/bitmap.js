@import "utils.js"

var checkIcon = function (layer) {
    var isBitmap = layer.class() == "MSBitmapLayer"
    var isValidClass = layer.class() == "MSShapeGroup" || layer.class() == "MSLayerGroup";
    var isValidShapeGroup = layer.class() == "MSShapeGroup" && (layer.containedLayers().count() > 1 || (layer.containedLayers().count() == 0 && hasDirectChildrenOfClass(layer, "MSShapePathLayer")));

    var isValidLayerGroup = layer.class() == "MSLayerGroup" && !hasChildrenOfClass(layer, "MSTextLayer") && !hasDirectChildrenOfClass(layer, "MSLayerGroup");

    if (isBitmap || (isValidClass && layer.containedLayers() && (isValidLayerGroup || isValidShapeGroup))) {
        return true
    }
    return false
}

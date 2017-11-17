var debug = false;

function setProperty(id, key, value) {
    // log("++++++++++++++++ Set Property ++++++++++++++++");
    // log('id: '+id+' key: '+key+' value: '+value);
    DUIPropsMapper.setProperty({id: id, key: key, value: value});
}

function getProperty(id, prop) {
    // log("---------------- Get Property ----------------");
    // log('id: '+id+' key: '+key);
    return DUIPropsMapper.getProperty({id: id, key: prop});
}

function setFeedback(key, value) {
    DUIPropsFeedback.setFeedback({key: key, value: value});
}

function getFeedback(prop) {
    return DUIPropsFeedback.getFeedback(prop);
}

function removeProperty (id, prop) {
    log("Removed property: "+prop+" of id: "+id);
    DUIPropsMapper.removeProperty({id: id, key: prop});
}

function deleteAllForId (objectId) {
    log("Removed All property of id: "+objectId);
    DUIPropsMapper.deleteAllForId(objectId);
}

function sortLayersByX (layers) {
    var sortByXPosition = [NSSortDescriptor sortDescriptorWithKey:"absoluteRect.rulerX" ascending:1];

    var sortedLayersByX = [layers sortedArrayUsingDescriptors:[sortByXPosition]];

    return sortedLayersByX;
}

function sortLayersByY (layers) {
    var sortByYPosition = [NSSortDescriptor sortDescriptorWithKey:"absoluteRect.rulerY" ascending:1];

    var sortedLayersByY = [layers sortedArrayUsingDescriptors:[sortByYPosition]];
    return sortedLayersByY;
}

function showAlert(title, message) {
    var app = NSApplication.sharedApplication();
    app.displayDialog_withTitle(title, message);
}

@import "utils.js";

function setProperty (id, key, value) {
    DUIPropsMapper.setProperty({id: id, key: key, value: value});
}

function getProperty (id, prop) {
    return DUIPropsMapper.getProperty({id: id, key: prop});
}

function getPropertiesForId (id) {
    return DUIPropsMapper.getPropertiesOfLayer(id);
}

function getAllProperties () {
    return DUIPropsMapper.getAllProperties();
}

function removeProperty (id, prop) {
    DUIPropsMapper.removeProperty({id: id, key: prop});
}

function deleteAllForId (objectId) {
    DUIPropsMapper.deleteAllForId(objectId);
}

function setFeedback (key, value) {
    DUIPropsFeedback.setFeedback({key: key, value: value});
}

function getFeedback (prop) {
    return DUIPropsFeedback.getFeedback(prop);
}

function validateFeedback (key) {
    var data = getFeedback(key);
    var old = convertNSArrayToJSArray(data.old);
    var current = convertNSArrayToJSArray(data.current);

    var remove = old.filter(function(obj) { return current.indexOf(obj) == -1; });
    remove.forEach(function(curr) {
        removeProperty(curr, key);
    });
}

function getDocumentFromActionContext (context) {
    var sketch = context.api();
    var app = new sketch.Application(context);
    var doc = new sketch.Document(context.actionContext.document, app);
    return doc._object;
}

function getDocumentFromShortcutContext (context) {
    return context.document;
}

function getDocument (context) {
    if (context.action) {
        return getDocumentFromActionContext(context);
    }
    return getDocumentFromShortcutContext(context);
}

@import "JuspayPanelUI.framework/JuspayPanelUI.js"
@import "script/script.js"

// Called when the Copy.finished action is called
// The current selection is the set of items that were placed into
// the clipboard in order.
function onCopyEnd(context) {
    var sketch = context.api();

    log('Copy finished');

    var app = new sketch.Application(context);
    var doc = new sketch.Document(context.actionContext.document, app);

    var sharedRuntime = [Mocha sharedRuntime];

    var ids = [];

    doc.selectedLayers.iterate(function (layer) { ids.push(layer.id); });

    [sharedRuntime setValue: ids forKey: "__copied"];
}

// Called on Paste.finish function, is called when items are copied from clipboard to
// the target item. The current selection at this point is the set of items that were
// pasted.
function onPasteEnd(context) {
    var sketch = context.api();

    var app = new sketch.Application(context);
    var doc = new sketch.Document(context.actionContext.document, app);

    var srt = [Mocha sharedRuntime];
    var copiedItems = [srt valueForKey: "__copied"];

    var cp = [];

    for(var i=0; i<copiedItems.length; i++) {
        var item = copiedItems[i];
        var layer = doc.layerWithID(item);
        cp.push(layer);
    }

    copiedItems = cp;

    var allProps = [DUIPropsMapper getAllProperties];

    var index = 0;

    var visitor = function visitor (copied, original) {
        var copies = [];
        var originals = [];

        if(original.isGroup) {
            original.iterate(function (layer) {
                                originals.push(layer);
                             });
        } else {
            originals = [original];
        }

        if(copied.isGroup) {
            copied.iterate(function (layer) {
                            copies.push(layer);
                           });
        } else {
            copies = [copied];
        }


        for(var ind=0; ind < originals.length; ind++) {
            var originalElem = originals[ind];
            var copiedElem = copies[ind];

            var originalProps = allProps[originalElem.id];

            for(var key in originalProps) {
                setProperty(copiedElem.id, key, originalProps[key]);
            }

            if(copiedElem.isGroup && originalElem.isGroup) {
                visitor(copiedElem, originalElem);
            }
        }
    };

    var ind = 0;

    var pastedItems = []
    doc.selectedLayers.iterate(function (layer) {
                                pastedItems.push(layer);
                               });

    for(var j=0;j<pastedItems.length; j+=1) {
        visitor(pastedItems[j], copiedItems[j]);
    }
}

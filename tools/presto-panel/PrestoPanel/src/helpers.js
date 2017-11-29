@import "utils.js";

function showAlert (title, message) {
    var app = NSApplication.sharedApplication();
    app.displayDialog_withTitle(title, message);
}

function createNSBox(bounds, opts) {
    var newBox = [[NSBox alloc] initWithFrame:NSMakeRect(bounds.x, bounds.y, bounds.width, bounds.height)];
    newBox.setTitle(opts.title ? opts.title : "");
    return newBox;
}

function createNSView (bounds, opts) {
    var newView = [[NSView alloc] initWithFrame:NSMakeRect(bounds.x, bounds.y, bounds.width, bounds.height)];
    return newView;
}

function createNSAlert (message, accessoryView, opts) {
    var newAlert = [[NSAlert alloc] init];
    newAlert.setMessageText(message);
    newAlert.setAccessoryView(accessoryView);
    return newAlert;
}

function createNSScrollView (bounds, documentView, opts) {
    var newScrollView = [[NSScrollView alloc] initWithFrame:NSMakeRect(bounds.x, bounds.y, bounds.width, bounds.height)];
    newScrollView.setDocumentView(documentView);
    newScrollView.setBorderType(opts.borderType ? opts.borderType : NSNoBorder);
    newScrollView.setHasVerticalScroller(opts.verticalScroller ? opts.verticalScroller : true);
    newScrollView.setHasHorizontalScroller(opts.horizontalScroller ? opts.horizontalScroller : false);
    [newScrollView setAutoresizingMask:NSViewWidthSizable|NSViewHeightSizable];
    return newScrollView;
}

function createNSButton (title, bounds, clickListener, opts) {
    var newButton = [[NSButton alloc] initWithFrame:NSMakeRect(bounds.x, bounds.y, bounds.width, bounds.height)];
    newButton.setTitle(title);
    // newButton.setDrawsBackground(opts.drawsBackground ? opts.drawsBackground : true);
    newButton.setBezelStyle(opts.bezelStyle ? opts.bezelStyle : NSRoundedBezelStyle);
    newButton.setButtonType(opts.buttonType ? opts.buttonType : NSMomentaryLightButton);
    newButton.setTarget(self);
    newButton.setWantsLayer(true);
    newButton.setCOSJSTargetFunction(clickListener);
    return newButton;
}

function testClick(e) {
    log (e)
    log ("clicked something")
}

function setFrame(nsElement, bounds) {
    nsElement.setFrame(NSMakeRect(bounds.x, bounds.y, bounds.width, bounds.height));
}

function createNSTextField (value, bounds, opts) {
    var newTextField = [[NSTextField alloc] initWithFrame:NSMakeRect(bounds.x, bounds.y, bounds.width, bounds.height)];
    newTextField.setStringValue(value ? value : "");
    return newTextField;
}

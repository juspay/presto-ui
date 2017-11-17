/*
 Utility function to show a modal and invoke the callback once the user does an interaciton.
 */
function showModal(prompt, values) {
    var app = [NSApplication sharedApplication];
    
    function getValues() {
        var accessory = [[NSBox alloc] initWithFrame:NSMakeRect(0, 0, 190, 140)];
        accessory.setTitle(prompt.title);
        
        var top = [[NSTextField alloc] initWithFrame:NSMakeRect(70, 90, 40, 20)];
        top.setIntValue(values.top);
        accessory.addSubview(top);
        
        var right = [[NSTextField alloc] initWithFrame:NSMakeRect(130, 50, 40, 20)];
        right.setIntValue(values.right);
        accessory.addSubview(right);
        
        var bottom = [[NSTextField alloc] initWithFrame:NSMakeRect(70, 5, 40, 20)];
        bottom.setIntValue(values.bottom);
        accessory.addSubview(bottom);
        
        var left = [[NSTextField alloc] initWithFrame:NSMakeRect(10, 50, 40, 20)];
        left.setIntValue(values.left);
        accessory.addSubview(left);
        
        var alert = NSAlert.alloc().init();
        alert.setMessageText(prompt.message);
        alert.setInformativeText(prompt.informativeMessage);
        alert.addButtonWithTitle('OK');
        alert.addButtonWithTitle('Cancel');
        alert.setAccessoryView(accessory);
        
        var responseCode = alert.runModal();
        
        return [responseCode, [top intValue], [right intValue], [bottom intValue], [left intValue]];
    }
    
    return getValues();
}

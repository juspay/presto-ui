//
//  JuspayPanelUISketchPanelBackgroundLayer.m
//  JuspayPanel
//
//  Created by Balaganesh S on 26/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "JuspayPanelUISketchPanelBackgroundLayer.h"
#import "DUIPropsMapper.h"

@implementation JuspayPanelUISketchPanelBackgroundLayer

- (void)drawRect:(NSRect)dirtyRect {
    [super drawRect:dirtyRect];
    
    [self.topBackgroundView setWantsLayer:YES];
    self.topBackgroundView.layer.backgroundColor = [NSColor colorWithRed:241/255.0f green:241/255.0f blue:241/255.0f alpha:1.0].CGColor;
    self.topBackgroundView.layer.borderWidth = 1.0f;
    self.topBackgroundView.layer.borderColor = [NSColor colorWithRed:209/255.0f green:209/255.0f blue:209/255.0f alpha:1.0f].CGColor;
    
    NSArray *buttons = @[self.createButton, self.exportButton, self.ignoreButton, self.autoGenArtboardButton, self.resetButton, self.refreshButton];
    for (NSButton *button in buttons) {
        [button setWantsLayer:YES];
        if (button == self.ignoreButton) {
            if (button.state == NSOnState) {
                button.layer.backgroundColor = [NSColor colorWithRed:255/255.0f green:255/255.0f blue:255/255.0f alpha:1.0f].CGColor;
                button.title = @"Ignored";
            } else {
                button.layer.backgroundColor = [NSColor colorWithRed:230/255.0f green:230/255.0f blue:230/255.0f alpha:1.0f].CGColor;
                button.title = @"Ignore";
            }
        }
//        button.layer.cornerRadius = 4.0f;
//        button.layer.borderWidth = 1.0f;
//        button.layer.borderColor = [NSColor colorWithRed:209/255.0f green:209/255.0f blue:209/255.0f alpha:1.0f].CGColor;
        [button setTarget:self];
        [button setAction:@selector(clicked:)];
    }
    
}

- (void)clicked:(NSButton*)sender {
    
    NSString *option;
    if (sender == self.createButton) {
        option = @"create";
    } else if (sender == self.exportButton) {
        option = @"export";
    } else if (sender == self.autoGenArtboardButton) {
        option = @"autoGenArtboard";
    } else if (sender == self.resetButton) {
        option = @"reset";
    } else if (sender == self.refreshButton){
        option = @"render";
    } else {
        option = @"ignore";
        if (sender.state == NSOnState) {
            sender.layer.backgroundColor = [NSColor colorWithRed:255/255.0f green:255/255.0f blue:255/255.0f alpha:1.0f].CGColor;
            sender.title = @"Ignored";
        } else {
            sender.layer.backgroundColor = [NSColor colorWithRed:230/255.0f green:230/255.0f blue:230/255.0f alpha:1.0f].CGColor;
            sender.title = @"Ignore";
        }
    }
    
    if (self.delegate && [self.delegate respondsToSelector:@selector(cell:buttonClicked:event:)]) {
        [self.delegate cell:self buttonClicked:sender event:option];
    }
}

- (void) setup {

    
}


- (void) updateForSelection:(NSString *)selectedLayerId {
    NSDictionary* objectProps = [DUIPropsMapper getAllProperties];
    objectProps = [objectProps valueForKey: selectedLayerId];
    if ([[objectProps allKeys] containsObject:@"ignored"]) {
        NSString *isIgnored = [objectProps objectForKey:@"ignored"];
        NSLog(@"%@", isIgnored);
        if ([isIgnored isEqualToString:@"ON"]) {
            self.ignoreButton.state = NSOnState;
        }
    }
    

}

@end

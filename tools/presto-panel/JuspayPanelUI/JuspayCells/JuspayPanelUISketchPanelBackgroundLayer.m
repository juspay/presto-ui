//
//  JuspayPanelUISketchPanelBackgroundLayer.m
//  JuspayPanel
//
//  Created by Balaganesh S on 26/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "JuspayPanelUISketchPanelBackgroundLayer.h"

@implementation JuspayPanelUISketchPanelBackgroundLayer

- (void)drawRect:(NSRect)dirtyRect {
    [super drawRect:dirtyRect];
    
    [self.topBackgroundView setWantsLayer:YES];
    self.topBackgroundView.layer.backgroundColor = [NSColor colorWithRed:241/255.0f green:241/255.0f blue:241/255.0f alpha:1.0].CGColor;
    self.topBackgroundView.layer.borderWidth = 1.0f;
    self.topBackgroundView.layer.borderColor = [NSColor colorWithRed:209/255.0f green:209/255.0f blue:209/255.0f alpha:1.0f].CGColor;
    
    NSArray *buttons = @[self.createButton, self.exportButton, self.autoGenPageButton, self.resetButton, self.autoGenButton, self.refreshButton];
    for (NSButton *button in buttons) {
        [button setWantsLayer:YES];
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
    } else if (sender == self.autoGenPageButton) {
        option = @"autoGenPage";
    } else if (sender == self.resetButton) {
        option = @"reset";
    } else if (sender == self.autoGenButton) {
        option = @"autoGen";
    } else {
        option = @"refresh";
    }
    
    if (self.delegate && [self.delegate respondsToSelector:@selector(cell:buttonClicked:event:)]) {
        [self.delegate cell:self buttonClicked:sender event:option];
    }
}

- (void) setup {

    
}


@end

//
//  PrestoPanelUISketchPanelCellDefault.m
//  PrestoPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "PrestoPanelUISketchPanelCellOrientation.h"
#import "DUIPropsMapper.h"

@implementation PrestoPanelUISketchPanelCellOrientation

- (void)drawRect:(NSRect)dirtyRect {
    [super drawRect:dirtyRect];

    // Drawing code here.
    [self.topBackgroundView setWantsLayer:YES];
    self.topBackgroundView.layer.backgroundColor = [NSColor colorWithRed:241/255.0f green:241/255.0f blue:241/255.0f alpha:1.0].CGColor;
    self.topBackgroundView.layer.borderWidth = 1.0f;
    self.topBackgroundView.layer.borderColor = [NSColor colorWithRed:209/255.0f green:209/255.0f blue:209/255.0f alpha:1.0f].CGColor;
    
    NSArray *buttons = @[self.verticalButton, self.horizontalButton, self.scrollVerticalButton, self.scrollHorizontalButton];
    for (NSButton *button in buttons) {
        [button setWantsLayer:YES];
        button.layer.cornerRadius = 4.0f;
        button.layer.borderWidth = 1.0f;
        button.layer.borderColor = [NSColor colorWithRed:209/255.0f green:209/255.0f blue:209/255.0f alpha:1.0f].CGColor;
        if(button.state == NSOnState) {
            button.layer.backgroundColor = [NSColor whiteColor].CGColor;
        }
    }
}

- (void) setup {
    NSArray<NSButton*> *targets = @[self.verticalButton, self.horizontalButton, self.scrollVerticalButton, self.scrollHorizontalButton];
    
    for(NSButton* button in targets) {
        [button setTarget:self];
        [button setAction:@selector(clicked:)];
    }
}

- (void) updateForSelection:(NSString *)selectedLayerId {
    NSDictionary* props = [[DUIPropsMapper getAllProperties] objectForKey: selectedLayerId];
    
    NSString* orientation = [props objectForKey: @"orientation"];
    NSString* scrollView = [props objectForKey: @"scrollView"];
    
    NSButton* toHighlight;
    
    if ([scrollView isEqualToString: @"vertical"]) {
        toHighlight = self.scrollVerticalButton;
    } else if ([scrollView isEqualToString: @"horizontal"]) {
        toHighlight = self.scrollHorizontalButton;
    } else if([orientation isEqualToString: @"vertical"]) {
        toHighlight = self.verticalButton;
    } else if ([orientation isEqualToString: @"horizontal"]) {
        toHighlight = self.horizontalButton;
    }
    
    for (id view in self.subviews) {
        if([view isKindOfClass:[NSButton class]]) {
            NSButton *button = (NSButton *)view;
            button.layer.backgroundColor = [NSColor colorWithRed:230/255.0f green:230/255.0f blue:230/255.0f alpha:1.0f].CGColor;
            button.state = NSOffState;
        }
    }
    
    toHighlight.layer.backgroundColor = [NSColor colorWithRed:255/255.0f green:255/255.0f blue:255/255.0f alpha:1.0].CGColor;
    toHighlight.state = NSOnState;
}
    
/*!
 *  When an alignment option is clicked, dispatch the action to the delegate
 */
- (void)clicked:(NSButton *)sender {
    NSString *alignmentOption;
    
    if (sender == self.verticalButton) {
        alignmentOption = @"vertical";
        self.horizontalButton.state = NSOffState;
    } else if (sender == self.horizontalButton) {
        alignmentOption = @"horizontal";
        self.verticalButton.state = NSOffState;
    }
    
    if (self.delegate && [self.delegate respondsToSelector:@selector(cell:buttonClicked:event:)]) {
        [self.delegate cell:self buttonClicked:sender event:alignmentOption];
    }
}
@end

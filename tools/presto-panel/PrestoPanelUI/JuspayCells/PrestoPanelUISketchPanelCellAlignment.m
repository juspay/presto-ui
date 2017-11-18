//
//  PrestoPanelUISketchPanelCellDefault.m
//  PrestoPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "PrestoPanelUISketchPanelCellAlignment.h"
#import "DUIPropsMapper.h"


@implementation PrestoPanelUISketchPanelCellAlignment

- (void)drawRect:(NSRect)dirtyRect {
    [super drawRect:dirtyRect];

    // Drawing code here.
    [self.topBackgroundView setWantsLayer:YES];
    self.topBackgroundView.layer.backgroundColor = [NSColor colorWithRed:241/255.0f green:241/255.0f blue:241/255.0f alpha:1.0].CGColor;
    self.topBackgroundView.layer.borderWidth = 1.0f;
    self.topBackgroundView.layer.borderColor = [NSColor colorWithRed:209/255.0f green:209/255.0f blue:209/255.0f alpha:1.0f].CGColor;
    
    NSArray<NSButton*> *targets = [self getAllButtons];
    for(NSButton* button in targets) {
        [button setWantsLayer:YES];
        button.layer.cornerRadius = 4.0f;
        button.layer.borderWidth = 1.0f;
        button.layer.borderColor = [NSColor colorWithRed:209/255.0f green:209/255.0f blue:209/255.0f alpha:1.0f].CGColor;
        if(button.state == NSOnState) {
            button.layer.backgroundColor = [NSColor whiteColor].CGColor;
        }
    }
}

- (NSArray *)getAllButtons {
    return @[self.centerVerticalAlign, self.centerHorizontalAlign, self.leftAlign, self.rightAlign, self.topAlign, self.bottomAlign, self.center, self.width, self.height];
}

- (NSArray *)getAlignButtons {
    return @[self.leftAlign, self.rightAlign, self.topAlign, self.bottomAlign, self.center];
}

- (NSArray *)getMatchParentButtons {
    return @[self.width, self.height];
}

- (NSArray *)getOrientationButtons {
    return @[self.centerVerticalAlign, self.centerHorizontalAlign];
}

- (void) setup {
    NSArray<NSButton*> *targets = [self getAllButtons];
    
    for(NSButton* button in targets) {
        [button setTarget:self];
        [button setAction:@selector(clicked:)];
    }
}

- (void)setStateOffForAllExcept:(NSButton *)sender {
    NSArray *buttons = [self getAllButtons];
    for (NSButton *button in buttons) {
        if(button != sender) {
            button.state = NSOffState;
        }
    }
}

- (void)setStateOffForAlignExcept:(NSButton *)sender {
    NSArray *buttons = [self getAlignButtons];
    for (NSButton *button in buttons) {
        if(button != sender) {
            button.state = NSOffState;
        }
    }
}

- (void)setStateOffForMatchParentExcept:(NSButton *)sender {
    NSArray *buttons = [self getMatchParentButtons];
    for (NSButton *button in buttons) {
        if(button != sender) {
            button.state = NSOffState;
        }
    }
}

- (void)setStateOffForOrientationExcept:(NSButton *)sender {
    NSArray *buttons = [self getOrientationButtons];
    for (NSButton *button in buttons) {
        if(button != sender) {
            button.state = NSOffState;
        }
    }
}

/*!
 *  When an alignment option is clicked, dispatch the action to the delegate
 */
- (void)clicked:(NSButton*)sender {
    NSString *alignmentOption;
    NSString *senderOption;
    
    if (sender == self.centerVerticalAlign) {
        alignmentOption = @"centerVertical";
        senderOption = @"orientation";
    } else if (sender == self.centerHorizontalAlign) {
        alignmentOption = @"centerHorizontal";
        senderOption = @"orientation";
    } else if(sender == self.leftAlign) {
        alignmentOption = @"left";
        senderOption = @"align";
    } else if (sender == self.rightAlign) {
        alignmentOption = @"right";
        senderOption = @"align";
    } else if (sender == self.topAlign) {
        alignmentOption = @"top";
        senderOption = @"align";
    } else if (sender == self.bottomAlign) {
        alignmentOption = @"bottom";
        senderOption = @"align";
    } else if (sender == self.center) {
        alignmentOption = @"center";
        senderOption = @"align";
    } else if (sender == self.width) {
        alignmentOption = @"widthMatchParent";
        senderOption = @"matchParent";
    } else if (sender == self.height) {
        alignmentOption = @"heightMatchParent";
        senderOption = @"matchParent";
    }
    
    if ([senderOption  isEqualToString: @"align"]) {
        [self setStateOffForAlignExcept:sender];
    } else if ([senderOption  isEqualToString: @"matchParent"]) {
        [self setStateOffForMatchParentExcept:sender];
    } else if ([senderOption  isEqualToString: @"orientation"]) {
        [self setStateOffForOrientationExcept:sender];
    }
    // [self setStateOffForAllExcept:sender];
    
    if (self.delegate && [self.delegate respondsToSelector:@selector(cell:buttonClicked:event:)]) {
        [self.delegate cell:self buttonClicked:sender event:alignmentOption];
    }
}
    
- (void) updateForSelection:(NSString *)selectedLayerId {
    NSDictionary* props = [[DUIPropsMapper getAllProperties] objectForKey: selectedLayerId];
        
    NSString* align = [props objectForKey: @"align"];
    NSString* orientation = [props objectForKey: @"orientation"];
    NSString* width = [props objectForKey: @"width"];
    NSString* height = [props objectForKey: @"height"];
    
    NSButton* toHighlight;
    NSButton* widthToHighlight;
    NSButton* alignToHighlight;
    NSButton* orientationToHighlight;
        
    if([orientation isEqualToString: @"centerVertical"]) {
        orientationToHighlight = self.centerVerticalAlign;
    } else if ([orientation isEqualToString: @"centerHorizontal"]) {
        orientationToHighlight = self.centerHorizontalAlign;
    }
    
    if ([align isEqualToString: @"left"]) {
        alignToHighlight = self.leftAlign;
    } else if ([align isEqualToString: @"top"]) {
        alignToHighlight = self.topAlign;
    } else if ([align isEqualToString: @"right"]) {
        alignToHighlight = self.rightAlign;
    } else if ([align isEqualToString: @"bottom"]) {
        alignToHighlight = self.bottomAlign;
    } else if ([align isEqualToString: @"center"]) {
        alignToHighlight = self.center;
    }
    
    if ([width isEqualToString: @"match_parent"]) {
        widthToHighlight = self.width;
    }
    
    if ([height isEqualToString: @"match_parent"]) {
        toHighlight = self.height;
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
    
    widthToHighlight.layer.backgroundColor = [NSColor colorWithRed:255/255.0f green:255/255.0f blue:255/255.0f alpha:1.0].CGColor;
    widthToHighlight.state = NSOnState;
    
    alignToHighlight.layer.backgroundColor = [NSColor colorWithRed:255/255.0f green:255/255.0f blue:255/255.0f alpha:1.0].CGColor;
    alignToHighlight.state = NSOnState;
    
    orientationToHighlight.layer.backgroundColor = [NSColor colorWithRed:255/255.0f green:255/255.0f blue:255/255.0f alpha:1.0].CGColor;
    orientationToHighlight.state = NSOnState;
}

@end

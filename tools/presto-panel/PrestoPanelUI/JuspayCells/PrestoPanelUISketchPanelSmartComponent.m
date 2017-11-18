//
//  PrestoPanelUISketchPanelSmartComponent.m
//  PrestoPanel
//
//  Created by Balaganesh S on 01/08/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "PrestoPanelUISketchPanelSmartComponent.h"
#import "DUIPropsMapper.h"

@interface PrestoPanelUISketchPanelSmartComponent()
@property (nonatomic, strong) NSArray *eventButtons;
@end

@implementation PrestoPanelUISketchPanelSmartComponent

static NSMutableArray *artboardNames;
static NSMutableArray *symbolNames;
static id currentPage;
    
- (void)drawRect:(NSRect)dirtyRect {
    [super drawRect:dirtyRect];
    
    [self.topBackgroundView setWantsLayer:YES];
    self.topBackgroundView.layer.backgroundColor = [NSColor colorWithRed:241/255.0f green:241/255.0f blue:241/255.0f alpha:1.0].CGColor;
    self.topBackgroundView.layer.borderWidth = 1.0f;
    self.topBackgroundView.layer.borderColor = [NSColor colorWithRed:209/255.0f green:209/255.0f blue:209/255.0f alpha:1.0f].CGColor;
}

- (void) setup {
    [self.objectTypeList setAction:@selector(menuItemChanged:)];
    [self.objectTypeList setTarget:self];
    self.eventButtons = @[self.onClickButton, self.onChangeButton, self.onLongPressButton];
    for (NSButton *button in self.eventButtons) {
        [button setAction:@selector(buttonStateChanged:)];
        [button setTarget:self];
    }
    [self.overlayList addItemWithTitle:@"None"];
    [self.overlayList setEnabled:false];

}
    
+ (void)setArtboardNames:(NSArray *)artboards forPage:(id)page; {
    artboardNames = [[NSMutableArray alloc] init];
    symbolNames = [[NSMutableArray alloc] init];
    currentPage = page;
    
    for (id artboard in artboards) {
        
        if([[artboard className] isEqualToString:@"MSArtboardGroup"]) {
            [artboardNames addObject:[NSString stringWithFormat:@"%@", [artboard name]]];
        } else {
            [symbolNames addObject:[NSString stringWithFormat:@"%@", [artboard name]]];
        }
    }
}


- (void)menuItemChanged:(NSPopUpButton *)sender {
    if(self.delegate && [self.delegate respondsToSelector:@selector(menuItemChanged:value:)]) {
        if([sender.title isEqual:@"Radio Button"]) {
            NSString *pageName = [currentPage name];
            self.overlayList.enabled = true;
            if(symbolNames.count != 0 && [pageName isEqualToString:@"Symbols"]) {
                [self.overlayList addItemsWithTitles:[symbolNames sortedArrayUsingSelector:@selector(localizedCaseInsensitiveCompare:)]];
            }
        } else {
            self.overlayList.enabled = false;
        }
        [self.delegate menuItemChanged:@"componentType" value:sender.title];
    }
}

- (void)buttonStateChanged:(NSButton *)sender {
    if(self.delegate && [self.delegate respondsToSelector:@selector(checkboxStateChanged:)]) {
        [self.delegate checkboxStateChanged:sender];
    }
}

- (void) updateForSelection: (NSString*) selectedLayerId {
    NSDictionary* props = [[DUIPropsMapper getAllProperties] objectForKey: selectedLayerId];
    
    self.onClickButton.state = NSOffState;
    self.onChangeButton.state = NSOffState;
    self.onLongPressButton.state = NSOffState;
    
    NSArray *events = [props objectForKey:@"events"];
    NSString *componentType = [props objectForKey: @"componentType"];
    
    if([events containsObject:@"onClick"]) {
        self.onClickButton.state = NSOnState;
    }
    if([events containsObject:@"onChange"]) {
        self.onChangeButton.state = NSOnState;
    }
    if([events containsObject:@"onLongPress"]) {
        self.onLongPressButton.state = NSOnState;
    }
    self.objectTypeList.title = componentType ? componentType : @"None";

}
    

@end

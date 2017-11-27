//
//  PrestoPanelUISketchPanelScreenFlow.m
//  JuspayPanel
//
//  Created by Balaganesh S on 08/08/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "PrestoPanelUISketchPanelScreenFlow.h"
#import "DUIPropsMapper.h"

@interface PrestoPanelUISketchPanelScreenFlow()

@property (nonatomic, strong) NSString *type;

@end

@implementation PrestoPanelUISketchPanelScreenFlow

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

- (void)setup {
    [self.artboardList removeAllItems];
    [self.artboardList setAction:@selector(menuItemChanged:)];
    [self.artboardList setTarget:self];
    [self.overlayList setAction:@selector(menuItemChanged:)];
    [self.overlayList setTarget:self];
    [self.artboardList addItemWithTitle:@"None"];
    [self.overlayList setEnabled:false];
    if(artboardNames.count != 0) {
        [self.artboardList addItemsWithTitles:[artboardNames sortedArrayUsingSelector:@selector(localizedCaseInsensitiveCompare:)]];
    }
}

- (void)menuItemChanged:(NSPopUpButton *)sender {
    
    if(self.type && self.delegate && [self.delegate respondsToSelector:@selector(menuItemChanged:value:)]) {
        if(sender == self.artboardList) {
            [self.delegate menuItemChanged:self.type value:sender.title];
        } else {
            [self.delegate menuItemChanged:@"overlayType" value:sender.title];
        }
    }
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

- (void ) updateForSelection: (NSString*) selectedLayerId {
    
    [self.artboardList removeAllItems];
    [self.artboardList addItemWithTitle:@"None"];
    if(artboardNames.count != 0) {
        [self.artboardList addItemsWithTitles:[artboardNames sortedArrayUsingSelector:@selector(localizedCaseInsensitiveCompare:)]];
    }
    
    NSDictionary* props = [[DUIPropsMapper getAllProperties] objectForKey: selectedLayerId];
    
    NSString* componentType = nil;
    if([props objectForKey:@"screenFlowTarget"]) {
        componentType = [NSString stringWithFormat:@"%@", [props objectForKey:@"screenFlowTarget"]];
        self.type = @"screenFlowTarget";
        [self.overlayList setEnabled:false];
        [self.screenFlowOption setState:NSOnState];
        [self.overlayOption setState:NSOffState];
    } else if([props objectForKey:@"overlayTarget"]) {
        self.type = @"overlayTarget";
        if(symbolNames.count != 0) {
            [self.artboardList addItemsWithTitles:[symbolNames sortedArrayUsingSelector:@selector(localizedCaseInsensitiveCompare:)]];
        }
        componentType = [NSString stringWithFormat:@"%@", [props objectForKey:@"overlayTarget"]];
        [self.overlayList setEnabled:true];
        if([props objectForKey:@"overlayType"]) {
            self.overlayList.title = [props objectForKey:@"overlayType"];
        } else {
            self.overlayList.title = @"None";
        }
        [self.overlayOption setState:NSOnState];
        [self.screenFlowOption setState:NSOffState];
    }
    
    if(componentType) {
        if([self.artboardList.menu itemWithTitle:componentType])
        self.artboardList.title = componentType;
    } else {
        self.artboardList.title = @"None";
        self.overlayList.title = @"None";
        [self.overlayList setEnabled:false];
        [self.overlayOption setState:NSOffState];
        [self.screenFlowOption setState:NSOffState];
    }
}

- (IBAction)onTypeSelected:(NSButton *)sender {
    [self.artboardList removeAllItems];
    [self.artboardList addItemWithTitle:@"None"];
    NSString *pageName = [currentPage name];
    if([sender.title isEqualToString:@"Overlay"]) {
        self.type = @"overlayTarget";
        self.overlayList.enabled = true;
        if(symbolNames.count != 0 && [pageName isEqualToString:@"Symbols"]) {
            [self.artboardList addItemsWithTitles:[symbolNames sortedArrayUsingSelector:@selector(localizedCaseInsensitiveCompare:)]];
        }
    } else {
        self.type = @"screenFlowTarget";
        self.overlayList.enabled = false;
    }
    
    if(![pageName isEqualToString:@"Symbols"] && artboardNames.count != 0) {
        [self.artboardList addItemsWithTitles:[artboardNames sortedArrayUsingSelector:@selector(localizedCaseInsensitiveCompare:)]];
    }
    
    [self.artboardList setTitle:@"None"];
    [self.overlayList setTitle:@"None"];
    if(self.type && self.delegate && [self.delegate respondsToSelector:@selector(menuItemChanged:value:)]) {
        [self.delegate menuItemChanged:self.type value:self.artboardList.title];
    }
}

@end

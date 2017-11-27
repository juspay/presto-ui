//
//  PrestoPanelUISketchPanelController.m
//  JuspayPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "PrestoPanelUISketchPanelController.h"
#import "PrestoPanelUISketchPanelCell.h"
#import "PrestoPanelUISketchPanelCellHeader.h"
#import "PrestoPanelUISketchPanelCellAlignment.h"
#import "PrestoPanelUISketchPanelCellSpacing.h"
#import "PrestoPanelUISketchPanelCellOrientation.h"
#import "PrestoPanelUISketchPanelBackgroundLayer.h"
#import "PrestoPanelUISketchPanelSmartComponent.h"
#import "PrestoPanelUISketchPanelScreenFlow.h"
#import "PrestoPanelUISketchPanel.h"
#import "DUIPropsMapper.h"
@import JavaScriptCore;
#import <CocoaScript/COScript.h>
#import <Mocha/Mocha.h>
#import <Mocha/MOClosure.h>
#import <Mocha/MOJavaScriptObject.h>
#import <Mocha/MochaRuntime_Private.h>
#import "PrestoPanelUISketchPanelDataSource.h"
#import <objc/objc-class.h>


@interface PrestoPanelUISketchPanelController () <JuspayCellDelegate>

@property (nonatomic, strong) id <PrestoPanelUIMSInspectorStackView> stackView; // MSInspectorStackView
@property (nonatomic, strong) id <PrestoPanelUIMSDocument> document;
@property (nonatomic, strong) PrestoPanelUISketchPanel *panel;
@property (nonatomic, copy) NSArray *selection;
//@property (nonatomic, strong) NSPasteboard *pasteBoard;
//@property (nonatomic) NSInteger previousChangeCount;
@end

@implementation PrestoPanelUISketchPanelController

- (instancetype)initWithDocument:(id <PrestoPanelUIMSDocument>)document {
    if (self = [super init]) {
        _document = document;
        _panel = [[PrestoPanelUISketchPanel alloc] initWithStackView:nil];
        _panel.datasource = self;
    }
    return self;
}

- (void)selectionDidChange :(NSArray *)selection :(id)command {
    self.selection = [selection valueForKey:@"layers"];         // To get NSArray from MSLayersArray

    self.panel.stackView = [(NSObject *)_document valueForKeyPath:@"inspectorController.currentController.stackView"];
    [self.panel reloadData];
}

- (void) copy:(id) sender {
    NSLog(@"test");
}
    
#pragma mark - PrestoPanelUISketchPanelDataSource

- (PrestoPanelUISketchPanelCell *)headerForPrestoPanelUISketchPanel:(PrestoPanelUISketchPanel *)panel {
    PrestoPanelUISketchPanelCellHeader *cell = (PrestoPanelUISketchPanelCellHeader *)[panel dequeueReusableCellForReuseIdentifier:@"header"];
    
    if ( ! cell) {
        cell = [PrestoPanelUISketchPanelCellHeader loadNibNamed:@"PrestoPanelUISketchPanelCellHeader"];
        cell.reuseIdentifier = @"header";
    }
    
    cell.titleLabel.stringValue = @"Presto Panel";
    return cell;
}

- (NSUInteger)numberOfRowsForPrestoPanelUISketchPanel:(PrestoPanelUISketchPanel *)panel {
    return 2;    // Using self.selection as number of rows in the panel
}

- (PrestoPanelUISketchPanelCell *)PrestoPanelUISketchPanel:(PrestoPanelUISketchPanel *)panel itemForRowAtIndex:(NSUInteger)index {
    id selectedLayer = [self.selection objectAtIndex: 0];
    NSString* objectID = (NSString*)[selectedLayer objectID];
    
    PrestoPanelUISketchPanelCellDefault *cell = nil;
    
    if (index == 0) {
        cell = (PrestoPanelUISketchPanelScreenFlow *)[panel dequeueReusableCellForReuseIdentifier:@"screenFlow"];
        
        [PrestoPanelUISketchPanelScreenFlow setArtboardNames:self.artboards forPage:self.currentPage];
        if ( ! cell) {
            cell = [PrestoPanelUISketchPanelScreenFlow loadNibNamed:@"PrestoPanelUISketchPanelScreenFlow"];
            cell.reuseIdentifier = @"screenFlow";
            [cell setup];
        }
    } else if (index == 1) {
        [PrestoPanelUISketchPanelSmartComponent setArtboardNames:self.artboards forPage:self.currentPage];
        cell = (PrestoPanelUISketchPanelSmartComponent *)[panel dequeueReusableCellForReuseIdentifier:@"componentTypeCell"];
        if ( ! cell) {
            cell = [PrestoPanelUISketchPanelSmartComponent loadNibNamed:@"PrestoPanelUISketchPanelSmartComponent"];
            cell.reuseIdentifier = @"componentTypeCell";
            [cell setup];
        }
    } else if (index == 2) {
        cell = (PrestoPanelUISketchPanelBackgroundLayer *)[panel dequeueReusableCellForReuseIdentifier:@"backgroundLayer"];
        if ( ! cell) {
            cell = [PrestoPanelUISketchPanelBackgroundLayer loadNibNamed:@"PrestoPanelUISketchPanelBackgroundLayer"];
            cell.reuseIdentifier = @"backgroundLayer";
            [cell setup];
        }
    } else if (index == 3) {
        cell = (PrestoPanelUISketchPanelCellOrientation *)[panel dequeueReusableCellForReuseIdentifier:@"orientationCell"];
        if ( ! cell) {
            cell = [PrestoPanelUISketchPanelCellOrientation loadNibNamed:@"PrestoPanelUISketchPanelCellOrientation"];
            cell.reuseIdentifier = @"orientationCell";
            [cell setup];
        }
    } else if (index == 4){
        cell = (PrestoPanelUISketchPanelCellAlignment *)[panel dequeueReusableCellForReuseIdentifier:@"alignmentCell"];
        if ( ! cell) {
            cell = [PrestoPanelUISketchPanelCellAlignment loadNibNamed:@"PrestoPanelUISketchPanelCellAlignment"];
            cell.reuseIdentifier = @"alignmentCell";
            [cell setup];
        }
    } else if (index == 5){
        cell = (PrestoPanelUISketchPanelCellSpacing *)[panel dequeueReusableCellForReuseIdentifier:@"spacingCell"];
        if ( ! cell) {
            cell = [PrestoPanelUISketchPanelCellSpacing loadNibNamed:@"PrestoPanelUISketchPanelCellSpacing"];
            cell.reuseIdentifier = @"spacingCell";
            
            [cell setup];
        }

    }
    
    
    [cell updateForSelection: objectID];
    
    [(PrestoPanelUISketchPanelCellDefault*)cell setDelegate:self];
    
    return cell;
}

#pragma mark - Juspay Cell Delegate

- (void)cell:(PrestoPanelUISketchPanelCell *)cell buttonClicked:(NSButton*)button event:(NSString *)event{
    
    NSString *state = @"ON";
    
    if(button.state == NSOffState) {
        state = @"OFF";
    }
    
    Mocha *srt = [Mocha sharedRuntime];
    COScript *coscript = [srt valueForKey: @"__script"];
    NSLog(@"%@", coscript);
    id context = [srt valueForKey: @"__currentContext"];
    
    NSString* functionToCall;
    NSArray* argumentsToPass;
    
    if (![cell isKindOfClass:[PrestoPanelUISketchPanelBackgroundLayer class]]) {
        for (id view in cell.subviews) {
            if([view isKindOfClass:[NSButton class]]) {
                ((NSButton *)view).layer.backgroundColor = [NSColor colorWithRed:230/255.0f green:230/255.0f blue:230/255.0f alpha:1.0f].CGColor;
            }
        }
        if([state isEqualToString:@"ON"]) {
            button.layer.backgroundColor = [NSColor colorWithRed:255/255.0f green:255/255.0f blue:255/255.0f alpha:1.0].CGColor;
        }
        
        if ([cell isKindOfClass:[PrestoPanelUISketchPanelCellAlignment class]]) {
            functionToCall = @"onAlignmentSet";
            argumentsToPass = @[context, event, state];
        } else if ([cell isKindOfClass:[PrestoPanelUISketchPanelCellOrientation class]]) {
            functionToCall = @"onOrientationSet";
            argumentsToPass = @[context, event, state];
        } else if ([cell isKindOfClass:[PrestoPanelUISketchPanelCellSpacing class]]) {
            functionToCall = @"onSpacingSet";
            argumentsToPass = @[context, event];
        }
    } else {
        functionToCall = @"onActionClicked";
        argumentsToPass = @[context, event, state];
    }
    
    [coscript callFunctionNamed:functionToCall withArguments:argumentsToPass];
}

- (void)cell:(PrestoPanelUISketchPanelCell *)cell textChanged:(NSTextField*) view event:(NSString*)event {
    Mocha *srt = [Mocha sharedRuntime];
    COScript *coscript = [srt valueForKey: @"__script"];
    id context = [srt valueForKey:@"__currentContext"];
    
    NSArray* argumentsToPass;
    
    NSNumber* value = [NSNumber numberWithInt:[[view stringValue] intValue]];
    
    argumentsToPass = @[context, event, value];
    
    
    [coscript callFunctionNamed: @"onSpacingSet" withArguments: argumentsToPass];
}

- (void)menuItemChanged:(NSString *)name value:(NSString *)value {
    
    Mocha *srt = [Mocha sharedRuntime];
    COScript *coscript = [srt valueForKey: @"__script"];
    id context = [srt valueForKey:@"__currentContext"];
    
    NSString *functionToCall = nil;
    NSArray* argumentsToPass;
    
    if([name isEqualToString:@"componentType"] || [name isEqualToString:@"eventType"]) {
        functionToCall = @"onTypeChanged";
        argumentsToPass = @[context, name, value];
    } else {
        argumentsToPass = @[context, name, value];
        functionToCall = @"onActionTypeSet";
    }
    
    
    
    [coscript callFunctionNamed:functionToCall withArguments: argumentsToPass];
}

- (void)checkboxStateChanged:(NSButton *)checkbox {
    
    Mocha *srt = [Mocha sharedRuntime];
    COScript *coscript = [srt valueForKey: @"__script"];
    id context = [srt valueForKey:@"__currentContext"];
    
    NSString *functionToCall = @"onEventSet";
    NSString *value = @"false";
    if(checkbox.state == NSOnState) {
        value = @"true";
    }
    NSArray* argumentsToPass = @[context, checkbox.title, value];

    [coscript callFunctionNamed:functionToCall withArguments: argumentsToPass];
}

#pragma mark - Custom Metods


@end

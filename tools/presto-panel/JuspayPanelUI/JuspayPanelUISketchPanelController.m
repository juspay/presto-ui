//
//  JuspayPanelUISketchPanelController.m
//  JuspayPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "JuspayPanelUISketchPanelController.h"
#import "JuspayPanelUISketchPanelCell.h"
#import "JuspayPanelUISketchPanelCellHeader.h"
#import "JuspayPanelUISketchPanelCellAlignment.h"
#import "JuspayPanelUISketchPanelCellSpacing.h"
#import "JuspayPanelUISketchPanelCellOrientation.h"
#import "JuspayPanelUISketchPanelBackgroundLayer.h"
#import "JuspayPanelUISketchPanelSmartComponent.h"
#import "JuspayPanelUISketchPanelScreenFlow.h"
#import "JuspayPanelUISketchPanel.h"
#import "DUIPropsMapper.h"
@import JavaScriptCore;
#import <CocoaScript/COScript.h>
#import <Mocha/Mocha.h>
#import <Mocha/MOClosure.h>
#import <Mocha/MOJavaScriptObject.h>
#import <Mocha/MochaRuntime_Private.h>
#import "JuspayPanelUISketchPanelDataSource.h"
#import <objc/objc-class.h>


@interface JuspayPanelUISketchPanelController () <JuspayCellDelegate>

@property (nonatomic, strong) id <JuspayPanelUIMSInspectorStackView> stackView; // MSInspectorStackView
@property (nonatomic, strong) id <JuspayPanelUIMSDocument> document;
@property (nonatomic, strong) JuspayPanelUISketchPanel *panel;
@property (nonatomic, copy) NSArray *selection;
//@property (nonatomic, strong) NSPasteboard *pasteBoard;
//@property (nonatomic) NSInteger previousChangeCount;
@end

@implementation JuspayPanelUISketchPanelController

- (instancetype)initWithDocument:(id <JuspayPanelUIMSDocument>)document {
    if (self = [super init]) {
        _document = document;
        _panel = [[JuspayPanelUISketchPanel alloc] initWithStackView:nil];
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
    
#pragma mark - JuspayPanelUISketchPanelDataSource

- (JuspayPanelUISketchPanelCell *)headerForJuspayPanelUISketchPanel:(JuspayPanelUISketchPanel *)panel {
    JuspayPanelUISketchPanelCellHeader *cell = (JuspayPanelUISketchPanelCellHeader *)[panel dequeueReusableCellForReuseIdentifier:@"header"];
    
    if ( ! cell) {
        cell = [JuspayPanelUISketchPanelCellHeader loadNibNamed:@"JuspayPanelUISketchPanelCellHeader"];
        cell.reuseIdentifier = @"header";
    }
    
    cell.titleLabel.stringValue = @"Juspay";
    return cell;
}

- (NSUInteger)numberOfRowsForJuspayPanelUISketchPanel:(JuspayPanelUISketchPanel *)panel {
    return 6;    // Using self.selection as number of rows in the panel
}

- (JuspayPanelUISketchPanelCell *)JuspayPanelUISketchPanel:(JuspayPanelUISketchPanel *)panel itemForRowAtIndex:(NSUInteger)index {
    id selectedLayer = [self.selection objectAtIndex: 0];
    NSString* objectID = (NSString*)[selectedLayer objectID];
    
    JuspayPanelUISketchPanelCellDefault *cell = nil;
    
    if (index == 0) {
        cell = (JuspayPanelUISketchPanelBackgroundLayer *)[panel dequeueReusableCellForReuseIdentifier:@"backgroundLayer"];
        if ( ! cell) {
            cell = [JuspayPanelUISketchPanelBackgroundLayer loadNibNamed:@"JuspayPanelUISketchPanelBackgroundLayer"];
            cell.reuseIdentifier = @"backgroundLayer";
            [cell setup];
        }
    } else if (index == 1) {
        
        cell = (JuspayPanelUISketchPanelScreenFlow *)[panel dequeueReusableCellForReuseIdentifier:@"screenFlow"];
    
        [JuspayPanelUISketchPanelScreenFlow setArtboardNames:self.artboards forPage:self.currentPage];
        if ( ! cell) {
            cell = [JuspayPanelUISketchPanelScreenFlow loadNibNamed:@"JuspayPanelUISketchPanelScreenFlow"];
            cell.reuseIdentifier = @"screenFlow";
            [cell setup];
        }
    } else if (index == 2) {
        [JuspayPanelUISketchPanelSmartComponent setArtboardNames:self.artboards forPage:self.currentPage];
        cell = (JuspayPanelUISketchPanelSmartComponent *)[panel dequeueReusableCellForReuseIdentifier:@"componentTypeCell"];
        if ( ! cell) {
            cell = [JuspayPanelUISketchPanelSmartComponent loadNibNamed:@"JuspayPanelUISketchPanelSmartComponent"];
            cell.reuseIdentifier = @"componentTypeCell";
            [cell setup];
        }
    } else if (index == 3) {
        cell = (JuspayPanelUISketchPanelCellOrientation *)[panel dequeueReusableCellForReuseIdentifier:@"orientationCell"];
        if ( ! cell) {
            cell = [JuspayPanelUISketchPanelCellOrientation loadNibNamed:@"JuspayPanelUISketchPanelCellOrientation"];
            cell.reuseIdentifier = @"orientationCell";
            [cell setup];
        }
    } else if (index == 4){
        cell = (JuspayPanelUISketchPanelCellAlignment *)[panel dequeueReusableCellForReuseIdentifier:@"alignmentCell"];
        if ( ! cell) {
            cell = [JuspayPanelUISketchPanelCellAlignment loadNibNamed:@"JuspayPanelUISketchPanelCellAlignment"];
            cell.reuseIdentifier = @"alignmentCell";
            [cell setup];
        }
    } else if (index == 5){
        cell = (JuspayPanelUISketchPanelCellSpacing *)[panel dequeueReusableCellForReuseIdentifier:@"spacingCell"];
        if ( ! cell) {
            cell = [JuspayPanelUISketchPanelCellSpacing loadNibNamed:@"JuspayPanelUISketchPanelCellSpacing"];
            cell.reuseIdentifier = @"spacingCell";
            
            [cell setup];
        }

    }
    
    
    [cell updateForSelection: objectID];
    
    [(JuspayPanelUISketchPanelCellDefault*)cell setDelegate:self];
    
    return cell;
}

#pragma mark - Juspay Cell Delegate

- (void)cell:(JuspayPanelUISketchPanelCell *)cell buttonClicked:(NSButton*)button event:(NSString *)event{
    
    NSString *state = @"ON";
    
    if(button.state == NSOffState) {
        state = @"OFF";
    }
    
    Mocha *srt = [Mocha sharedRuntime];
    COScript *coscript = [srt valueForKey: @"__script"];
    id context = [srt valueForKey: @"__currentContext"];
    
    NSString* functionToCall;
    NSArray* argumentsToPass;
    
    if (![cell isKindOfClass:[JuspayPanelUISketchPanelBackgroundLayer class]]) {
        for (id view in cell.subviews) {
            if([view isKindOfClass:[NSButton class]]) {
                ((NSButton *)view).layer.backgroundColor = [NSColor colorWithRed:230/255.0f green:230/255.0f blue:230/255.0f alpha:1.0f].CGColor;
            }
        }
        if([state isEqualToString:@"ON"]) {
            button.layer.backgroundColor = [NSColor colorWithRed:255/255.0f green:255/255.0f blue:255/255.0f alpha:1.0].CGColor;
        }
        
        if ([cell isKindOfClass:[JuspayPanelUISketchPanelCellAlignment class]]) {
            functionToCall = @"onAlignmentSet";
            argumentsToPass = @[context, event, state];
        } else if ([cell isKindOfClass:[JuspayPanelUISketchPanelCellOrientation class]]) {
            functionToCall = @"onOrientationSet";
            argumentsToPass = @[context, event, state];
        } else if ([cell isKindOfClass:[JuspayPanelUISketchPanelCellSpacing class]]) {
            functionToCall = @"onSpacingSet";
            argumentsToPass = @[context, event];
        }
    } else {
        functionToCall = @"onActionClicked";
        argumentsToPass = @[context, event];
    }
    
    [coscript callFunctionNamed: functionToCall withArguments: argumentsToPass];
}

- (void)cell:(JuspayPanelUISketchPanelCell *)cell textChanged:(NSTextField*) view event:(NSString*)event {
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

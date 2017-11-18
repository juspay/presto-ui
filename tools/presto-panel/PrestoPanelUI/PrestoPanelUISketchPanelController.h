//
//  PrestoPanelUISketchPanelController.h
//  PrestoPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

@import Cocoa;
#import "PrestoPanelUIMSDocument.h"
#import "PrestoPanelUIMSInspectorStackView.h"
#import "PrestoPanelUISketchPanelDataSource.h"

@class PrestoPanelUISketchPanel;

@interface PrestoPanelUISketchPanelController : NSObject <PrestoPanelUISketchPanelDataSource>

@property (nonatomic, strong, readonly) id <PrestoPanelUIMSInspectorStackView> stackView; // MSInspectorStackView
@property (nonatomic, strong, readonly) id <PrestoPanelUIMSDocument> document;
@property (nonatomic, strong, readonly) PrestoPanelUISketchPanel *panel;
@property (nonatomic, strong) id context;
@property (nonatomic, strong) NSArray *artboards;
@property (nonatomic, strong) id currentPage;

- (instancetype)initWithDocument:(id <PrestoPanelUIMSDocument>)document;
- (void)selectionDidChange:(NSArray *)selectedItems :(id)command;
- (void)selection:(id)selection;
@end

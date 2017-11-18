//
//  JuspayPanelUISketchPanelController.h
//  JuspayPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

@import Cocoa;
#import "JuspayPanelUIMSDocument.h"
#import "JuspayPanelUIMSInspectorStackView.h"
#import "JuspayPanelUISketchPanelDataSource.h"

@class JuspayPanelUISketchPanel;

@interface JuspayPanelUISketchPanelController : NSObject <JuspayPanelUISketchPanelDataSource>

@property (nonatomic, strong, readonly) id <JuspayPanelUIMSInspectorStackView> stackView; // MSInspectorStackView
@property (nonatomic, strong, readonly) id <JuspayPanelUIMSDocument> document;
@property (nonatomic, strong, readonly) JuspayPanelUISketchPanel *panel;
@property (nonatomic, strong) id context;
@property (nonatomic, strong) NSArray *artboards;
@property (nonatomic, strong) id currentPage;

- (instancetype)initWithDocument:(id <JuspayPanelUIMSDocument>)document;
- (void)selectionDidChange:(NSArray *)selectedItems :(id)command;
- (void)selection:(id)selection;
@end

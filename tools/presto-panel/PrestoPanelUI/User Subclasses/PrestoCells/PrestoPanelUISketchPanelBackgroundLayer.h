//
//  PrestoPanelUISketchPanelBackgroundLayer.h
//  JuspayPanel
//
//  Created by Balaganesh S on 26/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "PrestoPanelUISketchPanelCellDefault.h"

@interface PrestoPanelUISketchPanelBackgroundLayer : PrestoPanelUISketchPanelCellDefault

@property (strong) IBOutlet NSView *topBackgroundView;
@property (strong) IBOutlet NSButton *createButton;
@property (strong) IBOutlet NSButton *exportButton;
@property (strong) IBOutlet NSButton *autoGenArtboardButton;
@property (strong) IBOutlet NSButton *resetButton;
@property (strong) IBOutlet NSButton *refreshButton;
@property (strong) IBOutlet NSButton *ignoreButton;

@end

//
//  JuspayPanelUISketchPanelBackgroundLayer.h
//  JuspayPanel
//
//  Created by Balaganesh S on 26/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "JuspayPanelUISketchPanelCellDefault.h"

@interface JuspayPanelUISketchPanelBackgroundLayer : JuspayPanelUISketchPanelCellDefault

@property (strong) IBOutlet NSView *topBackgroundView;
@property (strong) IBOutlet NSButton *createButton;
@property (strong) IBOutlet NSButton *exportButton;
@property (strong) IBOutlet NSButton *autoGenPageButton;
@property (strong) IBOutlet NSButton *resetButton;
@property (strong) IBOutlet NSButton *autoGenButton;
@property (strong) IBOutlet NSButton *refreshButton;

@end

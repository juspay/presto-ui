//
//  PrestoPanelUISketchPanelScreenFlow.h
//  JuspayPanel
//
//  Created by Balaganesh S on 08/08/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "PrestoPanelUISketchPanelCellDefault.h"

@interface PrestoPanelUISketchPanelScreenFlow : PrestoPanelUISketchPanelCellDefault
@property (strong) IBOutlet NSView *topBackgroundView;
@property (strong) IBOutlet NSPopUpButton *artboardList;
@property (strong) IBOutlet NSPopUpButton *overlayList;
@property (strong) IBOutlet NSButton *overlayOption;
@property (strong) IBOutlet NSButton *screenFlowOption;


+ (void)setArtboardNames:(NSArray *)artboards forPage:(id)page;

@end

//
//  PrestoPanelUISketchPanelCellDefault.h
//  PrestoPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "PrestoPanelUISketchPanelCellDefault.h"

@interface PrestoPanelUISketchPanelCellOrientation : PrestoPanelUISketchPanelCellDefault

@property (strong) IBOutlet NSView *topBackgroundView;
@property (weak) IBOutlet NSButton *verticalButton;
@property (weak) IBOutlet NSButton *horizontalButton;
@property (weak) IBOutlet NSButton *scrollVerticalButton;
@property (weak) IBOutlet NSButton *scrollHorizontalButton;

@end

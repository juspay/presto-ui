//
//  JuspayPanelUISketchPanelCellDefault.h
//  JuspayPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "JuspayPanelUISketchPanelCellDefault.h"

@interface JuspayPanelUISketchPanelCellSpacing : JuspayPanelUISketchPanelCellDefault

@property (strong) IBOutlet NSView *topBackgroundView;
@property (strong) IBOutlet NSView *marginView;
@property (strong) IBOutlet NSView *paddingView;
@property (strong) IBOutlet NSView *innerView;

@property (strong) IBOutlet NSTextField *paddingLeftLabel;
@property (strong) IBOutlet NSTextField *paddingTopLabel;
@property (strong) IBOutlet NSTextField *paddingRightLabel;
@property (strong) IBOutlet NSTextField *paddingBottomLabel;


@property (strong) IBOutlet NSTextField *weight;
@property (strong) IBOutlet NSTextField *paddingLeft;
@property (strong) IBOutlet NSTextField *paddingTop;
@property (strong) IBOutlet NSTextField *paddingRight;
@property (strong) IBOutlet NSTextField *paddingBottom;

@property (strong) IBOutlet NSTextField *marginLeftLabel;
@property (strong) IBOutlet NSTextField *marginTopLabel;
@property (strong) IBOutlet NSTextField *marginRightLabel;
@property (strong) IBOutlet NSTextField *marginBottomLabel;


@property (strong) IBOutlet NSTextField *marginLeft;
@property (strong) IBOutlet NSTextField *marginTop;
@property (strong) IBOutlet NSTextField *marginRight;
@property (strong) IBOutlet NSTextField *marginBottom;

- (void) updateSpacingFor:(NSString*) objectID;
@end

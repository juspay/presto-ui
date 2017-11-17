//
//  JuspayPanelUISketchPanelCellDefault.h
//  JuspayPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "JuspayPanelUISketchPanelCell.h"

@interface JuspayPanelUISketchPanelCellDefault : JuspayPanelUISketchPanelCell

@property (nonatomic, weak) IBOutlet NSTextField *titleLabel;
@property (nonatomic, weak) IBOutlet NSTextField *property;

// Map the padding elements
@property (nonatomic, weak) IBOutlet NSTextField *paddingTop;
@property (nonatomic, weak) IBOutlet NSTextField *paddingBottom;
@property (nonatomic, weak) IBOutlet NSTextField *paddingLeft;
@property (nonatomic, weak) IBOutlet NSTextField *paddingRight;
@property (weak) IBOutlet NSView *backgroundView;
@property (weak) IBOutlet NSButton *vertical;
@property (weak) IBOutlet NSButton *horizontal;

@end

//
//  PrestoPanelUISketchPanelSmartComponent.h
//  PrestoPanel
//
//  Created by Balaganesh S on 01/08/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "PrestoPanelUISketchPanelCellDefault.h"

@interface PrestoPanelUISketchPanelSmartComponent :   PrestoPanelUISketchPanelCellDefault

@property (strong) IBOutlet NSView *topBackgroundView;
@property (strong) IBOutlet NSPopUpButton *objectTypeList;
@property (strong) IBOutlet NSButton *onClickButton;
@property (strong) IBOutlet NSButton *onChangeButton;
@property (strong) IBOutlet NSButton *onLongPressButton;
@property (strong) IBOutlet NSPopUpButton *overlayList;
    
+ (void)setArtboardNames:(NSArray *)artboards forPage:(id)page;    

@end

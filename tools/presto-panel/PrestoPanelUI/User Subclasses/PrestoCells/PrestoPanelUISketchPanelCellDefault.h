//
//  PrestoPanelUISketchPanelCellDefault.h
//  JuspayPanel
//
//  Created by Apple on 7/19/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "PrestoPanelUISketchPanelCell.h"

@protocol JuspayCellDelegate <NSObject>

- (void)cell:(PrestoPanelUISketchPanelCell*)cell buttonClicked:(NSButton*)button event:(NSString*)event;

- (void)cell:(PrestoPanelUISketchPanelCell*)cell textChanged:(NSTextField*)button event:(NSString*)event;

- (void)menuItemChanged:(NSString *)name value:(NSString *)value;

- (void)checkboxStateChanged:(NSButton *)checkbox;

@end

@interface PrestoPanelUISketchPanelCellDefault : PrestoPanelUISketchPanelCell
    
@property (nonatomic, weak) id<JuspayCellDelegate> delegate;

- (void ) updateForSelection: (NSString*) selectedLayerId;
    
@end

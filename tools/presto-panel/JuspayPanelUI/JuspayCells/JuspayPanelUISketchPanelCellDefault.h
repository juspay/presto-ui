//
//  JuspayPanelUISketchPanelCellDefault.h
//  JuspayPanel
//
//  Created by Apple on 7/19/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "JuspayPanelUISketchPanelCell.h"

@protocol JuspayCellDelegate <NSObject>

- (void)cell:(JuspayPanelUISketchPanelCell*)cell buttonClicked:(NSButton*)button event:(NSString*)event;

- (void)cell:(JuspayPanelUISketchPanelCell*)cell textChanged:(NSTextField*)button event:(NSString*)event;

- (void)menuItemChanged:(NSString *)name value:(NSString *)value;

- (void)checkboxStateChanged:(NSButton *)checkbox;

@end

@interface JuspayPanelUISketchPanelCellDefault : JuspayPanelUISketchPanelCell
    
@property (nonatomic, weak) id<JuspayCellDelegate> delegate;

- (void ) updateForSelection: (NSString*) selectedLayerId;
    
@end

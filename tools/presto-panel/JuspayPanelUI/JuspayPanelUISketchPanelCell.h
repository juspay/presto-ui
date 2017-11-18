//
//  JuspayPanelUISketchPanelCell.h
//  JuspayPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@class JuspayPanelUISketchPanelCell;

@interface JuspayPanelUISketchPanelCell : NSView

@property (nonatomic, copy) NSString *reuseIdentifier;

+ (instancetype)loadNibNamed:(NSString *)nibName;
- (void) setup;

@end

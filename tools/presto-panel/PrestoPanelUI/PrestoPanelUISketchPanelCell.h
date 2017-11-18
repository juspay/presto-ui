//
//  PrestoPanelUISketchPanelCell.h
//  PrestoPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@class PrestoPanelUISketchPanelCell;

@interface PrestoPanelUISketchPanelCell : NSView

@property (nonatomic, copy) NSString *reuseIdentifier;

+ (instancetype)loadNibNamed:(NSString *)nibName;
- (void) setup;

@end

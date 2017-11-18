//
//  PrestoPanelUISketchPanel.h
//  PrestoPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "PrestoPanelUISketchPanelDataSource.h"
#import "PrestoPanelUIMSInspectorStackView.h"

@class PrestoPanelUISketchPanelCell;

@interface PrestoPanelUISketchPanel : NSObject

@property (nonatomic, strong, readonly) NSArray *views;
@property (nonatomic, weak) id <PrestoPanelUIMSInspectorStackView> stackView;
@property (nonatomic, weak) id <PrestoPanelUISketchPanelDataSource> datasource;

- (instancetype)initWithStackView:(id <PrestoPanelUIMSInspectorStackView>)stackView;
- (void)reloadData;
- (PrestoPanelUISketchPanelCell *)dequeueReusableCellForReuseIdentifier:(NSString *)identifier;

@end

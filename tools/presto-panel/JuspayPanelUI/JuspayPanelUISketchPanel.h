//
//  JuspayPanelUISketchPanel.h
//  JuspayPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "JuspayPanelUISketchPanelDataSource.h"
#import "JuspayPanelUIMSInspectorStackView.h"

@class JuspayPanelUISketchPanelCell;

@interface JuspayPanelUISketchPanel : NSObject

@property (nonatomic, strong, readonly) NSArray *views;
@property (nonatomic, weak) id <JuspayPanelUIMSInspectorStackView> stackView;
@property (nonatomic, weak) id <JuspayPanelUISketchPanelDataSource> datasource;

- (instancetype)initWithStackView:(id <JuspayPanelUIMSInspectorStackView>)stackView;
- (void)reloadData;
- (JuspayPanelUISketchPanelCell *)dequeueReusableCellForReuseIdentifier:(NSString *)identifier;

@end

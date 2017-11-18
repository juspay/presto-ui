//
//  JuspayPanelUISketchPanelDataSource.h
//  JuspayPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Foundation/Foundation.h>

@class JuspayPanelUISketchPanel;
@class JuspayPanelUISketchPanelCell;

@protocol JuspayPanelUISketchPanelDataSource <NSObject>

- (NSUInteger)numberOfRowsForJuspayPanelUISketchPanel:(JuspayPanelUISketchPanel *)panel;
- (JuspayPanelUISketchPanelCell *)JuspayPanelUISketchPanel:(JuspayPanelUISketchPanel *)panel itemForRowAtIndex:(NSUInteger)index;
- (JuspayPanelUISketchPanelCell *)headerForJuspayPanelUISketchPanel:(JuspayPanelUISketchPanel *)panel;

@end

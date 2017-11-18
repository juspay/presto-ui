//
//  PrestoPanelUISketchPanelDataSource.h
//  PrestoPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Foundation/Foundation.h>

@class PrestoPanelUISketchPanel;
@class PrestoPanelUISketchPanelCell;

@protocol PrestoPanelUISketchPanelDataSource <NSObject>

- (NSUInteger)numberOfRowsForPrestoPanelUISketchPanel:(PrestoPanelUISketchPanel *)panel;
- (PrestoPanelUISketchPanelCell *)PrestoPanelUISketchPanel:(PrestoPanelUISketchPanel *)panel itemForRowAtIndex:(NSUInteger)index;
- (PrestoPanelUISketchPanelCell *)headerForPrestoPanelUISketchPanel:(PrestoPanelUISketchPanel *)panel;

@end

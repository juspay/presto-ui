//
//  PrestoPanelUIMSInspectorStackView.h
//  JuspayPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#ifndef PrestoPanelUIMSInspectorStackView_h
#define PrestoPanelUIMSInspectorStackView_h

@protocol PrestoPanelUIMSInspectorStackView <NSObject>

@property (nonatomic, strong) NSArray *sectionViewControllers;
- (void)reloadWithViewControllers:(NSArray *)controllers;

@end

#endif /* PrestoPanelUIMSInspectorStackView_h */

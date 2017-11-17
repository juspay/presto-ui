//
//  JuspayPanelUIMSInspectorStackView.h
//  JuspayPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#ifndef JuspayPanelUIMSInspectorStackView_h
#define JuspayPanelUIMSInspectorStackView_h

@protocol JuspayPanelUIMSInspectorStackView <NSObject>

@property (nonatomic, strong) NSArray *sectionViewControllers;
- (void)reloadWithViewControllers:(NSArray *)controllers;

@end

#endif /* JuspayPanelUIMSInspectorStackView_h */

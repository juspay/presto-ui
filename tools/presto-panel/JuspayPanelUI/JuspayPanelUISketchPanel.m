//
//  JuspayPanelUISketchPanel.m
//  JuspayPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "JuspayPanelUISketchPanel.h"
#import "JuspayPanelUISketchPanelCell.h"

@interface JuspayPanelUISketchPanel ()

@property (nonatomic, copy) NSArray *items;
@property (nonatomic, strong) NSMutableDictionary *recycler;

@end

@implementation JuspayPanelUISketchPanel

- (instancetype)initWithStackView:(id<JuspayPanelUIMSInspectorStackView>)stackView {
    self = [super init];
    if (self) {
        _stackView = stackView;
        _recycler = [NSMutableDictionary dictionary];
    }
    return self;
}

- (NSArray *)views {
    return [self.items valueForKeyPath:@"view"];
}

- (void)recycleCell:(JuspayPanelUISketchPanelCell *)cell {
    NSString *identifier = [cell reuseIdentifier];

    if ( ! identifier) {
        return;
    }

    NSMutableSet *set = _recycler[identifier];
    if ( ! set) {
        set = [NSMutableSet set];
        _recycler[identifier] = set;
    }
    [set addObject:cell];
}

- (JuspayPanelUISketchPanelCell *)dequeueReusableCellForReuseIdentifier:(NSString *)identifier {
    NSMutableSet *set = _recycler[identifier];
    id cell = [set anyObject];
    if (cell) {
        [set removeObject:cell];
    }
    return cell;
}

- (void)reloadData {
    NSMutableArray *sectionViewControllers = [[_stackView sectionViewControllers] mutableCopy];

    // Make sure don't add two instance of the same controller
    if ([sectionViewControllers indexOfObject:self] == NSNotFound) {
        [sectionViewControllers addObject:self];
    }

    NSUInteger count = [self.datasource numberOfRowsForJuspayPanelUISketchPanel:self];
    NSMutableArray *items = [NSMutableArray array];

    // Add header
    [items insertObject:[self.datasource headerForJuspayPanelUISketchPanel:self] atIndex:0];

    // Add cells
    for (NSUInteger i = 0; i < count; i++) {
        [items addObject:[self.datasource JuspayPanelUISketchPanel:self itemForRowAtIndex:i]];
    }

    // Recycle cells
    [self.items enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        [self recycleCell:obj];
    }];

    self.items = items;
    [_stackView reloadWithViewControllers:sectionViewControllers];
}

- (BOOL)wantsSeparatorBetweenView:(NSView *)view andView:(NSView *)nextView {
    if ( view == [self.items firstObject]
        || ! nextView) { // At the first and the end
        return YES;
    }
    return NO;
}

@end

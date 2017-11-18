//
//  DUIPropsFeedback.m
//  PrestoPanel
//
//  Created by Ashutosh Das on 16/09/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "PrestoPanelUISketchPanelController.h"
#import "PrestoPanelUI.h"
#import "DUIPropsMapper.h"
#import "DUIPropsFeedback.h"
#import <Mocha/Mocha.h>

NSString *__feedback;

@class DUIPropsFeedback;

@implementation DUIPropsFeedback


+ (void) initializePropsFeedback {
    id sharedRuntime = [Mocha sharedRuntime];
    __feedback = [NSString stringWithFormat: @"__feedback%@", [DUIPropsMapper getDocumentName]];
    [sharedRuntime setValue: [NSMutableDictionary dictionary] forKey: __feedback];
}

+ (void)setFeedback:(NSDictionary*) args {
    NSString* key = [args valueForKey:@"key"];
    id value = [args valueForKey:@"value"];
    id old;
    
    NSMutableDictionary* dict;
    NSMutableDictionary* props = [DUIPropsFeedback getAllFeedbacks];
    
    if(!props) {
        props = [NSMutableDictionary dictionary];
    }
    
    if([props objectForKey: key]) {
        dict = [props valueForKey: key];
    } else {
        dict = [NSMutableDictionary dictionary];
    }
    
    
    // Check if the dictionary being set is mutable,
    // When existing props are loaded from the JSON files
    // the dicts generated are not mutable.
    if(![dict isKindOfClass: [NSMutableDictionary class]]) {
        dict = [NSMutableDictionary dictionaryWithDictionary: dict];
    }
    
    if([dict objectForKey: @"current"]) {
        old = [dict valueForKey: @"current"];
    } else {
        [dict setValue: [NSMutableDictionary dictionary] forKey: @"current"];
        old = @"NULL";
    }
    
    [dict setValue: value forKey: @"current"];
    [dict setValue: old forKey: @"old"];
    [props setValue: dict forKey: key];
    __feedback = [NSString stringWithFormat: @"__feedback%@", [DUIPropsMapper getDocumentName]];
    [[Mocha sharedRuntime] setValue: props forKey: __feedback];
}

+ (id) getFeedback: (NSString *) key {
    return [[DUIPropsFeedback getAllFeedbacks] valueForKey:key];
}


+ (void) deleteAllFeedback:(NSString*) layerId {
    NSMutableDictionary* dict = [DUIPropsFeedback getAllFeedbacks];
    [dict removeObjectForKey: layerId];
    
    id sharedRuntime = [Mocha sharedRuntime];
    __feedback = [NSString stringWithFormat: @"__feedback%@", [DUIPropsMapper getDocumentName]];
    [sharedRuntime setValue: dict forKey: __feedback];
}

+ (void) removeFeedback: (NSDictionary*) args {
    
    NSString* elementId = [args valueForKey:@"id"];
    NSString* key = [args valueForKey:@"key"];
    
    NSMutableDictionary* dict;
    NSMutableDictionary* props = [DUIPropsFeedback getAllFeedbacks];
    
    if([props objectForKey: elementId]) {
        dict = [props valueForKey: elementId];
    } else {
        dict = [NSMutableDictionary dictionary];
    }
    
    if(![dict isKindOfClass: [NSMutableDictionary class]]) {
        dict = [NSMutableDictionary dictionaryWithDictionary: dict];
    }
    
    if([dict objectForKey:key]) {
        [dict removeObjectForKey: key];
        [props setValue: dict forKey: elementId];
        __feedback = [NSString stringWithFormat: @"__feedback%@", [DUIPropsMapper getDocumentName]];
        [[Mocha sharedRuntime] setValue: props forKey: __feedback];
    }
    
}

+ (NSMutableDictionary*) getAllFeedbacks {
    id sharedRuntime = [Mocha sharedRuntime];
    __feedback = [NSString stringWithFormat: @"__feedback%@", [DUIPropsMapper getDocumentName]];
    return [sharedRuntime valueForKey: __feedback];
}


@end

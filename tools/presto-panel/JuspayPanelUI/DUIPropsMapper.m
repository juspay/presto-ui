//
//  PMap.m
//  JuspayPanel
//
//  Created by Apple on 7/18/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "JuspayPanelUISketchPanelController.h"
#import "JuspayPanelUI.h"
#import "DUIPropsMapper.h"
#import <Mocha/Mocha.h>

@class DUIPropsMapper;

@implementation DUIPropsMapper

NSString *uuid;
NSString *__props;

+ (NSString *) getDocumentName {
    id doc = [[NSDocumentController sharedDocumentController] currentDocument];
    NSURL *docURL = [doc fileURL];
    NSString *docName = [[docURL lastPathComponent] stringByDeletingPathExtension];
    docName = [docName stringByReplacingOccurrencesOfString:@"[\\W \\s]" withString:@"_" options: NSRegularExpressionSearch range:NSMakeRange(0, docName.length)];
    
    return docName;
}

+ (void) initializePropsWith:(NSDictionary *)dict {
    dict = [NSMutableDictionary dictionaryWithDictionary: dict];
    id sharedRuntime = [Mocha sharedRuntime];
    NSLog(@"%@", uuid);
    __props = [NSString stringWithFormat: @"__props%@", [DUIPropsMapper getDocumentName]];
    [sharedRuntime setValue: dict forKey: __props];
}

+ (void) initializeProps {
    id sharedRuntime = [Mocha sharedRuntime];
    uuid = [NSUUID UUID].UUIDString;
    __props = [NSString stringWithFormat: @"__props%@", [DUIPropsMapper getDocumentName]];
    [sharedRuntime setValue: [NSMutableDictionary dictionary] forKey: __props];
}

// setProperty method is here so that it gets exposed to the Javascript interface.
// Proxy all calls to the @JuspayPanelUISketchPanelController setProperty method
+ (void)setProperty: (NSDictionary*) args {
    NSString* elementId = [args valueForKey:@"id"];
    NSString* key = [args valueForKey:@"key"];
    id value = [args valueForKey:@"value"];
    
    NSMutableDictionary* dict;
    NSMutableDictionary* props = [DUIPropsMapper getAllProperties] ? [DUIPropsMapper getAllProperties] : [[NSMutableDictionary alloc] init];
    
    if([props objectForKey: elementId]) {
        dict = [props valueForKey: elementId];
    } else {
        dict = [NSMutableDictionary dictionary];
    }
        
    
    // Check if the dictionary being set is mutable,
    // When existing props are loaded from the JSON files
    // the dicts generated are not mutable.
    if(![dict isKindOfClass: [NSMutableDictionary class]]) {
        dict = [NSMutableDictionary dictionaryWithDictionary: dict];
    }
        
    [dict setValue: value forKey: key];
    [props setValue: dict forKey: elementId];
    __props = [NSString stringWithFormat: @"__props%@", [DUIPropsMapper getDocumentName]];
    [[Mocha sharedRuntime] setValue: props forKey: __props];
}

+ (void)setPropertiesOfLayer:(NSString *)srcLayer to:(NSString *)destLayer {
    NSMutableDictionary* props = [[DUIPropsMapper getAllProperties] valueForKey:srcLayer];
    
    for (NSString *key in props) {
        NSDictionary *dict = [[NSDictionary alloc] initWithObjects:@[destLayer, key, [props valueForKey:key]] forKeys:@[@"id", @"key", @"value"]];
        [DUIPropsMapper setProperty:dict];
    }
}

+ (id) getPropertiesOfLayer: (NSString *) layer {
    return [[DUIPropsMapper getAllProperties] valueForKey:layer];
}

+ (NSString*)getProperty:(NSDictionary*) dict {
    NSString* elementId = [dict valueForKey:@"id"];
    NSString* key = [dict valueForKey:@"key"];
    
    NSDictionary* idLevelMap;
    
    NSMutableDictionary* props = [DUIPropsMapper getAllProperties];
    
    if([props objectForKey :elementId]) {
        idLevelMap = [props valueForKey: elementId];
    } else {
        return NULL;
    }
    
    if ([idLevelMap objectForKey :key]) {
        return [idLevelMap valueForKey: key];
    } else {
        return NULL;
    }
}

+ (void) deleteAllForId:(NSString*) layerId {
    NSMutableDictionary* dict = [DUIPropsMapper getAllProperties];
    [dict removeObjectForKey: layerId];
    
    id sharedRuntime = [Mocha sharedRuntime];
    __props = [NSString stringWithFormat: @"__props%@", [DUIPropsMapper getDocumentName]];
    [sharedRuntime setValue: dict forKey: __props];
}

+ (void) removeProperty: (NSDictionary*) args {
    
    NSString* elementId = [args valueForKey:@"id"];
    NSString* key = [args valueForKey:@"key"];
    
    NSMutableDictionary* dict;
    NSMutableDictionary* props = [DUIPropsMapper getAllProperties];
    
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
        __props = [NSString stringWithFormat: @"__props%@", [DUIPropsMapper getDocumentName]];
        [[Mocha sharedRuntime] setValue: props forKey: __props];
    }
    
}

+ (NSMutableDictionary*) getAllProperties {
    id sharedRuntime = [Mocha sharedRuntime];
    __props = [NSString stringWithFormat: @"__props%@", [DUIPropsMapper getDocumentName]];
    return [sharedRuntime valueForKey: __props];
}

// Serialize all the properties to JSON - this used mainly to generate
// the json dump when the user saves the file.
+ (NSString*) getAllPropertiesAsJSON {
    NSMutableDictionary* allProperties =  [NSMutableDictionary dictionaryWithDictionary: [DUIPropsMapper getAllProperties]];
    
    NSData* jsonBytes = [NSJSONSerialization
                         dataWithJSONObject: allProperties
                         options: 0
                         error: NULL];
    
    return [[NSString alloc] initWithData:jsonBytes encoding:NSUTF8StringEncoding];
}

@end

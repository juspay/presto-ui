//
//  PMap.h
//  PrestoPanel
//
//  Created by Apple on 7/18/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#ifndef PMap_h
#define PMap_h

@class DUIPropsMapper;

@interface DUIPropsMapper : NSObject

+ (void) setProperty: (NSDictionary*) dict;
+ (void) setPropertiesOfLayer:(NSString *)srcLayer to:(NSString *)destLayer;
+ (id) getPropertiesOfLayer: (NSString *) layer;
+ (NSString*) getProperty: (NSDictionary*) dict;
+ (void) deleteAllForId:(NSString*) layerId;
+ (void) removeProperty: (NSDictionary*) args;
+ (NSString*) getAllPropertiesAsJSON;
+ (NSMutableDictionary*) getAllProperties;
+ (void) initializeProps;
+ (void) initializePropsWith: (NSDictionary*) dict;
+ (NSString *) getDocumentName;

@end


#endif /* PMap_h */

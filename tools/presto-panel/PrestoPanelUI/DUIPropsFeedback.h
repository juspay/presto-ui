//
//  DUIPropsFeedback.h
//  PrestoPanel
//
//  Created by Ashutosh Das on 16/09/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#ifndef DUIPropsFeedback_h
#define DUIPropsFeedback_h

@class DUIPropsFeedback;

@interface DUIPropsFeedback : NSObject

+ (void) setFeedback: (NSDictionary*) dict;
+ (NSString*) getFeedback: (NSDictionary*) dict;
+ (void) deleteAllFeedback:(NSString*) layerId;
+ (void) removeFeedback: (NSDictionary*) args;
+ (NSMutableDictionary*) getAllFeedbacks;
+ (void) initializePropsFeedback;

@end

#endif /* DUIPropsFeedback_h */

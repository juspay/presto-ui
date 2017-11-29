//
//  DEUApi.m
//  JuspayPanel
//
//  Created by  on 7/21/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CocoaScript/COScript.h>
#import <Mocha/Mocha.h>

@class DEUApi;

@interface DEUApi : NSObject
+ (bool) zipBundle: (NSString*) rootFolderPath fromFile:(NSString*) sketchFileName;
+ (void) uploadZip: (NSString*) zipfileName;
@end

@implementation DEUApi : NSObject ;

static NSTask* task;

+ (bool) zipBundle: (NSString*) rootFolderPath fromFile: (NSString*) sketchFileName {
    NSFileManager* fileManager = [NSFileManager defaultManager];
    
    // If `zip` executable could not be found, return false
    // and prompt the user to install zip.
    if(![fileManager isExecutableFileAtPath: @"/usr/bin/zip"]) {
        return false;
    }
    
    if(![fileManager isReadableFileAtPath: rootFolderPath]) {
        return false;
    }
    
    NSString* sketchfilePath = [@[rootFolderPath, sketchFileName] componentsJoinedByString: @"/"];

    NSString* propsFilePath = [@[sketchfilePath, @".json"] componentsJoinedByString: @""];
    NSString* zipFilePath = [@[sketchfilePath, @".zip"] componentsJoinedByString: @""];
    NSString* assetsFolderPath = [@[rootFolderPath, @"/assets/"] componentsJoinedByString: @""];
    
    task = [[NSTask alloc] init];
    [task setLaunchPath: @"/usr/bin/zip"];
    
    [task setArguments: @[@"-jr", zipFilePath, sketchfilePath, propsFilePath, assetsFolderPath]];
    
    task.terminationHandler = ^(NSTask *tsk) {
        if(tsk == task) {
            [DEUApi uploadZip: zipFilePath];
        }
    };
    
    [task launch];
    return true;
}

// http://sketch2dui-env.ap-south-1.elasticbeanstalk.com/upload-sketchzip
// Upload the formed zip file to the deu server for processing.
+ (void) uploadZip:(NSString *)zipfileName {
    // Take the username of the currently logged in user.
}

@end

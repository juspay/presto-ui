//
//  DEUApi.m
//  PrestoPanel
//
//  Created by  on 7/21/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AFNetworking.h"
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
    NSString* username = NSUserName();
    NSMutableURLRequest *request = [[AFHTTPRequestSerializer serializer]
                                    multipartFormRequestWithMethod:@"POST"
                                    URLString:@"http://localhost:8081/upload-sketchzip"
                                    parameters:@{@"userName": username}
                                    constructingBodyWithBlock:^(id<AFMultipartFormData> formData) {
                                        [formData
                                            appendPartWithFileURL:[NSURL fileURLWithPath: zipfileName]
                                            name:@"sketchzip"
                                            fileName:@"sketchzip"
                                            mimeType:@"application/octet-stream"
                                            error:nil];
                                    } error:nil];
    
    AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
    
    NSURLSessionUploadTask *uploadTask;
    
    @try {
        uploadTask = [manager
                      uploadTaskWithStreamedRequest:request
                      progress:^(NSProgress * _Nonnull uploadProgress) {
                          // This is not called back on the main queue.
                          // You are responsible for dispatching to the main queue for UI updates
                          dispatch_async(dispatch_get_main_queue(), ^{
                              //Update the progress view
                          });
                      }
                      completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
                          Mocha *srt = [Mocha sharedRuntime];
                          
                          COScript *coscript = [srt valueForKey: @"__script"];
                          id context = [srt valueForKey: @"__currentContext"];
                          
                          
                          if (error) {
                              NSLog(@"Error: in uploading sketchfile.%@", error);
                              if(context && coscript) {
                                  NSArray* arguments = @[context];
                                  [coscript callFunctionNamed: @"onZipUploadFailed" withArguments: arguments];
                                  
                                  NSLog(@"Successfully uploaded file");
                              }
                          } else {
                              @try {
                                  if(context && coscript) {
                                      NSArray* arguments = @[context];
                                      [coscript callFunctionNamed: @"onZipUploaded" withArguments: arguments];
                                      
                                      NSLog(@"Successfully uploaded file");
                                  }
                              } @catch (NSException *e) {
                                  NSLog(@"%@", [e reason]);
                              }
                          }
                      }];
        
        [uploadTask resume];
    } @catch (NSException *e) {
        NSLog(@"%@", [e reason]);
    }

}

@end

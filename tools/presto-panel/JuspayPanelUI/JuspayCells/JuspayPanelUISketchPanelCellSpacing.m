//
//  JuspayPanelUISketchPanelCellDefault.m
//  JuspayPanel
//
//  Created by Sachin Sharma on 11/07/17.
//  Copyright © 2017 Juspay Technologies. All rights reserved.
//

#import "JuspayPanelUISketchPanelCellSpacing.h"
#import "DUIPropsMapper.h"

@interface JuspayPanelUISketchPanelCellSpacing ()<NSTextFieldDelegate>

@end

@implementation JuspayPanelUISketchPanelCellSpacing


- (void)drawRect:(NSRect)dirtyRect {
    [super drawRect:dirtyRect];
    
    [self.topBackgroundView setWantsLayer:YES];
    self.topBackgroundView.layer.backgroundColor = [NSColor colorWithRed:241/255.0f green:241/255.0f blue:241/255.0f alpha:1.0].CGColor;
    self.topBackgroundView.layer.borderWidth = 1.0f;
    self.topBackgroundView.layer.borderColor = [NSColor colorWithRed:209/255.0f green:209/255.0f blue:209/255.0f alpha:1.0f].CGColor;
    
    [self.marginView setWantsLayer:YES];
    self.marginView.layer.backgroundColor = [NSColor colorWithRed:220/255.0f green:229/255.0f blue:207/255.0f alpha:1.0].CGColor;
    self.marginView.layer.borderWidth = 1.0f;
    self.marginView.layer.borderColor = [NSColor colorWithRed:209/255.0f green:209/255.0f blue:209/255.0f alpha:1.0f].CGColor;
    
    [self.paddingView setWantsLayer:YES];
    self.paddingView.layer.backgroundColor = [NSColor colorWithRed:219/255.0f green:232/255.0f blue:250/255.0f alpha:1.0].CGColor;
    self.paddingView.layer.borderWidth = 0.5f;
    self.paddingView.layer.borderColor = [NSColor colorWithRed:209/255.0f green:209/255.0f blue:209/255.0f alpha:1.0f].CGColor;
    
    [self.innerView setWantsLayer:YES];
    self.innerView.layer.backgroundColor = [NSColor whiteColor].CGColor;
}

- (void) setup {
    
    NSArray<NSTextField*>* inputs = @[self.weight, self.paddingTop, self.paddingLeft, self.paddingRight, self.paddingBottom, self.marginTop, self.marginLeft, self.marginRight, self.marginBottom];

    for (NSUInteger i = 0 ; i < 9; i++) {
        NSTextField *input = [inputs objectAtIndex: i];
        input.delegate = self;
    }
}

- (BOOL)control:(NSControl *)control textView:(NSTextView *)fieldEditor doCommandBySelector:(SEL)commandSelector
{
    NSLog(@"Selector method is (%@)", NSStringFromSelector( commandSelector ) );
    if (commandSelector == @selector(insertNewline:)) {
        switch (control.tag) {
            case 0:
            case 1:
            case 2:
            case 3:{
                [self paddingChanged:(NSTextField*)control];
            }
                break;
            case 4:
            case 5:
            case 6:
            case 7:{
                [self marginChanged:(NSTextField*)control];
            }
                break;
            case 8:
                [self weightChanged:(NSTextField*)control];
                break;
            default:
                break;
        }
    }
    
    return false;
}

- (void)controlTextDidChange:(NSNotification *)notification {
    
    NSNumberFormatter *formatter = [[NSNumberFormatter alloc] init];
    [formatter setNumberStyle:NSNumberFormatterDecimalStyle];
    
    NSTextField *textField = [notification object];
    
    [textField setFormatter:formatter];
    
    switch (textField.tag) {
        case 0:
        case 1:
        case 2:
        case 3:{
            [self paddingChanged:(NSTextField*)textField];
        }
        break;
        case 4:
        case 5:
        case 6:
        case 7:{
            [self marginChanged:(NSTextField*)textField];
        }
        break;
        case 8:
            [self weightChanged:(NSTextField*)textField];
            break;
        default:
        break;
    }
}

- (void) weightChanged: (NSTextField*) sender {
    if (self.delegate && [self.delegate respondsToSelector:@selector(cell:textChanged:event:)]) {
        [self.delegate cell:self textChanged:sender event: @"weight"];
    }
}

- (void) paddingChanged: (NSTextField*) sender {
    NSString* paddingDirection;
    
    if(sender == self.paddingTop) {
        paddingDirection = @"paddingTop";
        [self.paddingTopLabel setStringValue:sender.stringValue];
    } else if(sender == self.paddingBottom) {
        paddingDirection = @"paddingBottom";
        [self.paddingBottomLabel setStringValue:sender.stringValue];
    } else if (sender == self.paddingLeft) {
        paddingDirection = @"paddingLeft";
        [self.paddingLeftLabel setStringValue:sender.stringValue];
    } else if (sender == self.paddingRight) {
        paddingDirection = @"paddingRight";
        [self.paddingRightLabel setStringValue:sender.stringValue];
    }
    
    if (self.delegate && [self.delegate respondsToSelector:@selector(cell:textChanged:event:)]) {
        [self.delegate cell:self textChanged:sender event: paddingDirection];
    }
}

- (void) marginChanged: (NSTextField*) sender {
    NSString* paddingDirection;
    
    if(sender == self.marginTop) {
        paddingDirection = @"marginTop";
        [self.marginTopLabel setStringValue:sender.stringValue];
    } else if(sender == self.marginBottom) {
        paddingDirection = @"marginBottom";
        [self.marginBottomLabel setStringValue:sender.stringValue];
    } else if (sender == self.marginLeft) {
        paddingDirection = @"marginLeft";
        [self.marginLeftLabel setStringValue:sender.stringValue];
    } else if (sender == self.marginRight) {
        paddingDirection = @"marginRight";
        [self.marginRightLabel setStringValue:sender.stringValue];
    }
    
    if (self.delegate && [self.delegate respondsToSelector:@selector(cell:textChanged:event:)]) {
        [self.delegate cell:self textChanged:sender event: paddingDirection];
    }
}

- (void) updateForSelection:(NSString*) objectID {
    
    NSDictionary* objectProps = [DUIPropsMapper getAllProperties];
    objectProps = [objectProps valueForKey: objectID];

    NSArray<NSTextField*>* paddingInputs = @[self.paddingTop, self.paddingLeft, self.paddingRight, self.paddingBottom];
    NSArray<NSTextField*>* paddingLabels = @[self.paddingTopLabel, self.paddingLeftLabel, self.paddingRightLabel, self.paddingBottomLabel];
    NSArray<NSString*>* paddingProps = @[@"paddingTop", @"paddingLeft", @"paddingRight", @"paddingBottom"];
    
    NSArray<NSTextField*>* marginInputs = @[self.marginTop, self.marginLeft, self.marginRight, self.marginBottom];
    NSArray<NSTextField*>* marginLabels = @[self.marginTopLabel, self.marginLeftLabel, self.marginRightLabel, self.marginBottomLabel];
    NSArray<NSString*>* marginProps = @[@"marginTop", @"marginLeft", @"marginRight", @"marginBottom"];

    if(!objectProps) {
        for (int i=0; i<4; i++) {
            [(NSTextField *)[paddingInputs objectAtIndex:i] setStringValue:@"0"];
            [(NSTextField *)[marginInputs objectAtIndex:i] setStringValue:@"0"];
            [(NSTextField *)[paddingLabels objectAtIndex:i] setStringValue:@"0"];
            [(NSTextField *)[marginLabels objectAtIndex:i] setStringValue:@"0"];
        }
        [self.weight setStringValue:@"0"];
        return;
    }

    for(int i=0; i < 4; i+=1) {
        NSString* prop = [paddingProps objectAtIndex: i];
        NSString* value = [objectProps valueForKey: prop];
        
        if(!value) {
            value = @"0";
        }
        
        NSTextField* view = [paddingInputs objectAtIndex: i];
        NSTextField* label = [paddingLabels objectAtIndex: i];
        
        [label setStringValue: value];
        [view setStringValue: [NSString stringWithFormat:@"%@", value]];
        
        prop = [marginProps objectAtIndex: i];
        value = [objectProps valueForKey: prop];
        
        if(!value) {
            value = @"0";
        }
        
        view = [marginInputs objectAtIndex: i];
        label = [marginLabels objectAtIndex: i];
        
        [label setStringValue: value];
        [view setStringValue: [NSString stringWithFormat:@"%@", value]];
    }
    
    NSString *weight = [objectProps valueForKey:@"weight"];
    
    if(!weight) {
        weight = @"0";
    }
    [self.weight setStringValue:[NSString stringWithFormat:@"%@", weight]];
}

@end

/*
 * Copyright (c) 2012-2017 "JUSPAY Technologies"
 * JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
 *
 * This file is part of JUSPAY Platform.
 *
 * JUSPAY Platform is free software: you can redistribute it and/or modify
 * it for only educational purposes under the terms of the GNU Affero General
 * Public License (GNU AGPL) as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 * For Enterprise/Commerical licenses, contact <info@juspay.in>.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
 * be liable for all damages without limitation, which is caused by the
 * ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
 * damages, claims, cost, including reasonable attorney fee claimed on Juspay.
 * The end user has NO right to claim any indemnification based on its use
 * of Licensed Software. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
 */

let {
    computeChildDimens
} = require("../compute")
let mapAttributes = require("./MapAttributes");
const List = require("./ListPresto");
var addedShimmerStyle = false;
const useClickFeedback = false;

function attachKeyDownEventListenerKeyCode(elem, callback, keyCode) {
    elem.addEventListener('keydown', (e) => {
        
        if(e.repeat) { 
            e.preventDefault();
            return;
         }  // to handle if pressed multiple times
        else {
            e.stopPropagation()
            if (e.keyCode == keyCode) {
                callback(e)
            }
        }    
    })
}

function initiateElement(type, props, elem){
    if (type == "editText" && elem.tagName.toLowerCase() == "input") {

        var isIPhone = (navigator.userAgent.indexOf("iPhone") !== -1)
        if (elem.autofocus && !isIPhone) {
            elem.focus()
        }
        if(window.preponeSpace){
            elem.addEventListener('input', separatorInputKeyDownHandlerNew);
        } else {
            elem.addEventListener('input', separatorInputKeyDownHandler);
        }
    }

    let events = ['onClick', 'onEnterPressedEvent', 'onDeletePressedEvent', 'onRightArrowPressedEvent', 'onLeftArrowPressedEvent', 'onChange', 'onMouseDown', 'onMouseUp', 'onMouseEnter', 'onMouseOver', 'onMouseMove', 'onMouseOut', 'onMouseLeave', 'onFocus', 'onPaste','getInputEventData']

    for (let i = 0; i < events.length; i++) {
        let key = events[i]
        let eventType = key.substring(2, key.length).toLowerCase()
        if (props.hasOwnProperty(key) && typeof props[key] == "function") {
            const callback = props[key]
            if (key == "onEnterPressedEvent") {
                attachKeyDownEventListenerKeyCode(elem, callback, 13);
            }
            if (key == "onDeletePressedEvent") {
                attachKeyDownEventListenerKeyCode(elem, callback, 8);
            }
            if (key == "onRightArrowPressedEvent") {
                attachKeyDownEventListenerKeyCode(elem, callback, 39);
            }
            if (key == "onLeftArrowPressedEvent") {
                attachKeyDownEventListenerKeyCode(elem, callback, 37);
            }
            if (key == "getInputEventData") {
                elem.addEventListener('input', (e) => {
                    callback(e.data)
                })
            }
            if (key == "onPaste") {
                elem.onpaste = e => {
                let paste = (e.clipboardData || window.clipboardData).getData('text');
                callback(paste);
            }
        }
            if (eventType == "change") {
                elem.addEventListener('input', (e) => {
                    callback(e.target.value)
                })
            } else if (eventType == "focus"){
                elem.addEventListener('focus', (e) => {
                    callback("true")
                })
                elem.addEventListener('blur', (e) => {
                    callback("false")
                })
            } else {
                if (eventType == "click") {
                    let feedbackMutex = false;
                    const touchFeedbackFn = (e) => {
                        if (feedbackMutex) return;
                        feedbackMutex = true;
                        let ogBg = "", temp = elem;
                        while(ogBg === "") {
                            if (temp.style.backgroundColor !== "")
                                ogBg = temp.style.backgroundColor;
                            temp = temp.parentNode;
                        }
                        let rippleColor = pSBC(-0.23, ogBg); // darken whatever the original background color was
                        if (props.hasOwnProperty("rippleColor") && props.rippleColor.trim() !== "")
                            rippleColor = props.rippleColor;

                        elem.style.backgroundColor = rippleColor;
                        // elem.style.opacity = "0.5";
                        // return the color of the element
                        setTimeout(function() {
                            elem.style.backgroundColor = ogBg;
                            // prevent multiple clicks from permanently 
                            // changing the background color
                            feedbackMutex = false;
                        }, 200);
                    }
                    if (!(props.hasOwnProperty("disableFeedback") && props.disableFeedback) && useClickFeedback) {
                        elem.addEventListener('touchstart', touchFeedbackFn);
                        elem.addEventListener('mousedown', touchFeedbackFn);
                    }
                }
                props.oldEventListener = props.oldEventListener || {};
                if (typeof props.oldEventListener[eventType] == "function") {
                    elem.removeEventListener(eventType, props.oldEventListener[eventType]);
                }
                props.oldEventListener[eventType] = (e) => {
                    e.stopPropagation();
                    callback(e)
                };
                elem.addEventListener(eventType, props.oldEventListener[eventType]);
            }
        }
    }
}

const pSBC = function(p,c0,c1,l) {
    let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
    if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
    if(!this.pSBCr)this.pSBCr=(d)=>{
        let n=d.length,x={};
        if(n>9){
            [r,g,b,a]=d=d.split(","),n=d.length;
            if(n<3||n>4)return null;
            x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
        }else{
            if(n==8||n==6||n<4)return null;
            if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
            d=i(d.slice(1),16);
            if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
            else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
        }return x};
    h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!="c"?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
    if(!f||!t)return null;
    if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
    else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
    a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
    if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
    else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}

// not being used in hyper-widget web
function popup(elem, props) {
    let menuItems = props["popupMenu"].split(',');
    let menuBar = document.createElement("div");
    menuBar.setAttribute("class", "popupMenu");
    menuBar.style.cssText =
        "display: none; position: absolute; right: 20px; top:20px; z-index: 5;" +
        "box-shadow: 0px 5px 10px #888888;";
    document.body.appendChild(menuBar)
    let clickCb = "onMenuItemClick";
    for (let i = 0; i < menuItems.length; i++) {
        let menuDiv = document.createElement("div");
        menuDiv.setAttribute("class", "menuItem");
        menuDiv.textContent = menuItems[i];
        menuBar.appendChild(menuDiv);
        let index = i;
        if (props[clickCb] &&
            typeof props[clickCb] == "function") {
            menuDiv.addEventListener("click", () => {
                props[clickCb](index);
            });
        }
    }
    elem.addEventListener("click", function () {
        if (menuBar.style.display == "none")
            menuBar.style.display = "";
        else
            menuBar.style.display = "none";
    });
}

const InlineAnimationMapper = {
    map: function (type) {
        var self = this;
        return function (key, value) {
            if (self.MAPPINGS[type] && self.MAPPINGS[type][key]) {
                return self.MAPPINGS[type][key](value);
            } else return "";
        }
    },
    MAPPINGS: {
        "from": {
            "fromX": val => `transform: translateX(${val}px);`,
            "fromY": val => `transform: translateY(${val}px);`,
            "fromScaleX": val => `transform: scaleX(${val});\ntransform-origin:top left;`, 
            "fromScaleY": val => `transform-origin:top left;\ntransform: scaleY(${val});`, 
            "fromRotation": val => `transform: rotate(${val}deg);`, 
            "fromRotationX": val => `transform: rotateX(${val}deg);`, 
            "fromRotationY": val => `transform: rotateY(${val}deg);`, 
            "fromAlpha": val => `opacity: ${val};`, 
        },
        "to": {
            "toX": val => `transform: translateX(${val}px);`, 
            "toY": val => `transform: translateY(${val}px);`, 
            "toScaleX": val => `transform: scaleX(${val});\ntransform-origin:top left;`, 
            "toScaleY": val => `transform-origin:top left;\ntransform: scaleY(${val});`, 
            "toRotation": val => `transform: rotate(${val}deg);`, 
            "toRotationX": val => `transform: rotateX(${val}deg);`, 
            "toRotationY": val => `transform: rotateY(${val}deg);`, 
            "toAlpha": val => `opacity: ${val};`, 
        },
        // ref: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
        "animation-shorthand-seq": ["duration", "interpolator", "delay", "repeatCount", "repeatMode", "fillMode"],
        "animation-props": {
            "interpolator": val => {
                if (!val) {
                    return `ease`;
                } else if (typeof val == "string" && val.split(',').length == 4) {
                    return `cubic-bezier(${val})`
                } else {
                    switch (val) {
                        case "easein":
                            return "ease-in";
                        case "easeout":
                            return "ease-out";
                        case "bounce":
                        case "easeinout":
                            return "ease-in-out";
                        default:
                            return `${val}`;
                    }
                }
            }, 
            "delay": val => {
                if (!val) {
                    return `0s`;
                } else if (!isNaN(val)) {
                    val = parseFloat(parseFloat(val) / 1000).toFixed(2);
                    return `${val}s `;
                } else {
                    return `0s`;
                }
            }, 
            "duration": val => {
                if (!val) {
                    return `0s`;
                } if (!isNaN(val)) {
                    val = parseFloat(parseFloat(val) / 1000).toFixed(2);
                    return `${val}s`;
                } else {
                    return `0s`;
                }
            },  
            "repeatMode": val => {
                switch (val) {
                    case "restart":
                        return `normal`;
                    case "reverse":
                        return `alternate`;
                    default:
                        return `normal`;
                }
            }, 
            "repeatCount": val => {
                if (!val) return `1`;
                val = parseInt(val);
                if (isNaN(val)) { return `1`; }
                else if (val < 0) { return `infinite`}
                else { return `${val+1}`}
            }, 
            "fillMode": val => {
                if (!val) return `forwards`;
                else return `${val}`;
            }
        }
    }
}

const CSSMarkupWriter = {
    "animations": {
        "keyframe": (name, code) => `@keyframes ${name} {${code}}`,
        "keyframe-from": (code) => `from {${code}}`,
        "keyframe-to": (code) => `to {${code}}`,
        "animation-shorthand": (keyframes) => {
            var val = "";
            keyframes.forEach((keyframe, i) => {
                val += keyframe;
                if (i == (keyframes.length-1)) { val += ';'; }
                else { val += ', '; }
            });
            return `animation: ${val}`;
        }
    }

}

function addCSSStyle (style) {
    var styleElem = document.getElementById(window.__STYLE_ID)
    if(styleElem && styleElem.styleSheet){
        styleElem.styleSheet.cssText += style;
    }else{
        styleElem = document.createElement('style');
        styleElem.appendChild(document.createTextNode(style));
        document.getElementsByTagName("head")[0].appendChild(styleElem);
    }
}

var KEYFRAME_INDEX = 0;

function manualFocus () {
    if (window.focusedElement !== undefined){
        var c = document.getElementById(window.focusedElement);
        window.focusedElement = undefined;
        if (c) {
            console.debug("now focusing");
            c.focus();
        }
    }
}

function setAnimationStyles (elem, props) {
    if (!props.hasOwnProperty('hasAnimation') || !props.hasAnimation || !props.inlineAnimation) {
        return "";
    }
    try {
        const animationObjects = JSON.parse(props.inlineAnimation);
        if(!Array.isArray(animationObjects) || (Array.isArray(animationObjects) && animationObjects.length == 0)) return "";
        window.hasAnimationProps = true;
        var keyFrameShorthands = [];
        var AnimationCSSMarkupWriter = CSSMarkupWriter["animations"];

        if (elem) {
           elem.addEventListener("animationend", function () {
            if (props.onAnimationEnd) {
                elem.style.animation = null;
                props.onAnimationEnd();
            }
            manualFocus();
            window.hasAnimationProps = false;
           });
        }
        var keyFrameFromMarkup = keyFrameToMarkup = "";
        var countFrom = countTo = 0;
        
        animationObjects.forEach(function (animationObject) {
            const keyframeName = "keyframe_" + props.id + "_" + KEYFRAME_INDEX++;
            /* Add keyframe in css */
            for (var [key, value] of Object.entries(animationObject)) {
                var from = InlineAnimationMapper.map("from")(key, value);
                if(key == "fromX" || key == "fromScaleX"){
                    if(countFrom == 0){
                        keyFrameFromMarkup += from.slice(0, -1);
                        countFrom += 1;
                    }else{
                        keyFrameFromMarkup += from.replace("transform:", "");
                    }
                }else keyFrameFromMarkup += from;
                var to = InlineAnimationMapper.map("to")(key, value);
                if(key == "toX" || key == "toScaleX"){
                    if(countTo == 0){
                        keyFrameToMarkup += to.slice(0, -1);
                        countTo += 1;
                    }else{
                        keyFrameToMarkup += to.replace("transform:", "");
                    }
                }else keyFrameToMarkup += to;
            }
            var keyFrameCSS = AnimationCSSMarkupWriter["keyframe"](keyframeName, 
                                AnimationCSSMarkupWriter["keyframe-from"](keyFrameFromMarkup) + 
                                AnimationCSSMarkupWriter["keyframe-to"](keyFrameToMarkup)
                            );
            
            addCSSStyle(keyFrameCSS);
            window.__RENDERED_KEYFRAMES.push(keyframeName);
        
            /* Add animation shorthand prop of keyframe in element*/
            var keyFrameAnimShorthand = `${keyframeName} `;
            InlineAnimationMapper.MAPPINGS["animation-shorthand-seq"].forEach(function (key) {
                keyFrameAnimShorthand += (InlineAnimationMapper.map("animation-props")(key, animationObject[key]) + " ");
            });
            keyFrameShorthands.push(keyFrameAnimShorthand);
        });
        return AnimationCSSMarkupWriter["animation-shorthand"](keyFrameShorthands);
    } catch {
        return "";
    }
}

function addHoverProps (elem, view) {
    if (!view.props.hasOwnProperty("onHover")) return "";
    try {
        var id = ""+view.props.id;
        var hoverProps = JSON.parse(view.props.onHover);
        var elem_style = mapAttributes.mapPropToStyle(elem, hoverProps, view.type);
        if (hoverProps.hasOwnProperty('width') && !isNaN(hoverProps.width)) {
            elem_style += "width: " + hoverProps.width + "px;"; 
        }
        if (hoverProps.hasOwnProperty('height') && !isNaN(hoverProps.height)) {
            elem_style += "height: " + hoverProps.height + "px;"; 
        }
        elem_style = elem_style.replaceAll(";", " !important;"); // add important to make hover props precendence over inline styles
        if (hoverProps.hoverPath) {
            addCSSStyle(hoverProps.hoverPath + ":hover #\\3" + id[0] + " " + id.substring(1) + " { " + elem_style + " }");    
        } else {
            addCSSStyle("#\\3" + id[0] + " " + id.substring(1) + ":hover { " + elem_style + " }");    
        }
    } catch {
        return;
    }
}
// debugger
function setComputedStyles(elem, props) {
    let computed_styles = "";
    /* Computed Styles */
    // LinearLayout Styles
    if (props.hasOwnProperty('activeDimen') && props.hasOwnProperty('activeWeight')) {
        let activeDimen = props.activeDimen;
        let weight = props.activeWeight;

        if (weight > 0) {
            computed_styles += "flex:" + weight + ";";
            computed_styles += "flex-basis:auto;";
            //elem.style.flex = weight;

            if (activeDimen == 'w') {
                //elem.style.width = 'auto';
            } else {
                // computed_styles += "height:auto;";
               // elem.style.height = 'auto';
            }
        } else {
            computed_styles += "flex:none;";
            //elem.style.flex = 'none';
        }
    }
    else {
        computed_styles += "flex:none;";
    //        elem.style.flex = 'none';
    }

    // RelativeLayout Styles
    if (props.hasOwnProperty('absolute') && props.absolute) {
        if(props.hasOwnProperty("position")){
            computed_styles += "position:"+ props.hasOwnProperty("position") +";";
        } else {
            computed_styles += "position:absolute;";
        }
        //elem.style.position = 'absolute';

        if (props.hasOwnProperty("fromTop")) {
            if (isNaN(props.fromTop))
                computed_styles += "top: " + props.fromTop + ";";
                // elem.style.top = props.fromTop;
            else
                computed_styles += "top: " + props.fromTop + "px;";
                // elem.style.top = props.fromTop + 'px';
        }

        if (props.hasOwnProperty("fromBottom")) {
            if (isNaN(props.fromBottom))
                computed_styles += "bottom: " + props.fromBottom + ";";
                //elem.style.bottom = props.fromBottom;
            else
                computed_styles += "bottom: " + props.fromBottom + "px;";
                //elem.style.bottom = props.fromBottom + 'px';
        }

        if (props.hasOwnProperty("fromLeft")) {
            if (isNaN(props.fromLeft))
                computed_styles += "left: " + props.fromLeft + ";";
                // elem.style.left = props.fromLeft;
            else
                computed_styles += "left: " + props.fromLeft + "px;";
                // elem.style.left = props.fromLeft + 'px';
        }

        if (props.hasOwnProperty("fromRight")) {
            if (isNaN(props.fromRight))
                computed_styles += "right: " + props.fromRight + ";";
                // elem.style.right = props.fromRight;
            else
                computed_styles += "right: " + props.fromRight + "px;";
            // elem.style.right = props.fromRight + 'px';
        }
    }
    /* Computed Styles End */
    return computed_styles;
}

// what does this do?
function separatorInputKeyDownHandlerNew(ev){
    ev.stopPropagation();
    try {
        var inputId = ev.target.id;
        var inputType = ev.inputType;
        var input = document.getElementById(inputId);
        var oldValidValue = "";
        if(input.oldValidValue){
            oldValidValue = input.oldValidValue;
        }
        if(input.value.length===0){
            input.oldValidValue = input.value;
            return;
        }
        var dataPattern = input.getAttribute("data-pattern");
        if (dataPattern){
          var data = dataPattern.split(',');
          var length = parseInt(data.pop());
          var regexPattern = new RegExp(data.join(''));
          var selectionStart = input.selectionStart;
          var selectionEnd = input.selectionEnd;
          var separator = input.getAttribute("separator");
          var separatorRepeat = parseInt(input.getAttribute("separatorRepeat"));
          var value = input.value.replace(/[^a-zA-Z0-9@.-]/g, "");
          //If existing value itself greater than equal to max length
          if (length) {
            input.setAttribute("maxlength", length);
          }
          // If code doesn't matches regex pattern
          if (!regexPattern.test(value)) {
            input.value = oldValidValue;
            input.selectionStart = selectionStart- (selectionEnd-selectionStart)-1;
            input.selectionEnd = selectionEnd- (selectionEnd - selectionStart)-1;
            return;
          }
          //Insert separator
          if(separator && separatorRepeat){
            ev.preventDefault();
            var formattedString = "";
            for(var i =0;i<value.length;i++){
              var element = value[i];
              formattedString += element;
              var factor = 0;
              if (formattedString.length && formattedString.replace(/[^a-zA-Z0-9@.-]/g, "").length % (separatorRepeat + factor) == 0) {
                  formattedString += separator;
              }
            }
            if (formattedString[length] == separator) {
              formattedString = formattedString.substring(0, formattedString.length - 1);
            }
            input.value = formattedString;
            if(inputType == "deleteContentBackward"){
              let cursorPosition = selectionStart;
              if ((cursorPosition % (separatorRepeat + 1) ) === 0) {
                  if(input.oldValidValue.length < formattedString.length){
                      cursorPosition += 1
                  } else {
                      cursorPosition -= 1
                  }
              }
              if(cursorPosition<0){
                  cursorPosition = 0;
              }
              input.oldValidValue = formattedString;
              input.focus();
              input.selectionStart = cursorPosition;
              input.selectionEnd = cursorPosition;
            }
          }
          input.oldValidValue = input.value;
        }
    } catch(err){
        console.error(err);
    }
}
// what does this do?
function separatorInputKeyDownHandler(ev){
    ev.stopPropagation();
    try{
        var inputId = ev.target.id;
        var input = document.getElementById(inputId)
        var oldValidValue = "";
        if(input.oldValidValue){
            oldValidValue = input.oldValidValue;
        }
        if(input.value.length===0){
            input.oldValidValue = input.value;
            return;
        }
        var dataPattern = input.getAttribute("data-pattern");
        if (dataPattern) {
            var data = dataPattern.split(',');
            var length = parseInt(data.pop());
            var regexString = data.join('');
            var selectionStart = input.selectionStart;
            var selectionEnd = input.selectionEnd;
            const newValue = input.value;
            if (length) {
                if (newValue.length > length) {
                    input.value = oldValidValue;
                    ev.preventDefault();
                    input.selectionStart = selectionStart- (selectionEnd-selectionStart)-1;
                    input.selectionEnd = selectionEnd- (selectionEnd - selectionStart)-1;
                    return;
                }
            }
            var finalData = newValue;
            var separator = input.getAttribute("separator");
            if(separator)
            {
                finalData = finalData.replace(new RegExp(separator, 'g') , "");
            }
            if (regexString) {
                var regexPattern = new RegExp(regexString);
                if (!regexPattern.test(finalData)) {
                    ev.preventDefault();
                    input.value = oldValidValue;
                    input.selectionStart = selectionStart- (selectionEnd-selectionStart)-1;
                    input.selectionEnd = selectionEnd- (selectionEnd - selectionStart)-1;
                    return;
                }
            }
            var separatorRepeat = parseInt(input.getAttribute("separatorRepeat"));
            if (separator && separatorRepeat) {
                ev.preventDefault();
                var formattedString = "";
                for (let index = 0; index < finalData.length; index++) {
                    var element = finalData[index];
                    formattedString += element;
                    var factor = 0;
                    if (formattedString.length && formattedString.replace(/[^a-zA-Z0-9@.-]/g, "").length % (separatorRepeat + factor) == 0) {
                        formattedString += separator;
                    }
                }
                if (formattedString[formattedString.length - 1] == separator) {
                    formattedString = formattedString.substring(0, formattedString.length - 1);
                }
                input.value = formattedString;
                let cursorPosition = selectionStart;
                if ((cursorPosition % (separatorRepeat + 1) ) === 0) {
                    if(input.oldValidValue.length < formattedString.length){
                        cursorPosition += 1
                    } else {
                        cursorPosition -= 1
                    }
                }
                if(cursorPosition<0){
                    cursorPosition = 0;
                }
                input.oldValidValue = formattedString;
                input.focus();
                input.selectionStart = cursorPosition;
                input.selectionEnd = cursorPosition;
                // console.log("formattedString----", formattedString);
            } else {
                input.oldValidValue = finalData;
            }
        }
    } catch(err){
        console.error(err);
    }
}

function setAttributes(view, elem, firstRender) {
    var type = view.type
    var props = view.props
    let elem_style = "";
    elem.setAttribute("id",props.id);
    // elem_style += "id:"+props.id+";";
    if(view.props.autoUpdateHeight){
        try {
            const myObserver = new ResizeObserver(entries => {
                entries.forEach(entry => {
                    try{
                        var payload = {
                            event: "heightUpdate",
                            height: entry.target.scrollHeight
                        }
                        if(payload.height){
                            JBridge.runInJuspayBrowser("heightUpdate", JSON.stringify(payload));
                        }
                    } catch(err){}
                    return false;
                });
            });
            myObserver.observe(elem);
        } catch(err){}
    }
    if (type == "relativeLayout") {
        elem_style+="overflow:hidden;"
    }
    if (elem.classList && elem.classList.length > 0)
        elem.classList.add(type)
    else
        elem.className = type

    elem_style += mapAttributes.addTransitionValue(props);


    // elem.style.transition = props.transition;
    /* New Style */
    /* Render from global styles */

    elem_style+=mapAttributes.addSize(view);

    // The order here matters, as for elements with same precedence, the element on the right side of the array will be considered
    elem_style+=mapAttributes.addBorder(props);
    elem_style+=mapAttributes.addVisibility(elem, props, type);
    elem_style += mapAttributes.addExpandability(elem, props, type);

    /* Render global styles end */

    elem_style+=mapAttributes.addOverFlow(props);
    elem_style+=mapAttributes.addLayout(elem, type, props);

    mapAttributes.addImage(type,props,elem);
    elem_style+=mapAttributes.addTextProperties(props, elem, type);
    mapAttributes.addClassNameProperties(props,elem);

    elem_style += mapAttributes.mapPropToStyle(elem,props,type);
    elem = mapAttributes.setElemAttributes(elem,props);
    elem_style+=mapAttributes.addFunctions(props, elem);
    elem_style+=mapAttributes.addAnimationAttributes(props);
    mapAttributes.addPseudoClasses(elem, view);

    if (firstRender) { // Events are added when the element is created for the first time
        initiateElement(type, props, elem)
    }

    return elem_style;
}


// mutation observers are slow, what is this and why can't global events solve this problem?
/* Observer for afterRender */
let observer = (elem) => {
    let id = elem.id;
    if (!id || __OBSERVERS[id])
        return;

    __OBSERVERS[id] = new MutationObserver(function (item, observer) {
        if (item && item[0].target) {
            let target = item[0].target;
            let id = target.id;
            if (id) {
                let view = __VIEWS[id];

                if (view && view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function") {
                    view.props.afterRender()
                }
            }
        }

        observer.disconnect();
    });

    (__OBSERVERS[id]).observe(elem, {
        attributes: true
    });
}

/* Do some actions after rendered */ // just use global events no?
let cb = (elem, view) => {
    if (view.props.feedback && typeof view.props.feedback == "function") {
        view.props.feedback()
    }
}

window.inflateTimings = {
    lastUpdatedAt: null
}

// Creates the DOM element if it has not been already inflated
// View: Object similar to ReactDOM struct, {type, props, children}
// parentElement: DOM Object
let setToolTip = function(view, elem) {
    if (
        view.type != 'linearLayout' &&
        view.type != 'relativeLayout' &&
        view.type != 'horizontalScrollView' &&
        view.type != 'scrollView' &&
        view.type != 'listView'
    ) {
        if (view.props.hasOwnProperty('tooltipText')) {
            let tooltipText = view.props.tooltipText.trim()

            if (tooltipText) {
                let tooltipGravity = view.props.tooltipGravity ? view.props.tooltipGravity : 'top'

                elem.classList.add('hasTooltip')

                let tooltipElem = document.createElement('div')
                tooltipElem.innerHTML = '<pre>' + tooltipText + '</pre>'
                tooltipElem.classList.add('tooltipText')
                tooltipElem.classList.add('tooltipGravity_' + tooltipGravity)

                let size = 15
                if (view.props.hasOwnProperty('tooltipTextSize') && !isNaN(view.props.tooltipTextSize)) {
                    size = view.props.tooltipTextSize
                }

                tooltipElem.style.fontSize = size + 'px'

                elem.appendChild(tooltipElem)
            }
        }
    }
}
let createNewElement = function(view, parentElement, siblingView){
    let elem = null;
    let subElem = null;
    let element_style ="";
    switch(view.type) {
        case "webView":
            elem = document.createElement('iframe')

            elem.style.border = 'none';
            // This allow is the property of iframe for setting feature policy 
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-allow
            if (view.props.allow && typeof view.props.allow === 'string'){
                elem.allow = view.props.allow;
            }
            break;
        case "imageView":
            elem = document.createElement("img");
            element_style = "";
            element_style += "margin:0;";
            element_style += "padding:0;";
            element_style += "display:block;";
            element_style += "max-width:100%;";
            element_style += "max-height:100%;";
            element_style += "box-sizing:border-box;";
            // elem["style"]["margin"] = "0";
            // elem["style"]["padding"] = "0";
            // elem["style"]["display"] = "block";
            // elem["style"]["max-width"] = "100%";
            // elem["style"]["max-height"] = "100%";
            // elem["style"]["box-sizing"] = "border-box";
            elem.setAttribute("alt", "");
            break;
        case "checkBox":
            elem = document.createElement("input");
            elem.setAttribute('type', 'checkbox');
            if (view.props.hasOwnProperty('checked') && view.props.checked == true) {
                elem.checked = true
            } else {
                elem.checked = false
            }

            if (view.props.hasOwnProperty('label') && view.props.label != '' && parentElement) {
                subElem = document.createElement('label');
                subElem.setAttribute('for', view.props.id);
                subElem.innerHTML = view.props.label;
                subElem.style.padding = "0 0 0 5px";
                subElem.classList.add('input-label');

                delete view.props.label;
            }
            break;
        case "editText":
            element_style = "";
            if (view.props.hasOwnProperty('inputType') && view.props.inputType == 'multiText') {
                elem = document.createElement("textarea");
                element_style += "border:none;";
                element_style += "resize:none;";
                element_style += "outline:none;";
                //console.log('creating a component')

                // elem.style.border = 'none';
                // elem.style.resize = 'none';
                // elem.style.outline = 'none';
            } else {
                elem = document.createElement("input");
            }

            elem.value = view.props.text || "";

            if (view.props.letterSpacing) {
                element_style += "letter-spacing : " + view.props.letterSpacing + ";";
                // elem["style"]["letter-spacing"] = view.props.letterSpacing;
            }

            if (view.props.label) {

                // var inputViewStyle = "";
                var inputView = elem;

                element_style += "width:100%;";
                // inputView.style.width = '100%';
                element_style += setAttributes(view, inputView, true);

                inputView.setAttribute("id", view.props.id + "_input");


                var l = document.createElement("label");

                var label_style = "";
                l.setAttribute("for", view.props.id + "_input");

                l.innerHTML = view.props.label;
                l.classList.add('input-label');

                label_style += "position:absolute;";
                label_style += "color:#999;";
                label_style += "background-color:#fff;";
                label_style += "padding: 0 5px;";
                label_style += "z-index: 10;";
                label_style += "transition: transform 150ms ease-out, font-size 150ms ease-out;";

                // l["style"]["position"] = "absolute";
                // l["style"]["color"] = "#999";
                // l["style"]["background-color"] = "#fff";
                // l["style"]["padding"] = "0 5px";
                // l["style"]["z-index"] = 10;
                // l["style"]["transition"] = "transform 150ms ease-out, font-size 150ms ease-out";

                if (view.props.letterSpacing) {
                    label_style += "letter-spacing: " + view.props.letterSpacing + ";";
                    // l["style"]["letter-spacing"] = view.props.letterSpacing;
                }

                l.setAttribute("style",label_style);
                inputView.setAttribute("style",element_style);

                elem = document.createElement("div");
                element_style = "";
                elem.classList.add('input-group');
                elem.appendChild(l);
                elem.appendChild(inputView);

                view.props.style.position = "relative";
                view.props.style.overflow
                element_style += setAttributes(view, elem, true);
                delete view.props.label;
            } else if (view.props.hint) {
                elem.placeholder = view.props.hint || "";
            }
            break;
        case 'progressBar':
            elem = document.createElement("div");
            element_style = "";
            element_style += "border-radius: 50%;";
            element_style += "border: 0.25em solid #e0e0e0;";
            element_style += "display: inline-block;";
            element_style += "box-sizing: border-box;";
            element_style += "border-left-color: transparent;";
            element_style += "width: " + view.props.width + ";";
            element_style += "height: " + view.props.height + ";";
            element_style += "animation-duration: 0.7s;";
            element_style += "animation-name: anim-progress-loader;";
            element_style += "animation-iteration-count: infinite;";
            styleElem = document.createElement('style');
            styleElem.appendChild(document.createTextNode("@keyframes anim-progress-loader {0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }"));
            document.getElementsByTagName("body")[0].appendChild(styleElem);
            break;
        case 'shimmerFrameLayout':
            // for shimmerFrameLayout tag leaf nodes in the DOM tree so that CSS properties
            // for animations and styles can be added
            // every leaf node is tagged with a boolean shouldShimmer property in props
            if (view.props.isSeen == undefined && !addedShimmerStyle) {
                let maxShimmerWidth = tagShimmerElementsForRender(view, view.children, 0) + 10;
                if (!isNaN(maxShimmerWidth)) {
                    styleElem = document.createElement('style');
                    styleElem.appendChild(document.createTextNode("@keyframes shimmer{0% {background-position: -" + maxShimmerWidth + "px 0;} 100% {background-position: " + maxShimmerWidth + "px 0;}}"));
                    document.getElementsByTagName("body")[0].appendChild(styleElem);
                    addedShimmerStyle = true;
                }
            }
        // do not add a break here
        default:
            elem = document.createElement(view.elName || "div"); // create the element here
            element_style = "";

    }
    setToolTip(view,elem);


    addToParentElement(parentElement, siblingView, elem, subElem);

    // appened attributes, nodes & style to the elemenent
    element_style += setAttributes(view, elem, true);

    /*if(view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function"){
      if(!stopObserver){
        // We should run observer for the element
        observer(elem);
        elem.setAttribute('has_render', true);
      }
    }*/
    return {elem,subElem,element_style};
}
let addToParentElement = function(parentElement, siblingView, elem, subElem) {

    if (parentElement) {
        let siblingElement = siblingView ? document.getElementById(siblingView.props.id) : null;

        if (siblingElement && siblingElement != undefined) {
            if (parentElement == siblingElement) { // Prepend
                if (subElem) {
                    parentElement.insertBefore(subElem, parentElement.childNodes[0]);
                }
                parentElement.insertBefore(elem, parentElement.childNodes[0]);
            } else { // Insert in specified position
                let nextSiblingElement = siblingElement.nextSibling;

                parentElement.insertBefore(elem, nextSiblingElement);
                if (subElem) {
                    parentElement.insertBefore(subElem, nextSiblingElement);
                }
            }
        } else {
            parentElement.appendChild(elem);
            if (subElem) {
                parentElement.appendChild(subElem);
            }
        }
    }
}
let setLayout = function(view, elem) {
    switch(view.type) {
    case 'horizontalScrollView':
        if (view.props.hasOwnProperty('scrollLeft') && !isNaN(view.props.scrollLeft))
            elem.scrollLeft = view.props.scrollLeft;
        break;
    case 'listView':
        if (view.props.hasOwnProperty('scrollTop') && !isNaN(view.props.scrollTop))
            elem.scrollTop = view.props.scrollTop;
        break;
    case 'scrollView':
        if (view.props.hasOwnProperty('scrollLeft') && !isNaN(view.props.scrollLeft))
            elem.scrollLeft = view.props.scrollLeft;

        if (view.props.hasOwnProperty('scrollTop') && !isNaN(view.props.scrollTop))
            elem.scrollTop = view.props.scrollTop;
    }
}
let getElementByView = function(view, parentElement, siblingView, stopChild, renderStyle) {
    if(!view.props.id){
        view.props.id = window.JOS_PRESTO_ID++;
        //window.__VIEWS[view.props.id] =  view;
    }
    let elem = document.getElementById(view.props.id);
    let subElem = null; //  this is being used only for lablel property
    let newInflated = false;
    let element_style ="";

    if (view.props.x == "NaN" || view.props.y == "NaN") {
        view = handleWrapContent(view, parentElement)
    }

    if (!elem) {
        let element = createNewElement(view, parentElement, siblingView);
        newInflated = true;
        elem = element.elem;
        subElem = element.subElem;
        element_style+=element.element_style;
        if(view.props.hasOwnProperty("focus") && view.props.focus)
            window.focusedElement = view.props.id;

    } else if (renderStyle) {
        element_style += setAttributes(view, elem, false);
    }
    setLayout(elem,view);
    if(!stopChild) computeChildDimens(view);
    element_style += setComputedStyles(elem, view.props);
    element_style += setAnimationStyles(elem, view.props);
    addHoverProps(elem, view);
    elem.setAttribute("style",element_style); // finally attach all the styles to the element
    return {elem,newInflated};
}
let setAfterRenderFunctions = function (newInflated, view, elem, stopObserver) {

    if (newInflated) {
        if(view.hasOwnProperty)
        if (view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function") { // mutation observers are expensive
            if (!stopObserver) {
                // We should run observer for the element
                observer(elem);
                elem.setAttribute('has_render', true);
            }
        }
        // if(view.data){

        //     for(let i=0;i<view.children.length;i++){
        //         let child = document.getElementById(view.children[i].props.id);
        //         child.addEventListener('onClick',()=>view.onItemClick(i));}
        // }
        cb(elem, view);
    }
}

function isChrome50 () {
    var a = navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome/') + 7)
    return parseInt(a.substring(0, a.indexOf("."))) <= 50
}

let renderList = (view,elem, computeList)=>{
    //console.dir(view.props.diffArray)
        if(view.props.diffArray== "filter"){
            // console.log("filtering")
            // console.time('filtering')
            view.children=[];
            elem.innerHTML = '';
            for(let i=0;i<view.props.itemDatas.length;i++)
            {
                view.children.push(List.getChildItemViewByIndex(view,i));

            }
            computeChildDimens(view);
            for(let i=0;i<view.props.itemDatas.length;i++){
                var chrome50matchList;
                if(isChrome50()) {
                    chrome50matchList = {h : [], w: []}
                }
                elem.appendChild(inflateView({view:view.children[i], computeList :computeList }))}
                handleMatchParentChrome50(chrome50matchList)
                // TODO :: run height enforcer
            //console.timeEnd('filtering')
        }
        //replacing only the diff elements
        else if(view.props.diffArray){
            //console.time('patch')
            for(let i of view.props.diffArray)
            {
                //console.log("CHANGING VIEW OF "+i)
                console.time("patchingElement")
                let oldView = view.children[i];
                let oldChild = document.getElementById(oldView.props.id);
                if(oldChild){

                    let newChildView = List.getChildItemViewByIndex(view,i);
                    newChildView.onClick = oldView.onClick;
                    view.children[i] = newChildView
                    computeChildDimens(view)
                    var chrome50matchList;
                    if(isChrome50()) {
                        chrome50matchList = {h : [], w: []}
                    }
                    let newChild = inflateView({view:newChildView, computeList : computeList, chrome50matchList});
                    handleMatchParentChrome50(chrome50matchList);
                    // newChild.addEventListener('click',newChildView.props.onClick)
                    // newChild.style.cursor='pointer'
                    // console.dir(newChild)
                    elem.replaceChild(newChild,oldChild);

                }
                console.timeEnd('patchingElement')
        }
        }
        view.props.diffArray = undefined;
}
let inflateView = function ({view, parentElement, siblingView, stopChild, renderStyle, computeList, chrome50matchList} ={}) {
    view.state = view.state || {};
    if(view.props.listData){
        view.props.itemDatas = JSON.parse(view.props.listData);
        if(!view.props.data){
            view.props.data = JSON.parse(view.props.listItem)
        }
    }
    if(typeof chrome50matchList == "object") {
        chrome50matchList.h = chrome50matchList.h || []
        chrome50matchList.w = chrome50matchList.w || []
        if(view.props.height == "match_parent") {
            chrome50matchList.h.push(view)
        }
        if(view.props.width == "match_parent") {
            chrome50matchList.w.push(view)
        }
    }

    let {elem,newInflated} = getElementByView(view, parentElement, siblingView, stopChild, renderStyle);
    if (view && view.hasOwnProperty("props") && view.props.hasOwnProperty("testID")){
        view.props.testID = view.props.testID.replaceAll(/[^a-z0-9_]/gi, '_').replace(/_+/g, '_').toLowerCase();
        elem.setAttribute("testID", view.props.testID);
    }
    //patching list
    if(view.props.listData && renderStyle ){
        renderList(view, elem, computeList);
    } else if (!stopChild ) {
        //firstRender List
        if (view.props.itemDatas) {
            List.createListView(view);
            computeChildDimens(view);
        }
       if (view.hasOwnProperty('children') && view.children.length > 0) {
           preComputeLayoutDimens(view);
           postComputeLayoutDimens2(view, computeList)
            for (let i = 0; i < view.children.length; i++) {
                if (view.children[i]) {
                    view.children[i].parent = view;
                    if (i != 0) {
                        inflateView({view:view.children[i], parentElement:elem, siblingView:view.children[i - 1], stopChild:renderStyle, renderStyle, computeList, chrome50matchList});
                    } else {
                        inflateView({view:view.children[i], parentElement:elem, siblingView:view, stopChild:renderStyle, renderStyle, computeList, chrome50matchList});
                    }
                }
            }
           
        }
        view.state = view.state || {};
        view.state.computedHeight = isNaN(parseInt(view.props.height)) ? view.state.computedHeight || 0 : parseInt(view.props.height)
        view.state.computedWidth = isNaN(parseInt(view.props.width)) ? view.state.computedWidth || 0 : parseInt(view.props.width)
    }
    else {
        postComputeLayoutDimens2(view, computeList);
    }
    setAfterRenderFunctions(newInflated, view, elem);

    return elem;
};

let preComputeLayoutDimens = (view) => {
    view.state = view.state || {}
    if (view.type == "relativeLayout") {
        view.state.treatMatchParentAsWrapHeight = view.state.practicalHeight == "wrap_content";
        view.state.treatMatchParentAsWrapWidth = view.state.practicalWidth == "wrap_content";
        // if(view.state.treatMatchParentAsWrapHeight && view.state.treatMatchParentAsWrapWidth)
        for (var i = 0; i < view.children.length; ++i) {
            if (view.children[i].props.height != "match_parent")
                view.state.treatMatchParentAsWrapHeight = false;
            if (view.children[i].props.width != "match_parent")
                view.state.treatMatchParentAsWrapWidth = false;
            if (!view.state.treatMatchParentAsWrapWidth && !view.state.treatMatchParentAsWrapHeight)
                break
        }
    }
}

let postComputeLayoutDimens2 = (view,postComputeList) =>{
    if(postComputeList && view.type == "relativeLayout" && (view.state.practicalWidth == "wrap_content"  || view.state.practicalHeight == "wrap_content" ) && view.children.length > 0) {
        postComputeList.push(view.props.id);
        window.__VIEWS[view.props.id] = window.__VIEWS[view.props.id] || view
    }
}

let getValueFromPixel = (pixel) =>{
    return parseInt(pixel.substring(0,pixel.length-1));
}
let postCompute = (list) =>{
    while(list.length>0){
        let id = list.pop();
 
        let elem = document.getElementById(id);
        if(!elem)
            continue;
        let childNodes = elem.childNodes;
        let maxHeight = 0;
        let maxWidth = 0;
        for (var i = 0; i < childNodes.length; ++i) {
                let style = childNodes[i].currentStyle || window.getComputedStyle(childNodes[i]);
                if(style.display != "none") {
                    maxHeight = maxHeight > childNodes[i].offsetHeight ? maxHeight : (childNodes[i].offsetHeight + getValueFromPixel(style.marginTop) + getValueFromPixel(style.marginBottom));
                    maxWidth = maxWidth > childNodes[i].offsetWidth ? maxWidth : childNodes[i].offsetWidth;
                }
        }
        let view = window.__VIEWS[id];
        if(view && view.state && view.state.practicalHeight == "wrap_content" ) {
            elem.style.height = maxHeight + "px"
        }
        if(view && view.state && view.state.practicalWidth == "wrap_content") {
            elem.style.width = maxWidth + "px"
        }
        
    }
}
let postComputeLayoutDimens = (view, elem) => {
    if(view && view.type == "relativeLayout" && (view.state && (view.state.practicalWidth == "wrap_content"  || view.state.practicalHeight == "wrap_content" )) && view.children.length > 0) {
        var largestHeight = view.children[0].state.computedHeight;
        var largestWidth = view.children[0].state.computedWidth;
        for (var i = 1; i < view.children.length; ++i) {
            if (view.state && view.state.practicalHeight == "wrap_content") {
                largestHeight = largestHeight > view.children[i].state.computedHeight ? largestHeight : view.children[i].state.computedHeight;
            }
            if (view.state && view.state.practicalWidth == "wrap_content") {
                largestWidth = largestWidth > view.children[i].state.computedWidth ? largestWidth : view.children[i].state.computedWidth
            }
        }
        if(view.state && view.state.practicalHeight == "wrap_content" ) {
            elem.style.height = largestHeight + "px"
            view.state.computedHeight = largestHeight
        }
        if(view.state && view.state.practicalWidth == "wrap_content") {
            elem.style.width = largestWidth + "px"
            view.state.computedWidth = largestWidth
        }
    }
}

// what?
let handleWrapContent = (view, parentElement) => {
    let newDimen = 0;
    for (var i = 0; i < parentElement.childNodes.length; i++) {
        newDimen += parentElement.childNodes[i].offsetWidth;
    }
    view.props.x = newDimen;
    return view;
}

function handleMatchParentChrome50 (chrome50matchList) {
    // Chrome 50 is not supporting height/ width 100% inside flex : 1 layouts.
    // Below code derives height from parent in cases where it failed to compute
    if(!chrome50matchList) {
        return;
    }
    // Commented code is used for debugging purposes, to find misfires
    // window.modifiedIds = window.modifiedIds || []
    for(var x = chrome50matchList.h, i =0 ; x && i < x.length ; ++i) {
        if(x[i] && x[i].props && x[i].props.id){
            var elm = document.getElementById(x[i].props.id)
            if ( elm && elm.parentElement 
                && (elm.parentElement.parentElement 
                    // Code to handle cases where parent is height 0 weight 1
                    // and parent of parent is orientation vertical
                    && elm.parentElement.parentElement.style
                    && elm.parentElement.parentElement.style.flexDirection == "column" 
                    && elm.parentElement.style['flex-grow'] == "1"
                    && elm.parentElement.style['flex-shrink'] == "1"
                    // Do not apply if offset height is 0; 
                    // this will happen for relative layouts; 
                    // 100% which is already present will give correct result
                    && elm.parentElement.offsetHeight
                    ) 
                ) {
                elm.style.height = elm.parentElement.offsetHeight + "px"
                // window.modifiedIds.push(x[i].props.id)
            }
        }
    }
    for(var x = chrome50matchList.w, i =0 ; x && i < x.length ; ++i) {
        if(x[i] && x[i].props && x[i].props.id){
            var elm = document.getElementById(x[i].props.id)
            if ( elm && elm.parentElement 
                && (elm.parentElement.parentElement
                    && elm.parentElement.parentElement.style
                    // Code to handle cases where parent is width 0 weight 1
                    // and parent of parent is orientation horizontal
                    && elm.parentElement.parentElement.style.flexDirection == "row" 
                    && elm.parentElement.style['flex-grow'] == "1"
                    && elm.parentElement.style['flex-shrink'] == "1"
                    // Do not apply if offset width is 0; 
                    // this will happen for relative layouts; 
                    // 100% which is already present will give correct result
                    && elm.parentElement.offsetWidth
                    )
                ) {
                elm.style.width = elm.parentElement.offsetWidth + "px"
                // window.modifiedIds.push(x[i].props.id)
            }
        }
    }
}

let tagShimmerElementsForRender = function(node, children, width) {
    // console.log("shimmer children", node, children);
    if (children.length == 0) {
        node.props.shouldShimmer = true;
        return node.props.width;
    }
    for(let i = 0; i < children.length; i++) {
        // console.log("tagging children", children[i], children[i].children);
        width = Math.max(tagShimmerElementsForRender(children[i], children[i].children, width), width);
    }
    node.props.isSeen = true;
    return width;
}

module.exports = {
    inflateView,
    computeChildDimens,
    List,
    postComputeLayoutDimens,
    preComputeLayoutDimens,
    postCompute,
    isChrome50,
    handleMatchParentChrome50
};

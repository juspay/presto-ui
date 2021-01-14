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
let {
    renderComponent
} = require("../component")
let helper = require("../helper")
let mapAttributes = require("./MapAttributes"); 

function createTextElement(elem, config) {

    let text_style = ""; 
    let children = elem.childNodes;
    let article = null
    if (children.length) {
        for (let i = 0; i < children.length; i++) {
            if (children[i].nodeName.toLowerCase() == 'article') {
                article = children[i]
                break
            }
        }
    }

    if (!article)
        article = document.createElement('ARTICLE')

    text_style += "white-space:initial;";
    // elem.style.whiteSpace = "initial"

    if (config.isHtmlContent)
        article.innerHTML = config.text
    else
        article.innerText = config.text

    if (!config.text && config.hint)
        article.innerText = config.hint

    article.style.wordBreak = "break-word"
    article.style.display = "inline"

    if (config.letterSpacing)
        text_style += "letter-spacing:"+config.letterSpacing+";";

    // elem["style"]["letter-spacing"] = config.letterSpacing

    elem.appendChild(article)
    return text_style; 
}

// inefficient, no longer being used 
function createTextElement2(elem, config) {
    let children = elem.childNodes;
    let article = null
    if (children.length) {
        for (let i = 0; i < children.length; i++) {
            if (children[i].nodeName.toLowerCase() == 'article') {
                article = children[i]
                break
            }
        }
    }

    if (!article)
        article = document.createElement('ARTICLE')

    elem.style.whiteSpace = "initial"

    if (config.isHtmlContent)
        article.innerHTML = config.textFromHtml
    else
        article.innerHTML = config.textFromHtml

    if (!config.text && config.hint)
        article.innerText = config.hint

    article.style.wordBreak = "break-word"
    article.style.display = "inline"

    if (config.letterSpacing)
        elem["style"]["letter-spacing"] = config.letterSpacing

    elem.appendChild(article)
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

function setGravityStylesForRow(elem, props) {

    var gravity_row_style = ""; 

    if (!props.hasOwnProperty('gravity') || !props.gravity) {
        props.gravity = '';
        //return;
    }

    switch (props.gravity) {
        case 'center_vertical':
            gravity_row_style += "align-items: center;"; 
            gravity_row_style += "justify-content: flex-start;"; 

            // elem.gravity_row_style['align-items'] = 'center';
            // elem.gravity_row_style['justify-content'] = 'flex-start';
            break;
        case 'center_horizontal':
            gravity_row_style += "align-items: flex-start;"; 
            gravity_row_style += "justify-content: center;"; 
            // elem.gravity_row_style['align-items'] = 'flex-start';
            // elem.gravity_row_style['justify-content'] = 'center';
            break;
        case 'center':
            gravity_row_style += "align-items: center;"; 
            gravity_row_style += "justify-content: center;"; 
            // elem.gravity_row_style['align-items'] = "center";
            // elem.gravity_row_style['justify-content'] = "center";
            break;
        case 'left':
        case 'start':
            gravity_row_style += "align-items: flex-start;"; 
            gravity_row_style += "justify-content: flex-start;"; 
            // elem.gravity_row_style['align-items'] = 'flex-start';
            // elem.gravity_row_style['justify-content'] = 'flex-start';
            break;
        case 'right':
        case 'end':
            gravity_row_style += "align-items: flex-start;"; 
            gravity_row_style += "justify-content: flex-end;"; 
            // elem.gravity_row_style['align-items'] = 'flex-start';
            // elem.gravity_row_style['justify-content'] = 'flex-end';
            break;
        case 'stretch':
            gravity_row_style += "align-items: stretch;"; 
            gravity_row_style += "justify-content: flex-start;"; 
            // elem.gravity_row_style['align-items'] = 'stretch';
            // elem.gravity_row_style['justify-content'] = 'flex-start';
            break; 
        default:
            gravity_row_style += "align-items: flex-start;"; 
            gravity_row_style += "justify-content: flex-start;"; 
            // elem.gravity_row_style['align-items'] = 'flex-start';
            // elem.gravity_row_style['justify-content'] = 'flex-start';
            break;
    }

    return gravity_row_style; 
}

function setGravityStylesForColumn(elem, props) {

    var gravity_col_style = ""; 
    if (!props.hasOwnProperty('gravity') || !props.gravity) {
        props.gravity = '';
        //return;
    }

    switch (props.gravity) {
        case 'center_vertical':
            gravity_col_style += "align-items: flex-start;";
            gravity_col_style += "justify-content: center;";  
            // elem.style['align-items'] = 'flex-start';
            // elem.style['justify-content'] = 'center';
            break;
        case 'center_horizontal':
            gravity_col_style += "align-items: center;"; 
            gravity_col_style += "justify-content: flex-start;";  
            // elem.style['align-items'] = 'center';
            // elem.style['justify-content'] = 'flex-start';
            break;
        case 'center':
            gravity_col_style += "align-items: center;"; 
            gravity_col_style += "justify-content: center;";
            // elem.style["align-items"] = "center";
            // elem.style["justify-content"] = "center";
            break;
        case 'left':
        case 'start':
            gravity_col_style += "align-items: flex-start;"; 
            gravity_col_style += "justify-content: flex-start;";
            // elem.style['justify-content'] = 'flex-start';
            // elem.style['align-items'] = 'flex-start';
            break;
        case 'right':
        case 'end':
            gravity_col_style += "align-items: flex-end;"; 
            gravity_col_style += "justify-content: flex-start;";
            // elem.style['align-items'] = 'flex-end';
            // elem.style['justify-content'] = 'flex-start';
            break;
        case 'stretch':
            gravity_col_style += "align-items: stretch;"; 
            gravity_col_style += "justify-content: flex-start;";
            // elem.style['align-items'] = 'stretch';
            // elem.style['justify-content'] = 'flex-start';
            break; 
        default:
            gravity_col_style += "align-items: flex-start;"; 
            gravity_col_style += "justify-content: flex-start;";
            // elem.style['align-items'] = 'flex-start';
            // elem.style['justify-content'] = 'flex-start';
            break;
    }
    return gravity_col_style; 
}

function setAnimationStyles(elem, props) {

  var animation_style = ""; 
  if (!props.hasOwnProperty('hasAnimation') || !props.hasAnimation) {
    return animation_style;
  }

  const keyframeName = "keyframe_" + props.id
  if (!window.__RENDERED_KEYFRAMES.includes(keyframeName)) {
    let styleElem = document.getElementById(window.__STYLE_ID)

    if (!styleElem) {
      return animation_style; 
    }

    let data = null

    if (props.inlineAnimation) {
      data = JSON.parse(props.inlineAnimation)
      if (data && data.length > 0) {
        data = data[0]
      }
    }

    if (!data) {
      return animation_style; 
    }

    let css = ""
    css += "@keyframes " + keyframeName + "{"
      css += "from {"
        if (data.hasOwnProperty('fromX')) {
          css += "margin-left: " + data.fromX + "px;"
        }

        if (data.hasOwnProperty('fromY')) {
          css += "margin-top: " + data.fromY + "px;"
        }
        
        if (data.hasOwnProperty('fromAlpha')) {
          css += "opacity: " + data.fromAlpha + ";"
        }
        
        if (data.hasOwnProperty('fromScale')) {
          css += "transform: scale(" + data.fromScale + ");"
        } else if (data.hasOwnProperty('fromScaleX') && data.hasOwnProperty('fromScaleY')) {
          css += "transform: scale(" + data.fromScaleX + ", " + data.fromScaleY + ");"
        } else if(data.hasOwnProperty('fromScaleX')) {
          css += "transform: scaleX(" + data.fromScaleX + ");"
        } else if(data.hasOwnProperty('fromScaleY')) {
          css += "transform: scaleY(" + data.fromScaleY + ");"
        }

        if (data.hasOwnProperty('fromRotation')) {
          css += "transform: rotate(" + data.fromRotation + ");"
        } else {
          if(data.hasOwnProperty('fromRotationX')) {
            css += "transform: rotateX(" + data.fromRotationX + ");"
          } else if(data.hasOwnProperty('fromRotationY')) {
            css += "transform: rotateY(" + data.fromRotationY + ");"
          }
        } 
      css += "} "
      css += "to {"
        if (data.hasOwnProperty('toX')) {
          css += "margin-left: " + data.toX + "px;"
        }

        if (data.hasOwnProperty('toY')) {
          css += "margin-top: " + data.toY + "px;"
        }
        
        if (data.hasOwnProperty('toAlpha')) {
          css += "opacity: " + data.toAlpha + ";"
        }
        
        if (data.hasOwnProperty('toScale')) {
          css += "transform: scale(" + data.toScale + ");"
        } else if (data.hasOwnProperty('toScaleX') && data.hasOwnProperty('toScaleY')) {
          css += "transform: scale(" + data.toScaleX + ", " + data.toScaleY + ");"
        } else if(data.hasOwnProperty('toScaleX')) {
          css += "transform: scaleX(" + data.toScaleX + ");"
        } else if(data.hasOwnProperty('toScaleY')) {
          css += "transform: scaleY(" + data.toScaleY + ");"
        }

        if (data.hasOwnProperty('toRotation')) {
          css += "transform: rotate(" + data.toRotation + ");"
        } else {
          if(data.hasOwnProperty('toRotationX')) {
            css += "transform: rotateX(" + data.toRotationX + ");"
          } else if(data.hasOwnProperty('toRotationY')) {
            css += "transform: rotateY(" + data.toRotationY + ");"
          }
        } 
      css += "} "
    css += "}"

    if(styleElem.styleSheet){
      styleElem.styleSheet.cssText += css;
    }else{
      styleElem.appendChild(document.createTextNode(css));
    }

    animation_style += "animation-name:"+keyframeName+";";
    animation_style += "animation-duration: 1s;";
    
    // elem.style.animationName = keyframeName
    //elem.style.animationDuration = "1s"
    if (data.hasOwnProperty('duration') && !isNaN(data.duration)) {
      const duration = parseFloat(parseFloat(data.duration) / 1000).toFixed(2)
      animation_style += "animation-duration:"+duration+"s;";
      //elem.style.animationDuration = duration + "s"
    }

    if (data.hasOwnProperty('repeatCount')) {
      if (data.repeatCount == "-1" || data.repeatCount == -1) {
        animation_style += "animation-iteration-count:infinite;";
        // elem.style.animationIterationCount = "infinite"
      } else {
        animation_style += "animation-iteration-count:"+data.repeatCount+";";
        // elem.style.animationIterationCount = data.repeatCount
      }
    }

    if (data.hasOwnProperty("interpolator")) {
      animation_style += "animation-timing-function:"+"cubic-bezier(" + data.interpolator + ")"+";";        
    //   elem.style.animationTimingFunction = "cubic-bezier(" + data.interpolator + ")";
    }

    window.__RENDERED_KEYFRAMES.push(keyframeName)
  }
  return animation_style; 
}

function setComputedStyles(elem, props) {
    let computed_styles = ""; 
    /* Computed Styles */
    // LinearLayout Styles
    if (props.hasOwnProperty('activeDimen') && props.hasOwnProperty('activeWeight')) {
        let activeDimen = props.activeDimen;
        let weight = props.activeWeight;

        if (weight > 0) {
            computed_styles += "flex:" + weight + ";"; 
            //elem.style.flex = weight;

            if (activeDimen == 'w') {
                //elem.style.width = 'auto';
            } else {
                computed_styles += "height:auto;";
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
        computed_styles += "position: absolute;";
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
                if (oldValidValue.length < input.value.length && oldValidValue.length + 1 > length) {
                    input.value = oldValidValue;
                    ev.preventDefault();
                    input.selectionStart = selectionStart- (selectionEnd-selectionStart)-1;
                    input.selectionEnd = selectionEnd- (selectionEnd - selectionStart)-1;
                    return;
                }
            }
            var finalData = newValue.replace(/[^a-zA-Z0-9@.-]/g, "");
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
            var separator = input.getAttribute("separator");
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

function setAttributes(type, elem, props, firstRender) {

    let elem_style = ""; 
    elem.setAttribute("id",props.id); 
    // elem_style += "id:"+props.id+";";

    if (type == 'modal') {  // this is likely not being used  in hyper-widget 
        setModalAttributes(elem, props, firstRender); 
        return;
    }

    if (elem.classList && elem.classList.length > 0)
        elem.classList.add(type)
    else
        elem.className = type

    //let elem_transition = props.transition == undefined ? "0ms all" : props.transition // It will always be undefined lol

    var transition_val = [String(props.a_duration || 0) +"ms","all",props.transitionTimingFunction].filter(Boolean).join(" ");
    elem_style += "transition:" + transition_val + ";";


    // elem.style.transition = props.transition;
    /* New Style */
    /* Render from global styles */

    // elem.style.width = 'auto';
    // elem.style.height = 'auto';

    elem_style += "width : auto; ";
    elem_style += "height: auto; "; 
    

    if (props.hasOwnProperty('width')) {
        if (props.width == 'match_parent') {
            elem_style += "width : 100%; ";
            //elem.style.width = '100%';
        } else if (props.width == 'wrap_content') {
            // You see below
        } else if (!isNaN(props.width)) {
            if (props.hasOwnProperty('percentWidth') && props.percentWidth)
                elem_style += "width: " + props.width + "%;";  
                // elem.style.width = props.width + '%';
            else
            elem_style += "width: " + props.width + "px;";     
            //elem.style.width = props.width + 'px';
        }
    }
    if (props.hasOwnProperty('height')) {
        if (props.height == 'match_parent') {
            elem_style += "height: 100%;";
            // elem.style.height = '100%';
        } 
        else if (props.height == 'wrap_content') {
            elem_style += "height: auto;"; 
            //elem.style.height = "auto";
            // You see below
        } else if (!isNaN(props.height)) {
            if (props.hasOwnProperty('percentHeight') && props.percentHeight)
                elem_style += "height: " + props.height + "%;";  
//                elem.style.height = props.height + '%';
            else
                elem_style += "height: " + props.height + "px;";  
//            elem.style.height = props.height + 'px';
        }
    }

    if (props.hasOwnProperty('minWidth') && !isNaN(props.minWidth)) {
        if (props.percentMinWidth)
            elem_style += "min-width: " + props.minWidth + "%;";  
//            elem.style.minWidth = props.minWidth + '%';
        else
            elem_style += "min-width: " + props.minWidth + "px;";  

        //    elem.style.minWidth = props.minWidth + 'px';
    }

    if (props.hasOwnProperty('minHeight') && !isNaN(props.minHeight)) {
        if (props.percentMinHeight)
            elem_style += "min-height: " + props.minHeight + "%;";  
            // elem.style.minHeight = props.minHeight + '%';
        else
            elem_style += "min-height: " + props.minHeight + "px;";  
            // elem.style.minHeight = props.minHeight + 'px';
    }

    if (props.hasOwnProperty('maxWidth') && !isNaN(props.maxWidth)) {
        if (props.percentMaxWidth)
            elem_style += "max-width: " + props.maxWidth + "%;";  
//            elem.style.maxWidth = props.maxWidth + '%';
        else
            elem_style += "max-width: " + props.maxWidth + "px;";  
        //            elem.style.maxWidth = props.maxWidth + 'px';
    }

    if (props.hasOwnProperty('maxHeight') && !isNaN(props.maxHeight)) {
        if (props.percentMaxHeight)
            elem_style += "max-height: " + props.maxHeight + "%;";  
       // elem.style.maxHeight = props.maxHeight + '%';
        else
            elem_style += "max-height: " + props.maxHeight + "px;";  
            //elem.style.maxHeight = props.maxHeight + 'px';
    }

    if (props.hasOwnProperty('padding')) {
        let padding = props.padding.split(',').map(a => a * 1);
        elem_style += "padding: " + padding[1] + "px " + padding[2] + "px " + padding[3] + "px " + padding[0] + "px;";
//        elem.style['padding'] = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
    }

    if (props.hasOwnProperty('margin')) {
        let margin = props.margin.split(',').map(a => a * 1);
        elem_style += "margin: " + margin[1] + "px " + margin[2] + "px " + margin[3] + "px " + margin[0] + "px;";
//        elem.style['margin'] = margin[1] + 'px ' + margin[2] + 'px ' + margin[3] + 'px ' + margin[0] + 'px';
    }

    if (props.hasOwnProperty('visibility')) {
        let visibility = props.visibility;
        if (visibility == 'invisible')
            elem_style += "visibility: hidden;";
            //elem.style.visibility = "hidden";
        else if (visibility == 'gone')
            elem_style += "display: none;";
            //elem.style.display = "none";
        else {
            // elem_style += "visibility: '';";
            //elem.style.visibility = '';
            elem_style += initializeShow(elem, props, type); 
        }
    } else {
        elem_style += initializeShow(elem, props, type);
    }

    if (props.hasOwnProperty('expand')) {
        let visibility = props.expand + '';
        if (visibility == 'true'){
            // elem_style += "visibility: '';";
            // elem.style.visibility = '';
            elem_style += initializeShow(elem, props, type);
        }
        else
            elem_style += "display: none;";
            //    elem.style.display = "none";
    }

    /* Render global styles end */

    let scrollBarX = true;
    let scrollBarY = true;

    if (props.hasOwnProperty('scrollBarX'))
        scrollBarX = props.scrollBarX;
    if (props.hasOwnProperty('scrollBarY'))
        scrollBarY = props.scrollBarY;

    if (props.hasOwnProperty('overFlowVisible')) {
        if (props.overFlowVisible) {
            elem_style += "overflow: visible;";
            // elem.style.overflow = "visible"
        }
    }

    // TODO: this if/else block should be moved to a seprate function, this function is already too big. 
    /* Render type specific styles */
    if (type == 'linearLayout') {
        elem_style += "box-sizing: border-box;";        
        //elem.style["box-sizing"] = "border-box";

        if (props.hasOwnProperty('fixedWrap') && !props.fixedWrap) {
            elem_style += "flex-wrap: nowrap;";
            //elem.style["flex-wrap"] = "nowrap";
        } else {
            elem_style += "flex-wrap: wrap;";            
            //elem.style["flex-wrap"] = "wrap";
        }

        
        let orient = props.orientation == "horizontal" || props.orientation == null ? "row" : "column";
        elem_style += "flex-direction: " + orient + ";";
        // elem.style["flex-direction"] = 

        if (orient == 'row')
            elem_style += setGravityStylesForRow(elem, props); 
        else
            elem_style += setGravityStylesForColumn(elem, props);

        // if (elem.style["flex-direction"] == 'row')
        //     setGravityStylesForRow(elem, props);
        // else
        //     setGravityStylesForColumn(elem, props);

        if (props.hasOwnProperty('scrollBarX')) {
            if (props.scrollBarX)
                elem_style += "overflow-x: auto;";            
//                elem.style.overflowX = 'auto'
            else
            elem_style += "overflow-x: hidden;";            
//            elem.style.overflowX = 'hidden'
        }

        if (props.hasOwnProperty('scrollBarY')) {
            if (props.scrollBarY)
                elem_style += "overflow-y: auto;";            
                // elem.style.overflowY = 'auto'
            else
                elem_style += "overflow-y: hidden;";            
                // elem.style.overflowY = 'hidden'
        }

    } else if (type == "horizontalScrollView") {
        elem_style += "overflow-x: auto;"; 
        elem_style += "overflow-y: hidden;";                       
        // elem.style.overflowX = "auto";
        // elem.style.overflowY = "hidden";

        if (!scrollBarX)
            elem_style += "overflow-x: hidden;"; 
         //   elem.style.overflowX = 'hidden';
    } else if (type == "listView") {
        elem_style += "overflow-x: hidden;"; 
        elem_style += "overflow-y: auto;";                       
        
        // elem.style.overflowY = "auto";
        // elem.style.overflowX = "hidden";

        if (!scrollBarY)
            elem_style += "overflow-y: hidden;";                       
            // elem.style.overflowY = 'hidden';
    } else if (type == 'scrollView') {

        elem_style += "overflow-x: auto;"; 
        elem_style += "overflow-y: auto;";

        // elem.style.overflowX = 'auto';
        // elem.style.overflowY = 'auto';

        if (!scrollBarX)
            elem_style += "overflow-x: hidden;"; 
       // elem.style.overflowX = 'hidden';
        if (!scrollBarY)
            elem_style += "overflow-y: hidden;"; 
    //        elem.style.overflowY = 'hidden';
    } else if (type == 'relativeLayout') {
        elem_style += "position: relative;"; 
        // elem.style.position = 'relative';

        if (props.hasOwnProperty('scrollBarX')) {
          if (props.scrollBarX)
              elem_style += "overflow-x: auto;"; 
              // elem.style.overflowX = 'auto'
          else
              elem_style += "overflow-x: hidden;"; 
              // elem.style.overflowX = 'hidden'
        }

        if (props.hasOwnProperty('scrollBarY')) {
          if (props.scrollBarY)
              elem_style += "overflow-y: auto;"; 
            //  elem.style.overflowY = 'auto'
          else
              elem_style += "overflow-y: hidden;"; 
    //          elem.style.overflowY = 'hidden'
        }
    } else if (type == 'imageView') {
        if (props.imageUrl) {
            let imageUrl = props.imageUrl

            if (props.rawData) {
                // Do Nothing
            } else {
                let temp = imageUrl.split('.')
                let ext = ''
                if (temp && temp.length > 0)
                    ext = temp[temp.length - 1]

                let exts = ["jpeg", "jpg", "png", "bmp", "svg", "gif"]
                ext = ext.toLowerCase()

                if(!imageUrl.includes("data:image/") && !exts.includes(ext)) {
                    imageUrl += '.png'
                }
            }

            elem.setAttribute('src', imageUrl)
        }
    }

    /* Render type specific styles end */
    /* New Style End */
    if (props.hasOwnProperty("text")){
        if (type == "editText")
            elem.value = props[key]
        else
            elem_style += createTextElement(elem, props) 
    }

    if (props.hasOwnProperty("textFromHtml")) {
        if (type == "editText")
            elem.value = props.textFromHtml
        else
            elem_style += createTextElement(elem, props)
    }

    if (props.hasOwnProperty("className")) {
        if ((props.className || "").trim() !== "") {
            props.className.split(" ").map(className => {
                elem.classList.add(className); 
            })
        }
    } 
    
    if (props.hasOwnProperty("classList")) {
        JSON.parse(props.classList).forEach(function (obj) {
            elem.classList.add(obj);
        });
    }
    
    if (props.hasOwnProperty("removeClassList")){
        JSON.parse(props.removeClassList).forEach(function (obj) {
            elem.classList.remove(obj);
        });
    }

    elem_style += mapAttributes.mapPropToStyle(elem,props,type); 
    elem = mapAttributes.setElemAttributes(elem,props); 

    for (let key in props) { 
        if (props[key] && typeof props[key] == "function") {
            var eventType = key.substring(2, key.length).toLowerCase();
            var elemCB = props[key];
            elem_style += "user-select: none;";  
            //elem.style.userSelect = 'none';
            if (eventType == "change") {
                eventType = "input";
            }

            elem.addEventListener('blur', function () {
                var inputValue = elem.value;
                if (inputValue == "") {
                    elem.classList.remove("filled");
                    elem.parentNode.classList.remove('focused');
                } else {
                    elem.classList.add('filled');
                }
            });

            elem['onfocus'] = function (e) {
                elem.parentNode.classList.add('focused');
                if (eventType == "focus") {
                    e.stopPropagation();
                    elemCB(e);
                }
            };
        }
    }


    var animation_transition = mapAttributes.getAnimeTransition(props); 

    var animation_transform = mapAttributes.getAnimeTransform(props); 

    var animation_opacity = mapAttributes.getAnimeOpacity(props); 

    if (animation_transition.length > 0 && (animation_transform.length + animation_opacity.length > 0)) { // this will need to be renamed actually to VDOM output's 
        const afterTransition = () => {
            elem_style += animation_transition; 
            if (animation_transform.length > 0) elem_style += animation_transform; 
            if (animation_opacity.length > 0) { elem_style += animation_opacity;}
        };

        if (props.style.transform || props.style.opacity) {
            setTimeout(afterTransition, 100); // Why is a time out here? 
        } else {
            afterTransition();
        }
    }

    // Events should be a different function 
    /* Events */
    if (firstRender) { // what is firstRender? 
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
    

        let events = ['onClick', 'onEnterPressedEvent', 'onChange', 'onMouseDown', 'onMouseUp', 'onMouseEnter', 'onMouseOver', 'onMouseMove', 'onMouseOut', 'onMouseLeave', 'onFocus', 'onPaste']

        for (let i = 0; i < events.length; i++) {
            let key = events[i]
            let eventType = key.substring(2, key.length).toLowerCase()
            if (props.hasOwnProperty(key) && typeof props[key] == "function") {
                const callback = props[key]
                if (key == "onEnterPressedEvent") {
                    elem.addEventListener('keyup', (e) => {
                        e.stopPropagation()

                        if (e.keyCode == 13) {
                            callback(e)
                        }
                    })
                }
                if (eventType == "change") {
                    elem.addEventListener('input', (e) => {
                        callback(e.target.value)
                    })
                } else if (eventType == "focus"){
                    elem.addEventListener('focus', (e) => {
                        callback(true)
                    })
                    elem.addEventListener('blur', (e) => {
                        callback(false)
                    })
                } else {
                    elem.addEventListener(eventType, (e) => {
                        e.stopPropagation();
                        callback(e)
                    })
                }
            }
        }
    }
    /* Events End */

    /* Component Part */
    if (props.hasOwnProperty('elementType') && props.elementType == 'component') {
        elem.classList.add(window.__COM_CLASS_GROUP.WRAPPER)

        if (firstRender)
            elem.setAttribute('guid', props.guid)
    }

    if (props.hasOwnProperty('componentType') && props.componentType)
        renderComponent(elem, props, firstRender) // what are components?? 

    return elem_style; 
}

// modal not being used in hyper-widget web
function setModalAttributes(elem, props, firstRender) {
    setGravityStylesForRow(elem, props);

    let backdropElem = document.getElementById(window.__BACKDROPMODAL_CLASS + '_' + props.id)

    if (props.hasOwnProperty('modalVisibility') && props.modalVisibility) {
        backdropElem.classList.add(window.__SHOWNMODAL_CLASS);
        document.body.classList.add(window.__OPENMODAL_CLASS);

        let modalProps = null;
        if (window.__MODAL_PROPS[props.id]) {
            modalProps = JSON.parse(window.__MODAL_PROPS[props.id]);
        }

        if (props.onShow && typeof props.onShow ==
            "function") {
            if (firstRender || (modalProps && modalProps.modalVisibility != props.modalVisibility)) {
                props.onShow();
            }
        }
    } else {
        props.modalVisibility = false;
        backdropElem.classList.remove(window.__SHOWNMODAL_CLASS);
        document.body.classList.remove(window.__OPENMODAL_CLASS);
    }

    window.__MODAL_PROPS[props.id] = JSON.stringify(props);
}

let initializeShow = function (elem, props, type) {
    var style = ""; 
    if (type == 'linearLayout') {
        if (props.hasOwnProperty('width') && props.width == 'wrap_content') {
            style += "display: inline-flex;"; 
            style += "width: max-content;"; 
            // elem.style.display = 'inline-flex';
            // elem.style.width = 'max-content';
        } else {
            style += "display: flex;"; 
            //elem.style.display = "flex";
        }
    } else {
        if (props.hasOwnProperty('width') && props.width == 'wrap_content') {
            style += "display:inline-bloack;";
            style += "width:max-content;";  
            // elem.style.display = 'inline-block';
            // elem.style.width = 'max-content';
        } else {
            // style += "display:'';";
        //    elem.style.display = '';
        }
    }
    return style; 
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

// Creates the Modal element if it has not been already inflated
// modal is not being used 
let inflateModal = function (view, parentElement, stopChild) {
    let newInflated = false;
    let parentId = parentElement.id;

    /* Modal Wrapper */
    let elem = document.getElementById(view.props.id);
    if (!elem || elem == undefined) {
        newInflated = true;

        elem = document.createElement('div');
        elem.setAttribute('id', view.props.id);
        elem.setAttribute('virtual_parent', parentId);
        elem.classList.add(window.__CONTENTMODAL_CLASS);
    }
    /* Modal Wrapper End */

    /* BackDrop */
    let backdropElem = document.getElementById(window.__BACKDROPMODAL_CLASS + '_' + view.props.id);
    if (!backdropElem || backdropElem == undefined) {
        backdropElem = document.createElement('div');
        backdropElem.setAttribute('id', window.__BACKDROPMODAL_CLASS + '_' + view.props.id);
        backdropElem.classList.add(window.__BACKDROPMODAL_CLASS);

        if (view.props.hasOwnProperty('animationType') && view.props.animationType != 'none') {
            let animationType = view.props.animationType;

            if (animationType == 'fade') {
                backdropElem.classList.add(window.__FADEMODAL_CLASS);
            } else if (animationType == 'slide') {
                backdropElem.classList.add(window.__SLIDEMODAL_CLASS);
            }
        }

        if (view.props.hasOwnProperty('closeOnBackdrop') && !view.props.closeOnBackdrop) {
            backdropElem.classList.add(window.__DISABLEDBACKDROP_CLASS);
        } else {
            backdropElem.classList.remove(window.__DISABLEDBACKDROP_CLASS);
        }

        if (view.props.hasOwnProperty('transparent') && view.props.transparent) {
            backdropElem.style.background = 'transparent';
        } else {
            backdropElem.style.background = 'rgba(0, 0, 0, 0.5)';
        }

        backdropElem.appendChild(elem);
        document.body.appendChild(backdropElem);

        if (newInflated) {
            if (view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function") {
                // We should run observer for the element
                observer(elem);
                elem.setAttribute('has_render', true);
            }
        }
    }
    /* BackDrop End */

    setModalAttributes(elem, view.props, newInflated);

    if (!stopChild) {
        if (view.hasOwnProperty('children') && view.children.length > 0) {
            for (let i = 0; i < view.children.length; i++) {
                if (view.children[i]) {
                    view.children[i].props.style.pointerEvents = 'auto';
                    if (i != 0)
                        inflateView(view.children[i], elem, view.children[i - 1]);
                    else
                        inflateView(view.children[i], elem, view);
                }
            }
        }
    } else {
        if (elem.hasChildNodes()) {
            let childNodes = elem.childNodes

            if (childNodes) {
                for (let i = 0; i < childNodes.length; i++) {
                    let childNode = childNodes[i]

                    childNode.style.pointerEvents = 'auto'
                }
            }
        }
    }

    if (newInflated) {
        cb(elem, view);
    }

    return backdropElem;
}

window.inflateTimings = {
    lastUpdatedAt: null
}

// Creates the DOM element if it has not been already inflated
// View: Object similar to ReactDOM struct, {type, props, children}
// parentElement: DOM Object
let inflateView = function (view, parentElement, siblingView, stopChild, stopObserver, renderStyle) {


    let element_style = ""; 

    if (view.type == 'modal') { 
        return inflateModal(view, parentElement, stopChild);
    }

    let elem = document.getElementById(view.props.id); 
    let subElem = null; //  this is being used only for lablel property 
    let newInflated = false; 

    if (view.props.x == "NaN" || view.props.y == "NaN") {
        view = handleWrapContent(view, parentElement)
    }

    if (!elem) {
        if (view.type == "webView") {
            elem = document.createElement('iframe')

            elem.style.border = 'none'
        } else if (view.type == "imageView") {
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
        } else if (view.type == "checkBox") {
            elem = document.createElement("input");
            elem.setAttribute('type', 'checkbox');

            if (view.props.hasOwnProperty('label') && view.props.label != '' && parentElement) {
                subElem = document.createElement('label');
                subElem.setAttribute('for', view.props.id);
                subElem.innerHTML = view.props.label;
                subElem.style.padding = "0 0 0 5px";
                subElem.classList.add('input-label');

                delete view.props.label;
            }
        } else if (view.type == "editText") {
            element_style = ""; 
            if (view.props.hasOwnProperty('inputType') && view.props.inputType == 'multiText') {
                elem = document.createElement("textarea");
                element_style += "border:none;";
                element_style += "resize:none;";
                element_style += "outline:none;";

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
                element_style += setAttributes(view.type, inputView, view.props, true);
                
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
                element_style += setAttributes(view.type, elem, view.props, true);
                delete view.props.label;
            } else if (view.props.hint) {
                elem.placeholder = view.props.hint || "";
            }
        } else {
            elem = document.createElement(view.elName || "div"); // create the element here 
            element_style = ""; 
        }

        /* Tooltip */
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
        /* Tooltip End */


        newInflated = true;

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

        // appened attributes, nodes & style to the elemenent 
        element_style += setAttributes(view.type, elem, view.props, true);

        /*if(view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function"){
          if(!stopObserver){
            // We should run observer for the element
            observer(elem);
            elem.setAttribute('has_render', true);
          }
        }*/
    } else if (renderStyle) {
        element_style += setAttributes(view.type, elem, view.props, false);
    }

    if (view.type == 'horizontalScrollView') {
        if (view.props.hasOwnProperty('scrollLeft') && !isNaN(view.props.scrollLeft))
            elem.scrollLeft = view.props.scrollLeft;
    }

    if (view.type == 'listView') {
        if (view.props.hasOwnProperty('scrollTop') && !isNaN(view.props.scrollTop))
            elem.scrollTop = view.props.scrollTop;
    }

    if (view.type == 'scrollView') {
        if (view.props.hasOwnProperty('scrollLeft') && !isNaN(view.props.scrollLeft))
            elem.scrollLeft = view.props.scrollLeft;

        if (view.props.hasOwnProperty('scrollTop') && !isNaN(view.props.scrollTop))
            elem.scrollTop = view.props.scrollTop;
    }

    if (view.type == 'checkBox') {
        if (view.props.hasOwnProperty('checked') && view.props.checked == true) {
            elem.checked = true
        } else {
            elem.checked = false
        }
    }

    if(!stopChild) computeChildDimens(view); 

    element_style += setComputedStyles(elem, view.props); 
    element_style += setAnimationStyles(elem, view.props); 
    elem.setAttribute("style",element_style); // finally attach all the styles to the element 


    if (!stopChild) {
        if (view.hasOwnProperty('children') && view.children.length > 0) {
            for (let i = 0; i < view.children.length; i++) {
                if (view.children[i]) {
                    if (i != 0)
                        inflateView(view.children[i], elem, view.children[i - 1], stopChild, stopObserver, renderStyle);
                    else
                        inflateView(view.children[i], elem, view, stopChild, stopObserver, renderStyle); // (view, parentElement, siblingView, stopChild, stopObserver, renderStyle)
                }
            }
        }
    }

    if (newInflated) {
        if (view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function") { // mutation observers are expensive 
            if (!stopObserver) {
                // We should run observer for the element
                observer(elem);
                elem.setAttribute('has_render', true);
            }
        }
        cb(elem, view); 
    }

    return elem;
};

// what?
let handleWrapContent = (view, parentElement) => {
    let newDimen = 0;
    for (var i = 0; i < parentElement.childNodes.length; i++) {
        newDimen += parentElement.childNodes[i].offsetWidth;
    }
    view.props.x = newDimen;
    return view;
}

// update a view, layout with new props, cmd will contain new props 
let runInUI = function (cmd) {
    if (!(cmd instanceof Array))
        cmd = [cmd];

    cmd.forEach(function (each) {
        let elem = document.getElementById(each.id);

        if (!elem) {
            return console.error("runInUI (Id NULL) CMD:", each);
        }

        let view = window.__VIEWS[elem.id];
        view.props = helper.merge(view.props, each);

        var styles = setAttributes(view.type, elem, view.props, false);
        elem.setAttribute("style",styles); 
    });
};

module.exports = {
    inflateView,
    runInUI,
    computeChildDimens
};

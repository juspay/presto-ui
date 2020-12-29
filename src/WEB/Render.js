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

function createTextElement(elem, config) {
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
        article.innerHTML = config.text
    else
        article.innerText = config.text

    if (!config.text && config.hint)
        article.innerText = config.hint

    article.style.wordBreak = "break-word"
    article.style.display = "inline"

    if (config.letterSpacing)
        elem["style"]["letter-spacing"] = config.letterSpacing

    elem.appendChild(article)
}

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
    if (!props.hasOwnProperty('gravity') || !props.gravity) {
        props.gravity = '';
        //return;
    }

    switch (props.gravity) {
        case 'center_vertical':
            elem.style['align-items'] = 'center';
            elem.style['justify-content'] = 'flex-start';
            break;
        case 'center_horizontal':
            elem.style['align-items'] = 'flex-start';
            elem.style['justify-content'] = 'center';
            break;
        case 'center':
            elem.style['align-items'] = "center";
            elem.style['justify-content'] = "center";
            break;
        case 'left':
        case 'start':
            elem.style['align-items'] = 'flex-start';
            elem.style['justify-content'] = 'flex-start';
            break;
        case 'right':
        case 'end':
            elem.style['align-items'] = 'flex-start';
            elem.style['justify-content'] = 'flex-end';
            break;
        case 'stretch':
            elem.style['align-items'] = 'stretch';
            elem.style['justify-content'] = 'flex-start';
            break; 
        default:
            elem.style['align-items'] = 'flex-start';
            elem.style['justify-content'] = 'flex-start';
            break;
    }
}

function setGravityStylesForColumn(elem, props) {
    if (!props.hasOwnProperty('gravity') || !props.gravity) {
        props.gravity = '';
        //return;
    }

    switch (props.gravity) {
        case 'center_vertical':
            elem.style['align-items'] = 'flex-start';
            elem.style['justify-content'] = 'center';
            break;
        case 'center_horizontal':
            elem.style['align-items'] = 'center';
            elem.style['justify-content'] = 'flex-start';
            break;
        case 'center':
            elem.style["align-items"] = "center";
            elem.style["justify-content"] = "center";
            break;
        case 'left':
        case 'start':
            elem.style['justify-content'] = 'flex-start';
            elem.style['align-items'] = 'flex-start';
            break;
        case 'right':
        case 'end':
            elem.style['align-items'] = 'flex-end';
            elem.style['justify-content'] = 'flex-start';
            break;
        case 'stretch':
            elem.style['align-items'] = 'stretch';
            elem.style['justify-content'] = 'flex-start';
            break; 
        default:
            elem.style['align-items'] = 'flex-start';
            elem.style['justify-content'] = 'flex-start';
            break;
    }
}

function setAnimationStyles(elem, props) {
  if (!props.hasOwnProperty('hasAnimation') || !props.hasAnimation) {
    return
  }

  const keyframeName = "keyframe_" + props.id
  if (!window.__RENDERED_KEYFRAMES.includes(keyframeName)) {
    let styleElem = document.getElementById(window.__STYLE_ID)

    if (!styleElem) {
      return
    }

    let data = null

    if (props.inlineAnimation) {
      data = JSON.parse(props.inlineAnimation)
      if (data && data.length > 0) {
        data = data[0]
      }
    }

    if (!data) {
      return
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

    elem.style.animationName = keyframeName
    elem.style.animationDuration = "1s"
    if (data.hasOwnProperty('duration') && !isNaN(data.duration)) {
      const duration = parseFloat(parseFloat(data.duration) / 1000).toFixed(2)
      elem.style.animationDuration = duration + "s"
    }

    if (data.hasOwnProperty('repeatCount')) {
      if (data.repeatCount == "-1" || data.repeatCount == -1) {
        elem.style.animationIterationCount = "infinite"
      } else {
        elem.style.animationIterationCount = data.repeatCount
      }
    }

    if (data.hasOwnProperty("interpolator")) {
      elem.style.animationTimingFunction = "cubic-bezier(" + data.interpolator + ")";
    }

    window.__RENDERED_KEYFRAMES.push(keyframeName)
  }
}

function setComputedStyles(elem, props) {
    /* Computed Styles */
    // LinearLayout Styles
    if (props.hasOwnProperty('activeDimen') && props.hasOwnProperty('activeWeight')) {
        let activeDimen = props.activeDimen;
        let weight = props.activeWeight;

        if (weight > 0) {
            elem.style.flex = weight;

            if (activeDimen == 'w') {
                //elem.style.width = 'auto';
            } else {
                elem.style.height = 'auto';
            }
        } else {
            elem.style.flex = 'none';
        }
    } else {
        elem.style.flex = 'none';
    }

    // RelativeLayout Styles
    if (props.hasOwnProperty('absolute') && props.absolute) {
        elem.style.position = 'absolute';

        if (props.hasOwnProperty("fromTop")) {
            if (isNaN(props.fromTop))
                elem.style.top = props.fromTop;
            else
                elem.style.top = props.fromTop + 'px';
        }

        if (props.hasOwnProperty("fromBottom")) {
            if (isNaN(props.fromBottom))
                elem.style.bottom = props.fromBottom;
            else
                elem.style.bottom = props.fromBottom + 'px';
        }

        if (props.hasOwnProperty("fromLeft")) {
            if (isNaN(props.fromLeft))
                elem.style.left = props.fromLeft;
            else
                elem.style.left = props.fromLeft + 'px';
        }

        if (props.hasOwnProperty("fromRight")) {
            if (isNaN(props.fromRight))
                elem.style.right = props.fromRight;
            else
                elem.style.right = props.fromRight + 'px';
        }
    }
    /* Computed Styles End */
}
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

// what is first render?? 
function setAttributes(type, elem, props, firstRender) {
    // console.log("set Attributes -- props",props); 
    if (type == 'modal') {
        setModalAttributes(elem, props, firstRender);
        return;
    }

    if (elem.classList && elem.classList.length > 0)
        elem.classList.add(type)
    else
        elem.className = type

    elem.style.transition = props.transition;

    /* New Style */
    /* Render from global styles */
    elem.style.width = 'auto';
    elem.style.height = 'auto';

    if (props.hasOwnProperty('width')) {
        if (props.width == 'match_parent') {
            elem.style.width = '100%';
        } else if (props.width == 'wrap_content') {
            // You see below
        } else if (!isNaN(props.width)) {
            if (props.hasOwnProperty('percentWidth') && props.percentWidth)
                elem.style.width = props.width + '%';
            else
                elem.style.width = props.width + 'px';
        }
    }
    if (props.hasOwnProperty('height')) {
        if (props.height == 'match_parent') {
            elem.style.height = '100%';
        } 
        else if (props.height == 'wrap_content') {
            elem.style.height = "auto";
            // You see below
        } else if (!isNaN(props.height)) {
            if (props.hasOwnProperty('percentHeight') && props.percentHeight)
                elem.style.height = props.height + '%';
            else
                elem.style.height = props.height + 'px';
        }
    }

    if (props.hasOwnProperty('minWidth') && !isNaN(props.minWidth)) {
        if (props.percentMinWidth)
            elem.style.minWidth = props.minWidth + '%';
        else
            elem.style.minWidth = props.minWidth + 'px';
    }

    if (props.hasOwnProperty('minHeight') && !isNaN(props.minHeight)) {
        if (props.percentMinHeight)
            elem.style.minHeight = props.minHeight + '%';
        else
            elem.style.minHeight = props.minHeight + 'px';
    }

    if (props.hasOwnProperty('maxWidth') && !isNaN(props.maxWidth)) {
        if (props.percentMaxWidth)
            elem.style.maxWidth = props.maxWidth + '%';
        else
            elem.style.maxWidth = props.maxWidth + 'px';
    }

    if (props.hasOwnProperty('maxHeight') && !isNaN(props.maxHeight)) {
        if (props.percentMaxHeight)
            elem.style.maxHeight = props.maxHeight + '%';
        else
            elem.style.maxHeight = props.maxHeight + 'px';
    }

    if (props.hasOwnProperty('padding')) {
        let padding = props.padding.split(',').map(a => a * 1);

        elem.style['padding'] = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
    }

    if (props.hasOwnProperty('margin')) {
        let margin = props.margin.split(',').map(a => a * 1);

        elem.style['margin'] = margin[1] + 'px ' + margin[2] + 'px ' + margin[3] + 'px ' + margin[0] + 'px';
    }

    if (props.hasOwnProperty('visibility')) {
        let visibility = props.visibility;
        if (visibility == 'invisible')
            elem.style.visibility = "hidden";
        else if (visibility == 'gone')
            elem.style.display = "none";
        else {
            elem.style.visibility = '';

            initializeShow(elem, props, type);
        }
    } else {
        initializeShow(elem, props, type);
    }

    if (props.hasOwnProperty('expand')) {
        let visibility = props.expand + '';
        if (visibility == 'true'){
            elem.style.visibility = '';
            initializeShow(elem, props, type);
        }
        else
            elem.style.display = "none";
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
            elem.style.overflow = "visible"
        }
    }

    /* Render type specific styles */
    if (type == 'linearLayout') {
        elem.style["box-sizing"] = "border-box";

        if (props.hasOwnProperty('fixedWrap') && !props.fixedWrap) {
            elem.style["flex-wrap"] = "nowrap";
        } else {
            elem.style["flex-wrap"] = "wrap";
        }

        elem.style["flex-direction"] = props.orientation == "horizontal" || props.orientation == null ? "row" : "column";

        if (elem.style["flex-direction"] == 'row')
            setGravityStylesForRow(elem, props);
        else
            setGravityStylesForColumn(elem, props);

        if (props.hasOwnProperty('scrollBarX')) {
            if (props.scrollBarX)
                elem.style.overflowX = 'auto'
            else
                elem.style.overflowX = 'hidden'
        }

        if (props.hasOwnProperty('scrollBarY')) {
            if (props.scrollBarY)
                elem.style.overflowY = 'auto'
            else
                elem.style.overflowY = 'hidden'
        }

    } else if (type == "horizontalScrollView") {
        elem.style.overflowX = "auto";
        elem.style.overflowY = "hidden";

        if (!scrollBarX)
            elem.style.overflowX = 'hidden';
    } else if (type == "listView") {
        elem.style.overflowY = "auto";
        elem.style.overflowX = "hidden";

        if (!scrollBarY)
            elem.style.overflowY = 'hidden';
    } else if (type == 'scrollView') {
        elem.style.overflowX = 'auto';
        elem.style.overflowY = 'auto';

        if (!scrollBarX)
            elem.style.overflowX = 'hidden';
        if (!scrollBarY)
            elem.style.overflowY = 'hidden';
    } else if (type == 'relativeLayout') {
        elem.style.position = 'relative';

        if (props.hasOwnProperty('scrollBarX')) {
          if (props.scrollBarX)
              elem.style.overflowX = 'auto'
          else
              elem.style.overflowX = 'hidden'
        }

        if (props.hasOwnProperty('scrollBarY')) {
          if (props.scrollBarY)
              elem.style.overflowY = 'auto'
          else
              elem.style.overflowY = 'hidden'
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

    for (let key in props) {
        if (key == "popupMenu") {
            popup(elem, props)
        } else if (key == "text") {
            if (type == "editText")
                elem.value = props[key]
            else
                createTextElement(elem, props)
        }else if (key == "textFromHtml") {
            if (type == "editText")
                elem.value = props[key]
            else
                createTextElement2(elem, props)
        } 
        else if (key == "style") {
            for (let innerKey in props.style) {
                if (innerKey == "className") {
                    elem.className += " " + props.style[innerKey];
                } else if (props.buttonClickOverlay !== undefined && ["background", "background-image"].includes(innerKey)) {
                    elem.style[innerKey] = `linear-gradient(to right, rgba(0,0,0,${props.buttonClickOverlay}) 50%, transparent 50%), ` + props.style[innerKey];
                    elem.style["background-position"] = "right bottom";
                    elem.style["background-size"] = "200% 100%, 100% 100%";
                } else
                    elem.style[innerKey] = props.style[innerKey];
            }
        } else if (key == "attributes") {
            for (let innerKey in props.attributes) {
                elem.setAttribute(innerKey, props.attributes[innerKey]);
            }
        } else if (key == "className") {
            if ((props[key] || "").trim() !== "") {
                props[key].split(" ").map(className => {
                    elem.classList.add(className); 
                })
            }
        } else if (key == "classList") {
            JSON.parse(props[key]).forEach(function (obj) {
                elem.classList.add(obj);
            });
        }
        else if (key == "removeClassList"){
                        JSON.parse(props[key]).forEach(function (obj) {
                           elem.classList.remove(obj);
                       });
                   }
        else if (props[key] && typeof props[key] == "function") {

            var eventType = key.substring(2, key.length).toLowerCase();
            var elemCB = props[key];
            elem.style.userSelect = 'none';
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
        //TODO: Repeated code to be removed later
        //   if (props.label) {
        //     elem.addEventListener('blur', function() {
        //       var inputValue = elem.value;
        //       if (inputValue == "") {
        //         elem.classList.remove("filled");
        //         elem.parentNode.classList.remove('focused');
        //       } else {
        //         elem.classList.add('filled');
        //       }
        //     });  

        //     if (!(props.label && eventType == "focus") && firstRender) {
        //         /*elem['on' + eventType] = function (e) {
        //             e.stopPropagation()
        //             eventType == "input" ? elemCB(e.target.value) : elemCB(e)
        //         }*/
        //     }
        // }
    }

    if (!props.animation) {
        console.error("animaiton not found", props)
    }
    if (props.animation.transition) {
        const afterTransition = () => {
            const animation = props.animation;
            elem.style.transition = animation.transition;
            elem.style.transform = animation.transform;
            if (animation.opacity) {
                elem.style.opacity = animation.opacity;
            }
        };

        if (props.style.transform || props.style.opacity) {
            setTimeout(afterTransition, 100);
        } else {
            afterTransition();
        }
    }

    /* Events */
    if (firstRender) {
        if (type == "editText" && elem.tagName.toLowerCase() == "input") {
            var isIPhone = (navigator.userAgent.indexOf("iPhone") !== -1)
            if (props.autofocus && !isIPhone) {
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
        renderComponent(elem, props, firstRender)
}

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
    if (type == 'linearLayout') {
        if (props.hasOwnProperty('width') && props.width == 'wrap_content') {
            elem.style.display = 'inline-flex';
            elem.style.width = 'max-content';
        } else {
            elem.style.display = "flex";
        }
    } else {
        if (props.hasOwnProperty('width') && props.width == 'wrap_content') {
            elem.style.display = 'inline-block';
            elem.style.width = 'max-content';
        } else {
            elem.style.display = '';
        }
    }
}

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

/* Do some actions after rendered */
let cb = (elem, view) => {
    if (view.props.feedback && typeof view.props.feedback == "function") {
        view.props.feedback()
    }
}

// Creates the Modal element if it has not been already inflated
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
// View: Object of ReactDOM, {type, props, children}
// parentElement: DOM Object

let inflateView = function (view, parentElement, siblingView, stopChild, stopObserver, renderStyle) {
    // debugger; 

    // if (view.hasOwnProperty('children') && view.children.length > 0) {
    //     for (let i = 0; i < view.children.length; i++) {
    //         if (view.children[i]) {
    //             elem = document.createElement(view.elName || "div"); 
    //             parentElement.appendChild(inflateView(view.children[i], elem)); 
    //         }
    //     }
    // }



    // const start = performance.now();

    if (view.type == 'modal') { // need to test it out too 
        return inflateModal(view, parentElement, stopChild);
    }

    let elem = document.getElementById(view.props.id); // when is this true?? 
    let subElem = null; //  this is being used only for lable property 
    let newInflated = false; // new inflated -- no idea 

    if (view.props.x == "NaN" || view.props.y == "NaN") {
        view = handleWrapContent(view, parentElement)
    }

    if (!elem) {
        if (view.type == "webView") {
            elem = document.createElement('iframe')

            elem.style.border = 'none'
        } else if (view.type == "imageView") {
            elem = document.createElement("img");
            elem["style"]["margin"] = "0";
            elem["style"]["padding"] = "0";
            elem["style"]["display"] = "block";
            elem["style"]["max-width"] = "100%";
            elem["style"]["max-height"] = "100%";
            elem["style"]["box-sizing"] = "border-box";
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
            if (view.props.hasOwnProperty('inputType') && view.props.inputType == 'multiText') {
                elem = document.createElement("textarea");
                elem.style.border = 'none';
                elem.style.resize = 'none';
                elem.style.outline = 'none';
            } else {
                elem = document.createElement("input");
            }

            elem.value = view.props.text || "";

            if (view.props.letterSpacing) {
                elem["style"]["letter-spacing"] = view.props.letterSpacing;
            }

            if (view.props.label) {
                var inputView = elem;
                inputView.style.width = '100%';
                setAttributes(view.type, inputView, view.props, true);
                inputView.setAttribute("id", view.props.id + "_input");
                var l = document.createElement("label");
                l.setAttribute("for", view.props.id + "_input");
                l.innerHTML = view.props.label;
                l.classList.add('input-label');

                l["style"]["position"] = "absolute";
                l["style"]["color"] = "#999";
                l["style"]["background-color"] = "#fff";
                l["style"]["padding"] = "0 5px";
                l["style"]["z-index"] = 10;
                l["style"]["transition"] = "transform 150ms ease-out, font-size 150ms ease-out";

                if (view.props.letterSpacing) {
                    l["style"]["letter-spacing"] = view.props.letterSpacing;
                }

                elem = document.createElement("div");
                elem.classList.add('input-group');
                elem.appendChild(l);
                elem.appendChild(inputView);

                view.props.style.position = "relative";
                setAttributes(view.type, elem, view.props, true);
                delete view.props.label;
            } else if (view.props.hint) {
                elem.placeholder = view.props.hint || "";
            }
        } else {
            elem = document.createElement(view.elName || "div"); // create the element here 
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

        // attach the element to the dom 
        // debugger; 
        if (parentElement) {
            let siblingElement = siblingView ? document.getElementById(siblingView.props.id) : null;

            if (siblingElement && siblingElement != undefined) {
                // console.log("sibling element exists! this should never happen!"); 
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
                // console.log("sibling element doesn't exists! this should always happen!"); 
                parentElement.appendChild(elem);
                if (subElem) {
                    parentElement.appendChild(subElem);
                }
            }
        }

        // if(parentElement){
        //     parentElement.appendChild(elem);
        //     if (subElem) { // TODO: subElement should be removed 
        //         parentElement.appendChild(subElem);
        //     }
        // }

        // appened attributes, nodes & style to the elemenent 
        setAttributes(view.type, elem, view.props, true);

        /*if(view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function"){
          if(!stopObserver){
            // We should run observer for the element
            observer(elem);
            elem.setAttribute('has_render', true);
          }
        }*/
    } else if (renderStyle) {
        setAttributes(view.type, elem, view.props, false);
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

    // ------ BENCHMARK COMPUTE CHILD DIMENS 
    // if (!window.hasOwnProperty('computeChildTime')) window.computeChildTime = {}
    // if (!stopChild){
    //     var timeit = performance.now(); 
    //     computeChildDimens(view); // iterates over the childern ( just first level, no nested iteration) // takes 54ms
    //     var timeit2 = performance.now(); 
    //     var cx = window.computeChildTime["time"]; 
    //     // console.log("cx is",cx); 
    //     if ( (cx || cx == 0) && cx >= 0){
    //         // console.log("cx is true",cx); 
    //         window.computeChildTime["time"]+=(timeit2-timeit); 
    //     }
    //     else{
    //         // console.log("cx is false",cx); 
    //         window.computeChildTime["time"] = 0; 
    //     }
    // }

    if(!stopChild) computeChildDimens(view); 

    setComputedStyles(elem, view.props); // more if & else, should be negligible impact on perf 
    setAnimationStyles(elem, view.props); // more if & else 

    // todo fix this! if/else is not required, sibling view is irrelevant 
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
        cb(elem, view); // this is absolutely nothing 
    }

    // const end = performance.now();

    return elem;
};

let handleWrapContent = (view, parentElement) => {
    let newDimen = 0;
    for (var i = 0; i < parentElement.childNodes.length; i++) {
        newDimen += parentElement.childNodes[i].offsetWidth;
    }
    view.props.x = newDimen;
    return view;
}

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

        setAttributes(view.type, elem, view.props, false);
    });
};

module.exports = {
    inflateView,
    runInUI,
    computeChildDimens
};

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

function setAnimationStyles(elem, props) {

    var animation_style = "";
    if (!props.hasOwnProperty('hasAnimation') || !props.hasAnimation) {
      return animation_style;
    }
    const keyframeName = "keyframe_" + props.id;
    let styleElem = document.getElementById(window.__STYLE_ID)
  
  
    let data = null
  
    if (props.inlineAnimation) {
        console.log("INLINE")
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
          css += "margin-left: " + data.fromX + "%;"
        }
  
        if (data.hasOwnProperty('fromY')) {
          css += "margin-top: " + data.fromY + "%;"
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
          css += "margin-left: " + data.toX + "%;"
        }
  
        if (data.hasOwnProperty('toY')) {
          css += "margin-top: " + data.toY + "%;"
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
    // console.log("css ", css);
    if(styleElem && styleElem.styleSheet){
      styleElem.styleSheet.cssText += css;
    }else{
      styleElem = document.createElement('style');
      styleElem.appendChild(document.createTextNode(css));
      document.getElementsByTagName("head")[0].appendChild(styleElem);
    }
  
    animation_style += "animation-name:"+keyframeName+";";
  
    // elem.style.animationName = keyframeName
    //elem.style.animationDuration = "1s"
    if (data.hasOwnProperty('duration') && !isNaN(data.duration)) {
      const duration = parseFloat(parseFloat(data.duration) / 1000).toFixed(2)
      animation_style += "animation-duration:"+duration+"s;";
      //elem.style.animationDuration = duration + "s"
    } else {
      animation_style += "animation-duration: 1s;";
    }
    animation_style += 'transform-origin:0%;';
    if (data.hasOwnProperty('repeatCount')) {
      if (data.repeatCount == "-1" || data.repeatCount == -1) {
        animation_style += "animation-iteration-count:infinite;";
        // elem.style.animationIterationCount = "infinite"
      } else {
        animation_style += "animation-iteration-count:"+(data.repeatCount + 1)+";";
        // elem.style.animationIterationCount = data.repeatCount
      }
    }
  
    if (data.hasOwnProperty("interpolator")) {
      animation_style += "animation-timing-function:"+"cubic-bezier(" + data.interpolator + ")"+";";
    //   elem.style.animationTimingFunction = "cubic-bezier(" + data.interpolator + ")";
    }
  
    window.__RENDERED_KEYFRAMES.push(keyframeName)
    console.log("animation style ", animation_style)
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

function setAttributes(view, elem, firstRender) {
    var type = view.type
    var props = view.props
    let elem_style = "";
    elem.setAttribute("id",props.id);
    // elem_style += "id:"+props.id+";";

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
    mapAttributes.addTextProperties(props, elem, type);
    mapAttributes.addClassNameProperties(props,elem);

    elem_style += mapAttributes.mapPropToStyle(elem,props,type);
    elem = mapAttributes.setElemAttributes(elem,props);
    elem_style+=mapAttributes.addFunctions(props, elem);
    elem_style+=mapAttributes.addAnimationAttributes(props);

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
    //console.log(view.type);
    switch(view.type) {
        case "webView":
            elem = document.createElement('iframe')

            elem.style.border = 'none';
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
        element_style += setAttributes(view, elem, true);
    }
    setLayout(elem,view);
    if(!stopChild) computeChildDimens(view);
    element_style += setComputedStyles(elem, view.props);
    element_style += setAnimationStyles(elem, view.props);
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

let renderList = (view,elem)=>{
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
                elem.appendChild(inflateView({view:view.children[i]}))}
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

                    let newChild = inflateView({view:newChildView});
                    // newChild.addEventListener('click',newChildView.props.onClick)
                    // newChild.style.cursor='pointer'
                    // console.dir(newChild)
                    elem.replaceChild(newChild,oldChild);

                }
                //console.timeEnd('patchingElement')
        }
        }
        view.props.diffArray = undefined;
}
let inflateView = function ({view, parentElement, siblingView, stopChild, renderStyle} ={}) {
    view.state = view.state || {};

    if(view.props.listData){
        view.props.itemDatas = JSON.parse(view.props.listData);
        if(!view.props.data){
            view.props.data = JSON.parse(view.props.listItem)
        }
    }

    let {elem,newInflated} = getElementByView(view, parentElement, siblingView, stopChild, renderStyle);

    //patching list
    if(view.props.listData && renderStyle ){
        renderList(view, elem);
    } else if (!stopChild ) {
        //firstRender List
        if (view.props.itemDatas) {
            List.createListView(view);
            computeChildDimens(view);

        }
       if (view.hasOwnProperty('children') && view.children.length > 0) {
           preComputeLayoutDimens(view);
            for (let i = 0; i < view.children.length; i++) {
                if (view.children[i]) {
                    view.children[i].parent = view;
                    if (i != 0) {
                        inflateView({view:view.children[i], parentElement:elem, siblingView:view.children[i - 1], stopChild:renderStyle, renderStyle});
                    } else {
                        inflateView({view:view.children[i], parentElement:elem, siblingView:view, stopChild:renderStyle, renderStyle});
                    }
                }
            }
            postComputeLayoutDimens(view, elem)
        }
        view.state = view.state || {}
        view.state.computedHeight = isNaN(parseInt(view.props.height)) ? view.state.computedHeight || 0 : parseInt(view.props.height)
        view.state.computedWidth = isNaN(parseInt(view.props.width)) ? view.state.computedWidth || 0 : parseInt(view.props.width)
    }
    else {
        postComputeLayoutDimens(view, elem);
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
let postComputeLayoutDimens = (view, elem) => {
    if(view.type == "relativeLayout" && (view.state.practicalWidth == "wrap_content"  || view.state.practicalHeight == "wrap_content" ) && view.children.length > 0) {
        var largestHeight = view.children[0].state.computedHeight;
        var largestWidth = view.children[0].state.computedWidth;
        for (var i = 1; i < view.children.length; ++i) {
            if (view.state.practicalHeight == "wrap_content") {
                largestHeight = largestHeight > view.children[i].state.computedHeight ? largestHeight : view.children[i].state.computedHeight;
            }
            if (view.state.practicalWidth == "wrap_content") {
                largestWidth = largestWidth > view.children[i].state.computedWidth ? largestWidth : view.children[i].state.computedWidth
            }
        }
        if(view.state.practicalHeight == "wrap_content" ) {
            elem.style.height = largestHeight + "px"
            view.state.computedHeight = largestHeight
        }
        if(view.state.practicalWidth == "wrap_content") {
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

module.exports = {
    inflateView,
    computeChildDimens,
    List,
    postComputeLayoutDimens,
    preComputeLayoutDimens
};

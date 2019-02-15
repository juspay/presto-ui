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

let { computeChildDimens } = require("../compute");
let helper = require("../helper");
let R = require("ramda");

function createTextElement(elem, config) {
  let children = elem.childNodes;
  let span = elem.childNodes.length ? elem.childNodes[0] : document.createElement(
    'span');

  elem.style.whiteSpace = "initial";
  span.innerText = config.text;
  span.style.wordBreak = "break-word"
  if (config.letterSpacing)
    elem["style"]["letter-spacing"] = config.letterSpacing;
  elem.appendChild(span);
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

function setGravityStylesForRow(elem, props){
  if(!props.hasOwnProperty('gravity') || !props.gravity)
    return;

  switch(props.gravity){
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
  }
}

function setGravityStylesForColumn(elem, props){
  if(!props.hasOwnProperty('gravity') || !props.gravity)
    return;

  switch(props.gravity){
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
  }
}

function setComputedStyles(elem, props){
  /* Computed Styles */
  // LinearLayout Styles
  if(props.hasOwnProperty('activeDimen') && props.hasOwnProperty('activeWeight')){
    let activeDimen = props.activeDimen;
    let weight = props.activeWeight;

    if(weight > 0){
      elem.style.flex = weight;
            
      if(activeDimen == 'w'){
        elem.style.width = 'auto';
      }else{
        elem.style.height = 'auto';
      }
    }else{
      elem.style.flex = 'none';  
    }
  }else{
    elem.style.flex = 'none';  
  }
  
  // RelativeLayout Styles
  if(props.hasOwnProperty('absolute') && props.absolute){
    elem.style.position = 'absolute';

    if(props.hasOwnProperty("fromTop")){
      if(isNaN(props.fromTop))
        elem.style.top = props.fromTop;
      else
        elem.style.top = props.fromTop + 'px';
    }

    if(props.hasOwnProperty("fromBottom")){
      if(isNaN(props.fromBottom))
        elem.style.bottom = props.fromBottom;
      else
        elem.style.bottom = props.fromBottom + 'px';
    }

    if(props.hasOwnProperty("fromLeft")){
      if(isNaN(props.fromLeft))
        elem.style.left = props.fromLeft;
      else
        elem.style.left = props.fromLeft + 'px';
    }

    if(props.hasOwnProperty("fromRight")){
      if(isNaN(props.fromRight))
        elem.style.right = props.fromRight;
      else
        elem.style.right = props.fromRight + 'px';
    }
  }
  /* Computed Styles End */
}

function setAttributes(type, elem, props, firstRender) {
  if(type == 'modal')
    return;

  elem.className = type;
  
  let afterTransition = (x) => {
    let animation = props.animation;
    let myElem = elem;
    let pro = props;
    if (animation.transition) {
      myElem.style.transition = animation.transition;
      myElem.style.transform = animation.transform;
      if (animation.opacity)
        myElem.style.opacity = animation.opacity;
    }
  };

  elem.style.transition = props.transition;

  /* New Style */
    /* Render from global styles */
    elem.style.width = 'auto';
    elem.style.height = 'auto';

    if(props.hasOwnProperty('width')){
      if(props.width == 'match_parent'){
        elem.style.width = '100%';
      }else if(props.width == 'wrap_content'){
        // You see below
      }else if(!isNaN(props.width)){
        if(props.hasOwnProperty('percentWidth') && props.percentWidth)
          elem.style.width = props.width + '%';
        else
          elem.style.width = props.width + 'px';
      }
    }
  
    if(props.hasOwnProperty('height')){
      if(props.height == 'match_parent'){
        elem.style.height = '100%';
      }else if(!isNaN(props.height)){
        if(props.hasOwnProperty('percentHeight') && props.percentHeight)
          elem.style.height = props.height + '%';
        else
          elem.style.height = props.height + 'px';
      }
    }
    
    if(props.hasOwnProperty('minWidth') && !isNaN(props.minWidth)){
      elem.style.minWidth = props.minWidth + 'px';
    }

    if(props.hasOwnProperty('minHeight') && !isNaN(props.minHeight)){
      elem.style.minHeight = props.minHeight + 'px';
    }

    if(props.hasOwnProperty('padding')){
      let padding = props.padding.split(',').map(a => a * 1);
  
      elem.style['padding'] = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
    }
  
    if(props.hasOwnProperty('margin')){
      let margin = props.margin.split(',').map(a => a * 1);
  
      elem.style['margin'] = margin[1] + 'px ' + margin[2] + 'px ' + margin[3] + 'px ' + margin[0] + 'px';
    }
    
    if(props.hasOwnProperty('visibility')){
      let visibility = props.visibility;
      if(visibility == 'invisible')
        elem.style.visibility = "hidden";
      else if(visibility == 'gone')
        elem.style.display = "none";
      else{
        elem.style.visibility = '';

        initializeShow(elem, props, type);  
      }
    }else{
      initializeShow(elem, props, type);
    }
    /* Render global styles end */

    let scrollBarX = true;
    let scrollBarY = true;

    if(props.hasOwnProperty('scrollBarX'))
      scrollBarX = props.scrollBarX;
    if(props.hasOwnProperty('scrollBarY'))
      scrollBarY = props.scrollBarY;

    /* Render type specific styles */
    if(type == 'linearLayout'){
      elem.style["box-sizing"] = "border-box";
      elem.style["flex-wrap"] = "wrap";
      elem.style["flex-direction"] = props.orientation == "horizontal" || props.orientation == null ? "row" : "column";
      
      if(elem.style["flex-direction"] == 'row')
        setGravityStylesForRow(elem, props);
      else
        setGravityStylesForColumn(elem, props);  
    } else if (type == "horizontalScrollView") {
      elem.style.overflowX = "auto";
      elem.style.overflowY = "hidden";

      if(!scrollBarX)
        elem.style.overflowX = 'hidden';
    } else if (type == "listView") {
      elem.style.overflowY = "auto";
      elem.style.overflowX = "hidden";

      if(!scrollBarY)
        elem.style.overflowY = 'hidden';
    } else if(type == 'scrollView') {
      elem.style.overflowX = 'auto';
      elem.style.overflowY = 'auto';

      if(!scrollBarX)
        elem.style.overflowX = 'hidden';
      if(!scrollBarY)
        elem.style.overflowY = 'hidden';
    } else if(type == 'relativeLayout') {
      elem.style.position = 'relative';
    }
    /* Render type specific styles end */
  /* New Style End */
  
  for (let key in props) {
    if (key == "popupMenu") {
      popup(elem, props);
    } else if (key == "text") {
      if (type == "editText")
        elem.value = props[key];
      else
        createTextElement(elem, props);
    } else if (key == "style") {
      for (let innerKey in props.style) {
        if (innerKey == "className")
          elem.className += props.style[innerKey];
        else
          elem.style[innerKey] = props.style[innerKey];
      }
    } else if (key == "attributes") {
      for (let innerKey in props.attributes){
        elem.setAttribute(innerKey, props.attributes[innerKey]);
      }
    } else if (key == "className") {
        elem.classList.add(props[key]);
    } else if (key == "classList") {
      JSON.parse(props[key]).forEach(function(obj) {
        elem.classList.add(obj);
      });
    } else if (props[key] && typeof props[key] == "function") {
      var eventType = key.substring(2, key.length).toLowerCase();
      var cb = props[key];
      elem.style.userSelect = 'none';
      if (eventType == "change") {
        eventType = "input";
      }

      if (props.label) {
        elem.addEventListener('blur', function() {
          var inputValue = elem.value;
          if (inputValue == "") {
            elem.classList.remove("filled");
            elem.parentNode.classList.remove('focused');
          } else {
            elem.classList.add('filled');
          }
        });

        if (type == "editText"){
          elem.addEventListener('keydown', function(key) {
            try {
              var keycode = key.keyCode;
              var valid = (keycode > 47 && keycode < 58)   || // number keys
                          (keycode > 64 && keycode < 91)   || // letter keys
                          (keycode > 95 && keycode < 112)  || // numpad keys
                          (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
                          (keycode > 218 && keycode < 223); // [\]' (in order)
              if (valid){
                var inputId = key.path[0].getAttribute("id");
                var input = document.getElementById(inputId);
                var currentInput = key.key;
                var currentData = input.value;
                if(input.getAttribute("pattern")){
                  var data = input.getAttribute("pattern").split(',');
                  var length = parseInt(data.pop());
                  var regexString = data.join('');
                  if(length){
                    if(currentData.length+1>length){
                      input.value = currentData;
                      key.preventDefault();
                    }
                  }
                  if(regexString){
                    var finalData = currentData+currentInput;
                    var regexPattern = new RegExp(regexString);
                    if(!regexPattern.test(finalData)){
                      key.preventDefault();
                    }
                  }
                }
              }
            } catch (error) {}
          });
        }

        elem['onfocus'] = function (e) {
          elem.parentNode.classList.add('focused');
          if (eventType == "focus") {
            e.stopPropagation();
            cb(e);
          }
        };
      }

      if (!(props.label && eventType == "focus")) {
        elem['on' + eventType] = function (e) {
          e.stopPropagation();eventType == "input" ? cb(e.target.value) : cb(e);
        };
      }
    }
  }

  if ((props.style.transform || props.style.opacity) && props.animation.transition) {
    setTimeout(afterTransition, 100);
  } else if (props.animation.transition) {
    afterTransition();
  }
}

let initializeShow = function(elem, props, type) {
  if(type == 'linearLayout'){
    if(props.hasOwnProperty('width') && props.width == 'wrap_content'){
      elem.style.display = 'inline-flex';
      elem.style.width = 'auto';
    }else{
      elem.style.display = "flex";
    }
  }else{
    if(props.hasOwnProperty('width') && props.width == 'wrap_content'){
      elem.style.display = 'inline-block';
      elem.style.width = 'auto';
    }else{
      elem.style.display = '';
    }
  }
}

let isHorizontalScrollView = function (elem) {
  return elem && elem.classList[0] == "horizontalScrollView";
}

let isScrollView = function (elem) {
  return elem && elem.classList[0] == "scrollView";
}

// Creates the Modal element if it has not been already inflated
let inflateModal = function (view, callFrom) {
  let newInflated = false;

  /* Modal Wrapper */
  let elem = document.getElementById(view.props.id);
  if(!elem || elem == undefined){
    newInflated = true;

    elem = document.createElement('div');
    elem.setAttribute('id', view.props.id);
    elem.classList.add(window.__CONTENTMODAL_CLASS);

    setGravityStylesForRow(elem, view.props);
  }
  /* Modal Wrapper End */

  /* BackDrop */
  let backdropElem = document.getElementById(window.__BACKDROPMODAL_CLASS + '_' + view.props.id);
  if(!backdropElem || backdropElem == undefined){
    backdropElem = document.createElement('div');
    backdropElem.setAttribute('id', window.__BACKDROPMODAL_CLASS + '_' + view.props.id);
    backdropElem.classList.add(window.__BACKDROPMODAL_CLASS);
    
    if(view.props.hasOwnProperty('animationType') && view.props.animationType != 'none'){
      let animationType = view.props.animationType;
      
      if(animationType == 'fade'){
        backdropElem.classList.add(window.__FADEMODAL_CLASS);
      }else if(animationType == 'slide'){
        backdropElem.classList.add(window.__SLIDEMODAL_CLASS);
      }
    }

    if(view.props.hasOwnProperty('closeOnBackdrop') && !view.props.closeOnBackdrop){
      backdropElem.classList.add(window.__DISABLEDBACKDROP_CLASS);
    }else{
      backdropElem.classList.remove(window.__DISABLEDBACKDROP_CLASS);
    }

    if(view.props.hasOwnProperty('transparent') && view.props.transparent){
      backdropElem.style.background = 'transparent';
    }else{
      backdropElem.style.background = 'rgba(0, 0, 0, 0.5)';
    }

    backdropElem.appendChild(elem);
    document.body.appendChild(backdropElem);
  }
  /* BackDrop End */

  /* Dynamic Styles */
  if(view.props.hasOwnProperty('modalVisibility') && view.props.modalVisibility){
    backdropElem.classList.add(window.__SHOWNMODAL_CLASS);
    document.body.classList.add(window.__OPENMODAL_CLASS);

    let modalView = null;
    if(window.__MODAL_VIEWS[view.props.id]){
      modalView = JSON.parse(window.__MODAL_VIEWS[view.props.id]);
    }

    if(view.props.onShow && typeof view.props.onShow ==
      "function"){
      if(newInflated || (modalView && modalView.props.modalVisibility != view.props.modalVisibility)){
        view.props.onShow();
      }
    }
  }else{
    view.props.modalVisibility = false;
    backdropElem.classList.remove(window.__SHOWNMODAL_CLASS);
    document.body.classList.remove(window.__OPENMODAL_CLASS);
  }
  /* Dynamic Styles End */

  view.props.time = Math.random();
  window.__MODAL_VIEWS[view.props.id] = JSON.stringify(view);
  
  if(view.hasOwnProperty('children') && view.children.length > 0){
    for (let i = 0; i < view.children.length; i++) {
      if (view.children[i]) {
        view.children[i].props.style.pointerEvents = 'auto';
        if(i != 0)
          inflateView(view.children[i], elem, view.children[i-1], callFrom);
        else
          inflateView(view.children[i], elem, view, callFrom);
      }
    }
  }

  return backdropElem;
}

// Creates the DOM element if it has not been already inflated
// View: Object of ReactDOM, {type, props, children}
// parentElement: DOM Object
let inflateView = function (view, parentElement, siblingView, callFrom) {
  if(view.type == 'modal'){
    return inflateModal(view, callFrom);
  }

  let elem = document.getElementById(view.props.id);
  let subElem = null;
  let newInflated = false;
  let cb = () => {
    if (view.props.afterRender && typeof view.props.afterRender ==
      "function") {
      view.props.afterRender();
    }

    if (view.props.feedback && typeof view.props.feedback == "function") {
      view.props.feedback();
    }
  }

  if (!elem) {
    if (view.type == "imageView"){
      elem = document.createElement("img");
      elem["style"]["margin"] = "0";
      elem["style"]["padding"] = "0";
      elem["style"]["display"] = "block";
      elem["style"]["max-width"] = "100%";
      elem["style"]["max-height"] = "100%";
      elem["style"]["box-sizing"] = "border-box";
      elem.setAttribute("alt", "");
    }else if (view.type == "checkBox"){
      elem = document.createElement("input");
      elem.setAttribute('type', 'checkbox');

      if(view.props.hasOwnProperty('checked') && view.props.checked == true){
        elem.setAttribute('checked', 'checked');
      }else{
        elem.removeAttribute('checked');
      }

      if(view.props.hasOwnProperty('label') && view.props.label != '' && parentElement){
        subElem = document.createElement('label');
        subElem.setAttribute('for', view.props.id);
        subElem.innerHTML = view.props.label;
        subElem.style.padding = "0 0 0 5px";
        subElem.classList.add('input-label');
        
        delete view.props.label;
      }
    }else if (view.type == "editText") {
      if(view.props.hasOwnProperty('inputType') && view.props.inputType == 'multiText'){
        elem = document.createElement("textarea");
        elem.style.border = 'none';
        elem.style.resize = 'none';
        elem.style.outline = 'none';
      }else{
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
    } else
      elem = document.createElement("div");

    newInflated = true;

    if (parentElement) {
      let siblingElement = siblingView?document.getElementById(siblingView.props.id):null;

      if(siblingElement && siblingElement != undefined){
        if(parentElement == siblingElement){ // Prepend
          if(subElem){
            parentElement.prepend(subElem);
          }
          parentElement.prepend(elem);
        }else{ // Insert in specified position
          let nextSiblingElement = siblingElement.nextSibling;

          parentElement.insertBefore(elem, nextSiblingElement);
          if(subElem){
            parentElement.insertBefore(subElem, nextSiblingElement);
          }
        }
      }else{
        parentElement.appendChild(elem);
        if(subElem){
          parentElement.appendChild(subElem);
        }
      }
    }

    setAttributes(view.type, elem, view.props, true);
  }

  computeChildDimens(view);
  setComputedStyles(elem, view.props);

  if(view.hasOwnProperty('children') && view.children.length > 0){
    for (let i = 0; i < view.children.length; i++) {
      if (view.children[i]) {
        if(i != 0)
          inflateView(view.children[i], elem, view.children[i-1], callFrom);
        else
          inflateView(view.children[i], elem, view, callFrom);
      }
    }
  }

  if (newInflated)
    cb();

  return elem;
};

let runInUI = function (cmd) {
  if (!(cmd instanceof Array))
    cmd = [cmd];
  
  cmd.forEach(function (each) {
    let elem = document.getElementById(each.id);
    if (!elem)
      return console.error("runInUI (Id NULL) CMD:", each);

    let view = window.__VIEWS[elem.id];
    view.props = R.merge(view.props, each);
        
    setAttributes(view.type, elem, view.props, false);
  });
};

module.exports = {
  inflateView,
  runInUI,
  computeChildDimens
};
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

var {
  inflateView,
  computeChildDimens
} = require("./Render");
var helper = require('../helper');
var callbackInvoker = require("../helpers/common/callbackInvoker"); 


function getScreenDimensions() {
  let element = document.getElementById("content");
  return JSON.stringify({
    width: element.offsetWidth,
    height: element.offsetHeight
  });
}

// Due to jos, PrestoDOM's document is different from the DOM Document which actaully contains the nodes. 
// This utility function allows PrestoDOM to acquire an actual DOM object. 
function getUIElement(id){
  var ele = document.getElementById(id); 
  return ele; 
}

function runInUI(cmd) {
  if (typeof cmd == "string")
    return

  let id = cmd.id
  if(id){
    let elem = document.getElementById(id)

    if(elem){
      let view = window.__VIEWS[id]
      view.props = helper.merge(view.props, cmd)
      
      let parentId = null
      let parentElem = null
      let parentView = null

      if(elem){
        let view = window.__VIEWS[id]
        view.props = helper.merge(view.props, cmd)
        
        let parentId = null
        let parentElem = null
        let parentView = null

        if(view.type == 'modal'){
          parentId = elem.getAttribute('virtual_parent')

          if(parentId){
            parentView = window.__VIEWS[parentId]
            parentElem = document.getElementById(parentId)
            
            if(parentElem && parentView){
              inflateView(view, parentElem, null, true)
            }
          }
        }else{
          parentId = elem.parentNode.id

          if(parentId){
            parentView = window.__VIEWS[parentId]
            parentElem = document.getElementById(parentId)

            if(parentElem && parentView){
              let siblingView = null

              for (let i = 0; i < parentView.children.length; i++) {
                if(parentView.children[i].props.id == id){
                  if(i != 0)
                    siblingView = parentView.children[i-1]
                  else
                    siblingView = parentView
                  break
                }
              }

              computeChildDimens(parentView)
              inflateView(view, parentElem, siblingView, false, false, true)
            }
          }
        }
      }
    }
  }
  //recompute()
  //Render.runInUI(cmd)
}

function Render(view, cb) {
  /* Global Style Tag */
  // console.debug("presto render called in document location",document.location);
  let style_id = window.__STYLE_ID;
  
  let styleElem = document.getElementById(style_id);
  if(!styleElem || styleElem == undefined){
    styleElem = document.createElement('style');
    styleElem.setAttribute('id', style_id);
    styleElem.type = 'text/css';
    
    if(styleElem.styleSheet){
      styleElem.styleSheet.cssText = "";
    }else{
      styleElem.appendChild(document.createTextNode(""));
    }

    document.head.appendChild(styleElem);
  }
  /* Global Style Tag End */

  let parentElement = document.getElementById("content");
  // console.debug("presto content element found?? ",parentElement);
  let parentView = {
    type: "linearLayout",
    props: {
      "h": parentElement.clientHeight,
      "w": parentElement.clientWidth,
    },
    children: [view]
  };

  computeChildDimens(parentView);
  const elem = inflateView(view, parentElement, null);

  if (cb) callbackInvoker.invoke(cb); 

  if (parentElement.childElementCount > 1) {
    let iterableChildNodes = Array.prototype.slice.call(parentElement.children);
    iterableChildNodes.forEach((each) => {
      helper.clearViewExternals(window.__VIEWS[each.id]);
      each.remove();
    });

    parentElement.appendChild(elem);
  }
}

function moveView(id, index) {
  if (!window.__VIEWS[id]) {
    return console.error(new Error("MoveView: Invalid view ID: " + id));
  }
  var view = window.__VIEWS[id];
  var viewElem = document.getElementById(id); 
  var parentId = viewElem.parentNode.id;
  var parent = window.__VIEWS[parentId];
  var parentElem = document.getElementById(parentId);
  var children = parent.children;
  children.splice(children.indexOf(view), 1);
  children.splice(index, 0, view);
  computeChildDimens(parent)

  children.forEach(child => {
    inflateView(child, parentElem)
  })
}


// Android.addViewToParent(rootId, dom_all, length (window.__ROOTSCREEN.idSet.child) - 1 , callback, null); -- call to this function 
function addViewToParent(id, view, index, cb, replace) {
  // console.log("addViewToParent document location is",document.location); 
  let parentElement = document.getElementById(id)
  let parentView = window.__VIEWS[id]
  let siblingView = null

  if(!parentElement || !parentView)
    return

  parentView.children.splice(index, 0, view)
  
  if(index == 0)
    siblingView = parentView
  else
    siblingView = parentView.children[index-1]

  
  var elem = inflateView(view, null, siblingView) // pass parent element as null, so that the element created doesn't immediately get attached to the DOM

  // attach the elem to live dom once the elem has been constructed (parentElem is the liveDOM)
  if (parentElement) {
    let siblingElement = siblingView ? document.getElementById(siblingView.props.id) : null;

    if (siblingElement && siblingElement != undefined) {
        if (parentElement == siblingElement) { // Prepend
            parentElement.insertBefore(elem, parentElement.childNodes[0]);
          } 
        else { // Insert in specified position
            let nextSiblingElement = siblingElement.nextSibling;
            parentElement.insertBefore(elem, nextSiblingElement);
          }
      } 
    else {
        parentElement.appendChild(elem);
    }
  }
  
  if (cb) callbackInvoker.invoke(cb); 
}

function getChildModalViews(view) {
  let modalViews = []

  if(view.children) {
    for(let i = 0; i < view.children.length; i++){
      let childView = view.children[i]

      if(childView.type == 'modal'){
        modalViews.push(childView)
      }else{
        let items = getChildModalViews(childView)
        if(items && items.length > 0){
          if(modalViews.length > 0){
            modalViews = items
          }else{
            modalViews = modalViews.concat(items)
          }
        }
      }
    }
  }

  return modalViews
}

function removeView(id) {
  let viewElem = document.getElementById(id);
  if(!viewElem){
    helper.clearViewExternals(view)
    return
  }

  let parentId = viewElem.parentNode.id
  if(!parentId){
    helper.clearViewExternals(view)
    viewElem.remove()
    return
  }

  let parentElem = document.getElementById(parentId);
  if(!parentElem){
    helper.clearViewExternals(view)
    viewElem.remove()
    return
  }

  let view = window.__VIEWS[id]
  
  if(!view || !view.type)
    return
  
  let parent = null
  let idx
        
  if(view.type == 'modal'){
    let virtualParentId = viewElem.getAttribute('virtual_parent')
    parent = window.__VIEWS[virtualParentId]

    idx = parent.children.indexOf(view)
    parent.children.splice(idx, 1)

    helper.clearViewExternals(view)
    parentElem.remove()
  }else{
    /* Modal view among children */
    let childModalViews = getChildModalViews(view)
    if(childModalViews && childModalViews.length > 0){
      for(let i = 0; i < childModalViews.length; i++){
        let modalView = childModalViews[i]
        let modalElem = document.getElementById(modalView.props.id)

        if(modalElem){
          let backdropId = modalElem.parentNode.id
          let backdropElem = document.getElementById(backdropId)

          backdropElem.remove()
        }
      }
    }
    /* Modal view among children end */

    parent = window.__VIEWS[parentId]

    idx = parent.children.indexOf(view)
    parent.children.splice(idx, 1)

    helper.clearViewExternals(view)
    viewElem.remove()
  }
}

function replaceModalView(view, id) {
  let elem = document.getElementById(id)
  if(!elem)
    return

  let backdropId = elem.parentNode.id
  let backdropElem = document.getElementById(backdropId)

  let parentId = elem.getAttribute('virtual_parent')
  let parentView = window.__VIEWS[parentId]
  let parentElem = document.getElementById(parentId)

  let oldView = null
  
  for (let i = 0; i < parentView.children.length; i++) {
    if(parentView.children[i].props.id == id){
      oldView = parentView.children[i]
      break;
    }
  }

  if(!oldView)
    return

  /* Get Children */
  let childrenElem = []
  let children = oldView.children

  if(elem && children){
    for(let i = 0; i < children.length; i++){
      let childId = children[i].props.id
      let childElem = document.getElementById(childId)

      if(childElem)
        childrenElem.push(childElem)
    }
  }
  /* Get Children End */

  oldView.props = view.props
  backdropElem.remove()
  inflateView(oldView, parentElem, null, true)
  window.__VIEWS[id] = oldView

  /* Append Children */
  elem = document.getElementById(id)

  if(elem && childrenElem.length > 0){
    for(let i = 0; i < childrenElem.length; i++){
      elem.appendChild(childrenElem[i])
    }
  }
  /* Append Children End */
}

function replaceView(view, id) {
  if(view.type == 'modal'){
    replaceModalView(view, id)
    return
  }

  let elem = document.getElementById(id)
  if(!elem)
    return

  let parentId = elem.parentNode.id
  let parentElem = document.getElementById(parentId)
  let parentView = window.__VIEWS[parentId]

  let oldView = null
  let siblingView = null

  for (let i = 0; i < parentView.children.length; i++) {
    if(parentView.children[i].props.id == id){
      oldView = parentView.children[i]

      if(i != 0)
        siblingView = parentView.children[i-1]
      else
        siblingView = parentView
      break;
    }
  }
  
  if(!oldView)
    return

  /* Get Children */
  let childrenElem = []
  let children = oldView.children

  if(elem && children){
    for(let i = 0; i < children.length; i++){
      let childId = children[i].props.id
      let childElem = document.getElementById(childId)

      if(childElem)
        childrenElem.push(childElem)
    }
  }
  /* Get Children End */

  oldView.props = view.props
  parentElem.removeChild(elem)
  inflateView(oldView, parentElem, siblingView, true)
  window.__VIEWS[id] = oldView

  /* Append Children */
  elem = document.getElementById(id)

  if(elem && childrenElem.length > 0){
    for(let i = 0; i < childrenElem.length; i++){
      elem.appendChild(childrenElem[i])
    }
  }
  /* Append Children End */
}

function recompute() {
  const rootnode = document.getElementById('content');
  const child = rootnode.firstElementChild;
  const rootview = window.__VIEWS[child.id];
  Render(rootview, null);
}

function getNewID() {
  window.JOS_PRESTO_ID = window.JOS_PRESTO_ID || 1;
  return window.JOS_PRESTO_ID++;
}

function getWindow() {
  return window;
}

function getDocument() {
  return window.document;
}

module.exports = {
  getScreenDimensions: getScreenDimensions,

  getUIElement : getUIElement, 

  runInUI: runInUI,

  Render: Render,

  moveView: moveView,

  addViewToParent: addViewToParent,

  getChildModalViews: getChildModalViews,

  removeView: removeView,

  replaceModalView: replaceModalView,

  replaceView: replaceView,

  recompute: recompute,

  getNewID: getNewID,

  getWindow: getWindow,

  getDocument: getDocument
};
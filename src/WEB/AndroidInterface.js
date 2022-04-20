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
  computeChildDimens,
  List,
  postComputeLayoutDimens,
  preComputeLayoutDimens,
  postCompute,
  isChrome50,
  handleMatchParentChrome50
} = require("./Render");
var helper = require('../helper');
var callbackInvoker = require("../helpers/common/callbackInvoker");
const { diffArray } = require("./ListPresto");

var {addToContainerList, getContainer, getParentView} = require('./Utils')

function getScreenDimensions(namespace) {
  let element = getContainer(namespace);
  return JSON.stringify({
    width: element.offsetWidth,
    height: element.offsetHeight
  });
}

// Due to jos, PrestoDOM's document is different from the DOM Document which actaully contains the nodes.
// This utility function allows PrestoDOM to acquire an actual DOM object.
function getUIElement(id, namespace){
  var ele = document.getElementById(id);
  return ele;
}

function findSiblingView(parentView, id) {
  for (let i = 0; i < parentView.children.length; i++) {
    if(parentView.children[i].props.id == id){
      if(i != 0)
        return parentView.children[i-1]
      else
        return   parentView
    }
  }
  return null;
}

function isOrientatationChanged(props){
  if(props['orientation'])
    return false;
  return true;
}

function runInUI(cmd, namespace) {
  if (typeof cmd == "string")
    return
    let id = cmd.id
    if(id){
      let elem = document.getElementById(id)

      if(elem){
        let view = window.__VIEWS[id]
        if(cmd.itemView){
          return;
        }
        if(!cmd.listData && view.listData)
          return;

        if(cmd.listData){
          //diffing arrrays to find the difference between old data and new data
          //console.time('diffArray')
          console.log("diff")
          view.props.diffArray = List.diffArray(view.props.itemDatas,JSON.parse(cmd.listData));
          //console.dir(view.props.diffArray)
          //console.timeEnd('diffArray')

          //no difference in data
          if(view.props.diffArray==[]){
            return;
          }
        }
        view.props = helper.merge(view.props, cmd)

        let parentId = null
        let parentElement = null
        let parentView = null

        let stopChild = !isOrientatationChanged(cmd);
        parentId = elem.parentNode.id

        if(parentId){
          parentView = window.__VIEWS[parentId]
          parentElement = document.getElementById(parentId)

          if(parentElement && parentView){
            let siblingView = findSiblingView(parentView,id);
            computeChildDimens(parentView);
            let computeList = [];
            // if(view.type == "relativeLayout")
            //   computeList.push(view.props.id);
            var chrome50matchList;
            if(isChrome50()) {
              chrome50matchList = {h : [], w: []}
            }
            inflateView({view, parentElement, siblingView, renderStyle: true,stopChild,isListItem:true, computeList, chrome50matchList});
            let parent = view.parent;
            while(parent && parent.type=="relativeLayout"){
              computeList.unshift(parent.props.id)
              parent=parent.parent;
            }
            postCompute(computeList);
            handleMatchParentChrome50(chrome50matchList)
          }
        }
      }
    }
    
  //recompute()
  //Render.runInUI(cmd)
}

function Render(view, cb, namespace) {
  let parentElement = getContainer(namespace);
  // console.debug("presto content element found?? ",parentElement);
  let parentView = getParentView(namespace, view);
  
  if(parentView.oldView) {
    addViewToParent(parentElement.id, view, parentView.children.indexOf(view), cb, false)
  } else {
    computeChildDimens(parentView);
    let computeList = [];
    const elem = inflateView({view, parentElement,computeList});
    postCompute(computeList);
    const elements= document.getElementById('content');
    if (cb) callbackInvoker.invoke(cb);
  }
}

function getUpdatedChildren(parent, view, index) {
  var children = parent.children;
  children.splice(children.indexOf(view), 1);
  children.splice(index, 0, view);
  return children;
}

function moveView(id, index) {
  if (!window.__VIEWS[id]) {
    return console.error(new Error("MoveView: Invalid view ID: " + id));
  }
  var view = window.__VIEWS[id];
  var viewElem = document.getElementById(id);
  var parentId = viewElem.parentNode.id;
  var parent = window.__VIEWS[parentId];
  var children = getUpdatedChildren(parent,view,index);

  computeChildDimens(parent)
  children.forEach(child => {
    let computeList = [];
    console.log("moving")
    var chrome50matchList;
    if(isChrome50()) {
      chrome50matchList = {h : [], w: []}
    }
    inflateView({view:child, parentElement : parent, computeList, chrome50matchList})
    handleMatchParentChrome50(chrome50matchList)
    postCompute(computeList);
  })
}


// Android.addViewToParent(rootId, dom_all, length (window.__ROOTSCREEN.idSet.child) - 1 , callback, null); -- call to this function
function addViewToParent(id, view, index, cb, replace, namespace) {
  // console.log("addViewToParent document location is",document.location);
  let parentElement = document.getElementById(id)
  let parentView = window.__VIEWS[id]
  view.parent = parentView;
  let siblingView = null

  if(!parentElement || !parentView)
    return

  parentView.children.splice(index, 0, view)

  if(index == 0)
    siblingView = parentView
  else
    siblingView = parentView.children[index-1]

  preComputeLayoutDimens(parentView)
  let computeList = []
  var chrome50matchList;
  if(isChrome50()) {
    chrome50matchList = {h : [], w: []}
  }
  computeChildDimens(parentView);
  var elem = inflateView({view,  siblingView, namespace, computeList, chrome50matchList}) // pass parent element as null, so that the element created doesn't immediately get attached to the DOM
  var pv = parentView
  var pe = parentElement
  while(pv && pv.type == "relativeLayout") {
    // postComputeLayoutDimens(pv, pe);
    computeList.unshift(pv.props.id);
    pv = pv.parent
    pe = pe.parentElement
  }
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
  if (!window.hasAnimationProps && window.focusedElement !== undefined){
    var c = document.getElementById(window.focusedElement);
    window.focusedElement = undefined;
    if (c) {
        c.focus();
    }
  }
  postCompute(computeList);
  handleMatchParentChrome50(chrome50matchList)
  if (cb) callbackInvoker.invoke(cb);
}

function removeView(id, namespace) {
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

  parent = window.__VIEWS[parentId]
  if (parent) {
    idx = parent.children.indexOf(view)
    parent.children.splice(idx, 1)
    helper.clearViewExternals(view)
  }
  viewElem.remove()
}

function replaceView(view, id, namespace) {
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
  let computeList = []
  var chrome50matchList;
  if(isChrome50()) {
    chrome50matchList = {h : [], w: []}
  }
  inflateView({view:oldView, parentElement: parentElem, siblingView, stopChild : true, computeList, chrome50matchList});
  window.__VIEWS[id] = oldView
  
  /* Append Children */
  elem = document.getElementById(id)
  
  if(elem && childrenElem.length > 0){
    for(let i = 0; i < childrenElem.length; i++){
      elem.appendChild(childrenElem[i])
    }
  }
  postCompute(computeList);
  handleMatchParentChrome50(chrome50matchList)
  /* Append Children End */
}

// function recompute() {
//   const rootnode = document.getElementById('content');
//   const child = rootnode.firstElementChild;
//   const rootview = window.__VIEWS[child.id];
//   Render(rootview, null);
// }

function getNewID() {
  window.JOS_PRESTO_ID = window.JOS_PRESTO_ID || 1;
  return window.JOS_PRESTO_ID++;
}

function getWindow() {
  return window;
}

function getDocument() {
  return document;
}

module.exports = {
  addToContainerList : addToContainerList,
  
  getScreenDimensions: getScreenDimensions,

  getUIElement : getUIElement,

  runInUI: runInUI,

  Render: Render,

  addViewToParent: addViewToParent,
  
  moveView: moveView,

  removeView: removeView,

  replaceView: replaceView,

  getNewID: getNewID,

  getWindow: getWindow,

  getDocument: getDocument
};
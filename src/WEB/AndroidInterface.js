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

var Render = require("./Render");
var helper = require('../helper');
const R = require('ramda');

module.exports = {
  getScreenDimensions: function () {
    let element = document.getElementById("content");
    return JSON.stringify({
      width: element.offsetWidth,
      height: element.offsetHeight
    });
  },

  runInUI: function (cmd) {
    if (typeof cmd == "string")
      return

    let id = cmd.id
    if(id){
      let elem = document.getElementById(id)

      if(elem){
        let view = window.__VIEWS[id]
        view.props = R.merge(view.props, cmd)
        
        let parentId = null
        let parentElem = null
        let parentView = null

        if(view.type == 'modal'){
          parentId = elem.getAttribute('virtual_parent')

          if(parentId){
            parentView = window.__VIEWS[parentId]
            parentElem = document.getElementById(parentId)
            
            if(parentElem && parentView){
              Render.inflateView(view, parentElem, null, true)
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

              Render.computeChildDimens(parentView)
              Render.inflateView(view, parentElem, siblingView, false, false, true)
            }
          }
        }
      }
    }

    //this.recompute()
    //Render.runInUI(cmd)
  },

  Render: function (view, cb) {
    /* Global Style Tag */
    let style_id = window.__STYLE_ID;
    
    let styleElem = document.getElementById(style_id);
    if(!styleElem || styleElem == undefined){
      let css = '';
      css += '.' + window.__OPENMODAL_CLASS + '{overflow: hidden !important;}';
      css += '.' + window.__BACKDROPMODAL_CLASS + '{position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 9999; overflow-x: hidden; overflow-y: auto; visibility: hidden; display: block;}';
      css += '.' + window.__BACKDROPMODAL_CLASS + '.' + window.__SHOWNMODAL_CLASS + '{visibility: visible;}';
      css += '.' + window.__CONTENTMODAL_CLASS + '{position: relative !important; pointer-events: none !important; width: 100% !important; min-height: 100% !important; display: flex !important;}';
      css += '.' + window.__FADEMODAL_CLASS + '{opacity: 0; transition: opacity .15s linear;}';
      css += '.' + window.__FADEMODAL_CLASS + '.' + window.__SHOWNMODAL_CLASS + '{opacity: 1;}';
      css += '.' + window.__FADEMODAL_CLASS + ' .' + window.__CONTENTMODAL_CLASS + '{transition: .3s ease-out;}';
      
      css += '.' + window.__SLIDEMODAL_CLASS + '{opacity: 0; transition: opacity .15s linear;}';
      css += '.' + window.__SLIDEMODAL_CLASS + '.' + window.__SHOWNMODAL_CLASS + '{opacity: 1;}';
      css += '.' + window.__SLIDEMODAL_CLASS + ' .' + window.__CONTENTMODAL_CLASS + '{transform: translate(0, -25%); transition: .3s ease-out;}';
      css += '.' + window.__SLIDEMODAL_CLASS + '.' + window.__SHOWNMODAL_CLASS + ' .' + window.__CONTENTMODAL_CLASS + '{transform: translate(0, 0);}';

      css += '.hasTooltip{position: relative; pointer-events: auto; cursor: pointer;}';
      css += '.hasTooltip .tooltipText{width: max-content; max-width: 300px; visibility: hidden; opacity: 0; text-decoration: none; position: absolute; background-color: #555; color: #fff; padding: 5px 10px; box-sizing: border-box; border-radius: 5px; transition: opacity 0.3s}';
      css += '.hasTooltip:hover .tooltipText{visibility: visible; opacity: 1;}';

      css += '.hasTooltip .tooltipText.tooltipGravity_top{bottom: 100%; margin-bottom: 10px; left: 50%; transform: translateX(-50%);}';
      css += '.hasTooltip .tooltipGravity_top:after{content: ""; position: absolute; top: 100%; left: 50%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: #555 transparent transparent transparent;}';
      
      css += '.hasTooltip .tooltipText.tooltipGravity_left{right: 100%; margin-right: 10px; top: 50%; transform: translateY(-50%);}';
      css += '.hasTooltip .tooltipGravity_left:after{content: ""; position: absolute; left: 100%; top: 50%; margin-top: -5px; border-width: 5px; border-style: solid; border-color: transparent transparent transparent #555;}';

      css += '.hasTooltip .tooltipText.tooltipGravity_right{left: 100%; margin-left: 10px; top: 50%; transform: translateY(-50%);}';
      css += '.hasTooltip .tooltipGravity_right:after{content: ""; position: absolute; right: 100%; top: 50%; margin-top: -5px; border-width: 5px; border-style: solid; border-color: transparent #555 transparent transparent;}';

      css += '.hasTooltip .tooltipText.tooltipGravity_bottom{top: 100%; margin-top: 10px; left: 50%; transform: translateX(-50%);}';
      css += '.hasTooltip .tooltipGravity_bottom:after{content: ""; position: absolute; bottom: 100%; left: 50%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: transparent transparent #555 transparent;}';

      // NavBar
      css += '.' + window.__COM_CLASS_GROUP.NAVBAR + ' ul{ list-style: none !important;}'
      css += '.' + window.__COM_CLASS_GROUP.NAVBAR + ' ul li { color: ' + window.__COM_COLOR_GROUP.INACTIVE_COLOR + '; position:relative !important; display: inline-block !important; pointer-events: auto !important; cursor: pointer !important; padding-left: 10px !important; padding-right: 10px !important;}'
      css += '.' + window.__COM_CLASS_GROUP.NAVBAR + ' ul li:hover, .' + window.__COM_CLASS_GROUP.NAVBAR + ' ul li.selected {color: ' + window.__COM_COLOR_GROUP.ACTIVE_COLOR + ';}'
      css += '.' + window.__COM_CLASS_GROUP.NAVBAR + ' ul li article { pointer-events: none !important; }'
      css += '.' + window.__COM_CLASS_GROUP.NAVBAR + ' ul li ul { background: white !important; display: none !important; position: absolute !important; pointer-events: none !important; width: max-content !important;}'
      css += '.' + window.__COM_CLASS_GROUP.NAVBAR + ' ul li.selected ul {display: block !important;}'
      css += '.' + window.__COM_CLASS_GROUP.NAVBAR + ' ul li ul li { display: block !important; pointer-events: auto !important; padding-left: 10px !important; padding-right: 10px !important; padding-top: 10px !important; padding-bottom: 10px !important;}'
      css += '.' + window.__COM_CLASS_GROUP.NAVBAR + ' ul li ul li:hover, ' + '.' + window.__COM_CLASS_GROUP.NAVBAR + ' ul li ul li.selected {background: ' + window.__COM_COLOR_GROUP.ACTIVE_BG + '}'

      // DropDown Search Box
      css += '.' + window.__COM_CLASS_GROUP.DSB_OPTION + ':hover, .' + window.__COM_CLASS_GROUP.DSB_OPTION + '.selected {background: ' + window.__COM_COLOR_GROUP.ACTIVE_BG + '}'
      css += '.' + window.__COM_CLASS_GROUP.DSB_OPTION + '{background: ' + window.__COM_COLOR_GROUP.BG + '}'
      css += '.' + window.__COM_CLASS_GROUP.DSB + '.selected {border: 1px solid ' + window.__COM_COLOR_GROUP.ACTIVE_BORDER_COLOR + ' !important; color: ' + window.__COM_COLOR_GROUP.ACTIVE_COLOR + ' !important;}'

      styleElem = document.createElement('style');
      styleElem.setAttribute('id', style_id);
      styleElem.type = 'text/css';
      
      if(styleElem.styleSheet){
        styleElem.styleSheet.cssText = css;
      }else{
        styleElem.appendChild(document.createTextNode(css));
      }

      document.head.appendChild(styleElem);
    }
    /* Global Style Tag End */
    
    let parentElement = document.getElementById("content");
    let parentView = {
      type: "linearLayout",
      props: {
        "h": parentElement.clientHeight,
        "w": parentElement.clientWidth,
      },
      children: [view]
    };

    Render.computeChildDimens(parentView);
    const elem = Render.inflateView(view, parentElement, null);

    if (cb)
      window.callUICallback(cb);

    if (parentElement.childElementCount > 1) {
      let iterableChildNodes = Array.prototype.slice.call(parentElement.children);
      iterableChildNodes.forEach((each) => {
        helper.clearViewExternals(window.__VIEWS[each.id]);
        each.remove();
      });

      parentElement.appendChild(elem);
    }
  },

  moveView: function moveView(id, index) {
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
    Render.computeChildDimens(parent)

    children.forEach(child => {
      Render.inflateView(child, parentElem)
    })
  },

  addViewToParent: function (id, view, index, cb, replace) {
    let parentElem = document.getElementById(id)
    let parentView = window.__VIEWS[id]
    let siblingView = null

    if(!parentElem || !parentView)
      return

    parentView.children.splice(index, 0, view)
    
    if(index == 0)
      siblingView = parentView
    else
      siblingView = parentView.children[index-1]
    
    Render.inflateView(view, parentElem, siblingView)
    
    if (cb)
      window.callUICallback(cb)
  },

  getChildModalViews: function (view) {
    let modalViews = []

    if(view.children) {
      for(let i = 0; i < view.children.length; i++){
        let childView = view.children[i]

        if(childView.type == 'modal'){
          modalViews.push(childView)
        }else{
          let items = this.getChildModalViews(childView)
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
  },

  removeView: function (id) {
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
      let childModalViews = this.getChildModalViews(view)
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
  },

  replaceModalView: function (view, id) {
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
    Render.inflateView(oldView, parentElem, null, true)
    window.__VIEWS[id] = oldView

    /* Append Children */
    elem = document.getElementById(id)

    if(elem && childrenElem.length > 0){
      for(let i = 0; i < childrenElem.length; i++){
        elem.appendChild(childrenElem[i])
      }
    }
    /* Append Children End */
  },

  replaceView: function (view, id) {
    if(view.type == 'modal'){
      this.replaceModalView(view, id)
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
    Render.inflateView(oldView, parentElem, siblingView, true)
    window.__VIEWS[id] = oldView

    /* Append Children */
    elem = document.getElementById(id)

    if(elem && childrenElem.length > 0){
      for(let i = 0; i < childrenElem.length; i++){
        elem.appendChild(childrenElem[i])
      }
    }
    /* Append Children End */
  },

  recompute: function () {
    const rootnode = document.getElementById('content');
    const child = rootnode.firstElementChild;
    const rootview = window.__VIEWS[child.id];
    this.Render(rootview, null);
  }
};
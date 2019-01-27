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

const R = require('ramda');

/*
  ViewContext of the Parent.
  Obj holds the available width and height of it's parent container
  and x & y offset for it's children
*/
function viewCtxObj(view) {
  let props = view.props;
  let obj = {
    w: props.w * 1,
    h: props.h * 1,
    //x: 0,
    //y: 0,
    width: props.w * 1,
  };

  view.children.forEach(child => {
    child.props.w = child.props.width;
    child.props.h = child.props.height;
    //child.props.x = 0;
    //child.props.y = 0;
  });

  return obj;
}

function isHidden(prop) {
  return prop.visibility === "gone";
}

/*
  Returns true if container has a child with match_parent for a
  given dimension (width or height)
*/
function hasMatchParentChild(childs, dimen) {
  for (let i = 0; i < childs.length; i++) {
    let childProp = childs[i].props;
    if (isHidden(childProp))
      continue;
    if (childProp[dimen] && (childProp[dimen] == "match_parent")) {
      return true;
    }
  }
  return false;
}

/*
  Returns true if container has weighted child
*/
function hasWeightChild(type, childs) {
  if (type != "linearLayout") {
    return false;
  }

  for (let i = 0; i < childs.length; i++) {
    let child = childs[i].props;
    if (isHidden(child))
      continue;
    if (child.weight && parseInt(child.weight) > 0) {
      return true;
    }
  }
  return false;
}

function computeBasic(view, ignoreGravity){
  let viewCtx = viewCtxObj(view);
  let children = view.children;

  children.forEach(child => {
    let props = child.props;
    
    if (isHidden(props)) {
      props.h = "0";
      props.w = "0";
      return;
    }
  });
}

function computeLinearlayout(view) {
  let viewCtx = viewCtxObj(view);
  let parentProps = view.props;
  let children = view.children;
  let isHorizontal = (parentProps.orientation === "vertical") ? false : true;

  let activeDimen = (isHorizontal) ? "w" : "h";
  let passiveDimen = (isHorizontal) ? "h" : "w";

  let hasWeight = hasWeightChild(view.type, children);
  let hasMatchParent = hasMatchParentChild(children, activeDimen);
  
  if (hasWeight && hasMatchParent) {
    // We can't use both at the same time
    return;
  }

  /* Initialize */
  children.forEach(child => {
    let props = child.props;

    if (props.hasOwnProperty("activeDimen"))
      delete props["activeDimen"];
    if (props.hasOwnProperty("activeWeight"))
      delete props["activeWeight"];
  });
  /* Initialize End */
  
  if(hasMatchParent || hasWeight){
    let first = true;
    /* Iterate Child */
    children.forEach(child => {
      let props = child.props;

      if (isHidden(props))
        return;

      if(props.hasOwnProperty(activeDimen) && props[activeDimen] == 'match_parent'){
        props['activeDimen'] = activeDimen;
        
        if(first){
          props['activeWeight'] = 1;
          first = false;
        }else{
          props['activeWeight'] = 0;
        }
      }else{
        if(props.hasOwnProperty('weight') && !isNaN(props['weight'])){
          let weight = parseFloat(props['weight']);

          if(weight > 0){
            props['activeDimen'] = activeDimen;
            props['activeWeight'] = weight;
          }
        }
      }
    });
    /* Iterate Child End */
  }

  children.forEach(child => {
    let props = child.props;
    
    if (isHidden(props)) {
      props.w = "0";
      props.h = "0";
      return;
    }    
  });
} // End Compute LinearLayout

function computeChildDimens(view) {
  if (view.type == "linearLayout") {
    computeLinearlayout(view);
  } else if (view.type == "scrollView" || view.type == "listView") {
    view.props.orientation = "vertical";
    computeLinearlayout(view);
  } else if (view.type == "horizontalScrollView") {
    view.props.orientation = "horizontal";
    computeLinearlayout(view);
  } else {
    computeBasic(view, false);
  }

  return view;
}

module.exports = {
  computeLinearlayout,
  computeRelativeLayout: (view) => computeBasic(view, false),
  computeScrollView: (view) => computeBasic(view, true),
  computeChildDimens
};
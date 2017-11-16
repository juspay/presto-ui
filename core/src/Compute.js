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
    x: 0,
    y: 0
  };

  view.children.forEach(child => {
    child.props.w = child.props.width;
    child.props.h = child.props.height;
    child.props.x = 0;
    child.props.y = 0;
  });

  if (props.stroke) {
    let stroke = props.stroke.split(",")[0];
    obj.w -= stroke * 2;
    obj.h -= stroke * 2;

    if (window.__OS == "IOS") {
      obj.x += stroke * 1;
      obj.y += stroke * 1;
    }
  }

  if (!props.padding)
    return obj;

  let padding = props.padding.split(',').map(a => a * 1);
  obj.w -= padding[0] + padding[2];
  obj.h -= padding[1] + padding[3];
  obj.x += padding[0];
  obj.y += padding[1];
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

/*
  This manipulates only the viewCtx of the view
  by changing the x & y offset of the view.
  Supported Gravity Props = {center, center_vertical, center_horizontal}
*/
function computeGravity(view, viewCtx, isRelative) {
  let parentProps = view.props;
  let isHorizontal = (parentProps.orientation === "vertical") ? false : true;
  let centerVertical = true;
  let centerHorizontal = true;
  let hasWeight = hasWeightChild(view.type, view.children);
  let horizontalMp = hasMatchParentChild(view.children, "w");
  let verticalMp = hasMatchParentChild(view.children, "h");

  let helper = (dimen, shouldAdd) => {
    if (isRelative)
      shouldAdd = false;
    let m = (dimen === "w") ? [0, 2] : [1, 3];
    let axis = (dimen === "w") ? 'x' : 'y';
    let maxValue = 0;
    view.children.forEach(child => {
      let props = child.props;

      if (isHidden(props))
        return;

      let value = props[dimen] * 1;

      if (props.alignParentBottom && dimen == "h" && isRelative) {
        maxValue = viewCtx[dimen];
        return;
      }

      if (props.margin && (shouldAdd || isRelative)) {
        let margins = props.margin.split(',').map(a => a * 1);
        value += margins[m[0]] + margins[m[1]];
      }

      if (shouldAdd)
        maxValue += value;
      else
        maxValue = (maxValue < value) ? value : maxValue;
    });
    if (maxValue <= viewCtx[dimen])
      viewCtx[axis] += Math.floor((viewCtx[dimen] - maxValue) / 2);
    else
      console.error(new Error(
        `Childs ${dimen} + margins are greater than the parents ${dimen}, id: ${view.props.id}`
      ));
  };

  if (parentProps.gravity === "center_horizontal")
    centerVertical = false;
  else if (parentProps.gravity === "center_vertical")
    centerHorizontal = false;

  if (centerHorizontal && !horizontalMp && (isRelative || (isHorizontal && !hasWeight)))
    helper("w", isHorizontal);

  if (centerVertical && !verticalMp && (isRelative || (!isHorizontal && !hasWeight)))
    helper("h", !isHorizontal);
}

function computeBasic(view, ignoreGravity) {
  let viewCtx = viewCtxObj(view);
  let children = view.children;

  if (!ignoreGravity && view.props.gravity)
    computeGravity(view, viewCtx, true);

  children.forEach(child => {
    let props = child.props;
    let margins = [0, 0, 0, 0];

    if (isHidden(props)) {
      props.h = "0";
      props.w = "0";
      return;
    }

    if (props.margin)
      margins = props.margin.split(',').map(a => a * 1);

    let width = viewCtx.w - margins[0] - margins[2];
    let height = viewCtx.h - margins[1] - margins[3];

    if (props.w === "match_parent")
      props.w = width + '';

    if (props.h === "match_parent")
      props.h = height + '';

    props.x += viewCtx.x + margins[0];
    props.y += viewCtx.y + margins[1];

    if (props.alignParentBottom) {
      props.y += viewCtx.h - props.h - margins[1] - margins[3];
    } else if (props.centerInParent) {
      let extraWidth = viewCtx.w - props.w - margins[0] - margins[2];
      let extraHeight = viewCtx.h - props.h - margins[1] - margins[3];
      props.x += Math.floor(extraWidth / 2);
      props.y += Math.floor(extraHeight / 2);
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

  let activeMargin = (isHorizontal) ? [0, 2] : [1, 3];
  let passiveMargin = (isHorizontal) ? [1, 3] : [0, 2];

  let activeAxis = (isHorizontal) ? 'x' : 'y';
  let passiveAxis = (isHorizontal) ? 'y' : 'x';

  let hasWeight = hasWeightChild(view.type, children);
  let hasMatchParent = hasMatchParentChild(children, activeDimen);
  let weightSum = 0;
  let hasPassiveGravity = false;
  let hasActiveGravity = false;

  if (parentProps.gravity) {
    let g = parentProps.gravity;
    if (g == "center") {
      hasPassiveGravity = true;
      hasActiveGravity = true;
    }

    if ((g == "center_vertical" && isHorizontal) || (g == "center_horizontal" && !isHorizontal))
      hasPassiveGravity = true;

    if ((g == "center_horizontal" && isHorizontal) || (g == "center_vertical" && !isHorizontal))
      hasActiveGravity = true;
  }

  if (hasWeight && hasMatchParent) {
    throw new Error("Render: Layout cannot have children with ",
      activeDimen + ":match_parent and weight prop, id:" + parentProps.id);
  }

  if (hasMatchParent || hasWeight) {
    children.forEach(child => {
      let props = child.props;

      if (isHidden(props))
        return;

      let weight = props["weight"] * 1;

      if (weight > 0)
        weightSum += weight;

      if (props.margin) {
        let margins = props.margin.split(',').map(a => a * 1);
        viewCtx[activeDimen] -= margins[activeMargin[0]] + margins[
          activeMargin[1]];
      }

      viewCtx[activeDimen] -= props[activeDimen] * 1 || 0;
    });
  }

  if (hasActiveGravity)
    computeGravity(view, viewCtx);

  children.forEach(child => {
    let props = child.props;
    let axis = viewCtx[activeAxis];
    let margins = [0, 0, 0, 0];
    let weight = props["weight"] * 1;

    if (isHidden(props)) {
      props.w = "0";
      props.h = "0";
      return;
    }

    if (props.margin)
      margins = props.margin.split(',').map(a => a * 1);

    // Active Dimension
    if (props[activeDimen] === "match_parent") {
      props[activeDimen] = viewCtx[activeDimen];
      props[activeDimen] -= margins[activeMargin[0]] + margins[activeMargin[
        1]];
      props[activeDimen] += '';
      viewCtx[activeDimen] = 0;
    }

    if (weight > 0) {
      let dimen = props[activeDimen] * 1 || 0;
      props[activeDimen] = dimen + Math.floor((viewCtx[activeDimen] *
        weight) / weightSum);
      props[activeDimen] += '';
    }

    props[activeAxis] += axis + margins[activeMargin[0]];
    props[activeAxis] += '';
    viewCtx[activeAxis] += props[activeDimen] * 1 + margins[
      activeMargin[0]] + margins[activeMargin[1]];


    // Passive Dimensions
    axis = viewCtx[passiveAxis];
    let passiveMarginVal = margins[passiveMargin[0]];

    if (props[passiveDimen] === "match_parent") {
      props[passiveDimen] = viewCtx[passiveDimen];
      props[passiveDimen] -= margins[passiveMargin[0]] + margins[
        passiveMargin[1]];
      props[passiveDimen] += '';
    }

    if (hasPassiveGravity) {
      let availablePassive = viewCtx[passiveDimen] - props[passiveDimen];
      if (availablePassive < 0)
        console.error(new Error("Child " + passiveDimen +
          " larger than the parent, id:" + parentProps.id));
      else
        axis += availablePassive / 2;
      passiveMarginVal = margins[passiveMargin[0]] -  margins[passiveMargin[1]];
    }
    props[passiveAxis] += axis + passiveMarginVal;
    props[passiveAxis] += '';
  });
}

function computeChildDimens(view) {
  if (view.type == "linearLayout")
    computeLinearlayout(view);
  else if (view.type === "relativeLayout")
    computeBasic(view, false);
  else if (view.type.toLocaleLowerCase().indexOf("scroll") != -1) {
    computeBasic(view, true);
  } else if (view.type == "listView") {
    view.orientation = "vertical";
    computeLinearlayout(view);
  }

  return view;
}

module.exports = {
  computeLinearlayout,
  computeRelativeLayout: (view) => computeBasic(view, false),
  computeScrollView: (view) => computeBasic(view, true),
  computeChildDimens
};
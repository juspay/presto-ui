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

const parseParams = require('../helpers/ios/parseParams');
const {computeChildDimens} = require('../compute');
const helper = require('../helper');

function scrollHelper(view) {
  let isScroll = (view.type.toLocaleLowerCase().indexOf("scroll") != -1) ? view.type : false;

  if (!isScroll)
    return false;

  if (view.children.length > 1) {
    console.error(new Error(
      "(Horizontal)ScrollView must have only one child"
    ));
  }

  if (view.children.length == 1) {
    view.children[0].props.parentIsScroll = isScroll;
    return true;
  }

  return false;
}

function sumChildDimens(view) {
  let isVertical = view.props.orientation == "vertical";
  let dimenKey = (!isVertical) ? "w" : "h";
  let axisKey = (!isVertical) ? "x" : "y";
  let index = (!isVertical) ? 3: 2;
  const prop = {
    id: view.props.id,
    w: view.props.w,
    h: view.props.h,
    x: view.props.x,
    y: view.props.y
  };
  let lastChild;
  for (let i=view.children.length -1; i >= 0 ; i--) {
    lastChild = view.children[i];
    if (lastChild.props.visibility!="gone")
      break;
    lastChild = null;
  }

  if (view.children.length == 0) {
    prop[dimenKey] = '0';
    return prop;
  }
  let margin = lastChild.props.margin ? lastChild.props.margin.split(',').map(a => a*1):[0,0,0,0];
  let padding = view.props.padding ? view.props.padding.split(',').map(a => a*1):[0,0,0,0];
  let dimen = lastChild.props[axisKey] * 1 + lastChild.props[dimenKey] * 1 + margin[index] + padding[index];
  prop[dimenKey] = dimen + '';
  return prop;
}

function setContentDimension(view, children) {
  if (children.length == 0)
    return;
  let container = children[0];
  let isVertical = container.props.orientation == "vertical";
  let margin = container.props.margin ? container.props.margin.split(',').map(a => a*1):[0,0,0,0];
  let padding = view.props.padding ? view.props.padding.split(',').map(a => a*1):[0,0,0,0];
  let height = container.props.h * 1;
  let width = container.props.w * 1;
  if (!isVertical) {
    width += padding[0] + padding[2] + margin[0] + margin[2];
  } else {
    height += padding[1] + padding[3] + margin[1] + margin[3];
  }
  return {
    id: view.props.id,
    contentWidth: width + '',
    contentHeight: height + ''
  }
}

function getContentDimensionsCmd(view) {
  const child = sumChildDimens(view.children[0]);
  const parent = setContentDimension(view, view.children);
  let cmd = [];
  cmd.push([view.type, parent]);
  cmd.push([view.children[0].type, child]);
  return cmd;
}

function inflate(view) {
  let id = view.props.id;
  let alreadyRendered = false;
  let isScroll = scrollHelper(view);
  let parentIsScroll = typeof view.props.parentIsScroll !== "undefined"
  if (!id)
    return console.error(new Error("A view should have a valid ID"));

  if (window.__VIEWS.hasOwnProperty(id))
    alreadyRendered = true;

  if (!alreadyRendered) {
    computeChildDimens(view);
    if (parentIsScroll)
      sumChildDimens(view);
    helper.cacheDimen(view);
    window.__VIEWS[id] = view;
    let newView = helper.copy(view);
    view.children.forEach((child, i) => {
      newView.children[i] = inflate(child);
    });
    if (isScroll) {
      setContentDimension(newView, view.children);
    }
    let obj = parseParams(newView.type, newView.props, "set");
    newView.props = obj.config;
    newView.type = obj.type[0].toUpperCase() + obj.type.substr(1, obj.type.length);
    return newView;
  }

  let move = helper.shouldMove(view);
  let inflateChilds = helper.shouldInfateChilds(view);
  helper.cacheDimen(view);

  if (move) {
    runInUIHelper(view.type, move);
  }

  if (isScroll) {
    return getContentDimensionsCmd(view).forEach(tuple => runInUIHelper(tuple[0], tuple[1]));
  }

  if (inflateChilds) {
    computeChildDimens(view)
    view.children.forEach(inflate);
  }

  return null;
}

let runInUI = function (cmd) {
  if (!(cmd instanceof Array))
    cmd = [cmd];

  cmd.forEach(function (each) {
    let id = each.id;

    if (!window.__VIEWS.hasOwnProperty(id))
      return console.error(new Error("Invalid ID: " + id));

    let view = window.__VIEWS[id];
    let parentView = window.__VIEWS[view.props.parentId];
    view.props = helper.merge(view.props, each);
    computeChildDimens(parentView);
    runInUIHelper(view.type, each);
    parentView.children.forEach(child => inflate(child));

    if (parentView.props.parentIsScroll) {
      let scrollView = window.__VIEWS[parentView.props.parentId];
      getContentDimensionsCmd(scrollView).forEach(tuple => runInUIHelper(tuple[0], tuple[1]));
    }
  });
};

let runInUIHelper = function (type, obj) {
  let cmd = parseParams(type, obj, "get").config.methods;
  window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
    methodName: "runInUI",
    parameters: cmd
  }));
}

module.exports = {
  inflate,
  computeChildDimens,
  runInUI
};
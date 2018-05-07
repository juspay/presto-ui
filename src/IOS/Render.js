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
const R = require('ramda');

function sumChildDimens(view) {
  const isVertical = view.props.orientation == "vertical";
  const dimenKey = (!isVertical) ? "w" : "h";
  const axisKey = (!isVertical) ? "x" : "y";
  const contentKey = (!isVertical) ? "contentWidth" : "contentHeight";
  const index = (!isVertical) ? 3: 2;
  let lastChild;

  view.props.contentWidth = view.props.w;
  view.props.contentHeight = view.props.h;

  for (let i = view.children.length - 1; i >= 0 ; i--) {
    lastChild = view.children[i];
    if (lastChild.props.visibility != "gone")
      break;
    lastChild = null;
  }

  if (!lastChild) {
    return;
  }

  const margin = lastChild.props.margin ? lastChild.props.margin.split(',').map(a => a*1):[0,0,0,0];
  const padding = view.props.padding ? view.props.padding.split(',').map(a => a*1):[0,0,0,0];
  const dimen = lastChild.props[axisKey] * 1 + lastChild.props[dimenKey] * 1 + margin[index] + padding[index];
  view.props[contentKey] = dimen + '';
}

function inflate(view) {
  const id = view.props.id;
  const isScroll = view.type.toLocaleLowerCase().indexOf("scroll") != -1;

  if (!window.__VIEWS.hasOwnProperty(id)) {
    computeChildDimens(view);
    if (isScroll) {
      sumChildDimens(view);
    }
    helper.cacheDimen(view);
    window.__VIEWS[id] = view;
    const newView = R.clone(view);
    view.children.forEach((child, i) => {
      newView.children[i] = inflate(child);
    });
    const obj = parseParams(newView.type, newView.props, "set");
    newView.props = obj.config;
    newView.type = obj.type[0].toUpperCase() + obj.type.substr(1, obj.type.length);
    return newView;
  }

  const move = helper.shouldMove(view);
  const inflateChilds = helper.shouldInfateChilds(view);
  helper.cacheDimen(view);

  if (move) {
    move.id = id;
    runInUIHelper(view.type, move);
  }

  computeChildDimens(view)
  view.children.forEach(inflate);

  if (isScroll) {
    sumChildDimens(view);
    const cmd = {
      id,
      contentWidth: view.props.contentWidth,
      contentHeight: view.props.contentHeight,
    };
    runInUI(cmd);
  }
}

function runInUI(cmd) {
  if (!(cmd instanceof Array))
    cmd = [cmd];

  cmd.forEach(function (each) {
    const id = each.id;
    const view = window.__VIEWS[id];
    view.props = R.merge(view.props, each);
    runInUIHelper(view.type, view.props);
  });
};

function runInUIHelper(type, obj) {
  const cmd = parseParams(type, obj, "get").config.methods;
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

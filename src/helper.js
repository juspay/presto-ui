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

// Following functions are used by WEB and IOS Render

const R = require('ramda');

function cacheDimen(view) {
  let props = view.props;
  let dimen = {
    w: props.w,
    h: props.h,
    x: props.x,
    y: props.y,
    gravity: props.gravity,
    padding: props.padding,
    orientation: props.orientation,
    stroke: props.stroke ? props.stroke.split(",")[0] * 1 : 0,
  }
  window.__VIEW_DIMENSIONS[props.id] = dimen;
}

function shouldMove(view) {
  let props = view.props;
  let dimen = {
    w: props.w,
    h: props.h,
    x: props.x,
    y: props.y
  };
  let cachedDimen = window.__VIEW_DIMENSIONS[props.id];
  let changed = false;
  if (!cachedDimen)
    return dimen;
  for (let key in dimen) {
    if (cachedDimen[key] != dimen[key]) {
      dimen.id = props.id;
      changed = true;
    }
  }
  if (changed)
    return dimen;
  return null;
}

function shouldInfateChilds(view) {
  return true;
  let props = view.props;

  let dimen = {
    w: props.w,
    h: props.h,
    gravity: props.gravity,
    padding: props.padding,
    orientation: props.orientation,
    stroke: props.stroke ? props.stroke.split(",")[0] * 1 : 0,
    bacche: view.children.length
  };

  let changed = false;
  let cachedDimen = window.__VIEW_DIMENSIONS[props.id];
  if (!cachedDimen)
    return true;
  if (props.visibility == "gone")
    return null;
  for (let key in dimen) {
    if (cachedDimen[key] != dimen[key]) {
      changed = true;
      break;
    }
  }
  return changed;
}

function getOS() {
  var userAgent = navigator.userAgent;
  if (!userAgent)
    return console.error(new Error("UserAgent is null"));
  if (userAgent.indexOf("Android") != -1 && userAgent.indexOf("Version") != -1)
    return "ANDROID";
  if (userAgent.indexOf("iPhone") != -1 && userAgent.indexOf("Version") == -1)
    return "IOS";
  return "WEB";
}

function merge(a, b) {
  if (typeof a != "object")
    return b;

  if (typeof b != "object")
    return a;

  for (let key in b) {
    a[key] = b[key];
  }

  return a;
}

function clearViewExternals(view) {
  if (!view)
    return;
  delete window.__VIEWS[view.props.id];
  delete window.__VIEW_DIMENSIONS[view.props.id];
  view.children.forEach(clearViewExternals);
}


module.exports = {
  shouldInfateChilds,
  shouldMove,
  cacheDimen,
  getOS,
  merge,
  clearViewExternals,
}
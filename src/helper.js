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

function getOS() {
  var userAgent = navigator.userAgent;
  if (!userAgent)
    return console.error(new Error("UserAgent is null"));
  if (userAgent.indexOf("Android") != -1 && userAgent.indexOf("Version") != -1)
    return "ANDROID";
  if ((userAgent.indexOf("iPhone") != -1 || userAgent.indexOf("iPad") != -1 || userAgent.indexOf("Macintosh") != -1) && userAgent.indexOf("Version") == -1)
    return "IOS";
  return "WEB";
}

function clearViewExternals(view) {
  if (!view)
    return;

  delete window.__VIEWS[view.props.id];
  delete window.__VIEW_DIMENSIONS[view.props.id];
  
  if(__OBSERVERS[view.props.id])
    delete window.__OBSERVERS[view.props.id];

  view.children.forEach(clearViewExternals);
}

// use: clone( <thing to copy> ) returns <new copy>
function clone(o, m){
  // return non object values
  if('object' !==typeof o) return o
  // m: a map of old refs to new object refs to stop recursion
  if('object' !==typeof m || null ===m) m =new WeakMap()
  var n =m.get(o)
  if('undefined' !==typeof n) return n
  // shallow/leaf clone object
  var c =Object.getPrototypeOf(o).constructor
  // TODO: specialize copies for expected built in types i.e. Date etc
  switch(c) {
    // shouldn't be copied, keep reference
    case Boolean:
    case Error:
    case Function:
    case Number:
    case Promise:
    case String:
    case Symbol:
    case WeakMap:
    case WeakSet:
      n =o
      break;
    // array like/collection objects
    case Array:
      m.set(o, n =o.slice(0))
      // recursive copy for child objects
      n.forEach(function(v,i){
        if('object' ===typeof v) n[i] =clone(v, m)
      });
      break;
    case ArrayBuffer:
      m.set(o, n =o.slice(0))
      break;
    case DataView:
      m.set(o, n =new (c)(clone(o.buffer, m), o.byteOffset, o.byteLength))
      break;
    case Map:
    case Set:
      m.set(o, n =new (c)(clone(Array.from(o.entries()), m)))
      break;
    case Int8Array:
    case Uint8Array:
    case Uint8ClampedArray:
    case Int16Array:
    case Uint16Array:
    case Int32Array:
    case Uint32Array:
    case Float32Array:
    case Float64Array:
      m.set(o, n =new (c)(clone(o.buffer, m), o.byteOffset, o.length))
      break;
    // use built in copy constructor
    case Date:
    case RegExp:
      m.set(o, n =new (c)(o))
      break;
    // fallback generic object copy
    default:
      m.set(o, n =Object.assign(new (c)(), o))
      // recursive copy for child objects
      for(c in n) if('object' ===typeof n[c]) n[c] =clone(n[c], m)
  }
  return n
}

function merge() {
  var obj = {},
      i = 0,
      il = arguments.length,
      key;
  for (; i < il; i++) {
      for (key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key)) {
              obj[key] = arguments[i][key];
          }
      }
  }
  return obj;
};

module.exports = {
  shouldMove,
  cacheDimen,
  getOS,
  merge,
  clearViewExternals,
  clone,
}
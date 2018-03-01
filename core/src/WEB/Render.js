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
let parseParams = require("../helpers/web/parseParams");
let helper = require("../helper");

function createTextElement(elem, config) {
  let children = elem.childNodes;
  let span = elem.childNodes.length ? elem.childNodes[0] : document.createElement(
    'span');

  elem.style.whiteSpace = "initial";
  span.innerText = config.text;
  span.style.wordBreak = "break-word"
  elem.appendChild(span);
}

function setAttributes(type, elem, props, firstRender) {
  if (type == "horizontalScrollView" || type == "scrollView")
    elem.style.overflow = "auto";

  let afterTransition = () => {
    const p = props;
    let transform = "";
    if (p.a_scaleX || p.a_scaleY)
      transform = `scale3d(${p.a_scaleX || 1}, ${p.a_scaleY || 1}, 1) `;
    if (p.a_translationX || p.a_translationY)
      transform += `translate3d(${p.a_translationX || 0}px, ${p.a_translationY || 0}px, 0px) `;
    if (p.a_rotation || p.a_rotationX || p.a_rotationY)
      transform += `rotateX(${p.a_rotationX || p.a_rotation || 0}deg) rotateY(${p.a_rotationY || p.a_rotation || 0}deg) `;
    if (p.a_duration || p.delay)
      elem.style.transition = `all ${p.a_duration || 0}ms ${p.delay || 0}ms`;
    if (transform != "")
      elem.style.transform = transform;

    if (p.a_alpha !== null)
      elem.style.opacity = p.a_alpha;
  };

  for (let key in props) {
    if (key == "text") {
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
      for (let innerKey in props.attributes)
        elem.setAttribute(innerKey, props.attributes[innerKey]);
    } else if (props[key] && typeof props[key] == "function") {
      if (!firstRender)
        continue;
      let eventType = key.substring(2, key.length).toLowerCase();
      let cb = props[key];
      elem.style.userSelect = 'none';
      elem.addEventListener(eventType, e =>
        (eventType == "change") ? cb(e.target.value) : cb(e));
    }
  }

  if ((props.style.transform || props.style.opacity)) {
    requestAnimationFrame(() => requestAnimationFrame(afterTransition));
  } else {
    afterTransition();
  }

  elem.setAttribute("class", type);
}

let setDimens = function (elem, props) {
  elem.style.display = (isHidden(props)) ? "none" : "";
  elem.style.left = props.x;
  elem.style.top = props.y;
  elem.style.width = props.w;
  elem.style.height = props.h;
}

let isHorizontalScrollView = function (elem) {
  return elem && elem.classList[0] == "horizontalScrollView";
}

let isScrollView = function (elem) {
  return elem && elem.classList[0] == "scrollView";
}

let isHidden = function (props) {
  return props.visibility === "gone";
}

// Creates the DOM element if it has not been already inflated
// View: Object of ReactDOM, {type, props, children}
// parentElement: DOM Object
let inflateView = function (view, parentElement) {
  let elem = document.getElementById(view.props.id);
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
    if (view.type == "imageView")
      elem = document.createElement("img");
    else if (view.type == "checkBox")
      elem = document.createElement("checkBox");
    else if (view.type == "editText") {
      elem = document.createElement("input");
      elem.value = view.props.text || "";
      elem.placeholder = view.props.hint || "";
    } else
      elem = document.createElement("div");

    if (view.type == "horizontalScrollView") {
      elem.style.overflowX = "scroll";
      elem.style.overflowY = "hidden";
      elem.style.whiteSpace = "noWrap";
      elem.style.position = "absolute";
    } else if (view.type == "scrollView") {
      elem.style.overflowY = "scroll";
      elem.style.overflowX = "hidden";
      elem.style.position = "absolute";
    } else if (view.type == "listView") {
      elem.style.overflowY = "scroll";
      elem.style.overflowX = "hidden";
      elem.style.position = "absolute";
    } else {
      elem.style.position = "absolute";
    }

    newInflated = true;
    if (parentElement) {
      parentElement.appendChild(elem);
    }
    setAttributes(view.type, elem, view.props, true);
  }

  let move = helper.shouldMove(view);
  let inflateChilds = helper.shouldInfateChilds(view);

  if (!(move || inflateChilds)) {
    if (newInflated)
      cb();
    return elem;
  }

  helper.cacheDimen(view);

  if (move)
    setDimens(elem, view.props);

  if (!inflateChilds) {
    if (newInflated)
      cb();
    return elem;
  }

  computeChildDimens(view);

  for (let i = 0; i < view.children.length; i++) {
    let child = view.children[i];
    if (child) {
      inflateView(child, elem);
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
    let parentDom = elem.parentNode;
    let view = window.__VIEWS[elem.id];
    let parentView = window.__VIEWS[parentDom.id];
    view.props = helper.merge(view.props, each);
    setAttributes(view.type, elem, view.props, false);
    if (parentView.type == "relativeLayout") {
      const children = parentView.children;
      parentView.children = [view];
      computeChildDimens(parentView);
      parentView.children = children;
    } else {
      computeChildDimens(parentView);
    }
    parentView.children.forEach(child => {
      inflateView(child, parentDom);
    });
  });
};

module.exports = {
  inflateView,
  runInUI,
  computeChildDimens
};
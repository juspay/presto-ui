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

const eventListenerHolder = {};
const animationProps =
  ["translationX", "translationY", "rotation", "rotationX", "rotationY",
    "scaleX", "scaleY", "alpha", "duration", "delay"
  ];

function createTextElement(elem, config) {
  let children = elem.childNodes;
  let span = elem.childNodes.length ? elem.childNodes[0] : document.createElement(
    'span');

  elem.style.whiteSpace = "initial";
  elem.innerHTML = config.text;
  elem.style.wordBreak = "break-word"
}

function setAttributes(type, elem, props, firstRender) {
  if (type == "horizontalScrollView" || type == "scrollView")
    elem.style.overflow = "auto";

  if (firstRender)
    eventListenerHolder[props.id] = {};

  let afterTransition = () => {
    const p = props;
    let animationPropExists = false;
    let tempProps = {};
    for (let i in animationProps) {
      const name = animationProps[i];
      const aName = "a_" + name;
      if (p.hasOwnProperty(name))
        tempProps[name] = p[name];
      if (!p.hasOwnProperty(aName))
        continue;
      animationPropExists = true;
      p[name] = p[aName];
      tempProps[name] = p[name];
      delete p[aName];
    }
    if (animationPropExists) {
      const parsedProps = parseParams(type, tempProps);
      for (let i in parsedProps.style) {
        elem.style[i] = parsedProps.style[i];
      }
    }
  };

  for (let key in props) {
    if (key == "text") {
      if (type == "editText")
        elem.value = props[key];
      else
        createTextElement(elem, props);
    } else if (key == "style") {
      for (let innerKey in props.style) {
        elem.style[innerKey] = props.style[innerKey];
      }
    } else if (key == "attributes") {
      for (let innerKey in props.attributes)
        elem.setAttribute(innerKey, props.attributes[innerKey]);
    } else if (props[key] && typeof props[key] == "function") {
      const eventType = key.substring(2, key.length).toLowerCase();
      const cb = props[key];
      if (eventListenerHolder[props.id][eventType]) {
        elem.removeEventListener(eventType, eventListenerHolder[props.id][
          eventType
        ]);
      }
      const resolveCb = e => (eventType == "change") ? cb(e.target.value) : cb(
        e)
      eventListenerHolder[props.id][eventType] = resolveCb;
      elem.addEventListener(eventType, resolveCb);
    }
  }
  if (props.style && (props.style.transform || props.style.opacity)) {
    requestAnimationFrame(() => requestAnimationFrame(afterTransition));
  } else {
    afterTransition();
  }

  delete props.style;
  delete props.attributes;
  elem.setAttribute("class", type);
}

let setDimens = function (elem, props) {
  elem.style.display = (isHidden(props)) ? "none" : "";
  elem.style.left = props.x + "px";
  elem.style.top = props.y + "px";
  elem.style.width = props.w + "px";
  elem.style.height = props.h + "px";
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
      if (view.props.multiLine)
        elem = document.createElement("textarea");
      else
        elem = document.createElement("input");
    } else
      elem = document.createElement("div");

    elem.style.position = "absolute";
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
  const pendingUpdatesOrder = [];
  const pendingUpdates = {};
  cmd.forEach(function (each) {
    let elem = document.getElementById(each.id);
    if (!elem)
      return console.warn("runInUI (Id NULL) CMD:", each);
    let parentDom = elem.parentNode;
    let view = window.__VIEWS[elem.id];
    let parentView = window.__VIEWS[parentDom.id];
    view.props = parseParams(view.type, helper.merge(view.props, each));
    setAttributes(view.type, elem, view.props, false);
    if (!pendingUpdates.hasOwnProperty(parentDom.id)) {
      pendingUpdatesOrder.push(parentDom.id);
    }
  });
  pendingUpdatesOrder.forEach(parentId => {
    const parentView = window.__VIEWS[parentId];
    const parentDom = document.getElementById(parentId);
    computeChildDimens(parentView);
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
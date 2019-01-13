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

let {
  computeChildDimens
} = require("../compute");
let helper = require("../helper");
let R = require("ramda");

function createTextElement(elem, config) {
  let children = elem.childNodes;
  let span = elem.childNodes.length ? elem.childNodes[0] : document.createElement(
    'span');

  elem.style.whiteSpace = "initial";
  span.innerText = config.text;
  span.style.wordBreak = "break-word"
  if (config.letterSpacing)
    elem["style"]["letter-spacing"] = config.letterSpacing;
  elem.appendChild(span);
}

function popup(elem, props) {
  let menuItems = props["popupMenu"].split(',');
  let menuBar = document.createElement("div");
  menuBar.setAttribute("class", "popupMenu");
  menuBar.style.cssText =
    "display: none; position: absolute; right: 20px; top:20px; z-index: 5;" +
    "box-shadow: 0px 5px 10px #888888;";
  document.body.appendChild(menuBar)
  let clickCb = "onMenuItemClick";
  for (let i = 0; i < menuItems.length; i++) {
    let menuDiv = document.createElement("div");
    menuDiv.setAttribute("class", "menuItem");
    menuDiv.textContent = menuItems[i];
    menuBar.appendChild(menuDiv);
    let index = i;
    if (props[clickCb] &&
      typeof props[clickCb] == "function") {
      menuDiv.addEventListener("click", () => {
        props[clickCb](index);
      });
    }
  }
  elem.addEventListener("click", function () {
    if (menuBar.style.display == "none")
      menuBar.style.display = "";
    else
      menuBar.style.display = "none";
  });
}

function setAttributes(type, elem, props, firstRender) {
  elem.className = type;
  if (type == "horizontalScrollView" || type == "scrollView")
    elem.style.overflow = "auto";

  let afterTransition = (x) => {
    let animation = props.animation;
    let myElem = elem;
    let pro = props;
    if (animation.transition) {
      myElem.style.transition = animation.transition;
      myElem.style.transform = animation.transform;
      if (animation.opacity)
        myElem.style.opacity = animation.opacity;
    }
  };

  elem.style.transition = props.transition;

  if(type == "linearLayout") {
    for(let key in props.newStyle) {
      elem.style[key] = props.newStyle[key];
    }
  }

  for (let key in props) {
    if (key == "popupMenu") {
      popup(elem, props);
    } else if (key == "text") {
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
    } else if (key == "className") {
        elem.classList.add(props[key]);
    } else if (key == "classList") {
      JSON.parse(props[key]).forEach(function(obj) {
        elem.classList.add(obj);
      });
    } else if (props[key] && typeof props[key] == "function") {
      var eventType = key.substring(2, key.length).toLowerCase();
      var cb = props[key];
      elem.style.userSelect = 'none';
      if (eventType == "change") {
        eventType = "input";
      }

      if (props.label) {

        elem.addEventListener('blur', function() {
          var inputValue = elem.value;
          if (inputValue == "") {
            elem.classList.remove("filled");
            elem.parentNode.classList.remove('focused');
          } else {
            elem.classList.add('filled');
          }
        });

        elem['onfocus'] = function (e) {
          elem.parentNode.classList.add('focused');
          if (eventType == "focus")
            e.stopPropagation(); cb(e);
        };
      }
      if (!(props.label && eventType == "focus")) {
        elem['on' + eventType] = function (e) {
          e.stopPropagation();eventType == "input" ? cb(e.target.value) : cb(e);
        };
      }
    }
  }

  if ((props.style.transform || props.style.opacity) && props.animation.transition) {
    setTimeout(afterTransition, 100);
  } else if (props.animation.transition) {
    afterTransition();
  }

}

let setDimens = function (elem, props) {
    elem.style.display = props.visibility === "gone" ? "none" : "";
    elem.style.left = props.x;
    elem.style.top = props.y;
    elem.style.width = props.w;
    elem.style.height = props.h;
    elem.style.visibility = props.visibility === "invisible" ?  "hidden" : "";
}

let isHorizontalScrollView = function (elem) {
  return elem && elem.classList[0] == "horizontalScrollView";
}

let isScrollView = function (elem) {
  return elem && elem.classList[0] == "scrollView";
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
      if (view.props.letterSpacing) {
        elem["style"]["letter-spacing"] = view.props.letterSpacing;
      }
      if (view.props.label) {
        var inputView = elem;
        inputView.style.width = '100%';
        setAttributes(view.type, inputView, view.props, true);
        inputView.setAttribute("id", view.props.id + "_input");
        var l = document.createElement("label");
        l.setAttribute("for", view.props.id + "_input");
        l.innerHTML = view.props.label;
        l.classList.add('input-label');

        if (view.props.letterSpacing) {
          l["style"]["letter-spacing"] = view.props.letterSpacing;
        }

        elem = document.createElement("div");
        elem.classList.add('input-group');
        elem.appendChild(l);
        elem.appendChild(inputView);
        setAttributes(view.type, elem, view.props, true);
        delete view.props.label;
      } else if (view.props.hint) {
        elem.placeholder = view.props.hint || "";
      }
    } else
      elem = document.createElement("div");

    if (view.type == "horizontalScrollView") {
      elem.style.overflowX = "scroll";
      elem.style.overflowY = "hidden";
    } else if (view.type == "listView" || view.type == "scrollView") {
      elem.style.overflowY = "scroll";
      elem.style.overflowX = "hidden";
    }

    if(view.type == "relativeLayout") {
      elem.style.position = "absolute";
    }

    newInflated = true;
    if (parentElement) {
      parentElement.appendChild(elem);
    }
    setAttributes(view.type, elem, view.props, true);
  }

  let move = helper.shouldMove(view);
  let isFlex = elem.style.display === "flex";
  let inflateChilds = helper.shouldInfateChilds(view);

  if (!(move || inflateChilds)) {
    if (newInflated)
      cb();
    return elem;
  }

  helper.cacheDimen(view);

  if (move && !isFlex)
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
    view.props = R.merge(view.props, each);
    setAttributes(view.type, elem, view.props, false);
  });
};

module.exports = {
  inflateView,
  runInUI,
  computeChildDimens
};

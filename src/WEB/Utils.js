const {hexToAlpha} = require("../utils");

function parseColors(color) {
    if (color.length < 8)
      return color;

    if (color.indexOf("rgba") !== -1 || color.indexOf("rgb") !== -1)
      return color;

    var alpha = parseInt(color.substring(1, 3), 16);
    alpha = (alpha / 255).toFixed(2);

    var hexColor = color.substring(3, 9);
    var rgbaColor = "rgba(" + convertHexToRgb(hexColor) + "," + alpha + ")";

    return rgbaColor;
}

let postRenderElements = {}

function rWS(value) {
  return value.replace(/ /g, '');
}

function cS(value) {
  return value ? value + '' : "";
}

function convertColorToRgba(color) {
  color = rWS(cS(color));

  var values;
  var alpha = "1.00";

  if (color.length >= 8) {
    alpha = hexToAlpha(color.substring(1, 3)).toFixed(2);
    color = color.substring(3, 9);
  } else {
    color = color.substring(1, color.length);
  }

  color = convertHexToRgb(rWS(color));
  values = color.split(',');

  return {
    r: parseInt(rWS(values[0])),
    g: parseInt(rWS(values[1])),
    b: parseInt(rWS(values[2])),
    a: parseFloat(alpha)
  };
}

function getValueFromPixel (pixel) { return parseInt(pixel.substring(0,pixel.length-1)) };

function calculateHeight (elem) {
  if(!elem) return 0;
  let childNodes = elem.children;
  let maxHeight = 0;
  for (var i = 0; i < childNodes.length; ++i) {
          let style = childNodes[i].currentStyle || window.getComputedStyle(childNodes[i]);
          maxHeight = maxHeight > childNodes[i].offsetHeight ? maxHeight : (childNodes[i].offsetHeight + getValueFromPixel(style.marginTop) + getValueFromPixel(style.marginBottom));
  }
  return maxHeight;
}

function convertHexToRgb(hex) {
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  return r + "," + g + "," + b;
}

const state = {
  fragments : {},
  fragmentTypes : {},
  mainRootView : {
    type: "relativeLayout",
    props: {
        "h": document.getElementById("content").clientHeight,
        "w": document.getElementById("content").clientWidth
    }
  }
}

function addToContainerList(id , namespace){
    let container = getContainer(namespace, true);
    if(container)
    {
      let key = function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }();
      state.fragments[key] = document.getElementById(id);
      state.fragmentTypes[key] = window.__VIEWS[id];
      return key;
  }
  return "__failed"
}

function getContainer( namespace ){
    if(namespace){
      let container = state.fragments[namespace];
      if(container)
        return container;
      else return undefined;
  }
  return document.getElementById("content");
}

function getParentView(namespace, view) {
  if (window.__VIEWS && !window.__VIEWS.content) {
    window.__VIEWS.content = state.mainRootView;
  }
  if (namespace) {
    let containerType = state.fragmentTypes[namespace];
    if (containerType) {
      containerType.children = containerType.children || []
      containerType.children.push(view);
      containerType.oldView = true;
      return containerType;
    }
  }

  if (state.mainRootView.children) {
    state.mainRootView.oldView = true;
  }
  state.mainRootView.children = state.mainRootView.children || [];
  state.mainRootView.children.push(view);
  return state.mainRootView;
}

// function modifyTranslation(config){
//   var x = config.x || "0";
//   var y = config.y || "0";
//   var animationArray = JSON.parse(config.inlineAnimation);
//   var animationArray = animationArray.map(function(a){
//     if(a.hasOwnProperty("fromX")){
//       a.fromX = parseInt(a.fromX) + parseInt(x) + '';
//       if(!a.hasOwnProperty("toX")){
//         a.toX = 0 + parseInt(x) + '';
//       }
//     }
//     if(a.hasOwnProperty("toX")){
//       a.toX = parseInt(a.toX) + parseInt(x) + '';
//     }
//     if(a.hasOwnProperty("fromY")){
//       a.fromY = parseInt(a.fromY) + parseInt(y) + '';
//       if(!a.hasOwnProperty("toY")){
//         a.toY = 0 + parseInt(y) + '';
//       }
//     }
//     if(a.hasOwnProperty("toY")){
//       a.toY = parseInt(a.toY) + parseInt(y) + '';
//     }
//     return a;
//   })
//   return (animationArray);
// }

function addCSSStyle (style) {
  var styleElem = document.getElementById(window.__STYLE_ID)
  if(styleElem && styleElem.styleSheet){
      styleElem.styleSheet.cssText += style;
  }else{
      styleElem = document.createElement('style');
      styleElem.appendChild(document.createTextNode(style));
      document.getElementsByTagName("head")[0].appendChild(styleElem);
  }
}

var KEYFRAME_INDEX = 0;

function manualFocus () {
  if (window.focusedElement !== undefined){
      var c = document.getElementById(window.focusedElement);
      window.focusedElement = undefined;
      if (c) {
          console.debug("now focusing");
          c.focus();
      }
  }
}

const CSSMarkupWriter = {
  "animations": {
      "keyframe": (name, code) => `@keyframes ${name} {${code}}`,
      "keyframe-from": (code) => `from {${code}}`,
      "keyframe-to": (code) => `to {${code}}`,
      "animation-shorthand": (keyframes) => {
          var val = "";
          keyframes.forEach((keyframe, i) => {
              val += keyframe;
              if (i == (keyframes.length-1)) { val += ';'; }
              else { val += ', '; }
          });
          return `animation: ${val}`;
      }
  }

}
function addNewAnimation(animationObj, newAnimation) {
    if (newAnimation) {
        if(!animationObj[newAnimation.key]){
            animationObj[newAnimation.key] = newAnimation.value;
        } else {
            animationObj[newAnimation.key] = animationObj[newAnimation.key].slice(0, -1) + " " + newAnimation.value;
        }
    }
}

function setAnimationStyles (elem, props) {
    if (!props.hasOwnProperty('hasAnimation') || !props.hasAnimation || !props.inlineAnimation) {
        return "";
    }
    try {
        const animationObjects = JSON.parse(props.inlineAnimation);
        if(!Array.isArray(animationObjects) || (Array.isArray(animationObjects) && animationObjects.length == 0)) return "";
        window.hasAnimationProps = true;
        var keyFrameShorthands = [];
        var AnimationCSSMarkupWriter = CSSMarkupWriter["animations"];
        let keyFrameFromMarkup = {}, keyFrameToMarkup = {};
        animationObjects.forEach(function (animationObject) {
            const keyframeName = "keyframe_" + props.id + "_" + KEYFRAME_INDEX++;
            if (animationObject.delay) {
                keyFrameFromMarkup = {}; keyFrameToMarkup = {};
            }
            /* Add keyframe in css */
            for (let [key, value] of Object.entries(animationObject)) {
                addNewAnimation(keyFrameFromMarkup, InlineAnimationMapper.fromMap(key, value));
                addNewAnimation(keyFrameToMarkup, InlineAnimationMapper.toMap(key, value));
                if (key == "fromScaleX" || key == "fromScaleY") {
                    keyFrameFromMarkup["transform-origin"] = `left top;`;
                } else if (key == "toScaleX" || key == "toScaleY") {
                    keyFrameToMarkup["transform-origin"] = `left top;`;
                }
            }
            if (props.hasOwnProperty("pivotX") || props.hasOwnProperty("pivotY")) {
                let origin = `${props.hasOwnProperty("pivotX") ? props.pivotX + "%" : "left"} ${props.hasOwnProperty("pivotY") ? props.pivotY + "%" : "top"};`;
                keyFrameFromMarkup["transform-origin"] = keyFrameToMarkup["transform-origin"] = origin;
            }
            var keyFrameCSS = AnimationCSSMarkupWriter["keyframe"](keyframeName,
                                AnimationCSSMarkupWriter["keyframe-from"](keyFrameFromMarkup) +
                                AnimationCSSMarkupWriter["keyframe-to"](keyFrameToMarkup)
                            );

            addCSSStyle(keyFrameCSS);
            window.__RENDERED_KEYFRAMES.push(keyframeName);

            /* Add animation shorthand prop of keyframe in element*/
            var keyFrameAnimShorthand = `${keyframeName} `;
            InlineAnimationMapper.MAPPINGS["animation-shorthand-seq"].forEach(function (key) {
                keyFrameAnimShorthand += (InlineAnimationMapper.map("animation-props")(key, animationObject[key]) + " ");
            });
            keyFrameShorthands.push(keyFrameAnimShorthand);
        });
        return AnimationCSSMarkupWriter["animation-shorthand"](keyFrameShorthands);
    } catch {
        return "";
    }
}

const InlineAnimationMapper = {
    map: function (type) {
        var self = this;
        return function (key, value) {
            if (self.MAPPINGS[type] && self.MAPPINGS[type][key]) {
                return self.MAPPINGS[type][key](value);
            } else return "";
        }
    },
    fromMap: function (k, val) {
        var mappings = {
            "fromX": {key: "transform", value:`translateX(${val}px);`},
            "fromY": {key: "transform", value:`translateY(${val}px);`},
            "fromScaleX": {key: "transform", value:`scaleX(${val});`},
            "fromScaleY": {key: "transform", value:`scaleY(${val});`},
            "fromRotation": {key: "transform", value:`rotate(${val}deg);`},
            "fromRotationX": {key: "transform", value:`rotateX(${val}deg);`},
            "fromRotationY": {key: "transform", value:`rotateY(${val}deg);`},
            "fromAlpha": {key: "opacity", value: `${val};`},
        };
        return mappings[k];
    },
    toMap: function (k, val) {
        var mappings = {
            "toX": {key: "transform", value:`translateX(${val}px);`},
            "toY": {key: "transform", value:`translateY(${val}px);`},
            "toScaleX": {key: "transform", value:`scaleX(${val});`},
            "toScaleY": {key: "transform", value:`scaleY(${val});`},
            "toRotation": {key: "transform", value:`rotate(${val}deg);`},
            "toRotationX": {key: "transform", value:`rotateX(${val}deg);`},
            "toRotationY": {key: "transform", value:`rotateY(${val}deg);`},
            "toAlpha": {key: "opacity", value: `${val};`},
        }
        return mappings[k];
    },
    MAPPINGS: {
        // ref: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
        "animation-shorthand-seq": ["duration", "interpolator", "delay", "repeatCount", "repeatMode", "fillMode"],
        "animation-props": {
            "interpolator": val => {
                if (!val) {
                    return `ease`;
                } else if (typeof val == "string" && val.split(',').length == 4) {
                    return `cubic-bezier(${val})`
                } else {
                    switch (val) {
                        case "easein":
                            return "ease-in";
                        case "easeout":
                            return "ease-out";
                        case "bounce":
                        case "easeinout":
                            return "ease-in-out";
                        default:
                            return `${val}`;
                    }
                }
            },
            "delay": val => {
                if (!val) {
                    return `0s`;
                } else if (!isNaN(val)) {
                    val = parseFloat(parseFloat(val) / 1000).toFixed(2);
                    return `${val}s `;
                } else {
                    return `0s`;
                }
            },
            "duration": val => {
                if (!val) {
                    return `0s`;
                } if (!isNaN(val)) {
                    val = parseFloat(parseFloat(val) / 1000).toFixed(2);
                    return `${val}s`;
                } else {
                    return `0s`;
                }
            },
            "repeatMode": val => {
                switch (val) {
                    case "restart":
                        return `normal`;
                    case "reverse":
                        return `alternate`;
                    default:
                        return `normal`;
                }
            },
            "repeatCount": val => {
                if (!val) return `1`;
                val = parseInt(val);
                if (isNaN(val)) { return `1`; }
                else if (val < 0) { return `infinite`}
                else { return `${val+1}`}
            },
            "fillMode": val => {
                if (!val) return `forwards`;
                else return `${val}`;
            }
        }
    }
}
module.exports = {
    parseColors,
    rWS,
    cS,
    convertColorToRgba,
    addToContainerList,
    getParentView,
    getContainer,
    calculateHeight,
    setAnimationStyles,
    postRenderElements
}

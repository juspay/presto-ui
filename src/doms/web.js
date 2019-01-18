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

var parseParams = require('../helpers/web').parseParams;

Array.prototype.flatten = function () {
  return this.reduce(function (prev, cur) {
    var more = [].concat(cur).some(Array.isArray);
    return prev.concat(more ? cur.flatten() : cur);
  }, []);
};

module.exports = function (type, props, ...children) {
  children = children.flatten();

  if (!props)
    props = {};

  if (typeof type === "string") {
    props = parseParams(type, props);
    props = newParseParams(type, props);
    let obj = {
      props: props,
      type: type,
      children: children
    };

    window.__VIEWS[props.id] = obj;
    window.__VIEW_DIMENSIONS[props.id] = null;
    return obj;
  } else {
    return new type(props, children);
  }
}

const newParseParams = (type, props) => {
  props.newStyle = {
    "height": 'auto',
    "width": 'auto'
  };

  /* Global Styles */
  if(props.hasOwnProperty('width')){
    if(props.width == 'match_parent'){
      props.newStyle.width = '100%';
    }else if(!isNaN(props.width)){
      props.newStyle.width = props.width + 'px';
    }
  }

  if(props.hasOwnProperty('height')){
    if(props.height == 'match_parent'){
      props.newStyle.height = '100%';
    }else if(!isNaN(props.height)){
      props.newStyle.height = props.height + 'px';
    }
  }

  if(props.hasOwnProperty('padding')){
    let padding = props.padding.split(',').map(a => a * 1);

    props.newStyle['padding'] = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
  }

  if(props.hasOwnProperty('margin')){
    let margin = props.margin.split(',').map(a => a * 1);

    props.newStyle['margin'] = margin[1] + 'px ' + margin[2] + 'px ' + margin[3] + 'px ' + margin[0] + 'px';
  }
  
  if(props.style.hasOwnProperty('box-shadow')){
    props.newStyle["box-shadow"] = props.style["box-shadow"];
  }

  if(props.hasOwnProperty('visibility')){
    let visibility = props.visibility;
    if(visibility == 'invisible')
      props.newStyle["visibility"] = "hidden";
    else if(visibility == 'gone')
      props.newStyle["display"] = "none";
    else
      props.newStyle['visibility'] = '';
  }
  /* Global Styles End */

  /* Linear Specific Styles */
  if(type == "linearLayout") {
    if(props.newStyle.hasOwnProperty('display') && props.newStyle['display'] == 'none'){
      //props.newStyle["display"] = 'flex';
    }else{
      props.newStyle['display'] = 'flex';
    }

    props.newStyle["box-sizing"] = "border-box";
    props.newStyle["flex-wrap"] = "wrap";
    props.newStyle["flex-direction"] = props.orientation == "horizontal" || props.orientation == null ? "row" : "column";

    if(props.hasOwnProperty('gravity')){
      switch(props.gravity){
        case "center_vertical":
          if(props["flex-direction"] == 'row'){
            props.newStyle["justify-content"] = "center";
          }else{
            props.newStyle["align-items"] = "center";
          }
        break;
        case "center_horizontal":
          if(props["flex-direction"] == 'row'){
            props.newStyle["align-items"] = "center";
          }else{
            props.newStyle["justify-content"] = "center";
          }
        break;
        case "center":
          props.newStyle["align-items"] = "center";
          props.newStyle["justify-content"] = "center";
        break;
      }
    }
  }
  /* Linear Specific Styles End */

  return props;
}
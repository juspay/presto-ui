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
const {computeChildDimens} = require('../computeIOS');
const helper = require('../helper');


function inflate(view) {
  const id = view.props.id;

  if (!window.__VIEWS.hasOwnProperty(id)) {
    computeChildDimens(view);
    helper.cacheDimen(view);
    window.__VIEWS[id] = view;
    const newView = helper.clone(view,null);
    view.children.forEach((child, i) => {
      newView.children[i] = inflate(child);
    });
    const obj = parseParams(newView.type, newView.props, "set");
    newView.props = obj.config;
    newView.type = obj.type[0].toUpperCase() + obj.type.substr(1, obj.type.length);
    return newView;
  }

  const move = helper.shouldMove(view);
  helper.cacheDimen(view);
  let ranRunInUI = false;
  if (move) {
    move.id = id;
    runInUIHelper(view.type, view.props);
    ranRunInUI = true;
  }

  computeChildDimens(view)
  view.children.forEach(inflate);
  return ranRunInUI;
}

function runInUI(cmd, fromInflate) {
  if (!(cmd instanceof Array)) cmd = [cmd];

  if (cmd.length==1 && cmd[0]=="removeAllUI"){
    window.webkit.messageHandlers.IOS.postMessage(JSON.stringify({
      methodName: "removeAllUI",
      parameters: {"animated":"false"}
    }));
  }else{
    cmd.forEach(function (each) {
      var id = each.id;
      each.useConstraits = true;
      var view = window.__VIEWS[id];
      if (view) {
        var parent = window.__VIEWS[view.props.parentId];
        view.props = helper.merge(view.props, each);
        if(view.props && view.props.hasOwnProperty("listItem") && each.hasOwnProperty("listData") && !each.hasOwnProperty("listItem")){
          each.listItem = view.props.listItem
        }
        //Adding as stop gag solution for editText in ios where text 
        //was getting set empty in case other properties were modified.
        if (!each.hasOwnProperty('text') && view.props) {
          delete view.props.text;
        }
        if (each.hasOwnProperty('textFromHtml') && view.props) {
          if (view.props.hasOwnProperty('color')) {
            each.color = view.props.color;
          }
          if (view.props.hasOwnProperty('fontStyle')) {
            each.fontStyle = view.props.fontStyle;
          }
          if (view.props.hasOwnProperty('textSize')) {
            each.textSize = view.props.textSize;
          }
        }
        if (parent && !fromInflate) {
          if (parent.type.indexOf("scroll") != -1) {
            inflate(parent);
          }
          computeChildDimens(parent);
          var children = parent.children;
          if (!inflate(view)) {
            runInUIHelper(view.type, each, true);
          };
          for (var i = 0, len = children.length; i < len; i++) {
            if (view != children[i]) {
              inflate(children[i]);
            }
          }
        } else {
          runInUIHelper(view.type, each);
        }
      }
    });
  }
};

function runInUIHelper(type, obj, removeFrame) {
  var cmd = parseParams(type, obj, "get").config.methods;
  if(removeFrame){
      cmd = cmd.filter(function(itm){
        return itm.methodName != "setFrame:"
    })
  }
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

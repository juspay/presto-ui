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

var dom = require('../doms').ios;
var View = require('../base_views').IOSBaseView;

class UIView extends View {
  constructor(props, children) {
    super(props, children);

    this.setIds([
      'id'
    ]);
  }

  getChildWidth (props, parentWidth) {
    if (window.__CURR_PARENT_INDEX && isNaN(parentWidth * 1)) {
      this.props.width = parentWidth = window.__IOS_VIEWS[window.__CURR_PARENT_INDEX].width;
    }

    if (props.width) {
      props.width  += "";

      if (props.width.indexOf("match_parent") > -1){
        let values = props.width.split("/");
        let width = parentWidth;
        let x = (props.x || 0) * 1;
        let weight;

        if (values.length > 1) {
          weight = values[1] * 1;
          width = Math.round(parentWidth/weight);
        }

        return width*1 - x;
      }

      return props.width;
    }

    return props.width;
  }

  getChildHeight (props, parentHeight) {
    if (window.__CURR_PARENT_INDEX && isNaN(parentHeight * 1)) {
      this.props.height = parentHeight = window.__IOS_VIEWS[window.__CURR_PARENT_INDEX].height;
    }

    if (props.height) {
      props.height  += "";

      if (props.height.indexOf("match_parent") > -1){
        let values = props.height.split("/");
        let height = parentHeight;
        let y = (props.y || 0) * 1;
        let weight;

        if (values.length > 1) {
          weight = values[1] * 1;
          height = Math.round(parentHeight / weight);
        }

        return height * 1 - y;
      }

      return props.height;
    }

    return props.height;
  }

  render() {
    var params = this.props;
    var _this = this;
    var debug = params.debug || this.debug;
    var width = this.props.width;
    var height = this.props.height;

    params.__filename = params.__source.fileName + ' :ln ' + params.__source.lineNumber;

    if (debug) {
      params.debug = "true";
    }

    return (
      <uIView
        id={this.props.id ? this.props.id : this.idSet.id}
        params={params}>

        {this.children.map(function(child) {
          child.props.width = _this.getChildWidth(child.props, width);
          child.props.height = _this.getChildHeight(child.props, height);
          child.debug = debug ? "true" : false;
          return  child.render();
        })}
      </uIView>
    );
  }
}

module.exports = UIView;

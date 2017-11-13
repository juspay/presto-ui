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

var dom = require('../doms/ios');
var UIView = require('./UIView');

class StackView extends UIView {
	constructor(props, children) {
		super(props, children);

		this.setIds([
			'id'
		]);

    this.offsetY = 0;
		this.offsetX = 0;
	}

  setOffsetX(props, spacingRight) {
    let offsetX;
    let width;

    if (props.width == "remaining") {
      width = this.props.width*1 - this.offsetX;
      props.width = width;
    } else {
      width = props.width*1;
    }

    this.offsetX += width + spacingRight;
  }

  setOffsetY(props, spacingBottom) {
    let offsetY;
    let height;

    if (props.height == "remaining") {
      height = this.props.height*1 - this.offsetY;
      props.height = height;
    } else {
      height = props.height*1;
    }

    this.offsetY += height + spacingBottom;
  }

  getChildXPos(props) {
    if (this.orientation != "1")
    return props.x;

    let x = this.offsetX;
    let spacingRight = props.spacingRight*1 || 0;

    this.setOffsetX(props, spacingRight);

    return x;
  }

	getChildYPos(props) {
    if (this.orientation != "0")
    return props.y;

		let y = this.offsetY;
    let spacingBottom = props.spacingBottom*1 || 0;

    this.setOffsetY(props, spacingBottom);

		return y;
	}

  getWidth() {
    let  width = 0;
    this.children.forEach((child)=> {
      let spacingRight = child.props.spacingRight*1 || 0;
      width += (child.props.width*1 + spacingRight);
    });

    return width;
  }

  getHeight() {
    let  height = 0;
    this.children.forEach((child)=> {
      let spacingBottom = child.props.spacingBottom*1 || 0;
      height += (child.props.height*1 + spacingBottom);
    });

    return height;
  }

  setOrientation(params) {
    this.orientation = this.props.orientation?"1": "0";
  }

  setDimensions(params) {
    if (this.orientation == "1") { // horizontal
      if (typeof params.width === "undefined")
      params.width = this.getWidth();
    } else { // vertical
      if (typeof params.height === "undefined")
      params.height = this.getHeight();
    }
  }

  resolveChildren(debug) {
    var _this = this;
    var width = this.props.width;
    var height = this.props.height;

    return this.children.map(function(child) {
      child.props.width = _this.getChildWidth(child.props, width);
      child.props.height = _this.getChildHeight(child.props, height);
      child.props.x =  _this.getChildXPos(child.props);
      child.props.y =  _this.getChildYPos(child.props);
      child.debug = debug ? "true" : false;
      return  child.render();
    });
  }

	render() {
		var params = this.props;
    var debug = params.debug || this.debug;
    var children;

    if (debug) {
      params.debug = "true";
    }

    this.setOrientation(params);
    children = this.resolveChildren(debug);
    this.setDimensions(params);
    params.__filename = params.__source.fileName + ' :ln ' + params.__source.lineNumber;

		return (
			<uIView
				id={this.props.id ? this.props.id : this.idSet.id}
				params={params}>

				{children}
			</uIView>
		);
	}
}

module.exports = StackView;

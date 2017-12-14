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

var dom = require('../doms');
var View = require('../baseView');
var TextView = require('./TextView');
var LinearLayout = require('./LinearLayout');

class ViewPager extends View {
  constructor(props, children) {
    super(props, children);

    this.setIds([
      'id'
    ]);
  }

  resolveChildren () {
    var _this = this;

    return this.children.map(function(child) {
      return  child.render();
    });
  }

  render() {
    var params = this.props;
    var children = this.resolveChildren();

    if (window.__OS == "IOS") {
      return (
        <collectionView
          collectionView="true"
          id={this.props.id ? this.props.id : this.idSet.id}
          params={params}>

          {children}

        </collectionView>
      );
    } else if (window.__OS == "WEB") {
      params.background = "#dddddd";
      params.gravity="center";
      return (
        <LinearLayout
          params={params}>

          <TextView
            text="ViewPager is not support on Web"
            color="#e74c3c"
            gravity="center"
            textSize="24"
            width="match_parent"
            height="24"/>

        </LinearLayout>
      ).render();
    }

    params.viewPagerChildren = JSON.stringify(children);
    return (
      <viewPager
        id={this.props.id?this.props.id:this.idSet.id}
        params={params}>


      </viewPager>
    )
  }
}

module.exports = ViewPager;

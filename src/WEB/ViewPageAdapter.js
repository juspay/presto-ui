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

var Renderer = require("./Render");

function generateTabWrapper ()  {
  var elem = document.createElement("div");

  elem.className = "tab";

  return elem;
}

function generateTabTitleWrapper () {
  var elem = document.createElement("div");
  elem.className = "tab-titleWrapper";

  return elem;
}

function generateTabContentWrapper ()  {
  var elem = document.createElement("div");

  elem.className = "tab-contentWrapper";

  return elem;
}

function generateTabTitleEl (title) {
  var elem = document.createElement("div");

  elem.innerHTML = title;
  elem.className = "tab-title";

  return elem;
};

function generateTabContentEl (view)  {
  var elem = Renderer.inflateView(view.view);
  elem.className += " tab-content";

  return elem;
}

var createTabs = function(Android, id, tabJsx, jsx, cb)  {
  var view = generateTabWrapper();
  var tabTitleWrapper = generateTabTitleWrapper();
  var tabContentWrapper = generateTabContentWrapper();
  var tabItem;

  view.appendChild(tabTitleWrapper);
  view.appendChild(tabContentWrapper);

  jsx.forEach((each, index) => {
    tabItem = generateTabTitleEl(each.value);

    if (index == 0)
    tabItem.className += " tab-title-active";

    tabTitleWrapper.appendChild(tabItem);
  });

  tabJsx.forEach((each, index) => {
    tabItem = generateTabContentEl(each);

    if (index == 0)
    tabItem.className += " tab-content-active";

    tabContentWrapper.appendChild(tabItem);
  });

  document.getElementById(id).appendChild(view);

  window.callUICallback(cb , "0");
};

module.exports = {
  createTabs: createTabs,
}

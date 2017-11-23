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

let viewRequires = {
  "View": `require("presto-ui").baseView`,
  "LinearLayout": `require("presto-ui").views.LinearLayout`,
  "RelativeLayout": `require("presto-ui").views.RelativeLayout`,
  "TextView": `require("presto-ui").views.TextView`,
  "ImageView": `require("presto-ui").views.ImageView`,
  "EditText": `require("presto-ui").views.EditText`,
  "ListView": `require("presto-ui").views.ListView`,
  "ScrollView": `require("presto-ui").views.ScrollView`,
  "HorizontalScrollView": `require("presto-ui").views.HorizontalScrollView`,
  "uiHandler": `require("presto-ui").handler`,
  "ScreenReducer": `require("../state_machines/Screens")`,
  "dom": `require("presto-ui").doms`
};

module.exports = viewRequires;
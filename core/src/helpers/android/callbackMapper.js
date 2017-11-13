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

module.exports.map = (fn) => {
	if(typeof window.__FN_INDEX !== 'undefined' && window.__FN_INDEX !== null) {
		var proxyFnName = 'F' + window.__FN_INDEX;
		window.__PROXY_FN[proxyFnName] = fn;
	  window.__FN_INDEX++;
		return proxyFnName;
	} else {
		throw new Error("Please initialise window.__FN_INDEX = 0 in index.js of your project.");
	}
};

module.exports.callJSCallback = (...params) => {
  var fName = params[0];
  var functionArgs = params.slice(1);
  functionArgs = functionArgs.map(function(item) {
    if((typeof item == "string") && isBase64(item)) {
      return atob(item);
    }
    return item;
  });
  window.__PROXY_FN[fName].call(null, ...functionArgs);
};

var isBase64 = function(str) {
  try {
    return btoa(atob(str)) == str;
  } catch (err) {
    return false;
  }
};

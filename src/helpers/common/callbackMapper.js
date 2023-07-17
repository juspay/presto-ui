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

 /*
	This takes a function and puts it in a hashmap called __PROXY_FN and returns the key (a string). 
	Key is contructed using a global variables. 
	Hashmap is also a global variable. 
	Point To Note : Since iframes, we have different DOM Documents. So, these global variables are global to Presto-UI's document. 
 */ 
	module.exports.map = (fn) => {
		// console.debug("presto-ui callback-mapper document location",document.location); 
		if(typeof window.__FN_INDEX !== 'undefined' && window.__FN_INDEX !== null) {
			var proxyFnName = 'F' + window.__FN_INDEX;
			if (JOS.self){
				proxyFnName = JOS.self + "_" + proxyFnName;
			} else if (window.__payload && window.__payload.service){
				proxyFnName = window.__payload.service + "_" + proxyFnName;
			}
			window.__PROXY_FN[proxyFnName] = fn;
			window.__FN_INDEX++;
			// console.log("Presto-UI Callback Mapper proxyFnName is",proxyFnName); 
			return proxyFnName;
		} else {
			throw new Error("Please initialise window.__FN_INDEX = 0 in index.js of your project.");
		}
	}
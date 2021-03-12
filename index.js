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
	In jOS, we use multiple code-bases as a nested iframe. 
	Presto-UI needs to be on the parent iframe to be able to paint to the screen. 
	The following if/else conditions makes it possible. 

	There is no Lazy Loading in JS; 
	The reqiure statement will get executed even if the object is not accessed. 
	Since, most files in presto-ui mutates the global state, the requires has been wrapped in if/else. 
*/
if (window.__OS === "WEB") {
    try {
		// console.debug("presto-ui index document location",document.location); 
		var prestoUI = window.parent.prestoUI; // The parent iframe must import presto-ui as `window.prestoUI = require("presto-ui")`
		if (prestoUI) {
			// console.debug("prestoUI found in the parent iframe whyyy",prestoUI); 
			window.Android = window.parent.Android; 
			window.JBridge = window.parent.JBridge; 
			module.exports = prestoUI; 
		} else { // On first run this is always true, on subsequent reads (imports) of this file, this is never true
			// console.debug("prestoUI not found in the parent iframe"); 
			exportPrestoUI(); 
		}
	} catch (err) {  // DOM Exception : Cross Orgin iframe access not allowed. When the parent iframe tries to require presto-ui, the catch block will be executed.  
		console.debug("presto-ui can't acess top")
		exportPrestoUI(); // This will happen in iframe context, think of this as first import of this file. 
	}
}
else { 
	console.debug("presto-ui not web"); 
	exportPrestoUI(); 

}

function exportPrestoUI(){
	module.exports = {
		init: require("./src/init"), 
		doms : require("./src/doms"),
		handler : require("./src/handler"),
		helpers : require("./src/helpers"),
		baseView : require("./src/baseView"),
		animations: require('./src/animations'),
		callbackMapper: require('./src/helpers/common/callbackMapper'),
		getOS: require('./src/helper').getOS,
		prestoMerge: require('./src/helper').merge,
		prestoClone: require('./src/helper').clone
	};
}

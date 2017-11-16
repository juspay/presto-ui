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

class ImageView extends View {
	constructor(props, children) {
		super(props, children);

		this.setIds([
			'id'
		]);
	}	

	fetchBlob(uri, callback) {
	  var xhr = new XMLHttpRequest();
	  xhr.open('GET', uri, true);
	  xhr.responseType = 'arraybuffer';

	  xhr.onload = function(e) {
	    if (this.status == 200) {
	      var blob = this.response;
	      if (callback) {
	        callback(blob);
	      }
	    }
	  };
  	xhr.send();
	}

	afterRender = () => {
		var _this = this;
		var url = this.props.remoteImageUrl;
		var str;

		if(url)	 {
			str = Gatekeeper.getFileFromInternalStorage(url);

			if (str) {
				console.log(url, ' fetched from cache');
				Android.setImage(_this.id*1, str);
				return; 
			}

			this.fetchBlob(url, function(blob) {
				str = btoa(String.fromCharCode.apply(null, new Uint8Array(blob)));
				Android.setImage(_this.id*1, str);
				Gatekeeper.saveFileToInternalStorage(url, str);
			});
		}
	}

	render() {
		var params = this.props;
		this.id = this.props.id?this.props.id:this.idSet.id;

		// if (this.props.remoteImageUrl) {
		// 	params.imageUrl = "placeholder_image";
		// }
		
		params.__filename = params.__source.fileName  + ' :ln ' + params.__source.lineNumber;

		return (
			<imageView  
				afterRender = {this.afterRender}
				id={this.id}
				params={params}/>
		)
	}
}

module.exports = ImageView;

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

const View = require("./View");
const parseParams = require('../helpers/android/parseParams');

class AndroidBaseView extends View {
	constructor(props, children) {
		super(props, children);

		window.__SETFN = function(config) {
			Android.runInUI(
				this.set(config),
				null
			);
		}.bind(this);
	}

	findRecurse(obj, selector) {
		var children = obj.children;

	  for (var i = 0; i < children.length; i++) {
	    if (children[i].displayName && children[i].displayName == selector) {
	      this.foundChildren.push(children[i]);
	    }

	    if (children[i].children && children[i].children.length)
	    this.findRecurse(children[i], selector);
	  }
	  return;
	}

	find(selector, obj) {
	  this.foundChildren = [];

	  if (!obj)
	  this.findRecurse(this.layout, selector);
		else
		this.findRecurse(obj, selector);

	  return this.foundChildren;
	}

	animateView(index, direction, _animate) {
		var cmd = '';
		var _this = this;
		var width = __WIDTH + '';
		var a_translationX = (direction == 1) ? '-' + width : width;
		var animate = (typeof _animate != "undefined") ? _animate : true;

		if (animate) {
			// prevScreen
			cmd += _this.set({
				id: window.__CACHED_SCREENS[index].value.layout.idSet.id,
				a_translationX: a_translationX,
				a_duration: "250"
			});

			// currScreen
			cmd += _this.set({
				id: _this.layout.idSet.id,
				a_translationX: '0',
				a_duration: "250",
				bringToFront: 'true'
			});
		} else {
			// prevScreen
			cmd += _this.set({
				id: window.__CACHED_SCREENS[index].value.layout.idSet.id,
				translationX: a_translationX
			});

			// currScreen
			cmd += _this.set({
				id: _this.layout.idSet.id,
				translationX: '0',
				bringToFront: 'true'
			});
		}

		return cmd;
	}

	setIds(arr) {
		this.idSet = {};

		for (var i = 0; i < arr.length; i++) {
 			window.__ID++;
			this.idSet[arr[i]] = window.__ID + '';
		}
	}

	handleSpecialChars(value) {
		value =  value.indexOf(',') > -1 ? value.replace(/\,/g, '\\\\,') : value;
		value =  value.indexOf(':') > -1 ? value.replace(/\:/g, '\\\\:') : value;
		value =  value.indexOf(':') > -1 ? value.replace(/\=/g, '\\\\=') : value;

		return value;
	}

	set(config) {
		var cmd = "set_view=ctx->findViewById:i_" + config.id + ";";
		var runInUI;

		if (config.toast) {
			cmd =  "set_TOAST=android.widget.Toast->makeText:ctx_ctx,cs_" +
        this.handleSpecialChars(config.text) + ",i_" +
        (config.duration == "short" ? 0 : 1) + ";get_TOAST->show";
		} else if (config && Object.keys(config).length) {
			delete config.id;

			config.root = "true";
			runInUI = parseParams("linearLayout", config, "get").runInUI;

			cmd += runInUI + ';';
		}

		if (cmd.indexOf("undefined") > -1) {
			config.id = id;
		}

		return cmd;
	}

	appendChild(id, jsx, index ,fn) {
		var proxyFnName;

		if (fn) {
			proxyFnName = 'F' + window.__FN_INDEX;
			window.__PROXY_FN[proxyFnName] = fn;
			window.__FN_INDEX++;
		}

		if (proxyFnName)
		Android.addViewToParent(id, JSON.stringify(jsx), index, proxyFnName);
		else
		Android.addViewToParent(id, JSON.stringify(jsx), index, null);
	}

	delete(id) {
		return "set_VIEW=ctx->findViewById:i_" + id + ";set_PARENT=get_VIEW->getParent;get_PARENT->removeView:get_VIEW;";
	}
}

module.exports = AndroidBaseView;

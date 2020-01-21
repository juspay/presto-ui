

var prestoUI

if (window.__OS == "WEB") {
	prestoUI = require("./index.web.js")
} else if (window.__OS == "IOS") {
	prestoUI = require("./index.ios.js")
} else {
	prestoUI = require("./index.android.js")
}

module.exports = prestoUI

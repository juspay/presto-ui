const meta = require('./screenMeta');
const init = require("presto-ui").init;

function main() {
	window.__duiShowScreen(null, {screen: "INIT_UI"})
}

window.pages = require('./screens').pages;
init(meta, { main });
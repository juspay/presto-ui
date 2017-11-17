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
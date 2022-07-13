const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const prodConfig = merge(common, {
  mode: "production"
});

function getPlatformOverride(platform) {
  return merge(prodConfig, {
    entry: ["./index.js"],
    output: {
      filename: `index.${platform.toLowerCase()}.js`
    },
    plugins: [
      new webpack.DefinePlugin({
        "window.__OS": JSON.stringify(platform)
      })
    ]
  });
}

module.exports = [
  getPlatformOverride("ANDROID"),
  getPlatformOverride("IOS"),
  getPlatformOverride("WEB")
];

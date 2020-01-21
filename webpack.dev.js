const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const devConfig = merge(common, {
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
});

function getPlatformOverride(platform) {
  return merge(devConfig, {
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

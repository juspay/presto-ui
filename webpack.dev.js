const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const devConfig = merge(common, {
  mode: "development",
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
});

function getPlatformOverride(platform) {
  return merge(devConfig, {
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

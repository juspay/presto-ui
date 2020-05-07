const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");

const prodConfig = merge(common, {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {}
      })
    ]
  }
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

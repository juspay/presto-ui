/*eslint-env node */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
  output: {
    filename: "index.web.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      'window.__OS': JSON.stringify("WEB"),
    }),
  ],
});

const path = require('path')
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const DashboardPlugin = require("webpack-dashboard/plugin");
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const packageJSON = require("./package.json");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isWebpackDevServer = process.argv.some(a => path.basename(a) === 'serve');
const isWatch = process.argv.includes('--watch');
const isAnalyse = process.argv.includes('--analyse');

__VERSION__ = packageJSON.version

var plugins = [
  new WebpackBar(),  
  new webpack.DefinePlugin({
    // Set this to false to create a build that contains DateRangePicker for web
    '__ignoreDateRangePickerWeb': JSON.stringify(true),
    __VERSION__: JSON.stringify(packageJSON.version)
  }),
];

if (isWatch || isWebpackDevServer) {
  plugins.push(
    new DashboardPlugin(),
    new WebpackBuildNotifierPlugin({
      title: "PrestoUI",
    })
  )
}

if (isAnalyse) {
  plugins.push(
    new BundleAnalyzerPlugin()
  )
}

let config = { 
  devtool: "source-map",
  output: {
    path: path.join(__dirname,"/lib"),
    filename: "index.js",
    libraryTarget: 'commonjs2',
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false
    },
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          }
        }
      },
    ]
  },
  plugins: plugins
}

module.exports = config
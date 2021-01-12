/* eslint-disable no-undef */
const path = require('path')
const common = require('./webpack.common')
const sass = require('sass')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Inject styles into DOM
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, // 2. Turns css into common js
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
              sourceMap: true
            },
          }, // 1. Turns sass into css
        ]
      }
    ]
  }
})

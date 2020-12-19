/* eslint-disable no-undef */
const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
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
          'style-loader', // 4. Inject styles into DOM
          'css-loader', // 3. Turns css into common js
          'resolve-url-loader', // 2 Resolving bg images path
          'sass-loader' // 1. Turns sass into css
        ]
      }
    ]
  }
})

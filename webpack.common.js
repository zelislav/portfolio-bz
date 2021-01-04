/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const path = require('path')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');


module.exports = {
  entry: {
    main: './src/index.js',
    // vendor: './src/vendor.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/, // any of them will match
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs'
          }
        }
      },
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          'svgo-loader'
        ]
      }
    ]
  },
  plugins: [
    new SpriteLoaderPlugin()
  ],
}

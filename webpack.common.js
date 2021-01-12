/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const path = require('path')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attributes: {
              list: [
                {
                  tag: 'img',
                  attribute: 'data-lazy',
                  type: 'src',
                },
                {
                  tag: 'img',
                  attribute: 'src',
                  type: 'src',
                },
              ]
            }
          }
        }
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

const path = require('path');
const baseConfig = require('./webpack.base');
require('dotenv').config();

const cwd = process.cwd();

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = baseConfig({
  output: {
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: process.env.CSS_MODULES_ENABLED ? {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              camelCase: true
            } : undefined
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    symlinks: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(cwd, 'src', 'index.html')
    })
  ]
});

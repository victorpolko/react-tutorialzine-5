'use strict';

import webpack from 'webpack';
import path from 'path';

module.exports = {
  entry: [
    './app/app.jsx',
    path.resolve(__dirname, 'app/static/manifest.js')
  ],

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel'
      },
      {
        test: /\.sass$/,
        include: path.join(__dirname, 'app'),
        loader: 'style!css?sourceMap?modules!sass?indentedSyntax=true'
      }
    ]
  },

  devtool: 'source-map'
}

'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

import webpack from 'webpack';
import path from 'path';

export default {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    path.resolve(__dirname, 'app/app.jsx'),
    path.resolve(__dirname, 'app/static/manifest.js')
  ],

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
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
        loader: 'style!css?sourceMap?modules!sass?indentedSyntax=true?sourceMap'
      },
      {
        test: /\.(png|jpg)$/,
        include: path.join(__dirname, 'app'),
        loader: 'url?limit=15000'
      }
    ]
  },

  modulesDirectories: [
    'node_modules'
  ],

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: JSON.stringify('ru')
    })
  ],

  devServer: {
    devtool: 'cheap-inline-module-source-map',
    progress: true,
    colors: true,
    contentBase: 'build',
    port: 3000,
    // hot: true
  }
};

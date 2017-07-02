"use strict"

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, './public');
const APP_DIR = path.resolve(__dirname, './src');

const extractSass = new ExtractTextPlugin({
  filename: 'css/styles.css',
  allChunks: true,
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  context: __dirname,

  entry: {
    bundle: './src/index.jsx',
    styles: './src/sass/styles.sass'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      'bower_components',
      'web_modules'
    ]
  },

  output: {
    path: BUILD_DIR,
    publicPath: 'public/',
    filename: 'js/[name].js',
    sourceMapFilename: '[file].map',
    library: '[name]'
  },

  devtool: '#cheap-module-source-map',

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader?name=[name].[ext]&publicPath=/public/&outputPath=fonts/'
      }
    ]
  },

  plugins: [
    extractSass
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
  }
};
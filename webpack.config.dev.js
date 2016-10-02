const path = require('path')
const webpack = require('webpack')
const WebpackHTML = require('html-webpack-plugin')

module.exports = function (root) {
	return {
	  entry: path.resolve(root, './app/index.js'),
	  output: {
	    path: path.resolve(root, 'dist'),
	    filename: 'bundle.js'
	  },
	  module: {
	    loaders: [{
	      test: /\.css$/,
	      loader: 'style!css?modules&sourceMap'
	    }, {
	      test: /\.(svg|eot|woff|woff2|ttf)$/,
	      loader: 'file'
	    }, {
	      test: /\.js$/,
	      loader: 'babel',
	      query: { presets: ['es2015'] },
	      exclude: /node_modules/
	    }]
	  },
	  plugins: [
	    new WebpackHTML({
	      title: 'Raio Webpackrizante'
	    })
	  ]
	}
}

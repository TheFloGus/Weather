const path = require('path')
const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const baseWebpackConfig = require('./webpack.base.config')

const prodWebpackConfig = merge(baseWebpackConfig, {
	// BUILD settings gonna be here
	mode: 'production',
	output: {
		path:path.resolve(__dirname, "./prod"),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
		  title: 'dev',
		  template: './src/index.html'
		}),
		new CopyPlugin({
			patterns: [
			  { from: "./src/components/img", to: './img' }
			],
		})
	  ]
  });

module.exports = prodWebpackConfig;
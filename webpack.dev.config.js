const path = require('path')
const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const baseWebpackConfig = require('./webpack.base.config')


const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	output: {
		path:path.resolve(__dirname, "./dev"),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, './dev'),
		compress: true,
		port: 9000,
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
		}),
	  ]
  });
  module.exports = devWebpackConfig;
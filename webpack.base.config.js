module.exports = {
	mode: "development",
	entry: ['./src/index.js'],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}, 
			{
				test: /\.(png|svg|jpg|gif|webp)$/,
				use: [
				    'file-loader',
					'webp-loader',
				]
			}
		]
	},

	
  };
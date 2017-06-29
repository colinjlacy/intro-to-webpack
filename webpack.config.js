module.exports = {
	entry: [
		'./src/mario-bros/index',
		'./src/donkey-kong/index',
		'./src/sega/index'
	],
	output: {
		filename: 'dist/main.js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}
		]
	}
};
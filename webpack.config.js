module.exports = {
	entry: [
		'./src/mario-bros/index.js',
		'./src/donkey-kong/index.js',
		'./src/sega/index.ts'
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
				loader: 'babel-loader'
			},
			{
				test: /\.ts$/,
				loader: 'ts-loader'
			}
		]
	}
};
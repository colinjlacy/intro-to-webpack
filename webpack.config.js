
const fs = require('fs');

// fetch each item in the `.src/` directory
const srcItems = fs.readdirSync('./src');

// set an empty array that will store all entry files
let entriesArray = [];

// loop over each item
srcItems.forEach(item => {

	// find directories within the `.src/` directory
	if(fs.lstatSync(`./src/${item}`).isDirectory()) {

		// find files in each directory
		const files = fs.readdirSync(`./src/${item}`);

		// find the index file in each directory
		const indexFile = files.find(file => /^index\.(ts|js)$/.test(file));

		// if one was found, add it to the entry files array
		if(indexFile) {
			entriesArray.push(`./src/${item}/${indexFile}`);
		}
	}
});

module.exports = {
	// use the entries array to list all of the entry points
	entry: entriesArray,
	output: {
		filename: 'dist/main.js'
	},
	resolve: {
		extensions: ['.ts', '.js', '']
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
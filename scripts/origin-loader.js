
module.exports = function(content) {

	// access the loaded file path from
	// the Webpack loader API
	const path = this.resourcePath;

	if(path) {

		// break the file path apart into segments
		const segments = path.split('/');

		// take the last and second-to-last segments
		const filename = segments[segments.length - 1];
		const directory = segments[segments.length - 2];

		// add a console log indicating the filename and directory to the file contents
		return `console.info('Loaded ${filename} from the ${directory} directory'); ${content}`;

	} else {

		// if no path was found (weird) return the content as-is
		return content;

	}

};
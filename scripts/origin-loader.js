
module.exports = function(content) {
	const path = this.resourcePath;

	if(path) {

		const segments = path.split('/');

		const filename = segments[segments.length - 1];
		const directory = segments[segments.length - 2];

		return `console.info('Loaded ${filename} from the ${directory} directory'); ${content}`;

	} else {

		return content;

	}

};
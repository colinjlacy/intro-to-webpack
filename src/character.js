
// our base class
export class Character {
	constructor(name) {
		this.name = name;
	}

	addCharacter() {
		const el = document.createElement('li');
		el.innerHTML = this.name;
		document.getElementById('characters').appendChild(el);
	}
}
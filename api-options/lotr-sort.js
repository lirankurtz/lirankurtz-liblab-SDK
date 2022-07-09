
export default class LotrSort {
	constructor() {
		this.field = null;
		this.op = null;
	}
	setField(field) {
		this.field = field;
		return this;
	}
	asc() {
		this.op = 'asc';
		return this;
	}
	desc() {
		this.op = 'desc';
		return this;
	}
	buildUriString() {
		if (!this.field || !this.op) {
			return '';
		}
		return `sort=${this.field}:${this.op}`;
	}
}

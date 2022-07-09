

const filterToStr = {
	match: (field, value) => `${field}=${value}`, // this is the same thing for regex and eq
	negateMatch: (field, value) => `${field}!=${value}`, // this is the same thing for regex and ne
	include: (field, values = []) => `${field}=${values.join(',')}`,
	exclude: (field, values = []) => `${field}!=${values.join(',')}`,
	exists: (field, value = true) => value ? `${field}` : `!${field}`,
	lt: (field, value) => `${field}<${value}`,
	le: (field, value) => `${field}<=${value}`,
	gt: (field, value) => `${field}>${value}`,
	ge: (field, value) => `${field}>=${value}`,
}

export default class LotrFilter {
	constructor() {
		this.filters = {}
	}
	match(field, value) {
		this._addFilter('match', field, value);
		return this;
	}
	negateMatch(field, value) {
		this._addFilter('negateMatch', field, value);
		return this;
	}
	include(field, values = []) {
		this._addFilter('include', field, values);
		return this;
	}
	exclude(field, values = []) {
		this._addFilter('exclude', field, values);
		return this;
	}
	exists(field, value = true) {
		this._addFilter('exists', field, value);
		return this;
	}
	matchRegex(field, value) {
		this._addFilter('matchRegex', field, value);
		return this;
	}
	negateRegex(field, value) {
		this._addFilter('negateRegex', field, value);
		return this;
	}
	eq (field, value) {
		this._addFilter('eq', field, value);
		return this;
	}
	ne (field, value) {
		this._addFilter('ne', field, value);
		return this;
	}
	lt (field, value) {
		this._addFilter('lt', field, value);
		return this;
	}
	le (field, value) {
		this._addFilter('le', field, value);
		return this;
	}
	gt (field, value) {
		this._addFilter('gt', field, value);
		return this;
	}
	ge (field, value) {
		this._addFilter('ge', field, value);
		return this;
	}

	buildUriString() {
		let filterStr = '';
		if (this.filters === {}) {
			return filterStr;
		}
		Object.keys(this.filters).forEach(filterKey => {
			let toStrFunction;
			if (filterKey === 'match' || filterKey === 'matchRegex' || filterKey === 'eq') {
				toStrFunction = filterToStr.match;
			} else if (filterKey === 'negateMatch' || filterKey === 'negateRegex' || filterKey === 'ne') {
				toStrFunction = filterToStr.negateMatch;
			} else {
				toStrFunction = filterToStr[filterKey];
			}
			const filtersOfType = this.filters[filterKey];
			filtersOfType.forEach(filter => {
				const filterAsString = toStrFunction(filter.field, filter.value);
				if (filterStr === '') {
					filterStr = `${filterAsString}`
				} else {
					filterStr = `${filterStr}&${filterAsString}`;
				}
			});
		});
		return filterStr;
	}

	_addFilter(type, field, value) {
		if (!this.filters[type]) {
			this.filters[type] = [];
		}
		this.filters[type].push({
			field,
			value
		})
	}
}

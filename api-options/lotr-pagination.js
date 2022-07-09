
export default class LotrPagination {
	constructor() {
		this.options = {};
	}
	limit(limitNum) {
		this.options.limit = limitNum;
		return this;
	}
	page(pageNum) {
		this.options.page = pageNum;
		return this;
	}
	offset(offsetNum) {
		this.options.offset = offsetNum;
		return this;
	}
	buildUriString() {
		let paginationStr = '';
		Object.keys(this.options).forEach(option => {
			if (paginationStr === '') {
				paginationStr = `${option}=${this.options[option]}`
			} else {
				paginationStr = `${paginationStr}&${option}=${this.options[option]}`
			}
		})
		return paginationStr;
	}
}

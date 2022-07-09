import { API_PREFIX } from "./consts.js";
import fetch from 'node-fetch';

export default class BaseAPI {
	constructor(path, token) {
		this.uri = `${API_PREFIX}/${path}`;
		this.token = token;
	}
	getAll(queryOptions) {
		const queryString = this._parseOptions(queryOptions);
		return fetch(`${this.uri}${queryString}`, {
			headers: {
				'Authorization': `Bearer ${this.token}`,
			},
		});
	}
	get(id) {
		return fetch(`${this.uri}/${id}`, {
			headers: {
				'Authorization': `Bearer ${this.token}`,
			},
		});
	}
	_parseOptions(queryOptions) {
		let queryString = '';
		Object.values(queryOptions).forEach(option => {
			const optionUriString = option.buildUriString();
			if (queryString === '') {
				queryString = `?${optionUriString}`;
			} else {
				queryString = `${queryString}&${optionUriString}`
			}
		})
		return queryString;
	}
}

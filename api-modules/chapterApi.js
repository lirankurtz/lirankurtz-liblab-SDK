import BaseAPI from "./baseApi.js";
import { Book } from "./lotr-apis.js";
import fetch from "node-fetch";

export default class ChapterAPI extends BaseAPI {
	constructor(config) {
		if (!config || !config.token) {
			throw new Error('Chapter API requires valid token');
		}
		super('chapter', config.token);
	}
	getAllForBook(bookId) {
		const bookApi = new Book({
			token: this.token
		});
		const queryString = this._parseOptions(queryOptions);
		return fetch(`${bookApi.uri}/${bookId}/chapter${queryString}`, {
			headers: {
				'Authorization': `Bearer ${this.token}`,
			},
		});
	}
}

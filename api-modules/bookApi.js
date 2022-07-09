import { API_PREFIX } from "./consts.js";
import fetch from 'node-fetch';
import BaseAPI from "./baseApi.js";

export default class BookAPI extends BaseAPI {
	constructor() {
		super(`/book`, null);
	}
	getChapters(bookId) {
		return fetch(`${this.uri}/${bookId}/chapter`)
	}
}

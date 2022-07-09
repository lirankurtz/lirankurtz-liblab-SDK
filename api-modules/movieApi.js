import BaseAPI from "./baseApi.js";

export default class MovieAPI extends BaseAPI {
	constructor(config) {
		if (!config || !config.token) {
			throw new Error('Movie API requires valid token');
		}
		super('movie', config.token);
	}
}

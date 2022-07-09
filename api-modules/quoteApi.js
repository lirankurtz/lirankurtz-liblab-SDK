import BaseAPI from "./baseApi.js";
import { Character, Movie } from "./lotr-apis.js";
import fetch from "node-fetch";

export default class QuoteAPI extends BaseAPI {
	constructor(config) {
		if (!config || !config.token) {
			throw new Error('Quote API requires valid token');
		}
		super('quote', config.token);
	}
	getAllForMovie(movieId, queryOptions) {
		const movieApi = new Movie({
			token: this.token
		});
		const queryString = this._parseOptions(queryOptions);
		return fetch(`${movieApi.uri}/${movieId}/quote${queryString}`, {
			headers: {
				'Authorization': `Bearer ${this.token}`,
			},
		});
	}
	getAllForCharacter(characterId, queryOptions) {
		const characterApi = new Character({
			token: this.token
		})
		const queryString = this._parseOptions(queryOptions);
		return fetch(`${characterApi.uri}/${characterId}/quote${queryString}`, {
			headers: {
				'Authorization': `Bearer ${this.token}`,
			},
		});
	}
}

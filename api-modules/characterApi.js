import BaseAPI from "./baseApi.js";

export default class CharacterAPI extends BaseAPI {
	constructor(config) {
		if (!config || !config.token) {
			throw new Error('Character API requires valid token');
		}
		super('character', config.token);
	}
}

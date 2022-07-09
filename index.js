
import { Book, Movie, Character, Quote, Chapter } from './api-modules/lotr-apis.js';
import { Filter, Sort, Pagination } from './api-options/lotr-api-options.js';

async function run() {
	const config = {
		token: 'vkpEJLcP2heQvcGTW-uP'
	}
	const bookApi = new Book();
	const movieApi = new Movie(config);
	const characterAPI = new Character(config);
	const quoteApi = new Quote(config);
	const chapterApi = new Chapter(config);
	const filter = new Filter().include('name', ['The Return Of The King', 'The Two Towers']);//.match('name', 'Frodo').negateRegex('name', '/foot/i');
	const sort = new Sort().setField('name').asc();
	const pagination = new Pagination().limit(20).offset(10);

	const options = {
		pagination,
		// sort,
		// filter
	}
	// const response = await bookApi.getAll(options);
	// const response = await bookApi.get('5cf5805fb53e011a64671582');
	// const response = await bookApi.getChapters('5cf5805fb53e011a64671582');
	// const response = await movieApi.getAll();
	// const response = await characterAPI.getAll();
	// const response = await characterAPI.get('5cd99d4bde30eff6ebccfc16');
	const response = await quoteApi.getAll(options);
	// const response = await quoteApi.get('5cd96e05de30eff6ebcce84c');
	// const response = await quoteApi.getAllForMovie('5cd95395de30eff6ebccde5d');
	// const response = await chapterApi.getAll();
	// const response = await chapterApi.get('6091b6d6d58360f988133bc3');
	// const response = await chapterApi.getAllForBook('5cf5805fb53e011a64671582');
	console.log(await response.json());
}


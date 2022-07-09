This is an SDK used for calling Lord Of The Rings API on https://the-one-api.dev/

Credit for boilerplate: https://github.com/sindresorhus/node-module-boilerplate


# Installtion

This package is available on npm
```
yarn add lirankurtz-liblab-sdk
```

Usage:

```
import { Book, Movie, Quote, Chapter, Character, Pagination, Sort, Filter } from 'lirankurtz-liblab-sdk';

async function run() {
    const config = {
        token: 'your-token-here'
    }
    const bookApi = new Book();
    const movieApi = new Movie(config);
    const characterAPI = new Character(config);
    const quoteApi = new Quote(config);
    const chapterApi = new Chapter(config);
    const filter = new Filter().include('name', ['The Return Of The King', 'The Two Towers']);//.match('name', 'Frodo').negateRegex('name', '/foot/i');
    const sort = new Sort().setField('name').asc();
    const pagination = new Pagination().limit(20).offset(10);

    const optionsPagination = {
        pagination,
    }
	const optionsFilterSort = {
        filter,
		sort,
    }
    const responseAllBooks = await bookApi.getAll(optionsFilterSort);
	console.log(await responseAllBooks.json());
	console.log("-------------------------------------------------------");
    const responseAllQuotes = await quoteApi.getAll(optionsPagination);
	console.log(await responseAllQuotes.json());

	/*
		More examples:
		const response = await quoteApi.get('5cd96e05de30eff6ebcce84c');
		const response = await quoteApi.getAllForMovie('5cd95395de30eff6ebccde5d');
		const response = await chapterApi.getAll();
		const response = await chapterApi.get('6091b6d6d58360f988133bc3');
		const response = await chapterApi.getAllForBook('5cf5805fb53e011a64671582');
		const response = await bookApi.get('5cf5805fb53e011a64671582');
		const response = await bookApi.getChapters('5cf5805fb53e011a64671582');
		const response = await movieApi.getAll();
		const response = await characterAPI.getAll();
		const response = await characterAPI.get('5cd99d4bde30eff6ebccfc16');
	*/
}

run();


/*
{
  docs: [
    { _id: '5cf58080b53e011a64671584', name: 'The Return Of The King' },
    { _id: '5cf58077b53e011a64671583', name: 'The Two Towers' }
  ],
  total: 2,
  limit: 1000,
  offset: 0,
  page: 1,
  pages: 1
}
-------------------------------------------------------
{
  docs: [
    {
      _id: '5cd96e05de30eff6ebcce7f3',
      dialog: 'Pull it in! Go on, go on, go on, pull it in!',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfe9e',
      id: '5cd96e05de30eff6ebcce7f3'
    },
    {
      _id: '5cd96e05de30eff6ebcce7f4',
      dialog: 'Oh Smeagol Ive got one! Ive got a fish Smeagol, Smeagol!',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfca7',
      id: '5cd96e05de30eff6ebcce7f4'
    },
    {
      _id: '5cd96e05de30eff6ebcce7f5',
      dialog: 'My precious.',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfe9e',
      id: '5cd96e05de30eff6ebcce7f5'
    },
    {
      _id: '5cd96e05de30eff6ebcce7f6',
      dialog: 'Gandalf?',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfc15',
      id: '5cd96e05de30eff6ebcce7f6'
    },
    {
      _id: '5cd96e05de30eff6ebcce7f7',
      dialog: 'Oooohhh!',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfc15',
      id: '5cd96e05de30eff6ebcce7f7'
    },
    {
      _id: '5cd96e05de30eff6ebcce7f8',
      dialog: 'Frodo!',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfc7c',
      id: '5cd96e05de30eff6ebcce7f8'
    },
    {
      _id: '5cd96e05de30eff6ebcce7f9',
      dialog: 'Aaaahh!',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfd23',
      id: '5cd96e05de30eff6ebcce7f9'
    },
    {
      _id: '5cd96e05de30eff6ebcce7fa',
      dialog: "and cool, so nice for feet' and we only wish to catch a fish, so juicy sweet.",
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfe9e',
      id: '5cd96e05de30eff6ebcce7fa'
    },
    {
      _id: '5cd96e05de30eff6ebcce7fb',
      dialog: 'Gimli!',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfc15',
      id: '5cd96e05de30eff6ebcce7fb'
    },
    {
      _id: '5cd96e05de30eff6ebcce7fc',
      dialog: 'My precious!',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfe9e',
      id: '5cd96e05de30eff6ebcce7fc'
    },
    {
      _id: '5cd96e05de30eff6ebcce7fd',
      dialog: 'Wake up! Wake up! Wake up sleepies! We must go, yes, we must go at once.',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfe9e',
      id: '5cd96e05de30eff6ebcce7fd'
    },
    {
      _id: '5cd96e05de30eff6ebcce7fe',
      dialog: "Haven't you had any sleep Mr Frodo?",
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfd0d',
      id: '5cd96e05de30eff6ebcce7fe'
    },
    {
      _id: '5cd96e05de30eff6ebcce7ff',
      dialog: 'And we forgot the taste of bread, the sound of trees and the softness of the wind. We even forgot our own name.',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfe9e',
      id: '5cd96e05de30eff6ebcce7ff'
    },
    {
      _id: '5cd96e05de30eff6ebcce800',
      dialog: "Gollum' Gollum' Gollum', and we wept precious. We wept to be so alone.",
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfe9e',
      id: '5cd96e05de30eff6ebcce800'
    },
    {
      _id: '5cd96e05de30eff6ebcce801',
      dialog: "Not before Mr Frodo's had something to eat.",
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfd0d',
      id: '5cd96e05de30eff6ebcce801'
    },
    {
      _id: '5cd96e05de30eff6ebcce802',
      dialog: 'No time to lose silly!',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfe9e',
      id: '5cd96e05de30eff6ebcce802'
    },
    {
      _id: '5cd96e05de30eff6ebcce803',
      dialog: 'Come on! Must go! No time!',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfe9e',
      id: '5cd96e05de30eff6ebcce803'
    },
    {
      _id: '5cd96e05de30eff6ebcce804',
      dialog: "And I've gone and had too much. It must be getting late.",
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfd0d',
      id: '5cd96e05de30eff6ebcce804'
    },
    {
      _id: '5cd96e05de30eff6ebcce805',
      dialog: "No, it isn't. It isn't midday yet. The days are growing darker.",
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfc15',
      id: '5cd96e05de30eff6ebcce805'
    },
    {
      _id: '5cd96e05de30eff6ebcce806',
      dialog: 'Here.',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfd0d',
      id: '5cd96e05de30eff6ebcce806'
    }
  ],
  total: 2390,
  limit: 20,
  offset: 10
}
*/

```

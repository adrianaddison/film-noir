var app = require('../App/appController');

var SearchCollection = require('./SearchCollection');
var MovieModel = require('../Movie/MovieModel');
var PersonModel = require('../Person/PersonModel');
var TVModel = require('../TV/TVModel');

var MovieListView = require('../Movie/MovieListView');
var PersonListView = require('../Person/PersonListView');
var TVListView = require('../TV/TVListView');

var SearchResultsView = require('./SearchResultsView');

module.exports = {

	search: function (query) {
		var fetchOptions = {
			data: {
				query: query
			}
		};
		// Takes a query
		// 
		// Creates three search collections with the
		// different categories (movie, person, tv)
		// and fetches them.
		var movieResults = new SearchCollection([], {
			model: MovieModel,
			category: 'movie'
		});
		var personResults = new SearchCollection([], {
			model: PersonModel,
			category: 'person'
		});
		var tvResults = new SearchCollection([], {
			model: TVModel,
			category: 'tv'
		});

		movieResults.fetch(fetchOptions);
		personResults.fetch(fetchOptions);
		tvResults.fetch(fetchOptions);
		
		// Passes search collections to corresponding
		// SearchResultsViews
		
		var movieSearchResultsView = new SearchResultsView({
			collection: movieResults,
			title: 'Movies',
			listView: MovieListView
		});
		
		var personSearchResultsView = new SearchResultsView({
			collection: personResults,
			title: 'People',
			listView: PersonListView
		});

		var tvSearchResultsView = new SearchResultsView({
			collection: tvResults,
			title: 'TV shows',
			listView: TVListView
		});

		// And shows each SearchResultsView
		app.showPage(
			movieSearchResultsView,
			personSearchResultsView,
			tvSearchResultsView
		);
	},

	voiceSearch: function (title, actor, year, genre, tv) {
		var criteriaCount = 0;
		var finishedRequests = 0;

		function done () {
			finishedRequests++;
			if (criteriaCount === finishedRequests) {
				// Do the /discovery request with the IDs
				// once all of the initial requests have
				// finished.
			}
		}

		if (title) {
			criteriaCount++;
			if (tv) {
				// Make a request to get tv id
			} else {
				// Make a request to get movie id
			}
		}

		if (actor) {
			criteriaCount++;
			// Make a request to get actor id
		}

		if (genre) {
			criteriaCount++;
			// Make a request to get genre id
		}

		if (year) {

		}

		console.log('Title: ' + title);
		console.log('Actors: ' + actor);
		console.log('Years: ' + year);
		console.log('Genres: ' + genre);
		console.log('TV: ' + tv);
	}
};
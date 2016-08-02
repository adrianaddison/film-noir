var $ = require('jquery');

var api = require('../API/api');
var app = require('../App/appController');

var SearchCollection = require('./SearchCollection');
var DiscoverCollection = require('./DiscoverCollection');
var movieResources = require('../Movie/movieResources');

var MovieModel = movieResources.MovieModel;
var PersonModel = movieResources.PersonModel;
var TVModel = movieResources.TVModel;

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

	voiceSearch: function (title, actor, year, genre) {
		var criteriaCount = 0;
		var finishedRequests = 0;

		console.log(title, actor, year, genre);

		var movieResults = new DiscoverCollection([], {
			model: MovieModel,
			category: 'movie'
		});

		var movieSearchResultsView = new SearchResultsView({
			collection: movieResults,
			title: 'Movies',
			listView: MovieListView
		});

		var actorId;
		var movieId;
		var genreId;

		function done () {
			finishedRequests++;
			if (criteriaCount === finishedRequests) {
				movieResults.fetch({
					data: {
						with_cast: actorId,
						with_genres: genreId,
						year: year
					}
				});
			}
		}

		if (title) {
			criteriaCount++;
			$.ajax({
				url: api.url('search/movie'),
				data: {
					query: title
				},
				success: function (response) {
					movieId = response.results[0].id;
					done();
				}
			});
		}

		if (actor) {
			criteriaCount++;
			$.ajax({
				url: api.url('search/person'),
				data: {
					query: actor
				},
				success: function (response) {
					actorId = response.results[0].id;
					done();
				}
			});
			// Make a request to get actor id
		}

		if (genre) {
			criteriaCount++;
			$.ajax({
				url: api.url('genre/movie/list'),
				data: {
					query: actor
				},
				success: function (response) {
					var genreObj = response.genres.find(function (obj) {
						return obj.name.toLowerCase() === genre.toLowerCase();
					});
					genreId = genreObj.id;
					done();
				}
			});
			// Make a request to get genre id
		}

		app.showPage(movieSearchResultsView);
	}
};
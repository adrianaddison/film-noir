var app = require('../App/appController');

module.exports = {

	search: function (query) {
		// Takes a query
		// 
		// Creates three search collections with the
		// different categories (movie, person, tv)
		// and fetches them.
		var movieResults = new SearchCollection () {

		},

		var personResults = new SearchCollection () {

		},

		var tvResults = new SearchCollection () {

		},
		
		// Passes search collections to corresponding
		// SearchResultsViews
		
		var movieSearchResultsView = new SearchResultsView({
				collection: movieResults,
				title: 'Movies',
				childView: MovieListItemView
		});
		
		var personSearchResultsView = new SearchResultsView({
				collection: personResults,
				title: 'People',
				childView: PersonListItemView
		});

		var movieSearchResultsView = new SearchResultsView({
				collection: tvResults,
				title: 'TV shows',
				childView: TVListItemView
		});
		// And shows each SearchResultsView
		 app.show(MovieListItemView, PersonListItemView, TVListItemView);;
	}
};
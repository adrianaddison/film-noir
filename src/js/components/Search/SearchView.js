// Search View should include an input where
// user types in and searches for movies

var Backbone = require('backbone');

var MovieSearchCollection = require('../Movie/MovieSearchCollection');
var MovieListView = require('../Movie/MovieListView');

var SearchView = Backbone.View.extend({

	className: 'search',

	events: {
		'click .search-button': 'handleSearchClick',
		'keyup .search-for': 'handleSearchKeyup '
	},

	initialize: function () {
		this.collection = new MovieCollection();
	},

	render: function () {
		this.$el.html(this.template());
	},

	template: function () {
		return `
			<div class="list-region"></div>
			<input class="search-for">
			<button class="search-button">Search</button>		
		`;
	},

	handleSearchClick: function () {
		this.collection.fetch({


		})
	}
});







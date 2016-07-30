var Backbone = require('backbone');

var SearchView = require('../Search/SearchView');

var HeaderView = Backbone.View.extend({

	tagName: 'header',

	className: 'header',

	initialize: function () {
		this.searchView = new SearchView();
	},

	render: function () {
		this.$el.html(this.template());
		this.searchView.render();
		this.$('.search-region').append(this.searchView.$el);
	},

	template: function () {
		return `
			<img class="logo" src="#">
			<p>Search for film, movies, and TV in style</p>
			<div class="search-region"></div>
		`;
	}
});

module.exports = HeaderView;
var $ = require('jquery');
var Backbone = require('backbone');

var MovieListView = require('../Movie/MovieListView');

var PersonDetailView = Backbone.View.extend({
	
	className: 'person-detail',

	initialize: function (options) {
		this.movieListView = new MovieListView({
			collection: this.model.movieCredits
		});
		this.onSelect = options.onSelect;
		this.render = this.render.bind(this);
	},

	render: function () {
		this.$el.html(this.template({
			name: this.model.get('name'),
			biography: this.model.get('biography'),
			profile: this.model.getProfile()
		}));
		this.movieListView.render();
		this.$('.movie-credits-region').append(this.movieListView.$el);
	},

	template: function (data) {
		return `
			<div class=""></div>
			<h2 class="person-detal-name">${data.name}</h2>
			<img src="${data.profile}">
			<p>Biography: ${data.biography}</p>
			<div class="movie-credits-region"></div>
		`;
	}

});

module.exports = PersonDetailView;
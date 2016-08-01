var $ = require('jquery');
var Backbone = require('backbone');

var MovieListView = require('../Movie/MovieListView');
var TVListView = require('../TV/TVListView');

var PersonDetailView = Backbone.View.extend({
	
	className: 'person-detail',

	initialize: function (options) {
		this.movieListView = new MovieListView({
			collection: this.model.movieCredits
		});
		this.tvListView = new TVListView({
			collection: this.model.tvCredits
		});	
		this.onSelect = options.onSelect;
		this.render = this.render.bind(this);
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function () {
		this.$el.html(this.template({
			name: this.model.get('name'),
			biography: this.model.get('biography'),
			profile: this.model.getProfile(),
		}));
		this.movieListView.render();
		this.$('.movie-credits-region').append(this.movieListView.$el);
		this.tvListView.render();
		this.$('.tv-credits-region').append(this.tvListView.$el);
	},

	template: function (data) {
		return `
			<img class="actor-img"src="${data.profile}">
			<h2 class="person-detail-name">${data.name}</h2>
			<p>Biography: ${data.biography}</p>
			<h2>Movie Credits</h2>
			<div class="movie-credits-region"></div>
			<h2>TV Credits</h2>
			<div class="tv-credits-region"></div>
		`;
	}
});

module.exports = PersonDetailView;
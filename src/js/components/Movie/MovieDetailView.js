var $ = require('jquery');
var Backbone = require('backbone');

var PersonListView = require('../Person/PersonListView');

var MovieDetailView = Backbone.View.extend({
	
	className: 'movie-detail',

	events: {
		'click .back': 'onBackClick'
	},

	initialize: function (options) {
		this.personListView = new PersonListView({
			collection: this.model.credits
		});
		this.onSelect = options.onSelect;
		this.render = this.render.bind(this);
	},

	render: function () {
		var _this = this.model
		this.$el.html(this.template({
			poster: this.model.getMoviePoster(),
			title: this.model.get('title'),
			overview: this.model.get('overview'),
			release_date: this.model.get('release_date')
		}));
		this.personListView.render();
		this.$('.credits-region').append(this.personListView.$el);
	},

	template: function (data) {
		return `
			<div class="back" style="background-image: url(img/back-icon.png)"></div>
			<img class="movie-poster" src="${data.poster}">
			<p>Overview: ${data.overview}</p>
			<span>Release Date: ${data.release_date}</span>
			<div class="credits-region">
				<h2>Cast</2>
			</div>
		`;
	},

	onBackClick: function () {
		// Backbone.history.navigate('', { trigger: true });
		window.history.back();
	}
});

module.exports = MovieDetailView;


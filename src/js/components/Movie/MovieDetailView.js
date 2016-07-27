var $ = require('jquery');
var Backbone = require('backbone');

var PersonListView = require('../Person/PersonListView');

var MovieDetailView = Backbone.View.extend({
	
	className: 'movie-detail',

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
			title: this.model.get('title'),
			overview: this.model.get('overview'),
			release_date: this.model.get('release_date')
		}));
		this.personListView.render();
		this.$('.credits-region').append(this.personListView.$el);
	},

	template: function (data) {
		return `
			<div class=""></div>
			<h2 class="movie-detal-title">${data.title}</h2>
			<p>Overview: ${data.overview}</p>
			<span>Release Date: ${data.release_date}</span>
			<div class="credits-region"></div>
		`;
	}

});

module.exports = MovieDetailView;


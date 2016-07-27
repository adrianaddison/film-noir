var $ = require('jquery');
var Backbone = require('backbone');

var TVListView = require('../TV/TVListView');

var TVDetailView = Backbone.View.extend({
	
	className: 'tv-detail',

	initialize: function (options) {
		this.tvListView = new TVListView({
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
		this.tvListView.render();
		this.$('.credits-region').append(this.tvListView.$el);
	},

	template: function (data) {
		return `
			<div class=""></div>
			<h2 class="tv-detal-title">${data.title}</h2>
			<p>Overview: ${data.overview}</p>
			<span>Release Date: ${data.release_date}</span>
			<div class="credits-region"></div>
		`;
	}

});

module.exports = TVDetailView;
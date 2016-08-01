var $ = require('jquery');
var Backbone = require('backbone');

var PersonListView = require('../Person/PersonListView');

var TVDetailView = Backbone.View.extend({
	
	className: 'tv-detail',

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
			name: this.model.get('name'),
			overview: this.model.get('overview'),
			first_air_date: this.model.get('first_air_date')
		}));
		this.personListView.render();
		this.$('.credits-region').append(this.personListView.$el);
	},

	template: function (data) {
		return `
			<div class=""></div>
			<h2 class="tv-detail-name">${data.name}</h2>
			<p>Overview: ${data.overview}</p>
			<span>First Air Date: ${data.first_air_date}</span>
			<div class="credits-region"></div>
		`;
	}

});

module.exports = TVDetailView;
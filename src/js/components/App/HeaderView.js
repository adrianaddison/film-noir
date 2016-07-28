var Backbone = require('backbone');

var HeaderView = Backbone.View.extend({

	className: 'header-region',

	initialize: function () {
		this.model.on('sync', this.render.bind(this));
	},

	render: function () {
		this.$el.html(this.template());
	},

	template: function () {
		return `
			<header>
				<img class="logo" src="#">
				<p>Search for film, movies, and TV in style</p>
			</header>
		`;
	}
});

module.exports = HeaderView;
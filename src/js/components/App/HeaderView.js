var Backbone = require('backbone');

var SearchView = require('../Search/SearchView');

var HeaderView = Backbone.View.extend({

	tagName: 'header',

	className: 'header',

	events: {
		'click .logo-small, .logo-large': 'goHome'
	},

	initialize: function () {
		this.largeMode = true;
		this.listenTo(Backbone.history, 'route', this.update.bind(this));
	},

	render: function () {
		this.searchView = new SearchView();

		if (this.largeMode) {
			this.$el.html(this.template());
			this.$el.removeClass('header-small');
		} else {
			this.$el.html(this.templateSmall());
			this.$el.addClass('header-small');
		}
		
		this.searchView.render();
		this.$('.search-region').append(this.searchView.$el);
	},

	template: function () {
		return `
			<img class="logo-large" src="img/logo-large.png">
			<h1>Discover your favorite actors, movies, and TV shows</h1>
			<div class="search-region"></div>
		`;
	},

	templateSmall: function () {
		return `
			<div class="header-top">
				<div class="header-left">
					<img class="logo-small" src="img/logo-small.png">
				</div>
				<div class="header-right"></div>
			</div>
			<div class="search-region"></div>
		`;
	},

	update: function () {
		var route = Backbone.history.getFragment();

		if (route === 'home' || route === '') {
			this.largeMode = true;
		} else {
			this.largeMode = false;
		}

		this.render();
	},

	goHome: function () {
		Backbone.history.navigate('', { trigger: true });
	}
});

module.exports = HeaderView;
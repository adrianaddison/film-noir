// Search View should include an input where
// user types in and searches for movies

var Backbone = require('backbone');

module.exports = Backbone.View.extend({

	className: 'search',

	events: {
		'click .search-button': 'handleSearchClick',
		'keyup .search-for': 'handleSearchKeyup'
	},

	render: function () {
		this.$el.html(this.template());
	},

	template: function () {
		return `
			<input class="search-for">
			<button class="search-button">Search</button>		
		`;
	},

	handleSearchClick: function () {
		var query = this.$('.search-for').val();
		Backbone.history.navigate('search/' + query, { trigger: true });
		this.$('.search-for').val('');
	},

	handleSearchKeyup: function () {

	},

	open: function (onItemClick) {
		if (this.listView) {
			this.listView.remove();
		}

		this.$el.addClass('is-visible');

		this.listView = new MovieListView({
			collection: this.collection,
			onItemClick: onItemClick
		});

		this.collection.fetch();

		this.listView.render();

		this.$('.list-region').append(this.listView.$el);
	}
});






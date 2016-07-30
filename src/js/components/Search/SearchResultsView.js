var Backbone = require('backbone');

var SearchResultsView = Backbone.View.extend({

	className: 'search-results',

	initialize: function (options) {
		// Get the title from the options
		this.title = options.title;
		// Get the listView (constructor) from the options
		this.listViewConstructor = options.listView;
		// Create a new instance of that list view and pass it
		// the results collection
		this.listView = new this.listViewConstructor({
			collection: this.collection
		});
	},

	render: function () {
		var data = {
			title: this.title
		};
		this.$el.html(this.template(data));
		this.listView.render();
		this.$('.list-region').append(this.listView.$el);
	},

	template: function (data) {
		return `
			<h3>${data.title}</h3>
			<div class="list-region"></div>
		`;
	}

});

module.exports = SearchResultsView;
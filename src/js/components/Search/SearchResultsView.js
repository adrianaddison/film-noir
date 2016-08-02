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

		this.listenTo(this.collection, 'update', this.render.bind(this));
	},

	render: function () {
		var data = {
			title: this.title,
			count: this.collection.length
		};
		this.$el.html(this.template(data));
		this.listView.render();
		this.$('.list-region').append(this.listView.$el);
	},

	template: function (data) {
		return `
			<h3>${data.title} (${data.count})</h3>
			<div class="list-region"></div>
		`;
	}

});

module.exports = SearchResultsView;
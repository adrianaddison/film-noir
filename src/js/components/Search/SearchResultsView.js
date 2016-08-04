var Backbone = require('backbone');

var SearchResultsView = Backbone.View.extend({

	className: 'search-results',

	events: {
		'click .back': 'onBackClick'
	},

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

		this.listenTo(this.collection, 'update', this.renderCount.bind(this));
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

	renderCount: function () {
		this.$('.count').text(`(${this.collection.length})`);
	},

	template: function (data) {
		return `
			<div class="back" style="background-image: url(img/back-button.png)"></div>
			<h3>${data.title} <span class="count"></span></h3>
			<div class="list-region"></div>
		`;
	},

	onBackClick: function () {
		window.history.back();
	}
});

module.exports = SearchResultsView;
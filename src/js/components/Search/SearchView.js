// Search View should include an input where
// user types in and searches for movies

var Backbone = require('backbone');

var annyang = require('annyang');

var commands = require('./commands');

SpeechKITT.annyang(annyang);

annyang.addCommands(commands);
annyang.debug();

SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat-concrete.css');

SpeechKITT.setInstructionsText('Example command...');
SpeechKITT.setSampleCommands(['Brad Pitt in 2010']);
SpeechKITT.vroom();

module.exports = Backbone.View.extend({

	className: 'search',

	events: {
		'click .search-icon': 'handleSearchClick',
	},

	render: function () {
		this.$el.html(this.template());
	},

	template: function () {
		return `
			<input class="search-box">
			<img class="search-icon" src="img/search.png">		
		`;
	},

	handleSearchClick: function () {
		var query = this.$('.search-box').val();
		Backbone.history.navigate('search/' + query, { trigger: true });
		this.$('.search-box').val('');
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






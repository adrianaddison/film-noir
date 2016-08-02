var Backbone = require('backbone');

// (:titles),(:actors),(:years),(:genres)

function getDiscoverRoute (title, actor, year, genre) {
	title = title || '';
	actor = actor || '';
	year = year || '';
	genre = genre || '';
	return `search/voice/t-${title},a-${actor},y-${year},g-${genre}`;
}

module.exports = {

	':genre movies in :year': function (genre, year) {
		Backbone.history.navigate(
			getDiscoverRoute(null, null, year, genre),
			{ trigger: true }
		);
	},

	':first :last in :year': function (first, last, year) {
		var actor = first + ' ' + last;
		Backbone.history.navigate(
			getDiscoverRoute(null, actor, year, null),
			{ trigger: true }
		);
	},

	':genre movies with :first :last in :year': function (genre, first, last, year) {
		var actor = first + ' ' + last;
		Backbone.history.navigate(
			getDiscoverRoute(null, actor, year, genre),
			{ trigger: true }
		);
	},

	':genre movies called with :first :last in :year': function (genre, title, first, last, year) {
		var actor = first + ' ' + last;
		Backbone.history.navigate(
			getDiscoverRoute(null, actor, year, genre),
			{ trigger: true }
		);
	}

};
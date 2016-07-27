var Backbone = require('backbone');

var api = require('../API/api');

var SearchCollection = Backbone.Collection.extend({

	model: null, // Need to specify on instatiation

	initialize: function (models, options) {
		if (!options.model) {
			throw new Error('Must pass a model constructor to SearchCollection');
		}
		// The SearchCollection instance should be given
		// a category to use for searches.
		this.category = options.category || '';
	},

	url: function () {
		return api.url('search/' + this.category);
	},

	parse: function (response) {
		return response.results;
	}

});

module.exports = SearchCollection;
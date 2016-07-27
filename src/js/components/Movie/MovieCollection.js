var Backbone = require('backbone');

var api = require('../API/api');

var MovieModel = require('./MovieModel');

var MovieCollection = Backbone.Collection.extend({

	model: MovieModel,

	url: api.url('movie'),

	parse: function (response) {
		return response.results;
	}
});

module.exports = MovieCollection;
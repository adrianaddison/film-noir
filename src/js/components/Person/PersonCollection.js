var Backbone = require('backbone');

var api = require('../API/api');

var PersonModel = require('./PersonModel');

var PersonCollection = Backbone.Collection.extend({

	model: PersonModel,

	url: api.url('person'),

	parse: function (response) {
		return response.results;
	}
});

module.exports = PersonCollection;
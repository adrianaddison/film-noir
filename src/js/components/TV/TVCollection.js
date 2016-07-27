var Backbone = require('backbone');

var api = require('../API/api');

var TVModel = require('./TVModel');

var TVCollection = Backbone.Collection.extend({

	model: TVModel,

	url: api.url('movie'),

	parse: function (response) {
		return response.results;
	}
});

module.exports = TVCollection;
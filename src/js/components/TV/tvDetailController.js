var app = require('../App/appController');

var TVModel = require('./TVModel');

var PersonDetailView = require('./TVDetailView');

module.exports = {

	showTV: function (id) {
		// Creates a new model with the id specified
		var tvModel = new TVModel(id);
		// Fetches it
		tvModel.fetch();
		// Shows the detail view of that model	
	}
	Backbone.trigger('app:show', view);
};
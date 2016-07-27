var app = require('../App/appController');

var MovieModel = require('./MovieModel');

var MovieDetailView = require('./MovieDetailView');

module.exports = {

	showMovie: function (id) {
		// Creates a new model with the id specified
		var movieModel = new MovieModel(id);
		// Fetches it
		movieModel.fetch();
		// Shows the detail view of that model	
	}
	Backbone.trigger('app:show', view);
};
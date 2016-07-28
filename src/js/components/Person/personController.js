var app = require('../App/appController');

var PersonModel = require('./PersonModel');

var PersonDetailView = require('./PersonDetailView');

module.exports = {

	showPersonDetails: function (id) {
		var person = new PersonModel({ id: id });
		
		person.fetch({
			success: function () {
				var personDetail = new PersonDetailView({
					model: person
				});

				app.showPage(personDetail);
			}
		});
	}

	// showPerson: function (id) {
	// 	// Creates a new model with the id specified
	// 	var personModel = new PersonModel(id);
	// 	// Fetches it
	// 	personModel.fetch();
	// 	// Shows the detail view of that model	
	// }
	// Backbone.trigger('app:show', view);
};
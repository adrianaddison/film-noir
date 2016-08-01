var app = require('../App/appController');

var movieResources = require('../Movie/movieResources');

var PersonDetailView = require('./PersonDetailView');

module.exports = {

	showPersonDetails: function (id) {
		var person = new movieResources.PersonModel({ id: id });
		
		person.fetch({
			success: function () {
				var personDetail = new PersonDetailView({
					model: person
				});

				app.showPage(personDetail);
			}
		});
	}
};
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
};
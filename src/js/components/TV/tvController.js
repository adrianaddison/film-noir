var app = require('../App/appController');

var movieResources = require('../Movie/movieResources');

var TVDetailView = require('./TVDetailView');

module.exports = {

	showTVDetails: function (id) {
		var tv = new movieResources.TVModel({ id: id });
		
		tv.fetch({
			success: function () {
				var tvDetail = new TVDetailView({
					model: tv
				});

				app.showPage(tvDetail);
			}
		});
	}

};
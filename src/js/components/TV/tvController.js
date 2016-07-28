var app = require('../App/appController');

var TVModel = require('./TVModel');

var TVDetailView = require('./TVDetailView');

module.exports = {

	showTVDetails: function (id) {
		var tv = new TVModel({ id: id });
		
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
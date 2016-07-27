var Backbone = require('backbone');
var DashboardView = require('./DashboardView');
var MovieCollection = require('../Movie/MovieCollection');

var api = require('../API/api');
var app = require('../App/appController');
var auth = require('../Auth/authController');

module.exports = {

    showDashboard: function () {
		var movieNowPlaying = new MovieCollection();

		movieNowPlaying.fetch({
			url: api.url('movie/now_playing')
		});

        var dashboardView = new DashboardView({
            user: auth.userModel,
            movieNowPlaying: movieNowPlaying
        });
        app.showPage(dashboardView);
    }

};
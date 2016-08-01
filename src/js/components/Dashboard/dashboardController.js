var Backbone = require('backbone');
var DashboardView = require('./DashboardView');
// var MovieCollection = require('../Movie/MovieCollection');
var movieResources = require('../Movie/movieResources');

var api = require('../API/api');
var app = require('../App/appController');
var auth = require('../Auth/authController');

module.exports = {

    showDashboard: function () {
		var movieNowPlaying = new movieResources.MovieCollection();

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
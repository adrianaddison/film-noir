var movieResources = require('./movieResources');

var MovieDetailView = require('./MovieDetailView');

var app = require('../App/appController');

module.exports = {

	showMovieDetails: function (id) {
		var movie = new movieResources.MovieModel({ id: id });
		
		movie.fetch({
			success: function () {
				var movieDetail = new MovieDetailView({
					model: movie
				});

				app.showPage(movieDetail);
			}
		});
	}

};
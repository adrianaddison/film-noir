var Backbone = require('backbone');

var api = require('../API/api');

var MovieCollection = require('../Movie/MovieCollection');

var PersonModel = Backbone.Model.extend({
	
	urlRoot: api.url('person'),

	initialize: function () {
		var _this = this;
		this.movieCredits = new MovieCollection(this.model.get('movie_credits'));
        this.on('sync', function () {
            // If the model is fetched, reset the models inside of the movie credits collection.
            _this.movieCredits.reset(_this.model.get('movie_credits'));
        });
	},

	getProfile: function () {
		return api.imageUrl(this.get('profile_path'));
	},

	fetch: function (options) {
		options = Object.assign({
			data: {
				append_to_response: 'movie_credits'
			}
		}, options);

		Backbone.Model.fetch.call(this, options);
	}

});


module.exports = PersonModel;
var Backbone = require('backbone');

var api = require('../API/api');

var MovieModel = require('../Movie/MovieModel');

var MovieCreditsCollection = Backbone.Collection.extend({
    model: MovieModel
});

var PersonModel = Backbone.Model.extend({
	
	urlRoot: api.url('person'),

    url: function () {
        return api.url('person/' + this.get('id'));
    },

	initialize: function () {
		var _this = this;
		this.movieCredits = new MovieCreditsCollection(this.get('movie_credits,tv_credits'));
        this.on('sync', function () {
            // If the model is fetched, reset the models inside of the movie credits collection.
            _this.movieCredits.reset(_this.get('movie_credits,tv_credits'));
        });
	},

	getProfile: function () {
		return api.imageUrl(this.get('profile_path'));
	},

	fetch: function (options) {
		options = Object.assign({
			data: {
				append_to_response: 'movie_credits,tv_credits'
			}
		}, options);

		Backbone.Model.prototype.fetch.call(this, options);
	}

});


module.exports = PersonModel;
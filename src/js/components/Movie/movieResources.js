var Backbone = require('backbone');

var api = require('../API/api');

var MovieModel = Backbone.Model.extend({

    initialize: function () {
        var _this = this;
        this.credits = new PersonCollection();
        this.on('sync', function () {
            // If the model is fetched, reset the models inside of the credits collection.
            _this.credits.reset(_this.get('credits').cast);
        });
    },

    urlRoot: api.url('movie'),

    url: function () {
        return api.url('movie/' + this.get('id'));
    },

    getMoviePoster: function () {
        var poster = this.get('poster_path');
        var image = api.imageUrl(poster);

        return image;
    },

    // Override the default fetch method to always
    // append the credits to the response.
    fetch: function (options) {
        options = Object.assign({
            data: {
                append_to_response: 'credits'
            }
        }, options);

        Backbone.Model.prototype.fetch.call(this, options);
    }

});

var PersonModel = Backbone.Model.extend({
	
	urlRoot: api.url('person'),

    url: function () {
        return api.url('person/' + this.get('id'));
    },

	initialize: function () {
		var _this = this;

		this.movieCredits = new MovieCollection();
		this.tvCredits = new TVCollection();

        this.on('sync', function () {
            // If the model is fetched, reset the models inside of the movie credits collection.
            _this.movieCredits.reset(_this.get('movie_credits').cast);
            _this.tvCredits.reset(_this.get('tv_credits').cast);
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

var TVModel = Backbone.Model.extend({

    initialize: function () {
        var _this = this;
        this.credits = new PersonCollection();
        this.on('sync', function () {
            // If the model is fetched, reset the models inside of the credits collection.
            _this.credits.reset(_this.get('credits').cast);
        });
    },

    urlRoot: api.url('tv'),

    url: function () {
        return api.url('tv/' + this.get('id'));
    },

    getMoviePoster: function () {
        var poster = this.get('poster_path');
        var image = api.imageUrl(poster);

        return image;
    },

    // Override the default fetch method to always
    // append the credits to the response.
    fetch: function (options) {
        options = Object.assign({
            data: {
                append_to_response: 'credits'
            }
        }, options);

        Backbone.Model.prototype.fetch.call(this, options);
    }

});

var MovieCollection = Backbone.Collection.extend({

	model: MovieModel,

	url: api.url('movie'),

	parse: function (response) {
		return response.results;
	}
});

var PersonCollection = Backbone.Collection.extend({

	model: PersonModel,

	url: api.url('person'),

	parse: function (response) {
		return response.results;
	}

});

var TVCollection = Backbone.Collection.extend({

	model: TVModel,

	url: api.url('tv'),

	parse: function (response) {
		return response.results;
	}

});

module.exports = {
	MovieModel: MovieModel,
	MovieCollection: MovieCollection,
	PersonModel: PersonModel,
	PersonCollection: PersonCollection,
    TVModel: TVModel,
    TVCollection: TVCollection
};
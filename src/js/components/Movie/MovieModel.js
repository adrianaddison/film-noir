var Backbone = require('backbone');

var api = require('../API/api');

var PersonCollection = require('../Person/PersonCollection');

var MovieModel = Backbone.Model.extend({

    initialize: function () {
        var _this = this;
        this.credits = new PersonCollection(this.model.get('credits'));
        this.on('sync', function () {
            // If the model is fetched, reset the models inside of the credits collection.
            _this.credits.reset(_this.model.get('credits'));
        });
    },

    urlRoot: function () {
        return api.url('movie');
    },

	parse: function (response) {
        // If the model belongs to a collection
        if (this.collection) {
            // The response has already been parsed
            return response;
        }
        return response.results[0];
    },

    getMoviePoster: function () {
        var poster = this.get('poster_path');
        var image = api.imageUrl(poster);

        return image;
    },

    fetch: function (options) {
        options = Object.assign({
            data: {
                append_to_response: 'credits'
            }
        }, options);

        Backbone.Model.fetch.call(this, options);
    }

});


module.exports = MovieModel;
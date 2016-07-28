var Backbone = require('backbone');

var api = require('../API/api');

var PersonModel = require('../Person/PersonModel');

var PersonCreditsCollection = Backbone.Collection.extend({
    model: PersonModel
});

var TVModel = Backbone.Model.extend({

    initialize: function () {
        var _this = this;
        this.credits = new PersonCreditsCollection();
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


module.exports = TVModel;
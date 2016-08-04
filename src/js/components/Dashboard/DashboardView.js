var Backbone = require('backbone');

var MovieNowPlayingView = require('../Movie/MovieNowPlayingView');

var MovieDetailView = require('../Movie/MovieDetailView');

module.exports = Backbone.View.extend({

    initialize: function (options) {
        // Grab the MovieCollection
        this.movieNowPlaying = options.movieNowPlaying;
        // Create a new MovieNowPlayingView with the collection
        this.movieNowPlayingView = new MovieNowPlayingView({
            collection: this.movieNowPlaying
        });

        this.movieNowPlayingView.render();

        this.user = options.user;
    },

    render: function () {
        this.$el.html(this.template(this.user.toJSON()));
        this.$('.now-playing-region').append(this.movieNowPlayingView.$el);
    },

    template: function (data) {
        return `
            <h3 class="theatre">In Theaters Now</h3>
            <div class="now-playing-region"></div>
        `;
    }
});

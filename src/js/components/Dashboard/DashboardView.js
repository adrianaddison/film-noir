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

        // this.movieDetail = options.movieDetail;
        // this.movieDetailView = new MovieDetailView({
        //     collection: this.movieDetail
        // });
        this.user = options.user;
        this.listenTo(this.user, 'change', this.render);
    },

    render: function () {
        this.$el.html(this.template(this.user.toJSON()));
        this.movieNowPlayingView.render();
        this.$('.now-playing-region').append(this.movieNowPlayingView.$el);
        // this.movieDetailView.render();
        // this.$('.movie-detail').append(this.movieDetailView.$el);
    },

    template: function (data) {
        return `
            <h3>Dashboard</h3>
            Welcome, ${data.username}.
            <a href="#/logout">Logout</a>
            <div class="now-playing-region"></div>
        `;
    }

});
var $ = require('jquery');
var Backbone = require('backbone');

var auth = require('../Auth/authController');
var dashboard = require('../Dashboard/dashboardController');
var search = require('../Search/searchController');
var movie = require('../Movie/movieController');
var person = require('../Person/personController');
var tv = require('../TV/tvController');

module.exports = Backbone.Router.extend({

    routes: {
        '': 'home',
        'login': 'login',
        'logout': 'logout',
        'register': 'register',
        'home': 'home',
        'search/voice/(:titles),(:actors),(:years),(:genres),(:tv)': 'voiceSearch',
        'search/:query': 'search', // e.g. search/tarzan
        // e.g.
        //  #/search/tarzan,,70,true
        //  #/search/,zachary quinto,2013,sci fi
        'movie/:id': 'movieDetails',
        'tv/:id': 'tvDetails',
        'person/:id': 'personDetails'
    },

    initialize: function() {
        this.on('route', function() {
            $('html, body').animate({ scrollTop: 0 });
        });
    },

    login: function () {
        auth.showLogin();
    },

    logout: function () {
        auth.logout();
    },

    register: function () {
        auth.showRegister();
    },

    home: function () {
        auth.check();
        dashboard.showDashboard();
    },

    movieDetails: function (id) {
        auth.check();
        movie.showMovieDetails(id);
    },

    personDetails: function (id) {
        auth.check();
        person.showPersonDetails(id);
    },

    tvDetails: function (id) {
        auth.check();
        tv.showTVDetails(id);
    },

    search: function (query) {
        auth.check();
        search.search(query);
    },

    voiceSearch: function (title, actors, years, genres, tv) {
        auth.check();
        search.voiceSearch(title, actors, years, genres, tv);
    }
});
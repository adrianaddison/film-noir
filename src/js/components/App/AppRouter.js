var Backbone = require('backbone');

var auth = require('../Auth/authController');
var dashboard = require('../Dashboard/dashboardController');
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
        // 'search/:query': 'search',
        'movie/:id': 'movieDetails',
        // 'tv/:id': 'tvDetails',
        'person/:id': 'personDetails'
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
    }
});
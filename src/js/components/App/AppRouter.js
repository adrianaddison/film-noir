var Backbone = require('backbone');

var auth = require('../Auth/authController');
var dashboard = require('../Dashboard/dashboardController');

module.exports = Backbone.Router.extend({

    routes: {
        '': 'home',
        'login': 'login',
        'logout': 'logout',
        'register': 'register',
        'home': 'home',
        // 'search/:query': 'search',
        // 'movie/:id': 'movieDetails',
        // 'tv/:id': 'tvDetails',
        // 'person/:id': 'personDetails'
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
    }

});
var Backbone = require('backbone');
var DashboardView = require('./DashboardView');

var app = require('../App/appController');
var auth = require('../Auth/authController');

module.exports = {

    showDashboard: function () {
        var dashboardView = new DashboardView({
            user: auth.userModel
        });
        app.showPage(dashboardView);
    }

};
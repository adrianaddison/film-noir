var Backbone = require('backbone');

var auth = require('./authController');

module.exports = Backbone.View.extend({

    className: 'login',

    events: {
        'click .register-button': 'onRegisterClick'
    },

    render: function () {
        this.$el.html(this.template());
    },

    template: function () {
        return `
            <h3>Register</h3>
            <label for="username">Username</label>
            <input id="username" type="text" name="username">
            <label for="password">Password</label>
            <input id="password" type="text" name="password">
            <button class="register-button">Register</button>
        `;
    },

    onRegisterClick: function () {
        this.trigger('submit', {
            username: this.$('#username').val(),
            password: this.$('#password').val()
        });
    }

});
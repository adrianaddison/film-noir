var Backbone = require('backbone');

var HeaderView = require('./HeaderView');

module.exports = Backbone.View.extend({

    tagName: 'body',

    className: 'app',

    initialize: function () {
        this.pageViews = [];
        this.headerView = new HeaderView();
    },

    render: function () {
        this.$el.html(this.template());
        this.headerView.render();
        this.$('.header-region').append(this.headerView.$el);
    },

    template: function () {
        return `
            <div class="header-region"></div>
            <main class="page-region"></main>
        `;
    },

    show: function () {
        var _this = this;
        var views = Array.prototype.slice.call(arguments);

        this.pageViews.forEach(function (view) {
            view.remove();
        });
        
        this.pageViews = views;

        this.pageViews.forEach(function (view) {
            view.render();
            _this.$('.page-region').append(view.el);
        });
    }

});
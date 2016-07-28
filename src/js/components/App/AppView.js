var Backbone = require('backbone');

module.exports = Backbone.View.extend({

    tagName: 'main',

    className: 'app',

    initialize: function () {
        this.pageViews = [];
    },

    render: function () {
        this.$el.html(this.template());
    },

    template: function () {
        return `
            <div class="header-region"></div>
            <div class="search-region"></div>
            <div class="page-region"></div>
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
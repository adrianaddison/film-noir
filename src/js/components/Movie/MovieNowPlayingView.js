var $ = require('jquery');
var Backbone = require('backbone');

var MovieListItemView = require('./MovieListItemView');

var MovieNowPlayingView = Backbone.View.extend({

	className: 'now-playing',

	initialize: function () {
		this.collection.on('update', this.render.bind(this));
	},

	render: function () {
		var _this = this;

		if (this.childViews) {
			this.childViews.forEach(function (view) {
				view.remove();
			});
		}

		this.childViews = this.collection.map(function (model) {
			return new MovieListItemView({
				model: model
			});
		});

		this.childViews.forEach(function (view) {
			view.render();
			_this.$el.append(view.$el);
		});
	}

});

module.exports = MovieNowPlayingView;


var Backbone = require('backbone');

var MovieListItemView = require('./MovieListItemView');

var MovieListView = Backbone.View.extend({

	tagName: 'ul',

	className: 'movie-list',

	initialize: function () {
		this.collection.on('update', this.render.bind(this));
	},

	render: function () {
		var _this = this;

		this.childViews = this.collection.map(function (model) {
			var view = new MovieListItemView({ model: model });
			return view;
		});

		this.childViews.forEach(function (view) {
			view.render();
			_this.$el.append(view.$el);
		});
	}

});

module.exports = MovieListView;
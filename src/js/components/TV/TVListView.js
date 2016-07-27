var Backbone = require('backbone');

var TVListItemView = require('./TVListItemView');

var TVListView = Backbone.View.extend({

	tagName: 'ul',

	className: 'now-airing-list',

	initialize: function () {
		this.collection.on('update', this.render.bind(this));
	},

	render: function () {
		var _this = this;

		this.childViews = this.collection.map(function (model) {
			var view = new TVListItemView({ model: model });
			return view;
		});

		this.childViews.forEach(function (view) {
			view.render();
			_this.$el.append(view.$el);
		});
	}

});

module.exports = TVListView;
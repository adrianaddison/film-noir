var Backbone = require('backbone');

var PersonListItemView = require('./PersonListItemView');

var PersonListView = Backbone.View.extend({

	tagName: 'ul',

	className: 'person-list',

	initialize: function () {
		this.collection.on('reset update', this.render.bind(this));
	},

	render: function () {
		var _this = this;

		this.childViews = this.collection.map(function (model) {
			var view = new PersonListItemView({ model: model });
			return view;
		});

		this.childViews.forEach(function (view) {
			view.render();
			_this.$el.append(view.$el);
		});
   }

});

module.exports = PersonListView;
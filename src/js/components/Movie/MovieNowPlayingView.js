var $ = require('jquery');
var Backbone = require('backbone');

var MovieNowPlayingView = Backbone.View.extend({

	className: 'now_playing',

	initialize: function () {
		this.collection.on('update', this.render.bind(this));
	},

	render: function () {
		var _this = this;

		var images = this.collection.map(function (model) {
			return $('<img>', {
				src: model.getMoviePoster()
			});
		});

		images.forEach(function (image) {
			_this.$el.append(image);
		});
	},

	template: function (data) {

	}

});

module.exports = MovieNowPlayingView;


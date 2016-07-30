var Backbone = require('backbone');

var MovieListItemView = Backbone.View.extend({

	className: 'movie-item',

	tagName: 'li',

	events: {
		'click': 'handleClick'
	}, 

	initialize: function () {
		this.model.on('sync', this.render.bind(this));
	},

	render: function () {
		this.$el.html(this.template({
			title: this.model.get('title'),
			poster: this.model.getMoviePoster()
		}));
	},

	template: function (data) {
		return `
			<img class="movie-poster" src="${data.poster}">
		`;
	},

	handleClick: function () {
		Backbone.history.navigate('movie/' + this.model.get('id'), { trigger: true });
	}
});

module.exports = MovieListItemView;

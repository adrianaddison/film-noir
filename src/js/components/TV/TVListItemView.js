var Backbone = require('backbone');

var TVListItemView = Backbone.View.extend({

	className: 'tv-item',

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
			<img class="tv-poster" src="${data.poster}">
			<div>${data.title}</div>
		`;
	},

	handleClick: function () {
		Backbone.history.navigate('tv/' + this.model.get('id'), { trigger: true });
	}
});

module.exports = TVListItemView;

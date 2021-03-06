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
			name: this.model.get('name'),
			poster: this.model.getMoviePoster()
		}));
	},

	template: function (data) {
		return `
			<div class="tv-poster" style="background-image: url(${data.poster})"></div>
		`;
	},

	handleClick: function () {
		Backbone.history.navigate('tv/' + this.model.get('id'), { trigger: true });
	}
});

module.exports = TVListItemView;

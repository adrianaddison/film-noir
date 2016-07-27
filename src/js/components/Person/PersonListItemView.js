var Backbone = require('backbone');

var PersonListItemView = Backbone.View.extend({

	className: 'person-item',

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
			profile: this.model.getProfile()
		}));
	},

	template: function (data) {
		return `
			<img class="person-profile" src="${data.profile}">
			<div>${data.title}</div>
		`;
	},

	handleClick: function () {
		Backbone.history.navigate('person/' + this.model.get('id'), { trigger: true });
	}
});

module.exports = PersonListItemView;
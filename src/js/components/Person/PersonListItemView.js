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
			name: this.model.get('name'),
			profile: this.model.getProfile()
		}));
	},

	template: function (data) {
		return `
			<div class="person-profile" style="background-image: url(${data.profile})"></div>
			<div>${data.name}</div>
		`;
	},

	handleClick: function () {
		Backbone.history.navigate('person/' + this.model.get('id'), { trigger: true });
	}
});

module.exports = PersonListItemView;
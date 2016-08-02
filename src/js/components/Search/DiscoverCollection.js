var SearchCollection = require('./SearchCollection');

var api = require('../API/api');

var DiscoverCollection = SearchCollection.extend({
	url: function () {
		return api.url('discover/' + this.category);
	}
});

module.exports = DiscoverCollection;
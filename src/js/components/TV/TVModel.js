var Backbone = require('backbone');

var api = require('../API/api');

var TVModel = Backbone.Model.extend({
	
	urlRoot: function () {
        return api.url('tv');
    }

});


module.exports = TVModel;
var AppView = require('./AppView');

module.exports = {

    appView: new AppView(),

    showPage: function () {
    	// We use apply here to call the show function
    	// with any arguments passed to appController.showPage
        this.appView.show.apply(this.appView, arguments);
    }

};
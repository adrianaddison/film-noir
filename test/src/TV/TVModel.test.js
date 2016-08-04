var api = require('../../../src/js/components/API/api');

var TVModel = require('../../../src/js/components/Movie/movieResources/').TVModel;

// describe() describes a suite of test acases (aka unit test)
describe('PersonModel', function () {

	// ensure each test case uses a new model
	beforeEach(function () {
		this.model = new TVModel();
	});

	afterEach(function () {
		this.model = null;
	});

	it ('The value of the `urlRoot` property is api.url(`tv`).', function () {
		expect(this.model.urlRoot).to.equal(api.url('tv'));
	});

});
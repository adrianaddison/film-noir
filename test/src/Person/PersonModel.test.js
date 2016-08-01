var MovieModel = require('../../../src/js/components/Movie/movieResources/').PersonModel;

// describe() describes a suite of test acases (aka unit test)
describe('PersonModel', function () {

	// ensure each test case uses a new model
	beforeEach(function () {
		this.model = new PersonModel();
	});

	afterEach(function () {
		this.model = null;
	});

});
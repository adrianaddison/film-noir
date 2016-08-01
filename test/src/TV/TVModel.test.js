var MovieModel = require('../../../src/js/components/Movie/movieResources/').TVModel;

// describe() describes a suite of test acases (aka unit test)
describe('TVModel', function () {

	// ensure each test case uses a new model
	beforeEach(function () {
		this.model = new TVModel();
	});

	afterEach(function () {
		this.model = null;
	});
});
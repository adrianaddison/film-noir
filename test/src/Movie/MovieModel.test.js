var api = require('../../../src/js/components/API/api');

var MovieModel = require('../../../src/js/components/Movie/movieResources/').MovieModel;

// describe() describes a suite of test acases (aka unit test)
describe('MovieModel', function () {

	// ensure each test case uses a new model
	beforeEach(function () {
		this.model = new MovieModel();
	});

	afterEach(function () {
		this.model = null;
	});

	it ('The value of the `urlRoot` property is api.url(`movie`).', function () {
		expect(this.model.urlRoot).to.equal(api.url('movie'));
	});

});
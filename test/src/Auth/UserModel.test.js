var api = require('../../../src/js/components/API/api');

var UserModel = require('../../../src/js/components/Auth/UserModel/').UserModel;

// describe() describes a suite of test acases (aka unit test)
describe('UserModel', function () {

	// ensure each test case uses a new model
	beforeEach(function () {
		this.model = new UserModel();
	});

	afterEach(function () {
		this.model = null;
	});

	it ('The value of the `urlRoot` property is api.url(`/users`).', function () {
		expect(this.model.urlRoot).to.equal(api.url('/users'));
	});

	it ('Has the `username` attribute default to an empty string', function () {
		expect(this.model.get('username')).to.equal('');
	});

});

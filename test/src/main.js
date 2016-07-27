// Use the expect version of chai assertions - http://chaijs.com/api/bdd
window.expect = chai.expect;

mocha.setup('bdd');

require('./Movie/MovieModel.test');

require('./Person/PersonModel.test');

require('./TV/TVModel.test');

mocha.run();
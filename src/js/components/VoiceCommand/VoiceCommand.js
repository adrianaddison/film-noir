if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {

	":actor in": function (actor) {

	},

	"filmed in :year": function (year) {

	},

	"directed by :director": function (director) {

	},

	":actor in :year": function (actor, year) {

	}
	
};

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
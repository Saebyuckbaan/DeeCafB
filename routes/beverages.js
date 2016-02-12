var beverages = require('../beverages.json');

exports.beverages = function(req, res) {
	// get a random palette from the top ones
	//var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	//res.send('Your random palette is called: ' + randomPalette['title']);
	console.log( "Beverages ");
	//res.json( beverages );
	var beverageObj = beverages["beverages"];
	res.render( "beverages", {
		beverageObj: beverageObj
	} );
}

exports.beverage_types = function(req, res) {
	// get a random palette from the top ones
	//var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	//res.send('Your random palette is called: ' + randomPalette['title']);
	console.log( "Beverage types ");
	//res.json( beverages );
		res.render( "type", {} );
}

exports.beverage_sizes = function(req, res) {
	// get a random palette from the top ones
	//var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	//res.send('Your random palette is called: ' + randomPalette['title']);
	console.log( "Beverage Sizes ");
	//res.json( beverages );
		res.render( "sizes", {} );
}

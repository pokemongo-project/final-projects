
var request = require('request');

var populatingDatabase = function() {
	request('../data/pokemon.json', function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body); 
});
};



populatingDatabase();
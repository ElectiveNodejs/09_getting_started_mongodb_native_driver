// Require MongoDB and the MongoClient
var MongoClient = require('mongodb').MongoClient;

// Create a variable with the url for your mongodb database
var url = 'mongodb://localhost:27017/IMDB';
// Use the connect function from the MongoClient

MongoClient.connect(url, function(err, db){
	console.log('connected');

	db.close();
});

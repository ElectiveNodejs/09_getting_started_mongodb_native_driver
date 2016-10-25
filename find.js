var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/IMDB';

MongoClient.connect(url, function(err, db){
	
	var movies = db.collection('movies');

	movies.find().toArray(function(err, data){
		
		setTimeout(console.log(data), 3000);
		
	});

	db.close();

});
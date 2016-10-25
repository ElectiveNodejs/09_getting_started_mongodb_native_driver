var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/IMDB';

MongoClient.connect(url, function(err, db){
	
	var movies = db.collection('movies');

	movies.insert({"title" : "x-men III", "release_year" : 2006}, function(err, obj){		

		if (err) {
			console.log(err);
		}
		else {
			console.log('object is inserted' + obj);
		}
		
	});

	db.close();
});
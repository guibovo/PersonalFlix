var Movie = require('./movie.js');
var fs = require('fs');

var readFiles = function(callback) {
    var folderPath = "C:/Users/guilherme.fernandez/Desktop/Videos/";
    fs.exists(folderPath, function(exists) {
        if (!exists)
            throw "O diretório " + folderPath + " não existe";

        fs.readdir(folderPath, function(err, folders) {
            if (err) throw err;

            var movies = [];

			var calls = folders.length;

            for (var folder in folders) {
                var currentFolder = folders[folder];
                
				(function(currentFolder, movies) {
	                fs.readdir(folderPath + currentFolder, function(err, files){
	                	calls--;	
						var movie = new Movie();
	                	movie.Name = currentFolder;

	                    for(var file in files){
	                        var currentFile = files[file];
	                        if(currentFile.indexOf(".jpg") > -1){
	                            movie.Poster = folderPath + currentFile;	
	                        }	
	                        else{
	                            movie.Movie = folderPath + currentFile;
	                        }
	                    };

	                    movies.push(movie);

	                    if (calls == 0) {
	                    	callback(movies);
	                    }
	                });
                })(currentFolder, movies);
            }
        });
    });
}

module.exports = readFiles;
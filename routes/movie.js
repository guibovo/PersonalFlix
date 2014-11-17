module.exports = function(app) {
	var movie = app.controllers.movie;
	app.get('/api/movies', movie.index);
	app.get('/api/movie/:id', movie.show);
}
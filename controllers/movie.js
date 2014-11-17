module.exports = function(app) {
	var videos = ['[VIDEO_1]','[VIDEO_2]'];
	var MovieController = {
		index: function(req,res) {
			res.json(videos);
		},
		show: function(req,res) {
			var id = req.params.id;
			res.json(videos[id]);
		},
		test: function(req,res) {
			res.render('test', {
				hello: 'Hello world!'
			});
		}
	};
	return MovieController;
}
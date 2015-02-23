var Grant = require('./grantModel.js');

module.exports = {
	params: function(req, res, next, id) {
		// do a db query on grant model and find grant with id,
		// if find it, attatch to req.? and then call next with no args
		// if not find it, then, snd error? with next(Error);
	},

	getOne: function(req, res, next) {
		// res.json(req.?)
	},
	get: function(req, res, next) {
		// GrantFind()
	}
};
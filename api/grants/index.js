var express = require('express');
var controller = require('./controller');
var router = express.Router();

// router.param('id', controller.params);

// router.route('/')
// 	.all(function(req, res, next){
// 		next();
// 	})
// 	.get(controller.get)
// 	.post(function(res, req, next){
// 		next(new Error('Not implemented yet'));
// 	})
// 	.delete(function(res, req, next){
// 		next(new Error('Not implemented yet'));
// 	})
// 	.put(function(res, req, next){
// 		next(new Error('Not implemented yet'));
// 	});


// router.route('/:id')
// 	.get(controller.getOne)
// 	.put(function(res, req, next){
// 		next(new Error('Not implemented yet'));
// 	})
// 	.post(function(res, req, next){
// 		next(new Error('Not implemented yet'));
// 	})
// 	.delete(function(res, req, next){
// 		next(new Error('Not implemented yet'));
// 	});

module.exports = router;
// module.exports = function(app){
//   //create app.use per new routes
//   //will find index.js by default
 
//   app.use('/api', require('./api'));

// };
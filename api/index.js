var express = require('express');
var router = express.Router();

router.use('/api', require('./api'));
router.use('/grants', require('./grants'));
// router.use('/integrations', require('./integrations'));
// router.use('/settings', require('./settings'));
// router.use('/widgets', require('./widgets'));


module.exports = router;
// module.exports = function(app){
//   //create app.use per new routes
//   //will find index.js by default
 
//   app.use('/api', require('./api'));

// };
  var express = require('express');
  var router = express.Router();
  router.use(passport.initialize());

  // Passport Configuration
  router.use('/google', require('./google'));
  router.use('/twitter', require('./twitter'));
  router.use('/mailchimp', require('./mailchimp'));

  module.exports = router;

  
var express = require('express');
var router = express.Router();
var API = require('./twitterController.js');
var mongoose = require('mongoose');

router.get('/twitterFollowers', API.twitterFollowers);
router.get('/twitterMentions', API.twitterMentions);
router.get('/twitterRetweets', API.twitterRetweets);

module.exports = router;


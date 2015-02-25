var express = require('express');
var router = express.Router();
var API = require('./twitterHandler.js');
var mongoose = require('mongoose');

router.get('/twittercall', API.twitter);

module.exports = router;


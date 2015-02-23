var express = require('express');
var router = express.Router();
var APIcall = require('./twitterHandler.js');
var mongoose = require('mongoose');

router.get('/apicall', APIcall.twitterCall);

module.exports = router;


var express = require('express');
var router = express.Router();
var API = require('./mailchimpHandler.js');
var mongoose = require('mongoose');

router.post('/mailchimpcall', API.mailchimp);

module.exports = router;
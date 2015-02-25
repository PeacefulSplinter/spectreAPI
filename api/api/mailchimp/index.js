var express = require('express');
var API = require('./mailchimpHandler.js');
var mongoose = require('mongoose');
var request = require('request');
var router = express.Router();


router.post('/mailchimpcall', API.mailchimp);

module.exports = router;
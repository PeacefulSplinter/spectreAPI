process.env.NODE_ENV = process.env.NODE_ENV || 'development';

global._ = require('lodash');
global.$config = require('./config/main');

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// app.use(express.static('client/app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(cookieParser());

mongoose.connect($config.mongo.url);
app.use('/api/v1', /*decode(),*/ require('./api'));


app.listen($config.port, function(){
  console.log("Listening on " + $config.port);
});

module.exports = app;

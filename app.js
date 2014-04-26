/**
 * Module dependencies.
 */


var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var connect = require('connect');
var config = require('./config');

// app and express configuration
app.set('port', config.app.dropit.port);
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.use(connect.favicon());
app.use(connect.logger({format: config.logging.express_format}));
app.use(connect.json());
app.use(connect.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//mongoDB configuration
var mongoose = require('mongoose');
mongoose.connect(config.db.url, function(err) {
	if (err) {
		console.log("error in connecting db " + err.message);
		throw err;
	}
	console.log("Database connection ready !");
});

//routes configuration
require('./routes')(app);

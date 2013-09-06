'use strict';

var path = require('path');
var express = require('express');
var router = require('./router');
var database = require('./database');

// Create express application
// var app = module.exports = express();
var app = express();

process.env.NODE_ENV = 'development';

app.configure(function() {
    // Set server port
    app.set('port', (process.env.PORT || 3000));
    // Serves application favicon
    app.use(express.favicon());
    // Gzip all responses
    app.use(express.compress());
    // Make RESTful requests accessible
    app.use(express.methodOverride());
    // Parse request (json, urlencode, multipart)
    app.use(express.bodyParser());
    // Mount routes
    app.use(app.router);
});

// Configure development environment
app.configure('development', function() {
    // app.set('db uri', 'mongodb://localhost/todo-dev');
    app.use(express.logger('dev'));
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

// Configure development environment
app.configure('test', function() {
    // app.set('db uri', 'mongodb://localhost/todo-test');
    app.use(express.logger('dev'));
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

// Configure production environment
app.configure('production', function() {
    // app.set('db uri', 'mongodb://localhost/todo-prod');
    app.use(express.logger());
    app.use(express.errorHandler());
});

// Set application routes
router.init.call(app);

// Start application server
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

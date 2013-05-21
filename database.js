'use strict';

var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/workout-log-dev');

var database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', function () {
    console.log('Database connection reached.');
});

module.exports = database;

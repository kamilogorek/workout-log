'use strict';

mongoose = require('mongoose');

# Connect to database
mongoose.connect('mongodb://localhost/workout-log-dev');

database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', ->
    console.log('Database connection reached.');
);

module.exports = database;

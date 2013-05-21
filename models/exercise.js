'use strict';

var mongoose = require('mongoose');

var exerciseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    modified: {
        type: Date,
        'default': Date.now
    }
});

module.exports = mongoose.model('Exercise', exerciseSchema);

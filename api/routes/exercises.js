'use strict';

/*
 * Exercises Routes
 *
 * body = 'Hello World';
 * res.setHeader('Content-Type', 'text/plain');
 * res.setHeader('Content-Length', body.length);
 * res.end(body);
 */

var Exercise = require('../models/exercise');

module.exports = {
    postItem: function(req, res) {
        var exercise = new Exercise({
            name: req.body.name,
            description: req.body.description
        });

        exercise.save(function(err, exercise) {
            if (err) {
                console.log('error');
                // TODO: Refactor custom validation messages
                res.send(err.message + '. Field: ' + err.errors.name.path + '. Validation: ' + err.errors.name.type);
                return;
            }

            res.send({
                requestType: req.method,
                body: exercise
            });
        });
    },
    getCollection: function(req, res) {
        Exercise.find(function(err, exercises) {
            res.send({
                requestType: req.method,
                data: exercises
            });
        });
    },
    getItem: function(req, res) {
        Exercise.findById(req.params.id, function(err, exercise) {
            res.send({
                requestType: req.method,
                id: req.params.id,
                data: exercise
            });
        });
    },
    putItem: function(req, res) {
        Exercise.findById(req.params.id, function(err, exercise) {
            exercise.name = req.body.name;
            exercise.description = req.body.description;

            exercise.save(function(err, exercise) {
                if (err) {
                    console.log('error');
                    // TODO: Refactor custom validation messages
                    res.send(err.message + '. Field: ' + err.errors.name.path + '. Validation: ' + err.errors.name.type);
                    return;
                }

                res.send({
                    requestType: req.method,
                    id: req.params.id,
                    body: exercise
                });
            });
        });
    },
    removeItem: function(req, res) {
        Exercise.findById(req.params.id, function(err, exercise) {
            exercise.remove(function(err) {
                if (err) {
                    console.log('error');
                    res.send(err.message);
                    return;
                }

                res.send({
                    requestType: req.method,
                    id: req.params.id
                });
            });
        });
    }
};

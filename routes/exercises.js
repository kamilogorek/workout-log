'use strict';

/**
*
* Exercises Routes
*
* var body = 'Hello World';
* res.setHeader('Content-Type', 'text/plain');
* res.setHeader('Content-Length', body.length);
* res.end(body);
*/

var Exercise = require('../models/exercise');

module.exports = {
    postItem: function (req, res) {
        var exercise = new Exercise({
            name: req.body.name,
            description: req.body.description
        });

        exercise.save(function (err, exercise) {
            if (err) {
                console.log('error');
                res.send(err);
                return;
            }

            res.send({
                requestType: req.method,
                body: exercise
            });
        });
    },

    getCollection: function (req, res) {
        Exercise.find(function (err, exercises) {
            var response = {
                requestType: req.method,
                data: exercises
            };

            res.send(response);
        });
    },

    getItem: function (req, res) {
        Exercise.findById(req.params.id, function (err, exercise) {
            var response = {
                requestType: req.method,
                id: req.params.id,
                data: exercise
            };

            res.send(response);
        });
    },

    putItem: function (req, res) {
        Exercise.findById(req.params.id, function (err, exercise) {
            exercise.name = req.body.name;
            exercise.description = req.body.description;

            exercise.save(function (err, exercise) {
                if (err) {
                    console.log('error');
                    res.send(err);
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

    removeItem: function (req, res) {
        var response = {
            requestType: req.method,
            id: req.params.id
        };

        res.send(response);
    }
};

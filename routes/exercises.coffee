'use strict';

###
Exercises Routes

body = 'Hello World';
res.setHeader('Content-Type', 'text/plain');
res.setHeader('Content-Length', body.length);
res.end(body);
###

Exercise = require('../models/exercise');

module.exports = {
    postItem: (req, res) ->
        exercise = new Exercise({
            name: req.body.name,
            description: req.body.description
        });

        exercise.save((err, exercise) ->
            if err
                console.log('error');
                res.send(err);
                return;

            res.send({
                requestType: req.method,
                body: exercise
            });
        );

    getCollection: (req, res) ->
        Exercise.find((err, exercises) ->
            response = {
                requestType: req.method,
                data: exercises
            };

            res.send(response);
        );

    getItem: (req, res) ->
        Exercise.findById(req.params.id, (err, exercise) ->
            response = {
                requestType: req.method,
                id: req.params.id,
                data: exercise
            };

            res.send(response);
        );

    putItem: (req, res) ->
        Exercise.findById(req.params.id, (err, exercise) ->
            exercise.name = req.body.name;
            exercise.description = req.body.description;

            exercise.save((err, exercise) ->
                if err
                    console.log('error');
                    res.send(err);
                    return;

                res.send({
                    requestType: req.method,
                    id: req.params.id,
                    body: exercise
                });
            );
        );

    removeItem: (req, res) ->
        response = {
            requestType: req.method,
            id: req.params.id
        };

        res.send(response);
};

'use strict';

var routes = {
    exercises: require('./routes/exercises')
};

function init() {
    /*jshint validthis:true */

    this.get('/', function(req, res) {
        res.send('Hello world!');
    });
    this.post('/api/exercises', routes.exercises.postItem);
    this.get('/api/exercises', routes.exercises.getCollection);
    this.get('/api/exercises/:id', routes.exercises.getItem);
    this.put('/api/exercises/:id', routes.exercises.putItem);
    this.delete('/api/exercises/:id', routes.exercises.removeItem);
}

exports.init = init;

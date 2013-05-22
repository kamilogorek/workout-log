'use strict';

routes = {
    static: require('./routes/static'),
    exercises: require('./routes/exercises')
};

init = ->
    this.get('/', routes.static.index);
    this.get('/partials/:name', routes.static.partials);
    this.post('/exercises', routes.exercises.postItem);
    this.get('/exercises', routes.exercises.getCollection);
    this.get('/exercises/:id', routes.exercises.getItem);
    this.put('/exercises/:id', routes.exercises.putItem);
    this.delete('/exercises/:id', routes.exercises.removeItem);

exports.init = init;

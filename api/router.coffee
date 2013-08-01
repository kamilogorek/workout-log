'use strict';

routes = {
    static: require('./routes/static'),
    exercises: require('./routes/exercises')
};

init = ->
    this.get('/', routes.static.index);
    this.get('/partials/:name', routes.static.partials);
    this.post('/api/exercises', routes.exercises.postItem);
    this.get('/api/exercises', routes.exercises.getCollection);
    this.get('/api/exercises/:id', routes.exercises.getItem);
    this.put('/api/exercises/:id', routes.exercises.putItem);
    this.delete('/api/exercises/:id', routes.exercises.removeItem);
    # this.get('*', routes.static.index);

exports.init = init;

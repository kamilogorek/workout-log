'use strict';

router = {
    static: require('./routes/static'),
    exercises: require('./routes/exercises')
};

init = ->
    this.get('/', router.static.index);
    this.post('/exercises', router.exercises.postItem);
    this.get('/exercises', router.exercises.getCollection);
    this.get('/exercises/:id', router.exercises.getItem);
    this.put('/exercises/:id', router.exercises.putItem);
    this.delete('/exercises/:id', router.exercises.removeItem);

exports.init = init;

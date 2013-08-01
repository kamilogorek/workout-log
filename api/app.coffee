'use strict';

path = require('path');
express = require('express');
router = require('./router');
database = require('./database');

# Create express application
# app = module.exports = express();
app = express();

process.env.NODE_ENV = 'development';

app.configure ->
    # Set server port
    app.set('port', process.env.PORT ? 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    # Serves application favicon
    app.use(express.favicon());
    # Gzip all responses
    app.use(express.compress());
    # Make RESTful requests accessible
    app.use(express.methodOverride());
    # Parse request (json, urlencode, multipart)
    app.use(express.bodyParser());
    # Mount routes
    app.use(app.router);
    # Set path for static files
    app.use(express.static(path.join(__dirname, 'public')));

# Configure development environment
app.configure('development', ->
    # app.set('db uri', 'mongodb://localhost/todo-dev');
    app.use(express.logger('dev'));
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
);

# Configure development environment
app.configure('test', ->
    # app.set('db uri', 'mongodb://localhost/todo-test');
    app.use(express.logger('dev'));
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
);

# Configure production environment
app.configure('production', ->
    # app.set('db uri', 'mongodb://localhost/todo-prod');
    app.use(express.logger());
    app.use(express.errorHandler());
);

# Set application routes
router.init.call(app);

# Start application server
app.listen(app.get('port'), ->
    console.log('Express server listening on port ' + app.get('port'));
);

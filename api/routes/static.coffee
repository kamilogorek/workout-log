'use strict';

module.exports = {
    index: (req, res) ->
        res.render('index');

    partials: (req, res) ->
        name = req.params.name;
        res.render('partials/' + name);
}

'use strict';

angular.module('workoutLogApp', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.jade',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

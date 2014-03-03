'use strict';

angular.module('paestApp', ['ngRoute','ngResource','ui.ace',])
  .config(function ($routeProvider,$locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:id', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:id.:extension', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:id/:key', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

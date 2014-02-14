'use strict';

angular.module('paestApp')
  .controller('MainCtrl', function ($scope,$routeParams) {

    $scope.id = $routeParams.id;

    $scope.aceLoaded = function(_editor){

      var StatusBar = ace.require('ace/ext/statusbar').StatusBar
      var statusBar = new StatusBar(_editor, document.getElementById('status-bar'))
    }
  });

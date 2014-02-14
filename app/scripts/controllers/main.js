'use strict';

angular.module('paestApp')
  .controller('MainCtrl', function ($scope,$location,$routeParams) {

    if ($routeParams.id){
      $scope.id = $routeParams.id;
    } else {
        var chars = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
        var base = chars.length;
        var id = '';
        var enc = Math.floor(Math.random() * (1000000 - 1000) + 1000)
        while(enc) {
          var remainder = enc % base;
          enc = Math.floor(enc / base);
          id = chars[remainder].toString() + id;
        }
        $location.path('/'+id)
    }

    $scope.aceLoaded = function(_editor){

      var StatusBar = ace.require('ace/ext/statusbar').StatusBar
      var statusBar = new StatusBar(_editor, document.getElementById('status-bar'))
    }
  });

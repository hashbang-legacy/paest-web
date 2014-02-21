'use strict';

angular.module('paestApp')
  .controller('MainCtrl', function ($scope,$http,$rootScope,$location,$routeParams,$interval) {

    if ($routeParams.id){
      $scope.id = $routeParams.id;
      $rootScope.id = $routeParams.id;
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

    $scope.save = function() {
      console.log('data request', $scope.data)
      var url = 'http://a.pae.st/'+$scope.id
      if ( $scope.key ) url += '/'+$scope.key
      $http({
        url: url,
        method: "POST",
        data: 'p='+$scope.data,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).success(function(data, status, headers, config) {
        console.log('saved',data)
        $scope.editUrl = data.split('\n')[2].split('#')[0]
        $scope.key = $scope.editUrl.split('/')[4]
      }).error(function(data, status, headers, config) {
        console.log('not saved. stuff be brokenn',status)
      });
    }


    $scope.aceLoaded = function(editor){

      var StatusBar = ace.require('ace/ext/statusbar').StatusBar
      var statusBar = new StatusBar(editor, document.getElementById('status-bar'))

      var session = editor.getSession()

      $scope.unsaved = false;
      session.on("change", function(e){
        $scope.data = session.getValue();
        $scope.unsaved = true;
      })

      $interval(function(){
        if ($scope.unsaved) {
          $scope.save();
        }
        $scope.unsaved = false;
      },2000)



    }

  });

angular.module('myApp')
.factory('DataService',
  function($http){

    var factory = {};
    var temp = [];

    factory.getTemp = function(callback) {
      $http.get('/user/temp').success(function(output){
        callback(output);
      })
    }

    return factory;
  })
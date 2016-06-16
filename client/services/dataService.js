angular.module('myApp')
.factory('DataService',
  function($http){

    var factory = {};
    var temp = [];

 
  factory.index = function(callback){
    $http.get('/user/alltemp').success(function(output){
      console.log(output, 'index');
      callback(output)
    });
  }

  factory.getTemp = function(callback){
    $http.get('/user/temp').success(function(output){
      console.log(output, 'liveTemp');
      callback(output)
    })
  }


    return factory;
  })
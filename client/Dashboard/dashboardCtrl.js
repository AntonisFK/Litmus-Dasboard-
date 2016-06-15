angular.module('myApp')
.controller('dashboardController',[
'$scope', 
'$http',
'$location', 
  function ($scope, $http) {
    console.log("works")

    $http.get('/user/status').success( console.log("output"))
   
    }
]);
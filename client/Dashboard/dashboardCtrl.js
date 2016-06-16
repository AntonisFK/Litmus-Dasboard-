angular.module('myApp')
.controller('dashboardController',[
'$scope', 
'DataService',
'$location',
  function ($scope, DataService) {
    
    
    $scope.tempatures = [];
    DataService.index(function(result){
      $scope.tempatures = result;

      console.log($scope.tempatures)
    })

  
    $scope.liveTemp = function(){
      DataService.getTemp(function(result){
        console.log('alltemps',result) 
        
        $scope.liveData = result 
        $scope.tempatures.push(result)

      })
    }
  }
]);

angular.module('myApp').filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
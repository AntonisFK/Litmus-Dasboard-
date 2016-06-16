angular.module('myApp')
.controller('dashboardController',[
'$scope', 
'DataService',
'$location',
  function ($scope, DataService) {
    
    
    $scope.tempatures = [];
    DataService.index(function(result){
      $scope.tempatures = result;
      $scope.data = result
      console.log($scope.tempatures)
    })

      console.log($scope.tempatures)


scope.options = {
            chart: {
                type: 'lineWithFocusChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 40
                },
                duration: 500,
                useInteractiveGuideline: true,
                xAxis: {
                    axisLabel: 'X Axis',
                    tickFormat: function(d, i ){
                      console.log(d)
                      return d
                    }
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    tickFormat: function(d, i){
                      return d
                    },
                    rotateYLabel: false
                }
                }

            }
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
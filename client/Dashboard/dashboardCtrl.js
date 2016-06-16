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
      var templ = $scope.tempatures
      console.log(templ , "hi")
      $scope.data = {templ}
    })

      console.log($scope.tempatures)


  $scope.options = {
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
                    tickFormat: function(d){
                      console.log(d)
                        return d3.format(',f')(d);
                    }
                },
                x2Axis: {
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    }
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    },
                    rotateYLabel: false
                },
                y2Axis: {
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    }
                }

            }
        };
 
    
    $scope.liveTemp = function(){
      DataService.getTemp(function(result){
        console.log('alltemps',result) 
        
        $scope.liveData = result 
        $scope.tempatures.push(result)

      })
    }
  }
]);
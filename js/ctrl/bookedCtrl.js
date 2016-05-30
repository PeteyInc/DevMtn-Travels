angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {

    for (var i = 0; i < mainSrv.travelInfo.length; i++) {
      if (parseInt($stateParams.id) === mainSrv.travelInfo[i].id) {
        $scope.info = mainSrv.travelInfo[i];
      }
    }

});

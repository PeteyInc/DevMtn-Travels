angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv, $stateParams) {

  $scope.info = mainSrv.travelInfo;
});

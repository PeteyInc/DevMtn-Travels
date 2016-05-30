angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams) {
  $scope.info = mainSrv.travelInfo;
});

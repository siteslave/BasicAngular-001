angular.module('router.controller.Detail', [])
.controller('DetailCtrl', function ($scope, $rootScope, $stateParams) {
  var id = $stateParams.id;
  $scope.data = $rootScope.person[id];
  console.log($rootScope.person);
});

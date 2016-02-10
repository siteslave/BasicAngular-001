angular.module('router.controller.Main', [])
.controller('MainCtrl', function ($scope, MainService) {
  $scope.name = 'NodeJS';
  //$scope.person = PersonModel.getPerson();

  $scope.getUsers = function () {
    $scope.users = [];
    MainService.getUsers()
    .then(function (data) {
      $scope.users = data;
    }, function (err) {
      alert('Error')
    })
  }
});

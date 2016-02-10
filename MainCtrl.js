angular.module('Test.controller.Main', ['Test.service.Person'])
.controller('MainCtrl', function ($scope, PersonModel) {
  $scope.name = 'Ionic Framework';
  $scope.person = PersonModel.getPerson();
});

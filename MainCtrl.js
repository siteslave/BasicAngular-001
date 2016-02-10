angular.module('Test.controller.Main', ['Test.service.Person', 'Test.directive.Hello'])
.controller('MainCtrl', function ($scope, PersonModel) {
  $scope.name = 'Ionic Framework';
  $scope.person = PersonModel.getPerson();
});

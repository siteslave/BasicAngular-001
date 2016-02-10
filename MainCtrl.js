angular.module('Test.controller.Main', [])
.controller('MainCtrl', function ($scope) {
  $scope.name = 'Ionic Framework';
  $scope.person = [
    {id: 1, name: 'Satit Rianpit'},
    {id: 2, name: 'John Doe'}
  ]
});

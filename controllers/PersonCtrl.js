angular.module('router.controller.Person', [])
.controller('PersonCtrl', function ($scope, $rootScope, $state) {
  $scope.go = function (idx) {
    $state.go('detail', {id: idx})
  }
  $rootScope.person = [
    {id: 1, name: 'Satit Rianpit', sex: '1'}, // 0
    {id: 2, name: 'John Doe', sex: '3'}, // 1
    {id: 3, name: 'Terry', sex: '2'} // 2
  ];


});

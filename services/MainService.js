
angular.module('router.service.Main', [])
.factory('MainService', function ($q, $http) {
  return {
    getUsers: function () {
      var q = $q.defer();
      $http.get('http://jsonplaceholder.typicode.com/users')
      .success(function (data) {
        q.resolve(data)
      })
      .error(function () {
        q.reject('Connection failed')
      });

      return q.promise;
    },

    getDetail: function (id) {

    }
  }
})

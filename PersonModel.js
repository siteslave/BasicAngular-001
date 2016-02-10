angular.module('Test.service.Person', [])
.factory('PersonModel', function () {
  return {
    getName: 'Ionic framework',
    getPerson: function () {
      var person = [
        {id: 1, name: 'Satit Rianpit'},
        {id: 2, name: 'John Doe'},
        {id: 3, name: 'Terry'}
      ];
      return person;
    }
  }
})

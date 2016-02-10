angular.module('Test.service.Person', [])
.factory('PersonModel', function () {
  return {
    getName: 'Ionic framework',
    getPerson: function () {
      var person = [
        {id: 1, name: 'Satit Rianpit', sex: '1'},
        {id: 2, name: 'John Doe', sex: '3'},
        {id: 3, name: 'Terry', sex: '2'}
      ];
      return person;
    }
  }
})

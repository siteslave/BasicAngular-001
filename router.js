angular.module('router', [
  'ui.router', 'router.controller.Main', 'router.controller.Person',
  'router.controller.Detail', 'router.service.Main'
])
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', { // #/main
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
    })
    .state('person', { // #/person
      url: '/person',
      templateUrl: 'templates/person.html',
      controller: 'PersonCtrl'
    })
    .state('detail', { // #/detail/xxx
      url: '/detail/:id',
      templateUrl: 'templates/detail.html',
      controller: 'DetailCtrl'
    });

    $urlRouterProvider.otherwise('/main');

})

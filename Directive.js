angular.module('Test.directive.Hello', [])
    .directive('helloWorld', function () {
        return {
            restrict: 'E', // E = element, A = attribute, C = class
            template: '<div>Hello, <strong style="color: red;">{{ firstname }} {{ lastname }}</strong></div>',
            scope: {
                firstname: '@',
                lastname: '@'
            }
        };
    });

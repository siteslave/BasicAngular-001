angular.module('Test', [
  'Test.controller.Main', 'Test.controller.Detail'
])
.filter('toSexName', function () {

    return function (sex) {
           return sex == '1' ? 'ชาย' : sex == '2' ? 'หญิง' : 'ไม่ทราบ';
    };

});

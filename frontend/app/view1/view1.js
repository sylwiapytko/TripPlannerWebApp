'use strict';

angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap.datetimepicker'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $cookies, mdcDateTimeDialog) {
    $scope.mycookie=$cookies.get("access_token");


});
'use strict';

angular.module('myApp.tripAdd', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tripAdd', {
    templateUrl: 'tripAdd/tripAdd.html',
    controller: 'tripAddCtrl'
  });
}])

.directive("booksSearchDir", function() {
    return {
        templateUrl: 'tripAdd/tripAdd.html',
    	controller: 'tripAddCtrl'
    };
})

.controller('tripAddCtrl', [function() {

}]);
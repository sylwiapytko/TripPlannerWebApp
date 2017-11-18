'use strict';

angular.module('myApp.tripDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tripDetails', {
    templateUrl: 'tripDetails/tripDetails.html',
    controller: 'tripDetailsCtrl'
  });
}])

.directive("booksSearchDir", function() {
    return {
        templateUrl: 'tripDetails/tripDetails.html',
    	controller: 'tripDetailsCtrl'
    };
})

.controller('tripDetailsCtrl', [function() {

}]);
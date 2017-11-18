'use strict';

angular.module('myApp.tripAttractions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tripAttractions', {
    templateUrl: 'tripAttractions/tripAttractions.html',
    controller: 'tripAttractionsCtrl'
  });
}])

.directive("booksSearchDir", function() {
    return {
        templateUrl: 'tripAttractions/tripAttractions.html',
    	controller: 'tripAttractionsCtrl'
    };
})

.controller('tripAttractionsCtrl', [function() {

}]);
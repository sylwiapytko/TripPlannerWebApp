'use strict';

angular.module('myApp.tripDestinationDetails', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tripDestinationDetails', {
            templateUrl: 'tripDestinationDetails/tripDestinationDetails.html',
            controller: 'tripDestinationDetailsCtrl'
        });
    }])

    .controller('tripDestinationDetailsCtrl', [function() {

    }]);
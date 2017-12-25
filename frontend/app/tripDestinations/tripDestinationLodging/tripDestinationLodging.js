'use strict';

angular.module('myApp.tripDestinationLodging', ['ngRoute'])

    .directive('tripDestinationLodging', function() {
        return {
            templateUrl: 'tripDestinations/tripDestinationLodging/tripDestinationLodging.html',
            controller: 'tripDestinationLodgingCtrl'
        };
    })
    .controller('tripDestinationLodgingCtrl', [function() {

    }]);
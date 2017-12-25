'use strict';

angular.module('myApp.tripDestinationSections', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tripDestinationSections', {
            templateUrl: 'tripDestinations/tripDestinationSections/tripDestinationSections.html',
            controller: 'tripDestinationSectionsCtrl'
        });
    }])

    .controller('tripDestinationSectionsCtrl', [function() {

    }]);
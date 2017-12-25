'use strict';

angular.module('myApp.tripDestinations', ['ngCookies'])

    .directive('viewTripDestinations', function() {
        return {
            templateUrl: "tripDestinations/tripDestinations.html",
            controller: "tripDestinationsCtrl"
        };
    })

    .controller('tripDestinationsCtrl',
        ['$scope', '$http', '$cookies', '$rootScope',function($scope, $http, $cookies, $rootScope) {


        }]);
'use strict';

angular.module('myApp.tripDestinationLodging', ['ngRoute'])

    .directive('tripDestinationLodging', function() {
        return {
            templateUrl: 'tripDestinations/tripDestinationLodging/tripDestinationLodging.html',
            controller: 'tripDestinationLodgingCtrl'
        };
    })
    .controller('tripDestinationLodgingCtrl', function($scope, $http, $routeParams) {
        $scope.test=$routeParams.id;
        var url = "http://localhost:8080/api/trip/getDestinationLodging/" + $routeParams.id;
        $http.get(url).then(function(response) {
            $scope.lodgings = response.data;
        });
    });
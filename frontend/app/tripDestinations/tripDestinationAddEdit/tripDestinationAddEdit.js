'use strict';

angular.module('myApp.tripDestinationAddEdit', ['ngRoute'])

    .directive('tripDestinationAddEdit', function() {
        return {
            templateUrl: 'tripDetripDestinationAddEdit/tripDestinationAddEdit/tripDestinationAddEdit.html',
            controller: 'tripDestinationAddEditCtrl'
        };
    })
    .controller('tripDestinationAddEditCtrl', function($scope, $http, $routeParams) {

        $scope.test=$routeParams.id;
        var url = "http://localhost:8080/api/trip/getDestination/" + $routeParams.id;
        $http.get(url).then(function(response) {
            $scope.destination = response.data;
        });
    });
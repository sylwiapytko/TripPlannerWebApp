'use strict';

angular.module('myApp.tripDestinationDetails', ['ngRoute'])

    .directive('tripDestinationDetails', function() {
        return {
            templateUrl: 'tripDestinations/tripDestinationDetails/tripDestinationDetails.html',
            controller: 'tripDestinationDetailsCtrl'
        };
    })
    .controller('tripDestinationDetailsCtrl', function($scope, $http, $routeParams) {

        $scope.test=$routeParams.id;
        var url = "http://localhost:8080/api/trip/getDestination/" + $routeParams.id;
        $http.get(url).then(function(response) {
            $scope.destination = response.data;
            // $scope.destination.date_from =new Date($scope.destination.date_from);
        });
        $scope.editDestination = function() {
            var req = {
                method: 'POST',
                url: "http://localhost:8080/api/trip/addUpdateDestinations",
                data: $scope.destination
            }

            $http(req).then(function(response) {
                alert("updated")
            });
        }
    });
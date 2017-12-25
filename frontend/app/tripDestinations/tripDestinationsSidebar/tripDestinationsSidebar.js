'use strict';

angular.module('myApp.tripDestinationsSidebar', ['ngCookies'])

    .directive('tripDestinationsSidebar', function() {
        return {
            templateUrl: "tripDestinations/tripDestinationsSidebar/tripDestinationsSidebar.html",
            controller: "tripDestinationsSidebarCtrl"
        };
    })

    .controller('tripDestinationsSidebarCtrl',
        function($scope, $http, $cookies, $rootScope) {

            var url = "http://localhost:8080/api/trip/getTripDestinations/" + 1 //trip_id
            $http.get(url).then(function(response) {
                $scope.destinations = response.data;
            });

        });
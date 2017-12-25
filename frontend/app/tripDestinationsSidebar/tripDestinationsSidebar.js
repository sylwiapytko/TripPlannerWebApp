'use strict';

angular.module('myApp.tripDestinationsSidebar', ['ngCookies'])

    .directive('tripDestinationsSidebar', function() {
        return {
            templateUrl: "tripDestinationsSidebar/tripDestinationsSidebar.html",
            controller: "tripDestinationsSidebarCtrl"
        };
    })

    .controller('tripDestinationsSidebarCtrl',
        ['$scope', '$http', '$cookies', '$rootScope',function($scope, $http, $cookies, $rootScope) {

            var url = "http://localhost:8080/api/trip/getTripDestinations/" + 1
            $http.get(url).then(function(response) {
                $scope.destinations = response.data;
            });

        }]);
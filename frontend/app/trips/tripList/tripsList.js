'use strict';

angular.module('myApp.tripsList', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tripsList', {
            templateUrl: 'trips/tripList/tripsList.html',
            controller: 'tripsListCtrl'
        });
    }])

    .controller('tripsListCtrl', function($scope, $http) {
        var getTrips = function () {
            var url = "http://localhost:8080/api/trip/getTrips" //trip_id
            $http.get(url).then(function (response) {
                $scope.trips = response.data;
            });
        }
        getTrips();
    });
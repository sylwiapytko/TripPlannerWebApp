'use strict';

angular.module('myApp.tripDetails', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tripDetails/:id', {
            templateUrl: 'trips/tripDetails/tripDetails.html',
            controller: 'tripDetailsCtrl'
        });
    }])

    .controller('tripDetailsCtrl', function($scope, $http, $rootScope, $routeParams) {
        $rootScope.$on('tripAdded', function () {
            getTrips();
        });

        var getTrips = function () {
            var url = "http://localhost:8080/api/trip/getTrip/" + $routeParams.id; //trip_id
            $http.get(url).then(function (response) {
                $scope.trip = response.data;
            });
        };

        getTrips();
    });
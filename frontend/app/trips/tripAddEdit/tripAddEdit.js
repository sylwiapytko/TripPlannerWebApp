'use strict';

angular.module('myApp.tripAddEdit', ['ngRoute'])

    .directive('tripAddEdit', function() {
        return {
            templateUrl: 'trips/tripAddEdit/tripAddEdit.html',
            controller: 'tripAddEditCtrl'
        };
    })

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tripAddEdit/:id', {
            templateUrl: 'tripTrips/tripAddEdit/tripAddEdit.html',
            controller: 'tripAddEditCtrl'
        });
    }])
    .controller('tripAddEditCtrl', function($scope, $http, $rootScope, $routeParams, $cookies) {


        $rootScope.$on('editTrip', function () {
            var url = "http://localhost:8080/api/trip/getTrip/" + $routeParams.id;
            $http.get(url).then(function(response) {
                $scope.trip = response.data;
                $scope.trip.date_from =new Date($scope.trip.date_from);
                $scope.trip.date_to =new Date($scope.trip.date_to);
            });
        });
        $rootScope.$on('addTrip', function () {
            $scope.trip={
                "id": 0,
                "name": "",
                "date_from": "",
                "date_to": "",
                "trip_id": 1
            }
        });

        $scope.saveTrip = function() {
            var req = {
                method: 'POST',
                url: "http://localhost:8080/api/trip/addUpdateTrip",
                headers: {"access_token": $cookies.get("access_token")},
                data: $scope.trip
            };
            $http(req).then(function(data){
                $rootScope.$broadcast('tripAdded');
            });
        }
    });
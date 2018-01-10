'use strict';

angular.module('myApp.tripDestinationAddEdit', ['ngRoute'])

    .directive('tripDestinationAddEdit', function() {
        return {
            templateUrl: 'tripDestinations/tripDestinationAddEdit/tripDestinationAddEdit.html',
            controller: 'tripDestinationAddEditCtrl'
        };
    })

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tripDestinationAddEdit/:id', {
            templateUrl: 'tripDestinations/tripDestinationAddEdit/tripDestinationAddEdit.html',
            controller: 'tripDestinationAddEditCtrl'
        });
    }])
    .controller('tripDestinationAddEditCtrl', function($scope, $http, $rootScope, $routeParams) {


        $rootScope.$on('editDestination', function () {
            var url = "http://localhost:8080/api/trip/getDestination/" + $routeParams.id;
            $http.get(url).then(function(response) {
                $scope.destination = response.data;
                $scope.destination.date_from =new Date($scope.destination.date_from);
                $scope.destination.date_to =new Date($scope.destination.date_to);
            });
        });
        $rootScope.$on('addDestination', function () {
            $scope.destination={
                "id": 0,
                "name": "",
                "date_from": "",
                "date_to": "",
                "trip_id": 1
            }
        });

        $scope.saveDestination = function() {
            var req = {
                method: 'POST',
                url: "http://localhost:8080/api/trip/addUpdateDestination",
                // headers: {"access_token": $cookies.get("access_token")},
                data: $scope.destination
            };
            $http(req).then(function(data){
                $rootScope.$broadcast('destinationAdded');
            });
        }
    });
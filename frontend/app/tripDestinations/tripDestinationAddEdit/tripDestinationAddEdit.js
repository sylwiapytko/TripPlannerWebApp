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


        $scope.destination={
            "id": 0,
            "name": "",
            "date_from": "2018-01-08",
            "date_to": "2018-01-08",
            "trip_id": 1
        }
        $scope.saveDestination = function() {
            var req = {
                method: 'POST',
                url: "http://localhost:8080/api/trip/addUpdateDestinations",
                // headers: {"access_token": $cookies.get("access_token")},
                data: $scope.destination

            }
            $http(req).then(function(data){
                $rootScope.$broadcast('destinationAdded');
            });
        }
    });
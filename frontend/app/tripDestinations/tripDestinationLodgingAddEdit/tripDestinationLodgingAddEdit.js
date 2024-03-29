'use strict';

angular.module('myApp.tripDestinationLodgingAddEdit', ['ngRoute'])

    .directive('tripDestinationLodgingAddEdit', function() {
        return {
            templateUrl: 'tripDestinations/tripDestinationLodgingAddEdit/tripDestinationLodgingAddEdit.html',
            controller: 'tripDestinationLodgingAddEditCtrl'
        };
    })

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tripDestinationLodgingAddEdit/:id', {
            templateUrl: 'tripDestinations/tripDestinationLodgingAddEdit/tripDestinationLodgingAddEdit.html',
            controller: 'tripDestinationLodgingAddEditCtrl'
        });
    }])
    .controller('tripDestinationLodgingAddEditCtrl', function($scope, $http, $rootScope, $routeParams) {


        $rootScope.$on('editLodging', function () {

            var url = "http://localhost:8080/api/trip/getDestinationLodging/" + $routeParams.id;
            $http.get(url).then(function(response) {
                $scope.lodging = response.data;
            });
        });

        $scope.saveLodging = function() {
            $scope.lodging.destination_id=$routeParams.id;
            var req = {
                method: 'POST',
                url: "http://localhost:8080/api/trip/addUpdateLodging",
                // headers: {"access_token": $cookies.get("access_token")},
                data: $scope.lodging
            };
            $http(req).then(function(data){
                 $rootScope.$broadcast('lodgingUpdated');
            });
        }
    });
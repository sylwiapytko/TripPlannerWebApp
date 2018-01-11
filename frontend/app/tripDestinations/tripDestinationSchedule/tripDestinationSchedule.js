'use strict';

angular.module('myApp.tripDestinationSchedule', ['ngRoute'])

    .directive('tripDestinationSchedule', function() {
        return {
            templateUrl: 'tripDestinations/tripDestinationSchedule/tripDestinationSchedule.html',
            controller: 'tripDestinationScheduleCtrl'
        };
    })
    .controller('tripDestinationScheduleCtrl', function($scope, $http, $routeParams, $rootScope) {
        var getDestinationLodging= function(){
            $scope.test=$routeParams.id;
            var url = "http://localhost:8080/api/trip/getDestinationLodging/" + $routeParams.id;
            $http.get(url).then(function(response) {
                $scope.lodgings = response.data;
            });
        }

        $scope.editLodging = function () {
            $rootScope.$broadcast('editLodging');
        }

        $rootScope.$on('lodgingUpdated', function () {
            getDestinationLodging();
        });
        getDestinationLodging();
    });
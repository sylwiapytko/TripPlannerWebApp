'use strict';

angular.module('myApp.tripDestinationEventAddEdit', ['ngRoute'])

    .directive('tripDestinationEventAddEdit', function() {
        return {
            templateUrl: 'tripDestinations/tripDestinationEventAddEdit/tripDestinationEventAddEdit.html',
            controller: 'tripDestinationEventAddEditCtrl'
        };
    })

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tripDestinationEventAddEdit/:id', {
            templateUrl: 'tripDestinations/tripDestinationEventAddEdit/tripDestinationEventAddEdit.html',
            controller: 'tripDestinationEventAddEditCtrl'
        });
    }])
    .controller('tripDestinationEventAddEditCtrl', function($scope, $http, $rootScope, $routeParams) {


        $rootScope.$on('editEvent', function () {

            var url = "http://localhost:8080/api/trip/getDestinationEvents/" + $routeParams.id;
                $http.get(url).then(function(response) {
                $scope.event = response.data;
            });
        });

        $scope.saveEvent = function() {
            console.log($scope.event.id)
            $scope.event.destination_id=$routeParams.id;
            var req = {
                method: 'POST',
                url: "http://localhost:8080/api/trip/addUpdateEvent",
                // headers: {"access_token": $cookies.get("access_token")},
                data: $scope.event
            };
            $http(req).then(function(data){
                $rootScope.$broadcast('eventUpdated');
            });
        }
    });
angular.module('myApp.tripDestinationEvents', ['ngRoute'])

    .directive('tripDestinationEvents', function () {
        return {
            templateUrl: 'tripDestinations/tripDestinationEvents/tripDestinationEvents.html',
            controller: 'tripDestinationEventsCtrl'
        };
    })
    .controller('tripDestinationEventsCtrl', function ($scope, $http, $routeParams, $rootScope, $cookies) {

        var getDestinationEvents = function () {
            var url = "http://localhost:8080/api/trip/getDestinationEvents/" + $routeParams.id;
            $http.get(url).then(function (response) {
                $scope.events = response.data;
            });
        };
        $scope.eventShow = true;

        $scope.editEvent = function (event) {
            $rootScope.$broadcast('editEvent');
            $scope.eventShow = false;
            $scope.eventEdit = event;
        };

        $scope.saveEditedEvent = function () {
            $scope.eventEdit.destination_id = $routeParams.id;
            var req = {
                method: 'POST',
                url: "http://localhost:8080/api/trip/addUpdateEvent",
                headers: {"access_token": $cookies.get("access_token")},
                data: $scope.eventEdit
            };
            $http(req).then(function (data) {
                $rootScope.$broadcast('eventUpdated');
                $scope.eventShow = true;
            });
        };

        $scope.cancelEditedEvent = function () {
            $scope.eventShow = true;
            getDestinationEvents();
        };

        $scope.deleteEvent = function (eventId) {

            var url = "http://localhost:8080/api/trip/deleteEvent/" + eventId;
            $http.get(url).then(function (response) {
                $rootScope.$broadcast('eventUpdated');
            });
        };

        $scope.addEvent = function () {
            $scope.eventShow = false;
            $scope.eventEdit = {};
        };

        $rootScope.$on('eventUpdated', function () {
            getDestinationEvents();
        });

        getDestinationEvents();
    });
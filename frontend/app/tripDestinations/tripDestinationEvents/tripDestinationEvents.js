angular.module('myApp.tripDestinationEvents', ['ngRoute'])

    .directive('tripDestinationEvents', function() {
        return {
            templateUrl: 'tripDestinations/tripDestinationEvents/tripDestinationEvents.html',
            controller: 'tripDestinationEventsCtrl'
        };
    })
    .controller('tripDestinationEventsCtrl', function($scope, $http, $routeParams, $rootScope) {
        var getDestinationEvents= function(){
            var url = "http://localhost:8080/api/trip/getDestinationEvents/" + $routeParams.id;
            $http.get(url).then(function(response) {
                $scope.events = response.data;
            });
        };

        $scope.editEvent = function () {
            $rootScope.$broadcast('editEvent');
        };

        $scope.deleteEvent = function (eventId) {

                var url = "http://localhost:8080/api/trip/deleteEvent/" + eventId;
                $http.get(url).then(function(response) {
                    $rootScope.$broadcast('eventUpdated');
                });
        };

        $rootScope.$on('eventUpdated', function () {
            getDestinationEvents();
        });
        getDestinationEvents();
    });
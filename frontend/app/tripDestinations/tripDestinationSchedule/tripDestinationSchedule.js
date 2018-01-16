'use strict';

angular.module('myApp.tripDestinationSchedule', ['ngRoute'])

    .directive('tripDestinationSchedule', function() {
        return {
            templateUrl: 'tripDestinations/tripDestinationSchedule/tripDestinationSchedule.html',
            controller: 'tripDestinationScheduleCtrl'
        };
    })
    .controller('tripDestinationScheduleCtrl', function($scope, $http, $routeParams, $rootScope) {

    var url = "http://localhost:8080/api/trip/getDestination/" + $routeParams.id;
    $http.get(url).then(function(response) {
        $scope.destination = response.data;
        $scope.dateFrom =new Date($scope.destination.date_from);
        configStartDate($scope.dateFrom);
    });

    var configStartDate = function (startDate) {
        $scope.dateConfigstart= startDate.format("yyyy-mm-dd");
        $scope.weekConfig = {startDate: $scope.dateConfigstart};
        $scope.monthConfig = {startDate: $scope.dateConfigstart}
    };

        var getDestinationEvents= function(){
            var url = "http://localhost:8080/api/trip/getDestinationEvents/" + $routeParams.id;
            $http.get(url).then(function(response) {
                $scope.events = response.data;
            });
        };

        $scope.weekConfig = {
            viewType: "Week",
            startDate: new DayPilot.Date(),

            onEventMove: function(args) {
                onEventMove(args);
            }
        };
        $scope.monthConfig = {
            startDate: new DayPilot.Date(),

            onEventMove: function(args) {
                onEventMove(args)
            }
        };
        var onEventMove = function (args) {
            var eventId= args.e.id();
            var updatedEvent = $scope.events.filter(function(item) { return item.id === eventId; });
            updatedEvent=updatedEvent[0];
            updatedEvent.start=args.newStart.toString();
            updatedEvent.end=args.newEnd.toString();
            console.log(eventId);
            console.log(updatedEvent.start);

            saveSchedule(updatedEvent)
        }

        var saveSchedule = function(updatedEvent) {
            var req = {
                method: 'POST',
                url: "http://localhost:8080/api/trip/addUpdateEvent",
                // headers: {"access_token": $cookies.get("access_token")},
                data: updatedEvent
            };
            $http(req).then(function(data){
                $rootScope.$broadcast('eventUpdated');
            });
        }
        $rootScope.$on('eventUpdated', function () {
            getDestinationEvents();
        });

        $scope.changeCalendar = function() {
            $scope.monthConfigVisible = !($scope.monthConfigVisible);
        };

        $scope.moveCalendar = function (days) {
            var newstartDate = new Date($scope.weekConfig.startDate);
            newstartDate=new Date(newstartDate.setDate(newstartDate.getDate() + days));
            configStartDate(newstartDate);
        };

        getDestinationEvents();
    });
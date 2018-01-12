'use strict';

angular.module('myApp.tripDetails', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tripDetails/:id', {
            templateUrl: 'trips/tripDetails/tripDetails.html',
            controller: 'tripDetailsCtrl'
        });
    }])

    .controller('tripDetailsCtrl', function($scope, $http, $rootScope, $routeParams, $cookies) {



        $rootScope.$on('tripAdded', function () {
            getTrips();
        });

        var getTrips = function () {
            var url = "http://localhost:8080/api/trip/getTrip/" + $routeParams.id; //trip_id
            $http.get(url).then(function (response) {
                $scope.trip = response.data;
                $scope.dateFrom =new Date($scope.trip.date_from);
                configStartDate($scope.dateFrom);
            });
        };

        var getDestinations = function () {
            var url = "http://localhost:8080/api/trip/getTripDestinations/" + 1; //trip_id
            $http.get(url).then(function (response) {
                $scope.destinations = response.data;
                $scope.events=$scope.destinations;
            });
        }
        getTrips();
        getDestinations();

        var configStartDate = function (startDate) {
            $scope.dateConfigstart= startDate.format("yyyy-mm-dd");
            $scope.monthConfig = {startDate: $scope.dateConfigstart}
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
            getDestinations();
        });

        $scope.moveCalendar = function (days) {
            var newstartDate = new Date($scope.weekConfig.startDate);
            newstartDate=new Date(newstartDate.setDate(newstartDate.getDate() + days));
            configStartDate(newstartDate);
        };

        getDestinations();

    });
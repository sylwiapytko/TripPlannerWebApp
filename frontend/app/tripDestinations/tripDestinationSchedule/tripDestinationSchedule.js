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
        configStartDate();
    });
    var configStartDate = function () {
        $scope.dateConfigstart= $scope.dateFrom.format("yyyy-mm-dd");
        $scope.weekConfig = {startDate: $scope.dateConfigstart};
        $scope.monthConfig = {startDate: $scope.dateConfigstart}
    };

        $scope.showMonth = function() {
            $scope.monthConfigVisible = true;
            $scope.weekConfig.visible = false;
        };
        $scope.showWeek = function() {
            $scope.monthConfigVisible = false;
            $scope.weekConfig.visible = true;
        };
        $scope.weekConfig = {
            viewType: "Week",
            startDate: new DayPilot.Date(),

            onEventMove: function(args) {
                var params = {
                    id: args.e.id(),
                    newStart: args.newStart.toString(),
                    newEnd: args.newEnd.toString()
                }
                //http.post
            },
            onEventClick: function(args) {
                var modal = new DayPilot.Modal({
                    onClosed: function(args) {
                        if (args.result) {  // args.result is empty when modal is closed without submitting
                            loadEvents();
                        }
                    }
                });
                //show dialog and ask for name and other info
            }
        };
        $scope.monthConfig = {
            startDate: new DayPilot.Date(),

            onEventMove: function(args) {
                var params = {
                    id: args.e.id(),
                    newStart: args.newStart.toString(),
                    newEnd: args.newEnd.toString()
                }
                //http.post
            },
            onEventClick: function(args) {
                var modal = new DayPilot.Modal({
                    onClosed: function(args) {
                        if (args.result) {  // args.result is empty when modal is closed without submitting
                            loadEvents();
                        }
                    }
                });
                //show dialog and ask for name and other info
            }
        };
    });
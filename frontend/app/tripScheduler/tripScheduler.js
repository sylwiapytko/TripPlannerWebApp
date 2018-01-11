'use strict';

angular.module('myApp.tripScheduler', ['ngRoute', 'daypilot'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tripScheduler', {
            templateUrl: 'tripScheduler/tripScheduler.html',
            controller: 'tripSchedulerCtrl'
        });
    }])

    .controller('tripSchedulerCtrl', function($scope, $timeout, $http) {
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
            $scope.dayConfig = {
                viewType: "Day",
                startDate: new DayPilot.Date(),
            };
        $scope.monthConfig = {
            viewType: "Month",
            startDate: new DayPilot.Date(),
        };

            $scope.showDay = function() {
                $scope.dayConfig.visible = true;
                $scope.weekConfig.visible = false;
            };
            $scope.navigatorConfig = {
                selectMode: "day",
                showMonths: 3,
                skipMonths: 3,
                onTimeRangeSelected: function(args) {
                    $scope.weekConfig.startDate = args.day;
                    $scope.dayConfig.startDate = args.day;
                    loadEvents();
                }
            };
            $scope.showWeek = function() {
                $scope.dayConfig.visible = false;
                $scope.weekConfig.visible = true;
            };

            $scope.events = [
                {
                    "id":"12",
                    "text":"Test",
                    "start":"2018-01-11T12:00:00",
                    "end":"2018-01-12T16:30:00"
                },
                {
                    "id":"11",
                    "text":"Maja",
                    "start":"2018-01-11T11:00:00",
                    "end":"2018-01-11T12:30:00"
                }
            ];
        $scope.events2 =
            {
                "id": "12",
                "text": "Test2",
                "start": "2018-01-10T12:00:00",
                "end": "2018-01-10T16:30:00"
            }
        ;
            $scope.events.push($scope.events2);
    });
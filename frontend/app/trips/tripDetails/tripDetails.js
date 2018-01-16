'use strict';

angular.module('myApp.tripDetails', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tripDetails/:id', {
            templateUrl: 'trips/tripDetails/tripDetails.html',
            controller: 'tripDetailsCtrl'
        });
    }])

    .controller('tripDetailsCtrl', function($scope, $http, $rootScope, $routeParams, $cookies, $mdDialog) {



        $rootScope.$on('tripAdded', function () {
            getTrips();
        });

        var getTrips = function () {
            var url = "http://localhost:8080/api/trip/getTrip/" + $routeParams.id; //trip_id
            $http.get(url).then(function (response) {
                $scope.trip = response.data;
                $scope.dateFrom =new Date($scope.trip.date_from);
                $scope.dateTo =new Date($scope.trip.date_to);
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

        $scope.editTrip = function(){
            $rootScope.$broadcast('editTrip');
        }

        $scope.deleteTrip = function () {
            var confirm = $mdDialog.confirm()
                .title('Delete trip')
                .textContent('Do you want to delete trip '+ $scope.trip.name+' ?')
                .ok('Delete')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function() {
                var url = "http://localhost:8080/api/trip/deleteTrip/" + $routeParams.id;
                $http.get(url).then(function(response) {
                    window.location.href = "#!/tripList";
                });
            }, function() {
            });

        };

    });
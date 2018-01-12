'use strict';

angular.module('myApp.tripsList', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tripsList', {
            templateUrl: 'trips/tripList/tripsList.html',
            controller: 'tripsListCtrl'
        });
    }])

    .controller('tripsListCtrl', function($scope, $http, $rootScope, $cookies) {

        $cookies.remove("tripId");
        $rootScope.$broadcast('tripList');

        $rootScope.$on('tripAdded', function () {
            getTrips();
        });

        var getTrips = function () {
            var url = "http://localhost:8080/api/trip/getUserTrips/"+ $cookies.get("userId");
            $http.get(url).then(function (response) {
                $scope.trips = response.data;
            });
        };

        $scope.openTrip= function(trip_id){
            $cookies.put("tripId", trip_id);
            $rootScope.$broadcast('tripOpened');
            window.location.href = "#!/tripDetails/"+ trip_id;
        };

        getTrips();
    });
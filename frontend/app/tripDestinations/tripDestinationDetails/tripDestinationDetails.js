'use strict';

angular.module('myApp.tripDestinationDetails', ['ngRoute'])

    .directive('tripDestinationDetails', function() {
        return {
            templateUrl: 'tripDestinations/tripDestinationDetails/tripDestinationDetails.html',
            controller: 'tripDestinationDetailsCtrl'
        };
    })
    .config(['$mdDateLocaleProvider', function($mdDateLocaleProvider) { $mdDateLocaleProvider.formatDate = function(date) {
        if (moment(date).isValid()) {
            return moment(date).format("YYYY-MM-DD");
        }
        return null;
    };
    }])
    .controller('tripDestinationDetailsCtrl', function($scope, $http, $routeParams, $rootScope, $mdDialog) {

        $rootScope.$on('destinationAdded', function () {
            getDestination();
        });

        $scope.editDestination = function () {
            $rootScope.$broadcast('editDestination');
        }
        $scope.deleteDestination = function () {
            var confirm = $mdDialog.confirm()
                .title('Delete destination')
                .textContent('Do you want to delete destination '+ $scope.destination.name+' ?')
                .ariaLabel('Lucky day')
                .ok('Delete')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function() {
                var url = "http://localhost:8080/api/trip/deleteDestination/" + $routeParams.id;
                $http.get(url).then(function(response) {
                    $rootScope.$broadcast('destinationDeleted');
                    window.location.href = "#!/tripDetails/"+ $cookies.get("tripId");
                });
            }, function() {
                console.log("canceled deletina")
            });

        };
        var getDestination = function () {
            var url = "http://localhost:8080/api/trip/getDestination/" + $routeParams.id;
            $http.get(url).then(function(response) {
                $scope.destination = response.data;
                $scope.dateFrom =new Date($scope.destination.date_from);
                $scope.dateTo =new Date($scope.destination.date_to);
            });
        }
        getDestination();
    });
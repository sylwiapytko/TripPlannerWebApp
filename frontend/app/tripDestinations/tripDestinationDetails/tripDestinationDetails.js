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
            return moment(date).format("DD.MM.YYYY");
        }
        return null;
    };
    }])
    .controller('tripDestinationDetailsCtrl', function($scope, $http, $routeParams) {

        $scope.test=$routeParams.id;
        var url = "http://localhost:8080/api/trip/getDestination/" + $routeParams.id;
        $http.get(url).then(function(response) {
            $scope.destination = response.data;
            $scope.dateFrom =new Date($scope.destination.date_from);
            $scope.dateTo =new Date($scope.destination.date_to);
        });
        $scope.editDestination = function() {
            var req = {
                method: 'POST',
                url: "http://localhost:8080/api/trip/addUpdateDestinations",
                data: $scope.destination
            }

            $http(req).then(function(response) {
                alert("updated")
            });
        }

        $scope.tripDestinationAddEdit = new tripDestinationAddEditDialogModel();

    });
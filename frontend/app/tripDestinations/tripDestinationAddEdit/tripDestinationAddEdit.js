'use strict';

angular.module('myApp.tripDestinationAddEdit', ['ngRoute'])

    .directive('tripDestinationAddEdit', function() {
        return {
            templateUrl: 'tripDestinations/tripDestinationAddEdit/tripDestinationAddEdit.html',
            controller: 'tripDestinationAddEditCtrl'
        };
    })

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tripDestinationAddEdit/:id', {
            templateUrl: 'tripDestinations/tripDestinationAddEdit/tripDestinationAddEdit.html',
            controller: 'tripDestinationAddEditCtrl'
        });
    }])
    .controller('tripDestinationAddEditCtrl', function($scope, $http, $routeParams) {

        $scope.test=$routeParams.id;
        $scope.testw="test"
    });
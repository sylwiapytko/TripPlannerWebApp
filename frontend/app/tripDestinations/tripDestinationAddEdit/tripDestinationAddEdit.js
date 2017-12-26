'use strict';

angular.module('myApp.tripDestinationAddEdit', ['ngRoute'])

    .directive('tripDestinationAddEdit', function() {
        return {
            templateUrl: 'tripDestinations/tripDestinationAddEdit/tripDestinationAddEdit.html',
            controller: 'tripDestinationAddEditCtrl'
        };
    })
    .controller('tripDestinationAddEditCtrl', function($scope, $http, $routeParams) {

    });
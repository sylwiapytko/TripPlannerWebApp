'use strict';

angular.module('myApp.mapApi', ['ngRoute', 'ngMap'])

    .directive('mapApi', function() {
        return {
            templateUrl: 'mapApi/mapApi.html',
            controller: 'mapApiCtrl'
        };
    })
    .controller('mapApiCtrl', function($scope, NgMap) {
        $scope.types = "['establishment']";
        $scope.mapZoom=1;

        $scope.placeChanged = function() {
            $scope.place = this.getPlace();
            console.log('location', $scope.place.geometry.location);
            $scope.map.setCenter($scope.place.geometry.location);
        }
        NgMap.getMap().then(function(map) {
            $scope.map = map;
        });
    });
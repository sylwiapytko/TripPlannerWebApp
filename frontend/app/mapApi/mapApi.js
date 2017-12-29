'use strict';

angular.module('myApp.mapApi', ['ngRoute', 'ngMap'])

    .directive('mapApi', function() {
        return {
            templateUrl: 'mapApi/mapApi.html',
            controller: 'mapApiCtrl'
        };
    })
    .controller('mapApiCtrl', function($scope, NgMap) {
        alert("mapApi")
        $scope.types = "['establishment']";
        $scope.placeChanged = function() {
            alert("placechannge")
            $scope.place = this.getPlace();
            console.log('location', $scope.place.geometry.location);
            $scope.map.setCenter($scope.place.geometry.location);
        }
        NgMap.getMap().then(function(map) {
            alert("get Map")
            $scope.map = map;
        });
    });
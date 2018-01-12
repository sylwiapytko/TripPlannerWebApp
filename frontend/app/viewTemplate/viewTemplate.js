'use strict';

angular.module('myApp.viewTemplate', ['ngCookies'])

    .directive('viewTemplate', function() {
        return {
            templateUrl: "viewTemplate/viewTemplate.html",
            controller: "viewTemplateCtrl"
        };
    })

    .controller('viewTemplateCtrl',
        ['$scope', '$http', '$cookies', '$rootScope',function($scope, $http, $cookies, $rootScope) {

            if ($cookies.get("tripId")) {
                $scope.tripOpened = true;
            }
            else {
                $scope.tripOpened = false;
            }
            $rootScope.$on('tripOpened', function () {
                $scope.tripOpened = true;
            });
            $rootScope.$on('tripList', function () {
                $scope.tripOpened = false;
            });
        }]);
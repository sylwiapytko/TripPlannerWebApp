
'use strict';

angular.module('myApp.userOrderCheckout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/userOrderCheckout', {
    templateUrl: 'userOrderCheckout/userOrderCheckout.html',
    controller: 'userOrderCheckoutCtrl'
  });
}])

.controller('userOrderCheckoutCtrl',  function($scope, myService) {

        myService.buy().then(function(response){
            $scope.boughtItems = response;
        });

});
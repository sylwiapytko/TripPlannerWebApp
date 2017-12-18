'use strict';

angular.module('myApp.userRegistration', ['ngRoute', 'ngResource','ngCookies'
	])

.config(['$routeProvider', '$httpProvider' , function($routeProvider, $httpProvider) {
  $routeProvider.when('/userRegistration', {
    templateUrl: 'userRegistration/userRegistration.html',
    controller: 'UserRegistrationCtrl'
  });
}])

.controller('UserRegistrationCtrl', 

function($scope, $http, $httpParamSerializer, $resource, $cookies, $rootScope) {

 $scope.rexUsername ="^[a-zA-Z][a-zA-Z0-9]{5,20}$";
 $scope.rexName ="^[A-ZŁŻ][a-ząćęłńóśźżĄĘŁŃÓŹŻ]{2,20}$";
 $scope.rexPassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{5,20}$"
 $scope.rexEmail = "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"

$scope.comparePass = function(){
	if ( $scope.userReg.password == $scope.userReg.passwordRepeat ) { $scope.badPasswords=false; }
	else{ $scope.badPasswords=true; }
}

    $scope.userReg={
        username: "Anna22",
        password: "Anna22",
        email: "anna22@o2.pl",
        firstname: "Anna",
        lastname: "Sowa",
        city: "Olsztn",
        street: "Mila",
        houseNumber: "22a/34",
        postNumber: "22-111"
    }
    $scope.userReg.passwordRepeat="Anna22";

    $scope.registerIn = function() {
        // $scope.userReg.password = btoa($scope.userReg.password);
        var req = {
            method: 'POST',
            url: "http://localhost:8080/register",
            data: $scope.userReg

        }
        $http(req).then(function(data){
            alert("rejestrujesz sie")
            window.location.href = "#!/login";
        });
    }

});
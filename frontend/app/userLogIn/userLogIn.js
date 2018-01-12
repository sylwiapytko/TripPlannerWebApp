'use strict';

angular.module('myApp.userLogIn', ['ngRoute', 'ngResource','ngCookies'
	])

.config(['$routeProvider', '$httpProvider' , function($routeProvider, $httpProvider) {
  $routeProvider.when('/userLogIn', {
    templateUrl: 'userLogIn/userLogIn.html',
    controller: 'UserLogInCtrl'
  });
  // $httpProvider.defaults.useXDomain = true;
 // $httpProvider.defaults.withCredentials = true;
}])

.controller('UserLogInCtrl', function($scope, $http, $httpParamSerializer, $resource, $cookies, $rootScope, $mdDialog) {
  	
    $scope.data = {
        username: "",
        password: ""
    };

   $scope.login = function() {
        var req = {
            method: 'POST',
            url: "http://localhost:8080/login",
            data: $scope.data
        }
        $http(req).then(function(data){
             $cookies.put("access_token", data.data.token);
             $cookies.put("userId", data.data.userId);
             $cookies.put("firstName", data.data.firstname);
             $scope.mycookie=$cookies.get("access_token");
             $rootScope.$broadcast('userLoggedIn');
             window.location.href = "#!/bookList";

        }).catch(function(response) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Upps')
                    .textContent('Wrong Login or Password')
                    .ok('Got it!')
            );
        });
   }




});
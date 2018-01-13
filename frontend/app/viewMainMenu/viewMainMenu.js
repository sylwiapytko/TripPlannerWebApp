'use strict';

angular.module('myApp.viewMainMenu', ['ngCookies'])

.directive('viewMainMenu', function() {
    return {
        templateUrl: "viewMainMenu/viewMainMenu.html",
        controller: "ViewMainMenuCtrl"
    };
})
    .directive('viewMainMenuUser', function () {
        return {
            templateUrl: "viewMainMenu/viewMainMenuUser.html",
            controller: "ViewMainMenuCtrl"
        };
    })

.controller('ViewMainMenuCtrl', 
	function($scope, $http, $cookies, $rootScope) {
        if ($cookies.get("access_token")) {

            $scope.userName = $cookies.get("userName");
            $scope.userLoggedIn = true;
        }
        else {
            $scope.userName = "User";
        }
        $rootScope.$on('userLoggedIn', function () {
            $scope.userName = $cookies.get("userName");
            $scope.userLoggedIn = true;
        });


        $scope.logOut = function () {
            $cookies.remove("access_token");
            $scope.userName = "User";
            $scope.userLoggedIn = false;
            window.location.href = "#!/userLogIn";
        }

});
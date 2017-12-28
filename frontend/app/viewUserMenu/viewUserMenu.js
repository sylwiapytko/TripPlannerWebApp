'use strict';

angular.module('myApp.viewUserMenu', ['ngCookies'])

.directive('viewUserMenuDir', function() {
    return {
        templateUrl: "viewUserMenu/viewMainMenuUser.html",
        controller: "viewUserMenuCtrl"
    };
})

.controller('viewUserMenuCtrl',
	function($scope, $http, $cookies, $rootScope) {
if($cookies.get("access_token")){

    $scope.userName=$cookies.get("firstName");
    $scope.userLoggedIn=true;
}
else{
    $scope.userName="User";
}
$rootScope.$on('userLoggedIn', function () {
    $scope.userName=$cookies.get("firstName");
    $scope.userLoggedIn=true;
});


  $scope.logOut = function() {
      $cookies.remove("access_token");
      $scope.userName="User";
     $scope.userLoggedIn=false;
   	 window.location.href = "#!/userLogIn";
   }

});
'use strict';

angular.module('myApp.viewMainMenu', ['ngCookies'])

.directive('viewMainMenuDir', function() {
    return {
        templateUrl: "viewMainMenu/viewMainMenu.html",
        controller: "ViewMainMenuCtrl"
    };
})

.controller('ViewMainMenuCtrl', 
	['$scope', '$http', '$cookies', '$rootScope',function($scope, $http, $cookies, $rootScope) {
// if($cookies.get("access_token")){
//     $scope.userName=$cookies.get("firstName");
//     $scope.userLoggedIn=true;
// }
// else{
//     $scope.userName="User";
// }
// $rootScope.$on('userLoggedIn', function () {
//     $scope.userName=$cookies.get("firstName");
//     $scope.userLoggedIn=true;
// });
//
//
//   $scope.logOut = function() {
//       $cookies.remove("access_token");
//       $scope.userName="User";
//      $scope.userLoggedIn=false;
//    	 window.location.href = "#!/userLogIn";
//    }

}]);
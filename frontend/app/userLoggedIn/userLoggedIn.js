'use strict';

angular.module('myApp.userLoggedIn', ['ngRoute', 'ngResource',
  'ngCookies'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/userLoggedIn', {
    templateUrl: 'userLoggedIn/userLoggedIn.html',
    controller: 'UserLoggedInCtrl'
  });
}])

.controller('UserLoggedInCtrl', function($scope, $http, $httpParamSerializer, $resource, $cookies, myService) {

if($cookies.get("access_token")){

    } else{
        alert("no cookie found");
        window.location.href = "#!/userLogIn";
    }
 $scope.mycookie=$cookies.get("access_token");
 //
 // $http.get('http://localhost:8080/api/book/getBook/1').then(function(response) {
 //        $scope.book = response.data;
 //      });

   $scope.klik = function() {
     $cookies.remove("access_token");
     $scope.mycookie=$cookies.get("access_token");
     window.location.href = "#!/userLogIn";
   }

    $scope.callNotify =  function () {
        var myData = myService.getCart();
        myData.then(function (result) {
            $scope.cartItems = result;
            myService.anotherFunctionCall();
        });
   }
    $scope.callNotify1 =  function () {
        var myData = myService.getBook(1);
        myData.then(function (result) {
            $scope.book = result;
            myService.anotherFunctionCall();
        });
    }

})
    // .factory('myService', function ($http, $cookies) {
    //     return {
    //         // 1st function
    //         getBook: function (id) {
    //             alert("servercall");
    //             return  $http.get('http://localhost:8080/api/book/getBook/' + id).then(function(response) {
    //                 alert("responce fom server" + response.data.title);
    //                 return response.data;
    //                 // $scope.book = response.data;
    //             });
    //
    //         },
    //         getCart: function () {
    //             alert("getcaart");
    //             var req = {
    //                 method: 'GET',
    //                 url: "http://localhost:8080/api/cart/getCart",
    //                 params: {
    //                     userId: '1' //do edycji
    //                 },
    //                 headers: {"access_token": $cookies.get("access_token")}
    //             };
    //
    //             return  $http(req).then(function(response) {
    //                 alert("responce fom server" + response.data.quantity);
    //                 alert("responce fom server" + response.data);
    //                 return response.data;
    //             });
    //
    //         },
    //         // 2nd function
    //         anotherFunctionCall: function () {
    //             alert("Hi");
    //         }
    //     };
    // })

;

'use strict';

angular.module('myApp.userCart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/userCart', {
    templateUrl: 'userCart/userCart.html',
    controller: 'userCartCtrl'
  });
}])

.controller('userCartCtrl', function($scope, $http, $cookies, $route, myService) {


    var updateTotalSum = function () {
	    $scope.totalSum = Object.keys($scope.cartItems).map(function(k){
        return +($scope.cartItems[k].price* $scope.cartItems[k].quantity);
        }).reduce(function(a,b){ return a + b },0);
    }


    if(!$cookies.get("access_token")){
        alert("Musisz się zalogować");
        window.location.href = "#!/userLogIn";
    }

        myService.getCart().then(function (response) {
            $scope.cartItems = response;
             updateTotalSum();
        });


 $scope.updateQuantity = function(id, quantity){

     var url = "http://localhost:8080/api/book/getBook/" + id
     $http.get(url).then(function (response) {
         $scope.book = response.data;
         if (parseInt(quantity) <= parseInt($scope.book.numberOfAvailablePieces)) {
             myService.updateCart(id, quantity).then(function (response) {});
             updateTotalSum();
         }
         else {
             alert("Przepraszamy, nie ma tyle egzemplarzy");
         }
     })
}

 $scope.deleteFromCart = function(id){
     myService.updateCart(id, 0).then(function(response){
         $route.reload();
         updateTotalSum();
     });
    }

    $scope.buy = function(){
            window.location.href = "#!/userOrderCheckout";
        }

});
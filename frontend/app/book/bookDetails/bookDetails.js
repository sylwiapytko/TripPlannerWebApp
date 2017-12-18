'use strict';

angular.module('myApp.bookDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bookDetails/:id', {
    templateUrl: 'book/bookDetails/bookDetails.html',
    controller: 'bookDetailsCtrl'
  });
}])

.controller('bookDetailsCtrl', function($scope, $http, $routeParams, myService) {
 
$scope.book_id = $routeParams.id;
var url = "http://localhost:8080/api/book/getBook/" + $routeParams.id

 $http.get(url).then(function(response) {
        $scope.book = response.data;
      });

    $scope.addToCart = function(id){
        myService.updateCart(id, 1).then(function(response){
            window.location.href = "#!/userCart";
        });
    }
});
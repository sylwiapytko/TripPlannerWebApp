'use strict';

angular.module('myApp.booksSearch', [])

.directive("booksSearchDir", function() {
    return {
        templateUrl : "book/booksSearch/booksSearch.html",
        controller: "booksSearchCtrl"
    };
})


.controller('booksSearchCtrl', ['$scope', '$http', function($scope, $http) {
 $scope.sort='title';
//  $scope.search={
//  	available: 'true'
// }

 $scope.advancedSearch= function(){
 	 		$scope.advancedSearchB=!($scope.advancedSearchB);
 }
 // $http.get('http://localhost:8080/api/getCategories').then(function(response) {
 //        $scope.books = response.data;
 //      });

}]);



// .filter('priceGreaterThan', function() {

//     return function(input, cena) {
//       var output = [];
//       if (isNaN(cena)) {
 
//             output = input;
//         }
//         else {
//             angular.forEach(input, function (item) {
 
//                 if (item.cena > cena) {
//                     output.push(item)
//                 }
//             });
//         }
//         return output;
//     };
//   })
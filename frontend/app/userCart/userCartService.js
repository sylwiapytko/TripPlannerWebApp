angular.module('myApp.userCart').factory('myService', function ($http, $cookies) {
    return {

        getCart: function () {
            var req = {
                method: 'GET',
                url: "http://localhost:8080/api/cart/getCart",
                params: {
                    userId: $cookies.get("userId")
                },
                headers: {"access_token": $cookies.get("access_token")}
            };

            return  $http(req).then(function(response) {
                return response.data;
            });

        },
        updateCart: function (bookId, quantity) {
            var req = {
                method: 'GET',
                url: "http://localhost:8080/api/cart/updateCart",
                params: {
                    userId: $cookies.get("userId"),
                    bookId: bookId,
                    quantity: quantity
                },
                headers: {"access_token": $cookies.get("access_token")}
            }

            return  $http(req).then(function(response) {
                alert("updated")
            });

        },
        buy: function () {
            var req = {
                method: 'GET',
                url: "http://localhost:8080/api/cart/buy",
                params: {
                    userId: $cookies.get("userId")
                },
                headers: {"access_token": $cookies.get("access_token")}
            };

            return  $http(req).then(function(response) {
                return response.data;
            });

        }
    };
});
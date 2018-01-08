'use strict';
var tripDestinationAddEditDialogModel = function () {
    this.visible = false;
};
tripDestinationAddEditDialogModel.prototype.open = function(destination, $scope) {
    this.destination = destination;
    this.visible = true;
    // $scope.testw=$scope.model.destination.id;
};
tripDestinationAddEditDialogModel.prototype.close = function() {
    this.visible = false;
};
angular.module('myApp.tripDestinationAddEdit', ['ngRoute'])

    .directive('tripDestinationAddEdit', function() {
        return {
            scope: {
                model: '='
            },
            link: function(scope, element, attributes) {
                scope.$watch('model.visible', function(newValue) {
                    var modalElement = element.find('.modal');
                    modalElement.modal(newValue ? 'show' : 'hide');
                });

                element.on('shown.bs.modal', function() {
                    scope.$apply(function() {
                        scope.model.visible = true;
                    });
                });

                element.on('hidden.bs.modal', function() {
                    scope.$apply(function() {
                        scope.model.visible = false;
                    });
                });

            },
            templateUrl: 'tripDestinations/tripDestinationAddEdit/tripDestinationAddEdit.html',
            controller: 'tripDestinationAddEditCtrl'
        };
    })

    .controller('tripDestinationAddEditCtrl', function($scope, $http, $routeParams, $uibModal, $log, $document) {


// if( typeof $scope.model.destination.id !== 'undefined' ) {
//     var url = "http://localhost:8080/api/trip/getDestination/" + $scope.model.destinationId;
//     $http.get(url).then(function(response) {
//         alert("allo")
//         $scope.destination = response.data;
//         $scope.dateFrom =new Date($scope.destination.date_from);
//         $scope.dateTo =new Date($scope.destination.date_to);
//     }).catch(function(response) {
//         alert("loguje");
//     });
// } else{
//     alert("und");
// }


    });
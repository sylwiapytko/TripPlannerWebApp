'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute', 'ngMaterial', 'ngMap', 'ngMaterialDatePicker', 'daypilot',
    'myApp.viewMainMenu',
    'myApp.tripDestinationsSidebar',
    'myApp.tripDestinationSections',
    'myApp.tripDestinationDetails',
    'myApp.tripDestinationLodging',
    'myApp.tripDestinationAddEdit',
    'ui.bootstrap.datetimepicker',
    'myApp.userLogIn',
    'myApp.userRegistration',
    'myApp.viewTemplate',
    'myApp.tripScheduler',
    'myApp.tripDestinationLodgingAddEdit',
    'myApp.tripDestinationSchedule',
    'myApp.tripDestinationEvents',
    'myApp.tripsList',
    'myApp.tripAddEdit',
    'myApp.tripDetails'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/tripsList'});
}]);

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute', 'ngMaterial', 'ngMap', 'ngMaterialDatePicker', 'daypilot',
  'myApp.view1',
  'myApp.view2',
  'myApp.tripAdd',
    'myApp.viewMainMenu',
    'myApp.tripDestinationsSidebar',
    'myApp.tripDestinationSections',
    'myApp.tripDestinationDetails',
    'myApp.tripDestinationLodging',
    'myApp.tripDestinationAddEdit',
    'ui.bootstrap.datetimepicker',
    'myApp.datetimePicker',
    'myApp.userLogIn',
    'myApp.userRegistration',
    'myApp.mapApi',
    'myApp.viewTemplate',
    'myApp.tripScheduler',
    'myApp.tripDestinationLodgingAddEdit',
    'myApp.tripDestinationSchedule',
    'myApp.tripDestinationEvents',
    'myApp.tripsList',
    'myApp.tripAddUpdate'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute', 'ngMaterial', 'ngMap', 'ngMaterialDatePicker', 'daypilot',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.tripAdd', 
  'myApp.tripDetails',
    'myApp.tripAttractions',
    'myApp.viewMainMenu',
    'myApp.viewUserMenu',
    'myApp.tripDestinationsSidebar',
    'myApp.tripDestinationSections',
    'myApp.tripDestinationDetails',
    'myApp.tripDestinationLodging',
    'myApp.tripDestinationAddEdit',
    'ui.bootstrap.datetimepicker',
    'myApp.datetimePicker',
    'myApp.userLogIn',
    'myApp.mapApi',
    'myApp.viewTemplate',
    'myApp.tripScheduler',
    'myApp.tripDestinationLodgingAddEdit',
    'myApp.tripDestinationSchedule',
    'myApp.tripDestinationEvents',
    'myApp.tripDestinationEventAddEdit'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

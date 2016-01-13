'use strict';

/* App Module */

var huginApp = angular.module('huginApp', [
  'ngRoute',
  'huginService',
  'huginControllers'
]);

huginApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/demo1/', {
        templateUrl: 'templates/demo1.html',
        controller: 'demo1Ctrl'
      }).
      when('/demo2/', {
        templateUrl: 'templates/demo2.html',
        controller: 'demo2Ctrl'
      }).
      otherwise({
        redirectTo: '/demo1/'
      });
  }]);
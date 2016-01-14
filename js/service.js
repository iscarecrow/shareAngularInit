
var huginService = angular.module('huginService', []);

huginService.factory('huginService', function ($http, $q) {
    var service = {
      demo: {
        getdemo1: function(params) {
          return $http.get('../mock/demo1.json').then(function(data) {
            return data;
          });
        },
        getdemo2: function(params) {
          return $http.get('/api/banner/setting/').then(function(data) {
            return data;
          });
        }
      }
    };
    return service;
  });

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
      },
      banner: {
        getSetting: function() {
          return $http.get('/api/banner/setting/').then(function(data) {
            return data;
          });
        },
        getBannerList: function(params){
          return $http.get('/api/banner/list/',params).then(function(data) {
            return data;
          });
        },
        getDetail: function(params){
          return $http.get('/api/banner/detail/',params).then(function(data) {
            return data;
          });
        },
        updateDetail: function(params){
          return $http.put('/api/banner/update/',params).then(function(data) {
            return data;
          });
        },
        createDetail: function(params){
          return $http.post('/api/banner/create/',params).then(function(data) {
            return data;
          });
        },
        updateSetting: function(params){
          return $http.put('/api/banner/setting/',params).then(function(data) {
            return data;
          });
        }
      }

    };
    return service;
  });
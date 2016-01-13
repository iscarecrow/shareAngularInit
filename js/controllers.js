'use strict';

/* Controllers */

var huginControllers = angular.module('huginControllers', []);


// demo1
huginControllers.controller('demo1Ctrl', ['$scope', 'huginService',
  function($scope,huginService) {

    // $scope.orders = [{"quantity":1,"price":"0.00","biz_order_id":151730,"order_status":4,"supplier_name":"百特买","supplier_id":"22","inventory_name":"百特买邮费","sub_biz_order_amount":"0.00","logistics_time":"","gmt_create":"2016-01-13 14:13:16","logistics_name":"","logistics_ticket":"","refund_order_id":0,"settle_order_id":0,"batch_no":0,"sub_biz_order_settle_amount":"0.00","user_logistics_fee":"0.00","supplier_logistics_fee":"0.00"},{"quantity":1,"price":"0.00","biz_order_id":151730,"order_status":4,"supplier_name":"百特买","supplier_id":"22","inventory_name":"百特买满减","sub_biz_order_amount":"-0.00","logistics_time":"","gmt_create":"2016-01-13 14:13:16","logistics_name":"","logistics_ticket":"","refund_order_id":0,"settle_order_id":0,"batch_no":0,"sub_biz_order_settle_amount":"0.00","user_logistics_fee":"0.00","supplier_logistics_fee":"0.00"}];

    // 异步获取数据 
    huginService.demo.getdemo1().then(function(jsn){
      $scope.orders = jsn.data.data.order_list;
    });

    // 事件绑定
    $scope.hello = function() {
      alert('hello world');
    };

  }]);


// demo2
huginControllers.controller('demo2Ctrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {

    //test1 
    $scope.logtest1 = function() {
      console.log($scope.test1);
    };

    //test2
    $scope.test2 = 1;

    $scope.add = function() {
      $scope.test2 += 1;
    };

    //test3
    $scope.test3 = [
      {
        "price":1.5,
        "num":10
      },
      {
        "price":1,
        "num":5
      },
      {
        "price":2.5,
        "num":12
      },
    ];

    $scope.addPrice = function(index) {
      $scope.test3[index].price += 1;
    };

    $scope.addNum = function(index) {
      $scope.test3[index].num += 1;
    };

    $scope.getTotal = function() {
      var total = 0;
      for(var i = 0; i < $scope.test3.length; i++) {
        var order = $scope.test3[i];
        total += order.price * order.num;
      }
      return total.toFixed(2);
    };

  }]);

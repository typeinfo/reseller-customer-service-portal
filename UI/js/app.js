'use strict';

var demoApp = angular.module('ResellerDemo', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'view/store.htm',
        controller: storeController 
      }).
      when('/products/:code', {
        templateUrl: 'view/product.htm',
        controller: storeController
      }).
      when('/cart', {
        templateUrl: 'view/shoppingCart.htm',
        controller: storeController
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);

demoApp.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("ResellerDemo");

    // enable PayPal checkout through merchant account
    myCart.addCheckoutParameters("PayPal", "???@gmail.com");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});

/*
demoApp.controller('storeController', function($scope, $routeParams, DataService) {
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    if ($routeParams.code != null) {
        $scope.product = $scope.store.getProduct($routeParams.code);
    }
});
*/
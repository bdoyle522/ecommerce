angular.module('ecommerce').controller('adminCtrl', function($scope, $state, adminService){


  $scope.addProduct = function(product, brand, price){
    adminService.addProduct(product, brand, price).then(function(res){
      console.log('Successfully added id#: ', res);
    });
  };

  $scope.getProducts = function(){
    adminService.getProducts().then(function(res){
      $scope.products = res.data;
    });
  };

  $scope.delete = function(product){
    adminService.deleteProduct(product._id).then(function(res){
      console.log(res);
      $scope.getProducts();
    })
  };

});

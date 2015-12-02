angular.module('ecommerce').controller('adminCtrl', function($scope, $state, adminService){


  $scope.addProduct = function(product, brand){
    adminService.addProduct(product, brand).then(function(res){
      console.log('Successfully added id#: ', res);
    });
  };

  $scope.getProducts = function(){
    adminService.getProducts().then(function(res){
      console.log(res);
      $scope.products = res.data;
    });
  };

  $scope.delete = function(product){
    console.log(product._id);
    adminService.deleteProduct(product._id).then(function(res){
      console.log(res);
      $scope.products = res.data;
    })
  }

});

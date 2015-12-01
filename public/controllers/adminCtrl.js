angular.module('ecommerce').controller('adminCtrl', function($scope, $state, adminService){


  $scope.addProduct = function(product, brand){
    adminService.addProduct(product, brand).then(function(res){
      console.log('Successfully added id#: ', res);
    });
  }




});

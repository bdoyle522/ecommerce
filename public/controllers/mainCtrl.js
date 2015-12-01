angular.module('ecommerce').controller('mainCtrl', function($scope, $state, mainService){


  $scope.test = 'test';
  $scope.getProducts = function(){
    mainService.getProducts().then(function(res){
      console.log(res);
      $scope.products = res.data;
    });
  }




});

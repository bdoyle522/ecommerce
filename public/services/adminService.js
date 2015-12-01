angular.module('ecommerce').service('adminService', function($http){


  this.addProduct = function (product, brand){
    return $http({
      method: 'POST',
      url: '/products',
      data: {
        "name": product,
        "brand" : brand
      }
    });
  };

})

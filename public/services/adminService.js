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

  this.getProducts = function (){
    return $http({
      method: 'GET',
      url: '/products',
    });
  };

  this.deleteProduct = function (id) {
    console.log(id);
    return $http({
      method: 'DELETE',
      url: '/products/'+id
    });
  };

})

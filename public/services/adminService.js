angular.module('ecommerce').service('adminService', function($http){


  this.addProduct = function (product, brand, price){
    return $http({
      method: 'POST',
      url: '/api/products',
      data: {
        "title": product,
        "description" : brand,
        "price": price
      }
    });
  };

  this.getProducts = function (){
    return $http({
      method: 'GET',
      url: '/api/products',
    });
  };

  this.deleteProduct = function (id) {
    console.log(id);
    return $http({
      method: 'DELETE',
      url: '/api/products/'+id
    });
  };

  // this.editProduct = function(product, brand price){
  //   return $http({
  //     method: 'PUT',
  //     url:'/api/products'+id
  //   });
  // };

});

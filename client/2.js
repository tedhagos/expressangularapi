var abc = angular.module('xyz', []);

abc.controller('controller', function($scope, $http){
  var prom = $http.get('http://localhost:3000/api/author')
  prom.then(dataOk, dataErr);
  
  function dataOk(response) {
    $scope.authors = response.data;
  }

  function dataErr(err) {
    console.log(err);
  }
});




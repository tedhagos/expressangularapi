var app = angular.module('app', []);

let myService = function(){
  return {
    getUserData: function() {
      return "Brendan Eich";
    }
  }
}

app.factory('myService', myService);

app.controller('ctrl1', function($scope, myService){
  console.log($scope);
  $scope.name = myService.getUserData()  
});

app.controller('ctrl2', function($scope, myService){
  console.log($scope);
  $scope.name = myService.getUserData();
    
});



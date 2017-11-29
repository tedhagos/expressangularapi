var abc = angular.module('xyz', []);

abc.controller('controller', function($scope){
  $scope.user = {
    name: "James Gosling",
    occupation : "Java programmer"
  }

  $scope.something = "The quick brown fox";

});


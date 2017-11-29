var app = angular.module('app', []);

app.controller('controller', function($scope){
  $scope.user = {
    name: "James Gosling",
    occupation : "Java programmer"
  }

  $scope.something = "The quick brown fox";

});


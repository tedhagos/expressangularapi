var app = angular.module('app', []);

app.controller('controller', function($scope, $http){

  $scope.searchAuthor = function(name){
    $http.get("http://localhost:3000/api/author/" + name)
    .then(function(response){
       $scope.author = response.data;
    });    
  }
});

// DECORATOR DIRECTIVE
app.directive('searchEnter', function(){
  return {
    restrict: 'A',
    link : function(scope, el, attrs){
      el.bind('keydown', function(evt){
        if(evt.which === 13) {
          scope.searchAuthor(el.val());
        }
      });
    }
  }
});

// THIS IS A CONTENT DIRECTIVE
app.directive('authorCard',function(){
  return {
    restrict: 'AEC',
    templateUrl: "author-card.html"
  }
});


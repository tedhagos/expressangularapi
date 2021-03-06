var app = angular.module('app', ['ngRoute']);


app.controller('addBookController', ["$scope", "$http", function($scope, $http){
  
  $scope.findAuthor = function(name) {
    $http.get('http://localhost:3000/api/author/' + name)
         .then(function(response){
           $scope.author = response.data;
         });
  }
}]);

app.controller('allAuthorController', ["$scope", "authorsvc", function($scope, authorsvc){
  
  var prom = authorsvc.fetchAllAuthors();
  prom.then(function(response) {
    $scope.authors = response;
  });
}]);

app.controller('addAuthorController', ["$scope", "$http", function($scope, $http){

  $scope.author = {};
  $scope.author.books = [];

  $scope.newAuthor = function(){
    $scope.author.books.push($scope.tempbook);
    console.log($scope.author);
    $scope.tempbook = null;
    
    $http.post('http://localhost:3000/api/author', $scope.author);
  }
}]);

app.directive('authorCard', function(){
  return {
    templateUrl: "views/author-card.html"
  }
});


app.directive('searchEnter', function(){
  return {
    restrict: 'A',
    link: function(scope,el,attrs){
      el.bind('keydown', function(evt){
        if(evt.which == 13) {
          scope.findAuthor(el.val());
          console.log("Enter key");
        }
      })
    }
  }
});

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/all', {
      templateUrl: "views/all-authors.html",
      controller: "allAuthorController"
    })
    .when('/addauthor', {
      templateUrl: "views/add-author.html",
      controller: "addAuthorController"
    })
    .when('/addbook', {
      templateUrl: "views/add-book.html",
      controller: "addBookController"
    })
    .otherwise({redirectTo: '/'})
}]);

app.factory('authorsvc', ["$http", function($http){

  function fetchAllAuthors() {
    return $http.get('http://localhost:3000/api/author')
    .then(function(response){
      return response.data;
    })
  } 
  
  return {
    fetchAllAuthors : fetchAllAuthors
  }
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjEuanMiLCJjb250cm9sbGVycy5qcyIsImRpcmVjdGl2ZXMuanMiLCJyb3V0ZXMuanMiLCJzZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnXSk7XG4iLCJcbmFwcC5jb250cm9sbGVyKCdhZGRCb29rQ29udHJvbGxlcicsIFtcIiRzY29wZVwiLCBcIiRodHRwXCIsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHApe1xuICBcbiAgJHNjb3BlLmZpbmRBdXRob3IgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2F1dGhvci8nICsgbmFtZSlcbiAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICAgJHNjb3BlLmF1dGhvciA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICB9KTtcbiAgfVxufV0pO1xuXG5hcHAuY29udHJvbGxlcignYWxsQXV0aG9yQ29udHJvbGxlcicsIFtcIiRzY29wZVwiLCBcImF1dGhvcnN2Y1wiLCBmdW5jdGlvbigkc2NvcGUsIGF1dGhvcnN2Yyl7XG4gIFxuICB2YXIgcHJvbSA9IGF1dGhvcnN2Yy5mZXRjaEFsbEF1dGhvcnMoKTtcbiAgcHJvbS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgJHNjb3BlLmF1dGhvcnMgPSByZXNwb25zZTtcbiAgfSk7XG59XSk7XG5cbmFwcC5jb250cm9sbGVyKCdhZGRBdXRob3JDb250cm9sbGVyJywgW1wiJHNjb3BlXCIsIFwiJGh0dHBcIiwgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCl7XG5cbiAgJHNjb3BlLmF1dGhvciA9IHt9O1xuICAkc2NvcGUuYXV0aG9yLmJvb2tzID0gW107XG5cbiAgJHNjb3BlLm5ld0F1dGhvciA9IGZ1bmN0aW9uKCl7XG4gICAgJHNjb3BlLmF1dGhvci5ib29rcy5wdXNoKCRzY29wZS50ZW1wYm9vayk7XG4gICAgY29uc29sZS5sb2coJHNjb3BlLmF1dGhvcik7XG4gICAgJHNjb3BlLnRlbXBib29rID0gbnVsbDtcbiAgICBcbiAgICAkaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2F1dGhvcicsICRzY29wZS5hdXRob3IpO1xuICB9XG59XSk7IiwiXG5hcHAuZGlyZWN0aXZlKCdhdXRob3JDYXJkJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9hdXRob3ItY2FyZC5odG1sXCJcbiAgfVxufSk7XG5cblxuYXBwLmRpcmVjdGl2ZSgnc2VhcmNoRW50ZXInLCBmdW5jdGlvbigpe1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsZWwsYXR0cnMpe1xuICAgICAgZWwuYmluZCgna2V5ZG93bicsIGZ1bmN0aW9uKGV2dCl7XG4gICAgICAgIGlmKGV2dC53aGljaCA9PSAxMykge1xuICAgICAgICAgIHNjb3BlLmZpbmRBdXRob3IoZWwudmFsKCkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW50ZXIga2V5XCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufSk7IiwiXG5hcHAuY29uZmlnKFtcIiRyb3V0ZVByb3ZpZGVyXCIsIFwiJGxvY2F0aW9uUHJvdmlkZXJcIiwgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKXtcbiAgJGxvY2F0aW9uUHJvdmlkZXIuaGFzaFByZWZpeCgnJyk7XG4gICRyb3V0ZVByb3ZpZGVyXG4gICAgLndoZW4oJy9hbGwnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9hbGwtYXV0aG9ycy5odG1sXCIsXG4gICAgICBjb250cm9sbGVyOiBcImFsbEF1dGhvckNvbnRyb2xsZXJcIlxuICAgIH0pXG4gICAgLndoZW4oJy9hZGRhdXRob3InLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9hZGQtYXV0aG9yLmh0bWxcIixcbiAgICAgIGNvbnRyb2xsZXI6IFwiYWRkQXV0aG9yQ29udHJvbGxlclwiXG4gICAgfSlcbiAgICAud2hlbignL2FkZGJvb2snLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9hZGQtYm9vay5odG1sXCIsXG4gICAgICBjb250cm9sbGVyOiBcImFkZEJvb2tDb250cm9sbGVyXCJcbiAgICB9KVxuICAgIC5vdGhlcndpc2Uoe3JlZGlyZWN0VG86ICcvJ30pXG59XSk7IiwiXG5hcHAuZmFjdG9yeSgnYXV0aG9yc3ZjJywgW1wiJGh0dHBcIiwgZnVuY3Rpb24oJGh0dHApe1xuXG4gIGZ1bmN0aW9uIGZldGNoQWxsQXV0aG9ycygpIHtcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2F1dGhvcicpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSlcbiAgfSBcbiAgXG4gIHJldHVybiB7XG4gICAgZmV0Y2hBbGxBdXRob3JzIDogZmV0Y2hBbGxBdXRob3JzXG4gIH1cbn1dKTsiXX0=

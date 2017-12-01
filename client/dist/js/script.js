var app = angular.module('app', ['ngRoute']);


app.controller('addBookController', ["$scope", "$http", function($scope, $http){
  
  $scope.findAuthor = function(name) {
    $http.get('http://localhost:3000/api/author' + name)
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


app.directive('searcEnter', function(){
  return {
    restrict: 'A',
    link: function(scope,el,attrs){
      el.bind('keydown', function(evt){
        console.log(evt.which);
        if(evt.which == 13) {
          scope.findAuthor();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjEuanMiLCJjb250cm9sbGVycy5qcyIsImRpcmVjdGl2ZXMuanMiLCJyb3V0ZXMuanMiLCJzZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSb3V0ZSddKTtcbiIsIlxuYXBwLmNvbnRyb2xsZXIoJ2FkZEJvb2tDb250cm9sbGVyJywgW1wiJHNjb3BlXCIsIFwiJGh0dHBcIiwgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCl7XG4gIFxuICAkc2NvcGUuZmluZEF1dGhvciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYXV0aG9yJyArIG5hbWUpXG4gICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICRzY29wZS5hdXRob3IgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgfSk7XG4gIH1cbn1dKTtcblxuYXBwLmNvbnRyb2xsZXIoJ2FsbEF1dGhvckNvbnRyb2xsZXInLCBbXCIkc2NvcGVcIiwgXCJhdXRob3JzdmNcIiwgZnVuY3Rpb24oJHNjb3BlLCBhdXRob3JzdmMpe1xuICBcbiAgdmFyIHByb20gPSBhdXRob3JzdmMuZmV0Y2hBbGxBdXRob3JzKCk7XG4gIHByb20udGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICRzY29wZS5hdXRob3JzID0gcmVzcG9uc2U7XG4gIH0pO1xufV0pO1xuXG5hcHAuY29udHJvbGxlcignYWRkQXV0aG9yQ29udHJvbGxlcicsIFtcIiRzY29wZVwiLCBcIiRodHRwXCIsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHApe1xuXG4gICRzY29wZS5hdXRob3IgPSB7fTtcbiAgJHNjb3BlLmF1dGhvci5ib29rcyA9IFtdO1xuXG4gICRzY29wZS5uZXdBdXRob3IgPSBmdW5jdGlvbigpe1xuICAgICRzY29wZS5hdXRob3IuYm9va3MucHVzaCgkc2NvcGUudGVtcGJvb2spO1xuICAgIGNvbnNvbGUubG9nKCRzY29wZS5hdXRob3IpO1xuICAgICRzY29wZS50ZW1wYm9vayA9IG51bGw7XG4gICAgXG4gICAgJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRob3InLCAkc2NvcGUuYXV0aG9yKTtcbiAgfVxufV0pOyIsIlxuYXBwLmRpcmVjdGl2ZSgnYXV0aG9yQ2FyZCcsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvYXV0aG9yLWNhcmQuaHRtbFwiXG4gIH1cbn0pO1xuXG5cbmFwcC5kaXJlY3RpdmUoJ3NlYXJjRW50ZXInLCBmdW5jdGlvbigpe1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsZWwsYXR0cnMpe1xuICAgICAgZWwuYmluZCgna2V5ZG93bicsIGZ1bmN0aW9uKGV2dCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2dC53aGljaCk7XG4gICAgICAgIGlmKGV2dC53aGljaCA9PSAxMykge1xuICAgICAgICAgIHNjb3BlLmZpbmRBdXRob3IoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVudGVyIGtleVwiKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pOyIsIlxuYXBwLmNvbmZpZyhbXCIkcm91dGVQcm92aWRlclwiLCBcIiRsb2NhdGlvblByb3ZpZGVyXCIsIGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcil7XG4gICRsb2NhdGlvblByb3ZpZGVyLmhhc2hQcmVmaXgoJycpO1xuICAkcm91dGVQcm92aWRlclxuICAgIC53aGVuKCcvYWxsJywge1xuICAgICAgdGVtcGxhdGVVcmw6IFwidmlld3MvYWxsLWF1dGhvcnMuaHRtbFwiLFxuICAgICAgY29udHJvbGxlcjogXCJhbGxBdXRob3JDb250cm9sbGVyXCJcbiAgICB9KVxuICAgIC53aGVuKCcvYWRkYXV0aG9yJywge1xuICAgICAgdGVtcGxhdGVVcmw6IFwidmlld3MvYWRkLWF1dGhvci5odG1sXCIsXG4gICAgICBjb250cm9sbGVyOiBcImFkZEF1dGhvckNvbnRyb2xsZXJcIlxuICAgIH0pXG4gICAgLndoZW4oJy9hZGRib29rJywge1xuICAgICAgdGVtcGxhdGVVcmw6IFwidmlld3MvYWRkLWJvb2suaHRtbFwiLFxuICAgICAgY29udHJvbGxlcjogXCJhZGRCb29rQ29udHJvbGxlclwiXG4gICAgfSlcbiAgICAub3RoZXJ3aXNlKHtyZWRpcmVjdFRvOiAnLyd9KVxufV0pOyIsIlxuYXBwLmZhY3RvcnkoJ2F1dGhvcnN2YycsIFtcIiRodHRwXCIsIGZ1bmN0aW9uKCRodHRwKXtcblxuICBmdW5jdGlvbiBmZXRjaEFsbEF1dGhvcnMoKSB7XG4gICAgcmV0dXJuICRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRob3InKVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pXG4gIH0gXG4gIFxuICByZXR1cm4ge1xuICAgIGZldGNoQWxsQXV0aG9ycyA6IGZldGNoQWxsQXV0aG9yc1xuICB9XG59XSk7Il19

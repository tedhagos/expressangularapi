let app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/one', {
      templateUrl: "one.html",
      controller: "one"
    })
    .when('/two' ,{
      templateUrl: "two.html"
    })
    .when('/three' ,{
      templateUrl: "three.html"
    })
    .when('/four' ,{
      templateUrl: "four.html"
    })
    .otherwise({redirectTo: '/'})
});

app.controller('one', function($scope) {
  console.log($scope);
})
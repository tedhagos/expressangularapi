
app.config(function($routeProvider, $locationProvider){
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
      templateUrl: "views/add-book.html"
    })
    .otherwise({redirectTo: '/'})
});
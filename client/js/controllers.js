
app.controller('addBookController', function($scope, $http){
  
  $scope.findAuthor = function(name) {
    $http.get('http://localhost:3000/api/author' + name)
         .then(function(response){
           $scope.author = response.data;
         });
  }
});

app.controller('allAuthorController', function($scope, authorsvc){
  
  var prom = authorsvc.fetchAllAuthors();
  prom.then(function(response) {
    $scope.authors = response;
  });
});

app.controller('addAuthorController', function($scope, $http){

  $scope.author = {};
  $scope.author.books = [];

  $scope.newAuthor = function(){
    $scope.author.books.push($scope.tempbook);
    console.log($scope.author);
    $scope.tempbook = null;
    
    $http.post('http://localhost:3000/api/author', $scope.author);
  }
});
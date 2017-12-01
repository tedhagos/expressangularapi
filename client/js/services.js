
app.factory('authorsvc', function($http){

  function fetchAllAuthors() {
    return $http.get('http://localhost:3000/api/author')
    .then(function(response){
      return response.data;
    })
  } 
  
  return {
    fetchAllAuthors : fetchAllAuthors
  }
});
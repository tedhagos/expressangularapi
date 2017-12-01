var app = angular.module('app', []);

app.controller('controller', function($scope){
  $scope.numbers = [1,2,3,4];
  $scope.names = [
    {name: 'James Gosling', likes: 2 },
    {name: 'Misko Hevery', likes: 3 },
    {name: 'Ryan Dahl', likes: 4 },
    {name: 'Brendan Eich', likes:2 }
  ];
});


app.filter('stars', function(){
  return function(num) {
    let i = 0;
    let star = "";
    for(i = 0; i < num; i++) {
      star += '\u2605';
    }
    return star;
  }
});

app.filter('digitToWords', function(){
  return function(num){
    let retval = "";
    switch(num) {
      case 1:
        retval = "one";
        break;
      case 2:
        retval = "dos";
        break;
      case 3:
        retval = "trois";
        break;
      default:
        retval = "dunno";
    }
    return retval;
  }
});

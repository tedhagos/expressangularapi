
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
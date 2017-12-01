
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
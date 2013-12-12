$( document ).ready(function(){

  var words = ["Programming", "Ideas", "Design", "Curiosity", "Impact"];
  var $target;
  var wordIndex = 0;
// words
  $(function(){
    $target = $('#content');
    displayWord();
    window.setInterval(displayWord,2000);
  });

  var displayWord = function(){
    $target.fadeOut(2000,function(){
      $target.text(words[wordIndex]);
      $target.fadeIn(1500);
    });
    //reset the counter to 0 if it reachings the end of the array
    wordIndex++;
    if(wordIndex == words.length){
      wordIndex = 0;
    }
  };

  var $connect = $('#Connect');
  var $project = $('#Projects');
  var $timeline = $('#Timeline');

  var $end = $('#end');
  var $path = $('#path');

  $connect.on("click", function(){
    $(window).scrollTop($end.offset().top);
  });
  $project.on("click", function(){
    $(window).scrollTop($end.offset().top);
  });
  $timeline.on("click", function(){
    $(window).scrollTop($path.offset().top);
  });
//hover orange

});
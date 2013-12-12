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

//hover orange

});
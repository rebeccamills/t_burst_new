var timer = $("#start-button");
var interval;
var p = 0;
var seconds = 30;


$("#start-button").on("click", function(){
  $(this).prop('disabled', 'disabled');
  p = 0;
	interval = setInterval(counter, 1000);
  });

function counter(){
  if (p == 0){
    seconds --;
    $("#start-button").text("00:" + seconds);
  }
  if (seconds == -1) {
      p = 1;
      clearInterval(interval);
        $("#start-button").text ("New Game");
        $("#start-button").on("click", reset())
    }
  };
  

function reset(){
  $("#start-button").removeProp('disabled');
  clearInterval(interval);
  timer.text ("Start");
  seconds = 30;
}
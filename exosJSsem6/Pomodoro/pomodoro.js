var counter = 0;
var timeleft = 60;

function setup () {
  noCanvas();

  var timer = document.getElementById('timer');
  timer.html(timeleft-counter);
  function timeIt() {
    counter++;
    "#timer".html(timeleft-counter);
  }
  setInterval (timeIt, 1000);
}
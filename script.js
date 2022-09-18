// index.html  Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 1000);
}




// index.html patient admission play button
var play_btn = document.querySelector('#play-btn');

//audio file
var sound = new Audio("click2.mp3");

//play event
play_btn.addEventListener( 'click' , play );

function play(){
  sound.play();
}




// button pressed
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var c = this.innerHTML;
    eventHandle(c);
    addAnimation(c);
  });
}

// keydown
document.addEventListener("keydown",function(event){
  key=event.key;
  key=key.toLowerCase();//if user press a key in uppercase;
  eventHandle(key);
  addAnimation(key);
})


function eventHandle(c){
  switch (c) {
    case 'w'||'W':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      new Audio("sounds/tom-1.mp3").play();
      break;
    case 's':
      new Audio("sounds/tom-2.mp3").play();
      break;
    case 'd':
      new Audio("sounds/tom-3.mp3").play();
      break;
    case 'j':
      new Audio("sounds/snare.mp3").play();
      break;
    case 'k':
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case 'l':
      new Audio("sounds/crash.mp3").play();
      break;
  }
}
function addAnimation(key){
  var activeButton=document.querySelector('.'+key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove('pressed');
  },100);

}

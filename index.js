var drumLength = document.querySelectorAll(".drum").length;

function playSound(key){
    switch(key){
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();  
        case "a":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
        case "s":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
        case "d":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
        case "j":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
        case "d":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
        case "l":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
    }
}
function animation(currentKey){
   var active = document.querySelector("."+ currentKey);
   active.classList.add("pressed");
   setTimeout(function(){
      active.classList.remove("pressed")
   },1000);
}
for(var i=0; i<drumLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
}
document.addEventListener("keypress",function(event){
    playSound(event.key);
    animation(event.key);
});







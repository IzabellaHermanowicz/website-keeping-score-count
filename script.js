var player1 = document.getElementById("p1");
var player2 = document.querySelector("#p2");
var reset = document.getElementById("reset");
var p1score=0;
var p2score=0;
var display1 = document.getElementById("p1d");
var display2 = document.getElementById("p2d");
var numInput = document.querySelector("input");
var rounds = document.getElementById("number");
var gameover = false;
var winningscore = 5;

player1.addEventListener("click", function(){
  if(!gameover){
      p1score++;
    if (p1score === winningscore){
        display1.classList.add("winner");
       gameover=true;
    }
     display1.textContent =p1score;
  } 
});

player2.addEventListener("click", function(){
    if(!gameover){
      p2score++;
    if (p2score === winningscore){
        display2.classList.add("winner");
       gameover=true;
    }
    display2.textContent =p2score;
  } 
});

function reseting(){
    p1score=0;
    p2score=0;
    display1.textContent=0;
    display2.textContent=0;
    display1.classList.remove("winner");
    display2.classList.remove("winner");
    gameover=false; 
}

reset.addEventListener("click", function(){
   reseting();
});

numInput.addEventListener("change", function(){
    rounds.textContent = this.value;
    winningscore= Number(this.value);
    reseting();
});
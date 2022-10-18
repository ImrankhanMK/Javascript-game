var greenCar = document.getElementById("greencar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result");
const score =document.getElementById("score");
var game = document.getElementById("game");
var jumpsound = document.getElementById("jumpsound");
var card = document.getElementById("card");
var counter = 0 ;
var hide = document.getElementById("score-div");
// greencar move
greenCar.addEventListener("animationiteration",function(){
    var random = ((Math.floor(Math.random()*3+1))*75)
    greenCar.style.left = random + "px" ;
    counter++
    document.getElementById("display").innerHTML=counter;
})



//racecar move
window.addEventListener("keydown",function(e){
    if (e.keyCode == "39"){var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
    if(greenCar.style.animationPlayState == "paused"){
        e.preventDefault();
    }
    else if (raceCarLeft < 150 ){raceCar.style.left = (raceCarLeft+75)+"px";
    jumpsound.play()}  
};
    if (e.keyCode == "37"){
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if(greenCar.style.animationPlayState == "paused"){
            e.preventDefault();
        }
     else if(raceCarLeft > 75 ){raceCar.style.left = (raceCarLeft-75)+"px";
     jumpsound.play()} 
    };
})

// gameove
setInterval( function gameOver(){
    var greenCarTop = parseInt(window.getComputedStyle(greenCar).getPropertyValue("top"));
    var greenCarLeft = parseInt(window.getComputedStyle(greenCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        if((greenCarLeft===(raceCarLeft+10))&&(greenCarTop > 260)&&(greenCarTop < 449)){
            result.style.display = "block";
            game.style.display = "none";
            hide.style.display = "none";
            card.style.display = "none" ;
            // document.getElementById("button-div").style.display ="none";
            score.innerHTML = `SCORE : ${counter}`;
            counter = 0 ; 
        }
},10)
// play & pause
window.addEventListener("keydown",function(e){
    if (e.keyCode == "83"){greenCar.style.animationPlayState = "running"}
    if (e.keyCode == "32"){greenCar.style.animationPlayState = "paused"}
    // if (e.keyCode == "80"){greenCar.style.animationPlayState = "running"}
    if (e.keyCode == "82"){location.reload()}
})
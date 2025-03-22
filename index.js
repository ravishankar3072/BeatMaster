//Detecting mouse clicks
let noOfButtons=document.querySelectorAll(".drum").length;
for(let i=0;i<noOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        let buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}

//Detecting keyboard strokes
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "B":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "e":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "a":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "t":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(buttonInnerHtml);
    }
}

//Button animations
function buttonAnimation(currentKey){
    let activeButton=document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

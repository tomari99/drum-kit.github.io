function makeSound(key){
    switch (key){
        case "a":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "f":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            const kick = new Audio("sounds/kick-bass.mp3");   
            kick.play();
            break;     
        default:console.log(key);
    }
}


function buttonAnimation(key){
    const activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}



const numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(let i = 0 ; i < numberOfDrumButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);         
    })
}


document.addEventListener("keypress", function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
})
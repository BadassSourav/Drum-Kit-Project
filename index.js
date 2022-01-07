let btn = document.querySelectorAll(".drum");

// On Left-Click
function click(){
    var btnInnerHTML = this.innerHTML;
    if(btnInnerHTML=="w"){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    else if(btnInnerHTML=="a"){
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
    else if(btnInnerHTML=="s"){
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }
    else if(btnInnerHTML=="d"){
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
    else if(btnInnerHTML=="j"){
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    }
    else if(btnInnerHTML=="k"){
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
    else if(btnInnerHTML=="l"){
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    }
    animateBtn(btnInnerHTML);
}

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", click);
}

// On Button-Click
document.body.addEventListener("keydown", function(event){
    var key = event.key;
    if(key=="w"){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    else if(key=="a"){
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
    else if(key=="s"){
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }
    else if(key=="d"){
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
    else if(key=="j"){
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    }
    else if(key=="k"){
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
    else if(key=="l"){
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    }
    animateBtn(key);
});

// Animation On Button Click
function animateBtn(key){
    var activeKey = document.querySelector("."+key);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100);
}
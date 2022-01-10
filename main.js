let container = document.getElementById('container');
let clear = document.getElementById('clear');
let h1 = document.querySelector('h1');
let red = document.getElementById('red');
let white = document.getElementById('white');
let black = document.getElementById('black');
let buttons = document.getElementsByClassName('button');






//Instead of making all the boxes with one loop. Make each row seperately.
for (i=0; i < 32; i++) {
    let box = document.createElement('div');
    box.classList.add("box-style");
   // document.getElementsByClassName('box-style');
   container.appendChild(box);


   //Function for mouseover event
function hoverBlack() {
    box.style.backgroundColor = 'black';
    box.style.transition = "0.5s"
}  
 
function hoverRed() {
    box.style.backgroundColor = "red";
    box.style.transition = "0.5s"

}    

function hoverWhite() {
    box.style.backgroundColor = "white";
    box.style.transition = "0.5s"

}    

function clearBoard() {
    clear.onclick = pressButton(0);
    box.style.backgroundColor = 'white';
   

}

//Function to show what button has been pressed

function pressButton(x) {
    if (x === 0) {
    buttons[0].classList.add('button-styling');
    buttons[1].classList.remove('button-styling');
    buttons[2].classList.remove('button-styling');
    buttons[3].classList.remove('button-styling');
    } else if (x === 1) {
    buttons[0].classList.remove('button-styling');
    buttons[1].classList.add('button-styling');
    buttons[2].classList.remove('button-styling');
    buttons[3].classList.remove('button-styling');
    }
    else if (x === 2) {
    buttons[0].classList.remove('button-styling');
    buttons[1].classList.remove('button-styling');
    buttons[2].classList.add('button-styling');
    buttons[3].classList.remove('button-styling');
    }
    else if (x === 3) {
    buttons[0].classList.remove('button-styling');
    buttons[1].classList.remove('button-styling');
    buttons[2].classList.remove('button-styling');
    buttons[3].classList.add('button-styling');
    }
}

console.log();

//Function to make red background
    function makeRed() {
        red.onclick = pressButton(3);
        box.addEventListener('mouseover', hoverRed);
    }
//Function to make white background
    function makeWhite() {
        white.onclick = pressButton(1);
        box.addEventListener('mouseover', hoverWhite);
    }
 function makeBlack() {
        black.onclick = pressButton(2);
        box.addEventListener('mouseover', hoverBlack);
    }

//box.addEventListener('mouseover', hoverBlack);
red.addEventListener('click', makeRed);
white.addEventListener('click', makeWhite);
black.addEventListener('click', makeBlack);
clear.addEventListener('click', clearBoard);



  
}





/*
function erase() {
    box.className = "undo"
}

function makeRed() {
    box.className = "red:hover";
}
*/
//red.addEventListener('click', makeRed);
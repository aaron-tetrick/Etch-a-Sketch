let h1 = document.querySelector('h1');

let gridSizeBtn = document.getElementById('grid-btn');

let container = document.getElementById('grid-container');

let clear = document.getElementById('clear');
let white = document.getElementById('white');
let black = document.getElementById('black');
let rainbow = document.getElementById('rainbow');
let buttons = document.getElementsByClassName('button');
let slider = document.getElementById('slider');



//Function for the user to customize the size of the grid


gridSizeBtn.onclick = () => gridSize();

    function gridSize() {
        //let value = prompt("Enter the size of the grid for each side (Max: 64)");
        let value = 8
if (typeof Number(value) !== 'number' || isNaN(value) || value > 16 || value < 1) {
    } else {
        return value;
    }
}

let size = 8//gridSize();
console.log(size);

//Instead of making all the boxes with one loop. Make each row seperately.
for (i = 0; i < (size*size); i++) {
    let box = document.createElement('div');
    box.classList.add("box-style");
    container.style.gridTemplateColumns = `repeat(${size}, 0fr)`;
  // document.getElementsByClassName('box-style');
   container.appendChild(box);


//Event Listeners for button selections
clear.addEventListener('click', clearBoard);
white.addEventListener('click', makeWhite);
black.addEventListener('click', makeBlack);



rainbow.onclick = makeRainbow;


//Function to clear the board
function clearBoard() {
    clear.onclick = pressButton(0);
    box.addEventListener('mouseover', hoverWhite);

    function hoverWhite() {
        box.style.backgroundColor = "white";
        box.style.transition = "0.5s"
    } 
}

//Function to make white background
    function makeWhite() {
        white.onclick = pressButton(1);
        box.addEventListener('mouseover', hoverWhite);

        function hoverWhite() {
            box.style.backgroundColor = "white";
            box.style.transition = "0.5s"    
    } 
}

//Function to make black background
 function makeBlack() {
        black.onclick = pressButton(2);
        box.addEventListener('mouseover', hoverBlack);

        function hoverBlack() {
            box.style.backgroundColor = 'black';
            box.style.transition = "0.5s"
    }  
        
}


//Function to make rainbow background
    function makeRainbow() { 
        rainbow.onclick = pressButton(3);
        box.addEventListener('mouseover', hoverRainbow);


        function hoverRainbow() {
            box.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
            box.style.transition = "0.5s"
    }    
}


//Function to show what button has been pressed

function pressButton(x) {
    if (x === 0) {
    buttons[0].classList.add('button-styling-clear');
    buttons[1].classList.remove('button-styling-white');
    buttons[2].classList.remove('button-styling-black');
    buttons[3].classList.remove('button-styling-rainbow');
    box.style.backgroundColor = 'white';
    buttons[3].style.color = 'black';

    } else if (x === 1) {
    buttons[0].classList.remove('button-styling-clear');
    buttons[1].classList.add('button-styling-white');
    buttons[2].classList.remove('button-styling-black');
    buttons[3].classList.remove('button-styling-rainbow');
    buttons[3].style.color = 'black';
    
    }
    else if (x === 2) {
    buttons[0].classList.remove('button-styling-clear');
    buttons[1].classList.remove('button-styling-white');
    buttons[2].classList.add('button-styling-black');
    buttons[3].classList.remove('button-styling-rainbow');
    buttons[3].style.color = 'black';
    }
    else if (x === 3) {
    buttons[0].classList.remove('button-styling-clear');
    buttons[1].classList.remove('button-styling-white');
    buttons[2].classList.remove('button-styling-black');
    buttons[3].classList.add('button-styling-rainbow');
    buttons[3].style.color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    }
}

}




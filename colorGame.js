var numSquares = 9;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var mediumBtn = document.querySelector("#mediumBtn");
var hardBtn = document.querySelector("#hardBtn");
var gameModeBtn = hardBtn;


colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
  //Generate all new colors
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  this.textContent = "New Colors"

  for(var i = 0; i<squares.length; i++){
    squares[i].style.background = colors[i];
  }

  h1.style.backgroundColor = "steelblue"

  gameModeBtn.style.backgroundColor = "steelblue";
});

function buttonReset(){
  buttons = document.querySelectorAll("button");
  for (i=0; i<4; i++){
    buttons[i].classList.remove("selected")
    buttons[i].style.background = "none";


  }
}

easyBtn.addEventListener("click", function(){
   buttonReset();
   easyBtn.classList.add("selected");
   this.style.background = "steelblue";
   gameModeBtn = this;

   numSquares = 3;
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;

   for(var i = 0; i < squares.length; i ++){
     if(colors[i]){
       squares[i].style.background = colors[i];
     } else {
       squares[i].style.display = "none";
     }
   }
});


mediumBtn.addEventListener("click", function(){
  buttonReset();
  mediumBtn.classList.add("selected");
  this.style.background = "steelblue";
  // easyBtn.classList.remove("selected");
  // hardBtn.classList.remove("selected");
  gameModeBtn = this;

  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(var i = 0; i < squares.length; i ++){
    if(colors[i]){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }

  }
});

hardBtn.addEventListener("click", function(){
  buttonReset();
  //  easyBtn.classList.remove("selected");
  //  mediumBtn.classList.remove("selected");
   hardBtn.classList.add("selected");
   this.style.background = "steelblue";
   gameModeBtn = this;

   numSquares = 9;
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;

   for(var i = 0; i < squares.length; i ++){
       squares[i].style.background = colors[i];
       squares[i].style.display = "block";
     }
});

for(var i=0; i< squares.length; i++){
  //add colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add listeners
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor)
    if(clickedColor == pickedColor){
      messageDisplay.textContent = "Correct"
      changeColors(pickedColor)
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?"
      //
      gameModeBtn.style.backgroundColor = pickedColor;
    } else {
      this.style.backgroundColor = "#232323"
      messageDisplay.textContent = "Try Again"
    }
  });

}

function changeColors(color){
  //loop through all squares
  for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor =  color;
  }
  //Change each color to match a given color
}

//Return an array of random colors
function generateRandomColors(num){
  var arr = [];

  for(var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor());
  }

  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";

}

//Create a random color
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

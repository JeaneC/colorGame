var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")

colorDisplay.textContent = pickedColor;

console.log(pickedColor)

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

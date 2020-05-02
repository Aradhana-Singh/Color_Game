var colors = generateColors(6);
var pickedColor;
var clickedColor;
var check = document.querySelector("#check");
var squares = document.querySelectorAll(".square");
var newGame = document.querySelector("#newGame");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var h1 = document.querySelector("h1");

hard.classList.add("selected");
var colorDisplay = document.querySelector("#colorDisplay");
startGame();
newGame.addEventListener("click",function(){
    colors=generateColors(6);
    startGame();
    easy.classList.remove("selected");
    hard.classList.remove("selected");
});
easy.addEventListener("click",function(){
    colors = generateColors(3);
    startGame();
    easy.classList.add("selected");
    hard.classList.remove("selected");
});
hard.addEventListener("click",function(){
    colors = generateColors(6);
    startGame();
    hard.classList.add("selected");
    easy.classList.remove("selected");
});


function generateColors(num){
    var color =[];
    for(var i=0 ; i<num ;i++){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var col = "rgb(" + r + ", "+ g + ", " + b +")";
        color.push(col);
    }
    pickedColor = color[Math.floor(Math.random()*num)];
    return color;
}
function startGame(){
    check.textContent="";
    h1.style.backgroundColor = "steelblue";
    newGame.textContent = "NEW COLORS";
    for(var i =0 ;i<6;i++){
        squares[i].style.backgroundColor = "rgba(0,0,0,0)";
    }
    colorDisplay.textContent = pickedColor;
    for(var i=0 ;i<colors.length ; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",whenClicked);
    }
}
function whenClicked(){
    var col = this.style.backgroundColor;
    if(col == pickedColor){
        gameWon(col);
    }
    else{
        this.style.backgroundColor = "rgba(0, 0,0,0)";
        check.textContent = "Try  Again!";
    }
}
function gameWon(col){
    for(var i = 0 ;i<colors.length ;i++){
        squares[i].style.backgroundColor = col;
    }
    document.querySelector("h1").style.backgroundColor =col;
    check.textContent = "Correct";
    newGame.textContent = "Play Again?";
}

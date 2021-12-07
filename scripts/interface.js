playerTimer();

document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  if (handleMove(event.target.id)){
    setTimeout(() => {
        if (playerTime == 0 ){
            alert ("Ganhador  ✖️");
        } else {
            alert ("Ganhador  ⭕");            
        }
       
    }, 10);
  };

 updateSquares(event.target.id);
}

function updateSquares(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`;
    playerTimer();
}

function updateSquaresReset() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let symbol = board[square.id];

    if (symbol == "") {
      square.innerHTML = `<div class=""></div>`;
    }
  });
  playerTimer();
}

function init(){
    document.getElementsByClassName("init")[0].style.display = "none";
    document.getElementsByClassName("stage")[0].style.display = "block";
   
}

function reset(){
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    symbols = ["o", "x"];
    gameOver = false;

    updateSquaresReset();
}

function playerTimer(){
    if(gameOver){  
        return;
    }

    if (playerTime == 0 ){
        document.getElementById("h1").innerHTML = "VEZ DO JOGADOR ✖️";
    } else {
        document.getElementById("h1").innerHTML = "VEZ DO JOGADOR ⭕";
    }
}
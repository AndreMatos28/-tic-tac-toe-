document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  if (handleMove(event.target.id)){
    setTimeout(() => {
        alert ("Ganhador " + playerTime);
    }, 10);
  };

 updateSquares(event.target.id);
}

function updateSquares(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`;
}

// function updateSquares() {
//   let squares = document.querySelectorAll(".square");

//   squares.forEach((square) => {
//     let symbol = board[square.id];

//     if (symbol != "") {
//       square.innerHTML = `<div class="${symbol}"></div>`;
//     }
//   });
// }

let pattern = [0, 0, 1, 1, 2, 2, 2, 0, 0];

function show(pattern) {
  let board = document.getElementById("board");
  let title = document.createElement("h1");
  title.innerText = "Tic Tac Toe    😆 vs 😡";
  board.appendChild(title);
  for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = pattern[i] === 2 ? "😆" : pattern[i] === 1 ? "😡" : "";
    board.appendChild(cell);
    if (i % 3 === 2) {
      board.appendChild(document.createElement("br"));
    }
  }
}

show(pattern);

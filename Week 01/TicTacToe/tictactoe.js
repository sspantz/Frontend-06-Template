let pattern = [
  [1, 0, 1],
  [0, 2, 0],
  [2, 0, 0],
];

function show(pattern) {
  let board = document.getElementById("board");
  let title = document.createElement("h1");
  title.innerText = "Tic Tac Toe    😆 vs 😡";
  board.appendChild(title);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.innerText =
        pattern[j][i] === 2 ? "😆" : pattern[j][i] === 1 ? "😡" : "";
      board.appendChild(cell);
    }
    board.appendChild(document.createElement("br"));
  }
}

show(pattern);

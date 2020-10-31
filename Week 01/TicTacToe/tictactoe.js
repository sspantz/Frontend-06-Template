let pattern = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let color = 2;
function show(pattern) {
  let board = document.getElementById("board");
  board.innerHTML = "";

  let title = document.createElement("h1");
  title.innerText = "Tic Tac Toe    😆 vs 😡";
  board.appendChild(title);

  for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = pattern[i] === 2 ? "😆" : pattern[i] === 1 ? "😡" : "";
    cell.addEventListener("click", () => move(i));
    board.appendChild(cell);
    if (i % 3 === 2) {
      board.appendChild(document.createElement("br"));
    }
  }
}

function move(i) {
  pattern[i] = color;
  color = 3 - color;
  show(pattern);
}

show(pattern);

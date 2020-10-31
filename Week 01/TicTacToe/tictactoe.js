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

  let reset = document.createElement("div");
  reset.id = "reset";
  reset.innerText = "RESET";
  board.appendChild(reset);
  reset.addEventListener("click", () => {
    show(this.reset());
  });
}

function reset() {
  color = 2;
  pattern = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  return pattern;
}
function move(i) {
  if (pattern[i] !== 0) return; // prevent duplicate movement
  pattern[i] = color;
  color = switchColor();
  show(pattern);

  color = switchColor();
  if (check()) {
    alert(color === 2 ? `😆 is winer!` : `😡 is winner!`);
  }
  color = switchColor();
}

function switchColor() {
  return 3 - color;
}

function check() {
  // 8 situations
  if (pattern[0] && pattern[0] === pattern[1] && pattern[1] === pattern[2])
    return true;
  if (pattern[3] && pattern[3] === pattern[4] && pattern[4] === pattern[5])
    return true;
  if (pattern[6] && pattern[6] === pattern[7] && pattern[7] === pattern[8])
    return true;
  if (pattern[0] && pattern[0] === pattern[3] && pattern[3] === pattern[6])
    return true;
  if (pattern[1] && pattern[1] === pattern[4] && pattern[4] === pattern[7])
    return true;
  if (pattern[2] && pattern[2] === pattern[5] && pattern[5] === pattern[8])
    return true;
  if (pattern[0] && pattern[0] === pattern[4] && pattern[4] === pattern[8])
    return true;
  if (pattern[2] && pattern[2] === pattern[4] && pattern[4] === pattern[6])
    return true;
  else return false;
}

show(pattern);

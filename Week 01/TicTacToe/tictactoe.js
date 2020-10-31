// 😆 the one never lose
// 😡 the one never win

let pattern = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let color = 2;

let gameSet = false;
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
    cell.addEventListener("click", () => userMove(i));
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
  gameSet = false;
  color = 2;
  pattern = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  return pattern;
}
function userMove(i) {
  if (pattern[i] !== 0 || gameSet === true) return; // prevent duplicate movement
  pattern[i] = color;
  color = switchColor();
  show(pattern);

  computerMove(i);

  if (willWin(pattern, color)) {
    console.log(color === 2 ? "😆 will win." : "😡 will win.");
  }

  color = switchColor();
  if (check(pattern, color)) {
    gameSet = true;
    alert(color === 2 ? `😆 is winner!` : `😡 is winner!`);
  }
  color = switchColor();
}

function computerMove() {
  let choice = bestChoice(pattern, color);
  if (choice.point) {
    pattern[choice.point[0]] = color;
  }
  if (check(pattern, color)) {
    gameSet = true;
    alert(color === 2 ? `😆 is winner!` : `😡 is winner!`);
  }
  color = switchColor();
  show(pattern);
}

function switchColor() {
  return 3 - color;
}

function willWin(pattern, color) {
  for (let i = 0; i < 9; i++) {
    if (pattern[i]) continue;
    let temp = clone(pattern);
    temp[i] = color;
    if (check(temp, color)) {
      return true;
    }
  }
  return null;
}

function clone(obj) {
  return Object.create(obj);
}

function check(pattern, color) {
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

function bestChoice(pattern, color) {
  let p;
  if ((p = willWin(pattern, color))) {
    return {
      point: p,
      result: 1,
    };
  }

  let result = -2;
  let point = null;
  for (let i = 0; i < 9; i++) {
    if (pattern[i]) continue;
    let temp = clone(pattern);
    temp[i] = color;
    let r = bestChoice(temp, 3 - color).result;

    if (-r > result) {
      result = -r;
      point = [i];
    }
  }

  return {
    point: point,
    result: point ? result : 0,
  };
}

show(pattern);
console.log(bestChoice(pattern, color));

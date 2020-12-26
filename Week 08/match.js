// find abcdefg
function match(str) {
  let state = start;
  for (let c of str) {
    state = state(c);
  }
  return state === end;
}

function start(c) {
  if (c === "a") return foundA;
  else return start;
}

function end(c) {
  // trap, won't go to any other state as if it goes here
  return end;
}

function foundA(c) {
  if (c === "b") return foundB;
  else return start(c);
}

function foundB(c) {
  if (c === "c") return foundC;
  else return start(c);
}

function foundC(c) {
  if (c === "d") return foundD;
  else return start(c);
}

function foundD(c) {
  if (c === "e") return foundE;
  else return start(c);
}

function foundE(c) {
  if (c === "f") return foundF;
  else return start(c);
}

function foundF(c) {
  if (c === "g") return end;
  else return start(c);
}

console.log(match("abcdefg"));

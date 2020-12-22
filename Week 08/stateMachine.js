function match(string) {
  let state = start;
  for (let c of string) {
    state = state(c);
  }
  return state === end;
}

function start(c) {
  if (c === "a") return foundA;
  else return start;
}

function end(c) {
  return end;
}

function foundA(c) {
  if (c === "b") return foundB;
  else return start(c);
}

function foundB(c) {
  if (c === "a") return foundA2;
  else return start(c);
}

function foundA2(c) {
  if (c === "b") return foundB2;
  else return start;
}

function foundB2(c) {
  if (c === "a") return foundA3;
  else return start(c);
}

function foundA3(c) {
  if (c === "b") return foundB3;
  else return start;
}

function foundB3(c) {
  if (c === "x") return end;
  else if (c === "a") return foundB2(c);
  else return start(c);
}

console.log(match("abcabx"));
console.log(match("aabbccaabbxx"));
console.log(match("abababx"));

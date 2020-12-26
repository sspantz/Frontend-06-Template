function match(str) {
  let state = start;
  for (let s of str) {
    state = state(s);
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
  if (c === "b") return end;
  else return start;
}

console.log(match("ab"));
console.log(match("xabj"));

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
  if (c === "b") return end;
  else return start(c);
}

console.log(match("ab"));
console.log(match("xabj"));
console.log(match("aabb"));

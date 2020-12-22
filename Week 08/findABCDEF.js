function match(string) {
  let last;
  let foundA = false,
    foundB = false,
    foundC = false,
    foundD = false,
    foundE = false;
  for (let s of string) {
    if (s === "a") {
      foundA = true;
      foundB = false;
      foundC = false;
      foundD = false;
      foundE = false;
      last = s;
      continue;
    }
    if (s === "b" && last === "a" && foundA === true) {
      foundB = true;
      last = s;
      continue;
    }
    if (s === "c" && last === "b" && foundB === true) {
      foundC = true;
      last = s;
      continue;
    }
    if (s === "d" && last === "c" && foundC === true) {
      foundD = true;
      last = s;
      continue;
    }
    if (s === "e" && last === "d" && foundD === true) {
      foundE = true;
      last = s;
      continue;
    }
    if (s === "f" && last === "e" && foundE === true) {
      last = s;
      return true;
    }
    last = s;
    foundA = false;
    foundB = false;
    foundC = false;
    foundD = false;
    foundE = false;
  }
  return false;
}

console.log(match("abcdef"));
console.log(match("abcvef"));
console.log(match("abcddeeff"));
console.log(match("aabbccddeeffgg"));
console.log(match("123abcdefghi"));

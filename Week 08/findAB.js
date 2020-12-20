function match(string) {
  let foundA = false;
  for (let s of string) {
    if (s === "a") {
      foundA = true;
      continue;
    }
    if (foundA) {
      if (s === "b") return true;
      else foundA = false;
    }
  }
  return false;
}

console.log(match("sadfacb"));
console.log(match("sabfacb"));
console.log(match("abfacb"));
console.log(match("sabfaab"));

function findA(str) {
  for (let s of str) {
    if (s === "a") return true;
  }
  return false;
}

console.log(findA("123hi"));
console.log(findA("123ha"));

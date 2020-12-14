function StringToNumber(str) {
  let result = 0;
  const prefix = str.slice(0, 2);
  let string;
  const prefixs = {
    "0b": 2,
    "0o": 8,
    "0x": 16,
  };
  let base = prefixs[prefix] ? prefixs[prefix] : 10;

  if (prefix === "0b" || prefix === "0o" || prefix === "0x") {
    string = str.slice(2);
  } else {
    string = str;
  }

  for (let i = string.length - 1; i >= 0; i--) {
    const digit = charToDigit(string[i]);
    if (digit >= base) return NaN;
    result += Math.pow(base, string.length - 1 - i) * digit;
  }

  return result;
}

console.log(StringToNumber("0x1234"));
console.log(StringToNumber("0o1234"));
console.log(StringToNumber("0b1234"));
console.log(StringToNumber("1234"));
console.log(StringToNumber("0x1010"));
console.log(StringToNumber("0o1010"));
console.log(StringToNumber("0b1010"));
console.log(StringToNumber("1010"));

console.log(Number("0x1234"));
console.log(Number("0o1234"));
console.log(Number("0b1234"));
console.log(Number("1234"));
console.log(Number("0x1010"));
console.log(Number("0o1010"));
console.log(Number("0b1010"));
console.log(Number("1010"));
function charToDigit(char) {
  const digits = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  return digits[char];
}

function NumberToString(num, base) {}

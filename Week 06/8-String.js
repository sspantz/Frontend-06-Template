function UTF8_Encoding(string) {
  let chars = [];
  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    if (char <= 0x7f) {
      chars.push(char);
    } else if (char <= 0x7ff) {
      chars.push((char >> 6) | 192);
      chars.push((char & 63) | 128);
    } else if (char <= 0xffff) {
      chars.push((char >> 12) | 124);
      chars.push(((char >> 6) & 63) | 128);
      chars.push((char & 63) | 128);
    }
  }
  return Buffer.from(chars);
}

console.log(UTF8_Encoding("Hello, World!"));

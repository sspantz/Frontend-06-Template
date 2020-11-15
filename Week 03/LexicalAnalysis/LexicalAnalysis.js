console.log("Loaded");

/**
 * TokenNumber: 1 2 3 4 5 6 7 8 9 0 and its combinations
 * Operator: + - * /
 * Whitespace: <SP>
 * LineTerminator: <LF> <CR>
 */

/**
 * <Expression>∷=
 *     <AdditiveExpression><EOF>
 *
 * <AdditiveExpression>::=
 *     <MultiplicativeExpression>
 *     |<AdditiveExpression><+><MultiplicativeExpression>
 *     |<AdditiveExpression><-><MultiplicativeExpression>
 *
 * <MultiplicativeExpression>::=
 *     <Number>
 *     |<MultiplicativeExpression><*> <Number>
 *     |<MultiplicativeExpression></> <Number>
 */

var regexp = /([0-9\.]+)|([ \t]+)|([\r\n]+)|(\*)|(\/)|(\+)|(\-)/g;

var dictionary = ["Number", "Whitespace", "LineTerminator", "*", "/", "+", "-"];

function* tokenize(source) {
  var result = null;
  var lastIndex = 0;
  while (true) {
    lastIndex = regexp.lastIndex;
    result = regexp.exec(source);

    if (!result) break;

    if (regexp.lastIndex - lastIndex > result[0].length) break;

    let token = {
      type: null,
      value: null,
    };

    for (let i = 1; i <= dictionary.length; ++i) {
      if (result[i]) {
        token.type = dictionary[i - 1];
      }
    }
    token.value = result[0];
    yield token;
  }
}

for (let token of tokenize("1024 * 12 - 123 + 47")) {
  console.log(token);
}

function Expression(tokens) {}

function AdditiveExpression(source) {}

function MultiplicativeExpression(source) {
  console.log(source);
}

MultiplicativeExpression("82 * 36 - 3");

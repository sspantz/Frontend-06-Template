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

function tokenize(source) {
  var result = null;
  while (true) {
    result = regexp.exec(source);

    if (!result) break;

    for (let i = 1; i <= dictionary.length; ++i) {
      if (result[i]) {
        console.log(dictionary[i - 1]);
      }
    }
    // console.log(result);
  }
}

tokenize("1024 + 10 * 25");

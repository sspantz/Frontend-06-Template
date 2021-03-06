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

let source = [];

for (let token of tokenize("1024 * 12 - 123 + 47")) {
  if (token.type !== "Whitespace" && token.type !== "LineTerminator")
    source.push(token);
}

function Expression(tokens) {
  if (
    source[0].type === "AdditiveExpression" &&
    source[1] &&
    source[1].type === "EOF"
  ) {
    let node = {
      type: "Expression",
      children: [source.shift(), source[0].shift()],
    };
    source.unshift(node);
    return node;
  }
  AdditiveExpression(source);
  return Expression(source);
}

function AdditiveExpression(source) {
  if (source[0].type === "MultiplicativeExpression") {
    let node = {
      type: "AdditiveExpression",
      children: [source[0]],
    };
    source[0] = node;
    return AdditiveExpression(source);
  }
  if (
    source[0].type === "AdditiveExpression" &&
    source[1] &&
    source[1].type === "+"
  ) {
    let node = {
      type: "AdditiveExpression",
      operator: "+",
      children: [],
    };
    node.children.push(source.shift());
    node.children.push(source.shift());
    MultiplicativeExpression(source);
    node.children.push(source.shift());
    source.unshift(node);
    return AdditiveExpression(source);
  }

  if (
    source[0].type === "AdditiveExpression" &&
    source[1] &&
    source[1].type === "-"
  ) {
    let node = {
      type: "AdditiveExpression",
      operator: "-",
      children: [],
    };
    node.children.push(source.shift());
    node.children.push(source.shift());
    MultiplicativeExpression(source);
    node.children.push(source.shift());
    source.unshift(node);
    return AdditiveExpression(source);
  }
  if (source[0].type === "AdditiveExpression") return source[0];
  MultiplicativeExpression(source);
  return AdditiveExpression(source);
}

function MultiplicativeExpression(source) {
  if (source[0].type === "Number") {
    let node = {
      type: "MultiplicativeExpression",
      children: [source[0]],
    };
    source[0] = node;
    return MultiplicativeExpression(source);
  }
  if (
    source[0].type === "MultiplicativeExpression" &&
    source[1] &&
    source[1].type === "*"
  ) {
    let node = {
      type: "MultiplicativeExpression",
      operator: "*",
      children: [],
    };
    node.children.push(source.shift());
    node.children.push(source.shift());
    node.children.push(source.shift());
    source.unshift(node);
    return MultiplicativeExpression(source);
  }

  if (
    source[0].type === "MultiplicativeExpression" &&
    source[1] &&
    source[1].type === "/"
  ) {
    let node = {
      type: "MultiplicativeExpression",
      operator: "/",
      children: [],
    };
    node.children.push(source.shift());
    node.children.push(source.shift());
    node.children.push(source.shift());
    source.unshift(node);
    return MultiplicativeExpression(source);
  }
  if (source[0].type === "MultiplicativeExpression") return source[0];

  return MultiplicativeExpression(source);
}

console.log(AdditiveExpression(source));

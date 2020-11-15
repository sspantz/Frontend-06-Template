# 学习笔记
> 使用LL算法构建AST

Table of contents:
四则运算
正则表达式
LL词法分析
LL语法分析

## 四则运算

### 流程:
AST (Abstract Syntax Tree) ->

语法分析 ->

LL算法 ->

Left Left ->

扫描规约

### TokenNumber:

- 1 2 3 4 5 6 7 8 9 0的组合
- Operator: +, -, *, / 之一
- whitespace: <SP>
- LineTerminator: <LF> <CR>


### 四则运算定义
```
<Expression>∷=
    <AdditiveExpression><EOF>
 ```

```
<AdditiveExpression>::=
    <MultiplicativeExpression>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>
```

```
<MultiplicativeExpression>::=
    <Number>
    |<MultiplicativeExpression><*> <Number>
    |<MultiplicativeExpression></> <Number>
```

## LL语法分析(加法为例):

```
<AdditiveExpression>::=
    <MultiplicativeExpression>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>
```
如果展开`<MultiplicativeExpression>`
```
<AdditiveExpression>::=
    <Number>
    |<MultiplicativeExpression><*> <Number>
    |<MultiplicativeExpression></> <Number>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>
```

还能继续展开每个:
- `<AdditiveExpression>`
- `<MultiplicativeExpression>`

以下是具体代码(利用正则表达式):

### 利用正则表达式实现`tokenize`

[Regular Expression](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

Keypoints:
- regexp
- Regex.exec
- 改进（长度控制)：
- Length control
- Generator -> why generator -> async
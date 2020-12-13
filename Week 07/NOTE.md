学习笔记

## Grammar
- Tree vs Priority
  - 中缀树
  - 产生式
- Expressions (Priority from highest to lowest)
  - Member
  - New
  - Reference
    - Object
    - Key
    - delete
    - assign
  - Call
  - Left Handside & Right Handside
    - Left handside -> should appear on the left handside of equal sign
    - Update
      - a`++`
      - a`--`
  - Unary
    - `delete` a
    - `void` foo()
    - `typeof` a
    - `+`a
    - `-`a
    - `~`a
    - `!`a
    - `await` a
  - Exponential
    - 3 `**` 2
  - Multiplicative
    - `* / %`
  - Additive
    - `+ -`
  - Shift
    - `<<` `>>` `>>>`
  - Relationship
    - `< > <= >= instanceof in`
  - Equality
    - ==
    - !=
    - ===
    - !==
  - Bitwise
    - & ^ |
  - Logical
    - &&
    - ||
  - Conditional
    - ?:


## Type Convertion
|           | Number          | String            | Boolean  | Undefined | Null | Object | Symbol |
| --------- | --------------- | ----------------- | -------- | --------- | ---- | ------ | ------ |
| Number    | -               |                   | 0 false  | X         | X    | Boxing | X      |
| String    | NaN for invalid | -                 | "" false | X         | X    | Boxing | X      |
| Boolean   | true 1, false 0 | 'true', 'false'   | -        | X         | X    | Boxing | X      |
| Undefined | NaN             | 'undefined'       | false    | -         | X    | X      | X      |
| Null      | 0               | 'null'            | false    | X         | -    | X      | X      |
| Object    | valueOf         | valueOf, toString | true     | X         | X    | -      | X      |
| Symbol    | X               | -                 | true     | X         | X    | Boxing | -      |


- `==`

- Boxing
  | Type    | Object                  | Value       |
  | ------- | ----------------------- | ----------- |
  | Number  | new Number(1)           | 1           |
  | String  | new String("a")         | "a"         |
  | Boolean | new Boolean(true)       | true        |
  | Symbol  | new Object(Symbol("a")) | Symbol("a") |

- Unboxing
  - toPrimitive
  - toString vs valueOf
  - Symbol.toPrimitive

## Statement
- Grammar
- Runtime
  - Completion Record
    - [[type]]: normal, break, continue, return, throw
    - [[value]]: primitive type
    - [[target]]: label
  - Lexical Environment
- Simple Statement
  - ExpressionStatement
  - EmptyStatement
  - DebuggerStatement
  - ThrowStatement
  - ContinueStatement
  - BreakStatement
  - ReturnStatement
- Compound Statement
  - BlockStatement
    - [[type]]: normal
    - [[value]]: unknown
    - [[target]]: unknown
  - IfStatement
  - SwitchStatement(not recommended)
  - IterationStatement
  - WithStatement(not recommended)
  - LabelledStatement
  - TryStatement
    - [[type]]: return
    - [[value]]: unknown
    - [[target]]: label
- Iteration
  - while
  - do while
  - for
  - for ... in
  - for ... of
  - for await ... of

## Declaration
- FunctionDeclaration
- GeneratorDeclaration
- AsyncFunctionDeclaration
- AsyncGeneratorDeclaration
- VariableStatement
- ClassDeclaration
- LexicalDeclaration

### Pre-process

### Scope
- Scope chain(From ES3.0, Deprecated)
- ```
  {
    const a = 1;
  }
  ```

## JS执行粒度(runtime)

- macro task
- micro task(promise)
- function call (execution context)
- statement/declaration(completion record)
- expression(reference)
- literal/variable/this

### 事件循环

获取代码 ---> 执行代码 ---> 等待 ---> 获取代码 ....

### 函数调用

函数调用会形成执行上下文栈（Execution Context Stack），而栈里面的单元是执行上下文（Execution Context）。而正在跑的栈叫做执行中执行上下文（Running Execution Context）。

【当前正在跑的语句就会在Running Execution Context中获取一切信息。而闭包，就在这个单元里。这也解释了我之前的疑问，a文件通过import引入b文件，在b文件里访问不到a文件的变量，我还以为

可以通过闭包访问，但是是不行的。只有在同一份js文件里或通过脚本引入不同文件的才可以。】其实【而闭包，就在这个单元里】不对，闭包在环境记录里面体现

### Execution Context

* code evaluation state（用于async和Generator的，保存代码执行到哪的信息）
* Function
* Script Or Module（要么是脚本，要么是Module）
* Generator
* Realm
* LexicalEnvironment
    * this
    * new Target
    * super
    * 变量
* VariableEnvironment
    * var

### Environment Record

* Declarative Environment Records
    * Function Environment Records
    * module Environment Records
* Global Environment Records
* Object Environment Records

### Function-Closure

每一个函数都会生成一个闭包

```js
// Example
    var y = 2
    function foo () {console.log(y)}
    export foo

Function:foo
    Environment Record(定义时所在的):
            y:2
    Code:
           console.log(y)
```
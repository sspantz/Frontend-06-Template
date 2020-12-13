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
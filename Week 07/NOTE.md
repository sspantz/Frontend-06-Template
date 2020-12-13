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

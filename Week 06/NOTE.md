学习笔记

### 乔姆斯基谱系：是计算机科学中刻画形式文法表达能力的一个分类谱系，是由诺姆·乔姆斯基于 1956 年提出的。它包括四个层次(上包含下关系）：
- 0- 型文法（无限制文法或短语结构文法）包括所有的文法。
- 1- 型文法（上下文相关文法）生成上下文相关语言。
- 2- 型文法（上下文无关文法）生成上下文无关语言。
- 3- 型文法（正规文法）生成正则语言。

### 产生式： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句

- 巴科斯诺尔范式：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。

- 终结符： 最终在代码中出现的字符（ https://zh.wikipedia.org/wiki/ 終結符與非終結符)

### 语言的分类
- 按用途分类
  - 数据描述语言
    - JSON, HTML, XAML, SQL, CSS
  - 编程语言
    - C, C++, Java...
- 按表达方式分类
  - 声明式语言
    - JSON, HTML, XAML, SQL, CSS, Lisp, Clojure, Haskell
  - 命令型语言
    - C, C++, Java, JavaScript


## Category of Languages

### By Usage

#### Data Description Language
- JSON
- HTML
- XAML
- SQL
- CSS
- MARKDOWN

#### Programming Language
- C
- C++
- Java
- Python
- Ruby
- Rust
- Go
- Scheme
- Perl
- Lisp
- PHP
- VB
- R
- Assembly
- Swift
- Objective-C
- Dart
- Fortran
- Julia

### By Presentation

#### Declarative
- JSON
- HTML
- XAML
- SQL
- CSS
- Markdown
- Lisp
- Clojure
- Haskell

#### Imperative
- C
- C++
- Java
- C#
- PHP
- VB
- R
- Assembly
- Swift
- Objective-C
- Dart
- Fortran
- Julia

### 编程语言的性质

- 图灵完备性：在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵。虽然图灵机会受到储存能力的物理限制，图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。

> 具备图灵完备性
- 命令式--图灵机
  - goto
  - if和while
- 声明式--lambda
  - 递归

- 图灵机（Turing machine）：又称确定型图灵机，是英国数学家艾伦·图灵于 1936 年提出的一种将人的计算行为抽象掉的数学逻辑机，其更抽象的意义为一种计算模型，可以看作等价于任何有限逻辑数学过程的终极强大逻辑机器。

- 静态和动态语言： https://www.cnblogs.com/raind/p/8551791.html
- 动态：
  - 在用户的设备/在线服务器上
  - 产品实际运行时
  - runtime
- 静态
  - 在程序员的设备上
  - 产品开发时
  - compiletime

- 强类型： 无隐式转换

- 弱类型： 有隐式转换

- 复合类型
  - 结构体
  - 函数签名

- 子类型

- 泛型
  - 协变与逆变： https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html



### Number

### String
- ASCII
- Unicode
- UTF-8
- UTF-16

### Object

#### The 3 Elements of Object
- Identifier
- State
- Behaviour

#### Object -> Class

> 分类
- 归类 -> 多继承
- 分类 -> 单继承

> 原型 -> javascript

> Object Exercise: Dog bit someone
```js
class Person {
  hurt(damage) {/...}
}
```

总是遵循`行为改变状态`原则

#### Prototype Chain

#### Key and Value
- Key: Symbol / Strings
- Value: Data / Accessor -> set/get

### Object API
- {}. [] Object.defineProperty
- Object.create / Object.setPropertyOf / Object.getPropertyOf
- new / class / extend
- new / function / prototype (`Deprecated`)

#### Function Object
- [[call]]

#### Special Object
- Array[[length]]
- Object.prototype[[setPrototypeOf]]

#### Host Object
- Object[[call]]
- Object[[construct]]
### Special Behaviour Objects

> from course comment

- Array：Array 的 length 属性根据最大的下标自动发生变化。
- Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
- String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
- Arguments：arguments 的非负整数型下标属性跟对应的变量联动。
- 模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
- 类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
- bind 后的 function：跟原来的函数相关联。
- Function: 具有方法和执行能力的对象。
- Map: 引用地址为key的对象。
- Set: 自动去重的Array对象集合。
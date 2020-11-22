学习笔记

### 字符串分析算法
- 字典树
  - 大量高重复字符串的存储与分析
- KMP
  - 在长字符串里找模式
- Wildcard
  - 带通配符的字符串模式
- 正则
  - 字符串通用模式匹配
- 状态机
  - 通用的字符串分析
- LL LR
  - 字符串多层级结构分析


### Trie(字典树)
> In computer science, a trie, also called digital tree or prefix tree, is a kind of search tree—an ordered tree data structure used to store a dynamic set or associative array where the keys are usually strings. [read more on wiki...](https://en.wikipedia.org/wiki/Trie)


### KMP
> In computer science, the Knuth–Morris–Pratt string-searching algorithm (or KMP algorithm) searches for occurrences of a "word" W within a main "text string" S by employing the observation that when a mismatch occurs, the word itself embodies sufficient information to determine where the next match could begin, thus bypassing re-examination of previously matched characters. [read more on wiki](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm)

### Wildcard

- `ab*cd*da*d?a`
  - 前面的*: 尽量匹配少
  - 后面的*: 尽量匹配多
- `abbbc?dab?b`

- 正则能否用带问号的KMP算法替代?
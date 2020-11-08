# 学习笔记

### 课堂速记
- 定义寻路问题: 100 x 100 = 10000 个格子
- 做地图编辑器
- 保存地图功能
- 设计一个数据结构保存这些格子 -> 一维数组
- Event listener
- mousemove
- mousedown
- mouseup
- :nth-child, :nth-last-child
- localStorage
- JSON.parse(), JSON.stringify()
- 广度优先搜索(BFS) -> queue
- 深度优先搜索(DFS) -> stack
- A*搜索把queue变成了一个排序的接口
- 广度优先搜索
- 通过异步编程可视化寻路算法
- 处理路径问题
- 启发式搜索
> 通过一个启发式函数
一定能找到，启发式寻路的算法叫A*，不能找到的是A，A*作为A的一个特例
算法不用改，给出一个新的数据结构
Winner tree
heap
尽量保证每次少移动数组里的元素
与最后一个元素交换删除一个元素
- 修改代码提示:
  -  修改读写
  - 用二叉堆替换Sorted

### 重要关键点

1. 广度优先搜索[BFS](https://en.wikipedia.org/wiki/Breadth-first_search)
2. 深度优先搜索[DFS](https://en.wikipedia.org/wiki/Depth-first_search)
3. [A*](https://en.wikipedia.org/wiki/A*_search_algorithm)
4. [启发式搜索](https://en.wikipedia.org/wiki/Heuristic_(computer_science))
5. [Binary Heap](https://en.wikipedia.org/wiki/Binary_heap)
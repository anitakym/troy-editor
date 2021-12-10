const { isThisTypeNode } = require("typescript")

// 无论什么类型的数据被放进队列中，被弹出的类型都与放入的类型一样
// T - 类型变量
class Queue<T> {
  private data : T[] = []
  push = (item : T) => this.data.push(item)
  pop = () : T | undefined => this.data.shift()
}


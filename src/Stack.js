const dataStore = Symbol('dataStore')
const top = Symbol('top')

class Stack {
  constructor(arr = []) {
    this[dataStore] = arr
    this[top] = this[dataStore].length
  }

  push(value) {
    this[dataStore][this[top]++] = value
  }

  pop() {
    return this[dataStore][this[top]--]
  }

  peek() {
    return this[dataStore][this[top] - 1]
  }

  length() {
    return this[top]
  }

  clear() {
    this[top] = 0
  }
}

module.exports = Stack
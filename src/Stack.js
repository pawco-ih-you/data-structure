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
}

module.exports = Stack
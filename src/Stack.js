const dataStore = Symbol('dataStore')
const top = Symbol('top')

class Stack {
  constructor(arr = []) {
    this[dataStore] = arr
    this[top] = this[dataStore].length
  }
}

module.exports = Stack
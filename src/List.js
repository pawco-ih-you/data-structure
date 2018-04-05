const listSize = Symbol('listSize')
const dataStore = Symbol('dataStore')
const pos = Symbol('pos')

class List {
  constructor(ds = []) {
    this[pos] = ds.length === 0 ? 0 : ds.length - 1
    this[listSize] = ds.length
    this[dataStore] = ds
  }

  toString() {
    return this[dataStore].toString()
  }

  find(el) {
    for (let [index, value] of this[dataStore].entries()) {
      if (value === el) return index
    }
    return -1
  }

  insert(el, after) {
    const afterAt = this.find(after)
    if (afterAt> -1) {
      this[dataStore].splice(afterAt + 1, 0, el)
      return true
    }
    this[listSize]++
    return false
  }

  append(el) {
    this[dataStore][this[pos]++] = el
    return this[dataStore]
  }

  remove(el) {
    const foundAt = this.find(el)
    if (foundAt> -1) {
      this[dataStore].splice(foundAt, 1)
      --this[listSize]
      return true
    }
    return false
  }

  length() {
    return this[listSize]
  }

  clear() {
    this[dataStore] = []
    this[listSize] = 0
    return this[dataStore]
  }

  contains(el) {
    return this.find(el) !== -1
  }

  getElement() {
    return this[dataStore][this[pos]]
  }

  front() {
    this[pos] = 0
  }

  end() {
    this[pos] = this[dataStore].length - 1
  }

  prev() {
    this[pos] = this[pos] - 1
  }

  next() {
    this[pos] = this[pos] + 1
  }

  currPos() {
    return this[pos]
  }

  moveTo(idx) {
    this[pos] = idx
  }
}

module.exports = List

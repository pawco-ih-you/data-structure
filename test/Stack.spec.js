const expect = require('expect')
const Stack = require('../src/Stack')

describe('Stack', function () {
  let stack, symbolAt, getStackSymbol, setStackSymbol
  beforeEach(() => {
    stack = new Stack()

    symbolAt = function (stack) {
      getStackSymbol = key => stack[atSymbol(stack, key)]
      setStackSymbol = (key, value) => stack[atSymbol(stack, key)] = value
    }
    symbolAt(stack)
  })
  describe('Stack:Constructor', function () {
    it('the array is named dataStore. the constructor sets dataStore to an empty array or given array', () => {
      stack = new Stack()
      expect(getStackSymbol('dataStore').length).toBe(0)
      stack = new Stack([1, 2]), symbolAt(stack)
      expect(getStackSymbol('dataStore')).toEqual([1, 2])
    })
    it('the top variable keeps track of the top ot the stack and is initially set to 0 or the length of given array by the constructor', () => {
      stack = new Stack()
      expect(getStackSymbol('top')).toBe(0)
      stack = new Stack([1, 2]);
      symbolAt(stack)
      expect(getStackSymbol('top')).toBe(2)
    })
  })
  describe('push: when we push an element onto a stack', function () {
    it('we have to store it in the top position', () => {
      setStackSymbol('top', 2)
      stack.push(1)
      expect(getStackSymbol('dataStore')[2]).toBe(1)
    })
    it('we have to increment the top variable so that the new top is the next empty position in the array', () => {
      stack.push(1)
      expect(getStackSymbol('top')).toBe(1)
    })
  })
  describe('pop function dose the reverse of the push() function', () => {
    it('returns the top position of the stack', () => {
      const stack = new Stack([1, 2, 3])
      symbolAt(stack)
      setStackSymbol('top', 1)
      expect(stack.pop()).toBe(2)
      setStackSymbol('top', 2)
      expect(stack.pop()).toBe(3)
    })
    it('and decrements the top variable ', () => {
      const stack = new Stack([1, 2, 3])
      symbolAt(stack)
      stack.pop()
      expect(getStackSymbol('top')).toBe(2)
    })
  })
  describe('peek', function () {
    it('returns the top elements of the stack', () => {
      stack.push(1), stack.push(2)
      expect(stack.peek()).toBe(2)
    })
    it('if you call the peak() function on an empty array, you get undefined as the result', () => {
      expect(stack.peek()).toBe(undefined)
    })
  })
  describe('length: when you need to know how many elements are stored in a stack', function () {
    it('returns the length of a stack by returning the value of top', () => {
      const stack = new Stack([1, 2, 3])
      expect(stack.length()).toBe(3)
    })
  })
  describe('clear: we can clear a stack', function () {
    it('the top variable back to 0', () => {
      const stack = new Stack([1, 2, 3])
      symbolAt(stack)
      stack.clear()
      expect(getStackSymbol('top')).toBe(0)
    })
  })
})

function atSymbol(obj, symStr) {
  return Object.getOwnPropertySymbols(obj).find(v => new RegExp(`(${symStr})`).test(v.valueOf().toString()))
}

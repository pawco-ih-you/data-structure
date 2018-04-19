const expect = require('expect')
const Stack = require('../src/Stack')

describe('Stack', function () {
  let stack, atStackSymbol
  beforeEach(() => {
    stack = new Stack()
    atStackSymbol = key => stack[atSymbol(stack, key)]
  })
  describe('Stack:Constructor', function () {
    it('the array is named dataStore. the constructor sets dataStore to an empty array or given array', () => {
      stack = new Stack()
      expect(atStackSymbol('dataStore').length).toBe(0)
      stack = new Stack([1, 2])
      expect(atStackSymbol('dataStore')).toEqual([1, 2])
    })
    it('the top variable keeps track of the top ot the stack and is initially set to 0 or the length of given array by the constructor', () => {
      stack = new Stack()
      expect(atStackSymbol('top')).toBe(0)
      stack = new Stack([1, 2])
      expect(atStackSymbol('top')).toBe(2)
    })
  })
  describe('push: when we push an element onto a stack', function () {
    it('we have to store it in the top position')
    it('we have to increment the top variable so that the new top is the next empty position in the array')
  })
  describe('pop function dose the reverse of the push() function', () => {
    it('returns the top position of the stack')
    it('and decrements the top variable ')
  })
  describe('peek', function () {
    it('returns the top elements of the stack')
    it('if you call the peak() function on an empty array, you get undefined as the result')
  })
  describe('length: when you need to know how many elements are stored in a stack', function () {
    it('returns the length of a stack by returning the value of top')
  })
  describe('clear: we can clear a stack', function () {
    it('the top variable back to 0')
  })
})

function atSymbol(obj, symStr) {
  return Object.getOwnPropertySymbols(obj).find(v => new RegExp(`(${symStr})`).test(v.valueOf().toString()))
}

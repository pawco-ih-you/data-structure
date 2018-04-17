const expect = require('expect')
const Stack = require('../src/Stack')

describe('Stack', function () {
  describe('Stack:Constructor', function () {
    const stack = new Stack()
    it('create stack with array', () => {

    })
  })
  describe('push: when we push an element onto a stack', function () {
    it('we have to store it in the top position')
    it('we have to increment the top variable so that the new top is the next empty position in the array')
  })
  describe('pop() function dose the reverse of the push() function', () => {
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

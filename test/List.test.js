const expect = require('chai').expect
const List = require('../src/List')
describe('List', function () {
  let list, atList
  beforeEach(function () {
    list = new List(['a', 'b', 'c'])
    atList = symStr => atSymbol(list, symStr)
  })
  describe('constructor', function () {
    it('listSize', function () {
      const listSize = list[atSymbol(list, 'listSize')]
      expect(listSize).to.eql(3)
    })
  })
  describe('append', function () {
    it('append', function () {
      list = new List()
      expect(list.append('Cynthia')).to.eql(['Cynthia'])
      expect(list.append('Raymond')).to.eql(['Cynthia', 'Raymond'])
    })
  })
  describe('remove', function () {
    it('remove', function () {
      list = new List(['Cynthia', 'Raymond', 'Barbara'])
      expect(list.remove('Raymond')).to.eql(true)
      expect(list.toString()).to.eql('Cynthia,Barbara')
      expect(list.remove('Cynthiaa')).to.eql(false)
      expect(list.toString()).to.eql('Cynthia,Barbara')
    })
  })
  describe('insert', () => {
    it('insert', () => {
      list = new List(['Cynthia', 'Barbara'])
      expect(list.insert('Raymond', 'Cynthia')).to.eql(true)
      expect(list.toString()).to.eql('Cynthia,Raymond,Barbara')
      expect(list.insert('Raymond', 'Cynth')).to.eql(false)
    })
  })
  describe('clear', () => {
    it('clear', function () {
      list.clear()
      expect(list.toString()).to.be.eql('')
      expect(list.length()).to.be.eql(0)
    })
  })
  describe('contains', function () {
    it('contains', function () {
      expect(list.contains('b')).to.be.true
      expect(list.contains('d')).to.be.false
    })
  })
  describe('navigate', function () {
    it('getElement', function () {
      list[atSymbol(list, 'pos')] = 1
      expect(list.getElement()).to.be.equal('b')
    })
    it('front', function () {
      list.front()
      expect(list.getElement()).to.be.equal('a')
    })
    it('end', function () {
      list.end()
      expect(list.getElement()).to.be.equal('c')
    })
    it('prev', function () {
      list.prev()
      expect(list.getElement()).to.be.equal('b')
    })
    it('next', function () {
      --list[atList('pos')]
      list.next()
      expect(list.getElement()).to.be.equal('c')
    })
    it('currPos', function () {
      expect(list.currPos()).to.be.equal(2)
    })
    it('moveTo', function () {
      list.moveTo(1)
      expect(list.getElement()).to.be.equal('b')
    })
  })
})

function atSymbol(obj, symStr) {
  return Object.getOwnPropertySymbols(obj).find(v => new RegExp(`(${symStr})`).test(v.valueOf().toString()))
}

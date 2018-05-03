const testObj = {
  [Symbol('A')]: 'a',
  [Symbol('B')]: 'b',
  testA: 'testA'
}

function getSymbolByStr(obj, str) {
  return Object.getOwnPropertySymbols(obj).find(v => {
    return new RegExp(`(${str})`).test(
      v.valueOf().toString()
    )
  })
}
`console.log(symbolList(testObj, 'A'))
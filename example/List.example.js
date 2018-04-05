const List = require('../src/List')
const list = new List(['a', 'b', 'c'])

for (list.front(); list.currPos()<list.length(); list.next()) {
  console.log(list.getElement())
}
/*
example for iterator
 */
for (list.end(); list.currPos()>=0; list.prev()) {
  console.log(list.getElement())
}
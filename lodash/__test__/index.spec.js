it('lodash chunk', (done) => {
  const { chunk }  = require('../index')
  let arr = ['a', 'b', 'c', 'd']
  // 断言
  expect(chunk([], 2)).toEqual([])
  expect(chunk(arr)).toEqual([['a'], ['b'], ['c'], ['d']])
  expect(chunk(arr, 2)).toEqual([['a', 'b'], ['c', 'd']])
  expect(chunk(arr, 3)).toEqual([['a', 'b', 'c'], ['d']])

  done()
})
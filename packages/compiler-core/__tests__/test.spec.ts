import { testdemo } from '../src/index'

describe('sum', () => {
  it('求和：1 + 2 = 3', () => {
    console.log(testdemo())
    expect(testdemo()).toBe(2)
  })
})

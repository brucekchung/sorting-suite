const { expect } = require('chai').use(require('chai-sorted'))
const genNumbers = require('./gen-numbers.js')
const bubbleSort = require('../bubbleSort.js')
const log = (x) => {
  console.log(x)
  return x
}

describe('bubbleSort', () => {

const tenK = genNumbers(10000, 100);
const twelveK = genNumbers(12000, 100)
const fifteenK = genNumbers(15000, 100);

  it('should be able to sort a simple array', () => {
    const unsorted = [7, 3, 8, 1, 9, 2, 5, 4, 6];
    const actual = bubbleSort(unsorted);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(actual).to.deep.equal(expected);
  })

  it('should be able to sort letters', () => {
    let letters = ['e', 'c', 'u', 'r', 'b'];
    expect(bubbleSort(letters)).to.deep.equal(['b', 'c', 'e', 'r', 'u']);
  })

  it('should be able to sort 10,000 random numbers in 2 seconds', () => {
    expect(bubbleSort(tenK)).to.be.sorted();
  })

  it('should be able to sort 12,000 random numbers in 2 seconds', () => {
    expect(bubbleSort(twelveK)).to.be.sorted();
  })
})


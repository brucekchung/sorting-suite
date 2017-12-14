const { expect } = require('chai').use(require('chai-sorted'))
const genNumbers = require('./gen-numbers.js')
const quickSort = require('../quickSort.js')

describe('quickSort', () => {

  const seventyK = genNumbers(70000, 100);
  const eightyK = genNumbers(80000, 100);

  it('should be able to sort a simple array', () => {
    let array1 = [7, 3, 8, 1, 9, 2, 5, 4, 6];
    expect(quickSort(array1)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })

  it('should be able to sort letters', () => {
    let letters = ['e', 'c', 'u', 'r', 'b'];
    expect(quickSort(letters)).to.deep.equal(['b', 'c', 'e', 'r', 'u']);
  })

  it('should be able to sort 70,000 random numbers in 2 seconds', () => {
    expect(quickSort(seventyK)).to.be.sorted();
  })

  it('should be able to sort 80,000 random numbers in 2 seconds', () => {
    expect(quickSort(eightyK)).to.be.sorted();
  })
})
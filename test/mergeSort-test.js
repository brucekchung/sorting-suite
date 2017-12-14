const { expect } = require('chai').use(require('chai-sorted'))
const genNumbers = require('./gen-numbers.js')
const mergeSort = require('../mergeSort.js')

describe('mergeSort', () => {

  const sevenFiftyK = genNumbers(750000, 100);
  const million = genNumbers(1000000, 100);
  const millionTen = genNumbers(1010000, 100);

  it('should be able to sort a simple array', () => {
    let array1 = [7, 3, 8, 1, 9, 2, 5, 4, 6];
    expect(mergeSort(array1)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })

  it('should be able to sort letters', () => {
    let letters = ['e', 'c', 'u', 'r', 'b'];
    expect(mergeSort(letters)).to.deep.equal(['b', 'c', 'e', 'r', 'u']);
  })

  it('should be able to sort 750,000 random numbers in 2 seconds', () => {
    expect(mergeSort(sevenFiftyK)).to.be.sorted();
  })

  it('should be able to sort 1,000,000 random numbers in 2 seconds', () => {
    expect(mergeSort(million)).to.be.sorted();
  })
})
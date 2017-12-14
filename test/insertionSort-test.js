const { expect } = require('chai').use(require('chai-sorted'))
const genNumbers = require('./gen-numbers.js')
const insertionSort = require('../insertionSort.js')

describe('insertionSort', () => {

const twentyK = genNumbers(20000, 100);
const twentyFiveK = genNumbers(25000, 100);
const thirtyK = genNumbers(30000, 100);

  it('should be able to sort a simple array', () => {
    let array1 = [7, 3, 8, 1, 9, 2, 5, 4, 6];
    expect(insertionSort(array1)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })

  it('should be able to sort letters', () => {
    let letters = ['e', 'c', 'u', 'r', 'b'];
    expect(insertionSort(letters)).to.deep.equal(['b', 'c', 'e', 'r', 'u']);
  })

  it('should be able to sort 20,000 random numbers in 2 seconds', () => {
    expect(insertionSort(twentyK)).to.be.sorted();
  })

  it('should be able to sort 25,000 random numbers in 2 seconds', () => {
    expect(insertionSort(twentyFiveK)).to.be.sorted();
  })
})
module.exports = function bubbleSort(array) {
  for (var n = 0; n < array.length; n++) { 
    for (var i = 0; i < array.length; i++) {
      let placeholder;
      if (array[i] > array[i + 1]) {
        placeholder = array[i + 1];
        array[i + 1] = array[i];
        array[i] = placeholder;
      }
    }
  }
  return array;
}
//(array[i], array[i+1]) = (array[i+1], array[i])

//cost of calling 'i' in for loop
//functional logger - keep running while console.log
//let and const - tell reader that it WILL or WILL NOT be reassigned within block

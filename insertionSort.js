module.exports = function insertionSort(array) {
  for (var n = 0; n < array.length; n++) {
    for (var i = n; i > 0; i--) {
      let placeholder;
      if (array[i] < array[i - 1]) {
        placeholder = array[i - 1];
        array[i - 1] = array[i];
        array[i] = placeholder;
      }
    }
  }
  return array;
}
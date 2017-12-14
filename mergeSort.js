module.exports = function mergeSort(array) {
  if(array.length === 1) {
    return array;
  }
  
  let center = Math.floor(array.length/2);
  let left = array.slice(0, center);
  let right = array.slice(center);
  
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let merged = [];
  let indexL = 0;
  let indexR = 0;
  while(indexL < left.length && indexR < right.length) {
    if(left[indexL] <= right[indexR]) {
      merged.push(left[indexL]);
      indexL++;
    } else if(left[indexL] > right[indexR]) {
      merged.push(right[indexR])
      indexR++;
    }
  }

  return [...merged, ...left.slice(indexL), ...right.slice(indexR)]
}

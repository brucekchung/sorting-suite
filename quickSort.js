module.exports = function quickSort(array) {
  if(array.length <= 1) {
    return array
  }
  
  const pivot = array.shift();
  const leftArray = [];
  const rightArray = [];
  
  for(let i = 0; i < array.length; i++) {
    const item = array[i]
    if(item <= pivot) {
      leftArray.push(item) //let leftArray = [...leftArray, item]
    } else if(item > pivot){
      rightArray.push(item)
    }
  }
  
  return [...quickSort(leftArray), pivot,...quickSort(rightArray)]
}

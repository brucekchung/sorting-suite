module.exports = function generateRandomNumbers( count, maxVal ) {
  const array = [];
  
  for (let i = 0; i < count; i++) {
    array.push(Math.floor(Math.random() * maxVal));
  }
  
  return array;
}
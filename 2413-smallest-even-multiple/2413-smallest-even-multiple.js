/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  if (n % 2 === 0) {
    return n;
  } else {
    return n * 2;
  }
}

console.log(smallestEvenMultiple(5));
console.log(smallestEvenMultiple(6)); 
    

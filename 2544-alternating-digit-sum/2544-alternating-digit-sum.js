/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
     const digits = String(n).split("");
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0) {
      sum += Number(digits[i]);   
    } else {
      sum -= Number(digits[i]);   
    }
  }
    return sum
  
    
};
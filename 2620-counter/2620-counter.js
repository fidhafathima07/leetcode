/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        return n++;
    };
}

let counter1 = createCounter(10);

console.log(counter1());
console.log(counter1()); 
console.log(counter1());

let counter2 = createCounter(-2);

console.log(counter2()); 
console.log(counter2()); 
console.log(counter2()); 
console.log(counter2()); 
console.log(counter2());
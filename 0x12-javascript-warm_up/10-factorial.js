#!/usr/bin/node
function factorial(n) {
  if (isNaN(parseInt(n))) {
    return 1;
  }
  
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial('3')); // Output: 6
console.log(factorial('abc')); // Output: 1


#!/usr/bin/node
function secondLargestInteger() {
  let args = Array.from(arguments);
  if (args.length === 0 || args.length === 1) {
    console.log(0);
    return;
  }
  
  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MIN_SAFE_INTEGER;
  
  for (let i = 0; i < args.length; i++) {
    let num = parseInt(args[i]);
    
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }
  
  if (secondLargest === Number.MIN_SAFE_INTEGER) {
    console.log(0);
  } else {
    console.log(secondLargest);
  }
}

secondLargestInteger(1, 2, 3, 4, 5); // Output: 4
secondLargestInteger(5, 2, 3, 4, 1); // Output: 4
secondLargestInteger('3', '2', '1'); // Output: 2
secondLargestInteger(); // Output: 0
secondLargestInteger(1); // Output: 0


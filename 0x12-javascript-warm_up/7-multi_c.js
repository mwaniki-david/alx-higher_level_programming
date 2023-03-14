#!/usr/bin/node
const arg = process.argv[2];
const num = parseInt(arg, 10);

if (!isNaN(num)) {
  for (let i = 0; i < num; i++) {
   console.log("c is fun");
  }
} else {
  console.log("Missing numbrt of occurrences");
}


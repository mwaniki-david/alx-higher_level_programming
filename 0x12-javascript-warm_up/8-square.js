#!/usr/bin/node
const arg =process.argv[2];
const size = parseInt(arg, 10);

if (!isNan(size)) {
  for (let i =0; i < size; i++) {
   console.log("x".repeat(size));
  }
} else {
  console.log("missing size");
}


"use strict";
/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

*/

// Your code:
function sum(nums) {
  let sum = 0;
  for (const n of nums) {
    sum += n;
  }
  return 
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof sum, "function");
assert.strictEqual(sum.length, 1);
assert.strictEqual(min([]), 0);
assert.strictEqual(min(null), 0);
// End of tests

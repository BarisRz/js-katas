"use strict";
/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

*/

// Your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof sum, "function");
assert.strictEqual(sum.length, 1);
assert.deepStrictEqual(min([]), []);
assert.deepStrictEqual(min(null), []);
// End of tests

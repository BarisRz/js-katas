/*
Create a function `build` which returns a pyramid of `n` floors, from top to bottom, stored in a string array.

Example :

n = 5 :
[
    "    *    ",
    "   ***   ",
    "  *****  ",
    " ******* ",
    "*********"
]

If `n` is zero or negative, throw a RangeError.
If `n` is null or not a number, throw a TypeError.

*/

// TODO add your code here
function build(n) {
  if (n === null || isNaN(n)) {
    throw TypeError("Vous n'utilisez pas le bon type en argument");
  }
  if (!(n > 0)) {
    throw RangeError("L'argument doit être forcément supérieur à 0");
  }
  let ligne = "*";
  let espace = " ";
  let pyramid = [];
  for (let i = 1; i <= n; i++) {
    let lignefinal = `${espace.repeat(n - i)}${ligne.repeat(
      1 + 2 * (i - 1)
    )}${espace.repeat(n - i)}`;
    pyramid.push(lignefinal);
  }
  return pyramid;
}
// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof build, "function");
assert.strictEqual(build.length, 1);
assert.deepStrictEqual(build(1), ["*"]);
assert.deepStrictEqual(build(2), [" * ", "***"]);
assert.deepStrictEqual(build(5), [
  "    *    ",
  "   ***   ",
  "  *****  ",
  " ******* ",
  "*********",
]);
assert.throws(() => {
  build(0);
}, RangeError);
assert.throws(() => {
  build(-1);
}, RangeError);
assert.throws(() => {
  build(null);
}, TypeError);
assert.throws(() => {
  build("a");
}, TypeError);
// End of tests
console.log("Bravo!");

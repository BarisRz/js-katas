/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

Example:
* [] -> 0
* [1, 2, 3] -> 4

*/

// TODO add your code here
function sum(array) {
  if (array === null || array.length === 0) {
    return 0;
  } else {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        result = result + array[i];
      }
    }
    return result;
  }
}
module.exports = sum;

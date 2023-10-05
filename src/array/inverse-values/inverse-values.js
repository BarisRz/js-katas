/*
Create a function `inverse`, which given an array of numbers, return the additive inverse of each : each positive becomes negatives, and the negatives become positives.

You can assume that all values are numbers.

If the argument is an empty array or null, return an empty array.

Example:
* [1, 2, 3, 4, 5] -> [-1, -2, -3, -4, -5]
* [1, -2, 3, -4, 5] -> [-1, 2, -3, 4, -5]
* [] -> []

Don't mutate the parameter.

*/
function inverse(arr) {
  if (arr == null || arr.length === 0) {
    return [];
  } else {
    const copyArr = Array.from(arr);
    for (let i = 0; i < copyArr.length; i++) {
      copyArr[i] = -copyArr[i];
    }
    return copyArr;
  }
}
// TODO add your code here

module.exports = inverse;

/*
Create a function `getScore` which returns the string of the current scores of a tennis game, from a number array where each value represents the player that scored.

* [1, 1, 2, 2, 1] : serving player (1) scored twice, then the receiving player (2) scored twice, and finally the serving player (1) scored once.
The expected result is "40-30".

Game rules :

The score on the left represents the serving player (1), the score on the right represents the receiving player (2).

Scores from zero to three points are described as "love", "15", "30", and "40", respectively.

If at least three points have been scored by each player, the score is not called out as "40–40", but rather as "deuce".

If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game can be called "ad in" when the serving player (1) is ahead, and "ad out" when the receiving player (2) is ahead.

Example:
* points : [1, 1, 1], result : "40-love"
* points : [2, 1, 2, 2], result : "15-40"
* points : [1, 2, 1, 2, 1, 2], result : "deuce"
* points : [1, 1, 1, 2, 2, 2, 1], result : "ad in"

If the argument is null or not an array, throw a TypeError.
If a value of the argument is null or not a number, throw a TypeError.
If a value of the argument is not 1 or 2, throw a RangeError.

Add you own tests.

*/

// TODO add your code here
function getScore(array) {
  if (array === null || array.isArray) {
    throw TypeError("L'argument n'a pas le bon type");
  }
  if (array.every((element) => element === null || isNaN(element))) {
    throw TypeError("Les éléments ne sont pas tous des entiers");
  }
  if (!array.every((element) => element === 1 || element === 2)) {
    throw RangeError("Il faut absolument un tableau avec des 1 ou 2");
  }
  let p1, p2;
  if (array.length < 7) {
    p1 = array.filter((x) => x === 1).length;
    p2 = array.filter((x) => x === 2).length;
    switch (p1) {
      case 0:
        p1 = "love";
        break;
      case 1:
        p1 = 15;
        break;
      case 2:
        p1 = 30;
        break;
      case 3:
        p1 = 40;
        break;
      default:
        break;
    }
    switch (p2) {
      case 0:
        p2 = "love";
        break;
      case 1:
        p2 = 15;
        break;
      case 2:
        p2 = 30;
        break;
      case 3:
        p2 = 40;
        break;
      default:
        break;
    }
    if (p1 === p2) {
      return "deuce";
    }
    return `${p1}-${p2}`;
  } else {
    const avance = array.slice(-1);
    if (avance[0] === 1) {
      return "ad in";
    } else {
      return "ad out";
    }
  }
}
// Begin of tests
const assert = require("assert");
const { get } = require("http");

assert.strictEqual(typeof getScore, "function");
assert.strictEqual(getScore.length, 1);

// TODO add your tests:
assert.deepStrictEqual(getScore([1, 1, 1]), "40-love");
assert.deepStrictEqual(getScore([2, 1, 2, 2]), "15-40");
assert.deepStrictEqual(getScore([1, 2, 1, 2, 1, 2]), "deuce");
assert.deepStrictEqual(getScore([1, 1, 1, 2, 2, 2, 1]), "ad in");
assert.deepStrictEqual(getScore([1, 1, 1, 2, 2, 2, 2]), "ad out");
assert.throws(() => {
  getScore([1, 2, 3, 1, 2, 1]);
}, RangeError);
assert.throws(() => {
  getScore([1, null, 3, 1, 2, 1]);
}, TypeError);
assert.throws(() => {
  getScore(null);
}, TypeError);
// End of tests

console.log("Bravo!");

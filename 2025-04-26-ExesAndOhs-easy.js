// Task: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Difficulty: easy
// Solved on: 26.04.2025
// Feelings: Вообще не почувствовала, супер простая задачка, хотя может и не самое изящное решение

function XO(str) {
  let os = 0;
  let xs = 0;
  let arrStr = str.toLowerCase().split("");
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] == "x") xs++;
    if (arrStr[i] == "o") os++;
  }
  let result = (xs == os) ? true : false;
  return result;
}

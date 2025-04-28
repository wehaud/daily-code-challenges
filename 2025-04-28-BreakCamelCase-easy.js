// Task: Complete the solution so that the function will break up camel casing, using a space between words.
// Difficulty: easy
// Solved on: 28.04.2025
// Feelings: легкотня!

function solution(string) {
  let result = "";
  string.split("").forEach(function(value) {
    if (result != "" && value === value.toUpperCase() && value != value.toLowerCase()) result += " ";
    result += value;
  })
  return result;
}

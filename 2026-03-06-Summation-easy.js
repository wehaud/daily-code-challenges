// Task: Summation Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
// Difficulty: easy
// Solved on: 06.03.2026
// Feelings: Оказывается можно решить через арифметическую прогрессию, буду знать, а пока решила циклом

var summation = function (num) {
  let output = 0;
  for (let i = 1; i <= num; i++) {
    output += i;
  }
  return output;
}

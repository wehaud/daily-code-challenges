// Task: In this kata, you are asked to square every digit of a number and concatenate them. For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Difficulty: easy
// Solved on: 06.03.2026
// Feelings: После долгого перерыва в решениях написала ужас и еле вспомнила синтаксис, хоупфули дальше будет лучше

function squareDigits(num){
  let digits = num.toString().split('');
  let squaredDigits = digits.map(digit => (Number(digit) ** 2).toString());
  let output = squaredDigits.join('');
  return Number(output);
}

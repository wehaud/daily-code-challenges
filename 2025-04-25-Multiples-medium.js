// Task: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0. Note: If the number is a multiple of both 3 and 5, only count it once.
// Difficulty: medium
// Solved on: 28.04.2025
// Feelings: Сперва забыла обработать двойное попадание 15, но все получилось!

function solution(number){
  if (number < 0) return 0;
  
  let sum = 0;
  
  for (let i = 0; i < number; i+=3) {
    sum += i;
  }
  for (let j = 0; j < number; j+=5) {
    if (j % 15 == 0) {
      continue;
    } else {
      sum += j; 
    }
  }
 
  return sum;
}

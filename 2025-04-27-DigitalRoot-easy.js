// Task: Digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Difficulty: easy
// Solved on: 27.04.2025
// Feelings: Решила просто, но мне не понравилось, туда сюда из типов перебрасывать, а код красивее придумать не смогла, решила, как получилось

function digitalRoot(n) {
  let result = n.toString();
  
  while (result.length > 1) {    
    let arrDigits = result.split("");
    let tempSum = 0;
    arrDigits.forEach(function(value) {
       tempSum += Number(value);
    })
    result = tempSum.toString();
  }    
  return Number(result);
}

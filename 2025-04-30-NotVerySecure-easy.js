// Task: In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that. The string has the following conditions to be alphanumeric: At least one character ("" is not valid) Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9 No whitespaces / underscore
// Difficulty: easy
// Solved on: 30.04.2025
// Feelings: Это было супер легко благодаря регулярным выражениям, которые я выучила после прошлой задачки, где без них настрадалась, как и обещала!! По-моему мое первое решение в одну строчку! Очень рада!

function alphanumeric(string){
  return /^[A-Za-z0-9]+$/.test(string);
}

// Task: The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Difficulty: medium
// Solved on: 26.04.2025
// Feelings: Понравилось решать, мне кажется мой подход довольно необычный

function duplicateEncode(word){
  let result = "";
  let lowerCaseWord = word.toLowerCase();
  let arrWord = lowerCaseWord.split("");
  for (let i = 0; i < arrWord.length; i++) {
    let duplicate = lowerCaseWord.split(arrWord[i]).length - 1; //спличу изначальное слово по иттерируемой букве, ведь если будет много частей значит повторяется буква-то!!
    result += (duplicate > 1) ? ")" : "("; 
  }
  return result;
}

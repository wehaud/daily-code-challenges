// Task: Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Difficulty: medium
// Solved on: 26.04.2025
// Feelings: Первый раз столкнулась с регулярным выражением в сплите, оказывается такое есть, очень полезно! Остальное было легко

function toCamelCase(str){
  let result = "";
  let arrStr = str.split(/[-_]/);
  for (let i = 0; i < arrStr.length; i++) {
    if (i == 0) {
      result += arrStr[i];
      continue;
    }
    result += arrStr[i].slice(0, 1).toUpperCase() + arrStr[i].slice(1);
  }
  return result;
}

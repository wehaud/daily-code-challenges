// Task: Write two functions that convert a roman numeral to and from an integer value.
// Difficulty: hard
// Solved on: 30.04.2025
// Feelings: Это был адский ужас, я знаю, что можно было решить проще какими-то хитрыми циклами и мапами, но я не смогла осознать такое решение и не знаю синтаксис, поэтому решила как сумела, было тяжко и выглядит грустно, но работает

class RomanNumerals {
  static toRoman(num) {
    let result = "";
    while (num > 0) {
      if (num >= 1000) {
        result += "M";
        num -= 1000;
        continue;
      }
      if (num >= 900) {
        result += "CM";
        num -= 900;
        continue;
      }
      if (num >= 500) {
        result += "D";
        num -= 500;
        continue;
      }
      if (num >= 400) {
        result += "CD";
        num -= 400;
        continue;
      }
      if (num >= 100) {
        result += "C";
        num -= 100;
        continue;
      }
      if (num >= 90) {
        result += "XC";
        num -= 90;
        continue;
      }
      if (num >= 50) {
        result += "L";
        num -= 50;
        continue;
      }
      if (num >= 40) {
        result += "XL";
        num -= 40;
        continue;
      }
      if (num >= 10) {
        result += "X";
        num -= 10;
        continue;
      }
      if (num >= 9) {
        result += "IX";
        num -= 9;
        continue;
      }
      if (num >= 5) {
        result += "V";
        num -= 5;
        continue;
      }
      if (num >= 4) {
        result += "IV";
        num -= 4;
        continue;
      }
      if (num >= 1) {
        result += "I";
        num -= 1;
        continue;
      }
    }
    return result;
  }
  
  static fromRoman(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "M" || str[i] === "D") {
        if (str[i] === "M") result +=1000;
        if (str[i] === "D") result +=500;
        if (str[i-1] && str[i-1] === "C") {
            result -=100;
            continue;
          }
      }
      if (str[i] === "C" || str[i] === "L") {
        if (str[i + 1] === "M" || str[i + 1] === "D") continue;
        if (str[i] === "C") result +=100;
        if (str[i] === "L") result +=50;
        if (str[i-1] && str[i-1] === "X") {
          result -= 10;
          continue;
        }
      }
      else if (str[i] === "X" || str[i] === "V") {
        if (str[i + 1] === "C" || str[i + 1] === "L") continue;
        if (str[i] === "X") result +=10;
        if (str[i] === "V") result +=5;
        if (str[i-1] && str[i-1] === "I") {
          result -= 1;
          continue;
        }
      }
      if (str[i] === "I" && (!str[i+1] || str[i+1] === "I")) result++;
    }
    return result;
  }
}

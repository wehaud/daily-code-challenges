// Task: Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way. The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
// Difficulty: medium
// Solved on: 01.05.2025
// Feelings: Это была приятная задачка не очень сложная, но пришлось приложить достаточно усилий, чтобы решение не выглядело слишком глупым и более чистым и логичным, но вроде мне понравилось, как вышло, хотя я увидела способ сделать еще короче через цикл с floor

function formatDuration (seconds) {
  const date = [0, 0, 0, 0, 0];
  const name = ["year", "day", "hour", "minute", "second"];
  const format = [];
  
  let result = "";
  
  if (seconds === 0) return "now";
  
  while (seconds > 0) {
    if (seconds > 60 * 60 * 24 * 365 - 1) {
      date[0]++;
      seconds -= 60 * 60 * 24 * 365;
      continue;
    }
    if (seconds > 60 * 60 * 24 - 1) {
      date[1]++;
      seconds -= 60 * 60 * 24;
      continue;
    }
    if (seconds > 60 * 60 - 1) {
      date[2]++;
      seconds -= 60 * 60;
      continue;
    }
    if (seconds > 60 - 1) {
      date[3]++;
      seconds -= 60;
      continue;
    }
    if (seconds < 60) {
      date[4] = seconds;
      seconds = 0;
      continue;
    }
  }
  for (let i = 0; i < 5; i++) {
    if (date[i] > 0) {
      let temp = "";
      temp += date[i] + " " + name[i];
      if (date[i] > 1) temp += "s";
      format.push(temp);
    }
  }
  if (format.length === 1 && !result) return format[0];
  
  result += format[0];
  
  for (let j = 1; j < format.length; j++) {
    if (j === format.length - 1) result += " and " + format[j];
    else result += ", " + format[j];
  }
  
  return result;
}

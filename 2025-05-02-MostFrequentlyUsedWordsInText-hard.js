// Task: Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
// Difficulty: hard
// Solved on: 02.05.2025
// Feelings: Сама по себе задачка несложная, но я не знала как работать с объектами, сортировкой и все такое, поэтому пришлось все это выучить для задачи, поэтому hard

function topThreeWords(text) {
  const ranking = {};
  const words = text.toLowerCase().match(/\b[a-z']+\b/g);
  
  if (!words) {
    return [];
  }
  
  for (let word of words) {
    if (word in ranking) {
      ranking[word] += 1;
    } else {
      ranking[word] = 1;
    }
  }
  let winners = Object.entries(ranking)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(entry => entry[0]);
  
  return winners;
}

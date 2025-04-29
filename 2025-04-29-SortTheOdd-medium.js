// Task: You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Difficulty: medium
// Solved on: 29.04.2025
// Feelings: Еще не выучила применениее сортировки так, но мне понравилось решение с которым я подошла к этой задаче, медиум за то, что пришлось искать функцию sort и заменять второй цикл с foreach на while

function sortArray(array) {
  let oddArray = [];
  array.forEach(function(value) {
    if (value % 2 != 0) oddArray.push(value); 
  });
  oddArray.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  while (i < oddArray.length) {
   if (array[j] % 2 != 0) {
      array[j] = oddArray[i];
      i++;
    }
    j++;
  }
  return array;
}

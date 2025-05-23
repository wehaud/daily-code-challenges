// Task: You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Difficulty: medium
// Solved on: 27.04.2025
// Feelings: Было по-началу очень легко, но я забыла, что по условию задачи прогулка должна быть ровно 10 минут, поэтому средняя сложность за доработку

function isValidWalk(walk) {
  let x = 0;
  let y = 0;
  
  if (walk.length !== 10) return false;
  
  walk.forEach(function(value) {
    x = value === "w" ? x + 1 : value === "e" ? x - 1 : x;
    y = value === "n" ? y + 1 : value === "s" ? y - 1 : y;
  })
  return x === 0 && y === 0;
}

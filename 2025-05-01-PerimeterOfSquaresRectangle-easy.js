// Task: The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80  Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares. The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.
// Difficulty: easy
// Solved on: 01.05.2025
// Feelings: Это была легкая задача, с фибонначи я уже встречалась плюс тут сама задача легкая была, правда я нашла способ решать ее не через наполнение массива, а как в той задаче с перекладыванием между тремя ведрами, но ничего, попробую так решить в следующий раз!


function perimeter(n) {
  const fib = [0, 1];
  let result = 1;
  while (fib.length < n + 2) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    result += fib[fib.length - 1];
  }
  return result * 4;
}

// Task: Find two consecutive Fibonacci numbers such that their product is equal to or just greater than the given number.
// Difficulty: hard
// Solved on: 28.04.2025
// Feelings: пришлось поломать голову, но мне понравилось это решать!

function productFib(prod){
  const fib = [0, 1, 1];
  let i = 2;
  while (fib[i] * fib[i-1] <= prod) {
    if (fib[i - 1] * fib[i] === prod) {
      return [fib[i - 1], fib[i], true]
    }    
    fib.push(fib[i] + fib[i - 1]);
    i++;
  }
  return [fib[i - 1], fib[i], false]
}

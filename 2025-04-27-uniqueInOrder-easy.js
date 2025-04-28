// Task: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// Difficulty: easy
// Solved on: 27.04.2025
// Feelings: Супер простая задачка, но зато я узнала о typeof и push, так что просто, но полезно!

var uniqueInOrder=function(iterable){
  if (typeof iterable === "string") {
    iterable = iterable.split("");
  }
  let result = [];
  for (let item = 0; item < iterable.length; item++) {
    if (item > 0) {
      if (iterable[item] === iterable[item - 1]) continue; else result.push(iterable[item]);
    } else result.push(iterable[item]);
  }
  return result;
}

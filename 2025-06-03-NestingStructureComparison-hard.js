// Task: Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.
// Difficulty: hard
// Solved on: 03.06.2025
// Feelings: Сложновато было после долгого перерыва, но вроде получилось неплохо, во всяком случае я понимаю, что тут происходит xD

Array.prototype.sameStructureAs = function (other) {
    if (!Array.isArray(this)) return false;
    if (!Array.isArray(other)) return false;
  
    function isChildrenEqual (arr1, arr2) {
      if (arr1.length != arr2.length) return false;
      
      for (let i = 0; i < arr2.length; i++) {
          if (!Array.isArray(arr1[i]) && !Array.isArray(arr2[i])) continue;
        
          if (Array.isArray(arr1) == Array.isArray(arr2)) {
            if (!isChildrenEqual(arr1[i], arr2[i])) return false;
          } else return false;
       }  
      
      return true;
    }
  
    return isChildrenEqual(this, other);
};

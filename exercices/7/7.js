const multiply = (n1, n2) => n1 * n2;
console.log(multiply(2, 3)) // 6
console.log(multiply(7, 10)) // 70

function countPositiveNumbers(nums){
  let result = nums.length;

  nums.forEach(value => {
    if (value < 0){
      result--
    }
  })
  return result;
}
console.log(countPositiveNumbers([1, -3, 5])) // 2
console.log(countPositiveNumbers([-2, 3, -5, 7, 10])) // 3

const addNum = (arr, num) => arr.map(value => value + num);
console.log(addNum([1,2,3], 2)) // [3, 4, 5]
console.log(addNum([-2,-1,0,99], 2)) // [0, 1, 2, 101]


// remove the first 2 eggs from foods
function removeEggs(foods){
  let eggsToRemove = 0;

  return foods.filter(food => {
    if (food === 'egg' && eggsToRemove < 2){
      eggsToRemove++
      return false
    } else return true;
  })
}
console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'orange'])); // ['apple', 'orange']
// find the largest

function highestNum(nums) {
  
  let max = -Infinity, second = -Infinity, third = -Infinity, min = Infinity;

  if (nums.length === 0) {
    max = null, min = null, second = null, third = null
  }

  for (let num of nums) {

    if (num > max) {
      third = second
      second = max
      max = num
    } else if (num < max && num > second) {
      third = second
      second = num
    } else if (num < second && num > third) {
      third = num
    }

    if (num < min) {
      min = num
    }
  }

  return { max, second, third, min };
}
console.log(highestNum([34, 4, 71, 2, 99, 34, 2, -34, -8, 99, 4]))

// Big-O = O(n)

/*
function summation(n){
  let sum =0
  for (i of n){
    sum += i
  }
  return sum;
}
console.log(summation([34,2,3,4]))
*/
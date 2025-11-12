function BinarySearch(array, target){
  // sort array, lowest number first (binary search only works with sorted arrays)
  array.sort((a, b) => a - b);
  
  // we use 2 pointers, pointing at left most and right most elements in the array using index
  let left = 0;
  let right = array.length -1;
  
  while (left <= right){
    // get middle element by index
    // "Math.floor" returns lower integer value if answer is decimal, b/c index value must be a whole number e.g 2.5 = 2.
    const mid = Math.floor((left + right) /2)
    
    if (target === array[mid]){
      return mid;
    }
    
    if (target > array[mid]){
      // binary search left half of the array
      left = mid + 1;
    } else {
      // binary search right half of the array
      right = mid -1;
    }
  }
  
  return -1;
}

console.log(BinarySearch([-5,2,4,6,10], 10)) // 4
console.log(BinarySearch([-5,2,4,6,10], 6))  // 3
console.log(BinarySearch([-5,2,4,6,10], 20))  // -1

console.log(BinarySearch([6,12,-2,1,5], 5))  // 2
console.log(BinarySearch([6,12,-2,1,5], 1))  // 1
console.log(BinarySearch([6,12,-2,1,5], 30))  // -1

// Big-O = 0(logn)
// time complexity is logarithmic and much better than linear one (linearSearch)
// input size is reduced by half in every iteration
// the number of operations increases as 'n' grows but not by same amount






// function linarySearch(array, target){
//   for (let i=0; i<array.length; i++){
//     if (array[i]===target){
//       return i
//     }
//   }
//   return -1
// }

// console.log(linarySearch([-5,2,4,6,10], 10)) // 4
// console.log(linarySearch([-5,2,4,6,10], 6))  // 3
// console.log(linarySearch([-5,2,4,6,10], 20))  // -1

// Big-O = 0(n)
// time complexity is linear
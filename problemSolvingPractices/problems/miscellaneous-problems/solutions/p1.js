// Problem: Remove duplicates from an array
// Given an array, return a new array with duplicates removed.

// Example:
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function removeDuplicates(arr){
  for (let i=0; i< arr.length; i++){
    if (arr[i] === arr[i-1]){
      arr.splice(i-1, 1)
      i--;
    }
  }
  return arr;
}

console.log(removeDuplicates([1, 2, 2, 2, 2, 3, 3, 4, 4, 4])) // [1, 2, 3, 4]

// Big-O = O(n^2)


// faster way
function removeDuplicates1(arr){

  // A Set is a built-in JavaScript object that Stores unique values only
  // Keeps values in the order they were inserted
  // "new" creates a new array and stores values from the set in there
  return [...new Set(arr)]
}

console.log(removeDuplicates1([1, 2, 2, 2, 2, 3, 3, 4, 4, 4])) // [1, 2, 3, 4]

// Big-O = O(n)

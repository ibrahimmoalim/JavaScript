// Problem: Flatten a nested array
// Flatten an array of arbitrary depth.

// Example:
// Input: [1, [2, [3, [4]]]]
// Output: [1, 2, 3, 4]



// most efficient "manual" flatten implementation

function flattenNestedArr(arr){
  const result = []

  for (item of arr){
    // if item in arr is an array
    if (Array.isArray(item)){
      // push it into result while flattened
      result.push(...flattenNestedArr(item))
    } else {
      result.push(item)
    }
  }
  return result
}

console.log(flattenNestedArr([1, [2, [3, [4]]]])) // [1, 2, 3, 4]

// Big-O = O(n)




// other solutions

function flattenNestedArr2(arr){
  return arr.flat(Infinity);
}

console.log(flattenNestedArr2([1, [2, [3, [4]]]])) // [1, 2, 3, 4]

// Big-O = O(n)




function flattenNestedArr3(arr){
  // if array does not include any arrays
  if (!arr.some(item => Array.isArray(item))) return arr
  return flattenNestedArr3(arr.flat())
}

console.log(flattenNestedArr3([1, [2, [3, [4]]]]))  // [1, 2, 3, 4]

// Big-O = O(n^2)
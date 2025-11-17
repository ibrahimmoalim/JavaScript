function quickSort(arr){
  if (arr.length < 2){ // base case
    return arr
  }

  let pivot = arr[arr.length -1] // make pivot last element
  let left = []
  let right = []

  for (let i = 0; i < arr.length -1; i++){
    if (arr[i] < pivot){
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  // use the spread operator "..." to expand arrays into their individual elements
  // this gets rid of the [] and just output the elements in the array
  // we get [-6, -2, 4, 8, 20] instead of [[ -6, -2 ], 4, [ 8, 20 ]]
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([-6,20,8,-2,4])) // [-6, -2, 4, 8, 20]

// (O(n) * O(logn)) = O(nlogn)
// average case = O(nlogn)
// worst case = O(n^2), if arr is sorted already
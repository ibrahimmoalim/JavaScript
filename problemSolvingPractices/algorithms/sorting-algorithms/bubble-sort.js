function bubbleSort(arr){
let swapped;

  do {
    swapped = false;
    for (let i=0; i<arr.length-1; i++){
      // Compare current element with the next one
      if (arr[i] > arr[i+1]){
        // Swap them if they're out of order
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp

        swapped = true;
      }
    }
  } while(swapped) // Keep looping until no swaps occur

  return arr; // Return the sorted array
}

console.log(bubbleSort([-6,20,8,-2,4]))

// time complexity is quadratic-O(n^2) in the worst case, because the function uses nested loops (for-loop inside a do-while loop)
// Big-O = O(n^2)
// not great for sorting


// 🔄 What happens when you run this with [-6, 20, 8, -2, 4]:

// First pass:

// Compare -6 and 20 → fine

// Compare 20 and 8 → swap → [-6, 8, 20, -2, 4]

// Compare 20 and -2 → swap → [-6, 8, -2, 20, 4]

// Compare 20 and 4 → swap → [-6, 8, -2, 4, 20]

// Swapped = true → do another pass

// Second pass:

// Compare -6 and 8 → fine

// Compare 8 and -2 → swap → [-6, -2, 8, 4, 20]

// Compare 8 and 4 → swap → [-6, -2, 4, 8, 20]

// Compare 8 and 20 → fine

// Swapped = true → another pass

// Third pass:

// Compare -6 and -2 → fine

// Compare -2 and 4 → fine

// Compare 4 and 8 → fine

// Compare 8 and 20 → fine

// Swapped = false → loop ends

// ✅ Final result: [-6, -2, 4, 8, 20]
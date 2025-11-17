// Problem: Count character frequency in a string
// Return an object where keys are characters and values are frequencies.

// Example:
// Input: "banana"
// Output: { b:1, a:3, n:2 }

function countCharFrequency(str){
  const result = {};
  for (let i=0; i<str.length; i++){
    const char = str[i]
    if (result[char]){
      result[char]++
    } else {
      result[char] = 1
    }
  }
  return result;
}

console.log(countCharFrequency('banana')) // { b:1, a:3, n:2 }

// Big-O = O(n)

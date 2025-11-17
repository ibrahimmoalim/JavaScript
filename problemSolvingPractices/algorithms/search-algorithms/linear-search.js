// Problem: search for the index of "t" inside an array

// Solutions:

// preferred solution, reusable because array is passed into it, so we can use any array.
// Linear search implemented manually without built-in methods

function linearSearch(array, target){
  for (let i=0; i<array.length; i++){
    if (array[i]===target) {
      return i
    }
  }
  return -1
}

// Big-O = O(n)

console.log(linearSearch([-5,2,10,4,6], 10)) // 2
console.log(linearSearch([-5,2,10,4,6], 6)) // 4
console.log(linearSearch([-5,2,10,4,6], 20)) // -1




// Linear search using built-in methods

function linearSearch2(array, target){
  if (array.includes(target)) return array.indexOf(target);
  return -1;  
}

// // Big-O = O(n), (.includes = O(n)) + (.indexOf = O(n)) = O(2n)
// still linear time complexity (constant factor *2), two passes through data instead of one.

console.log(linearSearch2([-5,2,10,4,6], 10)) // 2
console.log(linearSearch2([-5,2,10,4,6], 6)) // 4
console.log(linearSearch2([-5,2,10,4,6], 20)) // -1




// Alternate solution (Not reusable: array is hardcoded inside the function)
// Linear search implemented manually without built-in methods

function linearSearch3(target){
  const array = [-5,2,10,4,6]
  for (let i=0; i<array.length; i++){
    if (array[i]===target) {
      return i
    }
  }
  return -1
}

// Big-O = O(n)

console.log(linearSearch3(10)) // 2
console.log(linearSearch3(6)) // 4
console.log(linearSearch3(20)) // -1
// check whether "n" is a power of 2

// Best solution is this bitwise algorithm

function isPowerOfTwo(n){
  return n>0 && (n & (n-1))===0;
}

// Big-O = O(1) , because we have only 1 operation

console.log(isPowerOfTwo(1))  // true       
console.log(isPowerOfTwo(2))  // true
console.log(isPowerOfTwo(3))  // false
console.log(isPowerOfTwo(4))  // true
console.log(isPowerOfTwo(5))  // false
console.log(isPowerOfTwo(6))  // false
console.log(isPowerOfTwo(7))  // false
console.log(isPowerOfTwo(8))  // true
console.log(isPowerOfTwo(9))  // false
console.log(isPowerOfTwo(16))  // true
console.log(isPowerOfTwo(33554432))  // true
console.log(isPowerOfTwo(0))  // false
console.log(isPowerOfTwo(-20))  // false




// alternate algorith thats O(logn)

// function isPowerOfTwo(n){
//   if (n<1) return false

//   while (n>1){
//     if (n%2 !== 0) return false

//     n/=2
//   }
//   return true;
// }

// Big-O = O(logn)  -  because input size (value of n) is reduced by half each time the loop runs @l:9




// another alternate algorithm

// function isPowerOfTwo(n){
//   if (n<1) return false;

//   let num = 1
//   while (n > num){
//     num*= 2       // loop starts at 2 and multiplies by two each time until num < n, then the below code returns true if num===n, else returns false
//   }
//   return num === n;
// }

// // O(logn)  -  because loop grows slowly, only proportional to the logarithm of n, e.g if n=8, we only get 3 iterations before we get to 8. if n=1024, the 10th iteration gives us 1024.




/* checks only for numbers less than n^20

function isPowerOfTwo(n){
  if (n===1) return true;

  let num = 1
  for (let i=1; i<=20; i++){
    num*= 2
    if (num===n) return true;
  }

  return false;
}

// O(1)  -  because the loop is fixed at 20 iterations, it doesn't grow with input size (n)
*/
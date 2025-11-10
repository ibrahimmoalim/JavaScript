// check whether "n" is a power of 2

function isPowerOfTwo(n){
  if (n===1) return true;

  let num = 1
  for (let i=1; i<=20; i++){
    num*= 2
    if (num===n) return true;
  }

  return false;
}

// O(n)

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(6))
console.log(isPowerOfTwo(7))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(9))
console.log(isPowerOfTwo(16))
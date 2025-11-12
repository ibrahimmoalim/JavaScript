function recursiveFactorial(n){
  if (n<1) return 1;  // base case

  return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(2))
console.log(recursiveFactorial(3))
console.log(recursiveFactorial(4))
console.log(recursiveFactorial(5))

// Big-O = O(n), because number of operations grows with input size
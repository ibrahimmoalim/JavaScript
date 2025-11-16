// Recursive solution

function recursiveFibonacci(n){
  if (n<2) return n;  // Base case: if n < 2, return n directly (takes constant time)
  
  return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0))  // 0
console.log(recursiveFibonacci(1))  // 1
console.log(recursiveFibonacci(2))  // 1
console.log(recursiveFibonacci(3))  // 2
console.log(recursiveFibonacci(4))  // 2
console.log(recursiveFibonacci(5))  // 5
console.log(recursiveFibonacci(6))  // 8

// Each call spawns 2 more calls (fib(n-1) and fib(n-2)),
// creating a binary recursion tree of height n.
// Total calls ≈ 2^n → Time Complexity: O(2^n).
// Recursion is not a good solution to the Fibonacci sequence problem, because the perfomance is terrible compared to Iterative solution - O(n)




// iterative solution

// function Fibonacci(n){
//   fib=[0,1]

//   for (let i=2; i<=n; i++){
//     fib[i]=fib[i-2]+fib[i-1]
//   }
//   return fib[n]
// }

// Big-O = 0(n)

// console.log(recursiveFibonacci(0))  // 0
// console.log(recursiveFibonacci(1))  // 1
// console.log(recursiveFibonacci(2))  // 1
// console.log(recursiveFibonacci(3))  // 2
// console.log(recursiveFibonacci(4))  // 2
// console.log(recursiveFibonacci(5))  // 5
// console.log(recursiveFibonacci(6))  // 8
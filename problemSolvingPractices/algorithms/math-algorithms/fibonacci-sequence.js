function fibonacci(n){
  // We initialize the first two numbers because the Fibonacci recurrence requires two starting values.
  fib = [0,1]
  for (let i=2; i<n; i++){
    fib[i] = fib[i-2] + fib[i-1]  // O(n)
  }
  return fib;  // O(1)
}

// Big-O = 0(n)

console.log(fibonacci(2))  // output: [0,1]
console.log(fibonacci(3))  // output: [0,1,1]
console.log(fibonacci(9)) // output: [0,1,1,2,3,5,8,13,21]




function fibonacci1(n){
  fib = [2,2]
  for (let i=2; i<n; i++){
    fib[i] = fib[i-2] + fib[i-1]
  }
  return fib;
}
console.log(fibonacci1(7)) // output: [2, 2, 4, 6, 10, 16, 26]

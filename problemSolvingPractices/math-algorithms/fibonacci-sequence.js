// Fibonacci n[i]= n[i-1]+n[1-2]


function fibonacci(n){
  fib = [0,1]  // create the first two numbers because without them fibonacci sequence is impossible
  for (let i=2; i<n; i++){
    fib[i] = fib[i-2] + fib[i-1]  // Big-O = O(n)
  }
  return fib;  // O(1)
}
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

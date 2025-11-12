// given a non-negative integer 'n' , find the factorial of that integer

function factorial(n){
  let result = 1;

  for (let i=2; i<=n; i++){  // we start from 2, b/c if we started from 1, 1*2 would give us 2 anyways.
    result*=i // or "result = result * i"  -  O(n)
  }
  return result;  // O(1)
}
console.log(factorial(4)) // 1*2*3*4 = 24
console.log(factorial(5)) // 1*2*3*4*5 = 120
console.log(factorial(0)) // 1 (factorial of 0 is 1)

// Big-O = 0(n)
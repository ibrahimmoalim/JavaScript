// given a non-negative integer 'n' , find the factorial of that integer

function factorial(n){
  let result = 1;

  for (let i=2; i<=n; i++){  // we start from 2, b/c if we started from 1, 1*2 would give us 2 anyways. this means 1 less loop to do and so this is better for time complexity even though it's just 1 operation less.
    result*=i // or "result = result * i"  -  O(n)
  }
  return result;  // O(1)
}
console.log(factorial(4)) // 1*2*3*4 = 24
console.log(factorial(5)) // 1*2*3*4*5 = 120
console.log(factorial(0)) // don't know why this happens but it equals 1

// Big-O = 0(n)
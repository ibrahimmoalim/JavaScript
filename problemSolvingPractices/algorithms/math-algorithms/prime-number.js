// checking whether n is prime number or not

function isPrime(n){
  if (n<2){
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++){ // if n=100, we check till sqrt(100), which is 10. sqrt means square root
    if (n % i === 0){  // if "n" is divisable(%) by "i", then "n" is not a prime number, the "0" the result of the division is an integer (a whole number)
      // "%" is called modulus operator
      return false;
    }
  }
  return true;
}
// Big-O = O(sqrt(n))  -  much better than O(n)
console.log(isPrime(5))
console.log(isPrime(11))
console.log(isPrime(23))
console.log(isPrime(8))
console.log(isPrime(4))
console.log(isPrime(15))




// check for even numbers

function isEven(n){
  return n%2 === 0 ? `${n} is an even number` : `${n} is not an even number`
}  // O(n)

console.log(isEven(0))
console.log(isEven(2))
console.log(isEven(4))
console.log(isEven(8))
console.log(isEven(1))
console.log(isEven(3))
console.log(isEven(15))
console.log(isEven(21))



// check for Odd numbers

function isOdd(n){
  return n%2 !== 0 ? `${n} is an Odd number` : `${n} is not an Odd number`
}  // O(n)

console.log(isOdd(0))
console.log(isOdd(2))
console.log(isOdd(4))
console.log(isOdd(8))
console.log(isOdd(1))
console.log(isOdd(3))
console.log(isOdd(15))
console.log(isOdd(21))
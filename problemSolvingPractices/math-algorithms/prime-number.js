function isPrime(n){
  if (n<2){
    return false;
  }

  for (let i = 2; i < Math.sqrt(n); i++){ // if n=100, we check till sqrt(100), which is 10. sqrt means square root
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
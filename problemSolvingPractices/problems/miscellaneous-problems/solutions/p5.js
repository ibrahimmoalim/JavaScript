// Problem: Check if a string is a palindrome
// Return 'true' if the string reads the same forward and backward.

// Example:
// Input: "racecar" → true
// Input: "hello" → false


function isPalindrome(str){
  // split the str into an array of individual characters with .split('') -> ["r","a","c","e","c","a","r"] and ["h","e","l","l","o"]
  // reverse their order -> ["r","a","c","e","c","a","r"] and ["o","l","l","e","h"]
  // put back the reversed array of letters(characters) into a string with .join('') -> "racecar" and "olleh"
  const reversedStr = str.split('').reverse().join('')
  if (str === reversedStr) return true;
  else return false;
}

console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('hello')) // false

// Big-O = O(n)




// shortened code
function isPalindrome1(str){
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome1('racecar')) // true
console.log(isPalindrome1('hello')) // false
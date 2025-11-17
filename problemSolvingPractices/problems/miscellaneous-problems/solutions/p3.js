// Problem: Reverse words in a sentence
// Reverse the order of words, not the characters.

// Example:
// Input: "hello world from js"
// Output: "js from world hello"


function reverseWords(str){
  const words = str.split(' ').reverse().join(' ');
  return words
}

console.log(reverseWords('hello world from js'))  // js from world hello

// Big-O = O(n) , becasue O(n)+O(n)+O(n) = O(n).

// split -> breaks the string into arrays of words, using spaces "(' ')", new array after each space basically.
// Big-O = O(n)

// reverse() -> reverses the array of words we just created
// Big-O = O(n)

// join -> joins them back into a string, using spaces "(' ')"
// Big-O = O(n)

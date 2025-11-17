// Problem: Find the longest word in a sentence
// Return the longest word.

// Example:
// Input: "JavaScript is awesome"
// Output: "JavaScript"

function longestWord(sentence){
  // if string is empty
  if (!sentence) return null;
  

  let longest = ''
  const words = sentence.split(' ')

  for (let word of words){
    // ignore punctuations attached to words
    const cleanWord = word.replace(/[^a-zA-Z']/g, '')
    if (cleanWord.length > longest.length){
      longest = cleanWord
    }
  }

  return longest;
}

console.log(longestWord('JavaScript is awesome')) // JavaScript
console.log(longestWord("javascript is the best programming language (it's not)")) // programming
console.log(longestWord("hello, lads how you doing today!!!")) // hello
console.log(longestWord("")) // null

// Big-O = O(n)
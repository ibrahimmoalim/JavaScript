// // Advanced Functions
// // functions are just values and can be saved in variables

/*
const buttonElement = document.querySelector('.js-button')

const eventListener = () => {
  console.log('you clicked on the button, yippee!!!')
}

buttonElement.addEventListener('click', eventListener)
buttonElement.removeEventListener('click', eventListener)

buttonElement.addEventListener('click', () => {
  console.log('you clicked on the button')
});
*/


// const func = function greeting(){
//   console.log('hello')
// }
// console.log(func) // function: greeting
// console.log(typeof func) // function


// func() // hello

// // you can get rid of the function name when using a variable
// // because as long as there's a way to access a function
// // function names are not needed
// // for example:

// const func2 = function(){
//   console.log('hi lad')
// }

// func2() // hi lad
// // this is called an anonymous function (function without a name)



// // we can also save functions inside objects
// //for example:

// const object1 = {
//   num: 2,
//   func3: function(){
//     console.log('how are you')
//   }
// }
// object1.func3() // how are you



// // we could also pass a function into a function as a parameter
// //for example:

// function run(param){
//   param() // cars
// }

// (run(function() {
//   console.log('cars')
// }))


// setTimeout() is a built-in function that takes two parameters
// in the 1st parameter we pass in a function
// in the 2nd parameter we pass in time in milliseconds, which tells
// it how long to wait before running the function
// example: 
// setTimeout(function(){
//   console.log('time out test')
//   console.log('time out test2') // "time out test" (will be output after 5 seconds from runtime)
// }, 5000) // 5000 => 5 seconds

// while the timer is counting 5 seconds, any code below it runs normally
// and so below code will be output first
// this is called "Asynchronous code"
// console.log('hi') // hi



// setInterval() is another built-in JS function thats like setTimeout()
// except it loops
// setInterval(function(){
//   console.log('hi lads') // "hi lads" (every 3 seconds from runtime)
// }, 3000)


[
  'hello',
  'hi',
  'how are ya'
].forEach(function(value, index){
  //console.log(index)
  //console.log(value) // hello   hi   how are ya
});


// instead of continue with for loops, we could use below code
// to skip a value in an array
[
  'hello',
  'hi',
  'how are ya'
].forEach(function(value, index){
  if (value === 'hi'){
    return; // skips 'hi', because function ends and next function goes on
  }

  // console.log(index)
  // console.log(value) // hello   hi   how are ya
});


// arrow functions

const arrowFunction = (param) => {
  // console.log('arrowFunction example');
  // console.log(param)
}
arrowFunction(6);

const oneParam = param => {
  // console.log(param + 2)
}
oneParam(2) // 4

const oneLine = () => 5-2;
// console.log(oneLine()) // 3

const arr = [4,6,8,2,9,1,5]
arr.sort((a, b) => a - b);
// console.log(arr);

// .forEach with arrow functions (makes the code easier to read)
[
  'hello',
  'hi',
  'how are ya'
].forEach((value, index) => {
  if (value === 'hi'){
    return; // skips 'hi', because function ends and next function goes on
  }

  // console.log(index)
  // console.log(value) // hello   hi   how are ya
});

// arrow functions inside objects
const object2 = {
  // both below methods are same
  method: () => {
    return 'arrow function inside object example'
  },
  // short-hand method syntax (easier to read)
  method1(){
    return 'short-hand method example'
  }
};
// console.log(object2.method()) // arrow function inside object example
// console.log(object2.method1()) // short-hand method example

console.log([1, -3, 5].filter(value => {
  // if (value === -3){
  //   return false
  // } else return true;
   return value >= 0; // [1, 5]
}));

// code below is same as code above
console.log([1, -3, 5].filter(value => value >= 0)); // [1, 5]

console.log([1, 1, 3].map(value => value * 2)); // [2, 2, 6]
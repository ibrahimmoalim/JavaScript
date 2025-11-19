// // Advanced Functions
// // functions are just values and can be saved in variables

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
setTimeout(function(){
  console.log('time out test')
  console.log('time out test2') // "time out test" (will be output after 5 seconds from runtime)
}, 5000) // 5000 => 5 seconds

// while the timer is counting 5 seconds, any code below it runs normally
// and so below code will be output first
// this is called "Asynchronous code"
console.log('hi') // hi



// setInterval() is another built-in JS function thats like setTimeout()
// except it loops
setInterval(function(){
  console.log('hi lads') // "hi lads" (every 3 seconds from runtime)
}, 3000)
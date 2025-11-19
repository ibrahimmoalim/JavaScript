// Advanced Functions
// functions are just values and can be saved in variables

const func = function greeting(){
  console.log('hello')
}
console.log(func) // function: greeting
console.log(typeof func) // function


func() // hello

// you can get rid of the function name when using a variable
// because as long as there's a way to access a function
// function names are not needed
// for example:

const func2 = function(){
  console.log('hi lad')
}

func2() // hi lad
// this is called an anonymous function (function without a name)



// we can also save functions inside objects
//for example:

const object1 = {
  num: 2,
  func3: function(){
    console.log('how are you')
  }
}
object1.func3() // how are you



// we could also pass a function into a function as a parameter
//for example:

function run(param){
  param() // cars
}

(run(function() {
  console.log('cars')
}))
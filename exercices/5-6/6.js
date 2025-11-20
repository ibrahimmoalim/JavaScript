const add = function(){
  console.log(2+3)
}
add()
add()

function runTwice(fun){
  fun()
  fun()
}

runTwice(function(){
  console.log('hello')
})

runTwice(add)

// function changeButtonText(){
//   setTimeout(function(){
//     document.querySelector('.js-start').innerHTML = 'Finished'
//   }, 1000)
// }

function changeButtonText(){
  document.querySelector('.js-start').innerHTML = 'Loading...'
  setTimeout(function(){
    document.querySelector('.js-start').innerHTML = 'Finished'
  }, 1000)
}

let timeoutId;
function addToCart(){
  document.querySelector('.js-added').innerHTML = 'Added'

  clearTimeout(timeoutId)

  timeoutId = setTimeout(function(){
    document.querySelector('.js-added').innerHTML = ''
  }, 2000)
}


// setInterval(function(){
//   if (document.title === 'exercise 6'){
//     document.title = '(2) New messages'
//   } else {
//     document.title = 'exercise 6'
//   }
// }, 1000)

let messages = 2;
let intervalId = false;



if (!intervalId){
  intervalId = setInterval(function(){

  if (document.title === 'exercise 6' && messages > 0){
    document.title = `(${messages}) New messages`
  } else {
    document.title = 'exercise 6'
  }

}, 1000)
}

function addMessages(){
  messages++
}
function removeMessages(){
  if (messages > 0){
    messages--
  }
}
function stop(){
  clearInterval(intervalId)
}
// new Promise(() => {
//   console.log('promise')
// });

// new Promise((resolve) => {
//   console.log('start promise')

//   setTimeout(() => {
//     resolve('finished loading 1st operation')
//   }, 3000);

// }).then((message) => {

//   console.log(message) // logs after 3 seconds
//   console.log('step 2')
//   console.log('start 2nd promise')
  
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('finished loading 2nd operation')
//     }, 2000)
//   });
//   // "then" parameter is connected to the previous "resolve" parameter
//   // the "message" below is "finished loading 2nd operation"
// }).then((message) => {

//   console.log(message) // logs 2 seconds after prev operation
//   console.log('step 3')
//   console.log('start 3rd promise')

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('finished loading 3rd operation')
//     }, 2000)
//   });
// }).then((message) => {

//   console.log(message) // logs 2 seconds after prev operation
//   console.log('step 4')

// });



// Promise.all() wait for multipple promises to finish
// before going to the next step
// it's better than regular "promise", if we got multiple async codes
// example:
// since "Promise.all()" does all async operations at once and then goes into next step
// i made the operations have 1 sec b/w them to make it ordered
// and so the first 1 runs after 1 sec, then the 2nd, then the 3rd
Promise.all([

  new Promise((resolve) => {
  console.log('start promise')

  setTimeout(() => {
    console.log("operation 1")
    resolve('finished loading 1st operation')
  }, 1000)
  }),
  
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("operation 2")
      resolve('finished loading 2nd operation')
    }, 2000)
  }),

  new Promise((resolve) => {
    setTimeout(() => {
      console.log("operation 3")
      resolve('finished loading 3rd operation')
    }, 3000)
  })
  // ".then" now takes all parameters of "resolve" and displays them in an array
]).then((messages) => {
  console.log(messages) // ['finished loading 1st operation', 'finished loading 2nd operation', 'finished loading 3rd operation']
  console.log('next step')
})
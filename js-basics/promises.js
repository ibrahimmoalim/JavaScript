// new Promise(() => {
//   console.log('promise')
// });

new Promise((resolve) => {
  console.log('start promise')

  setTimeout(() => {
    resolve('finished loading 1st operation')
  }, 3000);

}).then((message) => {

  console.log(message) // logs after 3 seconds
  console.log('step 2')
  console.log('start 2nd promise')
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('finished loading 2nd operation')
    }, 2000)
  });

}).then((message) => {

  console.log(message) // logs 2 seconds after prev operation
  console.log('step 3')
  console.log('start 3rd promise')

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('finished loading 3rd operation')
    }, 2000)
  });
}).then((message) => {

  console.log(message) // logs 2 seconds after prev operation
  console.log('step 4')

});
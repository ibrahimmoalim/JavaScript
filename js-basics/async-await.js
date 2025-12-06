// async makes code return a promise
async function hello() {
  return 'hello'
};

hello().then((message) => {
  console.log(message) // hello
  console.log('next step') // next step
});



// this is same as code above
// just uses more code
function hello2(){
  return new Promise((resolve) => {
    resolve('hello2')
  })
};

hello2().then((message) => {
  console.log(message) // hello2
  console.log('next step2') // next step2
});
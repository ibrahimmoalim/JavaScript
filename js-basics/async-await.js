// async makes code return a promise
// async function hello() {
//   return 'hello'
// };

// hello().then((message) => {
//   console.log(message) // hello
//   console.log('next step') // next step
// });



// // this is same as code above
// // just uses more code
// function hello2(){
//   return new Promise((resolve) => {
//     resolve('hello2')
//   })
// };

// hello2().then((message) => {
//   console.log(message) // hello2
//   console.log('next step2') // next step2
// });


// async await example 1:
function wait(ms){
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function demo() {
  console.log('start')
  await wait(1000);     // pauses for 1 second
  console.log('this after 1 second')
}

demo();



// async await example 2:
async function getNumber(){
  return 42 // async function automatically wraps this in a promise
}

async function show() {
  const num = await getNumber()
  console.log(num) // 42
}
show()



// async await example 3:
// fetching data with async await
async function getData(){
  const response = await fetch('https://supersimplebackend.dev/hello');
  const result = await response.text();
  return result
}

async function showData(){
  console.log('loading...')
  const text = await getData()
  console.log(text)
}
showData()
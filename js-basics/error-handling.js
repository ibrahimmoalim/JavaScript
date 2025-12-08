// Error handling with functions
// we don't use "try / catch " everywhere, it's only for handling "Unexpected errors"
// as soon as we get an error, it skips the rest of code and jumps into "catch"

function getError() {
  try {

    fakeFunction()
    console.log('next line') // (this line doesn't run if prev line is an error)

  } catch (error) {

    console.log('error, function does not exist') // error, function does not exist
    console.log(error) // (error info)

    // you could also do "console.error" to make it look like a proper error in the web console:
    // console.error('error, function does not exist')
    // console.error(error)

  }
}
getError()



// manually create an error
function throwError() {

  try {

    // this creates an error and skips rest of code
    // can throw string, number, array, object, boolean and function.
    throw ((hey)=> console.log(hey))

    // all this is skipped
    throw 'error 2'
    fakeFunction()
    console.log('next line')

  } catch (error) {

    // since we throw a function, we can run error as a function
    error('lad') // lad

  }
}
throwError()



// create an error in the future with promise and async
// "reject" is built-in like "resolve"

// await waits for the promise to settle.
// If the promise resolves, result gets the value.
// If the promise rejects, it jumps to the catch block.

async function throwError2() {
  try {
    const result = await new Promise((resolve, reject) => {

      setTimeout(() => {
        reject('Unexpected error, please try again!')

        // resolve doesn't run if we do reject
        resolve('hello there')
      }, 2000)

    })

    // doesn't run if we do "reject"
    console.log(result) // hello there
  }

  catch (error) {
    console.log(error) // Unexpected error, please try again!
  }
}
throwError2() // (if there's no "reject", we get "hello there")
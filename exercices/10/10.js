// a
const xhr = new XMLHttpRequest();

xhr.responseType = 'text'

xhr.addEventListener('load', () => {

  console.log(xhr.response) // Hello!
})

xhr.open('GET', 'https://supersimplebackend.dev/greeting')
xhr.send()



// b
// by default it uses first parameter "GET"
const result = fetch('https://supersimplebackend.dev/greeting').then((response) => {
  return response.text()
}).then((result) => {
  console.log(result) // Hello!
})



// c
async function getGreeting(){
  const response = await fetch('https://supersimplebackend.dev/greeting')

  const result = await response.text()

  return result
}

async function showGreeting(){
  const text = await getGreeting()
  console.log(text) // Hello!
}
showGreeting()



// d
async function postGreeting(){
  const post = await fetch('https://supersimplebackend.dev/greeting', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'ibrahim'
    })
  });

  const response = await post.text()

  return response
}

async function showPostResponse(){
  const text = await postGreeting()
  console.log(text) // Hi ibrahim!
}
showPostResponse()



// e
// async function getAmazon(){
//   try {
//     const response = await fetch('https://amazon.com')
//     const result = await response.text()
//     return result
//   } catch (error){
//     console.error('CORS error. Your request was blocked by the backend')
//   }
// }
// getAmazon()



// f
async function postError(){
  try {

    const response = await fetch('https://supersimplebackend.dev/greeting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.status >= 400) {
      throw response
    }

    const text = await response.text()
    console.log(text)

  } catch (error){
    if (error.staus === 400){
      const errorMessage = await error.json()
      console.log(errorMessage)
    };
    console.error('Network error, Please try again later.')
  };
}
postError()
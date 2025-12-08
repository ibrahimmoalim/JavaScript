// XMLHttpRequest = built-in class to send HTTP requests to backend computers/servers
const xhr = new XMLHttpRequest();

// if content type is image, turn it into 'blob'
// A Blob is a binary object — often used for images, files, or any raw binary data.
xhr.responseType = 'blob';

// setup load event listener
// 'load' fires when a resource or request finishes loading completely
// like how 'keydown' event fires when user presses a key.
// 'load' is about completion, not user interaction
xhr.addEventListener('load', () => {
  const result = xhr.response

  console.log(result)

  // 'URL.createObjectURL()' turns the Blob into a temporary local URL.
  // This lets the browser display the downloaded image without uploading it or saving it to disk.
  // each time with a diff URL
  const imageUrl = URL.createObjectURL(result);

  const img = document.getElementById('imgId')
  const paragraphEl = document.getElementById('pId');

  if (result && result.size > 0) {
    img.src = imageUrl;
    img.alt = 'apple image';
    paragraphEl.innerHTML = "here's an apple"
  }
});

// setup/prepare the request (method, url)
xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');

// send the request
xhr.send();




const xhr2 = new XMLHttpRequest()

// if content type is application/json
xhr2.responseType = 'json'

xhr2.addEventListener('load', () => {
  
  const result = xhr2.response
  console.log(result)

});

xhr2.open('GET', 'https://supersimplebackend.dev/products')
xhr2.send();




const xhr3 = new XMLHttpRequest()

// if content type is text
xhr3.responseType = 'text'

xhr3.addEventListener('load', () => {
  
  const result = xhr3.response
  console.log(result)

});

xhr3.open('GET', 'https://supersimplebackend.dev/hello')
xhr3.send();



// Error handling

const xhr4 = new XMLHttpRequest()

xhr4.addEventListener('error', (error) => {
  
  // c.error will show it like a proper error with red background
  console.error('error, try again') // error, try again
  console.error(error) // (info about error)

});

// this url doesn't exist, it's for error practice
xhr4.open('GET', 'https://error.supersimplebackend.dev/hello')
xhr4.send();
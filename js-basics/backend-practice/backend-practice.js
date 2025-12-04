// XMLHttpRequest = built-in class to send HTTP requests to backend computers/servers
const xhr = new XMLHttpRequest();

xhr.responseType = 'blob';

// setup load event listener
// 'load' fires when a resource or request finishes loading completely
// like how 'keydown' event fires when user presses a key.
// 'load' is about completion, not user interaction
xhr.addEventListener('load', () => {
  const result = xhr.response

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
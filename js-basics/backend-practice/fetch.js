fetch('https://supersimplebackend.dev/hello').then((response) => {
  return response.text()
}).then((result) => {
  console.log(result) // This is the URL path /hello
})


fetch('https://supersimplebackend.dev/products').then((response) => {
  return response.json() // automatically does JSON.parse
}).then((result) => {
  console.log(result)
  // outputs json contents in an array format
  // in this example an array containing all products
})
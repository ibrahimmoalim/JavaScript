// IPv4 Binary to Decimal


const Binary = document.getElementById('input1')
const ConvertButton = document.getElementById('but1')

ConvertButton.addEventListener('click', () => {
  // .trim() gets rid of spaces at start or end of string
  const result = BinaryToDecimal(Binary.value.trim())

  document.getElementById('result').innerText = result
})

Binary.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {

    const result = BinaryToDecimal(Binary.value.trim())

    document.getElementById('result').innerText = result

  }
})



const errorMsg1 = 'Please insert an IPv4 address in Binary (4 bytes)'
const errorMsg2 = 'Please make sure the input format is correct and each Octet is exactly 8 numbers'

function BinaryToDecimal(Binary){

  if (!Binary) return errorMsg1
  if (Binary.length !== 35) return errorMsg1;

  const chart = [128,64,32,16,8,4,2,1]

  let firstOctetDecimal = 0
  let secondOctetDecimal = 0
  let thirdOctetDecimal = 0
  let fourthOctetDecimal = 0


  const octets = Binary.split('.')

  if (octets[0].length < 8) return errorMsg2

  const firstOctet = octets[0].split('')

  for (let i=0; i < chart.length; i++) {
    if (firstOctet[i] === '1') {
      firstOctetDecimal += chart[i]
    }
  };

  if (octets[1].length < 8) return errorMsg2
  
  const secondOctet = octets[1].split('')

  for (let i=0; i < chart.length; i++) {
    if (secondOctet[i] === '1') {
      secondOctetDecimal += chart[i]
    }
  };

  if (octets[2].length < 8) return errorMsg2

  const thirdOctet = octets[2].split('')

  for (let i=0; i < chart.length; i++) {
    if (thirdOctet[i] === '1') {
      thirdOctetDecimal += chart[i]
    }
  };

  if (octets[3].length < 8) return errorMsg2

  const fourthOctet = octets[3].split('')

  for (let i=0; i < chart.length; i++) {
    if (fourthOctet[i] === '1') {
      fourthOctetDecimal += chart[i]
    }
  };


  return `Result: ${firstOctetDecimal}.${secondOctetDecimal}.${thirdOctetDecimal}.${fourthOctetDecimal}`

}
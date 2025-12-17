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


const Decimal = document.getElementById('input2')
const ConvertButtonTwo = document.getElementById('but2')

ConvertButtonTwo.addEventListener('click', () => {
  // .trim() gets rid of spaces at start or end of string
  const result = DeicmalToBinary(Decimal.value.trim())

  document.getElementById('result2').innerText = result
})

Decimal.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {

    const result = DeicmalToBinary(Decimal.value.trim())

    document.getElementById('result2').innerText = result
    // Decimal.value = ''

  }
})



const errorMsg1 = 'Please insert an IPv4 address in Binary (4 bytes)'
const errorMsg2 = 'Please make sure the input format is correct and each Octet is exactly 8 numbers'
const errorMsg3 = 'Please insert an IPv4 address in Decimal (4 bytes)'
const errorMsg4 = 'Please make sure the input format is correct'
const errorMsg5 = 'Please make sure the input format is correct and each Octet is correct length'
const errorMsg6 = 'Please make sure the input format is correct and each Octet is in 0-255 range'

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

function DeicmalToBinary(Decimal){

  // error checks
  if (!Decimal) return errorMsg3
  if (Decimal.length > 15 || Decimal.length < 7) return errorMsg4;

  const chart = [128,64,32,16,8,4,2,1]

  const octets = Decimal.split('.')

  // more error checks
  // if (octets.length !== 4) return errorMsg4

  if (octets[0].length > 3 || octets[0].length < 1) return errorMsg5
  if (octets[1].length > 3 || octets[1].length < 1) return errorMsg5
  if (octets[2].length > 3 || octets[2].length < 1) return errorMsg5
  if (octets[3].length > 3 || octets[3].length < 1) return errorMsg5



  let temp = 0


  let firstOctet = ''
  let secondOctet = ''
  let thirdOctet = ''
  let fourthOctet= ''

  let octetOne = Number(octets[0])

  // more error checks
  if (Number.isNaN(octetOne)) return errorMsg4
  if (octetOne < 0 || octetOne > 255) return errorMsg6

  for (let i=0; i < chart.length; i++) {

    if (octetOne >= chart[i]) {
      temp = octetOne - chart[i]
      firstOctet += 1
      octetOne = temp
    } else {
      firstOctet +=0
    }
  }  

  let octetTwo = Number(octets[1])

  if (Number.isNaN(octetTwo)) return errorMsg4
  if (octetTwo < 0 || octetTwo > 255) return errorMsg6

  for (let i=0; i < chart.length; i++) {

    if (octetTwo >= chart[i]) {
      temp = octetTwo - chart[i]
      secondOctet += 1
      octetTwo = temp
    } else {
      secondOctet +=0
    }

  }

  let octetThree = Number(octets[2])

  if (Number.isNaN(octetThree)) return errorMsg4
  if (octetThree < 0 || octetThree > 255) return errorMsg6

  for (let i=0; i < chart.length; i++) {

    if (octetThree >= chart[i]) {
      temp = octetThree - chart[i]
      thirdOctet += 1
      octetThree = temp
    } else {
      thirdOctet +=0
    }

  }

  let octetFour = Number(octets[3])

  if (Number.isNaN(octetFour)) return errorMsg4
  if (octetFour < 0 || octetFour > 255) return errorMsg6

  for (let i=0; i < chart.length; i++) {

    if (octetFour >= chart[i]) {
      temp = octetFour - chart[i]
      fourthOctet += 1
      octetFour = temp
    } else {
      fourthOctet +=0
    }

  }

  return `Result: ${firstOctet}.${secondOctet}.${thirdOctet}.${fourthOctet}`

}
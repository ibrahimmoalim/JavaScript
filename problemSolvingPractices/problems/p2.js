/*
  let x = height of man
  let y = height of parrot

  x + y = 200

  y = 200 - x

  x = (200 - x) + 170

  x - 170 = 200 - x

  2x = 170 + 200

  2x = 370

  x = 185

  y = x - 170

  y = 185 - 170

  y = 15
*/


let parrotHeight = 0

let humanHeight = 0

function calculateParrotHeight(totalHeight, humanMinusParrot){
  
  humanHeight = (totalHeight + humanMinusParrot) /2

  parrotHeight = humanHeight - humanMinusParrot

  console.log(parrotHeight)
}

calculateParrotHeight(200, 170) // 15
calculateParrotHeight(300, 150) // 75
calculateParrotHeight(250, 190) // 30
calculateParrotHeight(150, 85) // 32.5
let result = {}

let fruit = []

let veg = []

const given = [
  {type: "fruit", name: "apple"},
  {type: "veg", name: "carrot"},
  {type: "fruit", name: "banana"},
]

given.forEach(value => {
  if (value.type === 'fruit') {
    fruit.push(value.name)
  }
  if (value.type === 'veg') {
    veg.push(value.name)
  }
})

// console.log(fruit)
// console.log(veg)

result = {
  fruit,
  veg
}

console.log(result)